// מידע בסיסי על אזורי הלימוד (בלי תוכן השיעור עצמו)
export const ZONES = [
  { id: 'z1', n: 1, name: 'מגדל הכתובות', topic: 'מבנה כתובת IP ולמה צריך אותה', icon: '🗼', color: '#4de1ff', game: 'רונות בינאריות', prof: 'פרופ׳ בינארי' },
  { id: 'z2', n: 2, name: 'אי הרשתות', topic: 'חלק הרשת וחלק המארח', icon: '🏝️', color: '#6c8bff', game: 'דואר ינשופים', prof: 'מאסטרית הרשתות' },
  { id: 'z3', n: 3, name: 'יער השערים', topic: 'כתובות פרטיות וציבוריות', icon: '🌲', color: '#3ddc97', game: 'שומרי השער', prof: 'שומר היער' },
  { id: 'z4', n: 4, name: 'ביצת הניצוצות', topic: 'כתובת סטטית ודינמית', icon: '🪷', color: '#c76bff', game: 'זיכרון הקסם', prof: 'המכשפה מהביצה' },
  { id: 'z5', n: 5, name: 'מערת הדרקון', topic: 'שרת DHCP ואיך הוא עובד', icon: '🐉', color: '#ff8a3a', game: 'שומר מאגר הכתובות', prof: 'שומר המערה' },
  { id: 'z6', n: 6, name: 'סדנת הקסמים', topic: 'הגדרת IP סטטי ו-DHCP במחשב', icon: '⚙️', color: '#ffd35c', game: 'תיקון הקסם הרשתי', prof: 'האמן הממציא' },
  { id: 'z7', n: 7, name: 'מגדל הראוטר', topic: 'הגדרת DHCP בראוטר סיסקו', icon: '📡', color: '#ff5a7a', game: 'ספר הפקודות', prof: 'מאסטר הראוטרים' },
];
export const zoneById = (id) => ZONES.find((z) => z.id === id);
