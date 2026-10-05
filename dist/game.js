(()=>{var Xd=0,Ih=1,qd=2;var _s=1,$d=2,mr=3,Zi=0,sn=1,we=2,mi=0,Ji=1,gi=2,Ph=3,Lh=4,Yd=5;var bs=100,Zd=101,Jd=102,Kd=103,jd=104,Qd=200,tf=201,ef=202,nf=203,Dh=204,Nh=205,sf=206,rf=207,of=208,af=209,lf=210,cf=211,hf=212,uf=213,df=214,Pa=0,La=1,Da=2,tr=3,Na=4,Ua=5,za=6,Fa=7,Uh=0,ff=1,pf=2,ii=0,zh=1,Fh=2,Bh=3,Ao=4,Oh=5,kh=6,Hh=7;var Vh=300,Ki=301,Ms=302,pl=303,ml=304,Ro=306,Gi=1e3,Vn=1001,Ba=1002,je=1003,mf=1004;var Co=1005;var $e=1006,gl=1007;var ji=1008;var dn=1009,Gh=1010,Wh=1011,gr=1012,xl=1013,si=1014,Xn=1015,ri=1016,yl=1017,vl=1018,xr=1020,Xh=35902,qh=35899,$h=1021,Yh=1022,qn=1023,ui=1026,Qi=1027,yr=1028,_l=1029,ts=1030,bl=1031;var Ml=1033,Io=33776,Po=33777,Lo=33778,Do=33779,Sl=35840,wl=35841,El=35842,Tl=35843,Al=36196,Rl=37492,Cl=37496,Il=37488,Pl=37489,No=37490,Ll=37491,Dl=37808,Nl=37809,Ul=37810,zl=37811,Fl=37812,Bl=37813,Ol=37814,kl=37815,Hl=37816,Vl=37817,Gl=37818,Wl=37819,Xl=37820,ql=37821,$l=36492,Yl=36494,Zl=36495,Jl=36283,Kl=36284,Uo=36285,jl=36286;var Xr=2300,Oa=2301,Ca=2302,yh=2303,vh=2400,_h=2401,bh=2402;var gf=3200;var Ql=0,xf=1,Un="",Re="srgb",qr="srgb-linear",$r="linear",ue="srgb";var Ia=7680;var yf=519,vf=512,_f=513,bf=514,tc=515,Mf=516,Sf=517,ec=518,wf=519,Zh=35044,vr=35048;var Jh="300 es",ei=2e3,er=2001;function wm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Em(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Yr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ef(){let s=Yr("canvas");return s.style.display="block",s}var ud={},nr=null;function Zr(...s){let t="THREE."+s.shift();nr?nr("log",t,...s):console.log(t,...s)}function Tf(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Bt(...s){s=Tf(s);let t="THREE."+s.shift();if(nr)nr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ot(...s){s=Tf(s);let t="THREE."+s.shift();if(nr)nr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function gs(...s){let t=s.join(" ");t in ud||(ud[t]=!0,Bt(...s))}function Af(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Rf={[Pa]:La,[Da]:za,[Na]:Fa,[tr]:Ua,[La]:Pa,[za]:Da,[Fa]:Na,[Ua]:tr},di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xc=Math.PI/180,ka=180/Math.PI;function Ai(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Kt(s,t,e){return Math.max(t,Math.min(e,s))}function Tm(s,t){return(s%t+t)%t}function qc(s,t,e){return(1-e)*s+e*t}function hi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var nu=class nu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nu.prototype.isVector2=!0;var xt=nu,Pn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||c!==u||l!==f||h!==p){let g=c*u+l*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let M=Math.acos(g),b=Math.sin(M);m=Math.sin(m*M)/b,a=Math.sin(a*M)/b,c=c*m+u*a,l=l*m+f*a,h=h*m+p*a,d=d*m+x*a}else{c=c*m+u*a,l=l*m+f*a,h=h*m+p*a,d=d*m+x*a;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+c*f-l*u,t[e+1]=c*p+h*u+l*d-a*f,t[e+2]=l*p+h*f+a*u-c*d,t[e+3]=h*p-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),f=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"YZX":this._x=u*h*d+l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d-u*f*p;break;case"XZY":this._x=u*h*d-l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d+u*f*p;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},iu=class iu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $c.copy(this).projectOnVector(t),this.sub($c)}reflect(t){return this.sub($c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};iu.prototype.isVector3=!0;var L=iu,$c=new L,dd=new Pn,su=class su{constructor(t,e,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=i[0],g=i[3],m=i[6],M=i[1],b=i[4],y=i[7],w=i[2],E=i[5],R=i[8];return r[0]=o*x+a*M+c*w,r[3]=o*g+a*b+c*E,r[6]=o*m+a*y+c*R,r[1]=l*x+h*M+d*w,r[4]=l*g+h*b+d*E,r[7]=l*m+h*y+d*R,r[2]=u*x+f*M+p*w,r[5]=u*g+f*b+p*E,r[8]=u*m+f*y+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yc.makeScale(t,e)),this}rotate(t){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yc.makeRotation(-t)),this}translate(t,e){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};su.prototype.isMatrix3=!0;var Ht=su,Yc=new Ht,fd=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pd=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Am(){let s={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(i.r=js(i.r),i.g=js(i.g),i.b=js(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?$r:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[qr]:{primaries:t,whitePoint:n,transfer:$r,toXYZ:fd,fromXYZ:pd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:fd,fromXYZ:pd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),s}var Qt=Am();function Ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ns,Ha=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ns===void 0&&(Ns=Yr("canvas")),Ns.width=t.width,Ns.height=t.height;let i=Ns.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ri(e[n]/255)*255):e[n]=Ri(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rm=0,ir=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Zc(i[o].image)):r.push(Zc(i[o]))}else r=Zc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ha.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var Cm=0,Jc=new L,yn=class s extends di{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Vn,i=Vn,r=$e,o=ji,a=qn,c=dn,l=s.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Ai(),this.name="",this.source=new ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gi:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gi:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Vh;yn.DEFAULT_ANISOTROPY=1;var ru=class ru{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,y=(f+1)/2,w=(m+1)/2,E=(h+u)/4,R=(d+x)/4,_=(p+g)/4;return b>y&&b>w?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=E/n,r=R/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=_/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=R/r,i=_/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ru.prototype.isVector4=!0;var Pe=ru,Va=class extends di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new yn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ir(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends Va{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Jr=class extends yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ga=class extends yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fl=class fl{constructor(t,e,n,i,r,o,a,c,l,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,d,u,f,p,x,g)}set(t,e,n,i,r,o,a,c,l,h,d,u,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),o=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+p*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=p+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,p=l*h,x=l*d;e[0]=u+x*a,e[4]=p*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,p=l*h,x=l*d;e[0]=u-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=c*h,e[4]=p*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,p=a*c,x=a*l;e[0]=c*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*c,f=o*l,p=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Im,t,Pm)}lookAt(t,e,n){let i=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Bi.crossVectors(n,Cn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Bi.crossVectors(n,Cn)),Bi.normalize(),na.crossVectors(Cn,Bi),i[0]=Bi.x,i[4]=na.x,i[8]=Cn.x,i[1]=Bi.y,i[5]=na.y,i[9]=Cn.y,i[2]=Bi.z,i[6]=na.z,i[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],M=n[3],b=n[7],y=n[11],w=n[15],E=i[0],R=i[4],_=i[8],A=i[12],C=i[1],N=i[5],U=i[9],D=i[13],P=i[2],B=i[6],W=i[10],$=i[14],Q=i[3],q=i[7],Z=i[11],G=i[15];return r[0]=o*E+a*C+c*P+l*Q,r[4]=o*R+a*N+c*B+l*q,r[8]=o*_+a*U+c*W+l*Z,r[12]=o*A+a*D+c*$+l*G,r[1]=h*E+d*C+u*P+f*Q,r[5]=h*R+d*N+u*B+f*q,r[9]=h*_+d*U+u*W+f*Z,r[13]=h*A+d*D+u*$+f*G,r[2]=p*E+x*C+g*P+m*Q,r[6]=p*R+x*N+g*B+m*q,r[10]=p*_+x*U+g*W+m*Z,r[14]=p*A+x*D+g*$+m*G,r[3]=M*E+b*C+y*P+w*Q,r[7]=M*R+b*N+y*B+w*q,r[11]=M*_+b*U+y*W+w*Z,r[15]=M*A+b*D+y*$+w*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],M=c*f-l*u,b=a*f-l*d,y=a*u-c*d,w=o*f-l*h,E=o*u-c*h,R=o*d-a*h;return e*(x*M-g*b+m*y)-n*(p*M-g*w+m*E)+i*(p*b-x*w+m*R)-r*(p*y-x*E+g*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+i*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],M=e*a-n*o,b=e*c-i*o,y=e*l-r*o,w=n*c-i*a,E=n*l-r*a,R=i*l-r*c,_=h*x-d*p,A=h*g-u*p,C=h*m-f*p,N=d*g-u*x,U=d*m-f*x,D=u*m-f*g,P=M*D-b*U+y*N+w*C-E*A+R*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/P;return t[0]=(a*D-c*U+l*N)*B,t[1]=(i*U-n*D-r*N)*B,t[2]=(x*R-g*E+m*w)*B,t[3]=(u*E-d*R-f*w)*B,t[4]=(c*C-o*D-l*A)*B,t[5]=(e*D-i*C+r*A)*B,t[6]=(g*y-p*R-m*b)*B,t[7]=(h*R-u*y+f*b)*B,t[8]=(o*U-a*C+l*_)*B,t[9]=(n*C-e*U-r*_)*B,t[10]=(p*E-x*y+m*M)*B,t[11]=(d*y-h*E-f*M)*B,t[12]=(a*A-o*N-c*_)*B,t[13]=(e*N-n*A+i*_)*B,t[14]=(x*b-p*w-g*M)*B,t[15]=(h*w-d*b+u*M)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,p=r*d,x=o*h,g=o*d,m=a*d,M=c*l,b=c*h,y=c*d,w=n.x,E=n.y,R=n.z;return i[0]=(1-(x+m))*w,i[1]=(f+y)*w,i[2]=(p-b)*w,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(u+m))*E,i[6]=(g+M)*E,i[7]=0,i[8]=(p+b)*R,i[9]=(g-M)*R,i[10]=(1-(u+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Us.set(i[0],i[1],i[2]).length(),a=Us.set(i[4],i[5],i[6]).length(),c=Us.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Kn.copy(this);let l=1/o,h=1/a,d=1/c;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,e.setFromRotationMatrix(Kn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,r,o,a=ei,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===ei)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===er)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ei,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===ei)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===er)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};fl.prototype.isMatrix4=!0;var ae=fl,Us=new L,Kn=new ae,Im=new L(0,0,0),Pm=new L(1,1,1),Bi=new L,na=new L,Cn=new L,md=new ae,gd=new Pn,Gn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return md.makeRotationFromQuaternion(t),this.setFromRotationMatrix(md,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gd.setFromEuler(this),this.setFromQuaternion(gd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lm=0,xd=new L,zs=new Pn,bi=new ae,ia=new L,Dr=new L,Dm=new L,Nm=new Pn,yd=new L(1,0,0),vd=new L(0,1,0),_d=new L(0,0,1),bd={type:"added"},Um={type:"removed"},Fs={type:"childadded",child:null},Kc={type:"childremoved",child:null},Se=class s extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Gn,n=new Pn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ht}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(yd,t)}rotateY(t){return this.rotateOnAxis(vd,t)}rotateZ(t){return this.rotateOnAxis(_d,t)}translateOnAxis(t,e){return xd.copy(t).applyQuaternion(this.quaternion),this.position.add(xd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yd,t)}translateY(t){return this.translateOnAxis(vd,t)}translateZ(t){return this.translateOnAxis(_d,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ia.copy(t):ia.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Dr,ia,this.up):bi.lookAt(ia,Dr,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),zs.setFromRotationMatrix(bi),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bd),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Um),Kc.child=t,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bd),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,t,Dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,Nm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Se.DEFAULT_UP=new L(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var It=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},zm={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&u>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zm)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function jc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=Tm(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=jc(o,r,t+1/3),this.g=jc(o,r,t),this.b=jc(o,r,t-1/3)}return Qt.colorSpaceToWorking(this,i),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=Cf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Qt.workingToColorSpace(hn.copy(this),t),Math.round(Kt(hn.r*255,0,255))*65536+Math.round(Kt(hn.g*255,0,255))*256+Math.round(Kt(hn.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(hn.copy(this),e);let n=hn.r,i=hn.g,r=hn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Re){Qt.workingToColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,i=hn.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(sa);let n=qc(Oi.h,sa.h,e),i=qc(Oi.s,sa.s,e),r=qc(Oi.l,sa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ot;ot.NAMES=Cf;var jr=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ot(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qr=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},jn=new L,Mi=new L,Qc=new L,Si=new L,Bs=new L,Os=new L,Md=new L,th=new L,eh=new L,nh=new L,ih=new Pe,sh=new Pe,rh=new Pe,Ti=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),jn.subVectors(t,e),i.cross(jn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){jn.subVectors(i,e),Mi.subVectors(n,e),Qc.subVectors(t,e);let o=jn.dot(jn),a=jn.dot(Mi),c=jn.dot(Qc),l=Mi.dot(Mi),h=Mi.dot(Qc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,p=(o*h-a*c)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Si.x),c.addScaledVector(o,Si.y),c.addScaledVector(a,Si.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return ih.setScalar(0),sh.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(t,e),sh.fromBufferAttribute(t,n),rh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ih,r.x),o.addScaledVector(sh,r.y),o.addScaledVector(rh,r.z),o}static isFrontFacing(t,e,n,i){return jn.subVectors(n,e),Mi.subVectors(t,e),jn.cross(Mi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),jn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Bs.subVectors(i,n),Os.subVectors(r,n),th.subVectors(t,n);let c=Bs.dot(th),l=Os.dot(th);if(c<=0&&l<=0)return e.copy(n);eh.subVectors(t,i);let h=Bs.dot(eh),d=Os.dot(eh);if(h>=0&&d<=h)return e.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Bs,o);nh.subVectors(t,r);let f=Bs.dot(nh),p=Os.dot(nh);if(p>=0&&f<=p)return e.copy(r);let x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Os,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Md.subVectors(r,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(Md,a);let m=1/(g+x+u);return o=x*m,a=u*m,e.copy(n).addScaledVector(Bs,o).addScaledVector(Os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(t.matrixWorld),this.union(ra)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Nr),oa.subVectors(this.max,Nr),ks.subVectors(t.a,Nr),Hs.subVectors(t.b,Nr),Vs.subVectors(t.c,Nr),ki.subVectors(Hs,ks),Hi.subVectors(Vs,Hs),ds.subVectors(ks,Vs);let e=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-ds.z,ds.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,ds.z,0,-ds.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-ds.y,ds.x,0];return!oh(e,ks,Hs,Vs,oa)||(e=[1,0,0,0,1,0,0,0,1],!oh(e,ks,Hs,Vs,oa))?!1:(aa.crossVectors(ki,Hi),e=[aa.x,aa.y,aa.z],oh(e,ks,Hs,Vs,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},wi=[new L,new L,new L,new L,new L,new L,new L,new L],Qn=new L,ra=new Wn,ks=new L,Hs=new L,Vs=new L,ki=new L,Hi=new L,ds=new L,Nr=new L,oa=new L,aa=new L,fs=new L;function oh(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){fs.fromArray(s,r);let a=i.x*Math.abs(fs.x)+i.y*Math.abs(fs.y)+i.z*Math.abs(fs.z),c=t.dot(fs),l=e.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ge=new L,la=new xt,Fm=0,ne=class extends di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zh,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)la.fromBufferAttribute(this,e),la.applyMatrix3(t),this.setXY(e,la.x,la.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var to=class extends ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var eo=class extends ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bm=new Wn,Ur=new L,ah=new L,Ln=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);let e=Ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(ah)),this.expandByPoint(Ur.copy(t.center).sub(ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Om=0,Hn=new ae,lh=new Se,Gs=new L,In=new Wn,zr=new Wn,Ke=new L,ye=class s extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wm(t)?eo:to)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return lh.lookAt(t),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(In.min,zr.min),In.expandByPoint(Ke),Ke.addVectors(In.max,zr.max),In.expandByPoint(Ke)):(In.expandByPoint(zr.min),In.expandByPoint(zr.max))}In.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ke.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ke.fromBufferAttribute(a,l),c&&(Gs.fromBufferAttribute(t,l),Ke.add(Gs)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ne(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new L,c[_]=new L;let l=new L,h=new L,d=new L,u=new xt,f=new xt,p=new xt,x=new L,g=new L;function m(_,A,C){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,C),h.sub(l),d.sub(l),f.sub(u),p.sub(u);let N=1/(f.x*p.y-p.x*f.y);isFinite(N)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(N),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(N),a[_].add(x),a[A].add(x),a[C].add(x),c[_].add(g),c[A].add(g),c[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,A=M.length;_<A;++_){let C=M[_],N=C.start,U=C.count;for(let D=N,P=N+U;D<P;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let b=new L,y=new L,w=new L,E=new L;function R(_){w.fromBufferAttribute(i,_),E.copy(w);let A=a[_];b.copy(A),b.sub(w.multiplyScalar(w.dot(A))).normalize(),y.crossVectors(E,A);let N=y.dot(c[_])<0?-1:1;o.setXYZW(_,b.x,b.y,b.z,N)}for(let _=0,A=M.length;_<A;++_){let C=M[_],N=C.start,U=C.count;for(let D=N,P=N+U;D<P;D+=3)R(t.getX(D+0)),R(t.getX(D+1)),R(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)u[p++]=l[f++]}return new ne(u,h,d)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},no=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zh,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},xn=new L,rr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ch=new L,km=new L,Hm=new Ht,ti=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ch.subVectors(n,e).cross(km.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(ch),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hm.getNormalMatrix(t),i=this.coplanarPoint(ch).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Vm=0,fi=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Ji,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Nh,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ti().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xs=class extends fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ws,Fr=new L,Xs=new L,qs=new L,$s=new xt,Br=new xt,If=new ae,ca=new L,Or=new L,ha=new L,Sd=new xt,hh=new xt,wd=new xt,or=class extends Se{constructor(t=new xs){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new no(e,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new rr(n,3,0,!1)),Ws.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new xt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),If.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;ua(ca.set(-.5,-.5,0),qs,o,Xs,i,r),ua(Or.set(.5,-.5,0),qs,o,Xs,i,r),ua(ha.set(.5,.5,0),qs,o,Xs,i,r),Sd.set(0,0),hh.set(1,0),wd.set(1,1);let a=t.ray.intersectTriangle(ca,Or,ha,!1,Fr);if(a===null&&(ua(Or.set(-.5,.5,0),qs,o,Xs,i,r),hh.set(0,1),a=t.ray.intersectTriangle(ca,ha,Or,!1,Fr),a===null))return;let c=t.ray.origin.distanceTo(Fr);c<t.near||c>t.far||e.push({distance:c,point:Fr.clone(),uv:Ti.getInterpolation(Fr,ca,Or,ha,Sd,hh,wd,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ua(s,t,e,n,i,r){$s.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Br.x=r*$s.x-i*$s.y,Br.y=i*$s.x+r*$s.y):Br.copy($s),s.copy(t),s.x+=Br.x,s.y+=Br.y,s.applyMatrix4(If)}var Ei=new L,uh=new L,da=new L,fa=new L,io=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){uh.copy(t).add(e).multiplyScalar(.5),da.copy(e).sub(t).normalize(),fa.copy(this.origin).sub(uh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(da),a=fa.dot(this.direction),c=-fa.dot(da),l=fa.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*c-a,u=o*a-c,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=p?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(uh).addScaledVector(da,u),f}intersectSphere(t,e){if(t.radius<0)return null;Ei.subVectors(t.center,this.origin);let n=Ei.dot(this.direction),i=Ei.dot(Ei)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=n.x-o.x,M=n.y-o.y,b=n.z-o.z,y=Math.abs(c),w=Math.abs(l),E=Math.abs(h),R,_,A,C,N,U,D,P,B,W,$,Q;if(y>=w&&y>=E?(A=c,U=d,B=p,Q=m,c>=0?(R=l,_=h,C=u,N=f,D=x,P=g,W=M,$=b):(R=h,_=l,C=f,N=u,D=g,P=x,W=b,$=M)):w>=E?(A=l,U=u,B=x,Q=M,l>=0?(R=h,_=c,C=f,N=d,D=g,P=p,W=b,$=m):(R=c,_=h,C=d,N=f,D=p,P=g,W=m,$=b)):(A=h,U=f,B=g,Q=b,h>=0?(R=c,_=l,C=d,N=u,D=p,P=x,W=m,$=M):(R=l,_=c,C=u,N=d,D=x,P=p,W=M,$=m)),A===0)return null;let q=R/A,Z=_/A,G=1/A,ht=C-q*U,ct=N-Z*U,ie=D-q*B,$t=P-Z*B,ee=W-q*Q,J=$-Z*Q,nt=ee*$t-J*ie,Mt=ht*J-ct*ee,kt=ie*ct-$t*ht;if(i){if(nt<0||Mt<0||kt<0)return null}else if((nt<0||Mt<0||kt<0)&&(nt>0||Mt>0||kt>0))return null;let wt=nt+Mt+kt;if(wt===0)return null;let Yt=G*(nt*U+Mt*B+kt*Q);return(wt>0?Yt<0:Yt>0)?null:this.at(Yt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ed=new ae,ps=new io,pa=new Ln,Td=new L,ma=new L,ga=new L,xa=new L,dh=new L,ya=new L,Ad=new L,va=new L,Vt=class extends Se{constructor(t=new ye,e=new Fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){ya.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(dh.fromBufferAttribute(d,t),o?ya.addScaledVector(dh,h):ya.addScaledVector(dh.sub(e),h))}e.add(ya)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),ps.copy(t.ray).recast(t.near),!(pa.containsPoint(ps.origin)===!1&&(ps.intersectSphere(pa,Td)===null||ps.origin.distanceToSquared(Td)>(t.far-t.near)**2))&&(Ed.copy(r).invert(),ps.copy(t.ray).applyMatrix4(Ed),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,w=b;y<w;y+=3){let E=a.getX(y),R=a.getX(y+1),_=a.getX(y+2);i=_a(this,m,t,n,l,h,d,E,R,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=a.getX(g),b=a.getX(g+1),y=a.getX(g+2);i=_a(this,o,t,n,l,h,d,M,b,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,w=b;y<w;y+=3){let E=y,R=y+1,_=y+2;i=_a(this,m,t,n,l,h,d,E,R,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=g,b=g+1,y=g+2;i=_a(this,o,t,n,l,h,d,M,b,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Gm(s,t,e,n,i,r,o,a){let c;if(t.side===sn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Zi,a),c===null)return null;va.copy(a),va.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(va);return l<e.near||l>e.far?null:{distance:l,point:va.clone(),object:s}}function _a(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,ma),s.getVertexPosition(c,ga),s.getVertexPosition(l,xa);let h=Gm(s,t,e,n,ma,ga,xa,Ad);if(h){let d=new L;Ti.getBarycoord(Ad,ma,ga,xa,d),i&&(h.uv=Ti.getInterpolatedAttribute(i,a,c,l,d,new xt)),r&&(h.uv1=Ti.getInterpolatedAttribute(r,a,c,l,d,new xt)),o&&(h.normal=Ti.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};Ti.getNormal(ma,ga,xa,u.normal),h.face=u,h.barycoord=d}return h}var ys=class extends yn{constructor(t=null,e=1,n=1,i,r,o,a,c,l=je,h=je,d,u){super(null,o,a,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=class extends ne{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ys=new ae,Rd=new ae,ba=[],Cd=new Wn,Wm=new ae,kr=new Vt,Hr=new Ln,pi=class extends Vt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Cd.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(Cd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Hr.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),t.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ys),Rd.multiplyMatrices(n,Ys),kr.matrixWorld=Rd,kr.raycast(t,ba);for(let o=0,a=ba.length;o<a;o++){let c=ba[o];c.instanceId=r,c.object=this,e.push(c)}ba.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ys(new Float32Array(i*this.count),i,this.count,yr,Xn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ms=new Ln,Xm=new xt(.5,.5),Ma=new L,lr=class{constructor(t=new ti,e=new ti,n=new ti,i=new ti,r=new ti,o=new ti){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],M=r[12],b=r[13],y=r[14],w=r[15];if(i[0].setComponents(l-o,f-h,m-p,w-M).normalize(),i[1].setComponents(l+o,f+h,m+p,w+M).normalize(),i[2].setComponents(l+a,f+d,m+x,w+b).normalize(),i[3].setComponents(l-a,f-d,m-x,w-b).normalize(),n)i[4].setComponents(c,u,g,y).normalize(),i[5].setComponents(l-c,f-u,m-g,w-y).normalize();else if(i[4].setComponents(l-c,f-u,m-g,w-y).normalize(),e===ei)i[5].setComponents(l+c,f+u,m+g,w+y).normalize();else if(e===er)i[5].setComponents(c,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);let e=Xm.distanceTo(t.center);return ms.radius=.7071067811865476+e,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ma.x=i.normal.x>0?t.max.x:t.min.x,Ma.y=i.normal.y>0?t.max.y:t.min.y,Ma.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wa=class extends fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Id=new ae,Mh=new io,Sa=new Ln,wa=new L,so=class extends Se{constructor(t=new ye,e=new Wa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(i),Sa.radius+=r,t.ray.intersectsSphere(Sa)===!1)return;Id.copy(i).invert(),Mh.copy(t.ray).applyMatrix4(Id);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let g=l.getX(p);wa.fromBufferAttribute(d,g),Pd(wa,g,c,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)wa.fromBufferAttribute(d,p),Pd(wa,p,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pd(s,t,e,n,i,r,o){let a=Mh.distanceSqToPoint(s);if(a<e){let c=new L;Mh.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ro=class extends yn{constructor(t=[],e=Ki,n,i,r,o,a,c,l,h){super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vn=class extends yn{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wi=class extends yn{constructor(t,e,n=si,i,r,o,a=je,c=je,l,h=ui,d=1){if(h!==ui&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ir(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Xa=class extends Wi{constructor(t,e=si,n=Ki,i,r,o=je,a=je,c,l=ui){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},oo=class extends yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xi=class s extends ye{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(d,2));function p(x,g,m,M,b,y,w,E,R,_,A){let C=y/R,N=w/_,U=y/2,D=w/2,P=E/2,B=R+1,W=_+1,$=0,Q=0,q=new L;for(let Z=0;Z<W;Z++){let G=Z*N-D;for(let ht=0;ht<B;ht++){let ct=ht*C-U;q[x]=ct*M,q[g]=G*b,q[m]=P,l.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[m]=E>0?1:-1,h.push(q.x,q.y,q.z),d.push(ht/R),d.push(1-Z/_),$+=1}}for(let Z=0;Z<_;Z++)for(let G=0;G<R;G++){let ht=u+G+B*Z,ct=u+G+B*(Z+1),ie=u+(G+1)+B*(Z+1),$t=u+(G+1)+B*Z;c.push(ht,ct,$t),c.push(ct,ie,$t),Q+=6}a.addGroup(f,Q,A),f+=Q,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var wn=class s extends ye{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=n/2,m=0;M(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(f,2));function M(){let y=new L,w=new L,E=0,R=(e-t)/n;for(let _=0;_<=r;_++){let A=[],C=_/r,N=C*(e-t)+t;for(let U=0;U<=i;U++){let D=U/i,P=D*c+a,B=Math.sin(P),W=Math.cos(P);w.x=N*B,w.y=-C*n+g,w.z=N*W,d.push(w.x,w.y,w.z),y.set(B,R,W).normalize(),u.push(y.x,y.y,y.z),f.push(D,1-C),A.push(p++)}x.push(A)}for(let _=0;_<i;_++)for(let A=0;A<r;A++){let C=x[A][_],N=x[A+1][_],U=x[A+1][_+1],D=x[A][_+1];(t>0||A!==0)&&(h.push(C,N,D),E+=3),(e>0||A!==r-1)&&(h.push(N,U,D),E+=3)}l.addGroup(m,E,0),m+=E}function b(y){let w=p,E=new xt,R=new L,_=0,A=y===!0?t:e,C=y===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),p++;let N=p;for(let U=0;U<=i;U++){let P=U/i*c+a,B=Math.cos(P),W=Math.sin(P);R.x=A*W,R.y=g*C,R.z=A*B,d.push(R.x,R.y,R.z),u.push(0,C,0),E.x=B*.5+.5,E.y=W*.5*C+.5,f.push(E.x,E.y),p++}for(let U=0;U<i;U++){let D=w+U,P=N+U;y===!0?h.push(P,P+1,D):h.push(P+1,P,D),_+=3}l.addGroup(m,_,y===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ao=class s extends wn{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lo=class s extends ye{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let b=new L,y=new L,w=new L;for(let E=0;E<e.length;E+=3)f(e[E+0],b),f(e[E+1],y),f(e[E+2],w),c(b,y,w,M)}function c(M,b,y,w){let E=w+1,R=[];for(let _=0;_<=E;_++){R[_]=[];let A=M.clone().lerp(y,_/E),C=b.clone().lerp(y,_/E),N=E-_;for(let U=0;U<=N;U++)U===0&&_===E?R[_][U]=A:R[_][U]=A.clone().lerp(C,U/N)}for(let _=0;_<E;_++)for(let A=0;A<2*(E-_)-1;A++){let C=Math.floor(A/2);A%2===0?(u(R[_][C+1]),u(R[_+1][C]),u(R[_][C])):(u(R[_][C+1]),u(R[_+1][C+1]),u(R[_+1][C]))}}function l(M){let b=new L;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(M),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let M=new L;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];let y=g(M)/2/Math.PI+.5,w=m(M)/Math.PI+.5;o.push(y,1-w)}p(),d()}function d(){for(let M=0;M<o.length;M+=6){let b=o[M+0],y=o[M+2],w=o[M+4],E=Math.max(b,y,w),R=Math.min(b,y,w);E>.9&&R<.1&&(b<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,b){let y=M*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function p(){let M=new L,b=new L,y=new L,w=new L,E=new xt,R=new xt,_=new xt;for(let A=0,C=0;A<r.length;A+=9,C+=6){M.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),E.set(o[C+0],o[C+1]),R.set(o[C+2],o[C+3]),_.set(o[C+4],o[C+5]),w.copy(M).add(b).add(y).divideScalar(3);let N=g(w);x(E,C+0,M,N),x(R,C+2,b,N),x(_,C+4,y,N)}}function x(M,b,y,w){w<0&&M.x===1&&(o[b]=M.x-1),y.x===0&&y.z===0&&(o[b]=w/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new xt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,i=[],r=[],o=[],a=new L,c=new ae;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Kt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Kt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},cr=class extends Dn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new xt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},qa=class extends cr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Kh(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Ld=new L,Dd=new L,fh=new Kh,ph=new Kh,mh=new Kh,$a=class extends Dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Dd.subVectors(i[0],i[1]).add(i[0]),l=Dd);let d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ld.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ld),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),fh.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,p,x,g),ph.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,p,x,g),mh.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(fh.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ph.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),mh.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(fh.calc(c),ph.calc(c),mh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nd(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function qm(s,t){let e=1-s;return e*e*t}function $m(s,t){return 2*(1-s)*s*t}function Ym(s,t){return s*s*t}function Gr(s,t,e,n){return qm(s,t)+$m(s,e)+Ym(s,n)}function Zm(s,t){let e=1-s;return e*e*e*t}function Jm(s,t){let e=1-s;return 3*e*e*s*t}function Km(s,t){return 3*(1-s)*s*s*t}function jm(s,t){return s*s*s*t}function Wr(s,t,e,n,i){return Zm(s,t)+Jm(s,e)+Km(s,n)+jm(s,i)}var co=class extends Dn{constructor(t=new xt,e=new xt,n=new xt,i=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new xt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wr(t,i.x,r.x,o.x,a.x),Wr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ya=class extends Dn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wr(t,i.x,r.x,o.x,a.x),Wr(t,i.y,r.y,o.y,a.y),Wr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ho=class extends Dn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends Dn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends Dn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Gr(t,i.x,r.x,o.x),Gr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends Dn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Gr(t,i.x,r.x,o.x),Gr(t,i.y,r.y,o.y),Gr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fo=class extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Nd(a,c.x,l.x,h.x,d.x),Nd(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new xt().fromArray(i))}return this}},Ud=Object.freeze({__proto__:null,ArcCurve:qa,CatmullRomCurve3:$a,CubicBezierCurve:co,CubicBezierCurve3:Ya,EllipseCurve:cr,LineCurve:ho,LineCurve3:Za,QuadraticBezierCurve:uo,QuadraticBezierCurve3:Ja,SplineCurve:fo}),Ka=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ud[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Ud[i.type]().fromJSON(i))}return this}},po=class extends Ka{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ho(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new uo(this.currentPoint.clone(),new xt(t,e),new xt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new co(this.currentPoint.clone(),new xt(t,e),new xt(n,i),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new fo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new cr(t,e,n,i,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},hr=class extends po{constructor(t){super(t),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new po().fromJSON(i))}return this}};function Qm(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Pf(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=s0(s,t,r,e)),s.length>80*e){a=s[0],c=s[1];let h=a,d=c;for(let u=e;u<i;u+=e){let f=s[u],p=s[u+1];f<a&&(a=f),p<c&&(c=p),f>h&&(h=f),p>d&&(d=p)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return mo(r,o,e,a,c,l,0),o}function Pf(s,t,e,n,i){let r;if(i===m0(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=zd(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=zd(o/n|0,s[o],s[o+1],r);return r&&ur(r,r.next)&&(xo(r),r=r.next),r}function vs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ur(e,e.next)||Ne(e.prev,e,e.next)===0)){if(xo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function mo(s,t,e,n,i,r,o){if(!s)return;!o&&r&&c0(s,n,i,r);let a=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?e0(s,n,i,r):t0(s)){t.push(c.i,s.i,l.i),xo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=n0(vs(s),t),mo(s,t,e,n,i,r,2)):o===2&&i0(s,t,e,n,i,r):mo(vs(s),t,e,n,i,r,1);break}}}function t0(s){let t=s.prev,e=s,n=s.next;if(Ne(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(i,r,o),d=Math.min(a,c,l),u=Math.max(i,r,o),f=Math.max(a,c,l),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Vr(i,a,r,c,o,l,p.x,p.y)&&Ne(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function e0(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ne(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,d=r.y,u=o.y,f=Math.min(a,c,l),p=Math.min(h,d,u),x=Math.max(a,c,l),g=Math.max(h,d,u),m=Sh(f,p,t,e,n),M=Sh(x,g,t,e,n),b=s.prevZ,y=s.nextZ;for(;b&&b.z>=m&&y&&y.z<=M;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==i&&b!==o&&Vr(a,h,c,d,l,u,b.x,b.y)&&Ne(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Vr(a,h,c,d,l,u,y.x,y.y)&&Ne(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==i&&b!==o&&Vr(a,h,c,d,l,u,b.x,b.y)&&Ne(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Vr(a,h,c,d,l,u,y.x,y.y)&&Ne(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function n0(s,t){let e=s;do{let n=e.prev,i=e.next.next;!ur(n,i)&&Df(n,e,e.next,i)&&go(n,i)&&go(i,n)&&(t.push(n.i,e.i,i.i),xo(e),xo(e.next),e=s=i),e=e.next}while(e!==s);return vs(e)}function i0(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&d0(o,a)){let c=Nf(o,a);o=vs(o,o.next),c=vs(c,c.next),mo(o,t,e,n,i,r,0),mo(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function s0(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Pf(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(u0(l))}i.sort(r0);for(let r=0;r<i.length;r++)e=o0(i[r],e);return e}function r0(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function o0(s,t){let e=a0(s,t);if(!e)return t;let n=Nf(e,s);return vs(n,n.next),vs(e,e.next)}function a0(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(ur(s,e))return e;do{if(ur(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Lf(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);go(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&l0(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function l0(s,t){return Ne(s.prev,s,t.prev)<0&&Ne(t.next,s,s.next)<0}function c0(s,t,e,n){let i=s;do i.z===0&&(i.z=Sh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,h0(i)}function h0(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Sh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function u0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Lf(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Vr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Lf(s,t,e,n,i,r,o,a)}function d0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!f0(s,t)&&(go(s,t)&&go(t,s)&&p0(s,t)&&(Ne(s.prev,s,t.prev)||Ne(s,t.prev,t))||ur(s,t)&&Ne(s.prev,s,s.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ur(s,t){return s.x===t.x&&s.y===t.y}function Df(s,t,e,n){let i=Ta(Ne(s,t,e)),r=Ta(Ne(s,t,n)),o=Ta(Ne(e,n,s)),a=Ta(Ne(e,n,t));return!!(i!==r&&o!==a||i===0&&Ea(s,e,t)||r===0&&Ea(s,n,t)||o===0&&Ea(e,s,n)||a===0&&Ea(e,t,n))}function Ea(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ta(s){return s>0?1:s<0?-1:0}function f0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Df(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function go(s,t){return Ne(s.prev,s,s.next)<0?Ne(s,t,s.next)>=0&&Ne(s,s.prev,t)>=0:Ne(s,t,s.prev)<0||Ne(s,s.next,t)<0}function p0(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Nf(s,t){let e=wh(s.i,s.x,s.y),n=wh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function zd(s,t,e,n){let i=wh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function m0(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Eh=class{static triangulate(t,e,n=2){return Qm(t,e,n)}},Qs=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Fd(t),Bd(n,t);let o=t.length;e.forEach(Fd);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Bd(n,e[c]);let a=Eh.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Fd(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Bd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var yo=class s extends lo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var vo=class s extends lo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Qe=class s extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*u-o;for(let b=0;b<l;b++){let y=b*d-r;p.push(y,-M,0),x.push(0,0,1),g.push(b/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){let b=M+l*m,y=M+l*(m+1),w=M+1+l*(m+1),E=M+1+l*m;f.push(b,y,E),f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new te(p,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var _o=class s extends ye{constructor(t=new hr([new xt(0,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new te(i,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function l(h){let d=i.length/3,u=h.extractPoints(e),f=u.shape,p=u.holes;Qs.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let M=p[g];Qs.isClockWise(M)===!0&&(p[g]=M.reverse())}let x=Qs.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let M=p[g];f=f.concat(M)}for(let g=0,m=f.length;g<m;g++){let M=f[g];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,m=x.length;g<m;g++){let M=x[g],b=M[0]+d,y=M[1]+d,w=M[2]+d;n.push(b,y,w),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return g0(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function g0(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var un=class s extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new L,u=new L,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let M=[],b=m/n,y=o+b*a,w=t*Math.cos(y),E=Math.sqrt(t*t-w*w),R=0;m===0&&o===0?R=.5/e:m===n&&c===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){let A=_/e,C=i+A*r;d.x=-E*Math.cos(C),d.y=w,d.z=E*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(A+R,1-b),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let b=h[m][M+1],y=h[m][M],w=h[m+1][M],E=h[m+1][M+1];(m!==0||o>0)&&f.push(b,y,E),(m!==n-1||c<Math.PI)&&f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new te(p,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ni=class s extends ye{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],d=[],u=new L,f=new L,p=new L;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let m=0;m<=i;m++){let M=m/i*r;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),l.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){let m=(i+1)*x+g-1,M=(i+1)*(x-1)+g-1,b=(i+1)*(x-1)+g,y=(i+1)*x+g;c.push(m,M,y),c.push(M,b,y)}this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ss(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Od(i))i.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Od(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function fn(s){let t={};for(let e=0;e<s.length;e++){let n=Ss(s[e]);for(let i in n)t[i]=n[i]}return t}function Od(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function x0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function jh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Uf={clone:Ss,merge:fn},y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oe=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=x0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ot().setHex(i.value);break;case"v2":this.uniforms[n].value=new xt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Pe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ja=class extends Oe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fe=class extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Qa=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tl=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function gh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var qi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},el=class extends qi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vh,endingEnd:vh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case _h:r=t,a=2*e-n;break;case bh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _h:o=t,c=2*n-e;break;case bh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,M=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,b=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+M*o[l+w]+b*o[c+w]+y*o[d+w];return r}},nl=class extends qi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},il=class extends qi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},sl=class extends qi{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),x=1-p;for(let g=0;g!==a;++g)r[g]=o[l+g]*x+o[c+g]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[l+p],g=o[c+p],m=f*u+p*2,M=d[m],b=d[m+1],y=t*u+p*2,w=h[y],E=h[y+1],R=b0(n,e,M,w,i);r[p]=zf(R,x,b,E,g)}return r}};function zf(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function _0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function b0(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=zf(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let c=_0(r,t,e,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Nn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zs(e,this.TimeBufferType),this.values=Zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zs(t.times,Array),values:Zs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),gh(t.settings)&&(n.settings={inTangents:Zs(t.settings.inTangents,Array),outTangents:Zs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new sl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Xr:e=this.InterpolantFactoryMethodDiscrete;break;case Oa:e=this.InterpolantFactoryMethodLinear;break;case Ca:e=this.InterpolantFactoryMethodSmooth;break;case yh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return Ca;case this.InterpolantFactoryMethodBezier:return yh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;gh(this.settings)&&(kd(this.settings.inTangents,t),kd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ot("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Ot("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Em(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){Ot("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ca,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,gh(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function kd(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Oa;var $i=class extends Nn{constructor(t,e,n){super(t,e,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Xr;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Nn{constructor(t,e,n,i){super(t,e,n,i)}};rl.prototype.ValueTypeName="color";var ol=class extends Nn{constructor(t,e,n,i){super(t,e,n,i)}};ol.prototype.ValueTypeName="number";var al=class extends qi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)Pn.slerpFlat(r,0,o,l-a,o,l,c);return r}},bo=class extends Nn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};bo.prototype.ValueTypeName="quaternion";bo.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends Nn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Xr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends Nn{constructor(t,e,n,i){super(t,e,n,i)}};ll.prototype.ValueTypeName="vector";var cl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ff=new cl,hl=class{constructor(t){this.manager=t!==void 0?t:Ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var dr=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Mo=class extends dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},xh=new ae,Hd=new L,Vd=new L,So=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Hd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hd),Vd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){xh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(xh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;t.coordinateSystem===er||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(xh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Aa=new L,Ra=new Pn,ci=new L,wo=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Aa,Ra,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ra,ci.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Aa,Ra,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ra,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new L,Gd=new xt,Wd=new xt,nn=class extends wo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ka*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,Gd,Wd),e.subVectors(Wd,Gd)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Th=class extends So{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}},Eo=class extends dr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Th}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},fr=class extends wo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ah=class extends So{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Ah}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Js=-90,Ks=1,ul=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new nn(Js,Ks,t,e);i.layers=this.layers,this.add(i);let r=new nn(Js,Ks,t,e);r.layers=this.layers,this.add(r);let o=new nn(Js,Ks,t,e);o.layers=this.layers,this.add(o);let a=new nn(Js,Ks,t,e);a.layers=this.layers,this.add(a);let c=new nn(Js,Ks,t,e);c.layers=this.layers,this.add(c);let l=new nn(Js,Ks,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},dl=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Qh="\\[\\]\\.:\\/",M0=new RegExp("["+Qh+"]","g"),tu="[^"+Qh+"]",S0="[^"+Qh.replace("\\.","")+"]",w0=/((?:WC+[\/:])*)/.source.replace("WC",tu),E0=/(WCOD+)?/.source.replace("WCOD",S0),T0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),A0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),R0=new RegExp("^"+w0+E0+T0+A0+"$"),C0=["material","materials","bones","map"],Rh=class{constructor(t,e,n){let i=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(M0,"")}static parseTrackName(t){let e=R0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);C0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;Ot("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Rh;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E_=new Float32Array(1);var To=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Bt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var ou=class ou{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};ou.prototype.isMatrix2=!0;var Ch=ou;function eu(s,t,e,n){let i=I0(n);switch(e){case $h:return s*t;case yr:return s*t/i.components*i.byteLength;case _l:return s*t/i.components*i.byteLength;case ts:return s*t*2/i.components*i.byteLength;case bl:return s*t*2/i.components*i.byteLength;case Yh:return s*t*3/i.components*i.byteLength;case qn:return s*t*4/i.components*i.byteLength;case Ml:return s*t*4/i.components*i.byteLength;case Io:case Po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Lo:case Do:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wl:case Tl:return Math.max(s,16)*Math.max(t,8)/4;case Sl:case El:return Math.max(s,8)*Math.max(t,8)/2;case Al:case Rl:case Il:case Pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Cl:case No:case Ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case zl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case kl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case $l:case Yl:case Zl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Jl:case Kl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Uo:case jl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function I0(s){switch(s){case dn:case Gh:return{byteLength:1,components:1};case gr:case Wh:case ri:return{byteLength:2,components:1};case yl:case vl:return{byteLength:2,components:4};case si:case xl:case Xn:return{byteLength:4,components:1};case Xh:case qh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function rp(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function U0(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,B0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,G0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,X0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Z0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,J0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ag=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ag=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Rg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ig=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ng=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ug=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ex=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ux=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ex=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ax=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ix=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Px=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ey=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ry=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ay=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,py=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,my=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:z0,alphahash_pars_fragment:F0,alphamap_fragment:B0,alphamap_pars_fragment:O0,alphatest_fragment:k0,alphatest_pars_fragment:H0,aomap_fragment:V0,aomap_pars_fragment:G0,batching_pars_vertex:W0,batching_vertex:X0,begin_vertex:q0,beginnormal_vertex:$0,bsdfs:Y0,iridescence_fragment:Z0,bumpmap_pars_fragment:J0,clipping_planes_fragment:K0,clipping_planes_pars_fragment:j0,clipping_planes_pars_vertex:Q0,clipping_planes_vertex:tg,color_fragment:eg,color_pars_fragment:ng,color_pars_vertex:ig,color_vertex:sg,common:rg,cube_uv_reflection_fragment:og,defaultnormal_vertex:ag,displacementmap_pars_vertex:lg,displacementmap_vertex:cg,emissivemap_fragment:hg,emissivemap_pars_fragment:ug,colorspace_fragment:dg,colorspace_pars_fragment:fg,envmap_fragment:pg,envmap_common_pars_fragment:mg,envmap_pars_fragment:gg,envmap_pars_vertex:xg,envmap_physical_pars_fragment:Rg,envmap_vertex:yg,fog_vertex:vg,fog_pars_vertex:_g,fog_fragment:bg,fog_pars_fragment:Mg,gradientmap_pars_fragment:Sg,lightmap_pars_fragment:wg,lights_lambert_fragment:Eg,lights_lambert_pars_fragment:Tg,lights_pars_begin:Ag,lights_toon_fragment:Cg,lights_toon_pars_fragment:Ig,lights_phong_fragment:Pg,lights_phong_pars_fragment:Lg,lights_physical_fragment:Dg,lights_physical_pars_fragment:Ng,lights_fragment_begin:Ug,lights_fragment_maps:zg,lights_fragment_end:Fg,lightprobes_pars_fragment:Bg,logdepthbuf_fragment:Og,logdepthbuf_pars_fragment:kg,logdepthbuf_pars_vertex:Hg,logdepthbuf_vertex:Vg,map_fragment:Gg,map_pars_fragment:Wg,map_particle_fragment:Xg,map_particle_pars_fragment:qg,metalnessmap_fragment:$g,metalnessmap_pars_fragment:Yg,morphinstance_vertex:Zg,morphcolor_vertex:Jg,morphnormal_vertex:Kg,morphtarget_pars_vertex:jg,morphtarget_vertex:Qg,normal_fragment_begin:tx,normal_fragment_maps:ex,normal_pars_fragment:nx,normal_pars_vertex:ix,normal_vertex:sx,normalmap_pars_fragment:rx,clearcoat_normal_fragment_begin:ox,clearcoat_normal_fragment_maps:ax,clearcoat_pars_fragment:lx,iridescence_pars_fragment:cx,opaque_fragment:hx,packing:ux,premultiplied_alpha_fragment:dx,project_vertex:fx,dithering_fragment:px,dithering_pars_fragment:mx,roughnessmap_fragment:gx,roughnessmap_pars_fragment:xx,shadowmap_pars_fragment:yx,shadowmap_pars_vertex:vx,shadowmap_vertex:_x,shadowmask_pars_fragment:bx,skinbase_vertex:Mx,skinning_pars_vertex:Sx,skinning_vertex:wx,skinnormal_vertex:Ex,specularmap_fragment:Tx,specularmap_pars_fragment:Ax,tonemapping_fragment:Rx,tonemapping_pars_fragment:Cx,transmission_fragment:Ix,transmission_pars_fragment:Px,uv_pars_fragment:Lx,uv_pars_vertex:Dx,uv_vertex:Nx,worldpos_vertex:Ux,background_vert:zx,background_frag:Fx,backgroundCube_vert:Bx,backgroundCube_frag:Ox,cube_vert:kx,cube_frag:Hx,depth_vert:Vx,depth_frag:Gx,distance_vert:Wx,distance_frag:Xx,equirect_vert:qx,equirect_frag:$x,linedashed_vert:Yx,linedashed_frag:Zx,meshbasic_vert:Jx,meshbasic_frag:Kx,meshlambert_vert:jx,meshlambert_frag:Qx,meshmatcap_vert:ty,meshmatcap_frag:ey,meshnormal_vert:ny,meshnormal_frag:iy,meshphong_vert:sy,meshphong_frag:ry,meshphysical_vert:oy,meshphysical_frag:ay,meshtoon_vert:ly,meshtoon_frag:cy,points_vert:hy,points_frag:uy,shadow_vert:dy,shadow_frag:fy,sprite_vert:py,sprite_frag:my},yt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},yi={basic:{uniforms:fn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:fn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:fn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:fn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:fn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new ot(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:fn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:fn([yt.points,yt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:fn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:fn([yt.common,yt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:fn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:fn([yt.sprite,yt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:fn([yt.common,yt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:fn([yt.lights,yt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};yi.physical={uniforms:fn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var nc={r:0,b:0,g:0},gy=new ae,op=new Ht;op.set(-1,0,0,0,1,0,0,0,1);function xy(s,t,e,n,i,r){let o=new ot(0),a=i===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){let y=M.backgroundBlurriness>0;b=t.get(b,y)}return b}function p(M){let b=!1,y=f(M);y===null?g(o,a):y&&y.isColor&&(g(y,1),b=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,b){let y=f(b);y&&(y.isCubeTexture||y.mapping===Ro)?(l===void 0&&(l=new Vt(new Xi(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:Ss(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(gy.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(op),l.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ue,(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Vt(new Qe(2,2),new Oe({name:"BackgroundMaterial",uniforms:Ss(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,b){M.getRGB(nc,jh(s)),e.buffers.color.setClear(nc.r,nc.g,nc.b,b,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),a=b,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:p,addToRenderList:x,dispose:m}}function yy(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(N,U,D,P,B){let W=!1,$=d(N,P,D,U);r!==$&&(r=$,l(r.object)),W=f(N,P,D,B),W&&p(N,P,D,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(N,U,D,P),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return s.createVertexArray()}function l(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,U,D,P){let B=P.wireframe===!0,W=n[U.id];W===void 0&&(W={},n[U.id]=W);let $=N.isInstancedMesh===!0?N.id:0,Q=W[$];Q===void 0&&(Q={},W[$]=Q);let q=Q[D.id];q===void 0&&(q={},Q[D.id]=q);let Z=q[B];return Z===void 0&&(Z=u(c()),q[B]=Z),Z}function u(N){let U=[],D=[],P=[];for(let B=0;B<e;B++)U[B]=0,D[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:D,attributeDivisors:P,object:N,attributes:{},index:null}}function f(N,U,D,P){let B=r.attributes,W=U.attributes,$=0,Q=D.getAttributes();for(let q in Q)if(Q[q].location>=0){let G=B[q],ht=W[q];if(ht===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ht=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ht=N.instanceColor)),G===void 0||G.attribute!==ht||ht&&G.data!==ht.data)return!0;$++}return r.attributesNum!==$||r.index!==P}function p(N,U,D,P){let B={},W=U.attributes,$=0,Q=D.getAttributes();for(let q in Q)if(Q[q].location>=0){let G=W[q];G===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(G=N.instanceColor));let ht={};ht.attribute=G,G&&G.data&&(ht.data=G.data),B[q]=ht,$++}r.attributes=B,r.attributesNum=$,r.index=P}function x(){let N=r.newAttributes;for(let U=0,D=N.length;U<D;U++)N[U]=0}function g(N){m(N,0)}function m(N,U){let D=r.newAttributes,P=r.enabledAttributes,B=r.attributeDivisors;D[N]=1,P[N]===0&&(s.enableVertexAttribArray(N),P[N]=1),B[N]!==U&&(s.vertexAttribDivisor(N,U),B[N]=U)}function M(){let N=r.newAttributes,U=r.enabledAttributes;for(let D=0,P=U.length;D<P;D++)U[D]!==N[D]&&(s.disableVertexAttribArray(D),U[D]=0)}function b(N,U,D,P,B,W,$){$===!0?s.vertexAttribIPointer(N,U,D,B,W):s.vertexAttribPointer(N,U,D,P,B,W)}function y(N,U,D,P){x();let B=P.attributes,W=D.getAttributes(),$=U.defaultAttributeValues;for(let Q in W){let q=W[Q];if(q.location>=0){let Z=B[Q];if(Z===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),Z!==void 0){let G=Z.normalized,ht=Z.itemSize,ct=t.get(Z);if(ct===void 0)continue;let ie=ct.buffer,$t=ct.type,ee=ct.bytesPerElement,J=$t===s.INT||$t===s.UNSIGNED_INT||Z.gpuType===xl;if(Z.isInterleavedBufferAttribute){let nt=Z.data,Mt=nt.stride,kt=Z.offset;if(nt.isInstancedInterleavedBuffer){for(let wt=0;wt<q.locationSize;wt++)m(q.location+wt,nt.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let wt=0;wt<q.locationSize;wt++)g(q.location+wt);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let wt=0;wt<q.locationSize;wt++)b(q.location+wt,ht/q.locationSize,$t,G,Mt*ee,(kt+ht/q.locationSize*wt)*ee,J)}else{if(Z.isInstancedBufferAttribute){for(let nt=0;nt<q.locationSize;nt++)m(q.location+nt,Z.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let nt=0;nt<q.locationSize;nt++)g(q.location+nt);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let nt=0;nt<q.locationSize;nt++)b(q.location+nt,ht/q.locationSize,$t,G,ht*ee,ht/q.locationSize*nt*ee,J)}}else if($!==void 0){let G=$[Q];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(q.location,G);break;case 3:s.vertexAttrib3fv(q.location,G);break;case 4:s.vertexAttrib4fv(q.location,G);break;default:s.vertexAttrib1fv(q.location,G)}}}}M()}function w(){A();for(let N in n){let U=n[N];for(let D in U){let P=U[D];for(let B in P){let W=P[B];for(let $ in W)h(W[$].object),delete W[$];delete P[B]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let D in U){let P=U[D];for(let B in P){let W=P[B];for(let $ in W)h(W[$].object),delete W[$];delete P[B]}}delete n[N.id]}function R(N){for(let U in n){let D=n[U];for(let P in D){let B=D[P];if(B[N.id]===void 0)continue;let W=B[N.id];for(let $ in W)h(W[$].object),delete W[$];delete B[N.id]}}}function _(N){for(let U in n){let D=n[U],P=N.isInstancedMesh===!0?N.id:0,B=D[P];if(B!==void 0){for(let W in B){let $=B[W];for(let Q in $)h($[Q].object),delete $[Q];delete B[W]}delete D[P],Object.keys(D).length===0&&delete n[U]}}}function A(){C(),o=!0,r!==i&&(r=i,l(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function vy(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function _y(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==qn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let _=R===ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==dn&&R!==Xn&&!_&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Bt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:y,maxSamples:w,samples:E}}function by(s){let t=this,e=null,n=0,i=!1,r=!1,o=new ti,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,b=M*4,y=m.clippingState||null;c.value=y,y=h(p,u,b,f);for(let w=0;w!==b;++w)y[w]=e[w];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=f+x*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(d[b]).applyMatrix4(M,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var br=4,My=6,Sy=20,wy=256,zo=new fr,Bf=new ot,au=null,lu=0,cu=0,hu=!1,Ey=new L,ws=new L,sc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=Ey}=r;au=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(au,lu,cu),this._renderer.xr.enabled=hu,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),au=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:ri,format:qn,colorSpace:qr,depthBuffer:!1},i=Of(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Of(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ty(r)),this._blurMaterial=Ry(r,t,e),this._ggxMaterial=Ay(r,t,e)}return i}_compileMaterial(t){let e=new Vt(new ye,t);this._renderer.compile(e,zo)}_sceneToCubeUV(t,e,n,i,r){let c=new nn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Bf),d.toneMapping=ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new Xi,new Fe({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(Bf),m=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let w=this._cubeSize;_r(i,y*w,b>2?w:0,w,w),d.setRenderTarget(i),m&&d.render(x,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ki||t.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;_r(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,zo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-br?n-p+br:0),m=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=p-e,_r(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(a,zo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,_r(t,g,m,3*x,2*x),i.setRenderTarget(t),i.render(a,zo)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[i];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-br?i-this._lodMax+br:0),u=4*(this._cubeSize-h);_r(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(c,zo)}};function Ty(s){let t=[],e=[],n=s,i=s-br+1+My;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,b=m>2?0:-1,y=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];p.set(y,f*u*m);for(let w=0;w<u;w++){let E=h[w*2]*2-1,R=h[w*2+1]*2-1;m===0?ws.set(1,R,E):m===1?ws.set(-E,1,-R):m===2?ws.set(-E,R,1):m===3?ws.set(-1,R,-E):m===4?ws.set(-E,-1,R):ws.set(E,R,-1),ws.toArray(x,(m*u+w)*f)}}let g=new ye;g.setAttribute("position",new ne(p,f)),g.setAttribute("outputDirection",new ne(x,f)),e.push(new Vt(g,null)),n>br&&n--}return{lodMeshes:e,sizeLods:t}}function Of(s,t,e){let n=new Sn(s,t,e);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ay(s,t,e){return new Oe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ry(s,t,e){return new Oe({name:"SphericalGaussianBlur",defines:{SAMPLES:Sy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function kf(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Hf(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var rc=class extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ro(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xi(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:mi});r.uniforms.tEquirect.value=e;let o=new Vt(i,r),a=e.minFilter;return e.minFilter===ji&&(e.minFilter=$e),new ul(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function Cy(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===pl||f===ml)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new rc(p.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",l),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===pl||f===ml,x=f===Ki||f===Ms;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new sc(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return p&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new sc(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===pl?u.mapping=Ki:f===ml&&(u.mapping=Ms),u}function c(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function l(u){let f=u.target;f.removeEventListener("dispose",l);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Iy(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&gs("WebGLRenderer: "+n+" extension not supported."),i}}}function Py(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let b=0,y=M.length;b<y;b+=3){let w=M[b+0],E=M[b+1],R=M[b+2];u.push(w,E,E,R,R,w)}}else{let M=p.array;x=p.version;for(let b=0,y=M.length/3-1;b<y;b+=3){let w=b+0,E=b+1,R=b+2;u.push(w,E,E,R,R,w)}}let g=new(p.count>=65535?eo:to)(u,1);g.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Ly(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function l(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Dy(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Ot("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ny(s,t,e){let n=new WeakMap,i=new Pe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let A=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*w*4*d),R=new Jr(E,y,w,d);R.type=Xn,R.needsUpdate=!0;let _=b*4;for(let C=0;C<d;C++){let N=g[C],U=m[C],D=M[C],P=y*w*4*C;for(let B=0;B<N.count;B++){let W=B*_;f===!0&&(i.fromBufferAttribute(N,B),E[P+W+0]=i.x,E[P+W+1]=i.y,E[P+W+2]=i.z,E[P+W+3]=0),p===!0&&(i.fromBufferAttribute(U,B),E[P+W+4]=i.x,E[P+W+5]=i.y,E[P+W+6]=i.z,E[P+W+7]=0),x===!0&&(i.fromBufferAttribute(D,B),E[P+W+8]=i.x,E[P+W+9]=i.y,E[P+W+10]=i.z,E[P+W+11]=D.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new xt(y,w)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Uy(s,t,e,n,i){let r=new WeakMap;function o(l){let h=i.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var zy={[zh]:"LINEAR_TONE_MAPPING",[Fh]:"REINHARD_TONE_MAPPING",[Bh]:"CINEON_TONE_MAPPING",[Ao]:"ACES_FILMIC_TONE_MAPPING",[kh]:"AGX_TONE_MAPPING",[Hh]:"NEUTRAL_TONE_MAPPING",[Oh]:"CUSTOM_TONE_MAPPING"};function Fy(s,t,e,n,i,r){let o=new Sn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ye;l.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new te([0,2,0,0,2,0],2));let h=new ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Vt(l,h),u=new fr(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,M=[],b=!1;this.setSize=function(y,w){o.setSize(y,w),a!==null&&a.setSize(y,w),c!==null&&c.setSize(y,w);for(let E=0;E<M.length;E++){let R=M[E];R.setSize&&R.setSize(y,w)}},this.setEffects=function(y){M=y,b=M.length>0&&M[0].isRenderPass===!0;let w=o.width,E=o.height;M.length>0&&a===null&&(a=new Sn(w,E,{type:ri,depthBuffer:!1,stencilBuffer:!1}),c=new Sn(w,E,{type:ri,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let _=M[R];_.setSize&&_.setSize(w,E)}},this.begin=function(y,w){if(x||y.toneMapping===ii&&M.length===0)return!1;if(m=w,w!==null){let E=w.width,R=w.height;(o.width!==E||o.height!==R)&&this.setSize(E,R)}return b===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=ii,!0},this.hasRenderPass=function(){return b},this.end=function(y,w){y.toneMapping=g,x=!0;let E=o,R=a;for(let _=0;_<M.length;_++){let A=M[_];A.enabled!==!1&&(A.render(y,R,E,w),A.needsSwap!==!1&&(E=R,R=R===a?c:a))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},Qt.getTransfer(f)===ue&&(h.defines.SRGB_TRANSFER="");let _=zy[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(m),y.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var ap=new yn,fu=new Wi(1,1),lp=new Jr,cp=new Ga,hp=new ro,Vf=[],Gf=[],Wf=new Float32Array(16),Xf=new Float32Array(9),qf=new Float32Array(4);function Sr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Vf[i];if(r===void 0&&(r=new Float32Array(i),Vf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ze(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function lc(s,t){let e=Gf[t];e===void 0&&(e=new Int32Array(t),Gf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function By(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Oy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2fv(this.addr,t),Ze(e,t)}}function ky(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;s.uniform3fv(this.addr,t),Ze(e,t)}}function Hy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4fv(this.addr,t),Ze(e,t)}}function Vy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;qf.set(n),s.uniformMatrix2fv(this.addr,!1,qf),Ze(e,n)}}function Gy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Xf.set(n),s.uniformMatrix3fv(this.addr,!1,Xf),Ze(e,n)}}function Wy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Wf.set(n),s.uniformMatrix4fv(this.addr,!1,Wf),Ze(e,n)}}function Xy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function qy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2iv(this.addr,t),Ze(e,t)}}function $y(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;s.uniform3iv(this.addr,t),Ze(e,t)}}function Yy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4iv(this.addr,t),Ze(e,t)}}function Zy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Jy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2uiv(this.addr,t),Ze(e,t)}}function Ky(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;s.uniform3uiv(this.addr,t),Ze(e,t)}}function jy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4uiv(this.addr,t),Ze(e,t)}}function Qy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(fu.compareFunction=e.isReversedDepthBuffer()?ec:tc,r=fu):r=ap,e.setTexture2D(t||r,i)}function tv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cp,i)}function ev(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||hp,i)}function nv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lp,i)}function iv(s){switch(s){case 5126:return By;case 35664:return Oy;case 35665:return ky;case 35666:return Hy;case 35674:return Vy;case 35675:return Gy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return qy;case 35668:case 35672:return $y;case 35669:case 35673:return Yy;case 5125:return Zy;case 36294:return Jy;case 36295:return Ky;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return nv}}function sv(s,t){s.uniform1fv(this.addr,t)}function rv(s,t){let e=Sr(t,this.size,2);s.uniform2fv(this.addr,e)}function ov(s,t){let e=Sr(t,this.size,3);s.uniform3fv(this.addr,e)}function av(s,t){let e=Sr(t,this.size,4);s.uniform4fv(this.addr,e)}function lv(s,t){let e=Sr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function cv(s,t){let e=Sr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function hv(s,t){let e=Sr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function uv(s,t){s.uniform1iv(this.addr,t)}function dv(s,t){s.uniform2iv(this.addr,t)}function fv(s,t){s.uniform3iv(this.addr,t)}function pv(s,t){s.uniform4iv(this.addr,t)}function mv(s,t){s.uniform1uiv(this.addr,t)}function gv(s,t){s.uniform2uiv(this.addr,t)}function xv(s,t){s.uniform3uiv(this.addr,t)}function yv(s,t){s.uniform4uiv(this.addr,t)}function vv(s,t,e){let n=this.cache,i=t.length,r=lc(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ze(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=fu:o=ap;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function _v(s,t,e){let n=this.cache,i=t.length,r=lc(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||cp,r[o])}function bv(s,t,e){let n=this.cache,i=t.length,r=lc(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||hp,r[o])}function Mv(s,t,e){let n=this.cache,i=t.length,r=lc(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||lp,r[o])}function Sv(s){switch(s){case 5126:return sv;case 35664:return rv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return hv;case 5124:case 35670:return uv;case 35667:case 35671:return dv;case 35668:case 35672:return fv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return xv;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return Mv}}var pu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=iv(e.type)}},mu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sv(e.type)}},gu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},uu=/(\w+)(\])?(\[|\.)?/g;function $f(s,t){s.seq.push(t),s.map[t.id]=t}function wv(s,t,e){let n=s.name,i=n.length;for(uu.lastIndex=0;;){let r=uu.exec(n),o=uu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){$f(e,l===void 0?new pu(a,s,t):new mu(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new gu(a),$f(e,d)),e=d}}}var Mr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);wv(a,c,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Yf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Ev=37297,Tv=0;function Av(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Zf=new Ht;function Rv(s){Qt._getMatrix(Zf,Qt.workingColorSpace,s);let t=`mat3( ${Zf.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(s)){case $r:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Jf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Av(s.getShaderSource(t),a)}else return r}function Cv(s,t){let e=Rv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Iv={[zh]:"Linear",[Fh]:"Reinhard",[Bh]:"Cineon",[Ao]:"ACESFilmic",[kh]:"AgX",[Hh]:"Neutral",[Oh]:"Custom"};function Pv(s,t){let e=Iv[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ic=new L;function Lv(){Qt.getLuminanceCoefficients(ic);let s=ic.x.toFixed(4),t=ic.y.toFixed(4),e=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Nv(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Uv(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Bo(s){return s!==""}function Kf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(s){return s.replace(zv,Bv)}var Fv=new Map;function Bv(s,t){let e=qt[t];if(e===void 0){let n=Fv.get(t);if(n!==void 0)e=qt[n],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return xu(e)}var Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(s){return s.replace(Ov,kv)}function kv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tp(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Hv={[_s]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function Vv(s){return Hv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Gv={[Ki]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE_UV"};function Wv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Gv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Xv={[Ms]:"ENVMAP_MODE_REFRACTION"};function qv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Xv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $v={[Uh]:"ENVMAP_BLENDING_MULTIPLY",[ff]:"ENVMAP_BLENDING_MIX",[pf]:"ENVMAP_BLENDING_ADD"};function Yv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":$v[s.combine]||"ENVMAP_BLENDING_NONE"}function Zv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Jv(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Vv(e),l=Wv(e),h=qv(e),d=Yv(e),u=Zv(e),f=Dv(e),p=Nv(r),x=i.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Bo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Bo).join(`
`),m.length>0&&(m+=`
`)):(g=[tp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),m=[tp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?qt.tonemapping_pars_fragment:"",e.toneMapping!==ii?Pv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Cv("linearToOutputTexel",e.outputColorSpace),Lv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bo).join(`
`)),o=xu(o),o=Kf(o,e),o=jf(o,e),a=xu(a),a=Kf(a,e),a=jf(a,e),o=Qf(o),a=Qf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=M+g+o,y=M+m+a,w=Yf(i,i.VERTEX_SHADER,b),E=Yf(i,i.FRAGMENT_SHADER,y);i.attachShader(x,w),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(N){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(x)||"",D=i.getShaderInfoLog(w)||"",P=i.getShaderInfoLog(E)||"",B=U.trim(),W=D.trim(),$=P.trim(),Q=!0,q=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,w,E);else{let Z=Jf(i,w,"vertex"),G=Jf(i,E,"fragment");Ot("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+Z+`
`+G)}else B!==""?Bt("WebGLProgram: Program Info Log:",B):(W===""||$==="")&&(q=!1);q&&(N.diagnostics={runnable:Q,programLog:B,vertexShader:{log:W,prefix:g},fragmentShader:{log:$,prefix:m}})}i.deleteShader(w),i.deleteShader(E),_=new Mr(i,x),A=Uv(i,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(x,Ev)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}var Kv=0,yu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vu(t),e.set(t,n)),n}},vu=class{constructor(t){this.id=Kv++,this.code=t,this.usedTimes=0}};function jv(s){return s===ts||s===No||s===Uo}function Qv(s,t,e,n,i,r){let o=new Kr,a=new yu,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,A,C,N,U,D){let P=N.fog,B=U.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=t.get(_.envMap||W,$),q=Q&&Q.mapping===Ro?Q.image.height:null,Z=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Bt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let G=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ht=G!==void 0?G.length:0,ct=0;B.morphAttributes.position!==void 0&&(ct=1),B.morphAttributes.normal!==void 0&&(ct=2),B.morphAttributes.color!==void 0&&(ct=3);let ie,$t,ee,J;if(Z){let be=yi[Z];ie=be.vertexShader,$t=be.fragmentShader}else{ie=_.vertexShader,$t=_.fragmentShader;let be=a.getVertexShaderStage(_),ce=a.getFragmentShaderStage(_);a.update(_,be,ce),ee=be.id,J=ce.id}let nt=s.getRenderTarget(),Mt=s.state.buffers.depth.getReversed(),kt=U.isInstancedMesh===!0,wt=U.isBatchedMesh===!0,Yt=!!_.map,qe=!!_.matcap,Zt=!!Q,oe=!!_.aoMap,_e=!!_.lightMap,jt=!!_.bumpMap&&_.wireframe===!1,Ie=!!_.normalMap,Je=!!_.displacementMap,Mn=!!_.emissiveMap,De=!!_.metalnessMap,He=!!_.roughnessMap,O=_.anisotropy>0,an=_.clearcoat>0,de=_.dispersion>0,I=_.retroreflectivity>0,S=_.iridescence>0,k=_.sheen>0,X=_.transmission>0,K=O&&!!_.anisotropyMap,lt=an&&!!_.clearcoatMap,ut=an&&!!_.clearcoatNormalMap,j=an&&!!_.clearcoatRoughnessMap,et=S&&!!_.iridescenceMap,dt=S&&!!_.iridescenceThicknessMap,Nt=k&&!!_.sheenColorMap,gt=k&&!!_.sheenRoughnessMap,ft=!!_.specularMap,Ut=!!_.specularColorMap,Ft=!!_.specularIntensityMap,Gt=X&&!!_.transmissionMap,F=X&&!!_.thicknessMap,pt=!!_.gradientMap,tt=!!_.alphaMap,mt=_.alphaTest>0,bt=!!_.alphaHash,it=!!_.extensions,zt=ii;_.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(zt=s.toneMapping);let Pt={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:ie,fragmentShader:$t,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:wt,batchingColor:wt&&U._colorsTexture!==null,instancing:kt,instancingColor:kt&&U.instanceColor!==null,instancingMorph:kt&&U.morphTexture!==null,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Yt,matcap:qe,envMap:Zt,envMapMode:Zt&&Q.mapping,envMapCubeUVHeight:q,aoMap:oe,lightMap:_e,bumpMap:jt,normalMap:Ie,displacementMap:Je,emissiveMap:Mn,normalMapObjectSpace:Ie&&_.normalMapType===xf,normalMapTangentSpace:Ie&&_.normalMapType===Ql,packedNormalMap:Ie&&_.normalMapType===Ql&&jv(_.normalMap.format),metalnessMap:De,roughnessMap:He,anisotropy:O,anisotropyMap:K,clearcoat:an,clearcoatMap:lt,clearcoatNormalMap:ut,clearcoatRoughnessMap:j,dispersion:de,retroreflection:I,iridescence:S,iridescenceMap:et,iridescenceThicknessMap:dt,sheen:k,sheenColorMap:Nt,sheenRoughnessMap:gt,specularMap:ft,specularColorMap:Ut,specularIntensityMap:Ft,transmission:X,transmissionMap:Gt,thicknessMap:F,gradientMap:pt,opaque:_.transparent===!1&&_.blending===Ji&&_.alphaToCoverage===!1,alphaMap:tt,alphaTest:mt,alphaHash:bt,combine:_.combine,mapUv:Yt&&p(_.map.channel),aoMapUv:oe&&p(_.aoMap.channel),lightMapUv:_e&&p(_.lightMap.channel),bumpMapUv:jt&&p(_.bumpMap.channel),normalMapUv:Ie&&p(_.normalMap.channel),displacementMapUv:Je&&p(_.displacementMap.channel),emissiveMapUv:Mn&&p(_.emissiveMap.channel),metalnessMapUv:De&&p(_.metalnessMap.channel),roughnessMapUv:He&&p(_.roughnessMap.channel),anisotropyMapUv:K&&p(_.anisotropyMap.channel),clearcoatMapUv:lt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ut&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:gt&&p(_.sheenRoughnessMap.channel),specularMapUv:ft&&p(_.specularMap.channel),specularColorMapUv:Ut&&p(_.specularColorMap.channel),specularIntensityMapUv:Ft&&p(_.specularIntensityMap.channel),transmissionMapUv:Gt&&p(_.transmissionMap.channel),thicknessMapUv:F&&p(_.thicknessMap.channel),alphaMapUv:tt&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ie||O),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(Yt||tt),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&Ie===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Mt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:ct,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:zt,decodeVideoTexture:Yt&&_.map.isVideoTexture===!0&&Qt.getTransfer(_.map.colorSpace)===ue,decodeVideoTextureEmissive:Mn&&_.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(_.emissiveMap.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===we,flipSided:_.side===sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:it&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&_.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function g(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)A.push(C),A.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(A,_),M(A,_),A.push(s.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function m(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function M(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function b(_){let A=f[_.type],C;if(A){let N=yi[A];C=Uf.clone(N.uniforms)}else C=_.uniforms;return C}function y(_,A){let C=h.get(A);return C!==void 0?++C.usedTimes:(C=new Jv(s,A,_,i),l.push(C),h.set(A,C)),C}function w(_){if(--_.usedTimes===0){let A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:w,releaseShaderCache:E,programs:l,dispose:R}}function t1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function e1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function ep(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function np(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,g,m){let M=s[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},s[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=o(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=g,M.group=m),t++,M}function c(u,f,p,x,g,m,M){M.reversedDepth===!0&&(g=-g);let b=a(u,f,p,x,g,m);p.transmission>0?n.push(b):p.transparent===!0?i.push(b):e.push(b)}function l(u,f,p,x,g,m){let M=a(u,f,p,x,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||e1),n.length>1&&n.sort(f||ep),i.length>1&&i.sort(f||ep)}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function n1(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new np,s.set(n,[o])):i>=r.length?(o=new np,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function i1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new ot};break;case"SpotLight":e={position:new L,direction:new L,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function s1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var r1=0;function o1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function a1(s){let t=new i1,e=s1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,r=new ae,o=new ae;function a(l){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,M=0,b=0,y=0,w=0,E=0,R=0,_=0,A=0,C=0;l.sort(o1);for(let U=0,D=l.length;U<D;U++){let P=l[U],B=P.color,W=P.intensity,$=P.distance,Q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ts?Q=P.shadow.map.texture:Q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=B.r*W,d+=B.g*W,u+=B.b*W;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],W);C++}else if(P.isSunLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[p]=G,n.sunShadowMap[p]=Q;let ht=Z.getViewportCount();for(let ct=0;ct<ht;ct++)n.sunShadowMatrix[x+ct]=Z.getMatrix(ct),n.sunShadowCascade[x+ct]=Z._cascadeData[ct];x+=ht,p++}n.sun[f]=q,f++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=Q,n.directionalShadowMatrix[g]=P.shadow.matrix,w++}n.directional[g]=q,g++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(B).multiplyScalar(W),q.distance=$,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[M]=q;let Z=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,Z.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[M]=Z.matrix,P.castShadow){let G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[M]=G,n.spotShadowMap[M]=Q,R++}M++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(B).multiplyScalar(W),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[b]=q,b++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let Z=P.shadow,G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=Q,n.pointShadowMatrix[m]=P.shadow.matrix,E++}n.point[m]=q,m++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(W),q.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[y]=q,y++}}b>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==m||N.spotLength!==M||N.rectAreaLength!==b||N.hemiLength!==y||N.numSunShadows!==p||N.numDirectionalShadows!==w||N.numPointShadows!==E||N.numSpotShadows!==R||N.numSpotMaps!==_||N.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=b,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,N.sunLength=f,N.directionalLength=g,N.pointLength=m,N.spotLength=M,N.rectAreaLength=b,N.hemiLength=y,N.numSunShadows=p,N.numDirectionalShadows=w,N.numPointShadows=E,N.numSpotShadows=R,N.numSpotMaps=_,N.numLightProbes=C,n.version=r1++)}function c(l,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let M=0,b=l.length;M<b;M++){let y=l[M];if(y.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),u++}else if(y.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function ip(s){let t=new a1(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function c(u){i.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function l1(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new ip(s),t.set(i,[a])):r>=o.length?(a=new ip(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,u1=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],d1=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],sp=new ae,Fo=new L,du=new L;function f1(s,t,e){let n=new lr,i=new xt,r=new xt,o=new Pe,a=new Qa,c=new tl,l={},h=e.maxTextureSize,d={[Zi]:sn,[sn]:Zi,[we]:we},u=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:c1,fragmentShader:h1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new ye;p.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Vt(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let m=this.type;this.render=function(E,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===$d&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_s);let A=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),U=s.state;U.setBlending(mi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let D=m!==this.type;D&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=E.length;P<B;P++){let W=E[P],$=W.shadow;if($===void 0){Bt("WebGLShadowMap:",W,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let Q=$.getFrameExtents();i.multiply(Q),r.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,$.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,$.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if($.camera._reversedDepth=q,$.map===null||D===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===mr){if(W.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Sn(i.x,i.y,{format:ts,type:ri,minFilter:$e,magFilter:$e,generateMipmaps:!1}),$.map.texture.name=W.name+".shadowMap",$.map.depthTexture=new Wi(i.x,i.y,Xn),$.map.depthTexture.name=W.name+".shadowMapDepth",$.map.depthTexture.format=ui,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=je,$.map.depthTexture.magFilter=je}else W.isPointLight?($.map=new rc(i.x),$.map.depthTexture=new Xa(i.x,si)):($.map=new Sn(i.x,i.y),$.map.depthTexture=new Wi(i.x,i.y,si)),$.map.depthTexture.name=W.name+".shadowMap",$.map.depthTexture.format=ui,this.type===_s?($.map.depthTexture.compareFunction=q?ec:tc,$.map.depthTexture.minFilter=$e,$.map.depthTexture.magFilter=$e):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=je,$.map.depthTexture.magFilter=je);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==i.x||$.map.height!==i.y)&&$.map.setSize(i.x,i.y);let Z=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();W.isPointLight!==!0&&$.updateMatrices(W,_);for(let G=0;G<Z;G++){let ht=$.getCamera(G);if(W.isPointLight){let ct=$.camera,ie=$.matrix,$t=W.distance||ct.far;$t!==ct.far&&(ct.far=$t,ct.updateProjectionMatrix()),Fo.setFromMatrixPosition(W.matrixWorld),ct.position.copy(Fo),du.copy(ct.position),du.add(u1[G]),ct.up.copy(d1[G]),ct.lookAt(du),ct.updateMatrixWorld(),ie.makeTranslation(-Fo.x,-Fo.y,-Fo.z),sp.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),$._frustum.setFromProjectionMatrix(sp,ct.coordinateSystem,ct.reversedDepth)}if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,G),s.clear();else{G===0&&(s.setRenderTarget($.map),s.clear());let ct=$.getViewport(G);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),U.viewport(o)}n=$.getFrustum(G),y(R,_,ht,W,this.type)}$.isPointLightShadow!==!0&&this.type===mr&&M($,_),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(A,C,N)};function M(E,R){let _=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Sn(i.x,i.y,{format:ts,type:ri}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,_,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,_,f,x,null)}function b(E,R,_,A){let C=null,N=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=_.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=C.uuid,D=R.uuid,P=l[U];P===void 0&&(P={},l[U]=P);let B=P[D];B===void 0&&(B=C.clone(),P[D]=B,R.addEventListener("dispose",w)),C=B}if(C.visible=R.visible,C.wireframe=R.wireframe,A===mr?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=s.properties.get(C);U.light=_}return C}function y(E,R,_,A,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===mr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let D=t.update(E),P=E.material;if(Array.isArray(P)){let B=D.groups;for(let W=0,$=B.length;W<$;W++){let Q=B[W],q=P[Q.materialIndex];if(q&&q.visible){let Z=b(E,q,A,C);E.onBeforeShadow(s,E,R,_,D,Z,Q),s.renderBufferDirect(_,null,D,Z,E,Q),E.onAfterShadow(s,E,R,_,D,Z,Q)}}}else if(P.visible){let B=b(E,P,A,C);E.onBeforeShadow(s,E,R,_,D,B,null),s.renderBufferDirect(_,null,D,B,E,null),E.onAfterShadow(s,E,R,_,D,B,null)}}let U=E.children;for(let D=0,P=U.length;D<P;D++)y(U[D],R,_,A,C)}function w(E){E.target.removeEventListener("dispose",w);for(let _ in l){let A=l[_],C=E.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function p1(s,t){function e(){let F=!1,pt=new Pe,tt=null,mt=new Pe(0,0,0,0);return{setMask:function(bt){tt!==bt&&!F&&(s.colorMask(bt,bt,bt,bt),tt=bt)},setLocked:function(bt){F=bt},setClear:function(bt,it,zt,Pt,be){be===!0&&(bt*=Pt,it*=Pt,zt*=Pt),pt.set(bt,it,zt,Pt),mt.equals(pt)===!1&&(s.clearColor(bt,it,zt,Pt),mt.copy(pt))},reset:function(){F=!1,tt=null,mt.set(-1,0,0,0)}}}function n(){let F=!1,pt=!1,tt=null,mt=null,bt=null;return{setReversed:function(it){if(pt!==it){let zt=t.get("EXT_clip_control");it?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),pt=it;let Pt=bt;bt=null,this.setClear(Pt)}},getReversed:function(){return pt},setTest:function(it){it?nt(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(it){tt!==it&&!F&&(s.depthMask(it),tt=it)},setFunc:function(it){if(pt&&(it=Rf[it]),mt!==it){switch(it){case Pa:s.depthFunc(s.NEVER);break;case La:s.depthFunc(s.ALWAYS);break;case Da:s.depthFunc(s.LESS);break;case tr:s.depthFunc(s.LEQUAL);break;case Na:s.depthFunc(s.EQUAL);break;case Ua:s.depthFunc(s.GEQUAL);break;case za:s.depthFunc(s.GREATER);break;case Fa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}mt=it}},setLocked:function(it){F=it},setClear:function(it){bt!==it&&(bt=it,pt&&(it=1-it),s.clearDepth(it))},reset:function(){F=!1,tt=null,mt=null,bt=null,pt=!1}}}function i(){let F=!1,pt=null,tt=null,mt=null,bt=null,it=null,zt=null,Pt=null,be=null;return{setTest:function(ce){F||(ce?nt(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(ce){pt!==ce&&!F&&(s.stencilMask(ce),pt=ce)},setFunc:function(ce,Jn,ai){(tt!==ce||mt!==Jn||bt!==ai)&&(s.stencilFunc(ce,Jn,ai),tt=ce,mt=Jn,bt=ai)},setOp:function(ce,Jn,ai){(it!==ce||zt!==Jn||Pt!==ai)&&(s.stencilOp(ce,Jn,ai),it=ce,zt=Jn,Pt=ai)},setLocked:function(ce){F=ce},setClear:function(ce){be!==ce&&(s.clearStencil(ce),be=ce)},reset:function(){F=!1,pt=null,tt=null,mt=null,bt=null,it=null,zt=null,Pt=null,be=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,b=null,y=null,w=null,E=null,R=null,_=new ot(0,0,0),A=0,C=!1,N=null,U=null,D=null,P=null,B=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,Q=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=Q>=2);let Z=null,G={},ht=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),ie=new Pe().fromArray(ht),$t=new Pe().fromArray(ct);function ee(F,pt,tt,mt){let bt=new Uint8Array(4),it=s.createTexture();s.bindTexture(F,it),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let zt=0;zt<tt;zt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,mt,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(pt+zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return it}let J={};J[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(s.DEPTH_TEST),o.setFunc(tr),jt(!1),Ie(Ih),nt(s.CULL_FACE),oe(mi);function nt(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Mt(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function kt(F,pt){return u[F]!==pt?(s.bindFramebuffer(F,pt),u[F]=pt,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function wt(F,pt){let tt=p,mt=!1;if(F){tt=f.get(pt),tt===void 0&&(tt=[],f.set(pt,tt));let bt=F.textures;if(tt.length!==bt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let it=0,zt=bt.length;it<zt;it++)tt[it]=s.COLOR_ATTACHMENT0+it;tt.length=bt.length,mt=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,mt=!0);mt&&s.drawBuffers(tt)}function Yt(F){return x!==F?(s.useProgram(F),x=F,!0):!1}let qe={[bs]:s.FUNC_ADD,[Zd]:s.FUNC_SUBTRACT,[Jd]:s.FUNC_REVERSE_SUBTRACT};qe[Kd]=s.MIN,qe[jd]=s.MAX;let Zt={[Qd]:s.ZERO,[tf]:s.ONE,[ef]:s.SRC_COLOR,[Dh]:s.SRC_ALPHA,[lf]:s.SRC_ALPHA_SATURATE,[of]:s.DST_COLOR,[sf]:s.DST_ALPHA,[nf]:s.ONE_MINUS_SRC_COLOR,[Nh]:s.ONE_MINUS_SRC_ALPHA,[af]:s.ONE_MINUS_DST_COLOR,[rf]:s.ONE_MINUS_DST_ALPHA,[cf]:s.CONSTANT_COLOR,[hf]:s.ONE_MINUS_CONSTANT_COLOR,[uf]:s.CONSTANT_ALPHA,[df]:s.ONE_MINUS_CONSTANT_ALPHA};function oe(F,pt,tt,mt,bt,it,zt,Pt,be,ce){if(F===mi){g===!0&&(Mt(s.BLEND),g=!1);return}if(g===!1&&(nt(s.BLEND),g=!0),F!==Yd){if(F!==m||ce!==C){if((M!==bs||w!==bs)&&(s.blendEquation(s.FUNC_ADD),M=bs,w=bs),ce)switch(F){case Ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gi:s.blendFunc(s.ONE,s.ONE);break;case Ph:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ot("WebGLState: Invalid blending: ",F);break}else switch(F){case Ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ph:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lh:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",F);break}b=null,y=null,E=null,R=null,_.set(0,0,0),A=0,m=F,C=ce}return}bt=bt||pt,it=it||tt,zt=zt||mt,(pt!==M||bt!==w)&&(s.blendEquationSeparate(qe[pt],qe[bt]),M=pt,w=bt),(tt!==b||mt!==y||it!==E||zt!==R)&&(s.blendFuncSeparate(Zt[tt],Zt[mt],Zt[it],Zt[zt]),b=tt,y=mt,E=it,R=zt),(Pt.equals(_)===!1||be!==A)&&(s.blendColor(Pt.r,Pt.g,Pt.b,be),_.copy(Pt),A=be),m=F,C=!1}function _e(F,pt){F.side===we?Mt(s.CULL_FACE):nt(s.CULL_FACE);let tt=F.side===sn;pt&&(tt=!tt),jt(tt),F.blending===Ji&&F.transparent===!1?oe(mi):oe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let mt=F.stencilWrite;a.setTest(mt),mt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Mn(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function jt(F){N!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),N=F)}function Ie(F){F!==Xd?(nt(s.CULL_FACE),F!==U&&(F===Ih?s.cullFace(s.BACK):F===qd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),U=F}function Je(F){F!==D&&($&&s.lineWidth(F),D=F)}function Mn(F,pt,tt){F?(nt(s.POLYGON_OFFSET_FILL),(P!==pt||B!==tt)&&(P=pt,B=tt,o.getReversed()&&(pt=-pt),s.polygonOffset(pt,tt))):Mt(s.POLYGON_OFFSET_FILL)}function De(F){F?nt(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function He(F){F===void 0&&(F=s.TEXTURE0+W-1),Z!==F&&(s.activeTexture(F),Z=F)}function O(F,pt,tt){tt===void 0&&(Z===null?tt=s.TEXTURE0+W-1:tt=Z);let mt=G[tt];mt===void 0&&(mt={type:void 0,texture:void 0},G[tt]=mt),(mt.type!==F||mt.texture!==pt)&&(Z!==tt&&(s.activeTexture(tt),Z=tt),s.bindTexture(F,pt||J[F]),mt.type=F,mt.texture=pt)}function an(){let F=G[Z];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function de(){try{s.compressedTexImage2D(...arguments)}catch(F){Ot("WebGLState:",F)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(F){Ot("WebGLState:",F)}}function S(){try{s.texSubImage2D(...arguments)}catch(F){Ot("WebGLState:",F)}}function k(){try{s.texSubImage3D(...arguments)}catch(F){Ot("WebGLState:",F)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Ot("WebGLState:",F)}}function K(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Ot("WebGLState:",F)}}function lt(){try{s.texStorage2D(...arguments)}catch(F){Ot("WebGLState:",F)}}function ut(){try{s.texStorage3D(...arguments)}catch(F){Ot("WebGLState:",F)}}function j(){try{s.texImage2D(...arguments)}catch(F){Ot("WebGLState:",F)}}function et(){try{s.texImage3D(...arguments)}catch(F){Ot("WebGLState:",F)}}function dt(F){return d[F]!==void 0?d[F]:s.getParameter(F)}function Nt(F,pt){d[F]!==pt&&(s.pixelStorei(F,pt),d[F]=pt)}function gt(F){ie.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ie.copy(F))}function ft(F){$t.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),$t.copy(F))}function Ut(F,pt){let tt=l.get(pt);tt===void 0&&(tt=new WeakMap,l.set(pt,tt));let mt=tt.get(F);mt===void 0&&(mt=s.getUniformBlockIndex(pt,F.name),tt.set(F,mt))}function Ft(F,pt){let mt=l.get(pt).get(F);c.get(pt)!==mt&&(s.uniformBlockBinding(pt,mt,F.__bindingPointIndex),c.set(pt,mt))}function Gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},Z=null,G={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,b=null,y=null,w=null,E=null,R=null,_=new ot(0,0,0),A=0,C=!1,N=null,U=null,D=null,P=null,B=null,ie.set(0,0,s.canvas.width,s.canvas.height),$t.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:Mt,bindFramebuffer:kt,drawBuffers:wt,useProgram:Yt,setBlending:oe,setMaterial:_e,setFlipSided:jt,setCullFace:Ie,setLineWidth:Je,setPolygonOffset:Mn,setScissorTest:De,activeTexture:He,bindTexture:O,unbindTexture:an,compressedTexImage2D:de,compressedTexImage3D:I,texImage2D:j,texImage3D:et,pixelStorei:Nt,getParameter:dt,updateUBOMapping:Ut,uniformBlockBinding:Ft,texStorage2D:lt,texStorage3D:ut,texSubImage2D:S,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:gt,viewport:ft,reset:Gt}}function m1(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,S){return p?new OffscreenCanvas(I,S):Yr("canvas")}function g(I,S,k){let X=1,K=de(I);if((K.width>k||K.height>k)&&(X=k/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let lt=Math.floor(X*K.width),ut=Math.floor(X*K.height);u===void 0&&(u=x(lt,ut));let j=S?x(lt,ut):u;return j.width=lt,j.height=ut,j.getContext("2d").drawImage(I,0,0,lt,ut),Bt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+lt+"x"+ut+")."),j}else return"data"in I&&Bt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function m(I){return I.generateMipmaps}function M(I){s.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,S,k,X,K,lt=!1){if(I!==null){if(s[I]!==void 0)return s[I];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ut;X&&(ut=t.get("EXT_texture_norm16"),ut||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=S;if(S===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8),k===s.UNSIGNED_SHORT&&ut&&(j=ut.R16_EXT),k===s.SHORT&&ut&&(j=ut.R16_SNORM_EXT)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),S===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8),k===s.UNSIGNED_SHORT&&ut&&(j=ut.RG16_EXT),k===s.SHORT&&ut&&(j=ut.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGB8UI),k===s.UNSIGNED_SHORT&&(j=s.RGB16UI),k===s.UNSIGNED_INT&&(j=s.RGB32UI),k===s.BYTE&&(j=s.RGB8I),k===s.SHORT&&(j=s.RGB16I),k===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),k===s.UNSIGNED_INT&&(j=s.RGBA32UI),k===s.BYTE&&(j=s.RGBA8I),k===s.SHORT&&(j=s.RGBA16I),k===s.INT&&(j=s.RGBA32I)),S===s.RGB&&(k===s.UNSIGNED_SHORT&&ut&&(j=ut.RGB16_EXT),k===s.SHORT&&ut&&(j=ut.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),S===s.RGBA){let et=lt?$r:Qt.getTransfer(K);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=et===ue?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&ut&&(j=ut.RGBA16_EXT),k===s.SHORT&&ut&&(j=ut.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function w(I,S){let k;return I?S===null||S===si||S===xr?k=s.DEPTH24_STENCIL8:S===Xn?k=s.DEPTH32F_STENCIL8:S===gr&&(k=s.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===si||S===xr?k=s.DEPTH_COMPONENT24:S===Xn?k=s.DEPTH_COMPONENT32F:S===gr&&(k=s.DEPTH_COMPONENT16),k}function E(I,S){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==je&&I.minFilter!==$e?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function R(I){let S=I.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function _(I){let S=I.target;S.removeEventListener("dispose",_),N(S)}function A(I){let S=n.get(I);if(S.__webglInit===void 0)return;let k=I.source,X=f.get(k);if(X){let K=X[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(I),Object.keys(X).length===0&&f.delete(k)}n.remove(I)}function C(I){let S=n.get(I);s.deleteTexture(S.__webglTexture);let k=I.source,X=f.get(k);delete X[S.__cacheKey],o.memory.textures--}function N(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let K=0;K<S.__webglFramebuffer[X].length;K++)s.deleteFramebuffer(S.__webglFramebuffer[X][K]);else s.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)s.deleteFramebuffer(S.__webglFramebuffer[X]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let k=I.textures;for(let X=0,K=k.length;X<K;X++){let lt=n.get(k[X]);lt.__webglTexture&&(s.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(k[X])}n.remove(I)}let U=0;function D(){U=0}function P(){return U}function B(I){U=I}function W(){let I=U;return I>=i.maxTextures&&Bt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,I}function $(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function Q(I,S){let k=n.get(I);if(I.isVideoTexture&&O(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&k.__version!==I.version){let X=I.image;if(X===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(k,I,S);return}}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function q(I,S){let k=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){Mt(k,I,S);return}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function Z(I,S){let k=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){Mt(k,I,S);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function G(I,S){let k=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&k.__version!==I.version){kt(k,I,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}let ht={[Gi]:s.REPEAT,[Vn]:s.CLAMP_TO_EDGE,[Ba]:s.MIRRORED_REPEAT},ct={[je]:s.NEAREST,[mf]:s.NEAREST_MIPMAP_NEAREST,[Co]:s.NEAREST_MIPMAP_LINEAR,[$e]:s.LINEAR,[gl]:s.LINEAR_MIPMAP_NEAREST,[ji]:s.LINEAR_MIPMAP_LINEAR},ie={[vf]:s.NEVER,[wf]:s.ALWAYS,[_f]:s.LESS,[tc]:s.LEQUAL,[bf]:s.EQUAL,[ec]:s.GEQUAL,[Mf]:s.GREATER,[Sf]:s.NOTEQUAL};function $t(I,S){if(S.type===Xn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===$e||S.magFilter===gl||S.magFilter===Co||S.magFilter===ji||S.minFilter===$e||S.minFilter===gl||S.minFilter===Co||S.minFilter===ji)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ht[S.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ht[S.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ht[S.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ct[S.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ct[S.minFilter]),S.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,ie[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===je||S.minFilter!==Co&&S.minFilter!==ji||S.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ee(I,S){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",R));let X=S.source,K=f.get(X);K===void 0&&(K={},f.set(X,K));let lt=$(S);if(lt!==I.__cacheKey){K[lt]===void 0&&(K[lt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),K[lt].usedTimes++;let ut=K[I.__cacheKey];ut!==void 0&&(K[I.__cacheKey].usedTimes--,ut.usedTimes===0&&C(S)),I.__cacheKey=lt,I.__webglTexture=K[lt].texture}return k}function J(I,S,k){return Math.floor(Math.floor(I/k)/S)}function nt(I,S,k,X){let lt=I.updateRanges;if(lt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,k,X,S.data);else{lt.sort((Nt,gt)=>Nt.start-gt.start);let ut=0;for(let Nt=1;Nt<lt.length;Nt++){let gt=lt[ut],ft=lt[Nt],Ut=gt.start+gt.count,Ft=J(ft.start,S.width,4),Gt=J(gt.start,S.width,4);ft.start<=Ut+1&&Ft===Gt&&J(ft.start+ft.count-1,S.width,4)===Ft?gt.count=Math.max(gt.count,ft.start+ft.count-gt.start):(++ut,lt[ut]=ft)}lt.length=ut+1;let j=e.getParameter(s.UNPACK_ROW_LENGTH),et=e.getParameter(s.UNPACK_SKIP_PIXELS),dt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Nt=0,gt=lt.length;Nt<gt;Nt++){let ft=lt[Nt],Ut=Math.floor(ft.start/4),Ft=Math.ceil(ft.count/4),Gt=Ut%S.width,F=Math.floor(Ut/S.width),pt=Ft,tt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,Gt,F,pt,tt,k,X,S.data)}I.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,j),e.pixelStorei(s.UNPACK_SKIP_PIXELS,et),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt)}}function Mt(I,S,k){let X=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=s.TEXTURE_3D);let K=ee(I,S),lt=S.source;e.bindTexture(X,I.__webglTexture,s.TEXTURE0+k);let ut=n.get(lt);if(lt.version!==ut.__version||K===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let tt=Qt.getPrimaries(Qt.workingColorSpace),mt=S.colorSpace===Un?null:Qt.getPrimaries(S.colorSpace),bt=S.colorSpace===Un||tt===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let et=g(S.image,!1,i.maxTextureSize);et=an(S,et);let dt=r.convert(S.format,S.colorSpace),Nt=r.convert(S.type),gt=y(S.internalFormat,dt,Nt,S.normalized,S.colorSpace,S.isVideoTexture);$t(X,S);let ft,Ut=S.mipmaps,Ft=S.isVideoTexture!==!0,Gt=ut.__version===void 0||K===!0,F=lt.dataReady,pt=E(S,et);if(S.isDepthTexture)gt=w(S.format===Qi,S.type),Gt&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,gt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,gt,et.width,et.height,0,dt,Nt,null));else if(S.isDataTexture)if(Ut.length>0){Ft&&Gt&&e.texStorage2D(s.TEXTURE_2D,pt,gt,Ut[0].width,Ut[0].height);for(let tt=0,mt=Ut.length;tt<mt;tt++)ft=Ut[tt],Ft?F&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ft.width,ft.height,dt,Nt,ft.data):e.texImage2D(s.TEXTURE_2D,tt,gt,ft.width,ft.height,0,dt,Nt,ft.data);S.generateMipmaps=!1}else Ft?(Gt&&e.texStorage2D(s.TEXTURE_2D,pt,gt,et.width,et.height),F&&nt(S,et,dt,Nt)):e.texImage2D(s.TEXTURE_2D,0,gt,et.width,et.height,0,dt,Nt,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&Gt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,gt,Ut[0].width,Ut[0].height,et.depth);for(let tt=0,mt=Ut.length;tt<mt;tt++)if(ft=Ut[tt],S.format!==qn)if(dt!==null)if(Ft){if(F)if(S.layerUpdates.size>0){let bt=eu(ft.width,ft.height,S.format,S.type);for(let it of S.layerUpdates){let zt=ft.data.subarray(it*bt/ft.data.BYTES_PER_ELEMENT,(it+1)*bt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,it,ft.width,ft.height,1,dt,zt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,et.depth,dt,ft.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,gt,ft.width,ft.height,et.depth,0,ft.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,et.depth,dt,Nt,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,gt,ft.width,ft.height,et.depth,0,dt,Nt,ft.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ft&&Gt&&e.texStorage2D(s.TEXTURE_2D,pt,gt,Ut[0].width,Ut[0].height);for(let tt=0,mt=Ut.length;tt<mt;tt++)ft=Ut[tt],S.format!==qn?dt!==null?Ft?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,gt,ft.width,ft.height,0,ft.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?F&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ft.width,ft.height,dt,Nt,ft.data):e.texImage2D(s.TEXTURE_2D,tt,gt,ft.width,ft.height,0,dt,Nt,ft.data)}else if(S.isDataArrayTexture)if(Ft){if(Gt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,gt,et.width,et.height,et.depth),F)if(S.layerUpdates.size>0){let tt=eu(et.width,et.height,S.format,S.type);for(let mt of S.layerUpdates){let bt=et.data.subarray(mt*tt/et.data.BYTES_PER_ELEMENT,(mt+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,mt,et.width,et.height,1,dt,Nt,bt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,dt,Nt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,gt,et.width,et.height,et.depth,0,dt,Nt,et.data);else if(S.isData3DTexture)Ft?(Gt&&e.texStorage3D(s.TEXTURE_3D,pt,gt,et.width,et.height,et.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,dt,Nt,et.data)):e.texImage3D(s.TEXTURE_3D,0,gt,et.width,et.height,et.depth,0,dt,Nt,et.data);else if(S.isFramebufferTexture){if(Gt)if(Ft)e.texStorage2D(s.TEXTURE_2D,pt,gt,et.width,et.height);else{let tt=et.width,mt=et.height;for(let bt=0;bt<pt;bt++)e.texImage2D(s.TEXTURE_2D,bt,gt,tt,mt,0,dt,Nt,null),tt>>=1,mt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let tt=s.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),et.parentNode!==tt){tt.appendChild(et),d.add(S),tt.onpaint=mt=>{let bt=mt.changedElements;for(let it of d)bt.includes(it.image)&&(it.needsUpdate=!0)},tt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,et);else{let bt=s.RGBA,it=s.RGBA,zt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,bt,it,zt,et)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Ft&&Gt){let tt=de(Ut[0]);e.texStorage2D(s.TEXTURE_2D,pt,gt,tt.width,tt.height)}for(let tt=0,mt=Ut.length;tt<mt;tt++)ft=Ut[tt],Ft?F&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,dt,Nt,ft):e.texImage2D(s.TEXTURE_2D,tt,gt,dt,Nt,ft);S.generateMipmaps=!1}else if(Ft){if(Gt){let tt=de(et);e.texStorage2D(s.TEXTURE_2D,pt,gt,tt.width,tt.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Nt,et)}else e.texImage2D(s.TEXTURE_2D,0,gt,dt,Nt,et);m(S)&&M(X),ut.__version=lt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function kt(I,S,k){if(S.image.length!==6)return;let X=ee(I,S),K=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+k);let lt=n.get(K);if(K.version!==lt.__version||X===!0){e.activeTexture(s.TEXTURE0+k);let ut=Qt.getPrimaries(Qt.workingColorSpace),j=S.colorSpace===Un?null:Qt.getPrimaries(S.colorSpace),et=S.colorSpace===Un||ut===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let dt=S.isCompressedTexture||S.image[0].isCompressedTexture,Nt=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let it=0;it<6;it++)!dt&&!Nt?gt[it]=g(S.image[it],!0,i.maxCubemapSize):gt[it]=Nt?S.image[it].image:S.image[it],gt[it]=an(S,gt[it]);let ft=gt[0],Ut=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type),Gt=y(S.internalFormat,Ut,Ft,S.normalized,S.colorSpace),F=S.isVideoTexture!==!0,pt=lt.__version===void 0||X===!0,tt=K.dataReady,mt=E(S,ft);$t(s.TEXTURE_CUBE_MAP,S);let bt;if(dt){F&&pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Gt,ft.width,ft.height);for(let it=0;it<6;it++){bt=gt[it].mipmaps;for(let zt=0;zt<bt.length;zt++){let Pt=bt[zt];S.format!==qn?Ut!==null?F?tt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,zt,0,0,Pt.width,Pt.height,Ut,Pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,zt,Gt,Pt.width,Pt.height,0,Pt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,zt,0,0,Pt.width,Pt.height,Ut,Ft,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,zt,Gt,Pt.width,Pt.height,0,Ut,Ft,Pt.data)}}}else{if(bt=S.mipmaps,F&&pt){bt.length>0&&mt++;let it=de(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Gt,it.width,it.height)}for(let it=0;it<6;it++)if(Nt){F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,gt[it].width,gt[it].height,Ut,Ft,gt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Gt,gt[it].width,gt[it].height,0,Ut,Ft,gt[it].data);for(let zt=0;zt<bt.length;zt++){let be=bt[zt].image[it].image;F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,zt+1,0,0,be.width,be.height,Ut,Ft,be.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,zt+1,Gt,be.width,be.height,0,Ut,Ft,be.data)}}else{F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ut,Ft,gt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Gt,Ut,Ft,gt[it]);for(let zt=0;zt<bt.length;zt++){let Pt=bt[zt];F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,zt+1,0,0,Ut,Ft,Pt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,zt+1,Gt,Ut,Ft,Pt.image[it])}}}m(S)&&M(s.TEXTURE_CUBE_MAP),lt.__version=K.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function wt(I,S,k,X,K,lt){let ut=r.convert(k.format,k.colorSpace),j=r.convert(k.type),et=y(k.internalFormat,ut,j,k.normalized,k.colorSpace),dt=n.get(S),Nt=n.get(k);if(Nt.__renderTarget=S,!dt.__hasExternalTextures){let gt=Math.max(1,S.width>>lt),ft=Math.max(1,S.height>>lt);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,lt,et,gt,ft,S.depth,0,ut,j,null):e.texImage2D(K,lt,et,gt,ft,0,ut,j,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),He(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,K,Nt.__webglTexture,0,De(S)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,K,Nt.__webglTexture,lt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(I,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,I),S.depthBuffer){let X=S.depthTexture,K=X&&X.isDepthTexture?X.type:null,lt=w(S.stencilBuffer,K),ut=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;He(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De(S),lt,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,De(S),lt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,lt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,I)}else{let X=S.textures;for(let K=0;K<X.length;K++){let lt=X[K],ut=r.convert(lt.format,lt.colorSpace),j=r.convert(lt.type),et=y(lt.internalFormat,ut,j,lt.normalized,lt.colorSpace);He(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De(S),et,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,De(S),et,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,et,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qe(I,S,k){let X=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),$t(s.TEXTURE_CUBE_MAP,S.depthTexture);let dt=r.convert(S.depthTexture.format),Nt=r.convert(S.depthTexture.type),gt;S.depthTexture.format===ui?gt=s.DEPTH_COMPONENT24:S.depthTexture.format===Qi&&(gt=s.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,gt,S.width,S.height,0,dt,Nt,null)}}else Q(S.depthTexture,0);let lt=K.__webglTexture,ut=De(S),j=X?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,et=S.depthTexture.format===Qi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ui)He(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,j,lt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,et,j,lt,0);else if(S.depthTexture.format===Qi)He(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,j,lt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,et,j,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(I){let S=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let X=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=X}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)qe(S.__webglFramebuffer[X],I,X);else{let X=I.texture.mipmaps;X&&X.length>0?qe(S.__webglFramebuffer[0],I,0):qe(S.__webglFramebuffer,I,0)}else if(k){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=s.createRenderbuffer(),Yt(S.__webglDepthbuffer[X],I,!1);else{let K=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=S.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,lt)}}else{let X=I.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Yt(S.__webglDepthbuffer,I,!1);else{let K=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,lt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(I,S,k){let X=n.get(I);S!==void 0&&wt(X.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Zt(I)}function _e(I){let S=I.texture,k=n.get(I),X=n.get(S);I.addEventListener("dispose",_);let K=I.textures,lt=I.isWebGLCubeRenderTarget===!0,ut=K.length>1;if(ut||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=S.version,o.memory.textures++),lt){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let et=0;et<S.mipmaps.length;et++)k.__webglFramebuffer[j][et]=s.createFramebuffer()}else k.__webglFramebuffer[j]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<S.mipmaps.length;j++)k.__webglFramebuffer[j]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ut)for(let j=0,et=K.length;j<et;j++){let dt=n.get(K[j]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&He(I)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let et=K[j];k.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[j]);let dt=r.convert(et.format,et.colorSpace),Nt=r.convert(et.type),gt=y(et.internalFormat,dt,Nt,et.normalized,et.colorSpace,I.isXRRenderTarget===!0),ft=De(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,gt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,k.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Yt(k.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),$t(s.TEXTURE_CUBE_MAP,S);for(let j=0;j<6;j++)if(S.mipmaps&&S.mipmaps.length>0)for(let et=0;et<S.mipmaps.length;et++)wt(k.__webglFramebuffer[j][et],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,et);else wt(k.__webglFramebuffer[j],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(S)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let j=0,et=K.length;j<et;j++){let dt=K[j],Nt=n.get(dt),gt=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(gt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(gt,Nt.__webglTexture),$t(gt,dt),wt(k.__webglFramebuffer,I,dt,s.COLOR_ATTACHMENT0+j,gt,0),m(dt)&&M(gt)}e.unbindTexture()}else{let j=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(j=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,X.__webglTexture),$t(j,S),S.mipmaps&&S.mipmaps.length>0)for(let et=0;et<S.mipmaps.length;et++)wt(k.__webglFramebuffer[et],I,S,s.COLOR_ATTACHMENT0,j,et);else wt(k.__webglFramebuffer,I,S,s.COLOR_ATTACHMENT0,j,0);m(S)&&M(j),e.unbindTexture()}I.depthBuffer&&Zt(I)}function jt(I){let S=I.textures;for(let k=0,X=S.length;k<X;k++){let K=S[k];if(m(K)){let lt=b(I),ut=n.get(K).__webglTexture;e.bindTexture(lt,ut),M(lt),e.unbindTexture()}}}let Ie=[],Je=[];function Mn(I){if(I.samples>0){if(He(I)===!1){let S=I.textures,k=I.width,X=I.height,K=s.COLOR_BUFFER_BIT,lt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(I),j=S.length>1;if(j)for(let dt=0;dt<S.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let et=I.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let dt=0;dt<S.length;dt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);let Nt=n.get(S[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Nt,0)}s.blitFramebuffer(0,0,k,X,0,0,k,X,K,s.NEAREST),c===!0&&(Ie.length=0,Je.length=0,Ie.push(s.COLOR_ATTACHMENT0+dt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Ie.push(lt),Je.push(lt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Je)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ie))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let dt=0;dt<S.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);let Nt=n.get(S[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let S=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function De(I){return Math.min(i.maxSamples,I.samples)}function He(I){let S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function O(I){let S=o.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function an(I,S){let k=I.colorSpace,X=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==qr&&k!==Un&&(Qt.getTransfer(k)===ue?(X!==qn||K!==dn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",k)),S}function de(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=D,this.getTextureUnits=P,this.setTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=oe,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function g1(s,t){function e(n,i=Un){let r,o=Qt.getTransfer(i);if(n===dn)return s.UNSIGNED_BYTE;if(n===yl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Xh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gh)return s.BYTE;if(n===Wh)return s.SHORT;if(n===gr)return s.UNSIGNED_SHORT;if(n===xl)return s.INT;if(n===si)return s.UNSIGNED_INT;if(n===Xn)return s.FLOAT;if(n===ri)return s.HALF_FLOAT;if(n===$h)return s.ALPHA;if(n===Yh)return s.RGB;if(n===qn)return s.RGBA;if(n===ui)return s.DEPTH_COMPONENT;if(n===Qi)return s.DEPTH_STENCIL;if(n===yr)return s.RED;if(n===_l)return s.RED_INTEGER;if(n===ts)return s.RG;if(n===bl)return s.RG_INTEGER;if(n===Ml)return s.RGBA_INTEGER;if(n===Io||n===Po||n===Lo||n===Do)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sl||n===wl||n===El||n===Tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===No||n===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===Rl)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Il)return r.COMPRESSED_R11_EAC;if(n===Pl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===No)return r.COMPRESSED_RG11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dl||n===Nl||n===Ul||n===zl||n===Fl||n===Bl||n===Ol||n===kl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ql)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$l||n===Yl||n===Zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$l)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jl||n===Kl||n===Uo||n===jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var x1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new oo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Oe({vertexShader:x1,fragmentShader:y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bu=class extends di{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new _u,m={},M=e.getContextAttributes(),b=null,y=null,w=[],E=[],R=new xt,_=null,A=null,C=new nn;C.viewport=new Pe;let N=new nn;N.viewport=new Pe;let U=[C,N],D=new dl,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=w[J];return nt===void 0&&(nt=new sr,w[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=w[J];return nt===void 0&&(nt=new sr,w[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=w[J];return nt===void 0&&(nt=new sr,w[J]=nt),nt.getHandSpace()};function W(J){let nt=E.indexOf(J.inputSource);if(nt===-1)return;let Mt=w[nt];Mt!==void 0&&(Mt.update(J.inputSource,J.frame,l||o),Mt.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",Q);for(let J=0;J<w.length;J++){let nt=E[J];nt!==null&&(E[J]=null,w[J].disconnect(nt))}P=null,B=null,g.reset();for(let J in m)delete m[J];if(t.setRenderTarget(b),f=null,u=null,d=null,i=null,y=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),A!==null){let J=A.camera;J.fov=A.fov,J.zoom=A.zoom,J.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",$),i.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,kt=null,wt=null;M.depth&&(wt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=M.stencil?Qi:ui,kt=M.stencil?xr:si);let Yt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Yt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Sn(u.textureWidth,u.textureHeight,{format:qn,type:dn,depthTexture:new Wi(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Mt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Sn(f.framebufferWidth,f.framebufferHeight,{format:qn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(J){for(let nt=0;nt<J.removed.length;nt++){let Mt=J.removed[nt],kt=E.indexOf(Mt);kt>=0&&(E[kt]=null,w[kt].disconnect(Mt))}for(let nt=0;nt<J.added.length;nt++){let Mt=J.added[nt],kt=E.indexOf(Mt);if(kt===-1){for(let Yt=0;Yt<w.length;Yt++)if(Yt>=E.length){E.push(Mt),kt=Yt;break}else if(E[Yt]===null){E[Yt]=Mt,kt=Yt;break}if(kt===-1)break}let wt=w[kt];wt&&wt.connect(Mt)}}let q=new L,Z=new L;function G(J,nt,Mt){q.setFromMatrixPosition(nt.matrixWorld),Z.setFromMatrixPosition(Mt.matrixWorld);let kt=q.distanceTo(Z),wt=nt.projectionMatrix.elements,Yt=Mt.projectionMatrix.elements,qe=wt[14]/(wt[10]-1),Zt=wt[14]/(wt[10]+1),oe=(wt[9]+1)/wt[5],_e=(wt[9]-1)/wt[5],jt=(wt[8]-1)/wt[0],Ie=(Yt[8]+1)/Yt[0],Je=qe*jt,Mn=qe*Ie,De=kt/(-jt+Ie),He=De*-jt;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(He),J.translateZ(De),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),wt[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let O=qe+De,an=Zt+De,de=Je-He,I=Mn+(kt-He),S=oe*Zt/an*O,k=_e*Zt/an*O;J.projectionMatrix.makePerspective(de,I,S,k,O,an),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ht(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let nt=J.near,Mt=J.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(Mt=g.depthFar)),D.near=N.near=C.near=nt,D.far=N.far=C.far=Mt,(P!==D.near||B!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),P=D.near,B=D.far),D.layers.mask=J.layers.mask|6,C.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;let kt=J.parent,wt=D.cameras;ht(D,kt);for(let Yt=0;Yt<wt.length;Yt++)ht(wt[Yt],kt);wt.length===2?G(D,C,N):D.projectionMatrix.copy(C.projectionMatrix),A===null&&J.isPerspectiveCamera&&(A={camera:J,fov:J.fov,zoom:J.zoom}),ct(J,D,kt)};function ct(J,nt,Mt){Mt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(Mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ka*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(J){return m[J]};let ie=null;function $t(J,nt){if(h=nt.getViewerPose(l||o),p=nt,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let kt=!1;Mt.length!==D.cameras.length&&(D.cameras.length=0,kt=!0);for(let Zt=0;Zt<Mt.length;Zt++){let oe=Mt[Zt],_e=null;if(f!==null)_e=f.getViewport(oe);else{let Ie=d.getViewSubImage(u,oe);_e=Ie.viewport,Zt===0&&(t.setRenderTargetTextures(y,Ie.colorTexture,Ie.depthStencilTexture),t.setRenderTarget(y))}let jt=U[Zt];jt===void 0&&(jt=new nn,jt.layers.enable(Zt),jt.viewport=new Pe,U[Zt]=jt),jt.matrix.fromArray(oe.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(oe.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(_e.x,_e.y,_e.width,_e.height),Zt===0&&(D.matrix.copy(jt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),kt===!0&&D.cameras.push(jt)}let wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Zt=d.getDepthInformation(Mt[0]);Zt&&Zt.isValid&&Zt.texture&&g.init(Zt,i.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Zt=0;Zt<Mt.length;Zt++){let oe=Mt[Zt].camera;if(oe){let _e=m[oe];_e||(_e=new oo,m[oe]=_e);let jt=d.getCameraImage(oe);_e.sourceTexture=jt}}}}for(let Mt=0;Mt<w.length;Mt++){let kt=E[Mt],wt=w[Mt];kt!==null&&wt!==void 0&&wt.update(kt,nt,l||o)}ie&&ie(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),p=null}let ee=new rp;ee.setAnimationLoop($t),this.setAnimationLoop=function(J){ie=J},this.dispose=function(){}}},v1=new ae,up=new Ht;up.set(-1,0,0,0,1,0,0,0,1);function _1(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,jh(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,M,b):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),b=M.envMap,y=M.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(v1.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(up),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,M,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=b*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b1(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,w){let E=w.program;n.uniformBlockBinding(y,E)}function l(y,w){let E=i[y.id];E===void 0&&(g(y),E=h(y),i[y.id]=E,y.addEventListener("dispose",M));let R=w.program;n.updateUBOMapping(y,R);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let w=d();y.__bindingPointIndex=w;let E=s.createBuffer(),R=y.__size,_=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,R,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,E),E}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let w=i[y.id],E=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let _=0,A=E.length;_<A;_++){let C=E[_];if(Array.isArray(C))for(let N=0,U=C.length;N<U;N++)f(C[N],_,N,R);else f(C,_,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,w,E,R){if(x(y,w,E,R)===!0){let _=y.__offset,A=y.value;if(Array.isArray(A)){let C=0;for(let N=0;N<A.length;N++){let U=A[N],D=m(U);p(U,y.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,y.__data)}}function p(y,w,E){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,E)}function x(y,w,E,R){let _=y.value,A=w+"_"+E;if(R[A]===void 0)return typeof _=="number"||typeof _=="boolean"?R[A]=_:ArrayBuffer.isView(_)?R[A]=_.slice():R[A]=_.clone(),!0;{let C=R[A];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(y){let w=y.uniforms,E=0,R=16;for(let A=0,C=w.length;A<C;A++){let N=Array.isArray(w[A])?w[A]:[w[A]];for(let U=0,D=N.length;U<D;U++){let P=N[U],B=Array.isArray(P.value)?P.value:[P.value];for(let W=0,$=B.length;W<$;W++){let Q=B[W],q=m(Q),Z=E%R,G=Z%q.boundary,ht=Z+G;E+=G,ht!==0&&R-ht<q.storage&&(E+=R-ht),P.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=E,E+=q.storage}}}let _=E%R;return _>0&&(E+=R-_),y.__size=E,y.__cache={},this}function m(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",y),w}function M(y){let w=y.target;w.removeEventListener("dispose",M);let E=o.indexOf(w.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function b(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:b}}var M1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function S1(){return xi===null&&(xi=new ys(M1,16,16,ts,ri),xi.name="DFG_LUT",xi.minFilter=$e,xi.magFilter=$e,xi.wrapS=Vn,xi.wrapT=Vn,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var oc=class{constructor(t={}){let{canvas:e=Ef(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=dn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,g=new Set([Ml,bl,_l]),m=new Set([dn,si,gr,xr,yl,vl]),M=new Uint32Array(4),b=new Int32Array(4),y=new L,w=null,E=null,R=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,U=null,D=null,P=null,B=null;this._outputColorSpace=Re;let W=0,$=0,Q=null,q=-1,Z=null,G=new Pe,ht=new Pe,ct=null,ie=new ot(0),$t=0,ee=e.width,J=e.height,nt=1,Mt=null,kt=null,wt=new Pe(0,0,ee,J),Yt=new Pe(0,0,ee,J),qe=!1,Zt=new lr,oe=!1,_e=!1,jt=new ae,Ie=new L,Je=new Pe,Mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function He(){return Q===null?nt:1}let O=n;function an(T,z){return e.getContext(T,z)}let de,I,S,k,X,K,lt,ut,j,et,dt,Nt,gt,ft,Ut,Ft,Gt,F,pt,tt,mt,bt,it;try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",Jn,!1),O===null){let z="webgl2";if(O=an(z,T),O===null)throw an(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(T){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Jn,!1),Ot("WebGLRenderer: "+T.message),T}function zt(){de=new Iy(O),de.init(),mt=new g1(O,de),I=new _y(O,de,t,mt),S=new p1(O,de),I.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),D=O.createFramebuffer(),P=O.createFramebuffer(),B=O.createFramebuffer(),k=new Dy(O),X=new t1,K=new m1(O,de,S,X,I,mt,k),lt=new Cy(C),ut=new U0(O),bt=new yy(O,ut),j=new Py(O,ut,k,bt),et=new Uy(O,j,ut,bt,k),F=new Ny(O,I,K),Ut=new by(X),dt=new Qv(C,lt,de,I,bt,Ut),Nt=new _1(C,X),gt=new n1,ft=new l1(de),Gt=new xy(C,lt,S,et,p,c),Ft=new f1(C,et,I),it=new b1(O,k,I,S),pt=new vy(O,de,k),tt=new Ly(O,de,k),k.programs=dt.programs,C.capabilities=I,C.extensions=de,C.properties=X,C.renderLists=gt,C.shadowMap=Ft,C.state=S,C.info=k}x!==dn&&(A=new Fy(x,e.width,e.height,a,i,r));let Pt=new bu(C,O);this.xr=Pt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=de.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=de.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(T){T!==void 0&&(nt=T,this.setSize(ee,J,!1))},this.getSize=function(T){return T.set(ee,J)},this.setSize=function(T,z,Y=!0){if(Pt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=T,J=z,e.width=Math.floor(T*nt),e.height=Math.floor(z*nt),Y===!0&&(e.style.width=T+"px",e.style.height=z+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(ee*nt,J*nt).floor()},this.setDrawingBufferSize=function(T,z,Y){ee=T,J=z,nt=Y,e.width=Math.floor(T*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(x===dn){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(G)},this.getViewport=function(T){return T.copy(wt)},this.setViewport=function(T,z,Y,H){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,z,Y,H),S.viewport(G.copy(wt).multiplyScalar(nt).round())},this.getScissor=function(T){return T.copy(Yt)},this.setScissor=function(T,z,Y,H){T.isVector4?Yt.set(T.x,T.y,T.z,T.w):Yt.set(T,z,Y,H),S.scissor(ht.copy(Yt).multiplyScalar(nt).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(T){S.setScissorTest(qe=T)},this.setOpaqueSort=function(T){Mt=T},this.setTransparentSort=function(T){kt=T},this.getClearColor=function(T){return T.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,Y=!0){let H=0;if(T){let V=!1;if(Q!==null){let _t=Q.texture.format;V=g.has(_t)}if(V){let _t=Q.texture.type,Et=m.has(_t),vt=Gt.getClearColor(),At=Gt.getClearAlpha(),Lt=vt.r,Xt=vt.g,Jt=vt.b;Et?(M[0]=Lt,M[1]=Xt,M[2]=Jt,M[3]=At,O.clearBufferuiv(O.COLOR,0,M)):(b[0]=Lt,b[1]=Xt,b[2]=Jt,b[3]=At,O.clearBufferiv(O.COLOR,0,b))}else H|=O.COLOR_BUFFER_BIT}z&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Jn,!1),Gt.dispose(),gt.dispose(),ft.dispose(),X.dispose(),lt.dispose(),et.dispose(),bt.dispose(),it.dispose(),dt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",nd),Pt.removeEventListener("sessionend",id),us.stop()};function be(T){T.preventDefault(),Zr("WebGLRenderer: Context Lost."),N=!0}function ce(){Zr("WebGLRenderer: Context Restored."),N=!1;let T=k.autoReset,z=Ft.enabled,Y=Ft.autoUpdate,H=Ft.needsUpdate,V=Ft.type;zt(),k.autoReset=T,Ft.enabled=z,Ft.autoUpdate=Y,Ft.needsUpdate=H,Ft.type=V}function Jn(T){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ai(T){let z=T.target;z.removeEventListener("dispose",ai),xm(z)}function xm(T){ym(T),X.remove(T)}function ym(T){let z=X.get(T).programs;z!==void 0&&(z.forEach(function(Y){dt.releaseProgram(Y)}),T.isShaderMaterial&&dt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Y,H,V,_t){z===null&&(z=Mn);let Et=V.isMesh&&V.matrixWorld.determinantAffine()<0,vt=bm(T,z,Y,H,V);S.setMaterial(H,Et);let At=Y.index,Lt=1;if(H.wireframe===!0){if(At=j.getWireframeAttribute(Y),At===void 0)return;Lt=2}let Xt=Y.drawRange,Jt=Y.attributes.position,Rt=Xt.start*Lt,he=(Xt.start+Xt.count)*Lt;_t!==null&&(Rt=Math.max(Rt,_t.start*Lt),he=Math.min(he,(_t.start+_t.count)*Lt)),At!==null?(Rt=Math.max(Rt,0),he=Math.min(he,At.count)):Jt!=null&&(Rt=Math.max(Rt,0),he=Math.min(he,Jt.count));let Ve=he-Rt;if(Ve<0||Ve===1/0)return;bt.setup(V,H,vt,Y,At);let Te,ve=pt;if(At!==null&&(Te=ut.get(At),ve=tt,ve.setIndex(Te)),V.isMesh)H.wireframe===!0?(S.setLineWidth(H.wireframeLinewidth*He()),ve.setMode(O.LINES)):ve.setMode(O.TRIANGLES);else if(V.isLine){let ln=H.linewidth;ln===void 0&&(ln=1),S.setLineWidth(ln*He()),V.isLineSegments?ve.setMode(O.LINES):V.isLineLoop?ve.setMode(O.LINE_LOOP):ve.setMode(O.LINE_STRIP)}else V.isPoints?ve.setMode(O.POINTS):V.isSprite&&ve.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(de.get("WEBGL_multi_draw"))ve.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let ln=V._multiDrawStarts,St=V._multiDrawCounts,gn=V._multiDrawCount,se=At?ut.get(At).bytesPerElement:1,kn=X.get(H).currentProgram.getUniforms();for(let li=0;li<gn;li++)kn.setValue(O,"_gl_DrawID",li),ve.render(ln[li]/se,St[li])}else if(V.isInstancedMesh)ve.renderInstances(Rt,Ve,V.count);else if(Y.isInstancedBufferGeometry){let ln=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,St=Math.min(Y.instanceCount,ln);ve.renderInstances(Rt,Ve,St)}else ve.render(Rt,Ve)};function ed(T,z,Y,H){U!==null&&T.isNodeMaterial&&U.setObject(H,T),oe===!0&&Ut.setState(T,Y,!1),T.transparent===!0&&T.side===we&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,ea(T,z,H),T.side=Zi,T.needsUpdate=!0,ea(T,z,H),T.side=we):ea(T,z,H)}this.compile=function(T,z,Y=null){Y===null&&(Y=T),U!==null&&U.renderStart(T,z,Y),E=ft.get(Y),E.init(z),_.push(E),Y.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),T!==Y&&T.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),_e=this.localClippingEnabled,oe=Ut.init(this.clippingPlanes,_e),oe===!0&&Ut.setGlobalState(this.clippingPlanes,z),U!==null&&Ft.render(E.state.shadowsArray,Y,z);let H=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let _t=V.material;if(_t)if(Array.isArray(_t))for(let Et=0;Et<_t.length;Et++){let vt=_t[Et];ed(vt,Y,z,V),H.add(vt)}else ed(_t,Y,z,V),H.add(_t)}),E=_.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(T,z,Y=null){let H=this.compile(T,z,Y);return new Promise(V=>{function _t(){if(H.forEach(function(Et){let At=X.get(Et).currentProgram;(At===void 0||At.isReady())&&H.delete(Et)}),H.size===0){V(T);return}setTimeout(_t,10)}de.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Gc=null;function vm(T){Gc&&Gc(T)}function nd(){us.stop()}function id(){us.start()}let us=new rp;us.setAnimationLoop(vm),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(T){Gc=T,Pt.setAnimationLoop(T),T===null?us.stop():us.start()},Pt.addEventListener("sessionstart",nd),Pt.addEventListener("sessionend",id),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(T,z);let Y=Pt.enabled===!0&&Pt.isPresenting===!0,H=A!==null&&(Q===null||Y)&&A.begin(C,Q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(z),z=Pt.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,z,Q),E=ft.get(T,_.length),E.init(z),E.state.textureUnits=K.getTextureUnits(),_.push(E),jt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Zt.setFromProjectionMatrix(jt,ei,z.reversedDepth),_e=this.localClippingEnabled,oe=Ut.init(this.clippingPlanes,_e),w=gt.get(T,R.length),w.init(),R.push(w),Pt.enabled===!0&&Pt.isPresenting===!0){let Et=C.xr.getDepthSensingMesh();Et!==null&&Wc(Et,z,-1/0,C.sortObjects)}Wc(T,z,0,C.sortObjects),w.finish(),U!==null&&U.updateLights(E.state.lightsArray),C.sortObjects===!0&&w.sort(Mt,kt),De=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,De&&Gt.addToRenderList(w,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Ut.beginShadows();let V=E.state.shadowsArray;if(Ft.render(V,T,z),oe===!0&&Ut.endShadows(),(H&&A.hasRenderPass())===!1){let Et=w.opaque,vt=w.transmissive;if(E.setupLights(),z.isArrayCamera){let At=z.cameras;if(vt.length>0)for(let Lt=0,Xt=At.length;Lt<Xt;Lt++){let Jt=At[Lt];rd(Et,vt,T,Jt)}De&&Gt.render(T);for(let Lt=0,Xt=At.length;Lt<Xt;Lt++){let Jt=At[Lt];sd(w,T,Jt,Jt.viewport)}}else vt.length>0&&rd(Et,vt,T,z),De&&Gt.render(T),sd(w,T,z)}Q!==null&&$===0&&(K.updateMultisampleRenderTarget(Q),K.updateRenderTargetMipmap(Q)),H&&A.end(C),T.isScene===!0&&T.onAfterRender(C,T,z),bt.resetDefaultState(),q=-1,Z=null,_.pop(),_.length>0?(E=_[_.length-1],K.setTextureUnits(E.state.textureUnits),oe===!0&&Ut.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,U!==null&&U.renderEnd()};function Wc(T,z,Y,H){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Zt)){H&&Je.setFromMatrixPosition(T.matrixWorld).applyMatrix4(jt);let Et=et.update(T),vt=T.material;vt.visible&&w.push(T,Et,vt,Y,Je.z,null,z)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Zt))){let Et=et.update(T),vt=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Je.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Je.copy(Et.boundingSphere.center)),Je.applyMatrix4(T.matrixWorld).applyMatrix4(jt)),Array.isArray(vt)){let At=Et.groups;for(let Lt=0,Xt=At.length;Lt<Xt;Lt++){let Jt=At[Lt],Rt=vt[Jt.materialIndex];Rt&&Rt.visible&&w.push(T,Et,Rt,Y,Je.z,Jt,z)}}else vt.visible&&w.push(T,Et,vt,Y,Je.z,null,z)}}let _t=T.children;for(let Et=0,vt=_t.length;Et<vt;Et++)Wc(_t[Et],z,Y,H)}function sd(T,z,Y,H){let{opaque:V,transmissive:_t,transparent:Et}=T;E.setupLightsView(Y),oe===!0&&Ut.setGlobalState(C.clippingPlanes,Y),H&&S.viewport(G.copy(H)),V.length>0&&ta(V,z,Y),_t.length>0&&ta(_t,z,Y),Et.length>0&&ta(Et,z,Y),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function rd(T,z,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let Rt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new Sn(1,1,{generateMipmaps:!0,type:Rt?ri:dn,minFilter:ji,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let _t=E.state.transmissionRenderTarget[H.id],Et=H.viewport||G;_t.setSize(Et.z*C.transmissionResolutionScale,Et.w*C.transmissionResolutionScale);let vt=C.getRenderTarget(),At=C.getActiveCubeFace(),Lt=C.getActiveMipmapLevel();C.setRenderTarget(_t),C.getClearColor(ie),$t=C.getClearAlpha(),$t<1&&C.setClearColor(16777215,.5),C.clear(),De&&Gt.render(Y);let Xt=C.toneMapping;C.toneMapping=ii;let Jt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),oe===!0&&Ut.setGlobalState(C.clippingPlanes,H),ta(T,Y,H),K.updateMultisampleRenderTarget(_t),K.updateRenderTargetMipmap(_t),de.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let he=0,Ve=z.length;he<Ve;he++){let Te=z[he],{object:ve,geometry:ln,material:St,group:gn}=Te;if(St.side===we&&ve.layers.test(H.layers)){let se=St.side;St.side=sn,St.needsUpdate=!0,od(ve,Y,H,ln,St,gn),St.side=se,St.needsUpdate=!0,Rt=!0}}Rt===!0&&(K.updateMultisampleRenderTarget(_t),K.updateRenderTargetMipmap(_t))}C.setRenderTarget(vt,At,Lt),C.setClearColor(ie,$t),Jt!==void 0&&(H.viewport=Jt),C.toneMapping=Xt}function ta(T,z,Y){let H=z.isScene===!0?z.overrideMaterial:null;for(let V=0,_t=T.length;V<_t;V++){let Et=T[V],{object:vt,geometry:At,group:Lt}=Et,Xt=Et.material;Xt.allowOverride===!0&&H!==null&&(Xt=H),vt.layers.test(Y.layers)&&od(vt,z,Y,At,Xt,Lt)}}function od(T,z,Y,H,V,_t){U!==null&&V.isNodeMaterial&&U.setObject(T,V),T.onBeforeRender(C,z,Y,H,V,_t),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(C,z,Y,H,T,_t),V.transparent===!0&&V.side===we&&V.forceSinglePass===!1?(V.side=sn,V.needsUpdate=!0,C.renderBufferDirect(Y,z,H,V,T,_t),V.side=Zi,V.needsUpdate=!0,C.renderBufferDirect(Y,z,H,V,T,_t),V.side=we):C.renderBufferDirect(Y,z,H,V,T,_t),T.onAfterRender(C,z,Y,H,V,_t)}function ea(T,z,Y){z.isScene!==!0&&(z=Mn);let H=X.get(T),V=E.state.lights,_t=E.state.shadowsArray,Et=V.state.version,vt=dt.getParameters(T,V.state,_t,z,Y,E.state.lightProbeGridArray),At=dt.getProgramCacheKey(vt),Lt=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,H.fog=z.fog;let Xt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=lt.get(T.envMap||H.environment,Xt),H.envMapRotation=H.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Lt===void 0&&(T.addEventListener("dispose",ai),Lt=new Map,H.programs=Lt);let Jt=Lt.get(At);if(Jt!==void 0){if(H.currentProgram===Jt&&H.lightsStateVersion===Et)return ld(T,vt),Jt}else vt.uniforms=dt.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,Y,vt),T.onBeforeCompile(vt,C),Jt=dt.acquireProgram(vt,At),Lt.set(At,Jt),H.uniforms=vt.uniforms;let Rt=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Rt.clippingPlanes=Ut.uniform),ld(T,vt),H.needsLights=Sm(T),H.lightsStateVersion=Et,H.needsLights&&(Rt.ambientLightColor.value=V.state.ambient,Rt.lightProbe.value=V.state.probe,Rt.sunLights.value=V.state.sun,Rt.sunLightShadows.value=V.state.sunShadow,Rt.directionalLights.value=V.state.directional,Rt.directionalLightShadows.value=V.state.directionalShadow,Rt.spotLights.value=V.state.spot,Rt.spotLightShadows.value=V.state.spotShadow,Rt.rectAreaLights.value=V.state.rectArea,Rt.ltc_1.value=V.state.rectAreaLTC1,Rt.ltc_2.value=V.state.rectAreaLTC2,Rt.pointLights.value=V.state.point,Rt.pointLightShadows.value=V.state.pointShadow,Rt.hemisphereLights.value=V.state.hemi,Rt.sunShadowMatrix.value=V.state.sunShadowMatrix,Rt.sunShadowCascade.value=V.state.sunShadowCascade,Rt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Rt.spotLightMatrix.value=V.state.spotLightMatrix,Rt.spotLightMap.value=V.state.spotLightMap,Rt.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=Jt,H.uniformsList=null,Jt}function ad(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=Mr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function ld(T,z){let Y=X.get(T);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function _m(T,z){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(z.matrixWorld);for(let Y=0,H=T.length;Y<H;Y++){let V=T[Y];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function bm(T,z,Y,H,V){z.isScene!==!0&&(z=Mn),K.resetTextureUnits();let _t=z.fog,Et=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?z.environment:null,vt=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Qt.workingColorSpace,At=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Lt=lt.get(H.envMap||Et,At),Xt=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Jt=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Rt=!!Y.morphAttributes.position,he=!!Y.morphAttributes.normal,Ve=!!Y.morphAttributes.color,Te=ii;H.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Te=C.toneMapping);let ve=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ln=ve!==void 0?ve.length:0,St=X.get(H),gn=E.state.lights;if(oe===!0&&(_e===!0||T!==Z)){let Me=T===Z&&H.id===q;Ut.setState(H,T,Me)}let se=!1;H.version===St.__version?(St.needsLights&&St.lightsStateVersion!==gn.state.version||St.outputColorSpace!==vt||V.isBatchedMesh&&St.batching===!1||!V.isBatchedMesh&&St.batching===!0||V.isBatchedMesh&&St.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&St.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&St.instancing===!1||!V.isInstancedMesh&&St.instancing===!0||V.isSkinnedMesh&&St.skinning===!1||!V.isSkinnedMesh&&St.skinning===!0||V.isInstancedMesh&&St.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&St.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&St.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&St.instancingMorph===!1&&V.morphTexture!==null||St.envMap!==Lt||H.fog===!0&&St.fog!==_t||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Ut.numPlanes||St.numIntersection!==Ut.numIntersection)||St.vertexAlphas!==Xt||St.vertexTangents!==Jt||St.morphTargets!==Rt||St.morphNormals!==he||St.morphColors!==Ve||St.toneMapping!==Te||St.morphTargetsCount!==ln||!!St.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,St.__version=H.version);let kn=St.currentProgram;se===!0&&(kn=ea(H,z,V),U&&H.isNodeMaterial&&U.onUpdateProgram(H,kn,St));let li=!1,Ui=!1,Ls=!1,ge=kn.getUniforms(),Be=St.uniforms;if(S.useProgram(kn.program)&&(li=!0,Ui=!0,Ls=!0),H.id!==q&&(q=H.id,Ui=!0),St.needsLights){let Me=_m(E.state.lightProbeGridArray,V);St.lightProbeGrid!==Me&&(St.lightProbeGrid=Me,Ui=!0)}if(li||Z!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ge.setValue(O,"projectionMatrix",T.projectionMatrix),ge.setValue(O,"viewMatrix",T.matrixWorldInverse);let Fi=ge.map.cameraPosition;Fi!==void 0&&Fi.setValue(O,Ie.setFromMatrixPosition(T.matrixWorld)),I.logarithmicDepthBuffer&&ge.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ge.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),Z!==T&&(Z=T,Ui=!0,Ls=!0)}if(St.needsLights&&(gn.state.sunShadowMap.length>0&&ge.setValue(O,"sunShadowMap",gn.state.sunShadowMap,K),gn.state.directionalShadowMap.length>0&&ge.setValue(O,"directionalShadowMap",gn.state.directionalShadowMap,K),gn.state.spotShadowMap.length>0&&ge.setValue(O,"spotShadowMap",gn.state.spotShadowMap,K),gn.state.pointShadowMap.length>0&&ge.setValue(O,"pointShadowMap",gn.state.pointShadowMap,K)),V.isSkinnedMesh){ge.setOptional(O,V,"bindMatrix"),ge.setOptional(O,V,"bindMatrixInverse");let Me=V.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ge.setValue(O,"boneTexture",Me.boneTexture,K))}V.isBatchedMesh&&(ge.setOptional(O,V,"batchingTexture"),ge.setValue(O,"batchingTexture",V._matricesTexture,K),ge.setOptional(O,V,"batchingIdTexture"),ge.setValue(O,"batchingIdTexture",V._indirectTexture,K),ge.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&ge.setValue(O,"batchingColorTexture",V._colorsTexture,K));let zi=Y.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&F.update(V,Y,kn),(Ui||St.receiveShadow!==V.receiveShadow)&&(St.receiveShadow=V.receiveShadow,ge.setValue(O,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&z.environment!==null&&(Be.envMapIntensity.value=z.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=S1()),Ui){if(ge.setValue(O,"toneMappingExposure",C.toneMappingExposure),St.needsLights&&Mm(Be,Ls),_t&&H.fog===!0&&Nt.refreshFogUniforms(Be,_t),Nt.refreshMaterialUniforms(Be,H,nt,J,E.state.transmissionRenderTarget[T.id]),St.needsLights&&St.lightProbeGrid){let Me=St.lightProbeGrid;Be.probesSH.value=Me.texture,Be.probesMin.value.copy(Me.boundingBox.min),Be.probesMax.value.copy(Me.boundingBox.max),Be.probesResolution.value.copy(Me.resolution)}Mr.upload(O,ad(St),Be,K)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Mr.upload(O,ad(St),Be,K),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ge.setValue(O,"center",V.center),ge.setValue(O,"modelViewMatrix",V.modelViewMatrix),ge.setValue(O,"normalMatrix",V.normalMatrix),ge.setValue(O,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let Me=H.uniformsGroups;for(let Fi=0,Ds=Me.length;Fi<Ds;Fi++){let hd=Me[Fi];it.update(hd,kn),it.bind(hd,kn)}}return kn}function Mm(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.sunLights.needsUpdate=z,T.sunLightShadows.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Sm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(T,z,Y){let H=X.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(T.texture).__webglTexture=z,X.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let Y=X.get(T);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,Y=0){Q=T,W=z,$=Y;let H=null,V=!1,_t=!1;if(T){let vt=X.get(T);if(vt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(O.FRAMEBUFFER,vt.__webglFramebuffer),G.copy(T.viewport),ht.copy(T.scissor),ct=T.scissorTest,S.viewport(G),S.scissor(ht),S.setScissorTest(ct),q=-1;return}else if(vt.__webglFramebuffer===void 0)K.setupRenderTarget(T);else if(vt.__hasExternalTextures)K.rebindTextures(T,X.get(T.texture).__webglTexture,X.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Xt=T.depthTexture;if(vt.__boundDepthTexture!==Xt){if(Xt!==null&&X.has(Xt)&&(T.width!==Xt.image.width||T.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(T)}}let At=T.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(_t=!0);let Lt=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Lt[z])?H=Lt[z][Y]:H=Lt[z],V=!0):T.samples>0&&K.useMultisampledRTT(T)===!1?H=X.get(T).__webglMultisampledFramebuffer:Array.isArray(Lt)?H=Lt[Y]:H=Lt,G.copy(T.viewport),ht.copy(T.scissor),ct=T.scissorTest}else G.copy(wt).multiplyScalar(nt).floor(),ht.copy(Yt).multiplyScalar(nt).floor(),ct=qe;if(Y!==0&&(H=D),S.bindFramebuffer(O.FRAMEBUFFER,H)&&S.drawBuffers(T,H),S.viewport(G),S.scissor(ht),S.setScissorTest(ct),V){let vt=X.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,vt.__webglTexture,Y)}else if(_t){let vt=z;for(let At=0;At<T.textures.length;At++){let Lt=X.get(T.textures[At]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+At,Lt.__webglTexture,Y,vt)}}else if(T!==null&&Y!==0){let vt=X.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,vt.__webglTexture,Y)}q=-1};function cd(T){let z=X.get(T);return(z.__readFormat!==T.format||z.__readType!==T.type)&&(z.__readFormat=T.format,z.__readType=T.type,z.__formatReadable=I.textureFormatReadable(T.format),z.__typeReadable=I.textureTypeReadable(T.type)),z}this.readRenderTargetPixels=function(T,z,Y,H,V,_t,Et,vt=0){if(!(T&&T.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){S.bindFramebuffer(O.FRAMEBUFFER,At);try{let Lt=T.textures[vt],Xt=Lt.format,Jt=Lt.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+vt);let Rt=cd(Lt);if(Rt.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-H&&Y>=0&&Y<=T.height-V&&O.readPixels(z,Y,H,V,mt.convert(Xt),mt.convert(Jt),_t)}finally{let Lt=Q!==null?X.get(Q).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(T,z,Y,H,V,_t,Et,vt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At)if(z>=0&&z<=T.width-H&&Y>=0&&Y<=T.height-V){S.bindFramebuffer(O.FRAMEBUFFER,At);let Lt=T.textures[vt],Xt=Lt.format,Jt=Lt.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+vt);let Rt=cd(Lt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,he),O.bufferData(O.PIXEL_PACK_BUFFER,_t.byteLength,O.STREAM_READ),O.readPixels(z,Y,H,V,mt.convert(Xt),mt.convert(Jt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ve=Q!==null?X.get(Q).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Ve);let Te=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Af(O,Te,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,he),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_t),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(he),O.deleteSync(Te),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,Y=0){let H=Math.pow(2,-Y),V=Math.floor(T.image.width*H),_t=Math.floor(T.image.height*H),Et=z!==null?z.x:0,vt=z!==null?z.y:0;K.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Et,vt,V,_t),S.unbindTexture()},this.copyTextureToTexture=function(T,z,Y=null,H=null,V=0,_t=0){let Et,vt,At,Lt,Xt,Jt,Rt,he,Ve,Te=T.isCompressedTexture?T.mipmaps[_t]:T.image;if(Y!==null)Et=Y.max.x-Y.min.x,vt=Y.max.y-Y.min.y,At=Y.isBox3?Y.max.z-Y.min.z:1,Lt=Y.min.x,Xt=Y.min.y,Jt=Y.isBox3?Y.min.z:0;else{let Be=Math.pow(2,-V);Et=Math.floor(Te.width*Be),vt=Math.floor(Te.height*Be),T.isDataArrayTexture?At=Te.depth:T.isData3DTexture?At=Math.floor(Te.depth*Be):At=1,Lt=0,Xt=0,Jt=0}H!==null?(Rt=H.x,he=H.y,Ve=H.z):(Rt=0,he=0,Ve=0);let ve=mt.convert(z.format),ln=mt.convert(z.type),St;z.isData3DTexture?(K.setTexture3D(z,0),St=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(K.setTexture2DArray(z,0),St=O.TEXTURE_2D_ARRAY):(K.setTexture2D(z,0),St=O.TEXTURE_2D),S.activeTexture(O.TEXTURE0),S.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),S.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),S.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);let gn=S.getParameter(O.UNPACK_ROW_LENGTH),se=S.getParameter(O.UNPACK_IMAGE_HEIGHT),kn=S.getParameter(O.UNPACK_SKIP_PIXELS),li=S.getParameter(O.UNPACK_SKIP_ROWS),Ui=S.getParameter(O.UNPACK_SKIP_IMAGES);S.pixelStorei(O.UNPACK_ROW_LENGTH,Te.width),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Te.height),S.pixelStorei(O.UNPACK_SKIP_PIXELS,Lt),S.pixelStorei(O.UNPACK_SKIP_ROWS,Xt),S.pixelStorei(O.UNPACK_SKIP_IMAGES,Jt);let Ls=T.isDataArrayTexture||T.isData3DTexture,ge=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let Be=X.get(T),zi=X.get(z),Me=X.get(Be.__renderTarget),Fi=X.get(zi.__renderTarget);S.bindFramebuffer(O.READ_FRAMEBUFFER,Me.__webglFramebuffer),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Ds=0;Ds<At;Ds++)Ls&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(T).__webglTexture,V,Jt+Ds),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(z).__webglTexture,_t,Ve+Ds)),O.blitFramebuffer(Lt,Xt,Et,vt,Rt,he,Et,vt,O.DEPTH_BUFFER_BIT,O.NEAREST);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||X.has(T)){let Be=X.get(T),zi=X.get(z);S.bindFramebuffer(O.READ_FRAMEBUFFER,P),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let Me=0;Me<At;Me++)Ls?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.__webglTexture,V,Jt+Me):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Be.__webglTexture,V),ge?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,zi.__webglTexture,_t,Ve+Me):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,zi.__webglTexture,_t),V!==0?O.blitFramebuffer(Lt,Xt,Et,vt,Rt,he,Et,vt,O.COLOR_BUFFER_BIT,O.NEAREST):ge?O.copyTexSubImage3D(St,_t,Rt,he,Ve+Me,Lt,Xt,Et,vt):O.copyTexSubImage2D(St,_t,Rt,he,Lt,Xt,Et,vt);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ge?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(St,_t,Rt,he,Ve,Et,vt,At,ve,ln,Te.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(St,_t,Rt,he,Ve,Et,vt,At,ve,Te.data):O.texSubImage3D(St,_t,Rt,he,Ve,Et,vt,At,ve,ln,Te):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_t,Rt,he,Et,vt,ve,ln,Te.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_t,Rt,he,Te.width,Te.height,ve,Te.data):O.texSubImage2D(O.TEXTURE_2D,_t,Rt,he,Et,vt,ve,ln,Te);S.pixelStorei(O.UNPACK_ROW_LENGTH,gn),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,se),S.pixelStorei(O.UNPACK_SKIP_PIXELS,kn),S.pixelStorei(O.UNPACK_SKIP_ROWS,li),S.pixelStorei(O.UNPACK_SKIP_IMAGES,Ui),_t===0&&z.generateMipmaps&&O.generateMipmap(St),S.unbindTexture()},this.initRenderTarget=function(T){X.get(T).__webglFramebuffer===void 0&&K.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?K.setTextureCube(T,0):T.isData3DTexture?K.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?K.setTexture2DArray(T,0):K.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){W=0,$=0,Q=null,S.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var Ue=(s,t,e)=>Math.min(e,Math.max(t,s)),pe=(s,t,e)=>s+(t-s)*e,ze=(s,t,e)=>{let n=Ue((e-s)/(t-s),0,1);return n*n*(3-2*n)},w1=(s=1,t)=>t===void 0?Math.random()*s:s+Math.random()*(t-s),wr=(s,t)=>Math.floor(w1(s,t+1)),Ce=s=>s[Math.floor(Math.random()*s.length)],Ii=s=>{let t=s.slice();for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t},E1=s=>{for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s},Pi=(s,t,e)=>s+E1(t-s)*e;function Le(s){let t=s|0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $n(s,t,e=0){let n=Math.imul(s|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}var Ci=new Uint8Array(512);{let s=Le(20240607),t=[];for(let e=0;e<256;e++)t.push(e);for(let e=255;e>0;e--){let n=Math.floor(s()*(e+1));[t[e],t[n]]=[t[n],t[e]]}for(let e=0;e<512;e++)Ci[e]=t[e&255]}var cc=[1,-1,1,-1,1,-1,0,0],hc=[1,1,-1,-1,0,0,1,-1],dp=s=>s*s*s*(s*(s*6-15)+10);function Li(s,t){let e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,o=e&255,a=n&255,c=Ci[Ci[o]+a]&7,l=Ci[Ci[o]+a+1]&7,h=Ci[Ci[o+1]+a]&7,d=Ci[Ci[o+1]+a+1]&7,u=dp(i),f=dp(r),p=cc[c]*i+hc[c]*r,x=cc[h]*(i-1)+hc[h]*r,g=cc[l]*i+hc[l]*(r-1),m=cc[d]*(i-1)+hc[d]*(r-1),M=p+(x-p)*u,b=g+(m-g)*u;return(M+(b-M)*f)*1.2}function es(s,t,e=5,n=2.03,i=.5){let r=1,o=1,a=0,c=0;for(let l=0;l<e;l++)a+=r*Li(s*o,t*o),c+=r,r*=i,o*=n;return a/c}function fp(s,t,e=4){let n=1,i=1,r=0,o=0;for(let a=0;a<e;a++){let c=1-Math.abs(Li(s*i,t*i));c*=c,r+=n*c,o+=n,n*=.5,i*=2.1}return r/o}function v(s,t,...e){let n=document.createElement(s);if(t)for(let i in t){let r=t[i];if(!(r==null||r===!1))if(i==="class")n.className=r;else if(i==="style"&&typeof r=="object")for(let o in r)o.startsWith("--")?n.style.setProperty(o,r[o]):n.style[o]=r[o];else i==="html"?n.innerHTML=r:i.startsWith("on")&&typeof r=="function"?n.addEventListener(i.slice(2).toLowerCase(),r):i==="dataset"?Object.assign(n.dataset,r):n.setAttribute(i,r===!0?"":r)}for(let i of e.flat(1/0))i==null||i===!1||n.append(i.nodeType?i:document.createTextNode(String(i)));return n}var _n=(s,t=document)=>t.querySelector(s);function vi(s){return Math.round(s).toLocaleString("he-IL")}function Oo(){return matchMedia("(pointer: coarse)").matches||"ontouchstart"in window}var T1=[{id:"z1",x:170,z:-190,r:30,blend:60},{id:"z2",x:640,z:-200,r:58,blend:70,y:6},{id:"z3",x:-780,z:240,r:42,blend:60},{id:"z4",x:280,z:830,r:42,blend:60,y:1.6},{id:"z5",x:1010,z:-930,r:34,blend:50},{id:"z6",x:-640,z:-770,r:80,blend:70},{id:"z7",x:-1200,z:-1200,r:26,blend:60}],A1=[{id:"spawn",x:0,z:0,r:85,blend:90},{id:"castle",x:-150,z:-540,r:170,blend:120},{id:"autumn",x:1120,z:720,r:90,blend:80},{id:"port",x:1480,z:330,r:60,blend:70},{id:"stones",x:-330,z:640,r:45,blend:40},{id:"pitch",x:-520,z:-190,r:95,blend:70},{id:"ruins",x:-1020,z:820,r:60,blend:50},{id:"village3",x:520,z:330,r:70,blend:70}],En=[...T1,...A1],Mu=[{x:1060,z:-1170,h:280,r:460},{x:-1200,z:-1200,h:320,r:430},{x:-150,z:-540,h:60,r:270},{x:-1560,z:-300,h:150,r:380},{x:120,z:-1560,h:210,r:520},{x:1750,z:-150,h:110,r:300},{x:-300,z:1500,h:90,r:300}],Su=[{x:640,z:-200,r:430,depth:-10},{x:-250,z:-300,r:175,depth:-7},{x:-430,z:520,r:150,depth:-5},{x:700,z:500,r:120,depth:-5},{x:165,z:950,r:75,depth:-3.5},{x:420,z:790,r:62,depth:-3}],wu=[[[0,0],[90,-90],[170,-190]],[[0,0],[-40,-200],[-120,-340],[-150,-440]],[[0,0],[-250,80],[-560,170],[-780,240]],[[0,0],[60,300],[170,560],[280,830]],[[170,-190],[330,-200]],[[170,-190],[330,-420],[560,-640],[800,-780],[1010,-930]],[[0,0],[-300,-150],[-450,-420],[-560,-640],[-640,-770]],[[-150,-440],[-300,-700],[-560,-870],[-640,-770]],[[-640,-770],[-900,-1e3],[-1200,-1200]],[[280,830],[650,780],[1120,720]],[[1120,720],[1480,330]],[[0,0],[260,200],[520,330],[650,400]],[[-780,240],[-1020,820]],[[0,0],[-330,300],[-330,640]],[[0,0],[-250,-130],[-520,-190]]],uc=[{a:[338,-200],b:[585,-200],w:6,y:1.5}],pp={x:-780,z:240,r:520},mp={x:1120,z:720,r:480},gp={x:280,z:830,r:340};function Wt(s){return En.find(t=>t.id===s)}function yp(s,t){let e=Math.hypot(s,t)/2900,n=ze(1,.6,e),i=16+es(s*.0035+7,t*.0035,4)*15+es(s*.011,t*.011+9,3)*4+Li(s*.04,t*.04)*.7+es(s*9e-4+50,t*9e-4-30,3)*22;for(let o=0;o<Mu.length;o++){let a=Mu[o],c=Math.hypot(s-a.x,t-a.z)/a.r;if(c<1){let l=ze(1,0,c),h=.65+.7*fp(s*.003+o*7,t*.003,4);i+=a.h*l*l*h*1.15}}let r=i*n-(1-n)*70;for(let o=0;o<Su.length;o++){let a=Su[o],c=Math.hypot(s-a.x,t-a.z)/a.r+Li(s*.006+o,t*.006)*.16;c<1.1&&(r=pe(r,a.depth,ze(1,.5,c)))}return r}for(let s of En)s.y===void 0&&(s.y=yp(s.x,s.z));function Tt(s,t){let e=yp(s,t);for(let n=0;n<En.length;n++){let i=En[n],r=s-i.x,o=t-i.z;if(Math.abs(r)>i.r+i.blend||Math.abs(o)>i.r+i.blend)continue;let a=Math.hypot(r,o);a<i.r+i.blend&&(e=pe(e,i.y,1-ze(i.r,i.r+i.blend,a)))}for(let n=0;n<uc.length;n++){let i=uc[n],r=Tu(s,t,i.a[0],i.a[1],i.b[0],i.b[1]);if(r<i.w+6){let o=1-ze(i.w,i.w+6,r);e=pe(e,Math.max(e,i.y),o)}}return e}function Tu(s,t,e,n,i,r){let o=i-e,a=r-n,c=Ue(((s-e)*o+(t-n)*a)/(o*o+a*a||1),0,1);return Math.hypot(s-(e+o*c),t-(n+a*c))}function ko(s,t){let e=1e9;for(let n=0;n<wu.length;n++){let i=wu[n];for(let r=0;r<i.length-1;r++){let o=Tu(s,t,i[r][0],i[r][1],i[r+1][0],i[r+1][1]);o<e&&(e=o)}}for(let n of uc)e=Math.min(e,Tu(s,t,n.a[0],n.a[1],n.b[0],n.b[1])-1);return e}function Ho(s,t,e){let i=e===void 0?Tt(s,t):e,r=Tt(s+2.5,t)-i,o=Tt(s,t+2.5)-i;return Math.hypot(r,o)/2.5}var Au=(s,t,e)=>1-ze(s.r*.55,s.r,Math.hypot(t-s.x,e-s.z)),ns=(s,t)=>Au(pp,s,t),is=(s,t)=>Au(mp,s,t),ss=(s,t)=>Au(gp,s,t);function Es(s,t){let e=es(s*.0016+300,t*.0016-120,4)*.5+.5,n=ze(.42,.62,e);return n=Math.max(n,ns(s,t)*.95,is(s,t)*.8),n=Math.max(n,ss(s,t)*.28),n}var rn={grassA:new ot("#3f9a3a"),grassB:new ot("#79b83f"),grassDry:new ot("#b0b64a"),forest:new ot("#2a6b36"),enchant:new ot("#1f7a64"),autumnA:new ot("#c97a2c"),autumnB:new ot("#9a4a22"),swampA:new ot("#4f6b3a"),swampB:new ot("#2f4d44"),sand:new ot("#e5d69a"),wetSand:new ot("#a89a6a"),seabed:new ot("#2f6a77"),rock:new ot("#7b756d"),rockDark:new ot("#5a5650"),snow:new ot("#f2f6ff"),path:new ot("#c0a370"),cobble:new ot("#a9a79f")},Eu=new ot;function Ru(s,t,e,n,i){let r=es(s*.01,t*.01,3)*.5+.5,o=Li(s*.09,t*.09)*.5+.5;i.copy(rn.grassA).lerp(rn.grassB,ze(.35,.7,r)),i.lerp(rn.grassDry,ze(.62,.9,es(s*.004+40,t*.004,2)*.5+.5)*.5);let a=Es(s,t);i.lerp(rn.forest,a*.6),i.lerp(rn.enchant,ns(s,t)*.55);let c=is(s,t);c>0&&i.lerp(Eu.copy(rn.autumnA).lerp(rn.autumnB,r),c*.8);let l=ss(s,t);if(l>0&&i.lerp(Eu.copy(rn.swampA).lerp(rn.swampB,o),l*.85),e<3.2){let p=ze(3.2,1,e);i.lerp(rn.sand,p*(1-l*.7)),i.lerp(rn.wetSand,ze(.9,-.2,e)*.8)}e<-.2&&i.lerp(rn.seabed,ze(-.2,-6,e));let h=Math.max(ze(.55,1,n),ze(110,190,e+o*25)*.9);h>0&&i.lerp(Eu.copy(rn.rock).lerp(rn.rockDark,o),h);let d=ze(215,250,e+(r-.5)*40)*(1-ze(1.1,1.6,n)*.6);d>0&&i.lerp(rn.snow,d);let u=ko(s,t);if(u<5){let p=1-ze(2.2,4.6,u+(o-.5)*1.6);p>0&&i.lerp(e>1.2&&e<3&&u<0?rn.cobble:rn.path,p*.85*(1-h*.5))}let f=.92+o*.16;return i.r*=f,i.g*=f,i.b*=f,i}function R1(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n=e.createImageData(256,256),i=(o,a)=>es(o*.045+11,a*.045+3,4)*.5+.5+Li(o*.35,a*.35)*.08;for(let o=0;o<256;o++)for(let a=0;a<256;a++){let c=a/256,l=o/256,h=pe(pe(i(a,o),i(a-256,o),c),pe(i(a,o-256),i(a-256,o-256),c),l),d=Ue(.62+h*.5,0,1)*255,u=(o*256+a)*4;n.data[u]=n.data[u+1]=n.data[u+2]=d,n.data[u+3]=255}e.putImageData(n,0,0);let r=new vn(t);return r.wrapS=r.wrapT=Gi,r.colorSpace=Un,r.anisotropy=8,r}var bn=32,xp=64,Er=8192,dc=class{constructor(t,e=1){this.scene=t,this.tiles=new Map,this.queue=[],this.quality=e;let n=R1();this.material=new fe({vertexColors:!0,roughness:1,metalness:0,map:n,bumpMap:n,bumpScale:1.4,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),this.group=new It,t.add(this.group),this.desired=new Set}key(t,e,n){return t+"_"+e+"_"+n}build(t,e,n){let i=bn+1,r=t/bn,o=e-t/2,a=n-t/2,c=Math.max(2.5,t*.035),l=i*i,h=l+i*4,d=new Float32Array(h*3),u=new Float32Array(h*3),f=new Float32Array(h*3),p=new Float32Array(h*2),x=new ot,g=new Float32Array(l);for(let C=0;C<i;C++)for(let N=0;N<i;N++)g[C*i+N]=Tt(o+N*r,a+C*r);for(let C=0;C<i;C++)for(let N=0;N<i;N++){let U=C*i+N,D=o+N*r,P=a+C*r,B=g[U];d[U*3]=D,d[U*3+1]=B,d[U*3+2]=P;let W=N>0?g[U-1]:Tt(D-r,P),$=N<bn?g[U+1]:Tt(D+r,P),Q=C>0?g[U-i]:Tt(D,P-r),q=C<bn?g[U+i]:Tt(D,P+r),Z=W-$,G=Q-q,ht=2*r,ct=Math.hypot(Z,ht,G);u[U*3]=Z/ct,u[U*3+1]=ht/ct,u[U*3+2]=G/ct;let ie=Math.hypot($-W,q-Q)/(2*r);Ru(D,P,B,ie,x),f[U*3]=x.r,f[U*3+1]=x.g,f[U*3+2]=x.b,p[U*2]=D*.11,p[U*2+1]=P*.11}let m=[];for(let C=0;C<bn;C++)for(let N=0;N<bn;N++){let U=C*i+N,D=U+1,P=U+i,B=P+1;m.push(U,P,D,D,P,B)}let M=l,b=C=>{let N=M;for(let U=0;U<i;U++){let D=C(U);d[M*3]=d[D*3],d[M*3+1]=d[D*3+1]-c,d[M*3+2]=d[D*3+2],u[M*3]=u[D*3],u[M*3+1]=u[D*3+1],u[M*3+2]=u[D*3+2],f[M*3]=f[D*3],f[M*3+1]=f[D*3+1],f[M*3+2]=f[D*3+2],p[M*2]=p[D*2],p[M*2+1]=p[D*2+1],M++}return N},y=b(C=>C),w=b(C=>bn*i+C),E=b(C=>C*i),R=b(C=>C*i+bn);for(let C=0;C<bn;C++)m.push(C,y+C,C+1,C+1,y+C,y+C+1),m.push(bn*i+C,bn*i+C+1,w+C,bn*i+C+1,w+C+1,w+C),m.push(C*i,(C+1)*i,E+C,(C+1)*i,E+C+1,E+C),m.push(C*i+bn,R+C,(C+1)*i+bn,(C+1)*i+bn,R+C,R+C+1);let _=new ye;_.setAttribute("position",new ne(d,3)),_.setAttribute("normal",new ne(u,3)),_.setAttribute("color",new ne(f,3)),_.setAttribute("uv",new ne(p,2)),_.setIndex(m),_.boundingSphere=new Ln(new L(e,60,n),t*.75+300),_.boundingBox=new Wn(new L(o,-80,a),new L(o+t,420,a+t));let A=new Vt(_,this.material);return A.receiveShadow=!0,A.frustumCulled=!0,A.matrixAutoUpdate=!1,A.visible=!1,this.group.add(A),A}collect(t,e,n,i,r){let o=i.x-e,a=i.z-n,c=Math.max(0,i.y)*.8,l=Math.max(0,Math.abs(o)-t/2),h=Math.max(0,Math.abs(a)-t/2),d=Math.hypot(l,h,c);if(!(Math.hypot(e,n)-t*.71>2900*1.05))if(t>xp&&d<t*1.15){let f=t/2,p=t/4;this.collect(f,e-p,n-p,i,r),this.collect(f,e+p,n-p,i,r),this.collect(f,e-p,n+p,i,r),this.collect(f,e+p,n+p,i,r)}else r.push({size:t,cx:e,cz:n,dist:d})}update(t,e=6){let n=[];this.collect(Er,0,0,t,n);let i=new Set,r=[];for(let h of n){let d=this.key(h.size,h.cx,h.cz);i.add(d),this.tiles.has(d)||r.push({...h,k:d})}r.sort((h,d)=>h.dist-d.dist);let o=performance.now(),a=0;for(let h of r){if(a>0&&performance.now()-o>e)break;let d=this.build(h.size,h.cx,h.cz);d.userData={size:h.size,cx:h.cx,cz:h.cz,born:performance.now()},this.tiles.set(h.k,d),a++}let c=new Set;for(let h of n){let d=this.key(h.size,h.cx,h.cz);if(this.tiles.has(d))c.add(d);else{let u=h.size*2,f=h.cx,p=h.cz,x=!1;for(;u<=Er;){let g=Math.floor((f+Er/2)/u)*u+u/2-Er/2,m=Math.floor((p+Er/2)/u)*u+u/2-Er/2,M=this.key(u,g,m);if(this.tiles.has(M)){c.add(M),x=!0;break}u*=2}if(!x){let g=[[h.size,h.cx,h.cz]];for(;g.length;){let[m,M,b]=g.pop();if(m<=xp/2)continue;let y=m/2,w=m/4;for(let[E,R]of[[-w,-w],[w,-w],[-w,w],[w,w]]){let _=this.key(y,M+E,b+R);this.tiles.has(_)?c.add(_):g.push([y,M+E,b+R])}}}}}this.desired=i;let l=performance.now();for(let[h,d]of this.tiles){let u=c.has(h);d.visible=u,!u&&l-d.userData.born>2e4&&!i.has(h)&&(this.group.remove(d),d.geometry.dispose(),this.tiles.delete(h))}return r.length-a}};var bp=`
float hash21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x), mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x), f.y); }
float fbm5(vec2 p){ float a=.5,s=0.; for(int i=0;i<5;i++){ s+=a*vnoise(p); p=p*2.03+17.1; a*=.5; } return s; }
`;function C1(){let s=new Oe({side:sn,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{uSunDir:{value:new L(0,1,0)},uTime:{value:0},uTop:{value:new ot},uHorizon:{value:new ot},uSunColor:{value:new ot},uNight:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main(){ vDir = normalize(position); vec4 p = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*p; gl_Position.z = gl_Position.w * 0.99999; }`,fragmentShader:`
      varying vec3 vDir; uniform vec3 uSunDir,uTop,uHorizon,uSunColor; uniform float uTime,uNight;
      ${bp}
      void main(){
        vec3 d = normalize(vDir); float y = d.y;
        vec3 col = mix(uHorizon, uTop, pow(clamp(y,0.,1.),0.5));
        if (y<0.) col = mix(uHorizon, uHorizon*0.55, clamp(-y*4.,0.,1.));
        float sd = max(dot(d,uSunDir),0.);
        col += uSunColor*(pow(sd,900.)*6. + pow(sd,40.)*0.5 + pow(sd,4.)*0.18);
        vec3 md = -uSunDir; float mm = max(dot(d,md),0.);
        col += vec3(0.85,0.9,1.0)*(smoothstep(0.9990,0.9994,mm)*1.2 + pow(mm,60.)*0.25)*uNight;
        if (y>0.0){
          vec2 sp = d.xz/(d.y+0.25)*90.; vec2 cell = floor(sp);
          float s = hash21(cell); float tw = 0.6+0.4*sin(uTime*2.0+s*50.);
          float st = step(0.985,s)*smoothstep(0.0,0.25,y)*tw;
          vec2 fr = fract(sp)-0.5; st *= smoothstep(0.5,0.0,length(fr));
          col += vec3(1.0,0.95,0.85)*st*uNight*2.0;
          vec2 cp = d.xz/(y+0.18)*0.9 + vec2(uTime*0.006, uTime*0.002);
          float c = fbm5(cp*1.6); c = smoothstep(0.52,0.82,c);
          float c2 = fbm5(cp*3.4+9.);
          vec3 cc = mix(vec3(1.0), uHorizon*0.8+vec3(0.15), 0.35);
          cc *= mix(0.78,1.0,c2);
          cc = mix(cc, uTop*0.9, uNight*0.7);
          col = mix(col, cc, c*0.9*smoothstep(0.0,0.18,y));
        }
        gl_FragColor = vec4(col,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),t=new Vt(new un(1e3,32,16),s);return t.frustumCulled=!1,t.renderOrder=-10,t}function Mp(s){let e=new Uint8Array(589824),n=2900*2.1,i=new ys(e,768,768,yr,dn);i.magFilter=i.minFilter=$e,i.wrapS=i.wrapT=Vn,i.generateMipmaps=!1;let r=0;return{tex:i,span:n,step:a=>{let c=Math.min(768,r+a);for(;r<c;r++)for(let l=0;l<768;l++){let h=(l/767-.5)*n,d=(r/767-.5)*n,u=Tt(h,d);e[r*768+l]=Ue(Math.round((u+10)/32*255),0,255)}return i.needsUpdate=!0,r>=768},N:768}}function Sp(s){let t=new Oe({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uSunDir:{value:new L(0,1,0)},uSunColor:{value:new ot},uTop:{value:new ot},uHorizon:{value:new ot},uFog:{value:new ot},uFogNear:{value:300},uFogFar:{value:2800},uDepth:{value:s.tex},uSpan:{value:s.span},uNight:{value:0}},vertexShader:`
      varying vec3 vWorld;
      void main(){ vec4 wp = modelMatrix*vec4(position,1.0); vWorld = wp.xyz; gl_Position = projectionMatrix*viewMatrix*wp; }`,fragmentShader:`
      varying vec3 vWorld;
      uniform float uTime,uSpan,uFogNear,uFogFar,uNight; uniform vec3 uSunDir,uSunColor,uTop,uHorizon,uFog;
      uniform sampler2D uDepth;
      ${bp}
      vec3 skyCol(vec3 d){ vec3 c = mix(uHorizon,uTop,pow(clamp(d.y,0.,1.),0.5)); float sd=max(dot(d,uSunDir),0.); c += uSunColor*(pow(sd,300.)*4.+pow(sd,10.)*0.25); return c; }
      void main(){
        vec2 uv = vWorld.xz/uSpan + 0.5;
        float hh = texture2D(uDepth, uv).r*32. - 10.;
        float depth = -hh;
        if (depth < -0.3) discard;
        vec2 p = vWorld.xz;
        float t = uTime;
        // \u05D2\u05DC\u05D9\u05DD
        vec2 g = vec2(0.);
        g += vec2(cos(p.x*0.11+t*0.9), cos(p.y*0.09+t*0.7))*0.08;
        g += vec2(cos(p.x*0.33+p.y*0.2+t*1.7), cos(p.y*0.37-p.x*0.18+t*1.5))*0.05;
        g += (vec2(vnoise(p*0.6+t*0.35), vnoise(p*0.6+31.+t*0.3))-0.5)*0.22;
        g += (vec2(vnoise(p*1.9-t*0.5), vnoise(p*1.9+11.-t*0.45))-0.5)*0.12;
        vec3 n = normalize(vec3(-g.x,1.0,-g.y));
        vec3 V = cameraPosition - vWorld; float dist = length(V); V/=dist;
        float fres = pow(1.0-max(dot(n,V),0.0),4.0);
        vec3 R = reflect(-V,n); R.y = abs(R.y);
        vec3 refl = skyCol(R);
        vec3 deep = mix(vec3(0.02,0.16,0.30), vec3(0.01,0.03,0.12), uNight);
        vec3 shallow = mix(vec3(0.10,0.62,0.66), vec3(0.03,0.12,0.2), uNight);
        float dk = smoothstep(0.0,6.0,depth);
        vec3 body = mix(shallow, deep, dk);
        vec3 col = mix(body, refl, clamp(fres*0.85+0.08,0.,1.));
        // \u05E7\u05E6\u05E3 \u05D1\u05D7\u05D5\u05E3
        float foamN = vnoise(p*0.8 + t*0.4);
        float foam = smoothstep(0.55+foamN*0.25, 0.0, depth+0.15*sin(t*1.3+p.x*0.2)) ;
        col = mix(col, vec3(0.95,0.98,1.0)*(1.0-0.6*uNight), foam*0.75);
        float alpha = mix(0.55, 0.96, smoothstep(0.0,2.5,depth));
        alpha = max(alpha, fres);
        alpha *= smoothstep(-0.3,0.15,depth);
        float f = smoothstep(uFogNear,uFogFar,dist);
        col = mix(col, uFog, f);
        gl_FragColor = vec4(col, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new Vt(new Qe(s.span*1.9,s.span*1.9),t);return e.rotation.x=-Math.PI/2,e.position.y=0,e.renderOrder=5,e.frustumCulled=!1,e}var Cu={day:{top:"#2a74d8",horizon:"#a8d4ff",sun:"#fff1cf"},dusk:{top:"#4a4fa8",horizon:"#ff9f6b",sun:"#ff8a3c"},night:{top:"#040922",horizon:"#14205a",sun:"#000000"}},vp=new ot,_p=new ot,pc=class{constructor(t,e){this.scene=t,this.time=.36,this.speed=1/900,this.night=0,this.sky=C1(),t.add(this.sky),this.sun=new pr("#fff1cf",3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let n=this.sun.shadow.camera;n.left=n.bottom=-110,n.right=n.top=110,n.near=10,n.far=700,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.6,t.add(this.sun,this.sun.target),this.moon=new pr("#8fa8ff",0),t.add(this.moon),this.hemi=new Mo("#bcd8ff","#4a5a30",1),t.add(this.hemi),t.fog=new jr("#a8d4ff",250,2800),this.sunDir=new L(0,1,0),this.water=null,this.colors={top:new ot,horizon:new ot,sun:new ot},this.renderer=e,this.potionBoost=0,this.vision=0,this.visionK=0}setFog(t,e){this.scene.fog.near=t,this.scene.fog.far=e,this.water&&(this.water.material.uniforms.uFogNear.value=t,this.water.material.uniforms.uFogFar.value=e)}get hour(){return(this.time*24+0)%24}update(t,e,n){this.time=(this.time+t*this.speed)%1;let i=(this.time-.25)*Math.PI*2,r=Math.sin(i);this.sunDir.set(Math.cos(i)*.9,r,.35).normalize();let o=ze(.02,.38,r),a=ze(-.22,.04,r),c=(d,u)=>{u.copy(vp.set(Cu.night[d])).lerp(_p.set(Cu.dusk[d]),a),u.lerp(_p.set(Cu.day[d]),o)};c("top",this.colors.top),c("horizon",this.colors.horizon),c("sun",this.colors.sun),this.night=Ue(ze(.08,-.2,r)+this.potionBoost*0,0,1);let l=this.sky.material.uniforms;l.uSunDir.value.copy(this.sunDir),l.uTime.value+=t,l.uTop.value.copy(this.colors.top),l.uHorizon.value.copy(this.colors.horizon),l.uSunColor.value.copy(this.colors.sun),l.uNight.value=this.night,this.sky.position.copy(n.position),this.sky.scale.setScalar(1),this.scene.fog.color.copy(this.colors.horizon).multiplyScalar(.92),this.sun.color.copy(this.colors.sun),this.sun.intensity=3.2*ze(-.02,.2,r);let h=4;if(this.sun.target.position.set(Math.round(e.x/h)*h,Math.round(e.y/h)*h,Math.round(e.z/h)*h),this.sun.position.copy(this.sun.target.position).addScaledVector(this.sunDir,280),this.sun.castShadow=r>.02&&this.shadowsOn!==!1,this.visionK+=(this.vision-this.visionK)*Math.min(1,t*1.5),this.moon.intensity=.55*this.night+1.4*this.visionK*this.night,this.moon.position.copy(e).addScaledVector(this.sunDir,-300),this.hemi.intensity=pe(.18,1.05,o)+.1*a+.55*this.visionK*this.night,this.hemi.color.copy(this.colors.top).lerp(vp.set("#ffffff"),.55),this.hemi.groundColor.set("#4a5a30").multiplyScalar(pe(.25,1,o)),this.water){let d=this.water.material.uniforms;d.uTime.value+=t,d.uSunDir.value.copy(this.sunDir),d.uSunColor.value.copy(this.colors.sun),d.uTop.value.copy(this.colors.top),d.uHorizon.value.copy(this.colors.horizon),d.uFog.value.copy(this.scene.fog.color),d.uNight.value=this.night}}};function Vo(s,t,{srgb:e=!0,aniso:n=8}={}){let i=document.createElement("canvas");i.width=i.height=s;let r=i.getContext("2d");t(r,s);let o=new vn(i);return o.wrapS=o.wrapT=Gi,o.colorSpace=e?Re:Un,o.anisotropy=n,o}function mc(s,t,e,n,i=255){let r=s.getImageData(0,0,t,t);for(let o=0;o<r.data.length;o+=4){let a=(e()-.5)*n;r.data[o]=Ue(r.data[o]+a,0,255),r.data[o+1]=Ue(r.data[o+1]+a,0,255),r.data[o+2]=Ue(r.data[o+2]+a,0,255)}s.putImageData(r,0,0)}function I1(){return Vo(256,(s,t)=>{let e=Le(5);s.fillStyle="#6d6a66",s.fillRect(0,0,t,t);let n=8,i=t/n;for(let r=0;r<n;r++){let o=r%2*20-40;for(;o<t;){let a=48+e()*36,c=150+e()*70;s.fillStyle=`rgb(${c},${c-4},${c-10})`,s.fillRect(o+2,r*i+2,a-4,i-4),o+a>t&&s.fillRect(o-t+2,r*i+2,a-4,i-4),o+=a}}mc(s,t,e,40)})}function P1(){return Vo(256,(s,t)=>{let e=Le(8);s.fillStyle="#e9dcc0",s.fillRect(0,0,t,t);for(let n=0;n<600;n++)s.fillStyle=`rgba(${120+e()*60},${100+e()*50},${70+e()*40},${.03+e()*.05})`,s.beginPath(),s.arc(e()*t,e()*t,4+e()*18,0,7),s.fill();mc(s,t,e,22)})}function L1(){return Vo(256,(s,t)=>{let e=Le(11),n=8,i=t/n;for(let r=0;r<n;r++){let o=110+e()*40;s.fillStyle=`rgb(${o+30},${o},${o-45})`,s.fillRect(r*i,0,i,t);for(let a=0;a<18;a++){s.strokeStyle=`rgba(40,20,5,${.1+e()*.15})`,s.lineWidth=1+e()*1.5,s.beginPath();let c=r*i+e()*i;s.moveTo(c,0),s.bezierCurveTo(c+(e()-.5)*6,t*.3,c+(e()-.5)*6,t*.6,c+(e()-.5)*4,t),s.stroke()}s.fillStyle="rgba(0,0,0,0.5)",s.fillRect(r*i,0,2,t)}mc(s,t,e,20)})}function D1(){return Vo(256,(s,t)=>{let e=Le(21);s.fillStyle="#888",s.fillRect(0,0,t,t);let n=8,i=t/n,r=8,o=t/r;for(let a=0;a<n;a++)for(let c=-1;c<=r;c++){let l=c*o+a%2*o*.5,h=190+e()*60;s.fillStyle=`rgb(${h},${h},${h})`,s.beginPath(),s.moveTo(l+1,a*i),s.lineTo(l+o-1,a*i),s.lineTo(l+o-1,a*i+i*.65),s.quadraticCurveTo(l+o/2,a*i+i*1.25,l+1,a*i+i*.65),s.closePath(),s.fill()}mc(s,t,e,28)})}function N1(){return Vo(64,(s,t)=>{s.fillStyle="#fff",s.fillRect(0,0,t,t),s.strokeStyle="rgba(0,0,0,0.08)";for(let e=0;e<t;e+=4)s.beginPath(),s.moveTo(e,0),s.lineTo(e,t),s.stroke(),s.beginPath(),s.moveTo(0,e),s.lineTo(t,e),s.stroke()})}var on={},rs={stone:.25,plaster:.25,wood:.35,roof:.5,dark:.25};function wp(){let s=I1();on.stone=new fe({map:s,bumpMap:s,bumpScale:2.5,vertexColors:!0,roughness:.95}),on.plaster=new fe({map:P1(),vertexColors:!0,roughness:.95});let t=L1();on.wood=new fe({map:t,bumpMap:t,bumpScale:1.5,vertexColors:!0,roughness:.85});let e=D1();return on.roof=new fe({map:e,bumpMap:e,bumpScale:2,vertexColors:!0,roughness:.7}),on.flat=new fe({vertexColors:!0,roughness:.8}),on.metal=new fe({vertexColors:!0,roughness:.3,metalness:.85}),on.cloth=new fe({map:N1(),vertexColors:!0,roughness:.9,side:we}),on.leaf=new fe({vertexColors:!0,roughness:.9,flatShading:!0}),on.window=new fe({color:"#2a2418",emissive:"#ffb45a",emissiveIntensity:.4,roughness:.4}),on.glow=new Fe({vertexColors:!0,toneMapped:!1}),on.crystal=new fe({vertexColors:!0,roughness:.15,metalness:.2,emissive:"#ffffff",emissiveIntensity:0}),on}function Ep(s){on.window.emissiveIntensity=.25+s*2.8}function Ap(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new ye,l=0;for(let h=0;h<s.length;++h){let d=s[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=s[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Tp(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let p=Tp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Tp(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ne(o,e,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let x=h.getComponent(u,p);a.setComponent(u+d,p,x)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var Iu=new ae,Rp=new Pn,Cp=new Gn,U1=new L,z1=new L,F1=new ot,Dt=class{constructor(){this.parts={},this.colliders=[]}_push(t,e,n,i,r,o){var b;let{x:a=0,y:c=0,z:l=0,rx:h=0,ry:d=0,rz:u=0,sx:f=1,sy:p=1,sz:x=1,color:g="#ffffff"}=n;if(i==="cyl"){let y=e.attributes.position,w=e.attributes.uv;for(let E=0;E<y.count;E++){let R=Math.atan2(y.getX(E),y.getZ(E));w.setXY(E,R*o*r,y.getY(E)*r)}}if(Cp.set(h,d,u),Rp.setFromEuler(Cp),Iu.compose(z1.set(a,c,l),Rp,U1.set(f,p,x)),n.parent&&Iu.premultiply(n.parent),e.applyMatrix4(Iu),i==="planar"){let y=e.attributes.position,w=e.attributes.normal,E=e.attributes.uv;for(let R=0;R<y.count;R++){let _=Math.abs(w.getX(R)),A=Math.abs(w.getY(R)),C=Math.abs(w.getZ(R));A>=_&&A>=C?E.setXY(R,y.getX(R)*r,y.getZ(R)*r):_>=C?E.setXY(R,y.getZ(R)*r,y.getY(R)*r):E.setXY(R,y.getX(R)*r,y.getY(R)*r)}}let m=F1.set(g),M=new Float32Array(e.attributes.position.count*3);for(let y=0;y<M.length;y+=3)M[y]=m.r,M[y+1]=m.g,M[y+2]=m.b;e.setAttribute("color",new ne(M,3)),e.index&&(e=e.toNonIndexed()),((b=this.parts)[t]||(b[t]=[])).push(e)}box(t,e,n,i,r={}){let o=new Xi(e,n,i);return this._push(t,o,r,"planar",rs[t]??.3),this}cyl(t,e,n,i,r={},o=14){let a=new wn(e,n,i,o);return this._push(t,a,r,"cyl",rs[t]??.3,(e+n)/2),this}cone(t,e,n,i={},r=14){let o=new ao(e,n,r);return this._push(t,o,i,"cyl",rs[t]??.3,e*.6),this}sphere(t,e,n={},i=14,r=10){let o=new un(e,i,r);return this._push(t,o,n,"planar",rs[t]??.3),this}ico(t,e,n={},i=1){let r=new yo(e,i);return this._push(t,r,n,"planar",rs[t]??.3),this}gable(t,e,n,i,r={},o=.3){let a=e/2+o,c=i/2+o,l=[[-a,0,-c],[a,0,-c],[0,n,-c],[-a,0,c],[a,0,c],[0,n,c]],h=[[0,2,1],[3,4,5],[0,3,5],[0,5,2],[1,2,5],[1,5,4],[0,1,4],[0,4,3]],d=[];for(let f of h)for(let p of f)d.push(...l[p]);let u=new ye;return u.setAttribute("position",new te(d,3)),u.computeVertexNormals(),u.setAttribute("uv",new te(new Float32Array(d.length/3*2),2)),this._push(t,u,r,"planar",rs[t]??.3),this}geometry(t,e,n={}){return e.attributes.uv||e.setAttribute("uv",new te(new Float32Array(e.attributes.position.count*2),2)),e.attributes.normal||e.computeVertexNormals(),this._push(t,e,n,"planar",rs[t]??.3),this}at(t,e,n,i=0,r=1){let o=new ae().compose(new L(t,e,n),new Pn().setFromEuler(new Gn(0,i,0)),new L(r,r,r)),a={box:4,cyl:4,cone:3,sphere:2,ico:2,gable:4},c={parent:o,builder:this,ry:i,x:t,y:e,z:n,s:r};for(let l in a)c[l]=(...h)=>{for(;h.length<=a[l];)h.push(void 0);return h[a[l]]={...h[a[l]]||{},parent:o},this[l](...h),c};return c.toWorld=(l,h,d)=>new L(l,h,d).applyMatrix4(o),c.collideBox=(l,h,d,u,f,p={})=>{let x=c.toWorld(l,0,h);return this.colliders.push({type:"box",x:x.x,z:x.z,hw:d,hd:u,rot:i+(p.rot||0),top:f,y0:p.y0}),c},c.collideCircle=(l,h,d,u,f={})=>{let p=c.toWorld(l,0,h);return this.colliders.push({type:"circle",x:p.x,z:p.z,r:d,top:u,y0:f.y0}),c},c}collider(t){return this.colliders.push(t),this}build({cast:t=!0,receive:e=!0}={}){let n=new It;for(let i in this.parts){let r=Ap(this.parts[i],!1),o=new Vt(r,on[i]);o.castShadow=t&&i!=="glow",o.receiveShadow=e&&i!=="glow",n.add(o)}return n}};var Pu=class{constructor(){this.map=new Map}_cells(t,e){let n=t.type==="circle"?t.r:Math.hypot(t.hw,t.hd),i=Math.floor((t.x-n)/32),r=Math.floor((t.x+n)/32),o=Math.floor((t.z-n)/32),a=Math.floor((t.z+n)/32);for(let c=i;c<=r;c++)for(let l=o;l<=a;l++)e(c+","+l)}add(t){return t.type==="box"&&(t.cos=Math.cos(t.rot||0),t.sin=-Math.sin(t.rot||0)),this._cells(t,e=>{let n=this.map.get(e);n||this.map.set(e,n=[]),n.push(t)}),t}remove(t){this._cells(t,e=>{let n=this.map.get(e);if(!n)return;let i=n.indexOf(t);i>=0&&n.splice(i,1),n.length||this.map.delete(e)})}addAll(t){return t.map(e=>this.add(e))}removeAll(t){for(let e of t)this.remove(e)}resolve(t,e,n,i=1.8){let r=Math.floor(t.x/32),o=Math.floor(t.z/32),a=!1;for(let c=r-1;c<=r+1;c++)for(let l=o-1;l<=o+1;l++){let h=this.map.get(c+","+l);if(h)for(let d=0;d<h.length;d++){let u=h[d];if(!(n>u.top-.05)&&!(u.y0!==void 0&&n+i<u.y0))if(u.type==="circle"){let f=t.x-u.x,p=t.z-u.z,x=u.r+e,g=f*f+p*p;if(g<x*x){let m=Math.sqrt(g)||1e-4;t.x=u.x+f/m*x,t.z=u.z+p/m*x,a=!0}}else{let f=t.x-u.x,p=t.z-u.z,x=f*u.cos+p*u.sin,g=-f*u.sin+p*u.cos,m=u.hw+e,M=u.hd+e;if(Math.abs(x)<m&&Math.abs(g)<M){let b=m-Math.abs(x),y=M-Math.abs(g),w=x,E=g;b<y?w=Math.sign(x||1)*m:E=Math.sign(g||1)*M,t.x=u.x+w*u.cos-E*u.sin,t.z=u.z+w*u.sin+E*u.cos,a=!0}}}}return a}},Yn=new Pu;var Tn=128;function Ip(s=!0){let t=new Dt;return s?(t.cyl("leaf",.25,.42,2.6,{y:1.3,color:"#5b3d27"},6),t.cone("leaf",2.7,3.6,{y:3.4,color:"#2e6b3c"},7),t.cone("leaf",2.2,3.2,{y:5.4,color:"#347a42"},7),t.cone("leaf",1.6,2.8,{y:7.2,color:"#3b8a49"},7),t.cone("leaf",.95,2.3,{y:8.9,color:"#46985a"},7)):t.cone("leaf",2.6,10,{y:5.5,color:"#2f7040"},5),t}function Pp(s=!0){let t=new Dt;return s?(t.cyl("leaf",.35,.6,3.4,{y:1.7,color:"#6a4a2e"},7),t.cyl("leaf",.18,.3,2,{y:3.8,rz:.6,x:.5,color:"#6a4a2e"},5),t.ico("leaf",2.9,{y:5.4,color:"#4fa845"}),t.ico("leaf",2.1,{x:1.9,y:4.6,z:.6,color:"#5ab84c"}),t.ico("leaf",2.3,{x:-1.7,y:4.8,z:-.8,color:"#44983f"}),t.ico("leaf",1.9,{x:.3,y:6.9,z:.4,color:"#66c455"}),t.ico("leaf",1.6,{x:-.4,y:4.4,z:1.9,color:"#4aa043"})):(t.cyl("leaf",.4,.6,3.4,{y:1.7,color:"#6a4a2e"},5),t.ico("leaf",3.4,{y:5.6,color:"#4fa845"},0)),t}function B1(){let s=new Dt;return s.ico("leaf",.8,{y:.45,sy:.75,color:"#3f9040"}),s.ico("leaf",.55,{x:.6,y:.35,z:.2,color:"#4aa046"}),s.ico("leaf",.5,{x:-.5,y:.35,z:-.3,color:"#37823a"}),s}function O1(){let s=new Dt;return s.ico("leaf",1,{y:.35,sy:.7,sx:1.25,color:"#8a857c"},0),s.ico("leaf",.55,{x:.9,y:.2,z:.3,sy:.7,color:"#77736b"},0),s}function k1(){let s=new Dt;return s.cyl("glow",.07,.1,.45,{y:.22,color:"#e9e0ff"},5),s.sphere("glow",.28,{y:.5,sy:.55,color:"#7fe3ff"},8,5),s.sphere("glow",.1,{y:.62,x:.1,sy:.6,color:"#ff9ff0"},5,4),s}function H1(){let s=new Dt;return s.cyl("flat",.015,.02,.45,{y:.22,color:"#3a9a3a"},3),s.sphere("flat",.1,{y:.48,sy:.6,color:"#ffffff"},6,4),s}var gc=class{constructor(t,e){this.scene=t,this.group=new It,t.add(this.group),this.cells=new Map,this.quality=e,this.setQuality(e);let n=i=>{let o=i.build().children[0];return{geo:o.geometry,mat:o.material}};this.geos={pine:n(Ip(!0)),pineLow:n(Ip(!1)),oak:n(Pp(!0)),oakLow:n(Pp(!1)),bush:n(B1()),rock:n(O1()),mushroom:n(k1()),flower:n(H1())}}setQuality(t){this.quality=t,this.far=[520,800,1100][t],this.near=[200,300,380][t],this.density=[.55,.8,1][t];for(let[,e]of this.cells)this.dispose(e);this.cells.clear()}mesh(t,e,n){let i=new pi(t.geo,t.mat,e);return i.frustumCulled=!0,i}generate(t,e,n){let i=Le((t*73856093^e*19349663)>>>0),r=t*Tn,o=e*Tn,a={pine:[],oak:[],bush:[],rock:[],mushroom:[]},c=n===0,l=Math.round((c?140:70)*this.density),h={pine:[],oak:[],bush:[],rock:[],mushroom:[]},d=[];for(let x=0;x<l;x++){let g=r+i()*Tn,m=o+i()*Tn,M=i(),b=Tt(g,m);if(b<2.2)continue;let y=!1;for(let D=0;D<En.length;D++){let P=En[D];if(Math.hypot(g-P.x,m-P.z)<P.r+P.blend*.4){y=!0;break}}if(y||ko(g,m)<4.5)continue;let w=Ho(g,m,b);if(w>.75)continue;let E=Es(g,m),R=ns(g,m),_=is(g,m),A=ss(g,m),C=b>95,U=b>190?0:C?E*.5:E;if(M<U*.85||E<.2&&M>.97-.02*(1-E)){let D=(.75+i()*.8)*(c?1:1.25),P=i()*6.28,B=C?1:R>.2?.15:_>.2?.2:A>.3?.1:.4,W=i()<B,$=W?"pine":"oak",Q=new ot;if(W)Q.set(A>.3?"#9aa070":C?"#cfe6e0":"#ffffff"),Q.multiplyScalar(.85+i()*.3);else if(R>.25){let q=i();Q.set(q<.4?"#7fd8ff":q<.75?"#9a8cff":"#6ee8b8")}else if(_>.25){let q=i();Q.set(q<.35?"#ff8a2a":q<.7?"#ffc23a":"#e0452a")}else A>.3?Q.set("#8a9a60").multiplyScalar(.8+i()*.2):Q.set(i()<.08?"#ffb7d0":"#ffffff").multiplyScalar(.82+i()*.35);a[$].push([g,b-.2,m,P,D]),h[$].push(Q),c&&d.push({type:"circle",x:g,z:m,r:.55*D,top:b+50})}else if(c){let D=i();if(D<.45&&E>.1)a.bush.push([g,b-.05,m,i()*6.28,.7+i()*.9]),h.bush.push(new ot().setHSL(.27+(i()-.5)*.06,.45,.45+i()*.15).multiplyScalar(2.1));else if(D<.62&&(w>.25||C||i()<.3)){let P=.6+i()*1.8;a.rock.push([g,b-.1,m,i()*6.28,P]),h.rock.push(new ot().setScalar(.75+i()*.4)),P>1.2&&d.push({type:"circle",x:g,z:m,r:P*.9,top:b+P*.8})}else D<.8&&(R>.15||A>.2)&&(a.mushroom.push([g,b,m,i()*6.28,.8+i()*1.4]),h.mushroom.push(new ot().set(i()<.5?"#ffffff":"#c9b6ff")))}}let u={cx:t,cz:e,lod:n,meshes:[],colliders:d},f=new Se,p=(x,g,m)=>{let M=a[x];if(!M.length)return;let b=this.mesh(this.geos[g],M.length);for(let y=0;y<M.length;y++){let[w,E,R,_,A]=M[y];f.position.set(w,E,R),f.rotation.set(0,_,0),f.scale.setScalar(A),f.updateMatrix(),b.setMatrixAt(y,f.matrix),b.setColorAt(y,h[x][y])}b.instanceMatrix.needsUpdate=!0,b.instanceColor&&(b.instanceColor.needsUpdate=!0),b.castShadow=m,b.receiveShadow=m,b.computeBoundingSphere(),this.group.add(b),u.meshes.push(b)};return p("pine",c?"pine":"pineLow",c),p("oak",c?"oak":"oakLow",c),c&&(p("bush","bush",!1),p("rock","rock",!0),p("mushroom","mushroom",!1),Yn.addAll(d)),u}dispose(t){for(let e of t.meshes)this.group.remove(e),e.dispose();Yn.removeAll(t.colliders)}update(t,e=5,n=!1){let i=performance.now();if(e<1e3&&this._t&&i-this._t<120)return;this._t=i;let r=Math.floor(t.x/Tn),o=Math.floor(t.z/Tn),a=Math.ceil(this.far/Tn)+1,c=[];for(let h=-a;h<=a;h++)for(let d=-a;d<=a;d++){let u=r+h,f=o+d,p=(u+.5)*Tn,x=(f+.5)*Tn,g=Math.hypot(p-t.x,x-t.z);g>this.far||c.push({cx:u,cz:f,d:g,lod:g<this.near?0:1})}c.sort((h,d)=>h.d-d.d);let l=new Set;for(let h of c){let d=h.cx+","+h.cz;l.add(d);let u=this.cells.get(d);if(!u||u.lod!==h.lod){if(performance.now()-i>e||Math.hypot(h.cx*Tn,h.cz*Tn)>3300)continue;u&&this.dispose(u),this.cells.set(d,this.generate(h.cx,h.cz,h.lod))}}for(let[h,d]of this.cells)l.has(h)||Math.hypot((d.cx+.5)*Tn-t.x,(d.cz+.5)*Tn-t.z)>this.far+Tn*2&&(this.dispose(d),this.cells.delete(h))}prime(t){this.update(t,1e5)}};var zn=[{id:"flame",name:"\u05D1\u05D9\u05EA \u05D4\u05DC\u05D4\u05D1\u05D4",robe:"#b3262e",accent:"#f2b632",hat:"#8e1c24"},{id:"wave",name:"\u05D1\u05D9\u05EA \u05D4\u05D2\u05DC",robe:"#2a5fc1",accent:"#d7e4ff",hat:"#1f4796"},{id:"forest",name:"\u05D1\u05D9\u05EA \u05D4\u05D9\u05E2\u05E8",robe:"#1f8a56",accent:"#c9d0cf",hat:"#166b41"},{id:"spark",name:"\u05D1\u05D9\u05EA \u05D4\u05E0\u05D9\u05E6\u05D5\u05E5",robe:"#7a3fc1",accent:"#ffd35c",hat:"#5b2c96"}],Go=["#f5d2b3","#e8b78d","#c68a5e","#9a6340","#6d4429"],Lp=["#2a1d14","#5a3a22","#a8672f","#d8b25a","#c6c6c6","#8a2a1c","#1a1a2a"];function xc(s={}){let{robe:t="#2a5fc1",accent:e="#f2b632",hat:n=null,skin:i="#f0c9a4",hair:r="#4a3020",beard:o=!1,hatStyle:a="wizard",scale:c=1,longHair:l=!1}=s,h=new It,d=new Dt;d.cyl("flat",.23,.31,.62,{y:1.12,color:t},10),d.cyl("flat",.31,.52,.78,{y:.55,color:t},12),d.cyl("flat",.322,.322,.07,{y:.88,color:e},10),d.box("flat",.14,.7,.025,{y:.55,z:.36,color:e}),d.cyl("flat",.2,.24,.1,{y:1.46,color:e},10);let u=new Dt;if(u.sphere("flat",.17,{y:1.66,color:i},12,10),u.sphere("flat",.03,{x:.065,y:1.68,z:.15,color:"#1a1410"},5,4),u.sphere("flat",.03,{x:-.065,y:1.68,z:.15,color:"#1a1410"},5,4),u.sphere("flat",.035,{y:1.645,z:.17,color:i},5,4),u.sphere("flat",.186,{y:1.69,z:-.02,sy:.9,color:r},12,8),l&&u.box("flat",.3,.38,.1,{y:1.5,z:-.13,color:r}),o&&u.cone("flat",.15,.5,{y:1.42,z:.1,rx:Math.PI,color:"#e8e8ee"},8),a==="wizard"){let D=n||t;u.cyl("flat",.33,.33,.035,{y:1.78,color:D},14),u.cone("flat",.2,.62,{y:2.1,rz:.12,x:-.03,color:D},10),u.cyl("flat",.205,.215,.05,{y:1.83,color:e},12)}else a==="cap"&&u.cyl("flat",.2,.2,.08,{y:1.8,color:n||t},12);let f=D=>{let P=new Dt;return P.cyl("flat",.065,.08,.5,{y:-.25,color:t},8),P.sphere("flat",.065,{y:-.54,color:i},8,6),P},p=()=>{let D=new Dt;return D.cyl("flat",.075,.07,.6,{y:-.3,color:"#2c2630"},7),D.box("flat",.12,.08,.24,{y:-.62,z:.05,color:"#3a2a22"}),D},x=D=>D.build({cast:!0,receive:!1}),g=new It;g.add(x(d));let m=new It;m.add(x(u)),m.position.y=0,g.add(m);let M=(D,P,B)=>{let W=new It;return W.position.set(P,B,0),W.add(x(D)),W},b=M(f(-1),-.32,1.38),y=M(f(1),.32,1.38),w=M(p(),-.11,.78),E=M(p(),.11,.78),R=new It,_=new fe({color:"#3a2615",roughness:.6}),A=new Vt(new wn(.008,.016,.4,6),_);A.position.y=-.2,R.add(A);let C=new Vt(new un(.02,8,6),new Fe({color:"#ffffff",toneMapped:!1}));C.position.y=-.41,R.add(C),R.position.set(.01,-.54,.02),R.rotation.x=Math.PI/2-.2,y.add(R);let N=new Se;N.position.y=-.43,R.add(N),g.add(b,y,w,E),h.add(g),h.scale.setScalar(c);let U={root:h,body:g,head:m,armL:b,armR:y,legL:w,legR:E,wand:R,tip:N,tipGlow:C,phase:Math.random()*10,castT:0,mode:"walk",speed:0,lean:0,wandLit:0};return U.tipGlow.material.color.set("#9ad7ff"),U}var iS=new L;function Wo(s,t,e,n={}){let{onGround:i=!0,broom:r=!1,cast:o=0,talk:a=!1,sit:c=!1}=n;s.phase+=t*(6+e*.9);let l=Math.min(e/5,1.2),h=Math.sin(s.phase),d=Math.cos(s.phase);if(r)s.legL.rotation.x=pe(s.legL.rotation.x,-1.15,.2),s.legR.rotation.x=pe(s.legR.rotation.x,-1.25,.2),s.armL.rotation.x=pe(s.armL.rotation.x,-1,.2),s.armR.rotation.x=pe(s.armR.rotation.x,o>0?-1.5:-1,.2),s.body.position.y=pe(s.body.position.y,-.12,.2),s.body.rotation.x=pe(s.body.rotation.x,.25+Math.min(e/120,.3),.1);else{let u=i?l*.9:.2;s.legL.rotation.x=pe(s.legL.rotation.x,h*u,.35),s.legR.rotation.x=pe(s.legR.rotation.x,-h*u,.35),s.armL.rotation.x=pe(s.armL.rotation.x,-h*u*.8+(i?0:-.5),.3);let f=Math.sin(s.phase*.35)*.04,p=o>0?-1.45:a?-.7+Math.sin(s.phase*.8)*.2:h*u*.8+f-.15;s.armR.rotation.x=pe(s.armR.rotation.x,p,o>0?.5:.25),s.body.position.y=pe(s.body.position.y,Math.abs(d)*.04*l,.3),s.body.rotation.x=pe(s.body.rotation.x,i?.05*l:.15,.2)}s.head.rotation.y*=.9}function Lu(s,t){return s.tip.getWorldPosition(t),t}var Ts=[{id:"student",name:"\u05DE\u05D8\u05D0\u05D8\u05D0 \u05D4\u05EA\u05DC\u05DE\u05D9\u05D3",speed:24,accel:1.6,color:"#8a5a2b",bristle:"#c9a35a",trail:"#ffe9a8",need:0,desc:"\u05DE\u05D8\u05D0\u05D8\u05D0 \u05D9\u05E9\u05DF \u05D0\u05DA \u05D0\u05DE\u05D9\u05DF. \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05E6\u05E2\u05D3\u05D9\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05DD \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8."},{id:"oak",name:"\u05D0\u05DC\u05D5\u05DF \u05D7\u05DB\u05DD",speed:36,accel:1.9,color:"#6a4426",bristle:"#7ea33b",trail:"#b6ff86",need:1,desc:"\u05E2\u05E9\u05D5\u05D9 \u05E2\u05E5 \u05D0\u05DC\u05D5\u05DF \u05E2\u05EA\u05D9\u05E7. \u05D9\u05E6\u05D9\u05D1, \u05E0\u05D5\u05D7 \u05D5\u05DE\u05D4\u05D9\u05E8 \u05D9\u05D5\u05EA\u05E8."},{id:"azure",name:"\u05D1\u05E8\u05E7 \u05DB\u05D7\u05D5\u05DC",speed:50,accel:2.4,color:"#1f2f66",bristle:"#7fb4ff",trail:"#6ab8ff",need:3,desc:"\u05D7\u05D3, \u05D0\u05D5\u05D5\u05D9\u05E8\u05D5\u05D3\u05D9\u05E0\u05DE\u05D9 \u05D5\u05DE\u05E9\u05D0\u05D9\u05E8 \u05E9\u05D5\u05D1\u05DC \u05DB\u05D7\u05D5\u05DC \u05D6\u05D5\u05D4\u05E8."},{id:"ember",name:"\u05D7\u05E5 \u05D4\u05D0\u05E9",speed:66,accel:2.8,color:"#4a1a10",bristle:"#ff7a2c",trail:"#ff8a3a",need:4,desc:"\u05DE\u05D8\u05D0\u05D8\u05D0 \u05DC\u05D4\u05D1\u05D4! \u05D6\u05E0\u05D1 \u05D4\u05D1\u05D5\u05E2\u05E8 \u05DE\u05D0\u05D9\u05E5 \u05DB\u05DC \u05EA\u05D4\u05DC\u05D9\u05DA."},{id:"moon",name:"\u05D9\u05E8\u05D7 \u05DB\u05E1\u05D5\u05E3",speed:82,accel:3.2,color:"#c8cfe0",bristle:"#e8f0ff",trail:"#e6ecff",need:6,desc:"\u05DE\u05D8\u05D0\u05D8\u05D0 \u05E2\u05D3\u05D9\u05DF \u05DB\u05DE\u05D5 \u05D0\u05D5\u05E8 \u05D9\u05E8\u05D7, \u05E9\u05E7\u05D8 \u05D5\u05DE\u05D4\u05D9\u05E8 \u05DE\u05D0\u05D5\u05D3."},{id:"gold",name:"\u05D1\u05E8\u05E7 \u05D4\u05D6\u05D4\u05D1",speed:104,accel:3.8,color:"#e8b830",bristle:"#fff1a0",trail:"#ffd84a",need:7,desc:"\u05D4\u05DE\u05D8\u05D0\u05D8\u05D0 \u05D4\u05D0\u05D2\u05D3\u05D9 \u05E9\u05DC \u05DE\u05D0\u05E1\u05D8\u05E8\u05D9 \u05D4\u05E8\u05E9\u05EA. \u05D0\u05D9\u05DF \u05DE\u05D4\u05D9\u05E8 \u05DE\u05DE\u05E0\u05D5."}];function Dp(s){let t=new It,e=new Dt;e.cyl("flat",.025,.03,1.5,{rx:Math.PI/2,z:.1,color:s.color},8),e.cone("flat",.15,.72,{rx:Math.PI/2,z:-1,color:s.bristle},10),e.cyl("flat",.04,.04,.12,{rx:Math.PI/2,z:-.62,color:"#3a2a1a"},8),(s.id==="gold"||s.id==="moon")&&e.sphere("flat",.05,{z:.88,color:s.id==="gold"?"#fff1a0":"#ffffff"},8,6),t.add(e.build({cast:!0,receive:!1}));let n=new Vt(new un(.08,8,6),new Fe({color:s.trail,toneMapped:!1,transparent:!0,opacity:.9}));return n.position.z=-1.38,t.add(n),t.userData.glow=n,t}var V1=["#efe3c6","#e9d2b0","#d9e6d0","#e8cfd0","#cfd8e8","#f2e8a8","#f4ecd8"],G1=["#a83a2e","#2f6f8a","#6a4a8a","#3a6b3a","#8a5a2a","#b2552a"];function Xo(s,t,e,n,i,r={}){let o=Tt(t,e),a=s.at(t,o-.3,e,n),c=r.w||5.5+i()*3,l=r.d||5+i()*2.5,h=r.two??i()<.35,d=h?6.2:3.2,u=r.wall||Ce(V1),f=r.roof||Ce(G1);a.box("stone",c+.5,.9,l+.5,{y:.45,color:"#8c877e"}),a.box("plaster",c,d,l,{y:d/2+.6,color:u});for(let m of[-1,1])for(let M of[-1,1])a.box("wood",.28,d,.28,{x:m*c/2,z:M*l/2,y:d/2+.6,color:"#5b3f26"});for(let m of[-1,1])a.box("wood",c+.2,.2,.2,{y:d+.55,z:m*(l/2+.02),color:"#5b3f26"}),a.box("wood",c+.2,.18,.18,{y:3.4+.6,z:m*(l/2+.02),color:"#5b3f26"});h&&a.box("plaster",c+.7,.3,l+.7,{y:3.9,color:u}),a.gable("roof",l,2.6+i()*.8,c,{y:d+.6,ry:Math.PI/2,color:f},.55);let p=(i()-.5)*c*.5;a.box("stone",.8,2.6,.8,{x:p,y:d+2,z:-l*.15,color:"#9b9187"}),a.box("stone",1,.2,1,{x:p,y:d+3.35,z:-l*.15,color:"#6f675e"});let x=(i()-.5)*(c-3);a.box("wood",1.2,2.2,.2,{x,y:1+1.1,z:l/2+.05,color:"#6b4426"}),a.box("wood",1.5,.2,.3,{x,y:3.3,z:l/2+.08,color:"#4a3020"}),a.box("stone",1.8,.2,.9,{x,y:.95,z:l/2+.5,color:"#9c968c"}),a.sphere("glow",.12,{x:x+1,y:2.7,z:l/2+.25,color:"#ffcf70"},6,4);let g=Math.max(1,Math.floor(c/2.8));for(let m=0;m<g;m++){let M=-c/2+(m+.5)*(c/g);if(!(Math.abs(M-x)<1.5))for(let b of h?[0,1]:[0]){let y=2.4+b*3.1;for(let w of[-1,1])w<0&&b===1&&i()<.3||(a.box("window",.9,1.15,.12,{x:M,y,z:w*(l/2+.03)}),a.box("wood",1.1,.12,.2,{x:M,y:y-.65,z:w*(l/2+.08),color:"#5b3f26"}),a.box("wood",.08,1.2,.16,{x:M,y,z:w*(l/2+.06),color:"#4a3020"}))}}for(let m of[-1,1])a.box("window",.12,1.1,.9,{x:m*(c/2+.03),y:2.4,z:0});return s.collider({type:"box",x:t,z:e,hw:c/2+.3,hd:l/2+.3,rot:n,top:o+d+3.5}),{w:c,d:l,hgt:d}}function yc(s,t,e,n=3.6){let i=Tt(t,e);return s.cyl("metal",.07,.1,n,{x:t,y:i+n/2,z:e,color:"#2b2a33"},6),s.sphere("glow",.22,{x:t,y:i+n+.1,z:e,color:"#ffd98a"},8,6),s.cone("metal",.32,.25,{x:t,y:i+n+.42,z:e,color:"#2b2a33"},6),{x:t,y:i+n+.1,z:e}}function W1(s,t,e){let n=Tt(t,e),i=s.at(t,n,e,0);i.cyl("stone",1.3,1.4,1.2,{y:.6,color:"#a39d92"},14),i.cyl("wood",1,1,.1,{y:1.1,color:"#2a4a60"},14);for(let r of[-1,1])i.box("wood",.15,2.5,.15,{x:r*1.1,y:2.2,color:"#5b3f26"});i.gable("roof",3,.9,1.6,{y:3.4,color:"#a83a2e"},.3),s.collider({type:"circle",x:t,z:e,r:1.5,top:n+1.3})}function X1(s,t,e,n,i){let r=Tt(t,e),o=s.at(t,r,e,n);o.box("wood",3.4,.9,1.5,{y:.45,color:"#7a5330"});for(let a of[-1,1])for(let c of[-1,1])o.box("wood",.12,2.8,.12,{x:a*1.6,z:c*.7,y:1.4,color:"#5b3f26"});o.box("cloth",3.8,.1,2,{y:2.8,rx:.15,color:i});for(let a=0;a<5;a++)o.sphere("flat",.18,{x:-1.2+a*.6,y:1.05,z:.1,color:Ce(["#d9402b","#f0a82a","#6ac24a","#b04bd0"])},6,4);s.collider({type:"box",x:t,z:e,hw:1.9,hd:.9,rot:n,top:r+3})}function As(s,t,e,n,i,r,o,a={}){let{stone:c="#bdb8ae",win:l=!0,flag:h=null,base:d=0}=a;if(s.cyl("stone",n,n*1.12,i+d,{x:t,z:e,y:i/2,color:c},20),s.cyl("stone",n*1.18,n*1.05,2.2,{x:t,z:e,y:i+1.1,color:"#a8a398"},20),s.cone("roof",n*1.45,r,{x:t,z:e,y:i+2.2+r/2,color:o},20),s.sphere("metal",n*.1+.15,{x:t,y:i+2.2+r+.1,z:e,color:"#f0c850"},8,6),l){let f=Math.floor(i/9);for(let p=0;p<f;p++){let x=7+p*8+p%2*1.5;for(let g=0;g<4;g++){let m=g/4*Math.PI*2+p*.6;s.box("window",1.1,2.4,.5,{x:t+Math.sin(m)*n*1.01,z:e+Math.cos(m)*n*1.01,y:x,ry:m}),s.cone("stone",.75,.9,{x:t+Math.sin(m)*n*1,z:e+Math.cos(m)*n*1,y:x+1.5,ry:m,color:"#a8a398"},4)}}}let u=s.toWorld(t,0,e);return s.builder.colliders.push({type:"circle",x:u.x,z:u.z,r:n*1.15,top:s.y+i+4}),{topY:i+2.2+r,x:t,z:e}}function Np(s){let t=new Dt,e=s.y,n=t.at(s.x,e,s.z,0),i="#b9b4aa",r="#8f8a82",o=78,a=70,c=15,l=4.5,h=[];n.box("stone",2*o+20,.6,2*a+20,{y:-.2,color:"#9a968c"});let d=(b,y,w,E)=>{n.box("stone",w,c,E,{x:b,y:c/2,z:y,color:i}),n.box("stone",w+.6,1.2,E+.6,{x:b,y:c+.6,z:y,color:r}),t.colliders.push({type:"box",x:s.x+b,z:s.z+y,hw:w/2,hd:E/2,rot:0,top:e+c+1.2});let R=w>E,_=Math.floor((R?w:E)/3.2);for(let A=0;A<_;A++){let C=-(R?w:E)/2+(A+.5)*((R?w:E)/_);for(let N of[-1,1])R?n.box("stone",1.6,1.4,.9,{x:b+C,y:c+1.9,z:y+N*(E/2-.3),color:i}):n.box("stone",.9,1.4,1.6,{x:b+N*(w/2-.3),y:c+1.9,z:y+C,color:i})}},u=8;d(0,-a,2*o,l),d(-o,0,l,2*a),d(o,0,l,2*a),d(-(o+u)/2,a,o-u,l),d((o+u)/2,a,o-u,l),n.box("stone",2*u,7,l+1,{y:c-3.5+4,z:a,color:r}),t.colliders.push({type:"box",x:s.x,z:s.z+a,hw:u,hd:l/2+.5,rot:0,top:e+c+1,y0:e+9});for(let b of[-1,1])n.box("wood",.5,9,3.2,{x:b*(u+.3),y:4.5,z:a+3.2,ry:.5*b,color:"#4a3220"});[[-o,-a],[o,-a],[-o,a],[o,a]].forEach(([b,y],w)=>{let E=As(n,b,y,8,34+w%2*6,17,w%2?"#2f5a9a":"#8a2f3a");h.push(n.toWorld(b,E.topY+.5,y))});for(let b of[-1,1]){let y=As(n,b*(u+5),a,6,28,14,"#2f5a9a");h.push(n.toWorld(b*(u+5),y.topY+.5,a))}for(let[b,y]of[[0,-a],[-o,-a/2],[o,-a/2],[-o,a/2],[o,a/2],[-o/2,-a],[o/2,-a]])As(n,b,y,5,26,12,"#6a3f8a",{win:!1});let p=22;n.box("stone",56,17,22,{y:8.5,z:p,color:"#c6c1b6"}),n.gable("roof",22,12,56,{y:17,z:p,ry:Math.PI/2,color:"#37497a"},1.5);for(let b=0;b<7;b++){for(let y of[-1,1])n.box("window",2.2,8,.4,{x:-21+b*7,y:9,z:p+y*11.05}),n.cone("stone",1.6,2.2,{x:-21+b*7,y:14,z:p+y*11.05,rz:0,color:"#a8a398"},4);n.box("stone",1.4,15,2,{x:-24.5+b*7,y:7.5,z:p+11.4,color:"#a8a398"})}t.colliders.push({type:"box",x:s.x,z:s.z+p,hw:28.5,hd:11.5,rot:0,top:e+30});let x=0,g=-22,m=As(n,x,g,12,62,28,"#8a2f3a");h.push(n.toWorld(x,m.topY+1,g));for(let[b,y]of[[-16,-8],[16,-8],[-14,-36],[14,-36]])m=As(n,b,y,4.6,48+Math.abs(b),18,"#2f5a9a"),h.push(n.toWorld(b,m.topY+.5,y));m=As(n,52,-42,5.5,74,22,"#6a3f8a"),h.push(n.toWorld(52,m.topY+.5,-42)),m=As(n,-52,-45,6,66,24,"#1f7a64"),h.push(n.toWorld(-52,m.topY+.5,-45));for(let[b,y,w,E,R]of[[-16,-8,0,-22,36],[0,-22,16,-8,42],[16,-8,52,-42,30]]){let _=Math.hypot(w-b,E-y),A=Math.atan2(w-b,E-y);n.box("wood",3.2,3.4,_,{x:(b+w)/2,y:R,z:(y+E)/2,ry:A,color:"#6b4a2c"}),n.gable("roof",4.4,1.8,_,{x:(b+w)/2,y:R+1.7,z:(y+E)/2,ry:A,color:"#37497a"},.2)}Xo(t,s.x+38,s.z+52,.2,Le(3),{w:8,d:6,wall:"#e0d7be",roof:"#a83a2e",two:!1}),Xo(t,s.x-40,s.z+50,-.1,Le(4),{w:8,d:6,wall:"#d7e2d0",roof:"#2f6f8a",two:!1}),n.cyl("stone",5,5.4,1.2,{z:48,y:.7,color:"#a8a398"},20),n.cyl("glow",4.2,4.2,.1,{z:48,y:1.2,color:"#4de1ff"},20),n.cyl("stone",.6,.9,3.4,{z:48,y:2.2,color:"#a8a398"},10),n.sphere("glow",.5,{z:48,y:4.1,color:"#9ff3ff"},8,6),t.colliders.push({type:"circle",x:s.x,z:s.z+48,r:5.6,top:e+1.4}),n.box("stone",12,.8,80,{y:0,z:a+42,color:"#a9a49a"});let M=t.build();return M.userData.flags=h,M.userData.colliders=t.colliders,M}function Tr(s,t,e,n={}){let i=Le(e),r=new Dt,o=[],a=[],c=n.radius||s.r*1.1,l=0;for(;a.length<t&&l++<t*40;){let d=i()*Math.PI*2,u=(n.minR||14)+Math.sqrt(i())*c,f=s.x+Math.cos(d)*u,p=s.z+Math.sin(d)*u;if(a.some(m=>Math.hypot(m.x-f,m.z-p)<13)||Tt(f,p)<1.8||n.avoid&&n.avoid(f,p))continue;let g=-Math.atan2(s.z-p,s.x-f)+Math.PI/2+(i()-.5)*.3;Xo(r,f,p,g,i,n.house||{}),a.push({x:f,z:p}),i()<.6&&o.push(yc(r,f+Math.cos(g)*4.5,p-Math.sin(g)*4.5))}W1(r,s.x+8,s.z+6);for(let d=0;d<3;d++){let u=d/3*Math.PI*2+.7;X1(r,s.x+Math.cos(u)*14,s.z+Math.sin(u)*14+8,-u+Math.PI/2,Ce(["#c23a3a","#2f6fb0","#e0a82a","#7a3fc1"]))}let h=r.build();return h.userData.colliders=r.colliders,h.userData.lamps=o,h}function Du(s,t){let e=new Dt,n=Tt(s,t),i=e.at(s,n,t,0);i.cyl("stone",3.2,4.4,4,{y:2,color:"#b9b4aa"},12),i.cyl("plaster",2.5,3.2,9,{y:8.5,color:"#f1e6cb"},12),i.cone("roof",3.6,4.2,{y:15,color:"#a83a2e"},12),i.box("window",1,1.6,.3,{y:8,z:2.6}),i.box("wood",1.4,2.4,.2,{y:1.6,z:4.05,color:"#6b4426"}),e.colliders.push({type:"circle",x:s,z:t,r:4.6,top:n+18});let r=e.build(),o=new Dt;for(let l=0;l<4;l++){let h=l*Math.PI/2;o.box("wood",.3,9.5,.2,{x:Math.sin(h)*4.8,y:Math.cos(h)*4.8,color:"#5b3f26",rz:-h}),o.box("cloth",1.8,7,.06,{x:Math.sin(h)*5.2+Math.cos(h)*1.1,y:Math.cos(h)*5.2-Math.sin(h)*1.1,z:.1,rz:-h,color:"#f4efe0"})}let a=o.build();a.position.set(0,12,4.2);let c=new It;return c.position.set(s,n,t),c.add(a),r.userData.blades=a,r.userData.holder=c,r.userData.colliders=e.colliders,r}function Up(s){let t=new Dt,e=Le(77),n=s.y,i=t.at(s.x,n,s.z,0),r=12;for(let o=0;o<r;o++){let a=o/r*Math.PI*2,c=4+e()*3;i.box("stone",1.8,c,1.2,{x:Math.cos(a)*14,z:Math.sin(a)*14,y:c/2,ry:-a+Math.PI/2,rz:(e()-.5)*.08,color:"#8f8b84"}),t.colliders.push({type:"circle",x:s.x+Math.cos(a)*14,z:s.z+Math.sin(a)*14,r:1.3,top:n+c}),o%3===0&&i.box("stone",1.8,1,5,{x:Math.cos(a+.26)*14,z:Math.sin(a+.26)*14,y:6,ry:-a-.26+Math.PI/2,color:"#8f8b84"})}return i.cyl("stone",3.2,3.5,.8,{y:.4,color:"#a8a398"},12),i.cyl("glow",2.6,2.6,.05,{y:.85,color:"#9a8cff"},20),t.build()}function zp(s){let t=new Dt,e=Le(99),n=s.y,i=t.at(s.x,n,s.z,0);for(let r=0;r<14;r++){let o=e()*Math.PI*2,a=6+e()*26,c=2+e()*9,l=e()<.5,h=Math.cos(o)*a,d=Math.sin(o)*a;i.cyl("stone",.9,1,c,{x:h,z:d,y:c/2,color:"#a6a196"},10),l||i.box("stone",2.4,.8,2.4,{x:h,z:d,y:c+.4,color:"#8f8a82"}),t.colliders.push({type:"circle",x:s.x+h,z:s.z+d,r:1.1,top:n+c})}return i.box("stone",14,1,14,{y:.4,color:"#7c786f"}),i.box("stone",3,6,.8,{x:5,z:-8,y:3,color:"#8f8a82"}),t.build()}function Fp(s){let t=new Dt,e=s.y,n=t.at(s.x,e,s.z,0);n.cyl("flat",62,62,.15,{y:.07,color:"#59b04a"},40),n.cyl("flat",30,30,.17,{y:.09,color:"#68c157"},40);let i=[];for(let o of[-1,1])for(let a of[-1,0,1]){let c=o*52,l=a*12,h=15+(a===0?4:0);n.cyl("metal",.18,.22,h,{x:c,z:l,y:h/2,color:"#e8c24a"},8),i.push({x:s.x+c,y:e+h+3,z:s.z+l,s:o}),t.geometry("metal",new ni(2.6,.2,8,28),{x:s.x+c,y:e+h+3,z:s.z+l,ry:Math.PI/2,color:"#ffd84a"})}for(let o of[-1,1]){for(let a=0;a<5;a++)n.box("wood",70,1,3,{x:0,y:1.2+a*1.2,z:o*(58+a*3),color:a%2?"#7a5330":"#8a6038"});for(let a of[-35,0,35])n.cyl("wood",.3,.3,14,{x:a,z:o*70,y:7,color:"#5b3f26"},6),n.cone("cloth",3,6,{x:a,y:17,z:o*70,color:o<0?"#b3262e":"#2a5fc1"},4)}let r=t.build();return r.userData.hoops=i,r.userData.colliders=t.colliders,r}var We=[{id:"z1",n:1,name:"\u05DE\u05D2\u05D3\u05DC \u05D4\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA",topic:"\u05DE\u05D1\u05E0\u05D4 \u05DB\u05EA\u05D5\u05D1\u05EA IP \u05D5\u05DC\u05DE\u05D4 \u05E6\u05E8\u05D9\u05DA \u05D0\u05D5\u05EA\u05D4",icon:"\u{1F5FC}",color:"#4de1ff",game:"\u05E8\u05D5\u05E0\u05D5\u05EA \u05D1\u05D9\u05E0\u05D0\u05E8\u05D9\u05D5\u05EA",prof:"\u05E4\u05E8\u05D5\u05E4\u05F3 \u05D1\u05D9\u05E0\u05D0\u05E8\u05D9"},{id:"z2",n:2,name:"\u05D0\u05D9 \u05D4\u05E8\u05E9\u05EA\u05D5\u05EA",topic:"\u05D7\u05DC\u05E7 \u05D4\u05E8\u05E9\u05EA \u05D5\u05D7\u05DC\u05E7 \u05D4\u05DE\u05D0\u05E8\u05D7",icon:"\u{1F3DD}\uFE0F",color:"#6c8bff",game:"\u05D3\u05D5\u05D0\u05E8 \u05D9\u05E0\u05E9\u05D5\u05E4\u05D9\u05DD",prof:"\u05DE\u05D0\u05E1\u05D8\u05E8\u05D9\u05EA \u05D4\u05E8\u05E9\u05EA\u05D5\u05EA"},{id:"z3",n:3,name:"\u05D9\u05E2\u05E8 \u05D4\u05E9\u05E2\u05E8\u05D9\u05DD",topic:"\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05D5\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9\u05D5\u05EA",icon:"\u{1F332}",color:"#3ddc97",game:"\u05E9\u05D5\u05DE\u05E8\u05D9 \u05D4\u05E9\u05E2\u05E8",prof:"\u05E9\u05D5\u05DE\u05E8 \u05D4\u05D9\u05E2\u05E8"},{id:"z4",n:4,name:"\u05D1\u05D9\u05E6\u05EA \u05D4\u05E0\u05D9\u05E6\u05D5\u05E6\u05D5\u05EA",topic:"\u05DB\u05EA\u05D5\u05D1\u05EA \u05E1\u05D8\u05D8\u05D9\u05EA \u05D5\u05D3\u05D9\u05E0\u05DE\u05D9\u05EA",icon:"\u{1FAB7}",color:"#c76bff",game:"\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF \u05D4\u05E7\u05E1\u05DD",prof:"\u05D4\u05DE\u05DB\u05E9\u05E4\u05D4 \u05DE\u05D4\u05D1\u05D9\u05E6\u05D4"},{id:"z5",n:5,name:"\u05DE\u05E2\u05E8\u05EA \u05D4\u05D3\u05E8\u05E7\u05D5\u05DF",topic:"\u05E9\u05E8\u05EA DHCP \u05D5\u05D0\u05D9\u05DA \u05D4\u05D5\u05D0 \u05E2\u05D5\u05D1\u05D3",icon:"\u{1F409}",color:"#ff8a3a",game:"\u05E9\u05D5\u05DE\u05E8 \u05DE\u05D0\u05D2\u05E8 \u05D4\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA",prof:"\u05E9\u05D5\u05DE\u05E8 \u05D4\u05DE\u05E2\u05E8\u05D4"},{id:"z6",n:6,name:"\u05E1\u05D3\u05E0\u05EA \u05D4\u05E7\u05E1\u05DE\u05D9\u05DD",topic:"\u05D4\u05D2\u05D3\u05E8\u05EA IP \u05E1\u05D8\u05D8\u05D9 \u05D5-DHCP \u05D1\u05DE\u05D7\u05E9\u05D1",icon:"\u2699\uFE0F",color:"#ffd35c",game:"\u05EA\u05D9\u05E7\u05D5\u05DF \u05D4\u05E7\u05E1\u05DD \u05D4\u05E8\u05E9\u05EA\u05D9",prof:"\u05D4\u05D0\u05DE\u05DF \u05D4\u05DE\u05DE\u05E6\u05D9\u05D0"},{id:"z7",n:7,name:"\u05DE\u05D2\u05D3\u05DC \u05D4\u05E8\u05D0\u05D5\u05D8\u05E8",topic:"\u05D4\u05D2\u05D3\u05E8\u05EA DHCP \u05D1\u05E8\u05D0\u05D5\u05D8\u05E8 \u05E1\u05D9\u05E1\u05E7\u05D5",icon:"\u{1F4E1}",color:"#ff5a7a",game:"\u05E1\u05E4\u05E8 \u05D4\u05E4\u05E7\u05D5\u05D3\u05D5\u05EA",prof:"\u05DE\u05D0\u05E1\u05D8\u05E8 \u05D4\u05E8\u05D0\u05D5\u05D8\u05E8\u05D9\u05DD"}],Nu=s=>We.find(t=>t.id===s);var qo;function Bp(){if(qo)return qo;let s=document.createElement("canvas");s.width=s.height=128;let t=s.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.7)"),e.addColorStop(.5,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),qo=new vn(s),qo.colorSpace=Re,qo}function le(s,t=1,e=1){let n=new xs({map:Bp(),color:s,blending:gi,depthWrite:!1,transparent:!0,opacity:e,toneMapped:!1}),i=new or(n);return i.scale.setScalar(t),i}var vc=class{constructor(t,e=2500,n=!0){this.cap=e,this.i=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e).fill(1),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.pos.fill(0);for(let o=0;o<e;o++)this.pos[o*3+1]=-9999;let i=new ye;i.setAttribute("position",new ne(this.pos,3).setUsage(vr)),i.setAttribute("color",new ne(this.col,3).setUsage(vr)),i.setAttribute("size",new ne(this.size,1).setUsage(vr)),i.setAttribute("alpha",new ne(this.alpha,1).setUsage(vr)),i.boundingSphere=new Ln(new L,1e6),this.uniforms={uScale:{value:600},uMap:{value:Bp()}};let r=new Oe({transparent:!0,depthWrite:!1,blending:n?gi:Ji,uniforms:this.uniforms,vertexShader:`
        attribute float size; attribute float alpha; attribute vec3 color;
        varying float vA; varying vec3 vC; uniform float uScale;
        void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix*vec4(position,1.0);
          gl_PointSize = size * uScale / max(0.1,-mv.z); gl_Position = projectionMatrix*mv; }`,fragmentShader:`
        varying float vA; varying vec3 vC; uniform sampler2D uMap;
        void main(){ vec4 t = texture2D(uMap, gl_PointCoord); gl_FragColor = vec4(vC, t.a*vA);
          #include <colorspace_fragment>
        }`});this.points=new so(i,r),this.points.frustumCulled=!1,t.add(this.points),this.geo=i}emit(t,e,n,i,r,o,a,c,l,h={}){let d=this.i;this.i=(this.i+1)%this.cap,this.pos[d*3]=t,this.pos[d*3+1]=e,this.pos[d*3+2]=n,this.vel[d*3]=i,this.vel[d*3+1]=r,this.vel[d*3+2]=o,this.life[d]=l,this.maxLife[d]=l,this.s0[d]=c,this.s1[d]=h.end??c*.2,this.grav[d]=h.gravity??0,this.drag[d]=h.drag??0;let u=a.isColor?a:q1.set(a);this.col[d*3]=u.r,this.col[d*3+1]=u.g,this.col[d*3+2]=u.b,this.alpha[d]=1}burst(t,e,n,i,r,o,a,c,l={}){for(let h=0;h<r;h++){let d=Math.random()*6.283,u=Math.acos(2*Math.random()-1),f=o*(.3+Math.random()*.7);this.emit(t,e,n,Math.sin(u)*Math.cos(d)*f,Math.cos(u)*f,Math.sin(u)*Math.sin(d)*f,i,a*(.6+Math.random()*.8),c*(.6+Math.random()*.6),l)}}update(t){let{pos:e,vel:n,life:i,maxLife:r,s0:o,s1:a,size:c,alpha:l,grav:h,drag:d}=this;for(let u=0;u<this.cap;u++){if(i[u]<=0){l[u]!==0&&(l[u]=0,c[u]=0);continue}i[u]-=t;let f=1-i[u]/r[u],p=1-Math.min(1,d[u]*t);n[u*3]*=p,n[u*3+1]=n[u*3+1]*p-h[u]*t,n[u*3+2]*=p,e[u*3]+=n[u*3]*t,e[u*3+1]+=n[u*3+1]*t,e[u*3+2]+=n[u*3+2]*t,c[u]=o[u]+(a[u]-o[u])*f,l[u]=f<.1?f*10:1-(f-.1)/.9}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}setViewport(t){this.uniforms.uScale.value=t*.5*1.1}},q1=new ot;function $1(s="#4de1ff"){let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d");n.translate(512/2,512/2),n.strokeStyle=s,n.fillStyle=s,n.lineWidth=6,n.shadowColor=s,n.shadowBlur=14;for(let a of[236,214,150])n.beginPath(),n.arc(0,0,a,0,7),n.stroke();n.lineWidth=3;let i="\u16A0\u16A2\u16A6\u16A8\u16B1\u16B2\u16B7\u16B9\u16BA\u16BE\u16C1\u16C3\u16C7\u16C8\u16C9\u16CA\u16CF\u16D2\u16D6\u16D7\u16DA\u16DC\u16DE\u16DF";n.font="bold 34px serif",n.textAlign="center",n.textBaseline="middle";let r=24;for(let a=0;a<r;a++){let c=a/r*Math.PI*2;n.save(),n.rotate(c),n.translate(0,-182),n.fillText(i[a%i.length],0,0),n.restore()}n.beginPath();for(let a=0;a<10;a++){let c=a/10*Math.PI*2-Math.PI/2,l=a%2?62:130;n.lineTo(Math.cos(c)*l,Math.sin(c)*l)}n.closePath(),n.stroke();let o=new vn(e);return o.colorSpace=Re,o.anisotropy=8,o}function Uu(s,t=6){let e=new Fe({map:$1(s),transparent:!0,blending:gi,depthWrite:!1,side:we,toneMapped:!1}),n=new Vt(new Qe(t*2,t*2),e);return n.rotation.x=-Math.PI/2,n}function Op(s,t=320,e=3.2){let n=new Oe({transparent:!0,depthWrite:!1,blending:gi,side:we,fog:!1,uniforms:{uColor:{value:new ot(s)},uTime:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vP; void main(){ vUv = uv; vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`varying vec2 vUv; varying vec3 vP; uniform vec3 uColor; uniform float uTime;
      void main(){
        float h = vUv.y; float a = pow(1.0-h, 1.6);
        float stripe = 0.65 + 0.35*sin(vUv.x*40.0 + uTime*1.5 + h*30.0 - uTime*3.0);
        float edge = 0.8;
        gl_FragColor = vec4(uColor*1.4, a*0.55*stripe*edge);
        #include <colorspace_fragment>
      }`}),i=new Vt(new wn(e,e*1.6,t,24,1,!0),n);return i.position.y=t/2,i.frustumCulled=!1,i.renderOrder=8,i}function zu(s,{color:t="#fff",bg:e=null,font:n="bold 64px Heebo, Arial, sans-serif",w:i=512,h:r=128}={}){let o=document.createElement("canvas");o.width=i,o.height=r;let a=o.getContext("2d");e&&(a.fillStyle=e,a.beginPath(),a.roundRect(4,4,i-8,r-8,28),a.fill()),a.fillStyle=t,a.font=n,a.textAlign="center",a.textBaseline="middle",a.direction="rtl",a.shadowColor="rgba(0,0,0,0.8)",a.shadowBlur=8,a.fillText(s,i/2,r/2+4);let c=new vn(o);return c.colorSpace=Re,c.anisotropy=4,c}function $o(s,t={},e=6){let n=zu(s,t),i=new xs({map:n,transparent:!0,depthWrite:!1,toneMapped:!1}),r=new or(i);return r.scale.set(e,e*((t.h||128)/(t.w||512)),1),r}function Fu(s,t,e=3.4,n=2.2){let i=zu(s,{color:"#fff",bg:t,font:"bold 120px Heebo, Arial, sans-serif",w:512,h:340});return new Vt(new Qe(e,n),new Fe({map:i,transparent:!0,side:we,toneMapped:!1}))}function kp(s){let t=[],e=[],n=[],i={},r=s.fx,o=new It;s.scene.add(o),We.forEach(a=>{let c=Wt(a.id),l={z1:18,z2:22,z3:20,z4:20,z5:18,z6:30,z7:17}[a.id],h=c.x,d=c.z+l,u=Tt(h,d),f=Uu(a.color,6.5);f.position.set(h,u+.2,d),o.add(f);let p=Uu(a.color,3.2);p.position.set(h,u+.25,d),o.add(p);let x=Op(a.color,320,2.8);x.position.set(h,u,d),o.add(x);let g=le(a.color,5,.95);g.position.set(h,u+3.5,d),o.add(g);let m=$o(a.name,{color:"#fff",bg:"rgba(20,16,50,0.7)",font:"bold 68px Heebo, Arial, sans-serif"},11);m.position.set(h,u+8,d),o.add(m),i[a.id]={x:h,y:u,z:d,r:7,ring:f,inner:p,beam:x,orb:g,color:a.color},n.push(x),e.push((M,b)=>{if(f.rotation.z+=M*.25,p.rotation.z-=M*.5,x.material.uniforms.uTime.value=b,g.position.y=u+3.5+Math.sin(b*2+a.n)*.4,g.scale.setScalar(5+Math.sin(b*3+a.n)*.6),r&&Math.random()<M*14){let y=Math.random()*6.28,w=2+Math.random()*4;r.emit(h+Math.cos(y)*w,u+.3,d+Math.sin(y)*w,0,1.6+Math.random()*1.5,0,a.color,.7,2.2,{end:.1})}})});{let a=Wt("z1"),c=new Dt,l=c.at(a.x,a.y,a.z);l.cyl("stone",16,17,1.3,{y:.65,color:"#cfc9bc"},30),l.cyl("stone",13.5,14.5,1.1,{y:1.8,color:"#d9d3c6"},30),l.cyl("plaster",5.2,6.4,38,{y:21,color:"#ece4d0"},20);for(let f of[7,15,23,31])l.cyl("metal",5.9-f*.02,6.1-f*.02,.7,{y:f,color:"#e8c24a"},20);for(let f=0;f<4;f++)for(let p=0;p<3;p++){let x=p/3*6.283+f*.7;l.box("window",1.1,2.4,.5,{x:Math.sin(x)*5.6,z:Math.cos(x)*5.6,y:8+f*8,ry:x})}l.cyl("stone",8,6.6,2.6,{y:41.4,color:"#bdb6a6"},20),l.cyl("glow",4.4,4.4,5.5,{y:45.6,color:"#bff4ff"},20);for(let f=0;f<8;f++){let p=f/8*6.283;l.cyl("stone",.35,.35,5.6,{x:Math.sin(p)*4.6,z:Math.cos(p)*4.6,y:45.6,color:"#d6cfbd"},6)}l.cone("roof",7.4,13,{y:55,color:"#2a5fc1"},20),l.sphere("metal",.9,{y:62,color:"#ffd84a"},8,6);for(let f=0;f<4;f++){let p=f/4*6.283+.78;l.box("stone",2,12,2.6,{x:Math.sin(p)*6.6,z:Math.cos(p)*6.6,y:7,ry:p,rz:0,color:"#c4bdaf"})}l.collideCircle(0,0,7.4,90),t.push(c.build());let h=new It;h.position.set(a.x,a.y+28,a.z);let d=["192","168","1","10"],u=["rgba(32,110,170,0.9)","rgba(110,60,190,0.9)","rgba(20,130,90,0.9)","rgba(180,70,40,0.9)"];d.forEach((f,p)=>{let x=Fu(f,u[p]),g=p/4*6.283;x.position.set(Math.sin(g)*12,Math.sin(p*1.7)*2,Math.cos(g)*12),x.rotation.y=g,h.add(x);let m=le("#ffffff",1.4);m.position.set(Math.sin(g+.78)*12,Math.sin(p*1.7)*2-1.2,Math.cos(g+.78)*12),h.add(m)}),o.add(h),e.push((f,p)=>{h.rotation.y+=f*.25,h.position.y=a.y+28+Math.sin(p)*.6});for(let f of[-1,1]){let p=le("#ffb15a",3);p.position.set(a.x+f*6,a.y+3.4,a.z+14),o.add(p),e.push((x,g)=>p.scale.setScalar(3+Math.sin(g*11+f)*.4))}}{let a=Wt("z2"),c=new Dt,l=c.at(a.x,a.y,a.z);l.cyl("stone",21,22.5,1.5,{y:.75,color:"#d8dfe8"},32),l.cyl("stone",18.5,19.5,1.2,{y:2,color:"#e6ecf4"},32);let h=8;for(let u=0;u<h;u++){let f=u/h*6.283,p=u<h/2,x=p?"#4a78ff":"#3ddc97",g=Math.sin(f)*14.5,m=Math.cos(f)*14.5;l.cyl("stone",.95,1.1,11,{x:g,z:m,y:8,color:"#f0f2f7"},14),l.box("stone",2.8,.8,2.8,{x:g,z:m,y:13.8,color:x}),l.box("stone",2.4,.6,2.4,{x:g,z:m,y:2.9,color:"#cfd6e0"}),l.collideCircle(g,m,1.2,20);let M=Math.sin(f+Math.PI/h)*14.5,b=Math.cos(f+Math.PI/h)*14.5;l.box("stone",11,1.1,2,{x:M,z:b,y:14.6,ry:f+Math.PI/h+Math.PI/2,color:p?"#5a86ff":"#4fe6a6"})}l.sphere("plaster",16,{y:15,sy:.55,color:"#eef3ff"},32,14),l.cyl("metal",.5,.8,4,{y:24.4,color:"#ffd84a"},8),l.sphere("metal",1,{y:26.5,color:"#ffd84a"},8,6),l.cyl("stone",4.2,4.6,1.2,{y:2.6,color:"#c8d0dc"},20),l.cyl("glow",3.6,3.6,.1,{y:3.2,color:"#68d8ff"},20),l.cyl("stone",.5,.8,3.5,{y:4.8,color:"#c8d0dc"},10),l.sphere("glow",.55,{y:6.8,color:"#bff4ff"},8,6),l.collideCircle(0,0,4.8,8),t.push(c.build());let d=new Dt;for(let u=350;u<=570;u+=22)for(let f of[-4.4,4.4])yc(d,u,-200+f,3.4);t.push(d.build());for(let u=0;u<40;u++){let f=le("#9fe7ff",1.2,.8),p=Math.random()*6.283,x=8+Math.random()*40,g=a.x+Math.cos(p)*x,m=a.z+Math.sin(p)*x;f.position.set(g,a.y+2+Math.random()*8,m),o.add(f);let M=Math.random()*10;e.push((b,y)=>{f.position.y+=Math.sin(y*1.2+M)*b*.8,f.position.x=g+Math.sin(y*.4+M)*3,f.position.z=m+Math.cos(y*.35+M)*3})}}{let a=Wt("z3"),c=new Dt,l=c.at(a.x,a.y,a.z);l.cyl("leaf",3.6,5.6,26,{y:13,color:"#6a4a2e"},12);for(let g=0;g<5;g++){let m=g/5*6.283;l.cyl("leaf",1.2,2.4,9,{x:Math.sin(m)*4.8,z:Math.cos(m)*4.8,y:3.6,rz:Math.cos(m)*.8,rx:-Math.sin(m)*.8,color:"#5c3f27"},6)}let h=["#3ec9b0","#5ad6c6","#46b8e8","#6aa8ff","#3ec99a"];for(let g=0;g<9;g++){let m=g/9*6.283;l.ico("leaf",11+g%3*2,{x:Math.sin(m)*12,z:Math.cos(m)*12,y:34+g%2*5,color:h[g%5]},1)}l.ico("leaf",15,{y:42,color:"#6ee6d0"},1),l.cyl("wood",10,10,.7,{y:17,color:"#7a5330"},14),l.cyl("wood",10.4,10.4,.25,{y:18.2,color:"#5b3f26"},14),l.box("plaster",5.2,3.6,4.6,{x:5.5,y:19.1,z:0,color:"#e9d2b0"}),l.gable("roof",4.6,2.4,5.2,{x:5.5,y:20.9,ry:Math.PI/2,color:"#2f6f8a"},.5),l.box("window",1,1.2,.1,{x:8.1,y:19.4,z:0,ry:Math.PI/2}),l.collideCircle(0,0,5.8,60);let d=(g,m,M,b)=>{for(let y of[-1,1])l.box("stone",2.2,11,2.2,{x:g+y*5,y:5.5,z:22,color:"#a9a49a"}),l.collideCircle(g+y*5,22,1.5,14);l.box("stone",13.5,2.4,2.8,{x:g,y:11.6,z:22,color:m}),l.cone("stone",7.5,3.4,{x:g,y:14.5,z:22,color:m},4)};d(-15,"#4a78ff","\u05E4\u05E8\u05D8\u05D9"),d(15,"#ffb23a","\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9"),t.push(c.build());let u=Fu("\u05E4\u05E8\u05D8\u05D9","rgba(40,80,200,0.9)",5,3.2);u.position.set(a.x-15,a.y+7.5,a.z+23.5);let f=Fu("\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9","rgba(210,130,20,0.92)",5.6,3.2);f.position.set(a.x+15,a.y+7.5,a.z+23.5),o.add(u,f);for(let g=0;g<70;g++){let m=le(Ce(["#9ff3ff","#b6ff86","#c9b6ff"]),.9,.85),M=Math.random()*6.283,b=6+Math.random()*38,y=a.x+Math.cos(M)*b,w=a.z+Math.sin(M)*b,E=a.y+1+Math.random()*14;m.position.set(y,E,w),o.add(m);let R=Math.random()*10;e.push((_,A)=>{m.position.y=E+Math.sin(A*.8+R)*1.2,m.position.x=y+Math.sin(A*.5+R)*2.5,m.position.z=w+Math.cos(A*.45+R)*2.5})}let p=new Dt,x=Le(31);for(let g=0;g<6;g++){let m=g/6*6.283+.4,M=a.x+Math.cos(m)*36,b=a.z+Math.sin(m)*36;Math.abs(b-(a.z+20))<8&&Math.abs(M-a.x)<22||(Xo(p,M,b,-m+Math.PI/2,x,{wall:"#d9e6d0",roof:"#3a6b3a",two:!1,w:6,d:5}),yc(p,M+4,b+4,3.4))}t.push(p.build())}{let a=Wt("z4"),c=new Dt,l=c.at(a.x,a.y,a.z);for(let h of[-1,1])for(let d of[-1,1])l.cyl("wood",.35,.45,5,{x:h*5.5,z:d*4.5,y:2.5,color:"#4a3220"},6);l.box("wood",13,.6,11,{y:5.2,color:"#6b4a2c"}),l.box("plaster",9,3.8,7.5,{y:7.4,color:"#c9d2a6"}),l.gable("roof",7.5,3.2,9,{y:9.3,ry:Math.PI/2,color:"#5a7a3a"},.9),l.box("wood",1.4,2.4,.2,{x:1.5,y:7,z:3.85,color:"#4a3220"}),l.box("window",1.1,1.2,.1,{x:-2.5,y:7.6,z:3.8}),l.box("window",1.1,1.2,.1,{x:4,y:7.6,z:-3.8}),l.box("stone",1.4,.6,3,{x:1.5,y:2.7,z:7.4,rx:.55,color:"#7a5330"}),l.collideBox(0,0,6.6,5.6,14),l.box("stone",3.4,1.2,3.4,{x:-14,z:8,y:.6,color:"#7e7a70"}),l.box("stone",2.2,9,2.2,{x:-14,z:8,y:5.7,color:"#94907f"}),l.sphere("stone",1.6,{x:-14,z:8,y:10.8,color:"#a7a392"},10,8),l.collideCircle(-14,8,2.4,14);for(let h=0;h<26;h++)l.box("wood",2.6,.18,1.3,{x:9+h*1.5,y:.3+.05*Math.sin(h),z:20-h*.5+0*h,color:h%2?"#7a5330":"#6b4a2c"});t.push(c.build());for(let h=0;h<46;h++){let d=Ce(["#c76bff","#6af0ff","#9aff8a","#ff9ff0"]),u=le(d,1.5+Math.random(),.95),f=Math.random()*6.283,p=5+Math.random()*90,x=a.x+Math.cos(f)*p,g=a.z+Math.sin(f)*p,m=Math.max(Tt(x,g),.4)+1.2+Math.random()*3;u.position.set(x,m,g),o.add(u);let M=Math.random()*10,b=.3+Math.random()*.6;e.push((y,w)=>{u.position.x=x+Math.sin(w*b+M)*6,u.position.z=g+Math.cos(w*b*.8+M)*6,u.position.y=m+Math.sin(w*1.3+M)*.9})}}{let a=Wt("z5"),c=new Dt,l=c.at(a.x,a.y,a.z),h=["#4c4a50","#5a5860","#403e44","#66636b"];for(let u of[-1,1])l.ico("stone",10,{x:u*13,y:8,z:-4,sy:1.5,color:h[0]},1),l.ico("stone",8,{x:u*16,y:4,z:4,sy:1.1,color:h[1]},1),l.ico("stone",7,{x:u*10,y:17,z:-6,color:h[2]},1),l.collideCircle(u*13,-4,10,40),l.collideCircle(u*16,4,7.5,20);l.ico("stone",12,{y:22,z:-8,sy:.9,sx:1.8,color:h[3]},1),l.ico("stone",14,{y:12,z:-18,sx:2.2,sy:1.4,color:h[0]},1),l.ico("stone",12,{y:26,z:-16,sx:1.8,color:h[2]},1),l.box("stone",22,28,6,{y:12,z:-14,color:"#2b2a30"}),l.collideBox(0,-14,11,3.2,30),l.box("glow",12,14,.3,{y:7,z:-6.2,color:"#ff7a24"}),l.sphere("metal",3.4,{y:27,z:.5,sx:1.1,sz:1.6,color:"#d8a21c"},12,8),l.cone("metal",1.4,5,{y:27.5,z:5.5,rx:Math.PI/2,color:"#d8a21c"},8),l.cone("metal",.5,4,{x:1.7,y:31,z:-1,rz:-.5,color:"#f0d060"},6),l.cone("metal",.5,4,{x:-1.7,y:31,z:-1,rz:.5,color:"#f0d060"},6),l.sphere("glow",.4,{x:1.2,y:28.3,z:3.4,color:"#ff4a2a"},6,4),l.sphere("glow",.4,{x:-1.2,y:28.3,z:3.4,color:"#ff4a2a"},6,4);for(let u=0;u<14;u++){let f=Math.random()*6.283,p=18+Math.random()*14,x=2+Math.random()*4;l.cone("glow",.9,x,{x:Math.sin(f)*p,z:Math.cos(f)*p-2,y:x/2,rz:(Math.random()-.5)*.4,color:Ce(["#ff9a4a","#ffd35c","#ff6a3a"])},5)}for(let u of[-1,1])l.cyl("stone",1.1,1.4,1.6,{x:u*8,z:12,y:.8,color:"#4c4a50"},8);t.push(c.build());for(let u of[-1,1]){let f=le("#ff9a3a",4);f.position.set(a.x+u*8,a.y+2.6,a.z+12),o.add(f);let p=le("#ffe28a",2);p.position.copy(f.position),o.add(p),e.push((x,g)=>{f.scale.setScalar(4+Math.sin(g*13+u)*.7),p.scale.setScalar(2+Math.sin(g*17+u)*.4),r&&Math.random()<x*20&&r.emit(f.position.x,f.position.y,f.position.z,(Math.random()-.5)*.8,2+Math.random()*2,(Math.random()-.5)*.8,"#ffb23a",.6,1.6,{end:.05})})}let d=le("#ff7a24",22,.5);d.position.set(a.x,a.y+8,a.z-3),o.add(d),e.push((u,f)=>{d.material.opacity=.45+Math.sin(f*2.2)*.12})}{let a=Wt("z6"),c=new Dt,l=c.at(a.x,a.y,a.z);l.box("stone",36,2,18,{y:1,color:"#8c877e"}),l.box("plaster",34,12,16,{y:8,color:"#efe3c6"});for(let b=0;b<9;b++)l.box("wood",.5,12,16.4,{x:-16+b*4,y:8,color:"#5b3f26"});l.box("wood",34.4,.6,16.4,{y:11,color:"#5b3f26"}),l.gable("roof",16,8,34,{y:14,ry:Math.PI/2,color:"#b2552a"},1.2);for(let b of[-10,6])l.box("stone",2.4,8,2.4,{x:b,y:20,z:-3,color:"#9b9187"}),l.box("stone",3,.5,3,{x:b,y:24.2,z:-3,color:"#6f675e"});l.box("wood",5,6,.4,{x:0,y:4,z:8.2,color:"#6b4426"}),l.box("stone",7,7,.5,{x:0,y:4,z:8.1,color:"#a8a398"});for(let b of[-13,-8,8,13])l.box("window",2.4,3,.3,{x:b,y:8,z:8.1});l.box("metal",9.4,5.8,.6,{x:0,y:17.5,z:8.4,color:"#2a2d3d"}),l.collideBox(0,0,18,9.2,28),l.box("metal",1.6,1,.9,{x:-22,z:6,y:1.5,color:"#3c3f4a"}),l.cyl("stone",.8,.8,1.3,{x:-22,z:6,y:.65,color:"#5b3f26"},8);for(let b=0;b<4;b++)l.cyl("wood",.8,.8,1.5,{x:22+b%2*1.8,z:4+Math.floor(b/2)*1.8,y:.75+.01,color:"#7a5330"},10);t.push(c.build());let h=(b,y,w)=>{let E=new Dt;E.cyl("metal",b,b,.8,{rx:Math.PI/2,color:w},24);for(let R=0;R<y;R++){let _=R/y*6.283;E.box("metal",b*.28,b*.28,.8,{x:Math.cos(_)*(b+b*.1),y:Math.sin(_)*(b+b*.1),rz:_,color:w})}return E.cyl("metal",b*.25,b*.25,1.2,{rx:Math.PI/2,color:"#222530"},10),E.build()},d=h(3.2,12,"#d8a21c"),u=h(2.2,8,"#c0c4d0"),f=h(1.6,6,"#e8b830");d.position.set(a.x-12.5,a.y+12,a.z+8.8),u.position.set(a.x-7.8,a.y+13.8,a.z+8.8),f.position.set(a.x+14,a.y+12,a.z+8.8),o.add(d,u,f),e.push(b=>{d.rotation.z+=b*.5,u.rotation.z-=b*.75,f.rotation.z+=b*.9});let p=document.createElement("canvas");p.width=512,p.height=320;let x=p.getContext("2d");x.fillStyle="#0b1230",x.fillRect(0,0,512,320),x.fillStyle="#4de1ff",x.font="bold 30px monospace",x.fillText("C:\\> ipconfig",24,50),x.fillStyle="#ffd35c",x.fillText("IPv4 Address . : 192.168.1.20",24,110),x.fillText("Subnet Mask . . : 255.255.255.0",24,150),x.fillText("Default Gateway : 192.168.1.1",24,190),x.fillStyle="#3ddc97",x.fillText("DHCP Enabled . . : Yes",24,250);let g=new vn(p);g.colorSpace=Re;let m=new Vt(new Qe(8.8,5.5),new Fe({map:g,toneMapped:!1}));m.position.set(a.x,a.y+17.5,a.z+8.75),o.add(m),r&&e.push(b=>{for(let y of[-10,6])Math.random()<b*8&&r.emit(a.x+y+(Math.random()-.5),a.y+24.6,a.z-3,.6,2.2,.2,"#b8b0c8",2,4.5,{end:6})});let M=$o("\u05E1\u05D3\u05E0\u05EA \u05D4\u05E7\u05E1\u05DE\u05D9\u05DD",{color:"#ffe9a8",bg:"rgba(60,35,10,0.85)",font:"bold 74px Heebo, Arial, sans-serif"},12);M.position.set(a.x,a.y+9.5,a.z+9.2),o.add(M)}{let a=Wt("z7"),c=new Dt,l=c.at(a.x,a.y,a.z);l.cyl("stone",19,21,2.4,{y:1.2,color:"#4a4d63"},6),l.cyl("stone",15,17,1.4,{y:3.1,color:"#5a5e78"},6),l.box("metal",15,4.4,9,{y:6,color:"#252838"}),l.box("metal",15.4,.5,9.4,{y:8.4,color:"#3a3e55"});for(let f=0;f<8;f++)l.box("glow",.7,.4,.2,{x:-5.6+f*1.6,y:6,z:4.6,color:f%3===0?"#3dff9a":"#ff5a7a"});for(let f=0;f<4;f++)l.box("metal",1.2,1.2,.3,{x:-4.5+f*3,y:4.8,z:4.6,color:"#101219"});for(let f of[-6,0,6])l.cyl("metal",.28,.35,15,{x:f,y:16,z:-3,color:"#1a1c28"},8),l.sphere("glow",.5,{x:f,y:23.8,z:-3,color:"#ff5a7a"},8,6);for(let f=0;f<6;f++){let p=f/6*6.283;l.cyl("metal",.6,.8,7,{x:Math.cos(p)*17,z:Math.sin(p)*17,y:6,color:"#1e2030"},6),l.sphere("glow",.7,{x:Math.cos(p)*17,z:Math.sin(p)*17,y:9.8,color:"#4de1ff"},8,6),l.collideCircle(Math.cos(p)*17,Math.sin(p)*17,.9,30)}l.collideBox(0,0,7.8,4.8,12),t.push(c.build());let h=new Vt(new vo(4.2,0),new fe({color:"#ff5a7a",emissive:"#ff2a5a",emissiveIntensity:1.4,flatShading:!0,roughness:.15,metalness:.3}));h.scale.set(1,2.2,1),h.position.set(a.x,a.y+22,a.z),h.castShadow=!0,o.add(h);let d=[];for(let f=0;f<3;f++){let p=new Vt(new ni(8+f*2.6,.18,8,64),new Fe({color:["#4de1ff","#ff5a7a","#ffd35c"][f],toneMapped:!1}));p.position.copy(h.position),o.add(p),d.push(p)}let u=le("#ff3a6a",30,.6);u.position.copy(h.position),o.add(u),e.push((f,p)=>{h.rotation.y+=f*.6,h.position.y=a.y+22+Math.sin(p*1.3)*.7,d.forEach((x,g)=>{x.rotation.x=p*(.4+g*.2)+g,x.rotation.y=p*(.3-g*.12)+g*2,x.position.y=h.position.y}),u.position.y=h.position.y,u.material.opacity=.5+Math.sin(p*2)*.12});for(let f of[-6,0,6]){let p=le("#ff5a7a",3);p.position.set(a.x+f,a.y+23.8,a.z-3),o.add(p),e.push((x,g)=>{p.material.opacity=.5+.5*Math.abs(Math.sin(g*2.3+f))})}}return{groups:t,beacons:n,points:i,animated:e}}function Y1(){let s=document.createElement("canvas");s.width=128,s.height=128;let t=s.getContext("2d");t.clearRect(0,0,128,128);for(let n=0;n<9;n++){let i=10+n*13+n%2*3,r=70+n*37%50,o=n*53%21-10,a=t.createLinearGradient(0,128,0,128-r);a.addColorStop(0,"#2d5a1d"),a.addColorStop(1,"#d6f58a"),t.fillStyle=a,t.beginPath(),t.moveTo(i-4,128),t.quadraticCurveTo(i+o*.3,128-r*.6,i+o,128-r),t.quadraticCurveTo(i+o*.3+3,128-r*.6,i+4,128),t.closePath(),t.fill()}let e=new vn(s);return e.colorSpace=Re,e.anisotropy=4,e}function Z1(){let s=[];for(let c=0;c<3;c++){let l=new Qe(1.1,.7,1,2);l.translate(0,.35,0),l.rotateY(c*Math.PI/3),s.push(l)}let t=[],e=[],n=[],i=[],r=0;for(let c of s){t.push(...c.attributes.position.array),e.push(...c.attributes.uv.array),i.push(...c.attributes.normal.array.map((l,h)=>h%3===1?1:l*.3));for(let l of c.index.array)n.push(l+r);r+=c.attributes.position.count}let o=new ye;o.setAttribute("position",new te(t,3)),o.setAttribute("uv",new te(e,2));let a=new Float32Array(t.length);for(let c=1;c<a.length;c+=3)a[c]=1;return o.setAttribute("normal",new ne(a,3)),o.setIndex(n),o}var _c=class{constructor(t,e){this.scene=t,this.uniforms={uTime:{value:0}};let n=new fe({map:Y1(),alphaTest:.45,side:we,roughness:1});n.onBeforeCompile=i=>{i.uniforms.uTime=this.uniforms.uTime,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vec4 iw = instanceMatrix * vec4(0.,0.,0.,1.);
          float sway = sin(uTime*1.8 + iw.x*0.35 + iw.z*0.27) * 0.09 + sin(uTime*3.1 + iw.x*0.9) * 0.03;
          transformed.x += sway * position.y * position.y * 2.2;
          transformed.z += sway * 0.6 * position.y * position.y * 2.2;`)},this.mat=n,this.geo=Z1(),this.flowerGeo=(()=>{let i=new wn(.012,.018,.5,3).translate(0,.25,0),r=new un(.1,6,4).scale(1,.6,1).translate(0,.52,0),o=(f,p,x,g)=>{let m=new Float32Array(f.attributes.position.count*3);for(let M=0;M<m.length;M+=3)m[M]=p,m[M+1]=x,m[M+2]=g;return f.setAttribute("color",new ne(m,3)),f.toNonIndexed()},a=o(i,.5,.9,.4),c=o(r,1,1,1),l=new Float32Array([...a.attributes.position.array,...c.attributes.position.array]),h=new Float32Array([...a.attributes.color.array,...c.attributes.color.array]),d=new Float32Array([...a.attributes.normal.array,...c.attributes.normal.array]),u=new ye;return u.setAttribute("position",new ne(l,3)),u.setAttribute("color",new ne(h,3)),u.setAttribute("normal",new ne(d,3)),u})(),this.flowerMat=new fe({vertexColors:!0,roughness:.8}),this.center=new xt(1e9,1e9),this.job=null,this.group=new It,t.add(this.group),this.setQuality(e)}setQuality(t){this.quality=t,this.radius=[26,34,42][t],this.cap=[2600,5200,9e3][t],this.mesh&&(this.group.remove(this.mesh,this.fmesh),this.mesh.dispose(),this.fmesh.dispose()),this.mesh=new pi(this.geo,this.mat,this.cap),this.mesh.frustumCulled=!1,this.mesh.count=0,this.fcap=Math.floor(this.cap/9),this.fmesh=new pi(this.flowerGeo,this.flowerMat,this.fcap),this.fmesh.frustumCulled=!1,this.fmesh.count=0,this.group.add(this.mesh,this.fmesh),this.mesh.setColorAt(0,new ot),this.fmesh.setColorAt(0,new ot),this.center.set(1e9,1e9),this.job=null}startJob(t,e){let n=[1.45,1.1,.9][this.quality],i=Math.floor(this.radius*2/n);this.job={cx:t,cz:e,sp:n,n:i,i:0,m:new Float32Array(this.cap*16),c:new Float32Array(this.cap*3),cnt:0,fm:new Float32Array(this.fcap*16),fc:new Float32Array(this.fcap*3),fcnt:0}}step(t){let e=this.job,n=e.n*e.n,i=performance.now(),r=new Se,o=new ot,a=this.radius*this.radius;for(;e.i<n;){if(performance.now()-i>t)return!1;for(let c=0;c<60&&e.i<n;c++,e.i++){let l=e.i%e.n,h=Math.floor(e.i/e.n),d=Math.floor((e.cx-this.radius)/e.sp)+l,u=Math.floor((e.cz-this.radius)/e.sp)+h,f=(d+$n(d,u,1))*e.sp,p=(u+$n(d,u,2))*e.sp,x=f-e.cx,g=p-e.cz;if(x*x+g*g>a||e.cnt>=this.cap)continue;let m=.55+Li(f*.03,p*.03)*.5;if($n(d,u,3)>m)continue;let M=Tt(f,p);if(M<2.4)continue;let b=!1;for(let _=0;_<En.length;_++){let A=En[_];if(Math.abs(f-A.x)<A.r*.7&&Math.abs(p-A.z)<A.r*.7&&Math.hypot(f-A.x,p-A.z)<A.r*.7){b=!0;break}}if(b||M>150)continue;let y=ss(f,p),w=is(f,p),E=ns(f,p),R=(.7+$n(d,u,4)*.9)*(1+E*.3);if(r.position.set(f,M-.04,p),r.rotation.set(0,$n(d,u,5)*6.28,0),r.scale.set(R,R*(.8+$n(d,u,6)*.7),R),r.updateMatrix(),r.matrix.toArray(e.m,e.cnt*16),o.setRGB(.75+$n(d,u,7)*.4,.95+$n(d,u,8)*.15,.7),w>0&&o.lerp(new ot("#ffb04a"),w*.8),y>0&&o.lerp(new ot("#8a9a5a"),y*.6),E>0&&o.lerp(new ot("#5ae0c0"),E*.5),o.toArray(e.c,e.cnt*3),e.cnt++,e.fcnt<this.fcap&&$n(d,u,9)<.11*(1-y)&&Es(f,p)<.5){r.position.set(f+.2,M-.02,p),r.scale.setScalar(.8+$n(d,u,10)*.7),r.updateMatrix(),r.matrix.toArray(e.fm,e.fcnt*16);let A=$n(d,u,11),C=A<.25?"#ff6f9c":A<.5?"#ffd23f":A<.75?"#ffffff":"#9a7bff";o.set(C).toArray(e.fc,e.fcnt*3),e.fcnt++}}}return this.mesh.instanceMatrix.array.set(e.m.subarray(0,e.cnt*16)),this.mesh.instanceColor.array.set(e.c.subarray(0,e.cnt*3)),this.mesh.count=e.cnt,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0,this.fmesh.instanceMatrix.array.set(e.fm.subarray(0,e.fcnt*16)),this.fmesh.instanceColor.array.set(e.fc.subarray(0,e.fcnt*3)),this.fmesh.count=e.fcnt,this.fmesh.instanceMatrix.needsUpdate=!0,this.fmesh.instanceColor.needsUpdate=!0,this.center.set(e.cx,e.cz),this.job=null,!0}update(t,e,n,i){this.uniforms.uTime.value=e;let r=Tt(n.x,n.z),o=n.y-r>22;this.group.visible=!o,!o&&(this.job||Math.hypot(n.x-this.center.x,n.z-this.center.y)>this.radius*.22&&this.startJob(Math.round(n.x),Math.round(n.z)),this.job&&this.step(3))}};var bc=class{constructor(t,e=1){this.renderer=t,this.quality=e,this.scene=new Qr,this.animated=[],this.lamps=[],this.flags=[]}async load(t){let e=(o,a)=>t&&t(o,a),n=()=>new Promise(o=>setTimeout(o,0));e(.02,"\u05DE\u05DB\u05D9\u05E0\u05D9\u05DD \u05D7\u05D5\u05DE\u05E8\u05D9\u05DD \u05E7\u05E1\u05D5\u05DE\u05D9\u05DD..."),wp(),await n(),this.atmo=new pc(this.scene,this.renderer),e(.05,"\u05DE\u05E6\u05D9\u05E4\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05D2\u05DE\u05D9\u05DD...");let i=Mp();for(;!i.step(48);)e(.05+.25*(i.N?1:0)*0,"\u05DE\u05E6\u05D9\u05E4\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05D2\u05DE\u05D9\u05DD..."),await n();this.depth=i,this.water=Sp(i),this.scene.add(this.water),this.atmo.water=this.water,await n(),e(.3,"\u05DE\u05E8\u05D9\u05DE\u05D9\u05DD \u05D4\u05E8\u05D9\u05DD \u05D5\u05E2\u05DE\u05E7\u05D9\u05DD..."),this.terrain=new dc(this.scene,this.quality),this.props=new gc(this.scene,this.quality),await n(),this.fx=new vc(this.scene,3500,!0),e(.45,"\u05D1\u05D5\u05E0\u05D9\u05DD \u05D8\u05D9\u05E8\u05D4, \u05DB\u05E4\u05E8\u05D9\u05DD \u05D5\u05DE\u05D2\u05D3\u05DC\u05D9\u05DD..."),this.buildStructures(),await n(),e(.7,"\u05E0\u05D5\u05D8\u05E2\u05D9\u05DD \u05D9\u05E2\u05E8 \u05E7\u05E1\u05D5\u05DD..."),this.grass=new _c(this.scene,this.quality),this.applyQuality(),await n(),e(.8,"\u05DE\u05D8\u05E4\u05D7\u05D9\u05DD \u05D0\u05EA \u05D4\u05E0\u05D5\u05E3...");let r=new L(0,20,20);for(let o=0;o<40&&this.terrain.update(r,40);o++)e(.8+.1*(o/40),"\u05DE\u05D8\u05E4\u05D7\u05D9\u05DD \u05D0\u05EA \u05D4\u05E0\u05D5\u05E3..."),await n();this.props.update(r,60),await n(),e(1,"\u05DE\u05D5\u05DB\u05DF!")}applyQuality(){let t=this.quality,e=this.renderer;e.shadowMap.enabled=t>0,this.atmo.shadowsOn=t>0;let n=t>=2?3072:2048;this.atmo.sun.shadow.mapSize.x!==n&&(this.atmo.sun.shadow.mapSize.set(n,n),this.atmo.sun.shadow.map&&(this.atmo.sun.shadow.map.dispose(),this.atmo.sun.shadow.map=null)),this.atmo.setFog([180,250,300][t],[1500,2200,2800][t]),this.props.setQuality(t),this.grass.setQuality(t)}buildStructures(){let t=p=>(this.scene.add(p),p.userData.colliders&&Yn.addAll(p.userData.colliders),p.userData.lamps&&this.lamps.push(...p.userData.lamps),p.userData.flags&&this.flags.push(...p.userData.flags),p),e=Wt("castle");t(Np(e)),this.castleFlags=[];let n=on.cloth,i=["#b3262e","#2a5fc1","#1f8a56","#7a3fc1"];this.flags.forEach((p,x)=>{let g=new It,m=new Vt(new wn(.1,.12,8,6),new fe({color:"#c9a64a",metalness:.7,roughness:.3}));m.position.y=4,g.add(m);let M=new Qe(6,3.2,12,4);M.translate(3,0,0);let b=new Vt(M,new fe({color:i[x%4],side:we,roughness:.8}));b.position.y=6.2,b.castShadow=!0,g.add(b),g.position.copy(p),this.scene.add(g),this.castleFlags.push({cloth:b,geo:M,base:M.attributes.position.array.slice(),phase:x*1.3,group:g})}),this.animated.push((p,x)=>{for(let g of this.castleFlags){let m=g.geo.attributes.position;for(let M=0;M<m.count;M++){let b=g.base[M*3],y=g.base[M*3+1];m.setZ(M,Math.sin(b*1.2-x*4+g.phase)*.35*(b/6)),m.setY(M,y+Math.sin(b*.9-x*3+g.phase)*.06*b)}m.needsUpdate=!0,g.group.rotation.y=Math.sin(x*.3+g.phase)*.4+.5}});let r=Wt("spawn"),o=Wt("autumn"),a=Wt("village3"),c=Wt("z6"),l=Wt("port");t(Tr(r,16,11,{radius:70,minR:22})),t(Tr(o,22,12,{radius:85,minR:18})),t(Tr(a,14,13,{radius:62,minR:18})),t(Tr(c,16,14,{radius:70,minR:28,house:{}})),t(Tr(l,9,15,{radius:45,minR:16,avoid:(p,x)=>Tt(p,x)<2.4})),t(Up(Wt("stones"))),t(zp(Wt("ruins")));let h=t(Fp(Wt("pitch")));this.hoops=h.userData.hoops;let d=t(Du(Wt("autumn").x+70,Wt("autumn").z-50));this.scene.add(d.userData.holder),this.animated.push(p=>{d.userData.blades.rotation.z+=p*.6});let u=t(Du(a.x-55,a.z+40));this.scene.add(u.userData.holder),this.animated.push(p=>{u.userData.blades.rotation.z+=p*.45});let f=kp(this);for(let p of f.groups)t(p);this.beacons=f.beacons,this.zonePoints=f.points;for(let p of f.animated)this.animated.push(p)}update(t,e,n,i,r){this.atmo.update(t,n,i),Ep(this.atmo.night),this.terrain.update(i.position,5),this.props.update(n,4,r),this.grass.update(t,e,n,this.atmo);for(let o of this.animated)o(t,e)}};var Ct={keys:new Set,pressed:new Set,mdx:0,mdy:0,wheel:0,locked:!1,enabled:!0,touch:{move:{x:0,y:0},look:{x:0,y:0},active:!1},lmb:!1,rmb:!1,clicked:!1},Hp={KeyW:"w",KeyA:"a",KeyS:"s",KeyD:"d",ArrowUp:"w",ArrowDown:"s",ArrowLeft:"a",ArrowRight:"d"};function Vp(s,t={}){window.addEventListener("keydown",e=>{if(!Ct.enabled||e.target&&["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName))return;(e.code==="Space"||e.code.startsWith("Arrow")||e.code==="Tab")&&e.preventDefault();let n=Hp[e.code]||e.code;Ct.keys.has(n)||Ct.pressed.add(n),Ct.keys.add(n),e.shiftKey&&Ct.keys.add("Shift"),t.onKey&&t.onKey(e.code,e)}),window.addEventListener("keyup",e=>{let n=Hp[e.code]||e.code;Ct.keys.delete(n),e.shiftKey||Ct.keys.delete("Shift"),(e.code==="ShiftLeft"||e.code==="ShiftRight")&&Ct.keys.delete("Shift")}),window.addEventListener("blur",()=>{Ct.keys.clear(),Ct.lmb=Ct.rmb=!1}),document.addEventListener("pointerlockchange",()=>{Ct.locked=document.pointerLockElement===s,t.onLockChange&&t.onLockChange(Ct.locked)}),window.addEventListener("mousemove",e=>{(Ct.locked||Ct.rmb)&&(Ct.mdx+=e.movementX,Ct.mdy+=e.movementY)}),s.addEventListener("mousedown",e=>{Ct.enabled&&(e.button===0&&(Ct.lmb=!0,Ct.clicked=!0),e.button===2&&(Ct.rmb=!0),!Ct.locked&&!Oo()&&e.button===0&&t.wantLock&&t.wantLock()&&s.requestPointerLock?.())}),window.addEventListener("mouseup",e=>{e.button===0&&(Ct.lmb=!1),e.button===2&&(Ct.rmb=!1)}),s.addEventListener("contextmenu",e=>e.preventDefault()),s.addEventListener("wheel",e=>{Ct.wheel+=Math.sign(e.deltaY),e.preventDefault()},{passive:!1}),J1(s,t)}function Yo(){document.pointerLockElement&&document.exitPointerLock()}function Gp(){let s={x:Ct.mdx,y:Ct.mdy};return Ct.mdx=Ct.mdy=0,s}function Bu(){Ct.pressed.clear(),Ct.clicked=!1,Ct.wheel=0}var oi=s=>Ct.keys.has(s);function J1(s,t){if(!Oo())return;let e=document.getElementById("touch-stick"),n=document.getElementById("touch-knob"),i=document.getElementById("touch-buttons");if(!e)return;document.body.classList.add("touch");let r=null,o=null,a=0,c=0,l=55;e.addEventListener("touchstart",d=>{let u=d.changedTouches[0];r=u.identifier,d.preventDefault(),h(u)},{passive:!1});let h=d=>{let u=e.getBoundingClientRect(),f=u.left+u.width/2,p=u.top+u.height/2,x=d.clientX-f,g=d.clientY-p,m=Math.hypot(x,g);m>l&&(x=x/m*l,g=g/m*l),n.style.transform=`translate(${x}px,${g}px)`,Ct.touch.move.x=x/l,Ct.touch.move.y=g/l,Ct.touch.active=!0};window.addEventListener("touchmove",d=>{for(let u of d.changedTouches)u.identifier===r?h(u):u.identifier===o&&(Ct.mdx+=(u.clientX-a)*1.4,Ct.mdy+=(u.clientY-c)*1.4,a=u.clientX,c=u.clientY)},{passive:!0}),window.addEventListener("touchend",d=>{for(let u of d.changedTouches)u.identifier===r&&(r=null,n.style.transform="",Ct.touch.move.x=Ct.touch.move.y=0,Ct.touch.active=!1),u.identifier===o&&(o=null)}),s.addEventListener("touchstart",d=>{for(let u of d.changedTouches)o===null&&(o=u.identifier,a=u.clientX,c=u.clientY)},{passive:!0}),i?.addEventListener("touchstart",d=>{let u=d.target.closest("[data-key]");if(!u)return;d.preventDefault();let f=u.dataset.key;Ct.keys.add(f),Ct.pressed.add(f),t.onKey&&t.onKey(f,d),f==="Cast"&&(Ct.lmb=!0,Ct.clicked=!0)},{passive:!1}),i?.addEventListener("touchend",d=>{let u=d.target.closest("[data-key]");u&&(Ct.keys.delete(u.dataset.key),u.dataset.key==="Cast"&&(Ct.lmb=!1))})}var Ou="ip-wizards-save-v1",Fn=[{id:1,name:"\u05DE\u05EA\u05D7\u05D9\u05DC",icon:"\u{1F331}",mult:1,color:"#3ddc97",desc:"\u05E9\u05D0\u05DC\u05D5\u05EA \u05D1\u05E1\u05D9\u05E1\u05D9\u05D5\u05EA, \u05E8\u05DE\u05D6\u05D9\u05DD \u05D5\u05D6\u05DE\u05DF \u05E0\u05D3\u05D9\u05D1"},{id:2,name:"\u05E7\u05D5\u05E1\u05DD",icon:"\u{1F52E}",mult:1.5,color:"#6c8bff",desc:"\u05D0\u05EA\u05D2\u05E8 \u05D1\u05D9\u05E0\u05D5\u05E0\u05D9 \u2013 \u05E0\u05D9\u05E7\u05D5\u05D3 \xD71.5"},{id:3,name:"\u05DE\u05D0\u05E1\u05D8\u05E8",icon:"\u{1F451}",mult:2,color:"#ffd35c",desc:"\u05D0\u05EA\u05D2\u05E8 \u05DE\u05DC\u05D0 \u05DC\u05DC\u05D0 \u05E8\u05DE\u05D6\u05D9\u05DD \u2013 \u05E0\u05D9\u05E7\u05D5\u05D3 \xD72"}],st={name:"\u05E7\u05D5\u05E1\u05DD",house:1,skin:1,level:2,score:0,coins:0,zones:{},ingredients:{herb:0,mushroom:0,crystal:0,flower:0},potions:{speed:0,jump:0,night:0,luck:0,flight:0},found:{},snitch:0,broom:"student",ring:{best:null},seenIntro:!1,settings:{quality:1,sound:!0,music:!0,sens:1},pos:null,time:.36};We.forEach(s=>{st.zones[s.id]={done:!1,stars:0,best:0,plays:0}});var Mc={},Wp=(s,t)=>((Mc[s]||(Mc[s]=[])).push(t),t),ku=(s,...t)=>(Mc[s]||[]).forEach(e=>e(...t));function Ee(){try{localStorage.setItem(Ou,JSON.stringify(st))}catch{}}function Xp(){try{let s=localStorage.getItem(Ou);if(!s)return!1;let t=JSON.parse(s);for(let e in t)e==="zones"?Object.assign(st.zones,t.zones):typeof t[e]=="object"&&t[e]&&!Array.isArray(t[e])&&st[e]?Object.assign(st[e],t[e]):st[e]=t[e];return!0}catch{return!1}}function qp(){try{localStorage.removeItem(Ou)}catch{}}var Zo=()=>Fn.find(s=>s.id===st.level)||Fn[1],os=()=>We.filter(s=>st.zones[s.id].done).length,Hu=()=>We.reduce((s,t)=>s+st.zones[t.id].stars,0),$p=0;function Yp(s){$p=performance.now()+s}var Vu=()=>performance.now()<$p;function Rs(s,t=""){let e=Math.round(s*(Vu()?1.1:1));return st.score+=e,ku("score",e,t),Ee(),e}var me=null,Ar=null,Rr=null,Di=null,K1=null;function Cr(){if(me){me.state==="suspended"&&me.resume();return}let s=window.AudioContext||window.webkitAudioContext;if(!s)return;me=new s,Ar=me.createGain(),Ar.gain.value=.8,Ar.connect(me.destination),Rr=me.createGain(),Rr.gain.value=.55,Rr.connect(Ar),Di=me.createGain(),Di.gain.value=0;let t=me.createConvolver();t.buffer=j1(2.8,2.2);let e=me.createGain();e.gain.value=.55,Di.connect(Ar),Di.connect(t),t.connect(e),e.connect(Ar),wc(),t_()}function j1(s,t){let e=me.sampleRate*s,n=me.createBuffer(2,e,me.sampleRate);for(let i=0;i<2;i++){let r=n.getChannelData(i);for(let o=0;o<e;o++)r[o]=(Math.random()*2-1)*Math.pow(1-o/e,t)}return n}function wc(){me&&(Rr.gain.value=st.settings.sound?.55:0,Di.gain.setTargetAtTime(st.settings.music?.22:0,me.currentTime,.3))}function Xe(s,t,e,{type:n="sine",vol:i=.3,attack:r=.01,slide:o=0,dest:a=Rr}={}){let c=me.createOscillator(),l=me.createGain();c.type=n,c.frequency.setValueAtTime(s,t),o&&c.frequency.exponentialRampToValueAtTime(Math.max(20,s*o),t+e),l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(i,t+r),l.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(l),l.connect(a),c.start(t),c.stop(t+e+.05)}function Gu(s,t,{vol:e=.2,freq:n=2e3,q:i=1,type:r="bandpass"}={}){let o=Math.floor(me.sampleRate*t),a=me.createBuffer(1,o,me.sampleRate),c=a.getChannelData(0);for(let u=0;u<o;u++)c[u]=(Math.random()*2-1)*(1-u/o);let l=me.createBufferSource();l.buffer=a;let h=me.createBiquadFilter();h.type=r,h.frequency.value=n,h.Q.value=i;let d=me.createGain();d.gain.value=e,l.connect(h),h.connect(d),d.connect(Rr),l.start(s)}var Q1={click:s=>Xe(880,s,.08,{type:"triangle",vol:.2}),correct:s=>{[660,880,1320].forEach((t,e)=>Xe(t,s+e*.08,.25,{type:"triangle",vol:.28}))},wrong:s=>{Xe(220,s,.3,{type:"sawtooth",vol:.18,slide:.6}),Xe(165,s+.1,.35,{type:"sawtooth",vol:.15,slide:.6})},levelup:s=>{[523,659,784,1046,1318].forEach((t,e)=>Xe(t,s+e*.1,.5,{type:"triangle",vol:.3}))},cast:s=>{Xe(500,s,.35,{type:"sine",vol:.25,slide:3}),Gu(s,.3,{vol:.25,freq:3500,q:.7})},boom:s=>{Xe(120,s,.5,{type:"sine",vol:.5,slide:.3}),Gu(s,.5,{vol:.4,freq:600,q:.5,type:"lowpass"})},collect:s=>{Xe(988,s,.15,{type:"sine",vol:.25}),Xe(1318,s+.07,.25,{type:"sine",vol:.25})},whoosh:s=>Gu(s,.4,{vol:.15,freq:900,q:.8}),magic:s=>{[1046,1318,1568,2093].forEach((t,e)=>Xe(t,s+e*.06,.4,{type:"sine",vol:.18}))},coin:s=>{Xe(1568,s,.1,{type:"square",vol:.12}),Xe(2093,s+.08,.2,{type:"square",vol:.12})},potion:s=>{for(let t=0;t<6;t++)Xe(300+Math.random()*500,s+t*.07,.12,{type:"sine",vol:.15})},tick:s=>Xe(1200,s,.03,{type:"square",vol:.06}),owl:s=>{Xe(420,s,.25,{type:"sine",vol:.18,slide:.8}),Xe(380,s+.35,.35,{type:"sine",vol:.18,slide:.8})}};function at(s){if(!me||!st.settings.sound)return;me.state==="suspended"&&me.resume();let t=Q1[s];t&&t(me.currentTime+.01)}var Zp=[[57,60,64,67],[53,57,60,64],[48,52,55,59],[55,59,62,65]],Sc=s=>440*Math.pow(2,(s-69)/12);function t_(){let s=0,t=()=>{if(!me)return;let e=me.currentTime+.05,n=Zp[Math.floor(s/8)%Zp.length];s%8===0&&n.forEach(r=>Xe(Sc(r-12),e,4.6,{type:"sine",vol:.09,attack:1.2,dest:Di}));let i=n[s*3%4]+(s%4===3?12:0)+12;Xe(Sc(i),e,1.4,{type:"triangle",vol:.11,attack:.02,dest:Di}),s%4===0&&Xe(Sc(n[0]-24),e,1.8,{type:"sine",vol:.14,attack:.05,dest:Di}),Math.random()<.25&&Xe(Sc(n[2]+24),e+.25,.9,{type:"sine",vol:.05,dest:Di}),s++};t(),K1=setInterval(t,600)}var Jp=new L,Jo=class{constructor(t){this.world=t;let e=zn[st.house]||zn[1];this.rig=xc({robe:e.robe,accent:e.accent,hat:e.hat,skin:Go[st.skin]||Go[1],hair:"#3a2416",scale:1}),this.holder=new It,this.tilt=new It,this.tilt.add(this.rig.root),this.holder.add(this.tilt),t.scene.add(this.holder),this.pos=new L(0,10,18),this.vel=new L,this.facing=Math.PI,this.yaw=0,this.pitch=.12,this.dist=6.5,this.camPos=new L,this.mode="walk",this.onGround=!0,this.inWater=!1,this.frozen=!1,this.castT=0,this.mods={speed:1,jump:1,flight:1,float:!1},this.setBroom(st.broom),this.roll=0,this.pitchBody=0,this.speedH=0,this.lastGround=0,this.camShake=0,this.aim=new L,this.mana=100,this.shield=0,this.fovBoost=0}setBroom(t){let e=Ts.find(n=>n.id===t)||Ts[0];this.broomDef=e,st.broom=e.id,this.broomMesh&&this.tilt.remove(this.broomMesh),this.broomMesh=Dp(e),this.broomMesh.position.y=-.1,this.broomMesh.visible=this.mode==="broom",this.tilt.add(this.broomMesh)}teleport(t,e,n=0){this.pos.set(t,Tt(t,e)+1+n,e),this.vel.set(0,0,0)}toggleBroom(){this.frozen||(this.mode==="walk"?(this.mode="broom",this.broomMesh.visible=!0,this.vel.set(0,0,0),this.pos.y+=.6,this.rig.root.position.y=-.62,at("whoosh")):(this.mode="walk",this.broomMesh.visible=!1,this.rig.root.position.y=0,this.tilt.rotation.set(0,0,0),this.vel.set(0,Math.min(this.vel.y,0),0),at("whoosh")))}get speedNow(){return Math.hypot(this.vel.x,this.vel.z)}forwardVec(t=Jp){return t.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}updateLook(t){let e=Gp(),n=.0024*st.settings.sens;(!this.frozen||Ct.locked)&&(this.yaw-=e.x*n,this.pitch=Ue(this.pitch-e.y*n,-1.15,1.25)),Ct.wheel&&!this.frozen&&(this.dist=Ue(this.dist+Ct.wheel*.8,2.5,14))}update(t,e){this.updateLook(t);let n=(oi("d")?1:0)-(oi("a")?1:0)+Ct.touch.move.x,i=(oi("w")?1:0)-(oi("s")?1:0)-Ct.touch.move.y,r=!this.frozen&&(Math.abs(n)>.05||Math.abs(i)>.05),o=Jp.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)).clone(),a=new L(Math.cos(this.yaw),0,-Math.sin(this.yaw));this.castT=Math.max(0,this.castT-t),this.mana=Math.min(100,this.mana+t*9),this.shield=Math.max(0,this.shield-t),this.mode==="walk"?this.updateWalk(t,e,o,a,n,i,r):this.updateBroom(t,e,o,a,n,i,r);let c=Math.hypot(this.pos.x,this.pos.z);if(c>2650){let l=2650/c;this.pos.x*=l,this.pos.z*=l,this.vel.x*=.5,this.vel.z*=.5,this.edgeWarn=2}this.edgeWarn&&(this.edgeWarn=Math.max(0,this.edgeWarn-t)),this.holder.position.copy(this.pos),this.holder.rotation.y=this.facing,this.updateCamera(t)}updateWalk(t,e,n,i,r,o,a){let c=Tt(this.pos.x,this.pos.z);this.inWater=c<-.25;let h=(oi("Shift")&&!this.inWater?12.5:6.2)*this.mods.speed*(this.inWater?.5:1),d=new L;a&&(d.addScaledVector(n,o).addScaledVector(i,r),d.lengthSq()>1&&d.normalize());let u=this.onGround||this.inWater?14:4;this.vel.x=pe(this.vel.x,d.x*h,1-Math.exp(-u*t)),this.vel.z=pe(this.vel.z,d.z*h,1-Math.exp(-u*t)),!this.frozen&&Ct.pressed.has("Space")&&(this.onGround||this.mods.float)&&!this.inWater&&(this.vel.y=9.4*this.mods.jump,this.onGround=!1,at("whoosh"));let f=this.mods.float?11:27;this.vel.y-=f*t,this.mods.float&&this.vel.y<-3.5&&(this.vel.y=-3.5),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,Yn.resolve(this.pos,.45,this.pos.y),this.pos.y+=this.vel.y*t;let p=Tt(this.pos.x,this.pos.z),x=this.inWater?Math.max(p,-.5):p;this.pos.y<=x?(this.vel.y<-14&&(this.camShake=.3),this.pos.y=x,this.vel.y=0,this.onGround=!0):this.onGround&&this.pos.y-x<.5&&this.vel.y<=0?this.pos.y=x:this.onGround=!1,this.inWater&&(this.pos.y=-.55+Math.sin(e*2.5)*.06,this.onGround=!0);let g=Math.hypot(this.vel.x,this.vel.z);this.speedH=g,this.castT>0||Ct.rmb?this.facing=Pi(this.facing,Math.atan2(n.x,n.z),1-Math.exp(-18*t)):g>.5&&(this.facing=Pi(this.facing,Math.atan2(this.vel.x,this.vel.z),1-Math.exp(-12*t))),Wo(this.rig,t,g,{onGround:this.onGround,cast:this.castT}),this.rig.root.position.y=this.inWater?-.5:0}updateBroom(t,e,n,i,r,o,a){let c=this.broomDef,l=oi("Shift")?1.7:1,h=c.speed*this.mods.flight*l,d=Math.cos(this.pitch),u=Math.sin(this.pitch),f=new L(n.x*d,u,n.z*d),p=new L;a&&p.addScaledVector(f,o).addScaledVector(i,r*.65),this.frozen||(oi("Space")&&(p.y+=.7),(oi("ControlLeft")||oi("ControlRight")||oi("KeyC"))&&(p.y-=.7)),p.lengthSq()>1&&p.normalize(),p.multiplyScalar(h);let x=1-Math.exp(-c.accel*t*(a||p.y!==0?1:.9));this.vel.lerp(p,x),this.pos.addScaledVector(this.vel,t);let g={x:this.pos.x,z:this.pos.z},m={x:g.x,z:g.z};Yn.resolve(this.pos,.6,this.pos.y-1);let b=Math.max(Tt(this.pos.x,this.pos.z),.3)+1.4;this.pos.y<b&&(this.pos.y=b,this.vel.y<0&&(this.vel.y=0)),this.pos.y>900&&(this.pos.y=900);let y=this.vel.length();this.speedH=Math.hypot(this.vel.x,this.vel.z);let w=this.facing;this.speedH>2?w=Math.atan2(this.vel.x,this.vel.z):w=Math.atan2(n.x,n.z),this.castT>0&&(w=Math.atan2(n.x,n.z));let E=this.facing;this.facing=Pi(this.facing,w,1-Math.exp(-6*t));let R=this.facing-E;for(;R>Math.PI;)R-=Math.PI*2;for(;R<-Math.PI;)R+=Math.PI*2;this.roll=pe(this.roll,Ue(-R/t*.12,-.6,.6)+-r*.18,1-Math.exp(-6*t));let _=Math.max(this.speedH,.001),A=Ue(Math.atan2(-this.vel.y,_),-.9,.9)*.7;this.pitchBody=pe(this.pitchBody,A,1-Math.exp(-5*t)),this.tilt.rotation.set(this.pitchBody,0,this.roll),this.tilt.rotation.order="YXZ",this.rig.root.position.y=-.62+Math.sin(e*3)*.03,Wo(this.rig,t,y,{broom:!0,cast:this.castT}),this.fovBoost=pe(this.fovBoost,Ue(y/60*18,0,26),1-Math.exp(-3*t)),this.onGround=!1,this.inWater=!1}updateCamera(t){let e=this.camera,n=new L(this.pos.x,this.pos.y+(this.mode==="broom"?.9:1.55),this.pos.z),i=Math.cos(this.pitch),r=Math.sin(this.pitch),o=new L(-Math.sin(this.yaw)*i,r,-Math.cos(this.yaw)*i),a=new L(Math.cos(this.yaw),0,-Math.sin(this.yaw)),c=this.dist*(this.mode==="broom"?1.35:1),l=n.clone().addScaledVector(o,-c).addScaledVector(a,.7).add(new L(0,.3,0)),h=Tt(l.x,l.z);l.y<h+.7&&(l.y=h+.7),l.y<.4&&Tt(l.x,l.z)<0&&(l.y=.4),this.camInit||(this.camPos.copy(l),this.camInit=!0),this.camPos.lerp(l,1-Math.exp(-16*t)),e.position.copy(this.camPos),this.camShake>0&&(this.camShake-=t,e.position.x+=(Math.random()-.5)*this.camShake*.6,e.position.y+=(Math.random()-.5)*this.camShake*.6);let d=n.clone().addScaledVector(o,12).addScaledVector(a,.2);e.lookAt(d);let u=62+this.fovBoost*(this.mode==="broom"?1:0);Math.abs(e.fov-u)>.05&&(e.fov=u,e.updateProjectionMatrix())}aimDir(t){let e=Math.cos(this.pitch),n=Math.sin(this.pitch);return t.set(-Math.sin(this.yaw)*e,n,-Math.cos(this.yaw)*e)}};var e_=["\u05D0\u05DC\u05E8\u05D5\u05DF","\u05E0\u05D5\u05E2\u05D4","\u05EA\u05DE\u05E8","\u05D9\u05D4\u05DC\u05D9","\u05D0\u05D5\u05E8\u05D9","\u05DE\u05D0\u05D9\u05D4","\u05D2\u05DC","\u05E8\u05D5\u05E0\u05D9","\u05E9\u05E7\u05D3","\u05D3\u05D5\u05E8","\u05DC\u05D9\u05D0\u05D5\u05E8","\u05D0\u05D1\u05D9\u05D1","\u05D9\u05DD","\u05D8\u05DC","\u05E0\u05D2\u05D4","\u05E2\u05D9\u05D3\u05D5","\u05E9\u05D9\u05E8\u05D4","\u05D0\u05D9\u05EA\u05DF","\u05DE\u05D9\u05DB\u05DC","\u05D1\u05DF","\u05D4\u05D3\u05E1","\u05E8\u05D5\u05DD","\u05E2\u05DE\u05D9\u05EA","\u05DC\u05D5\u05E0\u05D4","\u05D6\u05D9\u05D5","\u05D0\u05D5\u05E4\u05D9\u05E8"],n_=["\u05D4\u05DB\u05D5\u05DB\u05D1","\u05DE\u05D4\u05D0\u05D2\u05DD","\u05D4\u05D9\u05E8\u05D5\u05E7","\u05D1\u05DF-\u05E8\u05D5\u05D7","\u05DE\u05D4\u05E6\u05E4\u05D5\u05DF","\u05D4\u05E0\u05D5\u05E6\u05E5","\u05DE\u05D4\u05D9\u05E2\u05E8","\u05D1\u05E8-\u05D0\u05D5\u05E8","\u05D4\u05D6\u05D4\u05D1","\u05D4\u05E2\u05E8\u05E4\u05DC"],Kp=["\u05DB\u05DC \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D1\u05E8\u05E9\u05EA \u05E6\u05E8\u05D9\u05DA \u05DB\u05EA\u05D5\u05D1\u05EA \u05D9\u05D9\u05D7\u05D5\u05D3\u05D9\u05EA \u2013 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DB\u05DE\u05D5 \u05E9\u05DC\u05DB\u05DC \u05D1\u05D9\u05EA \u05D1\u05E8\u05D7\u05D5\u05D1 \u05D9\u05E9 \u05DE\u05E1\u05E4\u05E8.","\u05D4\u05D9\u05E0\u05E9\u05D5\u05E3 \u05E9\u05DC\u05D9 \u05D4\u05DC\u05DA \u05DC\u05D0\u05D9\u05D1\u05D5\u05D3\u2026 \u05DB\u05E0\u05E8\u05D0\u05D4 \u05E9\u05DB\u05D7\u05EA\u05D9 \u05DC\u05DB\u05EA\u05D5\u05D1 \u05DB\u05EA\u05D5\u05D1\u05EA \u05E2\u05DC \u05D4\u05DE\u05DB\u05EA\u05D1.","\u05E9\u05DE\u05E2\u05EA? \u05D4\u05DB\u05EA\u05D5\u05D1\u05EA 192.168.1.1 \u05D4\u05D9\u05D0 \u05DB\u05DB\u05DC \u05D4\u05E0\u05E8\u05D0\u05D4 \u05D4\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05EA \u05D4\u05DB\u05D9 \u05E4\u05D5\u05E4\u05D5\u05DC\u05E8\u05D9\u05EA \u05D1\u05E2\u05D5\u05DC\u05DD!","\u05DB\u05EA\u05D5\u05D1\u05EA IP \u05D1\u05E0\u05D5\u05D9\u05D4 \u05DE-32 \u05D1\u05D9\u05D8\u05D9\u05DD, \u05DE\u05D7\u05D5\u05DC\u05E7\u05D9\u05DD \u05DC\u05D0\u05E8\u05D1\u05E2\u05D4 \u05D7\u05DC\u05E7\u05D9\u05DD \u05E9\u05DC 8 \u05D1\u05D9\u05D8\u05D9\u05DD.","\u05D0\u05DC \u05EA\u05E9\u05DB\u05D7 \u05DC\u05E9\u05EA\u05D5\u05EA \u05E9\u05D9\u05E7\u05D5\u05D9 \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05DC\u05E4\u05E0\u05D9 \u05E9\u05D0\u05EA\u05D4 \u05E2\u05D5\u05DC\u05D4 \u05E2\u05DC \u05D4\u05DE\u05D8\u05D0\u05D8\u05D0!","\u05D0\u05D5\u05DE\u05E8\u05D9\u05DD \u05E9\u05D1\u05DE\u05D2\u05D3\u05DC \u05D4\u05E8\u05D0\u05D5\u05D8\u05E8 \u05D9\u05E9 \u05D2\u05D1\u05D9\u05E9 \u05E9\u05DE\u05D7\u05DC\u05E7 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05DC\u05DB\u05DC \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05DE\u05DE\u05DC\u05DB\u05D4.","\u05D4\u05DB\u05EA\u05D5\u05D1\u05EA 127.0.0.1 \u05D4\u05D9\u05D0 \u05F4\u05D4\u05D1\u05D9\u05EA\u05F4 \u2013 \u05D4\u05D9\u05D0 \u05EA\u05DE\u05D9\u05D3 \u05DE\u05D7\u05D6\u05D9\u05E8\u05D4 \u05D0\u05D5\u05EA\u05DA \u05D0\u05DC \u05E2\u05E6\u05DE\u05DA.","\u05E8\u05D0\u05D9\u05EA\u05D9 \u05D4\u05D9\u05D5\u05DD \u05D7\u05D3-\u05E7\u05E8\u05DF \u05DC\u05D9\u05D3 \u05D4\u05D0\u05D2\u05DD! \u05D4\u05D5\u05D0 \u05D4\u05D9\u05D4 \u05D6\u05D5\u05D4\u05E8 \u05DE\u05DE\u05E9.","\u05D0\u05DD \u05D4\u05DE\u05D7\u05E9\u05D1 \u05E9\u05DC\u05DA \u05E7\u05D9\u05D1\u05DC \u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05DE\u05EA\u05D7\u05D9\u05DC\u05D4 \u05D1-169.254 \u2013 \u05DB\u05E0\u05E8\u05D0\u05D4 \u05E9\u05E8\u05EA \u05D4-DHCP \u05DC\u05D0 \u05E2\u05E0\u05D4 \u05DC\u05D5.","\u05E9\u05E8\u05EA DHCP \u05D4\u05D5\u05D0 \u05DB\u05DE\u05D5 \u05E4\u05E7\u05D9\u05D3 \u05E7\u05D1\u05DC\u05D4: \u05D4\u05D5\u05D0 \u05E0\u05D5\u05EA\u05DF \u05DC\u05DB\u05DC \u05D0\u05D5\u05E8\u05D7 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05D5\u05EA\u05D4 \u05DB\u05E9\u05D4\u05D5\u05D0 \u05E2\u05D5\u05D6\u05D1.","\u05DB\u05EA\u05D5\u05D1\u05EA \u05E4\u05E8\u05D8\u05D9\u05EA \u05DE\u05EA\u05D7\u05D9\u05DC\u05D4 \u05D1-10, \u05D1-172.16 \u05E2\u05D3 172.31, \u05D0\u05D5 \u05D1-192.168.","\u05EA\u05E0\u05E1\u05D4 \u05D0\u05EA \u05DC\u05D7\u05E9 \u05D4\u05F4\u05DC\u05D5\u05DE\u05D5\u05E1\u05F4 \u05D1\u05DC\u05D9\u05DC\u05D4 \u2013 \u05D6\u05D4 \u05DE\u05DE\u05E9 \u05DE\u05D5\u05E2\u05D9\u05DC \u05D1\u05D9\u05E2\u05E8!","\u05D9\u05E9 \u05E9\u05DE\u05D5\u05E2\u05D4 \u05E9\u05D1\u05DE\u05E2\u05E8\u05EA \u05D4\u05D3\u05E8\u05E7\u05D5\u05DF \u05DE\u05E1\u05EA\u05EA\u05E8 \u05DE\u05D0\u05D2\u05E8 \u05E2\u05E0\u05E7 \u05E9\u05DC \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05DE\u05D1\u05E8\u05D9\u05E7\u05D5\u05EA.","\u05DE\u05E1\u05D9\u05DB\u05EA \u05E8\u05E9\u05EA 255.255.255.0 \u05D0\u05D5\u05DE\u05E8\u05EA: \u05E9\u05DC\u05D5\u05E9\u05EA \u05D4\u05D7\u05DC\u05E7\u05D9\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05DD \u05D4\u05DD \u05D4\u05E8\u05E9\u05EA, \u05D5\u05D4\u05D0\u05D7\u05E8\u05D5\u05DF \u05D4\u05D5\u05D0 \u05D4\u05DE\u05D0\u05E8\u05D7.","\u05D4\u05D9\u05D5\u05DD \u05D4\u05D0\u05DE\u05E0\u05EA\u05D9 \u05DC\u05D4\u05E4\u05E2\u05D9\u05DC \u05DC\u05D7\u05E9 \u05F4\u05D5\u05D9\u05D9\u05E0\u05D2\u05E8\u05D3\u05D9\u05D5\u05DD \u05DC\u05D5\u05D5\u05D9\u05D5\u05E1\u05D4\u05F4 \u05E2\u05DC \u05D3\u05DC\u05E2\u05EA. \u05D4\u05D9\u05D0 \u05E2\u05D3\u05D9\u05D9\u05DF \u05DE\u05E8\u05D7\u05E4\u05EA\u2026","\u05D0\u05D1\u05D0 \u05E9\u05DC\u05D9 \u05D0\u05D5\u05DE\u05E8 \u05E9\u05D1\u05DC\u05D9 \u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC, \u05D0\u05D9 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E6\u05D0\u05EA \u05DE\u05D4\u05E8\u05E9\u05EA \u05DC\u05E2\u05D5\u05DC\u05DD \u05D4\u05D2\u05D3\u05D5\u05DC.","\u05E9\u05DE\u05E2\u05EA\u05D9 \u05E9\u05DE\u05D9 \u05E9\u05DE\u05D2\u05D9\u05E2 \u05DC\u05DB\u05DC \u05D4\u05DE\u05D2\u05D3\u05DC\u05D9\u05DD \u05DE\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05DE\u05D8\u05D0\u05D8\u05D0 \u05D4\u05D6\u05D4\u05D5\u05D1!","\u05EA\u05D7\u05E4\u05E9\u05D5 \u05E2\u05E9\u05D1\u05D9 \u05E7\u05E1\u05DD \u05DC\u05D9\u05D3 \u05D4\u05D0\u05D2\u05DE\u05D9\u05DD \u2013 \u05D4\u05DD \u05E0\u05D4\u05D3\u05E8\u05D9\u05DD \u05DC\u05E9\u05D9\u05E7\u05D5\u05D9\u05D9\u05DD."];function i_(s,t="#ffffff"){let e=$o(s,{color:t,bg:"rgba(15,19,48,0.72)",font:"bold 60px Heebo, Arial, sans-serif",w:512,h:112},2.6);return e.position.y=2.6,e.visible=!1,e}var Ec=class{constructor(t){this.world=t,this.list=[],this.group=new It,t.scene.add(this.group),this.rng=Le(2024),this.populate()}make(t,e={}){let n=this.rng,i=Ce(zn),r=e.prof,o=xc({robe:e.robe||i.robe,accent:e.accent||i.accent,hat:e.hat||i.hat,skin:Ce(Go),hair:e.hair||Ce(Lp),hatStyle:r||n()<.5?"wizard":n()<.5?"cap":"none",beard:e.beard??n()<.12,longHair:n()<.35,scale:r?1.08:.92+n()*.18}),a=e.name||`${Ce(e_)} ${Ce(n_)}`,c=i_(a,r?"#ffe28a":"#ffffff");o.root.add(c),this.group.add(o.root);let l=n()*6.28,h=Math.sqrt(n())*t.r,d=e.x??t.x+Math.cos(l)*h,u=e.z??t.z+Math.sin(l)*h;o.root.position.set(d,Tt(d,u),u);let f={rig:o,tag:c,name:a,home:t,x:d,z:u,y:Tt(d,u),face:n()*6.28,tx:d,tz:u,wait:n()*4,speed:1.2+n()*1.1,fixed:!!e.fixed,prof:e.zone||null,talk:0,sprite:null,lines:e.lines};if(e.zone){let p=le("#ffd35c",1.4,1);p.position.y=3.3,o.root.add(p),f.marker=p}return o.root.rotation.y=f.face,this.list.push(f),f}populate(){let t=Wt("spawn"),e=Wt("castle"),n=Wt("autumn"),i=Wt("village3"),r=Wt("z6"),o=Wt("port"),a=(c,l,h)=>{for(let d=0;d<l;d++)this.make(c,h)};a({x:t.x,z:t.z,r:55},14),a({x:e.x,z:e.z+20,r:55},16),a({x:n.x,z:n.z,r:60},9),a({x:i.x,z:i.z,r:45},8),a({x:r.x,z:r.z,r:50},8),a({x:o.x,z:o.z,r:30},4),a({x:-780,z:240,r:40},4),a({x:280,z:830,r:30},2),a({x:170,z:-190,r:22},3),a({x:0,z:-420,r:24},4),We.forEach((c,l)=>{let h=this.world.zonePoints[c.id],d=h.x+4.5,u=h.z+2;this.make({x:d,z:u,r:1},{name:c.prof,prof:!0,zone:c.id,fixed:!0,x:d,z:u,beard:l%2===0,robe:c.color,accent:"#ffffff",hat:c.color,hair:"#d8d8e0"})})}nearest(t,e=4){let n=null,i=e*e;for(let r of this.list){let o=r.x-t.x,a=r.z-t.z,c=o*o+a*a;c<i&&Math.abs(r.y-t.y)<6&&(i=c,n=r)}return n}update(t,e,n){for(let i of this.list){let r=i.x-n.x,o=i.z-n.z,a=r*r+o*o,c=a<320*320;if(i.rig.root.visible=c,!c)continue;i.tag.visible=a<225&&(i.prof||a<121);let l=0;if(i.talk=Math.max(0,i.talk-t),i.talk>0){let h=Math.atan2(n.x-i.x,n.z-i.z);i.face=Pi(i.face,h,1-Math.exp(-6*t))}else if(!i.fixed)if(i.wait>0)i.wait-=t;else{let h=i.tx-i.x,d=i.tz-i.z,u=Math.hypot(h,d);if(u<.8){i.wait=1+Math.random()*5;for(let f=0;f<8;f++){let p=Math.random()*6.28,x=4+Math.random()*i.home.r,g=i.home.x+Math.cos(p)*x*.8,m=i.home.z+Math.sin(p)*x*.8;if(Tt(g,m)>1.5){i.tx=g,i.tz=m;break}}}else{l=i.speed;let f=i.x+h/u*l*t,p=i.z+d/u*l*t,x={x:f,z:p},g=Yn.resolve(x,.4,i.y),m=Math.hypot(x.x-i.x,x.z-i.z);Tt(x.x,x.z)<.6?(i.tx=i.x,i.tz=i.z):(i.x=x.x,i.z=x.z,i.face=Pi(i.face,Math.atan2(h,d),1-Math.exp(-8*t)),g&&m<l*t*.5&&(i.tx=i.x,i.tz=i.z,i.wait=.3))}}i.y=Tt(i.x,i.z),i.rig.root.position.set(i.x,i.y,i.z),i.rig.root.rotation.y=i.face,Wo(i.rig,t,l,{onGround:!0,talk:i.talk>0}),i.marker&&(i.marker.position.y=3.3+Math.sin(e*3)*.12)}}};var Ni=(s,t=!0)=>s.build({cast:t,receive:!1});function Wu(s="#fbfbff",t="#ff9ff0"){let e=new It,n=new Dt;n.box("flat",.9,1,2.2,{y:1.45,color:s}),n.box("flat",.55,.55,.95,{y:2.05,z:1.15,rx:-.7,color:s}),n.box("flat",.42,.45,.8,{y:2.55,z:1.6,rx:.2,color:s}),n.box("flat",.3,.3,.4,{y:2.45,z:2,color:"#f0e6ee"}),n.cone("flat",.08,.7,{y:3.1,z:1.66,rx:.25,color:"#ffe9a0"},8),n.box("flat",.12,.7,.35,{y:2.55,z:1.2,rx:-.5,color:t}),n.box("flat",.12,.5,.4,{y:2.2,z:.8,rx:-.2,color:t}),n.box("flat",.14,.9,.3,{y:1.5,z:-1.25,rx:.3,color:t}),n.sphere("flat",.05,{x:.2,y:2.62,z:1.85,color:"#2a1a40"},5,4),n.sphere("flat",.05,{x:-.2,y:2.62,z:1.85,color:"#2a1a40"},5,4),e.add(Ni(n));let i=[];for(let[o,a]of[[-.3,.85],[.3,.85],[-.3,-.85],[.3,-.85]]){let c=new Dt;c.cyl("flat",.1,.07,1,{y:-.5,color:s},6),c.box("flat",.14,.1,.16,{y:-1,z:.03,color:"#eadff0"});let l=new It;l.position.set(o,1,a),l.add(Ni(c)),e.add(l),i.push(l)}let r=le("#fff2b0",1.1,.9);return r.position.set(0,3.45,1.75),e.add(r),e.userData={legs:i,kind:"unicorn",glow:r},e}function Tc(){let s=new It,t=new Dt,e="#7f6a58",n="#9a8570";t.box("flat",.9,.95,1.7,{y:1.5,color:e}),t.box("flat",.7,.8,.6,{y:1.9,z:1,rx:-.4,color:"#e6e2da"}),t.sphere("flat",.38,{y:2.45,z:1.35,color:"#f0ece4"},8,6),t.cone("flat",.17,.55,{y:2.38,z:1.8,rx:Math.PI/2+.3,color:"#f2c24a"},6),t.sphere("flat",.06,{x:.22,y:2.55,z:1.55,color:"#1a1410"},5,4),t.sphere("flat",.06,{x:-.22,y:2.55,z:1.55,color:"#1a1410"},5,4),t.box("flat",.35,.3,1,{y:1.45,z:-1.2,rx:.4,color:n}),s.add(Ni(t));let i=[];for(let[o,a]of[[-.3,.6],[.3,.6],[-.3,-.6],[.3,-.6]]){let c=new Dt;c.cyl("flat",.1,.07,1,{y:-.5,color:e},6),c.box("flat",.14,.1,.18,{y:-1,z:.04,color:"#f2c24a"});let l=new It;l.position.set(o,1,a),l.add(Ni(c)),s.add(l),i.push(l)}let r=[];for(let o of[-1,1]){let a=new Dt;a.box("flat",2.6,.08,1.1,{x:o*1.3,color:n}),a.box("flat",1.8,.08,.9,{x:o*2.4,z:-.2,color:"#a89580"});let c=new It;c.position.set(o*.45,1.9,.1),c.add(Ni(a)),s.add(c),r.push(c)}return s.userData={legs:i,wings:r,kind:"hippogriff"},s}function s_(){let s=new It,t=new Dt;t.sphere("flat",.32,{y:0,sy:1.25,color:"#8a6a48"},8,6),t.sphere("flat",.24,{y:.14,z:.18,sy:1.1,color:"#e8dcc6"},8,6),t.sphere("flat",.22,{y:.45,z:.12,color:"#9a7a54"},8,6),t.sphere("flat",.08,{x:.1,y:.5,z:.3,color:"#ffd23a"},6,4),t.sphere("flat",.08,{x:-.1,y:.5,z:.3,color:"#ffd23a"},6,4),t.cone("flat",.05,.12,{y:.44,z:.36,rx:Math.PI/2,color:"#f2a33a"},4),t.cone("flat",.05,.2,{x:.12,y:.68,z:.1,color:"#8a6a48"},4),t.cone("flat",.05,.2,{x:-.12,y:.68,z:.1,color:"#8a6a48"},4),t.cone("flat",.2,.5,{y:-.2,z:-.4,rx:-Math.PI/2-.3,color:"#7a5a3a"},5),s.add(Ni(t,!1));let e=[];for(let n of[-1,1]){let i=new Dt;i.box("flat",.9,.04,.4,{x:n*.45,color:"#7a5a3a"}),i.box("flat",.5,.04,.3,{x:n*1,z:-.05,color:"#8a6a48"});let r=new It;r.position.set(n*.22,.1,0),r.add(Ni(i,!1)),s.add(r),e.push(r)}return s.userData={wings:e,kind:"owl"},s}function r_(){let s=new It,t="#8a1f2a",e="#5c1219",n="#e8b24a",i=new Dt;i.sphere("flat",3,{y:0,sz:2.4,color:t},12,8),i.sphere("flat",2.4,{y:.1,z:-6,sz:2.2,color:t},12,8),i.sphere("flat",2,{y:.3,z:-11,sz:2.4,color:e},10,8),i.cone("flat",1.3,8,{y:.3,z:-17,rx:-Math.PI/2,color:e},8),i.sphere("flat",2,{y:-.9,z:.2,sz:2.2,sx:.8,color:n},8,6),i.cyl("flat",1.1,1.6,6,{y:1.4,z:6,rx:-1,color:t},8),i.sphere("flat",1.5,{y:3.4,z:9.4,sz:1.3,color:t},10,8),i.box("flat",1.4,1,2.4,{y:3,z:11.2,color:e}),i.cone("flat",.35,2.6,{x:.8,y:5,z:8.4,rx:-.7,color:"#f0d9a0"},5),i.cone("flat",.35,2.6,{x:-.8,y:5,z:8.4,rx:-.7,color:"#f0d9a0"},5),i.sphere("glow",.3,{x:.8,y:3.8,z:10.2,color:"#ffe44a"},6,4),i.sphere("glow",.3,{x:-.8,y:3.8,z:10.2,color:"#ffe44a"},6,4);for(let c=0;c<7;c++)i.cone("flat",.5,1.4,{y:2.8-c*.05,z:4-c*3.2,color:"#f0d9a0"},4);for(let[c,l]of[[-2.2,2],[2.2,2],[-2,-6],[2,-6]])i.cyl("flat",.7,.5,3,{x:c,y:-2.4,z:l,color:e},6);s.add(Ni(i));let r=[],o=new hr;o.moveTo(0,0),o.lineTo(8,3),o.lineTo(15,.5),o.lineTo(12,-2),o.lineTo(14,-5),o.lineTo(8,-3.5),o.lineTo(5,-6),o.lineTo(2,-3.5),o.lineTo(0,-4);let a=new _o(o);a.rotateX(-Math.PI/2);for(let c of[-1,1]){let l=new Vt(a,new fe({color:"#a12a38",side:we,roughness:.7})),h=new It;h.position.set(c*1.5,2,0),l.scale.set(c,1,1),h.add(l),s.add(h),r.push(h)}return s.scale.setScalar(1.8),s.userData={wings:r,kind:"dragon"},s}function o_(){let s=new It,t=new Dt;t.sphere("glow",.5,{sz:1.4,color:"#ff8a2a"},8,6),t.sphere("glow",.32,{y:.35,z:.85,color:"#ffd23a"},8,6),t.cone("glow",.1,.4,{y:.32,z:1.2,rx:Math.PI/2,color:"#fff2a0"},5);for(let i=0;i<3;i++)t.cone("glow",.18,3+i,{x:(i-1)*.3,y:-.2,z:-2.3-i*.2,rx:-Math.PI/2+(i-1)*.15,color:["#ff4a1a","#ff8a2a","#ffd23a"][i]},5);s.add(t.build({cast:!1,receive:!1}));let e=[];for(let i of[-1,1]){let r=new Dt;r.box("glow",1.6,.05,.9,{x:i*.8,color:"#ff7a24"}),r.box("glow",1.2,.05,.7,{x:i*2,z:-.2,color:"#ffb83a"});let o=new It;o.position.set(i*.3,.1,0),o.add(r.build({cast:!1,receive:!1})),s.add(o),e.push(o)}let n=le("#ff7a24",7,.6);return s.add(n),s.scale.setScalar(1.3),s.userData={wings:e,kind:"phoenix"},s}function a_(){let s=new It,t=new Vt(new un(.22,12,10),new fe({color:"#ffd84a",emissive:"#ffb300",emissiveIntensity:1.2,metalness:.9,roughness:.2}));s.add(t);let e=[];for(let i of[-1,1]){let r=new Vt(new Qe(.8,.22),new Fe({color:"#fff6c0",transparent:!0,opacity:.8,side:we}));r.position.x=i*.5;let o=new It;o.position.set(i*.15,0,0),o.add(r),s.add(o),e.push(o)}let n=le("#ffd84a",2.4,.9);return s.add(n),s.userData={wings:e},s}var Ac=class{constructor(t){this.world=t,this.group=new It,t.scene.add(this.group),this.walkers=[],this.flyers=[];let e=Le(555),n=Wt("spawn"),i=(c,l,h,d,u={})=>{let f=e()*6.28,p=e()*d,x=l+Math.cos(f)*p,g=h+Math.sin(f)*p;c.position.set(x,Tt(x,g),g),this.group.add(c);let m={obj:c,x,z:g,tx:x,tz:g,face:e()*6.28,home:{x:l,z:h,r:d},wait:e()*3,phase:e()*10,speed:1.4+e()*1.2,...u};return this.walkers.push(m),m};for(let c=0;c<5;c++)i(Wu(),220,220,120);for(let c=0;c<4;c++)i(Wu("#f2eeff","#9ad7ff"),-700,120,150);for(let c=0;c<3;c++)i(Wu("#fff2f6","#ffd23a"),-380,560,80);for(let c=0;c<4;c++)i(Tc(),-150,-250,120);for(let c=0;c<3;c++)i(Tc(),880,-760,80);for(let c=0;c<3;c++)i(Tc(),-1e3,-950,100);[[n.x,n.z,60,28],[-150,-540,90,70],[1120,720,80,28],[520,330,60,30],[-640,-770,70,32],[-780,240,60,40],[170,-190,30,60],[640,-200,80,22]].forEach(([c,l,h,d])=>{for(let u=0;u<3;u++){let f=s_();this.group.add(f),this.flyers.push({obj:f,kind:"circle",cx:c,cz:l,r:h*(.6+e()*.6),h:d+e()*12,a:e()*6.28,w:(e()<.5?-1:1)*(.15+e()*.15),phase:e()*10,flap:7})}});let o=r_();this.group.add(o),this.dragon={obj:o,kind:"circle",cx:1060,cz:-1170,r:330,h:340,a:0,w:.06,phase:0,flap:2.2},this.flyers.push(this.dragon);let a=o_();this.group.add(a),this.phoenix={obj:a,kind:"circle",cx:-150,cz:-540,r:130,h:110,a:1,w:.22,phase:0,flap:5},this.flyers.push(this.phoenix);for(let c=0;c<3;c++){let l=Tc();this.group.add(l),this.flyers.push({obj:l,kind:"circle",cx:-300+c*400,cz:-700,r:180,h:120+c*30,a:c*2,w:.1,phase:c,flap:3.5,hip:!0})}this.boats=[];for(let c=0;c<3;c++){let l=new Dt;l.box("wood",2.2,.5,6,{y:.1,color:"#7a5330"}),l.box("wood",1.4,.5,2,{y:.1,z:3.6,color:"#7a5330"}),l.cyl("wood",.1,.1,6,{y:3,z:.4,color:"#5b3f26"},6),l.box("cloth",.08,4,3,{y:3.4,z:-.8,color:["#f4efe0","#b3262e","#2a5fc1"][c]});let h=Ni(l);this.group.add(h),this.boats.push({obj:h,a:c*2.1,r:230+c*50,phase:c})}this.snitch={obj:a_(),pos:new L(-480,60,-180),vel:new L(5,0,3),t:0,caught:0},this.group.add(this.snitch.obj),this.snitchTarget=new L}respawnSnitch(){let e=Ce([[-520,-190],[-150,-540],[0,0],[640,-200],[170,-190],[-640,-770]]);this.snitch.pos.set(e[0]+(Math.random()-.5)*100,40+Math.random()*40,e[1]+(Math.random()-.5)*100),this.snitch.caught=0,this.snitch.obj.visible=!0}update(t,e,n){for(let l of this.walkers){let h=l.x-n.x,d=l.z-n.z,u=h*h+d*d;if(l.obj.visible=u<380*380,!l.obj.visible)continue;let f=0,p=u<64;if(p){let m=Math.sqrt(u)||1;l.tx=l.x+h/m*12,l.tz=l.z+d/m*12,l.wait=0}if(l.wait>0)l.wait-=t;else{let m=l.tx-l.x,M=l.tz-l.z,b=Math.hypot(m,M);if(b<1){l.wait=2+Math.random()*6;let y=Math.random()*6.28,w=Math.random()*l.home.r,E=l.home.x+Math.cos(y)*w,R=l.home.z+Math.sin(y)*w;Tt(E,R)>1.5&&(l.tx=E,l.tz=R)}else{f=p?l.speed*3.2:l.speed;let y=l.x+m/b*f*t,w=l.z+M/b*f*t,E={x:y,z:w};Yn.resolve(E,.9,Tt(l.x,l.z)),Tt(E.x,E.z)<.6?(l.tx=l.x,l.tz=l.z):(l.x=E.x,l.z=E.z),l.face=Pi(l.face,Math.atan2(m,M),1-Math.exp(-5*t))}}let x=Tt(l.x,l.z);l.obj.position.set(l.x,x,l.z),l.obj.rotation.y=l.face,l.phase+=t*(f*2.2+.5);let g=l.obj.userData;if(g.legs){let m=Math.sin(l.phase*3)*Math.min(f*.35,.9);g.legs[0].rotation.x=m,g.legs[3].rotation.x=m,g.legs[1].rotation.x=-m,g.legs[2].rotation.x=-m}g.glow&&(g.glow.material.opacity=.7+Math.sin(e*3+l.phase)*.2),g.wings&&g.wings.forEach((m,M)=>{m.rotation.z=(M?1:-1)*.1})}for(let l of this.flyers){l.a+=l.w*t;let h=l.cx+Math.cos(l.a)*l.r,d=l.cz+Math.sin(l.a)*l.r,u=h-n.x,f=d-n.z,p=u*u+f*f>(l===this.dragon?2600:700)**2;if(l.obj.visible=!p,p)continue;let x=Tt(h,d),g=(l===this.dragon?l.h:x+l.h)+Math.sin(e*.7+l.phase)*3;l.obj.position.set(h,g,d);let m=-Math.sin(l.a)*Math.sign(l.w),M=Math.cos(l.a)*Math.sign(l.w);l.obj.rotation.y=Math.atan2(m,M),l.obj.rotation.z=-.25*Math.sign(l.w);let b=Math.sin(e*l.flap+l.phase)*.7,y=l.obj.userData.wings;y&&(y[0].rotation.z=-b,y[1].rotation.z=b),l===this.phoenix&&this.world.fx&&this.world.fx.emit(h,g,d,(Math.random()-.5)*2,-1,(Math.random()-.5)*2,"#ffa43a",1.6,1.6,{end:.1})}for(let l of this.boats){l.a+=t*.04;let h=640+Math.cos(l.a)*l.r,d=-200+Math.sin(l.a)*(l.r*.55);l.obj.position.set(h,-.05+Math.sin(e*1.6+l.phase)*.12,d),l.obj.rotation.y=Math.atan2(-Math.sin(l.a)*l.r,Math.cos(l.a)*l.r*.55)+0,l.obj.rotation.z=Math.sin(e*1.2+l.phase)*.04}let i=this.snitch;if(i.caught>0){i.caught-=t,i.caught<=0&&this.respawnSnitch();return}i.t-=t;let r=new L().subVectors(i.pos,n),o=r.length();i.t<=0&&(i.t=.6+Math.random()*1.2,i.vel.set((Math.random()-.5)*2,(Math.random()-.4)*1,(Math.random()-.5)*2).normalize(),o<90&&i.vel.addScaledVector(r.normalize(),1.4).normalize(),i.vel.multiplyScalar(o<90?34:14)),i.pos.addScaledVector(i.vel,t);let a=Tt(i.pos.x,i.pos.z);i.pos.y<a+6&&(i.pos.y=a+6),i.pos.y>140&&(i.vel.y=-Math.abs(i.vel.y)),Math.hypot(i.pos.x,i.pos.z)>1700&&i.vel.multiplyScalar(-1),i.obj.position.copy(i.pos),i.obj.rotation.y=Math.atan2(i.vel.x,i.vel.z);let c=Math.sin(e*60)*.9;i.obj.userData.wings[0].rotation.z=-c,i.obj.userData.wings[1].rotation.z=c,this.world.fx&&Math.random()<t*40&&this.world.fx.emit(i.pos.x,i.pos.y,i.pos.z,0,0,0,"#ffe27a",.6,.8,{end:.05}),i.obj.visible=o<600}};var Xu=900*1e3;function Cs(s,t=!0){return s.build({cast:t,receive:!0})}var Zn={herb:{name:"\u05E2\u05E9\u05D1 \u05E0\u05D5\u05E6\u05E5",icon:"\u{1F33F}",color:"#6dff8a"},mushroom:{name:"\u05E4\u05D8\u05E8\u05D9\u05D9\u05D4 \u05D6\u05D5\u05D4\u05E8\u05EA",icon:"\u{1F344}",color:"#7fe3ff"},crystal:{name:"\u05D2\u05D1\u05D9\u05E9 \u05D0\u05D5\u05E8",icon:"\u{1F48E}",color:"#c79bff"},flower:{name:"\u05E4\u05E8\u05D7 \u05D0\u05E9",icon:"\u{1F33A}",color:"#ff9a3a"}};function l_(s){let t=new Dt;if(s==="herb"){for(let e=0;e<5;e++){let n=e/5*6.28;t.cone("glow",.12,.7,{x:Math.cos(n)*.14,z:Math.sin(n)*.14,y:.35,rz:Math.cos(n)*.3,rx:-Math.sin(n)*.3,color:"#7bff8a"},4)}t.sphere("glow",.12,{y:.78,color:"#e6ffb0"},6,4)}else if(s==="mushroom")t.cyl("glow",.07,.1,.4,{y:.2,color:"#e9f6ff"},6),t.sphere("glow",.3,{y:.45,sy:.6,color:"#59d8ff"},8,6),t.sphere("glow",.09,{x:.12,y:.62,color:"#ffffff"},5,4);else if(s==="crystal")for(let e=0;e<4;e++){let n=e/4*6.28+.4;t.cone("glow",.14,.9+e%2*.35,{x:Math.cos(n)*.14,z:Math.sin(n)*.14,y:.5,rz:Math.cos(n)*.25,rx:-Math.sin(n)*.25,color:e%2?"#b57bff":"#e0c0ff"},5)}else{for(let e=0;e<6;e++){let n=e/6*6.28;t.sphere("glow",.13,{x:Math.cos(n)*.17,z:Math.sin(n)*.17,y:.55,sy:.6,color:"#ff7a24"},5,4)}t.sphere("glow",.12,{y:.56,color:"#ffe05a"},5,4),t.cyl("glow",.02,.03,.5,{y:.25,color:"#9aff8a"},4)}return t}var Rc=class{constructor(t){this.world=t,this.group=new It,t.scene.add(this.group),this.items=[],this.meshes={};let e=Le(8080),n=["herb","mushroom","crystal","flower"],i={herb:80,mushroom:80,crystal:55,flower:60};for(let o of n){let a=0,c=0;for(;a<i[o]&&c++<3e4;){let l=e()*6.28,h=Math.sqrt(e())*2e3,d=Math.cos(l)*h,u=Math.sin(l)*h,f=Tt(d,u);if(f<2.5||En.some(g=>Math.hypot(d-g.x,u-g.z)<g.r*.8)||Ho(d,u,f)>.8||ko(d,u)<3)continue;let p=Es(d,u);(o==="herb"?p<.45&&f<70:o==="mushroom"?p>.4||ss(d,u)>.3||ns(d,u)>.3:o==="crystal"?f>70:is(d,u)>.15||f>25&&f<110&&p<.4)&&(this.items.push({id:`${o}${a}`,type:o,x:d,y:f,z:u,sc:.9+e()*.5,phase:e()*10,hidden:!1}),a++)}}let r=new Se;for(let o of n){let a=this.items.filter(h=>h.type===o),c=Cs(l_(o),!1).children[0],l=new pi(c.geometry,c.material,a.length);l.frustumCulled=!1,a.forEach((h,d)=>{h.k=d,r.position.set(h.x,h.y,h.z),r.rotation.set(0,h.phase,0),r.scale.setScalar(h.sc*1.6),r.updateMatrix(),l.setMatrixAt(d,r.matrix)}),l.instanceMatrix.needsUpdate=!0,this.group.add(l),this.meshes[o]=l}this.dummy=r,this.grid=new Map;for(let o of this.items){let a=Math.floor(o.x/64)+","+Math.floor(o.z/64);(this.grid.get(a)||this.grid.set(a,[]).get(a)).push(o)}this.applyFound(),this.glow=le("#ffffff",1.5,.7)}applyFound(){let t=Date.now();for(let e of this.items){let n=st.found[e.id],i=n&&t-n<Xu;this.setHidden(e,!!i)}}setHidden(t,e){t.hidden=e;let n=this.meshes[t.type];this.dummy.position.set(t.x,t.y,t.z),this.dummy.rotation.set(0,t.phase,0),this.dummy.scale.setScalar(e?1e-4:t.sc*1.6),this.dummy.updateMatrix(),n.setMatrixAt(t.k,this.dummy.matrix),n.instanceMatrix.needsUpdate=!0}update(t,e,n,i){let r=Math.floor(n.x/64),o=Math.floor(n.z/64);for(let a=r-1;a<=r+1;a++)for(let c=o-1;c<=o+1;c++){let l=this.grid.get(a+","+c);if(l)for(let h of l){if(h.hidden){st.found[h.id]&&Date.now()-st.found[h.id]>Xu&&this.setHidden(h,!1);continue}let d=h.x-n.x,u=h.z-n.z,f=d*d+u*u;f<2.4*2.4&&Math.abs(h.y-n.y)<3.5?(st.found[h.id]=Date.now(),this.setHidden(h,!0),st.ingredients[h.type]++,Ee(),at("collect"),i.onCollect?.(h),this.world.fx.burst(h.x,h.y+.6,h.z,Zn[h.type].color,22,3,.8,1,{gravity:2})):f<900&&Math.random()<t*.5&&this.world.fx.emit(h.x+(Math.random()-.5),h.y+.5,h.z+(Math.random()-.5),0,1.2,0,Zn[h.type].color,.5,1.5,{end:.05})}}}},c_={crate:()=>{let s=new Dt;s.box("wood",1.1,1.1,1.1,{y:.55,color:"#9a7040"});for(let t of[-1,1])s.box("wood",1.14,.1,1.14,{y:.55+t*.5,color:"#5b3f26"});return s},barrel:()=>{let s=new Dt;s.cyl("wood",.5,.5,1.1,{y:.55,color:"#8a5a30"},12);for(let t of[.2,.9])s.cyl("metal",.52,.52,.08,{y:t,color:"#3a3a44"},12);return s},pumpkin:()=>{let s=new Dt;return s.sphere("flat",.55,{y:.45,sy:.8,color:"#ff8a1a"},12,8),s.cyl("flat",.06,.09,.25,{y:.95,color:"#4a7a2a"},5),s}},Cc=class{constructor(t){this.world=t,this.group=new It,t.scene.add(this.group),this.list=[];let e=Le(31337),n=(i,r,o,a=["crate","barrel","pumpkin"])=>{let c=Wt(i);for(let l=0;l<r;l++){let h=e()*6.28,d=8+e()*o;this.add(Ce(a),c.x+Math.cos(h)*d,c.z+Math.sin(h)*d)}};n("spawn",16,50),n("castle",10,55,["crate","barrel"]),n("autumn",12,60,["pumpkin","pumpkin","crate"]),n("village3",8,40),n("z6",8,50,["crate","barrel"]),n("pitch",6,40,["crate"]),n("port",8,35,["barrel","crate"]),n("z1",5,24),n("z3",6,36,["pumpkin"])}add(t,e,n,i){let r=this.cache||(this.cache={}),a=(r[t]||(r[t]=Cs(c_[t]()))).clone(),c=Tt(e,n);a.position.set(e,i??c,n),a.rotation.y=Math.random()*6.28,this.group.add(a);let l={kind:t,mesh:a,pos:a.position,vel:new L,spin:new L,float:0,accio:!1,rest:!0,r:t==="barrel"?.55:.6};return this.list.push(l),l}pick(t,e,n=55){let i=null,r=1e9,o=new L;for(let a of this.list){o.copy(a.pos).sub(t);let c=o.dot(e);if(c<1||c>n)continue;o.addScaledVector(e,-c).length()<1.8+c*.04&&c<r&&(r=c,i=a)}return i}impulse(t,e){t.vel.add(e),t.rest=!1,t.spin.set((Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6)}update(t,e,n){for(let i of this.list){let r=i.pos.x-n.x,o=i.pos.z-n.z,a=r*r+o*o<48400;if(i.mesh.visible=a,!a||i.rest&&i.float<=0&&!i.accio)continue;let c=Math.max(Tt(i.pos.x,i.pos.z),-.2);if(i.accio){let l=n.x-i.pos.x,h=n.y+1-i.pos.y,d=n.z-i.pos.z,u=Math.hypot(l,h,d);u<2.2?(i.accio=!1,i.vel.set(0,2,0)):i.vel.set(l/u*26,h/u*26,d/u*26)}else if(i.float>0){i.float-=t;let l=i.floatBase+5+Math.sin(e*2+i.pos.x)*.5;i.vel.y+=(l-i.pos.y)*4*t-i.vel.y*2*t,i.vel.x*=.96,i.vel.z*=.96,i.mesh.rotation.y+=t*1.2,Math.random()<t*14&&this.world.fx.emit(i.pos.x,i.pos.y,i.pos.z,0,-.4,0,"#bfe9ff",.4,.8,{end:.05})}else i.vel.y-=22*t;i.pos.addScaledVector(i.vel,t),!i.float&&!i.accio&&(i.mesh.rotation.x+=i.spin.x*t,i.mesh.rotation.z+=i.spin.z*t),i.pos.y<=c&&(i.pos.y=c,i.vel.y<-3?(i.vel.y*=-.3,i.vel.x*=.7,i.vel.z*=.7,i.spin.multiplyScalar(.5)):(i.vel.set(0,0,0),i.spin.set(0,0,0),i.mesh.rotation.x*=.5,i.mesh.rotation.z*=.5,i.float<=0&&(i.rest=!0)),i.vel.x*=.9,i.vel.z*=.9,Math.hypot(i.vel.x,i.vel.z)<.1&&Math.abs(i.vel.y)<.5&&(i.rest=!0,i.mesh.rotation.x=0,i.mesh.rotation.z=0))}}},Ic=class{constructor(t){this.world=t,this.group=new It,t.scene.add(this.group),this.list=[],[["castle",0,62,5],["castle",-30,58,5],["castle",30,58,5],["pitch",0,20,4],["pitch",15,24,3],["spawn",20,22,4],["spawn",-22,18,3],["autumn",10,20,3]].forEach(([n,i,r])=>{let o=Wt(n);this.add(o.x+i,o.z+r)})}add(t,e){let n=new Dt;n.cyl("wood",.1,.12,2,{y:1,color:"#6b4a2c"},6),n.cyl("flat",.35,.45,1.1,{y:1.5,color:"#d9b45a"},10),n.sphere("flat",.3,{y:2.3,color:"#e8c872"},8,6),n.cone("flat",.4,.5,{y:2.8,color:"#6a3f8a"},8),n.box("wood",1.4,.12,.1,{y:1.8,color:"#6b4a2c"}),n.cyl("flat",.35,.35,.05,{y:1.5,z:.4,rx:Math.PI/2,color:"#d33a2f"},12),n.cyl("flat",.18,.18,.06,{y:1.5,z:.41,rx:Math.PI/2,color:"#ffffff"},12);let i=Cs(n),r=Tt(t,e);i.position.set(t,r,e),i.rotation.y=Math.PI*Math.random(),this.group.add(i),this.list.push({mesh:i,x:t,y:r,z:e,wobble:0,cool:0})}hit(t,e,n,i=1.4){let r=new L;for(let o of this.list){r.set(o.x-t.x,o.y+1.6-t.y,o.z-t.z);let a=r.dot(e);if(!(a<0||a>n)&&r.addScaledVector(e,-a).length()<i)return o}return null}update(t,e,n){for(let i of this.list)i.mesh.visible=(i.x-n.x)**2+(i.z-n.z)**2<62500,i.wobble>0?(i.wobble-=t,i.mesh.rotation.z=Math.sin(i.wobble*20)*i.wobble*.5):i.mesh.rotation.z=0,i.cool=Math.max(0,i.cool-t)}},Pc=class{constructor(t){this.world=t,this.list=[];let e=new It;t.scene.add(e),this.group=e;let n=(a,c)=>{let l=new Dt;l.cyl("metal",.1,.15,1.6,{y:.8,color:"#2b2a33"},6),l.cyl("metal",.5,.25,.45,{y:1.75,color:"#3a3a44"},10);let h=Cs(l),d=Tt(a,c);h.position.set(a,d,c),e.add(h);let u=le("#ff9a3a",3.4);u.position.set(a,d+2.3,c),u.visible=!1,e.add(u);let f=le("#ffe28a",1.8);f.position.copy(u.position),f.visible=!1,e.add(f),this.list.push({x:a,y:d+2.1,z:c,fl:u,fl2:f,ignited:!1,lit:!1})},i=Wt("castle");for(let a of[-14,14,-26,26])n(i.x+a,i.z+60);for(let a of[-10,10])n(i.x+a,i.z+120);let r=Wt("spawn");for(let a=0;a<6;a++){let c=a/6*6.28;n(r.x+Math.cos(c)*28,r.z+Math.sin(c)*28)}for(let a of["autumn","village3","z6","port"]){let c=Wt(a);for(let l=0;l<3;l++){let h=l/3*6.28+1;n(c.x+Math.cos(h)*20,c.z+Math.sin(h)*20)}}let o=Wt("pitch");for(let a of[-30,30])n(o.x+a,o.z+70)}ignite(t,e,n){let i=new L,r=!1;for(let o of this.list){i.set(o.x-t.x,o.y-t.y,o.z-t.z);let a=i.dot(e);a<0||a>n||i.addScaledVector(e,-a).length()<2.6&&(o.ignited=!0,r=!0)}return r}update(t,e,n,i){for(let r of this.list){let o=(r.x-n.x)**2+(r.z-n.z)**2<67600,a=r.ignited||i>.45;if(r.lit=a,r.fl.visible=r.fl2.visible=a&&o,a&&o){let c=3.4+Math.sin(e*12+r.x)*.5;r.fl.scale.setScalar(c),r.fl2.scale.setScalar(c*.5),Math.random()<t*14&&this.world.fx.emit(r.x+(Math.random()-.5)*.3,r.y+.2,r.z+(Math.random()-.5)*.3,0,1.8,0,"#ffb23a",.5,1.2,{end:.04})}}}},Lc=class{constructor(t){this.world=t,this.list=[];let e=new It;t.scene.add(e),[["spawn",6,-8],["castle",-20,52],["autumn",-8,12],["village3",8,10],["z6",-26,14],["z3",8,14],["port",6,8]].forEach(([i,r,o])=>{let a=Wt(i),c=a.x+r,l=a.z+o,h=Tt(c,l),d=new Dt;d.sphere("metal",.9,{y:.9,sy:.85,color:"#26242e"},14,10),d.cyl("metal",.82,.82,.1,{y:1.55,color:"#26242e"},14);for(let x of[0,2.1,4.2])d.cyl("metal",.1,.07,.5,{x:Math.cos(x)*.6,z:Math.sin(x)*.6,y:.25,color:"#1a1a22"},5);d.cyl("glow",.78,.78,.04,{y:1.55,color:"#7dff9a"},14);let u=Cs(d);u.position.set(c,h,l),e.add(u);let f=le("#ff8a2a",2);f.position.set(c,h+.35,l),e.add(f);let p=le("#7dff9a",3);p.position.set(c,h+1.7,l),e.add(p),this.list.push({x:c,y:h,z:l,fl:f,gl:p})}),this.group=e}nearest(t,e=4.2){for(let n of this.list)if((n.x-t.x)**2+(n.z-t.z)**2<e*e&&Math.abs(n.y-t.y)<3)return n;return null}update(t,e,n){for(let i of this.list){let r=(i.x-n.x)**2+(i.z-n.z)**2<3600;i.fl.visible=i.gl.visible=r,r&&(i.fl.scale.setScalar(2+Math.sin(e*10+i.x)*.4),i.gl.scale.setScalar(3+Math.sin(e*3+i.x)*.4),Math.random()<t*5&&this.world.fx.emit(i.x+(Math.random()-.5)*.8,i.y+1.6,i.z+(Math.random()-.5)*.8,0,1.4,0,"#8dffa8",.45,1.6,{end:.05}))}}},Dc=class{constructor(t){this.world=t,this.group=new It,t.scene.add(this.group),this.list=[];let e=Le(4242),i=[["ruins",8,0],["stones",0,6],["pitch",56,40],["port",12,-10],["village3",-30,20],["autumn",40,-30],["z4",14,16],["z5",-14,18]].map(([o,a,c])=>{let l=Wt(o);return[l.x+a,l.z+c]}),r=0;for(;i.length<26&&r++<5e3;){let o=e()*6.28,a=Math.sqrt(e())*1900,c=Math.cos(o)*a,l=Math.sin(o)*a,h=Tt(c,l);h<3||Ho(c,l,h)>.5||En.some(d=>Math.hypot(c-d.x,l-d.z)<d.r)||i.push([c,l])}i.forEach(([o,a],c)=>{let l=Tt(o,a),h=new Dt;h.box("wood",1.3,.7,.85,{y:.35,color:"#7a4f2a"}),h.box("metal",1.34,.12,.9,{y:.15,color:"#e2b84a"}),h.box("metal",.2,.3,.1,{y:.55,z:.44,color:"#e2b84a"});let d=Cs(h),u=new Dt;u.cyl("wood",.425,.425,1.3,{rz:Math.PI/2,z:0,y:0,color:"#8a5a30",sy:1},10),u.box("metal",1.34,.1,.1,{y:0,z:.4,color:"#e2b84a"});let f=Cs(u),p=new It;p.position.set(0,.7,-.42),f.position.set(0,0,.42),f.scale.y=.6,p.add(f);let x=new It;x.add(d,p),x.position.set(o,l,a),x.rotation.y=e()*6.28,this.group.add(x);let g=le("#ffd35c",2.2,.8);g.position.set(o,l+1.1,a),this.group.add(g),this.list.push({id:"chest"+c,x:o,y:l,z:a,g:x,piv:p,gl:g,open:0,opened:!1})}),this.apply()}apply(){let t=Date.now();for(let e of this.list){let n=st.found[e.id];e.opened=!!n&&t-n<Xu*2,e.piv.rotation.x=e.opened?-1.6:0,e.gl.visible=!e.opened}}nearest(t,e=3.4){for(let n of this.list)if(!n.opened&&(n.x-t.x)**2+(n.z-t.z)**2<e*e&&Math.abs(n.y-t.y)<3)return n;return null}open(t){t.opened=!0,st.found[t.id]=Date.now();let e=[];for(let n=0;n<3;n++){let i=Ce(["herb","mushroom","crystal","flower"]);st.ingredients[i]++,e.push(i)}return Rs(15,"\u05EA\u05D9\u05D1\u05EA \u05D0\u05D5\u05E6\u05E8"),Ee(),at("magic"),this.world.fx.burst(t.x,t.y+1,t.z,"#ffd35c",50,5,1,1.4,{gravity:3}),e}update(t,e,n){for(let i of this.list){let r=(i.x-n.x)**2+(i.z-n.z)**2<62500;i.g.visible=r,i.gl.visible=r&&!i.opened,i.opened&&i.piv.rotation.x>-1.6&&(i.piv.rotation.x-=t*4),!i.opened&&r&&(i.gl.material.opacity=.6+Math.sin(e*3+i.x)*.25)}}},Nc=class{constructor(t){this.world=t,this.group=new It,t.scene.add(this.group);let e=[[-520,-190,28],[-420,-360,60],[-250,-560,100],[-110,-420,70],[30,-300,50],[170,-190,80],[340,-260,50],[520,-360,45],[640,-200,60],[560,-40,45],[300,100,42],[60,160,34],[-300,20,40],[-520,-190,22]];this.rings=e.map(([n,i,r],o)=>{let a=Math.max(Tt(n,i),0)+r,c=new Vt(new ni(6,.45,10,36),new Fe({color:o===0?"#ffd35c":"#4de1ff",toneMapped:!1,transparent:!0,opacity:.9}));c.position.set(n,a,i);let l=e[(o+1)%e.length],h=e[(o+e.length-1)%e.length];c.rotation.y=Math.atan2(l[0]-h[0],l[1]-h[1])+Math.PI/2,this.group.add(c);let d=le(o===0?"#ffd35c":"#4de1ff",16,.35);return d.position.copy(c.position),this.group.add(d),{m:c,gl:d,pos:c.position,x:n,y:a,z:i}}),this.active=!1,this.next=0,this.time=0,this.ahead=0}update(t,e,n,i,r){for(let d=0;d<this.rings.length;d++){let u=this.rings[d],p=(u.x-n.x)**2+(u.z-n.z)**2<900*900;u.m.visible=u.gl.visible=p;let x=this.active?d===this.next:d===0,g=x?1.12+Math.sin(e*5)*.08:.9;u.m.scale.setScalar(g),u.m.material.color.set(x?"#ffd35c":this.active&&d<this.next?"#3ddc97":"#4de1ff"),u.gl.material.color.copy(u.m.material.color),u.gl.material.opacity=x?.5:.18}if(this.active&&(this.time+=t,r.onTime?.(this.time,this.next,this.rings.length)),i!=="broom"){this.active&&this.time>3&&this.stop(!1,r);return}let o=this.active?this.next:0,a=this.rings[o],c=a.x-n.x,l=a.y-n.y,h=a.z-n.z;c*c+l*l+h*h<7.5*7.5&&(this.active?(this.next++,at("coin"),r.onRing?.(this.next,this.rings.length),this.next>=this.rings.length&&this.stop(!0,r)):(this.active=!0,this.next=1,this.time=0,r.onStart?.()),this.world.fx.burst(a.x,a.y,a.z,"#ffd35c",40,8,1.2,1,{}))}stop(t,e){let n=this.time;this.active=!1,this.next=0,e.onEnd?.(t,n)}};var mn=[{id:"lumos",key:1,name:"\u05DC\u05D5\u05DE\u05D5\u05E1",en:"Lumos",need:0,mana:0,color:"#fff6c0",icon:"\u{1F4A1}",desc:"\u05DE\u05D3\u05DC\u05D9\u05E7 \u05D5\u05DE\u05DB\u05D1\u05D4 \u05D0\u05D5\u05E8 \u05D1\u05E7\u05E6\u05D4 \u05D4\u05E9\u05E8\u05D1\u05D9\u05D8."},{id:"leviosa",key:2,name:"\u05D5\u05D9\u05D9\u05E0\u05D2\u05E8\u05D3\u05D9\u05D5\u05DD \u05DC\u05D1\u05D9\u05D5\u05E1\u05D4",en:"Wingardium Leviosa",need:0,mana:10,color:"#9ad7ff",icon:"\u{1FAB6}",desc:"\u05DE\u05E8\u05D7\u05D9\u05E3 \u05D7\u05E4\u05E6\u05D9\u05DD \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u2013 \u05D7\u05D1\u05D9\u05D5\u05EA, \u05D0\u05E8\u05D2\u05D6\u05D9\u05DD \u05D5\u05D3\u05DC\u05D5\u05E2\u05D9\u05DD."},{id:"incendio",key:3,name:"\u05D0\u05D9\u05E0\u05E1\u05E0\u05D3\u05D9\u05D5",en:"Incendio",need:0,mana:14,color:"#ff8a2a",icon:"\u{1F525}",desc:"\u05DB\u05D3\u05D5\u05E8 \u05D0\u05E9: \u05DE\u05D3\u05DC\u05D9\u05E7 \u05D0\u05D1\u05D5\u05E7\u05D5\u05EA \u05D5\u05E4\u05D5\u05D2\u05E2 \u05D1\u05DE\u05D8\u05E8\u05D5\u05EA."},{id:"stupefy",key:4,name:"\u05E1\u05D8\u05D5\u05E4\u05E4\u05D9\u05D9",en:"Stupefy",need:1,mana:10,color:"#ff4a6a",icon:"\u26A1",desc:"\u05E7\u05E8\u05DF \u05D0\u05D3\u05D5\u05DE\u05D4 \u05E9\u05DE\u05E4\u05D9\u05DC\u05D4 \u05DE\u05D8\u05E8\u05D5\u05EA \u05D5\u05D3\u05D5\u05D7\u05E4\u05EA \u05D7\u05E4\u05E6\u05D9\u05DD."},{id:"protego",key:5,name:"\u05E4\u05E8\u05D5\u05D8\u05D2\u05D5",en:"Protego",need:2,mana:25,color:"#7fd0ff",icon:"\u{1F6E1}\uFE0F",desc:"\u05DE\u05D2\u05DF \u05E7\u05E1\u05DE\u05D9\u05DD \u05D6\u05D5\u05D4\u05E8 \u05E9\u05DE\u05E7\u05D9\u05E3 \u05D0\u05D5\u05EA\u05DA."},{id:"expelliarmus",key:6,name:"\u05D0\u05E7\u05E1\u05E4\u05DC\u05D9\u05DE\u05D9\u05D5\u05E1",en:"Expelliarmus",need:3,mana:16,color:"#ff7ad9",icon:"\u{1F4A5}",desc:"\u05D2\u05DC \u05D4\u05D3\u05E3 \u05D7\u05D6\u05E7 \u05E9\u05DE\u05E2\u05D9\u05E3 \u05D7\u05E4\u05E6\u05D9\u05DD \u05E7\u05D3\u05D9\u05DE\u05D4."},{id:"accio",key:7,name:"\u05D0\u05E7\u05E1\u05D9\u05D5",en:"Accio",need:4,mana:12,color:"#b6ff86",icon:"\u{1F9F2}",desc:"\u05DE\u05D5\u05E9\u05DA \u05D7\u05E4\u05E6\u05D9\u05DD (\u05D5\u05D0\u05EA \u05D4\u05E1\u05E0\u05D9\u05E5\u05F3 \u05D4\u05D6\u05D4\u05D5\u05D1!) \u05D0\u05DC\u05D9\u05DA."},{id:"patronus",key:8,name:"\u05D0\u05E7\u05E1\u05E4\u05E7\u05D8\u05D5 \u05E4\u05D8\u05E8\u05D5\u05E0\u05D5\u05DD",en:"Expecto Patronum",need:5,mana:40,color:"#bfe9ff",icon:"\u{1F98C}",desc:"\u05DE\u05D6\u05DE\u05DF \u05D0\u05D9\u05D9\u05DC \u05DB\u05E1\u05D5\u05E3 \u05D6\u05D5\u05D4\u05E8 \u05E9\u05DE\u05DC\u05D5\u05D5\u05D4 \u05D5\u05DE\u05D0\u05D9\u05E8 \u05D0\u05D5\u05EA\u05DA."}],pn=new L;function h_(){let s=new Dt,t="#dff4ff";s.box("glow",.7,.8,1.9,{y:1.5,color:t}),s.box("glow",.4,.4,.9,{y:2.2,z:1.1,rx:-.6,color:t}),s.box("glow",.35,.35,.7,{y:2.7,z:1.5,color:t});for(let r of[-1,1])s.cyl("glow",.03,.04,.9,{x:r*.15,y:3.2,z:1.3,rz:r*-.4,color:"#ffffff"},4),s.cyl("glow",.025,.03,.6,{x:r*.4,y:3.5,z:1.35,rz:r*-.9,color:"#ffffff"},4),s.cyl("glow",.02,.03,.5,{x:r*.3,y:3.5,z:1.1,rz:r*-.2,rx:.6,color:"#ffffff"},4);let e=s.build({cast:!1,receive:!1}),n=[];for(let[r,o]of[[-.25,.7],[.25,.7],[-.25,-.7],[.25,-.7]]){let a=new Dt;a.cyl("glow",.07,.05,1.1,{y:-.55,color:t},5);let c=a.build({cast:!1,receive:!1}),l=new It;l.position.set(r,1.15,o),l.add(c),e.add(l),n.push(l)}let i=le("#bfe9ff",6,.7);return i.position.y=1.8,e.add(i),e.userData.legs=n,e}var Uc=class{constructor(t,e,n){this.world=t,this.player=e,this.game=n,this.selected=0,this.cool=0,this.lumos=!1,this.projectiles=[],this.light=new Eo("#fff2c0",0,45,1.6),t.scene.add(this.light),this.tipGlow=le("#ffffff",.5,0),t.scene.add(this.tipGlow),this.shieldMesh=new Vt(new un(2.4,24,16),new Oe({transparent:!0,depthWrite:!1,side:we,blending:gi,uniforms:{uTime:{value:0},uA:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(normalMatrix*normal); vP = position; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; }",fragmentShader:`varying vec3 vN; varying vec3 vP; uniform float uTime,uA;
          void main(){ float f = pow(1.0-abs(vN.z),2.2); float hex = 0.5+0.5*sin(vP.x*9.0+uTime*2.)*sin(vP.y*9.0-uTime*1.5)*sin(vP.z*9.0);
          gl_FragColor = vec4(vec3(0.4,0.8,1.0)*(0.4+f*1.6+hex*0.35), (0.12+f*0.65)*uA); }`})),this.shieldMesh.visible=!1,t.scene.add(this.shieldMesh),this.waves=[],this.stags=[],this.stagProto=h_()}unlocked(t){return os()>=mn[t].need}select(t){if(!(t<0||t>=mn.length)){if(!this.unlocked(t)){this.game.hooks.toast(`\u{1F512} \u05D4\u05DC\u05D7\u05E9 \u05F4${mn[t].name}\u05F4 \u05E0\u05E4\u05EA\u05D7 \u05D0\u05D7\u05E8\u05D9 ${mn[t].need} \u05D0\u05D6\u05D5\u05E8\u05D9 \u05DC\u05D9\u05DE\u05D5\u05D3`,"warn");return}this.selected=t,at("click"),this.game.hooks.onSpellSelect?.(t)}}cycle(){for(let t=1;t<=mn.length;t++){let e=(this.selected+t)%mn.length;if(this.unlocked(e)){this.select(e);return}}}aimPoint(t=130){let e=this.player,n=e.camera,i=e.aimDir(new L),r=n.position.clone(),o=r.clone().addScaledVector(i,e.dist*.9),a=null;for(let c=4;c<t;c+=2.5)if(pn.copy(o).addScaledVector(i,c),pn.y<Tt(pn.x,pn.z)+.2){a=pn.clone();break}return{origin:r,start:o,dir:i,point:a||o.clone().addScaledVector(i,t)}}cast(){if(this.cool>0||this.player.frozen)return!1;let t=mn[this.selected],e=this.player;if(t.id==="lumos")return this.lumos=!this.lumos,at("magic"),this.cool=.25,e.castT=.25,!0;if(e.mana<t.mana)return this.game.hooks.toast("\u05D0\u05D9\u05DF \u05DE\u05E1\u05E4\u05D9\u05E7 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D9\u05EA \u05E7\u05E1\u05DD\u2026 \u05D4\u05DE\u05EA\u05DF \u05DC\u05D4\u05EA\u05D7\u05D3\u05E9\u05D5\u05EA","warn"),this.cool=.4,!1;e.mana-=t.mana,e.castT=.45,this.cool=t.id==="patronus"?1.2:.4;let n=this.aimPoint(),i=Lu(e.rig,new L),r=n.point.clone().sub(i).normalize();switch(t.id){case"leviosa":this.castLeviosa(n,i,t);break;case"accio":this.castAccio(n,i,t);break;case"incendio":case"stupefy":this.shoot(t,i,r);break;case"protego":this.castProtego();break;case"expelliarmus":this.castExpel(n,i,t);break;case"patronus":this.castPatronus();break}return!0}shoot(t,e,n){at("cast");let i=le(t.color,1.4,1),r=le(t.color,3.2,.5);i.position.copy(e),r.position.copy(e),this.world.scene.add(i,r),this.projectiles.push({sp:t,core:i,halo:r,pos:e.clone(),vel:n.clone().multiplyScalar(t.id==="incendio"?55:85),life:1.8})}castLeviosa(t,e,n){let r=this.game.items.movables.pick(t.start,t.dir,60);at("magic"),this.beam(e,r?r.pos:t.point,n.color),r?(r.float=9,r.floatBase=Math.max(Tt(r.pos.x,r.pos.z),r.pos.y),r.rest=!1,r.vel.set(0,3,0),this.world.fx.burst(r.pos.x,r.pos.y+.5,r.pos.z,n.color,25,2.5,.7,1.2,{})):this.game.hooks.toast("\u05DB\u05D5\u05D5\u05DF \u05DC\u05D0\u05E8\u05D2\u05D6, \u05D7\u05D1\u05D9\u05EA \u05D0\u05D5 \u05D3\u05DC\u05E2\u05EA \u2728")}castAccio(t,e,n){let r=this.game.items.movables.pick(t.start,t.dir,70);at("magic");let o=this.game.creatures.snitch,a=o.pos.clone().sub(t.start),c=a.dot(t.dir);if(o.caught<=0&&c>0&&c<90&&a.addScaledVector(t.dir,-c).length()<6+c*.06){this.catchSnitch(),this.beam(e,o.pos,n.color);return}this.beam(e,r?r.pos:t.point,n.color),r?(r.accio=!0,r.float=0,r.rest=!1):this.game.hooks.toast("\u05D0\u05D9\u05DF \u05D7\u05E4\u05E5 \u05D1\u05DB\u05D9\u05D5\u05D5\u05DF \u05D4\u05D6\u05D4")}catchSnitch(){let t=this.game.creatures.snitch;t.caught>0||(t.caught=12,t.obj.visible=!1,st.snitch++,Rs(50,"\u05D4\u05E1\u05E0\u05D9\u05E5\u05F3 \u05D4\u05D6\u05D4\u05D5\u05D1"),at("levelup"),this.world.fx.burst(t.pos.x,t.pos.y,t.pos.z,"#ffd84a",80,9,1.2,1.4,{}),this.game.hooks.toast("\u{1F3C6} \u05EA\u05E4\u05E1\u05EA \u05D0\u05EA \u05D4\u05E1\u05E0\u05D9\u05E5\u05F3 \u05D4\u05D6\u05D4\u05D5\u05D1! +50 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA","good"))}castProtego(){at("magic"),this.player.shield=7}castExpel(t,e,n){at("boom");let i=this.player,r=t.dir.clone();this.waves.push({pos:e.clone(),dir:r,r:1,mesh:this.ringMesh(n.color,e,r)});for(let o of this.game.items.movables.list){pn.copy(o.pos).sub(i.pos);let a=pn.length();a<26&&pn.normalize().dot(r)>.45&&(o.float=0,this.game.items.movables.impulse(o,r.clone().multiplyScalar(26-a*.5).add(new L(0,9,0))))}for(let o of this.game.items.targets.list)pn.set(o.x-i.pos.x,0,o.z-i.pos.z),pn.length()<22&&pn.normalize().dot(new L(r.x,0,r.z).normalize())>.4&&this.hitTarget(o)}ringMesh(t,e,n){let i=new Vt(new ni(1,.08,8,32),new Fe({color:t,transparent:!0,opacity:.9,toneMapped:!1}));return i.position.copy(e),i.lookAt(e.clone().add(n)),this.world.scene.add(i),i}beam(t,e,n){for(let r=0;r<18;r++){let o=r/18;pn.copy(t).lerp(e,o),this.world.fx.emit(pn.x,pn.y,pn.z,Math.random()-.5,Math.random()-.5,Math.random()-.5,n,.55,.5,{end:.05})}}castPatronus(){at("levelup");let t=this.stagProto.clone(!0);t.userData.legs=t.children.filter(e=>e.isGroup),this.world.scene.add(t),this.stags.push({obj:t,a:this.player.facing,life:14,phase:0}),this.game.hooks.toast("\u{1F98C} \u05D4\u05E4\u05D8\u05E8\u05D5\u05E0\u05D5\u05E1 \u05E9\u05DC\u05DA \u05E0\u05D5\u05DC\u05D3!","good")}hitTarget(t){return t.cool>0?!1:(t.wobble=1.2,t.cool=.8,Rs(3,"\u05DE\u05D8\u05E8\u05D4"),this.world.fx.burst(t.x,t.y+2,t.z,"#ffd35c",25,4,.8,1,{gravity:2}),at("coin"),!0)}explode(t,e){let n=t.sp;if(at("boom"),this.world.fx.burst(e.x,e.y,e.z,n.color,55,9,1.3,1,{gravity:1,drag:1}),this.world.fx.burst(e.x,e.y,e.z,"#ffffff",14,6,.8,.5,{}),n.id==="incendio")for(let r of this.game.items.braziers.list)(r.x-e.x)**2+(r.y-e.y)**2+(r.z-e.z)**2<25&&(r.ignited||this.game.hooks.toast("\u{1F525} \u05D4\u05D0\u05D1\u05D5\u05E7\u05D4 \u05E0\u05D3\u05DC\u05E7\u05D4!","good"),r.ignited=!0);for(let r of this.game.items.targets.list)(r.x-e.x)**2+(r.y+1.6-e.y)**2+(r.z-e.z)**2<3.2*3.2&&this.hitTarget(r);for(let r of this.game.items.movables.list)r.pos.distanceTo(e)<3.2&&(r.float=0,this.game.items.movables.impulse(r,t.vel.clone().normalize().multiplyScalar(n.id==="stupefy"?18:10).add(new L(0,5,0))));let i=this.game.creatures.snitch;i.caught<=0&&i.pos.distanceTo(e)<5&&this.catchSnitch()}update(t,e){this.cool=Math.max(0,this.cool-t);let n=this.player,i=Lu(n.rig,pn),r=this.lumos?14:0;this.light.intensity+=(r-this.light.intensity)*Math.min(1,t*8),this.light.position.copy(i),this.tipGlow.position.copy(i),this.tipGlow.material.opacity=this.lumos||n.castT>0?.9:0,this.tipGlow.scale.setScalar(this.lumos?.9+Math.sin(e*9)*.05:.5),n.rig.tipGlow.material.color.set(this.lumos?"#fff6c0":"#9ad7ff"),this.lumos&&this.world.atmo.night<.02&&Math.random()<t*.02&&(this.lumos=!1);for(let a=this.projectiles.length-1;a>=0;a--){let c=this.projectiles[a];c.life-=t;let l=c.vel.clone().multiplyScalar(t);c.pos.add(l),c.core.position.copy(c.pos),c.halo.position.copy(c.pos),c.halo.scale.setScalar(3.2+Math.sin(e*30)*.4),this.world.fx.emit(c.pos.x,c.pos.y,c.pos.z,(Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2,c.sp.color,.9,.5,{end:.05});let h=!1;if(c.pos.y<Tt(c.pos.x,c.pos.z)+.2&&(h=!0),!h){let d=c.vel.clone().normalize();this.game.items.targets.hit(c.pos.clone().addScaledVector(d,-l.length()),d,l.length()+1.5,1.5)&&(h=!0);for(let p of this.game.items.movables.list)if(p.pos.distanceToSquared(c.pos)<1.4){h=!0;break}let f=this.game.creatures.snitch;f.caught<=0&&f.pos.distanceToSquared(c.pos)<4&&(h=!0);for(let p of this.game.items.braziers.list)p.x*0+(p.x-c.pos.x)**2+(p.y-c.pos.y)**2+(p.z-c.pos.z)**2<2.2&&(h=!0)}(h||c.life<=0)&&(h&&this.explode(c,c.pos),this.world.scene.remove(c.core,c.halo),c.core.material.dispose(),c.halo.material.dispose(),this.projectiles.splice(a,1))}for(let a=this.waves.length-1;a>=0;a--){let c=this.waves[a];c.r+=t*40,c.pos.addScaledVector(c.dir,t*22),c.mesh.position.copy(c.pos),c.mesh.scale.setScalar(c.r),c.mesh.material.opacity=Math.max(0,.9-c.r/24),c.r>24&&(this.world.scene.remove(c.mesh),c.mesh.geometry.dispose(),c.mesh.material.dispose(),this.waves.splice(a,1))}let o=this.shieldMesh;o.visible=n.shield>0,o.visible&&(o.position.set(n.pos.x,n.pos.y+1,n.pos.z),o.material.uniforms.uTime.value=e,o.material.uniforms.uA.value=Math.min(1,n.shield*1.5)*(.85+Math.sin(e*10)*.1));for(let a=this.stags.length-1;a>=0;a--){let c=this.stags[a];c.life-=t,c.a+=t*.9,c.phase+=t*9;let l=6+Math.sin(c.a*.7)*1.5,h=n.pos.x+Math.cos(c.a)*l,d=n.pos.z+Math.sin(c.a)*l,u=Math.max(Tt(h,d),n.pos.y-3);c.obj.position.set(h,u,d),c.obj.rotation.y=Math.atan2(-Math.sin(c.a),Math.cos(c.a));let f=Math.sin(c.phase)*.7;c.obj.userData.legs?.forEach((p,x)=>p.rotation.x=x%3===0?f:-f),this.world.fx.emit(h,u+1.6,d,0,.2,0,"#bfe9ff",1,1.4,{end:.05}),c.life<=0&&(this.world.scene.remove(c.obj),this.stags.splice(a,1))}}};var Ir=[{id:"speed",name:"\u05E9\u05D9\u05E7\u05D5\u05D9 \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA",icon:"\u26A1",color:"#ff5a7a",recipe:{flower:2,herb:1},dur:60,desc:"\u05E8\u05D9\u05E6\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4 \u05E4\u05D9 1.6 \u05DC\u05DE\u05E9\u05DA \u05D3\u05E7\u05D4."},{id:"jump",name:"\u05E9\u05D9\u05E7\u05D5\u05D9 \u05E7\u05DC\u05D9\u05DC\u05D5\u05EA",icon:"\u{1FAB6}",color:"#9ad7ff",recipe:{herb:2,mushroom:1},dur:60,desc:"\u05E7\u05E4\u05D9\u05E6\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D5\u05EA \u05D5\u05E0\u05D7\u05D9\u05EA\u05D4 \u05E8\u05DB\u05D4 \u05DB\u05DE\u05D5 \u05E0\u05D5\u05E6\u05D4."},{id:"night",name:"\u05E9\u05D9\u05E7\u05D5\u05D9 \u05E8\u05D0\u05D9\u05D9\u05EA \u05DC\u05D9\u05DC\u05D4",icon:"\u{1F319}",color:"#7fe3ff",recipe:{mushroom:2,crystal:1},dur:120,desc:"\u05D4\u05DC\u05D9\u05DC\u05D4 \u05E0\u05E2\u05E9\u05D4 \u05D1\u05D4\u05D9\u05E8 \u05D5\u05D1\u05E8\u05D5\u05E8."},{id:"flight",name:"\u05E9\u05D9\u05E7\u05D5\u05D9 \u05DE\u05D8\u05D0\u05D8\u05D0-\u05E2\u05DC",icon:"\u{1F680}",color:"#ff9a3a",recipe:{crystal:2,flower:1},dur:60,desc:"\u05D4\u05DE\u05D8\u05D0\u05D8\u05D0 \u05E9\u05DC\u05DA \u05E2\u05E3 \u05DE\u05D4\u05E8 \u05D9\u05D5\u05EA\u05E8 \u05D1-50%."},{id:"luck",name:"\u05E9\u05D9\u05E7\u05D5\u05D9 \u05D4\u05DE\u05D6\u05DC",icon:"\u{1F340}",color:"#ffd35c",recipe:{herb:1,mushroom:1,crystal:1,flower:1},dur:300,desc:"+10% \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05E2\u05DC \u05DB\u05DC \u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4 \u05D1\u05DE\u05E9\u05DA 5 \u05D3\u05E7\u05D5\u05EA."}],zc=class{constructor(t,e){this.player=t,this.world=e,this.active={}}canBrew(t){let e=Ir.find(n=>n.id===t);return Object.entries(e.recipe).every(([n,i])=>st.ingredients[n]>=i)}brew(t){if(!this.canBrew(t))return!1;let e=Ir.find(n=>n.id===t);for(let[n,i]of Object.entries(e.recipe))st.ingredients[n]-=i;return st.potions[t]++,Ee(),at("potion"),!0}drink(t){if(st.potions[t]<=0)return!1;st.potions[t]--;let e=Ir.find(i=>i.id===t);this.active[t]=e.dur,t==="luck"&&Yp(e.dur*1e3),Ee(),at("magic");let n=this.player;return this.world.fx.burst(n.pos.x,n.pos.y+1.2,n.pos.z,e.color,60,5,1,1.4,{gravity:-1}),!0}update(t){let e=this.player.mods;e.speed=1,e.jump=1,e.flight=1,e.float=!1;let n=0;for(let i in this.active){if(this.active[i]-=t,this.active[i]<=0){delete this.active[i];continue}i==="speed"&&(e.speed=1.6),i==="jump"&&(e.jump=1.5,e.float=!0),i==="flight"&&(e.flight=1.5),i==="night"&&(n=1)}this.world.atmo.vision=n}};var as=2300,_i=480,Fc=class{constructor(t){this.game=t,this.hud=_n("#hud"),this.overlayOpen=0,this.menuOpen=!1,this.dialogue=null,this.waypoint=null,this.scoreShown=0,this.buildHud(),Wp("score",(e,n)=>{this.toast(`+${e} \u2728 ${n||""}`,"good",2200),this.scorePulse=1})}async buildMap(t){let e=document.createElement("canvas");e.width=e.height=_i;let n=e.getContext("2d"),i=n.createImageData(_i,_i),r=new ot;for(let o=0;o<_i;o++){for(let a=0;a<_i;a++){let c=(a/(_i-1)-.5)*2*as,l=(o/(_i-1)-.5)*2*as,h=Tt(c,l),d,u,f;if(h<-.2){let x=Ue(-h/10,0,1);d=40-x*20,u=120-x*50,f=190-x*40}else{Ru(c,l,h,.15,r);let x=.8+Ue(h/300,0,.5);r.multiplyScalar(x),d=r.r*255,u=r.g*255,f=r.b*255,d=Math.pow(r.r,1/2.2)*255,u=Math.pow(r.g,1/2.2)*255,f=Math.pow(r.b,1/2.2)*255}let p=(o*_i+a)*4;i.data[p]=d,i.data[p+1]=u,i.data[p+2]=f,i.data[p+3]=255}o%40===0&&(t&&t(o/_i),await new Promise(a=>setTimeout(a,0)))}n.putImageData(i,0,0),this.mapCanvas=e}worldToMap(t,e,n){return[(t/(as*2)+.5)*n,(e/(as*2)+.5)*n]}buildHud(){let t=this.hud;t.innerHTML="",this.el={},this.el.compass=v("div",{class:"compass"},v("div",{class:"compass-track"})),this.el.badge=v("div",{class:"badge"},v("div",{class:"badge-crest"}),v("div",{class:"badge-info"},v("div",{class:"badge-name"}),v("div",{class:"badge-row"},v("span",{class:"badge-score"},"\u2728 ",v("b",{},"0")),v("span",{class:"badge-level"})),v("div",{class:"badge-stars"}))),this.el.mini=v("div",{class:"minimap"},v("canvas",{width:220,height:220}),v("div",{class:"mini-n"},"\u05E6"),v("div",{class:"mini-time"})),this.miniCtx=this.el.mini.querySelector("canvas").getContext("2d"),this.el.cross=v("div",{class:"crosshair"}),this.el.prompt=v("div",{class:"prompt hidden"}),this.el.spells=v("div",{class:"spellbar"}),mn.forEach((e,n)=>{let i=v("div",{class:"slot",dataset:{i:n},onclick:()=>this.game.spells.select(n),title:`${e.name} \u2013 ${e.desc}`},v("span",{class:"slot-key"},n+1),v("span",{class:"slot-icon"},e.icon),v("span",{class:"slot-cd"}));this.el.spells.append(i)}),this.el.spellName=v("div",{class:"spell-name"}),this.el.mana=v("div",{class:"mana"},v("div",{class:"mana-fill"}),v("span",{},"\u05E7\u05E1\u05DD")),this.el.status=v("div",{class:"status"}),this.el.ingredients=v("div",{class:"ingr"}),this.el.race=v("div",{class:"race hidden"}),this.el.hint=v("div",{class:"hint"}),this.el.sys=v("div",{class:"sysbtns"},v("button",{onclick:()=>this.openMenu("map"),title:"\u05DE\u05E4\u05D4 (M)"},"\u{1F5FA}\uFE0F"),v("button",{onclick:()=>this.openMenu("journal"),title:"\u05D9\u05D5\u05DE\u05DF (J)"},"\u{1F4D6}"),v("button",{onclick:()=>this.openMenu("potions"),title:"\u05E9\u05D9\u05E7\u05D5\u05D9\u05D9\u05DD (P)"},"\u{1F9EA}"),v("button",{onclick:()=>this.openMenu("settings"),title:"\u05EA\u05E4\u05E8\u05D9\u05D8 (Esc)"},"\u2699\uFE0F")),t.append(this.el.compass,this.el.badge,this.el.mini,this.el.cross,this.el.prompt,this.el.spellName,this.el.spells,this.el.mana,this.el.status,this.el.ingredients,this.el.race,this.el.hint,this.el.sys),this.el.spellFill=this.el.mana.querySelector(".mana-fill"),this.zoneMarks=[],We.forEach(e=>{let n=v("div",{class:"cmark",style:{"--c":e.color}},e.icon,v("small",{}));this.el.compass.querySelector(".compass-track").append(n),this.zoneMarks.push({z:e,el:n})}),this.cardinals=["\u05E6","\u05DE\u05D6","\u05D3","\u05DE\u05E2"].map((e,n)=>{let i=v("div",{class:"ccard"},e);return this.el.compass.querySelector(".compass-track").append(i),{ang:[0,90,180,270][n],el:i}}),this.refreshBadge(),this.updateHint()}updateHint(){this.el.hint.innerHTML=Oo()?"":"<b>WASD</b> \u05EA\u05E0\u05D5\u05E2\u05D4 \xB7 <b>\u05E2\u05DB\u05D1\u05E8</b> \u05DE\u05D1\u05D8 \xB7 <b>\u05E7\u05DC\u05D9\u05E7</b> \u05DC\u05D7\u05E9 \xB7 <b>1-8</b> \u05D1\u05D7\u05D9\u05E8\u05D4 \xB7 <b>B</b> \u05DE\u05D8\u05D0\u05D8\u05D0 \xB7 <b>E</b> \u05D0\u05D9\u05E0\u05D8\u05E8\u05D0\u05E7\u05E6\u05D9\u05D4 \xB7 <b>M</b> \u05DE\u05E4\u05D4 \xB7 <b>Esc</b> \u05EA\u05E4\u05E8\u05D9\u05D8"}refreshBadge(){let t=zn[st.house]||zn[1],e=this.el.badge;e.style.setProperty("--house",t.robe),e.style.setProperty("--accent",t.accent),e.querySelector(".badge-name").textContent=st.name;let n=Zo(),i=e.querySelector(".badge-level");i.textContent=`${n.icon} ${n.name} \xD7${n.mult}`,i.style.setProperty("--c",n.color);let r=Hu();e.querySelector(".badge-stars").innerHTML="\u2605".repeat(r)+"<span>"+"\u2605".repeat(21-r)+"</span>",e.querySelector(".badge-stars").title=`${r} \u05DE\u05EA\u05D5\u05DA 21 \u05DB\u05D5\u05DB\u05D1\u05D9\u05DD`}toast(t,e="info",n=3200){let i=_n("#toasts"),r=v("div",{class:"toast "+e},t);for(i.append(r);i.children.length>5;)i.firstChild.remove();setTimeout(()=>r.classList.add("out"),n),setTimeout(()=>r.remove(),n+500)}prompt(t){let e=this.el.prompt;t?(e.dataset.t!==t&&(e.innerHTML=t,e.dataset.t=t),e.classList.remove("hidden")):(e.classList.add("hidden"),e.dataset.t="")}say(t,e,n={}){this.closeDialogue();let i=v("div",{class:"dialogue"},v("div",{class:"dlg-name"},t),v("div",{class:"dlg-text"},e),v("div",{class:"dlg-actions"},...(n.actions||[]).map(r=>v("button",{class:"btn "+(r.cls||""),onclick:()=>{this.closeDialogue(),r.fn()}},r.label)),v("button",{class:"btn ghost",onclick:()=>this.closeDialogue()},n.close||"\u05E1\u05D2\u05D5\u05E8 (E)")));document.body.append(i),this.dialogue=i,at("click"),clearTimeout(this.dlgTimer),this.dlgTimer=setTimeout(()=>{this.dialogue===i&&!n.actions&&this.closeDialogue()},n.ms||9e3)}closeDialogue(){this.dialogue&&(this.dialogue.remove(),this.dialogue=null)}update(t,e){let n=this.game,i=n.player,r=st.score;this.scoreShown+=(r-this.scoreShown)*Math.min(1,t*6),Math.abs(r-this.scoreShown)<.6&&(this.scoreShown=r);let o=this.el.badge.querySelector(".badge-score b");o.textContent=vi(this.scoreShown),this.scorePulse>0&&(this.scorePulse-=t*2,o.style.transform=`scale(${1+Math.max(0,this.scorePulse)*.35})`),this.el.spellFill.style.width=Ue(i.mana,0,100)+"%",this.el.spellFill.classList.toggle("low",i.mana<20),this.el.spells.querySelectorAll(".slot").forEach((f,p)=>{let x=!n.spells.unlocked(p);f.classList.toggle("locked",x),f.classList.toggle("sel",p===n.spells.selected),p===0&&f.classList.toggle("on",n.spells.lumos)});let a=mn[n.spells.selected];this.el.spellName.dataset.i!==String(n.spells.selected)&&(this.el.spellName.dataset.i=n.spells.selected,this.el.spellName.innerHTML=`<b>${a.name}</b><small>${a.en}</small>`);let c=Object.keys(n.potions.active),l=c.map(f=>f+Math.ceil(n.potions.active[f]/5)).join(",")+Object.values(st.ingredients).join("-");this._skey!==l&&(this._skey=l,this.el.status.innerHTML=c.map(f=>{let p=Ir.find(x=>x.id===f);return`<span class="eff" style="--c:${p.color}">${p.icon}<i>${Math.ceil(n.potions.active[f])}</i></span>`}).join(""),this.el.ingredients.innerHTML=Object.keys(Zn).map(f=>`<span title="${Zn[f].name}">${Zn[f].icon}<b>${st.ingredients[f]}</b></span>`).join("")),this.updateCompass(i),(this.mmT=(this.mmT||0)+t)>.05&&(this.mmT=0,this.drawMini(i));let h=n.world.atmo.hour,d=Math.floor(h),u=Math.floor((h-d)*60);this.el.mini.querySelector(".mini-time").textContent=`${h>=5&&h<19?"\u2600\uFE0F":"\u{1F319}"} ${String(d).padStart(2,"0")}:${String(u).padStart(2,"0")}`}updateCompass(t){let e=(-t.yaw*180/Math.PI+360)%360,n=this.el.compass.clientWidth||520,i=130,r=(a,c,l=!0)=>{let h=(c-e+540)%360-180,d=l&&Math.abs(h)<i/2;a.style.display=d?"":"none",a.style.left=n/2+h/i*n+"px",a.style.opacity=d?String(1-Math.abs(h)/(i/2)*.6):"0"};this.cardinals.forEach(a=>r(a.el,a.ang));let o=this.game.world.zonePoints;this.zoneMarks.forEach(({z:a,el:c})=>{let l=o[a.id],h=l.x-t.pos.x,d=l.z-t.pos.z,u=(Math.atan2(h,-d)*180/Math.PI+360)%360;r(c,u);let f=Math.hypot(h,d);c.querySelector("small").textContent=f>1e3?(f/1e3).toFixed(1)+"\u05E7\u05F4\u05DE":Math.round(f)+"\u05DE\u05F3",c.classList.toggle("done",st.zones[a.id].done),c.classList.toggle("wp",this.waypoint===a.id)})}drawMini(t){let e=this.miniCtx,n=220;if(e.clearRect(0,0,n,n),!this.mapCanvas)return;e.save(),e.beginPath(),e.arc(n/2,n/2,n/2-2,0,7),e.clip();let i=1.5,r=_i/(as*2);e.translate(n/2,n/2),e.rotate(t.yaw);let o=this.mapCanvas.width*i*1.6,[a,c]=this.worldToMap(t.pos.x,t.pos.z,o);e.drawImage(this.mapCanvas,-a,-c,o,o);let l=o/(as*2);for(let d of We){let u=this.game.world.zonePoints[d.id],f=(u.x-t.pos.x)*l,p=(u.z-t.pos.z)*l;Math.hypot(f,p)>n/2+10||(e.fillStyle=d.color,e.beginPath(),e.arc(f,p,7,0,7),e.fill(),e.strokeStyle="#fff",e.lineWidth=2,e.stroke())}e.restore(),e.save(),e.translate(n/2,n/2),e.fillStyle="#fff",e.strokeStyle="#1a1f55",e.lineWidth=2,e.beginPath(),e.moveTo(0,-9),e.lineTo(7,8),e.lineTo(0,4),e.lineTo(-7,8),e.closePath(),e.fill(),e.stroke(),e.restore();let h=this.el.mini.querySelector(".mini-n");h.style.transform=`rotate(${t.yaw}rad) translateY(-96px) rotate(${-t.yaw}rad)`}get blocking(){return this.menuOpen||this.overlayOpen>0||this.titleOpen}openMenu(t="journal"){this.overlayOpen>0||this.titleOpen||(Cr(),this.menuOpen=!0,this.menuTab=t,Yo(),this.game.player.frozen=!0,this.closeDialogue(),this.renderMenu(),at("click"))}closeMenu(){this.menuOpen=!1;let t=_n("#menu");t.classList.add("hidden"),t.innerHTML="",this.game.player.frozen=!1,Ee(),this.refreshBadge()}renderMenu(){let t=_n("#menu");t.classList.remove("hidden");let e=[["map","\u{1F5FA}\uFE0F","\u05DE\u05E4\u05D4"],["journal","\u{1F4D6}","\u05D9\u05D5\u05DE\u05DF \u05D0\u05D6\u05D5\u05E8\u05D9\u05DD"],["spells","\u2728","\u05DC\u05D7\u05E9\u05D9\u05DD"],["brooms","\u{1F9F9}","\u05DE\u05D8\u05D0\u05D8\u05D0\u05D9\u05DD"],["potions","\u{1F9EA}","\u05E9\u05D9\u05E7\u05D5\u05D9\u05D9\u05DD"],["settings","\u2699\uFE0F","\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA"],["help","\u2753","\u05E2\u05D6\u05E8\u05D4"]],n=v("div",{class:"book-body"});t.innerHTML="",t.append(v("div",{class:"book"},v("div",{class:"book-tabs"},...e.map(([r,o,a])=>v("button",{class:"tab"+(r===this.menuTab?" on":""),onclick:()=>{this.menuTab=r,at("click"),this.renderMenu()}},v("span",{},o),a)),v("button",{class:"tab close",onclick:()=>this.closeMenu()},"\u2715")),n)),{map:this.tabMap,journal:this.tabJournal,spells:this.tabSpells,brooms:this.tabBrooms,potions:this.tabPotions,settings:this.tabSettings,help:this.tabHelp}[this.menuTab].call(this,n)}tabMap(t){let e=Math.min(innerHeight-190,innerWidth-60,760),n=v("canvas",{width:e,height:e,class:"bigmap"}),i=n.getContext("2d"),r=()=>{i.clearRect(0,0,e,e),i.drawImage(this.mapCanvas,0,0,e,e);let o=(d,u,f,p,x=8)=>{let[g,m]=this.worldToMap(d,u,e);i.fillStyle=p,i.strokeStyle="#fff",i.lineWidth=2.5,i.beginPath(),i.arc(g,m,x,0,7),i.fill(),i.stroke(),f&&(i.font="bold 14px Heebo, sans-serif",i.textAlign="center",i.lineWidth=4,i.strokeStyle="rgba(10,12,40,.9)",i.strokeText(f,g,m-x-6),i.fillStyle="#fff",i.fillText(f,g,m-x-6))};for(let d of We){let u=this.game.world.zonePoints[d.id];o(u.x,u.z,`${d.icon} ${d.name}`,d.color,this.waypoint===d.id?11:8)}let a=Wt("castle");o(a.x,a.z,"\u{1F3F0} \u05D8\u05D9\u05E8\u05EA \u05D4\u05E7\u05D5\u05E1\u05DE\u05D9\u05DD","#c9a64a",6),o(0,0,"\u{1F3E1} \u05DB\u05E4\u05E8 \u05D4\u05DC\u05D5\u05DE\u05D3\u05D9\u05DD","#fff",6);let c=this.game.player,[l,h]=this.worldToMap(c.pos.x,c.pos.z,e);i.save(),i.translate(l,h),i.rotate(-c.yaw+Math.PI),i.fillStyle="#ff3a5c",i.strokeStyle="#fff",i.lineWidth=2,i.beginPath(),i.moveTo(0,11),i.lineTo(8,-9),i.lineTo(0,-4),i.lineTo(-8,-9),i.closePath(),i.fill(),i.stroke(),i.restore(),i.strokeStyle="rgba(255,255,255,0.5)",i.lineWidth=3,i.strokeRect(1,1,e-2,e-2)};r(),n.addEventListener("click",o=>{let a=n.getBoundingClientRect(),c=((o.clientX-a.left)/a.width-.5)*2*as,l=((o.clientY-a.top)/a.height-.5)*2*as,h=null,d=1e9;for(let u of We){let f=this.game.world.zonePoints[u.id],p=Math.hypot(f.x-c,f.z-l);p<d&&(d=p,h=u)}h&&d<220&&(this.waypoint=h.id,at("click"),this.toast(`\u{1F4CD} \u05D9\u05E2\u05D3: ${h.name}`),r())}),t.append(v("div",{class:"maptab"},n,v("div",{class:"maplegend"},v("h3",{},"\u05DE\u05E4\u05EA \u05D4\u05DE\u05DE\u05DC\u05DB\u05D4"),v("p",{},"\u05DC\u05D7\u05E5 \u05E2\u05DC \u05D0\u05D6\u05D5\u05E8 \u05D1\u05DE\u05E4\u05D4 \u05DB\u05D3\u05D9 \u05DC\u05E1\u05DE\u05DF \u05D0\u05D5\u05EA\u05D5 \u05D1\u05DE\u05E6\u05E4\u05DF."),...We.map(o=>v("div",{class:"legend-row",onclick:()=>{this.waypoint=o.id,r(),at("click")}},v("i",{style:{background:o.color}}),v("span",{},`${o.icon} ${o.name}`),st.zones[o.id].done?v("em",{},"\u2714"):null)))))}tabJournal(t){let e=Zo(),n=os();t.append(v("div",{class:"journal"},v("div",{class:"jr-head"},v("div",{class:"jr-stat"},v("b",{},vi(st.score)),"\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA"),v("div",{class:"jr-stat"},v("b",{},`${n}/7`),"\u05D0\u05D6\u05D5\u05E8\u05D9\u05DD"),v("div",{class:"jr-stat"},v("b",{},`${Hu()}/21`),"\u05DB\u05D5\u05DB\u05D1\u05D9\u05DD"),v("div",{class:"jr-stat"},v("b",{},st.snitch),"\u05E1\u05E0\u05D9\u05E6\u05F3\u05D9\u05DD")),v("div",{class:"jr-grid"},...We.map(i=>{let r=st.zones[i.id];return v("div",{class:"zone-card"+(r.done?" done":""),style:{"--c":i.color}},v("div",{class:"zc-icon"},i.icon),v("div",{class:"zc-main"},v("div",{class:"zc-title"},`${i.n}. ${i.name}`),v("div",{class:"zc-topic"},i.topic),v("div",{class:"zc-game"},"\u{1F3AE} ",i.game),v("div",{class:"zc-stars"},"\u2605".repeat(r.stars),v("span",{},"\u2605".repeat(3-r.stars)),r.best?v("em",{},` \u05E9\u05D9\u05D0: ${vi(r.best)}`):null)),v("div",{class:"zc-actions"},v("button",{class:"btn small",onclick:()=>{this.waypoint=i.id,this.toast(`\u{1F4CD} \u05D9\u05E2\u05D3: ${i.name}`),at("click")}},"\u{1F4CD} \u05E1\u05DE\u05DF"),r.visited?v("button",{class:"btn small gold",onclick:()=>{this.closeMenu(),this.game.fastTravel(i.id)}},"\u2728 \u05D8\u05DC\u05E4\u05D5\u05E8\u05D8"):v("span",{class:"zc-lock"},"\u05D8\u05E8\u05DD \u05D2\u05D9\u05DC\u05D9\u05EA")))}))))}tabSpells(t){t.append(v("div",{class:"spell-grid"},...mn.map((e,n)=>{let i=this.game.spells.unlocked(n);return v("div",{class:"spell-card"+(i?"":" locked")+(n===this.game.spells.selected?" sel":""),style:{"--c":e.color},onclick:()=>{this.game.spells.select(n),this.renderMenu()}},v("div",{class:"sc-icon"},i?e.icon:"\u{1F512}"),v("div",{class:"sc-info"},v("b",{},e.name),v("small",{},e.en),v("p",{},e.desc),v("div",{class:"sc-meta"},`\u05DE\u05E7\u05E9 ${e.key}`,e.mana?` \xB7 ${e.mana} \u05E7\u05E1\u05DD`:" \xB7 \u05D7\u05D9\u05E0\u05DD",i?"":` \xB7 \u05E0\u05E4\u05EA\u05D7 \u05D0\u05D7\u05E8\u05D9 ${e.need} \u05D0\u05D6\u05D5\u05E8\u05D9\u05DD`)))})))}tabBrooms(t){let e=os();t.append(v("div",{class:"broom-list"},...Ts.map(n=>{let i=e>=n.need,r=st.broom===n.id;return v("div",{class:"broom-card"+(i?"":" locked")+(r?" sel":""),style:{"--c":n.trail}},v("div",{class:"bc-art"},v("i",{style:{background:n.color}}),v("em",{style:{background:`linear-gradient(90deg, transparent, ${n.bristle})`}})),v("div",{class:"bc-info"},v("b",{},n.name),v("p",{},n.desc),v("div",{class:"bc-bar"},v("span",{style:{width:n.speed/104*100+"%"}})),v("small",{},`\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA ${n.speed} \u05DE\u05F3/\u05E9\u05F3`,i?"":` \xB7 \u05E0\u05E4\u05EA\u05D7 \u05D0\u05D7\u05E8\u05D9 ${n.need} \u05D0\u05D6\u05D5\u05E8\u05D9 \u05DC\u05D9\u05DE\u05D5\u05D3`)),v("button",{class:"btn small "+(r?"gold":""),disabled:!i,onclick:()=>{this.game.player.setBroom(n.id),Ee(),at("click"),this.renderMenu()}},r?"\u05E0\u05D1\u05D7\u05E8 \u2714":i?"\u05D1\u05D7\u05E8":"\u{1F512}"))})))}tabPotions(t){let e=this.game,n=e.items.cauldrons.nearest(e.player.pos,6);t.append(v("div",{class:"potions"},v("div",{class:"ingr-row"},...Object.entries(Zn).map(([i,r])=>v("div",{class:"ingr-card",style:{"--c":r.color}},v("span",{},r.icon),v("b",{},st.ingredients[i]),v("small",{},r.name)))),v("div",{class:"cauldron-note "+(n?"ok":"")},n?"\u{1FAD5} \u05D0\u05EA\u05D4 \u05DC\u05D9\u05D3 \u05E7\u05DC\u05D7\u05EA \u2013 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D1\u05E9\u05DC!":"\u{1FAD5} \u05DB\u05D3\u05D9 \u05DC\u05D1\u05E9\u05DC \u05E6\u05E8\u05D9\u05DA \u05DC\u05E2\u05DE\u05D5\u05D3 \u05DC\u05D9\u05D3 \u05E7\u05DC\u05D7\u05EA (\u05D9\u05E9 \u05DB\u05DE\u05D4 \u05D1\u05DB\u05E4\u05E8\u05D9\u05DD \u05D5\u05D1\u05D8\u05D9\u05E8\u05D4). \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05EA\u05D5\u05EA \u05E9\u05D9\u05E7\u05D5\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05DE\u05E7\u05D5\u05DD."),v("div",{class:"potion-grid"},...Ir.map(i=>v("div",{class:"potion-card",style:{"--c":i.color}},v("div",{class:"pc-icon"},i.icon),v("div",{class:"pc-info"},v("b",{},i.name),v("p",{},i.desc),v("div",{class:"pc-recipe"},...Object.entries(i.recipe).map(([r,o])=>v("span",{class:st.ingredients[r]>=o?"ok":"no"},`${Zn[r].icon}\xD7${o}`))),v("div",{class:"pc-have"},`\u05D1\u05DE\u05DC\u05D0\u05D9: ${st.potions[i.id]}`,e.potions.active[i.id]?` \xB7 \u05E4\u05E2\u05D9\u05DC ${Math.ceil(e.potions.active[i.id])} \u05E9\u05F3`:"")),v("div",{class:"pc-actions"},v("button",{class:"btn small",disabled:!n||!e.potions.canBrew(i.id),onclick:()=>{e.potions.brew(i.id)&&(this.toast(`\u{1F9EA} \u05D1\u05D9\u05E9\u05DC\u05EA ${i.name}!`,"good"),this.renderMenu())}},"\u05D1\u05E9\u05DC"),v("button",{class:"btn small gold",disabled:st.potions[i.id]<=0,onclick:()=>{e.potions.drink(i.id)&&(this.toast(`${i.icon} \u05E9\u05EA\u05D9\u05EA ${i.name}`,"good"),this.renderMenu())}},"\u05E9\u05EA\u05D4")))))))}tabSettings(t){let e=st.settings,n=(i,r,o)=>v("div",{class:"seg"},...i.map(([a,c])=>v("button",{class:r===a?"on":"",onclick:()=>{o(a),this.renderMenu(),at("click")}},c)));t.append(v("div",{class:"settings"},v("div",{class:"set-row"},v("label",{},"\u05E8\u05DE\u05EA \u05E7\u05D5\u05E9\u05D9 (\u05E0\u05D9\u05E7\u05D5\u05D3 \u05DE\u05D5\u05DB\u05E4\u05DC)"),n(Fn.map(i=>[i.id,`${i.icon} ${i.name} \xD7${i.mult}`]),st.level,i=>{st.level=i,Ee(),this.refreshBadge()})),v("div",{class:"set-row"},v("label",{},"\u05D0\u05D9\u05DB\u05D5\u05EA \u05D2\u05E8\u05E4\u05D9\u05E7\u05D4"),n([[0,"\u05E0\u05DE\u05D5\u05DB\u05D4"],[1,"\u05D1\u05D9\u05E0\u05D5\u05E0\u05D9\u05EA"],[2,"\u05D2\u05D1\u05D5\u05D4\u05D4"]],e.quality,i=>{e.quality=i,this.game.setQuality(i),Ee()})),v("div",{class:"set-row"},v("label",{},"\u05D0\u05E4\u05E7\u05D8\u05D9\u05DD \u05E7\u05D5\u05DC\u05D9\u05D9\u05DD"),n([[!0,"\u05E4\u05D5\u05E2\u05DC"],[!1,"\u05DB\u05D1\u05D5\u05D9"]],e.sound,i=>{e.sound=i,wc(),Ee()})),v("div",{class:"set-row"},v("label",{},"\u05DE\u05D5\u05D6\u05D9\u05E7\u05D4"),n([[!0,"\u05E4\u05D5\u05E2\u05DC\u05EA"],[!1,"\u05DB\u05D1\u05D5\u05D9\u05D4"]],e.music,i=>{e.music=i,wc(),Ee()})),v("div",{class:"set-row"},v("label",{},"\u05E8\u05D2\u05D9\u05E9\u05D5\u05EA \u05E2\u05DB\u05D1\u05E8"),v("input",{type:"range",min:.4,max:2.2,step:.1,value:e.sens,oninput:i=>{e.sens=+i.target.value,Ee()}})),v("div",{class:"set-row"},v("label",{},"\u05D0\u05D5\u05E8\u05DA \u05D9\u05D5\u05DD (\u05D3\u05E7\u05D5\u05EA)"),v("input",{type:"range",min:3,max:40,step:1,value:Math.round(1/this.game.world.atmo.speed/60),oninput:i=>{this.game.world.atmo.speed=1/(+i.target.value*60)}})),v("div",{class:"set-row"},v("label",{},"\u05E9\u05E2\u05EA \u05D4\u05D9\u05D5\u05DD"),v("input",{type:"range",min:0,max:1,step:.01,value:this.game.world.atmo.time,oninput:i=>{this.game.world.atmo.time=+i.target.value}})),v("div",{class:"set-actions"},v("button",{class:"btn",onclick:()=>{this.closeMenu(),this.game.toTitle()}},"\u{1F3E0} \u05DC\u05DE\u05E1\u05DA \u05D4\u05E4\u05EA\u05D9\u05D7\u05D4"),v("button",{class:"btn danger",onclick:()=>{confirm("\u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA \u05DB\u05DC \u05D4\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05D5\u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DE\u05D7\u05D3\u05E9?")&&(qp(),location.reload())}},"\u{1F5D1}\uFE0F \u05D0\u05D9\u05E4\u05D5\u05E1 \u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA"))))}tabHelp(t){let e=(n,i)=>v("tr",{},v("td",{},v("kbd",{},n)),v("td",{},i));t.append(v("div",{class:"help"},v("h3",{},"\u{1F3AF} \u05DE\u05D8\u05E8\u05EA \u05D4\u05DE\u05E9\u05D7\u05E7"),v("p",{},"\u05E9\u05D5\u05D8\u05D8\u05D5 \u05D1\u05E2\u05D5\u05DC\u05DD \u05D4\u05E7\u05E1\u05D5\u05DD, \u05DE\u05E6\u05D0\u05D5 \u05D0\u05EA \u05E9\u05D1\u05E2\u05EA \u05DE\u05D2\u05D3\u05DC\u05D9 \u05D4\u05DC\u05D9\u05DE\u05D5\u05D3 (\u05E7\u05E8\u05E0\u05D9 \u05D4\u05D0\u05D5\u05E8 \u05D4\u05E6\u05D1\u05E2\u05D5\u05E0\u05D9\u05D5\u05EA) \u05D5\u05D2\u05DC\u05D5 \u05D0\u05EA \u05E1\u05D5\u05D3\u05D5\u05EA \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05D4-IP: \u05DE\u05D1\u05E0\u05D4, \u05E8\u05E9\u05EA \u05D5\u05DE\u05D0\u05E8\u05D7, \u05E4\u05E8\u05D8\u05D9 \u05D5\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9, \u05E1\u05D8\u05D8\u05D9 \u05D5\u05D3\u05D9\u05E0\u05DE\u05D9, DHCP, \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D1\u05DE\u05D7\u05E9\u05D1 \u05D5\u05D1\u05E8\u05D0\u05D5\u05D8\u05E8 \u05E1\u05D9\u05E1\u05E7\u05D5. \u05D1\u05DB\u05DC \u05D0\u05D6\u05D5\u05E8: \u05E9\u05D9\u05E2\u05D5\u05E8 + \u05E9\u05D0\u05DC\u05D5\u05EA + \u05E1\u05D9\u05DB\u05D5\u05DD + \u05DE\u05E9\u05D7\u05E7\u05D5\u05DF. \u05DB\u05DB\u05DC \u05E9\u05D4\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D9\u05D5\u05EA\u05E8 \u2013 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D3 \u05D2\u05D3\u05D5\u05DC \u05D9\u05D5\u05EA\u05E8!"),v("table",{},v("tbody",{},e("W A S D","\u05EA\u05E0\u05D5\u05E2\u05D4"),e("Shift","\u05E8\u05D9\u05E6\u05D4 / \u05D4\u05D0\u05E6\u05D4 \u05D1\u05DE\u05D8\u05D0\u05D8\u05D0"),e("Space","\u05E7\u05E4\u05D9\u05E6\u05D4 / \u05E2\u05DC\u05D9\u05D9\u05D4 \u05D1\u05DE\u05D8\u05D0\u05D8\u05D0"),e("Ctrl / C","\u05D9\u05E8\u05D9\u05D3\u05D4 \u05D1\u05DE\u05D8\u05D0\u05D8\u05D0"),e("\u05E2\u05DB\u05D1\u05E8","\u05DE\u05D1\u05D8 (\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D4\u05DE\u05E1\u05DA \u05DB\u05D3\u05D9 \u05DC\u05E0\u05E2\u05D5\u05DC)"),e("\u05E7\u05DC\u05D9\u05E7 \u05E9\u05DE\u05D0\u05DC\u05D9","\u05D4\u05D8\u05DC\u05EA \u05D4\u05DC\u05D7\u05E9 \u05D4\u05E0\u05D1\u05D7\u05E8"),e("1 \u2013 8","\u05D1\u05D7\u05D9\u05E8\u05EA \u05DC\u05D7\u05E9 (Q = \u05D4\u05D1\u05D0)"),e("B","\u05E2\u05DC\u05D9\u05D9\u05D4 / \u05D9\u05E8\u05D9\u05D3\u05D4 \u05DE\u05D4\u05DE\u05D8\u05D0\u05D8\u05D0"),e("E","\u05D3\u05D9\u05D1\u05D5\u05E8, \u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC\u05E9\u05D9\u05E2\u05D5\u05E8, \u05E4\u05EA\u05D9\u05D7\u05EA \u05EA\u05D9\u05D1\u05D5\u05EA"),e("P","\u05E9\u05D9\u05E7\u05D5\u05D9\u05D9\u05DD"),e("M","\u05DE\u05E4\u05D4"),e("J","\u05D9\u05D5\u05DE\u05DF \u05D0\u05D6\u05D5\u05E8\u05D9\u05DD"),e("Esc","\u05EA\u05E4\u05E8\u05D9\u05D8"))),v("h3",{},"\u{1F4A1} \u05D8\u05D9\u05E4\u05D9\u05DD"),v("ul",{},v("li",{},"\u05D0\u05E1\u05E4\u05D5 \u05E2\u05E9\u05D1\u05D9 \u05E7\u05E1\u05DD, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05D2\u05D1\u05D9\u05E9\u05D9\u05DD \u05D1\u05D8\u05D1\u05E2, \u05D5\u05D1\u05E9\u05DC\u05D5 \u05E9\u05D9\u05E7\u05D5\u05D9\u05D9\u05DD \u05D1\u05E7\u05DC\u05D7\u05D5\u05EA."),v("li",{},"\u05E1\u05D9\u05D9\u05DE\u05D5 \u05D0\u05D6\u05D5\u05E8\u05D9\u05DD \u05DB\u05D3\u05D9 \u05DC\u05E4\u05EA\u05D5\u05D7 \u05DE\u05D8\u05D0\u05D8\u05D0\u05D9\u05DD \u05DE\u05D4\u05D9\u05E8\u05D9\u05DD \u05D5\u05DC\u05D7\u05E9\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD."),v("li",{},"\u05E2\u05E4\u05D5 \u05D3\u05E8\u05DA \u05D4\u05D8\u05D1\u05E2\u05D5\u05EA \u05D4\u05D6\u05D5\u05D4\u05E8\u05D5\u05EA \u05DC\u05D9\u05D3 \u05DE\u05D2\u05E8\u05E9 \u05D4\u05DE\u05D8\u05D0\u05D8\u05D0\u05D9\u05DD \u05DC\u05DE\u05E8\u05D5\u05E5 \u05D6\u05DE\u05DF!"),v("li",{},"\u05E0\u05E1\u05D5 \u05DC\u05EA\u05E4\u05D5\u05E1 \u05D0\u05EA \u05D4\u05E1\u05E0\u05D9\u05E5\u05F3 \u05D4\u05D6\u05D4\u05D5\u05D1 \u05E2\u05DD \u05D4\u05DC\u05D7\u05E9 \u05D0\u05E7\u05E1\u05D9\u05D5."))))}};var jp=["\u05DB\u05DC \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D1\u05E8\u05E9\u05EA \u05E6\u05E8\u05D9\u05DA \u05DB\u05EA\u05D5\u05D1\u05EA IP \u05D9\u05D9\u05D7\u05D5\u05D3\u05D9\u05EA \u2013 \u05DB\u05DE\u05D5 \u05E9\u05DC\u05DB\u05DC \u05D1\u05D9\u05EA \u05D9\u05E9 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D1\u05E8\u05D7\u05D5\u05D1.","\u05DB\u05EA\u05D5\u05D1\u05EA IPv4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE-32 \u05D1\u05D9\u05D8\u05D9\u05DD, \u05E9\u05DE\u05D7\u05D5\u05DC\u05E7\u05D9\u05DD \u05DC\u05D0\u05E8\u05D1\u05E2\u05D4 \u05D1\u05EA\u05D9\u05DD (\u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD).","\u05D0\u05E4\u05E9\u05E8 \u05DC\u05E2\u05D5\u05E3 \u05E2\u05DC \u05DE\u05D8\u05D0\u05D8\u05D0 \u2013 \u05DC\u05D7\u05E6\u05D5 B. \u05DE\u05D8\u05D0\u05D8\u05D0\u05D9\u05DD \u05DE\u05D4\u05D9\u05E8\u05D9\u05DD \u05E0\u05E4\u05EA\u05D7\u05D9\u05DD \u05DB\u05E9\u05DE\u05E1\u05D9\u05D9\u05DE\u05D9\u05DD \u05D0\u05D6\u05D5\u05E8\u05D9 \u05DC\u05D9\u05DE\u05D5\u05D3.","\u05E9\u05E8\u05EA DHCP \u05E0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D7\u05E9\u05D1\u05D9\u05DD \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05D1\u05D0\u05D5\u05E4\u05DF \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9: Discover, Offer, Request, Acknowledge.","\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA: 10.x.x.x, 172.16\u201331.x.x \u05D5-192.168.x.x","\u05D0\u05E1\u05E4\u05D5 \u05E2\u05E9\u05D1\u05D9\u05DD \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E7\u05E1\u05DE\u05D9\u05DD \u2013 \u05D5\u05D1\u05E9\u05DC\u05D5 \u05E9\u05D9\u05E7\u05D5\u05D9\u05D9\u05DD \u05D1\u05E7\u05DC\u05D7\u05EA!","\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D9\u05D5\u05EA\u05E8 = \u05E0\u05D9\u05E7\u05D5\u05D3 \u05D2\u05D1\u05D5\u05D4 \u05D9\u05D5\u05EA\u05E8. \u05DE\u05D9 \u05D9\u05D4\u05E4\u05D5\u05DA \u05DC\u05DE\u05D0\u05E1\u05D8\u05E8 \u05D4\u05E8\u05E9\u05EA?"];function Qp(){let s=_n("#loading");s.style.display="",s.innerHTML="";let t=v("div",{class:"ld-fill"}),e=v("div",{class:"ld-text"},"\u05D8\u05D5\u05E2\u05DF...");return s.append(v("div",{class:"ld-box"},v("div",{class:"ld-rune"},"\u2726"),v("h1",{class:"logo small"},"\u05E7\u05D5\u05E1\u05DE\u05D9 \u05D4\u05E8\u05E9\u05EA"),v("div",{class:"ld-bar"},t),e,v("div",{class:"ld-tip"},"\u{1F4A1} "+jp[Math.floor(Math.random()*jp.length)]))),{set(n,i){t.style.width=Math.round(n*100)+"%",i&&(e.textContent=i)},hide(){s.classList.add("fade"),setTimeout(()=>{s.style.display="none",s.classList.remove("fade")},700)}}}function qu(s,t){let e=_n("#title");e.style.display="",e.classList.remove("fade"),e.innerHTML="";let n=st.house,i=st.level,r=v("input",{type:"text",maxlength:14,placeholder:"\u05D4\u05E9\u05DD \u05E9\u05DC\u05DA",value:s?st.name:"",dir:"rtl"}),o=zn.map((l,h)=>v("button",{class:"crest"+(h===n?" on":""),style:{"--r":l.robe,"--a":l.accent},onclick:d=>{n=h,o.forEach((u,f)=>u.classList.toggle("on",f===h)),at("click")}},v("span",{class:"crest-shield"},"\u{1F9D9}"),v("b",{},l.name))),a=Fn.map(l=>v("button",{class:"lvl"+(l.id===i?" on":""),style:{"--c":l.color},onclick:()=>{i=l.id,a.forEach((h,d)=>h.classList.toggle("on",d===l.id-1)),at("click")}},v("span",{class:"lvl-ic"},l.icon),v("b",{},l.name),v("small",{},`\u05E0\u05D9\u05E7\u05D5\u05D3 \xD7${l.mult}`),v("em",{},l.desc))),c=l=>{Cr(),st.name=(r.value||"\u05E7\u05D5\u05E1\u05DD").trim().slice(0,14),st.house=n,st.level=i,Ee(),e.classList.add("fade"),setTimeout(()=>{e.style.display="none"},700),t.onStart(l)};e.append(v("div",{class:"title-wrap"},v("div",{class:"title-hero"},v("div",{class:"title-sparks"},"\u2726 \u2727 \u2726"),v("h1",{class:"logo"},"\u05E7\u05D5\u05E1\u05DE\u05D9 \u05D4\u05E8\u05E9\u05EA"),v("div",{class:"tagline"},"\u05DE\u05E1\u05E2 \u05E7\u05E1\u05D5\u05DD \u05D1\u05E2\u05D5\u05DC\u05DD \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05D4-IP"),v("div",{class:"subtag"},"IP \xB7 \u05E8\u05E9\u05EA \u05D5\u05DE\u05D0\u05E8\u05D7 \xB7 \u05E4\u05E8\u05D8\u05D9 \u05D5\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \xB7 \u05E1\u05D8\u05D8\u05D9 \u05D5\u05D3\u05D9\u05E0\u05DE\u05D9 \xB7 DHCP \xB7 \u05E1\u05D9\u05E1\u05E7\u05D5")),v("div",{class:"title-card"},v("label",{},"\u05D0\u05D9\u05DA \u05E7\u05D5\u05E8\u05D0\u05D9\u05DD \u05DC\u05DA, \u05E7\u05D5\u05E1\u05DD \u05E6\u05E2\u05D9\u05E8?"),r,v("label",{},"\u05D1\u05D7\u05E8 \u05D0\u05EA \u05D4\u05D1\u05D9\u05EA \u05E9\u05DC\u05DA"),v("div",{class:"crests"},...o),v("label",{},"\u05D1\u05D7\u05E8 \u05E8\u05DE\u05EA \u05E7\u05D5\u05E9\u05D9 \u2013 \u05DB\u05DB\u05DC \u05E9\u05D4\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D9\u05D5\u05EA\u05E8, \u05D4\u05E0\u05D9\u05E7\u05D5\u05D3 \u05D2\u05D1\u05D5\u05D4 \u05D9\u05D5\u05EA\u05E8!"),v("div",{class:"lvls"},...a),v("div",{class:"title-actions"},s?v("button",{class:"btn big gold",onclick:()=>c(!0)},"\u25B6 \u05D4\u05DE\u05E9\u05DA \u05D0\u05EA \u05D4\u05DE\u05E1\u05E2"):null,v("button",{class:"btn big "+(s?"":"gold"),onclick:()=>c(!1)},s?"\u2728 \u05D4\u05EA\u05D7\u05DC \u05DE\u05D7\u05D3\u05E9":"\u2728 \u05D4\u05EA\u05D7\u05DC \u05D0\u05EA \u05D4\u05DE\u05E1\u05E2")),v("div",{class:"title-foot"},"\u05DE\u05D1\u05D5\u05E1\u05E1 \u05E2\u05DC \u05EA\u05D5\u05DB\u05E0\u05D9\u05EA CCNA \u05D5\u05E8\u05E9\u05EA\u05D5\u05EA \u05EA\u05E7\u05E9\u05D5\u05D1 \u05D9\u05F4\u05D0\u2013\u05D9\u05F4\u05D1 \xB7 \u05DE\u05D5\u05DE\u05DC\u05E5 \u05D1\u05DE\u05E1\u05DA \u05DE\u05DC\u05D0 \u05E2\u05DD \u05E2\u05DB\u05D1\u05E8 \u05D5\u05DE\u05E7\u05DC\u05D3\u05EA"))))}var u_={1:10,2:15,3:20},d_=s=>"\u2605".repeat(s)+"\u2606".repeat(3-s),tm=s=>String(s).trim().toLowerCase().replace(/\s+/g,"").replace(/[״"']/g,"").replace(/‏|‎/g,"");function $u(s,t,e={}){return new Promise(n=>{let{index:i=1,total:r=1,level:o=2,mult:a=1,quiz:c=!1,timer:l=0,noRetry:h=!1}=e,d=t.tier||1,u=0,f=!1,p=!1,x=l,g=null,m=v("div",{class:"qcard"}),M=v("div",{class:"q-head"},v("span",{class:"q-badge"},c?"\u05E9\u05D0\u05DC\u05EA \u05E1\u05D9\u05DB\u05D5\u05DD":"\u05E9\u05D0\u05DC\u05EA \u05D4\u05D1\u05E0\u05D4",` ${i}/${r}`),v("span",{class:"q-tier",title:"\u05E8\u05DE\u05EA \u05E7\u05D5\u05E9\u05D9"},d_(d))),b=v("h2",{class:"q-text",html:t.q}),y=v("div",{class:"q-body"}),w=v("div",{class:"q-fb"}),E=v("div",{class:"q-actions"}),R=l?v("div",{class:"q-timer"},v("i",{})):null;m.append(M,R,b,t.visual?v("div",{class:"q-visual",html:t.visual}):null,y,w,E),s.innerHTML="",s.append(m);let _=t.hint&&o<3?v("button",{class:"btn ghost small",onclick:()=>{f=!0,w.innerHTML=`<div class="hint">\u{1F4A1} ${t.hint}</div>`,at("click"),_.remove()}},"\u{1F4A1} \u05E8\u05DE\u05D6 (\u221230% \u05DE\u05D4\u05E0\u05D9\u05E7\u05D5\u05D3)"):null;_&&E.append(_);let A=()=>{let D=(u_[d]||10)*(c?1.5:1)*a;return u>1&&(D*=.5),f&&(D*=.7),Math.round(D)},C=D=>{if(p)return;p=!0,clearInterval(g);let P=D?A():0,B=D&&u===1;e.onPoints&&P&&e.onPoints(P),E.innerHTML="",E.append(v("button",{class:"btn gold",onclick:()=>{at("click"),n({correct:D,first:B,attempts:u,points:P,hinted:f})}},i===r?"\u05D4\u05DE\u05E9\u05DA \u2190":"\u05DC\u05E9\u05D0\u05DC\u05D4 \u05D4\u05D1\u05D0\u05D4 \u2190")),y.querySelectorAll("button, input").forEach(W=>W.disabled=!0)},N=(D,P)=>{let B=t.why?`<div class="why">${t.why}</div>`:"";D?(at("correct"),w.innerHTML=`<div class="fb good"><b>\u2714 \u05E0\u05DB\u05D5\u05DF!</b> +${A()} \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA${u>1?" (\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05E9\u05E0\u05D9)":""}${B}</div>`,C(!0)):P?(at("wrong"),w.innerHTML=`<div class="fb bad"><b>\u2718 \u05DC\u05D0 \u05D4\u05E4\u05E2\u05DD.</b> \u05D4\u05EA\u05E9\u05D5\u05D1\u05D4 \u05D4\u05E0\u05DB\u05D5\u05E0\u05D4: <span class="ans">${t.answerText||""}</span>${B}</div>`,C(!1)):(at("wrong"),w.innerHTML='<div class="fb bad"><b>\u2718 \u05DB\u05DE\u05E2\u05D8!</b> \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u2013 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D0\u05D7\u05E8\u05D5\u05DF (\u05D7\u05E6\u05D9 \u05E0\u05D9\u05E7\u05D5\u05D3).</div>')},U=D=>{if(p)return;u++;let P=u>=2||h;N(D,!D&&P)};if(t.type==="input"){let D=v("input",{class:"q-input",type:"text",placeholder:t.placeholder||"\u05D4\u05E7\u05DC\u05D3 \u05EA\u05E9\u05D5\u05D1\u05D4\u2026",dir:"ltr",autocomplete:"off",spellcheck:"false"}),P=v("button",{class:"btn",onclick:()=>{let B=tm(D.value);if(!B)return;let W=(Array.isArray(t.answer)?t.answer:[t.answer]).some($=>tm($)===B);U(W),!W&&!p&&D.select()}},"\u05D1\u05D3\u05D9\u05E7\u05D4");D.addEventListener("keydown",B=>{B.stopPropagation(),B.key==="Enter"&&P.click()}),D.addEventListener("keyup",B=>B.stopPropagation()),y.append(v("div",{class:"q-inrow"},D,P)),t.answerText=t.answerText||(Array.isArray(t.answer)?t.answer[0]:t.answer),setTimeout(()=>D.focus(),100)}else if(t.type==="order"){let D=t.items.slice(),P=Ii(D.map((Z,G)=>({t:Z,i:G}))),B=[],W=v("div",{class:"ord-slots"}),$=v("div",{class:"ord-pool"}),Q=()=>{W.innerHTML="",D.forEach((Z,G)=>{let ht=B[G];W.append(v("div",{class:"ord-slot"+(ht?" filled":""),onclick:()=>{ht&&!p&&(B.splice(G,1),at("click"),Q())}},v("em",{},G+1),ht?ht.t:""))}),$.innerHTML="",P.filter(Z=>!B.includes(Z)).forEach(Z=>$.append(v("button",{class:"ord-chip",onclick:()=>{p||(B.push(Z),at("click"),Q())}},Z.t))),q.disabled=B.length!==D.length},q=v("button",{class:"btn",onclick:()=>U(B.every((Z,G)=>Z.i===G))},"\u05D1\u05D3\u05D9\u05E7\u05D4");y.append(W,$,v("div",{class:"q-inrow"},q)),t.answerText=D.map((Z,G)=>`${G+1}) ${Z}`).join(" \xB7 "),Q()}else{let D=t.type==="tf"?["\u05E0\u05DB\u05D5\u05DF","\u05DC\u05D0 \u05E0\u05DB\u05D5\u05DF"]:t.options.slice(),P=t.type==="tf"?t.a?0:1:t.a,B=D.map(($,Q)=>Q);t.type!=="tf"&&!t.keepOrder&&(B=Ii(B)),t.answerText=D[P];let W=v("div",{class:"q-options"+(t.type==="tf"?" tf":"")});B.forEach(($,Q)=>{let q=v("button",{class:"opt",onclick:()=>{p||($===P?(q.classList.add("right"),U(!0)):(q.classList.add("wrong"),q.disabled=!0,U(!1),p&&W.children[B.indexOf(P)].classList.add("right")))}},v("i",{},["\u05D0","\u05D1","\u05D2","\u05D3","\u05D4"][Q]),v("span",{html:D[$]}));W.append(q)}),y.append(W)}if(l){let D=R.querySelector("i");g=setInterval(()=>{x-=.1,D.style.width=Math.max(0,x/l*100)+"%",D.classList.toggle("low",x<l*.25),x<=0&&!p&&(u=2,w.innerHTML=`<div class="fb bad"><b>\u23F0 \u05E0\u05D2\u05DE\u05E8 \u05D4\u05D6\u05DE\u05DF!</b> \u05D4\u05EA\u05E9\u05D5\u05D1\u05D4: <span class="ans">${t.answerText||""}</span>${t.why?`<div class="why">${t.why}</div>`:""}</div>`,at("wrong"),C(!1))},100)}s._cleanup=()=>clearInterval(g)})}function Yu(s,t){let e=t===1?1:t===2?2:3,n=s.filter(i=>(i.tier||1)<=e);return n.length?n:s}var em=[["lesson","\u{1F4D6} \u05E9\u05D9\u05E2\u05D5\u05E8"],["questions","\u2753 \u05D4\u05D1\u05E0\u05D4"],["quiz","\u{1F4DD} \u05E1\u05D9\u05DB\u05D5\u05DD"],["game","\u{1F3AE} \u05DE\u05E9\u05D7\u05E7"],["result","\u{1F3C6} \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA"]],nm={1:5,2:7,3:10},Zu={1:0,2:0,3:40},Bc=class{constructor(t,e,n){this.game=t,this.zone=e,this.content=n,this.level=st.level,this.pts=0,this.lessonStats={total:0,first:0},this.quizStats={total:0,first:0},this.gameResult={score:0,max:1},this.stepIdx=0,this.phase="intro",this.ctx=null,this.cleanup=null,this.alive=!0}get mult(){return Fn.find(t=>t.id===this.level).mult*(Vu()?1.1:1)}open(){let t=_n("#overlay");t.classList.remove("hidden"),t.innerHTML="",this.root=t,this.el=v("div",{class:"learn",style:{"--zc":this.zone.color}}),this.head=v("div",{class:"l-head"}),this.body=v("div",{class:"l-body"}),this.el.append(this.head,this.body),t.append(this.el),this.renderHead(),this.keyHandler=e=>{e.key==="Escape"&&(e.preventDefault(),this.confirmExit())},window.addEventListener("keydown",this.keyHandler,!0),this.showIntro()}renderHead(){let t=this.zone,e=em.findIndex(n=>n[0]===this.phase);this.head.innerHTML="",this.head.append(v("div",{class:"l-title"},v("span",{class:"l-ic"},t.icon),v("div",{},v("b",{},t.name),v("small",{},t.topic))),v("div",{class:"l-phases"},...em.map(([n,i],r)=>v("span",{class:"ph"+(r<e?" done":"")+(r===e?" on":"")},i))),v("div",{class:"l-meta"},v("span",{class:"l-level"},`${Zo().icon} ${Fn.find(n=>n.id===this.level).name} \xD7${Fn.find(n=>n.id===this.level).mult}`),v("span",{class:"l-pts"},"\u2728 ",v("b",{},vi(this.pts))),v("button",{class:"l-exit",onclick:()=>this.confirmExit(),title:"\u05D9\u05E6\u05D9\u05D0\u05D4 (Esc)"},"\u2715")))}setPhase(t){this.phase=t,this.renderHead()}addPts(t){this.pts+=t;let e=this.head.querySelector(".l-pts b");e&&(e.textContent=vi(this.pts),e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop"))}clearBody(){this.cleanup?.(),this.cleanup=null,this.ctx?.destroy(),this.ctx=null,this.body.innerHTML="",this.body.scrollTop=0}confirmExit(){if(this.phase==="result")return this.close();if(this.exitBox)return;let t=v("div",{class:"modal"},v("div",{class:"modal-card"},v("h3",{},"\u05DC\u05E6\u05D0\u05EA \u05DE\u05D4\u05E9\u05D9\u05E2\u05D5\u05E8?"),v("p",{},"\u05D4\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05D1\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D6\u05D4 (\u05D1\u05DC\u05D9 \u05E1\u05D9\u05D5\u05DD) \u05DC\u05D0 \u05EA\u05D9\u05E9\u05DE\u05E8."),v("div",{class:"modal-actions"},v("button",{class:"btn",onclick:()=>{t.remove(),this.exitBox=null}},"\u05E0\u05E9\u05D0\u05E8 \u05DC\u05DC\u05DE\u05D5\u05D3"),v("button",{class:"btn danger",onclick:()=>{t.remove(),this.exitBox=null,this.close()}},"\u05D9\u05D5\u05E6\u05D0"))));this.exitBox=t,this.el.append(t)}close(){if(!this.alive)return;this.alive=!1,this.clearBody(),window.removeEventListener("keydown",this.keyHandler,!0);let t=_n("#overlay");t.classList.add("hidden"),t.innerHTML="",this.game.closeLearn(this)}showIntro(){this.setPhase("intro"),this.clearBody();let t=this.zone,e=st.zones[t.id],n=Fn.map(i=>v("button",{class:"lvl"+(i.id===this.level?" on":""),style:{"--c":i.color},onclick:()=>{this.level=i.id,st.level=i.id,Ee(),this.game.ui.refreshBadge(),at("click"),this.showIntro()}},v("span",{class:"lvl-ic"},i.icon),v("b",{},i.name),v("small",{},`\u05E0\u05D9\u05E7\u05D5\u05D3 \xD7${i.mult}`),v("em",{},i.desc)));this.body.append(v("div",{class:"l-intro"},v("div",{class:"intro-hero"},v("div",{class:"prof"},v("div",{class:"prof-avatar"},"\u{1F9D9}"),v("div",{class:"prof-name"},t.prof)),v("div",{class:"speech"},v("p",{html:this.content.intro}))),v("div",{class:"intro-plan"},v("h3",{},"\u05DE\u05D4 \u05E0\u05DC\u05DE\u05D3 \u05D1\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D6\u05D4?"),v("ol",{},...this.content.steps.map(i=>v("li",{},i.title))),v("div",{class:"plan-extra"},v("span",{},"\u2753 \u05E9\u05D0\u05DC\u05D5\u05EA \u05D4\u05D1\u05E0\u05D4"),v("span",{},"\u{1F4DD} \u05E9\u05D0\u05DC\u05D5\u05EA \u05E1\u05D9\u05DB\u05D5\u05DD"),v("span",{},`\u{1F3AE} \u05DE\u05E9\u05D7\u05E7\u05D5\u05DF: ${this.content.game.name}`)),e.done?v("div",{class:"prev"},`\u05DB\u05D1\u05E8 \u05E1\u05D9\u05D9\u05DE\u05EA! ${"\u2605".repeat(e.stars)}${"\u2606".repeat(3-e.stars)} \xB7 \u05E9\u05D9\u05D0: ${vi(e.best)} \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA`):null),v("div",{class:"intro-level"},v("h3",{},"\u05D1\u05D7\u05E8 \u05E8\u05DE\u05EA \u05E7\u05D5\u05E9\u05D9"),v("div",{class:"lvls"},...n),v("button",{class:"btn big gold",onclick:()=>{at("magic"),this.startLesson()}},"\u2728 \u05D1\u05D5\u05D0\u05D5 \u05E0\u05EA\u05D7\u05D9\u05DC!"))))}startLesson(){this.stepIdx=0,this.showStep()}makeCtx(){let t=new Set,e=[],n={alive:!0,level:this.level,wait:i=>new Promise(r=>{let o=setTimeout(()=>{t.delete(o),n.alive&&r()},i);t.add(o)}),onCleanup:i=>e.push(i),raf:i=>{let r,o=a=>{n.alive&&(i(a),r=requestAnimationFrame(o))};r=requestAnimationFrame(o),e.push(()=>cancelAnimationFrame(r))},destroy:()=>{n.alive=!1,t.forEach(clearTimeout),e.forEach(i=>{try{i()}catch{}})}};return n}showStep(){this.setPhase("lesson"),this.clearBody();let t=this.content.steps,e=t[this.stepIdx],n=v("div",{class:"l-text"},v("div",{class:"step-tag"},`\u05E9\u05DC\u05D1 ${this.stepIdx+1} \u05DE\u05EA\u05D5\u05DA ${t.length}`),v("h2",{},e.title),v("div",{class:"l-copy",html:e.body}),e.tip?v("div",{class:"tipbox"},v("b",{},"\u{1F4A1} \u05D8\u05D9\u05E4: "),v("span",{html:e.tip})):null),i=v("div",{class:"l-stage"},v("div",{class:"stage-title"},e.stageTitle||"\u{1F52C} \u05E1\u05D9\u05DE\u05D5\u05DC\u05E6\u05D9\u05D4"),v("div",{class:"stage-area"})),r=v("div",{class:"l-dots"},...t.map((c,l)=>v("i",{class:l<this.stepIdx?"done":l===this.stepIdx?"on":""}))),o=v("div",{class:"l-foot"},v("button",{class:"btn ghost",disabled:this.stepIdx===0,onclick:()=>{this.stepIdx--,at("click"),this.showStep()}},"\u2192 \u05D4\u05E7\u05D5\u05D3\u05DD"),r,v("button",{class:"btn gold",onclick:()=>{at("click"),this.afterStep()}},this.stepIdx===t.length-1?"\u05DC\u05E9\u05D0\u05DC\u05D5\u05EA \u05D4\u05D4\u05D1\u05E0\u05D4 \u2190":"\u05D4\u05D1\u05D0 \u2190"));this.body.append(v("div",{class:"l-lesson"},n,i),o),this.ctx=this.makeCtx();let a=i.querySelector(".stage-area");try{e.anim&&e.anim(a,this.ctx)}catch(c){console.error(c),a.textContent="\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E1\u05D9\u05DE\u05D5\u05DC\u05E6\u05D9\u05D4"}}async afterStep(){let t=this.content.steps[this.stepIdx],e=Yu(t.questions||[],this.level).slice(0,this.level===3?3:2);if(this.ctx?.destroy(),this.ctx=null,e.length){this.setPhase("questions"),this.clearBody();let n=v("div",{class:"l-qwrap"});this.body.append(n),this.cleanup=()=>n._cleanup?.();for(let i=0;i<e.length;i++){if(!this.alive)return;let r=await $u(n,e[i],{index:i+1,total:e.length,level:this.level,mult:this.mult,onPoints:o=>this.addPts(o)});this.lessonStats.total++,r.first&&this.lessonStats.first++}}this.alive&&(this.stepIdx<this.content.steps.length-1?(this.stepIdx++,this.showStep()):this.startQuiz())}async startQuiz(){this.setPhase("quiz"),this.clearBody();let t=v("div",{class:"l-interlude"},v("div",{class:"big-ic"},"\u{1F4DD}"),v("h2",{},"\u05E9\u05D0\u05DC\u05D5\u05EA \u05E1\u05D9\u05DB\u05D5\u05DD"),v("p",{},`\u05E2\u05DB\u05E9\u05D9\u05D5 \u05DE\u05E1\u05DB\u05DE\u05D9\u05DD! ${nm[this.level]} \u05E9\u05D0\u05DC\u05D5\u05EA \u05DE\u05DB\u05DC \u05DE\u05D4 \u05E9\u05DC\u05DE\u05D3\u05E0\u05D5${Zu[this.level]?` \u2013 ${Zu[this.level]} \u05E9\u05E0\u05D9\u05D5\u05EA \u05DC\u05DB\u05DC \u05E9\u05D0\u05DC\u05D4`:""}. \u05DB\u05DC \u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4 \u05E9\u05D5\u05D5\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DE\u05E9\u05D0\u05DC\u05D5\u05EA \u05D4\u05D4\u05D1\u05E0\u05D4.`),v("button",{class:"btn big gold",onclick:()=>this.runQuiz()},"\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u2190"));this.body.append(t)}async runQuiz(){let t=Ii(Yu(this.content.quiz,this.level)),e=Math.min(nm[this.level],t.length),n=t.slice(0,e);this.clearBody();let i=v("div",{class:"l-qwrap"});this.body.append(i),this.cleanup=()=>i._cleanup?.();for(let r=0;r<n.length;r++){if(!this.alive)return;let o=await $u(i,n[r],{index:r+1,total:n.length,level:this.level,mult:this.mult,quiz:!0,timer:Zu[this.level],onPoints:a=>this.addPts(a)});this.quizStats.total++,o.first&&this.quizStats.first++}this.alive&&this.gameIntro()}gameIntro(){this.setPhase("game"),this.clearBody();let t=this.content.game;this.body.append(v("div",{class:"l-interlude game-intro"},v("div",{class:"big-ic"},"\u{1F3AE}"),v("h2",{},`\u05DE\u05E9\u05D7\u05E7\u05D5\u05DF: ${t.name}`),v("div",{class:"gi-text",html:t.intro}),v("div",{class:"gi-level"},`\u05E8\u05DE\u05D4: ${Fn.find(e=>e.id===this.level).name} \xB7 \u05E0\u05D9\u05E7\u05D5\u05D3 \xD7${Fn.find(e=>e.id===this.level).mult}`),v("button",{class:"btn big gold",onclick:()=>this.runGame()},"\u25B6 \u05D4\u05EA\u05D7\u05DC \u05DC\u05E9\u05D7\u05E7!")))}runGame(){this.clearBody();let t=this.content.game,e=v("div",{class:"game-area"});this.body.append(e),at("magic");let n=t.run(e,{level:this.level,mult:this.mult,onPoints:i=>this.addPts(i),onDone:i=>{this.gameResult=i,setTimeout(()=>{this.alive&&this.finish()},1200)}});this.cleanup=()=>n?.destroy?.()}finish(){this.clearBody(),this.setPhase("result");let t=this.lessonStats.total?this.lessonStats.first/this.lessonStats.total:1,e=this.quizStats.total?this.quizStats.first/this.quizStats.total:1,n=Ue(this.gameResult.score/(this.gameResult.max||1),0,1),i=t*.3+e*.35+n*.35,r=i>=.82?3:i>=.6?2:1,o=st.zones[this.zone.id],a=!o.done,c=o.best,l=os(),h=Math.max(0,this.pts-c);o.done=!0,o.stars=Math.max(o.stars,r),o.best=Math.max(o.best,this.pts),o.plays=(o.plays||0)+1,h&&(st.score+=h,ku("score",h,"\u05E9\u05D9\u05D0 \u05D7\u05D3\u05E9 \u05D1\u05D0\u05D6\u05D5\u05E8")),Ee();let d=os(),u=[];mn.forEach(x=>{x.need>l&&x.need<=d&&u.push(`\u2728 \u05DC\u05D7\u05E9 \u05D7\u05D3\u05E9: ${x.name}`)}),Ts.forEach(x=>{x.need>l&&x.need<=d&&u.push(`\u{1F9F9} \u05DE\u05D8\u05D0\u05D8\u05D0 \u05D7\u05D3\u05E9: ${x.name}`)}),a&&d===7&&u.push("\u{1F451} \u05E1\u05D9\u05D9\u05DE\u05EA \u05D0\u05EA \u05DB\u05DC \u05D4\u05D0\u05D6\u05D5\u05E8\u05D9\u05DD! \u05D0\u05EA\u05D4 \u05DE\u05D0\u05E1\u05D8\u05E8 \u05D4\u05E8\u05E9\u05EA!"),this.game.ui.refreshBadge(),at("levelup");let f=(x,g,m)=>v("div",{class:"rbar "+m},v("span",{},x),v("div",{},v("i",{style:{width:Math.round(g*100)+"%"}})),v("b",{},Math.round(g*100)+"%")),p=[1,2,3].map(x=>v("span",{class:"rstar"+(x<=r?" on":"")},"\u2605"));this.body.append(v("div",{class:"l-result"},v("div",{class:"res-card"},v("div",{class:"res-title"},a?"\u05D4\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D5\u05E9\u05DC\u05DD! \u{1F389}":"\u05E1\u05D9\u05D9\u05DE\u05EA \u05E9\u05D5\u05D1! \u{1F389}"),v("div",{class:"res-stars"},...p),v("div",{class:"res-pts"},"\u2728 ",v("b",{},vi(this.pts))," \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D1\u05D0\u05D6\u05D5\u05E8",h?v("small",{},` (+${vi(h)} \u05DC\u05E0\u05D9\u05E7\u05D5\u05D3 \u05D4\u05DB\u05D5\u05DC\u05DC)`):v("small",{}," (\u05E9\u05D9\u05D0 \u05E7\u05D5\u05D3\u05DD \u05D2\u05D1\u05D5\u05D4 \u05D9\u05D5\u05EA\u05E8)")),f("\u05E9\u05D0\u05DC\u05D5\u05EA \u05D4\u05D1\u05E0\u05D4",t,"a"),f("\u05E9\u05D0\u05DC\u05D5\u05EA \u05E1\u05D9\u05DB\u05D5\u05DD",e,"b"),f("\u05DE\u05E9\u05D7\u05E7\u05D5\u05DF",n,"c"),this.gameResult.msg?v("p",{class:"res-msg",html:this.gameResult.msg}):null,u.length?v("div",{class:"res-unlocks"},...u.map(x=>v("div",{},x))):null,v("div",{class:"res-actions"},v("button",{class:"btn big gold",onclick:()=>this.close()},"\u{1F30D} \u05D7\u05D6\u05E8\u05D4 \u05DC\u05E2\u05D5\u05DC\u05DD"),v("button",{class:"btn big",onclick:()=>{this.pts=0,this.lessonStats={total:0,first:0},this.quizStats={total:0,first:0},this.showIntro()}},"\u{1F501} \u05E9\u05D5\u05D1"))))),setTimeout(()=>this.body.querySelectorAll(".rstar.on").forEach((x,g)=>setTimeout(()=>{x.classList.add("shine"),at("collect")},g*300)),300)}};var ke=(s,t="0 0 64 64")=>{let e=document.createElement("div");return e.className="ico",e.innerHTML=`<svg viewBox="${t}" xmlns="http://www.w3.org/2000/svg">${s}</svg>`,e},im={pc:()=>ke('<rect x="7" y="7" width="50" height="34" rx="4" fill="#232a66" stroke="#aab4ee" stroke-width="2.5"/><rect x="11" y="11" width="42" height="26" rx="2" fill="#4de1ff"/><path d="M11 30l12-9 9 6 8-8 13 11v7H11z" fill="#2b5cd6" opacity=".55"/><rect x="27" y="41" width="10" height="7" fill="#8f9bd6"/><rect x="17" y="48" width="30" height="6" rx="3" fill="#c3cbf5"/>'),laptop:()=>ke('<rect x="12" y="12" width="40" height="28" rx="3" fill="#232a66" stroke="#aab4ee" stroke-width="2.5"/><rect x="16" y="16" width="32" height="20" rx="1.5" fill="#7fe3ff"/><path d="M5 44h54l-5 8H10z" fill="#c3cbf5" stroke="#8f9bd6" stroke-width="2"/><rect x="26" y="46" width="12" height="2" rx="1" fill="#8f9bd6"/>'),phone:()=>ke('<rect x="19" y="5" width="26" height="54" rx="6" fill="#232a66" stroke="#aab4ee" stroke-width="2.5"/><rect x="23" y="11" width="18" height="38" rx="2" fill="#9a7bff"/><circle cx="32" cy="54" r="2.2" fill="#aab4ee"/><circle cx="32" cy="30" r="7" fill="#fff" opacity=".35"/>'),printer:()=>ke('<rect x="17" y="8" width="30" height="16" rx="2" fill="#f6ecd2" stroke="#8f9bd6" stroke-width="2"/><rect x="6" y="22" width="52" height="24" rx="5" fill="#8f9bd6" stroke="#5560a8" stroke-width="2.5"/><rect x="14" y="38" width="36" height="18" rx="2" fill="#fff" stroke="#8f9bd6" stroke-width="2"/><circle cx="48" cy="29" r="2.5" fill="#3ddc97"/><path d="M19 44h26M19 49h18" stroke="#8f9bd6" stroke-width="2"/>'),server:()=>ke('<rect x="10" y="6" width="44" height="16" rx="3" fill="#2a3170" stroke="#aab4ee" stroke-width="2.2"/><rect x="10" y="24" width="44" height="16" rx="3" fill="#2a3170" stroke="#aab4ee" stroke-width="2.2"/><rect x="10" y="42" width="44" height="16" rx="3" fill="#2a3170" stroke="#aab4ee" stroke-width="2.2"/><g fill="#3ddc97"><circle cx="18" cy="14" r="2.4"/><circle cx="18" cy="32" r="2.4"/><circle cx="18" cy="50" r="2.4"/></g><g stroke="#8f9bd6" stroke-width="2.4"><path d="M28 14h20M28 32h20M28 50h20"/></g>'),router:()=>ke('<path d="M18 6v16M46 6v16" stroke="#c3cbf5" stroke-width="3.5" stroke-linecap="round"/><circle cx="18" cy="6" r="3" fill="#ffd35c"/><circle cx="46" cy="6" r="3" fill="#ffd35c"/><rect x="4" y="22" width="56" height="26" rx="6" fill="#ff7a3d" stroke="#b9461a" stroke-width="2.5"/><rect x="9" y="27" width="46" height="16" rx="3" fill="#2a1f4a"/><g class="leds"><circle cx="17" cy="35" r="2.6" fill="#3ddc97"/><circle cx="26" cy="35" r="2.6" fill="#3ddc97"/><circle cx="35" cy="35" r="2.6" fill="#ffd35c"/><circle cx="44" cy="35" r="2.6" fill="#4de1ff"/></g><rect x="14" y="48" width="36" height="5" rx="2" fill="#b9461a"/>'),switch:()=>ke('<rect x="3" y="20" width="58" height="24" rx="5" fill="#4a5bd6" stroke="#2a3588" stroke-width="2.5"/><g fill="#14183f"><rect x="8" y="25" width="7" height="8" rx="1"/><rect x="17" y="25" width="7" height="8" rx="1"/><rect x="26" y="25" width="7" height="8" rx="1"/><rect x="35" y="25" width="7" height="8" rx="1"/><rect x="44" y="25" width="7" height="8" rx="1"/></g><g fill="#3ddc97"><circle cx="11.5" cy="38" r="1.7"/><circle cx="20.5" cy="38" r="1.7"/><circle cx="29.5" cy="38" r="1.7"/><circle cx="38.5" cy="38" r="1.7"/><circle cx="47.5" cy="38" r="1.7"/></g><path d="M52 40h6" stroke="#fff" stroke-width="2"/>'),cloud:()=>ke('<path d="M18 46h30a11 11 0 0 0 1.5-21.9A15 15 0 0 0 20.5 21 13 13 0 0 0 18 46z" fill="#d8e8ff" stroke="#8fb4f5" stroke-width="2.5"/><circle cx="26" cy="33" r="2" fill="#6c8bff"/><circle cx="38" cy="30" r="2" fill="#6c8bff"/><path d="M26 33l12-3" stroke="#6c8bff" stroke-width="1.6"/>'),camera:()=>ke('<rect x="6" y="18" width="40" height="24" rx="5" fill="#2a3170" stroke="#aab4ee" stroke-width="2.5"/><circle cx="26" cy="30" r="8" fill="#4de1ff"/><circle cx="26" cy="30" r="3.5" fill="#14183f"/><path d="M46 26l12-6v20l-12-6z" fill="#8f9bd6"/><circle cx="12" cy="23" r="1.8" fill="#ff5a7a"/>'),tablet:()=>ke('<rect x="9" y="8" width="46" height="48" rx="6" fill="#232a66" stroke="#aab4ee" stroke-width="2.5"/><rect x="13" y="12" width="38" height="36" rx="2" fill="#ffd35c"/><circle cx="32" cy="52" r="2" fill="#aab4ee"/>'),owl:()=>ke('<ellipse cx="32" cy="38" rx="17" ry="20" fill="#9a7a54"/><ellipse cx="32" cy="42" rx="11" ry="13" fill="#eadcc0"/><circle cx="24" cy="26" r="8" fill="#fff"/><circle cx="40" cy="26" r="8" fill="#fff"/><circle cx="24" cy="26" r="4.2" fill="#ffb300"/><circle cx="40" cy="26" r="4.2" fill="#ffb300"/><circle cx="24" cy="26" r="2" fill="#111"/><circle cx="40" cy="26" r="2" fill="#111"/><path d="M29 31l3 5 3-5z" fill="#f2a33a"/><path d="M16 14l7 8M48 14l-7 8" stroke="#7a5a3a" stroke-width="4" stroke-linecap="round"/>'),house:()=>ke('<rect x="12" y="28" width="40" height="28" fill="#efe3c6" stroke="#8c6a40" stroke-width="2.5"/><path d="M6 30L32 8l26 22z" fill="#c4452f" stroke="#7a2a1a" stroke-width="2.5"/><rect x="27" y="38" width="10" height="18" fill="#6b4426"/><rect x="16" y="35" width="8" height="8" fill="#7fe3ff"/><rect x="40" y="35" width="8" height="8" fill="#7fe3ff"/>'),castle:()=>ke('<path d="M8 56V24h8v-6h6v6h6v-6h8v6h6v-6h6v6h6v32z" fill="#bdb8ae" stroke="#6f6a60" stroke-width="2.5"/><path d="M26 56V40a6 6 0 0 1 12 0v16z" fill="#4a3220"/><path d="M12 24l4-12 4 12M44 24l4-12 4 12" fill="#8a2f3a"/>'),wizard:()=>ke('<path d="M32 3l12 24H20z" fill="#2a5fc1"/><ellipse cx="32" cy="27" rx="17" ry="4" fill="#1f4796"/><circle cx="32" cy="36" r="9" fill="#f0c9a4"/><path d="M24 44h16l6 16H18z" fill="#2a5fc1"/><circle cx="29" cy="35" r="1.4" fill="#222"/><circle cx="35" cy="35" r="1.4" fill="#222"/><path d="M26 41q6 8 12 0" fill="#e8e8f0"/>'),dragon:()=>ke('<path d="M10 44c6-16 20-20 30-14l8-10 2 14c4 3 6 8 4 14-8-6-14-4-20 4-8 0-18-2-24-8z" fill="#c43a48" stroke="#7a1a28" stroke-width="2.5"/><path d="M40 28l8-12M46 34l10-8" stroke="#ffd35c" stroke-width="3" stroke-linecap="round"/><circle cx="46" cy="32" r="2" fill="#ffe44a"/>'),key:()=>ke('<circle cx="20" cy="24" r="12" fill="none" stroke="#ffd35c" stroke-width="5"/><path d="M30 32l26 24M44 46l7-7M50 52l7-7" stroke="#ffd35c" stroke-width="5" stroke-linecap="round"/>'),scroll:()=>ke('<rect x="14" y="10" width="36" height="44" rx="4" fill="#f6ecd2" stroke="#b89a5a" stroke-width="2.5"/><circle cx="14" cy="10" r="5" fill="#e4cf9a"/><circle cx="50" cy="54" r="5" fill="#e4cf9a"/><path d="M21 22h22M21 30h22M21 38h14" stroke="#8a6a3a" stroke-width="2.5" stroke-linecap="round"/>'),globe:()=>ke('<circle cx="32" cy="32" r="24" fill="#2b6fd6" stroke="#9ad7ff" stroke-width="2.5"/><path d="M14 24c8-2 10 6 18 4s6-12 16-8M12 40c8-4 12 4 20 2s10 6 18 0" fill="none" stroke="#3ddc97" stroke-width="5" stroke-linecap="round"/>'),user:()=>ke('<circle cx="32" cy="22" r="11" fill="#f0c9a4"/><path d="M10 58c0-14 10-22 22-22s22 8 22 22z" fill="#6c8bff"/>'),gear:()=>ke('<circle cx="32" cy="32" r="12" fill="none" stroke="#ffd35c" stroke-width="7"/><g stroke="#ffd35c" stroke-width="7" stroke-linecap="square"><path d="M32 4v8M32 52v8M4 32h8M52 32h8M12 12l6 6M46 46l6 6M12 52l6-6M46 18l6-6"/></g>'),lock:()=>ke('<rect x="14" y="28" width="36" height="28" rx="5" fill="#ffd35c" stroke="#b8861a" stroke-width="2.5"/><path d="M20 28v-8a12 12 0 0 1 24 0v8" fill="none" stroke="#b8861a" stroke-width="5"/><circle cx="32" cy="42" r="4" fill="#7a5a10"/>')},Pr=s=>(im[s]||im.pc)(),ls=class{constructor(t,e){this.ctx=e,this.root=v("div",{class:"sim"}),this.layer=v("div",{class:"sim-layer"}),this.capEl=v("div",{class:"sim-caption"}),this.ctrl=v("div",{class:"sim-controls"}),this.root.append(this.layer,this.capEl,this.ctrl),t.innerHTML="",t.append(this.root)}caption(t,e){this.capEl.innerHTML=t||"",this.capEl.classList.toggle("on",!!t),this.capEl.dataset.tone=e||"",this.capEl.classList.remove("pop"),this.capEl.offsetWidth,this.capEl.classList.add("pop")}btn(t,e,n=""){let i=v("button",{class:"btn small "+n,onclick:async r=>{at("click"),await e(r,i)}},t);return this.ctrl.append(i),i}clearCtrl(){this.ctrl.innerHTML=""}place(t,e,n){return t._x=e,t._y=n,t.style.left=e+"%",t.style.top=n+"%",t}add(t,e,n){return t.classList.add("abs"),this.place(t,e,n),this.layer.append(t),t}dev(t,e,n,i,r,o={}){let a=v("div",{class:"dev "+(o.cls||"")},v("div",{class:"dev-bubble"}),Pr(t),e?v("div",{class:"dev-label"},e):null,n!=null?v("div",{class:"dev-ip"},n):null);return o.size&&a.style.setProperty("--s",o.size+"px"),a.ipEl=a.querySelector(".dev-ip"),a.setIp=c=>{a.ipEl||(a.ipEl=v("div",{class:"dev-ip"}),a.append(a.ipEl)),a.ipEl.textContent=c,a.ipEl.classList.remove("flash"),a.ipEl.offsetWidth,a.ipEl.classList.add("flash")},a.say=(c,l=2200)=>{let h=a.querySelector(".dev-bubble");h.textContent=c,h.classList.add("on"),clearTimeout(a._bt),a._bt=setTimeout(()=>h.classList.remove("on"),l)},a.glow=(c="#ffd35c",l=1200)=>{a.style.setProperty("--glow",c),a.classList.add("glow"),setTimeout(()=>a.classList.remove("glow"),l)},a.shake=()=>{a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),600)},this.add(a,i,r)}moveTo(t,e,n,i=900){return t.style.transition=`left ${i}ms cubic-bezier(.4,.1,.2,1), top ${i}ms cubic-bezier(.4,.1,.2,1)`,t.offsetWidth,this.place(t,e,n),this.ctx.wait(i+30)}async fly(t,e,n,i={}){let{color:r="#4de1ff",ms:o=1e3,cls:a="",text:c="",via:l=null,keep:h=!1}=i,d=v("div",{class:"pkt "+a,style:{"--c":r}},v("span",{},n||"\u2709"));this.add(d,t._x??t.x,t._y??t.y),d.style.transition="none",await this.ctx.wait(30);let u=l?[...l,e]:[e];for(let f of u)await this.moveTo(d,f._x??f.x,f._y??f.y,o/u.length);return h||d.remove(),d}async pulse(t,e=1){t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse"),await this.ctx.wait(600*e)}line(t,e,n={}){this.svg||(this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttribute("class","sim-lines"),this.svg.setAttribute("viewBox","0 0 100 100"),this.svg.setAttribute("preserveAspectRatio","none"),this.layer.prepend(this.svg));let i=document.createElementNS("http://www.w3.org/2000/svg","line");return i.setAttribute("x1",t._x),i.setAttribute("y1",t._y),i.setAttribute("x2",e._x),i.setAttribute("y2",e._y),i.setAttribute("stroke",n.color||"rgba(160,180,255,.55)"),i.setAttribute("stroke-width",n.w||.5),i.setAttribute("vector-effect","non-scaling-stroke"),i.style.strokeWidth=(n.px||3)+"px",n.dash&&i.setAttribute("stroke-dasharray",n.dash),this.svg.append(i),i}zone(t,e,n,i,r,o="#6c8bff"){let a=v("div",{class:"zone-box",style:{"--c":o,width:n+"%",height:i+"%"}},v("span",{},r));return a.classList.add("abs"),this.place(a,t,e),this.layer.prepend(a),a}label(t,e,n,i=""){return this.add(v("div",{class:"sim-label "+i},t),e,n)}};function Lr(s,t,{groups:e=8,colors:n=null,labels:i=null,cls:r=""}={}){let o=v("div",{class:"bits "+r}),a=[];return(typeof t=="string"?t.split(""):t).forEach((l,h)=>{h>0&&h%e===0&&o.append(v("span",{class:"bit-dot"},"."));let d=v("span",{class:"bit b"+l},String(l));n&&(d.dataset.kind=n[h]||""),a.push(d),o.append(d)}),s&&s.append(o),{wrap:o,cells:a}}function cs(s,t){if(document.getElementById("css-"+s))return;let e=document.createElement("style");e.id="css-"+s,e.textContent=t,document.head.append(e)}var Oc=s=>{let t=String(s).trim().split(".");if(t.length!==4)return null;let e=t.map(n=>/^\d{1,3}$/.test(n)?+n:NaN);return e.some(n=>isNaN(n)||n<0||n>255)?null:e},hs=s=>(s[0]<<24>>>0)+(s[1]<<16)+(s[2]<<8)+s[3]>>>0,Is=s=>[s>>>24&255,s>>>16&255,s>>>8&255,s&255],An=s=>s.join("."),f_=s=>s.toString(2).padStart(8,"0"),kc=s=>s.map(f_).join(""),Ko=s=>Is(s===0?0:4294967295<<32-s>>>0);var Hc=(s,t)=>Is(hs(s)&hs(Ko(t))),jo=(s,t)=>Is((hs(s)|~hs(Ko(t))>>>0)>>>0),Ju=s=>Math.max(0,2**(32-s)-2);var sm=(s,t)=>Is(hs(Hc(s,t))+1),rm=(s,t)=>Is(hs(jo(s,t))-1);function om(s){let t=s[0];return t===0?"\u2014":t<127?"A":t===127?"Loopback":t<192?"B":t<224?"C":t<240?"D":"E"}cs("g1",`
.g1{display:grid;grid-template-columns:minmax(120px,200px) 1fr;gap:18px;height:100%;padding:12px;align-items:stretch}
.g1-tower{display:flex;flex-direction:column-reverse;gap:4px;align-items:center;justify-content:flex-start;padding:10px;background:linear-gradient(180deg,rgba(108,139,255,.12),rgba(0,0,0,.15));border-radius:18px;border:1px solid rgba(255,255,255,.14);position:relative;overflow:hidden}
.g1-floor{width:78%;flex:1;max-height:48px;border-radius:8px;background:#2a2f66;border:2px solid #3a417f;display:flex;align-items:center;justify-content:center;transition:all .5s;position:relative}
.g1-floor.lit{background:linear-gradient(180deg,#fff2b0,#ffc24a);border-color:#fff;box-shadow:0 0 22px #ffcf4a;}
.g1-floor.lit::after{content:'\u2726';color:#7a4a00;font-size:18px}
.g1-roof{width:0;height:0;border-left:50px solid transparent;border-right:50px solid transparent;border-bottom:34px solid #2a5fc1;margin-bottom:2px;filter:grayscale(.8);transition:all .6s}
.g1-roof.lit{filter:none;filter:drop-shadow(0 0 12px #6c8bff)}
.g1-main{display:flex;flex-direction:column;gap:14px;align-items:center;justify-content:center;min-width:0}
.g1-top{display:flex;gap:12px;align-items:center;width:100%;justify-content:space-between}
.g1-top .timer{flex:1;height:12px;border-radius:8px;background:rgba(255,255,255,.12);overflow:hidden}
.g1-top .timer i{display:block;height:100%;width:100%;background:linear-gradient(90deg,#3ddc97,#ffd35c);transition:width .1s linear}
.g1-top .timer i.low{background:linear-gradient(90deg,#ff5a7a,#ff9a3a)}
.g1-top span{font-weight:700;color:#cfd6ff;white-space:nowrap}
.g1-scroll{background:linear-gradient(180deg,#f6ecd2,#e8d6a8);color:#3a2a14;border-radius:16px;padding:12px 26px;text-align:center;box-shadow:0 8px 24px rgba(0,0,0,.4);border:3px solid #b89a5a;min-width:60%}
.g1-scroll small{display:block;font-size:14px;opacity:.8}
.g1-scroll b{display:block;font:900 clamp(34px,6vw,60px) 'Secular One',sans-serif;direction:ltr;line-height:1.1}
.g1-runes{display:flex;gap:clamp(4px,1vw,12px);direction:ltr;margin-top:6px}
.g1-rune{width:clamp(40px,6vw,66px);display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;user-select:none}
.g1-rune .w{color:#ffd35c;font:800 clamp(12px,1.6vw,16px) ui-monospace,monospace}
.g1-rune .stone{width:100%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 35% 30%,#4a5199,#1d2158);border:3px solid #5a63b8;display:flex;align-items:center;justify-content:center;font:900 clamp(20px,3vw,32px) ui-monospace,monospace;color:#7d88d6;transition:all .2s}
.g1-rune.on .stone{background:radial-gradient(circle at 35% 30%,#fff6c4,#ffb62e);color:#5a3300;border-color:#fff;box-shadow:0 0 24px #ffc54a,0 0 60px rgba(255,197,74,.5);transform:translateY(-6px) scale(1.06)}
.g1-rune.fixed{cursor:default}
.g1-sum{font:900 clamp(26px,4vw,44px) 'Secular One',sans-serif;direction:ltr;color:#fff;min-height:54px;text-shadow:0 0 18px rgba(77,225,255,.7)}
.g1-sum.hid{opacity:.25}
.g1-actions{display:flex;gap:10px;align-items:center}
.g1-actions input{width:140px;font-size:22px;text-align:center}
.g1-fb{min-height:30px;font-weight:700}
.g1-fb.good{color:#7dffb0}.g1-fb.bad{color:#ff8fa3}
.g1-win{display:flex;flex-direction:column;gap:10px;align-items:center;justify-content:center;height:100%;text-align:center}
.g1-win h2{font:900 40px 'Secular One';margin:0;color:#ffd35c}
.g1.flash .g1-scroll{animation:glowpulse .6s}
@keyframes glowpulse{0%{box-shadow:0 0 0 rgba(255,211,92,0)}50%{box-shadow:0 0 60px rgba(255,211,92,.9)}100%{box-shadow:0 8px 24px rgba(0,0,0,.4)}}
@media (max-width:760px){.g1{grid-template-columns:1fr}.g1-tower{flex-direction:row;height:40px;padding:4px}.g1-floor{height:100%;max-height:none;width:auto}.g1-roof{display:none}}
`);var Vc=[128,64,32,16,8,4,2,1];function am(s,t){let{level:e,mult:n,onPoints:i,onDone:r}=t,o={1:{rounds:6,time:45,maxN:31,show:!0,auto:!0,mixed:0},2:{rounds:8,time:30,maxN:255,show:!0,auto:!0,mixed:.25},3:{rounds:10,time:18,maxN:255,show:!1,auto:!1,mixed:.5}}[e],a=0,c=0,l=!1,h=null,d=!1,u=v("div",{class:"g1"});s.append(u);let f=v("div",{class:"g1-tower"}),p=Array.from({length:o.rounds},()=>v("div",{class:"g1-floor"})),x=v("div",{class:"g1-roof"});p.forEach(b=>f.append(b)),f.append(x);let g=v("div",{class:"g1-main"});u.append(f,g);function m(){if(d)return;if(a>=o.rounds)return M();let b=Math.random()<o.mixed,y=b?wr(1,o.maxN):e===1?wr(1,o.maxN):wr(e===2?20:33,o.maxN),w=o.time,E=0,R=!1;g.innerHTML="";let _=v("i",{}),A=v("div",{class:"g1-top"},v("span",{},`\u05E1\u05D9\u05D1\u05D5\u05D1 ${a+1}/${o.rounds}`),v("div",{class:"timer"},_),v("span",{},`\u2B50 ${Math.round(c)}`)),C=v("div",{class:"g1-scroll"}),N=v("div",{class:"g1-sum"+(o.show||b?"":" hid")},o.show||b?"0":"?"),U=v("div",{class:"g1-fb"}),D=b?Array.from({length:8},()=>Math.random()<.5?1:0):Array(8).fill(0);if(b&&(D.every(G=>!G)&&(D[7]=1),e<3))for(let G=0;G<3;G++)D[G]=0;let P=()=>D.reduce((G,ht,ct)=>G+(ht?Vc[ct]:0),0),B=v("div",{class:"g1-runes"}),W=Vc.map((G,ht)=>{let ct=v("div",{class:"g1-rune"+(D[ht]?" on":"")+(b?" fixed":"")},v("div",{class:"w"},G),v("div",{class:"stone"},String(D[ht])));return b||ct.addEventListener("click",()=>{R||(D[ht]^=1,ct.classList.toggle("on",!!D[ht]),ct.querySelector(".stone").textContent=String(D[ht]),at("click"),q())}),B.append(ct),ct}),$=v("div",{class:"g1-actions"}),Q=null;b?(C.append(v("small",{},"\u05E7\u05E8\u05D0\u05D5 \u05D0\u05EA \u05D4\u05E8\u05D5\u05E0\u05D5\u05EA \u05D5\u05D4\u05E7\u05DC\u05D9\u05D3\u05D5 \u05D0\u05EA \u05D4\u05E2\u05E8\u05DA \u05D4\u05E2\u05E9\u05E8\u05D5\u05E0\u05D9"),v("b",{},D.join(""))),Q=v("input",{class:"q-input",type:"number",dir:"ltr",placeholder:"?"}),Q.addEventListener("keydown",G=>{G.stopPropagation(),G.key==="Enter"&&Z()}),Q.addEventListener("keyup",G=>G.stopPropagation()),$.append(Q,v("button",{class:"btn gold",onclick:Z},"\u05D4\u05D8\u05DC \u05E7\u05E1\u05DD \u2728")),setTimeout(()=>Q.focus(),50)):(C.append(v("small",{},"\u05D4\u05D3\u05DC\u05D9\u05E7\u05D5 \u05E8\u05D5\u05E0\u05D5\u05EA \u05DB\u05DA \u05E9\u05D4\u05E1\u05DB\u05D5\u05DD \u05D9\u05D4\u05D9\u05D4"),v("b",{},String(y))),o.auto||$.append(v("button",{class:"btn gold",onclick:Z},"\u05D4\u05D8\u05DC \u05E7\u05E1\u05DD \u2728"))),g.append(A,C,B,N,$,U);function q(){(o.show||b)&&(N.textContent=String(P())),o.auto&&!b&&P()===y&&Z()}function Z(){if(R)return;let G=b?parseInt(Q.value,10):P();if(!(b&&isNaN(G)))if(G===y||b&&G===P()){R=!0,clearInterval(h);let ht=.5+.5*(w/o.time),ct=Math.round(100*ht*Math.max(.3,1-E*.3));c+=ct,i&&i(Math.round(ct*.5*n)),p[a].classList.add("lit"),u.classList.add("flash"),setTimeout(()=>u.classList.remove("flash"),700),U.className="g1-fb good",U.textContent=`\u2714 \u05DE\u05E2\u05D5\u05DC\u05D4! ${b?`${D.join("")} = ${P()}`:`${y} = ${D.map((ie,$t)=>ie?Vc[$t]:null).filter(Boolean).join(" + ")}`}  (+${ct})`,at("correct"),a++,setTimeout(m,1500)}else E++,U.className="g1-fb bad",U.textContent=b?"\u2718 \u05DC\u05D0 \u05DE\u05D3\u05D5\u05D9\u05E7 \u2013 \u05D7\u05E9\u05D1\u05D5 \u05E9\u05D5\u05D1: \u05D7\u05D1\u05E8\u05D5 \u05D0\u05EA \u05D4\u05DE\u05E9\u05E7\u05DC\u05D9\u05DD \u05E9\u05DC \u05D4\u05E8\u05D5\u05E0\u05D5\u05EA \u05D4\u05D3\u05D5\u05DC\u05E7\u05D5\u05EA.":`\u2718 \u05D4\u05E1\u05DB\u05D5\u05DD \u05D4\u05D5\u05D0 ${P()} \u05D5\u05DC\u05D0 ${y}. \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1!`,at("wrong"),C.animate([{transform:"translateX(0)"},{transform:"translateX(-8px)"},{transform:"translateX(8px)"},{transform:"translateX(0)"}],{duration:300})}h=setInterval(()=>{R||d||(w-=.1,_.style.width=Math.max(0,w/o.time*100)+"%",_.classList.toggle("low",w<o.time*.25),w<=0&&(R=!0,clearInterval(h),U.className="g1-fb bad",U.textContent=`\u23F0 \u05D4\u05D6\u05DE\u05DF \u05E0\u05D2\u05DE\u05E8! \u05D4\u05EA\u05E9\u05D5\u05D1\u05D4: ${y} = ${b?P():Vc.filter(G=>y&G).join(" + ")}`,at("wrong"),a++,setTimeout(m,2e3)))},100)}function M(){l=!0,x.classList.add("lit");let b=o.rounds*100,y=Math.round(c/b*100);g.innerHTML="",g.append(v("div",{class:"g1-win"},v("h2",{},y>=80?"\u{1F31F} \u05D4\u05DE\u05D2\u05D3\u05DC \u05D6\u05D5\u05D4\u05E8!":y>=50?"\u2728 \u05D4\u05DE\u05D2\u05D3\u05DC \u05D3\u05D5\u05DC\u05E7":"\u{1F56F}\uFE0F \u05D4\u05DE\u05D2\u05D3\u05DC \u05DE\u05D4\u05D1\u05D4\u05D1"),v("p",{},`\u05E6\u05D1\u05E8\u05EA ${Math.round(c)} \u05DE\u05EA\u05D5\u05DA ${b} \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DE\u05E9\u05D7\u05E7 (${y}%).`),v("p",{class:"mini"},"\u05E2\u05DB\u05E9\u05D9\u05D5 \u05D0\u05EA\u05DD \u05D9\u05D5\u05D3\u05E2\u05D9\u05DD \u05DC\u05D4\u05DE\u05D9\u05E8 \u05D1\u05D9\u05DF \u05D1\u05D9\u05E0\u05D0\u05E8\u05D9 \u05DC\u05E2\u05E9\u05E8\u05D5\u05E0\u05D9 \u2013 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DE\u05D4 \u05E9\u05E6\u05E8\u05D9\u05DA \u05DB\u05D3\u05D9 \u05DC\u05E7\u05E8\u05D5\u05D0 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA IP!"))),at("levelup"),r({score:c,max:b,msg:`\u05D1\u05DE\u05E9\u05D7\u05E7 \u05D4\u05E8\u05D5\u05E0\u05D5\u05EA \u05D4\u05D3\u05DC\u05E7\u05EA ${Math.round(c/100*10)/10} \u05E7\u05D5\u05DE\u05D5\u05EA \u05DE\u05DC\u05D0\u05D5\u05EA \u{1F525}`})}return m(),{destroy(){d=!0,clearInterval(h)}}}cs("z1",`
.bitsim{display:flex;flex-direction:column;gap:14px;align-items:center;justify-content:center;height:100%;padding:10px 10px 70px;container-type:inline-size}
.bits{display:flex;align-items:center;gap:2px;direction:ltr;flex-wrap:nowrap;width:100%;justify-content:center}
.bit{flex:1 1 0;min-width:0;max-width:26px;aspect-ratio:.72;display:inline-flex;align-items:center;justify-content:center;border-radius:5px;font:700 clamp(9px,2.4cqw,16px) ui-monospace,Menlo,monospace;background:rgba(255,255,255,.1);color:#cfd6ff;border:1px solid rgba(255,255,255,.18);transition:all .3s}
.bit.b1{background:linear-gradient(180deg,#ffe28a,#f5a623);color:#2b1b00;border-color:#ffd35c;box-shadow:0 0 10px rgba(255,211,92,.55)}
.bit.hid{opacity:0;transform:scale(.4)}
.bit.q{color:#7380c9}
.bit[data-kind=net]{box-shadow:0 0 0 2px #6c8bff inset}
.bit[data-kind=host]{box-shadow:0 0 0 2px #3ddc97 inset}
.bit-dot{color:#ffd35c;font:900 22px sans-serif;margin:0 2px;align-self:flex-end;transition:opacity .4s}
.bs-oct{display:flex;gap:10px;direction:ltr}
.bs-oct div{flex:1;min-width:70px;text-align:center;padding:8px 10px;border-radius:12px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);transition:all .4s;opacity:.25}
.bs-oct div.on{opacity:1;background:rgba(77,225,255,.15);border-color:#4de1ff}
.bs-oct b{display:block;font:900 clamp(20px,3vw,34px) 'Secular One',sans-serif;color:#fff;direction:ltr}
.bs-oct small{color:#aeb7ff;font-size:12px}
.weights{display:flex;gap:6px;direction:ltr}
.weights span{width:clamp(34px,5vw,52px);text-align:center;color:#ffd35c;font:700 clamp(11px,1.5vw,15px) ui-monospace,monospace}
.togglebits{display:flex;gap:6px;direction:ltr}
.tbit{width:clamp(34px,5vw,52px);height:clamp(48px,7vw,70px);border-radius:12px;border:2px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#9aa5ea;font:900 clamp(20px,3vw,30px) ui-monospace,monospace;cursor:pointer;transition:all .2s}
.tbit.on{background:linear-gradient(180deg,#ffe28a,#f5a623);color:#2b1b00;border-color:#ffd35c;box-shadow:0 0 18px rgba(255,211,92,.7);transform:translateY(-4px)}
.bigsum{font:900 clamp(34px,6vw,64px) 'Secular One',sans-serif;color:#fff;direction:ltr;text-shadow:0 0 22px rgba(77,225,255,.7)}
.eqn{direction:ltr;color:#cfd6ff;font:600 clamp(13px,1.7vw,18px) ui-monospace,monospace;min-height:26px;text-align:center}
.conv-lines{direction:ltr;font:600 14px ui-monospace,monospace;color:#cfd6ff;display:flex;flex-direction:column;gap:3px;align-items:center;min-height:120px}
.conv-lines div{opacity:0;animation:fadeUp .4s forwards}
.conv-lines .y{color:#ffd35c}.conv-lines .n{color:#8791d8}
.jar{border:2px solid rgba(255,255,255,.3);border-radius:16px;padding:10px;background:rgba(255,255,255,.05);text-align:center;flex:1}
.jar h4{margin:0 0 6px;color:#fff;font-size:14px}
.jar-grid{display:grid;grid-template-columns:repeat(20,1fr);gap:2px}
.jar-grid i{aspect-ratio:1;border-radius:2px;background:rgba(255,255,255,.1);transition:background .3s}
.jar-grid i.f{background:#ff7a8a}
.jar-grid i.g{background:#3ddc97;animation:pulse 2s infinite}
.jar b{display:block;margin-top:6px;color:#ffd35c;font:700 12px ui-monospace,monospace;direction:ltr;word-break:break-all}
.jars{display:flex;gap:14px;width:100%;padding:8px}
.nic{display:flex;gap:6px;align-items:center;justify-content:center;background:rgba(0,0,0,.35);border-radius:10px;padding:4px 10px;font:600 12px ui-monospace,monospace;direction:ltr;color:#9ae3b0;margin-top:4px;white-space:nowrap}
`);var Qo=s=>`<code>${s}</code>`,lm={intro:"\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05DC\u05DE\u05D2\u05D3\u05DC \u05D4\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA! \u{1F5FC} \u05DB\u05D0\u05DF \u05DE\u05EA\u05D7\u05D9\u05DC \u05D4\u05DE\u05E1\u05E2. \u05DB\u05DC \u05D9\u05E0\u05E9\u05D5\u05E3 \u05D1\u05DE\u05DE\u05DC\u05DB\u05D4 \u05D9\u05D5\u05D3\u05E2 \u05DC\u05D0\u05DF \u05DC\u05E2\u05D5\u05E3 \u05DB\u05D9 \u05E2\u05DC \u05DB\u05DC \u05DE\u05DB\u05EA\u05D1 \u05DB\u05EA\u05D5\u05D1\u05D4 <b>\u05DB\u05EA\u05D5\u05D1\u05EA</b>. \u05D2\u05DD \u05D1\u05E8\u05E9\u05EA \u05DE\u05D7\u05E9\u05D1\u05D9\u05DD \u2013 \u05D1\u05DC\u05D9 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DF \u05EA\u05E7\u05E9\u05D5\u05E8\u05EA. \u05E0\u05D2\u05DC\u05D4 \u05DE\u05D4 \u05D6\u05D5 \u05DB\u05EA\u05D5\u05D1\u05EA IP, \u05D0\u05D9\u05DA \u05D4\u05D9\u05D0 \u05D1\u05E0\u05D5\u05D9\u05D4, \u05D5\u05D0\u05D9\u05DA \u05E7\u05D5\u05E8\u05D0\u05D9\u05DD \u05D0\u05D5\u05EA\u05D4 \u05D1\u05D1\u05D9\u05E0\u05D0\u05E8\u05D9 \u05D5\u05D1\u05E2\u05E9\u05E8\u05D5\u05E0\u05D9.",steps:[{title:"\u05DC\u05DE\u05D4 \u05E6\u05E8\u05D9\u05DA \u05DB\u05EA\u05D5\u05D1\u05EA?",body:`<p>\u05D3\u05DE\u05D9\u05D9\u05E0\u05D5 \u05E9\u05D0\u05EA\u05DD \u05E9\u05D5\u05DC\u05D7\u05D9\u05DD \u05DE\u05DB\u05EA\u05D1 \u05D1\u05D9\u05E0\u05E9\u05D5\u05E3 \u2013 \u05D1\u05DC\u05D9 \u05DB\u05EA\u05D5\u05D1\u05EA \u05E2\u05DC \u05D4\u05DE\u05E2\u05D8\u05E4\u05D4, \u05D4\u05D9\u05E0\u05E9\u05D5\u05E3 \u05DC\u05D0 \u05D9\u05D3\u05E2 \u05DC\u05D0\u05DF \u05DC\u05E2\u05D5\u05E3. \u05D1\u05E8\u05E9\u05EA \u05DE\u05D7\u05E9\u05D1\u05D9\u05DD \u05D6\u05D4 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05D0\u05D5\u05EA\u05D5 \u05E2\u05D9\u05E7\u05E8\u05D5\u05DF:</p>
      <ul>
        <li><b>\u05DB\u05EA\u05D5\u05D1\u05EA IP</b> (Internet Protocol) \u05D4\u05D9\u05D0 <b>\u05DB\u05EA\u05D5\u05D1\u05EA \u05DC\u05D5\u05D2\u05D9\u05EA</b> \u05E9\u05DE\u05D6\u05D4\u05D4 \u05DB\u05DC \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D1\u05E8\u05E9\u05EA \u2013 \u05DE\u05D7\u05E9\u05D1, \u05D8\u05DC\u05E4\u05D5\u05DF, \u05DE\u05D3\u05E4\u05E1\u05EA, \u05E9\u05E8\u05EA \u05D0\u05D5 \u05DE\u05E6\u05DC\u05DE\u05D4.</li>
        <li>\u05D4\u05DE\u05D9\u05D3\u05E2 \u05E0\u05E9\u05DC\u05D7 \u05D1\u05E8\u05E9\u05EA \u05D1\u05F4\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA\u05F4. \u05E2\u05DC \u05DB\u05DC \u05D7\u05D1\u05D9\u05DC\u05D4 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA <b>\u05DE\u05E7\u05D5\u05E8</b> (\u05DE\u05D9 \u05E9\u05D5\u05DC\u05D7) \u05D5<b>\u05D9\u05E2\u05D3</b> (\u05DC\u05DE\u05D9).</li>
        <li>\u05D4\u05E8\u05D0\u05D5\u05D8\u05E8\u05D9\u05DD \u05D5\u05D4\u05DE\u05EA\u05D2\u05D9\u05DD \u05E7\u05D5\u05E8\u05D0\u05D9\u05DD \u05D0\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D9\u05E2\u05D3 \u05D5\u05DE\u05D7\u05DC\u05D9\u05D8\u05D9\u05DD \u05DC\u05D0\u05DF \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05D1\u05D9\u05DC\u05D4.</li>
        <li>\u05D1\u05DC\u05D9 \u05DB\u05EA\u05D5\u05D1\u05EA \u2013 \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8 \u05DC\u05D0 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D5\u05DC\u05D0 \u05DC\u05E7\u05D1\u05DC \u05DE\u05D9\u05D3\u05E2.</li>
      </ul>`,tip:"\u05DB\u05EA\u05D5\u05D1\u05EA IP \u05D4\u05D9\u05D0 \u05DB\u05DE\u05D5 \u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD: \u05D4\u05D9\u05D0 \u05D0\u05D5\u05DE\u05E8\u05EA \u05D0\u05D9\u05E4\u05D4 \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8 \u05E0\u05DE\u05E6\u05D0 \u05D1\u05E8\u05E9\u05EA.",anim:(s,t)=>{let e=new ls(s,t),n=e.dev("castle","\u05DE\u05D2\u05D3\u05DC \u05D4\u05E9\u05DC\u05D9\u05D7\u05D9\u05DD",null,12,50,{size:70}),i=e.dev("pc","\u05DE\u05D7\u05E9\u05D1 \u05D0\u05F3","192.168.1.10",58,16),r=e.dev("printer","\u05DE\u05D3\u05E4\u05E1\u05EA","192.168.1.12",84,42),o=e.dev("server","\u05E9\u05E8\u05EA","192.168.1.20",58,66),a=e.dev("owl","",null,12,50,{size:44,cls:"owl"}),c=[[i,"192.168.1.10","\u05DE\u05D7\u05E9\u05D1 \u05D0\u05F3"],[r,"192.168.1.12","\u05DE\u05D3\u05E4\u05E1\u05EA"],[o,"192.168.1.20","\u05E9\u05E8\u05EA"]],l=new Map(c.map(([f,p])=>[f,p])),h=!1;e.caption("\u05D1\u05D7\u05E8\u05D5 \u05D9\u05E2\u05D3: \u05D4\u05D9\u05E0\u05E9\u05D5\u05E3 \u05D9\u05D9\u05E7\u05D7 \u05DE\u05DB\u05EA\u05D1 \u05E9\u05E2\u05DC\u05D9\u05D5 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D9\u05E2\u05D3, \u05D5\u05D9\u05E2\u05D5\u05E3 \u05D0\u05DC\u05D9\u05D5.");let d=async f=>{if(h)return;h=!0;let p=l.get(f);e.caption(p?`\u05D4\u05D9\u05E0\u05E9\u05D5\u05E3 \u05E7\u05D5\u05E8\u05D0 \u05D0\u05EA \u05D4\u05DB\u05EA\u05D5\u05D1\u05EA <code>${p}</code> \u05D5\u05DE\u05EA\u05E2\u05D5\u05E4\u05E3 \u05D0\u05DC\u05D9\u05D4\u2026`:"\u05DC\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4 \u05D0\u05D9\u05DF \u05DB\u05EA\u05D5\u05D1\u05EA\u2026 \u05DC\u05D0\u05DF \u05D4\u05D9\u05E0\u05E9\u05D5\u05E3 \u05D9\u05E2\u05D5\u05E3?"),at("owl"),p?(await e.fly(a,f,`\u2709 ${p}`,{ms:1500,color:"#ffd35c"}),f.glow("#3ddc97"),f.say("\u05E7\u05D9\u05D1\u05DC\u05EA\u05D9! \u2714"),e.caption(`\u05D4\u05DE\u05DB\u05EA\u05D1 \u05D4\u05D2\u05D9\u05E2 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05D9 \u05D4\u05DB\u05EA\u05D5\u05D1\u05EA <code>${p}</code> \u05D6\u05D9\u05D4\u05EA\u05D4 \u05D0\u05D5\u05EA\u05D5.`,"good"),await e.moveTo(a,12,50,900)):(await e.moveTo(a,(f._x+12)/2,(f._y+50)/2,900),a.say("\u2753 \u05DC\u05D0\u05DF?",1600),f.shake(),e.caption("\u05D1\u05DC\u05D9 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D3\u05E2\u05EA \u05D0\u05D9\u05E4\u05D4 \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8 \u2013 \u05D4\u05DE\u05DB\u05EA\u05D1 \u05D7\u05D5\u05D6\u05E8. <b>\u05DC\u05DB\u05DC \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D1\u05E8\u05E9\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA.</b>","bad"),await e.moveTo(a,12,50,800)),h=!1};c.forEach(([f,,p])=>e.btn("\u2709 \u05E9\u05DC\u05D7 \u05D0\u05DC "+p,()=>d(f)));let u=e.btn("\u{1F9F9} \u05DE\u05D7\u05E7 \u05D0\u05EA \u05D4\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D4\u05DE\u05D3\u05E4\u05E1\u05EA",()=>{l.get(r)?(l.set(r,null),r.setIp("\u2014 \u05DC\u05DC\u05D0 \u05DB\u05EA\u05D5\u05D1\u05EA \u2014"),u.textContent="\u2728 \u05D4\u05D7\u05D6\u05E8 \u05DB\u05EA\u05D5\u05D1\u05EA \u05DC\u05DE\u05D3\u05E4\u05E1\u05EA"):(l.set(r,"192.168.1.12"),r.setIp("192.168.1.12"),u.textContent="\u{1F9F9} \u05DE\u05D7\u05E7 \u05D0\u05EA \u05D4\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D4\u05DE\u05D3\u05E4\u05E1\u05EA")},"ghost")},questions:[{tier:1,type:"mc",q:"\u05DE\u05D4 \u05EA\u05E4\u05E7\u05D9\u05D3\u05D4 \u05E9\u05DC \u05DB\u05EA\u05D5\u05D1\u05EA IP?",options:["\u05DC\u05D6\u05D4\u05D5\u05EA \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D1\u05E8\u05E9\u05EA \u05DB\u05D3\u05D9 \u05E9\u05D4\u05DE\u05D9\u05D3\u05E2 \u05D9\u05D2\u05D9\u05E2 \u05D0\u05DC\u05D9\u05D5","\u05DC\u05D4\u05D2\u05D1\u05D9\u05E8 \u05D0\u05EA \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8","\u05DC\u05D4\u05D2\u05DF \u05E2\u05DC \u05D4\u05DE\u05D7\u05E9\u05D1 \u05DE\u05D5\u05D9\u05E8\u05D5\u05E1\u05D9\u05DD","\u05DC\u05E9\u05DE\u05D5\u05E8 \u05E7\u05D1\u05E6\u05D9\u05DD \u05D1\u05E2\u05E0\u05DF"],a:0,why:"\u05DB\u05EA\u05D5\u05D1\u05EA IP \u05DE\u05D6\u05D4\u05D4 \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D1\u05E8\u05E9\u05EA, \u05D5\u05D1\u05D6\u05DB\u05D5\u05EA\u05D4 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05DC\u05D9\u05D5 \u05DE\u05D9\u05D3\u05E2.",hint:"\u05D7\u05E9\u05D1\u05D5 \u05E2\u05DC \u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD \u05E2\u05DC \u05DE\u05E2\u05D8\u05E4\u05D4."},{tier:2,type:"mc",q:"\u05D0\u05D9\u05DC\u05D5 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E2\u05DC \u05DB\u05DC \u05D7\u05D1\u05D9\u05DC\u05EA \u05DE\u05D9\u05D3\u05E2?",options:["\u05E8\u05E7 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D9\u05E2\u05D3","\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05E7\u05D5\u05E8 \u05D5\u05DB\u05EA\u05D5\u05D1\u05EA \u05D9\u05E2\u05D3","\u05E8\u05E7 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05DE\u05E7\u05D5\u05E8","\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E8\u05D0\u05D5\u05D8\u05E8 \u05D1\u05DC\u05D1\u05D3"],a:1,why:"\u05DB\u05DC \u05D7\u05D1\u05D9\u05DC\u05D4 \u05E0\u05D5\u05E9\u05D0\u05EA \u05DE\u05D9 \u05E9\u05DC\u05D7 (\u05DE\u05E7\u05D5\u05E8) \u05D5\u05DC\u05DE\u05D9 \u05D4\u05D9\u05D0 \u05DE\u05D9\u05D5\u05E2\u05D3\u05EA (\u05D9\u05E2\u05D3)."}]},{title:"\u05DB\u05EA\u05D5\u05D1\u05EA IP \u05D4\u05D9\u05D0 \u05DE\u05E1\u05E4\u05E8 \u05D1\u05DF 32 \u05D1\u05D9\u05D8",body:`<p>\u05DB\u05EA\u05D5\u05D1\u05EA <b>IPv4</b> \u05D1\u05E0\u05D5\u05D9\u05D4 \u05DE-<b>32 \u05D1\u05D9\u05D8\u05D9\u05DD</b> (\u05E1\u05E4\u05E8\u05D5\u05EA \u05D1\u05D9\u05E0\u05D0\u05E8\u05D9\u05D5\u05EA: 0 \u05D0\u05D5 1). \u05DB\u05D3\u05D9 \u05E9\u05D9\u05D4\u05D9\u05D4 \u05E0\u05D5\u05D7 \u05DC\u05E7\u05E8\u05D5\u05D0, \u05DE\u05D7\u05DC\u05E7\u05D9\u05DD \u05D0\u05D5\u05EA\u05DD \u05DC-<b>4 \u05E7\u05D1\u05D5\u05E6\u05D5\u05EA \u05E9\u05DC 8 \u05D1\u05D9\u05D8\u05D9\u05DD</b>, \u05E9\u05E0\u05E7\u05E8\u05D0\u05D5\u05EA <b>\u05D1\u05EA\u05D9\u05DD</b> \u05D0\u05D5 <b>\u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD</b>, \u05D5\u05DE\u05E6\u05D9\u05D2\u05D9\u05DD \u05DB\u05DC \u05E7\u05D1\u05D5\u05E6\u05D4 \u05DB\u05DE\u05E1\u05E4\u05E8 \u05E2\u05E9\u05E8\u05D5\u05E0\u05D9, \u05DB\u05E9\u05D1\u05D9\u05E0\u05D9\u05D4\u05DF \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA. \u05D6\u05D4 \u05E0\u05E7\u05E8\u05D0 <b>Dotted Decimal</b>.</p>
      <ul>
        <li>\u05D3\u05D5\u05D2\u05DE\u05D4: ${Qo("192.168.10.5")}</li>
        <li>\u05D0\u05D5\u05E7\u05D8\u05D8 \u05D0\u05D7\u05D3 = 8 \u05D1\u05D9\u05D8\u05D9\u05DD \u21D2 ${Qo("2\u2078 = 256")} \u05E2\u05E8\u05DB\u05D9\u05DD \u05D0\u05E4\u05E9\u05E8\u05D9\u05D9\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8 <b>0 \u05E2\u05D3 255</b>.</li>
        <li>\u05DC\u05DB\u05DF ${Qo("192.168.1.256")} <b>\u05D0\u05D9\u05E0\u05D4</b> \u05DB\u05EA\u05D5\u05D1\u05EA \u05EA\u05E7\u05D9\u05E0\u05D4!</li>
      </ul>`,tip:"4 \u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD \xD7 8 \u05D1\u05D9\u05D8\u05D9\u05DD = 32 \u05D1\u05D9\u05D8\u05D9\u05DD. \u05D6\u05DB\u05E8\u05D5: 4 \xD7 8 = 32.",anim:(s,t)=>{let e=v("div",{class:"bitsim"});s.innerHTML="",s.append(e);let n="11000000101010000000101000000101".split(""),i=v("div",{style:{width:"100%"}});e.append(i);let r=v("div",{class:"bs-oct"}),o=[192,168,10,5],a=o.map((u,f)=>v("div",{},v("small",{},`\u05D0\u05D5\u05E7\u05D8\u05D8 ${f+1}`),v("b",{},"?"),v("small",{},"8 \u05D1\u05D9\u05D8\u05D9\u05DD")));r.append(...a);let c=v("div",{class:"bigsum"},""),l=v("div",{class:"sim-caption on"});e.append(r,c,l,v("div",{class:"sim-controls"},v("button",{class:"btn small",onclick:()=>d()},"\u21BB \u05D4\u05E4\u05E2\u05DC \u05E9\u05D5\u05D1")));let h=0,d=async()=>{let u=++h,f=()=>t.alive&&u===h;i.innerHTML="",a.forEach((m,M)=>{m.classList.remove("on"),m.querySelector("b").textContent="?"}),c.textContent="";let{cells:p,wrap:x}=Lr(i,n.map(()=>"?"));p.forEach(m=>{m.classList.remove("b0","b1"),m.classList.add("q","hid")});let g=x.querySelectorAll(".bit-dot");g.forEach(m=>m.style.opacity=0),l.innerHTML="\u05DB\u05EA\u05D5\u05D1\u05EA IPv4 \u05DE\u05EA\u05D7\u05D9\u05DC\u05D4 \u05DB-32 \u05EA\u05D0\u05D9\u05DD \u05E8\u05D9\u05E7\u05D9\u05DD \u2013 32 \u05D1\u05D9\u05D8\u05D9\u05DD\u2026";for(let m=0;m<32;m++){if(!f())return;p[m].classList.remove("hid"),m%4===0&&at("tick"),await t.wait(45)}if(await t.wait(500),l.innerHTML="\u05DE\u05D7\u05DC\u05E7\u05D9\u05DD \u05DC-<b>4 \u05E7\u05D1\u05D5\u05E6\u05D5\u05EA \u05E9\u05DC 8 \u05D1\u05D9\u05D8\u05D9\u05DD</b> \u2013 \u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD, \u05D5\u05DE\u05E4\u05E8\u05D9\u05D3\u05D9\u05DD \u05D1\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA.",g.forEach(m=>m.style.opacity=1),a.forEach(m=>m.classList.add("on")),await t.wait(1200),!!f()){l.innerHTML="\u05DB\u05DC \u05D1\u05D9\u05D8 \u05DE\u05E7\u05D1\u05DC \u05E2\u05E8\u05DA: 0 \u05D0\u05D5 1\u2026";for(let m=0;m<32;m++){if(!f())return;p[m].textContent=n[m],p[m].className="bit q b"+n[m],p[m].classList.remove("q"),await t.wait(35)}await t.wait(500),l.innerHTML="\u05D5\u05DE\u05EA\u05E8\u05D2\u05DE\u05D9\u05DD \u05DB\u05DC \u05D0\u05D5\u05E7\u05D8\u05D8 \u05DC\u05DE\u05E1\u05E4\u05E8 \u05E2\u05E9\u05E8\u05D5\u05E0\u05D9 (0\u2013255):";for(let m=0;m<4;m++){if(!f())return;a[m].querySelector("b").textContent=o[m],a[m].classList.add("on"),at("collect"),c.textContent=o.slice(0,m+1).join(".")+(m<3?".":""),await t.wait(700)}l.innerHTML="<b>192.168.10.5</b> \u2013 \u05DB\u05DA \u05E0\u05E8\u05D0\u05D9\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA IP \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA!"}};d()},questions:[{tier:1,type:"mc",q:"\u05DB\u05DE\u05D4 \u05D1\u05D9\u05D8\u05D9\u05DD \u05D9\u05E9 \u05D1\u05DB\u05EA\u05D5\u05D1\u05EA IPv4?",options:["8","16","32","128"],a:2,why:"\u05DB\u05EA\u05D5\u05D1\u05EA IPv4 \u05D4\u05D9\u05D0 32 \u05D1\u05D9\u05D8\u05D9\u05DD: 4 \u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD \xD7 8 \u05D1\u05D9\u05D8\u05D9\u05DD.",hint:"4 \u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD, \u05D1\u05DB\u05DC \u05D0\u05D7\u05D3 8 \u05D1\u05D9\u05D8\u05D9\u05DD."},{tier:1,type:"tf",q:"\u05D4\u05DB\u05EA\u05D5\u05D1\u05EA <code>192.168.1.256</code> \u05D4\u05D9\u05D0 \u05DB\u05EA\u05D5\u05D1\u05EA IPv4 \u05EA\u05E7\u05D9\u05E0\u05D4.",a:!1,why:"\u05D0\u05D5\u05E7\u05D8\u05D8 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05E2\u05D3 255 \u05D1\u05DC\u05D1\u05D3 (8 \u05D1\u05D9\u05D8\u05D9\u05DD: 0\u2013255), \u05DC\u05DB\u05DF 256 \u05D0\u05D9\u05E0\u05D5 \u05EA\u05E7\u05D9\u05DF."},{tier:2,type:"mc",q:"\u05DB\u05DE\u05D4 \u05E2\u05E8\u05DB\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD \u05D9\u05DB\u05D5\u05DC \u05DC\u05E7\u05D1\u05DC \u05D0\u05D5\u05E7\u05D8\u05D8 \u05D0\u05D7\u05D3?",options:["255","256","128","100"],a:1,why:"2\u2078 = 256 \u05E2\u05E8\u05DB\u05D9\u05DD: \u05DE-0 \u05D5\u05E2\u05D3 255."}]},{title:"\u05DE\u05E2\u05D1\u05E8 \u05D1\u05D9\u05DF \u05D1\u05D9\u05E0\u05D0\u05E8\u05D9 \u05DC\u05E2\u05E9\u05E8\u05D5\u05E0\u05D9",body:`<p>\u05DE\u05D7\u05E9\u05D1\u05D9\u05DD \u05DE\u05D3\u05D1\u05E8\u05D9\u05DD \u05D1\u05D1\u05D9\u05E0\u05D0\u05E8\u05D9. \u05DB\u05DC \u05D1\u05D9\u05D8 \u05D1\u05D0\u05D5\u05E7\u05D8\u05D8 \u05E9\u05D5\u05D5\u05D4 \u05DC<b>\u05DE\u05E9\u05E7\u05DC</b>, \u05DB\u05DE\u05D5 \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D1\u05E7\u05D5\u05E4\u05D4:</p>
      <p><code>128 &nbsp;64 &nbsp;32 &nbsp;16 &nbsp;8 &nbsp;4 &nbsp;2 &nbsp;1</code></p>
      <ul>
        <li><b>\u05D1\u05D9\u05E0\u05D0\u05E8\u05D9 \u2190 \u05E2\u05E9\u05E8\u05D5\u05E0\u05D9:</b> \u05DE\u05D7\u05D1\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05E7\u05DC\u05D9\u05DD \u05E9\u05DC \u05D4\u05D1\u05D9\u05D8\u05D9\u05DD \u05D4\u05D3\u05D5\u05DC\u05E7\u05D9\u05DD (1). \u05DC\u05DE\u05E9\u05DC <code>11000000</code> = 128 + 64 = <b>192</b>.</li>
        <li><b>\u05E2\u05E9\u05E8\u05D5\u05E0\u05D9 \u2190 \u05D1\u05D9\u05E0\u05D0\u05E8\u05D9:</b> \u05E2\u05D5\u05D1\u05E8\u05D9\u05DD \u05DE\u05E9\u05DE\u05D0\u05DC \u05DC\u05D9\u05DE\u05D9\u05DF \u2013 \u05D0\u05DD \u05D4\u05DE\u05E9\u05E7\u05DC \u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC\u05DE\u05D4 \u05E9\u05E0\u05E9\u05D0\u05E8, \u05DB\u05D5\u05EA\u05D1\u05D9\u05DD 1 \u05D5\u05DE\u05D7\u05E1\u05E8\u05D9\u05DD \u05D0\u05D5\u05EA\u05D5; \u05D0\u05D7\u05E8\u05EA \u05DB\u05D5\u05EA\u05D1\u05D9\u05DD 0.</li>
      </ul>
      <p>\u05E0\u05E1\u05D5 \u05D1\u05E2\u05E6\u05DE\u05DB\u05DD: \u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D4\u05D1\u05D9\u05D8\u05D9\u05DD \u05D5\u05E6\u05E4\u05D5 \u05D1\u05E1\u05DB\u05D5\u05DD!</p>`,tip:"\u05DB\u05E9\u05DB\u05DC 8 \u05D4\u05D1\u05D9\u05D8\u05D9\u05DD \u05D3\u05D5\u05DC\u05E7\u05D9\u05DD: 128+64+32+16+8+4+2+1 = 255 \u2013 \u05D4\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D2\u05D3\u05D5\u05DC \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D1\u05D0\u05D5\u05E7\u05D8\u05D8.",stageTitle:"\u{1F52C} \u05DE\u05D7\u05E9\u05D1\u05D5\u05DF \u05E8\u05D5\u05E0\u05D5\u05EA",anim:(s,t)=>{let e=v("div",{class:"bitsim"});s.innerHTML="",s.append(e);let n=[128,64,32,16,8,4,2,1],i=v("div",{class:"weights"},...n.map(p=>v("span",{},p))),r=n.map(()=>v("button",{class:"tbit"},"0"));r.forEach(p=>p.addEventListener("click",()=>{p.classList.toggle("on"),at("click"),d()}));let o=v("div",{class:"togglebits"},...r),a=v("div",{class:"eqn"}),c=v("div",{class:"bigsum"},"0"),l=v("div",{class:"conv-lines"}),h=v("input",{type:"number",min:0,max:255,placeholder:"\u05DE\u05E1\u05E4\u05E8 0\u2013255",class:"q-input small",dir:"ltr"});h.addEventListener("keydown",p=>p.stopPropagation());let d=()=>{let p=0,x=[];r.forEach((g,m)=>{let M=g.classList.contains("on");g.textContent=M?"1":"0",M&&(p+=n[m],x.push(n[m]))}),c.textContent=p,a.textContent=x.length?x.join(" + ")+" = "+p:"\u05DB\u05DC \u05D4\u05D1\u05D9\u05D8\u05D9\u05DD \u05DB\u05D1\u05D5\u05D9\u05D9\u05DD = 0"},u=async p=>{let x=p;l.innerHTML="";for(let g=0;g<8;g++){if(!t.alive)return;let m=x>=n[g];r[g].classList.toggle("on",m);let M=v("div",{class:m?"y":"n"},m?`${n[g]} \u2264 ${x}  \u2714  \u2192  bit = 1   (rest = ${x-n[g]})`:`${n[g]} > ${x}  \u2718  \u2192  bit = 0`);l.append(M),m&&(x-=n[g]),d(),at("tick"),await t.wait(420)}},f=v("div",{class:"sim-controls static"},...[192,168,10,255].map(p=>v("button",{class:"btn small",onclick:()=>u(p)},`\u05D4\u05DE\u05E8 ${p}`)),h,v("button",{class:"btn small gold",onclick:()=>{let p=Math.max(0,Math.min(255,+h.value||0));u(p)}},"\u05D4\u05DE\u05E8"));e.append(i,o,a,c,l,f),d(),u(172)},questions:[{tier:1,type:"input",q:"\u05DE\u05D4\u05D5 \u05D4\u05E2\u05E8\u05DA \u05D4\u05E2\u05E9\u05E8\u05D5\u05E0\u05D9 \u05E9\u05DC <code>00001010</code>?",answer:"10",why:"8 + 2 = 10.",hint:"\u05E8\u05E7 \u05D4\u05D1\u05D9\u05D8\u05D9\u05DD \u05E9\u05DC 8 \u05D5\u05E9\u05DC 2 \u05D3\u05D5\u05DC\u05E7\u05D9\u05DD.",placeholder:"\u05DE\u05E1\u05E4\u05E8"},{tier:2,type:"mc",q:"\u05DE\u05D4\u05D9 \u05D4\u05DB\u05EA\u05D5\u05D1\u05EA <code>172</code> \u05D1\u05D1\u05D9\u05E0\u05D0\u05E8\u05D9?",options:["10101100","10110010","11001010","10011100"],a:0,keepOrder:!1,why:"172 = 128 + 32 + 8 + 4 \u21D2 10101100.",hint:"\u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05DE-128: 172\u2212128=44, \u05D0\u05D7\u05E8 \u05DB\u05DA 32, 8 \u05D5-4."},{tier:3,type:"input",q:"\u05D4\u05E7\u05DC\u05D3 \u05D0\u05EA \u05D4\u05E2\u05E8\u05DA \u05D4\u05E2\u05E9\u05E8\u05D5\u05E0\u05D9 \u05E9\u05DC \u05D4\u05D0\u05D5\u05E7\u05D8\u05D8 <code>11000000</code>",answer:"192",why:"128 + 64 = 192.",placeholder:"\u05DE\u05E1\u05E4\u05E8"},{tier:3,type:"mc",q:"\u05DE\u05D4\u05D5 \u05D4\u05D0\u05D5\u05E7\u05D8\u05D8 \u05D4\u05D1\u05D9\u05E0\u05D0\u05E8\u05D9 \u05E9\u05DC \u05D4\u05DE\u05E1\u05E4\u05E8 255?",options:["11111111","11111110","10000000","01111111"],a:0,why:"\u05DB\u05DC \u05D4\u05D1\u05D9\u05D8\u05D9\u05DD \u05D3\u05D5\u05DC\u05E7\u05D9\u05DD: 128+64+32+16+8+4+2+1=255."}]},{title:"\u05DB\u05EA\u05D5\u05D1\u05EA IP \u05DE\u05D5\u05DC \u05DB\u05EA\u05D5\u05D1\u05EA MAC",body:`<p>\u05DC\u05DB\u05DC \u05DB\u05E8\u05D8\u05D9\u05E1 \u05E8\u05E9\u05EA \u05D9\u05E9 \u05E9\u05EA\u05D9 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA:</p>
      <ul>
        <li><b>\u05DB\u05EA\u05D5\u05D1\u05EA MAC</b> \u2013 \u05DB\u05EA\u05D5\u05D1\u05EA <b>\u05E4\u05D9\u05D6\u05D9\u05EA</b> \u05E9\u05DC 48 \u05D1\u05D9\u05D8 (\u05D1\u05D4\u05E7\u05E1\u05D3\u05E6\u05D9\u05DE\u05DC\u05D9, \u05DB\u05DE\u05D5 ${Qo("00-1A-2B-3C-4D-5E")}). \u05E0\u05E6\u05E8\u05D1\u05EA \u05D1\u05DB\u05E8\u05D8\u05D9\u05E1 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05D9\u05E6\u05E8\u05DF \u05D5\u05DC\u05D0 \u05DE\u05E9\u05EA\u05E0\u05D4.</li>
        <li><b>\u05DB\u05EA\u05D5\u05D1\u05EA IP</b> \u2013 \u05DB\u05EA\u05D5\u05D1\u05EA <b>\u05DC\u05D5\u05D2\u05D9\u05EA</b>. \u05D4\u05D9\u05D0 \u05EA\u05DC\u05D5\u05D9\u05D4 \u05D1<b>\u05E8\u05E9\u05EA</b> \u05E9\u05D0\u05DC\u05D9\u05D4 \u05DE\u05D7\u05D5\u05D1\u05E8\u05D9\u05DD, \u05D5\u05DC\u05DB\u05DF <b>\u05DE\u05E9\u05EA\u05E0\u05D4</b> \u05DB\u05E9\u05E2\u05D5\u05D1\u05E8\u05D9\u05DD \u05DC\u05E8\u05E9\u05EA \u05D0\u05D7\u05E8\u05EA.</li>
      </ul>
      <p>\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D7\u05E9\u05D5\u05D1 \u05E2\u05DC MAC \u05DB\u05DE\u05D5 \u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA, \u05D5\u05E2\u05DC IP \u05DB\u05DE\u05D5 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05DE\u05D2\u05D5\u05E8\u05D9\u05DD \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9\u05EA \u05E9\u05DC\u05DB\u05DD.</p>`,tip:"IP \u05D0\u05D5\u05DE\u05E8 \u05D0\u05D9\u05E4\u05D4 \u05D0\u05EA\u05D4 \u05D1\u05E8\u05E9\u05EA, MAC \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D9 \u05D0\u05EA\u05D4.",anim:(s,t)=>{let e=new ls(s,t);e.zone(27,50,40,78,"\u05E8\u05E9\u05EA \u05D4\u05D1\u05D9\u05EA 192.168.1.0","#3ddc97"),e.zone(75,50,40,78,"\u05E8\u05E9\u05EA \u05D1\u05D9\u05EA \u05D4\u05E1\u05E4\u05E8 10.5.0.0","#6c8bff");let n=e.dev("laptop","\u05D4\u05DE\u05D7\u05E9\u05D1 \u05E9\u05DC \u05D3\u05E0\u05D4","192.168.1.37",27,50,{size:66}),i=v("div",{class:"nic"},"\u{1F512} MAC: 00-1A-2B-3C-4D-5E");n.append(i);let r=!0,o=!1;e.caption("\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4-IP \u05E9\u05DC \u05D4\u05DE\u05D7\u05E9\u05D1 \u05EA\u05DC\u05D5\u05D9\u05D4 \u05D1\u05E8\u05E9\u05EA \u05E9\u05D0\u05DC\u05D9\u05D4 \u05D4\u05D5\u05D0 \u05DE\u05D7\u05D5\u05D1\u05E8."),e.btn("\u{1F6B6} \u05D4\u05E2\u05D1\u05E8 \u05D0\u05EA \u05D4\u05DE\u05D7\u05E9\u05D1 \u05DC\u05E8\u05E9\u05EA \u05D0\u05D7\u05E8\u05EA",async()=>{o||(o=!0,at("whoosh"),await e.moveTo(n,r?75:27,50,1400),r?n.setIp("10.5.0.88"):n.setIp("192.168.1.37"),r=!r,n.glow("#ffd35c"),e.caption("\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4-<b>IP \u05D4\u05E9\u05EA\u05E0\u05EA\u05D4</b> \u05DC\u05E8\u05E9\u05EA \u05D4\u05D7\u05D3\u05E9\u05D4, \u05D0\u05D1\u05DC \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4-<b>MAC</b> \u05E0\u05E9\u05D0\u05E8\u05D4 \u05D0\u05D5\u05EA\u05D4 \u05DB\u05EA\u05D5\u05D1\u05EA \u2013 \u05D4\u05D9\u05D0 \u05D7\u05DC\u05E7 \u05DE\u05D4\u05D7\u05D5\u05DE\u05E8\u05D4.","good"),o=!1)})},questions:[{tier:1,type:"mc",q:"\u05DE\u05D4 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05DB\u05E9\u05DE\u05E2\u05D1\u05D9\u05E8\u05D9\u05DD \u05DE\u05D7\u05E9\u05D1 \u05E0\u05D9\u05D9\u05D3 \u05DC\u05E8\u05E9\u05EA \u05D0\u05D7\u05E8\u05EA?",options:["\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4-IP","\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4-MAC","\u05E9\u05E0\u05D9\u05D4\u05DD","\u05D0\u05E3 \u05D0\u05D7\u05D3 \u05DE\u05D4\u05DD"],a:0,why:"\u05DB\u05EA\u05D5\u05D1\u05EA IP \u05EA\u05DC\u05D5\u05D9\u05D4 \u05D1\u05E8\u05E9\u05EA \u05D5\u05DC\u05DB\u05DF \u05DE\u05E9\u05EA\u05E0\u05D4. \u05DB\u05EA\u05D5\u05D1\u05EA MAC \u05E0\u05E6\u05E8\u05D1\u05EA \u05D1\u05DB\u05E8\u05D8\u05D9\u05E1 \u05D4\u05E8\u05E9\u05EA."},{tier:2,type:"mc",q:"\u05DB\u05EA\u05D5\u05D1\u05EA MAC \u05D4\u05D9\u05D0:",options:["\u05DB\u05EA\u05D5\u05D1\u05EA \u05E4\u05D9\u05D6\u05D9\u05EA \u05E9\u05DC \u05DB\u05E8\u05D8\u05D9\u05E1 \u05D4\u05E8\u05E9\u05EA","\u05DB\u05EA\u05D5\u05D1\u05EA \u05DC\u05D5\u05D2\u05D9\u05EA \u05E9\u05DC \u05D4\u05E8\u05E9\u05EA","\u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05DC \u05E9\u05E8\u05EA DNS","\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D0\u05EA\u05E8"],a:0,why:"MAC = \u05DB\u05EA\u05D5\u05D1\u05EA \u05E4\u05D9\u05D6\u05D9\u05EA, \u05E0\u05E7\u05D1\u05E2\u05EA \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05D9\u05E6\u05E8\u05DF."},{tier:3,type:"mc",q:"\u05DB\u05DE\u05D4 \u05D1\u05D9\u05D8\u05D9\u05DD \u05D9\u05E9 \u05D1\u05DB\u05EA\u05D5\u05D1\u05EA MAC?",options:["32","48","64","128"],a:1,why:"\u05DB\u05EA\u05D5\u05D1\u05EA MAC \u05D4\u05D9\u05D0 48 \u05D1\u05D9\u05D8 (6 \u05D1\u05EA\u05D9\u05DD), \u05D5\u05DC\u05DB\u05DF \u05E0\u05DB\u05EA\u05D1\u05EA \u05DB-12 \u05E1\u05E4\u05E8\u05D5\u05EA \u05D4\u05E7\u05E1\u05D3\u05E6\u05D9\u05DE\u05DC\u05D9\u05D5\u05EA."}]},{title:"\u05DB\u05DE\u05D4 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05D9\u05E9? IPv4 \u05D5-IPv6",body:`<p>\u05D1-IPv4 \u05D9\u05E9 2\xB3\xB2 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u2013 \u05D1\u05E2\u05E8\u05DA <b>4.3 \u05DE\u05D9\u05DC\u05D9\u05D0\u05E8\u05D3</b>. \u05E0\u05E9\u05DE\u05E2 \u05D4\u05E8\u05D1\u05D4, \u05D0\u05D1\u05DC \u05D1\u05E2\u05D5\u05DC\u05DD \u05D9\u05E9 \u05D4\u05E8\u05D1\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD: \u05D8\u05DC\u05E4\u05D5\u05E0\u05D9\u05DD, \u05E9\u05E2\u05D5\u05E0\u05D9\u05DD, \u05DE\u05E6\u05DC\u05DE\u05D5\u05EA, \u05DE\u05DB\u05D5\u05E0\u05D9\u05D5\u05EA\u2026</p>
      <ul>
        <li>\u05D4\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05D1-IPv4 <b>\u05D0\u05D6\u05DC\u05D5</b> \u05DB\u05DE\u05E2\u05D8 \u05DC\u05D2\u05DE\u05E8\u05D9.</li>
        <li>\u05E4\u05EA\u05E8\u05D5\u05DF \u05D6\u05DE\u05E0\u05D9: <b>\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05D5-NAT</b> \u2013 \u05E0\u05DC\u05DE\u05D3 \u05E2\u05DC \u05DB\u05DA \u05D1\u05D4\u05DE\u05E9\u05DA.</li>
        <li>\u05E4\u05EA\u05E8\u05D5\u05DF \u05DE\u05DC\u05D0: <b>IPv6</b> \u2013 \u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05DC <b>128 \u05D1\u05D9\u05D8</b>, \u05DB\u05DE\u05D5 ${Qo("2001:db8::1")}. \u05D9\u05E9 \u05D1\u05D4 \u05D1\u05E2\u05E8\u05DA 3.4 \xD7 10\xB3\u2078 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u2013 \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DC\u05DB\u05DC \u05D2\u05E8\u05D2\u05E8 \u05D7\u05D5\u05DC \u05D1\u05DB\u05D3\u05D5\u05E8 \u05D4\u05D0\u05E8\u05E5 \u05D5\u05E2\u05D5\u05D3 \u05D4\u05E8\u05D1\u05D4 \u05D9\u05D5\u05EA\u05E8.</li>
      </ul>`,tip:"IPv4 = 32 \u05D1\u05D9\u05D8, IPv6 = 128 \u05D1\u05D9\u05D8.",anim:(s,t)=>{let e=v("div",{class:"bitsim"});s.innerHTML="",s.append(e);let n=v("div",{class:"jar-grid"},...Array.from({length:100},()=>v("i"))),i=v("div",{class:"jar-grid"},...Array.from({length:100},()=>v("i",{class:"g"}))),r=v("b",{},"4,294,967,296 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA"),o=v("div",{class:"jars"},v("div",{class:"jar"},v("h4",{},"IPv4 \u2013 32 \u05D1\u05D9\u05D8"),n,r),v("div",{class:"jar"},v("h4",{},"IPv6 \u2013 128 \u05D1\u05D9\u05D8"),i,v("b",{},"340,282,366,920,938,463,463,374,607,431,768,211,456"))),a=v("div",{class:"sim-caption on"});e.append(o,a);let c=0;a.innerHTML="\u05DB\u05DC \u05DE\u05E9\u05D1\u05E6\u05EA \u05D1-IPv4 \u05DE\u05D9\u05D9\u05E6\u05D2\u05EA ~43 \u05DE\u05D9\u05DC\u05D9\u05D5\u05DF \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA. \u05DC\u05D7\u05E6\u05D5 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05DC\u05E2\u05D5\u05DC\u05DD.";let l=async d=>{for(let u=0;u<d&&c<100;u++){if(!t.alive)return;n.children[c].classList.add("f"),c++,at("tick"),await t.wait(40)}c>=100?a.innerHTML="\u26A0\uFE0F <b>\u05D4\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05D0\u05D6\u05DC\u05D5!</b> \u05DC\u05DB\u05DF \u05D4\u05DE\u05E6\u05D9\u05D0\u05D5 NAT \u05D5\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA, \u05D5\u05D1\u05E2\u05D9\u05E7\u05E8 \u05D0\u05EA IPv6 \u05E2\u05DD \u05DE\u05E8\u05D7\u05D1 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E2\u05E6\u05D5\u05DD.":a.innerHTML=`\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD \u05DE\u05E6\u05D8\u05E8\u05E4\u05D9\u05DD\u2026 ${c}% \u05DE\u05D4\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E0\u05EA\u05E4\u05E1\u05D5.`},h={ctrl:v("div",{class:"sim-controls"})};h.ctrl.append(v("button",{class:"btn small",onclick:()=>l(10)},"\u{1F4F1} \u05D4\u05D5\u05E1\u05E3 \u05E2\u05D5\u05D3 \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD"),v("button",{class:"btn small ghost",onclick:()=>{n.querySelectorAll("i").forEach(d=>d.classList.remove("f")),c=0,a.textContent="\u05D4\u05EA\u05D7\u05DC\u05D4 \u05DE\u05D7\u05D3\u05E9."}},"\u21BA \u05D0\u05E4\u05E1")),e.append(h.ctrl)},questions:[{tier:1,type:"mc",q:"\u05DE\u05D3\u05D5\u05E2 \u05E0\u05D5\u05E6\u05E8 IPv6?",options:["\u05DB\u05D9 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA IPv4 \u05D0\u05D5\u05D6\u05DC\u05D5\u05EA","\u05DB\u05D3\u05D9 \u05DC\u05D4\u05D0\u05D8 \u05D0\u05EA \u05D4\u05E8\u05E9\u05EA","\u05DB\u05D9 IPv4 \u05D0\u05E1\u05D5\u05E8 \u05D1\u05E9\u05D9\u05DE\u05D5\u05E9","\u05DB\u05D3\u05D9 \u05DC\u05D4\u05D7\u05DC\u05D9\u05E3 \u05D0\u05EA \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA MAC"],a:0,why:"\u05DE\u05E8\u05D7\u05D1 \u05D4\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E9\u05DC IPv4 (\u05DB-4.3 \u05DE\u05D9\u05DC\u05D9\u05D0\u05E8\u05D3) \u05DC\u05D0 \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DC\u05E2\u05D5\u05DC\u05DD \u05E9\u05DC \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD."},{tier:3,type:"mc",q:"\u05DB\u05DE\u05D4 \u05D1\u05D9\u05D8\u05D9\u05DD \u05D9\u05E9 \u05D1\u05DB\u05EA\u05D5\u05D1\u05EA IPv6?",options:["64","96","128","256"],a:2,why:"IPv6 \u05D4\u05D5\u05D0 128 \u05D1\u05D9\u05D8."}]}],quiz:[{tier:1,type:"mc",q:"\u05DB\u05EA\u05D5\u05D1\u05EA IPv4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u2026",options:["4 \u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD \u05E9\u05DC 8 \u05D1\u05D9\u05D8\u05D9\u05DD","6 \u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD \u05E9\u05DC 8 \u05D1\u05D9\u05D8\u05D9\u05DD","2 \u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD \u05E9\u05DC 16 \u05D1\u05D9\u05D8\u05D9\u05DD","8 \u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD \u05E9\u05DC 4 \u05D1\u05D9\u05D8\u05D9\u05DD"],a:0,why:"4 \u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD \xD7 8 \u05D1\u05D9\u05D8\u05D9\u05DD = 32 \u05D1\u05D9\u05D8\u05D9\u05DD."},{tier:1,type:"mc",q:"\u05D0\u05D9\u05D6\u05D5 \u05DE\u05D4\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05D4\u05D1\u05D0\u05D5\u05EA <b>\u05EA\u05E7\u05D9\u05E0\u05D4</b>?",options:["192.168.1.10","192.168.1.300","192.168.1","256.10.10.10"],a:0,why:"\u05DB\u05EA\u05D5\u05D1\u05EA \u05EA\u05E7\u05D9\u05E0\u05D4: 4 \u05D7\u05DC\u05E7\u05D9\u05DD, \u05DB\u05DC \u05D0\u05D7\u05D3 \u05D1\u05D9\u05DF 0 \u05DC-255."},{tier:1,type:"tf",q:"\u05DB\u05EA\u05D5\u05D1\u05EA IP \u05D4\u05D9\u05D0 \u05DB\u05EA\u05D5\u05D1\u05EA \u05DC\u05D5\u05D2\u05D9\u05EA, \u05D5\u05DC\u05DB\u05DF \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D4\u05E9\u05EA\u05E0\u05D5\u05EA.",a:!0,why:"\u05DB\u05EA\u05D5\u05D1\u05EA IP \u05EA\u05DC\u05D5\u05D9\u05D4 \u05D1\u05E8\u05E9\u05EA \u05E9\u05D1\u05D4 \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8 \u05E0\u05DE\u05E6\u05D0."},{tier:1,type:"mc",q:"\u05DE\u05D4\u05D5 \u05D4\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D2\u05D3\u05D5\u05DC \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E9\u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D5\u05E4\u05D9\u05E2 \u05D1\u05D0\u05D5\u05E7\u05D8\u05D8?",options:["100","128","255","256"],a:2,why:"8 \u05D1\u05D9\u05D8\u05D9\u05DD: 0 \u05E2\u05D3 255."},{tier:1,type:"mc",q:"\u05DE\u05D4 \u05EA\u05E4\u05E7\u05D9\u05D3 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4-IP?",options:["\u05DC\u05D6\u05D4\u05D5\u05EA \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D1\u05E8\u05E9\u05EA \u05D5\u05DC\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05D0\u05DC\u05D9\u05D5 \u05DE\u05D9\u05D3\u05E2","\u05DC\u05D4\u05E6\u05E4\u05D9\u05DF \u05E7\u05D1\u05E6\u05D9\u05DD","\u05DC\u05D7\u05E9\u05D1 \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8","\u05DC\u05E9\u05DE\u05D5\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D0\u05D5\u05EA"],a:0,why:"IP \u05DE\u05D6\u05D4\u05D4 \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D1\u05E8\u05E9\u05EA."},{tier:2,type:"input",q:"\u05DE\u05D4\u05D5 \u05D4\u05E2\u05E8\u05DA \u05D4\u05E2\u05E9\u05E8\u05D5\u05E0\u05D9 \u05E9\u05DC <code>10000001</code>?",answer:"129",why:"128 + 1 = 129.",placeholder:"\u05DE\u05E1\u05E4\u05E8"},{tier:2,type:"mc",q:"\u05DE\u05D4\u05D5 <code>00001100</code> \u05D1\u05E2\u05E9\u05E8\u05D5\u05E0\u05D9?",options:["12","14","6","24"],a:0,why:"8 + 4 = 12."},{tier:2,type:"mc",q:"\u05D4\u05DE\u05E1\u05E4\u05E8 <code>168</code> \u05D1\u05D1\u05D9\u05E0\u05D0\u05E8\u05D9 \u05D4\u05D5\u05D0:",options:["10101000","10100100","10101010","10011000"],a:0,why:"168 = 128 + 32 + 8 \u21D2 10101000."},{tier:2,type:"mc",q:"\u05DE\u05D4 \u05D4\u05D4\u05D1\u05D3\u05DC \u05D4\u05DE\u05E8\u05DB\u05D6\u05D9 \u05D1\u05D9\u05DF \u05DB\u05EA\u05D5\u05D1\u05EA IP \u05DC\u05DB\u05EA\u05D5\u05D1\u05EA MAC?",options:["IP \u05DC\u05D5\u05D2\u05D9\u05EA \u05D5\u05DE\u05E9\u05EA\u05E0\u05D4 \u05DC\u05E4\u05D9 \u05D4\u05E8\u05E9\u05EA; MAC \u05E4\u05D9\u05D6\u05D9\u05EA \u05D5\u05E7\u05D1\u05D5\u05E2\u05D4","IP \u05E4\u05D9\u05D6\u05D9\u05EA \u05D5-MAC \u05DC\u05D5\u05D2\u05D9\u05EA","\u05E9\u05EA\u05D9\u05D4\u05DF \u05E7\u05D1\u05D5\u05E2\u05D5\u05EA","\u05E9\u05EA\u05D9\u05D4\u05DF \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA \u05DC\u05E4\u05D9 \u05D4\u05E8\u05E9\u05EA"],a:0,why:"MAC \u05E0\u05E6\u05E8\u05D1\u05EA \u05D1\u05DB\u05E8\u05D8\u05D9\u05E1; IP \u05E0\u05E7\u05D1\u05E2\u05EA \u05DC\u05E4\u05D9 \u05D4\u05E8\u05E9\u05EA."},{tier:2,type:"mc",q:"\u05DB\u05DE\u05D4 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D9\u05E6\u05D5\u05E8 \u05D1-IPv4 (\u05D1\u05E7\u05D9\u05E8\u05D5\u05D1)?",options:["4.3 \u05DE\u05D9\u05DC\u05D9\u05D0\u05E8\u05D3","65 \u05D0\u05DC\u05E3","256","340 \u05E1\u05E7\u05E1\u05D8\u05D9\u05DC\u05D9\u05D5\u05DF"],a:0,why:"2\xB3\xB2 \u2248 4.3 \u05DE\u05D9\u05DC\u05D9\u05D0\u05E8\u05D3."},{tier:3,type:"order",q:"\u05E1\u05D3\u05E8\u05D5 \u05D0\u05EA \u05D4\u05DE\u05E9\u05E7\u05DC\u05D9\u05DD \u05E9\u05DC \u05D4\u05D0\u05D5\u05E7\u05D8\u05D8 \u05DE\u05D4\u05D2\u05D3\u05D5\u05DC \u05DC\u05E7\u05D8\u05DF",items:["128","64","32","16","8","4","2","1"],why:"\u05DB\u05DC \u05DE\u05E9\u05E7\u05DC \u05D2\u05D3\u05D5\u05DC \u05E4\u05D9 2 \u05DE\u05D4\u05E7\u05D5\u05D3\u05DD."},{tier:3,type:"input",q:"\u05DE\u05D4\u05D5 \u05D4\u05E2\u05E8\u05DA \u05D4\u05E2\u05E9\u05E8\u05D5\u05E0\u05D9 \u05E9\u05DC \u05D4\u05D0\u05D5\u05E7\u05D8\u05D8 <code>11100000</code>?",answer:"224",why:"128 + 64 + 32 = 224.",placeholder:"\u05DE\u05E1\u05E4\u05E8"},{tier:3,type:"mc",q:"\u05DE\u05D4\u05D5 \u05D4\u05D0\u05D5\u05E7\u05D8\u05D8 \u05D4\u05D1\u05D9\u05E0\u05D0\u05E8\u05D9 \u05E9\u05DC <code>10</code>?",options:["00001010","00001100","00010100","00000101"],a:0,why:"10 = 8 + 2 \u21D2 00001010."},{tier:3,type:"mc",q:"\u05DB\u05DE\u05D4 \u05D1\u05D9\u05D8\u05D9\u05DD \u05E9\u05DC \u05DB\u05EA\u05D5\u05D1\u05EA IPv6 \u05DC\u05E2\u05D5\u05DE\u05EA IPv4?",options:["128 \u05DC\u05E2\u05D5\u05DE\u05EA 32","64 \u05DC\u05E2\u05D5\u05DE\u05EA 32","256 \u05DC\u05E2\u05D5\u05DE\u05EA 64","48 \u05DC\u05E2\u05D5\u05DE\u05EA 32"],a:0,why:"IPv6 = 128 \u05D1\u05D9\u05D8; IPv4 = 32 \u05D1\u05D9\u05D8."}],game:{name:"\u05E8\u05D5\u05E0\u05D5\u05EA \u05D1\u05D9\u05E0\u05D0\u05E8\u05D9\u05D5\u05EA",intro:`<p>\u05DE\u05D2\u05D3\u05DC \u05D4\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05DB\u05D1\u05D4! \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D3\u05DC\u05D9\u05E7 \u05D0\u05EA \u05E8\u05D5\u05E0\u05D5\u05EA \u05D4\u05E7\u05E1\u05DD \u05D1\u05E7\u05D5\u05DE\u05D5\u05EA \u05D4\u05DE\u05D2\u05D3\u05DC. \u05D1\u05DB\u05DC \u05E1\u05D9\u05D1\u05D5\u05D1 \u05DE\u05D5\u05E4\u05D9\u05E2 \u05DE\u05E1\u05E4\u05E8 \u2013 \u05D4\u05E4\u05DB\u05D5 \u05D0\u05EA <b>\u05E8\u05D5\u05E0\u05D5\u05EA \u05D4\u05D1\u05D9\u05D8\u05D9\u05DD</b> (128, 64, \u2026 1) \u05DB\u05DA \u05E9\u05D4\u05E1\u05DB\u05D5\u05DD \u05D9\u05D4\u05D9\u05D4 \u05E9\u05D5\u05D5\u05D4 \u05DC\u05DE\u05E1\u05E4\u05E8, \u05D5\u05DC\u05DE\u05D2\u05D3\u05DC \u05EA\u05D4\u05D9\u05D4 \u05E2\u05D5\u05D3 \u05E7\u05D5\u05DE\u05D4 \u05D6\u05D5\u05D4\u05E8\u05EA. \u05DB\u05DB\u05DC \u05E9\u05DE\u05D4\u05E8 \u05D9\u05D5\u05EA\u05E8 \u2013 \u05D9\u05D5\u05EA\u05E8 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA.</p>
    <p class="mini">\u05D1\u05E8\u05DE\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D5\u05EA: \u05D4\u05E1\u05DB\u05D5\u05DD \u05DE\u05D5\u05E1\u05EA\u05E8, \u05D9\u05E9 \u05D4\u05D2\u05D1\u05DC\u05EA \u05D6\u05DE\u05DF \u05E7\u05E6\u05E8\u05D4, \u05D5\u05DC\u05E4\u05E2\u05DE\u05D9\u05DD \u05E6\u05E8\u05D9\u05DA \u05D2\u05DD \u05DC\u05E7\u05E8\u05D5\u05D0 \u05D1\u05D9\u05E0\u05D0\u05E8\u05D9 \u05D5\u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05D0\u05EA \u05D4\u05DE\u05E1\u05E4\u05E8!</p>`,run:am}};cs("g2",`
.g2{position:relative;height:100%;min-height:440px;display:flex;flex-direction:column;padding:10px 16px 14px;gap:10px;overflow:hidden;background:linear-gradient(180deg,rgba(60,90,200,.18),rgba(0,0,0,0) 55%)}
.g2-top{display:flex;gap:14px;align-items:center}
.g2-top .timer{flex:1;height:12px;border-radius:8px;background:rgba(255,255,255,.12);overflow:hidden}
.g2-top .timer i{display:block;height:100%;width:100%;background:linear-gradient(90deg,#3ddc97,#ffd35c);transition:width .1s linear}
.g2-top .timer i.low{background:linear-gradient(90deg,#ff5a7a,#ff9a3a)}
.g2-top span{font-weight:800;color:#cfd6ff;white-space:nowrap}
.g2-hearts{letter-spacing:2px;font-size:20px}
.g2-letter{align-self:center;display:flex;align-items:center;gap:14px;background:linear-gradient(180deg,#fffaf0,#f1e4c0);color:#3a2a14;padding:10px 26px;border-radius:16px;border:3px solid #b89a5a;box-shadow:0 8px 22px rgba(0,0,0,.4);transform:rotate(-1deg)}
.g2-letter .env{font-size:34px}
.g2-letter small{display:block;font-size:13px;opacity:.75}
.g2-letter b{font:900 clamp(26px,4.4vw,42px) 'Secular One',sans-serif;direction:ltr;display:block}
.g2-letter .net{color:#2a5adf}.g2-letter .host{color:#12985f}
.g2-sky{flex:1;position:relative;min-height:120px}
.g2-tower{position:absolute;left:4%;bottom:0;width:90px;opacity:.95}
.g2-owl{position:absolute;width:62px;height:62px;z-index:3;transition:left 1.1s cubic-bezier(.4,.1,.3,1),top 1.1s cubic-bezier(.4,.1,.3,1),transform .6s}
.g2-owl .ico{width:100%;height:100%;filter:drop-shadow(0 4px 6px #0008)}
.g2-owl.fall{transition:top .9s cubic-bezier(.6,0,1,.6),transform .9s;transform:rotate(540deg) scale(.7)}
.g2-owl .mail{position:absolute;right:-14px;top:30px;font-size:24px}
.g2-houses{display:grid;gap:10px;grid-auto-flow:column;grid-auto-columns:1fr}
.g2-house{border:3px solid rgba(255,255,255,.28);background:rgba(255,255,255,.07);border-radius:18px;padding:8px 6px;text-align:center;cursor:pointer;transition:all .2s;color:#fff;font-family:inherit}
.g2-house:hover:not(:disabled){transform:translateY(-4px);border-color:var(--gold);background:rgba(255,211,92,.12)}
.g2-house .ico{width:52px;height:52px;margin:0 auto}
.g2-house b{display:block;font:800 clamp(12px,1.7vw,16px) ui-monospace,monospace;direction:ltr;margin-top:3px}
.g2-house small{color:var(--muted);font-size:11.5px}
.g2-house.good{border-color:#3ddc97;background:rgba(61,220,151,.28);box-shadow:0 0 28px rgba(61,220,151,.6)}
.g2-house.bad{border-color:#ff5a7a;background:rgba(255,90,122,.25)}
.g2-house.reveal{border-color:#ffd35c;box-shadow:0 0 28px rgba(255,211,92,.6)}
.g2-fb{min-height:44px;text-align:center;font-weight:700;line-height:1.5}
.g2-fb.good{color:#7dffb0}.g2-fb.bad{color:#ff8fa3}
.g2-end{margin:auto;text-align:center;display:flex;flex-direction:column;gap:10px;align-items:center}
.g2-end h2{font:900 38px 'Secular One';color:#ffd35c;margin:0}
.g2-pop{position:absolute;font:900 24px 'Secular One';color:#ffd35c;text-shadow:0 0 12px #000;animation:g2pop 1.1s forwards;z-index:5;pointer-events:none}
@keyframes g2pop{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-60px)}}
`);var Ps=(s,t)=>wr(s,t);function p_(s){if(s==="A")return Ii([1,2,3,10,20,30,100]).slice(0,3).map(n=>({net:[192,168,n,0],prefix:24}));if(s==="B"){let e=Ps(1,40),n=e+Ps(1,20);return Ii([{net:[10,0,0,0],prefix:8},{net:[172,Ps(16,31),0,0],prefix:16},{net:[192,168,e,0],prefix:24},{net:[192,168,n,0],prefix:24}])}if(s==="C"){let e=Ps(1,200);return[0,64,128,192].map(n=>({net:[192,168,e,n],prefix:26}))}if(s==="D"){let e=Ps(1,200);return Ii([0,32,64,96]).map(n=>({net:[10,1,e,n],prefix:27})).sort((n,i)=>n.net[3]-i.net[3])}let t=Ps(16,31);return[0,16,32,48].map(e=>({net:[172,t,e,0],prefix:20}))}function m_(s){let t=hs(s.net),e=2**(32-s.prefix),n=Ps(1,Math.min(e-2,1e5)),i=t+n;return i=t+1+Math.floor(Math.random()*(e-2)),Is(i)}function cm(s,t){let{level:e,mult:n,onPoints:i,onDone:r}=t,o={1:{rounds:6,time:40,kinds:["A"],hint:!0},2:{rounds:8,time:28,kinds:["A","B","B","B"],hint:!1},3:{rounds:10,time:18,kinds:["B","C","C","D","E"],hint:!1}}[e],a=0,c=3,l=0,h=null,d=!1,u=v("div",{class:"g2"});s.append(u);function f(){if(d)return;if(a>=o.rounds||c<=0)return p();u.innerHTML="";let x=o.kinds[a%o.kinds.length]==="B"&&e===3&&a%5===0?"B":Ce(o.kinds),g=p_(x),m=Ce(g),M=m_(m),b=o.time,y=!1,w=v("i",{}),E=v("span",{class:"g2-hearts"},"\u2764\uFE0F".repeat(c)+"\u{1F5A4}".repeat(3-c)),R=v("div",{class:"g2-top"},v("span",{},`\u05DE\u05DB\u05EA\u05D1 ${a+1}/${o.rounds}`),v("div",{class:"timer"},w),E,v("span",{},`\u2B50 ${Math.round(l)}`)),_=An(M),A=_;if(o.hint&&m.prefix%8===0){let G=m.prefix/8;A=`<span class="net">${M.slice(0,G).join(".")}.</span><span class="host">${M.slice(G).join(".")}</span>`}let C=v("div",{class:"g2-letter"},v("span",{class:"env"},"\u2709\uFE0F"),v("div",{},v("small",{},"\u05DC\u05D0\u05D9\u05D6\u05D5 \u05E8\u05E9\u05EA \u05D9\u05E9 \u05DC\u05DE\u05E1\u05D5\u05E8 \u05D0\u05EA \u05D4\u05DE\u05DB\u05EA\u05D1? \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D9\u05E2\u05D3:"),v("b",{html:A}))),N=v("div",{class:"g2-sky"}),U=v("div",{class:"g2-tower"},Pr("castle")),D=v("div",{class:"g2-owl"},Pr("owl"),v("span",{class:"mail"},"\u2709\uFE0F"));N.append(U,D);let P=v("div",{class:"g2-fb"}),B=v("div",{class:"g2-houses"}),W=g.map((G,ht)=>{let ct=v("button",{class:"g2-house"},Pr("house"),v("b",{},`${An(G.net)}/${G.prefix}`),v("small",{},"\u05E8\u05E9\u05EA"));return ct.addEventListener("click",()=>Z(ht,ct)),B.append(ct),ct});u.append(R,C,N,B,P);let $=(G,ht,ct)=>{ct&&(D.style.transition="none"),D.style.left=G+"px",D.style.top=ht+"px",ct&&(D.offsetWidth,D.style.transition="")};requestAnimationFrame(()=>{$(N.clientWidth*.04+14,N.clientHeight-80,!0)});let Q=G=>G;function q(){let G=m;return`${_} \u05E9\u05D9\u05D9\u05DA \u05DC\u05E8\u05E9\u05EA ${An(G.net)}/${G.prefix} (\u05E9\u05D9\u05D3\u05D5\u05E8: ${An(jo(M,G.prefix))}).`}function Z(G,ht){if(y)return;y=!0,clearInterval(h),W.forEach(nt=>nt.disabled=!0);let ct=g[G]===m,ie=ht.getBoundingClientRect(),$t=N.getBoundingClientRect(),ee=ie.left-$t.left+ie.width/2-31,J=N.clientHeight-20;D.style.left=ee+"px",D.style.top=J+"px",at("owl"),setTimeout(()=>{if(!d)if(ct){let nt=.5+.5*(b/o.time),Mt=Math.round(100*nt);l+=Mt,i&&i(Math.round(Mt*.5*n)),ht.classList.add("good"),P.className="g2-fb good",P.textContent=`\u2714 \u05E0\u05DE\u05E1\u05E8! ${q()}  (+${Mt})`;let kt=v("div",{class:"g2-pop",style:{left:ee+"px",top:J-20+"px"}},`+${Mt}`);N.append(kt),at("correct"),a++,setTimeout(f,2300)}else c--,ht.classList.add("bad"),W[g.indexOf(m)].classList.add("reveal"),D.classList.add("fall"),D.style.top=N.clientHeight+40+"px",P.className="g2-fb bad",P.textContent=`\u2718 \u05D4\u05D9\u05E0\u05E9\u05D5\u05E3 \u05D8\u05E2\u05D4\u2026 ${q()}`,at("wrong"),a++,setTimeout(f,3200)},1200)}h=setInterval(()=>{y||d||(b-=.1,w.style.width=Math.max(0,b/o.time*100)+"%",w.classList.toggle("low",b<o.time*.25),b<=0&&(y=!0,clearInterval(h),c--,W.forEach(G=>G.disabled=!0),W[g.indexOf(m)].classList.add("reveal"),P.className="g2-fb bad",P.textContent=`\u23F0 \u05D4\u05D6\u05DE\u05DF \u05E0\u05D2\u05DE\u05E8! ${q()}`,at("wrong"),a++,setTimeout(f,3e3)))},100)}function p(){clearInterval(h);let x=o.rounds*100,g=Math.round(l/x*100);u.innerHTML="",u.append(v("div",{class:"g2-end"},Pr("owl"),v("h2",{},c>0?g>=75?"\u{1F989} \u05D3\u05D5\u05D5\u05E8 \u05DE\u05E6\u05D8\u05D9\u05D9\u05DF!":"\u{1F989} \u05DE\u05E9\u05DC\u05D5\u05D7\u05D9\u05DD \u05D4\u05D2\u05D9\u05E2\u05D5!":"\u{1F494} \u05E0\u05D2\u05DE\u05E8\u05D5 \u05D4\u05DC\u05D1\u05D1\u05D5\u05EA"),v("p",{},`\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05DE\u05E9\u05D7\u05E7: ${Math.round(l)} \u05DE\u05EA\u05D5\u05DA ${x} (${g}%)`),v("p",{class:"mini"},"\u05D6\u05DB\u05E8\u05D5: \u05DB\u05D3\u05D9 \u05DC\u05D3\u05E2\u05EA \u05D1\u05D0\u05D9\u05D6\u05D5 \u05E8\u05E9\u05EA \u05D4\u05DB\u05EA\u05D5\u05D1\u05EA, \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05DE\u05E1\u05D9\u05DB\u05D4 \u2013 \u05D1\u05D9\u05D8\u05D9 \u05D4\u05E8\u05E9\u05EA \u05E7\u05D5\u05D1\u05E2\u05D9\u05DD."))),u.querySelector(".ico").style.width="90px",at("levelup"),r({score:l,max:x,msg:`\u05DE\u05E1\u05E8\u05EA \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4 ${Math.round(l/100)} \u05DE\u05DB\u05EA\u05D1\u05D9\u05DD \u05DC\u05E8\u05E9\u05EA \u05D4\u05E0\u05DB\u05D5\u05E0\u05D4 \u{1F989}`})}return f(),{destroy(){d=!0,clearInterval(h)}}}cs("z2",`
.net{color:#8fb0ff;font-weight:900}.host{color:#6dffb8;font-weight:900}
.dev-ip .net{color:#9fc0ff}.dev-ip .host{color:#7dffc0}
.bit[data-kind=net]{background:rgba(108,139,255,.35);border-color:#6c8bff;box-shadow:none}
.bit[data-kind=host]{background:rgba(61,220,151,.28);border-color:#3ddc97;box-shadow:none}
.bit[data-kind=net].b1{background:linear-gradient(180deg,#9fb6ff,#5a78f0);color:#fff;box-shadow:0 0 10px #6c8bff}
.bit[data-kind=host].b1{background:linear-gradient(180deg,#7dffc4,#25b97a);color:#05301c;box-shadow:0 0 10px #3ddc97}
.maskviz{display:flex;flex-direction:column;gap:12px;align-items:center;justify-content:center;height:100%;padding:12px 12px 74px;container-type:inline-size;width:100%}
.mv-row{display:flex;gap:8px;align-items:center;width:100%;direction:ltr}
.mv-row > span{width:62px;font-size:12px;font-weight:800;color:var(--muted);text-align:right;flex-shrink:0;direction:rtl}
.mv-row .bits{width:auto;flex:1}
.mv-info{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;width:100%}
.mv-info div{background:rgba(255,255,255,.07);border:1px solid var(--line);border-radius:12px;padding:6px 10px;text-align:center;font-size:12.5px;color:var(--muted)}
.mv-info b{display:block;font:800 clamp(13px,2.4cqw,19px) ui-monospace,monospace;color:#fff;direction:ltr}
.mv-slider{width:100%;display:flex;gap:10px;align-items:center;direction:ltr}
.mv-slider input{flex:1;accent-color:#ffd35c}
.mv-slider b{width:56px;font:900 24px 'Secular One';color:var(--gold)}
.legend{display:flex;gap:14px;font-size:12.5px;font-weight:700}
.legend i{display:inline-block;width:12px;height:12px;border-radius:4px;margin-left:4px;vertical-align:-1px}
.cls-bar{display:flex;width:100%;height:46px;border-radius:12px;overflow:hidden;direction:ltr;border:2px solid var(--line)}
.cls-bar div{display:flex;align-items:center;justify-content:center;font-weight:900;font-size:13px;color:#0d1030;position:relative}
.cls-pointer{position:absolute;top:-6px;width:3px;height:58px;background:#fff;box-shadow:0 0 10px #fff;transition:left .15s}
.cls-wrap{position:relative;width:100%}
.cls-card{background:rgba(255,255,255,.08);border:2px solid var(--line);border-radius:16px;padding:10px 16px;text-align:center;min-width:60%}
.cls-card b{font:900 30px 'Secular One';color:var(--gold);display:block}
`);var Rn=s=>`<code>${s}</code>`;function g_(s,t,e,n={}){let i=Oc(e),r=kc(i),o=v("input",{type:"range",min:8,max:30,value:n.prefix||24,step:1}),a=v("b",{},"/24"),c=v("div",{class:"mv-row"},v("span",{},"\u05DB\u05EA\u05D5\u05D1\u05EA IP")),l=v("div",{class:"mv-row"},v("span",{},"\u05DE\u05E1\u05D9\u05DB\u05D4")),h,d;h=Lr(null,r),d=Lr(null,"0".repeat(32)),c.append(h.wrap),l.append(d.wrap);let u=v("div",{class:"mv-info"}),f=v("div",{class:"legend"},v("span",{},v("i",{style:{background:"#6c8bff"}}),"\u05D1\u05D9\u05D8\u05D9 \u05E8\u05E9\u05EA"),v("span",{},v("i",{style:{background:"#3ddc97"}}),"\u05D1\u05D9\u05D8\u05D9 \u05DE\u05D0\u05E8\u05D7"));s.append(v("div",{class:"mv-slider"},a,o,v("span",{},"\u05D0\u05D5\u05E8\u05DA \u05D4\u05E8\u05D9\u05E9\u05D0 (prefix)")),c,l,f,u);let p=()=>{let x=+o.value;a.textContent="/"+x;for(let b=0;b<32;b++){let y=b<x?"net":"host";h.cells[b].dataset.kind=y,d.cells[b].dataset.kind=y;let w=b<x?"1":"0";d.cells[b].textContent=w,d.cells[b].className="bit b"+w}let g=Ko(x),m=Hc(i,x);u.innerHTML="";let M=(b,y)=>v("div",{},b,v("b",{},y));u.append(M("\u05DE\u05E1\u05D9\u05DB\u05EA \u05E8\u05E9\u05EA",An(g)),M("\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E8\u05E9\u05EA",An(m)),M("\u05D1\u05D9\u05D8\u05D9 \u05E8\u05E9\u05EA / \u05DE\u05D0\u05E8\u05D7",`${x} / ${32-x}`),M("\u05DE\u05E1\u05E4\u05E8 \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD (2\u02B0 \u2212 2)",Ju(x).toLocaleString("en-US"))),at("tick")};return o.addEventListener("input",p),p(),o}function hm(s,t,e,n){s.innerHTML="";let i=Oc(e),r=Ko(n),o=kc(i),a=kc(r),c=o.split("").map((w,E)=>w==="1"&&a[E]==="1"?"1":"0").join(""),l=o.split("").map((w,E)=>E<n?w:"1").join(""),h=(w,E,R)=>{let _=v("div",{class:"mv-row"},v("span",{},E)),A=Lr(null,w);return A.cells.forEach((C,N)=>{C.dataset.kind=R(N)}),_.append(A.wrap),{row:_,c:A}},d=w=>w<n?"net":"host",u=h(o,`IP ${e}`,d),f=h(a,`\u05DE\u05E1\u05D9\u05DB\u05D4 /${n}`,d),p=h("0".repeat(32),"AND = \u05E8\u05E9\u05EA",d),x=h("0".repeat(32),"\u05E9\u05D9\u05D3\u05D5\u05E8",d);p.c.cells.forEach(w=>{w.textContent="\xB7",w.classList.add("q")}),x.c.cells.forEach(w=>{w.textContent="\xB7",w.classList.add("q")});let g=v("div",{class:"mv-info"}),m=v("div",{class:"sim-caption on"}),M=v("button",{class:"btn small gold",onclick:()=>y()},"\u25B6 \u05D7\u05E9\u05D1");s.append(u.row,f.row,p.row,x.row,g,m,v("div",{class:"sim-controls"},M));let b=0,y=async()=>{let w=++b;p.c.cells.forEach(_=>{_.textContent="\xB7",_.className="bit q"}),x.c.cells.forEach(_=>{_.textContent="\xB7",_.className="bit q"}),g.innerHTML="",m.innerHTML="\u05E4\u05E2\u05D5\u05DC\u05EA <b>AND</b> \u05D1\u05D9\u05DF \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4-IP \u05DC\u05DE\u05E1\u05D9\u05DB\u05D4: \u05E8\u05E7 \u05DB\u05E9\u05D9\u05E9 1 \u05D1\u05E9\u05E0\u05D9\u05D4\u05DD \u05D4\u05EA\u05D5\u05E6\u05D0\u05D4 1. \u05DB\u05DA \u05DE\u05E7\u05D1\u05DC\u05D9\u05DD \u05D0\u05EA <b>\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E8\u05E9\u05EA</b>.";for(let _=0;_<32;_++){if(!t.alive||w!==b)return;let A=p.c.cells[_];A.textContent=c[_],A.className="bit b"+c[_],A.dataset.kind=d(_),_%4===3&&at("tick"),await t.wait(55)}let E=Hc(i,n),R=jo(i,n);g.append(v("div",{},"\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E8\u05E9\u05EA",v("b",{},An(E)))),m.innerHTML="\u05D1\u05D9\u05D8\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D7 \u05D1\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E8\u05E9\u05EA \u05D4\u05DD <b>0</b>. \u05D0\u05DD \u05E0\u05E2\u05E9\u05D4 \u05D0\u05EA \u05D1\u05D9\u05D8\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D7 <b>1</b> \u05E0\u05E7\u05D1\u05DC \u05D0\u05EA <b>\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E9\u05D9\u05D3\u05D5\u05E8 (Broadcast)</b>.",await t.wait(1e3);for(let _=0;_<32;_++){if(!t.alive||w!==b)return;let A=x.c.cells[_];A.textContent=l[_],A.className="bit b"+l[_],A.dataset.kind=d(_),await t.wait(30)}g.append(v("div",{},"\u05DB\u05EA\u05D5\u05D1\u05EA Broadcast",v("b",{},An(R))),v("div",{},"\u05D8\u05D5\u05D5\u05D7 \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD \u05EA\u05E7\u05D9\u05E0\u05D9\u05DD",v("b",{},`${An(sm(i,n))} \u2013 ${An(rm(i,n))}`)),v("div",{},`\u05DE\u05E1\u05E4\u05E8 \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD: 2^${32-n} \u2212 2`,v("b",{},Ju(n).toLocaleString("en-US")))),m.innerHTML=`\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E8\u05E9\u05EA (<b>${An(E)}</b>) \u05D5\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E9\u05D9\u05D3\u05D5\u05E8 (<b>${An(R)}</b>) <b>\u05E9\u05DE\u05D5\u05E8\u05D5\u05EA</b> \u2013 \u05D0\u05D9 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05EA\u05EA \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD.`,at("collect")};y()}var um={intro:"\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05DC\u05D0\u05D9 \u05D4\u05E8\u05E9\u05EA\u05D5\u05EA! \u{1F3DD}\uFE0F \u05DB\u05DC \u05DB\u05EA\u05D5\u05D1\u05EA IP \u05DE\u05EA\u05D7\u05DC\u05E7\u05EA \u05DC\u05E9\u05E0\u05D9 \u05D7\u05DC\u05E7\u05D9\u05DD: <b>\u05D7\u05DC\u05E7 \u05D4\u05E8\u05E9\u05EA</b> \u05E9\u05D0\u05D5\u05DE\u05E8 \u05D1\u05D0\u05D9\u05D6\u05D5 \u05E8\u05E9\u05EA \u05D0\u05E0\u05D7\u05E0\u05D5, \u05D5<b>\u05D7\u05DC\u05E7 \u05D4\u05DE\u05D0\u05E8\u05D7</b> \u05E9\u05D0\u05D5\u05DE\u05E8 \u05DE\u05D9 \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D1\u05EA\u05D5\u05DA \u05D4\u05E8\u05E9\u05EA. \u05DB\u05D0\u05DF \u05E0\u05DC\u05DE\u05D3 \u05D2\u05DD \u05DE\u05D4 \u05D6\u05D5 <b>\u05DE\u05E1\u05D9\u05DB\u05EA \u05E8\u05E9\u05EA</b> \u05D5\u05D0\u05D9\u05DA \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05D4.",steps:[{title:"\u05DB\u05EA\u05D5\u05D1\u05EA = \u05E8\u05E9\u05EA + \u05DE\u05D0\u05E8\u05D7",body:`<p>\u05DB\u05EA\u05D5\u05D1\u05EA \u05D1\u05D9\u05EA \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE<b>\u05E8\u05D7\u05D5\u05D1</b> \u05D5\u05DE<b>\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D1\u05D9\u05EA</b>. \u05D2\u05DD \u05DB\u05EA\u05D5\u05D1\u05EA IP \u05D1\u05E0\u05D5\u05D9\u05D4 \u05DE\u05E9\u05E0\u05D9 \u05D7\u05DC\u05E7\u05D9\u05DD:</p>
      <ul>
        <li><b class="net">\u05D7\u05DC\u05E7 \u05D4\u05E8\u05E9\u05EA</b> (Network) \u2013 \u05DE\u05D6\u05D4\u05D4 \u05D0\u05EA <b>\u05D4\u05E8\u05E9\u05EA</b>, \u05DB\u05DE\u05D5 \u05E9\u05DD \u05D4\u05E8\u05D7\u05D5\u05D1. \u05DB\u05DC \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA \u05D7\u05D5\u05DC\u05E7\u05D9\u05DD \u05D0\u05D5\u05EA\u05D5.</li>
        <li><b class="host">\u05D7\u05DC\u05E7 \u05D4\u05DE\u05D0\u05E8\u05D7</b> (Host) \u2013 \u05DE\u05D6\u05D4\u05D4 \u05D0\u05EA <b>\u05D4\u05DE\u05DB\u05E9\u05D9\u05E8</b> \u05D1\u05EA\u05D5\u05DA \u05D4\u05E8\u05E9\u05EA, \u05DB\u05DE\u05D5 \u05DE\u05E1\u05E4\u05E8 \u05D4\u05D1\u05D9\u05EA. \u05D4\u05D5\u05D0 \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05D9\u05D9\u05D7\u05D5\u05D3\u05D9 \u05D1\u05E8\u05E9\u05EA.</li>
      </ul>
      <p>\u05D1\u05D3\u05D5\u05D2\u05DE\u05D4 ${Rn("192.168.1.10")} \u2013 \u05D0\u05DD \u05D4\u05E8\u05E9\u05EA \u05D4\u05D9\u05D0 ${Rn("192.168.1")} \u05D0\u05D6 <b>10</b> \u05D4\u05D5\u05D0 \u05D4\u05DE\u05D0\u05E8\u05D7. \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA \u05DE\u05EA\u05E7\u05E9\u05E8\u05D9\u05DD \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA; \u05D1\u05D9\u05DF \u05E8\u05E9\u05EA\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E6\u05E8\u05D9\u05DA \u05E8\u05D0\u05D5\u05D8\u05E8.</p>`,tip:"\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05DE\u05DB\u05E9\u05D9\u05E8 \u05DB\u05D3\u05D9 \u05DC\u05E8\u05D0\u05D5\u05EA \u05D0\u05D9\u05DA \u05D4\u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05DC\u05D5 \u05DE\u05EA\u05D7\u05DC\u05E7\u05EA.",anim:(s,t)=>{let e=new ls(s,t);e.zone(26,42,44,66,"\u05E8\u05E9\u05EA 192.168.1.0","#6c8bff"),e.zone(74,42,44,66,"\u05E8\u05E9\u05EA 192.168.2.0","#3ddc97");let n=[["pc","\u05D0\u05F3","192.168.1.10",14,28],["laptop","\u05D1\u05F3","192.168.1.11",38,28],["printer","\u05DE\u05D3\u05E4\u05E1\u05EA","192.168.1.12",26,62],["pc","\u05D2\u05F3","192.168.2.10",62,28],["server","\u05E9\u05E8\u05EA","192.168.2.20",86,28],["phone","\u05D8\u05DC\u05E4\u05D5\u05DF","192.168.2.30",74,62]];e.caption("\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA \u05D7\u05D5\u05DC\u05E7\u05D9\u05DD \u05D0\u05EA \u05D0\u05D5\u05EA\u05D5 \u05D7\u05DC\u05E7 \u05E8\u05E9\u05EA. \u05DE\u05E1\u05D9\u05DB\u05D4 255.255.255.0 (/24) \u05D0\u05D5\u05DE\u05E8\u05EA: 3 \u05D4\u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05DD \u05D4\u05DD \u05D4\u05E8\u05E9\u05EA.");let i=n.map(([r,o,a,c,l])=>{let h=e.dev(r,o,null,c,l,{size:50});h.ipEl=v("div",{class:"dev-ip"});let d=Oc(a);return h.ipEl.innerHTML=`<span class="net">${d.slice(0,3).join(".")}.</span><span class="host">${d[3]}</span>`,h.append(h.ipEl),h.style.cursor="pointer",h.addEventListener("click",()=>{at("click"),h.glow("#ffd35c"),e.caption(`<code>${a}</code> \u2190 \u05D7\u05DC\u05E7 \u05E8\u05E9\u05EA: <span class="net">${d.slice(0,3).join(".")}</span> \xB7 \u05D7\u05DC\u05E7 \u05DE\u05D0\u05E8\u05D7: <span class="host">${d[3]}</span>`)}),h})},questions:[{tier:1,type:"mc",q:"\u05D1\u05DB\u05EA\u05D5\u05D1\u05EA <code>192.168.1.10</code> \u05E2\u05DD \u05DE\u05E1\u05D9\u05DB\u05D4 <code>255.255.255.0</code>, \u05DE\u05D4\u05D5 \u05D7\u05DC\u05E7 \u05D4\u05E8\u05E9\u05EA?",options:["192.168.1","192.168","10","192"],a:0,why:"\u05DE\u05E1\u05D9\u05DB\u05EA /24 \u2013 \u05E9\u05DC\u05D5\u05E9\u05EA \u05D4\u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05DD \u05D4\u05DD \u05D4\u05E8\u05E9\u05EA, \u05D5\u05D4\u05E8\u05D1\u05D9\u05E2\u05D9 (10) \u05D4\u05D5\u05D0 \u05D4\u05DE\u05D0\u05E8\u05D7.",hint:"\u05D4\u05DE\u05E1\u05D9\u05DB\u05D4 255.255.255.0 \u05DE\u05DB\u05E1\u05D4 \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD."},{tier:1,type:"mc",q:"\u05DE\u05D4 \u05DE\u05D6\u05D4\u05D4 \u05D7\u05DC\u05E7 \u05D4\u05DE\u05D0\u05E8\u05D7 \u05E9\u05DC \u05D4\u05DB\u05EA\u05D5\u05D1\u05EA?",options:["\u05D0\u05EA \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D1\u05EA\u05D5\u05DA \u05D4\u05E8\u05E9\u05EA","\u05D0\u05EA \u05D4\u05E8\u05E9\u05EA \u05DB\u05D5\u05DC\u05D4","\u05D0\u05EA \u05E1\u05E4\u05E7 \u05D4\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8","\u05D0\u05EA \u05E1\u05D5\u05D2 \u05D4\u05DB\u05D1\u05DC"],a:0,why:"\u05D7\u05DC\u05E7 \u05D4\u05DE\u05D0\u05E8\u05D7 \u05DE\u05D6\u05D4\u05D4 \u05D0\u05EA \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D4\u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D1\u05EA\u05D5\u05DA \u05D4\u05E8\u05E9\u05EA."},{tier:2,type:"tf",q:"\u05E9\u05E0\u05D9 \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA \u05D7\u05D9\u05D9\u05D1\u05D9\u05DD \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC\u05D9 \u05D0\u05D5\u05EA\u05D5 \u05D7\u05DC\u05E7 \u05E8\u05E9\u05EA \u05D5\u05E9\u05D5\u05E0\u05D4 \u05D7\u05DC\u05E7 \u05DE\u05D0\u05E8\u05D7.",a:!0,why:"\u05E0\u05DB\u05D5\u05DF: \u05D0\u05D5\u05EA\u05D5 \u05D7\u05DC\u05E7 \u05E8\u05E9\u05EA, \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD."}]},{title:"\u05DE\u05E1\u05D9\u05DB\u05EA \u05E8\u05E9\u05EA (Subnet Mask)",body:`<p>\u05D0\u05D9\u05DA \u05D4\u05DE\u05D7\u05E9\u05D1 \u05D9\u05D5\u05D3\u05E2 \u05D0\u05D9\u05E4\u05D4 \u05E0\u05D2\u05DE\u05E8 \u05D7\u05DC\u05E7 \u05D4\u05E8\u05E9\u05EA \u05D5\u05DE\u05EA\u05D7\u05D9\u05DC \u05D7\u05DC\u05E7 \u05D4\u05DE\u05D0\u05E8\u05D7? \u05D1\u05E2\u05D6\u05E8\u05EA <b>\u05DE\u05E1\u05D9\u05DB\u05EA \u05E8\u05E9\u05EA</b> \u2013 \u05DE\u05E1\u05E4\u05E8 \u05D1\u05DF 32 \u05D1\u05D9\u05D8:</p>
      <ul>
        <li><b class="net">1</b> \u05D1\u05DE\u05E1\u05D9\u05DB\u05D4 = \u05D1\u05D9\u05D8 \u05E9\u05E9\u05D9\u05D9\u05DA \u05DC<b>\u05E8\u05E9\u05EA</b>.</li>
        <li><b class="host">0</b> \u05D1\u05DE\u05E1\u05D9\u05DB\u05D4 = \u05D1\u05D9\u05D8 \u05E9\u05E9\u05D9\u05D9\u05DA \u05DC<b>\u05DE\u05D0\u05E8\u05D7</b>.</li>
        <li>\u05D4\u05DE\u05E1\u05D9\u05DB\u05D4 \u05EA\u05DE\u05D9\u05D3 \u05E8\u05E6\u05E3 \u05E9\u05DC \u05D0\u05D7\u05D3\u05D5\u05EA \u05D5\u05D0\u05D7\u05E8\u05D9\u05D5 \u05E8\u05E6\u05E3 \u05E9\u05DC \u05D0\u05E4\u05E1\u05D9\u05DD.</li>
        <li><b>\u05E1\u05D9\u05DE\u05D5\u05DF \u05E7\u05E6\u05E8 (Prefix):</b> ${Rn("/24")} = 24 \u05D0\u05D7\u05D3\u05D5\u05EA. \u05DC\u05DE\u05E9\u05DC ${Rn("255.255.255.0")} = ${Rn("/24")}, ${Rn("255.255.0.0")} = ${Rn("/16")}, ${Rn("255.0.0.0")} = ${Rn("/8")}.</li>
        <li>\u05DE\u05E1\u05E4\u05E8 \u05D4\u05DE\u05D0\u05E8\u05D7\u05D9\u05DD \u05D1\u05EA\u05D5\u05DA \u05E8\u05E9\u05EA: <b>2\u02B0 \u2212 2</b> (h = \u05DE\u05E1\u05E4\u05E8 \u05D1\u05D9\u05D8\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D7).</li>
      </ul>
      <p>\u05D4\u05D6\u05D9\u05D6\u05D5 \u05D0\u05EA \u05D4\u05DE\u05D7\u05D5\u05D5\u05DF \u05D5\u05E8\u05D0\u05D5 \u05D0\u05D9\u05DA \u05D4\u05D2\u05D1\u05D5\u05DC \u05D1\u05D9\u05DF \u05D4\u05E8\u05E9\u05EA \u05DC\u05DE\u05D0\u05E8\u05D7 \u05D6\u05D6!</p>`,tip:"\u05DB\u05DC 8 \u05D1\u05D9\u05D8\u05D9\u05DD \u05E9\u05DC 1 \u05D1\u05DE\u05E1\u05D9\u05DB\u05D4 = \u05D0\u05D5\u05E7\u05D8\u05D8 255.",stageTitle:"\u{1F52C} \u05DE\u05D6\u05D9\u05D6\u05D9\u05DD \u05D0\u05EA \u05D4\u05D2\u05D1\u05D5\u05DC",anim:(s,t)=>{let e=v("div",{class:"maskviz"});s.innerHTML="",s.append(e),g_(e,t,"192.168.1.77")},questions:[{tier:1,type:"mc",q:"\u05D4\u05DE\u05E1\u05D9\u05DB\u05D4 <code>255.255.255.0</code> \u05E9\u05D5\u05D5\u05D4 \u05DC\u05E1\u05D9\u05DE\u05D5\u05DF:",options:["/8","/16","/24","/32"],a:2,why:"3 \u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD \u05E9\u05DC 255 = 24 \u05D1\u05D9\u05D8\u05D9\u05DD \u05E9\u05DC 1 \u21D2 /24.",hint:"3 \xD7 8 = ?"},{tier:2,type:"mc",q:"\u05DE\u05D4\u05D9 \u05DE\u05E1\u05D9\u05DB\u05EA \u05D4\u05E8\u05E9\u05EA \u05E9\u05DC <code>/16</code>?",options:["255.255.0.0","255.255.255.0","255.0.0.0","255.255.255.255"],a:0,why:"16 \u05D1\u05D9\u05D8\u05D9\u05DD \u05E9\u05DC 1 = \u05E9\u05E0\u05D9 \u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD \u05DE\u05DC\u05D0\u05D9\u05DD \u21D2 255.255.0.0."},{tier:2,type:"mc",q:"\u05DB\u05DE\u05D4 \u05D1\u05D9\u05D8\u05D9\u05DD \u05E9\u05DC \u05DE\u05D0\u05E8\u05D7 \u05D9\u05E9 \u05D1\u05E8\u05E9\u05EA <code>/24</code>?",options:["8","16","24","32"],a:0,why:"32 \u2212 24 = 8 \u05D1\u05D9\u05D8\u05D9 \u05DE\u05D0\u05E8\u05D7."},{tier:3,type:"input",q:"\u05DE\u05D4\u05D9 \u05DE\u05E1\u05D9\u05DB\u05EA \u05D4\u05E8\u05E9\u05EA \u05E9\u05DC <code>/26</code> (\u05D1\u05E2\u05E9\u05E8\u05D5\u05E0\u05D9)?",answer:"255.255.255.192",placeholder:"255.255.255.___",why:"26 \u05D1\u05D9\u05D8\u05D9\u05DD: 24 + \u05E2\u05D5\u05D3 2 \u05D1\u05D9\u05D8\u05D9\u05DD \u05D1\u05D0\u05D5\u05E7\u05D8\u05D8 \u05D4\u05D0\u05D7\u05E8\u05D5\u05DF = 11000000 = 192."}]},{title:"\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA \u05D5\u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05D9\u05D3\u05D5\u05E8",body:`<p>\u05D1\u05DB\u05DC \u05E8\u05E9\u05EA \u05D9\u05E9 \u05E9\u05EA\u05D9 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05DE\u05D9\u05D5\u05D7\u05D3\u05D5\u05EA \u05E9\u05D0\u05D9 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05EA\u05EA \u05DC\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD:</p>
      <ul>
        <li><b>\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E8\u05E9\u05EA</b> \u2013 \u05DB\u05DC \u05D1\u05D9\u05D8\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D7 <b>0</b>. \u05D4\u05D9\u05D0 \u05DE\u05D6\u05D4\u05D4 \u05D0\u05EA \u05D4\u05E8\u05E9\u05EA \u05E2\u05E6\u05DE\u05D4. \u05DE\u05D7\u05E9\u05D1\u05D9\u05DD \u05D0\u05D5\u05EA\u05D4 \u05D1\u05E4\u05E2\u05D5\u05DC\u05EA <b>AND</b> \u05D1\u05D9\u05DF \u05D4-IP \u05DC\u05DE\u05E1\u05D9\u05DB\u05D4.</li>
        <li><b>\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E9\u05D9\u05D3\u05D5\u05E8 (Broadcast)</b> \u2013 \u05DB\u05DC \u05D1\u05D9\u05D8\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D7 <b>1</b>. \u05D7\u05D1\u05D9\u05DC\u05D4 \u05E9\u05E0\u05E9\u05DC\u05D7\u05EA \u05D0\u05DC\u05D9\u05D4 \u05DE\u05D2\u05D9\u05E2\u05D4 \u05DC\u05DB\u05DC \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05E8\u05E9\u05EA.</li>
        <li>\u05DB\u05DC \u05DE\u05D4 \u05E9\u05D1\u05D9\u05DF \u05E9\u05EA\u05D9\u05D4\u05DF \u05D4\u05D5\u05D0 <b>\u05D8\u05D5\u05D5\u05D7 \u05D4\u05DE\u05D0\u05E8\u05D7\u05D9\u05DD \u05D4\u05EA\u05E7\u05D9\u05DF</b>. \u05DE\u05E1\u05E4\u05E8\u05DD: <b>2\u02B0 \u2212 2</b>.</li>
      </ul>
      <p>\u05D3\u05D5\u05D2\u05DE\u05D4: ${Rn("192.168.1.77/24")} \u2190 \u05E8\u05E9\u05EA ${Rn("192.168.1.0")}, \u05E9\u05D9\u05D3\u05D5\u05E8 ${Rn("192.168.1.255")}, \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD ${Rn(".1")} \u05E2\u05D3 ${Rn(".254")} (254 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA).</p>`,tip:"AND: 1 AND 1 = 1, \u05DB\u05DC \u05E9\u05D0\u05E8 \u05D4\u05DE\u05E7\u05E8\u05D9\u05DD = 0.",stageTitle:"\u{1F52C} \u05E4\u05E2\u05D5\u05DC\u05EA AND \u05D1\u05D1\u05D9\u05D8\u05D9\u05DD",anim:(s,t)=>{let e=v("div",{class:"maskviz"});s.innerHTML="",s.append(e);let n=v("div",{style:{width:"100%",position:"relative",flex:1,display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",justifyContent:"center"}}),i=v("div",{class:"sim-controls static",style:{position:"absolute",top:"8px",right:"8px",left:"auto",bottom:"auto",zIndex:7}});[["192.168.1.77",24],["172.16.5.9",16],["10.1.2.3",8],["192.168.1.77",26]].forEach(([r,o])=>i.append(v("button",{class:"btn small ghost",onclick:()=>{hm(n,t,r,o)}},`${r}/${o}`))),e.append(i,n),hm(n,t,"192.168.1.77",24)},questions:[{tier:1,type:"mc",q:"\u05DE\u05D4\u05D9 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E8\u05E9\u05EA \u05E9\u05DC <code>192.168.5.77/24</code>?",options:["192.168.5.0","192.168.5.255","192.168.0.0","192.168.5.1"],a:0,why:"\u05DE\u05D0\u05E4\u05E1\u05D9\u05DD \u05D0\u05EA \u05D1\u05D9\u05D8\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D7 (\u05D4\u05D0\u05D5\u05E7\u05D8\u05D8 \u05D4\u05D0\u05D7\u05E8\u05D5\u05DF) \u21D2 192.168.5.0."},{tier:2,type:"mc",q:"\u05DE\u05D4\u05D9 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4-Broadcast \u05E9\u05DC <code>10.1.2.3/8</code>?",options:["10.255.255.255","10.1.2.255","10.0.0.255","255.255.255.255"],a:0,why:"\u05D1-/8 \u05D1\u05D9\u05D8\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D7 \u05D4\u05DD 3 \u05D4\u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD \u2013 \u05DB\u05D5\u05DC\u05DD 255."},{tier:2,type:"mc",q:"\u05DB\u05DE\u05D4 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05DE\u05D0\u05E8\u05D7 \u05EA\u05E7\u05D9\u05E0\u05D5\u05EA \u05D9\u05E9 \u05D1\u05E8\u05E9\u05EA <code>/24</code>?",options:["254","255","256","253"],a:0,why:"2\u2078 \u2212 2 = 254 (\u05E4\u05D7\u05D5\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E8\u05E9\u05EA \u05D5\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E9\u05D9\u05D3\u05D5\u05E8)."},{tier:3,type:"mc",q:"\u05DE\u05D4\u05D9 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E8\u05E9\u05EA \u05E9\u05DC <code>192.168.1.77/26</code>?",options:["192.168.1.64","192.168.1.0","192.168.1.76","192.168.1.32"],a:0,why:"/26: \u05D2\u05D5\u05D3\u05DC \u05D1\u05DC\u05D5\u05E7 = 64. 77 \u05E0\u05DE\u05E6\u05D0 \u05D1\u05D1\u05DC\u05D5\u05E7 64\u2013127 \u21D2 \u05E8\u05E9\u05EA 192.168.1.64, \u05E9\u05D9\u05D3\u05D5\u05E8 192.168.1.127.",hint:"\u05D4\u05D1\u05DC\u05D5\u05E7\u05D9\u05DD \u05D1-/26: 0, 64, 128, 192."},{tier:3,type:"input",q:"\u05DB\u05DE\u05D4 \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD \u05EA\u05E7\u05D9\u05E0\u05D9\u05DD \u05D9\u05E9 \u05D1\u05E8\u05E9\u05EA <code>/26</code>?",answer:"62",placeholder:"\u05DE\u05E1\u05E4\u05E8",why:"2\u2076 \u2212 2 = 62."}]},{title:"\u05DE\u05D7\u05DC\u05E7\u05D5\u05EA \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA: A, B, C",body:`<p>\u05D1\u05E2\u05D1\u05E8 \u05D7\u05D9\u05DC\u05E7\u05D5 \u05D0\u05EA \u05DB\u05DC \u05D4\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05DC<b>\u05DE\u05D7\u05DC\u05E7\u05D5\u05EA</b> \u05DC\u05E4\u05D9 \u05D4\u05D0\u05D5\u05E7\u05D8\u05D8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF, \u05DC\u05DB\u05DC \u05DE\u05D7\u05DC\u05E7\u05D4 \u05DE\u05E1\u05D9\u05DB\u05EA \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC:</p>
      <table><tr><th>\u05DE\u05D7\u05DC\u05E7\u05D4</th><th>\u05D0\u05D5\u05E7\u05D8\u05D8 \u05E8\u05D0\u05E9\u05D5\u05DF</th><th>\u05DE\u05E1\u05D9\u05DB\u05D4</th><th>\u05E9\u05D9\u05DE\u05D5\u05E9</th></tr>
      <tr><td>A</td><td>1\u2013126</td><td>/8</td><td>\u05E8\u05E9\u05EA\u05D5\u05EA \u05E2\u05E0\u05E7</td></tr>
      <tr><td>B</td><td>128\u2013191</td><td>/16</td><td>\u05E8\u05E9\u05EA\u05D5\u05EA \u05D1\u05D9\u05E0\u05D5\u05E0\u05D9\u05D5\u05EA</td></tr>
      <tr><td>C</td><td>192\u2013223</td><td>/24</td><td>\u05E8\u05E9\u05EA\u05D5\u05EA \u05E7\u05D8\u05E0\u05D5\u05EA</td></tr>
      <tr><td>D</td><td>224\u2013239</td><td>\u2014</td><td>Multicast</td></tr>
      <tr><td>E</td><td>240\u2013255</td><td>\u2014</td><td>\u05E0\u05D9\u05E1\u05D9\u05D5\u05E0\u05D9</td></tr></table>
      <p>\u05D4\u05DB\u05EA\u05D5\u05D1\u05EA <b>127.x.x.x</b> \u05E9\u05DE\u05D5\u05E8\u05D4 \u05DC-Loopback. \u05D4\u05D9\u05D5\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1-<b>CIDR</b> (\u05DE\u05E1\u05D9\u05DB\u05D5\u05EA \u05D2\u05DE\u05D9\u05E9\u05D5\u05EA), \u05D0\u05D1\u05DC \u05D7\u05E9\u05D5\u05D1 \u05DC\u05D4\u05DB\u05D9\u05E8 \u05D0\u05EA \u05D4\u05DE\u05D7\u05DC\u05E7\u05D5\u05EA.</p>`,tip:"\u05D4\u05DE\u05D7\u05DC\u05E7\u05D4 \u05E0\u05E7\u05D1\u05E2\u05EA \u05DC\u05E4\u05D9 \u05D4\u05D0\u05D5\u05E7\u05D8\u05D8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05D1\u05DC\u05D1\u05D3.",stageTitle:"\u{1F52C} \u05D1\u05D0\u05D9\u05D6\u05D5 \u05DE\u05D7\u05DC\u05E7\u05D4 \u05D0\u05E0\u05D9?",anim:(s,t)=>{let e=v("div",{class:"maskviz"});s.innerHTML="",s.append(e);let n=[["A",126,"#ff8a8a"],["\u2022",1,"#888"],["B",64,"#ffc27a"],["C",32,"#ffe27a"],["D",16,"#9ef0b0"],["E",16,"#9ad7ff"]],i=v("div",{class:"cls-bar"}),r=[126,1,64,32,16,16],o=255;n.forEach(([u,,f],p)=>i.append(v("div",{style:{width:(r[p]+(p===0?1:0))/256*100+"%",background:f}},u)));let a=v("div",{class:"cls-pointer"}),c=v("div",{class:"cls-wrap"},i,a),l=v("div",{class:"cls-card"}),h=v("input",{type:"range",min:0,max:255,value:172,style:{width:"100%",accentColor:"#ffd35c"}}),d=()=>{let u=+h.value;a.style.left=u/256*100+"%";let f=om([u,0,0,1]),p={A:"255.0.0.0 (/8)",B:"255.255.0.0 (/16)",C:"255.255.255.0 (/24)"}[f]||(f==="Loopback"?"Loopback":f==="D"?"Multicast":f==="E"?"\u05E0\u05D9\u05E1\u05D9\u05D5\u05E0\u05D9":"\u2014");l.innerHTML=`<small>\u05D0\u05D5\u05E7\u05D8\u05D8 \u05E8\u05D0\u05E9\u05D5\u05DF: ${u}</small><b>\u05DE\u05D7\u05DC\u05E7\u05D4 ${f}</b><span>\u05DE\u05E1\u05D9\u05DB\u05EA \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC: ${p}</span>`};h.addEventListener("input",()=>{d(),at("tick")}),e.append(v("div",{style:{color:"#cfd6ff",fontWeight:700}},"\u05D4\u05D6\u05D9\u05D6\u05D5 \u05D0\u05EA \u05D4\u05D0\u05D5\u05E7\u05D8\u05D8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05DC \u05D4\u05DB\u05EA\u05D5\u05D1\u05EA (0\u2013255):"),c,h,l),d()},questions:[{tier:1,type:"mc",q:"\u05DC\u05D0\u05D9\u05D6\u05D5 \u05DE\u05D7\u05DC\u05E7\u05D4 \u05E9\u05D9\u05D9\u05DB\u05EA \u05D4\u05DB\u05EA\u05D5\u05D1\u05EA <code>172.20.5.9</code>?",options:["A","B","C","D"],a:1,why:"\u05D4\u05D0\u05D5\u05E7\u05D8\u05D8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF 172 \u05E0\u05DE\u05E6\u05D0 \u05D1\u05D8\u05D5\u05D5\u05D7 128\u2013191 \u21D2 \u05DE\u05D7\u05DC\u05E7\u05D4 B (\u05DE\u05E1\u05D9\u05DB\u05D4 /16).",hint:"B \u05D4\u05D9\u05D0 128\u2013191."},{tier:1,type:"mc",q:"\u05DE\u05D4\u05D9 \u05DE\u05E1\u05D9\u05DB\u05EA \u05D1\u05E8\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D3\u05DC \u05E9\u05DC \u05DE\u05D7\u05DC\u05E7\u05D4 C?",options:["255.0.0.0","255.255.0.0","255.255.255.0","255.255.255.255"],a:2,why:"\u05DE\u05D7\u05DC\u05E7\u05D4 C: /24 = 255.255.255.0."},{tier:2,type:"mc",q:"\u05DC\u05D0\u05D9\u05D6\u05D5 \u05DE\u05D7\u05DC\u05E7\u05D4 \u05E9\u05D9\u05D9\u05DB\u05EA <code>10.0.0.1</code>?",options:["A","B","C","E"],a:0,why:"10 \u05D1\u05D9\u05DF 1 \u05DC-126 \u21D2 \u05DE\u05D7\u05DC\u05E7\u05D4 A."},{tier:2,type:"mc",q:"\u05DC\u05D0\u05D9\u05D6\u05D5 \u05DE\u05D7\u05DC\u05E7\u05D4 \u05E9\u05D9\u05D9\u05DB\u05EA <code>200.1.1.1</code>?",options:["C","B","D","A"],a:0,why:"192\u2013223 \u21D2 \u05DE\u05D7\u05DC\u05E7\u05D4 C."}]},{title:"\u05EA\u05E7\u05E9\u05D5\u05E8\u05EA \u05D1\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA \u05D5\u05D1\u05D9\u05DF \u05E8\u05E9\u05EA\u05D5\u05EA",body:`<p>\u05DC\u05E4\u05E0\u05D9 \u05E9\u05E9\u05D5\u05DC\u05D7 \u05D7\u05D1\u05D9\u05DC\u05D4, \u05D4\u05DE\u05D7\u05E9\u05D1 \u05D1\u05D5\u05D3\u05E7: <b>\u05D4\u05D0\u05DD \u05D4\u05D9\u05E2\u05D3 \u05D1\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA \u05D0\u05D9\u05EA\u05D9?</b> \u05D4\u05D5\u05D0 \u05E2\u05D5\u05E9\u05D4 AND \u05D1\u05D9\u05DF \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D9\u05E2\u05D3 \u05DC\u05DE\u05E1\u05D9\u05DB\u05D4 \u05E9\u05DC\u05D5 \u05D5\u05DE\u05E9\u05D5\u05D5\u05D4 \u05DC\u05E8\u05E9\u05EA \u05E9\u05DC\u05D5.</p>
      <ul>
        <li><b>\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA</b> \u2190 \u05E9\u05D5\u05DC\u05D7 \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05D0\u05DC \u05D4\u05D9\u05E2\u05D3 (\u05D3\u05E8\u05DA <b>\u05DE\u05EA\u05D2</b> \u2013 Switch).</li>
        <li><b>\u05E8\u05E9\u05EA \u05D0\u05D7\u05E8\u05EA</b> \u2190 \u05E9\u05D5\u05DC\u05D7 \u05D0\u05DC <b>\u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D3\u05DC</b> (Default Gateway) \u2013 \u05D4\u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05DC \u05D4\u05E8\u05D0\u05D5\u05D8\u05E8 \u05D1\u05E8\u05E9\u05EA. \u05D4\u05E8\u05D0\u05D5\u05D8\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D4\u05DC\u05D0\u05D4.</li>
      </ul>
      <p>\u05DC\u05DB\u05DF \u05D1\u05DB\u05DC \u05DE\u05D7\u05E9\u05D1 \u05DE\u05D2\u05D3\u05D9\u05E8\u05D9\u05DD: \u05DB\u05EA\u05D5\u05D1\u05EA IP, \u05DE\u05E1\u05D9\u05DB\u05D4, <b>\u05D5\u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC</b>. \u05D1\u05DC\u05D9 \u05E9\u05E2\u05E8 \u2013 \u05D0\u05D9 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E6\u05D0\u05EA \u05DE\u05D4\u05E8\u05E9\u05EA.</p>`,tip:"\u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D3\u05DC \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA \u05E9\u05DC \u05D4\u05DE\u05D7\u05E9\u05D1.",anim:(s,t)=>{let e=new ls(s,t);e.zone(22,42,40,72,"\u05E8\u05E9\u05EA 192.168.1.0/24","#6c8bff"),e.zone(80,42,36,72,"\u05E8\u05E9\u05EA 192.168.2.0/24","#3ddc97");let n=e.dev("pc","\u05DE\u05D7\u05E9\u05D1 1","192.168.1.10",10,28,{size:46}),i=e.dev("laptop","\u05DE\u05D7\u05E9\u05D1 2","192.168.1.20",10,62,{size:46}),r=e.dev("switch","\u05DE\u05EA\u05D2",null,32,45,{size:50}),o=e.dev("router","\u05E8\u05D0\u05D5\u05D8\u05E8",".1 | .1",51,45,{size:56}),a=e.dev("switch","\u05DE\u05EA\u05D2",null,68,45,{size:50}),c=e.dev("pc","\u05DE\u05D7\u05E9\u05D1 3","192.168.2.30",90,28,{size:46}),l=e.dev("server","\u05E9\u05E8\u05EA","192.168.2.40",90,62,{size:46});[n,i].forEach(u=>e.line(u,r)),e.line(r,o),e.line(o,a),[c,l].forEach(u=>e.line(u,a));let h=!1;e.caption("\u05DE\u05D7\u05E9\u05D1 1 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D4\u05D5\u05D3\u05E2\u05D4. \u05D1\u05D7\u05E8\u05D5 \u05D9\u05E2\u05D3 \u05D5\u05E0\u05E8\u05D0\u05D4 \u05DE\u05D4 \u05D4\u05D5\u05D0 \u05D1\u05D5\u05D3\u05E7.");let d=async(u,f)=>{if(h)return;h=!0;let p=u===i?"192.168.1.20":u===c?"192.168.2.30":"192.168.2.40",x=f?"192.168.1.0":p.split(".").slice(0,3).join(".")+".0";e.caption(`\u05D4\u05DE\u05D7\u05E9\u05D1 \u05E2\u05D5\u05E9\u05D4 AND: <code>${p}</code> AND <code>255.255.255.0</code> = <code>${x}</code> ${f?"= \u05D4\u05E8\u05E9\u05EA \u05E9\u05DC\u05D9 \u2714":"\u2260 \u05D4\u05E8\u05E9\u05EA \u05E9\u05DC\u05D9 (192.168.1.0) \u2718"}`),await t.wait(2200),f?(e.caption("\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA \u21D2 \u05E9\u05D5\u05DC\u05D7\u05D9\u05DD \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05D3\u05E8\u05DA \u05D4\u05DE\u05EA\u05D2.","good"),await e.fly(n,u,"\u2709 \u2192 "+p,{via:[r],ms:1600,color:"#ffd35c"})):(e.caption("\u05E8\u05E9\u05EA \u05D0\u05D7\u05E8\u05EA \u21D2 \u05E9\u05D5\u05DC\u05D7\u05D9\u05DD \u05D0\u05DC <b>\u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D3\u05DC</b> (\u05D4\u05E8\u05D0\u05D5\u05D8\u05E8, 192.168.1.1) \u05D5\u05D4\u05D5\u05D0 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D4\u05DC\u05D0\u05D4.","good"),await e.fly(n,u,"\u2709 \u2192 "+p,{via:[r,o,a],ms:3e3,color:"#ffd35c"})),u.glow("#3ddc97"),u.say("\u05E7\u05D9\u05D1\u05DC\u05EA\u05D9! \u2714"),h=!1};e.btn("\u2709 \u05D0\u05DC \u05DE\u05D7\u05E9\u05D1 2 (192.168.1.20)",()=>d(i,!0)),e.btn("\u2709 \u05D0\u05DC \u05DE\u05D7\u05E9\u05D1 3 (192.168.2.30)",()=>d(c,!1)),e.btn("\u2709 \u05D0\u05DC \u05D4\u05E9\u05E8\u05EA (192.168.2.40)",()=>d(l,!1))},questions:[{tier:1,type:"mc",q:"\u05DE\u05D7\u05E9\u05D1 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D7\u05D1\u05D9\u05DC\u05D4 \u05DC\u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05E0\u05DE\u05E6\u05D0\u05EA \u05D1\u05E8\u05E9\u05EA \u05D0\u05D7\u05E8\u05EA. \u05DC\u05D0\u05DF \u05D9\u05E9\u05DC\u05D7 \u05D0\u05D5\u05EA\u05D4?",options:["\u05D0\u05DC \u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D3\u05DC (\u05D4\u05E8\u05D0\u05D5\u05D8\u05E8)","\u05D0\u05DC \u05DB\u05DC \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05E8\u05E9\u05EA","\u05D0\u05DC \u05E9\u05E8\u05EA \u05D4-DNS","\u05D0\u05DC \u05D4\u05DE\u05D3\u05E4\u05E1\u05EA"],a:0,why:"\u05D9\u05E2\u05D3 \u05D1\u05E8\u05E9\u05EA \u05D0\u05D7\u05E8\u05EA \u2013 \u05E9\u05D5\u05DC\u05D7\u05D9\u05DD \u05DC\u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D3\u05DC \u05E9\u05DE\u05E2\u05D1\u05D9\u05E8 \u05D4\u05DC\u05D0\u05D4."},{tier:1,type:"tf",q:"<code>192.168.1.10/24</code> \u05D5-<code>192.168.2.10/24</code> \u05E0\u05DE\u05E6\u05D0\u05D5\u05EA \u05D1\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA.",a:!1,why:"\u05D7\u05DC\u05E7 \u05D4\u05E8\u05E9\u05EA \u05E9\u05D5\u05E0\u05D4: 192.168.1 \u05DE\u05D5\u05DC 192.168.2."},{tier:2,type:"mc",q:"\u05DE\u05D4 \u05D1\u05D5\u05D3\u05E7 \u05DE\u05D7\u05E9\u05D1 \u05DC\u05E4\u05E0\u05D9 \u05E9\u05D4\u05D5\u05D0 \u05E9\u05D5\u05DC\u05D7 \u05D7\u05D1\u05D9\u05DC\u05D4?",options:["\u05D4\u05D0\u05DD \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D9\u05E2\u05D3 \u05D1\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA \u05E9\u05DC\u05D5 (\u05D1\u05E2\u05D6\u05E8\u05EA \u05D4\u05DE\u05E1\u05D9\u05DB\u05D4)","\u05D4\u05D0\u05DD \u05D4\u05D9\u05E2\u05D3 \u05DE\u05D7\u05D5\u05D1\u05E8 \u05DC\u05D7\u05E9\u05DE\u05DC","\u05DE\u05D4 \u05E6\u05D1\u05E2 \u05D4\u05DB\u05D1\u05DC","\u05DB\u05DE\u05D4 \u05D6\u05D9\u05DB\u05E8\u05D5\u05DF \u05D9\u05E9 \u05DC\u05D9\u05E2\u05D3"],a:0,why:"AND \u05D1\u05D9\u05DF \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D9\u05E2\u05D3 \u05DC\u05DE\u05E1\u05D9\u05DB\u05D4, \u05D5\u05D4\u05E9\u05D5\u05D5\u05D0\u05D4 \u05DC\u05E8\u05E9\u05EA \u05D4\u05DE\u05E7\u05D5\u05DE\u05D9\u05EA."},{tier:2,type:"mc",q:"\u05D0\u05D9\u05D6\u05D5 \u05D4\u05D2\u05D3\u05E8\u05D4 \u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05D3\u05D9 \u05DC\u05EA\u05E7\u05E9\u05E8 \u05E2\u05DD \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E8\u05E9\u05EA \u05D4\u05DE\u05E7\u05D5\u05DE\u05D9\u05EA?",options:["\u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC","\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9","\u05DB\u05EA\u05D5\u05D1\u05EA MAC \u05D7\u05D3\u05E9\u05D4","\u05DE\u05E1\u05DA \u05D2\u05D3\u05D5\u05DC"],a:0,why:"\u05D1\u05DC\u05D9 Default Gateway \u05D0\u05D9 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E6\u05D0\u05EA \u05DE\u05D4\u05E8\u05E9\u05EA."},{tier:3,type:"tf",q:"<code>192.168.1.10/26</code> \u05D5-<code>192.168.1.70/26</code> \u05D1\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA.",a:!1,why:"/26: \u05D4\u05D1\u05DC\u05D5\u05E7\u05D9\u05DD \u05D4\u05DD 0\u201363 \u05D5-64\u2013127. 10 \u05D5-70 \u05D1\u05D1\u05DC\u05D5\u05E7\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD \u21D2 \u05E8\u05E9\u05EA\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA."}]}],quiz:[{tier:1,type:"mc",q:"\u05DE\u05D4 \u05DE\u05D6\u05D4\u05D4 \u05D7\u05DC\u05E7 \u05D4\u05E8\u05E9\u05EA \u05D1\u05DB\u05EA\u05D5\u05D1\u05EA IP?",options:["\u05D0\u05EA \u05D4\u05E8\u05E9\u05EA","\u05D0\u05EA \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8","\u05D0\u05EA \u05D4\u05DB\u05D1\u05DC","\u05D0\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4"],a:0,why:"\u05D7\u05DC\u05E7 \u05D4\u05E8\u05E9\u05EA \u05DE\u05D6\u05D4\u05D4 \u05D0\u05EA \u05D4\u05E8\u05E9\u05EA; \u05D7\u05DC\u05E7 \u05D4\u05DE\u05D0\u05E8\u05D7 \u05DE\u05D6\u05D4\u05D4 \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D1\u05D4."},{tier:1,type:"mc",q:"\u05DE\u05D4\u05D9 \u05DE\u05E1\u05D9\u05DB\u05EA /24 \u05D1\u05E2\u05E9\u05E8\u05D5\u05E0\u05D9?",options:["255.255.255.0","255.255.0.0","255.0.0.0","0.0.0.255"],a:0,why:"24 \u05D1\u05D9\u05D8\u05D9\u05DD \u05E9\u05DC 1 = 255.255.255.0."},{tier:1,type:"mc",q:"\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E8\u05E9\u05EA \u05E9\u05DC <code>192.168.1.50/24</code> \u05D4\u05D9\u05D0:",options:["192.168.1.0","192.168.1.255","192.168.0.0","192.168.1.1"],a:0,why:"\u05DE\u05D0\u05E4\u05E1\u05D9\u05DD \u05D0\u05EA \u05D1\u05D9\u05D8\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D7."},{tier:1,type:"mc",q:"\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4-Broadcast \u05E9\u05DC <code>192.168.1.50/24</code>:",options:["192.168.1.255","192.168.1.0","192.168.255.255","255.255.255.255"],a:0,why:"\u05DB\u05DC \u05D1\u05D9\u05D8\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D7 1 \u21D2 192.168.1.255."},{tier:1,type:"mc",q:"\u05DB\u05DE\u05D4 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05DE\u05D0\u05E8\u05D7 \u05EA\u05E7\u05D9\u05E0\u05D5\u05EA \u05D1-/24?",options:["254","256","255","253"],a:0,why:"2\u2078 \u2212 2 = 254."},{tier:2,type:"mc",q:"\u05DE\u05D7\u05E9\u05D1\u05D9\u05DD \u05D1\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA \u05DE\u05EA\u05E7\u05E9\u05E8\u05D9\u05DD\u2026",options:["\u05D9\u05E9\u05D9\u05E8\u05D5\u05EA (\u05D3\u05E8\u05DA \u05DE\u05EA\u05D2)","\u05EA\u05DE\u05D9\u05D3 \u05D3\u05E8\u05DA \u05E8\u05D0\u05D5\u05D8\u05E8","\u05E8\u05E7 \u05D3\u05E8\u05DA \u05D4\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8","\u05E8\u05E7 \u05E2\u05DD \u05DB\u05D1\u05DC \u05DE\u05D9\u05D5\u05D7\u05D3"],a:0,why:"\u05D1\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA \u2013 \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA. \u05D1\u05D9\u05DF \u05E8\u05E9\u05EA\u05D5\u05EA \u2013 \u05D3\u05E8\u05DA \u05E8\u05D0\u05D5\u05D8\u05E8."},{tier:2,type:"mc",q:"\u05DC\u05D0\u05D9\u05D6\u05D5 \u05DE\u05D7\u05DC\u05E7\u05D4 \u05E9\u05D9\u05D9\u05DB\u05EA <code>150.10.1.1</code>?",options:["B","A","C","D"],a:0,why:"128\u2013191 = \u05DE\u05D7\u05DC\u05E7\u05D4 B."},{tier:2,type:"mc",q:"\u05DE\u05D4\u05D9 \u05DE\u05E1\u05D9\u05DB\u05EA \u05D1\u05E8\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D3\u05DC \u05E9\u05DC \u05DE\u05D7\u05DC\u05E7\u05D4 B?",options:["255.255.0.0","255.0.0.0","255.255.255.0","255.255.255.255"],a:0,why:"\u05DE\u05D7\u05DC\u05E7\u05D4 B = /16."},{tier:2,type:"mc",q:"\u05DB\u05DE\u05D4 \u05D1\u05D9\u05D8\u05D9 \u05DE\u05D0\u05E8\u05D7 \u05D9\u05E9 \u05D1\u05DE\u05E1\u05D9\u05DB\u05D4 <code>255.255.0.0</code>?",options:["16","8","24","32"],a:0,why:"/16 \u21D2 32 \u2212 16 = 16."},{tier:2,type:"tf",q:"<code>10.0.0.1/8</code> \u05D5-<code>10.200.5.5/8</code> \u05D1\u05D0\u05D5\u05EA\u05D4 \u05E8\u05E9\u05EA.",a:!0,why:"/8 \u2013 \u05E8\u05E7 \u05D4\u05D0\u05D5\u05E7\u05D8\u05D8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05D4\u05D5\u05D0 \u05D4\u05E8\u05E9\u05EA (10 \u05D1\u05E9\u05E0\u05D9\u05D4\u05DD)."},{tier:2,type:"mc",q:"\u05DE\u05D4 \u05EA\u05E4\u05E7\u05D9\u05D3 \u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D3\u05DC (Default Gateway)?",options:["\u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05DC\u05E8\u05E9\u05EA\u05D5\u05EA \u05D0\u05D7\u05E8\u05D5\u05EA","\u05DC\u05EA\u05EA \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA IP","\u05DC\u05EA\u05E8\u05D2\u05DD \u05E9\u05DE\u05D5\u05EA \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA","\u05DC\u05D4\u05D2\u05D1\u05D9\u05E8 Wi-Fi"],a:0,why:"\u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D3\u05DC \u05D4\u05D5\u05D0 \u05D4\u05E8\u05D0\u05D5\u05D8\u05E8 \u05E9\u05DE\u05D5\u05D1\u05D9\u05DC \u05D4\u05D7\u05D5\u05E6\u05D4."},{tier:3,type:"input",q:"\u05DE\u05D4\u05D9 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4-Broadcast \u05E9\u05DC <code>172.16.5.9/16</code>?",answer:"172.16.255.255",placeholder:"___.___.___.___",why:"/16: \u05E9\u05E0\u05D9 \u05D4\u05D0\u05D5\u05E7\u05D8\u05D8\u05D9\u05DD \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD 255."},{tier:3,type:"mc",q:"\u05DE\u05D4\u05D9 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E8\u05E9\u05EA \u05E9\u05DC <code>192.168.1.130/25</code>?",options:["192.168.1.128","192.168.1.0","192.168.1.129","192.168.1.192"],a:0,why:"/25: \u05D1\u05DC\u05D5\u05E7\u05D9\u05DD \u05E9\u05DC 128: 0 \u05D5-128. 130 \u05D1-128\u2013255 \u21D2 \u05E8\u05E9\u05EA 192.168.1.128."},{tier:3,type:"input",q:"\u05DB\u05DE\u05D4 \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD \u05EA\u05E7\u05D9\u05E0\u05D9\u05DD \u05D9\u05E9 \u05D1\u05E8\u05E9\u05EA <code>/28</code>?",answer:"14",placeholder:"\u05DE\u05E1\u05E4\u05E8",why:"32 \u2212 28 = 4 \u05D1\u05D9\u05D8\u05D9 \u05DE\u05D0\u05E8\u05D7. 2\u2074 \u2212 2 = 14."},{tier:3,type:"mc",q:"\u05D0\u05D9\u05D6\u05D5 \u05DE\u05D4\u05DE\u05E1\u05D9\u05DB\u05D5\u05EA \u05D4\u05D1\u05D0\u05D5\u05EA <b>\u05D0\u05D9\u05E0\u05D4</b> \u05EA\u05E7\u05D9\u05E0\u05D4?",options:["255.255.255.65","255.255.255.192","255.255.255.128","255.255.254.0"],a:0,why:"\u05DE\u05E1\u05D9\u05DB\u05D4 \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05E8\u05E6\u05E3 1 \u05D5\u05D0\u05D7\u05E8\u05D9\u05D5 \u05E8\u05E6\u05E3 0. 65 = 01000001 \u2013 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF."}],game:{name:"\u05D3\u05D5\u05D0\u05E8 \u05D9\u05E0\u05E9\u05D5\u05E4\u05D9\u05DD",intro:`<p>\u05D9\u05E0\u05E9\u05D5\u05E4\u05D9 \u05D4\u05D3\u05D5\u05D0\u05E8 \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD \u05DC\u05D3\u05E2\u05EA \u05DC\u05D0\u05D9\u05D6\u05D4 \u05D1\u05D9\u05EA (\u05E8\u05E9\u05EA) \u05DC\u05DE\u05E1\u05D5\u05E8 \u05DB\u05DC \u05DE\u05DB\u05EA\u05D1! \u05D1\u05DB\u05DC \u05E1\u05D9\u05D1\u05D5\u05D1 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DB\u05EA\u05D1 \u05E2\u05DD <b>\u05DB\u05EA\u05D5\u05D1\u05EA IP</b> \u05D5\u05DE\u05E1\u05D9\u05DB\u05D4 \u2013 \u05D1\u05D7\u05E8\u05D5 \u05D0\u05EA <b>\u05D4\u05E8\u05E9\u05EA \u05D4\u05E0\u05DB\u05D5\u05E0\u05D4</b> \u05E9\u05D4\u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05D9\u05D9\u05DB\u05EA \u05DC\u05D4. \u05D8\u05E2\u05D5\u05EA = \u05D4\u05D9\u05E0\u05E9\u05D5\u05E3 \u05DE\u05EA\u05E8\u05E1\u05E7 \u05D5\u05DE\u05D0\u05D1\u05D3\u05D9\u05DD \u05DC\u05D1 \u2764\uFE0F (\u05D9\u05E9 3).</p>
    <p class="mini">\u05D1\u05E8\u05DE\u05D5\u05EA \u05D4\u05D2\u05D1\u05D5\u05D4\u05D5\u05EA: \u05D4\u05E8\u05E9\u05EA\u05D5\u05EA \u05DE\u05D2\u05D5\u05D5\u05E0\u05D5\u05EA \u05D9\u05D5\u05EA\u05E8, \u05D4\u05D6\u05DE\u05DF \u05E7\u05E6\u05E8, \u05D5\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05E6\u05E8\u05D9\u05DA \u05DC\u05D7\u05E9\u05D1 \u05E8\u05E9\u05EA\u05D5\u05EA \u05D1\u05D2\u05D5\u05D3\u05DC /26.</p>`,run:cm}};var x_={z1:lm,z2:um};function dm(s){return x_[s]}var pm=_n("#game"),On=new oc({canvas:pm,antialias:!0,powerPreference:"high-performance"});On.outputColorSpace=Re;On.toneMapping=Ao;On.toneMappingExposure=1.05;On.shadowMap.enabled=!0;On.shadowMap.type=_s;var y_=Xp(),Bn=new nn(62,innerWidth/innerHeight,.3,6e3),re=new bc(On,st.settings.quality),rt={renderer:On,camera:Bn,world:re,mode:"loading"};window.__game=rt;function td(){let s=st.settings.quality;On.setPixelRatio(Math.min(devicePixelRatio,[1,1.4,1.75][s])),On.setSize(innerWidth,innerHeight),re.fx?.setViewport(innerHeight*On.getPixelRatio())}addEventListener("resize",()=>{Bn.aspect=innerWidth/innerHeight,Bn.updateProjectionMatrix(),td()});td();rt.setQuality=s=>{st.settings.quality=s,re.quality=s,re.terrain.quality=s,re.applyQuality(),td()};async function v_(){let s=Qp();Vp(pm,{onKey:(t,e)=>M_(t,e),onLockChange:()=>{},wantLock:()=>rt.mode==="play"&&!rt.ui.blocking}),await re.load((t,e)=>s.set(t*.8,e)),s.set(.82,"\u05DE\u05E6\u05D9\u05D9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05E4\u05D4..."),re.fx.setViewport(innerHeight*On.getPixelRatio()),rt.player=new Jo(re),rt.player.camera=Bn,rt.npcs=new Ec(re),rt.creatures=new Ac(re),s.set(.88,"\u05DE\u05D0\u05DB\u05DC\u05E1\u05D9\u05DD \u05D0\u05EA \u05D4\u05E2\u05D5\u05DC\u05DD \u05D1\u05E7\u05E1\u05DD..."),await new Promise(t=>setTimeout(t,0)),rt.items={collectibles:new Rc(re),movables:new Cc(re),targets:new Ic(re),braziers:new Pc(re),cauldrons:new Lc(re),chests:new Dc(re),race:new Nc(re)},rt.potions=new zc(rt.player,re),rt.ui=new Fc(rt),rt.hooks={toast:(t,e)=>rt.ui.toast(t,e),onSpellSelect:()=>{}},rt.spells=new Uc(re,rt.player,rt),await rt.ui.buildMap(t=>s.set(.9+t*.1,"\u05DE\u05E6\u05D9\u05D9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05E4\u05D4...")),rt.ui.hud.classList.add("hidden"),s.set(1,"\u05DE\u05D5\u05DB\u05DF!"),setTimeout(()=>s.hide(),400),rt.world.atmo.time=st.time||.36,rt.mode="title",rt.player.holder.visible=!1,rt.ui.titleOpen=!0,qu(y_,{onStart:mm}),requestAnimationFrame(Qu)}function mm(s){if(Cr(),!s){let e={name:st.name,house:st.house,level:st.level,settings:st.settings};Object.assign(st,{score:0,coins:0,snitch:0,found:{},broom:"student",time:.36}),st.ingredients={herb:0,mushroom:0,crystal:0,flower:0},st.potions={speed:0,jump:0,night:0,luck:0,flight:0},We.forEach(n=>st.zones[n.id]={done:!1,stars:0,best:0,plays:0}),Object.assign(st,e),st.pos=null,st.seenIntro=!1,rt.items.collectibles.applyFound(),rt.items.chests.apply()}__(),rt.ui.titleOpen=!1,rt.ui.refreshBadge(),rt.ui.hud.classList.remove("hidden"),rt.mode="play";let t=rt.player;t.holder.visible=!0,s&&st.pos?t.teleport(st.pos.x,st.pos.z):t.teleport(0,24),t.yaw=Math.PI,t.facing=Math.atan2(-Math.sin(t.yaw),-Math.cos(t.yaw)),t.pitch=.15,t.camInit=!1,t.setBroom(st.broom),Ee(),st.seenIntro||(st.seenIntro=!0,setTimeout(()=>{rt.ui.openMenu("help"),rt.ui.toast(`\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0, ${st.name}! \u{1F9D9} \u05E7\u05E8\u05E0\u05D9 \u05D4\u05D0\u05D5\u05E8 \u05D4\u05E6\u05D1\u05E2\u05D5\u05E0\u05D9\u05D5\u05EA \u05DE\u05E1\u05DE\u05E0\u05D5\u05EA \u05D0\u05EA \u05DE\u05D2\u05D3\u05DC\u05D9 \u05D4\u05DC\u05D9\u05DE\u05D5\u05D3.`,"good",6e3)},700))}function __(){let t=rt.player.holder,e=zn[st.house]||zn[1];re.scene.remove(t);let n=new Jo(re);n.camera=Bn,rt.player=n,rt.potions.player=n,rt.spells.player=n}rt.toTitle=()=>{Ee(),rt.mode="title",rt.player.holder.visible=!1,rt.ui.hud.classList.add("hidden"),rt.ui.titleOpen=!0,Yo(),qu(!0,{onStart:mm})};rt.fastTravel=s=>{let t=re.zonePoints[s],e=_n("#fade")||document.body.appendChild(v("div",{id:"fade"}));e.classList.add("on"),setTimeout(()=>{rt.player.teleport(t.x,t.z+6,rt.player.mode==="broom"?3:0),rt.player.camInit=!1,rt.player.yaw=0,at("magic"),re.fx.burst(t.x,t.y+1,t.z+6,t.color,80,8,1,1.2,{}),e.classList.remove("on")},500)};rt.openZone=async s=>{let t=Nu(s),e=dm(s);if(!e){rt.ui.toast("\u05D4\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D6\u05D4 \u05E2\u05D5\u05D3 \u05D1\u05D1\u05E0\u05D9\u05D9\u05D4\u2026 \u2728","warn");return}Yo(),rt.ui.overlayOpen++,rt.player.frozen=!0,rt.ui.closeDialogue();let n=new Bc(rt,t,e);rt.session=n,n.open()};rt.closeLearn=()=>{rt.ui.overlayOpen=Math.max(0,rt.ui.overlayOpen-1),rt.player.frozen=!1,rt.session=null,rt.ui.refreshBadge(),Ee()};function gm(s,t=8){for(let e of We){let n=re.zonePoints[e.id];if(Math.hypot(n.x-s.x,n.z-s.z)<t&&Math.abs(n.y-s.y)<8)return e}return null}function b_(){let s=rt.ui;if(s.dialogue){s.closeDialogue();return}let t=rt.player,e=gm(t.pos);if(e){let o=st.zones[e.id];s.say(e.prof,`\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC<b>${e.name}</b>! \u05DB\u05D0\u05DF \u05E0\u05DC\u05DE\u05D3: ${e.topic}. ${o.done?`\u05DB\u05D1\u05E8 \u05E1\u05D9\u05D9\u05DE\u05EA \u05D0\u05D6\u05D5\u05E8 \u05D6\u05D4 (${"\u2605".repeat(o.stars)}) \u2013 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05D7\u05E7 \u05E9\u05D5\u05D1 \u05D5\u05DC\u05E9\u05E4\u05E8 \u05E9\u05D9\u05D0!`:"\u05DE\u05D5\u05DB\u05DF \u05DC\u05E9\u05D9\u05E2\u05D5\u05E8 \u05E7\u05E1\u05D5\u05DD \u05E2\u05DD \u05E1\u05D9\u05DE\u05D5\u05DC\u05E6\u05D9\u05D5\u05EA, \u05E9\u05D0\u05DC\u05D5\u05EA \u05D5\u05DE\u05E9\u05D7\u05E7\u05D5\u05DF?"}`,{actions:[{label:"\u{1F4D6} \u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC\u05E9\u05D9\u05E2\u05D5\u05E8",cls:"gold",fn:()=>rt.openZone(e.id)}],close:"\u05D0\u05D5\u05DC\u05D9 \u05D0\u05D7\u05E8 \u05DB\u05DA"});return}let n=rt.npcs.nearest(t.pos,4.5);if(n){if(n.talk=6,n.prof){let o=Nu(n.prof),a=st.zones[o.id];s.say(n.name,`${a.done?"\u05DB\u05DC \u05D4\u05DB\u05D1\u05D5\u05D3 \u05E2\u05DC \u05D4\u05E1\u05D9\u05D5\u05DD! ":"\u05E9\u05DC\u05D5\u05DD, \u05EA\u05DC\u05DE\u05D9\u05D3! "}\u05D4\u05E9\u05D9\u05E2\u05D5\u05E8 \u05D1\u05E0\u05D5\u05E9\u05D0 <b>${o.topic}</b> \u05DE\u05D7\u05DB\u05D4 \u05DC\u05DA \u05D1\u05D8\u05D1\u05E2\u05EA \u05D4\u05E7\u05E1\u05DD \u05D4\u05D6\u05D5\u05D4\u05E8\u05EA, \u05E1\u05DE\u05D5\u05DA \u05DC\u05DB\u05D0\u05DF. \u05E2\u05DE\u05D5\u05D3 \u05D1\u05EA\u05D5\u05DA \u05D4\u05D8\u05D1\u05E2\u05EA \u05D5\u05DC\u05D7\u05E5 E.`,{actions:[{label:"\u{1F4CD} \u05E1\u05DE\u05DF \u05D1\u05DE\u05E6\u05E4\u05DF",fn:()=>{s.waypoint=o.id,s.toast(`\u{1F4CD} \u05D9\u05E2\u05D3: ${o.name}`)}}]})}else s.say(n.name,Ce(Kp));at("click");return}let i=rt.items.chests.nearest(t.pos);if(i){let a=rt.items.chests.open(i).map(c=>Zn[c].icon).join(" ");s.toast(`\u{1F381} \u05EA\u05D9\u05D1\u05EA \u05D0\u05D5\u05E6\u05E8! \u05E7\u05D9\u05D1\u05DC\u05EA ${a} \u05D5-15 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA`,"good",4e3);return}if(rt.items.cauldrons.nearest(t.pos,5)){s.openMenu("potions");return}}function M_(s,t){if(rt.mode!=="play")return;let e=rt.ui;if(!rt.session){if(s==="Escape"){e.menuOpen?e.closeMenu():e.dialogue?e.closeDialogue():e.openMenu("settings");return}if(e.menuOpen){let n={KeyM:"map",KeyJ:"journal",KeyP:"potions",KeyH:"help"};n[s]&&(e.menuTab===n[s]?e.closeMenu():(e.menuTab=n[s],e.renderMenu()));return}if(!e.blocking)switch(s){case"KeyE":b_();break;case"KeyB":rt.player.toggleBroom();break;case"KeyQ":rt.spells.cycle();break;case"KeyM":e.openMenu("map");break;case"KeyJ":e.openMenu("journal");break;case"KeyP":e.openMenu("potions");break;case"KeyH":e.openMenu("help");break;case"KeyL":rt.spells.select(0),rt.spells.cast();break;default:s.startsWith("Digit")&&rt.spells.select(+s.slice(5)-1)}}}var S_=new To,en=0,Ku=0,fm="",ju=new L;function Qu(){let s=Math.min(S_.getDelta(),.05);en+=s;let t=rt.ui;if(rt.mode==="title"){let a=en*.06,c=-150,l=-540;ju.set(c+Math.cos(a)*330,130+Math.sin(en*.2)*20,l+Math.sin(a)*330+100),Bn.position.copy(ju),Bn.lookAt(c,90,l),Bn.fov=55,Bn.updateProjectionMatrix(),re.update(s,en,new L(c,60,l+100),Bn,!1),rt.creatures.update(s,en,ju),re.fx.update(s),On.render(re.scene,Bn),Bu(),requestAnimationFrame(Qu);return}let e=rt.player,n=t.blocking;e.frozen=n||!!rt.session,e.update(s,en),re.update(s,en,e.pos,Bn,e.mode==="broom"),re.fx.update(s),rt.npcs.update(s,en,e.pos),rt.creatures.update(s,en,e.pos);let i=rt.items;i.collectibles.update(s,en,e.pos,{onCollect:a=>t.toast(`${Zn[a.type].icon} ${Zn[a.type].name} +1`,"info",1800)}),i.movables.update(s,en,e.pos),i.targets.update(s,en,e.pos),i.braziers.update(s,en,e.pos,re.atmo.night),i.cauldrons.update(s,en,e.pos),i.chests.update(s,en,e.pos),i.race.update(s,en,e.pos,e.mode,w_),rt.potions.update(s),rt.spells.update(s,en);let r=rt.creatures.snitch;r.caught<=0&&e.pos.distanceToSquared(r.pos)<3.2*3.2&&rt.spells.catchSnitch(),!n&&!rt.session&&(Ct.locked||document.body.classList.contains("touch"))&&(Ct.clicked||Ct.lmb&&rt.spells.cool<=0&&mn[rt.spells.selected].id!=="lumos"&&mn[rt.spells.selected].id!=="patronus")&&rt.spells.cast(),!n&&Ct.pressed.has("Shift");let o=null;if(!n&&!rt.session){let a=gm(e.pos);if(a)o=`<kbd>E</kbd> ${a.icon} \u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC<b>${a.name}</b>`,st.zones[a.id].visited||(st.zones[a.id].visited=!0,t.toast(`\u{1F31F} \u05D2\u05D9\u05DC\u05D9\u05EA \u05D0\u05EA ${a.name}!`,"good",3500),at("levelup"),Ee());else{let c=rt.npcs.nearest(e.pos,4.5);c?o=`<kbd>E</kbd> \u05E9\u05D9\u05D7\u05D4 \u05E2\u05DD <b>${c.name}</b>`:rt.items.chests.nearest(e.pos)?o="<kbd>E</kbd> \u{1F381} \u05E4\u05EA\u05D9\u05D7\u05EA \u05EA\u05D9\u05D1\u05EA \u05D0\u05D5\u05E6\u05E8":rt.items.cauldrons.nearest(e.pos,5)&&(o="<kbd>E</kbd> \u{1FAD5} \u05E7\u05DC\u05D7\u05EA \u2013 \u05D1\u05D9\u05E9\u05D5\u05DC \u05E9\u05D9\u05E7\u05D5\u05D9\u05D9\u05DD")}for(let c of We){let l=re.zonePoints[c.id];!st.zones[c.id].visited&&Math.hypot(l.x-e.pos.x,l.z-e.pos.z)<60&&(st.zones[c.id].visited=!0,t.toast(`\u{1F31F} \u05D2\u05D9\u05DC\u05D9\u05EA \u05D0\u05EA ${c.name}! \u05E2\u05DB\u05E9\u05D9\u05D5 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D8\u05DC\u05E4\u05E8\u05D8 \u05D0\u05DC\u05D9\u05D5 \u05DE\u05D4\u05D9\u05D5\u05DE\u05DF`,"good",4e3),at("levelup"))}}e.edgeWarn>0&&(o="\u{1F30A} \u05D4\u05D9\u05DD \u05D4\u05E1\u05D5\u05E2\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05DE\u05DE\u05DA \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA \u2013 \u05D7\u05D6\u05D5\u05E8 \u05DC\u05D9\u05D1\u05E9\u05D4"),t.prompt(o),t.update(s,en),Ku+=s,Ku>10&&(Ku=0,st.pos={x:e.pos.x,z:e.pos.z},st.time=re.atmo.time,Ee()),On.render(re.scene,Bn),Bu(),requestAnimationFrame(Qu)}var w_={onStart:()=>{rt.ui.el.race.classList.remove("hidden"),rt.ui.toast("\u{1F3C1} \u05D4\u05DE\u05E8\u05D5\u05E5 \u05D4\u05EA\u05D7\u05D9\u05DC! \u05E2\u05D1\u05E8\u05D5 \u05D1\u05DB\u05DC \u05D4\u05D8\u05D1\u05E2\u05D5\u05EA","good"),at("levelup")},onTime:(s,t,e)=>{let n=rt.ui.el.race,i=`\u{1F3C1} ${s.toFixed(1)}s \xB7 \u05D8\u05D1\u05E2\u05EA ${t}/${e}`;i!==fm&&(n.textContent=i,fm=i)},onRing:()=>{},onEnd:(s,t)=>{if(rt.ui.el.race.classList.add("hidden"),s){let n=Math.round(Math.max(40,Math.min(300,300*(70/t)))),i=st.ring.best;(!i||t<i)&&(st.ring.best=t),Rs(n,"\u05DE\u05E8\u05D5\u05E5 \u05D8\u05D1\u05E2\u05D5\u05EA"),rt.ui.toast(`\u{1F3C6} \u05E1\u05D9\u05D9\u05DE\u05EA \u05D0\u05EA \u05D4\u05DE\u05E8\u05D5\u05E5 \u05D1-${t.toFixed(1)} \u05E9\u05E0\u05D9\u05D5\u05EA! +${n} \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA${i&&t>=i?"":" \xB7 \u05E9\u05D9\u05D0 \u05D7\u05D3\u05E9!"}`,"good",5e3),at("levelup")}else rt.ui.toast("\u05D4\u05DE\u05E8\u05D5\u05E5 \u05D4\u05D5\u05E4\u05E1\u05E7","warn")}};v_().catch(s=>{console.error(s);let t=_n("#loading");t.style.display="",t.innerHTML='<div class="ld-box"><h2>\u05D0\u05D5\u05E4\u05E1\u2026 \u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9</h2><p>'+(s.message||s)+'</p><button class="btn" onclick="location.reload()">\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1</button></div>'});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
