import { h } from '../util.js';
import { sfx } from '../audio.js';
import { parseIp, ipToInt, intToIp, fmt, maskFromPrefix, prefixFromMask, networkOf, broadcastOf, hostsCount, isValidMask, sameNetwork } from './ip.js';

// =====================================================================
// רכיב מסוף כללי
// =====================================================================
export function makeTerminal({ theme = 'win', prompt = 'C:\\>', title = '', onCommand, hints = [], placeholder = 'הקלד פקודה…', onTab, onHelp }) {
  const out = h('div', { class: 'term-out', dir: 'ltr' });
  const pEl = h('span', { class: 'term-prompt' }, prompt);
  const input = h('input', { class: 'term-in', type: 'text', spellcheck: 'false', autocomplete: 'off', autocapitalize: 'off', placeholder, dir: 'ltr' });
  const line = h('div', { class: 'term-line', dir: 'ltr' }, pEl, input);
  const chips = h('div', { class: 'term-chips' });
  const el = h('div', { class: 'term ' + theme },
    h('div', { class: 'term-bar' }, h('i', {}), h('i', {}), h('i', {}), h('span', {}, title)),
    out, line, hints.length ? chips : null);
  const hist = [];
  let hi = 0, busy = false;
  const t = {
    el,
    input,
    prompt: prompt,
    setPrompt(p) { t.prompt = p; pEl.textContent = p; },
    print(text, cls = '') {
      const parts = String(text).split('\n');
      let last = null;
      for (const p of parts) { last = h('div', { class: 'term-row ' + cls }, p === '' ? '\u00a0' : p); out.append(last); }
      out.scrollTop = out.scrollHeight;
      return last;
    },
    clear() { out.innerHTML = ''; },
    focus() { input.focus(); },
    async run(cmd, echo = true) {
      if (busy) return;
      if (echo) t.print(t.prompt + cmd, 'cmd');
      if (cmd.trim()) { hist.push(cmd); hi = hist.length; }
      busy = true;
      line.classList.add('busy');
      try {
        await onCommand(cmd, (l, cls) => t.print(l, cls), t);
      } finally {
        busy = false;
        line.classList.remove('busy');
        out.scrollTop = out.scrollHeight;
        input.focus();
      }
    },
  };
  input.addEventListener('keydown', (e) => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      const v = input.value;
      input.value = '';
      t.run(v);
      sfx('tick');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (hi > 0) input.value = hist[--hi];
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (hi < hist.length - 1) input.value = hist[++hi];
      else { hi = hist.length; input.value = ''; }
    } else if (e.key === 'Tab' && onTab) {
      e.preventDefault();
      const r = onTab(input.value);
      if (r !== undefined && r !== null) input.value = r;
    } else if (e.key === '?' && onHelp) {
      e.preventDefault();
      const v = input.value;
      t.print(t.prompt + v + '?', 'cmd');
      onHelp(v, (l) => t.print(l));
    }
  });
  input.addEventListener('keyup', (e) => e.stopPropagation());
  hints.forEach((c) => chips.append(h('button', { class: 'chip', onclick: () => { input.value = ''; t.run(c); } }, c)));
  el.addEventListener('click', () => input.focus());
  t.chips = chips;
  return t;
}

// =====================================================================
// מחשב Windows מדומה (ipconfig / ping)
// =====================================================================
export class WinHost {
  constructor(o = {}) {
    this.mode = o.mode || 'static'; // static | dhcp
    this.ip = o.ip || '192.168.1.50';
    this.mask = o.mask || '255.255.255.0';
    this.gw = o.gw || '192.168.1.1';
    this.dns = o.dns || '8.8.8.8';
    this.mac = o.mac || '00-1A-2B-3C-4D-5E';
    // סביבה
    this.env = Object.assign({
      dhcpOn: true,
      gateway: '192.168.1.1',
      internet: true,
      devices: ['192.168.1.1', '192.168.1.20', '192.168.1.30'],
      pool: ['192.168.1.101', '192.168.1.102', '192.168.1.103'],
      poolMask: '255.255.255.0',
      poolGw: '192.168.1.1',
      poolDns: '8.8.8.8',
      server: '192.168.1.1',
    }, o.env || {});
    this.leaseIdx = 0;
    this.onChange = o.onChange || (() => {});
    this.leaseStart = new Date();
  }

  netOk() {
    const m = parseIp(this.mask), i = parseIp(this.ip);
    return !!(m && i);
  }

  async run(cmdline, out, wait) {
    const raw = cmdline.trim();
    const parts = raw.split(/\s+/);
    const cmd = (parts[0] || '').toLowerCase();
    if (!raw) return;
    if (cmd === 'ipconfig') {
      const a = (parts[1] || '').toLowerCase();
      if (a === '/all') return out(this.ipconfig(true));
      if (a === '/release') return this.release(out);
      if (a === '/renew') return this.renew(out, wait);
      if (a === '/flushdns') return out('\nWindows IP Configuration\n\nSuccessfully flushed the DNS Resolver Cache.');
      if (a === '' || a === '/displaydns') return out(this.ipconfig(false));
      return out('\nError: unrecognized or incomplete command line.\n\nUSAGE:\n    ipconfig [/allcompartments] [/? | /all |\n                                 /renew [adapter] | /release [adapter] |\n                                 /flushdns | /displaydns]');
    }
    if (cmd === 'ping') return this.ping(parts[1], out, wait);
    if (cmd === 'hostname') return out('STUDENT-PC');
    if (cmd === 'cls' || cmd === 'clear') return 'clear';
    if (cmd === 'help' || cmd === '?') return out('הפקודות הנתמכות בסימולציה:\n  ipconfig            – הצגת הגדרות\n  ipconfig /all       – הצגה מפורטת\n  ipconfig /release   – שחרור כתובת DHCP\n  ipconfig /renew     – בקשת כתובת DHCP חדשה\n  ping <כתובת>        – בדיקת קישוריות\n  cls                 – ניקוי המסך');
    if (cmd === 'tracert') return out(`\nTracing route to ${parts[1] || '8.8.8.8'} over a maximum of 30 hops:\n\n  1    <1 ms    <1 ms    <1 ms  ${this.gw}\n  2     8 ms     9 ms     8 ms  10.20.0.1\n  3    12 ms    11 ms    12 ms  ${parts[1] || '8.8.8.8'}\n\nTrace complete.`);
    return out(`'${parts[0]}' is not recognized as an internal or external command,\noperable program or batch file.`);
  }

  ipconfig(all) {
    const hasIp = this.ip && this.ip !== '0.0.0.0';
    const L = [];
    L.push('', 'Windows IP Configuration', '');
    if (all) L.push('   Host Name . . . . . . . . . . . . : STUDENT-PC', '   Primary Dns Suffix  . . . . . . . :', '   IP Routing Enabled. . . . . . . . : No', '');
    L.push('Ethernet adapter Ethernet:', '');
    L.push('   Connection-specific DNS Suffix  . :');
    if (all) {
      L.push('   Description . . . . . . . . . . . : Intel(R) Ethernet Connection', `   Physical Address. . . . . . . . . : ${this.mac}`, `   DHCP Enabled. . . . . . . . . . . : ${this.mode === 'dhcp' ? 'Yes' : 'No'}`, '   Autoconfiguration Enabled . . . . : Yes');
    }
    const apipa = this.apipa;
    L.push(`   ${apipa ? 'Autoconfiguration IPv4 Address' : 'IPv4 Address. . . . . . . . . . . '}${apipa ? '. : ' : ': '}${hasIp ? this.ip : ''}${apipa ? '(Preferred)' : all && hasIp ? '(Preferred)' : ''}`);
    L.push(`   Subnet Mask . . . . . . . . . . . : ${hasIp ? this.mask : ''}`);
    if (all && this.mode === 'dhcp' && hasIp && !apipa) {
      const d = this.leaseStart;
      const e = new Date(d.getTime() + 8 * 3600 * 1000);
      const f = (x) => x.toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true });
      L.push(`   Lease Obtained. . . . . . . . . . : ${f(d)}`, `   Lease Expires . . . . . . . . . . : ${f(e)}`);
    }
    L.push(`   Default Gateway . . . . . . . . . : ${hasIp ? this.gw || '' : ''}`);
    if (all) {
      if (this.mode === 'dhcp' && hasIp && !apipa) L.push(`   DHCP Server . . . . . . . . . . . : ${this.env.server}`);
      L.push(`   DNS Servers . . . . . . . . . . . : ${hasIp ? this.dns || '' : ''}`);
    }
    return L.join('\n');
  }

  get apipa() {
    return this.ip.startsWith('169.254.');
  }

  release(out) {
    if (this.mode !== 'dhcp') return out('\nThe operation failed as no adapter is in the state permissible for this operation.');
    this.ip = '0.0.0.0'; this.mask = '0.0.0.0'; this.gw = ''; this.dns = '';
    this.onChange(this, 'release');
    out(this.ipconfig(false));
  }

  async renew(out, wait) {
    if (this.mode !== 'dhcp') return out('\nThe requested operation requires elevation or the adapter is configured with a static address.\nThe operation failed as no adapter is in the state permissible for this operation.');
    out('\nWindows IP Configuration\n');
    this.onChange(this, 'discover');
    await wait(900);
    if (!this.env.dhcpOn) {
      await wait(1200);
      out('An error occurred while renewing interface Ethernet : unable to contact your DHCP server. Request has timed out.');
      this.ip = '169.254.' + (20 + Math.floor(Math.random() * 200)) + '.' + (10 + Math.floor(Math.random() * 200));
      this.mask = '255.255.0.0'; this.gw = ''; this.dns = '';
      this.onChange(this, 'apipa');
      return;
    }
    const pool = this.env.pool;
    this.ip = pool[this.leaseIdx++ % pool.length];
    this.mask = this.env.poolMask; this.gw = this.env.poolGw; this.dns = this.env.poolDns;
    this.leaseStart = new Date();
    this.onChange(this, 'bound');
    out(this.ipconfig(false));
  }

  async ping(target, out, wait) {
    if (!target) return out('\nUsage: ping [-t] [-a] [-n count] [-l size] target_name');
    let t = target;
    let resolved = null;
    const ipT = parseIp(t);
    if (!ipT) {
      if (t.toLowerCase() === 'localhost') { resolved = '127.0.0.1'; }
      else {
        if (!this.dns || this.ip === '0.0.0.0') return out(`\nPing request could not find host ${t}. Please check the name and try again.`);
        if (!this.env.internet) return out(`\nPing request could not find host ${t}. Please check the name and try again.`);
        resolved = '142.250.185.78';
      }
    } else resolved = t;
    const r = resolved;
    const label = ipT ? r : `${t} [${r}]`;
    out(`\nPinging ${label} with 32 bytes of data:`);
    const res = this.reach(r);
    const times = [];
    for (let i = 0; i < 4; i++) {
      await wait(res.ok ? 450 : 900);
      if (res.ok) {
        const ms = res.ms + Math.floor(Math.random() * 3);
        times.push(ms);
        out(`Reply from ${r}: bytes=32 time${ms <= 1 ? '<1' : '='}${ms <= 1 ? '' : ms}ms TTL=${res.ttl}`);
      } else out(res.msg);
    }
    const ok = res.ok ? 4 : 0;
    out(`\nPing statistics for ${r}:\n    Packets: Sent = 4, Received = ${res.unreach ? 4 : ok}, Lost = ${res.unreach ? 0 : 4 - ok} (${res.unreach ? 0 : ((4 - ok) / 4) * 100}% loss),`);
    if (res.ok) out(`Approximate round trip times in milli-seconds:\n    Minimum = ${Math.min(...times)}ms, Maximum = ${Math.max(...times)}ms, Average = ${Math.round(times.reduce((a, b) => a + b, 0) / 4)}ms`);
    this.lastPing = { target: r, ok: res.ok };
  }

  reach(r) {
    const me = this.ip;
    const unreachMsg = `Reply from ${me}: Destination host unreachable.`;
    if (r === '127.0.0.1' || r.startsWith('127.')) return { ok: true, ms: 0, ttl: 128 };
    if (me === '0.0.0.0') return { ok: false, msg: 'PING: transmit failed. General failure.' };
    if (r === me) return { ok: true, ms: 0, ttl: 128 };
    const mi = parseIp(me), mm = parseIp(this.mask), ri = parseIp(r);
    if (!mi || !mm || !ri) return { ok: false, msg: 'PING: transmit failed. General failure.' };
    const prefix = prefixFromMask(mm);
    // אותה רשת
    if (sameNetwork(mi, ri, prefix)) {
      // כתובת בחיבור בה אנו באותה רשת בפועל? נבדוק מול הסביבה
      const realNet = parseIp(this.env.gateway);
      if (realNet && !sameNetwork(realNet, mi, prefix > 0 ? Math.min(prefix, 24) : 24) && sameNetwork(realNet, mi, 24) === false) {
        return { ok: false, msg: unreachMsg, unreach: true };
      }
      if (this.env.devices.includes(r) || r === this.env.gateway) return { ok: true, ms: 1, ttl: 128 };
      return { ok: false, msg: unreachMsg, unreach: true };
    }
    // רשת אחרת – צריך שער
    if (!this.gw) return { ok: false, msg: 'PING: transmit failed. General failure.' };
    const gi = parseIp(this.gw);
    if (!gi || !sameNetwork(gi, mi, prefix)) return { ok: false, msg: 'PING: transmit failed. General failure.' };
    if (this.gw !== this.env.gateway) return { ok: false, msg: unreachMsg, unreach: true };
    if (!this.env.internet) return { ok: false, msg: 'Request timed out.' };
    return { ok: true, ms: 12, ttl: 117 };
  }
}

// =====================================================================
// סימולטור CLI של סיסקו
// =====================================================================
const MODES = {
  user: '>', priv: '#', config: '(config)#', if: '(config-if)#', dhcp: '(dhcp-config)#',
};

const IFNAMES = [['gigabitethernet', 'GigabitEthernet'], ['fastethernet', 'FastEthernet'], ['ethernet', 'Ethernet'], ['serial', 'Serial']];

export class CiscoSim {
  constructor(o = {}) {
    this.hostname = o.hostname || 'Router';
    this.mode = o.mode || 'user';
    this.ifaces = {
      'GigabitEthernet0/0': { ip: null, mask: null, up: false, desc: '', helper: [] },
      'GigabitEthernet0/1': { ip: null, mask: null, up: false, desc: '', helper: [] },
    };
    this.excluded = [];
    this.pools = {};
    this.bindings = [];
    this.stats = { discover: 0, request: 0, offer: 0, ack: 0 };
    this.serviceDhcp = true;
    this.curIf = null;
    this.curPool = null;
    this.debug = false;
    this.saved = false;
    this.macSeq = 0;
    this.log = [];
  }

  get prompt() {
    if (this.mode === 'if' || this.mode === 'dhcp') return this.hostname + MODES[this.mode];
    return this.hostname + MODES[this.mode];
  }

  // ---------- פענוח פקודות ----------
  commands() {
    const C = [];
    const add = (modes, pat, fn, help) => C.push({ modes: modes.split(' '), pat: pat.split(' '), fn, help });
    // כל המצבים
    add('user priv config if dhcp', 'exit', () => this.exit());
    add('priv config if dhcp', 'end', () => { this.mode = 'priv'; });
    add('user', 'enable', () => { this.mode = 'priv'; });
    add('priv', 'disable', () => { this.mode = 'user'; });
    add('priv', 'configure terminal', () => { this.mode = 'config'; return 'Enter configuration commands, one per line.  End with CNTL/Z.'; });
    add('priv', 'show ip interface brief', () => this.showIpIntBrief());
    add('user priv', 'show ip interface brief', () => this.showIpIntBrief());
    add('priv', 'show running-config', () => this.showRun());
    add('priv', 'show ip dhcp binding', () => this.showBinding());
    add('priv', 'show ip dhcp pool <name?>', (a) => this.showPool(a.name));
    add('priv', 'show ip dhcp server statistics', () => this.showStats());
    add('priv', 'show ip dhcp conflict', () => 'IP address        Detection method   Detection time          VRF');
    add('priv', 'show version', () => 'Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.1(4)M4\nRouter uptime is 12 minutes');
    add('priv', 'write memory', () => { this.saved = true; return 'Building configuration...\n[OK]'; });
    add('priv', 'copy running-config startup-config', () => { this.saved = true; return 'Destination filename [startup-config]? \nBuilding configuration...\n[OK]'; });
    add('priv', 'clear ip dhcp binding *', () => { this.bindings = []; });
    add('priv', 'debug ip dhcp server events', () => { this.debug = true; return 'DHCP server event debugging is on.'; });
    add('priv', 'undebug all', () => { this.debug = false; return 'All possible debugging has been turned off'; });
    add('priv', 'ping <ip>', (a) => this.ping(a.ip));
    add('config', 'hostname <name>', (a) => { this.hostname = a.name; });
    add('config', 'interface <type> <num?>', (a) => this.enterIf(a));
    add('config', 'ip dhcp excluded-address <lo> <hi?>', (a) => this.addExcl(a));
    add('config', 'ip dhcp pool <name>', (a) => { this.curPool = a.name; this.pools[a.name] ||= { network: null, mask: null, router: null, dns: [], lease: null, domain: null }; this.mode = 'dhcp'; });
    add('config', 'no ip dhcp excluded-address <lo> <hi?>', (a) => this.delExcl(a));
    add('config', 'no ip dhcp pool <name>', (a) => { delete this.pools[a.name]; });
    add('config', 'no service dhcp', () => { this.serviceDhcp = false; });
    add('config', 'service dhcp', () => { this.serviceDhcp = true; });
    add('config', 'ip dhcp conflict logging', () => {});
    add('config if dhcp', 'do <rest*>', (a) => this.doCmd(a.rest));
    add('if', 'ip address <ip> <mask>', (a) => this.setIfIp(a));
    add('if', 'no shutdown', () => { this.ifaces[this.curIf].up = true; return `%LINK-5-CHANGED: Interface ${this.curIf}, changed state to up\n%LINEPROTO-5-UPDOWN: Line protocol on Interface ${this.curIf}, changed state to up`; });
    add('if', 'shutdown', () => { this.ifaces[this.curIf].up = false; return `%LINK-5-CHANGED: Interface ${this.curIf}, changed state to administratively down`; });
    add('if', 'description <rest*>', (a) => { this.ifaces[this.curIf].desc = a.rest; });
    add('if', 'ip helper-address <ip>', (a) => this.setHelper(a));
    add('if', 'interface <type> <num?>', (a) => this.enterIf(a));
    add('dhcp', 'network <ip> <mask>', (a) => this.setNetwork(a));
    add('dhcp', 'default-router <ip>', (a) => this.setRouter(a));
    add('dhcp', 'dns-server <ips*>', (a) => this.setDns(a));
    add('dhcp', 'domain-name <name>', (a) => { this.pools[this.curPool].domain = a.name; });
    add('dhcp', 'lease <d> <hh?> <mm?>', (a) => this.setLease(a));
    add('dhcp', 'ip dhcp pool <name>', (a) => { this.curPool = a.name; this.pools[a.name] ||= { network: null, mask: null, router: null, dns: [], lease: null }; });
    return C;
  }

  allowed(c) {
    return c.modes.includes(this.mode);
  }

  tokenize(line) {
    return line.trim().split(/\s+/).filter(Boolean);
  }

  isPh(w) { return w.startsWith('<'); }

  // התאמה: מחזיר {cmd, args} או {err}
  match(toks) {
    const cmds = this.commands().filter((c) => this.allowed(c));
    let cand = cmds;
    const args = {};
    for (let i = 0; i < toks.length; i++) {
      const w = toks[i];
      const next = [];
      for (const c of cand) {
        const p = c.pat[i] ?? (c.pat[c.pat.length - 1]?.endsWith('*>') ? c.pat[c.pat.length - 1] : undefined);
        if (p === undefined) continue;
        if (this.isPh(p)) next.push(c);
        else if (p.startsWith(w.toLowerCase())) next.push(c);
      }
      if (!next.length) return { err: 'invalid', at: i };
      // העדפת התאמה מדויקת במילה זו
      const exact = next.filter((c) => { const p = c.pat[i]; return p && !this.isPh(p) && p === w.toLowerCase(); });
      cand = exact.length ? exact : next;
      // דו-משמעות בין מילים שונות
      const words = new Set(cand.map((c) => (this.isPh(c.pat[i] || '') ? '<ph>' : c.pat[i])));
      const lit = [...words].filter((x) => x !== '<ph>' && x !== undefined);
      if (lit.length > 1 && !exact.length) return { err: 'ambiguous', at: i };
    }
    // בחירת פקודה שהושלמה
    const full = cand.filter((c) => {
      const req = c.pat.filter((p) => !p.endsWith('?>') && !p.endsWith('*>'));
      return toks.length >= req.length;
    });
    if (!full.length) return { err: 'incomplete' };
    // העדפה: הכי ספציפית (פחות placeholder)
    full.sort((a, b) => a.pat.length - b.pat.length);
    const c = full.find((x) => x.pat.length === toks.length) || full[0];
    c.pat.forEach((p, i) => {
      if (this.isPh(p)) {
        const key = p.replace(/[<>?*]/g, '');
        if (p.endsWith('*>')) args[key] = toks.slice(i).join(' ');
        else if (toks[i] !== undefined) args[key] = toks[i];
      }
    });
    if (toks.length > c.pat.length && !c.pat[c.pat.length - 1].endsWith('*>')) return { err: 'invalid', at: c.pat.length };
    return { cmd: c, args };
  }

  // הרצת פקודה: מחזיר מחרוזת פלט
  applyFilter(text, f) {
    const lines = String(text).split('\n');
    const t = f.text.toLowerCase();
    if (f.type.startsWith('i')) return lines.filter((l) => l.toLowerCase().includes(t)).join('\n');
    if (f.type.startsWith('e')) return lines.filter((l) => !l.toLowerCase().includes(t)).join('\n');
    if (f.type.startsWith('b')) {
      const i = lines.findIndex((l) => l.toLowerCase().includes(t));
      return i < 0 ? '' : lines.slice(i).join('\n');
    }
    if (f.type.startsWith('s')) {
      const out = [];
      let on = false;
      for (const l of lines) {
        if (!l.startsWith(' ') && l.trim() !== '!') on = l.toLowerCase().includes(t);
        if (on) out.push(l);
      }
      return out.join('\n');
    }
    return text;
  }

  exec(line) {
    let raw = line.replace(/\s+$/, '');
    if (!raw.trim()) return '';
    const pi = raw.indexOf('|');
    if (pi >= 0) {
      const f = raw.slice(pi + 1).trim().split(/\s+/);
      const base = this.exec(raw.slice(0, pi));
      return f.length >= 2 ? this.applyFilter(base, { type: f[0], text: f.slice(1).join(' ') }) : '% Incomplete command.';
    }
    const toks = this.tokenize(raw);
    const m = this.match(toks);
    if (m.err === 'invalid') {
      const pos = raw.split(/\s+/).slice(0, m.at).join(' ').length + (m.at > 0 ? 1 : 0);
      return ' '.repeat(this.prompt.length + pos) + '^\n% Invalid input detected at \'^\' marker.\n';
    }
    if (m.err === 'ambiguous') return `% Ambiguous command:  "${raw}"`;
    if (m.err === 'incomplete') return '% Incomplete command.';
    const r = m.cmd.fn(m.args);
    this.log.push(raw);
    return typeof r === 'string' ? r : '';
  }

  doCmd(rest) {
    const old = this.mode;
    this.mode = 'priv';
    const res = this.exec(rest);
    this.mode = old;
    return res;
  }

  exit() {
    const map = { if: 'config', dhcp: 'config', config: 'priv', priv: 'user', user: 'user' };
    this.mode = map[this.mode];
  }

  help(line) {
    const toks = this.tokenize(line);
    const trailingSpace = /\s$/.test(line) || toks.length === 0;
    const cmds = this.commands().filter((c) => this.allowed(c));
    const idx = trailingSpace ? toks.length : toks.length - 1;
    const prefix = trailingSpace ? '' : (toks[toks.length - 1] || '').toLowerCase();
    let cand = cmds.filter((c) => {
      for (let i = 0; i < idx; i++) {
        const p = c.pat[i];
        if (p === undefined) return false;
        if (!this.isPh(p) && !p.startsWith(toks[i].toLowerCase())) return false;
      }
      return true;
    });
    const words = new Map();
    for (const c of cand) {
      const p = c.pat[idx];
      if (p === undefined) { words.set('<cr>', ''); continue; }
      if (this.isPh(p)) { if (!prefix) words.set(p.replace('?', '').replace('*', ''), ''); }
      else if (p.startsWith(prefix)) words.set(p, '');
      if (c.pat.slice(idx).every((q) => q.endsWith('?>') || q.endsWith('*>'))) words.set('<cr>', '');
    }
    return [...words.keys()].sort().map((w) => '  ' + w).join('\n') || '% Unrecognized command';
  }

  complete(line) {
    const toks = this.tokenize(line);
    if (!toks.length || /\s$/.test(line)) return null;
    const idx = toks.length - 1;
    const w = toks[idx].toLowerCase();
    const cands = new Set();
    for (const c of this.commands().filter((x) => this.allowed(x))) {
      let ok = true;
      for (let i = 0; i < idx; i++) { const p = c.pat[i]; if (p === undefined || (!this.isPh(p) && !p.startsWith(toks[i].toLowerCase()))) { ok = false; break; } }
      const p = c.pat[idx];
      if (ok && p && !this.isPh(p) && p.startsWith(w)) cands.add(p);
    }
    if (cands.size === 1) return toks.slice(0, idx).concat([...cands][0]).join(' ') + ' ';
    return null;
  }

  // ---------- מימוש ----------
  normIf(type, num) {
    let t = String(type).toLowerCase();
    let n = num;
    const mm = t.match(/^([a-z-]+)(\d.*)$/);
    if (mm && !n) { t = mm[1]; n = mm[2]; }
    for (const [low, full] of IFNAMES) if (low.startsWith(t) || (t.length >= 2 && low.startsWith(t.replace(/^gi$/, 'gigabitethernet')))) {
      if (t === 'g' || t === 'gi' || t === 'gig') return 'GigabitEthernet' + n;
      if (t === 'f' || t === 'fa') return 'FastEthernet' + n;
      if (low.startsWith(t)) return full + n;
    }
    return null;
  }

  enterIf(a) {
    const name = this.normIf(a.type, a.num);
    if (!name || !this.ifaces[name]) return `% Invalid interface type and number`;
    this.curIf = name;
    this.mode = 'if';
  }

  setIfIp(a) {
    const ip = parseIp(a.ip), mask = parseIp(a.mask);
    if (!ip || !mask || !isValidMask(mask)) return '% Invalid input detected at \'^\' marker.';
    this.ifaces[this.curIf].ip = fmt(ip);
    this.ifaces[this.curIf].mask = fmt(mask);
  }

  setHelper(a) {
    const ip = parseIp(a.ip);
    if (!ip) return '% Invalid input detected at \'^\' marker.';
    this.ifaces[this.curIf].helper.push(fmt(ip));
  }

  addExcl(a) {
    const lo = parseIp(a.lo), hi = parseIp(a.hi || a.lo);
    if (!lo || !hi) return '% Invalid input detected at \'^\' marker.';
    if (ipToInt(hi) < ipToInt(lo)) return '% Invalid input detected at \'^\' marker.';
    this.excluded.push([fmt(lo), fmt(hi)]);
  }

  delExcl(a) {
    const lo = a.lo, hi = a.hi || a.lo;
    this.excluded = this.excluded.filter(([x, y]) => !(x === lo && y === hi));
  }

  setNetwork(a) {
    const ip = parseIp(a.ip);
    let mask = parseIp(a.mask);
    if (!mask && /^\/\d+$/.test(a.mask)) mask = maskFromPrefix(+a.mask.slice(1));
    if (!ip || !mask || !isValidMask(mask)) return '% Invalid input detected at \'^\' marker.';
    const p = this.pools[this.curPool];
    p.network = fmt(ip);
    p.mask = fmt(mask);
  }

  setRouter(a) {
    const ip = parseIp(a.ip);
    if (!ip) return '% Invalid input detected at \'^\' marker.';
    this.pools[this.curPool].router = fmt(ip);
  }

  setDns(a) {
    const l = a.ips.split(/\s+/).map(parseIp);
    if (l.some((x) => !x)) return '% Invalid input detected at \'^\' marker.';
    this.pools[this.curPool].dns = l.map(fmt);
  }

  setLease(a) {
    if (a.d === 'infinite') { this.pools[this.curPool].lease = 'infinite'; return; }
    const d = +a.d, hh = +(a.hh || 0), mm = +(a.mm || 0);
    if ([d, hh, mm].some((x) => isNaN(x) || x < 0)) return '% Invalid input detected at \'^\' marker.';
    this.pools[this.curPool].lease = { d, h: hh, m: mm };
  }

  ping(ipS) {
    const ip = parseIp(ipS);
    if (!ip) return '% Unrecognized host or address, or protocol not running.';
    const ok = Object.values(this.ifaces).some((i) => i.ip === fmt(ip) && i.up) || this.bindings.some((b) => b.ip === fmt(ip));
    return `Type escape sequence to abort.\nSending 5, 100-byte ICMP Echos to ${fmt(ip)}, timeout is 2 seconds:\n${ok ? '!!!!!\nSuccess rate is 100 percent (5/5), round-trip min/avg/max = 1/1/2 ms' : '.....\nSuccess rate is 0 percent (0/5)'}`;
  }

  // ---------- show ----------
  showIpIntBrief() {
    const rows = ['Interface              IP-Address      OK? Method Status                Protocol'];
    for (const [n, i] of Object.entries(this.ifaces)) {
      rows.push(`${n.padEnd(22)} ${(i.ip || 'unassigned').padEnd(15)} YES ${i.ip ? 'manual' : 'unset '} ${(i.up ? 'up' : 'administratively down').padEnd(21)} ${i.up ? 'up' : 'down'}`);
    }
    return rows.join('\n');
  }

  leaseStr(l) {
    if (!l) return null;
    if (l === 'infinite') return ' lease infinite';
    if (l.h || l.m) return ` lease ${l.d} ${l.h}${l.m ? ' ' + l.m : ''}`;
    return ` lease ${l.d}`;
  }

  showRun() {
    const L = ['Building configuration...', '', 'Current configuration : 1024 bytes', '!', 'version 15.1', '!', `hostname ${this.hostname}`, '!'];
    if (!this.serviceDhcp) L.push('no service dhcp', '!');
    for (const [a, b] of this.excluded) L.push(a === b ? `ip dhcp excluded-address ${a}` : `ip dhcp excluded-address ${a} ${b}`);
    for (const [n, p] of Object.entries(this.pools)) {
      L.push('!', `ip dhcp pool ${n}`);
      if (p.network) L.push(` network ${p.network} ${p.mask}`);
      if (p.router) L.push(` default-router ${p.router}`);
      if (p.dns.length) L.push(` dns-server ${p.dns.join(' ')}`);
      if (p.domain) L.push(` domain-name ${p.domain}`);
      const ls = this.leaseStr(p.lease);
      if (ls) L.push(ls);
    }
    L.push('!');
    for (const [n, i] of Object.entries(this.ifaces)) {
      L.push(`interface ${n}`);
      if (i.desc) L.push(` description ${i.desc}`);
      L.push(i.ip ? ` ip address ${i.ip} ${i.mask}` : ' no ip address');
      for (const hp of i.helper) L.push(` ip helper-address ${hp}`);
      L.push(' duplex auto', ' speed auto');
      if (!i.up) L.push(' shutdown');
      L.push('!');
    }
    L.push('end');
    return L.join('\n');
  }

  showBinding() {
    const L = ['Bindings from all pools not associated with VRF:', 'IP address          Client-ID/              Lease expiration        Type', '                    Hardware address/', '                    User name'];
    for (const b of this.bindings) L.push(`${b.ip.padEnd(19)} ${b.mac.padEnd(23)} ${b.exp.padEnd(23)} Automatic`);
    return L.join('\n');
  }

  poolInfo(name, p) {
    if (!p.network || !p.mask) return null;
    const prefix = prefixFromMask(parseIp(p.mask));
    const net = parseIp(p.network);
    const total = hostsCount(prefix);
    const leased = this.bindings.filter((b) => b.pool === name).length;
    return { prefix, net, total, leased, first: intToIp(ipToInt(networkOf(net, prefix)) + 1), last: intToIp(ipToInt(broadcastOf(net, prefix)) - 1) };
  }

  showPool(name) {
    const L = [];
    const names = name ? [name] : Object.keys(this.pools);
    for (const n of names) {
      const p = this.pools[n];
      if (!p) continue;
      const inf = this.poolInfo(n, p);
      L.push(`Pool ${n} :`, ' Utilization mark (high/low)    : 100 / 0', ' Subnet size (first/next)       : 0 / 0 ', ` Total addresses                : ${inf ? inf.total : 0}`, ` Leased addresses               : ${inf ? inf.leased : 0}`, ' Pending event                  : none', ' 1 subnet is currently in the pool :', ' Current index        IP address range                    Leased addresses');
      if (inf) {
        const idx = fmt(intToIp(ipToInt(inf.first) + inf.leased));
        L.push(` ${idx.padEnd(20)} ${fmt(inf.first).padEnd(15)} - ${fmt(inf.last).padEnd(15)} ${inf.leased}`);
      }
      L.push('');
    }
    return L.join('\n');
  }

  showStats() {
    const s = this.stats;
    return [`Memory usage         ${20000 + this.bindings.length * 300}`, `Address pools        ${Object.keys(this.pools).length}`, 'Database agents      0', 'Automatic bindings   ' + this.bindings.length, 'Manual bindings      0', 'Expired bindings     0', 'Malformed messages   0', 'Secure arp entries   0', '', 'Message              Received', 'BOOTREQUEST          0', `DHCPDISCOVER         ${s.discover}`, `DHCPREQUEST          ${s.request}`, 'DHCPDECLINE          0', 'DHCPRELEASE          0', 'DHCPINFORM           0', '', 'Message              Sent', 'BOOTREPLY            0', `DHCPOFFER            ${s.offer}`, `DHCPACK              ${s.ack}`, 'DHCPNAK              0'].join('\n');
  }

  // ---------- לקוח מדומה (DORA) ----------
  clientRequest(viaIf) {
    this.stats.discover++;
    if (!this.serviceDhcp) return { ok: false, why: 'שירות ה-DHCP כבוי בראוטר (no service dhcp).' };
    const ifc = viaIf ? this.ifaces[viaIf] : Object.values(this.ifaces).find((i) => i.ip && i.up);
    if (!ifc || !ifc.ip || !ifc.up) return { ok: false, why: 'הממשק של הראוטר לא מוגדר או כבוי (shutdown) – אין מי שיקבל את ה-Discover.' };
    const ifPrefix = prefixFromMask(parseIp(ifc.mask));
    // איתור מאגר מתאים לרשת הממשק
    let poolName = null;
    for (const [n, p] of Object.entries(this.pools)) {
      if (!p.network || !p.mask) continue;
      if (sameNetwork(parseIp(p.network), parseIp(ifc.ip), prefixFromMask(parseIp(p.mask))) && prefixFromMask(parseIp(p.mask)) === ifPrefix) { poolName = n; break; }
    }
    if (!poolName) return { ok: false, why: 'לא נמצא מאגר (pool) התואם לרשת של הממשק שקיבל את הבקשה.' };
    const p = this.pools[poolName];
    const inf = this.poolInfo(poolName, p);
    const used = new Set(this.bindings.map((b) => b.ip));
    Object.values(this.ifaces).forEach((i) => i.ip && used.add(i.ip));
    const isEx = (ipInt) => this.excluded.some(([a, b]) => ipInt >= ipToInt(parseIp(a)) && ipInt <= ipToInt(parseIp(b)));
    let found = null;
    for (let n = ipToInt(inf.first); n <= ipToInt(inf.last); n++) {
      if (isEx(n)) continue;
      const s = fmt(intToIp(n));
      if (used.has(s)) continue;
      found = s;
      break;
    }
    if (!found) return { ok: false, why: 'כל הכתובות במאגר תפוסות או מוחרגות.' };
    this.stats.offer++; this.stats.request++; this.stats.ack++;
    const mac = '0001.' + (0x6314 + this.macSeq * 977).toString(16).toUpperCase().padStart(4, '0') + '.' + (0x5d2a + this.macSeq * 313).toString(16).toUpperCase().padStart(4, '0');
    this.macSeq++;
    const days = p.lease && p.lease !== 'infinite' ? p.lease.d : 1;
    const exp = new Date(Date.now() + days * 86400000);
    const expS = exp.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).replace(',', '').replace(',', '');
    this.bindings.push({ ip: found, mac, pool: poolName, exp: expS });
    return { ok: true, ip: found, mask: p.mask, gw: p.router, dns: p.dns, lease: p.lease, pool: poolName, mac };
  }

  // תמצית הגדרות לבדיקה
  summary() {
    return {
      excluded: this.excluded.slice(),
      pools: JSON.parse(JSON.stringify(this.pools)),
      ifaces: JSON.parse(JSON.stringify(this.ifaces)),
    };
  }
}

// חיבור סימולטור סיסקו למסוף
export function ciscoTerminal(sim, opts = {}) {
  const term = makeTerminal({
    theme: 'cisco',
    prompt: sim.prompt,
    title: opts.title || 'Router CLI',
    hints: opts.hints || [],
    placeholder: opts.placeholder || 'הקלד פקודת IOS…',
    onCommand: async (cmd, out, t) => {
      if (cmd.trim() === '?') { out(sim.help('')); return; }
      const before = sim.mode;
      const res = sim.exec(cmd);
      if (res) out(res);
      t.setPrompt(sim.prompt);
      opts.onExec?.(cmd, res, sim, before);
    },
    onTab: (v) => sim.complete(v),
    onHelp: (v, out) => out(sim.help(v)),
  });
  term.print('Press RETURN to get started!\n');
  term.sim = sim;
  return term;
}
