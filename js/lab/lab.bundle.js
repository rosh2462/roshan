/*! Lab and portrait — built from js/scene-3d.js; includes Three.js r170 (MIT, Copyright 2010-2024 Three.js authors). Do not edit: rebuild from source. */
var HiWiLabBundle=(()=>{var Ho=Object.defineProperty;var dd=Object.getOwnPropertyDescriptor;var fd=Object.getOwnPropertyNames;var pd=Object.prototype.hasOwnProperty;var md=(i,e)=>{for(var t in e)Ho(i,t,{get:e[t],enumerable:!0})},gd=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of fd(e))!pd.call(i,r)&&r!==t&&Ho(i,r,{get:()=>e[r],enumerable:!(n=dd(e,r))||n.enumerable});return i};var xd=i=>gd(Ho({},"__esModule",{value:!0}),i);var uv={};md(uv,{loadPortraitAsset:()=>ad,portraitPresentation:()=>Rc,sampleTextTargets:()=>ld,startBMWBridge:()=>hd,startLab:()=>Qh,startPortrait:()=>ed});var vd=0,Ic=1,yd=2;var Yu=1,Yl=2,Qn=3,An=0,Dt=1,sn=2,Bn=0,or=1,Ui=2,Lc=3,Dc=4,Zl=5,$n=100,_d=101,Md=102,bd=103,Sd=104,wd=200,So=201,Ed=202,Td=203,Sa=204,hr=205,Ad=206,Rd=207,Cd=208,Pd=209,Id=210,Ld=211,Dd=212,Ud=213,Nd=214,wa=0,Ea=1,Ta=2,dr=3,Aa=4,Ra=5,Ca=6,Pa=7,Jl=0,Fd=1,Od=2,xn=0,Kl=1,Ql=2,jl=3,hs=4,Bd=5,$l=6,ec=7;var Zu=300,fr=301,pr=302,Ia=303,La=304,wo=306,Da=1e3,Li=1001,Ua=1002,hn=1003,zd=1004;var xs=1005;var Fn=1006,Vo=1007;var Di=1008;var ni=1009,Ju=1010,Ku=1011,Kr=1012,tc=1013,Ni=1014,On=1015,Hn=1016,nc=1017,ic=1018,mr=1020,Qu=35902,ju=1021,$u=1022,Tn=1023,eh=1024,th=1025,ar=1026,gr=1027,rc=1028,sc=1029,nh=1030,oc=1031;var ac=1033,Zs=33776,Js=33777,Ks=33778,Qs=33779,Na=35840,Fa=35841,Oa=35842,Ba=35843,za=36196,ka=37492,Ha=37496,Va=37808,Ga=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Za=37814,Ja=37815,Ka=37816,Qa=37817,ja=37818,$a=37819,el=37820,tl=37821,js=36492,nl=36494,il=36495,ih=36283,rl=36284,sl=36285,ol=36286;var $s=2300,al=2301,Go=2302,Uc=2400,Nc=2401,Fc=2402;var kd=3200,lc=3201;var cc=0,Hd=1,mi="",Tt="srgb",wr="srgb-linear",Eo="linear",_t="srgb";var Gi=7680;var Oc=519,Vd=512,Gd=513,Wd=514,rh=515,Xd=516,qd=517,Yd=518,Zd=519,Bc=35044;var zc="300 es",ei=2e3,eo=2001,xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=1234567,lr=Math.PI/180,Qr=180/Math.PI;function Er(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function uc(i,e){return(i%e+e)%e}function Jd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Kd(i,e,t){return i!==e?(t-i)/(e-i):0}function qr(i,e,t){return(1-t)*i+t*e}function Qd(i,e,t,n){return qr(i,e,1-Math.exp(-t*n))}function jd(i,e=1){return e-Math.abs(uc(i,e*2)-e)}function $d(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ef(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function tf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function nf(i,e){return i+Math.random()*(e-i)}function rf(i){return i*(.5-Math.random())}function sf(i){i!==void 0&&(kc=i);let e=kc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function of(i){return i*lr}function af(i){return i*Qr}function lf(i){return(i&i-1)===0&&i!==0}function cf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hf(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),p=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*p,a*c);break;case"YZY":i.set(l*p,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*p,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function rr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Tr={DEG2RAD:lr,RAD2DEG:Qr,generateUUID:Er,clamp:Ht,euclideanModulo:uc,mapLinear:Jd,inverseLerp:Kd,lerp:qr,damp:Qd,pingpong:jd,smoothstep:$d,smootherstep:ef,randInt:tf,randFloat:nf,randFloatSpread:rf,seededRandom:sf,degToRad:of,radToDeg:af,isPowerOfTwo:lf,ceilPowerOfTwo:cf,floorPowerOfTwo:uf,setQuaternionFromProperEuler:hf,normalize:en,denormalize:rr},oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nt=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],d=n[5],g=n[8],x=r[0],m=r[3],f=r[6],y=r[1],b=r[4],v=r[7],C=r[2],E=r[5],A=r[8];return s[0]=o*x+a*y+l*C,s[3]=o*m+a*b+l*E,s[6]=o*f+a*v+l*A,s[1]=c*x+u*y+h*C,s[4]=c*m+u*b+h*E,s[7]=c*f+u*v+h*A,s[2]=p*x+d*y+g*C,s[5]=p*m+d*b+g*E,s[8]=p*f+d*v+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,p=a*l-u*s,d=c*s-o*l,g=t*h+n*p+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(r*c-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=p*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wo.makeScale(e,t)),this}rotate(e){return this.premultiply(Wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wo=new nt;function sh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function df(){let i=to("canvas");return i.style.display="block",i}var Hc={};function Wr(i){i in Hc||(Hc[i]=!0,console.warn(i))}function ff(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function pf(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mf(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ft={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===_t&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===_t&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mi?Eo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vc=[.64,.33,.3,.6,.15,.06],Gc=[.2126,.7152,.0722],Wc=[.3127,.329],Xc=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qc=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ft.define({[wr]:{primaries:Vc,whitePoint:Wc,transfer:Eo,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:Gc,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:Vc,whitePoint:Wc,transfer:_t,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:Gc,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});var Wi,ll=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=to("canvas")),Wi.width=e.width,Wi.height=e.height;let n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=to("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gf=0,no=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Er(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xo(r[o].image)):s.push(Xo(r[o]))}else s=Xo(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xf=0,on=class i extends xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Li,r=Li,s=Fn,o=Di,a=Tn,l=ni,c=i.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Er(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Da:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Da:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Zu;on.DEFAULT_ANISOTROPY=1;var lt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],d=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,v=(d+1)/2,C=(f+1)/2,E=(u+p)/4,A=(h+x)/4,I=(g+m)/4;return b>v&&b>C?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=E/n,s=A/n):v>C?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=E/r,s=I/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=A/s,r=I/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-x)/y,this.z=(p-u)/y,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cl=class extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new on(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new no(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},io=class extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ul=class extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],p=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==p||c!==d||u!==g){let m=1-a,f=l*p+c*d+u*g+h*x,y=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let C=Math.sqrt(b),E=Math.atan2(C,f*y);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}let v=a*y;if(l=l*m+p*v,c=c*m+d*v,u=u*m+g*v,h=h*m+x*v,m===1-a){let C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],p=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*p,e[t+1]=l*g+u*p+c*h-a*d,e[t+2]=c*g+u*d+a*p-l*h,e[t+3]=u*g-a*h-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),p=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"YXZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"ZXY":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"ZYX":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"YZX":this._x=p*u*h+c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h-p*d*g;break;case"XZY":this._x=p*u*h-c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=n+a+h;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qo.copy(this).projectOnVector(e),this.sub(qo)}reflect(e){return this.sub(qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qo=new R,Yc=new vi,vn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),ys.subVectors(this.max,Fr),Xi.subVectors(e.a,Fr),qi.subVectors(e.b,Fr),Yi.subVectors(e.c,Fr),ci.subVectors(qi,Xi),ui.subVectors(Yi,qi),wi.subVectors(Xi,Yi);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-wi.z,wi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,wi.z,0,-wi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-wi.y,wi.x,0];return!Yo(t,Xi,qi,Yi,ys)||(t=[1,0,0,0,1,0,0,0,1],!Yo(t,Xi,qi,Yi,ys))?!1:(_s.crossVectors(ci,ui),t=[_s.x,_s.y,_s.z],Yo(t,Xi,qi,Yi,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qn=[new R,new R,new R,new R,new R,new R,new R,new R],Sn=new R,vs=new vn,Xi=new R,qi=new R,Yi=new R,ci=new R,ui=new R,wi=new R,Fr=new R,ys=new R,_s=new R,Ei=new R;function Yo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ei.fromArray(i,s);let a=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var vf=new vn,Or=new R,Zo=new R,ii=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Or,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Zo)),this.expandByPoint(Or.copy(e.center).sub(Zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new R,Jo=new R,Ms=new R,hi=new R,Ko=new R,bs=new R,Qo=new R,xr=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Jo.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Jo);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ms),a=hi.dot(this.direction),l=-hi.dot(Ms),c=hi.lengthSq(),u=Math.abs(1-o*o),h,p,d,g;if(u>0)if(h=o*l-a,p=o*a-l,g=s*u,h>=0)if(p>=-g)if(p<=g){let x=1/u;h*=x,p*=x,d=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-s,-l),s),d=p*(p+2*l)+c):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+p*(p+2*l)+c);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Jo).addScaledVector(Ms,p),d}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);let n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,r,s){Ko.subVectors(t,e),bs.subVectors(n,e),Qo.crossVectors(Ko,bs);let o=this.direction.dot(Qo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);let l=a*this.direction.dot(bs.crossVectors(hi,bs));if(l<0)return null;let c=a*this.direction.dot(Ko.cross(hi));if(c<0||l+c>o)return null;let u=-a*hi.dot(Qo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class i{constructor(e,t,n,r,s,o,a,l,c,u,h,p,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,p,d,g,x,m)}set(e,t,n,r,s,o,a,l,c,u,h,p,d,g,x,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let p=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=p-x*c,t[9]=-a*l,t[2]=x-p*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*u,d=l*h,g=c*u,x=c*h;t[0]=p+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*u,d=l*h,g=c*u,x=c*h;t[0]=p-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=p*c+x,t[1]=l*h,t[5]=x*c+p,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-p*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=p-x*h}else if(e.order==="XZY"){let p=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yf,e,_f)}lookAt(e,t,n){let r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),di.crossVectors(n,cn),di.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),di.crossVectors(n,cn)),di.normalize(),Ss.crossVectors(cn,di),r[0]=di.x,r[4]=Ss.x,r[8]=cn.x,r[1]=di.y,r[5]=Ss.y,r[9]=cn.y,r[2]=di.z,r[6]=Ss.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],d=n[13],g=n[2],x=n[6],m=n[10],f=n[14],y=n[3],b=n[7],v=n[11],C=n[15],E=r[0],A=r[4],I=r[8],w=r[12],M=r[1],P=r[5],z=r[9],F=r[13],V=r[2],X=r[6],k=r[10],$=r[14],W=r[3],se=r[7],he=r[11],xe=r[15];return s[0]=o*E+a*M+l*V+c*W,s[4]=o*A+a*P+l*X+c*se,s[8]=o*I+a*z+l*k+c*he,s[12]=o*w+a*F+l*$+c*xe,s[1]=u*E+h*M+p*V+d*W,s[5]=u*A+h*P+p*X+d*se,s[9]=u*I+h*z+p*k+d*he,s[13]=u*w+h*F+p*$+d*xe,s[2]=g*E+x*M+m*V+f*W,s[6]=g*A+x*P+m*X+f*se,s[10]=g*I+x*z+m*k+f*he,s[14]=g*w+x*F+m*$+f*xe,s[3]=y*E+b*M+v*V+C*W,s[7]=y*A+b*P+v*X+C*se,s[11]=y*I+b*z+v*k+C*he,s[15]=y*w+b*F+v*$+C*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],d=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*p+n*c*p+r*a*d-n*l*d)+x*(+t*l*d-t*c*p+s*o*p-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+f*(-r*a*u-t*l*h+t*a*p+r*o*h-n*o*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],d=e[11],g=e[12],x=e[13],m=e[14],f=e[15],y=h*m*c-x*p*c+x*l*d-a*m*d-h*l*f+a*p*f,b=g*p*c-u*m*c-g*l*d+o*m*d+u*l*f-o*p*f,v=u*x*c-g*h*c+g*a*d-o*x*d-u*a*f+o*h*f,C=g*h*l-u*x*l-g*a*p+o*x*p+u*a*m-o*h*m,E=t*y+n*b+r*v+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=y*A,e[1]=(x*p*s-h*m*s-x*r*d+n*m*d+h*r*f-n*p*f)*A,e[2]=(a*m*s-x*l*s+x*r*c-n*m*c-a*r*f+n*l*f)*A,e[3]=(h*l*s-a*p*s-h*r*c+n*p*c+a*r*d-n*l*d)*A,e[4]=b*A,e[5]=(u*m*s-g*p*s+g*r*d-t*m*d-u*r*f+t*p*f)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*A,e[7]=(o*p*s-u*l*s+u*r*c-t*p*c-o*r*d+t*l*d)*A,e[8]=v*A,e[9]=(g*h*s-u*x*s-g*n*d+t*x*d+u*n*f-t*h*f)*A,e[10]=(o*x*s-g*a*s+g*n*c-t*x*c-o*n*f+t*a*f)*A,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*A,e[12]=C*A,e[13]=(u*x*r-g*h*r+g*n*p-t*x*p-u*n*m+t*h*m)*A,e[14]=(g*a*r-o*x*r-g*n*l+t*x*l+o*n*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*p+t*a*p)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,p=s*c,d=s*u,g=s*h,x=o*u,m=o*h,f=a*h,y=l*c,b=l*u,v=l*h,C=n.x,E=n.y,A=n.z;return r[0]=(1-(x+f))*C,r[1]=(d+v)*C,r[2]=(g-b)*C,r[3]=0,r[4]=(d-v)*E,r[5]=(1-(p+f))*E,r[6]=(m+y)*E,r[7]=0,r[8]=(g+b)*A,r[9]=(m-y)*A,r[10]=(1-(p+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Zi.set(r[0],r[1],r[2]).length(),o=Zi.set(r[4],r[5],r[6]).length(),a=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);let c=1/s,u=1/o,h=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,t.setFromRotationMatrix(wn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=ei){let l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r),d,g;if(a===ei)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===eo)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=ei){let l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),p=(t+e)*c,d=(n+r)*u,g,x;if(a===ei)g=(o+s)*h,x=-2*h;else if(a===eo)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zi=new R,wn=new bt,yf=new R(0,0,0),_f=new R(1,1,1),di=new R,Ss=new R,cn=new R,Zc=new bt,Jc=new vi,Rn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],p=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mf=0,Kc=new R,Ji=new vi,Zn=new bt,ws=new R,Br=new R,bf=new R,Sf=new vi,Qc=new R(1,0,0),jc=new R(0,1,0),$c=new R(0,0,1),eu={type:"added"},wf={type:"removed"},Ki={type:"childadded",child:null},jo={type:"childremoved",child:null},Ot=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new Rn,n=new vi,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new nt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Qc,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis($c,e)}translateOnAxis(e,t){return Kc.copy(e).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qc,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis($c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ws.copy(e):ws.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Br,ws,this.up):Zn.lookAt(ws,Br,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(Zn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eu),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wf),jo.child=e,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eu),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,Sf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ot.DEFAULT_UP=new R(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new R,Jn=new R,$o=new R,Kn=new R,Qi=new R,ji=new R,tu=new R,ea=new R,ta=new R,na=new R,ia=new lt,ra=new lt,sa=new lt,gi=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),En.subVectors(e,t),r.cross(En);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){En.subVectors(r,t),Jn.subVectors(n,t),$o.subVectors(e,t);let o=En.dot(En),a=En.dot(Jn),l=En.dot($o),c=Jn.dot(Jn),u=Jn.dot($o),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let p=1/h,d=(c*l-a*u)*p,g=(o*u-a*l)*p;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return ia.setScalar(0),ra.setScalar(0),sa.setScalar(0),ia.fromBufferAttribute(e,t),ra.fromBufferAttribute(e,n),sa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ia,s.x),o.addScaledVector(ra,s.y),o.addScaledVector(sa,s.z),o}static isFrontFacing(e,t,n,r){return En.subVectors(n,t),Jn.subVectors(e,t),En.cross(Jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),En.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Qi.subVectors(r,n),ji.subVectors(s,n),ea.subVectors(e,n);let l=Qi.dot(ea),c=ji.dot(ea);if(l<=0&&c<=0)return t.copy(n);ta.subVectors(e,r);let u=Qi.dot(ta),h=ji.dot(ta);if(u>=0&&h<=u)return t.copy(r);let p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Qi,o);na.subVectors(e,s);let d=Qi.dot(na),g=ji.dot(na);if(g>=0&&d<=g)return t.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ji,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return tu.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(tu,a);let f=1/(m+x+p);return o=x*f,a=p*f,t.copy(n).addScaledVector(Qi,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Es={h:0,s:0,l:0};function oa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ft.workingColorSpace){if(e=uc(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=oa(o,s,e+1/3),this.g=oa(o,s,e),this.b=oa(o,s,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ft.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Ht(Yt.r*255,0,255))*65536+Math.round(Ht(Yt.g*255,0,255))*256+Math.round(Ht(Yt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Yt.copy(this),t);let n=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Tt){ft.fromWorkingColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,r=Yt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Es);let n=qr(fi.h,Es.h,t),r=qr(fi.s,Es.s,t),s=qr(fi.l,Es.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new Pe;Pe.NAMES=oh;var Ef=0,zn=class extends xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Er(),this.name="",this.blending=or,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=hr,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sa&&(n.blendSrc=this.blendSrc),this.blendDst!==hr&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Vt=class extends zn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ut=new R,Ts=new oe,pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bc,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bc&&(e.usage=this.usage),e}};var ro=class extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var so=class extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tf=0,gn=new bt,aa=new Ot,$i=new R,un=new vn,zr=new vn,kt=new R,At=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sh(e)?so:ro)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(un.min,zr.min),un.expandByPoint(kt),kt.addVectors(un.max,zr.max),un.expandByPoint(kt)):(un.expandByPoint(zr.min),un.expandByPoint(zr.max))}un.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(e,c),kt.add($i)),r=Math.max(r,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new R,l[I]=new R;let c=new R,u=new R,h=new R,p=new oe,d=new oe,g=new oe,x=new R,m=new R;function f(I,w,M){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),p.fromBufferAttribute(s,I),d.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),d.sub(p),g.sub(p);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),a[I].add(x),a[w].add(x),a[M].add(x),l[I].add(m),l[w].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,w=y.length;I<w;++I){let M=y[I],P=M.start,z=M.count;for(let F=P,V=P+z;F<V;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let b=new R,v=new R,C=new R,E=new R;function A(I){C.fromBufferAttribute(r,I),E.copy(C);let w=a[I];b.copy(w),b.sub(C.multiplyScalar(C.dot(w))).normalize(),v.crossVectors(E,w);let P=v.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,P)}for(let I=0,w=y.length;I<w;++I){let M=y[I],P=M.start,z=M.count;for(let F=P,V=P+z;F<V;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let p=0,d=e.count;p<d;p+=3){let g=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let f=0;f<u;f++)p[g++]=c[d++]}return new pt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let p=c[u],d=e(p,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nu=new bt,Ti=new xr,As=new ii,iu=new R,Rs=new R,Cs=new R,Ps=new R,la=new R,Is=new R,ru=new R,Ls=new R,ht=class extends Ot{constructor(e=new At,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(la.fromBufferAttribute(h,e),o?Is.addScaledVector(la,u):Is.addScaledVector(la.sub(t),u))}t.add(Is)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(As.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(As,iu)===null||Ti.origin.distanceToSquared(iu)>(e.far-e.near)**2))&&(nu.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(nu),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],f=o[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,C=b;v<C;v+=3){let E=a.getX(v),A=a.getX(v+1),I=a.getX(v+2);r=Ds(this,f,e,n,c,u,h,E,A,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,f=x;m<f;m+=3){let y=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);r=Ds(this,o,e,n,c,u,h,y,b,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],f=o[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,C=b;v<C;v+=3){let E=v,A=v+1,I=v+2;r=Ds(this,f,e,n,c,u,h,E,A,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,f=x;m<f;m+=3){let y=m,b=m+1,v=m+2;r=Ds(this,o,e,n,c,u,h,y,b,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Af(i,e,t,n,r,s,o,a){let l;if(e.side===Dt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===An,a),l===null)return null;Ls.copy(a),Ls.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ls);return c<t.near||c>t.far?null:{distance:c,point:Ls.clone(),object:i}}function Ds(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Rs),i.getVertexPosition(l,Cs),i.getVertexPosition(c,Ps);let u=Af(i,e,t,n,Rs,Cs,Ps,ru);if(u){let h=new R;gi.getBarycoord(ru,Rs,Cs,Ps,h),r&&(u.uv=gi.getInterpolatedAttribute(r,a,l,c,h,new oe)),s&&(u.uv1=gi.getInterpolatedAttribute(s,a,l,c,h,new oe)),o&&(u.normal=gi.getInterpolatedAttribute(o,a,l,c,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new R,materialIndex:0};gi.getNormal(Rs,Cs,Ps,p.normal),u.face=p,u.barycoord=h}return u}var Cn=class i extends At{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],p=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(h,2));function g(x,m,f,y,b,v,C,E,A,I,w){let M=v/A,P=C/I,z=v/2,F=C/2,V=E/2,X=A+1,k=I+1,$=0,W=0,se=new R;for(let he=0;he<k;he++){let xe=he*P-F;for(let Re=0;Re<X;Re++){let We=Re*M-z;se[x]=We*y,se[m]=xe*b,se[f]=V,c.push(se.x,se.y,se.z),se[x]=0,se[m]=0,se[f]=E>0?1:-1,u.push(se.x,se.y,se.z),h.push(Re/A),h.push(1-he/I),$+=1}}for(let he=0;he<I;he++)for(let xe=0;xe<A;xe++){let Re=p+xe+X*he,We=p+xe+X*(he+1),Y=p+(xe+1)+X*(he+1),ee=p+(xe+1)+X*he;l.push(Re,We,ee),l.push(We,Y,ee),W+=6}a.addGroup(d,W,w),d+=W,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function tn(i){let e={};for(let t=0;t<i.length;t++){let n=vr(i[t]);for(let r in n)e[r]=n[r]}return e}function Rf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ah(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var hc={clone:vr,merge:tn},Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends zn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=Rf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},oo=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pi=new R,su=new oe,ou=new oe,Zt=class extends oo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,su,ou),t.subVectors(ou,su)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},er=-90,tr=1,hl=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(er,tr,e,t);r.layers=this.layers,this.add(r);let s=new Zt(er,tr,e,t);s.layers=this.layers,this.add(s);let o=new Zt(er,tr,e,t);o.layers=this.layers,this.add(o);let a=new Zt(er,tr,e,t);a.layers=this.layers,this.add(a);let l=new Zt(er,tr,e,t);l.layers=this.layers,this.add(l);let c=new Zt(er,tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,p,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ao=class extends on{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dl=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ao(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cn(5,5,5),s=new Lt({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Bn});s.uniforms.tEquirect.value=t;let o=new ht(r,s),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Fn),new hl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},ca=new R,If=new R,Lf=new nt,jn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ca.subVectors(n,t).cross(If.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ca),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lf.getNormalMatrix(e),r=this.coplanarPoint(ca).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new ii,Us=new R,$r=class{constructor(e=new jn,t=new jn,n=new jn,r=new jn,s=new jn,o=new jn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],p=r[7],d=r[8],g=r[9],x=r[10],m=r[11],f=r[12],y=r[13],b=r[14],v=r[15];if(n[0].setComponents(l-s,p-c,m-d,v-f).normalize(),n[1].setComponents(l+s,p+c,m+d,v+f).normalize(),n[2].setComponents(l+o,p+u,m+g,v+y).normalize(),n[3].setComponents(l-o,p-u,m-g,v-y).normalize(),n[4].setComponents(l-a,p-h,m-x,v-b).normalize(),t===ei)n[5].setComponents(l+a,p+h,m+x,v+b).normalize();else if(t===eo)n[5].setComponents(a,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Us.x=r.normal.x>0?e.max.x:e.min.x,Us.y=r.normal.y>0?e.max.y:e.min.y,Us.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Us)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function lh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Df(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<h.length;d++){let g=h[p],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,h[p]=x)}h.length=p+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Gt=class i extends At{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,p=t/l,d=[],g=[],x=[],m=[];for(let f=0;f<u;f++){let y=f*p-o;for(let b=0;b<c;b++){let v=b*h-s;g.push(v,-y,0),x.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){let b=y+c*f,v=y+c*(f+1),C=y+1+c*(f+1),E=y+1+c*f;d.push(b,v,E),d.push(v,C,E)}this.setIndex(d),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nf=`#ifdef USE_ALPHAHASH
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
#endif`,Ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kf=`#ifdef USE_AOMAP
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
#endif`,Hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yf=`#ifdef USE_IRIDESCENCE
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
#endif`,Zf=`#ifdef USE_BUMPMAP
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ip=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,rp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sp=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,up="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mp=`#ifdef USE_GRADIENTMAP
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
}`,bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ep=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Tp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Lp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gp=`#if defined( USE_POINTS_UV )
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
#endif`,Wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
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
#endif`,Kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nm=`#ifdef USE_NORMALMAP
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
#endif`,im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,vm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Am=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Um=`uniform sampler2D t2D;
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`#include <common>
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
}`,km=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hm=`#define DISTANCE
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
}`,Vm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`uniform float scale;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#define LAMBERT
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
}`,Km=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Qm=`#define MATCAP
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
}`,jm=`#define MATCAP
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
}`,$m=`#define NORMAL
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
}`,e0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t0=`#define PHONG
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
}`,n0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,i0=`#define STANDARD
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
}`,r0=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,s0=`#define TOON
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
}`,o0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,a0=`uniform float size;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,u0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,h0=`uniform float rotation;
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
}`,d0=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Uf,alphahash_pars_fragment:Nf,alphamap_fragment:Ff,alphamap_pars_fragment:Of,alphatest_fragment:Bf,alphatest_pars_fragment:zf,aomap_fragment:kf,aomap_pars_fragment:Hf,batching_pars_vertex:Vf,batching_vertex:Gf,begin_vertex:Wf,beginnormal_vertex:Xf,bsdfs:qf,iridescence_fragment:Yf,bumpmap_pars_fragment:Zf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:Kf,clipping_planes_pars_vertex:Qf,clipping_planes_vertex:jf,color_fragment:$f,color_pars_fragment:ep,color_pars_vertex:tp,color_vertex:np,common:ip,cube_uv_reflection_fragment:rp,defaultnormal_vertex:sp,displacementmap_pars_vertex:op,displacementmap_vertex:ap,emissivemap_fragment:lp,emissivemap_pars_fragment:cp,colorspace_fragment:up,colorspace_pars_fragment:hp,envmap_fragment:dp,envmap_common_pars_fragment:fp,envmap_pars_fragment:pp,envmap_pars_vertex:mp,envmap_physical_pars_fragment:Tp,envmap_vertex:gp,fog_vertex:xp,fog_pars_vertex:vp,fog_fragment:yp,fog_pars_fragment:_p,gradientmap_pars_fragment:Mp,lightmap_pars_fragment:bp,lights_lambert_fragment:Sp,lights_lambert_pars_fragment:wp,lights_pars_begin:Ep,lights_toon_fragment:Ap,lights_toon_pars_fragment:Rp,lights_phong_fragment:Cp,lights_phong_pars_fragment:Pp,lights_physical_fragment:Ip,lights_physical_pars_fragment:Lp,lights_fragment_begin:Dp,lights_fragment_maps:Up,lights_fragment_end:Np,logdepthbuf_fragment:Fp,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:Bp,logdepthbuf_vertex:zp,map_fragment:kp,map_pars_fragment:Hp,map_particle_fragment:Vp,map_particle_pars_fragment:Gp,metalnessmap_fragment:Wp,metalnessmap_pars_fragment:Xp,morphinstance_vertex:qp,morphcolor_vertex:Yp,morphnormal_vertex:Zp,morphtarget_pars_vertex:Jp,morphtarget_vertex:Kp,normal_fragment_begin:Qp,normal_fragment_maps:jp,normal_pars_fragment:$p,normal_pars_vertex:em,normal_vertex:tm,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:im,clearcoat_normal_fragment_maps:rm,clearcoat_pars_fragment:sm,iridescence_pars_fragment:om,opaque_fragment:am,packing:lm,premultiplied_alpha_fragment:cm,project_vertex:um,dithering_fragment:hm,dithering_pars_fragment:dm,roughnessmap_fragment:fm,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:mm,shadowmap_pars_vertex:gm,shadowmap_vertex:xm,shadowmask_pars_fragment:vm,skinbase_vertex:ym,skinning_pars_vertex:_m,skinning_vertex:Mm,skinnormal_vertex:bm,specularmap_fragment:Sm,specularmap_pars_fragment:wm,tonemapping_fragment:Em,tonemapping_pars_fragment:Tm,transmission_fragment:Am,transmission_pars_fragment:Rm,uv_pars_fragment:Cm,uv_pars_vertex:Pm,uv_vertex:Im,worldpos_vertex:Lm,background_vert:Dm,background_frag:Um,backgroundCube_vert:Nm,backgroundCube_frag:Fm,cube_vert:Om,cube_frag:Bm,depth_vert:zm,depth_frag:km,distanceRGBA_vert:Hm,distanceRGBA_frag:Vm,equirect_vert:Gm,equirect_frag:Wm,linedashed_vert:Xm,linedashed_frag:qm,meshbasic_vert:Ym,meshbasic_frag:Zm,meshlambert_vert:Jm,meshlambert_frag:Km,meshmatcap_vert:Qm,meshmatcap_frag:jm,meshnormal_vert:$m,meshnormal_frag:e0,meshphong_vert:t0,meshphong_frag:n0,meshphysical_vert:i0,meshphysical_frag:r0,meshtoon_vert:s0,meshtoon_frag:o0,points_vert:a0,points_frag:l0,shadow_vert:c0,shadow_frag:u0,sprite_vert:h0,sprite_frag:d0},ge={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Nn={basic:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:tn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:tn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:tn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:tn([ge.points,ge.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:tn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:tn([ge.common,ge.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:tn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:tn([ge.sprite,ge.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:tn([ge.common,ge.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:tn([ge.lights,ge.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Nn.physical={uniforms:tn([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Ns={r:0,b:0,g:0},Ri=new Rn,f0=new bt;function p0(i,e,t,n,r,s,o){let a=new Pe(0),l=s===!0?0:1,c,u,h=null,p=0,d=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function x(y){let b=!1,v=g(y);v===null?f(a,l):v&&v.isColor&&(f(v,1),b=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,b){let v=g(b);v&&(v.isCubeTexture||v.mapping===wo)?(u===void 0&&(u=new ht(new Cn(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:vr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ri.copy(b.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(f0.makeRotationFromEuler(Ri)),u.material.toneMapped=ft.getTransfer(v.colorSpace)!==_t,(h!==v||p!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ht(new Gt(2,2),new Lt({name:"BackgroundMaterial",uniforms:vr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ft.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,b){y.getRGB(Ns,ah(i)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:x,addToRenderList:m}}function m0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null),s=r,o=!1;function a(M,P,z,F,V){let X=!1,k=h(F,z,P);s!==k&&(s=k,c(s.object)),X=d(M,F,z,V),X&&g(M,F,z,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(M,P,z,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,P,z){let F=z.wireframe===!0,V=n[M.id];V===void 0&&(V={},n[M.id]=V);let X=V[P.id];X===void 0&&(X={},V[P.id]=X);let k=X[F];return k===void 0&&(k=p(l()),X[F]=k),k}function p(M){let P=[],z=[],F=[];for(let V=0;V<t;V++)P[V]=0,z[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,P,z,F){let V=s.attributes,X=P.attributes,k=0,$=z.getAttributes();for(let W in $)if($[W].location>=0){let he=V[W],xe=X[W];if(xe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),he===void 0||he.attribute!==xe||xe&&he.data!==xe.data)return!0;k++}return s.attributesNum!==k||s.index!==F}function g(M,P,z,F){let V={},X=P.attributes,k=0,$=z.getAttributes();for(let W in $)if($[W].location>=0){let he=X[W];he===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));let xe={};xe.attribute=he,he&&he.data&&(xe.data=he.data),V[W]=xe,k++}s.attributes=V,s.attributesNum=k,s.index=F}function x(){let M=s.newAttributes;for(let P=0,z=M.length;P<z;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){let z=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;z[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),V[M]!==P&&(i.vertexAttribDivisor(M,P),V[M]=P)}function y(){let M=s.newAttributes,P=s.enabledAttributes;for(let z=0,F=P.length;z<F;z++)P[z]!==M[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function b(M,P,z,F,V,X,k){k===!0?i.vertexAttribIPointer(M,P,z,V,X):i.vertexAttribPointer(M,P,z,F,V,X)}function v(M,P,z,F){x();let V=F.attributes,X=z.getAttributes(),k=P.defaultAttributeValues;for(let $ in X){let W=X[$];if(W.location>=0){let se=V[$];if(se===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){let he=se.normalized,xe=se.itemSize,Re=e.get(se);if(Re===void 0)continue;let We=Re.buffer,Y=Re.type,ee=Re.bytesPerElement,me=Y===i.INT||Y===i.UNSIGNED_INT||se.gpuType===tc;if(se.isInterleavedBufferAttribute){let te=se.data,Se=te.stride,Ie=se.offset;if(te.isInstancedInterleavedBuffer){for(let Be=0;Be<W.locationSize;Be++)f(W.location+Be,te.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Be=0;Be<W.locationSize;Be++)m(W.location+Be);i.bindBuffer(i.ARRAY_BUFFER,We);for(let Be=0;Be<W.locationSize;Be++)b(W.location+Be,xe/W.locationSize,Y,he,Se*ee,(Ie+xe/W.locationSize*Be)*ee,me)}else{if(se.isInstancedBufferAttribute){for(let te=0;te<W.locationSize;te++)f(W.location+te,se.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let te=0;te<W.locationSize;te++)m(W.location+te);i.bindBuffer(i.ARRAY_BUFFER,We);for(let te=0;te<W.locationSize;te++)b(W.location+te,xe/W.locationSize,Y,he,xe*ee,xe/W.locationSize*te*ee,me)}}else if(k!==void 0){let he=k[$];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(W.location,he);break;case 3:i.vertexAttrib3fv(W.location,he);break;case 4:i.vertexAttrib4fv(W.location,he);break;default:i.vertexAttrib1fv(W.location,he)}}}}y()}function C(){I();for(let M in n){let P=n[M];for(let z in P){let F=P[z];for(let V in F)u(F[V].object),delete F[V];delete P[z]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let z in P){let F=P[z];for(let V in F)u(F[V].object),delete F[V];delete P[z]}delete n[M.id]}function A(M){for(let P in n){let z=n[P];if(z[M.id]===void 0)continue;let F=z[M.id];for(let V in F)u(F[V].object),delete F[V];delete z[M.id]}}function I(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function g0(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,p){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*p[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function x0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let I=A===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ni&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==On&&!I)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:C,maxSamples:E}}function v0(i){let e=this,t=null,n=0,r=!1,s=!1,o=new jn,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let d=h.length!==0||p||n!==0||r;return r=p,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let y=s?0:n,b=y*4,v=f.clippingState||null;l.value=v,v=u(g,p,b,d);for(let C=0;C!==b;++C)v[C]=t[C];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=d+x*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,v=d;b!==x;++b,v+=4)o.copy(h[b]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function y0(i){let e=new WeakMap;function t(o,a){return a===Ia?o.mapping=fr:a===La&&(o.mapping=pr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ia||a===La)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new dl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var kn=class extends oo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sr=4,au=[.125,.215,.35,.446,.526,.582],Ii=20,ua=new kn,lu=new Pe,ha=null,da=0,fa=0,pa=!1,Pi=(1+Math.sqrt(5))/2,nr=1/Pi,cu=[new R(-Pi,nr,0),new R(Pi,nr,0),new R(-nr,0,Pi),new R(nr,0,Pi),new R(0,Pi,-nr),new R(0,Pi,nr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],yr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ha=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ha,da,fa),this._renderer.xr.enabled=pa,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ha=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Hn,format:Tn,colorSpace:wr,depthBuffer:!1},r=uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(s)),this._blurMaterial=M0(s,e,t)}return r}_compileMaterial(e){let t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,n,r){let a=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(lu),u.toneMapping=xn,u.autoClear=!1;let d=new Vt({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new ht(new Cn,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(lu),x=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let b=this._cubeSize;Fs(r,y*b,f>2?b:0,b,b),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===fr||e.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Fs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ua)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cu[(r-s-1)%cu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ht(this._lodPlanes[r],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Ii;m>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let f=[],y=0;for(let A=0;A<Ii;++A){let I=A/x,w=Math.exp(-I*I/2);f.push(w),A===0?y+=w:A<m&&(y+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:b}=this;p.dTheta.value=g,p.mipInt.value=b-n;let v=this._sizeLods[r],C=3*v*(r>b-sr?r-b+sr:0),E=4*(this._cubeSize-v);Fs(t,C,E,3*v,2*v),l.setRenderTarget(t),l.render(h,ua)}};function _0(i){let e=[],t=[],n=[],r=i,s=i-sr+1+au.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-sr?l=au[o-i+sr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,f=1,y=new Float32Array(x*g*d),b=new Float32Array(m*g*d),v=new Float32Array(f*g*d);for(let E=0;E<d;E++){let A=E%3*2/3-1,I=E>2?0:-1,w=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(w,x*g*E),b.set(p,m*g*E);let M=[E,E,E,E,E,E];v.set(M,f*g*E)}let C=new At;C.setAttribute("position",new pt(y,x)),C.setAttribute("uv",new pt(b,m)),C.setAttribute("faceIndex",new pt(v,f)),e.push(C),r>sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uu(i,e,t){let n=new Jt(i,e,t);return n.texture.mapping=wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function M0(i,e,t){let n=new Float32Array(Ii),r=new R(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function hu(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function du(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function b0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ia||l===La,u=l===fr||l===pr;if(c||u){let h=e.get(a),p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new yr(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new yr(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function S0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Wr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function w0(i,e,t,n){let r={},s=new WeakMap;function o(h){let p=h.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);for(let g in p.morphAttributes){let x=p.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}p.removeEventListener("dispose",o),delete r[p.id];let d=s.get(p);d&&(e.remove(d),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(h){let p=h.attributes;for(let g in p)e.update(p[g],i.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let x=d[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(h){let p=[],d=h.index,g=h.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let b=0,v=y.length;b<v;b+=3){let C=y[b+0],E=y[b+1],A=y[b+2];p.push(C,E,E,A,A,C)}}else if(g!==void 0){let y=g.array;x=g.version;for(let b=0,v=y.length/3-1;b<v;b+=3){let C=b+0,E=b+1,A=b+2;p.push(C,E,E,A,A,C)}}else return;let m=new(sh(p)?so:ro)(p,1);m.version=x;let f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){let p=s.get(h);if(p){let d=h.index;d!==null&&p.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function E0(i,e,t){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,d){i.drawElements(n,d,s,p*o),t.update(d,n,1)}function c(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,p*o,g),t.update(d,n,g))}function u(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,n,1)}function h(p,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/o,d[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,p,0,x,0,g);let f=0;for(let y=0;y<g;y++)f+=d[y]*x[y];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function T0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function A0(i,e,t){let n=new WeakMap,r=new lt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,p=n.get(a);if(p===void 0||p.count!==h){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let v=a.attributes.position.count*b,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*C*4*h),A=new io(E,v,C,h);A.type=On,A.needsUpdate=!0;let I=b*4;for(let M=0;M<h;M++){let P=m[M],z=f[M],F=y[M],V=v*C*4*M;for(let X=0;X<P.count;X++){let k=X*I;d===!0&&(r.fromBufferAttribute(P,X),E[V+k+0]=r.x,E[V+k+1]=r.y,E[V+k+2]=r.z,E[V+k+3]=0),g===!0&&(r.fromBufferAttribute(z,X),E[V+k+4]=r.x,E[V+k+5]=r.y,E[V+k+6]=r.z,E[V+k+7]=0),x===!0&&(r.fromBufferAttribute(F,X),E[V+k+8]=r.x,E[V+k+9]=r.y,E[V+k+10]=r.z,E[V+k+11]=F.itemSize===4?r.w:1)}}p={count:h,texture:A,size:new oe(v,C)},n.set(a,p),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function R0(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var lo=class extends on{constructor(e,t,n,r,s,o,a,l,c,u=ar){if(u!==ar&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ar&&(n=Ni),n===void 0&&u===gr&&(n=mr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ch=new on,fu=new lo(1,1),uh=new io,hh=new ul,dh=new ao,pu=[],mu=[],gu=new Float32Array(16),xu=new Float32Array(9),vu=new Float32Array(4);function Ar(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=pu[r];if(s===void 0&&(s=new Float32Array(r),pu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function To(i,e){let t=mu[e];t===void 0&&(t=new Int32Array(e),mu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function I0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function L0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function D0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;vu.set(n),i.uniformMatrix2fv(this.addr,!1,vu),zt(t,n)}}function U0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;xu.set(n),i.uniformMatrix3fv(this.addr,!1,xu),zt(t,n)}}function N0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;gu.set(n),i.uniformMatrix4fv(this.addr,!1,gu),zt(t,n)}}function F0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function O0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function B0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function k0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function H0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function V0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function G0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function W0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(fu.compareFunction=rh,s=fu):s=ch,t.setTexture2D(e||s,r)}function X0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||hh,r)}function q0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||dh,r)}function Y0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||uh,r)}function Z0(i){switch(i){case 5126:return C0;case 35664:return P0;case 35665:return I0;case 35666:return L0;case 35674:return D0;case 35675:return U0;case 35676:return N0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return B0;case 35669:case 35673:return z0;case 5125:return k0;case 36294:return H0;case 36295:return V0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}function J0(i,e){i.uniform1fv(this.addr,e)}function K0(i,e){let t=Ar(e,this.size,2);i.uniform2fv(this.addr,t)}function Q0(i,e){let t=Ar(e,this.size,3);i.uniform3fv(this.addr,t)}function j0(i,e){let t=Ar(e,this.size,4);i.uniform4fv(this.addr,t)}function $0(i,e){let t=Ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eg(i,e){let t=Ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tg(i,e){let t=Ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ng(i,e){i.uniform1iv(this.addr,e)}function ig(i,e){i.uniform2iv(this.addr,e)}function rg(i,e){i.uniform3iv(this.addr,e)}function sg(i,e){i.uniform4iv(this.addr,e)}function og(i,e){i.uniform1uiv(this.addr,e)}function ag(i,e){i.uniform2uiv(this.addr,e)}function lg(i,e){i.uniform3uiv(this.addr,e)}function cg(i,e){i.uniform4uiv(this.addr,e)}function ug(i,e,t){let n=this.cache,r=e.length,s=To(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ch,s[o])}function hg(i,e,t){let n=this.cache,r=e.length,s=To(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||hh,s[o])}function dg(i,e,t){let n=this.cache,r=e.length,s=To(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||dh,s[o])}function fg(i,e,t){let n=this.cache,r=e.length,s=To(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||uh,s[o])}function pg(i){switch(i){case 5126:return J0;case 35664:return K0;case 35665:return Q0;case 35666:return j0;case 35674:return $0;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return rg;case 35669:case 35673:return sg;case 5125:return og;case 36294:return ag;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}var fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Z0(t.type)}},pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pg(t.type)}},ml=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},ma=/(\w+)(\])?(\[|\.)?/g;function yu(i,e){i.seq.push(e),i.map[e.id]=e}function mg(i,e,t){let n=i.name,r=n.length;for(ma.lastIndex=0;;){let s=ma.exec(n),o=ma.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){yu(t,c===void 0?new fl(a,i,e):new pl(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new ml(a),yu(t,h)),t=h}}}var ur=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);mg(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function _u(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var gg=37297,xg=0;function vg(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Mu=new nt;function yg(i){ft._getMatrix(Mu,ft.workingColorSpace,i);let e=`mat3( ${Mu.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case Eo:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vg(i.getShaderSource(e),o)}else return r}function _g(i,e){let t=yg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Mg(i,e){let t;switch(e){case Kl:t="Linear";break;case Ql:t="Reinhard";break;case jl:t="Cineon";break;case hs:t="ACESFilmic";break;case $l:t="AgX";break;case ec:t="Neutral";break;case Bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Os=new R;function bg(){ft.getLuminanceCoefficients(Os);let i=Os.x.toFixed(4),e=Os.y.toFixed(4),t=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function wg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Eg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xr(i){return i!==""}function Su(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(i){return i.replace(Tg,Rg)}var Ag=new Map;function Rg(i,e){let t=st[e];if(t===void 0){let n=Ag.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gl(t)}var Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(i){return i.replace(Cg,Pg)}function Pg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ig(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Lg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fr:case pr:e="ENVMAP_TYPE_CUBE";break;case wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ug(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jl:e="ENVMAP_BLENDING_MULTIPLY";break;case Fd:e="ENVMAP_BLENDING_MIX";break;case Od:e="ENVMAP_BLENDING_ADD";break}return e}function Ng(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Fg(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ig(t),c=Lg(t),u=Dg(t),h=Ug(t),p=Ng(t),d=Sg(t),g=wg(s),x=r.createProgram(),m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xr).join(`
`),f.length>0&&(f+=`
`)):(m=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),f=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?st.tonemapping_pars_fragment:"",t.toneMapping!==xn?Mg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,_g("linearToOutputTexel",t.outputColorSpace),bg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),o=gl(o),o=Su(o,t),o=wu(o,t),a=gl(a),a=Su(a,t),a=wu(a,t),o=Eu(o),a=Eu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=y+m+o,v=y+f+a,C=_u(r,r.VERTEX_SHADER,b),E=_u(r,r.FRAGMENT_SHADER,v);r.attachShader(x,C),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let z=r.getProgramInfoLog(x).trim(),F=r.getShaderInfoLog(C).trim(),V=r.getShaderInfoLog(E).trim(),X=!0,k=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,C,E);else{let $=bu(r,C,"vertex"),W=bu(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+$+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||V==="")&&(k=!1);k&&(P.diagnostics={runnable:X,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:f}})}r.deleteShader(C),r.deleteShader(E),I=new ur(r,x),w=Eg(r,x)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,gg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=E,this}var Og=0,xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vl(e),t.set(e,n)),n}},vl=class{constructor(e){this.id=Og++,this.code=e,this.usedTimes=0}};function Bg(i,e,t,n,r,s,o){let a=new jr,l=new xl,c=new Set,u=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,P,z,F){let V=z.fog,X=F.geometry,k=w.isMeshStandardMaterial?z.environment:null,$=(w.isMeshStandardMaterial?t:e).get(w.envMap||k),W=$&&$.mapping===wo?$.image.height:null,se=g[w.type];w.precision!==null&&(d=r.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let he=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xe=he!==void 0?he.length:0,Re=0;X.morphAttributes.position!==void 0&&(Re=1),X.morphAttributes.normal!==void 0&&(Re=2),X.morphAttributes.color!==void 0&&(Re=3);let We,Y,ee,me;if(se){let G=Nn[se];We=G.vertexShader,Y=G.fragmentShader}else We=w.vertexShader,Y=w.fragmentShader,l.update(w),ee=l.getVertexShaderID(w),me=l.getFragmentShaderID(w);let te=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,Be=F.isBatchedMesh===!0,dt=!!w.map,ke=!!w.matcap,Ze=!!$,U=!!w.aoMap,St=!!w.lightMap,Fe=!!w.bumpMap,Ee=!!w.normalMap,ve=!!w.displacementMap,He=!!w.emissiveMap,we=!!w.metalnessMap,T=!!w.roughnessMap,_=w.anisotropy>0,O=w.clearcoat>0,J=w.dispersion>0,j=w.iridescence>0,Z=w.sheen>0,Me=w.transmission>0,K=_&&!!w.anisotropyMap,ie=O&&!!w.clearcoatMap,Te=O&&!!w.clearcoatNormalMap,re=O&&!!w.clearcoatRoughnessMap,ae=j&&!!w.iridescenceMap,Ce=j&&!!w.iridescenceThicknessMap,_e=Z&&!!w.sheenColorMap,pe=Z&&!!w.sheenRoughnessMap,Xe=!!w.specularMap,ze=!!w.specularColorMap,ct=!!w.specularIntensityMap,L=Me&&!!w.transmissionMap,ce=Me&&!!w.thicknessMap,q=!!w.gradientMap,Q=!!w.alphaMap,de=w.alphaTest>0,fe=!!w.alphaHash,ne=!!w.extensions,be=xn;w.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(be=i.toneMapping);let et={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:We,fragmentShader:Y,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Be,batchingColor:Be&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:wr,alphaToCoverage:!!w.alphaToCoverage,map:dt,matcap:ke,envMap:Ze,envMapMode:Ze&&$.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:St,bumpMap:Fe,normalMap:Ee,displacementMap:p&&ve,emissiveMap:He,normalMapObjectSpace:Ee&&w.normalMapType===Hd,normalMapTangentSpace:Ee&&w.normalMapType===cc,metalnessMap:we,roughnessMap:T,anisotropy:_,anisotropyMap:K,clearcoat:O,clearcoatMap:ie,clearcoatNormalMap:Te,clearcoatRoughnessMap:re,dispersion:J,iridescence:j,iridescenceMap:ae,iridescenceThicknessMap:Ce,sheen:Z,sheenColorMap:_e,sheenRoughnessMap:pe,specularMap:Xe,specularColorMap:ze,specularIntensityMap:ct,transmission:Me,transmissionMap:L,thicknessMap:ce,gradientMap:q,opaque:w.transparent===!1&&w.blending===or&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:de,alphaHash:fe,combine:w.combine,mapUv:dt&&x(w.map.channel),aoMapUv:U&&x(w.aoMap.channel),lightMapUv:St&&x(w.lightMap.channel),bumpMapUv:Fe&&x(w.bumpMap.channel),normalMapUv:Ee&&x(w.normalMap.channel),displacementMapUv:ve&&x(w.displacementMap.channel),emissiveMapUv:He&&x(w.emissiveMap.channel),metalnessMapUv:we&&x(w.metalnessMap.channel),roughnessMapUv:T&&x(w.roughnessMap.channel),anisotropyMapUv:K&&x(w.anisotropyMap.channel),clearcoatMapUv:ie&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Te&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:pe&&x(w.sheenRoughnessMap.channel),specularMapUv:Xe&&x(w.specularMap.channel),specularColorMapUv:ze&&x(w.specularColorMap.channel),specularIntensityMapUv:ct&&x(w.specularIntensityMap.channel),transmissionMapUv:L&&x(w.transmissionMap.channel),thicknessMapUv:ce&&x(w.thicknessMap.channel),alphaMapUv:Q&&x(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ee||_),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(dt||Q),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Se,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:dt&&w.map.isVideoTexture===!0&&ft.getTransfer(w.map.colorSpace)===_t,decodeVideoTextureEmissive:He&&w.emissiveMap.isVideoTexture===!0&&ft.getTransfer(w.emissiveMap.colorSpace)===_t,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===sn,flipSided:w.side===Dt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ne&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&w.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function f(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(M,w),b(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function b(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let M=g[w.type],P;if(M){let z=Nn[M];P=hc.clone(z.uniforms)}else P=w.uniforms;return P}function C(w,M){let P;for(let z=0,F=u.length;z<F;z++){let V=u[z];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Fg(i,M,w,s),u.push(P)),P}function E(w){if(--w.usedTimes===0){let M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:C,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:I}}function zg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function kg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Au(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ru(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,p,d,g,x,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,p,d,g,x,m){let f=o(h,p,d,g,x,m);d.transmission>0?n.push(f):d.transparent===!0?r.push(f):t.push(f)}function l(h,p,d,g,x,m){let f=o(h,p,d,g,x,m);d.transmission>0?n.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,p){t.length>1&&t.sort(h||kg),n.length>1&&n.sort(p||Au),r.length>1&&r.sort(p||Au)}function u(){for(let h=e,p=i.length;h<p;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Hg(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Ru,i.set(n,[o])):r>=s.length?(o=new Ru,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Pe};break;case"SpotLight":t={position:new R,direction:new R,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Gg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Wg=0;function Xg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qg(i){let e=new Vg,t=Gg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let r=new R,s=new bt,o=new bt;function a(c){let u=0,h=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,x=0,m=0,f=0,y=0,b=0,v=0,C=0,E=0,A=0;c.sort(Xg);for(let w=0,M=c.length;w<M;w++){let P=c[w],z=P.color,F=P.intensity,V=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=z.r*F,h+=z.g*F,p+=z.b*F;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],F);A++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,W=t.get(P);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=k,d++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(z).multiplyScalar(F),k.distance=V,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[x]=k;let $=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,$.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[x]=$.matrix,P.castShadow){let W=t.get(P);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=X,v++}x++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(z).multiplyScalar(F),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let $=P.shadow,W=t.get(P);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=k,g++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(F),k.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;let I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==y||I.numPointShadows!==b||I.numSpotShadows!==v||I.numSpotMaps!==C||I.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,I.directionalLength=d,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=y,I.numPointShadows=b,I.numSpotShadows=v,I.numSpotMaps=C,I.numLightProbes=A,n.version=Wg++)}function l(c,u){let h=0,p=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let b=c[f];if(b.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(b.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(b.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),p++}else if(b.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Cu(i){let e=new qg(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Yg(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Cu(i),e.set(r,[a])):s>=o.length?(a=new Cu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var es=class extends zn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yl=class extends zn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kg(i,e,t){let n=new $r,r=new oe,s=new oe,o=new lt,a=new es({depthPacking:lc}),l=new yl,c={},u=t.maxTextureSize,h={[An]:Dt,[Dt]:An,[sn]:sn},p=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Zg,fragmentShader:Jg}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let f=this.type;this.render=function(E,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Bn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=f!==Qn&&this.type===Qn,V=f===Qn&&this.type!==Qn;for(let X=0,k=E.length;X<k;X++){let $=E[X],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let se=W.getFrameExtents();if(r.multiply(se),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,W.mapSize.y=s.y)),W.map===null||F===!0||V===!0){let xe=this.type!==Qn?{minFilter:hn,magFilter:hn}:{};W.map!==null&&W.map.dispose(),W.map=new Jt(r.x,r.y,xe),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let he=W.getViewportCount();for(let xe=0;xe<he;xe++){let Re=W.getViewport(xe);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),z.viewport(o),W.updateMatrices($,xe),n=W.getFrustum(),v(A,I,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Qn&&y(W,I),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,P)};function y(E,A){let I=e.update(x);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Jt(r.x,r.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,I,p,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,I,d,x,null)}function b(E,A,I,w){let M=null,P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let z=M.uuid,F=A.uuid,V=c[z];V===void 0&&(V={},c[z]=V);let X=V[F];X===void 0&&(X=M.clone(),V[F]=X,A.addEventListener("dispose",C)),M=X}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Qn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=i.properties.get(M);z.light=I}return M}function v(E,A,I,w,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Qn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let F=e.update(E),V=E.material;if(Array.isArray(V)){let X=F.groups;for(let k=0,$=X.length;k<$;k++){let W=X[k],se=V[W.materialIndex];if(se&&se.visible){let he=b(E,se,w,M);E.onBeforeShadow(i,E,A,I,F,he,W),i.renderBufferDirect(I,null,F,he,E,W),E.onAfterShadow(i,E,A,I,F,he,W)}}}else if(V.visible){let X=b(E,V,w,M);E.onBeforeShadow(i,E,A,I,F,X,null),i.renderBufferDirect(I,null,F,X,E,null),E.onAfterShadow(i,E,A,I,F,X,null)}}let z=E.children;for(let F=0,V=z.length;F<V;F++)v(z[F],A,I,w,M)}function C(E){E.target.removeEventListener("dispose",C);for(let I in c){let w=c[I],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var Qg={[wa]:Ea,[Ta]:Ca,[Aa]:Pa,[dr]:Ra,[Ea]:wa,[Ca]:Ta,[Pa]:Aa,[Ra]:dr};function jg(i,e){function t(){let L=!1,ce=new lt,q=null,Q=new lt(0,0,0,0);return{setMask:function(de){q!==de&&!L&&(i.colorMask(de,de,de,de),q=de)},setLocked:function(de){L=de},setClear:function(de,fe,ne,be,et){et===!0&&(de*=be,fe*=be,ne*=be),ce.set(de,fe,ne,be),Q.equals(ce)===!1&&(i.clearColor(de,fe,ne,be),Q.copy(ce))},reset:function(){L=!1,q=null,Q.set(-1,0,0,0)}}}function n(){let L=!1,ce=!1,q=null,Q=null,de=null;return{setReversed:function(fe){if(ce!==fe){let ne=e.get("EXT_clip_control");ce?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);let be=de;de=null,this.setClear(be)}ce=fe},getReversed:function(){return ce},setTest:function(fe){fe?te(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(fe){q!==fe&&!L&&(i.depthMask(fe),q=fe)},setFunc:function(fe){if(ce&&(fe=Qg[fe]),Q!==fe){switch(fe){case wa:i.depthFunc(i.NEVER);break;case Ea:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case dr:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ra:i.depthFunc(i.GEQUAL);break;case Ca:i.depthFunc(i.GREATER);break;case Pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=fe}},setLocked:function(fe){L=fe},setClear:function(fe){de!==fe&&(ce&&(fe=1-fe),i.clearDepth(fe),de=fe)},reset:function(){L=!1,q=null,Q=null,de=null,ce=!1}}}function r(){let L=!1,ce=null,q=null,Q=null,de=null,fe=null,ne=null,be=null,et=null;return{setTest:function(G){L||(G?te(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(G){ce!==G&&!L&&(i.stencilMask(G),ce=G)},setFunc:function(G,Le,Ye){(q!==G||Q!==Le||de!==Ye)&&(i.stencilFunc(G,Le,Ye),q=G,Q=Le,de=Ye)},setOp:function(G,Le,Ye){(fe!==G||ne!==Le||be!==Ye)&&(i.stencilOp(G,Le,Ye),fe=G,ne=Le,be=Ye)},setLocked:function(G){L=G},setClear:function(G){et!==G&&(i.clearStencil(G),et=G)},reset:function(){L=!1,ce=null,q=null,Q=null,de=null,fe=null,ne=null,be=null,et=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},p=new WeakMap,d=[],g=null,x=!1,m=null,f=null,y=null,b=null,v=null,C=null,E=null,A=new Pe(0,0,0),I=0,w=!1,M=null,P=null,z=null,F=null,V=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,$=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=$>=2);let se=null,he={},xe=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),We=new lt().fromArray(xe),Y=new lt().fromArray(Re);function ee(L,ce,q,Q){let de=new Uint8Array(4),fe=i.createTexture();i.bindTexture(L,fe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<q;ne++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ce+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return fe}let me={};me[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc(dr),Fe(!1),Ee(Ic),te(i.CULL_FACE),U(Bn);function te(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Se(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Ie(L,ce){return h[L]!==ce?(i.bindFramebuffer(L,ce),h[L]=ce,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Be(L,ce){let q=d,Q=!1;if(L){q=p.get(ce),q===void 0&&(q=[],p.set(ce,q));let de=L.textures;if(q.length!==de.length||q[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,ne=de.length;fe<ne;fe++)q[fe]=i.COLOR_ATTACHMENT0+fe;q.length=de.length,Q=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Q=!0);Q&&i.drawBuffers(q)}function dt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let ke={[$n]:i.FUNC_ADD,[_d]:i.FUNC_SUBTRACT,[Md]:i.FUNC_REVERSE_SUBTRACT};ke[bd]=i.MIN,ke[Sd]=i.MAX;let Ze={[wd]:i.ZERO,[So]:i.ONE,[Ed]:i.SRC_COLOR,[Sa]:i.SRC_ALPHA,[Id]:i.SRC_ALPHA_SATURATE,[Cd]:i.DST_COLOR,[Ad]:i.DST_ALPHA,[Td]:i.ONE_MINUS_SRC_COLOR,[hr]:i.ONE_MINUS_SRC_ALPHA,[Pd]:i.ONE_MINUS_DST_COLOR,[Rd]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Dd]:i.ONE_MINUS_CONSTANT_COLOR,[Ud]:i.CONSTANT_ALPHA,[Nd]:i.ONE_MINUS_CONSTANT_ALPHA};function U(L,ce,q,Q,de,fe,ne,be,et,G){if(L===Bn){x===!0&&(Se(i.BLEND),x=!1);return}if(x===!1&&(te(i.BLEND),x=!0),L!==Zl){if(L!==m||G!==w){if((f!==$n||v!==$n)&&(i.blendEquation(i.FUNC_ADD),f=$n,v=$n),G)switch(L){case or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,b=null,C=null,E=null,A.set(0,0,0),I=0,m=L,w=G}return}de=de||ce,fe=fe||q,ne=ne||Q,(ce!==f||de!==v)&&(i.blendEquationSeparate(ke[ce],ke[de]),f=ce,v=de),(q!==y||Q!==b||fe!==C||ne!==E)&&(i.blendFuncSeparate(Ze[q],Ze[Q],Ze[fe],Ze[ne]),y=q,b=Q,C=fe,E=ne),(be.equals(A)===!1||et!==I)&&(i.blendColor(be.r,be.g,be.b,et),A.copy(be),I=et),m=L,w=!1}function St(L,ce){L.side===sn?Se(i.CULL_FACE):te(i.CULL_FACE);let q=L.side===Dt;ce&&(q=!q),Fe(q),L.blending===or&&L.transparent===!1?U(Bn):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let Q=L.stencilWrite;a.setTest(Q),Q&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),He(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function Ee(L){L!==vd?(te(i.CULL_FACE),L!==P&&(L===Ic?i.cullFace(i.BACK):L===yd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),P=L}function ve(L){L!==z&&(k&&i.lineWidth(L),z=L)}function He(L,ce,q){L?(te(i.POLYGON_OFFSET_FILL),(F!==ce||V!==q)&&(i.polygonOffset(ce,q),F=ce,V=q)):Se(i.POLYGON_OFFSET_FILL)}function we(L){L?te(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+X-1),se!==L&&(i.activeTexture(L),se=L)}function _(L,ce,q){q===void 0&&(se===null?q=i.TEXTURE0+X-1:q=se);let Q=he[q];Q===void 0&&(Q={type:void 0,texture:void 0},he[q]=Q),(Q.type!==L||Q.texture!==ce)&&(se!==q&&(i.activeTexture(q),se=q),i.bindTexture(L,ce||me[L]),Q.type=L,Q.texture=ce)}function O(){let L=he[se];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(L){We.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),We.copy(L))}function pe(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Xe(L,ce){let q=c.get(ce);q===void 0&&(q=new WeakMap,c.set(ce,q));let Q=q.get(L);Q===void 0&&(Q=i.getUniformBlockIndex(ce,L.name),q.set(L,Q))}function ze(L,ce){let Q=c.get(ce).get(L);l.get(ce)!==Q&&(i.uniformBlockBinding(ce,Q,L.__bindingPointIndex),l.set(ce,Q))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,he={},h={},p=new WeakMap,d=[],g=null,x=!1,m=null,f=null,y=null,b=null,v=null,C=null,E=null,A=new Pe(0,0,0),I=0,w=!1,M=null,P=null,z=null,F=null,V=null,We.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:Se,bindFramebuffer:Ie,drawBuffers:Be,useProgram:dt,setBlending:U,setMaterial:St,setFlipSided:Fe,setCullFace:Ee,setLineWidth:ve,setPolygonOffset:He,setScissorTest:we,activeTexture:T,bindTexture:_,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:j,texImage2D:ae,texImage3D:Ce,updateUBOMapping:Xe,uniformBlockBinding:ze,texStorage2D:Te,texStorage3D:re,texSubImage2D:Z,texSubImage3D:Me,compressedTexSubImage2D:K,compressedTexSubImage3D:ie,scissor:_e,viewport:pe,reset:ct}}function Pu(i,e,t,n){let r=$g(n);switch(t){case ju:return i*e;case eh:return i*e;case th:return i*e*2;case rc:return i*e/r.components*r.byteLength;case sc:return i*e/r.components*r.byteLength;case nh:return i*e*2/r.components*r.byteLength;case oc:return i*e*2/r.components*r.byteLength;case $u:return i*e*3/r.components*r.byteLength;case Tn:return i*e*4/r.components*r.byteLength;case ac:return i*e*4/r.components*r.byteLength;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ks:case Qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:case Ba:return Math.max(i,16)*Math.max(e,8)/4;case Na:case Oa:return Math.max(i,8)*Math.max(e,8)/2;case za:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case js:case nl:case il:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ih:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sl:case ol:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $g(i){switch(i){case ni:case Ju:return{byteLength:1,components:1};case Kr:case Ku:case Hn:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Ni:case tc:case On:return{byteLength:4,components:1};case Qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ex(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,h,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return d?new OffscreenCanvas(T,_):to("canvas")}function x(T,_,O){let J=1,j=we(T);if((j.width>O||j.height>O)&&(J=O/Math.max(j.width,j.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Z=Math.floor(J*j.width),Me=Math.floor(J*j.height);h===void 0&&(h=g(Z,Me));let K=_?g(Z,Me):h;return K.width=Z,K.height=Me,K.getContext("2d").drawImage(T,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+Me+")."),K}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,_,O,J,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=_;if(_===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),_===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),_===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),_===i.RGBA){let Me=j?Eo:ft.getTransfer(J);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=Me===_t?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(T,_){let O;return T?_===null||_===Ni||_===mr?O=i.DEPTH24_STENCIL8:_===On?O=i.DEPTH32F_STENCIL8:_===Kr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ni||_===mr?O=i.DEPTH_COMPONENT24:_===On?O=i.DEPTH_COMPONENT32F:_===Kr&&(O=i.DEPTH_COMPONENT16),O}function C(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==hn&&T.minFilter!==Fn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function E(T){let _=T.target;_.removeEventListener("dispose",E),I(_),_.isVideoTexture&&u.delete(_)}function A(T){let _=T.target;_.removeEventListener("dispose",A),M(_)}function I(T){let _=n.get(T);if(_.__webglInit===void 0)return;let O=T.source,J=p.get(O);if(J){let j=J[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(T),Object.keys(J).length===0&&p.delete(O)}n.remove(T)}function w(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let O=T.source,J=p.get(O);delete J[_.__cacheKey],o.memory.textures--}function M(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let j=0;j<_.__webglFramebuffer[J].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[J][j]);else i.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)i.deleteFramebuffer(_.__webglFramebuffer[J]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=T.textures;for(let J=0,j=O.length;J<j;J++){let Z=n.get(O[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(O[J])}n.remove(T)}let P=0;function z(){P=0}function F(){let T=P;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),P+=1,T}function V(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function X(T,_){let O=n.get(T);if(T.isVideoTexture&&ve(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,T,_);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function k(T,_){let O=n.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function $(T,_){let O=n.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function W(T,_){let O=n.get(T);if(T.version>0&&O.__version!==T.version){ee(O,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let se={[Da]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[Ua]:i.MIRRORED_REPEAT},he={[hn]:i.NEAREST,[zd]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Vo]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},xe={[Vd]:i.NEVER,[Zd]:i.ALWAYS,[Gd]:i.LESS,[rh]:i.LEQUAL,[Wd]:i.EQUAL,[Yd]:i.GEQUAL,[Xd]:i.GREATER,[qd]:i.NOTEQUAL};function Re(T,_){if(_.type===On&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Fn||_.magFilter===Vo||_.magFilter===xs||_.magFilter===Di||_.minFilter===Fn||_.minFilter===Vo||_.minFilter===xs||_.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,se[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,se[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,se[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,he[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===hn||_.minFilter!==xs&&_.minFilter!==Di||_.type===On&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function We(T,_){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",E));let J=_.source,j=p.get(J);j===void 0&&(j={},p.set(J,j));let Z=V(_);if(Z!==T.__cacheKey){j[Z]===void 0&&(j[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),j[Z].usedTimes++;let Me=j[T.__cacheKey];Me!==void 0&&(j[T.__cacheKey].usedTimes--,Me.usedTimes===0&&w(_)),T.__cacheKey=Z,T.__webglTexture=j[Z].texture}return O}function Y(T,_,O){let J=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=i.TEXTURE_3D);let j=We(T,_),Z=_.source;t.bindTexture(J,T.__webglTexture,i.TEXTURE0+O);let Me=n.get(Z);if(Z.version!==Me.__version||j===!0){t.activeTexture(i.TEXTURE0+O);let K=ft.getPrimaries(ft.workingColorSpace),ie=_.colorSpace===mi?null:ft.getPrimaries(_.colorSpace),Te=_.colorSpace===mi||K===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let re=x(_.image,!1,r.maxTextureSize);re=He(_,re);let ae=s.convert(_.format,_.colorSpace),Ce=s.convert(_.type),_e=b(_.internalFormat,ae,Ce,_.colorSpace,_.isVideoTexture);Re(J,_);let pe,Xe=_.mipmaps,ze=_.isVideoTexture!==!0,ct=Me.__version===void 0||j===!0,L=Z.dataReady,ce=C(_,re);if(_.isDepthTexture)_e=v(_.format===gr,_.type),ct&&(ze?t.texStorage2D(i.TEXTURE_2D,1,_e,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,_e,re.width,re.height,0,ae,Ce,null));else if(_.isDataTexture)if(Xe.length>0){ze&&ct&&t.texStorage2D(i.TEXTURE_2D,ce,_e,Xe[0].width,Xe[0].height);for(let q=0,Q=Xe.length;q<Q;q++)pe=Xe[q],ze?L&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,pe.width,pe.height,ae,Ce,pe.data):t.texImage2D(i.TEXTURE_2D,q,_e,pe.width,pe.height,0,ae,Ce,pe.data);_.generateMipmaps=!1}else ze?(ct&&t.texStorage2D(i.TEXTURE_2D,ce,_e,re.width,re.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,ae,Ce,re.data)):t.texImage2D(i.TEXTURE_2D,0,_e,re.width,re.height,0,ae,Ce,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ze&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,_e,Xe[0].width,Xe[0].height,re.depth);for(let q=0,Q=Xe.length;q<Q;q++)if(pe=Xe[q],_.format!==Tn)if(ae!==null)if(ze){if(L)if(_.layerUpdates.size>0){let de=Pu(pe.width,pe.height,_.format,_.type);for(let fe of _.layerUpdates){let ne=pe.data.subarray(fe*de/pe.data.BYTES_PER_ELEMENT,(fe+1)*de/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,fe,pe.width,pe.height,1,ae,ne)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,pe.width,pe.height,re.depth,ae,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,_e,pe.width,pe.height,re.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,pe.width,pe.height,re.depth,ae,Ce,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,_e,pe.width,pe.height,re.depth,0,ae,Ce,pe.data)}else{ze&&ct&&t.texStorage2D(i.TEXTURE_2D,ce,_e,Xe[0].width,Xe[0].height);for(let q=0,Q=Xe.length;q<Q;q++)pe=Xe[q],_.format!==Tn?ae!==null?ze?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,pe.width,pe.height,ae,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,q,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?L&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,pe.width,pe.height,ae,Ce,pe.data):t.texImage2D(i.TEXTURE_2D,q,_e,pe.width,pe.height,0,ae,Ce,pe.data)}else if(_.isDataArrayTexture)if(ze){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,_e,re.width,re.height,re.depth),L)if(_.layerUpdates.size>0){let q=Pu(re.width,re.height,_.format,_.type);for(let Q of _.layerUpdates){let de=re.data.subarray(Q*q/re.data.BYTES_PER_ELEMENT,(Q+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,ae,Ce,de)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ae,Ce,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,re.width,re.height,re.depth,0,ae,Ce,re.data);else if(_.isData3DTexture)ze?(ct&&t.texStorage3D(i.TEXTURE_3D,ce,_e,re.width,re.height,re.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ae,Ce,re.data)):t.texImage3D(i.TEXTURE_3D,0,_e,re.width,re.height,re.depth,0,ae,Ce,re.data);else if(_.isFramebufferTexture){if(ct)if(ze)t.texStorage2D(i.TEXTURE_2D,ce,_e,re.width,re.height);else{let q=re.width,Q=re.height;for(let de=0;de<ce;de++)t.texImage2D(i.TEXTURE_2D,de,_e,q,Q,0,ae,Ce,null),q>>=1,Q>>=1}}else if(Xe.length>0){if(ze&&ct){let q=we(Xe[0]);t.texStorage2D(i.TEXTURE_2D,ce,_e,q.width,q.height)}for(let q=0,Q=Xe.length;q<Q;q++)pe=Xe[q],ze?L&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,ae,Ce,pe):t.texImage2D(i.TEXTURE_2D,q,_e,ae,Ce,pe);_.generateMipmaps=!1}else if(ze){if(ct){let q=we(re);t.texStorage2D(i.TEXTURE_2D,ce,_e,q.width,q.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,Ce,re)}else t.texImage2D(i.TEXTURE_2D,0,_e,ae,Ce,re);m(_)&&f(J),Me.__version=Z.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ee(T,_,O){if(_.image.length!==6)return;let J=We(T,_),j=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let Z=n.get(j);if(j.version!==Z.__version||J===!0){t.activeTexture(i.TEXTURE0+O);let Me=ft.getPrimaries(ft.workingColorSpace),K=_.colorSpace===mi?null:ft.getPrimaries(_.colorSpace),ie=_.colorSpace===mi||Me===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Te=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,ae=[];for(let Q=0;Q<6;Q++)!Te&&!re?ae[Q]=x(_.image[Q],!0,r.maxCubemapSize):ae[Q]=re?_.image[Q].image:_.image[Q],ae[Q]=He(_,ae[Q]);let Ce=ae[0],_e=s.convert(_.format,_.colorSpace),pe=s.convert(_.type),Xe=b(_.internalFormat,_e,pe,_.colorSpace),ze=_.isVideoTexture!==!0,ct=Z.__version===void 0||J===!0,L=j.dataReady,ce=C(_,Ce);Re(i.TEXTURE_CUBE_MAP,_);let q;if(Te){ze&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Xe,Ce.width,Ce.height);for(let Q=0;Q<6;Q++){q=ae[Q].mipmaps;for(let de=0;de<q.length;de++){let fe=q[de];_.format!==Tn?_e!==null?ze?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,0,0,fe.width,fe.height,_e,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,Xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,0,0,fe.width,fe.height,_e,pe,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,Xe,fe.width,fe.height,0,_e,pe,fe.data)}}}else{if(q=_.mipmaps,ze&&ct){q.length>0&&ce++;let Q=we(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Xe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){ze?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ae[Q].width,ae[Q].height,_e,pe,ae[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,ae[Q].width,ae[Q].height,0,_e,pe,ae[Q].data);for(let de=0;de<q.length;de++){let ne=q[de].image[Q].image;ze?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,0,0,ne.width,ne.height,_e,pe,ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,Xe,ne.width,ne.height,0,_e,pe,ne.data)}}else{ze?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e,pe,ae[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,_e,pe,ae[Q]);for(let de=0;de<q.length;de++){let fe=q[de];ze?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,0,0,_e,pe,fe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,Xe,_e,pe,fe.image[Q])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),Z.__version=j.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function me(T,_,O,J,j,Z){let Me=s.convert(O.format,O.colorSpace),K=s.convert(O.type),ie=b(O.internalFormat,Me,K,O.colorSpace),Te=n.get(_),re=n.get(O);if(re.__renderTarget=_,!Te.__hasExternalTextures){let ae=Math.max(1,_.width>>Z),Ce=Math.max(1,_.height>>Z);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,Z,ie,ae,Ce,_.depth,0,Me,K,null):t.texImage2D(j,Z,ie,ae,Ce,0,Me,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ee(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,j,re.__webglTexture,0,Fe(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,j,re.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(T,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let J=_.depthTexture,j=J&&J.isDepthTexture?J.type:null,Z=v(_.stencilBuffer,j),Me=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=Fe(_);Ee(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,Z,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,Z,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Z,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,T)}else{let J=_.textures;for(let j=0;j<J.length;j++){let Z=J[j],Me=s.convert(Z.format,Z.colorSpace),K=s.convert(Z.type),ie=b(Z.internalFormat,Me,K,Z.colorSpace),Te=Fe(_);O&&Ee(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ie,_.width,_.height):Ee(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,ie,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ie,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(_.depthTexture);J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);let j=J.__webglTexture,Z=Fe(_);if(_.depthTexture.format===ar)Ee(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===gr)Ee(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ie(T){let _=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let J=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",j)};J.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=J}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Se(_.__webglFramebuffer,T)}else if(O){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=i.createRenderbuffer(),te(_.__webglDepthbuffer[J],T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),te(_.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(T,_,O){let J=n.get(T);_!==void 0&&me(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ie(T)}function dt(T){let _=T.texture,O=n.get(T),J=n.get(_);T.addEventListener("dispose",A);let j=T.textures,Z=T.isWebGLCubeRenderTarget===!0,Me=j.length>1;if(Me||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=_.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let ie=0;ie<_.mipmaps.length;ie++)O.__webglFramebuffer[K][ie]=i.createFramebuffer()}else O.__webglFramebuffer[K]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)O.__webglFramebuffer[K]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Me)for(let K=0,ie=j.length;K<ie;K++){let Te=n.get(j[K]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Ee(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){let ie=j[K];O.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[K]);let Te=s.convert(ie.format,ie.colorSpace),re=s.convert(ie.type),ae=b(ie.internalFormat,Te,re,ie.colorSpace,T.isXRRenderTarget===!0),Ce=Fe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ae,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,O.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),te(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Re(i.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)me(O.__webglFramebuffer[K][ie],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie);else me(O.__webglFramebuffer[K],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let K=0,ie=j.length;K<ie;K++){let Te=j[K],re=n.get(Te);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),Re(i.TEXTURE_2D,Te),me(O.__webglFramebuffer,T,Te,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,0),m(Te)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,J.__webglTexture),Re(K,_),_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)me(O.__webglFramebuffer[ie],T,_,i.COLOR_ATTACHMENT0,K,ie);else me(O.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,K,0);m(_)&&f(K),t.unbindTexture()}T.depthBuffer&&Ie(T)}function ke(T){let _=T.textures;for(let O=0,J=_.length;O<J;O++){let j=_[O];if(m(j)){let Z=y(T),Me=n.get(j).__webglTexture;t.bindTexture(Z,Me),f(Z),t.unbindTexture()}}}let Ze=[],U=[];function St(T){if(T.samples>0){if(Ee(T)===!1){let _=T.textures,O=T.width,J=T.height,j=i.COLOR_BUFFER_BIT,Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(T),K=_.length>1;if(K)for(let ie=0;ie<_.length;ie++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ie=0;ie<_.length;ie++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ie]);let Te=n.get(_[ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,j,i.NEAREST),l===!0&&(Ze.length=0,U.length=0,Ze.push(i.COLOR_ATTACHMENT0+ie),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ze.push(Z),U.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ie=0;ie<_.length;ie++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ie]);let Te=n.get(_[ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Fe(T){return Math.min(r.maxSamples,T.samples)}function Ee(T){let _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ve(T){let _=o.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function He(T,_){let O=T.colorSpace,J=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==wr&&O!==mi&&(ft.getTransfer(O)===_t?(J!==Tn||j!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function we(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=Be,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ee}function tx(i,e){function t(n,r=mi){let s,o=ft.getTransfer(r);if(n===ni)return i.UNSIGNED_BYTE;if(n===nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ic)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ju)return i.BYTE;if(n===Ku)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===tc)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===ju)return i.ALPHA;if(n===$u)return i.RGB;if(n===Tn)return i.RGBA;if(n===eh)return i.LUMINANCE;if(n===th)return i.LUMINANCE_ALPHA;if(n===ar)return i.DEPTH_COMPONENT;if(n===gr)return i.DEPTH_STENCIL;if(n===rc)return i.RED;if(n===sc)return i.RED_INTEGER;if(n===nh)return i.RG;if(n===oc)return i.RG_INTEGER;if(n===ac)return i.RGBA_INTEGER;if(n===Zs||n===Js||n===Ks||n===Qs)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Fa||n===Oa||n===Ba)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Na)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===ka||n===Ha)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===za||n===ka)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ha)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===Ka||n===Qa||n===ja||n===$a||n===el||n===tl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Va)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===js||n===nl||n===il)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===js)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ih||n===rl||n===sl||n===ol)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===js)return s.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ol)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var _l=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},gt=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},nx={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
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

}`,Ml=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new on,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:ix,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new Gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bl=class extends xi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,p=null,d=null,g=null,x=new Ml,m=t.getContextAttributes(),f=null,y=null,b=[],v=[],C=new oe,E=null,A=new Zt;A.viewport=new lt;let I=new Zt;I.viewport=new lt;let w=[A,I],M=new _l,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=b[Y];return ee===void 0&&(ee=new Yr,b[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=b[Y];return ee===void 0&&(ee=new Yr,b[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=b[Y];return ee===void 0&&(ee=new Yr,b[Y]=ee),ee.getHandSpace()};function F(Y){let ee=v.indexOf(Y.inputSource);if(ee===-1)return;let me=b[ee];me!==void 0&&(me.update(Y.inputSource,Y.frame,c||o),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",X);for(let Y=0;Y<b.length;Y++){let ee=v[Y];ee!==null&&(v[Y]=null,b[Y].disconnect(ee))}P=null,z=null,x.reset(),e.setRenderTarget(f),d=null,p=null,h=null,r=null,y=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){let ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Jt(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,me=null,te=null;m.depth&&(te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?gr:ar,me=m.stencil?mr:Ni);let Se={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:s};h=new XRWebGLBinding(r,t),p=h.createProjectionLayer(Se),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Jt(p.textureWidth,p.textureHeight,{format:Tn,type:ni,depthTexture:new lo(p.textureWidth,p.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(Y){for(let ee=0;ee<Y.removed.length;ee++){let me=Y.removed[ee],te=v.indexOf(me);te>=0&&(v[te]=null,b[te].disconnect(me))}for(let ee=0;ee<Y.added.length;ee++){let me=Y.added[ee],te=v.indexOf(me);if(te===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=v.length){v.push(me),te=Ie;break}else if(v[Ie]===null){v[Ie]=me,te=Ie;break}if(te===-1)break}let Se=b[te];Se&&Se.connect(me)}}let k=new R,$=new R;function W(Y,ee,me){k.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(me.matrixWorld);let te=k.distanceTo($),Se=ee.projectionMatrix.elements,Ie=me.projectionMatrix.elements,Be=Se[14]/(Se[10]-1),dt=Se[14]/(Se[10]+1),ke=(Se[9]+1)/Se[5],Ze=(Se[9]-1)/Se[5],U=(Se[8]-1)/Se[0],St=(Ie[8]+1)/Ie[0],Fe=Be*U,Ee=Be*St,ve=te/(-U+St),He=ve*-U;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(He),Y.translateZ(ve),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Se[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let we=Be+ve,T=dt+ve,_=Fe-He,O=Ee+(te-He),J=ke*dt/T*we,j=Ze*dt/T*we;Y.projectionMatrix.makePerspective(_,O,J,j,we,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function se(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,me=Y.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(me=x.depthFar)),M.near=I.near=A.near=ee,M.far=I.far=A.far=me,(P!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,z=M.far),A.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,M.layers.mask=A.layers.mask|I.layers.mask;let te=Y.parent,Se=M.cameras;se(M,te);for(let Ie=0;Ie<Se.length;Ie++)se(Se[Ie],te);Se.length===2?W(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),he(Y,M,te)};function he(Y,ee,me){me===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let xe=null;function Re(Y,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){let me=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let te=!1;me.length!==M.cameras.length&&(M.cameras.length=0,te=!0);for(let Ie=0;Ie<me.length;Ie++){let Be=me[Ie],dt=null;if(d!==null)dt=d.getViewport(Be);else{let Ze=h.getViewSubImage(p,Be);dt=Ze.viewport,Ie===0&&(e.setRenderTargetTextures(y,Ze.colorTexture,p.ignoreDepthValues?void 0:Ze.depthStencilTexture),e.setRenderTarget(y))}let ke=w[Ie];ke===void 0&&(ke=new Zt,ke.layers.enable(Ie),ke.viewport=new lt,w[Ie]=ke),ke.matrix.fromArray(Be.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Be.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(dt.x,dt.y,dt.width,dt.height),Ie===0&&(M.matrix.copy(ke.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),te===!0&&M.cameras.push(ke)}let Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")){let Ie=h.getDepthInformation(me[0]);Ie&&Ie.isValid&&Ie.texture&&x.init(e,Ie,r.renderState)}}for(let me=0;me<b.length;me++){let te=v[me],Se=b[me];te!==null&&Se!==void 0&&Se.update(te,ee,c||o)}xe&&xe(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let We=new lh;We.setAnimationLoop(Re),this.setAnimationLoop=function(Y){xe=Y},this.dispose=function(){}}},Ci=new Rn,sx=new bt;function ox(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ah(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,b,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Dt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Dt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=e.get(f),b=y.envMap,v=y.envMapRotation;b&&(m.envMap.value=b,Ci.copy(v),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(sx.makeRotationFromEuler(Ci)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ax(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let v=b.program;n.uniformBlockBinding(y,v)}function c(y,b){let v=r[y.id];v===void 0&&(g(y),v=u(y),r[y.id]=v,y.addEventListener("dispose",m));let C=b.program;n.updateUBOMapping(y,C);let E=e.render.frame;s[y.id]!==E&&(p(y),s[y.id]=E)}function u(y){let b=h();y.__bindingPointIndex=b;let v=i.createBuffer(),C=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let b=r[y.id],v=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,A=v.length;E<A;E++){let I=Array.isArray(v[E])?v[E]:[v[E]];for(let w=0,M=I.length;w<M;w++){let P=I[w];if(d(P,E,w,C)===!0){let z=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],V=0;for(let X=0;X<F.length;X++){let k=F[X],$=x(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,z+V,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,b,v,C){let E=y.value,A=b+"_"+v;if(C[A]===void 0)return typeof E=="number"||typeof E=="boolean"?C[A]=E:C[A]=E.clone(),!0;{let I=C[A];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return C[A]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(y){let b=y.uniforms,v=0,C=16;for(let A=0,I=b.length;A<I;A++){let w=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,P=w.length;M<P;M++){let z=w[M],F=Array.isArray(z.value)?z.value:[z.value];for(let V=0,X=F.length;V<X;V++){let k=F[V],$=x(k),W=v%C,se=W%$.boundary,he=W+se;v+=se,he!==0&&C-he<$.storage&&(v+=C-he),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=$.storage}}}let E=v%C;return E>0&&(v+=C-E),y.__size=v,y.__cache={},this}function x(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){let b=y.target;b.removeEventListener("dispose",m);let v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(let y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var yi=class{constructor(e={}){let{canvas:t=df(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=xn,this.toneMappingExposure=1;let v=this,C=!1,E=0,A=0,I=null,w=-1,M=null,P=new lt,z=new lt,F=null,V=new Pe(0),X=0,k=t.width,$=t.height,W=1,se=null,he=null,xe=new lt(0,0,k,$),Re=new lt(0,0,k,$),We=!1,Y=new $r,ee=!1,me=!1,te=new bt,Se=new bt,Ie=new R,Be=new lt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Ze(){return I===null?W:1}let U=n;function St(S,D){return t.getContext(S,D)}try{let S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",fe,!1),U===null){let D="webgl2";if(U=St(D,S),U===null)throw St(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Fe,Ee,ve,He,we,T,_,O,J,j,Z,Me,K,ie,Te,re,ae,Ce,_e,pe,Xe,ze,ct,L;function ce(){Fe=new S0(U),Fe.init(),ze=new tx(U,Fe),Ee=new x0(U,Fe,e,ze),ve=new jg(U,Fe),Ee.reverseDepthBuffer&&p&&ve.buffers.depth.setReversed(!0),He=new T0(U),we=new zg,T=new ex(U,Fe,ve,we,Ee,ze,He),_=new y0(v),O=new b0(v),J=new Df(U),ct=new m0(U,J),j=new w0(U,J,He,ct),Z=new R0(U,j,J,He),_e=new A0(U,Ee,T),re=new v0(we),Me=new Bg(v,_,O,Fe,Ee,ct,re),K=new ox(v,we),ie=new Hg,Te=new Yg(Fe),Ce=new p0(v,_,O,ve,Z,d,l),ae=new Kg(v,Z,Ee),L=new ax(U,He,Ee,ve),pe=new g0(U,Fe,He),Xe=new E0(U,Fe,He),He.programs=Me.programs,v.capabilities=Ee,v.extensions=Fe,v.properties=we,v.renderLists=ie,v.shadowMap=ae,v.state=ve,v.info=He}ce();let q=new bl(v,U);this.xr=q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=Fe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Fe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(k,$,!1))},this.getSize=function(S){return S.set(k,$)},this.setSize=function(S,D,B=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,$=D,t.width=Math.floor(S*W),t.height=Math.floor(D*W),B===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(k*W,$*W).floor()},this.setDrawingBufferSize=function(S,D,B){k=S,$=D,W=B,t.width=Math.floor(S*B),t.height=Math.floor(D*B),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(xe)},this.setViewport=function(S,D,B,H){S.isVector4?xe.set(S.x,S.y,S.z,S.w):xe.set(S,D,B,H),ve.viewport(P.copy(xe).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(Re)},this.setScissor=function(S,D,B,H){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,D,B,H),ve.scissor(z.copy(Re).multiplyScalar(W).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(S){ve.setScissorTest(We=S)},this.setOpaqueSort=function(S){se=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(S=!0,D=!0,B=!0){let H=0;if(S){let N=!1;if(I!==null){let ue=I.texture.format;N=ue===ac||ue===oc||ue===sc}if(N){let ue=I.texture.type,ye=ue===ni||ue===Ni||ue===Kr||ue===mr||ue===nc||ue===ic,De=Ce.getClearColor(),Ue=Ce.getClearAlpha(),Ke=De.r,tt=De.g,Ne=De.b;ye?(g[0]=Ke,g[1]=tt,g[2]=Ne,g[3]=Ue,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Ke,x[1]=tt,x[2]=Ne,x[3]=Ue,U.clearBufferiv(U.COLOR,0,x))}else H|=U.COLOR_BUFFER_BIT}D&&(H|=U.DEPTH_BUFFER_BIT),B&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ie.dispose(),Te.dispose(),we.dispose(),_.dispose(),O.dispose(),Z.dispose(),ct.dispose(),L.dispose(),Me.dispose(),q.dispose(),q.removeEventListener("sessionstart",ot),q.removeEventListener("sessionend",wt),at.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let S=He.autoReset,D=ae.enabled,B=ae.autoUpdate,H=ae.needsUpdate,N=ae.type;ce(),He.autoReset=S,ae.enabled=D,ae.autoUpdate=B,ae.needsUpdate=H,ae.type=N}function fe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ne(S){let D=S.target;D.removeEventListener("dispose",ne),be(D)}function be(S){et(S),we.remove(S)}function et(S){let D=we.get(S).programs;D!==void 0&&(D.forEach(function(B){Me.releaseProgram(B)}),S.isShaderMaterial&&Me.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,B,H,N,ue){D===null&&(D=dt);let ye=N.isMesh&&N.matrixWorld.determinant()<0,De=Ae(S,D,B,H,N);ve.setMaterial(H,ye);let Ue=B.index,Ke=1;if(H.wireframe===!0){if(Ue=j.getWireframeAttribute(B),Ue===void 0)return;Ke=2}let tt=B.drawRange,Ne=B.attributes.position,mt=tt.start*Ke,Et=(tt.start+tt.count)*Ke;ue!==null&&(mt=Math.max(mt,ue.start*Ke),Et=Math.min(Et,(ue.start+ue.count)*Ke)),Ue!==null?(mt=Math.max(mt,0),Et=Math.min(Et,Ue.count)):Ne!=null&&(mt=Math.max(mt,0),Et=Math.min(Et,Ne.count));let Rt=Et-mt;if(Rt<0||Rt===1/0)return;ct.setup(N,H,De,B,Ue);let rn,vt=pe;if(Ue!==null&&(rn=J.get(Ue),vt=Xe,vt.setIndex(rn)),N.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*Ze()),vt.setMode(U.LINES)):vt.setMode(U.TRIANGLES);else if(N.isLine){let Oe=H.linewidth;Oe===void 0&&(Oe=1),ve.setLineWidth(Oe*Ze()),N.isLineSegments?vt.setMode(U.LINES):N.isLineLoop?vt.setMode(U.LINE_LOOP):vt.setMode(U.LINE_STRIP)}else N.isPoints?vt.setMode(U.POINTS):N.isSprite&&vt.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)vt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))vt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Oe=N._multiDrawStarts,Xn=N._multiDrawCounts,yt=N._multiDrawCount,bn=Ue?J.get(Ue).bytesPerElement:1,Vi=we.get(H).currentProgram.getUniforms();for(let ln=0;ln<yt;ln++)Vi.setValue(U,"_gl_DrawID",ln),vt.render(Oe[ln]/bn,Xn[ln])}else if(N.isInstancedMesh)vt.renderInstances(mt,Rt,N.count);else if(B.isInstancedBufferGeometry){let Oe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Xn=Math.min(B.instanceCount,Oe);vt.renderInstances(mt,Rt,Xn)}else vt.render(mt,Rt)};function G(S,D,B){S.transparent===!0&&S.side===sn&&S.forceSinglePass===!1?(S.side=Dt,S.needsUpdate=!0,pn(S,D,B),S.side=An,S.needsUpdate=!0,pn(S,D,B),S.side=sn):pn(S,D,B)}this.compile=function(S,D,B=null){B===null&&(B=S),f=Te.get(B),f.init(D),b.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==B&&S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let H=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ue=N.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){let De=ue[ye];G(De,B,N),H.add(De)}else G(ue,B,N),H.add(ue)}),b.pop(),f=null,H},this.compileAsync=function(S,D,B=null){let H=this.compile(S,D,B);return new Promise(N=>{function ue(){if(H.forEach(function(ye){we.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){N(S);return}setTimeout(ue,10)}Fe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Le=null;function Ye(S){Le&&Le(S)}function ot(){at.stop()}function wt(){at.start()}let at=new lh;at.setAnimationLoop(Ye),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(S){Le=S,q.setAnimationLoop(S),S===null?at.stop():at.start()},q.addEventListener("sessionstart",ot),q.addEventListener("sessionend",wt),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(D),D=q.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,D,I),f=Te.get(S,b.length),f.init(D),b.push(f),Se.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Se),me=this.localClippingEnabled,ee=re.init(this.clippingPlanes,me),m=ie.get(S,y.length),m.init(),y.push(m),q.enabled===!0&&q.isPresenting===!0){let ue=v.xr.getDepthSensingMesh();ue!==null&&Mt(ue,D,-1/0,v.sortObjects)}Mt(S,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(se,he),ke=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ke&&Ce.addToRenderList(m,S),this.info.render.frame++,ee===!0&&re.beginShadows();let B=f.state.shadowsArray;ae.render(B,S,D),ee===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,N=m.transmissive;if(f.setupLights(),D.isArrayCamera){let ue=D.cameras;if(N.length>0)for(let ye=0,De=ue.length;ye<De;ye++){let Ue=ue[ye];nn(H,N,S,Ue)}ke&&Ce.render(S);for(let ye=0,De=ue.length;ye<De;ye++){let Ue=ue[ye];ut(m,S,Ue,Ue.viewport)}}else N.length>0&&nn(H,N,S,D),ke&&Ce.render(S),ut(m,S,D);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(v,S,D),ct.resetDefaultState(),w=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],ee===!0&&re.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Mt(S,D,B,H){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){H&&Be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Se);let ye=Z.update(S),De=S.material;De.visible&&m.push(S,ye,De,B,Be.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){let ye=Z.update(S),De=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Be.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Be.copy(ye.boundingSphere.center)),Be.applyMatrix4(S.matrixWorld).applyMatrix4(Se)),Array.isArray(De)){let Ue=ye.groups;for(let Ke=0,tt=Ue.length;Ke<tt;Ke++){let Ne=Ue[Ke],mt=De[Ne.materialIndex];mt&&mt.visible&&m.push(S,ye,mt,B,Be.z,Ne)}}else De.visible&&m.push(S,ye,De,B,Be.z,null)}}let ue=S.children;for(let ye=0,De=ue.length;ye<De;ye++)Mt(ue[ye],D,B,H)}function ut(S,D,B,H){let N=S.opaque,ue=S.transmissive,ye=S.transparent;f.setupLightsView(B),ee===!0&&re.setGlobalState(v.clippingPlanes,B),H&&ve.viewport(P.copy(H)),N.length>0&&Wt(N,D,B),ue.length>0&&Wt(ue,D,B),ye.length>0&&Wt(ye,D,B),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function nn(S,D,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new Jt(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Hn:ni,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let ue=f.state.transmissionRenderTarget[H.id],ye=H.viewport||P;ue.setSize(ye.z,ye.w);let De=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(V),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),ke&&Ce.render(B);let Ue=v.toneMapping;v.toneMapping=xn;let Ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),ee===!0&&re.setGlobalState(v.clippingPlanes,H),Wt(S,B,H),T.updateMultisampleRenderTarget(ue),T.updateRenderTargetMipmap(ue),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ne=0,mt=D.length;Ne<mt;Ne++){let Et=D[Ne],Rt=Et.object,rn=Et.geometry,vt=Et.material,Oe=Et.group;if(vt.side===sn&&Rt.layers.test(H.layers)){let Xn=vt.side;vt.side=Dt,vt.needsUpdate=!0,Xt(Rt,B,H,rn,vt,Oe),vt.side=Xn,vt.needsUpdate=!0,tt=!0}}tt===!0&&(T.updateMultisampleRenderTarget(ue),T.updateRenderTargetMipmap(ue))}v.setRenderTarget(De),v.setClearColor(V,X),Ke!==void 0&&(H.viewport=Ke),v.toneMapping=Ue}function Wt(S,D,B){let H=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ue=S.length;N<ue;N++){let ye=S[N],De=ye.object,Ue=ye.geometry,Ke=H===null?ye.material:H,tt=ye.group;De.layers.test(B.layers)&&Xt(De,D,B,Ue,Ke,tt)}}function Xt(S,D,B,H,N,ue){S.onBeforeRender(v,D,B,H,N,ue),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(v,D,B,H,S,ue),N.transparent===!0&&N.side===sn&&N.forceSinglePass===!1?(N.side=Dt,N.needsUpdate=!0,v.renderBufferDirect(B,D,H,N,S,ue),N.side=An,N.needsUpdate=!0,v.renderBufferDirect(B,D,H,N,S,ue),N.side=sn):v.renderBufferDirect(B,D,H,N,S,ue),S.onAfterRender(v,D,B,H,N,ue)}function pn(S,D,B){D.isScene!==!0&&(D=dt);let H=we.get(S),N=f.state.lights,ue=f.state.shadowsArray,ye=N.state.version,De=Me.getParameters(S,N.state,ue,D,B),Ue=Me.getProgramCacheKey(De),Ke=H.programs;H.environment=S.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(S.isMeshStandardMaterial?O:_).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ke===void 0&&(S.addEventListener("dispose",ne),Ke=new Map,H.programs=Ke);let tt=Ke.get(Ue);if(tt!==void 0){if(H.currentProgram===tt&&H.lightsStateVersion===ye)return le(S,De),tt}else De.uniforms=Me.getUniforms(S),S.onBeforeCompile(De,v),tt=Me.acquireProgram(De,Ue),Ke.set(Ue,tt),H.uniforms=De.uniforms;let Ne=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=re.uniform),le(S,De),H.needsLights=rt(S),H.lightsStateVersion=ye,H.needsLights&&(Ne.ambientLightColor.value=N.state.ambient,Ne.lightProbe.value=N.state.probe,Ne.directionalLights.value=N.state.directional,Ne.directionalLightShadows.value=N.state.directionalShadow,Ne.spotLights.value=N.state.spot,Ne.spotLightShadows.value=N.state.spotShadow,Ne.rectAreaLights.value=N.state.rectArea,Ne.ltc_1.value=N.state.rectAreaLTC1,Ne.ltc_2.value=N.state.rectAreaLTC2,Ne.pointLights.value=N.state.point,Ne.pointLightShadows.value=N.state.pointShadow,Ne.hemisphereLights.value=N.state.hemi,Ne.directionalShadowMap.value=N.state.directionalShadowMap,Ne.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ne.spotShadowMap.value=N.state.spotShadowMap,Ne.spotLightMatrix.value=N.state.spotLightMatrix,Ne.spotLightMap.value=N.state.spotLightMap,Ne.pointShadowMap.value=N.state.pointShadowMap,Ne.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=tt,H.uniformsList=null,tt}function $t(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=ur.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function le(S,D){let B=we.get(S);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Ae(S,D,B,H,N){D.isScene!==!0&&(D=dt),T.resetTextureUnits();let ue=D.fog,ye=H.isMeshStandardMaterial?D.environment:null,De=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:wr,Ue=(H.isMeshStandardMaterial?O:_).get(H.envMap||ye),Ke=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,tt=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!B.morphAttributes.position,mt=!!B.morphAttributes.normal,Et=!!B.morphAttributes.color,Rt=xn;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Rt=v.toneMapping);let rn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,vt=rn!==void 0?rn.length:0,Oe=we.get(H),Xn=f.state.lights;if(ee===!0&&(me===!0||S!==M)){let mn=S===M&&H.id===w;re.setState(H,S,mn)}let yt=!1;H.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Xn.state.version||Oe.outputColorSpace!==De||N.isBatchedMesh&&Oe.batching===!1||!N.isBatchedMesh&&Oe.batching===!0||N.isBatchedMesh&&Oe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Oe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Oe.instancing===!1||!N.isInstancedMesh&&Oe.instancing===!0||N.isSkinnedMesh&&Oe.skinning===!1||!N.isSkinnedMesh&&Oe.skinning===!0||N.isInstancedMesh&&Oe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Oe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Oe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Oe.instancingMorph===!1&&N.morphTexture!==null||Oe.envMap!==Ue||H.fog===!0&&Oe.fog!==ue||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==re.numPlanes||Oe.numIntersection!==re.numIntersection)||Oe.vertexAlphas!==Ke||Oe.vertexTangents!==tt||Oe.morphTargets!==Ne||Oe.morphNormals!==mt||Oe.morphColors!==Et||Oe.toneMapping!==Rt||Oe.morphTargetsCount!==vt)&&(yt=!0):(yt=!0,Oe.__version=H.version);let bn=Oe.currentProgram;yt===!0&&(bn=pn(H,D,N));let Vi=!1,ln=!1,Ur=!1,Ct=bn.getUniforms(),Un=Oe.uniforms;if(ve.useProgram(bn.program)&&(Vi=!0,ln=!0,Ur=!0),H.id!==w&&(w=H.id,ln=!0),Vi||M!==S){ve.buffers.depth.getReversed()?(te.copy(S.projectionMatrix),pf(te),mf(te),Ct.setValue(U,"projectionMatrix",te)):Ct.setValue(U,"projectionMatrix",S.projectionMatrix),Ct.setValue(U,"viewMatrix",S.matrixWorldInverse);let ai=Ct.map.cameraPosition;ai!==void 0&&ai.setValue(U,Ie.setFromMatrixPosition(S.matrixWorld)),Ee.logarithmicDepthBuffer&&Ct.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ct.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,ln=!0,Ur=!0)}if(N.isSkinnedMesh){Ct.setOptional(U,N,"bindMatrix"),Ct.setOptional(U,N,"bindMatrixInverse");let mn=N.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ct.setValue(U,"boneTexture",mn.boneTexture,T))}N.isBatchedMesh&&(Ct.setOptional(U,N,"batchingTexture"),Ct.setValue(U,"batchingTexture",N._matricesTexture,T),Ct.setOptional(U,N,"batchingIdTexture"),Ct.setValue(U,"batchingIdTexture",N._indirectTexture,T),Ct.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&Ct.setValue(U,"batchingColorTexture",N._colorsTexture,T));let Nr=B.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&_e.update(N,B,bn),(ln||Oe.receiveShadow!==N.receiveShadow)&&(Oe.receiveShadow=N.receiveShadow,Ct.setValue(U,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Un.envMap.value=Ue,Un.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(Un.envMapIntensity.value=D.environmentIntensity),ln&&(Ct.setValue(U,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&Je(Un,Ur),ue&&H.fog===!0&&K.refreshFogUniforms(Un,ue),K.refreshMaterialUniforms(Un,H,W,$,f.state.transmissionRenderTarget[S.id]),ur.upload(U,$t(Oe),Un,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ur.upload(U,$t(Oe),Un,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ct.setValue(U,"center",N.center),Ct.setValue(U,"modelViewMatrix",N.modelViewMatrix),Ct.setValue(U,"normalMatrix",N.normalMatrix),Ct.setValue(U,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let mn=H.uniformsGroups;for(let ai=0,li=mn.length;ai<li;ai++){let Pc=mn[ai];L.update(Pc,bn),L.bind(Pc,bn)}}return bn}function Je(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function rt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,D,B){we.get(S.texture).__webglTexture=D,we.get(S.depthTexture).__webglTexture=B;let H=we.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){let B=we.get(S);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,B=0){I=S,E=D,A=B;let H=!0,N=null,ue=!1,ye=!1;if(S){let Ue=we.get(S);if(Ue.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(Ue.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Ue.__hasExternalTextures)T.rebindTextures(S,we.get(S.texture).__webglTexture,we.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ne=S.depthTexture;if(Ue.__boundDepthTexture!==Ne){if(Ne!==null&&we.has(Ne)&&(S.width!==Ne.image.width||S.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Ke=S.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(ye=!0);let tt=we.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(tt[D])?N=tt[D][B]:N=tt[D],ue=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?N=we.get(S).__webglMultisampledFramebuffer:Array.isArray(tt)?N=tt[B]:N=tt,P.copy(S.viewport),z.copy(S.scissor),F=S.scissorTest}else P.copy(xe).multiplyScalar(W).floor(),z.copy(Re).multiplyScalar(W).floor(),F=We;if(ve.bindFramebuffer(U.FRAMEBUFFER,N)&&H&&ve.drawBuffers(S,N),ve.viewport(P),ve.scissor(z),ve.setScissorTest(F),ue){let Ue=we.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ue.__webglTexture,B)}else if(ye){let Ue=we.get(S.texture),Ke=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.__webglTexture,B||0,Ke)}w=-1},this.readRenderTargetPixels=function(S,D,B,H,N,ue,ye){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=we.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(De=De[ye]),De){ve.bindFramebuffer(U.FRAMEBUFFER,De);try{let Ue=S.texture,Ke=Ue.format,tt=Ue.type;if(!Ee.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-H&&B>=0&&B<=S.height-N&&U.readPixels(D,B,H,N,ze.convert(Ke),ze.convert(tt),ue)}finally{let Ue=I!==null?we.get(I).__webglFramebuffer:null;ve.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(S,D,B,H,N,ue,ye){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=we.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(De=De[ye]),De){let Ue=S.texture,Ke=Ue.format,tt=Ue.type;if(!Ee.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-H&&B>=0&&B<=S.height-N){ve.bindFramebuffer(U.FRAMEBUFFER,De);let Ne=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ne),U.bufferData(U.PIXEL_PACK_BUFFER,ue.byteLength,U.STREAM_READ),U.readPixels(D,B,H,N,ze.convert(Ke),ze.convert(tt),0);let mt=I!==null?we.get(I).__webglFramebuffer:null;ve.bindFramebuffer(U.FRAMEBUFFER,mt);let Et=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ff(U,Et,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ne),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ue),U.deleteBuffer(Ne),U.deleteSync(Et),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,B=0){S.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);let H=Math.pow(2,-B),N=Math.floor(S.image.width*H),ue=Math.floor(S.image.height*H),ye=D!==null?D.x:0,De=D!==null?D.y:0;T.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,ye,De,N,ue),ve.unbindTexture()},this.copyTextureToTexture=function(S,D,B=null,H=null,N=0){S.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let ue,ye,De,Ue,Ke,tt,Ne,mt,Et,Rt=S.isCompressedTexture?S.mipmaps[N]:S.image;B!==null?(ue=B.max.x-B.min.x,ye=B.max.y-B.min.y,De=B.isBox3?B.max.z-B.min.z:1,Ue=B.min.x,Ke=B.min.y,tt=B.isBox3?B.min.z:0):(ue=Rt.width,ye=Rt.height,De=Rt.depth||1,Ue=0,Ke=0,tt=0),H!==null?(Ne=H.x,mt=H.y,Et=H.z):(Ne=0,mt=0,Et=0);let rn=ze.convert(D.format),vt=ze.convert(D.type),Oe;D.isData3DTexture?(T.setTexture3D(D,0),Oe=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),Oe=U.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),Oe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let Xn=U.getParameter(U.UNPACK_ROW_LENGTH),yt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),bn=U.getParameter(U.UNPACK_SKIP_PIXELS),Vi=U.getParameter(U.UNPACK_SKIP_ROWS),ln=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Rt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),U.pixelStorei(U.UNPACK_SKIP_IMAGES,tt);let Ur=S.isDataArrayTexture||S.isData3DTexture,Ct=D.isDataArrayTexture||D.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Un=we.get(S),Nr=we.get(D),mn=we.get(Un.__renderTarget),ai=we.get(Nr.__renderTarget);ve.bindFramebuffer(U.READ_FRAMEBUFFER,mn.__webglFramebuffer),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let li=0;li<De;li++)Ur&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.get(S).__webglTexture,N,tt+li),S.isDepthTexture?(Ct&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.get(D).__webglTexture,N,Et+li),U.blitFramebuffer(Ue,Ke,ue,ye,Ne,mt,ue,ye,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ct?U.copyTexSubImage3D(Oe,N,Ne,mt,Et+li,Ue,Ke,ue,ye):U.copyTexSubImage2D(Oe,N,Ne,mt,Et+li,Ue,Ke,ue,ye);ve.bindFramebuffer(U.READ_FRAMEBUFFER,null),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ct?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Oe,N,Ne,mt,Et,ue,ye,De,rn,vt,Rt.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Oe,N,Ne,mt,Et,ue,ye,De,rn,Rt.data):U.texSubImage3D(Oe,N,Ne,mt,Et,ue,ye,De,rn,vt,Rt):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,Ne,mt,ue,ye,rn,vt,Rt.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,Ne,mt,Rt.width,Rt.height,rn,Rt.data):U.texSubImage2D(U.TEXTURE_2D,N,Ne,mt,ue,ye,rn,vt,Rt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Xn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,bn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Vi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ln),N===0&&D.generateMipmaps&&U.generateMipmap(Oe),ve.unbindTexture()},this.copyTextureToTexture3D=function(S,D,B=null,H=null,N=0){return S.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,S=arguments[2],D=arguments[3],N=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,B,H,N)},this.initRenderTarget=function(S){we.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),ve.unbindTexture()},this.resetState=function(){E=0,A=0,I=null,ve.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var Pn=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Sl=class extends on{constructor(e=null,t=1,n=1,r,s,o,a,l,c=hn,u=hn,h,p){super(null,o,a,l,c,u,r,s,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=class extends pt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ir=new bt,Iu=new bt,Bs=[],Lu=new vn,lx=new bt,kr=new ht,Hr=new ii,_r=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,lx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),Lu.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(Lu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),Hr.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ir),Iu.multiplyMatrices(n,ir),kr.matrixWorld=Iu,kr.raycast(e,Bs);for(let o=0,a=Bs.length;o<a;o++){let l=Bs[o];l.instanceId=s,l.object=this,t.push(l)}Bs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sl(new Float32Array(r*this.count),r,this.count,rc,On));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ns=class extends zn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},co=new R,uo=new R,Du=new bt,Vr=new xr,zs=new ii,ga=new R,Uu=new R,wl=class extends Ot{constructor(e=new At,t=new ns){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)co.fromBufferAttribute(t,r-1),uo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=co.distanceTo(uo);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(r),zs.radius+=s,e.ray.intersectsSphere(zs)===!1)return;Du.copy(r).invert(),Vr.copy(e.ray).applyMatrix4(Du);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let f=u.getX(x),y=u.getX(x+1),b=ks(this,e,Vr,l,f,y);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),f=ks(this,e,Vr,l,x,m);f&&t.push(f)}}else{let d=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let f=ks(this,e,Vr,l,x,x+1);f&&t.push(f)}if(this.isLineLoop){let x=ks(this,e,Vr,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ks(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(co.fromBufferAttribute(o,r),uo.fromBufferAttribute(o,s),t.distanceSqToSegment(co,uo,ga,Uu)>n)return;ga.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ga);if(!(l<e.near||l>e.far))return{distance:l,point:Uu.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Nu=new R,Fu=new R,is=class extends wl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Nu.fromBufferAttribute(t,r),Fu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Nu.distanceTo(Fu);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var rs=class extends zn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ou=new bt,El=new xr,Hs=new ii,Vs=new R,ri=class extends Ot{constructor(e=new At,t=new rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),Hs.radius+=s,e.ray.intersectsSphere(Hs)===!1)return;Ou.copy(r).invert(),El.copy(e.ray).applyMatrix4(Ou);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let p=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=p,x=d;g<x;g++){let m=c.getX(g);Vs.fromBufferAttribute(h,m),Bu(Vs,m,l,r,e,t,this)}}else{let p=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=p,x=d;g<x;g++)Vs.fromBufferAttribute(h,g),Bu(Vs,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Bu(i,e,t,n,r,s,o){let a=El.distanceSqToPoint(i);if(a<t){let l=new R;El.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Mr=class extends on{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],p=n[r+1]-u,d=(o-u)/p;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new oe:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new R,r=[],s=[],o=[],a=new R,l=new bt;for(let d=0;d<=e;d++){let g=d/e;r[d]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ht(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Ht(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ss=class extends yn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*h+this.aX,c=p*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Tl=class extends ss{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function fc(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let p=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;p*=u,d*=u,r(o,a,p,d)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Gs=new R,xa=new fc,va=new fc,ya=new fc,Al=class extends yn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Gs.subVectors(r[0],r[1]).add(r[0]),c=Gs);let h=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Gs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Gs),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),xa.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,g,x,m),va.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,g,x,m),ya.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(xa.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),va.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),ya.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return n.set(xa.calc(l),va.calc(l),ya.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zu(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function cx(i,e){let t=1-i;return t*t*e}function ux(i,e){return 2*(1-i)*i*e}function hx(i,e){return i*i*e}function Zr(i,e,t,n){return cx(i,e)+ux(i,t)+hx(i,n)}function dx(i,e){let t=1-i;return t*t*t*e}function fx(i,e){let t=1-i;return 3*t*t*i*e}function px(i,e){return 3*(1-i)*i*i*e}function mx(i,e){return i*i*i*e}function Jr(i,e,t,n,r){return dx(i,e)+fx(i,t)+px(i,n)+mx(i,r)}var ho=class extends yn{constructor(e=new oe,t=new oe,n=new oe,r=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new oe){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Jr(e,r.x,s.x,o.x,a.x),Jr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rl=class extends yn{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Jr(e,r.x,s.x,o.x,a.x),Jr(e,r.y,s.y,o.y,a.y),Jr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fo=class extends yn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cl=class extends yn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends yn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Zr(e,r.x,s.x,o.x),Zr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pl=class extends yn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Zr(e,r.x,s.x,o.x),Zr(e,r.y,s.y,o.y),Zr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(zu(a,l.x,c.x,u.x,h.x),zu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new oe().fromArray(r))}return this}},ku=Object.freeze({__proto__:null,ArcCurve:Tl,CatmullRomCurve3:Al,CubicBezierCurve:ho,CubicBezierCurve3:Rl,EllipseCurve:ss,LineCurve:fo,LineCurve3:Cl,QuadraticBezierCurve:po,QuadraticBezierCurve3:Pl,SplineCurve:mo}),Il=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ku[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new ku[r.type]().fromJSON(r))}return this}},Ll=class extends Il{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new fo(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new po(this.currentPoint.clone(),new oe(e,t),new oe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new ho(this.currentPoint.clone(),new oe(e,t),new oe(n,r),new oe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new mo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new ss(e,t,n,r,s,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Dl=class i extends At{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Ht(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,h=new R,p=new oe,d=new R,g=new R,x=new R,m=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,d.x=f*1,d.y=-m,d.z=f*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=t;y++){let b=n+y*u*r,v=Math.sin(b),C=Math.cos(b);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*v,h.y=e[E].y,h.z=e[E].x*C,o.push(h.x,h.y,h.z),p.x=y/t,p.y=E/(e.length-1),a.push(p.x,p.y);let A=l[3*E+0]*v,I=l[3*E+1],w=l[3*E+0]*C;c.push(A,I,w)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let v=b+y*e.length,C=v,E=v+e.length,A=v+e.length+1,I=v+1;s.push(C,E,I),s.push(A,I,E)}this.setIndex(s),this.setAttribute("position",new xt(o,3)),this.setAttribute("uv",new xt(a,2)),this.setAttribute("normal",new xt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},go=class i extends Dl{constructor(e=1,t=1,n=4,r=8){let s=new Ll;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},xo=class i extends At{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new R,u=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=t;h++,p+=3){let d=n+h/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[p]/e+1)/2,u.y=(o[p+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},br=class i extends At{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],p=[],d=[],g=0,x=[],m=n/2,f=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(p,3)),this.setAttribute("uv",new xt(d,2));function y(){let v=new R,C=new R,E=0,A=(t-e)/n;for(let I=0;I<=s;I++){let w=[],M=I/s,P=M*(t-e)+e;for(let z=0;z<=r;z++){let F=z/r,V=F*l+a,X=Math.sin(V),k=Math.cos(V);C.x=P*X,C.y=-M*n+m,C.z=P*k,h.push(C.x,C.y,C.z),v.set(X,A,k).normalize(),p.push(v.x,v.y,v.z),d.push(F,1-M),w.push(g++)}x.push(w)}for(let I=0;I<r;I++)for(let w=0;w<s;w++){let M=x[w][I],P=x[w+1][I],z=x[w+1][I+1],F=x[w][I+1];(e>0||w!==0)&&(u.push(M,P,F),E+=3),(t>0||w!==s-1)&&(u.push(P,z,F),E+=3)}c.addGroup(f,E,0),f+=E}function b(v){let C=g,E=new oe,A=new R,I=0,w=v===!0?e:t,M=v===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,m*M,0),p.push(0,M,0),d.push(.5,.5),g++;let P=g;for(let z=0;z<=r;z++){let V=z/r*l+a,X=Math.cos(V),k=Math.sin(V);A.x=w*k,A.y=m*M,A.z=w*X,h.push(A.x,A.y,A.z),p.push(0,M,0),E.x=X*.5+.5,E.y=k*.5*M+.5,d.push(E.x,E.y),g++}for(let z=0;z<r;z++){let F=C+z,V=P+z;v===!0?u.push(V,V+1,F):u.push(V+1,V,F),I+=3}c.addGroup(f,I,v===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ws=new R,Xs=new R,_a=new R,qs=new gi,os=class extends At{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(lr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),p={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:f}=qs;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),qs.getNormal(_a),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){let b=(y+1)%3,v=h[y],C=h[b],E=qs[u[y]],A=qs[u[b]],I=`${v}_${C}`,w=`${C}_${v}`;w in p&&p[w]?(_a.dot(p[w].normal)<=s&&(d.push(E.x,E.y,E.z),d.push(A.x,A.y,A.z)),p[w]=null):I in p||(p[I]={index0:c[y],index1:c[b],normal:_a.clone()})}}for(let g in p)if(p[g]){let{index0:x,index1:m}=p[g];Ws.fromBufferAttribute(a,x),Xs.fromBufferAttribute(a,m),d.push(Ws.x,Ws.y,Ws.z),d.push(Xs.x,Xs.y,Xs.z)}this.setAttribute("position",new xt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var _i=class i extends At{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new R,p=new R,d=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let y=[],b=f/n,v=0;f===0&&o===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let E=C/t;h.x=-e*Math.cos(r+E*s)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),p.copy(h).normalize(),x.push(p.x,p.y,p.z),m.push(E+v,1-b),y.push(c++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){let b=u[f][y+1],v=u[f][y],C=u[f+1][y],E=u[f+1][y+1];(f!==0||o>0)&&d.push(b,v,E),(f!==n-1||l<Math.PI)&&d.push(v,C,E)}this.setIndex(d),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fi=class i extends At{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new R,h=new R,p=new R;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){let x=g/r*s,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),c.push(g/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){let x=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,f=(r+1)*(d-1)+g,y=(r+1)*d+g;o.push(x,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Oi=class extends zn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var as=class extends zn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ys(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Sr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ul=class extends Sr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uc,endingEnd:Uc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nc:s=e,a=2*t-n;break;case Fc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nc:o=e,l=2*n-t;break;case Fc:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,f=-p*m+2*p*x-p*g,y=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*g+1,b=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let C=0;C!==a;++C)s[C]=f*o[u+C]+y*o[c+C]+b*o[l+C]+v*o[h+C];return s}},Nl=class extends Sr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let p=0;p!==a;++p)s[p]=o[c+p]*h+o[l+p]*u;return s}},Fl=class extends Sr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},In=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ys(t,this.TimeBufferType),this.values=Ys(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ys(e.times,Array),values:Ys(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ul(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case al:t=this.InterpolantFactoryMethodLinear;break;case Go:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return al;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&gx(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Go,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*n,p=h-n,d=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[p+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,p=o*n;for(let d=0;d!==n;++d)t[p+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=al;var Bi=class extends In{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=$s;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ol=class extends In{};Ol.prototype.ValueTypeName="color";var Bl=class extends In{};Bl.prototype.ValueTypeName="number";var zl=class extends Sr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)vi.slerpFlat(s,0,o,c-a,o,c,l);return s}},vo=class extends In{InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}};vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends In{constructor(e,t,n){super(e,t,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=$s;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends In{};kl.prototype.ValueTypeName="vector";var Hl=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},xx=new Hl,Vl=class{constructor(e){this.manager=e!==void 0?e:xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},yo=class extends ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ma=new bt,Hu=new R,Vu=new R,_o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hu),Vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vu),t.updateMatrixWorld(),Ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Gu=new bt,Gr=new R,ba=new R,Gl=class extends _o{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gr),ba.copy(n.position),ba.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ba),n.updateMatrixWorld(),r.makeTranslation(-Gr.x,-Gr.y,-Gr.z),Gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu)}},cs=class extends ls{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Gl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Wl=class extends _o{constructor(){super(new kn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},us=class extends ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Wl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Mo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Wu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Wu(){return performance.now()}var pc="\\[\\]\\.:\\/",vx=new RegExp("["+pc+"]","g"),mc="[^"+pc+"]",yx="[^"+pc.replace("\\.","")+"]",_x=/((?:WC+[\/:])*)/.source.replace("WC",mc),Mx=/(WCOD+)?/.source.replace("WCOD",yx),bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc),Sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc),wx=new RegExp("^"+_x+Mx+bx+Sx+"$"),Ex=["material","materials","bones","map"],Xl=class{constructor(e,t,n){let r=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vx,"")}static parseTrackName(e){let t=wx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Ex.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Xl;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dv=new Float32Array(1);var Xu=new bt,bo=class{constructor(e,t,n=0,r=1/0){this.ray=new xr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xu),this}intersectObject(e,t=!0,n=[]){return ql(e,this,n,t),n.sort(qu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ql(e[r],this,n,t);return n.sort(qu),n}};function qu(i,e){return i.distance-e.distance}function ql(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)ql(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var _n={bg:526607,amber:15250790,champagne:16043918,ember:13201727,ice:9419007,iceHi:14478335},Ao={half:5,wallH:3.4,wallT:.3},Ft={workstation:[.9,0,.7],tableTop:.76,monitorRel:[.35,-.38],island:[.9,0,-2.7],deskX:-4.5,deskStations:[-2.7,-.55,1.6]},Qe={grid:[0,.1],slab:[.03,.12],trim:[.1,.16],tiles:[.08,.22],rug:[.2,.27],wallA:[.15,.25],wallB:[.19,.29],corner:[.24,.3],glazing:[.27,.34],desks:[.24,.37],storage:[.28,.39],island:[.3,.4],workstation:[.33,.43],props:[.36,.5],unity:[.53,.67],screens:[.57,.63],approach:[.72,.9],hover:[.89,.93],select:[.93,.97],preview:[.935,.975]},si={fov:[[0,22],[.5,22],[.7,22],[.9,40],[1,42]],az:[[0,64],[.22,55],[.5,45],[.7,47],[.82,28],[.9,12],[1,8]],el:[[0,46],[.25,38],[.5,33],[.7,31],[.82,24],[.9,15],[1,13]],dist:[[0,1.22],[.25,1.1],[.5,1],[.7,.97],[.82,.33],[.9,.085],[1,.075]],tx:[[0,0],[.5,0],[.7,0],[.82,.8],[.9,1.15],[1,1.2]],ty:[[0,.4],[.3,1.1],[.5,1.3],[.7,1.3],[.9,1.3],[1,1.3]],tz:[[0,0],[.5,0],[.7,0],[.82,.4],[.9,.35],[1,.35]]};var Tx=i=>i<0?0:i>1?1:i,Vn=(i,e,t)=>i+(e-i)*t,Ge=(i,e,t)=>Tx((i-e)/(t-e)),Pt=i=>i*i*(3-2*i),Rr=i=>1-(1-i)**3,gc=i=>1-(1-i)**4,Ro=(i,e=1.5)=>1+(e+1)*(i-1)**3+e*(i-1)**2,Gn=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)};function Mi(i){let e=i.length,t=i.map(o=>o[0]),n=i.map(o=>o[1]),r=[];for(let o=0;o<e-1;o++)r[o]=(n[o+1]-n[o])/(t[o+1]-t[o]);let s=new Array(e);s[0]=r[0],s[e-1]=r[e-2];for(let o=1;o<e-1;o++)s[o]=r[o-1]*r[o]<=0?0:(r[o-1]+r[o])/2;for(let o=0;o<e-1;o++){if(r[o]===0){s[o]=s[o+1]=0;continue}let a=s[o]/r[o],l=s[o+1]/r[o],c=a*a+l*l;if(c>9){let u=3/Math.sqrt(c);s[o]=u*a*r[o],s[o+1]=u*l*r[o]}}return o=>{if(o<=t[0])return n[0];if(o>=t[e-1])return n[e-1];let a=0;for(;o>t[a+1];)a++;let l=t[a+1]-t[a],c=(o-t[a])/l,u=c*c,h=u*c;return(2*h-3*u+1)*n[a]+(h-2*u+c)*l*s[a]+(-2*h+3*u)*n[a+1]+(h-u)*l*s[a+1]}}function fh(i){let e=(n,r={})=>new as({color:n,...r}),t=(n,r=.6,s=.05,o={})=>new Oi({color:n,roughness:r,metalness:s,envMap:i,envMapIntensity:.55,...o});return{paint:e(12433582),wainscot:e(6650250),baseboard:e(2829878),slab:e(1052950),tile:e(16777215),brass:t(14263889,.32,.85),rug:e(3422534),wood:e(13082478),woodDark:e(7622970),laminate:e(15131612),steel:t(10134189,.42,.35),steelDark:t(3093308,.5,.4),plastic:t(1184536,.45,.05),plasticWhite:t(14869479,.4),fabric:e(2961986),fabricBlue:e(4022159),paper:e(15789799),cardboard:e(11636322),pot:e(11692619),tape:e(14857535),vertex:e(16777215,{vertexColors:!0}),lampBulb:new Oi({color:1709064,emissive:16763274,emissiveIntensity:2.2,roughness:.4}),glass:new Oi({color:11126510,roughness:.06,metalness:0,transparent:!0,opacity:.22,depthWrite:!1})}}function ph(i){let e=new Pn;e.add(new ht(new _i(60,32,16),new Vt({color:460813,side:Dt})));let t=(s,o,a,l,c)=>{let u=new ht(new Gt(s,o),new Vt({color:new Pe(a).multiplyScalar(l),side:sn}));u.position.set(...c),u.lookAt(0,0,0),e.add(u)};t(30,16,_n.champagne,4.5,[-24,26,18]),t(10,26,_n.ice,2.6,[30,10,-14]),t(14,14,16777215,1.8,[0,40,2]);let n=new yr(i),r=n.fromScene(e,.04);return n.dispose(),e.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),r.texture}function Kt(i,e=512,t=512,{anisotropy:n=4,redraw:r=!1}={}){let s=document.createElement("canvas");s.width=e,s.height=t;let o=s.getContext("2d");i(o,e,t);let a=new Mr(s);return a.colorSpace=Tt,a.anisotropy=n,r&&document.fonts&&document.fonts.ready.then(()=>{o.clearRect(0,0,e,t),i(o,e,t),a.needsUpdate=!0}),a}function oi(i,e=.55,t=.1){return t<.15?new as({map:i}):new Oi({map:i,roughness:e,metalness:t})}function dn(i,e=1){return new Vt({map:i,color:new Pe().setScalar(e)})}function mh(i,e){let t=new gt,n=new yo(11123932,3420202,1.5);t.add(n);let r=new us(15988479,1.5);r.position.set(-7,15,10),r.castShadow=!0;let s=e.shadowSize;r.shadow.mapSize.set(s,s);let o=r.shadow.camera;o.left=-9,o.right=9,o.top=9,o.bottom=-9,o.near=2,o.far=42,r.shadow.bias=-4e-4,r.shadow.normalBias=.035,t.add(r,r.target);let a=new us(9416938,.35);a.position.set(11,7,-5),t.add(a);let l=new cs(16763274,0,4,2),c=new cs(16763274,0,3.5,2);t.add(l,c),i.add(t);let u=new Pe(15988479),h=new Pe(16765856),p="intensity"in r.shadow;return{group:t,setPractical(d,g){l.position.copy(d),c.position.copy(g)},update({unity:d=0}={}){n.intensity=Vn(1.5,.62,d),r.color.copy(u).lerp(h,d),r.intensity=Vn(2.3,3.4,d),p&&(r.shadow.intensity=Vn(.5,1,d)),a.intensity=Vn(.35,.7,d),l.intensity=6*d,c.intensity=5*d}}}var gh=si.fov[0][1],ki={fov:Mi(si.fov),az:Mi(si.az),el:Mi(si.el),logDist:Mi(si.dist.map(([i,e])=>[i,Math.log(e)])),tx:Mi(si.tx),ty:Mi(si.ty),tz:Mi(si.tz)},xc=Math.PI/180;function xh(){let i=new Zt(gh,1,.5,160),e=40,t=!1;function n(a,l){let c=a/Math.max(1,l);i.aspect=c,t=c<.9;let u=Math.tan(gh*xc/2),h=t?8.8:9.25,p=t?7.5:9.2;e=Math.max(h/u,p/(u*c)),i.setViewOffset(a,l,0,-Math.round(l*(t?.01:.075)),a,l),i.updateProjectionMatrix()}let r=new R,s=-1;function o(a){let l=ki.az(a)*xc,c=ki.el(a)*xc,u=Math.exp(ki.logDist(a))*e;r.set(ki.tx(a),ki.ty(a),ki.tz(a)),i.position.set(r.x+u*Math.cos(c)*Math.sin(l),r.y+u*Math.sin(c),r.z+u*Math.cos(c)*Math.cos(l));let h=Pt(Ge(a,...Qe.approach))*(1-Pt(Ge(a,Qe.approach[1]-.03,Qe.approach[1]+.02)));i.position.y+=(t?0:.015)*h*Math.sin(a*260),i.lookAt(r);let p=ki.fov(a)*(t?1+.25*Ge(a,...Qe.approach):1);Math.abs(p-s)>.01&&(s=p,i.fov=p,i.updateProjectionMatrix()),i.updateMatrixWorld()}return{camera:i,resize:n,update:o}}var vh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ax=new kn(-1,1,1,-1,0,1),vc=class extends At{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}},Rx=new vc,Cr=class{constructor(e){this._mesh=new ht(Rx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ax)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Pr=class extends Ln{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hc.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Cr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ds=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Co=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Po=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pr(vh),this.copyPass.material.blending=Bn,this.clock=new Mo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ds!==void 0&&(o instanceof ds?n=!0:o instanceof Co&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Io=class extends Ln{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}};var Cx=`
  uniform sampler2D tDiffuse;
  uniform vec2 uTexel;
  uniform float uThreshold;
  uniform float uKnee;
  varying vec2 vUv;
  vec3 prefilter(vec3 c) {
    float br = max(c.r, max(c.g, c.b));
    float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
    soft = soft * soft / (4.0 * uKnee + 1e-4);
    float w = max(soft, br - uThreshold) / max(br, 1e-4);
    return c * w;
  }
  void main() {
    // Four bilinear taps average a 4x4 block: a clean quarter-size copy.
    vec3 c = texture2D(tDiffuse, vUv + uTexel * vec2(-1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2(-1.0,  1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
    gl_FragColor = vec4(prefilter(min(c * 0.25, vec3(24.0))), 1.0);
  }`,Px=`
  uniform sampler2D tDiffuse;
  uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv + uTexel * vec2(-1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2(-1.0,  1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
    gl_FragColor = vec4(c * 0.25, 1.0);
  }`,Ix=`
  uniform sampler2D tDiffuse;
  uniform vec2 uDir;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv).rgb * 0.2270270270;
    c += texture2D(tDiffuse, vUv + uDir * 1.3846153846).rgb * 0.3162162162;
    c += texture2D(tDiffuse, vUv - uDir * 1.3846153846).rgb * 0.3162162162;
    c += texture2D(tDiffuse, vUv + uDir * 3.2307692308).rgb * 0.0702702703;
    c += texture2D(tDiffuse, vUv - uDir * 3.2307692308).rgb * 0.0702702703;
    gl_FragColor = vec4(c, 1.0);
  }`,Lx=`
  #include <tonemapping_pars_fragment>
  uniform sampler2D tDiffuse;
  uniform sampler2D tNear;
  uniform sampler2D tFar;
  uniform float uStrength;
  uniform float uGrade;
  varying vec2 vUv;
  vec3 outputToneMap(vec3 c) {
    #if defined(LINEAR_TONE_MAPPING)
      return LinearToneMapping(c);
    #elif defined(REINHARD_TONE_MAPPING)
      return ReinhardToneMapping(c);
    #elif defined(CINEON_TONE_MAPPING)
      return CineonToneMapping(c);
    #elif defined(ACES_FILMIC_TONE_MAPPING)
      return ACESFilmicToneMapping(c);
    #elif defined(AGX_TONE_MAPPING)
      return AgXToneMapping(c);
    #elif defined(NEUTRAL_TONE_MAPPING)
      return NeutralToneMapping(c);
    #else
      return c;
    #endif
  }
  void main() {
    vec4 base = texture2D(tDiffuse, vUv);
    vec3 glow = texture2D(tNear, vUv).rgb * 0.75 + texture2D(tFar, vUv).rgb * 1.1;
    vec3 c = base.rgb + glow * uStrength;
    // The grade: a modelling viewport is a little flat and cool (uGrade 0); the
    // lit engine scene is richer and warmer (uGrade 1).
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c = mix(vec3(l), c, mix(0.74, 1.1, uGrade));
    c *= mix(vec3(0.97, 1.0, 1.03), vec3(1.04, 1.0, 0.95), uGrade);
    c = max((c - 0.18) * mix(0.94, 1.05, uGrade) + 0.18, 0.0);
    vec4 graded = vec4(outputToneMap(c), base.a);
    #ifdef SRGB_TRANSFER
      graded = sRGBTransferOETF(graded);
    #endif
    gl_FragColor = graded;
  }`,Dx={uniforms:{tDiffuse:{value:null},resolution:{value:new oe(1/1024,1/512)}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    varying vec2 vUv;
    void main() {
      vec3 luma = vec3(0.299, 0.587, 0.114);
      vec3 rgbNW = texture2D(tDiffuse, vUv + vec2(-1.0, -1.0) * resolution).rgb;
      vec3 rgbNE = texture2D(tDiffuse, vUv + vec2( 1.0, -1.0) * resolution).rgb;
      vec3 rgbSW = texture2D(tDiffuse, vUv + vec2(-1.0,  1.0) * resolution).rgb;
      vec3 rgbSE = texture2D(tDiffuse, vUv + vec2( 1.0,  1.0) * resolution).rgb;
      vec4 texM = texture2D(tDiffuse, vUv);
      vec3 rgbM = texM.rgb;
      float lNW = dot(rgbNW, luma);
      float lNE = dot(rgbNE, luma);
      float lSW = dot(rgbSW, luma);
      float lSE = dot(rgbSE, luma);
      float lM = dot(rgbM, luma);
      float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
      float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));

      vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), (lNW + lSW) - (lNE + lSE));
      float reduce = max((lNW + lNE + lSW + lSE) * 0.25 * (1.0 / 8.0), 1.0 / 128.0);
      float rcp = 1.0 / (min(abs(dir.x), abs(dir.y)) + reduce);
      dir = clamp(dir * rcp, vec2(-8.0), vec2(8.0)) * resolution;

      vec3 a = 0.5 * (texture2D(tDiffuse, vUv + dir * (1.0 / 3.0 - 0.5)).rgb
                    + texture2D(tDiffuse, vUv + dir * (2.0 / 3.0 - 0.5)).rgb);
      vec3 b = a * 0.5 + 0.25 * (texture2D(tDiffuse, vUv + dir * -0.5).rgb
                               + texture2D(tDiffuse, vUv + dir * 0.5).rgb);
      float lB = dot(b, luma);
      gl_FragColor = vec4((lB < lMin || lB > lMax) ? a : b, texM.a);
    }`},Ux=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Lo=(i,e)=>new Lt({vertexShader:Ux,fragmentShader:i,uniforms:e,depthTest:!1,depthWrite:!1}),yc=class extends Ln{constructor({strength:e=.32,threshold:t=1,knee:n=.5}={}){super();let r=()=>new Jt(4,4,{type:Hn,depthBuffer:!1});this.near=[r(),r()],this.far=[r(),r()],this.bright=Lo(Cx,{tDiffuse:{value:null},uTexel:{value:new oe},uThreshold:{value:t},uKnee:{value:n}}),this.down=Lo(Px,{tDiffuse:{value:null},uTexel:{value:new oe}}),this.blur=Lo(Ix,{tDiffuse:{value:null},uDir:{value:new oe}}),this.composite=Lo(Lx,{tDiffuse:{value:null},tNear:{value:null},tFar:{value:null},uStrength:{value:e},uGrade:{value:0}}),this.composite.toneMapped=!1,this.quad=new Cr(this.bright)}setSize(e,t){let n=Math.max(2,Math.round(e/4)),r=Math.max(2,Math.round(t/4)),s=Math.max(2,Math.round(e/16)),o=Math.max(2,Math.round(t/16));this.near.forEach(a=>a.setSize(n,r)),this.far.forEach(a=>a.setSize(s,o)),this.srcSize=[e,t]}_run(e,t,n){this.quad.material=t,e.setRenderTarget(n),this.quad.render(e)}_blur(e,t,n,r){let[s,o]=t;this.blur.uniforms.uDir.value.set(1/n,0),this.blur.uniforms.tDiffuse.value=s.texture,this._run(e,this.blur,o),this.blur.uniforms.uDir.value.set(0,1/r),this.blur.uniforms.tDiffuse.value=o.texture,this._run(e,this.blur,s)}render(e,t,n){let[r,s]=this.srcSize,[o,a]=[this.near[0].width,this.near[0].height],[l,c]=[this.far[0].width,this.far[0].height];this.bright.uniforms.tDiffuse.value=n.texture,this.bright.uniforms.uTexel.value.set(1/r,1/s),this._run(e,this.bright,this.near[0]),this._blur(e,this.near,o,a),this.down.uniforms.tDiffuse.value=this.near[0].texture,this.down.uniforms.uTexel.value.set(1/o,1/a),this._run(e,this.down,this.far[0]),this._blur(e,this.far,l,c),this._blur(e,this.far,l,c);let u=this.composite.uniforms;u.tDiffuse.value=n.texture,u.tNear.value=this.near[0].texture,u.tFar.value=this.far[0].texture,this._run(e,this.composite,this.renderToScreen?null:t)}dispose(){[...this.near,...this.far].forEach(e=>e.dispose()),[this.bright,this.down,this.blur,this.composite].forEach(e=>e.dispose()),this.quad.dispose()}},yh={[Kl]:"LINEAR_TONE_MAPPING",[Ql]:"REINHARD_TONE_MAPPING",[jl]:"CINEON_TONE_MAPPING",[hs]:"ACES_FILMIC_TONE_MAPPING",[$l]:"AGX_TONE_MAPPING",[ec]:"NEUTRAL_TONE_MAPPING"};function _h(i,e){let t=`${e.toneMapping}|${e.outputColorSpace}`;i.userData.outputKey!==t&&(i.userData.outputKey=t,i.defines={},ft.getTransfer(e.outputColorSpace)===_t&&(i.defines.SRGB_TRANSFER=""),yh[e.toneMapping]&&(i.defines[yh[e.toneMapping]]=""),i.needsUpdate=!0)}function Mh(i,e,t){let n=new Jt(4,4,{type:Hn,samples:0}),r=new Po(i,n);r.addPass(new Io(e,t));let s=new yc;r.addPass(s),_h(s.composite,i);let o=new Pr(Dx);return r.addPass(o),{render:()=>r.render(),sceneTarget:n,programs(){return _h(s.composite,i),[[s.bright,!1],[s.down,!1],[s.blur,!1],[s.composite,!o.enabled],[o.material,!0]]},setSize(a,l,c){r.setPixelRatio(c),r.setSize(a,l),o.enabled=c<1.75,o.material.uniforms.resolution.value.set(1/(a*c),1/(l*c))},setBloom:a=>s.enabled=a,setGrade:a=>s.composite.uniforms.uGrade.value=a,dispose:()=>r.dispose()}}function bh(){let i=new Lt({transparent:!0,depthWrite:!1,blending:Ui,uniforms:{uOpacity:{value:0},uReveal:{value:0},uColor:{value:new Pe(_n.amber)}},vertexShader:`
      varying vec2 vXZ;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vXZ = w.xz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      varying vec2 vXZ;
      uniform float uOpacity;
      uniform float uReveal;
      uniform vec3 uColor;

      // 1 on a grid line of the given spacing, antialiased by screen-space
      // derivative so the lines stay a crisp pixel wide at any distance.
      float lines(vec2 p, float spacing) {
        vec2 q = p / spacing;
        vec2 g = abs(fract(q - 0.5) - 0.5) / max(fwidth(q), vec2(1e-4));
        return 1.0 - min(min(g.x, g.y), 1.0);
      }

      void main() {
        float d = length(vXZ);
        float minor = lines(vXZ, 1.0);
        float major = lines(vXZ, 5.0);
        float axX = 1.0 - min(abs(vXZ.y) / max(fwidth(vXZ.y), 1e-4), 1.0);
        float axZ = 1.0 - min(abs(vXZ.x) / max(fwidth(vXZ.x), 1e-4), 1.0);

        float fade = 1.0 - smoothstep(4.0, 34.0, d);
        float reveal = 1.0 - smoothstep(uReveal - 5.0, uReveal, d);

        vec3 col = uColor;
        col = mix(col, vec3(0.86, 0.34, 0.24), axX);
        col = mix(col, vec3(0.42, 0.62, 1.0), axZ);
        float a = max(max(minor * 0.09, major * 0.24), max(axX, axZ) * 0.55);
        gl_FragColor = vec4(col, a * fade * reveal * uOpacity);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new ht(new Gt(140,140),i);return e.rotation.x=-Math.PI/2,e.position.y=-.62,e.renderOrder=-1,e.frustumCulled=!1,{group:e,update(t){i.uniforms.uReveal.value=Vn(0,60,Pt(Ge(t,...Qe.grid)));let n=Vn(1,.22,Pt(Ge(t,.14,.3)));i.uniforms.uOpacity.value=n*(1-Pt(Ge(t,...Qe.unity)))}}}var fs=new R;function Mn(i,e,t,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;fs.copy(e),fs[n]=0,fs.normalize();let c=.5*o/(o+a),u=1-fs.angleTo(i)/l;return Math.sign(fs[t])===1?u*c:a/(o+a)+c+c*(1-u)}var bi=class extends Cn{constructor(e=1,t=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),r===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new R,l=new R,c=new R(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,d=u.length/6,g=new R,x=.5/r;for(let m=0,f=0;m<u.length;m+=3,f+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*s,u[m+1]=c.y*Math.sign(a.y)+l.y*s,u[m+2]=c.z*Math.sign(a.z)+l.z*s,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),p[f+0]=Mn(g,l,"z","y",s,n),p[f+1]=1-Mn(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),p[f+0]=1-Mn(g,l,"z","y",s,n),p[f+1]=1-Mn(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),p[f+0]=1-Mn(g,l,"x","z",s,e),p[f+1]=Mn(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),p[f+0]=1-Mn(g,l,"x","z",s,e),p[f+1]=1-Mn(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),p[f+0]=1-Mn(g,l,"x","y",s,e),p[f+1]=1-Mn(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),p[f+0]=Mn(g,l,"x","y",s,e),p[f+1]=1-Mn(g,l,"y","x",s,t);break}}};function wh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new At,c=0;for(let u=0;u<i.length;++u){let h=i[u],p=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let p=0;p<i.length;++p){let d=i[p].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[p].attributes.position.count}l.setIndex(h)}for(let u in s){let h=Sh(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<h;++p){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][p]);let g=Sh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Sh(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new pt(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let p=0,d=u.count;p<d;p++)for(let g=0;g<t;g++){let x=u.getComponent(p,g);a.setComponent(p+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}var Eh=()=>new ns({color:_n.amber,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1});function it({size:i,at:e=[0,0,0],material:t,radius:n=.04,wire:r=!0,keepWire:s=0,fx:o="drop",drop:a=3,dir:l=new R(0,-3,0),geometry:c=null,shadow:u=!0}){let[h,p,d]=i,g=c;if(!g){let C=Math.max(.004,Math.min(n,Math.min(h,p,d)/2-.002));g=new bi(h,p,d,C>.03?3:2,C),g.translate(0,p/2,0)}let x=t.clone();x.alphaHash=!0,x.transparent=!1,x.opacity=0;let m=new ht(g,x);m.receiveShadow=!0,m.userData.shadowCaster=u;let f=new gt;f.add(m),f.position.set(e[0],e[1],e[2]),f.visible=!1;let y=null;if(r==="edges")y=new is(new os(g,25),Eh()),f.add(y);else if(r){let C=new Cn(h,p,d).translate(0,p/2,0);y=new is(new os(C),Eh()),C.dispose(),f.add(y)}let b=f.position.clone();function v(C){let E=C>5e-4;if(f.visible=E,!E)return;let A=Ge(C,.06,.8);switch(o){case"drop":{f.position.y=b.y+a*(1-gc(A));let I=Math.sin(Math.PI*Ge(C,.62,.9));f.scale.y=1-.035*I;break}case"rise":f.scale.y=Math.max(.001,Rr(Ge(C,.04,.85)));break;case"slide":f.position.copy(b).addScaledVector(l,1-gc(A));break;case"pop":f.scale.setScalar(Math.max(.001,Ro(Ge(C,.04,.8),1.2)));break}if(x.opacity=Pt(Ge(C,.34,.8)),m.castShadow=u&&C>.6,y){let I=Pt(Ge(C,.02,.2)),w=Pt(Ge(C,.68,1));y.material.opacity=I*(1-(1-s)*w)*.9}}return{root:f,mesh:m,mat:x,set:v,rest:b}}function Ve(i,e,t={}){return it({size:[1,1,1],geometry:i,material:e,wire:!1,fx:"drop",drop:2.4,shadow:!1,...t})}function Qt(i){let e=wh(i.map(t=>t.index?t.toNonIndexed():t));return i.forEach(t=>t.dispose()),e}function an(i,e,t,n=.55){let r=t>1?e/(t-1)*n:0;return Ge(i,r,r+1-n)}var Th={blender:{color:"#E87D0D",path:"M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626"},unity:{color:"#FFFFFF",path:"m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z"}};var Nx='"Inter", "Segoe UI", system-ui, sans-serif';function Ah(i,e,t,n,r,s=1){let o=Th[e];i.save(),i.translate(t,n),i.scale(r/24,r/24),i.globalAlpha=s,i.fillStyle=o.color,i.fill(new Path2D(o.path)),i.restore()}var je=(i,e,t,n,r,s,o=0)=>{i.fillStyle=s,o?(i.beginPath(),i.roundRect(e,t,n,r,o),i.fill()):i.fillRect(e,t,n,r)},jt=(i,e,t,n,r,s,o=500,a="left")=>{i.font=`${o} ${r}px ${Nx}`,i.fillStyle=s,i.textAlign=a,i.textBaseline="middle",i.fillText(e,t,n)};function Rh(i,e,t,n,{fill:r,line:s,outline:o,lit:a}){let l=(u,h,p)=>[e+(u-p)*n*.866,t+(u+p)*n*.5-h*n],c=(u,h,p,d=1.5)=>{i.beginPath(),u.forEach(([g,x],m)=>m?i.lineTo(g,x):i.moveTo(g,x)),i.closePath(),h&&(i.fillStyle=h,i.fill()),p&&(i.strokeStyle=p,i.lineWidth=d,i.stroke())};c([l(-1,0,-1),l(1,0,-1),l(1,0,1),l(-1,0,1)],r.floor,s),c([l(-1,0,-1),l(1,0,-1),l(1,1,-1),l(-1,1,-1)],r.wallB,s),c([l(-1,0,-1),l(-1,0,1),l(-1,1,1),l(-1,1,-1)],r.wallA,s),c([l(-.95,0,-.6),l(-.8,0,-.6),l(-.8,.3,-.6),l(-.95,.3,-.6)],null,null),c([l(-.95,.28,-.6),l(-.8,.28,-.6),l(-.8,.28,.6),l(-.95,.28,.6)],r.desk,s),c([l(-.3,.28,.1),l(.4,.28,.1),l(.4,.28,.6),l(-.3,.28,.6)],r.desk,o||s,o?2.6:1.5),a&&(i.fillStyle=a,i.beginPath(),i.arc(...l(0,.5,.4),n*.05,0,7),i.fill())}function Ir(){return Kt((i,e,t)=>{je(i,0,0,e,t,"#232323"),je(i,0,0,e,40,"#1d1d1d"),Ah(i,"blender",12,7,26),["File","Edit","Render","Window","Help"].forEach((l,c)=>jt(i,l,56+c*62,20,15,"#c9c9c9")),["Layout","Modeling","Sculpting","Shading"].forEach((l,c)=>{je(i,e-380+c*92,8,84,26,c===1?"#3f3f3f":"#2b2b2b",6),jt(i,l,e-338+c*92,21,13,c===1?"#f0f0f0":"#a8a8a8",500,"center")});let n=50,r=46,s=e-50-270,o=t-46-90,a=i.createLinearGradient(0,r,0,r+o);a.addColorStop(0,"#404040"),a.addColorStop(1,"#565656"),i.fillStyle=a,i.fillRect(n,r,s,o),i.save(),i.beginPath(),i.rect(n,r,s,o),i.clip(),i.strokeStyle="rgba(255,255,255,0.10)",i.lineWidth=1;for(let l=-14;l<=14;l++)i.beginPath(),i.moveTo(n+s/2+l*60,r+o*.52),i.lineTo(n+s/2+l*200,r+o),i.stroke();for(let l=0;l<9;l++){let c=r+o*.52+l*l*o*.5/60;i.beginPath(),i.moveTo(n,c),i.lineTo(n+s,c),i.stroke()}i.strokeStyle="rgba(203,68,68,0.85)",i.lineWidth=2,i.beginPath(),i.moveTo(n,r+o*.78),i.lineTo(n+s,r+o*.7),i.stroke(),i.strokeStyle="rgba(112,171,58,0.85)",i.beginPath(),i.moveTo(n+s*.52,r+o*.5),i.lineTo(n+s*.62,r+o),i.stroke(),Rh(i,n+s*.5,r+o*.5,150,{fill:{floor:"#6a6a6a",wallA:"#7a7a7a",wallB:"#8b8b8b",desk:"#a0a0a0"},line:"rgba(30,30,30,0.9)",outline:"#f5a623"}),i.restore(),jt(i,"User Perspective",n+12,r+16,12,"rgba(255,255,255,0.7)"),jt(i,"(1) Lab",n+12,r+32,11,"rgba(255,255,255,0.5)");for(let l=0;l<9;l++)je(i,10,54+l*42,30,30,l===1?"#4772b3":"#333",5);je(i,e-264,46,264,210,"#282828"),jt(i,"Scene Collection",e-250,62,13,"#dcdcdc",600),["Lab","Walls","Desks","Chairs","Workstation","Monitor","Headset"].forEach((l,c)=>{je(i,e-250+(c?14:0),82+c*22,6,6,c===5?"#f5a623":"#7a7a7a",3),jt(i,l,e-236+(c?14:0),86+c*22,12,c===5?"#f5a623":"#bcbcbc")}),je(i,e-264,262,264,t-262-90,"#2b2b2b"),["Location","Rotation","Scale"].forEach((l,c)=>{jt(i,l,e-250,286+c*60,12,"#c4c4c4",600);for(let u=0;u<3;u++)je(i,e-250+u*78,298+c*60,72,22,"#3d3d3d",4)}),je(i,0,t-84,e,84,"#262626");for(let l=0;l<40;l++)je(i,60+l*22,t-60,1,l%5?8:16,"#555");[180,320,470,640].forEach(l=>{i.save(),i.translate(l,t-30),i.rotate(Math.PI/4),je(i,-6,-6,12,12,"#f5a623"),i.restore()})},1024,640)}function Do(){return Kt((i,e,t)=>{je(i,0,0,e,t,"#383838"),je(i,0,0,e,44,"#282828"),Ah(i,"unity",12,8,28),["File","Edit","Assets","GameObject","Window"].forEach((l,c)=>jt(i,l,56+c*70,22,14,"#cfcfcf")),je(i,e/2-70,8,44,28,"#4c8be6",5),i.fillStyle="#fff",i.beginPath(),i.moveTo(e/2-55,15),i.lineTo(e/2-55,29),i.lineTo(e/2-43,22),i.fill(),je(i,e/2-20,8,44,28,"#4a4a4a",5),je(i,e/2+28,8,44,28,"#4a4a4a",5),je(i,0,44,200,t-44-190,"#2f2f2f"),jt(i,"Hierarchy",12,62,13,"#e0e0e0",600),[["SampleScene",0],["Lab",1],["Walls",2],["Desks",2],["XR Origin",1],["Workstation",1],["Monitor",2],["Headset",2]].forEach(([l,c],u)=>{l==="Monitor"&&je(i,0,78+u*24,200,24,"#2c5d87"),jt(i,l,16+c*16,91+u*24,13,l==="Monitor"?"#ffffff":"#c8c8c8")});let r=204,s=e-204-270,o=t-44-190,a=i.createLinearGradient(0,44,0,44+o);a.addColorStop(0,"#4b6f97"),a.addColorStop(1,"#a9bccd"),i.fillStyle=a,i.fillRect(r,44,s,o),i.save(),i.beginPath(),i.rect(r,44,s,o),i.clip(),Rh(i,r+s*.5,44+o*.55,165,{fill:{floor:"#6f747e",wallA:"#c9c2b6",wallB:"#d6cfc2",desk:"#c79f6e"},line:"rgba(20,24,32,0.55)",outline:"#ff9f1a",lit:"#ffd28a"}),i.restore(),jt(i,"Scene",r+10,62,13,"#e6e6e6",600),i.strokeStyle="#e04b4b",i.lineWidth=3,i.beginPath(),i.moveTo(r+s-60,96),i.lineTo(r+s-30,108),i.stroke(),i.strokeStyle="#7fc043",i.beginPath(),i.moveTo(r+s-60,96),i.lineTo(r+s-60,62),i.stroke(),i.strokeStyle="#4c8be6",i.beginPath(),i.moveTo(r+s-60,96),i.lineTo(r+s-88,110),i.stroke(),je(i,e-266,44,266,t-44-190,"#2f2f2f"),jt(i,"Inspector",e-254,62,13,"#e0e0e0",600),jt(i,"Monitor",e-254,92,15,"#ffffff",600),["Transform","Mesh Renderer","XR Simple Interactable"].forEach((l,c)=>{je(i,e-258,112+c*88,250,26,"#3c3c3c",3),je(i,e-250,121+c*88,8,8,"#4c8be6",2),jt(i,l,e-234,126+c*88,12,"#dcdcdc",600);for(let u=0;u<3;u++)je(i,e-250,146+c*88+u*18,232-u*40,9,"#454545",2)}),je(i,0,t-186,e,186,"#2b2b2b"),jt(i,"Project",12,t-168,13,"#e0e0e0",600),["Models","Materials","Scenes","Scripts","Prefabs","XR"].forEach((l,c)=>{je(i,20+c*130,t-138,100,70,"#3a3a3a",6),je(i,20+c*130+28,t-128,44,34,"#7f8a99",4),jt(i,l,70+c*130,t-50,12,"#cfcfcf",500,"center")})},1024,640)}function Lr(i=0){return Kt((e,t,n)=>{je(e,0,0,t,n,"#1e1f24"),je(e,0,0,t,34,"#2a2b31"),je(e,0,34,220,n-34,"#232429");for(let s=0;s<14;s++)je(e,18+s%3*14,56+s*24,90+(s*37+i*11)%90,8,s===4?"#5b8fd9":"#4a4d57",3);let r=["#c586c0","#9cdcfe","#dcdcaa","#569cd6","#ce9178","#6a9955"];for(let s=0;s<24;s++){let o=250+(s%4===2?30:0)+(s%7===3?30:0);for(let a=0;a<3+(s+i)%3;a++){let l=40+((s+1)*(a+3)*37+i*17)%120;je(e,o,60+s*22,l,9,r[(s+a+i)%r.length],3),o+=l+12}}},1024,640)}function Ch(){return Kt((i,e,t)=>{je(i,0,0,e,t,"#f3f3ef");let n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(0,0,0,0.05)"),i.fillStyle=n,i.fillRect(0,0,e,t),i.lineCap="round",i.lineJoin="round",[[90,"Blender","#d0701a"],[380,"Unity","#2a2f3a"],[670,"XR","#2c6db4"]].forEach(([s,o,a])=>{i.strokeStyle=a,i.lineWidth=5,i.beginPath(),i.roundRect(s,130,220,110,14),i.stroke(),i.font='600 44px "Segoe Print", "Bradley Hand", "Comic Sans MS", cursive',i.fillStyle=a,i.textAlign="center",i.textBaseline="middle",i.fillText(o,s+110,188)}),i.strokeStyle="#333",i.lineWidth=5,[[318,372],[608,662]].forEach(([s,o])=>{i.beginPath(),i.moveTo(s,186),i.lineTo(o,186),i.moveTo(o-16,170),i.lineTo(o,186),i.lineTo(o-16,202),i.stroke()}),i.strokeStyle="#3a7a3a",i.lineWidth=4,i.strokeRect(120,300,220,150),i.beginPath(),i.moveTo(120,360),i.lineTo(230,360),i.lineTo(230,450),i.moveTo(230,300),i.lineTo(230,330),i.stroke(),i.strokeStyle="#a33",i.lineWidth=3;for(let s=0;s<4;s++)i.beginPath(),i.moveTo(440,330+s*34),i.lineTo(600+s*53%110,330+s*34+(s%2*6-3)),i.stroke();i.fillStyle="#f7e27a",i.fillRect(760,300,130,120),i.strokeStyle="rgba(0,0,0,0.35)",i.lineWidth=3;for(let s=0;s<4;s++)i.beginPath(),i.moveTo(776,332+s*20),i.lineTo(870-s%2*28,332+s*20),i.stroke()},1024,460,{redraw:!0})}function Ph(){return Kt((i,e,t)=>{let n=e/2;i.fillStyle="#f4f2ec",i.beginPath(),i.arc(n,n,n,0,7),i.fill(),i.strokeStyle="#2c2f38";for(let r=0;r<12;r++){let s=r/12*Math.PI*2;i.lineWidth=r%3?4:8,i.beginPath(),i.moveTo(n+Math.sin(s)*n*.78,n-Math.cos(s)*n*.78),i.lineTo(n+Math.sin(s)*n*.9,n-Math.cos(s)*n*.9),i.stroke()}i.lineCap="round",i.lineWidth=9,i.beginPath(),i.moveTo(n,n),i.lineTo(n+Math.sin(-1.05)*n*.5,n-Math.cos(-1.05)*n*.5),i.stroke(),i.lineWidth=6,i.beginPath(),i.moveTo(n,n),i.lineTo(n+Math.sin(.35)*n*.72,n-Math.cos(.35)*n*.72),i.stroke()},256,256)}function Ih(i="#8f9bab"){return Kt((e,t,n)=>{je(e,0,0,t,n,i),e.strokeStyle="rgba(0,0,0,0.35)",e.lineWidth=4,e.strokeRect(6,6,t/2-9,n-12),e.strokeRect(t/2+3,6,t/2-9,n-12),e.fillStyle="rgba(0,0,0,0.42)";for(let r=0;r<2;r++)for(let s=0;s<6;s++)je(e,24+r*(t/2),34+s*12,t/2-48,5,"rgba(0,0,0,0.42)",2);je(e,t/2-22,n*.5,10,70,"#d9dbe0",4),je(e,t/2+12,n*.5,10,70,"#d9dbe0",4)},256,640)}function Lh(i="#dedbd3"){return Kt((e,t,n)=>{je(e,0,0,t,n,i),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=4;for(let r=0;r<3;r++){let s=8+r*(n/3);e.strokeRect(8,s,t-16,n/3-12),je(e,t/2-40,s+(n/3-12)/2-4,80,8,"#8a8f99",4)}},256,256)}function Dh(){return Kt((i,e,t)=>{for(let n=0;n<9;n++){let r=n/9*t;je(i,0,r,e,t/9-8,"#e6e2d8"),je(i,0,r+t/9-8,e,8,"rgba(60,55,45,0.55)")}},128,512)}function Uo(){return Kt((i,e,t)=>{je(i,0,0,e,t,"#1b1c21");for(let n=0;n<5;n++)for(let r=0;r<16;r++)je(i,14+r*30,14+n*26,26,22,"#2e3038",4);je(i,110,118,260,22,"#2e3038",4)},512,160)}function Uh(){return Kt((i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#5f86b8"),n.addColorStop(.55,"#a9c1dc"),n.addColorStop(1,"#f0d9b5"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="rgba(70,86,100,0.55)";for(let r=0;r<14;r++){let s=40+r*53%60,o=24+r*37%70;i.fillRect(r*(e/14),t-o,s,o)}},1024,256)}function Nh(){return Kt((i,e,t)=>{je(i,0,0,e,t,"#eef0f2"),i.strokeStyle="#3d6db0",i.lineWidth=2,i.strokeRect(30,30,e-60,t-60),i.beginPath(),i.moveTo(30,t*.45),i.lineTo(e*.55,t*.45),i.lineTo(e*.55,t-30),i.moveTo(e*.55,30),i.lineTo(e*.55,t*.22),i.stroke(),i.strokeStyle="#8fa8c8",i.lineWidth=1;for(let n=1;n<12;n++)i.beginPath(),i.moveTo(30+n*((e-60)/12),30),i.lineTo(30+n*((e-60)/12),t-30),i.stroke();i.fillStyle="#3d6db0",[[70,60],[150,60],[230,60],[e*.7,t*.7]].forEach(([n,r])=>i.fillRect(n,r,34,22))},512,320)}function Fh(){return Kt((i,e,t)=>{i.strokeStyle="rgba(226,181,63,0.95)",i.lineWidth=16,i.lineCap="butt";let n=20,r=130;[[n,n,1,1],[e-n,n,-1,1],[e-n,t-n,-1,-1],[n,t-n,1,-1]].forEach(([s,o,a,l])=>{i.beginPath(),i.moveTo(s+a*r,o),i.lineTo(s,o),i.lineTo(s,o+l*r),i.stroke()})},512,512)}function Oh({materials:i}){let e=new gt,t=Ao.half*2,n=it({size:[t+.4,.5,t+.4],at:[0,-.6,0],material:i.slab,radius:.08,fx:"slide",dir:new R(0,-6,0),shadow:!1}),r=it({size:[t+.46,.05,t+.46],at:[0,-.42,0],material:i.brass,radius:.012,fx:"slide",dir:new R(0,0,0),wire:!1,shadow:!1});e.add(n.root,r.root);let s=t,o=s*s,a=new Cn(.985,.06,.985).translate(0,.03,0),l=new _r(a,i.tile,o);l.receiveShadow=!0,l.frustumCulled=!1;let c=new Float32Array(o),u=[],h=new Pe(5659496),p=new Pe(6580856),d=new Pe;for(let v=0;v<s;v++)for(let C=0;C<s;C++){let E=v*s+C,A=v-s/2+.5,I=C-s/2+.5;u.push([A,I]),c[E]=Math.hypot(A-Ft.workstation[0],I-Ft.workstation[2])/9*.6+Gn(E)*.06,d.copy(h).lerp(p,((v+C)%2?.5:.1)+Gn(E+9)*.35),l.setColorAt(E,d)}e.add(l);let g=new Ot,x=-1;function m(v){if(v!==x){x=v;for(let C=0;C<o;C++){let E=Ge(v,c[C],c[C]+.4),[A,I]=u[C],w=E<=0?1e-4:Math.max(1e-4,Ro(E,1.1));g.position.set(A,-.06-1.3*(1-Rr(E)),I),g.scale.set(w,w,w),g.updateMatrix(),l.setMatrixAt(C,g.matrix)}l.instanceMatrix.needsUpdate=!0}}let f=it({size:[3.9,.02,3.3],at:[Ft.workstation[0],0,Ft.workstation[2]+.55],material:i.rug,radius:.008,fx:"drop",drop:2.2,wire:!1,shadow:!1});e.add(f.root);let y=new Vt({map:Fh(),transparent:!0,opacity:0,depthWrite:!1,color:12566463}),b=new ht(new Gt(2.9,2.9),y);return b.rotation.x=-Math.PI/2,b.position.set(3.4,.004,3),b.renderOrder=1,e.add(b),{group:e,update(v){n.set(Ge(v,...Qe.slab)),r.set(Ge(v,...Qe.trim)),m(Ge(v,...Qe.tiles));let C=Ge(v,...Qe.rug);f.set(C),y.opacity=Pt(Ge(C,.4,1))*.85}}}function $e(i,e,t,n=[0,0,0],r=.012,s=null){let o=Math.max(.003,Math.min(r,Math.min(i,e,t)/2-.001)),a=new bi(i,e,t,o>.03?3:o>.012?2:1,o).translate(0,e/2,0);return s&&(s[0]&&a.rotateX(s[0]),s[1]&&a.rotateY(s[1]),s[2]&&a.rotateZ(s[2])),a.translate(n[0],n[1],n[2])}function Dn(i,e,t,n=[0,0,0],r=20){return new br(i,e,t,r).translate(0,t/2,0).translate(n[0],n[1],n[2])}function _c(i,e=[0,0,0],t=10){return new _i(i,t,Math.max(6,t-2)).translate(e[0],e[1],e[2])}function No(i,e){let t=new Pe(e),n=i.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r.set([t.r,t.g,t.b],s*3);return i.setAttribute("color",new pt(r,3)),i}function qe(i,e,t,n,r=0){return r&&i.rotateY(r),i.translate(e,t,n)}function Hi(i,e,t,n,r=0){let s=new Gt(i.screen.w,i.screen.h).translate(0,i.screen.y,i.screen.z);return qe(s,e,t,n,r)}function Dr(){let i=[];for(let n=0;n<5;n++){let r=n/5*Math.PI*2,s=$e(.34,.03,.05,[.17,.07,0],.01);s.rotateY(r),i.push(s);let o=Math.cos(r)*.34,a=-Math.sin(r)*.34;i.push(Dn(.035,.035,.05,[o,0,a],10))}let e=Qt([...i,Dn(.032,.032,.34,[0,.08,0],12),$e(.44,.03,.4,[0,.4,0],.01),$e(.04,.24,.05,[0,.4,-.26],.01),$e(.05,.04,.34,[-.29,.62,-.05],.015),$e(.05,.04,.34,[.29,.62,-.05],.015),$e(.03,.2,.03,[-.29,.44,-.05],.008),$e(.03,.2,.03,[.29,.44,-.05],.008)]),t=Qt([$e(.5,.09,.48,[0,.42,.02],.04),$e(.46,.5,.07,[0,.66,-.27],.04,[-.12,0,0])]);return{base:e,fabric:t}}function ps(i,e){return{body:Qt([$e(i+.06,e+.06,.045,[0,.15,0],.02),$e(.09,.16999999999999998,.05,[0,0,-.045],.01),$e(.34,.02,.22,[0,0,0],.01)]),screen:{w:i,h:e,y:.15+.03+e/2,z:.0235},top:.15+e+.06}}var Fo=()=>$e(.46,.022,.16,[0,0,0],.008),Oo=()=>$e(.06,.028,.1,[0,0,0],.025);function Mc(){return{base:$e(.5,.02,.34,[0,0,0],.01),lid:$e(.5,.33,.015,[0,.02,-.16],.008,[-.22,0,0])}}var Si=()=>Qt([Dn(.045,.04,.1,[0,0,0],14),$e(.02,.06,.03,[.06,.02,0],.008)]);function Bo(){return{body:Qt([Dn(.09,.1,.02,[0,0,0],16),$e(.025,.42,.025,[0,.02,0],.008,[.15,0,0]),$e(.025,.36,.025,[.04,.4,.06],.008,[-.75,0,0]),Dn(.02,.11,.14,[.04,.6,-.16],16).rotateX(0)]),bulb:_c(.035,[.04,.6,-.14],10)}}function bc(i=1){let e=i,t=[],n=[5144395,6066002,4288066,6922330];for(let r=0;r<9;r++){let s=r/9*Math.PI*2+r*.7,o=(.1+r%3*.05)*e,a=_c(.13*e,[Math.cos(s)*o,(.32+r%4*.08)*e,Math.sin(s)*o],8);a.scale(1,1.25,1),t.push(No(a,n[r%n.length]))}return t.push(No(_c(.16*e,[0,.5*e,0],8),n[1])),{pot:Qt([Dn(.15*e,.11*e,.24*e,[0,0,0],16),Dn(.155*e,.155*e,.03*e,[0,.24*e,0],16)]),leaves:Qt(t)}}function Bh(){return{shell:Qt([$e(.4,.22,.26,[0,.02,0],.07),$e(.46,.05,.04,[0,.13,-.12],.02)]),dark:Qt([$e(.33,.14,.02,[0,.06,.135],.03),$e(.3,.13,.05,[0,.055,-.15],.04),new Fi(.17,.018,8,24,Math.PI).rotateX(Math.PI/2).translate(0,.14,-.28)])}}var Sc=()=>Qt([new Fi(.05,.011,8,20).rotateX(-.9).translate(0,.07,.03),new go(.022,.09,4,10).rotateX(Math.PI/2-.25).translate(0,.03,-.03)]);function zh({materials:i}){let e=new gt,t=Ao.wallH,n=b=>(e.add(b.root),b),r=n(it({size:[.3,t,10.3],at:[-5.15,0,-.15],material:i.paint,radius:.02,fx:"rise"})),s=n(it({size:[10,t,.3],at:[0,0,-5.15],material:i.paint,radius:.02,fx:"rise"})),o=[],a=(b,v,C)=>{n(b),o.push({p:b,wallKey:v,order:C})},l=new R(.6,0,0),c=new R(0,0,.6);a(it({size:[.06,1.05,10],at:[-4.97,0,0],material:i.wainscot,radius:.015,fx:"slide",dir:l,wire:!1}),"wallA",0),a(it({size:[9.94,1.05,.06],at:[.03,0,-4.97],material:i.wainscot,radius:.015,fx:"slide",dir:c,wire:!1}),"wallB",0),a(it({size:[.09,.03,10],at:[-4.955,1.05,0],material:i.brass,radius:.01,fx:"slide",dir:l,wire:!1,shadow:!1}),"wallA",1),a(it({size:[9.94,.03,.09],at:[.03,1.05,-4.955],material:i.brass,radius:.01,fx:"slide",dir:c,wire:!1,shadow:!1}),"wallB",1),a(it({size:[.04,.12,10],at:[-4.93,0,0],material:i.baseboard,radius:.01,fx:"slide",dir:l,wire:!1}),"wallA",1),a(it({size:[9.94,.12,.04],at:[.03,0,-4.93],material:i.baseboard,radius:.01,fx:"slide",dir:c,wire:!1}),"wallB",1),a(it({size:[.36,.05,10.36],at:[-5.15,t,-.15],material:i.brass,radius:.012,fx:"drop",drop:1.5,wire:!1}),"wallA",2),a(it({size:[10.06,.05,.36],at:[0,t,-5.15],material:i.brass,radius:.012,fx:"drop",drop:1.5,wire:!1}),"wallB",2);let u=n(it({size:[.4,t+.06,.4],at:[-4.8,0,-4.8],material:i.paint,radius:.03,fx:"rise"})),h=dn(Uh(),.9),p=[],d=b=>(p.push(n(b)),b),g=d(it({size:[.02,1.62,6],at:[-4.985,1.1,-.7],material:h,radius:.004,fx:"slide",dir:new R(.4,0,0),wire:!1,shadow:!1})),x=(b,v,C=i.plasticWhite)=>d(it({size:b,at:v,material:C,radius:.01,fx:"drop",drop:1.2,wire:!1}));x([.1,.06,6.2],[-4.95,2.72,-.7]),x([.1,.05,6.2],[-4.95,1.08,-.7]),[-3.7,-1.7,.3,2.3].forEach(b=>x([.1,1.66,.07],[-4.95,1.08,b])),x([.26,.04,6.4],[-4.88,1.04,-.7],i.laminate),d(it({size:[.03,.62,6],at:[-4.93,2.1,-.7],material:dn(Dh(),.95),radius:.004,fx:"drop",drop:1,wire:!1,shadow:!1})),x([.1,.08,6.1],[-4.93,2.72,-.7],i.plasticWhite),d(it({size:[3,1.4,.03],at:[1.1,.95,-4.97],material:dn(Ch(),1),radius:.008,fx:"slide",dir:new R(0,0,.5),wire:!1,shadow:!1})),x([3.1,1.5,.02],[1.1,.9,-4.99],i.steel),x([3,.04,.09],[1.1,.9,-4.93],i.steel),d(it({size:[.6,.6,.01],at:[3.95,2.72,-4.985],geometry:new xo(.3,40),material:dn(Ph(),1),fx:"drop",drop:1,wire:!1,shadow:!1})),d(it({size:[.66,.66,.05],at:[3.95,2.72,-4.975],geometry:new Fi(.31,.03,8,40),material:i.brass,fx:"drop",drop:1,wire:!1,shadow:!1})),d(it({size:[1.3,2.2,.04],at:[3.85,0,-4.98],material:i.slab,radius:.006,fx:"slide",dir:new R(0,0,.5),wire:!1,shadow:!1})),x([.09,2.24,.14],[3.2,0,-4.93],i.woodDark),x([.09,2.24,.14],[4.5,0,-4.93],i.woodDark),x([1.4,.09,.14],[3.85,2.2,-4.93],i.woodDark);let m=d(it({size:[1.02,2.1,.05],at:[4.42,0,-4.86],geometry:$e(1.02,2.1,.05,[-.51,0,0],.012),material:i.wood,radius:.012,fx:"drop",drop:1.4,wire:!1}));m.root.rotation.y=.62;let f=d(it({size:[.12,.04,.09],at:[4.42,1,-4.86],geometry:$e(.12,.04,.09,[-.9,0,0],.01),material:i.brass,radius:.01,fx:"drop",drop:1.4,wire:!1,shadow:!1}));f.root.rotation.y=.62;let y={wallA:Qe.wallA,wallB:Qe.wallB,corner:Qe.corner};return{group:e,update(b){let v=A=>Ge(b,...y[A]);r.set(v("wallA")),s.set(v("wallB")),u.set(v("corner"));for(let{p:A,wallKey:I,order:w}of o)A.set(Ge(v(I),.35+w*.12,.85+w*.08));let C=Ge(b,...Qe.glazing);p.forEach((A,I)=>A.set(an(C,I,p.length,.7)));let E=Pt(Ge(b,...Qe.unity));g.mat.color.setScalar(Vn(.8,1.15,E))}}}function kh({materials:i}){let e=new gt,t=Ft.deskX,n=[],r=[],s=y=>(e.add(y.root),n.push(y),y),o=y=>(e.add(y.root),r.push(y),y),a=y=>s(it({size:[.76,.72,.04],at:[t,0,y],material:i.laminate,radius:.008,fx:"drop",drop:3.2})),l=oi(Lh(),.6),c=y=>s(it({size:[.5,.68,.7],at:[t-.15,0,y],material:l,radius:.012,fx:"drop",drop:3.2}));a(2.67),c(1.9),a(.55),a(-1.65),c(-3.45),a(-3.97),s(it({size:[.84,.04,6.7],at:[t,.72,-.65],material:i.wood,radius:.012,fx:"drop",drop:2.4,keepWire:.1}));let u=[{tex:Ir(),gain:.85},{tex:Lr(1),gain:.85},{tex:Do(),gain:.85}],h=[-.12,.28,-.3],p=[-2.3,-.55,.95],d=Uo(),g=[],x=[];Ft.deskStations.forEach((y,b)=>{let v=ps(.86,.52);o(Ve(qe(v.body,t-.05,.76,y,Math.PI/2),i.plastic,{shadow:!0})),o(Ve(Hi(v,t-.05,.76,y,Math.PI/2),dn(u[b].tex,u[b].gain),{shadow:!1})),o(Ve(qe(Fo(),t+.3,.76,y,Math.PI/2),oi(d,.5))),o(Ve(qe(Oo(),t+.3,.76,y+.36),i.plastic)),o(Ve(qe($e(.22,.48,.46,[0,0,0],.02),t-.05,0,p[b],Math.PI/2),i.plastic,{drop:3}));let C=Dr(),E=-Math.PI/2+h[b];o(Ve(qe(C.base,t+1.15,0,y+.1,E),i.steelDark,{drop:3.4,shadow:!0})),o(Ve(qe(C.fabric,t+1.15,0,y+.1,E),b===1?i.fabricBlue:i.fabric,{drop:3.4,shadow:!0}))});let m=Bo();o(Ve(qe(m.body,t-.22,.76,Ft.deskStations[0]-.62,Math.PI/2),i.steelDark));let f=o(Ve(qe(m.bulb,t-.22,.76,Ft.deskStations[0]-.62,Math.PI/2),i.lampBulb.clone(),{shadow:!1}));return g.push(f),x.push(new R(t-.02,1.35,Ft.deskStations[0]-.5)),o(Ve(qe(Si(),t+.28,.76,Ft.deskStations[1]-.5),i.plasticWhite)),o(Ve(qe($e(.22,.03,.3,[0,0,0],.004),t+.3,.76,Ft.deskStations[1]+.55,.3),i.paper)),o(Ve(qe(Si(),t+.25,.76,Ft.deskStations[2]-.5,1.2),i.pot)),{group:e,lampPositions:x,bulbs:g,update(y){let b=Ge(y,...Qe.desks);n.forEach((C,E)=>C.set(an(b,E,n.length,.6)));let v=Ge(y,...Qe.props);r.forEach((C,E)=>C.set(an(v,E,r.length,.62)))}}}function Hh({materials:i}){let e=new gt,t=[],n=[];[[-4.4,"#8593a6"],[-3.55,"#7c8f9c"]].forEach(([m,f])=>{let y=it({size:[.8,2,.55],at:[m,0,-4.68],material:oi(Ih(f),.5,.25),radius:.015,fx:"rise"});e.add(y.root),t.push(y)});let r=-2.05,s=-4.76,o=[.02,.55,1.05,1.55,2.03],a=Qt([$e(.04,2.06,.38,[-.83,0,0],.006),$e(.04,2.06,.38,[.83,0,0],.006),...o.map(m=>$e(1.66,.03,.38,[0,m,0],.006))]),l=it({size:[1.7,2.06,.38],at:[r,0,s],geometry:a,material:i.steel,fx:"rise"});e.add(l.root),t.push(l);let c=[9187129,3103372,3042127,8092546,13672762,3356223,13222836],u=[11636322,10846810,12294768],h=[5597834,7304320,4942691],p=[],d=0,g=()=>Gn(d++*1.37+3.1);o.slice(0,4).forEach((m,f)=>{let y=-.78,b=m+.03;for(;y<.7;){let v,C,E,A;if(f===0?(v=.28+g()*.12,C=.26+g()*.1,E=.3,A=h[Math.floor(g()*h.length)]):f===2&&g()>.4?(v=.28+g()*.14,C=.3+g()*.12,E=.32,A=u[Math.floor(g()*u.length)]):(v=.05+g()*.04,C=.3+g()*.12,E=.27,A=c[Math.floor(g()*c.length)]),y+v>.8)break;p.push(No($e(v,C,E,[y+v/2,b,0],.004),A)),y+=v+(f===0||f===2?.04:.005),f>=1&&g()>.9&&(y+=.16)}});let x=it({size:[1.7,1.7,.38],at:[r,0,s],geometry:Qt(p),material:i.vertex,radius:.01,fx:"drop",drop:2.6,wire:!1});return e.add(x.root),n.push(x),{group:e,update(m){let f=Ge(m,...Qe.storage);t.forEach((y,b)=>y.set(an(f,b,t.length,.5))),n.forEach(y=>y.set(Ge(f,.55,1)))}}}function Vh({materials:i}){let[e,,t]=Ft.island,n=new gt,r=[],s=[],o=p=>(n.add(p.root),r.push(p),p),a=p=>(n.add(p.root),s.push(p),p);[[-1.5,-.45],[1.5,-.45],[-1.5,.45],[1.5,.45]].forEach(([p,d])=>o(it({size:[.07,.71,.07],at:[e+p,0,t+d],material:i.steelDark,radius:.012,fx:"drop",drop:3.2,wire:!1}))),o(it({size:[3.2,.05,1.1],at:[e,.71,t],material:i.wood,radius:.012,fx:"drop",drop:2.4,keepWire:.1}));let l=(p,d,g,x)=>{let m=new Gt(.46,.3).translate(0,.165,.009).rotateX(-.22).translate(0,.02,-.16);return qe(m,p,d,g,x)},c=.76;a(Ve(qe($e(1.5,.006,.95,[0,0,0],.002),e-.25,c,t,.12),oi(Nh(),.9,0)));let u=Mc(),h=Mc();return a(Ve(qe(u.base,e-1.1,c,t+.28),i.steel)),a(Ve(qe(u.lid,e-1.1,c,t+.28),i.steel)),a(Ve(l(e-1.1,c,t+.28,0),dn(Lr(3),.85),{shadow:!1})),a(Ve(qe(h.base,e+1.15,c,t-.22,Math.PI),i.steel)),a(Ve(qe(h.lid,e+1.15,c,t-.22,Math.PI),i.steel)),a(Ve(l(e+1.15,c,t-.22,Math.PI),dn(Ir(),.85),{shadow:!1})),a(Ve(qe(Si(),e+.55,c,t+.32,.8),i.plasticWhite)),a(Ve(qe(Si(),e-.1,c,t-.36,2.1),i.pot)),[[e-.45,t+1.1,Math.PI-.2,i.fabric],[e+.75,t+1,Math.PI+.4,i.fabricBlue],[e+.2,t-1.05,.15,i.fabric]].forEach(([p,d,g,x])=>{let m=Dr();a(Ve(qe(m.base,p,0,d,g),i.steelDark,{drop:3.4,shadow:!0})),a(Ve(qe(m.fabric,p,0,d,g),x,{drop:3.4,shadow:!0}))}),{group:n,update(p){let d=Ge(p,...Qe.island);r.forEach((x,m)=>x.set(an(d,m,r.length,.5)));let g=Ge(p,...Qe.props);s.forEach((x,m)=>x.set(an(g,m,s.length,.62)))}}}var Gh="data:image/webp;base64,UklGRrhHAABXRUJQVlA4IKxHAACwuAGdASogA+ABPlUokEajojEkpHOaQiAKiWc6NmFnQfWTvBRtUDdphHqU9xpDhr3wobqmaDR5jUUY6XeSc9lyDkD8z7uvOzscf+T9n/e9+sv+57hf69epn/y/sZ8H/6v/4/Uj/Mv8V+1nvEf9/1vf5z1AP6n/suuB9Ajy7/3P+Hb+1f+P91Pay///sAf//26NUhSHoED+vyf7nakOoo/k/Lx6tPhq1Ef2GH6am1DmePUC+bTcfphslW0fsXNJAFO2vaE8l9FEez9/Sg4mOmDDbfMf2gojCfUDihO637mWVY1yIc09fRxav8UbvBFyT3TuLelIHFhOM/S71sv+6deinclRMRKRkkhr80J2bllEp/9lyE3bsl5jtRh0twq0u/iBxLMJ5ZPJoT0eEUaKzCWKGd+HdM85X7Mzs/R6iYqevuaanbuuFCuP1ld/LeOOBI9wT/UhSLdDl8ir6z6uJhK/F6+mslMxSVTj/WoIPazAMBL4fPohelAb34bJH3pzAP7nBv3JtPN8b4PCwEaPB+uDrx/bX8mdwOiBkCHTWm40zmpf9nIHVkxihrY0b6/aeI3ntvjRXuvji5nWP5mXgyCf6Dr4JZQn5btxzWHnP8QVgJ3Zk9nUkyYXQ32z6hqFanPulbG/Viq1avj9hueGyTnlLRRWS+FjVY4EfcaB3e3HSskmrMbd2KpDv31LPGzR9/GCKO3wJ7l3mSugdgklPq/PX5FqKK4Qqgl6QXvvRI1YkDQqcMw60U4+AlB4TSyi6M4QIUp9qQTR9KqvN32gWk6TzLMEyFjQuB08R1choXEnEdJSRRdCDxqrYdNZrZtLfQoVqHLtY9A7v1FBZPzo/410cUZUUPK8l7TxNO3Mubvlf0dmUNrDsJBpH3Bt8dXASyMcd1l0fFUIK3YmvICsCtlVBflV8cajMlCkFdqzqJJG+04di2Zk+AI8xWicl883VBbE30hEraarX3dFqflWtAxynjT8OodSbBJ+jVPlar8yOSUmV7AugyXFVprBWX/mr1QfR+M91RHMME6ojndpBBSnO/WYcePDbJjfIs0X7HYYCQ7JpKcR1ZGESdAhClgTwBMmILshQ0TjKtzk9K2Fj3InC04F0Ho838arOF3DH1kLGluAEWv0LiFbZZxAGBsJJHzYb1hf6k7lQv1f/BS7vG/NWqMAHtManGZO7b47omwey2Bnsn7qETDt7sXP9Qzwo/SmvR1tY17llAIK6snEOlG2jIhlf1w7U5oWOB4e9y9+Bo3Q/XDyhNn6CDOieHi7dnV6MZtO6JZO2QYzsQyx0zCWQhxVbb2O5XZvdwqSDHiIuLawHF3yJuvVIsSKVsImft5eOFZ8ah/muD3cBcygqHUNoXDbhMluFH0ZEUvzVM16o5VwCgd9R2vVv7++3HUidCvhrkn7aZ6VXXBE2WZTvD6Rf1sgOx6R/KQSC3abiPj9xuUjZGMoZ/zaeFAYfsNdqDQaG3RR9v1EuvpnWuiRQ02M6MN38JaBmZPvQd1IxxyzaIsraDaLWFP4DOtcRnJrCTiBknX+Q4OIPWz524AhGPztNQ0hk3ZcO7+EguhY9AWsU6Jiu0E2ENVj/nEYsaUtqp5N34z5wN++F0x6cl+oyxDEIaLkZcpY8xDFEXBqIrhussHc/N+t8OsoxedMVI/krpccfMJ+M4C7bhFJfFkV+ZDx+ZsJNJGK3BAAzB7poAVqAMpaclWO6IY/irrZ847WR7c2Ezsc3Y1PtS4nvhM8XXvfbDnb8dFPbhyWtLuPAlfRFXp/7YKVaxIH07cMFYPQVo9cjyaEERvXATDRd3WEv2mSWXJ4ZwPPcAgLNr5YpuOt4XI0ISmdIu0TeuDFIWKLPmW2k7ZM4h4kEhDEqNQSap8KHo0BjiUI54ehGWfGx3/mD3sYS72LChdGTC8jtG+FOMaF6WIl4VULnZ09RChkjG01wGwf33OCtkSBpa8ZNr5N0xTR23jzFfyn7PUoKhfDNJTJzhNHQOJcwI1Xn1CjwcC51i7muaWy2Vd75K/TzXLg/HsmNZspVnyPcpGu0yM/TUJv7lMvxXUOZ/H0ShfABNilTNdAo9ONy6YrkA++wGU0T0XINzJ60A+vzQtjZLX+onjvoyVMMIE4sbW3wrYqJ5qZWYiMHfUfwe6zg9960g22xKbbm6S+bNNpndYEKURdzHpxTim1B8LwemaPsifUd9ePouRKSQabwhtDq9bJpWJP5bwhdRfRNNPKzL6KYNd/+xgiMs4qQhqWZJSysbdk/MaPa190pTQ9SP2iAplCQpjP14rIxbreUOgnCjxTICs5BqtQOHM0A57gU645dr5x8IwGUBttEt89vmJ6sBo9LmkyoQEn6cSc2iY/RW7m1y2q6Li1R0E7tCDSCfGmE/FKO62ixpof5YJYoMZTqmcBCk2HMHjRTASCbl37yRbeBF9SGVuaX8dTu4EAw7XFUBh4vxGDBrhwdagoRqF+vGLsNpcX2UCZSoFnf5X1l3y0BmNYDv4YuU3S4IhpL75OoTpdtkBZpqhOim91RJ9VKIvETyWu/QhuTeBdrkArQEktPUtA4UzpmsRTT/z23Ssxop44V8LZfdSTOmkEfc3c0HYW3A0qy4uMvAra6IJvRBzAxfoUJPYRRGofh3ASKlwX2OYhIN4bngY96N3VtQDESoqZgGOio1FN8ki3YUovTtwJZsNFGCWI7zZAus7tJVMK2Ve3nYAg8Tliy4Oad9wp3OdySb5RSfzf0YZqhcw13GoCo+Z69nslMr1I8rz3Maxor9SBT6tm6ogRimDJoBx+9XO0A+dARz+7MgTxvxUqLI7eU1D1/IANagPX0/yM84YqdOJCrN9XHOQgIPyLIoNer9enXGrCluZiaQ/Yjoi9g+AHR8OgMNO5QqvGsKy5mWjDX7Xk7WiyxsFLOw2350C9kh+zRG1JOM9BjtG106x9pRtTYBhWr0Sm79gu8izcsw7Uum/aFsMAVOoNEkp64bV7Cu0AMpxY5aYfjo9BRF1onPzwhR12rEgnBmUwSaNGirmNQqgWtOpwzOvPI5Mek6NcCChUzlfudVbYb9NEBZC2uc4UuJt5Wl7nKlTZC35JWtENBdRmACud2rr0M+9G0xylJ8uoRSCPQoOM//4DcLoMP6W08F9rX2V8/zBMBIhPuNvrC/xTx3jYi2F/YU0E6tq/kR1+XNCn/GbYUOxUT0ipJTRCXlzcjVJKPQ2JwFkGLSZJ3jZBRe2Nftu0NzZDIfVg8O+muH0wT6a6OK9PvmOO/aeWcvh8uxYaVDtOez/l7yBjoCR4QYuICFNltPqq08VClatxzZWCRhm5ScXE+/jnS9zpAiFc2ObXaQ3cXQNguIuCbmRE32lI8oaUTBVI/amlgpxaF2iWXCX8bEBWiviAGHPlRRu9dwPzt2UTGKOstze2OR/HcqyXctE4ef/bfVQNMbiOmzk6/UJZ819fnSIy37lF0QA9Xpr6vHVGa1RRFybzKxLvAw0ARCqFfKswPCOr4IPXvXzKxucimQak9R1nkPiWHP/vxZNKm0UHFUQsfaKUWm4RLTs+S5dB90f6Vmv0qLew6i5g4cy09T0SQ22LZDY0ksxNLALt12pOEkWaCyj+/+QAWtLihhVKJ/ylyCL4gofld0surXDbftjnQWkk2xpg79omVHfAaunvGi6950g+Su00vpM1nC4E7xaD1kU61BDwad4JCIHKGhId9Hj96bYo2qxitemIKVZNzd3vtH//6siNSfY3037aWhwgzfPeVW4cn7mEmx7VGQsiogfCsX3BeoeHoPI6Wg8+d4IqH1Y7ROKj8pymqHsRIrGHOPbYl+KpT9D0MoDdkyBt1bCworOPsv/vNIkdmukQ7DvuVj7SPYso9ej5IwSEUEHiQuy2D+dsLiHzCkJLEnxd1xVo6WGdN4GTZQ0UwqMeEFAyC99vbIL/5T4DDtWii9Sizz3eaCCtBHR2oxgWhav0c/zHwn6zamBqiFGfW97tSR1Hxjfo5GQBWCA9zcsuYCeOgy/Cf86tm6mGiGKF2S8p0o28+XYc9iW4GApYeNCpw0WpeAkCOhMsicB91z9KTwAmI9s/Ce2mK4zhqN66u2GQ9wbNv1VKApTvbo4OWSa225zMbjsvEIXC8FBf7ZMgqWSS511Q1Hw2wONKnipJo4jE+zsbAbjR4wLaB697mYCfs3nO9JX3Annl5eXVkIZP3qMwPMe555WUeGhZdz2ErPkKMY4qYQFNpnOm6+fGTAM4xEpxrvFnL6ZOoPtuVlY18KZ/HAY+vAdYEd67/2LamDJhcjn+NbhGN5YGHWWct/xwQHtwBBhCL4gnSobCJEiIq+oYcjIoqHAtkdEA1rJplSjLAFHpOhmMi0jOu2K9+2G6q8kCgU0dQi/SxI7O8HX8n7GOYtw9kP4ULSabf/Aitc9KrXw8KKwRQn7mD/kN990w3tqOLToysiGdyjIPIgeHRNxLCa78baqzn58sZsfdme3GiPoxJMk5oh373G/3l3gcoclb4OGyj8fgJRK2kcL4cfc+0KrTA7Xcz8b+3NSwN7xPM050irOQcpP4DK46i5n26vA6IlBl7RSPuF8KuLOx3wjCInac1GEYEDE1ioYZa/tR5wGPbk65ENgIFUqDlMkBg5GqDunfnW+LixIj4yHOZS0hT3uvq4lCDrRPOonNwvKT+no1v93TkiLR87gLVeBfjiggMW+nqlOOZ5aW9RfOh5NqLAAsZxuZpnAA/v2lBMSjNuqvYuwRQWW+VWoPpjIKM4JDRUm7LuFt3QkShG2s9T8GfAytWP2TwMoFIeMAfyA4E0PaMu/gNcpimtPAG3JOldXlCcj+0MpWtPEFm0rCcxrQFUdmxZoy73zWmi4wo0U9HCQolt2mPc1SqliJbR8J4igMC3xjU5HdnjdweHc9lNVSgZXuuaUX4T5Va68269fEwV7+7OrHGL/gFPohlcuikm7YzGLiAVPqGs/Es0evcQHPrFEL1Zjqj9RvVbXiypXBKihPp5ReVLvsXCF4+1ck4F89e+1Stlux9y56ZEa/5c8imSsw0S74oa2ZBObpXPdbRwC4wtiUrlUOGJqP18At/0BcQaKvciFI6TojO+/2W2Q6N3+Apv1xEbgonF4BUK9HDS/gbWBrt4gqhnOV1p0MO2mYTWa1q7K764k345fNbhqmqDKxbkQwzhF7GCrRyw1ZsFsilvp7fud/9y5C8rKGhdVq0VEmnb/FJ6Ivllo7hrLeIQIE7bvRcMYNAjdYKwj1NRJkUJEcSdGrCt6Fnsi3WJNYO5Xyx6vsMy329ctUK4/yYS9FG8jv70N7RhRIdWaF+2GXHjSXGmkoyEHSlfQsVDkwJ4Feq5m+4MysVHgL9IlLOj5rhr+zXaJh1MDRIVhJVZv3RCyCh1f37I2gUIwW2+J/kfieTJthSzFY8uJLfbjFekWG2Fw7htO25vGiH8o/axonGpMxE38NQdATmWifQmoM/wWkoTY8PWr/Ehaf9V3GNfDE+FsLsPDviS+PW4eBsRidWyzmFAMagB6MHMsZ0IWudmKYp8djzdLDuoff1PobQLDwswE/Elx7e/JP7OybrnSjqHjYNtehIADiVqC0ghJ57jC2DdesSxFTSqwl06dASeIl0yJLrQupSngC4ouTsFKHQoYeSB/QZYsBRmxjw+A4piSpBPJv3Rh4pasCylHvWkimMwpwXOLWVmBxE72LV6SX5aTQQdQG3VC4KTbw4etWY+TAbQaPPIKhdCtGzJZmi69SDUmKRZCfyBKP+8yEJF4IR+vedLn56ejePdC7q3z6gV/Zr3SnwBjdtuaN20LFIcgBfXuHGxNc0zaEPaapENU9Wh0ZzsL8C3ZTnTjvUL2wF2anKvfsVHR1T87tTqrrqf3K4c20nPQIW/Z4tFCF0cN/BZ0vJZ/4DVM9TbvI5krlCojyUSZXWnUz/sCzf5UNNmWKAZbsK3o9Bn6N8F+FDeje5vhFghs9jMjfrIXA9AdWw4f+JtLw+ahtBAglRhMCMfgC0YiStB5fGIr95gihklRCoFXAqM6YB1roeXUJUqogoEE1wI9xHeYu3g0kTOJiBKOLOqP2foR1LHPRhP9wGP0zmHlSStOivaZnu7DALjAWhPWTBScfAFE7sm5OJbHa9hb80oLOZU0X0B7B+Xhy3NTVNVYXcmRnP+E0aN2yPzu55ovhywyngG6b9OsoFlVPzu6hNAVf0Hwm66TI2O7D6U3DQKRAtla9LH6XtoQQ686ZjsjDldaaD7Kz25YgZTHvZJcZ8XG5KJeJtfF3lBTawh9MKd7AKUNdAHv8NuysjJSrwtIrdKB+qQRQ3uM7lFztxS6igOVElLh9BJMbS3dx8f5RHWnG9dpTP9hEUEFyx7qyoJYR3AHNylzUXfFuvkSBNmiciWWnsvFwNFU5bE96Iis1vLBECfng7ZQs5ud6qHdEumWXtYh+c957Q/Ieg6xyO34FcckNOIOupcDQ+0sSGB4835I0yoCEjTYbObCuGIsJlnKYVBvUSYDCQqcrJ3eWAnmoJberpIJTwD3ET2Xr7Imo6kk8A0YZIKFAOFuGdc2ukucRcGjBlH1FkOATuB0n8WIk6UPCBto0GRe775qtu0TLq6LQ3QjtK5mjyZE7Wqf8ssxPT7LI6D0VHf1Kx/SPg9toQ564Y26jQ756QgKnjLZKCqRwMYLzpoJqDPRe4nUdSVUb2Lfpdg73g3PnuUtsJtfcZTay3nUwt1uF4VDtHO439auta8hXg9W8nXdz+H3CFA3cggnbZuOqVC9ChQBnsWdXZlArtWlc1vI57/kiyvNZSzc173/YDVUqXV2v0Xqbtar7iggHrw7XRFyiju57tJUCePS7Mhuq6fQ66UFAR4vsdwNLXWpHqIap8WsYxihJjtUkCe+oD2f5m99byVyNm032OuHdZrbBLTrwa0rr17gaJA/pFB9gCxofNHL1rOP6DRXctSl2PXNxgWd1fwgT9oXuAftsav/dRu/RkwxFv/kOcFSX84vB6asy+NQJBqQpW1a65hQq99gev5Vq3gxWXv0GA3tuhwq4Cl7UGtH6vSL9UmUWOTKSWmc42FoGz9vZ+faeN3GKp9lp6Iu9uH2ihddXzifHnLKMpx6vJgRUoHvrtsFQ7USNOpAh+zIW0I0x8F47nJZrpLlDYhPK+dXkdqvsFtvOo1Aq2YiFJ098ANdYxbEYJJoFGPz33pV/c1px2L6JAjKoUB2d1xlgikmSjzbwDaKxsGvFD+Ttpb2VLdcG+I4UoyHMTeRMsyQyDeQoijuFUfcknRBPXmPCaEXgXkQvckkzeS7WycIue/HirTjjv7s9LBPwwqfJelQpczHYkDOipfRqljvR1VfV8Cw+nXMEqeYs2UDy0YIm1Vrx6Dylvnu6jxeSYQrqKuKNhnB0eFWyMLYK95pBNHhSvwM26e1NuW+7KcNF7CBdoQlCbwognEW5q27w7pVIyepaFyQh1BdsB7ALI23CQ+0ZROyTucJsZeTtaHueLUxh6pMFQQOmp1jM0l6671EfYTtLCjqP5I1Uy5wkM5ypRs4AQaekQvDme0pa6RO4aQbrZ1dba9x7H/+Bm8rR+yU6VxSKz5fsHJISy+ufIEl8xY6qYClQSw90L3QoA45rDU9hC8tnaQn/4Zj/waYFn/GqkVnCUJpAroLNp3Z1rGcl0ufwAxSCAbJsqTIjr+vHSCbNCfF6HUJHuVVhNuza2neRSXh0yqrgAW2v7pec5n5ppfLWv++uTG55K/AX64c75o9HjRqwsrRR1si6a/6m0a1uaGpoDmSB1Ltrg6HyxAHsk4HeEP4xwU+cIoEnOmP/ra/FACUnH8TyT7ecdIRu9565uQT1ge7B9V1nAKoHLm4jWyjN/U4mC1EJtlvR2vxKFxLBgo3qHmo+GZd3u1pMxgu7Td2laaWU4VPG+1OCocX9wJkzL6OV4dt1xBAQvVywZJP9fYBNahwC29uXzQm5camaJMe20JwTE3RStvz07IDnG6p49dFYVQATr1I/pgDlvitvFrczXPiebVomR6qTe6KIxpSakntweItA5+U+9V4bcrWNYGAiScdwFmYqB/eJ+c+TTc0ADKs3DHSAVShJLihttdIjZVJjxxt2rWEL8XO8/lFtdE6rHognO/Y+SlySTmq3WOI/BVVx6fwxAtirZgn9HPdPBOCppZLMdHq+BbYeOeUF3OTSXiTtC5FdQ+8WkxMekVza4XDeJxd8hbf4a2C1TA++dftNpXxn3QjJmAIz1fn2rggFNFXUqcNUtBs3azickwDonkA6qOt0eNjev+3Vc/zDgqcmrFTIkoyspN8cQJarKQMGD8QIciZhAK6FdXPFWK7+7rQ5aH2+XZYkfV5Z1f1XKOibJpMlFGJ3ABPPuucwe0zW1pR8M0FwJYgiLMbccD1aT08/9SESvpsXu9pdVtpE9QneYDIJc+G8/WVVA1sdUxxTfKOGhggZoI6aY/hK6fNVc0eA4nSqXy9te7ySWDWZPfgveLibhm0kx+a12MPfjXHtZtZVPrGXz31PRNWwKKdOEFXPlCO623oYr16BZ1vrC5zTKmu+9cRRqzvxxnjC5As5onvtkoemEUYQRk+4ujOqVBeRtdcxNCVGS17FC/J53kpH5OWSWDwPALMTuXaODhpkzV/Ei9bnkOX24PGDAYBJaiRok4wpL4TyJO3yhDgJMWz2Py3lCgL2X5n/uFOOPzjAFjpgEbKvnH6kDpeD2H+ZLql3ed0cidN3Xgg4V1ZCo2Xob1ZStQhO/JINmEHcCqeDaYCVYUalE/fw/anV1X3fdNNsP9To+5HzHA3bjjhsiE4lJ0l0cC4Evgd4FakC/qRcYhCqKIzLeZo2HxloBkrTBQkl3ErmiwtqIKpPKU4/y7ZkOd8C16Vwr9TJq4oIFbcjsfvA0QcTiRUMb9LXSB3DHevA8ATqUkpZNqT/34uSp+hFrEs84OpiegGOOT2OevXDjlHSvvUNyjfck6tSseBbgmDTeNLajec7cRgtZj3wnx7A3zOUFRcCR1EksbL+mEtpHd8H+bk86jMCZST/RBCNFMbtTEsHcxz10h+YjaJJJ3mlq4B9v0LPTMWKRNZ8TO3nrYLdbxzvM1KgfCwZIfkvxD1ON5NGu5IlhwsTQt++YzxTtD7xZavdVV2+G6Lm9r3LHNa5fTpaR/sCEZxS4PkEndITyptl7D/f1p+qkikOS7ilr14cxh0NsJr4XycCXB6ek5XlOLd8MWU+ePnZ3sDFNEJcss3KfrKDdaT3/ic5UYS35D9adk8wan2i6JDKOiqPXOzuC4BHOiXUNC5j4fhSjQ0Ev7y0+9TlftTGk16XAOlRiTNaDpJ3nBBbBXT7k2hym3Ay7M99fjRvK7E8ATmqVcxe+dLp/W1jRs+5fIpXgJDuO6ptKQeYqLENrrOHbWGRlYmfL/Az2dIg0Gvk6vNJDOCrZp7WzzZD0fD02lctRKNA4JyizAKnCFogNhdS9yiQw9dwYnLhE0L9Bup6d4pAZy7gvjXW4LeKpm9qDZUvIzoK15f5xdZV4UotEW6r8tkb4ZdZUw/VyJUiZELuFm2J9s428aamaTSvpoRhdwDKN7Fcc4lu5KEYPNinqr66LixMU68qKY2M2mCV1jEv5S41C6iLc/hakOKTgaYE/DyTQkXLbndEljdIifBuHNw+enb3sbxXjQpt6YpNqv/YQBXJk2wOka/kPPazhCa537m9XLENKEa8e+FU1qwohqNwJbCvvIoLuKduTEXFJrJbZ72t7AkFezC5DQOttBOq9mCcTmletPAtXqAl45Jc0f2Toz6U+/2RwTxLSxyt2mAsmK+bcb2xfgtvorJdE0lRGzp78nerKL1Toq+0PF5MraP5LYbrvEy9ZEZ88/mLip5YjDu5rNSdjrh2QPDTeIyCu5pHPBlkZnkrt9n+jbYA42x2JGdtD19GKzzbElWUaRUJFgYJI1jYaFwFV1HuUeufA+vgQ28+9+ZjTfweMblvn0WhjPByNh3o6E27zc408+xI8hP73+ZhuB0h3fUXPcyP9NEVr1WzAuZssuPNsL4FroswQ/1Op17s7ya4STyTWXDCfN9cI/oZnr6Q3vX1gUMqsdt40oqIj7pZl642oe+ON7jTZIpYHgK2scTR1dkdOeNgA/gnFXyObtj+n8bP335bBsocNzcabMoZI7vaqGGi+2KwLuPhJNED3euRAu6gAoXuTEO5zQudZTqLCbE7cpVanZRhbdCpMQKTB4Y1CVoLc1D+nTgMqufqB/V6JkfWQR6nQTRDS4y1S18uvOH8kpA75Td1xEqd7X4hJc5Ll3te16y9Nw8IenIlJGgiHeMPCsmwEcSyv7G7/koetII5otR2Zb3uG2AscRDN6+yCnTFGt+LtA+JU95BhPOLWp94CN1KZTrBU5wYU51zoklTRCA/tI7BApYDxAFsgKXzX7HDrvx5UkFp2tPDs+3gO/2b1WuctC9PrjncjE3VYETIYG1DkfagFP+yJAjsALOBjxST+aQ3nITFH1flyl1Xooa/fISvmHmKD+djyQ2fLIr8C6ofrQgY2yZ/JWfTVtQdmZwp0qgMz48lhfG3f1WWkd6mQmb8SCCoKL4B+lGNmZhHvn1xcfDm0kuniAhNOYHYYEhQOsYpdK0jrAwRhu9oXo5/kuqR56yDTJlaUomfTM8aS6fQ2+KanulrE6gzNoGvstgZhGjBYNFYhayMA53nQn1isUmfxf4/NqAjib4rvfoYdbJvgZN9NjaENIccXupQ0aFWma4qZt1C4VJKWMpUpWucxasphy4uoKTOdSYzcD56G6zKoNN9gxcjR1Y2253+mjXnE1B6/EFvtVI7+sEMTYmPCO0llroDfKSaWX4v6WIP7xsV50SwcedqWtZtQ4xGh6kIxQOkDqXgKq5lvGk8LFr7FgTDpRrJbA2cQIvE5a4Lk5WW1vS3B0Jbzpp74Dyjy5pQuTgY9n9FOIrCeTeo/jhvpUNnYWdstBpp32vu7xSNDIbXv88c+iz7q0ai1n3jVIGsrQpFW2X4IS3Vp5vNlxpx4zuOddtCBCFYR7Slj4yLb0qy4Nsi2Aery6PKhGqcKJYY6r8ep9SgeJo3Bb/hVhwg72PyoWd4JbI6DE8/8+FM/JGKch+wWY3m3oSF1hHXaFOnPWKOlWXLhpIZLZlUgRxf1+x+kMTcgSP624NMOd4rnWmty5/O7IcvfAdNcohccfa2f7KdEn8d874U/7cVC822/v6nbTbIZjHPb9xuI9RXdKu2d4xgb0+wQveNoT4wtQskCKvmZuRkYW6H/SxwX7eIdMxAJugp7mMjp3LOx0EH5+EkzNGdDu7ZWbIr3zZ9CwRquPPcCwFXPGR6FVTYLw9u+xPom3A6FVI8roY5+w2BUusNw8NW6fbndwS9qdMIB9TB2qCfOna4Sejt7exSLbli7dUUJsKAVtKVVDhsSOt5UxrEF2Mo33+M3MJsqnFmbSTkir/RJk/bXr19LngpIHkJVHpLQX0VtMBzIIQ9Z1NaYsctdAu0rED9ZW5ZyR7rywGFilehAdRidn+83R4lOC5/fEBDRx053wFbGFewWMZ1c7RkjzOqDyeW5p9h+y6fKNjnyUoQG5lyifKiR58w3xNPoNcvVgx7YhK1KsFNIGFn1JKzmTl8heqHYQyILHMENTGmL8UkQzKvluhxaF0IpG+3KqYzkauNdgQ89G54HKkW4Kmh2Ik7qDVE8d3Rltuwc/WNkqvbJIT74cx9HonBQHKrhIn2YzhygSgwubRl/0pcenYNSK51eUkhK8IFsXef5e2w3U+tGEY6N0NUZVygf7vXHcDNnPBfpMs2F7KWQSj5GpSU9i97eF86SFdHdgHQfBJFZZe1hdXcvSWtDOGehr+nrqJZZunI87TMDARzBk7BiEC09pdqwFpxXLZ0MLt1H7+C5Uddm4HwZ93nFWoFjP2utLv4w1uffY5aqFUnbcgN4DQWqnhGBvq5NFlkuAANpgaTecl898VWy8PY/6J5VNLvBFe0ceORqzixqHISNGvPJK+hgUxxjwe0UU3eSRbFYr6/0516/FYqWkfJgqELRxoxVfqcVcAiwUD1DsXNPloX8QqNNwioVmaiEQs//V2whbXD7UvlbbWF9BeROiQAoX3vRBuEhRAA9Hxj6qJTMKBCPtaM3OOQ/O+tAQbCWgMZ2fSZ3sGVi0kEgf9vo5oEYElg+TO1/DQF+biad0/y2PKNQGxLCPStVXJeRE/87nGmaB494Xsxe2aAGAvJh3lngyFTOGqn1nEsXaD9Eij5wb9F4b/7E6fNruJ1ZWRBjYNsE024x6WWMoDzRtU6j3kKhyj6JtPXs/NIeB0SXwW6PDkJ5t90d8bOJ7RwWSDANPOP6i0OSWSny9CkLZfHqrRgNbBpDI6FQb/bvQgUe+f1HUwZJetMF74x9fY65JCkts+44V9yJs4DmbRX6mxm/uKG/o1OJzAgEzDiXW4QuKsmTbZmN8AUTIdLdoCMWxXr/q5+mxzMyxkcftI++3pGvlBzu/vRz83SwTIguWkF9yZlj+0G3s4Ujoo9quKjJ8DyjNol8aPS5WJO+SW1jTJ2Chm6+bIYX6RyvNisP0vdvx89olgI8I1oNliqVIufyGcC/XQuB21Nkx4WVtSoHKccvWpTmOseC0nTyQWuxCsuF47mMw4m7QMJlLiD/ARTe+7QNLHpJ8QU7H6uOrZMKqtWIgloVV0VgJ2qr4qhdSPReKmiTdOJJ55bSJkJuNkjD+Avel0EZj8vZkZ9ZGx42pEYY9XeEsx3lP1Vik4Ax4SX7XzwO2hgNqG7Y6tLzSlwIg+o3oK9VRZI+iRE93CXmXZNInffTz5nJUEScfEdn1wwhF+ajeKLnzg04PpObeiaQtYGVC47QWVs0uXlANCGEaBoHURyLp8gL0B7xiOIuKObZODRQW822MfHyYGF/QFAAIjvLev/Y566mTh7Jkbnpq4ztj5DD3pN5QLux7U/HW/Su7uMvQQ+cmcU4FoIqvBOv54UnPfEfZRVbhrNXJBftsvrAtxEKPwd8ujhwtaILPlokSdLn/k0ysu1JJUoh+fUMBvkmJ+ixuZJN4C9fQsEMeLUwqzVGqyyq0mlewDgVA5bn7p/PayrnbPRqg1adfXfjzHg1ZxQ0PheofL1+pE1oJYxCJP2X6gUlTgu2rNxseJE1eN3kB01HiqhIvAjd0ARSfeso6STd0TfG079w5WrR3/g7Uzkkq4kHn7V5whxmzYCpe9cWD9xmBbiS5SdswAzKz7yXgODO3/6tlsZT3yvex6faaXtPpyF5lSNugHtZK+NLSn4rRXktVW56TVKe5OTtB6eGTZe9R1FUaoV/qZyulxLybQIQNQQkobw7Huy+ZlGPbCTz0IhJOj2IZsLIHLneD6IX5dxNBkdJa8h1FZCaTy+t6V1EopJDhhs2o3Q6tvS6lccqFfEZw36zfPUZRrZ8lT+NVdVPglyCt7H93AZmZV7FQjUx/I1Z30oKOzgGIupPCVbGFkdAF5KsgOoeEXms7HuxDdknSou93y89YAjrlaCe0IvpIXOadENFLxso3AAcKd4/lzXYDrXP6oxF4j0CCiVEbB8yoFa+awNX28y0gng8OXaq01lEuvjqMEmRxdRE8YLsAQCuZGrNe3DecDkJtAssDgnWjl2JE7CypRXYcNFX5UGvKNgIha83Cbpco0iJeYR5CX3hlFolpK6ed2xV5GvKQgbBmh+gNjkGIBihAEI/pXyOH9kcoC2jFBPeJhiRrqwO+poUEIyg5uSHc4pQPXcpopv+9ACG/+9LU5oILTqcPGC8dXAE7XN0mYYXrYLiZStUjpqIJQyHdXx8RFtgV4hRwmq+MGg1S7gu5eTkjD3iLj9i/07IeIJcGi/2WxVOSOKj+i5kJPMzgoNQFOeekaXLMkioTaLOkm5SGPZelvA8qpgeMxppFRg69rexMrhJZCmwPy2kPuVd52mT8r7MHY1SqEr1aiLTe8XytcvH8HF1Wb52WctPDYwXI85PTrYcilBMBDCljZXeGh+x4nofYTqKFdKaqysGBG7ImiJnMTNJb2sSGvVphmyGihu+fO9XKSaMjIln45ZZoZS0Dqc6a6NS6YgYAcf8gc2inj3ayYfpyzuOLTwDLAlRBtkkjACwMAEZFOYqpYbeNjVIwvHoW4bXRoH/TI/NDgwuWh8ItScSnM5bE9e+ScywjgoHjj6T3SnJuQSUOLEzHcf8RCCV2KaHXwfeEF2kriFOYlW20W9i8mVnInuC4KaGqH5nMQnmQ05Q2cgCwwRSqxRB2kSV1etcIX/rwYLbbPnNKMQiUPXrQPeGeVP0GEkHFdFwREhjKaYw4ZNx5fSsLIRhIx5jQYo9TtNtEFMqExmk68O66tHLXoEwArn6LiiU83RCmQskZCEcdqNphJowQR4AGYg+Nylqjp6V1vBZwWFBb8qUVLoKk22TaeH4ioqWvrCWAhBnmAABlbGrR0IXWmD0/hSnTN6dXIYmYkvy8vRW+Ug/oz4e6EZ8NCRqMkGjylt13BzJlCBXdjikDi67wBH2qVHZ+NSDYOfl+HEAqqOOhxMRquOPe2bsX5B1j8nDi7ccnnIW95mD5D81baA5K+ghv8AwZapnUu5a50sWQq78vaDUw9cC7AxZMqUC2asnvNm7fKYXGOXIFhsYJt7qh6aLb6hTk/zBV72sNKjVgLM+v3ggQ9FraTTqlV6+F4sH7zPPlB2NGNTsFlq2UlCwgJRTuoaUe87iwPOxRRulZfV+ZJ1kyMmubWjKtDLT1x5J/1h085FOnYl1vzZTdBYsWf3OvOZbmeE5o/+/SWOmRtRIM7pAlZDQs05LJSb3dr4G7zznU4Q8zngBN0OarE9RCUh/aICDZ5jXEqExErC3qxc0q7XrauVgH4KkT3iXTwzfLWCsImSBpzQ/jyFwqe9IJRwMupwPHfrNgBkltYaGHCG4XRJZl+VcVR+y2b6W6/5L/pDoGAys+GFFCfCAstQy7+FtP1PHrsk8lQ9HG7GvuTj/w4VmueBs4wQ2NkQYhEm+C5BesBDv6jaOOLTe+fz019E1juAgIxcKBziu8B6UgJVtTB/Ocrxj6SiUEhczzm0fYWiW6NlF488hoZlSFRcHR6umdhs5pp5JcnSpDG35uIdSRPQyHFk6g3qMuA1IyRPMI/rQwH934m/6YTEB3UcIfNDwJBr5J2yDSlSrrSlzZ855fzd9xx2fvVuLA/v2Fr7Xud5rxW/sGjkZ7Rvf2eYBqA90EwUW5mW3X9OAJT63g3SoU+ruujxkhqcmJjiBiebIgpQ52Hd31CqEmzmrgOpMfeaKt35etPA4o00+FfbOmjx6RqPu159s0RczhnvkoLwKzZPGkExZMrR9R2PYpKZ6P0iUEAbUFjmdRBaOHe32McHur87UYxkde69t1etpMODqyF5S5zzjcOE4ec1f44mY1xdUq/gn/zd4jiV0Uf34JdmLilAgUYQWJaGkSino2lijygGx4MMy5MadF/zuhao8ck5egrwzYjd2voweyEP/rCWL8m3kuUWyGCnOquUZLkGs077C2noEcbKS8vmN1oNmHuT+VJ0OW+O8EV2Poww6qKEP/4/Kn5AD32GFYj2xjFZwuwZmT2DccHE0r8KZb7IHsKhAJA9G8alFSqInLWWnub6giW7iBWJlCkgyzdjOqhRIgTWUMhSXeCrDBy5+NjDN2yKBRpZ7GVa0Gmzp7U5lbqvVASut5vSZJUsmSAmSUyxEtwKTBT/nA3OIpnAbklVIRpYIYBRcDWB9Qm4txAlX9ozfYXnIHAJUakk9Ow1I/llcvcQU9nM8uOi/8FsjieuBNslMSsy/u5sgertCrLNK3451xVADqk2FBbp7kHMn3d1L2SQPmeq/FffDlvi15TjpyGwNHZflI53GaN1B0JQqWD170/toL30UOSiy+tehz3A8htfBN49cas9vGdXssgtsUXajIBIxLt94QuUTSYYge2uqO3zk/R8RRrrvJ29gg0+YzZ//K2ptopIvg5PH2ridexLTsPkq4OJYZmYzbJ/VtRXgZl74uPibwmUyDtApmUiFXd0NMDakR4T5ijt35EVQs2XDnXl97/nM5+zkPbgG9V8Jwm30IVcDvdB9/39H7Yuf+CyNXnDshlkghHYbWQiGmufMmYmFWMlk/HbE91i6p3sbeFq3SLL1qUlrco1DgkpUrA9bclj+fTfeu72a40ws2KQ1H4CAKx/IqX5ddkfMTgTB0POTBtMVh8pZMb1HF8zrp85ydJ8kU6eKDbiOByB53+waaxHwMIh0sUZDAVX6D00dNP9VeANXiE609+/lIv0MAHbb9yL6LXE+kP/83H/wFYZk2GF8DQ+7rH2zvJfyYua3x8kqxG9Pyh0vPH4jt2TiZgUgwZhlIAHZBscQPjIQ/fB/PeLOWSaB9bdRJeOnpb268LC7HkQ8GyKc+jMhzWunseKtnSQnDH5gH+BWj6Yq41nAoVc5C0LEGRN6FKrOkuE/tJ9hfB1YSz81LHnFuYhgFbHSgGBElBZALoGtdDFvysG0eNyZGPEln3RNUtUYcrRcCrREGitoemLxu/oa4m3vMUhi40u7QLqbXKg42R7DHpv8QUn3fvyHxrO2yoEFwGEfd65zhOsNvznFod8h6YfHqhS7BLftL/zKeelOxrZ76oOasNN8PcnSkGOVhrOChL7nEGzwxLiKzOuD4srP97Dpj/Os76u1FHNnd2NOORQAeiQi/CVlO1ww0vyhMUzBPfFUJhnGjVDXHZaHxSCdpB1hUi+j41MI+k25fsm4wPb4bHpW4gHnYy3cGfxnP83WinAz2JrMn2sN8BMTuJAm+sUsC/L45oc923M+p8VQR/QE9PYOZPK0UPT1IzkWGBT16SsK4dei8+oiLYhhiac8dK/ld8WykF2lEw30cGkJXExhjJD6CbKH2qFvVQozvnF1XTpXTD1kIG7ObL5DPIOXFCIyD5uUraUlUv/VFYcdqenBkbybeNiI4Uw0A0ODqsrPgd0COpvImx4E9xpIrH6snCyGhV219TqRoDB8cT6mABxKWnEmE1qQB0EzKFpefPUvbqXMlIUcGjsIcZYrLLPXSibTchrOQHJLroLnEIKXyJxXzZ+j74igvLA+KDkgGIkSNSNqMqXEdFXg8g+bhRbLwR1oFHCijOJatlHnKYC/SIQz9zvhAxWArDs2lf7myRTgHGiSPvRLZrlZOIGwmppixwS5oGED10UqukrHtMr3OEnV+mqbFLX9ifFskh1K33XEe95+o4lWe8E75rl8KNevr+NuKnbXHISLrEF0v3WXrmI/jjGcPuxA/QwR/QqNpJEzBug6/Y6egKBbQLHRrcZCPph8IjzUExXu3yC27ySE3s2VzG40EKA/HueacLonPNiGjBx8VEJ4onLUpuvLBoed2LeMtS0E9wo9nnthegiuOVbavZSouPs/KlfFzQ1tMgDMx2bPN8Y2o6nQzL1UdEldWs/p5fZPar3pNAF38rckxd0BuQ4Ds59AZVP0udJLFuQyE6vTomr5E35aQbcDety3YfKkrYG54X/KR6RKJCN5uVZy3BK+oSJqnfjmCmKHUyeOOy5SPpWzpB45YCZvM0rq8XdW9rLqQccWBXF2YV4MJW01BxMDUydVjqhMyiKb1R2rAKy8cs8iAQ+rxRdfRid7zXkWKB8QmFHDfpNtjJh/3XGTdAMX/7tsa2fE8YsTp1tSdrDuR3kzirRSHNA2QqWs082+QNdyci3F1kqUJ+7ot3saECcXlJYRPy4X8SXC0udLA5YCEg+JWyDeh/yw6h8r5QmRymons0prVGfBCOqsjahQx+7v1TwLHkuRh1VCky0keCZ84TVEUJ2raLMLgFjgTGei2TLTxSwzNQIBr5chSN9FYQK6EIFoBsW11j8/pr7I/U3iW2tVFXLBBn2ENFFB3qXu5ya2GgkM5sre22agUnnyw06jy7MKG+6gpTqetw4KspDHbG7rWTc5kevaGrFrrxHPDQqWcJVkv0NqtWTG6aDiH9tjyMUvMQChToKi1FaUD5vw1fCJqsHMj/Dhqi0p5mAt9aRNrYz/LvodbJllOwEC7xCkHPsoUxLwhhBwk/GHtDIq5IRHvsjjXROsR+/EDMuUstrwTPY7uLDf572gB7lTrrIeooC2CSUK1iLbCmZzYNeDzWQeabiG7rEwEsUUCJhcU72QTfXWybdt9RPTeMWeSmItzmiZaOVjDeeuX2AlJOvTY+8m2hGUsm7x71c0DGbY9lwXarxpPUuOr/2fYuqiwC1g7MuRMO1hfl09MMeY+sOZRj7pfE6c53SCYRUH3/ajfKvIhGu8S3ulEyPp3ydTwVSz45cbmjIw9VMh6kX3cV03rsRCUAtraTLRrQvGTj8D96ZazZWeY/OF10CVSxSueFJqqcm5fAM1XsqOb1pBdJiEG1tsbLSS/J6XxpuW0M8I2c18H8AtUD6f3988sJJxNoNEZqO+PkryrkvN4bdcYMivKZe8nsXNHJvOKS37JCV2hxlXXaZKBf5lfbnqomJAu2/3+QbNRleP4usx7Z53a6UN9vPPVwiIUZP/N5Rh9Ms1UmpIu8KPDH9LWhU8SHRgplh0oS4m+i2gs/YubcWIVrOz0P5OLroh9tygWUM1CoLMVnaX1p5VdL4BPBOS//OlzizZxBJLxoaKeuAhQV7nlndvB0Fc7kpfDpjDYqAsEucg2KvMt+8xKa7KQLIcJ6FXFrhnHJ502Xpn6zv8f8z20oWDDyYgP7f/pJbZn68vZyals7NcUmzYvQCgAL2bIGtiDkGDgdkNuMBQlrF1vJ2PI/nUd5/sArv4MIycowF5sExKs19IP8/tqlr7y2VrVuDXTFlqYT8CJPU3Lx4C00ugU2cxGdep4XCVjhzhgjV223gQIoylxuiErY1VW+tjjhoKdMdfiidxfJLDxrMsm6f08e0c5QtCg0xOyfkrPYwrDrzi0QOFnR4X9AiWo3hcNAVCCbg3GHOQMjxNk9OaoiGaGyNLp3o9ntJVsfcjlFqkV1wH1pl4/RDKFqiqKJwnoylnuGFTrrNXlQrZQr0m+0zvVtfWTTPKZYwIzexpQQeFnloWDPygoMOCKN82WwVOQxD5scKIe22v8LJihIP6rnuvKsfKZZrFtN62niXtNS1edJprqaGhI+pNZH7j0pfAVG76OoFIKutl/aJDGk6XCN7Lqj1OSod6I5oCbhKV0bQ75J/ltQluJF9DzUudVxiurZmtXx7hbd7kU8cjSXNZlAmhrTGLUWTgVQ5sEHMFmq87TzQxEvblAwWZzsewRyF4rIfBsvgRu+cTCiKVG/aye4Eup9NV5PAPQ3nhUbiTA+8copO/FMItCwA6Fb7p+JFZxQO5r3yRulsY4lb8q3gBaXwgNj0FJF96JvI+0Q5Pe6aRB6HJdmo2Ox3M0c1J3qtEfZyjjfW2xGNtQxZGqcHsw7ZKSYJYHEnF477009tPKUxy23xfEJ/X+zC0ziiI3Ceq1WgTKjPLDDxaASlcHoKvJqmf0uPgBkIORZaWx56H5xAu+GJfoHrjTMK6eovnkqkRPQYl/px5hlph2/Wz2DqOpnKDCKdH7clgsnbbDWrd4Tboq1LkLZHuRQKFOHszrs9F1yjYHQuvg/2ln454umBfCgsdGPVRHlJnDcTWvwFk7xIh8xm0jktSnOvng1IsRYO0W2VGcRi/JVuvOPgf/uNzm0Q4Z8zMDBkSA1CO84eSCGl7RIVbKp9+uLrWi47+HePH+3YAqTj9tmXhZCCHPlbV1jxvVzRVQaK723vsnQXIa9JRuDdx3naJ1r6CrZVOL1l2477dBjGNvZiGCadtIpqHxm2gAahkp6Exlv9Zklntnmtrgjb3tMQPMwIJaKkWO9JOA4lKVv/PoD7k4ixLL1wAAOuPzd7w4MgsOdRo6laZvxBWs1nkIDQsy0BNOfP6rQHahf9bJk96olQPEPNfaKCHLOkKXqFC2tJ4x+HJdOFZmFWWxQyL83GPBZaEnN0M6N8e6Qg6muNuxRFGQT1u6Q1ZcoFLI7JnvgvA/vowaWAtg4c4yIm2srYA8SMPAdttxfHe/qi14Qi+swwZZ32+qz3lewZoKO+HE6lqzAVzsBQQpDslzIAclKwNEKQ+N3hgRnjRk+RKbRCC80mjsYcSEmmbJlOuCDiG/Q9HZ1wh0ys/6WWDh2/iu7NsrtahxxgZJOkFvzsvHuQs8OBt6Y8TNn5CgamQ+oFQqdK8cHObrKpe1Cp9gmh8DXbMvSPT47x2NEortXASntNy1lUe3m6DtMAvuwddx/NaglU3aTp6AIU/7ntqPFj7JKF43/ZBMyRM5HRew612sp5zcfGl1uXde3+x2HL/c5Q5VKcpji/2nPQC/zfmAV87h6/iEI5+9sIkDLaqxmQJ5R7P2tuEhgbuZ7ituQjRw1YEBRHkpKrqvA0k5W+pavCfAZOoIWfv2w+KirMybbvaV2veg20Yv1ilnYD0SOK0ALABa3Je5qWN8UmNqVfpDe294gX0p7PyM5qhFknCpMDvl0zr9XqwSGZWC1jVTkTBlRjnHUGmCQYxaw66kANxWN7gHheUMcU12T81HaZE/fbbqeqHA1dZXiIXRbQgTlXS712ar790LYqGSomPWuuIYv0B9YLP/GFmkImQ/5sGVCxXKaCzA8vcNceLOlyMH2ONAgnT0Fd1If8InLMcMn1Jn10npF0goy0LMJzmaQzLYpzxuQz/Kh743Xl6holEHQU4smalwl52PAU0uiFZUfbXShTs0cAC690gtFJoHrWFYCNav5KdMlvC3xywm6Kfd0ZQpw4tKc8HesbvKMEcEv7RrIS7uStLmYsiz19StbUWLnXpyLZmxXnVePrGSivvJnkZ5dhgfWPqsZRih/Zq6zDAMjyURU67hXHZaBnpgAZzGXaumoulbRRK5ek1y18VQ8A7bgKH+fEastXJKyxU605wBuOmKl8AcEpZMfDPaNFKfxyZ6uH5LFzhYLNo6FbTvSNgb2xkRKJBgaPAFwc77XZnK6PHeiUR2Rp4W5Yf7nzdJitJ/MaSPou5cip8PJkZ5Phe0Fu/4nr1cjKX9pSV26+vuQXMZDjxnt74fV2AiWV7w3sRZ1qyET5bI/KNqx+G4yPz/yAKG0ZSuX0Wwh5iEee/1wUoDyE0doNYVhu4F/A3mToTIi6Qd5jQbpvNuDKDDfvvMxl+Z3CB3BgyNb+xQaUPkZBUALnNvtsbEURPMjWHl8cc7qj5BN+tOoogkP1Ib/JoFe/6a0Ii7HA+DxgRT5e0CQT3n1KJDSUaGuvndRemuF8Hl0Pr4kM8y7LfB/eNf9v7RACAiO3MdqfzMC3PGk3jOImv71NHwV4z9RkSlGRUrhBz73I+sTwI0PiJ8dBaORhqMhBsPKceh7O6c7lARFjL4+Z0qRPs7BidzeJAJXCLHj6OoclJJQPiMKz5VmvxzD+KAAG4hmeYF0nsHvVuR1hrDoAv5zRo1ne1tdKUt0AAAI2oddQ1kafTRzyzVbFYpZfP2Sg2r2GG9BnXRw6YVXcX2tIEk0If3ucQfuWeyCRg5Owyc4UB6q5eVhpGuTLSl5v3EQdY3HKxNJaXHyszHyWibML+EVO0xclxPttaNzzM6IXRioMFILfvAI1bz+xy/VARC1NnXf89QfjmET8RYWAPpnjEZyVw+A++5ta1lBxxZWUQATK0q8qPdoAi+g6NpDKzf1vQMDIg76cHymaIiODNKE/J0b023FB9XTGIZliRgm0mjy5bycWLxwjnQCGhaf4yZa9e/k6yAqDMQAYkO0DsyqJrypyuzHtfLXbQHWb0Okx70HP1qILwhocsquc+9ZpMK0yV7kWO5MlKCALjUWhbFi676pUyPZJAPYtQB/FNykhop9oIlHw/i9VQwQ2gqml+F24NHdcDbm4gtDKPxy010Xt8wn/NceumfSwM1pxVIkgrxdp+5Owe1AfGgb3ynaDYi/K78hlVyGpfnv89okEZbhJOgnR/gYDEX/jkln/ufVG95uPRfhmP+4qnUizUXXviX+yUzmIxPdxadPzxk/SiFV5wFGNWgzm/p2/2fwxmh5XoxpWuLxFhDhZZTQhJU9/ozsFJ1dwmQthGtSkv2lTBKIWid3eym5FAiUny9P2i39+HdK3LPbud2QZgtqqt0i9NtYhgdOedVjwxzCBvBY+fWedaQC+P4NDRVFXjrbfWLAyO+69USKWpB0w0zm7d+T/5T36/83wEarVfvg1H6LIWDv6uIHXFRI6C3DKy7/DJ8//OjAQdEDqBFpIryi5IuuB4ghyirPYpbYeMrDI94gCcdLY9utcT7bhA/Vof+7lpfj1bKb2eSg0CL/RdqtiXobPXB5sz/Bn1NbfhiEm8E+5dCJ6+CuJftfrGKWrMOaWWm+LfjPHcDGKpvWp7n2Fzj0ryfujyhzl8me0EkO/aXFNZF6r/HfjSWSw+0mFjvyko/oerJj2/Evd5dPBOSWqYe2WbUz/pev10Xl/VzeXDCFv4LvFpUjx7ETAun1Tg4Gt4jNakNwkR/GWX0jMVmG5f+U0gSkWIYM8OATrsPJ9RjMENZWP3HFQrQxZA8Ek8cvk4o66mhWr3l0QUnLj2ywfd+VLr9Ez13uWy0Mx/rwvxUnlwiJQo+/ChoDYz/B/JPWcT5j7XMp/uiI0cbX9J/iDd9SiVXtM5fwiV6+P7IgjYFsKgJhKuCU1V7jr/V60habWlOJf9HpCUPXp0BUHDshD+/XXka8gy+wspwl17DaaO9ysQ6vbNxhiI6sQs4Vv1LoXMqlOkRajyRp5XRWCinh5r50+hHs/it57hyK6uIym37B/dGtTzqw/Q+3q3UB3RR8T/tOs3GyAM9Vkah0ucTfhj5F0aRkVi/o70OsObOEmYKSH1M43+oir/n1lkjsmxSxJ+vfBqI6UaBqaXV3xq+2+iDZfVFdFQRe7283v3p3hyF15/yjUUidmP8xCw5bbXRe8RtMdRyVyBZ6tVwa8saBYsi3vcg9c62RaU12lun43Cg3uzccyflWfV08NKIa0CQexaAQSNBtGzw8T3ub+/zEdNQGwXfulnbqwoEw/UXXvFgTocgiCwBVGED8Woe4c+CQ9if8VPCnE4aGpuQan0zX+ao4ZKEyoveWOB89ruM37w/nF+9Yy9+TaUOiyt5WFjmsRYPsR/7hnaq3ilEPKo3m5hv8mue8DMUJ/24nYQl3vUlouQPQJw+NSBY1X8+m/RQF1xSBr020YMrVCcSfek3hm9VPtql8jw2OEjwxioMaUhOxXTJVvRdK8vj/zPeQKSXZvM2chiCBduSx/AX2YlxJ+uSaND67aInDiO7xdewCavfm15YNdlTCyQ19FH6LzsTqHRa/P7fEK+PZ38+B6AYF5V2IklxnedgYkZFxui65JfbS/j8vqPMZ8qh31jm3FA6JlnFK9KfUvnyM1njm5mGpdGumARbEJine8CHU7kUN5kdxQLM/ZnpvaEjz3rxqPbqNmRjVRXcECH3sAn7xWjHnpc7LeZ2WF1/vG/TTKGbe+Bnptc0vZqBTigt++gOYPuYtfOF8gskk+ajNxac7AX66g0dS30SqT8iW53GPI2hzO3smemUKx/PcsoPQABq3U3T5trEeGaqfhP992OM8UGluI8KBuRIaUPH4AbQYla4KyZ9I7PXJAedLQYYb7wRNWtnxlJ90AAC4Tx2/pMvdQp3F4vMXyf9ZISUNu4Hw4V4PsQtszjIqC+dxDtfF+FX7kkouP4E9EQkyjT1y39upcsvSBwPYRHSALnmUGkyGrWJf6RXQ985b8gYwrz/zPkhqcRVW11oYavr8ky/SgjGi+vMmbWIEto8/dDkU0cY1c1fYmGvy2O7NUqYgIQS5AfWR0dPsgmTNouXotaQ3dmbTcVFX/ex4/yaFnbjC7FkzxnrRaGZPXvkjc8Vg+cUoURcJB43QVxB9Xht1RhoamHVHfwAAAAAjfgDqxyZ15ltL06ExloThHDENUV4NywGWAKphwInlzKapDliBeaGt4ixKxBFwUTW+sl8ltK1vtRPVa3pzeBsZd92tDfScfMXd7NCr/D3arsCRTojVQvXBJKmuGLjxet2ZScRNQqBuxAqsecySB5WrcW+rgbGnumyjZhor8Qxw4hEOXpIZydkhv7GpyetLcFziS/4jJ6Kx3hOYTZoAm9Dq45sOTP/7tznB1VrjKpVYgVn+2VlcQkesoLHl4g8oyzYp7Ntggn46tguEABlc8O6EGsdIMDBTZrLysWlNIUwbeEVB2QPHnRnbCtJz/bIqumiq3Y+BKTBqtrIJvX/ndz1qN3xlN6akYV0L+b1UpkfvYnpDNbP5x3U0hbYtMPJwgkS8kjkzN3Wi4C/oAvCPX9iQ20zfM16wKEeeemIAX1tnWFjRns64AoAClc9SY7hs9cC8DENO8JK1vBtARJXbLoQO2ZLFYWnkgJufH0ZmeK9nDPhIh/WPLHCpeKjukyOAwzB7O4m8lXNfcXzerGEPPINynvFDl0z1dix9LJqk/U0TAVPn7+izVzCX7GT6ISooVjJdrqBiIHhkLyyFQPijZUbDflegZefWVb/opYT+sdtY9AAATms/c9pkRTWeuQAAA=";var zo='"Space Grotesk", "Inter", "Segoe UI", system-ui, sans-serif',wc=1024,Ec=614,ms={x:.5,y:.58,r:.1};function Tc(i,e,t,n,r,s="left"){let o=[...e].map(c=>i.measureText(c).width),a=o.reduce((c,u)=>c+u,0)+r*(e.length-1),l=s==="center"?t-a/2:s==="right"?t-a:t;[...e].forEach((c,u)=>{i.fillText(c,l,n),l+=o[u]+r})}function Wh(i,e,t,n){if(i.fillStyle="#130c10",i.fillRect(0,0,e,t),n.complete&&n.naturalWidth){let o=Math.max(e/n.naturalWidth,t/n.naturalHeight),a=n.naturalWidth*o,l=n.naturalHeight*o;i.drawImage(n,(e-a)/2,(t-l)/2,a,l)}let r=i.createLinearGradient(0,0,0,t);r.addColorStop(0,"rgba(8,3,4,0.35)"),r.addColorStop(.26,"rgba(8,3,4,0)"),r.addColorStop(.58,"rgba(8,3,4,0)"),r.addColorStop(1,"rgba(8,3,4,0.7)"),i.fillStyle=r,i.fillRect(0,0,e,t);let s=i.createRadialGradient(e/2,t/2,t*.3,e/2,t/2,e*.62);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.4)"),i.fillStyle=s,i.fillRect(0,0,e,t)}function Fx(i,e,t,n){i.textBaseline="alphabetic",i.fillStyle="#ff3355",i.beginPath(),i.arc(50,56,10,0,Math.PI*2),i.fill(),i.font=`700 28px ${zo}`,i.fillStyle="rgba(255,240,240,0.92)",Tc(i,"REC",70,66,4),i.save(),i.font=`700 92px ${zo}`,i.shadowColor="rgba(255,51,85,0.75)",i.shadowBlur=28,i.fillStyle="#fff3f3",i.fillText("NeuroMaze",40,t-70),i.restore(),i.font=`600 26px ${zo}`,i.fillStyle="rgba(255,214,222,0.88)",Tc(i,"UNITY \xB7 3D HORROR",44,t-30,4),i.font=`700 30px ${zo}`,i.fillStyle="rgba(255,255,255,0.95)",i.shadowColor="rgba(0,0,0,0.85)",i.shadowBlur=12,Tc(i,n,e/2,(1-ms.y+ms.r)*t+52,6,"center")}var Ox=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Bx=`
  uniform sampler2D uPicture;
  uniform sampler2D uChrome;
  uniform float uOn;
  uniform float uTime;
  uniform float uHover;
  uniform float uTap;
  uniform float uChromeOpacity;
  uniform vec3 uButton;
  varying vec2 vUv;
  void main() {
    // Power on like a CRT: a bright line opens into the picture.
    float open = smoothstep(0.08, 0.7, uOn);
    float halfOpen = max(open * 0.5, 0.003);
    if (uOn < 0.001 || abs(vUv.y - 0.5) > halfOpen) discard;
    vec2 uv = vec2(vUv.x, 0.5 + (vUv.y - 0.5) / max(open, 0.006));
    vec3 col = texture2D(uPicture, uv).rgb * 1.35;
    // Faint scanlines that roll slowly, as on the poster.
    col *= 0.93 + 0.07 * sin(vUv.y * 980.0 - uTime * 4.0);

    vec4 chrome = texture2D(uChrome, uv);
    float show = uChromeOpacity * smoothstep(0.6, 1.0, uOn);
    col = mix(col, chrome.rgb, chrome.a * show);

    // The play button: a dark glass disc, a bright rim and a triangle,
    // lifting on hover; a ping leaves it every couple of seconds.
    vec2 p = (vUv - uButton.xy) * vec2(1.6667, 1.0);
    float r = length(p);
    float radius = uButton.z * (1.0 + 0.06 * uHover);
    float disc = 1.0 - smoothstep(radius - 0.004, radius, r);
    float rim = smoothstep(radius - 0.009, radius - 0.004, r) * (1.0 - smoothstep(radius, radius + 0.004, r));
    vec2 t = p / radius;
    float tri = smoothstep(-0.36, -0.32, t.x) * (1.0 - smoothstep(-0.02, 0.02, abs(t.y) - (0.5 - t.x) * 0.58));
    float lit = 0.92 + 0.5 * uHover;
    col = mix(col, col * 0.35 + vec3(0.03, 0.01, 0.015), disc * 0.75 * show);
    col += vec3(1.0, 0.96, 0.94) * (rim * 0.85 + tri * 0.95) * lit * show;
    float period = mix(2.2, 1.3, uHover);
    float ping = fract(uTime / period);
    float pr = radius + ping * 0.16;
    float ring = (1.0 - smoothstep(0.0, 0.006, abs(r - pr))) * (1.0 - ping) * (1.0 - ping);
    col += vec3(1.0, 0.55, 0.6) * ring * 0.9 * show;

    // Pressed: a soft white burst from the button, then the dive begins.
    float burst = (1.0 - smoothstep(uTap * 0.9, uTap * 0.9 + 0.12, r)) * (1.0 - uTap) * step(0.001, uTap);
    col = mix(col, vec3(1.0, 0.97, 0.95), burst * 0.85);

    // The opening line glows as the picture comes up.
    float edge = 1.0 - smoothstep(0.0, 0.02, halfOpen - abs(vUv.y - 0.5));
    col += vec3(1.0, 0.92, 0.88) * edge * (1.0 - smoothstep(0.75, 1.0, open));
    col *= 0.94 + 0.12 * uHover;
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function Xh(i){let e=new Image,t=Kt((u,h,p)=>Wh(u,h,p,e),wc,Ec),n=Kt((u,h,p)=>Fx(u,h,p,"IN CREATIVE WORKS"),wc,Ec,{redraw:!0});e.onload=()=>{Wh(t.image.getContext("2d"),wc,Ec,e),t.needsUpdate=!0},e.src=Gh;let r={uPicture:{value:t},uChrome:{value:n},uOn:{value:0},uTime:{value:0},uHover:{value:0},uTap:{value:0},uChromeOpacity:{value:1},uButton:{value:new R(ms.x,ms.y,ms.r)}},s=new Lt({uniforms:r,vertexShader:Ox,fragmentShader:Bx}),o=new ht(i,s);o.renderOrder=3;let a=0,l=-1,c=0;return{mesh:o,setOn(u){r.uOn.value=u},setHover(u){a=u?1:0},press(){l=performance.now()},animate(u){let h=Math.min(.05,Math.max(0,u-c));c=u,r.uTime.value=u,r.uHover.value+=(a-r.uHover.value)*(1-Math.exp(-h*10)),r.uTap.value=l<0?0:Math.min(1,(performance.now()-l)/520),r.uTap.value>=1&&(l=-1)}}}function qh({materials:i}){let[e,,t]=Ft.workstation,n=Ft.tableTop,r=new gt,s=[],o=(E,A=r)=>(A.add(E.root),s.push(E),E);o(it({size:[2.8,.05,1.3],at:[e,n-.05,t],material:i.wood,radius:.012,fx:"drop",drop:2.6,keepWire:.1})),[-1.32,1.32].forEach(E=>o(it({size:[.05,n-.05,1.1],at:[e+E,0,t],material:i.laminate,radius:.01,fx:"drop",drop:3.2}))),o(it({size:[2.56,.42,.03],at:[e,.26,t-.5],material:i.laminate,radius:.008,fx:"drop",drop:3.2,wire:!1}));let[a,l]=Ft.monitorRel,c=e+a,u=t+l,h=ps(1,.6),p=new gt;r.add(p),o(Ve(qe(h.body,c,n,u),i.plastic,{shadow:!0}),p),o(Ve(Hi(h,c,n,u),dn(Ir(),.9),{shadow:!1}),p);let d=new Vt({map:Do(),transparent:!0,opacity:0,depthWrite:!1}),g=new ht(Hi(h,c,n,u),d);g.position.z=.0015,g.renderOrder=2,g.visible=!1,p.add(g);let x=Xh(Hi(h,c,n,u));x.mesh.position.z=.003,p.add(x.mesh);let m=ps(.86,.52);o(Ve(qe(m.body,e-.8,n,t-.38,.25),i.plastic,{shadow:!0})),o(Ve(Hi(m,e-.8,n,t-.38,.25),dn(Lr(2),.85),{shadow:!1})),o(Ve(qe(Fo(),e-.15,n,t+.12),oi(Uo(),.5))),o(Ve(qe(Oo(),e+.34,n,t+.14,.1),i.plastic));let f=Bh();o(Ve(qe(f.shell,e+1.02,n,t+.1,-.5),i.plasticWhite)),o(Ve(qe(f.dark,e+1.02,n,t+.1,-.5),i.plastic)),o(Ve(qe(Sc(),e+.9,n,t+.47,.6),i.plasticWhite)),o(Ve(qe(Sc(),e+1.1,n,t+.42,1.05),i.plasticWhite));let y=Bo();o(Ve(qe(y.body,e-1.2,n,t-.42,.5),i.steelDark));let b=o(Ve(qe(y.bulb,e-1.2,n,t-.42,.5),i.lampBulb.clone(),{shadow:!1}));o(Ve(qe(Si(),e-1.02,n,t+.2,.4),i.plasticWhite)),o(Ve(qe($e(.22,.025,.3,[0,0,0],.004),e-.62,n,t+.32,.25),i.paper)),o(Ve(qe($e(.22,.48,.46,[0,0,0],.02),e+1,0,t-.22,-.2),i.plastic,{drop:3})),[[e+.5,t+1.35,Math.PI+.3,i.fabric],[e-.85,t+1.7,Math.PI-.55,i.fabricBlue]].forEach(([E,A,I,w])=>{let M=Dr();o(Ve(qe(M.base,E,0,A,I),i.steelDark,{drop:3.4,shadow:!0})),o(Ve(qe(M.fabric,E,0,A,I),w,{drop:3.4,shadow:!0}))});let v=h.top-.15,C={group:p,unityMat:d,preview:x,center:new R(c,n+.15+.03+.3,u+.03),bezel:{w:1.06,h:v,d:.045,cy:n+.15+v/2,z:u},x:c};return{group:r,target:C,lampPosition:new R(e-1.1,n+.75,t-.5),bulb:b,update(E){let A=Ge(E,...Qe.workstation);s.forEach((w,M)=>w.set(an(A,M,s.length,.68)));let I=Pt(Ge(E,...Qe.screens));g.visible=I>.001,d.opacity=I,x.setOn(Pt(Ge(E,...Qe.preview)))},animate(E){x.animate(E)}}}function Yh({materials:i}){let e=new gt,t=[],n=s=>(e.add(s.root),t.push(s),s);[[-2,.7],[.9,.62]].forEach(([s,o])=>{let a=bc(o);n(Ve(qe(a.pot,-4.85,1.08,s),i.pot)),n(Ve(qe(a.leaves,-4.85,1.08,s),i.vertex))});let r=bc(1.7);return n(Ve(qe(r.pot,-4.2,0,3.9),i.pot,{drop:3})),n(Ve(qe(r.leaves,-4.2,0,3.9),i.vertex,{drop:3})),n(Ve(Dn(.17,.15,.4,[2.75,0,-4.6],18),i.steelDark,{drop:3})),n(Ve(Qt([Dn(.075,.075,.42,[3.02,.35,-4.72],14),Dn(.03,.03,.08,[3.02,.77,-4.72],10)]),i.tape,{drop:3})),n(Ve(qe($e(.55,.42,.5,[0,0,0],.01),4.6,0,-4.45,.1),i.cardboard,{drop:3})),n(Ve(qe($e(.42,.3,.4,[0,0,0],.01),4.62,.42,-4.42,-.15),i.cardboard,{drop:3})),{group:e,update(s){let o=Ge(s,...Qe.props);t.forEach((a,l)=>a.set(an(o,l,t.length,.62)))}}}function Zh({workstation:i,stage:e,onChange:t=()=>{},onOpen:n=()=>{},isAvailable:r=()=>!0}){let s=i.target,o=s.bezel,a=new gt,l=new Vt({color:16760938,side:Dt,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),c=new ht(new bi(o.w,o.h,o.d,2,.02),l);c.position.set(s.x,o.cy,o.z),c.visible=!1,s.group.add(c);let u=new R(0,1,0),h=new Vt({color:16773590,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),p=new ht(new br(.006,.006,1,6).translate(0,.5,0),h);p.visible=!1,p.frustumCulled=!1;let d=new Vt({color:16777215,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),g=new ht(new _i(.02,12,12),d);g.visible=!1,a.add(p,g);let x=document.createElement("button");x.className="lab-tag",x.type="button",x.disabled=!0,x.tabIndex=-1,x.setAttribute("aria-label","NeuroMaze: go to chapter 04, Creative works"),x.innerHTML='<span class="lab-tag__box"><i class="lab-tag__dot"></i><span class="lab-tag__name">NeuroMaze</span><span class="lab-tag__state">Up next \u2193</span></span>',e.parentElement.appendChild(x);let m=x.firstElementChild,f=!1,y=m.offsetWidth||190,b=()=>{if(f)return;let K=m.offsetWidth||190;K!==y&&(y=K,t())},v=typeof ResizeObserver<"u"?new ResizeObserver(b):null;v?.observe(m),v||window.addEventListener("resize",b,{passive:!0}),document.fonts?.ready.then(b),document.fonts?.addEventListener("loadingdone",b);let C=new R,E=new R,A=new R,I=new R,w=new R,M=new R,P=-1,z=!1,F=NaN,V=NaN,X=-1,k=-1,$=-1,W=!1,se=0,he=-1,xe=null,Re=null,We=!1,Y=0,ee=null,me=null,te=e.closest?.(".story")||e.parentElement,Se=new bo,Ie=new oe,Be=()=>!f&&me&&r()&&V>=Qe.hover[0],dt=()=>{se++,t()},ke=0,Ze=()=>{!Be()||ke||(s.preview.press(),x.classList.add("is-opening"),t(),ke=setTimeout(()=>{ke=0,x.classList.remove("is-opening"),f||n()},220))},U=K=>{K!==xe&&(xe=K,s.preview.setHover(K===!0),te.style.cursor=K?"pointer":"",dt())};function St(K){if(!Be())return!1;let ie=e.getBoundingClientRect();return!ie.width||!ie.height||(Ie.set((K.clientX-ie.left)/ie.width*2-1,-(K.clientY-ie.top)/ie.height*2+1),Math.abs(Ie.x)>1||Math.abs(Ie.y)>1)?!1:(Se.setFromCamera(Ie,me),Se.intersectObject(s.group,!0).some(Te=>Te.object.visible&&Te.object!==c))}function Fe(K){Re&&Math.hypot(K.clientX-Re.x,K.clientY-Re.y)>8&&(Re=null),!(K.pointerType==="touch"||!Be())&&(ee={clientX:K.clientX,clientY:K.clientY},!Y&&(Y=requestAnimationFrame(()=>{Y=0,!(!ee||!Be())&&U(St(ee))})))}function Ee(){ee=null,U(null)}function ve(K){We=!1;let ie=x.contains(K.target);K.isPrimary===!1||K.pointerType!=="touch"&&K.button!==0||!Be()||!ie&&!St(K)||(Re={id:K.pointerId,x:K.clientX,y:K.clientY,at:performance.now(),progress:V,label:ie})}function He(K){let ie=Re;if(Re=null,!(!ie||K.pointerId!==ie.id||V!==ie.progress||performance.now()-ie.at>500||Math.hypot(K.clientX-ie.x,K.clientY-ie.y)>8||!(ie.label?x.contains(K.target):St(K)))){if(ie.label){We=!0;return}Ze()}}let we=()=>{Re=null,We=!1},T=K=>{K.detail>0&&"PointerEvent"in window&&!We||(We=!1,Ze())},_=K=>ie=>{x.contains(ie.target)||K(ie)},O=_(Fe),J=_(ve),j=_(He),Z=_(we);x.addEventListener("click",T),"PointerEvent"in window&&(te.addEventListener("pointermove",O,{passive:!0}),te.addEventListener("pointerleave",Ee,{passive:!0}),te.addEventListener("pointerdown",J,{passive:!0}),te.addEventListener("pointerup",j,{passive:!0}),te.addEventListener("pointercancel",Z,{passive:!0}),x.addEventListener("pointermove",Fe,{passive:!0}),x.addEventListener("pointerdown",ve,{passive:!0}),x.addEventListener("pointerup",He,{passive:!0}),x.addEventListener("pointercancel",we,{passive:!0}));function Me(K,ie,Te,re=!1){me=ie;let ae=r();if(!re&&K!==V&&(V=K,Re=null,We=!1,xe!==null&&(xe=null,s.preview.setHover(!1),te.style.cursor="",se++)),K===F&&Te.w===X&&Te.h===k&&y===$&&ae===W&&se===he)return!1;F=K,X=Te.w,k=Te.h,$=y,W=ae,he=se;let Ce=K>=Qe.hover[0],_e=Pt(Ge(K,...Qe.select)),pe=Math.max(_e,Ce&&xe!==null?Number(xe):Pt(Ge(K,...Qe.hover))),Xe=.005+.009*_e;c.visible=pe>.001,c.scale.set(1+2*Xe/o.w,1+2*Xe/o.h,1+5*_e),l.opacity=.5*pe+.4*_e,s.group.position.y=.045*_e,s.unityMat.color.setScalar(1+.16*_e),ie.matrixWorld.extractBasis(I,w,M),C.copy(ie.position).addScaledVector(I,.8).addScaledVector(w,-.55).addScaledVector(M,-.7),A.copy(s.center).setY(s.center.y+s.group.position.y),E.subVectors(A,C);let ze=E.length();E.divideScalar(ze);let ct=Rr(pe);p.visible=pe>.001,p.position.copy(C),p.quaternion.setFromUnitVectors(u,E),p.scale.set(1,ze*ct,1),h.opacity=.34*pe*(1-.6*_e),g.visible=ct>.98,g.position.copy(A),d.opacity=.9*pe,g.scale.setScalar(1-.35*_e);let L=_e;x.style.opacity=String(L);let ce=ae&&Ce&&L>.001;if(x.disabled=!ce,x.tabIndex=ce?0:-1,x.classList.toggle("is-interactive",ce),L>.001){z||b(),A.set(s.x+o.w/2,o.cy+o.h/2+s.group.position.y,o.z).project(ie);let Q=(A.x*.5+.5)*Te.w,de=Math.max(96,(-A.y*.5+.5)*Te.h),fe=Te.w-Q-30-y-12;x.classList.toggle("is-left",fe<0&&Q>Te.w/2),x.style.transform=`translate(${(Q+(Te.x||0)).toFixed(1)}px, ${(de+(Te.y||0)).toFixed(1)}px)`}z=L>.001;let q=Math.round(_e*100)/100;return q!==P&&(P=q,e.style.setProperty("--lab-focus",String(q))),!0}return{group:a,update:Me,stats:()=>({manualHover:xe}),dispose(){f=!0,clearTimeout(ke),te.style.cursor="",v?.disconnect(),window.removeEventListener("resize",b),document.fonts?.removeEventListener("loadingdone",b),cancelAnimationFrame(Y),te.removeEventListener("pointermove",O),te.removeEventListener("pointerleave",Ee),te.removeEventListener("pointerdown",J),te.removeEventListener("pointerup",j),te.removeEventListener("pointercancel",Z),x.removeEventListener("pointermove",Fe),x.removeEventListener("pointerdown",ve),x.removeEventListener("pointerup",He),x.removeEventListener("pointercancel",we),x.removeEventListener("click",T),x.remove(),e.style.removeProperty("--lab-focus")}}}function Kh({quality:i}){let e=new gt,t=Jh([[0,"rgba(232,181,102,0.55)"],[.45,"rgba(201,113,63,0.18)"],[1,"rgba(201,113,63,0)"]]),n=new Vt({map:t,transparent:!0,opacity:0,blending:Ui,depthWrite:!1,toneMapped:!1}),r=new ht(new Gt(30,30).rotateX(-Math.PI/2),n);r.position.y=-.72,r.renderOrder=-2,e.add(r);let s=i.low?110:240,o=new Float32Array(s*3),a=new Float32Array(s),l=new Float32Array(s),c=new Float32Array(s*3);for(let d=0;d<s;d++)o[d*3]=(Gn(d*3.1)-.5)*20,o[d*3+1]=-.5,o[d*3+2]=(Gn(d*5.7)-.5)*20,a[d]=Gn(d*7.3),l[d]=.012+Gn(d*11.9)*.02;let u=new At;u.setAttribute("position",new pt(c,3));let h=new rs({size:.09,map:Jh([[0,"rgba(255,240,215,1)"],[1,"rgba(255,240,215,0)"]]),color:_n.champagne,transparent:!0,opacity:0,blending:Ui,depthWrite:!1,toneMapped:!1,sizeAttenuation:!0}),p=new ri(u,h);return p.frustumCulled=!1,e.add(p),{group:e,update(d,g){let x=Pt(Ge(d,...Qe.slab));n.opacity=x*.12,h.opacity=x*.28;for(let m=0;m<s;m++){let f=(g*l[m]+a[m])%1;c[m*3]=o[m*3]+Math.sin(g*.15+a[m]*6.28)*.5,c[m*3+1]=o[m*3+1]+f*9,c[m*3+2]=o[m*3+2]+Math.cos(g*.12+a[m]*6.28)*.5}u.attributes.position.needsUpdate=!0}}}function Jh(i){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);i.forEach(([s,o])=>n.addColorStop(s,o)),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new Mr(e);return r.colorSpace=Tt,r}function zx(){let i=matchMedia("(pointer: coarse)").matches,e=Math.min(screen.width,screen.height)<700,t=i||e;return{low:t,maxDpr:t?1.5:2,shadowSize:t?1024:2048,bloom:!t}}async function Qh({canvas:i,stage:e,state:t,pause:n=null}){performance.mark("hiwi:start");let r=zx(),s=document.documentElement.classList.contains("has-story"),o=!1,a=!0,l=0,c=new yi({canvas:i,antialias:!r.bloom,powerPreference:"high-performance",alpha:!1,stencil:!1,preserveDrawingBuffer:!s});c.outputColorSpace=Tt,c.toneMapping=hs,c.toneMappingExposure=1,c.shadowMap.enabled=!0,c.shadowMap.type=Yl,c.shadowMap.autoUpdate=!1,c.shadowMap.needsUpdate=!0,c.setClearColor(_n.bg,1);let u=new Pn;u.background=new Pe(_n.bg),u.matrixWorldAutoUpdate=!1;let h=window.SceneIdle,p=le=>new Promise(Ae=>setTimeout(Ae,le));n||(n=(le=200,Ae=900)=>h?h.quiet(le,Ae):p(le)),await n();let d=fh(ph(c));await n();let g=xh(),{camera:x}=g,m=mh(u,r),f=m.group.children.find(le=>le.castShadow&&le.shadow),y=new Float64Array(48).fill(NaN),b=f?[f.matrixWorld.elements,f.target.matrixWorld.elements,f.shadow.camera.projectionMatrix.elements]:[],v=bh(),C=Oh({materials:d}),E=zh({materials:d});await n();let A=kh({materials:d}),I=Hh({materials:d}),w=Vh({materials:d});await n();let M=qh({materials:d}),P=Yh({materials:d}),z=Kh({quality:r});await n();let F=()=>{},V=Zh({workstation:M,stage:e,onChange:()=>F(),onOpen:()=>{if(window.WorksPlayer?.showShelf?.(0))return;let le=matchMedia("(prefers-reduced-motion: reduce)").matches;document.getElementById("chapter-work")?.scrollIntoView({behavior:le?"auto":"smooth",block:"start"})},isAvailable:()=>!o&&a&&!document.hidden&&(!s||ze())});[v,z,C,E,A,I,w,M,P,V].forEach(le=>u.add(le.group)),m.setPractical(A.lampPositions[0],M.lampPosition);let k=[...A.bulbs,M.bulb],$=r.bloom?Mh(c,u,x):null,W=!!$,se=Math.min(window.devicePixelRatio||1,r.maxDpr),he={w:0,h:0,x:0,y:0},xe=0;function Re(){if(o)return;let le=Math.max(1,e.clientWidth),Ae=Math.max(1,e.clientHeight),Je=c.getPixelRatio()!==se;if(!(le===he.w&&Ae===he.h&&!Je))return he.w=le,he.h=Ae,he.x=e.offsetLeft,he.y=e.offsetTop,Je?c.setDrawingBufferSize(le,Ae,se):c.setSize(le,Ae,!1),$?.setSize(le,Ae,se),g.resize(le,Ae),xe++,c.shadowMap.needsUpdate=!0,!Ee&&(!s||O>0)&&Fe(),!0}let We=typeof ResizeObserver<"u"?new ResizeObserver(Re):null;We?.observe(e),We||window.addEventListener("resize",Re,{passive:!0});let Y=0,ee=0,me=NaN,te=-1,Se=NaN,Ie=NaN,Be=0,dt=0;function ke(le,Ae,Je=!1){let rt=le!==me||te!==xe,S=Pt(Ge(le,...Qe.unity));rt&&v.update(le),z.update(le,Ae),M.animate(Ae),rt&&(C.update(le),E.update(le,Ae),A.update(le),I.update(le),w.update(le),M.update(le),P.update(le),k.forEach(B=>B.mat.emissiveIntensity=.2+2.4*S),g.update(le));let D=V.update(le,x,he,Je);if(rt&&(m.update({unity:S}),$?.setGrade(S),me=le,te=xe),rt||D){u.updateMatrixWorld(),dt++;let B=Math.min(le,Qe.props[1]),H=M.target.group.position.y;(B!==Se||H!==Ie)&&(c.shadowMap.needsUpdate=!0,Se=B,Ie=H)}}let Ze=!1;function U(){if(!f)return;f.updateWorldMatrix(!0,!1),f.target.updateWorldMatrix(!0,!1);let le=0;for(let Ae of b)for(let Je of Ae)Je!==y[le]&&(y[le]=Je,c.shadowMap.needsUpdate=!0),le++;f.shadow.needsUpdate&&(c.shadowMap.needsUpdate=!0)}function St(le=!0){if(o||!a)return;U();let Ae=c.shadowMap.enabled&&c.shadowMap.needsUpdate;$?$.render():c.render(u,x),Ae&&Be++,le&&!Ze&&(performance.mark("hiwi:live"),Ze=!0,e.classList.add("is-live"))}function Fe(){o||(ke(Y,ee),St())}let Ee=!1,ve=0,He=0,we=0,T=0,_=!1,O=0,J=c.extensions.has("KHR_parallel_shader_compile"),j=!s,Z=!1,Me=()=>{},K=null,ie=0,Te=()=>{},re=0,ae=0,Ce=e.parentElement,_e=e.closest(".story"),pe=()=>getComputedStyle(i).visibility!=="hidden"&&parseFloat(getComputedStyle(Ce).opacity)>.01,Xe=()=>typeof t.visible=="boolean"?t.visible:pe(),ze=()=>!o&&a&&_&&!document.hidden&&Xe();function ct(){return typeof t.override=="number"?t.override:t.progress}F=()=>{o||!a||!Ee&&(!s||ze())&&(Y=ct(),Fe())};function L(le){if(o||!Ee)return;ve=requestAnimationFrame(L);let Ae=Math.min(.05,(le-He)/1e3||.016);if(He=le,ee+=Ae,!a||!_||document.hidden||(typeof t.visible=="boolean"?!t.visible:we++%10===0&&!pe())){Q();return}Y=ct(),Fe(),O++,ce(Ae)}function ce(le){t.noAdapt||(T=le>.028?T+1:Math.max(0,T-2),!(T<60)&&(T=0,se>1?(se=Math.max(1,se-.25),Re()):$&&W&&(W=!1,$.setBloom(!1))))}function q(){if(!(o||!a||Ee)){if(!j){if(Z)return;Z=!0,G=!0,Le();let le=l;ke(ct(),ee),pn().then(()=>{o||!a||le!==l||(performance.mark("hiwi:primed"),j=!0,Z=!1,Me())});return}Ee=!0,He=performance.now(),Y=ct(),ve=requestAnimationFrame(L)}}function Q(){Ee=!1,cancelAnimationFrame(ve),ve=0}if(s){let le=Q;Te=()=>{if(clearTimeout(ie),ie=0,o||!a||!_||document.hidden){le();return}ze()?q():(le(),typeof t.visible!="boolean"&&(ie=setTimeout(Te,200)))},document.addEventListener("visibilitychange",Te),Me=Te,Q=()=>{le(),o||Te()},typeof IntersectionObserver<"u"?(K=new IntersectionObserver(([Ae])=>{o||(_=Ae.isIntersecting,_?Te():Q())}),K.observe(e)):(_=!0,Te()),_e?.addEventListener("sceneprogress",Te)}else Y=1,t.progress=1,re=requestAnimationFrame(()=>{re=0,Re()}),document.fonts?.ready.then(()=>{o||(ae=requestAnimationFrame(()=>{ae=0,Fe()}))});function de(le){o||(le.preventDefault(),a=!1,l++,j=!1,Z=!1,Xt=null,be.length=0,Q())}function fe(){o||(a=!0,xe++,Se=Ie=NaN,c.shadowMap.needsUpdate=!0,s?Me():Fe())}i.addEventListener("webglcontextlost",de),i.addEventListener("webglcontextrestored",fe),Re();let ne=new Jt(1,1),be=[],et=t.prepareLog=[],G=!1,Le=()=>{},Ye=new Promise(le=>{Le=le}),ot=(le,Ae=4e3)=>G?Promise.resolve():Promise.race([Ye,n(le,Ae)]);function wt(le,Ae,Je=null){let rt=c.getRenderTarget();c.setRenderTarget(Ae?null:ne);try{return J?c.compileAsync(le,x,Je):(c.compile(le,x,Je),Promise.resolve())}finally{c.setRenderTarget(rt)}}function at(){let le={[An]:Dt,[Dt]:An,[sn]:sn},Ae=new gt,Je=new Set;return u.traverse(rt=>{if(!rt.isMesh||!(rt.castShadow||rt.userData.shadowCaster)||!rt.material||Array.isArray(rt.material))return;let S=rt.material,D=S.shadowSide??le[S.side],B=[D,!!S.map,!!rt.isInstancedMesh,!!rt.instanceColor].join();if(Je.has(B))return;Je.add(B);let H=new es({depthPacking:lc,side:D,map:S.map||null}),N=rt.isInstancedMesh?new _r(rt.geometry,H,1):new ht(rt.geometry,H);rt.instanceColor&&(N.instanceColor=rt.instanceColor),Ae.add(N)}),be.push(Ae),Ae}let Mt=null;function ut(le){let Ae=new gt;Mt||(Mt=new Gt(2,2));for(let[Je,rt]of $.programs())rt===le&&Ae.add(new ht(Mt,Je));return be.push(Ae),Ae}function nn(le){le.traverse(Ae=>{let Je=Ae.material?Array.isArray(Ae.material)?Ae.material:[Ae.material]:[];for(let rt of Je)c.properties.get(rt).currentProgram?.getUniforms()})}function Wt(){let le=new Set;return u.traverse(Ae=>{let Je=Ae.material?Array.isArray(Ae.material)?Ae.material:[Ae.material]:[];for(let rt of Je)for(let S of Object.values(rt))S?.isTexture&&!S.isRenderTargetTexture&&le.add(S)}),[...le]}let Xt=null;function pn(){if(Xt)return Xt;let le=l;return Xt=(async()=>{let Ae=[["room",()=>wt(u,!$)],["shadows",()=>wt(at(),!1,u)],$&&["post",()=>wt(ut(!1),!1).then(()=>wt(ut(!0),!0))]].filter(Boolean);for(let[Je,rt]of Ae){if(await ot(300),o||le!==l)return!1;let S=performance.now();await rt(),et.push({step:Je,ms:Math.round(performance.now()-S),programs:c.info.programs?.length})}J||await ot(400,1500);for(let Je of[u,...be]){if(await ot(150,1500),o||le!==l)return!1;nn(Je)}for(let Je of Wt()){if(await ot(150,1500),o||le!==l)return!1;c.initTexture(Je)}return et.push({step:"textures",programs:c.info.programs?.length}),!0})().catch(Ae=>(o||console.warn("HiWi lab: shader preparation skipped \u2014",Ae),!1)),Xt}return{warm:s?pn():Promise.resolve(!1),renderer:c,scene:u,camera:x,quality:r,workstation:M,screenRect(){let le=M.target.preview.mesh,Ae=e.getBoundingClientRect();le.geometry.boundingBox||le.geometry.computeBoundingBox();let Je=le.geometry.boundingBox;le.updateWorldMatrix(!0,!1);let rt=[Je.min.x,Je.max.x].flatMap(B=>[Je.min.y,Je.max.y].map(H=>new R(B,H,(Je.min.z+Je.max.z)/2).applyMatrix4(le.matrixWorld).project(x))),S=rt.map(B=>Ae.left+(B.x*.5+.5)*Ae.width),D=rt.map(B=>Ae.top+(-B.y*.5+.5)*Ae.height);return{x:Math.min(...S),y:Math.min(...D),width:Math.max(...S)-Math.min(...S),height:Math.max(...D)-Math.min(...D)}},stats:()=>({running:Ee,inView:_,drawn:O,dpr:se,bloom:W,L:Y,shadowUpdates:Be,matrixUpdates:dt,contextAvailable:a,manualInput:V.stats()}),tune:({dpr:le,bloom:Ae,shadows:Je}={})=>{o||(typeof le=="number"&&(se=le),typeof Ae=="boolean"&&$&&(W=Ae,$.setBloom(Ae)),typeof Je=="boolean"&&(c.shadowMap.enabled=Je,c.shadowMap.needsUpdate=!0,u.traverse(rt=>rt.material&&(rt.material.needsUpdate=!0))),!Re()&&!Ee&&(!s||O>0)&&Fe())},dispose(){o||(o=!0,Q(),clearTimeout(ie),Le(),ne.dispose(),cancelAnimationFrame(re),cancelAnimationFrame(ae),We?.disconnect(),window.removeEventListener("resize",Re),K?.disconnect(),_e?.removeEventListener("sceneprogress",Te),document.removeEventListener("visibilitychange",Te),i.removeEventListener("webglcontextlost",de),i.removeEventListener("webglcontextrestored",fe),V.dispose(),$?.dispose(),c.dispose())}}}var fn=Tr.clamp,Ac=(i,e,t)=>{let n=fn((t-i)/(e-i),0,1);return n*n*(3-2*n)};function kx(){let i=matchMedia("(pointer: coarse)").matches,e=Math.min(window.innerWidth,window.innerHeight)<721,t=navigator.deviceMemory||8,n=navigator.hardwareConcurrency||8,r=i||e||t<=4||n<=4;return{low:r,count:t<=2?3500:r?5500:12e3,maxDpr:t<=2?1:r?1.25:1.5,pointSize:r?1.8:1.7}}function $h(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Hx(i){let e=i.bounds,n=e?.min?.length===3&&e?.max?.length===3&&e.min.every((o,a)=>Number.isFinite(o)&&Number.isFinite(e.max[a])&&(a===2?e.max[a]>=o:e.max[a]>o))?new vn(new R().fromArray(e.min),new R().fromArray(e.max)):new vn().setFromBufferAttribute(new pt(i.positions,3)),r=n.getCenter(new R),s=n.getSize(new R);if(n.isEmpty()||!Number.isFinite(s.x+s.y)||s.x<=0||s.y<=0)throw new Error("Portrait geometry has no visible surface");return{center:r,size:s}}function Vx(i,e,t){let n=$h(6270189),r=i.positions,s=i.indices,o=Math.floor(s.length/3),a=new Float64Array(o),l=0;for(let x=0;x<o;x++){let m=s[x*3]*3,f=s[x*3+1]*3,y=s[x*3+2]*3,b=((r[m+1]+r[f+1]+r[y+1])/3-e.center.y)/e.size.y+.5,v=1+2.5*Ac(.45,.82,b),C=Math.abs((r[f]-r[m])*(r[y+1]-r[m+1])-(r[f+1]-r[m+1])*(r[y]-r[m]));l+=C*v,a[x]=l}if(!Number.isFinite(l)||l<=0)throw new Error("Portrait geometry has no triangles");let c=new Float32Array(t*3),u=new Float32Array(t*3),h=new Float32Array(t*3),p=new Float32Array(t*4),d=new Pe;for(let x=0;x<t;x++){let m=n()*l,f=0,y=o-1;for(;f<y;){let F=f+y>>>1;a[F]<m?f=F+1:y=F}let b=[s[f*3],s[f*3+1],s[f*3+2]],v=Math.sqrt(n()),C=n(),E=[1-v,v*(1-C),v*C],A=0,I=0,w=0,M=0,P=0;for(let F=0;F<3;F++){let V=b[F]*3,X=E[F];A+=r[V]*X,I+=r[V+1]*X,w+=i.colors[V]*X,M+=i.colors[V+1]*X,P+=i.colors[V+2]*X}c.set([A-e.center.x,I-e.center.y,0],x*3),d.setRGB(w,M,P,Tt),u.set([d.r,d.g,d.b],x*3),h.set([(n()-.5)*1.7,n(),n()-.5],x*3);let z=1-fn((I-e.center.y)/e.size.y+.5,0,1);p.set([n(),.55+Math.pow(n(),5)*1.4,n()<.045?1:0,z],x*4)}let g=new At;return g.setAttribute("position",new pt(c,3)),g.setAttribute("color",new pt(u,3)),g.setAttribute("aCloud",new pt(h,3)),g.setAttribute("aSeed",new pt(p,4)),g.setDrawRange(0,t),g}var Gx=`
  attribute vec3 color;
  attribute vec3 aCloud;
  attribute vec4 aSeed;
  uniform float uProgress;
  uniform float uTime;
  uniform float uMotionStrength;
  uniform float uPointerStrength;
  uniform float uPointSize;
  uniform float uPixelRatio;
  uniform float uPointLimit;
  uniform float uTargetScale;
  uniform float uBottomY;
  uniform float uPortraitHeight;
  uniform float uPortraitWidth;
  uniform float uExitProgress;
  uniform float uWorkProgress;
  uniform float uWorkMode;
  uniform vec2 uExitTarget;
  uniform vec2 uWorkTarget;
  uniform vec4 uWorkOrigin;
  uniform vec2 uTargetCenter;
  uniform vec2 uViewport;
  uniform vec2 uFieldCenter;
  uniform vec2 uPointer;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vAssembly;
  float ease(float t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
  }
  vec2 stir(vec2 point, float amount, vec4 seed, float extent) {
    float motion = amount * uMotionStrength;
    point += vec2(sin(uTime * 0.32 + seed.y * 6.1), cos(uTime * 0.27 + seed.z * 7.4))
      * clamp(extent * 0.006, 2.0, 4.0) * motion;
    vec2 delta = point - uPointer;
    float distance = length(delta);
    float influence = 1.0 - smoothstep(0.0, clamp(extent * 0.18, 80.0, 170.0), distance);
    vec2 outward = delta / max(1.0, distance);
    point += (outward * 0.78 + vec2(-outward.y, outward.x) * 0.36)
      * 12.0 * influence * influence * uPointerStrength * motion;
    return point;
  }
  void main() {
    float rise = ease(clamp((uProgress - aSeed.x * 0.045) / 0.35, 0.0, 1.0));
    float delay = aSeed.x * 0.025 + aSeed.w * 0.030;
    float assembly = uProgress >= 0.90 ? 1.0 : ease(clamp((uProgress - 0.58 - delay) / 0.265, 0.0, 1.0));
    float depth = aCloud.z + 0.5;
    float extent = min(uViewport.x, uViewport.y);
    float along = 0.5 - aCloud.y;
    float across = aCloud.x / 0.85;
    across *= 0.35 + 0.65 * across * across;
    float curve = sin(aCloud.y * 5.4 + uProgress * 0.7 + aCloud.z * 0.22) * extent * 0.05;
    vec2 normal = normalize(vec2(-uViewport.y * 0.82, uViewport.x * 0.92));
    // Most stars share one gently curved diagonal: a dense spine with dusty
    // outer wings. A smaller field remains scattered around that Milky Way.
    vec2 band = vec2(along * uViewport.x * 0.92 + curve, along * uViewport.y * 0.82)
      + normal * (across * extent * 0.115 + aCloud.z * extent * 0.008);
    vec2 field = vec2(aCloud.x * uViewport.x * 0.58, along * uViewport.y * 0.97);
    float surroundingField = step(0.82, aSeed.x);
    vec2 destination = mix(band, field, surroundingField);
    // A few persistent surrounding stars begin inside the lower glass and
    // fade in softly; the main Milky Way still rises from below its edge.
    float firstY = mix(-uViewport.y * (0.52 + aCloud.y * 0.45),
      uViewport.y * (-0.50 + aCloud.y * 0.34
        + sin(aCloud.x * 4.0 + aCloud.z * 3.0) * 0.06), surroundingField);
    vec3 galaxy = vec3(
      destination.x + uFieldCenter.x,
      mix(firstY, destination.y, rise) + uFieldCenter.y,
      aCloud.z * uViewport.y * 0.15
    );
    vec3 target = vec3(uTargetCenter + position.xy * uTargetScale, 0.0);
    vec3 assembled = mix(galaxy, target, assembly);
    // A restrained curl connects rising ribbons to photographed features.
    // It is driven only by scroll and vanishes exactly at both endpoints.
    assembled.xy += vec2(aCloud.y - 0.5, -aCloud.x)
      * assembly * (1.0 - assembly) * min(uViewport.x, uViewport.y) * 0.48;
    // Ambient flow and pointer influence are decorative offsets, independent
    // of the scroll formation. They become exactly zero at the photo endpoint.
    float motion = uMotionStrength * (1.0 - assembly);
    float flowPhase = aCloud.y * 6.1 + aCloud.z * 2.4;
    vec2 flow = vec2(sin(uTime * 0.32 + flowPhase), cos(uTime * 0.27 + flowPhase * 1.17));
    assembled.xy += flow * clamp(extent * 0.009, 2.5, 6.0) * motion;
    vec2 delta = assembled.xy - uPointer;
    float distance = length(delta);
    float reach = clamp(extent * 0.18, 80.0, 170.0);
    float influence = 1.0 - smoothstep(0.0, reach, distance);
    vec2 outward = delta / max(1.0, distance);
    vec2 tangent = vec2(-outward.y, outward.x);
    assembled.xy += (outward * 0.78 + tangent * 0.36)
      * clamp(extent * 0.025, 10.0, 16.0) * influence * influence * uPointerStrength * motion;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(assembled, 1.0);
    float starSize = uPointSize * aSeed.y * (0.55 + depth * 0.65);
    gl_PointSize = min(uPointLimit, mix(starSize, uPointSize, assembly) * uPixelRatio);
    vec3 white = vec3(0.74, 0.82, 0.90);
    vec3 boschRed = vec3(0.42, 0.017, 0.026);
    vec3 starColor = mix(white, boschRed, aSeed.z);
    vColor = mix(starColor, color, smoothstep(0.65, 0.98, assembly));
    float bottomFade = smoothstep(uBottomY, uBottomY + uPortraitHeight * 0.085, position.y);
    vAlpha = smoothstep(0.0, 0.065, uProgress)
      * mix(0.55 + depth * 0.35, bottomFade, assembly);
    vAlpha *= mix(1.0, 0.94 + 0.06 * sin(uTime * 0.70 + flowPhase), motion);
    vAssembly = assembly;
    if (uExitProgress > 0.0 && uWorkMode < 0.5) {
      float normalizedX = clamp(position.x / uPortraitWidth + 0.5, 0.0, 1.0);
      float release = smoothstep(0.0, 1.0, (uExitProgress - (1.0 - normalizedX) * 0.35) / 0.65);
      float travel = ease(clamp((release - 0.12) / 0.88, 0.0, 1.0));
      vec2 destination = uExitTarget + vec2(aCloud.x, aCloud.y - 0.5) * extent * 0.08;
      vec2 departure = mix(target.xy, destination, travel);
      departure += vec2(aCloud.x * extent * 0.12, sin(aCloud.y * 6.0) * extent * 0.08)
        * sin(travel * 3.14159265);
      departure = stir(departure, sin(travel * 3.14159265) * 0.65, aSeed, extent);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(departure, 0.0, 1.0);
      gl_PointSize = min(uPointLimit, uPointSize * mix(1.0, 0.8, travel) * uPixelRatio);
      vColor = mix(color, white, travel * 0.8);
      vAlpha = bottomFade * release * (1.0 - smoothstep(0.60, 1.0, release));
      vAssembly = 1.0;
    }
    if (uWorkMode > 0.5) {
      float travel = ease(clamp((uWorkProgress - aSeed.x * 0.05) / 0.85, 0.0, 1.0));
      vec2 origin = uWorkOrigin.xy + vec2(aCloud.x * uWorkOrigin.z * 0.40,
        (aCloud.y - 0.5) * uWorkOrigin.w * 0.75);
      vec2 destination = uWorkTarget + vec2(aCloud.x, aCloud.y - 0.5) * extent * 0.05;
      vec2 stream = mix(origin, destination, travel)
        + vec2(aCloud.x * extent * 0.08, extent * 0.12) * sin(travel * 3.14159265);
      stream = stir(stream, sin(travel * 3.14159265) * 0.65, aSeed, extent);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(stream, 0.0, 1.0);
      gl_PointSize = min(uPointLimit, uPointSize * 0.75 * aSeed.y * uPixelRatio);
      vColor = starColor;
      vAlpha = smoothstep(0.0, 0.08, uWorkProgress) * (1.0 - smoothstep(0.55, 0.85, uWorkProgress));
      vAssembly = 0.7;
    }
  }
`,jh=`
  uniform float uOpacity;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vAssembly;
  void main() {
    float radius = length(gl_PointCoord - vec2(0.5));
    float core = 1.0 - smoothstep(0.08, 0.31, radius);
    float halo = (1.0 - smoothstep(0.15, 0.5, radius)) * 0.13 * (1.0 - vAssembly);
    float sharpDot = 1.0 - smoothstep(0.37, 0.5, radius);
    float sprite = mix(core + halo, sharpDot, vAssembly);
    float alpha = min(1.0, sprite) * vAlpha * uOpacity;
    if (alpha < 0.008) discard;
    gl_FragColor = vec4(vColor, alpha);
    #include <colorspace_fragment>
  }
`;function Wx(i){let e=i.groupIds.length,t=new Float32Array(i.colors.length),n=new Float32Array(e*4),r=new Pe,s=$h(2119680269);for(let a=0;a<e;a++)r.setRGB(i.colors[a*3],i.colors[a*3+1],i.colors[a*3+2],Tt),t.set([r.r,r.g,r.b],a*3),n.set([s(),s(),s(),s()],a*4);let o=new At;return o.setAttribute("position",new pt(i.positions,3)),o.setAttribute("color",new pt(t,3)),o.setAttribute("aGroup",new pt(i.groupIds,1)),o.setAttribute("aSeed",new pt(n,4)),o}var Xx=`
  attribute vec3 color;
  attribute float aGroup;
  attribute vec4 aSeed;
  uniform vec4 uTextProgress;
  uniform vec4 uTextOpacity;
  uniform vec2 uTextOffsets[4];
  uniform vec2 uTextBounds[4];
  uniform vec2 uCanvas;
  uniform vec2 uFieldCenter;
  uniform vec2 uFieldSize;
  uniform vec2 uExitTarget;
  uniform vec4 uWorkOrigin;
  uniform vec2 uPointer;
  uniform float uExitProgress;
  uniform float uWorkMode;
  uniform float uTime;
  uniform float uMotionStrength;
  uniform float uPointerStrength;
  uniform float uPointSize;
  uniform float uPixelRatio;
  uniform float uPointLimit;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vAssembly;
  float ease(float t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
  }
  vec2 stir(vec2 point, float amount, vec4 seed, float extent) {
    float motion = amount * uMotionStrength;
    point += vec2(sin(uTime * 0.32 + seed.y * 6.1), cos(uTime * 0.27 + seed.z * 7.4))
      * clamp(extent * 0.006, 2.0, 4.0) * motion;
    vec2 delta = point - uPointer;
    float distance = length(delta);
    float influence = 1.0 - smoothstep(0.0, clamp(extent * 0.18, 80.0, 170.0), distance);
    vec2 outward = delta / max(1.0, distance);
    point += (outward * 0.78 + vec2(-outward.y, outward.x) * 0.36)
      * 12.0 * influence * influence * uPointerStrength * motion;
    return point;
  }
  void main() {
    // Constant array indices also work on older WebGL mobile drivers.
    vec2 offset = uTextOffsets[0];
    vec2 bounds = uTextBounds[0];
    float progress = uTextProgress.x;
    float opacity = uTextOpacity.x;
    if (aGroup > 0.5) { offset = uTextOffsets[1]; bounds = uTextBounds[1]; progress = uTextProgress.y; opacity = uTextOpacity.y; }
    if (aGroup > 1.5) { offset = uTextOffsets[2]; bounds = uTextBounds[2]; progress = uTextProgress.z; opacity = uTextOpacity.z; }
    if (aGroup > 2.5) { offset = uTextOffsets[3]; bounds = uTextBounds[3]; progress = uTextProgress.w; opacity = uTextOpacity.w; }
    float isWork = step(2.5, aGroup);
    float enabled = mix(1.0 - uWorkMode, uWorkMode, isWork);
    float assembly = progress >= 1.0 ? 1.0 : ease(clamp((progress - aSeed.x * 0.07) / 0.90, 0.0, 1.0));
    float extent = min(uCanvas.x, uCanvas.y);
    vec2 target = vec2(offset.x + position.x - uCanvas.x * 0.5,
      uCanvas.y * 0.5 - offset.y - position.y);
    float along = aSeed.y - 0.5;
    vec2 normal = normalize(vec2(-uFieldSize.y * 0.82, uFieldSize.x * 0.92));
    vec2 origin = uFieldCenter + vec2(along * uFieldSize.x * 0.92, along * uFieldSize.y * 0.82)
      + normal * (aSeed.z - 0.5) * extent * 0.20;
    origin = mix(origin, uWorkOrigin.xy + vec2((aSeed.y - 0.5) * uWorkOrigin.z * 0.80,
      (aSeed.z - 0.5) * uWorkOrigin.w * 0.75), isWork);
    vec2 formed = mix(origin, target, assembly);
    formed += vec2(aSeed.y - 0.5, aSeed.z - 0.5) * sin(assembly * 3.14159265) * extent * 0.25;
    float motion = uMotionStrength * (1.0 - assembly);
    formed += vec2(sin(uTime * 0.32 + aSeed.w * 6.2), cos(uTime * 0.27 + aSeed.w * 7.4))
      * clamp(extent * 0.009, 2.5, 6.0) * motion;
    vec2 delta = formed - uPointer;
    float distance = length(delta);
    float influence = 1.0 - smoothstep(0.0, clamp(extent * 0.18, 80.0, 170.0), distance);
    vec2 outward = delta / max(1.0, distance);
    formed += (outward * 0.78 + vec2(-outward.y, outward.x) * 0.36)
      * 16.0 * influence * influence * uPointerStrength * motion;
    vec3 white = vec3(0.74, 0.82, 0.90);
    vColor = mix(white, color, smoothstep(0.60, 0.98, assembly));
    vAlpha = smoothstep(0.0, 0.08, progress) * (1.0 - opacity) * enabled;
    if (uExitProgress > 0.0 && isWork < 0.5) {
      float normalizedX = clamp(position.x / max(1.0, bounds.x), 0.0, 1.0);
      float release = smoothstep(0.0, 1.0, (uExitProgress - (1.0 - normalizedX) * 0.35) / 0.65);
      float travel = ease(clamp((release - 0.12) / 0.88, 0.0, 1.0));
      vec2 destination = uExitTarget + vec2(aSeed.y - 0.5, aSeed.z - 0.5) * extent * 0.08;
      formed = mix(target, destination, travel)
        + vec2((aSeed.y - 0.5) * extent * 0.12, sin(aSeed.z * 6.0) * extent * 0.08)
        * sin(travel * 3.14159265);
      formed = stir(formed, sin(travel * 3.14159265) * 0.65, aSeed, extent);
      vColor = mix(color, white, travel * 0.8);
      vAlpha = release * (1.0 - smoothstep(0.60, 1.0, release)) * enabled;
      assembly = 1.0;
    }
    gl_Position = projectionMatrix * modelViewMatrix * vec4(formed, 0.0, 1.0);
    gl_PointSize = min(uPointLimit, uPointSize * mix(0.75 + aSeed.w * 0.4, 1.0, assembly) * uPixelRatio);
    vAssembly = assembly;
  }
`;function ed({canvas:i,container:e=i?.parentElement,state:t,portraitData:n,assetUrl:r,loadPortraitData:s,onError:o,settle:a}){if(!i||!e||!t)throw new Error("Portrait requires canvas, container, and state");let l=kx(),c=new yi({canvas:i,alpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"});c.outputColorSpace=Tt,c.toneMapping=xn,c.setClearColor(0,0),c.autoClear=!1,c.debug.onShaderError=(G,Le,Ye,ot)=>{let wt=G.getProgramInfoLog(Le)||G.getShaderInfoLog(Ye)||G.getShaderInfoLog(ot);throw new Error(`Portrait shader compilation failed: ${wt||"unknown driver error"}`)};let u=new Pn,h=new kn(-1,1,1,-1,.1,2e3);h.position.z=1e3;let p=G=>c.extensions.has("KHR_parallel_shader_compile")?c.compileAsync(G,h):Promise.resolve(c.compile(G,h)),d=Math.min(window.devicePixelRatio||1,l.maxDpr),g=l.count,x,m,f,y,b=64,v=0,C=0,E=0,A=!1,I=!1,w=!1,M=!0,P=0,z=!0,F=!1,V=!1,X=0,k=0,$=0,W=0,se=0,he=0,xe=0,Re=0,We=[],Y=matchMedia("(prefers-reduced-motion: reduce)"),ee=!Y.matches,me=1e3/(l.low?30:45),te=0,Se=0,Ie=0,Be=new oe,dt=new oe,ke=!1,Ze=0,U=!1,St=0;function Fe(){return!I&&!w&&A&&M&&!document.hidden}function Ee(){return fn(Number(t.exitProgress)||0,0,1)}function ve(){return fn(Number(t.workProgress)||0,0,1)}function He(G){return t.textEnabled!==!1&&y&&(Number(t.textProgress?.[G])||0)>0&&(Number(t.textOpacity?.[G])||0)<1}function we(){if(t.workActive)return ve()>0&&ve()<.85;let G=Ee();return G>0?G<1:(Number(t.progress)||0)>0&&(Number(t.photoOpacity)||0)<1}function T(){if(!f||t.textEnabled===!1)return!1;if(t.workActive)return ve()>0&&(Number(t.workOpacity)||0)<1;let G=Ee();return G>0?G<1:[0,1,2].some(He)}function _(){return Fe()&&t.visible&&(we()||T())}function O(){if(!_()||!ee)return!1;let G=Number(t.progress)||0;return t.workActive?ve()>0&&ve()<.98:Ee()>0?Ee()<.99:G>.035&&G<.9||[0,1,2].some(Le=>He(Le)&&(Number(t.textProgress[Le])||0)<.98)}function J(){!P&&Fe()&&(z&&_()||F||O())&&(P=requestAnimationFrame(Te))}function j(G=!1){if(I)return;let Le=t.frame,Ye=t.viewport,ot=t.portal,wt=[t.progress,t.visible,t.photoOpacity,t.interactive,Le?.x,Le?.y,Le?.width,Le?.height,Ye?.width,Ye?.height,ot?.x,ot?.y,ot?.width,ot?.height,ot?.mix,t.exitProgress,t.exitTarget?.x,t.exitTarget?.y,t.workActive,t.textEnabled,t.workProgress,t.workOpacity,t.workOrigin?.x,t.workOrigin?.y,t.workOrigin?.width,t.workOrigin?.height,t.workOffset?.x,t.workOffset?.y,...[0,1,2].flatMap(at=>[t.textProgress?.[at],t.textOpacity?.[at],t.textOffsets?.[at]?.x,t.textOffsets?.[at]?.y])];(G||wt.some((at,Mt)=>at!==We[Mt]))&&(z=!0),We=wt,_()||(P&&cancelAnimationFrame(P),P=0,$=0,Se=0,te=0,F=V,Ze=0,ae()),t.interactive===!1&&ae(),Ye&&(Ye.width!==X||Ye.height!==k)&&Z(),J()}function Z(){if(I)return;let G=e.getBoundingClientRect(),Le=t.viewport,Ye=Math.max(1,Math.round(Le?.width||G.width||window.innerWidth)),ot=Math.max(1,Math.round(Le?.height||G.height||window.innerHeight));(Ye!==X||ot!==k||c.getPixelRatio()!==d)&&(X=Ye,k=ot,c.setPixelRatio(d),c.setSize(X,k,!1),h.left=-X/2,h.right=X/2,h.top=k/2,h.bottom=-k/2,h.updateProjectionMatrix(),z=!0),J()}function Me(){let G=t.frame||{x:0,y:0,width:X,height:k},Le=Number.isFinite(G.x)?G.x:0,Ye=Number.isFinite(G.y)?G.y:0,ot=Math.max(1,Number.isFinite(G.width)?G.width:X),wt=Math.max(1,Number.isFinite(G.height)?G.height:k),at=Math.max(x.size.y,x.size.x/(ot/wt))*.55,Mt=m.material.uniforms;Mt.uTargetScale.value=wt/(2*at),Mt.uTargetCenter.value.set(Le+ot/2-X/2,k/2-Ye-wt/2);let ut=t.portal,nn=ut&&[ut.x,ut.y,ut.width,ut.height].every(Number.isFinite)&&ut.width>0&&ut.height>0,Wt=nn?fn(Number(ut.mix)||0,0,1):1,Xt=nn?Tr.lerp(ut.width,X,Wt):X,pn=nn?Tr.lerp(ut.height,k,Wt):k,$t=nn?ut.x*(1-Wt):0,le=nn?ut.y*(1-Wt):0;Mt.uViewport.value.set(Xt,pn),Mt.uFieldCenter.value.set($t+Xt/2-X/2,k/2-le-pn/2);let Ae=t.exitTarget||{x:X/2,y:k/2};Mt.uExitTarget.value.set(Ae.x-X/2,k/2-Ae.y);let Je=t.workOrigin||{x:X/2,y:k/2,width:X*.4,height:k*.3};Mt.uWorkOrigin.value.set(Je.x+Je.width/2-X/2,k/2-Je.y-Je.height/2,Je.width,Je.height);let rt=t.workOffset||{x:X/2,y:k/2},S=y?.groupBounds?.[3]||{width:1,height:1};if(Mt.uWorkTarget.value.set(rt.x+S.width/2-X/2,k/2-rt.y-S.height/2),f){let D=f.material.uniforms;D.uCanvas.value.set(X,k),D.uFieldCenter.value.copy(Mt.uFieldCenter.value),D.uFieldSize.value.copy(Mt.uViewport.value),D.uExitTarget.value.copy(Mt.uExitTarget.value),D.uWorkOrigin.value.copy(Mt.uWorkOrigin.value),D.uTextProgress.value.set(...[0,1,2].map(B=>fn(Number(t.textProgress?.[B])||0,0,1)),ve()),D.uTextOpacity.value.set(...[0,1,2].map(B=>fn(Number(t.textOpacity?.[B])||0,0,1)),fn(Number(t.workOpacity)||0,0,1)),D.uTextOffsets.value.forEach((B,H)=>{let N=H===3?rt:t.textOffsets?.[H];B.set(Number(N?.x)||0,Number(N?.y)||0)})}}function K(){c.setViewport(0,0,X,k),c.clear(!0,!1,!1),V=!1,F=!1,xe=0}function ie(){t.noAdapt||he>=2||(g=Math.max(2400,Math.floor(g*.72)),m.geometry.setDrawRange(0,g),d=Math.max(.8,d-.2),he++,Z(),W=0)}function Te(G){if(P=0,!Fe()){$=0,Se=0,te=0;return}if(!_()){F&&K(),z=!1,$=0,Se=0,te=0;return}let Le=O(),Ye=z;if(!Ye&&(!Le||G<te-.5)){Le&&J();return}let ot=Se?Math.min(.06,Math.max(0,(G-Se)/1e3)):0;Se=G,Le&&(Ie+=ot),U&&G>=St&&(U=!1),Be.lerp(dt,1-Math.exp(-ot*14));let wt=U&&Le&&t.interactive!==!1?1:0;Ze+=(wt-Ze)*(1-Math.exp(-ot*(wt?14:4.3))),Ze<.001&&!wt&&(Ze=0);let at=fn(Number(t.progress)||0,0,1),Mt=t.workActive||Ee()>0?1:1-fn(Number(t.photoOpacity)||0,0,1),ut=m.material.uniforms;if(ut.uProgress.value=at,ut.uPixelRatio.value=d,ut.uOpacity.value=Mt,ut.uTime.value=Ie,ut.uMotionStrength.value=ee?t.workActive||Ee()>0?1:Ac(.035,.12,at)*(1-Ac(.74,.9,at)):0,ut.uPointer.value.copy(Be),ut.uPointerStrength.value=Ze,ut.uExitProgress.value=Ee(),ut.uWorkProgress.value=ve(),ut.uWorkMode.value=t.workActive?1:0,m.visible=we(),m.geometry.setDrawRange(0,t.workActive?Math.min(g,l.low?280:480):g),f){let $t=f.material.uniforms;$t.uTime.value=Ie,$t.uPixelRatio.value=d,$t.uMotionStrength.value=ee?1:0,$t.uPointerStrength.value=Ze,$t.uPointer.value.copy(Be),$t.uExitProgress.value=Ee(),$t.uWorkMode.value=t.workActive?1:0,f.visible=T()}Me();let nn=performance.now();K();try{c.render(u,h)}catch($t){be(),o?.($t);return}xe=c.info.render.calls,V=m.visible||!!f?.visible,se++,z=!1;let Wt=G-$,Xt=performance.now()-nn,pn=Ye?1e3/60:me;$&&Wt<150&&(Le||Math.abs(at-Re)>5e-4)&&(W=Wt>pn*1.8||Xt>20?W+1:Math.max(0,W-2),W>=18&&ie()),$=G,Re=at,te=Ye||!te?G+me:Math.max(te+me,G+1),(z||Le)&&J()}function re(G){return!!G?.closest?.('nav, .nav-wrap, a, button, input, select, textarea, summary, [role="button"], [role="link"], [contenteditable], [data-no-particles]')}function ae(){U=!1,St=0}function Ce(G,Le,Ye,ot=!1){if(!O()||t.interactive===!1||re(G.target)){ae();return}dt.set(Le-X/2,k/2-Ye),(!ke||Ze<.001)&&Be.copy(dt),ke=!0,U=!0,St=ot?1/0:performance.now()+700,z=!0,J()}function _e(G){if(G.isPrimary===!1||G.pointerType==="mouse"&&G.buttons>1){ae();return}Ce(G,G.clientX,G.clientY,G.pointerType==="touch")}function pe(G){!G.relatedTarget&&G.pointerType!=="touch"&&ae()}function Xe(G){if(G.touches.length!==1){ae();return}let Le=G.touches[0];Ce(G,Le.clientX,Le.clientY,!0)}function ze(){ee=!Y.matches,ae(),Ze=0,Se=0,te=0,j(!0)}function ct(){$=0,j(!0)}function L(G){G.preventDefault(),w=!0,j(),o?.(new Error("Portrait WebGL context was lost"))}function ce(){w=!1,j(!0)}window.addEventListener("pointermove",_e,{passive:!0}),window.addEventListener("pointerdown",_e,{passive:!0}),window.addEventListener("pointerup",ae,{passive:!0}),window.addEventListener("pointercancel",ae,{passive:!0}),window.addEventListener("pointerout",pe,{passive:!0}),window.addEventListener("touchstart",Xe,{passive:!0}),window.addEventListener("touchmove",Xe,{passive:!0}),window.addEventListener("touchend",ae,{passive:!0}),window.addEventListener("touchcancel",ae,{passive:!0}),window.addEventListener("blur",ae),Y.addEventListener?Y.addEventListener("change",ze):Y.addListener(ze),document.addEventListener("visibilitychange",ct),i.addEventListener("webglcontextlost",L),i.addEventListener("webglcontextrestored",ce);let q=typeof ResizeObserver<"u"?new ResizeObserver(Z):null;q?.observe(e),q||window.addEventListener("resize",Z);let Q=typeof IntersectionObserver<"u"?new IntersectionObserver(G=>{M=G.some(Le=>Le.isIntersecting),j(!0)}):null;Q?.observe(i),Z();let de=Promise.resolve().then(()=>n??s?.(r)).then(async G=>{if(I)throw new Error("Portrait was disposed before loading finished");if(!G?.positions?.length||G.positions.length%3||!G.indices?.length||G.indices.length%3||G.colors?.length!==G.positions.length)throw new Error("Portrait asset must include matching positions/colors and triangle indices");x=Hx(G),E=G.indices.length/3;let Le=Vx(G,x,l.count),Ye=c.getContext();if(b=Ye.getParameter(Ye.ALIASED_POINT_SIZE_RANGE)[1],m=new ri(Le,new Lt({uniforms:{uProgress:{value:0},uTime:{value:0},uMotionStrength:{value:0},uPointerStrength:{value:0},uOpacity:{value:0},uPointSize:{value:l.pointSize},uPixelRatio:{value:d},uPointLimit:{value:b},uTargetScale:{value:1},uBottomY:{value:-x.size.y*.5},uPortraitHeight:{value:x.size.y},uPortraitWidth:{value:x.size.x},uExitProgress:{value:0},uWorkProgress:{value:0},uWorkMode:{value:0},uExitTarget:{value:new oe},uWorkTarget:{value:new oe},uWorkOrigin:{value:new lt},uTargetCenter:{value:new oe},uViewport:{value:new oe(X,k)},uFieldCenter:{value:new oe},uPointer:{value:new oe}},vertexShader:Gx,fragmentShader:jh,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})),m.frustumCulled=!1,u.add(m),Z(),Me(),await p(u),await a?.(),I)throw new Error("Portrait was disposed before shader preparation finished");return K(),c.render(u,h),A=!0,j(!0),et}).catch(G=>{throw I||(be(),o?.(G)),G});async function fe(G){if(await de,I)throw new Error("Portrait has been disposed");if(!G?.positions?.length||G.positions.length%3||G.colors?.length!==G.positions.length||G.groupIds?.length!==G.positions.length/3||G.groupBounds?.length!==4)throw new Error("Text targets require matching positions/colors/groups and four group bounds");let Le=++C,Ye=l.low?1800:4e3;if(G.groupIds.length>Ye)throw new Error(`Text targets exceed the ${Ye}-point device budget`);let ot=Wx(G),wt=new Lt({uniforms:{uTextProgress:{value:new lt},uTextOpacity:{value:new lt(1,1,1,1)},uTextOffsets:{value:Array.from({length:4},()=>new oe)},uTextBounds:{value:G.groupBounds.map(ut=>new oe(ut.width,ut.height))},uCanvas:{value:new oe(X,k)},uFieldCenter:{value:new oe},uFieldSize:{value:new oe(X,k)},uExitTarget:{value:new oe},uWorkOrigin:{value:new lt},uPointer:{value:new oe},uExitProgress:{value:0},uWorkMode:{value:0},uTime:{value:0},uMotionStrength:{value:0},uPointerStrength:{value:0},uPointSize:{value:l.low?1.65:1.6},uPixelRatio:{value:d},uPointLimit:{value:b},uOpacity:{value:1}},vertexShader:Xx,fragmentShader:jh,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),at=new ri(ot,wt);at.frustumCulled=!1,at.visible=!1;let Mt=new Pn;Mt.add(at);try{if(at.visible=!0,await p(Mt),at.visible=!1,await a?.(),I)throw new Error("Portrait disposed while preparing text")}catch(ut){throw Mt.remove(at),ot.dispose(),wt.dispose(),ut}return Mt.remove(at),Le!==C?(ot.dispose(),wt.dispose(),G.groupBounds):(u.add(at),f&&(u.remove(f),f.geometry.dispose(),f.material.dispose()),f=at,y=G,v=G.groupIds.length,Me(),j(!0),G.groupBounds)}function ne(){let G=fn(Number(t.progress)||0,0,1),Le=fn(Number(t.photoOpacity)||0,0,1),Ye=t.visible?t.workActive?"work-title":Ee()>0&&Ee()<1?"intro-disintegration":T()&&Le===1?"text-assembly":Le===1?"photo":G<=.005?"waiting":G<.58?"rising-stars":G<.9?"face-assembly":G<.94?"settled-dots":"photo-crossfade":"hidden";return{ready:A,visible:!!t.visible,running:!!P,particles:g,textParticles:v,textBudget:l.low?1800:4e3,textEnabled:t.textEnabled!==!1,textGroups:y?.groupBounds.map(ot=>ot.count)||[],textProgress:[0,1,2].map(ot=>Number(t.textProgress?.[ot])||0),textOpacity:[0,1,2].map(ot=>Number(t.textOpacity?.[ot])||0),exitProgress:Ee(),workActive:!!t.workActive,workProgress:ve(),workOpacity:fn(Number(t.workOpacity)||0,0,1),dpr:d,drawCalls:xe,renderedFrames:se,qualityReductions:he,sourceTriangles:E,geometries:c.info.memory.geometries,textures:c.info.memory.textures,kind:"photographic-particles",interactive:O()&&t.interactive!==!1,motionActive:O(),motionEnabled:ee,ambientFps:l.low?30:45,motionTime:Ie,pointerStrength:Ze,pointerActive:U,portalFramed:!!t.portal,progress:G,photoOpacity:Le,phase:Ye}}function be(){I||(I=!0,P&&cancelAnimationFrame(P),P=0,q?.disconnect(),Q?.disconnect(),window.removeEventListener("resize",Z),window.removeEventListener("pointermove",_e),window.removeEventListener("pointerdown",_e),window.removeEventListener("pointerup",ae),window.removeEventListener("pointercancel",ae),window.removeEventListener("pointerout",pe),window.removeEventListener("touchstart",Xe),window.removeEventListener("touchmove",Xe),window.removeEventListener("touchend",ae),window.removeEventListener("touchcancel",ae),window.removeEventListener("blur",ae),Y.removeEventListener?Y.removeEventListener("change",ze):Y.removeListener(ze),document.removeEventListener("visibilitychange",ct),i.removeEventListener("webglcontextlost",L),i.removeEventListener("webglcontextrestored",ce),m?.geometry.dispose(),m?.material.dispose(),f?.geometry.dispose(),f?.material.dispose(),c.dispose(),c.forceContextLoss())}let et={ready:de,update:j,resize:Z,setTextTargets:fe,stats:ne,dispose:be};return et}var ko=new Map,qx=[[420,39],[409,41],[404,39],[399,43],[389,42],[383,48],[377,47],[369,54],[366,53],[360,62],[353,63],[349,70],[345,71],[339,79],[334,79],[330,89],[324,88],[322,98],[316,99],[315,106],[309,111],[310,116],[303,125],[303,133],[298,140],[299,148],[294,154],[296,163],[291,170],[294,179],[292,187],[298,195],[299,203],[304,208],[303,216],[308,222],[307,229],[314,237],[322,243],[324,247],[324,254],[325,261],[327,272],[329,280],[333,286],[337,296],[344,304],[343,309],[347,313],[352,314],[354,317],[355,318],[358,318.5],[360,319],[362,322],[365,326],[368,330],[371,334],[374.5,339],[378,344],[381,349],[383,354],[382.8,360],[382.7,370],[383.1,380],[383.6,387],[383.8,391],[382.8,393],[372,393.8],[364,395],[360,397.5],[358,400],[355,408],[351,416],[342,423],[330,435],[313,443],[294,449],[276,459],[255,468],[236,477],[217,487],[204,497],[191,512],[181,527],[169,547],[159,567],[153,587],[155,607],[156,625],[160,653],[162,680],[164,700],[166,760],[183,830],[201,896],[225,941],[708,941],[750,933],[799,917],[816,897],[826,850],[831,816],[829,774],[817,719],[807,672],[803,648],[797,626],[790,607],[785,588],[783,573],[778,556],[773,542],[767,528],[759,516],[750,505],[739,495],[726,487],[714,480],[700,474],[690,469],[678,466],[667,462],[654,460],[643,455],[634,451],[624,447],[614,442],[604,438],[593,433],[586,429],[578,424],[570,419],[565,412],[561,404],[552,400],[546.5,398],[543.2,394],[540.8,390],[539.4,385],[538.2,380],[537.6,375],[536.8,370],[536.3,365],[535.8,360],[535.3,355],[535.1,350],[534.8,345],[534.3,340],[533.7,335],[534.3,330],[538.2,325],[540.4,320],[542.4,315],[543.6,310],[544.8,305],[545.3,300],[546.2,295],[547,290],[547.6,285],[547.7,280],[547.4,278],[554,277],[560.7,276],[563.5,274],[565,272],[566,270],[567,265],[567,256],[566,249],[565,243],[565,235],[562,223],[563,218],[560,210],[562,200],[561,192],[558,184],[559,177],[555,168],[554,156],[550,148],[549,138],[545,126],[540,116],[540,107],[531,100],[526,89],[519,86],[515,80],[508,77],[502,69],[494,68],[488,61],[479,59],[472,54],[461,54],[455,47],[447,46],[440,42],[433,44]];function Yx(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[(n+i.length-1)%i.length],s=i[n],o=r[1]<=e,a=s[1]<=e;if(o!==a){let l=(e-r[1])/(s[1]-r[1]);t.push([r[0]+(s[0]-r[0])*l,e])}a&&t.push(s.slice())}return t}function Zx(i,e=1.25){let t=i.map((o,a)=>{let l=i[(a+i.length-1)%i.length],c=i[(a+1)%i.length],u=Math.hypot(o[0]-l[0],o[1]-l[1]),h=Math.hypot(c[0]-o[0],c[1]-o[1]),p=Math.min(e,u*.35,h*.35);return{point:o,enter:o.map((d,g)=>d+(l[g]-d)*p/u),leave:o.map((d,g)=>d+(c[g]-d)*p/h)}}),n=[],r=o=>o.map(a=>Number(a.toFixed(3))).join(","),s=[`M${r(t[0].enter)}`];for(let{point:o,enter:a,leave:l}of t){s.push(`L${r(a)}Q${r(o)} ${r(l)}`),n.push(a);for(let c of[.25,.5,.75,1])n.push(o.map((u,h)=>(1-c)**2*a[h]+2*(1-c)*c*u+c**2*l[h]))}return{samples:n,path:s.join("")+"Z"}}var id=Zx(qx),rd=Yx(id.samples,700),Wn={left:150,top:37,width:662.9574468085107,height:663},{left:sd,top:od}=Wn,td=rd.map(([i,e])=>[(i-sd)/Wn.width,(e-od)/Wn.height]),Jx=`<svg xmlns="http://www.w3.org/2000/svg" width="1672" height="941" viewBox="0 0 1672 941"><path fill="white" d="${id.path}"/></svg>`,Kx=`url("data:image/svg+xml,${encodeURIComponent(Jx)}")`,Rc=Object.freeze({sourceWidth:1672,sourceHeight:941,sourceRect:Wn,sourceContour:rd,normalizedContour:td,maskImage:Kx,aspect:Wn.width/Wn.height,clipPath:`polygon(${td.map(([i,e])=>`${(i*100).toFixed(6)}% ${(e*100).toFixed(6)}%`).join(",")})`,imageCss:{width:`${(1672/Wn.width*100).toFixed(6)}%`,height:`${(941/Wn.height*100).toFixed(6)}%`,left:`${(-sd/Wn.width*100).toFixed(6)}%`,top:`${(-od/Wn.height*100).toFixed(6)}%`}});function gs(i){return i.reason||new DOMException("Portrait loading was cancelled.","AbortError")}function Qx(i,e){return e?e.aborted?Promise.reject(gs(e)):new Promise((t,n)=>{let r=()=>n(gs(e));e.addEventListener("abort",r,{once:!0}),i.then(t,n).finally(()=>e.removeEventListener("abort",r))}):i}function jx(i){if(ko.has(i.href))return ko.get(i.href);let e=new Promise((t,n)=>{let r=document.createElement("script");r.async=!0,r.src=i.href,r.onload=()=>{r.remove();let s=globalThis.PortraitEmbeddedData;if(s?.version!==6||s.encoding!=="base64"||typeof s.data!="string"){n(new Error("Invalid embedded portrait asset."));return}try{let o=atob(s.data),a=new Uint8Array(o.length);for(let l=0;l<o.length;l++)a[l]=o.charCodeAt(l);globalThis.PortraitEmbeddedData===s&&delete globalThis.PortraitEmbeddedData,t(a.buffer)}catch(o){n(o)}},r.onerror=()=>{r.remove(),n(new Error("Embedded portrait asset unavailable."))},document.head.append(r)});return ko.set(i.href,e),e.catch(()=>ko.delete(i.href)),e}function nd(i,{textureUrl:e=""}={}){let t=new DataView(i);if(i.byteLength<40||t.getUint32(0,!1)!==1380208689)throw new Error("Invalid portrait asset.");let n=t.getUint32(4,!0),r=t.getUint32(8,!0);if(t.getUint32(36,!0)!==1||!n||n>=65536||r%3||i.byteLength!==40+n*13+r*2)throw new Error("Unsupported portrait asset layout.");let o=[0,1,2].map(d=>t.getFloat32(12+d*4,!0)),a=[0,1,2].map(d=>t.getFloat32(24+d*4,!0));if(o.some((d,g)=>!Number.isFinite(d)||!Number.isFinite(a[g])||a[g]<=d))throw new Error("Invalid portrait bounds.");let l=new Float32Array(n*3),c=new Float32Array(n*3),u=new Float32Array(n*2),h=new Uint16Array(r),p=40;for(let d=0;d<l.length;d++){let g=d%3;l[d]=o[g]+t.getUint16(p,!0)/65535*(a[g]-o[g]),p+=2}for(let d=0;d<u.length;d++)u[d]=t.getUint16(p,!0)/65535,p+=2;for(let d=0;d<c.length;d++)c[d]=t.getUint8(p++)/255;for(let d=0;d<r;d++)if(h[d]=t.getUint16(p,!0),p+=2,h[d]>=n)throw new Error("Invalid portrait triangle.");return{positions:l,colors:c,uvs:u,indices:h,textureUrl:e,bounds:{min:o,max:a},presentation:Rc,kind:"photo-depth-approximation"}}async function ad({signal:i,baseUrl:e}={}){let t=new URL(e||"assets/face/",document.baseURI),n=new URL("portrait-depth.bin.gz?v=6",t),r=new URL("portrait-depth.bin?v=6",t),s=new URL("../roshan-reveal-after.webp",t).href;if(i?.aborted)throw gs(i);if(t.protocol==="file:"){let u=new URL("portrait-data.js?v=6",t),h=await Qx(jx(u),i);if(i?.aborted)throw gs(i);return nd(h,{textureUrl:s})}let a=await fetch(typeof DecompressionStream=="function"?n:r,{signal:i,cache:"force-cache"});if(!a.ok)throw new Error(`Portrait asset unavailable (${a.status}).`);let l=await a.arrayBuffer(),c=new Uint8Array(l,0,Math.min(l.byteLength,2));if(c[0]===31&&c[1]===139&&(l=await new Response(new Blob([l]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()),i?.aborted)throw gs(i);return nd(l,{textureUrl:s})}function $x(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ev(i){let e=i.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);return e?[Number(e[1])/255,Number(e[2])/255,Number(e[3])/255]:[.9,.91,.94]}function tv(i,e){return e.textTransform==="uppercase"?i.toUpperCase():e.textTransform==="lowercase"?i.toLowerCase():i}function nv(i,e){if(!i)return null;let t=i.getBoundingClientRect(),n=t.width,r=t.height;if(n<=0||r<=0||t.width<=0||t.height<=0)return null;let s=t.width/n,o=t.height/r,a=3,l=Math.min(1,4096/(n+a*2),4096/(r+a*2)),c=document.createElement("canvas");c.width=Math.max(1,Math.ceil((n+a*2)*l)),c.height=Math.max(1,Math.ceil((r+a*2)*l));let u=c.getContext("2d",{willReadFrequently:!0});if(!u)return null;u.scale(l,l),u.textBaseline="alphabetic";let h=document.createTreeWalker(i,NodeFilter.SHOW_TEXT),p=document.createRange(),d;for(;d=h.nextNode();){let f=d.parentElement;if(!f||f.closest('[aria-hidden="true"], [data-particle-decoration], script, style'))continue;let y=getComputedStyle(f);if(y.display==="none")continue;u.font=`${y.fontStyle} ${y.fontWeight} ${y.fontSize} ${y.fontFamily}`,u.fillStyle=y.color;let b=u.measureText("Hg"),v=parseFloat(y.fontSize)||16,C=b.fontBoundingBoxAscent??b.actualBoundingBoxAscent??v*.8,E=b.fontBoundingBoxDescent??b.actualBoundingBoxDescent??v*.2;for(let A=0;A<d.length;){let w=d.textContent.codePointAt(A)>65535?2:1,M=d.textContent.slice(A,A+w);p.setStart(d,A),p.setEnd(d,A+w);let P=p.getBoundingClientRect();if(A+=w,!M.trim()||P.width<=0||P.height<=0)continue;let z=(P.left-t.left)/s,F=(P.top-t.top)/o,V=P.height/o,X=F+(V-C-E)*.5+C;u.fillText(tv(M,y),z+a,X+a)}}p.detach?.();let g=u.getImageData(0,0,c.width,c.height).data,x=[],m=Math.max(1,Math.round(l*1.7));for(let f=0;f<c.height;f+=m)for(let y=0;y<c.width;y+=m){let b=(f*c.width+y)*4;g[b+3]<80||x.push([(y+.5)/l-a,(f+.5)/l-a,g[b]/255,g[b+1]/255,g[b+2]/255])}return{group:e,width:n,height:r,candidates:x,color:ev(getComputedStyle(i).color)}}async function ld(i,{maxPoints:e=4e3}={}){await document.fonts?.ready;let t=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<721||(navigator.deviceMemory||8)<=4||(navigator.hardwareConcurrency||8)<=4,n=Math.max(0,Math.min(t?1800:4e3,Math.floor(e))),r=Array.from({length:4},(x,m)=>nv(i[m],m)),s=r.reduce((x,m)=>x+(m?.candidates.length||0),0),o=r.map(x=>Math.sqrt(x?.candidates.length||0)),a=o.reduce((x,m)=>x+m,0),l=r.map(x=>({width:x?.width||1,height:x?.height||1,count:0})),c=[],u=Math.min(n,s),h=$x(2119695054);r.forEach((x,m)=>{if(!x?.candidates.length||!u)return;let f=o.slice(m).reduce((b,v)=>b+v,0),y=Math.min(x.candidates.length,f>0?Math.max(1,Math.round(u*o[m]/f)):0);for(let b=0;b<y;b++){let v=Math.min(x.candidates.length-1,Math.floor((b+h())*x.candidates.length/y));c.push({group:m,value:x.candidates[v]})}l[m].count=y,u-=y});let p=new Float32Array(c.length*3),d=new Float32Array(c.length*3),g=new Float32Array(c.length);return c.forEach(({group:x,value:m},f)=>{p.set([m[0],m[1],0],f*3),d.set(m.slice(2,5),f*3),g[f]=x}),{positions:p,colors:d,groupIds:g,groupBounds:l,count:c.length,colorSpace:"srgb",totalWeight:a}}var ud=i=>Tr.clamp(Number(i)||0,0,1),cd=(i,e,t)=>{let n=ud((t-i)/(e-i));return n*n*(3-2*n)};function iv(){let i=navigator.deviceMemory||8,e=navigator.hardwareConcurrency||8,t=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<721,n=t||i<=4||e<=4;return{low:n,count:i<=2?4e3:n?7e3:16e3,dpr:i<=2?1:t?2:n?1.25:1.5,pointSize:t?1.6:n?1.8:1.7,ambientFps:n?30:45}}function rv(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var sv=[[.1514,.5138],[.8185,.5151]],Cc=[.553,.482];function ov(i,e){let t=new Float32Array(e),n=new Uint8Array(e),r=new Float32Array(e),s=new Uint8Array(e);for(let g=0;g<e;g++){let x=i.source[g*2],m=i.source[g*2+1],[f,y]=sv.map(([C,E])=>Math.hypot(x-C,(m-E)*1.77777778));t[g]=Math.min(f,y),n[g]=f<=y?1:0;let b=i.target[g*2],v=i.target[g*2+1];r[g]=Math.hypot(b-Cc[0],(v-Cc[1])*1.7768),s[g]=b<Cc[0]?1:0}let o=g=>Array.from({length:e},(x,m)=>m).sort((x,m)=>g[x]-g[m]),a=o(t),l=o(r),c=new Uint32Array(e);l.forEach((g,x)=>{c[g]=x});let u=[l.filter(g=>!s[g]),l.filter(g=>s[g])],h=[0,0],p=Math.max(16,Math.round(e*.04)),d=new Uint32Array(e);return a.forEach((g,x)=>{let m=n[g],f=1-m,y=u[m][h[m]],b=y!==void 0&&(c[y]<=x+p||h[f]>=u[f].length)?m:f;d[g]=u[b][h[b]++]}),d}function av(i,e){let t=ov(i,e),n=new Float32Array(e*3),r=new Float32Array(e*2),s=new Float32Array(e*3),o=new Float32Array(e*3),a=new Float32Array(e*4),l=new Pe,c=rv(186320324);for(let h=0;h<e;h++){let p=i.source[h*2],d=i.source[h*2+1],g=t[h],x=i.target[g*2],m=i.target[g*2+1];if(![p,d,x,m].every(Number.isFinite))throw new Error("BMW bridge has an invalid photo sample");n.set([p,d,0],h*3),r.set([x,m],h*2);let f=h*3,y=g*3,b=i.sourceColors,v=i.targetColors;if(![b[f],b[f+1],b[f+2],v[y],v[y+1],v[y+2]].every(Number.isFinite))throw new Error("BMW bridge has an invalid sample color");l.setRGB(b[f],b[f+1],b[f+2],Tt),s.set([l.r,l.g,l.b],f),l.setRGB(v[y],v[y+1],v[y+2],Tt),o.set([l.r,l.g,l.b],f);let C=v[y]*.2126+v[y+1]*.7152+v[y+2]*.0722;a.set([c(),c(),c(),C],h*4)}let u=new At;return u.setAttribute("position",new pt(n,3)),u.setAttribute("aTarget",new pt(r,2)),u.setAttribute("aSourceColor",new pt(s,3)),u.setAttribute("aTargetColor",new pt(o,3)),u.setAttribute("aSeed",new pt(a,4)),u.setDrawRange(0,e),u}var lv=`
  attribute vec2 aTarget;
  attribute vec3 aSourceColor;
  attribute vec3 aTargetColor;
  attribute vec4 aSeed;
  uniform float uProgress;
  uniform float uTime;
  uniform float uMotionStrength;
  uniform float uPointerStrength;
  uniform float uVelocity;
  uniform float uPixelRatio;
  uniform float uPointSize;
  uniform float uPointLimit;
  uniform vec2 uViewport;
  uniform vec2 uPointer;
  uniform vec4 uSource;
  uniform vec4 uTarget;
  uniform vec4 uSourceFrame;
  uniform vec4 uTargetFrame;
  uniform vec4 uReveal;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vSettled;
  float ease(float t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
  }
  vec2 photoPoint(vec2 uv, vec4 rect) {
    return vec2(rect.x + uv.x * rect.z - uViewport.x * 0.5,
      uViewport.y * 0.5 - rect.y - uv.y * rect.w);
  }
  float frameAlpha(vec2 point, vec4 frame) {
    vec2 pixel = vec2(point.x + uViewport.x * 0.5, uViewport.y * 0.5 - point.y);
    vec2 uv = (pixel - frame.xy) / frame.zw;
    return clamp(uv.x / 0.06, 0.0, 1.0) * clamp((1.0 - uv.x) / 0.06, 0.0, 1.0)
      * clamp(uv.y / 0.14, 0.0, 1.0) * clamp((1.0 - uv.y) / 0.14, 0.0, 1.0);
  }
  void main() {
    vec2 source = photoPoint(position.xy, uSource);
    vec2 target = photoPoint(aTarget, uTarget);
    vec2 lampLeft = (position.xy - vec2(0.1514, 0.5138)) * vec2(1.0, 1.77777778);
    vec2 lampRight = (position.xy - vec2(0.8185, 0.5151)) * vec2(1.0, 1.77777778);
    float metric = min(min(length(lampLeft), length(lampRight)), 0.56);
    // Exactly matches the owner's native BMW image release mask.
    float release = smoothstep(0.10 + metric * 0.30, 0.155 + metric * 0.30, uProgress);
    float extent = min(uViewport.x, uViewport.y);
    float along = aSeed.y - 0.5;
    float depth = aSeed.z - 0.5;
    // The camera cranes up between the shots, as the photographs do: the car
    // sinks out of the frame while the cockpit settles in from above.
    float sink = smoothstep(0.33, 0.72, uProgress);
    float settle = clamp((uProgress - 0.30) / 0.40, 0.0, 1.0);
    settle = 1.0 - (1.0 - settle) * (1.0 - settle) * (1.0 - settle);
    vec2 from = source - vec2(0.0, uViewport.y * 0.32 * sink);
    vec2 to = target + vec2(0.0, uViewport.y * 0.28 * (1.0 - settle));
    // Points leave in the headlamp wave, so the car still comes apart outward
    // from its lamps; they were paired to land from the display outward.
    float leave = 0.155 + metric * 0.50 + aSeed.x * 0.03;
    float m = clamp((uProgress - leave) / 0.20, 0.0, 1.0);
    float travel = ease(m);
    float arc = sin(m * 3.14159265);
    // Two wings of light: each lamp's stream swings out to its own side and
    // up before folding into the dashboard.
    float side = sign(position.x - 0.485);
    vec2 path = mix(from, to, travel)
      + vec2(side * extent * 0.10, extent * 0.08) * arc * (0.8 + aSeed.y * 0.4);
    vec2 field = mix(from, to, 0.5) / extent;
    path += vec2(sin(field.y * 4.1 + 1.3), sin(field.x * 3.3 - 0.7)) * extent * 0.018 * arc;
    // The streams have a little weight: scrolling quickly stretches them out
    // behind their heads, and they catch up and settle when scrolling stops.
    vec2 heading = normalize(to - from + vec2(0.0, 0.001));
    path -= heading * clamp(uVelocity, -3.0, 3.0) * extent * 0.03 * arc;
    // Mid-flight the points swoop gently toward the viewer.
    float swoop = 1.0 + arc * (0.06 + aSeed.z * 0.10);
    vec2 formed = path * swoop;
    float gathering = smoothstep(0.75, 1.0, m);
    float motion = uMotionStrength * (1.0 - gathering);
    float phase = along * 6.2 + depth * 2.5;
    formed += vec2(sin(uTime * 0.31 + phase), cos(uTime * 0.26 + phase * 1.15))
      * clamp(extent * 0.004, 1.5, 3.0) * motion;
    // The cursor (or a finger) gently parts the points and lights them.
    vec2 delta = formed - uPointer;
    float distance = length(delta);
    float influence = 1.0 - smoothstep(0.0, clamp(extent * 0.18, 80.0, 170.0), distance);
    float touch = influence * influence * uPointerStrength * motion;
    vec2 outward = delta / max(1.0, distance);
    formed += (outward * 0.8 + vec2(-outward.y, outward.x) * 0.35) * 14.0 * touch;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(formed, 0.0, 1.0);

    // The photograph materialises outward from the Bosch display, a front
    // the owner moves (uReveal: centre, radius and feather, in page pixels).
    // Points behind the front give way to the real pixels; points on it glow
    // as a soft seam, and points ahead of it twinkle faintly, so a paused
    // frame reads as the cockpit powering on rather than as a still grain.
    vec2 landedAt = vec2(to.x + uViewport.x * 0.5, uViewport.y * 0.5 - to.y);
    float front = length(landedAt - uReveal.xy);
    float opened = step(0.5, uReveal.z);
    float revealed = opened * (1.0 - smoothstep(uReveal.z - uReveal.w, uReveal.z - uReveal.w * 0.25, front));
    float seam = opened * smoothstep(uReveal.z - uReveal.w, uReveal.z - uReveal.w * 0.4, front)
      * (1.0 - smoothstep(uReveal.z - uReveal.w * 0.4, uReveal.z + uReveal.w * 0.35, front));
    float waiting = gathering * (1.0 - revealed) * (1.0 - seam);

    float size = uPointSize * swoop * (1.0 + 0.25 * arc) * (1.0 + 0.45 * seam);
    gl_PointSize = min(uPointLimit, max(1.2, size) * uPixelRatio);

    vec3 coolWhite = vec3(0.72, 0.84, 1.0);
    float energyFront = sin(release * 3.14159265) * (1.0 - smoothstep(0.0, 0.15, m));
    vec3 energizedSource = mix(aSourceColor, coolWhite, energyFront * 0.16);
    // A restrained temporary tint keeps the early settled structure visible;
    // it returns to exact photograph RGB before the native image handoff.
    vec3 readableTarget = max(aTargetColor, vec3(0.030, 0.035, 0.042));
    readableTarget = mix(readableTarget, aTargetColor, smoothstep(0.76, 0.85, uProgress));
    // In flight every point carries a little of the headlamps' cool light.
    vec3 light = mix(aSourceColor, coolWhite, 0.55) * 1.1 + 0.03;
    vColor = mix(energizedSource, light, smoothstep(0.0, 0.3, m));
    vColor = mix(vColor, readableTarget, smoothstep(0.7, 1.0, m));
    // Each point glints as it lands, so the cockpit twinkles on from the
    // display outward; it is back to its photo colour once at rest.
    float glint = smoothstep(0.75, 0.92, m) * (1.0 - smoothstep(0.92, 1.0, m));
    float twinkle = sin(uTime * 1.9 + aSeed.y * 37.0 + aSeed.z * 11.0);
    vColor *= 1.0 + glint * 0.9 + touch * 0.5 + seam * 1.3 + twinkle * 0.22 * waiting;

    vAlpha = release * (1.0 - revealed) * (1.0 - smoothstep(0.92, 0.95, uProgress));
    // Match the native photographs' scaled frames and exact edge feathering,
    // particularly where the portrait viewport crops the steering wheel.
    vAlpha *= mix(frameAlpha(from, uSourceFrame), 1.0, smoothstep(0.0, 0.2, m));
    vAlpha *= mix(1.0, frameAlpha(to, uTargetFrame), smoothstep(0.8, 1.0, m));
    // A tiny viewport-edge fade avoids hard sprite clipping on tall phones.
    vec2 edge = uViewport * 0.5 - abs(formed);
    vAlpha *= smoothstep(0.0, extent * 0.03, min(edge.x, edge.y));
    // Settled points cover like the photographs; in flight they partly add up as light.
    vSettled = (1.0 - arc * 0.7) * (1.0 - seam * 0.6);
  }
`,cv=`
  uniform float uOpacity;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vSettled;
  void main() {
    float radius = length(gl_PointCoord - vec2(0.5));
    float crisp = 1.0 - smoothstep(0.37, 0.50, radius);
    float core = 1.0 - smoothstep(0.0, 0.22, radius);
    float halo = exp(-radius * radius * 18.0) * 0.55;
    float sprite = mix(core + halo, crisp, vSettled);
    float alpha = min(1.0, sprite) * vAlpha * uOpacity;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(vColor, 1.0);
    #include <colorspace_fragment>
    // Premultiplied output: settled points cover like the photograph, while
    // points in flight write no coverage and so add up as light.
    gl_FragColor = vec4(gl_FragColor.rgb * alpha, alpha * vSettled);
  }
`;function hd({canvas:i,state:e,data:t,onError:n,settle:r}){let s=Math.floor(Number(t?.count)||0);if(!i||!e||s<1||t.source?.length!==s*2||t.target?.length!==s*2||t.sourceColors?.length!==s*3||t.targetColors?.length!==s*3)throw new Error("BMW bridge requires a canvas, state and matching paired photo samples");let o=iv(),a=Math.min(s,o.count),l=a,c=Math.min(devicePixelRatio||1,o.dpr),u=av(t,l),h;try{h=new yi({canvas:i,alpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"})}catch(ne){throw u.dispose(),ne}h.outputColorSpace=Tt,h.toneMapping=xn,h.setClearColor(0,0),h.autoClear=!1,h.debug.onShaderError=(ne,be,et,G)=>{throw new Error(`BMW bridge shader failed: ${ne.getProgramInfoLog(be)||ne.getShaderInfoLog(et)||ne.getShaderInfoLog(G)||"unknown driver error"}`)};let p=h.getContext(),d=p.getParameter(p.ALIASED_POINT_SIZE_RANGE)[1],g={uProgress:{value:0},uTime:{value:0},uMotionStrength:{value:0},uPointerStrength:{value:0},uVelocity:{value:0},uPixelRatio:{value:c},uPointSize:{value:o.pointSize},uPointLimit:{value:d},uViewport:{value:new oe(1,1)},uPointer:{value:new oe},uSource:{value:new lt},uTarget:{value:new lt},uSourceFrame:{value:new lt},uTargetFrame:{value:new lt},uReveal:{value:new lt},uOpacity:{value:0}},x=new Lt({uniforms:g,vertexShader:lv,fragmentShader:cv,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Zl,blendEquation:$n,blendSrc:So,blendDst:hr,blendSrcAlpha:So,blendDstAlpha:hr}),m=new ri(u,x);m.frustumCulled=!1;let f=new Pn;f.add(m);let y=new kn(-1,1,1,-1,.1,2e3);y.position.z=1e3;let b=matchMedia("(prefers-reduced-motion: reduce)"),v=!b.matches,C=!1,E=!1,A=!1,I=!1,w=!0,M=1,P=1,z=0,F=!0,V=!1,X=!1,k=[],$=0,W=0,se=0,he=0,xe=0,Re=0,We=0,Y=0,ee=null,me=0,te=null,Se=1e3/o.ambientFps,Ie=new oe,Be=new oe,dt=!1,ke=0,Ze=!1,U=0;function St(){return A&&!E&&!I&&w&&!document.hidden}function Fe(){return ud(e.progress)}function Ee(){return St()&&C&&e.visible&&Fe()>.1&&Fe()<.95}function ve(){return Ee()&&v&&Fe()>.11&&Fe()<.93}function He(){Ze=!1,U=0}function we(){$=0,W=0,se=0,me=0,te=null}function T(){!z&&St()&&(V||F&&Ee()||ve())&&(z=requestAnimationFrame(K))}function _(){h.setViewport(0,0,M,P),h.clear(!0,!1,!1),X=!1,V=!1,Re=0}function O(){if(E)return;let ne=i.getBoundingClientRect(),be=Math.max(1,Math.round(e.viewport?.width||ne.width||innerWidth)),et=Math.max(1,Math.round(e.viewport?.height||ne.height||innerHeight));(be!==M||et!==P||h.getPixelRatio()!==c)&&(M=be,P=et,h.setPixelRatio(c),h.setSize(M,P,!1),y.left=-M/2,y.right=M/2,y.top=P/2,y.bottom=-P/2,y.updateProjectionMatrix(),g.uViewport.value.set(M,P),F=!0),T()}function J(ne=!1){if(E)return;let be=e.source,et=e.target,G=[C,e.visible,e.progress,e.interactive,e.viewport?.width,e.viewport?.height,be?.x,be?.y,be?.width,be?.height,et?.x,et?.y,et?.width,et?.height];(ne||G.some((Le,Ye)=>Le!==k[Ye]))&&(F=!0),k=G,Ee()||(z&&cancelAnimationFrame(z),z=0,V=X,ke=0,He(),we()),e.interactive===!1&&He(),e.viewport&&(e.viewport.width!==M||e.viewport.height!==P)&&O(),T()}function j(ne){C=!!ne,J()}function Z(ne,be){let et=be&&[be.x,be.y,be.width,be.height].every(Number.isFinite)&&be.width>0&&be.height>0;return et&&ne.value.set(be.x,be.y,be.width,be.height),!!et}function Me(){e.noAdapt||Y>=2||(l=Math.max(Math.min(a,2400),Math.floor(l*.75)),u.setDrawRange(0,l),c=Math.max(.85,c-.15),Y++,We=0,O())}function K(ne){if(z=0,!St()){we();return}if(!Ee()){V&&_(),F=!1,we();return}let be=ve(),et=F;if(!et&&(!be||ne<se-.5)){be&&T();return}let G=$?Math.min(.06,Math.max(0,(ne-$)/1e3)):0;$=ne,be&&(he+=G),Ze&&ne>=U&&(Ze=!1),Ie.lerp(Be,1-Math.exp(-G*14));let Le=be&&Ze&&e.interactive!==!1?1:0;ke+=(Le-ke)*(1-Math.exp(-G*(Le?14:4.3))),!Le&&ke<.001&&(ke=0);let Ye=Fe();te!==null&&G>0&&(me+=((Ye-te)/G-me)*(1-Math.exp(-G*5)),Math.abs(me)<.002&&(me=0)),te=Ye,g.uVelocity.value=v?me:0,g.uProgress.value=Ye,g.uTime.value=he,g.uPixelRatio.value=c,g.uOpacity.value=1,g.uMotionStrength.value=v?cd(.11,.35,Ye)*(1-cd(.72,.85,Ye)):0,g.uPointer.value.copy(Ie),g.uPointerStrength.value=ke;let ot=Z(g.uSource,e.source),wt=Z(g.uTarget,e.target);Z(g.uSourceFrame,e.sourceFrame||{x:0,y:0,width:M,height:P}),Z(g.uTargetFrame,e.targetFrame||{x:0,y:0,width:M,height:P});let at=e.reveal;g.uReveal.value.set(at?.x||0,at?.y||0,at?.radius||0,at?.feather||1);let Mt=performance.now();if(_(),!ot||!wt){F=!1;return}try{h.render(f,y)}catch(Xt){ee=String(Xt),C=!1,_(),we(),queueMicrotask(()=>n?.(Xt));return}Re=h.info.render.calls,X=!0,xe++,F=!1;let ut=ne-W,nn=performance.now()-Mt,Wt=et?1e3/60:Se;W&&ut<150&&(We=ut>Wt*1.8||nn>20?We+1:Math.max(0,We-2),We>=18&&Me()),W=ne,se=et||!se?ne+Se:Math.max(se+Se,ne+1),(F||be)&&T()}function ie(ne){return!!ne?.closest?.('nav, .nav-wrap, a, button, input, select, textarea, summary, [role="button"], [role="link"], [contenteditable], [data-no-particles]')}function Te(ne,be,et,G=!1){if(!ve()||e.interactive===!1||ie(ne.target)){He();return}Be.set(be-M/2,P/2-et),(!dt||ke<.001)&&Ie.copy(Be),dt=!0,Ze=!0,U=G?1/0:performance.now()+700,F=!0,T()}function re(ne){if(ne.isPrimary===!1||ne.pointerType==="mouse"&&ne.buttons>1){He();return}Te(ne,ne.clientX,ne.clientY,ne.pointerType==="touch")}function ae(ne){!ne.relatedTarget&&ne.pointerType!=="touch"&&He()}function Ce(ne){if(ne.touches.length!==1){He();return}let be=ne.touches[0];Te(ne,be.clientX,be.clientY,!0)}function _e(){v=!b.matches,ke=0,He(),we(),J(!0)}function pe(){we(),J(!0)}function Xe(ne){ne.preventDefault(),I=!0,ee="BMW bridge WebGL context lost",J(!0)}function ze(){I=!1,ee=null,J(!0)}O();let L=(h.extensions.has("KHR_parallel_shader_compile")?h.compileAsync(f,y):Promise.resolve(h.compile(f,y))).then(()=>r?.()).then(()=>{if(E)throw new Error("BMW bridge was disposed during preparation");return _(),h.render(f,y),_(),A=!0,J(!0),fe}).catch(ne=>{throw de(),ne});window.addEventListener("pointermove",re,{passive:!0}),window.addEventListener("pointerdown",re,{passive:!0}),window.addEventListener("pointerup",He,{passive:!0}),window.addEventListener("pointercancel",He,{passive:!0}),window.addEventListener("pointerout",ae,{passive:!0}),window.addEventListener("touchstart",Ce,{passive:!0}),window.addEventListener("touchmove",Ce,{passive:!0}),window.addEventListener("touchend",He,{passive:!0}),window.addEventListener("touchcancel",He,{passive:!0}),window.addEventListener("blur",He),b.addEventListener?b.addEventListener("change",_e):b.addListener(_e),document.addEventListener("visibilitychange",pe),i.addEventListener("webglcontextlost",Xe),i.addEventListener("webglcontextrestored",ze);let ce=typeof ResizeObserver<"u"?new ResizeObserver(O):null;ce?.observe(i),ce||window.addEventListener("resize",O,{passive:!0});let q=typeof IntersectionObserver<"u"?new IntersectionObserver(ne=>{w=ne.some(be=>be.isIntersecting),J(!0)}):null;q?.observe(i);function Q(){let ne=Fe(),be=!C||!e.visible?"hidden":ne<=.1?"waiting":ne<.4?"bmw-release":ne<.55?"light-streams":ne<.85?"cockpit-assembly":ne<.95?"native-crossfade":"cockpit";return{ready:A&&!E&&!I,active:Ee(),visible:!!(C&&e.visible),running:!!z,renderedFrames:xe,frameCount:xe,drawCalls:Re,drawn:X,particles:l,initialParticles:a,geometries:h.info.memory.geometries,textures:h.info.memory.textures,dpr:c,qualityReductions:Y,ambientFps:o.ambientFps,motionEnabled:v,motionActive:ve(),motionTime:he,pointerActive:Ze,pointerStrength:ke,progress:ne,phase:be,error:ee,kind:"photo-particle-bridge"}}function de(){E||(E=!0,z&&cancelAnimationFrame(z),z=0,ce?.disconnect(),q?.disconnect(),window.removeEventListener("resize",O),window.removeEventListener("pointermove",re),window.removeEventListener("pointerdown",re),window.removeEventListener("pointerup",He),window.removeEventListener("pointercancel",He),window.removeEventListener("pointerout",ae),window.removeEventListener("touchstart",Ce),window.removeEventListener("touchmove",Ce),window.removeEventListener("touchend",He),window.removeEventListener("touchcancel",He),window.removeEventListener("blur",He),b.removeEventListener?b.removeEventListener("change",_e):b.removeListener(_e),document.removeEventListener("visibilitychange",pe),i.removeEventListener("webglcontextlost",Xe),i.removeEventListener("webglcontextrestored",ze),u.dispose(),x.dispose(),h.dispose(),h.forceContextLoss())}let fe={ready:L,setActive:j,resize:O,stats:Q,dispose:de};return fe}return xd(uv);})();
