// כלי עזר לחישובי IP

export const parseIp = (s) => {
  const p = String(s).trim().split('.');
  if (p.length !== 4) return null;
  const o = p.map((x) => (/^\d{1,3}$/.test(x) ? +x : NaN));
  if (o.some((n) => isNaN(n) || n < 0 || n > 255)) return null;
  return o;
};
export const ipToInt = (o) => (((o[0] << 24) >>> 0) + (o[1] << 16) + (o[2] << 8) + o[3]) >>> 0;
export const intToIp = (n) => [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255];
export const fmt = (o) => o.join('.');
export const bin8 = (n) => n.toString(2).padStart(8, '0');
export const ipBits = (o) => o.map(bin8).join('');
export const maskFromPrefix = (p) => intToIp(p === 0 ? 0 : (0xffffffff << (32 - p)) >>> 0);
export const prefixFromMask = (m) => {
  const bits = ipBits(m);
  const ones = bits.indexOf('0');
  return ones === -1 ? 32 : ones;
};
export const isValidMask = (m) => /^1*0*$/.test(ipBits(m));
export const networkOf = (ip, prefix) => intToIp(ipToInt(ip) & ipToInt(maskFromPrefix(prefix)));
export const broadcastOf = (ip, prefix) => intToIp((ipToInt(ip) | (~ipToInt(maskFromPrefix(prefix)) >>> 0)) >>> 0);
export const hostsCount = (prefix) => Math.max(0, 2 ** (32 - prefix) - 2);
export const sameNetwork = (a, b, prefix) => fmt(networkOf(a, prefix)) === fmt(networkOf(b, prefix));
export const firstHost = (ip, prefix) => intToIp(ipToInt(networkOf(ip, prefix)) + 1);
export const lastHost = (ip, prefix) => intToIp(ipToInt(broadcastOf(ip, prefix)) - 1);
export const inRange = (ip, lo, hi) => ipToInt(ip) >= ipToInt(lo) && ipToInt(ip) <= ipToInt(hi);

export function classOf(o) {
  const a = o[0];
  if (a === 0) return '—';
  if (a < 127) return 'A';
  if (a === 127) return 'Loopback';
  if (a < 192) return 'B';
  if (a < 224) return 'C';
  if (a < 240) return 'D';
  return 'E';
}

export function isPrivate(o) {
  return o[0] === 10 || (o[0] === 172 && o[1] >= 16 && o[1] <= 31) || (o[0] === 192 && o[1] === 168);
}
export const isLoopback = (o) => o[0] === 127;
export const isApipa = (o) => o[0] === 169 && o[1] === 254;
export const isMulticast = (o) => o[0] >= 224 && o[0] <= 239;

export function randOctet(a = 1, b = 254) {
  return a + Math.floor(Math.random() * (b - a + 1));
}
export function randPrivate() {
  const r = Math.random();
  if (r < 0.34) return [10, randOctet(0, 255), randOctet(0, 255), randOctet(1, 254)];
  if (r < 0.67) return [172, randOctet(16, 31), randOctet(0, 255), randOctet(1, 254)];
  return [192, 168, randOctet(0, 255), randOctet(1, 254)];
}
export function randPublic() {
  for (;;) {
    const o = [randOctet(1, 223), randOctet(0, 255), randOctet(0, 255), randOctet(1, 254)];
    if (isPrivate(o) || isLoopback(o) || isApipa(o) || o[0] === 100 || o[0] === 0 || o[0] === 169 || (o[0] === 172) || o[0] === 192 && o[1] === 0 || o[0] === 198 && (o[1] === 18 || o[1] === 19) ) continue;
    return o;
  }
}
