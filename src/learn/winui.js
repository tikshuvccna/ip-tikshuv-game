import { h } from '../util.js';
import { injectCss } from './anim.js';

injectCss('winui', `
.win{direction:ltr;background:#f0f0f0;color:#111;border:1px solid #7a7a7a;border-radius:8px;box-shadow:0 14px 40px rgba(0,0,0,.55);font:13px 'Segoe UI',Tahoma,Arial,sans-serif;overflow:hidden;text-align:left}
.win-title{background:linear-gradient(180deg,#fff,#e6e9f5);padding:6px 10px;display:flex;justify-content:space-between;align-items:center;font-size:12.5px;border-bottom:1px solid #bbb}
.win-title b{font-weight:600}.win-title i{font-style:normal;color:#555}
.win-body{padding:10px 14px}
.win-tabs{display:flex;gap:2px;margin-bottom:8px;border-bottom:1px solid #aaa}.win-tabs span{padding:4px 14px;border:1px solid #aaa;border-bottom:0;background:#fff;border-radius:4px 4px 0 0}
.win p{margin:4px 0}
.win-radio{display:flex;gap:8px;align-items:center;margin:5px 0;cursor:pointer;padding:2px 4px;border-radius:4px}
.win-radio:hover{background:#dbe8ff}
.win-radio .dot{width:14px;height:14px;border-radius:50%;border:1.5px solid #333;background:#fff;position:relative;flex-shrink:0}
.win-radio.on .dot::after{content:'';position:absolute;inset:2px;border-radius:50%;background:#0a5ad2}
.win-fields{margin:4px 0 6px 22px;display:grid;grid-template-columns:150px 1fr;gap:5px 8px;align-items:center}
.win-fields label{color:#222}
.win-fields.off label{color:#888}
.win-in{border:1px solid #7a7a7a;background:#fff;padding:3px 6px;font:13px 'Segoe UI',Tahoma,sans-serif;width:100%;min-width:0;height:24px;color:#000;border-radius:2px}
.win-in:disabled{background:#e4e4e4;color:#888}
.win-in.bad{border-color:#d83030;background:#ffe9e9}
.win-in.hl{outline:2px solid #ff9a00}
select.win-in{padding:2px 4px}
.win-btns{display:flex;justify-content:flex-end;gap:8px;padding:8px 14px;background:#f0f0f0;border-top:1px solid #ccc}
.win-btn{min-width:78px;padding:4px 10px;border:1px solid #888;background:linear-gradient(#fafafa,#e1e1e1);border-radius:3px;cursor:pointer;font:13px 'Segoe UI',sans-serif;color:#000}
.win-btn:hover{border-color:#0a5ad2;background:#e5f1fb}
.win-btn.primary{border-color:#0a5ad2}
.win-group{border:1px solid #ccc;border-radius:3px;padding:6px 8px;margin:6px 0;background:#f8f8f8}
.win.pt{background:#dfe6ef;border-color:#546;}
.win.pt .win-title{background:linear-gradient(180deg,#3b78c4,#2a5a9a);color:#fff}.win.pt .win-title i{color:#cfe}
.win-list{border:1px solid #888;background:#fff;margin:6px 0;max-height:130px;overflow:auto}
.win-list div{padding:3px 8px;display:flex;gap:8px;align-items:center}
.win-list div.sel{background:#cce4ff}.win-list div.hl{outline:2px solid #ff9a00}
.ctxmenu{background:#fff;border:1px solid #999;box-shadow:3px 3px 10px #0006;width:190px;font-size:13px}
.ctxmenu div{padding:4px 22px}.ctxmenu div.hl{background:#cce4ff;outline:2px solid #ff9a00}
.cp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.cp-item{padding:8px;border:1px solid transparent;border-radius:4px;text-align:center;font-size:12px}
.cp-item.hl{border-color:#ff9a00;background:#fff3d8}
.cp-link{color:#0a5ad2;text-decoration:underline;padding:4px 0}.cp-link.hl{outline:2px solid #ff9a00;background:#fff3d8}
`);

export function field(label, el) { return [h('label', {}, label), el]; }

// דיאלוג הגדרות IPv4 (כמו בווינדוס / Packet Tracer)
export function ipv4Dialog({ variant = 'win', mode = 'dhcp', values = {}, editable = true, onChange, onOk, selects = null } = {}) {
  const pt = variant === 'pt';
  const L = pt
    ? { ip: 'IPv4 Address', mask: 'Subnet Mask', gw: 'Default Gateway', dns: 'DNS Server' }
    : { ip: 'IP address:', mask: 'Subnet mask:', gw: 'Default gateway:', dns: 'Preferred DNS server:' };
  const ins = {};
  const mkIn = (key) => {
    let el;
    if (selects && selects[key]) {
      el = h('select', { class: 'win-in' }, h('option', { value: '' }, '— בחר —'), ...selects[key].map((v) => h('option', { value: v }, v)));
    } else {
      el = h('input', { class: 'win-in', type: 'text', spellcheck: 'false', autocomplete: 'off', dir: 'ltr' });
      el.addEventListener('keydown', (e) => e.stopPropagation());
      el.addEventListener('keyup', (e) => e.stopPropagation());
    }
    el.value = values[key] || '';
    el.addEventListener('input', () => { el.classList.remove('bad'); onChange && onChange(get()); });
    el.addEventListener('change', () => { el.classList.remove('bad'); onChange && onChange(get()); });
    ins[key] = el;
    return el;
  };
  const fields = h('div', { class: 'win-fields' }, ...field(L.ip, mkIn('ip')), ...field(L.mask, mkIn('mask')), ...field(L.gw, mkIn('gw')));
  const dnsFields = h('div', { class: 'win-fields' }, ...field(L.dns, mkIn('dns')));
  const dhcpRadio = h('div', { class: 'win-radio' }, h('span', { class: 'dot' }), pt ? 'DHCP' : 'Obtain an IP address automatically');
  const staticRadio = h('div', { class: 'win-radio' }, h('span', { class: 'dot' }), pt ? 'Static' : 'Use the following IP address:');
  const dnsAuto = h('div', { class: 'win-radio' }, h('span', { class: 'dot' }), 'Obtain DNS server address automatically');
  const dnsMan = h('div', { class: 'win-radio' }, h('span', { class: 'dot' }), 'Use the following DNS server addresses:');
  const ok = h('button', { class: 'win-btn primary', onclick: () => onOk && onOk(get()) }, 'OK');
  const el = h('div', { class: 'win' + (pt ? ' pt' : '') },
    h('div', { class: 'win-title' }, h('b', {}, pt ? 'PC0 – IP Configuration' : 'Internet Protocol Version 4 (TCP/IPv4) Properties'), h('i', {}, '✕')),
    h('div', { class: 'win-body' },
      pt ? null : h('div', { class: 'win-tabs' }, h('span', {}, 'General')),
      pt ? null : h('p', {}, 'You can get IP settings assigned automatically if your network supports this capability.'),
      dhcpRadio, staticRadio, fields,
      pt ? null : h('div', { class: 'win-group' }, dnsAuto, dnsMan, dnsFields),
      pt ? h('div', { class: 'win-fields' }, ...field(L.dns, ins.dns)) : null),
    h('div', { class: 'win-btns' }, ok, h('button', { class: 'win-btn' }, 'Cancel')));
  if (pt) { dnsFields.remove(); }
  let curMode = mode;
  const get = () => ({ mode: curMode, ip: ins.ip.value.trim(), mask: ins.mask.value.trim(), gw: ins.gw.value.trim(), dns: ins.dns.value.trim() });
  const setMode = (m) => {
    curMode = m;
    dhcpRadio.classList.toggle('on', m === 'dhcp');
    staticRadio.classList.toggle('on', m === 'static');
    dnsAuto.classList.toggle('on', m === 'dhcp');
    dnsMan.classList.toggle('on', m === 'static');
    for (const k of ['ip', 'mask', 'gw', 'dns']) ins[k].disabled = m === 'dhcp' || !editable;
    fields.classList.toggle('off', m === 'dhcp');
    dnsFields.classList.toggle('off', m === 'dhcp');
    onChange && onChange(get());
  };
  if (editable) {
    dhcpRadio.addEventListener('click', () => setMode('dhcp'));
    staticRadio.addEventListener('click', () => setMode('static'));
    dnsAuto.addEventListener('click', () => setMode('dhcp'));
    dnsMan.addEventListener('click', () => setMode('static'));
  }
  setMode(mode);
  return { el, ins, get, setMode, ok, setValues(v) { for (const k in v) ins[k].value = v[k]; onChange && onChange(get()); } };
}
