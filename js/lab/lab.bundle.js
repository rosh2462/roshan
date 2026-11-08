/*! Lab and portrait — built from js/scene-3d.js; includes Three.js r170 (MIT, Copyright 2010-2024 Three.js authors). Do not edit: rebuild from source. */
var HiWiLabBundle=(()=>{var Vo=Object.defineProperty;var Md=Object.getOwnPropertyDescriptor;var bd=Object.getOwnPropertyNames;var Sd=Object.prototype.hasOwnProperty;var wd=(i,e)=>{for(var t in e)Vo(i,t,{get:e[t],enumerable:!0})},Ed=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of bd(e))!Sd.call(i,r)&&r!==t&&Vo(i,r,{get:()=>e[r],enumerable:!(n=Md(e,r))||n.enumerable});return i};var Td=i=>Ed(Vo({},"__esModule",{value:!0}),i);var _v={};wd(_v,{loadPortraitAsset:()=>gd,portraitPresentation:()=>Lc,sampleTextTargets:()=>xd,startBMWBridge:()=>_d,startLab:()=>od,startPortrait:()=>cd});var Ad=0,Nc=1,Rd=2;var Qu=1,Zl=2,Zn=3,wn=0,Ct=1,en=2,Nn=0,sr=1,Ii=2,Fc=3,Oc=4,Jl=5,Kn=100,Cd=101,Pd=102,Id=103,Ld=104,Dd=200,wo=201,Ud=202,Nd=203,wa=204,ur=205,Fd=206,Od=207,Bd=208,zd=209,kd=210,Hd=211,Vd=212,Gd=213,Wd=214,Ea=0,Ta=1,Aa=2,hr=3,Ra=4,Ca=5,Pa=6,Ia=7,Kl=0,Xd=1,qd=2,pn=0,Ql=1,jl=2,$l=3,hs=4,Yd=5,ec=6,tc=7;var ju=300,dr=301,fr=302,La=303,Da=304,Eo=306,Ua=1e3,Ci=1001,Na=1002,ln=1003,Zd=1004;var vs=1005;var Dn=1006,Go=1007;var Pi=1008;var $n=1009,$u=1010,eh=1011,Kr=1012,nc=1013,Li=1014,Un=1015,Bn=1016,ic=1017,rc=1018,pr=1020,th=35902,nh=1021,ih=1022,Sn=1023,rh=1024,sh=1025,or=1026,mr=1027,sc=1028,oc=1029,oh=1030,ac=1031;var lc=1033,Js=33776,Ks=33777,Qs=33778,js=33779,Fa=35840,Oa=35841,Ba=35842,za=35843,ka=36196,Ha=37492,Va=37496,Ga=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,Za=37813,Ja=37814,Ka=37815,Qa=37816,ja=37817,$a=37818,el=37819,tl=37820,nl=37821,$s=36492,il=36494,rl=36495,ah=36283,sl=36284,ol=36285,al=36286;var eo=2300,ll=2301,Wo=2302,Bc=2400,zc=2401,kc=2402;var Jd=3200,cc=3201;var uc=0,Kd=1,fi="",St="srgb",Sr="srgb-linear",To="linear",xt="srgb";var Vi=7680;var Hc=519,Qd=512,jd=513,$d=514,lh=515,ef=516,tf=517,nf=518,rf=519,Vc=35044;var Gc="300 es",Qn=2e3,to=2001,mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=1234567,ar=Math.PI/180,Qr=180/Math.PI;function wr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function hc(i,e){return(i%e+e)%e}function sf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function of(i,e,t){return i!==e?(t-i)/(e-i):0}function qr(i,e,t){return(1-t)*i+t*e}function af(i,e,t,n){return qr(i,e,1-Math.exp(-t*n))}function lf(i,e=1){return e-Math.abs(hc(i,e*2)-e)}function cf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function uf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function df(i,e){return i+Math.random()*(e-i)}function ff(i){return i*(.5-Math.random())}function pf(i){i!==void 0&&(Wc=i);let e=Wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mf(i){return i*ar}function gf(i){return i*Qr}function xf(i){return(i&i-1)===0&&i!==0}function vf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _f(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),p=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*p,a*c);break;case"YZY":i.set(l*p,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*p,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ir(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Er={DEG2RAD:ar,RAD2DEG:Qr,generateUUID:wr,clamp:Bt,euclideanModulo:hc,mapLinear:sf,inverseLerp:of,lerp:qr,damp:af,pingpong:lf,smoothstep:cf,smootherstep:uf,randInt:hf,randFloat:df,randFloatSpread:ff,seededRandom:pf,degToRad:mf,radToDeg:gf,isPowerOfTwo:xf,ceilPowerOfTwo:vf,floorPowerOfTwo:yf,setQuaternionFromProperEuler:_f,normalize:Kt,denormalize:ir},oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],d=n[5],g=n[8],x=r[0],m=r[3],f=r[6],y=r[1],M=r[4],v=r[7],P=r[2],E=r[5],R=r[8];return s[0]=o*x+a*y+l*P,s[3]=o*m+a*M+l*E,s[6]=o*f+a*v+l*R,s[1]=c*x+u*y+h*P,s[4]=c*m+u*M+h*E,s[7]=c*f+u*v+h*R,s[2]=p*x+d*y+g*P,s[5]=p*m+d*M+g*E,s[8]=p*f+d*v+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,p=a*l-u*s,d=c*s-o*l,g=t*h+n*p+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(r*c-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=p*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xo=new $e;function ch(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mf(){let i=no("canvas");return i.style.display="block",i}var Xc={};function Wr(i){i in Xc||(Xc[i]=!0,console.warn(i))}function bf(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Sf(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wf(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ct={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===xt&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===xt&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?To:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qc=[.64,.33,.3,.6,.15,.06],Yc=[.2126,.7152,.0722],Zc=[.3127,.329],Jc=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ct.define({[Sr]:{primaries:qc,whitePoint:Zc,transfer:To,toXYZ:Jc,fromXYZ:Kc,luminanceCoefficients:Yc,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:qc,whitePoint:Zc,transfer:xt,toXYZ:Jc,fromXYZ:Kc,luminanceCoefficients:Yc,outputColorSpaceConfig:{drawingBufferColorSpace:St}}});var Gi,cl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=no("canvas")),Gi.width=e.width,Gi.height=e.height;let n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=no("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ef=0,io=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qo(r[o].image)):s.push(qo(r[o]))}else s=qo(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tf=0,tn=class i extends mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ci,r=Ci,s=Dn,o=Pi,a=Sn,l=$n,c=i.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=wr(),this.name="",this.source=new io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ua:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ua:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=ju;tn.DEFAULT_ANISOTROPY=1;var rt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],d=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(d+1)/2,P=(f+1)/2,E=(u+p)/4,R=(h+x)/4,L=(g+m)/4;return M>v&&M>P?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=E/n,s=R/n):v>P?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=E/r,s=L/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=R/s,r=L/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-x)/y,this.z=(p-u)/y,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ul=class extends mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new tn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new io(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ro=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var hl=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],p=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==p||c!==d||u!==g){let m=1-a,f=l*p+c*d+u*g+h*x,y=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let P=Math.sqrt(M),E=Math.atan2(P,f*y);m=Math.sin(m*E)/P,a=Math.sin(a*E)/P}let v=a*y;if(l=l*m+p*v,c=c*m+d*v,u=u*m+g*v,h=h*m+x*v,m===1-a){let P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],p=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*p,e[t+1]=l*g+u*p+c*h-a*d,e[t+2]=c*g+u*d+a*p-l*h,e[t+3]=u*g-a*h-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),p=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"YXZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"ZXY":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"ZYX":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"YZX":this._x=p*u*h+c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h-p*d*g;break;case"XZY":this._x=p*u*h-c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=n+a+h;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yo=new C,Qc=new gi,mn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),_s.subVectors(this.max,Fr),Wi.subVectors(e.a,Fr),Xi.subVectors(e.b,Fr),qi.subVectors(e.c,Fr),ai.subVectors(Xi,Wi),li.subVectors(qi,Xi),Mi.subVectors(Wi,qi);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Mi.z,Mi.y,ai.z,0,-ai.x,li.z,0,-li.x,Mi.z,0,-Mi.x,-ai.y,ai.x,0,-li.y,li.x,0,-Mi.y,Mi.x,0];return!Zo(t,Wi,Xi,qi,_s)||(t=[1,0,0,0,1,0,0,0,1],!Zo(t,Wi,Xi,qi,_s))?!1:(Ms.crossVectors(ai,li),t=[Ms.x,Ms.y,Ms.z],Zo(t,Wi,Xi,qi,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gn=[new C,new C,new C,new C,new C,new C,new C,new C],_n=new C,ys=new mn,Wi=new C,Xi=new C,qi=new C,ai=new C,li=new C,Mi=new C,Fr=new C,_s=new C,Ms=new C,bi=new C;function Zo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){bi.fromArray(i,s);let a=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),u=n.dot(bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Af=new mn,Or=new C,Jo=new C,ei=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Af.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Or,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Jo)),this.expandByPoint(Or.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new C,Ko=new C,bs=new C,ci=new C,Qo=new C,Ss=new C,jo=new C,gr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ko.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Ko);let s=e.distanceTo(t)*.5,o=-this.direction.dot(bs),a=ci.dot(this.direction),l=-ci.dot(bs),c=ci.lengthSq(),u=Math.abs(1-o*o),h,p,d,g;if(u>0)if(h=o*l-a,p=o*a-l,g=s*u,h>=0)if(p>=-g)if(p<=g){let x=1/u;h*=x,p*=x,d=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-s,-l),s),d=p*(p+2*l)+c):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+p*(p+2*l)+c);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ko).addScaledVector(bs,p),d}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);let n=Wn.dot(this.direction),r=Wn.dot(Wn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,r,s){Qo.subVectors(t,e),Ss.subVectors(n,e),jo.crossVectors(Qo,Ss);let o=this.direction.dot(jo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);let l=a*this.direction.dot(Ss.crossVectors(ci,Ss));if(l<0)return null;let c=a*this.direction.dot(Qo.cross(ci));if(c<0||l+c>o)return null;let u=-a*ci.dot(jo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class i{constructor(e,t,n,r,s,o,a,l,c,u,h,p,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,p,d,g,x,m)}set(e,t,n,r,s,o,a,l,c,u,h,p,d,g,x,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let p=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=p-x*c,t[9]=-a*l,t[2]=x-p*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*u,d=l*h,g=c*u,x=c*h;t[0]=p+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*u,d=l*h,g=c*u,x=c*h;t[0]=p-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=p*c+x,t[1]=l*h,t[5]=x*c+p,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-p*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=p-x*h}else if(e.order==="XZY"){let p=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rf,e,Cf)}lookAt(e,t,n){let r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ui.crossVectors(n,on),ui.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ui.crossVectors(n,on)),ui.normalize(),ws.crossVectors(on,ui),r[0]=ui.x,r[4]=ws.x,r[8]=on.x,r[1]=ui.y,r[5]=ws.y,r[9]=on.y,r[2]=ui.z,r[6]=ws.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],d=n[13],g=n[2],x=n[6],m=n[10],f=n[14],y=n[3],M=n[7],v=n[11],P=n[15],E=r[0],R=r[4],L=r[8],w=r[12],b=r[1],I=r[5],k=r[9],O=r[13],V=r[2],W=r[6],H=r[10],te=r[14],X=r[3],ue=r[7],ce=r[11],ge=r[15];return s[0]=o*E+a*b+l*V+c*X,s[4]=o*R+a*I+l*W+c*ue,s[8]=o*L+a*k+l*H+c*ce,s[12]=o*w+a*O+l*te+c*ge,s[1]=u*E+h*b+p*V+d*X,s[5]=u*R+h*I+p*W+d*ue,s[9]=u*L+h*k+p*H+d*ce,s[13]=u*w+h*O+p*te+d*ge,s[2]=g*E+x*b+m*V+f*X,s[6]=g*R+x*I+m*W+f*ue,s[10]=g*L+x*k+m*H+f*ce,s[14]=g*w+x*O+m*te+f*ge,s[3]=y*E+M*b+v*V+P*X,s[7]=y*R+M*I+v*W+P*ue,s[11]=y*L+M*k+v*H+P*ce,s[15]=y*w+M*O+v*te+P*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],d=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*p+n*c*p+r*a*d-n*l*d)+x*(+t*l*d-t*c*p+s*o*p-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+f*(-r*a*u-t*l*h+t*a*p+r*o*h-n*o*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],d=e[11],g=e[12],x=e[13],m=e[14],f=e[15],y=h*m*c-x*p*c+x*l*d-a*m*d-h*l*f+a*p*f,M=g*p*c-u*m*c-g*l*d+o*m*d+u*l*f-o*p*f,v=u*x*c-g*h*c+g*a*d-o*x*d-u*a*f+o*h*f,P=g*h*l-u*x*l-g*a*p+o*x*p+u*a*m-o*h*m,E=t*y+n*M+r*v+s*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=y*R,e[1]=(x*p*s-h*m*s-x*r*d+n*m*d+h*r*f-n*p*f)*R,e[2]=(a*m*s-x*l*s+x*r*c-n*m*c-a*r*f+n*l*f)*R,e[3]=(h*l*s-a*p*s-h*r*c+n*p*c+a*r*d-n*l*d)*R,e[4]=M*R,e[5]=(u*m*s-g*p*s+g*r*d-t*m*d-u*r*f+t*p*f)*R,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*R,e[7]=(o*p*s-u*l*s+u*r*c-t*p*c-o*r*d+t*l*d)*R,e[8]=v*R,e[9]=(g*h*s-u*x*s-g*n*d+t*x*d+u*n*f-t*h*f)*R,e[10]=(o*x*s-g*a*s+g*n*c-t*x*c-o*n*f+t*a*f)*R,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*R,e[12]=P*R,e[13]=(u*x*r-g*h*r+g*n*p-t*x*p-u*n*m+t*h*m)*R,e[14]=(g*a*r-o*x*r-g*n*l+t*x*l+o*n*m-t*a*m)*R,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*p+t*a*p)*R,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,p=s*c,d=s*u,g=s*h,x=o*u,m=o*h,f=a*h,y=l*c,M=l*u,v=l*h,P=n.x,E=n.y,R=n.z;return r[0]=(1-(x+f))*P,r[1]=(d+v)*P,r[2]=(g-M)*P,r[3]=0,r[4]=(d-v)*E,r[5]=(1-(p+f))*E,r[6]=(m+y)*E,r[7]=0,r[8]=(g+M)*R,r[9]=(m-y)*R,r[10]=(1-(p+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Yi.set(r[0],r[1],r[2]).length(),o=Yi.set(r[4],r[5],r[6]).length(),a=Yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);let c=1/s,u=1/o,h=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,t.setFromRotationMatrix(Mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Qn){let l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r),d,g;if(a===Qn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===to)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Qn){let l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),p=(t+e)*c,d=(n+r)*u,g,x;if(a===Qn)g=(o+s)*h,x=-2*h;else if(a===to)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Yi=new C,Mn=new vt,Rf=new C(0,0,0),Cf=new C(1,1,1),ui=new C,ws=new C,on=new C,jc=new vt,$c=new gi,En=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],p=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $c.setFromEuler(this),this.setFromQuaternion($c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pf=0,eu=new C,Zi=new gi,Xn=new vt,Es=new C,Br=new C,If=new C,Lf=new gi,tu=new C(1,0,0),nu=new C(0,1,0),iu=new C(0,0,1),ru={type:"added"},Df={type:"removed"},Ji={type:"childadded",child:null},$o={type:"childremoved",child:null},Ut=class i extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new En,n=new gi,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new $e}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(tu,e)}rotateY(e){return this.rotateOnAxis(nu,e)}rotateZ(e){return this.rotateOnAxis(iu,e)}translateOnAxis(e,t){return eu.copy(e).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tu,e)}translateY(e){return this.translateOnAxis(nu,e)}translateZ(e){return this.translateOnAxis(iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Es.copy(e):Es.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Br,Es,this.up):Xn.lookAt(Es,Br,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),Zi.setFromRotationMatrix(Xn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ru),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Df),$o.child=e,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ru),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,If),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,Lf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ut.DEFAULT_UP=new C(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new C,qn=new C,ea=new C,Yn=new C,Ki=new C,Qi=new C,su=new C,ta=new C,na=new C,ia=new C,ra=new rt,sa=new rt,oa=new rt,pi=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){bn.subVectors(r,t),qn.subVectors(n,t),ea.subVectors(e,t);let o=bn.dot(bn),a=bn.dot(qn),l=bn.dot(ea),c=qn.dot(qn),u=qn.dot(ea),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let p=1/h,d=(c*l-a*u)*p,g=(o*u-a*l)*p;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return ra.setScalar(0),sa.setScalar(0),oa.setScalar(0),ra.fromBufferAttribute(e,t),sa.fromBufferAttribute(e,n),oa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ra,s.x),o.addScaledVector(sa,s.y),o.addScaledVector(oa,s.z),o}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),qn.subVectors(e,t),bn.cross(qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),bn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Ki.subVectors(r,n),Qi.subVectors(s,n),ta.subVectors(e,n);let l=Ki.dot(ta),c=Qi.dot(ta);if(l<=0&&c<=0)return t.copy(n);na.subVectors(e,r);let u=Ki.dot(na),h=Qi.dot(na);if(u>=0&&h<=u)return t.copy(r);let p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ki,o);ia.subVectors(e,s);let d=Ki.dot(ia),g=Qi.dot(ia);if(g>=0&&d<=g)return t.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Qi,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return su.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(su,a);let f=1/(m+x+p);return o=x*f,a=p*f,t.copy(n).addScaledVector(Ki,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ct.workingColorSpace){if(e=hc(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=aa(o,s,e+1/3),this.g=aa(o,s,e),this.b=aa(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=St){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=uh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return ct.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Bt(Wt.r*255,0,255))*65536+Math.round(Bt(Wt.g*255,0,255))*256+Math.round(Bt(Wt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Wt.copy(this),t);let n=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=St){ct.fromWorkingColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,r=Wt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Ts);let n=qr(hi.h,Ts.h,t),r=qr(hi.s,Ts.s,t),s=qr(hi.l,Ts.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Ce;Ce.NAMES=uh;var Uf=0,Fn=class extends mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=wr(),this.name="",this.blending=sr,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=ur,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==ur&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},zt=class extends Fn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var It=new C,As=new oe,ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}};var so=class extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var oo=class extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nf=0,fn=new vt,la=new Ut,ji=new C,an=new mn,zr=new mn,Ot=new C,yt=class i extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ch(e)?oo:so)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return la.lookAt(e),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(an.min,zr.min),an.expandByPoint(Ot),Ot.addVectors(an.max,zr.max),an.expandByPoint(Ot)):(an.expandByPoint(zr.min),an.expandByPoint(zr.max))}an.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(e,c),Ot.add(ji)),r=Math.max(r,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new C,l[L]=new C;let c=new C,u=new C,h=new C,p=new oe,d=new oe,g=new oe,x=new C,m=new C;function f(L,w,b){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,b),p.fromBufferAttribute(s,L),d.fromBufferAttribute(s,w),g.fromBufferAttribute(s,b),u.sub(c),h.sub(c),d.sub(p),g.sub(p);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),a[L].add(x),a[w].add(x),a[b].add(x),l[L].add(m),l[w].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,w=y.length;L<w;++L){let b=y[L],I=b.start,k=b.count;for(let O=I,V=I+k;O<V;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let M=new C,v=new C,P=new C,E=new C;function R(L){P.fromBufferAttribute(r,L),E.copy(P);let w=a[L];M.copy(w),M.sub(P.multiplyScalar(P.dot(w))).normalize(),v.crossVectors(E,w);let I=v.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,I)}for(let L=0,w=y.length;L<w;++L){let b=y[L],I=b.start,k=b.count;for(let O=I,V=I+k;O<V;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let r=new C,s=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let p=0,d=e.count;p<d;p+=3){let g=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let f=0;f<u;f++)p[g++]=c[d++]}return new ut(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let p=c[u],d=e(p,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ou=new vt,Si=new gr,Rs=new ei,au=new C,Cs=new C,Ps=new C,Is=new C,ca=new C,Ls=new C,lu=new C,Ds=new C,st=class extends Ut{constructor(e=new yt,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ls.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(ca.fromBufferAttribute(h,e),o?Ls.addScaledVector(ca,u):Ls.addScaledVector(ca.sub(t),u))}t.add(Ls)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(s),Si.copy(e.ray).recast(e.near),!(Rs.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Rs,au)===null||Si.origin.distanceToSquared(au)>(e.far-e.near)**2))&&(ou.copy(s).invert(),Si.copy(e.ray).applyMatrix4(ou),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],f=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,P=M;v<P;v+=3){let E=a.getX(v),R=a.getX(v+1),L=a.getX(v+2);r=Us(this,f,e,n,c,u,h,E,R,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,f=x;m<f;m+=3){let y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);r=Us(this,o,e,n,c,u,h,y,M,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],f=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,P=M;v<P;v+=3){let E=v,R=v+1,L=v+2;r=Us(this,f,e,n,c,u,h,E,R,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,f=x;m<f;m+=3){let y=m,M=m+1,v=m+2;r=Us(this,o,e,n,c,u,h,y,M,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Ff(i,e,t,n,r,s,o,a){let l;if(e.side===Ct?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===wn,a),l===null)return null;Ds.copy(a),Ds.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ds);return c<t.near||c>t.far?null:{distance:c,point:Ds.clone(),object:i}}function Us(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Cs),i.getVertexPosition(l,Ps),i.getVertexPosition(c,Is);let u=Ff(i,e,t,n,Cs,Ps,Is,lu);if(u){let h=new C;pi.getBarycoord(lu,Cs,Ps,Is,h),r&&(u.uv=pi.getInterpolatedAttribute(r,a,l,c,h,new oe)),s&&(u.uv1=pi.getInterpolatedAttribute(s,a,l,c,h,new oe)),o&&(u.normal=pi.getInterpolatedAttribute(o,a,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new C,materialIndex:0};pi.getNormal(Cs,Ps,Is,p.normal),u.face=p,u.barycoord=h}return u}var Tn=class i extends yt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],p=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(h,2));function g(x,m,f,y,M,v,P,E,R,L,w){let b=v/R,I=P/L,k=v/2,O=P/2,V=E/2,W=R+1,H=L+1,te=0,X=0,ue=new C;for(let ce=0;ce<H;ce++){let ge=ce*I-O;for(let Ee=0;Ee<W;Ee++){let He=Ee*b-k;ue[x]=He*y,ue[m]=ge*M,ue[f]=V,c.push(ue.x,ue.y,ue.z),ue[x]=0,ue[m]=0,ue[f]=E>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(Ee/R),h.push(1-ce/L),te+=1}}for(let ce=0;ce<L;ce++)for(let ge=0;ge<R;ge++){let Ee=p+ge+W*ce,He=p+ge+W*(ce+1),Z=p+(ge+1)+W*(ce+1),ne=p+(ge+1)+W*ce;l.push(Ee,He,ne),l.push(He,Z,ne),X+=6}a.addGroup(d,X,w),d+=X,p+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Qt(i){let e={};for(let t=0;t<i.length;t++){let n=xr(i[t]);for(let r in n)e[r]=n[r]}return e}function Of(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var dc={clone:xr,merge:Qt},Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rt=class extends Fn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=Of(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ao=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},di=new C,cu=new oe,uu=new oe,Xt=class extends ao{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,cu,uu),t.subVectors(uu,cu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$i=-90,er=1,dl=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xt($i,er,e,t);r.layers=this.layers,this.add(r);let s=new Xt($i,er,e,t);s.layers=this.layers,this.add(s);let o=new Xt($i,er,e,t);o.layers=this.layers,this.add(o);let a=new Xt($i,er,e,t);a.layers=this.layers,this.add(a);let l=new Xt($i,er,e,t);l.layers=this.layers,this.add(l);let c=new Xt($i,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,p,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},lo=class extends tn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fl=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new lo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Tn(5,5,5),s=new Rt({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:Nn});s.uniforms.tEquirect.value=t;let o=new st(r,s),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Dn),new dl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},ua=new C,kf=new C,Hf=new $e,Jn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ua.subVectors(n,t).cross(kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ua),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hf.getNormalMatrix(e),r=this.coplanarPoint(ua).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},wi=new ei,Ns=new C,$r=class{constructor(e=new Jn,t=new Jn,n=new Jn,r=new Jn,s=new Jn,o=new Jn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],p=r[7],d=r[8],g=r[9],x=r[10],m=r[11],f=r[12],y=r[13],M=r[14],v=r[15];if(n[0].setComponents(l-s,p-c,m-d,v-f).normalize(),n[1].setComponents(l+s,p+c,m+d,v+f).normalize(),n[2].setComponents(l+o,p+u,m+g,v+y).normalize(),n[3].setComponents(l-o,p-u,m-g,v-y).normalize(),n[4].setComponents(l-a,p-h,m-x,v-M).normalize(),t===Qn)n[5].setComponents(l+a,p+h,m+x,v+M).normalize();else if(t===to)n[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ns.x=r.normal.x>0?e.max.x:e.min.x,Ns.y=r.normal.y>0?e.max.y:e.min.y,Ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function dh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Vf(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<h.length;d++){let g=h[p],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,h[p]=x)}h.length=p+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var kt=class i extends yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,p=t/l,d=[],g=[],x=[],m=[];for(let f=0;f<u;f++){let y=f*p-o;for(let M=0;M<c;M++){let v=M*h-s;g.push(v,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){let M=y+c*f,v=y+c*(f+1),P=y+1+c*(f+1),E=y+1+c*f;d.push(M,v,E),d.push(v,P,E)}this.setIndex(d),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
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
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jf=`#ifdef USE_AOMAP
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
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qf=`#ifdef USE_BATCHING
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
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,np=`#ifdef USE_IRIDESCENCE
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
#endif`,ip=`#ifdef USE_BUMPMAP
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dp=`#define PI 3.141592653589793
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
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pp=`vec3 transformedNormal = objectNormal;
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
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",_p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
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
}`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
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
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
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
#endif`,Hp=`struct PhysicalMaterial {
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
}`,Vp=`
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jp=`#if defined( USE_POINTS_UV )
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
#endif`,$p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
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
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Am=`float getShadowMask() {
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
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
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
}`,Jm=`#if DEPTH_PACKING == 3200
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
}`,Km=`#define DISTANCE
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
}`,Qm=`#define DISTANCE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`uniform float scale;
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
}`,t0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 diffuse;
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
}`,r0=`#define LAMBERT
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
}`,s0=`#define LAMBERT
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
}`,o0=`#define MATCAP
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
}`,a0=`#define MATCAP
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
}`,l0=`#define NORMAL
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
}`,c0=`#define NORMAL
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
}`,u0=`#define PHONG
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
}`,h0=`#define PHONG
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
}`,d0=`#define STANDARD
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
}`,f0=`#define STANDARD
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
}`,p0=`#define TOON
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
}`,m0=`#define TOON
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
}`,g0=`uniform float size;
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
}`,x0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,y0=`uniform vec3 color;
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
}`,_0=`uniform float rotation;
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
}`,M0=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Gf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:Zf,aomap_fragment:Jf,aomap_pars_fragment:Kf,batching_pars_vertex:Qf,batching_vertex:jf,begin_vertex:$f,beginnormal_vertex:ep,bsdfs:tp,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:rp,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:op,clipping_planes_vertex:ap,color_fragment:lp,color_pars_fragment:cp,color_pars_vertex:up,color_vertex:hp,common:dp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:xp,emissivemap_pars_fragment:vp,colorspace_fragment:yp,colorspace_pars_fragment:_p,envmap_fragment:Mp,envmap_common_pars_fragment:bp,envmap_pars_fragment:Sp,envmap_pars_vertex:wp,envmap_physical_pars_fragment:Np,envmap_vertex:Ep,fog_vertex:Tp,fog_pars_vertex:Ap,fog_fragment:Rp,fog_pars_fragment:Cp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Dp,lights_pars_begin:Up,lights_toon_fragment:Fp,lights_toon_pars_fragment:Op,lights_phong_fragment:Bp,lights_phong_pars_fragment:zp,lights_physical_fragment:kp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Vp,lights_fragment_maps:Gp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Zp,map_fragment:Jp,map_pars_fragment:Kp,map_particle_fragment:Qp,map_particle_pars_fragment:jp,metalnessmap_fragment:$p,metalnessmap_pars_fragment:em,morphinstance_vertex:tm,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:rm,morphtarget_vertex:sm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:um,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:xm,premultiplied_alpha_fragment:vm,project_vertex:ym,dithering_fragment:_m,dithering_pars_fragment:Mm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Em,shadowmap_vertex:Tm,shadowmask_pars_fragment:Am,skinbase_vertex:Rm,skinning_pars_vertex:Cm,skinning_vertex:Pm,skinnormal_vertex:Im,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Um,tonemapping_pars_fragment:Nm,transmission_fragment:Fm,transmission_pars_fragment:Om,uv_pars_fragment:Bm,uv_pars_vertex:zm,uv_vertex:km,worldpos_vertex:Hm,background_vert:Vm,background_frag:Gm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:Zm,depth_frag:Jm,distanceRGBA_vert:Km,distanceRGBA_frag:Qm,equirect_vert:jm,equirect_frag:$m,linedashed_vert:e0,linedashed_frag:t0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:r0,meshlambert_frag:s0,meshmatcap_vert:o0,meshmatcap_frag:a0,meshnormal_vert:l0,meshnormal_frag:c0,meshphong_vert:u0,meshphong_frag:h0,meshphysical_vert:d0,meshphysical_frag:f0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:x0,shadow_vert:v0,shadow_frag:y0,sprite_vert:_0,sprite_frag:M0},me={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Ln={basic:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ce(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Qt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Qt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ce(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Qt([me.points,me.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Qt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Qt([me.common,me.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Qt([me.sprite,me.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Qt([me.common,me.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Qt([me.lights,me.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Ln.physical={uniforms:Qt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Fs={r:0,b:0,g:0},Ei=new En,b0=new vt;function S0(i,e,t,n,r,s,o){let a=new Ce(0),l=s===!0?0:1,c,u,h=null,p=0,d=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function x(y){let M=!1,v=g(y);v===null?f(a,l):v&&v.isColor&&(f(v,1),M=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,M){let v=g(M);v&&(v.isCubeTexture||v.mapping===Eo)?(u===void 0&&(u=new st(new Tn(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:xr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ei.copy(M.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(b0.makeRotationFromEuler(Ei)),u.material.toneMapped=ct.getTransfer(v.colorSpace)!==xt,(h!==v||p!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new st(new kt(2,2),new Rt({name:"BackgroundMaterial",uniforms:xr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ct.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,M){y.getRGB(Fs,hh(i)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:x,addToRenderList:m}}function w0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null),s=r,o=!1;function a(b,I,k,O,V){let W=!1,H=h(O,k,I);s!==H&&(s=H,c(s.object)),W=d(b,O,k,V),W&&g(b,O,k,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(b,I,k,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,I,k){let O=k.wireframe===!0,V=n[b.id];V===void 0&&(V={},n[b.id]=V);let W=V[I.id];W===void 0&&(W={},V[I.id]=W);let H=W[O];return H===void 0&&(H=p(l()),W[O]=H),H}function p(b){let I=[],k=[],O=[];for(let V=0;V<t;V++)I[V]=0,k[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:O,object:b,attributes:{},index:null}}function d(b,I,k,O){let V=s.attributes,W=I.attributes,H=0,te=k.getAttributes();for(let X in te)if(te[X].location>=0){let ce=V[X],ge=W[X];if(ge===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor)),ce===void 0||ce.attribute!==ge||ge&&ce.data!==ge.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function g(b,I,k,O){let V={},W=I.attributes,H=0,te=k.getAttributes();for(let X in te)if(te[X].location>=0){let ce=W[X];ce===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor));let ge={};ge.attribute=ce,ce&&ce.data&&(ge.data=ce.data),V[X]=ge,H++}s.attributes=V,s.attributesNum=H,s.index=O}function x(){let b=s.newAttributes;for(let I=0,k=b.length;I<k;I++)b[I]=0}function m(b){f(b,0)}function f(b,I){let k=s.newAttributes,O=s.enabledAttributes,V=s.attributeDivisors;k[b]=1,O[b]===0&&(i.enableVertexAttribArray(b),O[b]=1),V[b]!==I&&(i.vertexAttribDivisor(b,I),V[b]=I)}function y(){let b=s.newAttributes,I=s.enabledAttributes;for(let k=0,O=I.length;k<O;k++)I[k]!==b[k]&&(i.disableVertexAttribArray(k),I[k]=0)}function M(b,I,k,O,V,W,H){H===!0?i.vertexAttribIPointer(b,I,k,V,W):i.vertexAttribPointer(b,I,k,O,V,W)}function v(b,I,k,O){x();let V=O.attributes,W=k.getAttributes(),H=I.defaultAttributeValues;for(let te in W){let X=W[te];if(X.location>=0){let ue=V[te];if(ue===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){let ce=ue.normalized,ge=ue.itemSize,Ee=e.get(ue);if(Ee===void 0)continue;let He=Ee.buffer,Z=Ee.type,ne=Ee.bytesPerElement,xe=Z===i.INT||Z===i.UNSIGNED_INT||ue.gpuType===nc;if(ue.isInterleavedBufferAttribute){let ee=ue.data,Se=ee.stride,Ae=ue.offset;if(ee.isInstancedInterleavedBuffer){for(let De=0;De<X.locationSize;De++)f(X.location+De,ee.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let De=0;De<X.locationSize;De++)m(X.location+De);i.bindBuffer(i.ARRAY_BUFFER,He);for(let De=0;De<X.locationSize;De++)M(X.location+De,ge/X.locationSize,Z,ce,Se*ne,(Ae+ge/X.locationSize*De)*ne,xe)}else{if(ue.isInstancedBufferAttribute){for(let ee=0;ee<X.locationSize;ee++)f(X.location+ee,ue.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ee=0;ee<X.locationSize;ee++)m(X.location+ee);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ee=0;ee<X.locationSize;ee++)M(X.location+ee,ge/X.locationSize,Z,ce,ge*ne,ge/X.locationSize*ee*ne,xe)}}else if(H!==void 0){let ce=H[te];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(X.location,ce);break;case 3:i.vertexAttrib3fv(X.location,ce);break;case 4:i.vertexAttrib4fv(X.location,ce);break;default:i.vertexAttrib1fv(X.location,ce)}}}}y()}function P(){L();for(let b in n){let I=n[b];for(let k in I){let O=I[k];for(let V in O)u(O[V].object),delete O[V];delete I[k]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let k in I){let O=I[k];for(let V in O)u(O[V].object),delete O[V];delete I[k]}delete n[b.id]}function R(b){for(let I in n){let k=n[I];if(k[b.id]===void 0)continue;let O=k[b.id];for(let V in O)u(O[V].object),delete O[V];delete k[b.id]}}function L(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function E0(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,p){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*p[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function T0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let L=R===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==$n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Un&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:P,maxSamples:E}}function A0(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Jn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let d=h.length!==0||p||n!==0||r;return r=p,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let y=s?0:n,M=y*4,v=f.clippingState||null;l.value=v,v=u(g,p,M,d);for(let P=0;P!==M;++P)v[P]=t[P];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=d+x*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,v=d;M!==x;++M,v+=4)o.copy(h[M]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function R0(i){let e=new WeakMap;function t(o,a){return a===La?o.mapping=dr:a===Da&&(o.mapping=fr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===La||a===Da)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new fl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var On=class extends ao{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},rr=4,hu=[.125,.215,.35,.446,.526,.582],Ri=20,ha=new On,du=new Ce,da=null,fa=0,pa=0,ma=!1,Ai=(1+Math.sqrt(5))/2,tr=1/Ai,fu=[new C(-Ai,tr,0),new C(Ai,tr,0),new C(-tr,0,Ai),new C(tr,0,Ai),new C(0,Ai,-tr),new C(0,Ai,tr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],vr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(da,fa,pa),this._renderer.xr.enabled=ma,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Bn,format:Sn,colorSpace:Sr,depthBuffer:!1},r=pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C0(s)),this._blurMaterial=P0(s,e,t)}return r}_compileMaterial(e){let t=new st(this._lodPlanes[0],e);this._renderer.compile(t,ha)}_sceneToCubeUV(e,t,n,r){let a=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(du),u.toneMapping=pn,u.autoClear=!1;let d=new zt({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new st(new Tn,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(du),x=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let M=this._cubeSize;Os(r,y*M,f>2?M:0,M,M),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===dr||e.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Os(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ha)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=fu[(r-s-1)%fu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new st(this._lodPlanes[r],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ri-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Ri;m>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);let f=[],y=0;for(let R=0;R<Ri;++R){let L=R/x,w=Math.exp(-L*L/2);f.push(w),R===0?y+=w:R<m&&(y+=2*w)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:M}=this;p.dTheta.value=g,p.mipInt.value=M-n;let v=this._sizeLods[r],P=3*v*(r>M-rr?r-M+rr:0),E=4*(this._cubeSize-v);Os(t,P,E,3*v,2*v),l.setRenderTarget(t),l.render(h,ha)}};function C0(i){let e=[],t=[],n=[],r=i,s=i-rr+1+hu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-rr?l=hu[o-i+rr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,f=1,y=new Float32Array(x*g*d),M=new Float32Array(m*g*d),v=new Float32Array(f*g*d);for(let E=0;E<d;E++){let R=E%3*2/3-1,L=E>2?0:-1,w=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];y.set(w,x*g*E),M.set(p,m*g*E);let b=[E,E,E,E,E,E];v.set(b,f*g*E)}let P=new yt;P.setAttribute("position",new ut(y,x)),P.setAttribute("uv",new ut(M,m)),P.setAttribute("faceIndex",new ut(v,f)),e.push(P),r>rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pu(i,e,t){let n=new qt(i,e,t);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function P0(i,e,t){let n=new Float32Array(Ri),r=new C(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function mu(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function gu(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function I0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===La||l===Da,u=l===dr||l===fr;if(c||u){let h=e.get(a),p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new vr(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new vr(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function L0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Wr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function D0(i,e,t,n){let r={},s=new WeakMap;function o(h){let p=h.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);for(let g in p.morphAttributes){let x=p.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}p.removeEventListener("dispose",o),delete r[p.id];let d=s.get(p);d&&(e.remove(d),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(h){let p=h.attributes;for(let g in p)e.update(p[g],i.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let x=d[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(h){let p=[],d=h.index,g=h.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let M=0,v=y.length;M<v;M+=3){let P=y[M+0],E=y[M+1],R=y[M+2];p.push(P,E,E,R,R,P)}}else if(g!==void 0){let y=g.array;x=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let P=M+0,E=M+1,R=M+2;p.push(P,E,E,R,R,P)}}else return;let m=new(ch(p)?oo:so)(p,1);m.version=x;let f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){let p=s.get(h);if(p){let d=h.index;d!==null&&p.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function U0(i,e,t){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,d){i.drawElements(n,d,s,p*o),t.update(d,n,1)}function c(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,p*o,g),t.update(d,n,g))}function u(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,n,1)}function h(p,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/o,d[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,p,0,x,0,g);let f=0;for(let y=0;y<g;y++)f+=d[y]*x[y];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function N0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function F0(i,e,t){let n=new WeakMap,r=new rt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,p=n.get(a);if(p===void 0||p.count!==h){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,P=1;v>e.maxTextureSize&&(P=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*P*4*h),R=new ro(E,v,P,h);R.type=Un,R.needsUpdate=!0;let L=M*4;for(let b=0;b<h;b++){let I=m[b],k=f[b],O=y[b],V=v*P*4*b;for(let W=0;W<I.count;W++){let H=W*L;d===!0&&(r.fromBufferAttribute(I,W),E[V+H+0]=r.x,E[V+H+1]=r.y,E[V+H+2]=r.z,E[V+H+3]=0),g===!0&&(r.fromBufferAttribute(k,W),E[V+H+4]=r.x,E[V+H+5]=r.y,E[V+H+6]=r.z,E[V+H+7]=0),x===!0&&(r.fromBufferAttribute(O,W),E[V+H+8]=r.x,E[V+H+9]=r.y,E[V+H+10]=r.z,E[V+H+11]=O.itemSize===4?r.w:1)}}p={count:h,texture:R,size:new oe(v,P)},n.set(a,p),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function O0(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var co=class extends tn{constructor(e,t,n,r,s,o,a,l,c,u=or){if(u!==or&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===or&&(n=Li),n===void 0&&u===mr&&(n=pr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},fh=new tn,xu=new co(1,1),ph=new ro,mh=new hl,gh=new lo,vu=[],yu=[],_u=new Float32Array(16),Mu=new Float32Array(9),bu=new Float32Array(4);function Tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=vu[r];if(s===void 0&&(s=new Float32Array(r),vu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ao(i,e){let t=yu[e];t===void 0&&(t=new Int32Array(e),yu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function B0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function k0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function H0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function V0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;bu.set(n),i.uniformMatrix2fv(this.addr,!1,bu),Ft(t,n)}}function G0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;Mu.set(n),i.uniformMatrix3fv(this.addr,!1,Mu),Ft(t,n)}}function W0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;_u.set(n),i.uniformMatrix4fv(this.addr,!1,_u),Ft(t,n)}}function X0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function Y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function Z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function J0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function K0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function Q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function $0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(xu.compareFunction=lh,s=xu):s=fh,t.setTexture2D(e||s,r)}function eg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||mh,r)}function tg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||gh,r)}function ng(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ph,r)}function ig(i){switch(i){case 5126:return B0;case 35664:return z0;case 35665:return k0;case 35666:return H0;case 35674:return V0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return Z0;case 5125:return J0;case 36294:return K0;case 36295:return Q0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}function rg(i,e){i.uniform1fv(this.addr,e)}function sg(i,e){let t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function og(i,e){let t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function ag(i,e){let t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function lg(i,e){let t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cg(i,e){let t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ug(i,e){let t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hg(i,e){i.uniform1iv(this.addr,e)}function dg(i,e){i.uniform2iv(this.addr,e)}function fg(i,e){i.uniform3iv(this.addr,e)}function pg(i,e){i.uniform4iv(this.addr,e)}function mg(i,e){i.uniform1uiv(this.addr,e)}function gg(i,e){i.uniform2uiv(this.addr,e)}function xg(i,e){i.uniform3uiv(this.addr,e)}function vg(i,e){i.uniform4uiv(this.addr,e)}function yg(i,e,t){let n=this.cache,r=e.length,s=Ao(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||fh,s[o])}function _g(i,e,t){let n=this.cache,r=e.length,s=Ao(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||mh,s[o])}function Mg(i,e,t){let n=this.cache,r=e.length,s=Ao(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||gh,s[o])}function bg(i,e,t){let n=this.cache,r=e.length,s=Ao(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ph,s[o])}function Sg(i){switch(i){case 5126:return rg;case 35664:return sg;case 35665:return og;case 35666:return ag;case 35674:return lg;case 35675:return cg;case 35676:return ug;case 5124:case 35670:return hg;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return bg}}var pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ig(t.type)}},ml=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sg(t.type)}},gl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},ga=/(\w+)(\])?(\[|\.)?/g;function Su(i,e){i.seq.push(e),i.map[e.id]=e}function wg(i,e,t){let n=i.name,r=n.length;for(ga.lastIndex=0;;){let s=ga.exec(n),o=ga.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Su(t,c===void 0?new pl(a,i,e):new ml(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new gl(a),Su(t,h)),t=h}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);wg(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function wu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Eg=37297,Tg=0;function Ag(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Eu=new $e;function Rg(i){ct._getMatrix(Eu,ct.workingColorSpace,i);let e=`mat3( ${Eu.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case To:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Tu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ag(i.getShaderSource(e),o)}else return r}function Cg(i,e){let t=Rg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pg(i,e){let t;switch(e){case Ql:t="Linear";break;case jl:t="Reinhard";break;case $l:t="Cineon";break;case hs:t="ACESFilmic";break;case ec:t="AgX";break;case tc:t="Neutral";break;case Yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bs=new C;function Ig(){ct.getLuminanceCoefficients(Bs);let i=Bs.x.toFixed(4),e=Bs.y.toFixed(4),t=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function Dg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ug(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xr(i){return i!==""}function Au(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ru(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(i){return i.replace(Ng,Og)}var Fg=new Map;function Og(i,e){let t=nt[e];if(t===void 0){let n=Fg.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xl(t)}var Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(i){return i.replace(Bg,zg)}function zg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function kg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case fr:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fr&&(e="ENVMAP_MODE_REFRACTION"),e}function Gg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kl:e="ENVMAP_BLENDING_MULTIPLY";break;case Xd:e="ENVMAP_BLENDING_MIX";break;case qd:e="ENVMAP_BLENDING_ADD";break}return e}function Wg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xg(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=kg(t),c=Hg(t),u=Vg(t),h=Gg(t),p=Wg(t),d=Lg(t),g=Dg(s),x=r.createProgram(),m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xr).join(`
`),f.length>0&&(f+=`
`)):(m=[Pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),f=[Pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?nt.tonemapping_pars_fragment:"",t.toneMapping!==pn?Pg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Cg("linearToOutputTexel",t.outputColorSpace),Ig(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),o=xl(o),o=Au(o,t),o=Ru(o,t),a=xl(a),a=Au(a,t),a=Ru(a,t),o=Cu(o),a=Cu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=y+m+o,v=y+f+a,P=wu(r,r.VERTEX_SHADER,M),E=wu(r,r.FRAGMENT_SHADER,v);r.attachShader(x,P),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(I){if(i.debug.checkShaderErrors){let k=r.getProgramInfoLog(x).trim(),O=r.getShaderInfoLog(P).trim(),V=r.getShaderInfoLog(E).trim(),W=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,P,E);else{let te=Tu(r,P,"vertex"),X=Tu(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+te+`
`+X)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||V==="")&&(H=!1);H&&(I.diagnostics={runnable:W,programLog:k,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:f}})}r.deleteShader(P),r.deleteShader(E),L=new cr(r,x),w=Ug(r,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,Eg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=E,this}var qg=0,vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yl(e),t.set(e,n)),n}},yl=class{constructor(e){this.id=qg++,this.code=e,this.usedTimes=0}};function Yg(i,e,t,n,r,s,o){let a=new jr,l=new vl,c=new Set,u=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,I,k,O){let V=k.fog,W=O.geometry,H=w.isMeshStandardMaterial?k.environment:null,te=(w.isMeshStandardMaterial?t:e).get(w.envMap||H),X=te&&te.mapping===Eo?te.image.height:null,ue=g[w.type];w.precision!==null&&(d=r.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ge=ce!==void 0?ce.length:0,Ee=0;W.morphAttributes.position!==void 0&&(Ee=1),W.morphAttributes.normal!==void 0&&(Ee=2),W.morphAttributes.color!==void 0&&(Ee=3);let He,Z,ne,xe;if(ue){let G=Ln[ue];He=G.vertexShader,Z=G.fragmentShader}else He=w.vertexShader,Z=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),xe=l.getFragmentShaderID(w);let ee=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ae=O.isInstancedMesh===!0,De=O.isBatchedMesh===!0,at=!!w.map,Oe=!!w.matcap,Ye=!!te,F=!!w.aoMap,_t=!!w.lightMap,Be=!!w.bumpMap,Pe=!!w.normalMap,Me=!!w.displacementMap,ze=!!w.emissiveMap,we=!!w.metalnessMap,T=!!w.roughnessMap,_=w.anisotropy>0,z=w.clearcoat>0,J=w.dispersion>0,j=w.iridescence>0,Y=w.sheen>0,ye=w.transmission>0,K=_&&!!w.anisotropyMap,se=z&&!!w.clearcoatMap,Ue=z&&!!w.clearcoatNormalMap,re=z&&!!w.clearcoatRoughnessMap,le=j&&!!w.iridescenceMap,Re=j&&!!w.iridescenceThicknessMap,_e=Y&&!!w.sheenColorMap,he=Y&&!!w.sheenRoughnessMap,We=!!w.specularMap,Fe=!!w.specularColorMap,lt=!!w.specularIntensityMap,N=ye&&!!w.transmissionMap,de=ye&&!!w.thicknessMap,q=!!w.gradientMap,Q=!!w.alphaMap,fe=w.alphaTest>0,pe=!!w.alphaHash,ie=!!w.extensions,Te=pn;w.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Te=i.toneMapping);let Ze={shaderID:ue,shaderType:w.type,shaderName:w.name,vertexShader:He,fragmentShader:Z,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:De,batchingColor:De&&O._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&O.instanceColor!==null,instancingMorph:Ae&&O.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Sr,alphaToCoverage:!!w.alphaToCoverage,map:at,matcap:Oe,envMap:Ye,envMapMode:Ye&&te.mapping,envMapCubeUVHeight:X,aoMap:F,lightMap:_t,bumpMap:Be,normalMap:Pe,displacementMap:p&&Me,emissiveMap:ze,normalMapObjectSpace:Pe&&w.normalMapType===Kd,normalMapTangentSpace:Pe&&w.normalMapType===uc,metalnessMap:we,roughnessMap:T,anisotropy:_,anisotropyMap:K,clearcoat:z,clearcoatMap:se,clearcoatNormalMap:Ue,clearcoatRoughnessMap:re,dispersion:J,iridescence:j,iridescenceMap:le,iridescenceThicknessMap:Re,sheen:Y,sheenColorMap:_e,sheenRoughnessMap:he,specularMap:We,specularColorMap:Fe,specularIntensityMap:lt,transmission:ye,transmissionMap:N,thicknessMap:de,gradientMap:q,opaque:w.transparent===!1&&w.blending===sr&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:fe,alphaHash:pe,combine:w.combine,mapUv:at&&x(w.map.channel),aoMapUv:F&&x(w.aoMap.channel),lightMapUv:_t&&x(w.lightMap.channel),bumpMapUv:Be&&x(w.bumpMap.channel),normalMapUv:Pe&&x(w.normalMap.channel),displacementMapUv:Me&&x(w.displacementMap.channel),emissiveMapUv:ze&&x(w.emissiveMap.channel),metalnessMapUv:we&&x(w.metalnessMap.channel),roughnessMapUv:T&&x(w.roughnessMap.channel),anisotropyMapUv:K&&x(w.anisotropyMap.channel),clearcoatMapUv:se&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:he&&x(w.sheenRoughnessMap.channel),specularMapUv:We&&x(w.specularMap.channel),specularColorMapUv:Fe&&x(w.specularColorMap.channel),specularIntensityMapUv:lt&&x(w.specularIntensityMap.channel),transmissionMapUv:N&&x(w.transmissionMap.channel),thicknessMapUv:de&&x(w.thicknessMap.channel),alphaMapUv:Q&&x(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Pe||_),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(at||Q),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Se,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ee,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:at&&w.map.isVideoTexture===!0&&ct.getTransfer(w.map.colorSpace)===xt,decodeVideoTextureEmissive:ze&&w.emissiveMap.isVideoTexture===!0&&ct.getTransfer(w.emissiveMap.colorSpace)===xt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===en,flipSided:w.side===Ct,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ie&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&w.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function f(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)b.push(I),b.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(y(b,w),M(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function M(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let b=g[w.type],I;if(b){let k=Ln[b];I=dc.clone(k.uniforms)}else I=w.uniforms;return I}function P(w,b){let I;for(let k=0,O=u.length;k<O;k++){let V=u[k];if(V.cacheKey===b){I=V,++I.usedTimes;break}}return I===void 0&&(I=new Xg(i,b,w,s),u.push(I)),I}function E(w){if(--w.usedTimes===0){let b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function R(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:P,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:L}}function Zg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Jg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Iu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Lu(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,p,d,g,x,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,p,d,g,x,m){let f=o(h,p,d,g,x,m);d.transmission>0?n.push(f):d.transparent===!0?r.push(f):t.push(f)}function l(h,p,d,g,x,m){let f=o(h,p,d,g,x,m);d.transmission>0?n.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,p){t.length>1&&t.sort(h||Jg),n.length>1&&n.sort(p||Iu),r.length>1&&r.sort(p||Iu)}function u(){for(let h=e,p=i.length;h<p;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Kg(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Lu,i.set(n,[o])):r>=s.length?(o=new Lu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ce};break;case"SpotLight":t={position:new C,direction:new C,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function jg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var $g=0;function ex(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tx(i){let e=new Qg,t=jg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let r=new C,s=new vt,o=new vt;function a(c){let u=0,h=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,x=0,m=0,f=0,y=0,M=0,v=0,P=0,E=0,R=0;c.sort(ex);for(let w=0,b=c.length;w<b;w++){let I=c[w],k=I.color,O=I.intensity,V=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=k.r*O,h+=k.g*O,p+=k.b*O;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],O);R++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let te=I.shadow,X=t.get(I);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=I.shadow.matrix,y++}n.directional[d]=H,d++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(k).multiplyScalar(O),H.distance=V,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[x]=H;let te=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,te.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[x]=te.matrix,I.castShadow){let X=t.get(I);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=W,v++}x++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(k).multiplyScalar(O),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=H,m++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let te=I.shadow,X=t.get(I);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,X.shadowCameraNear=te.camera.near,X.shadowCameraFar=te.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=I.shadow.matrix,M++}n.point[g]=H,g++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(O),H.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;let L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==y||L.numPointShadows!==M||L.numSpotShadows!==v||L.numSpotMaps!==P||L.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,L.directionalLength=d,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=y,L.numPointShadows=M,L.numSpotShadows=v,L.numSpotMaps=P,L.numLightProbes=R,n.version=$g++)}function l(c,u){let h=0,p=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let M=c[f];if(M.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(M.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Du(i){let e=new tx(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function nx(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Du(i),e.set(r,[a])):s>=o.length?(a=new Du(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var es=class extends Fn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_l=class extends Fn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
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
}`;function sx(i,e,t){let n=new $r,r=new oe,s=new oe,o=new rt,a=new es({depthPacking:cc}),l=new _l,c={},u=t.maxTextureSize,h={[wn]:Ct,[Ct]:wn,[en]:en},p=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:ix,fragmentShader:rx}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new yt;g.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new st(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qu;let f=this.type;this.render=function(E,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let w=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Nn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let O=f!==Zn&&this.type===Zn,V=f===Zn&&this.type!==Zn;for(let W=0,H=E.length;W<H;W++){let te=E[W],X=te.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let ue=X.getFrameExtents();if(r.multiply(ue),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,X.mapSize.y=s.y)),X.map===null||O===!0||V===!0){let ge=this.type!==Zn?{minFilter:ln,magFilter:ln}:{};X.map!==null&&X.map.dispose(),X.map=new qt(r.x,r.y,ge),X.map.texture.name=te.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ce=X.getViewportCount();for(let ge=0;ge<ce;ge++){let Ee=X.getViewport(ge);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),k.viewport(o),X.updateMatrices(te,ge),n=X.getFrustum(),v(R,L,X.camera,te,this.type)}X.isPointLightShadow!==!0&&this.type===Zn&&y(X,L),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,b,I)};function y(E,R){let L=e.update(x);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qt(r.x,r.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,L,p,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,L,d,x,null)}function M(E,R,L,w){let b=null,I=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)b=I;else if(b=L.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let k=b.uuid,O=R.uuid,V=c[k];V===void 0&&(V={},c[k]=V);let W=V[O];W===void 0&&(W=b.clone(),V[O]=W,R.addEventListener("dispose",P)),b=W}if(b.visible=R.visible,b.wireframe=R.wireframe,w===Zn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let k=i.properties.get(b);k.light=L}return b}function v(E,R,L,w,b){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Zn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);let O=e.update(E),V=E.material;if(Array.isArray(V)){let W=O.groups;for(let H=0,te=W.length;H<te;H++){let X=W[H],ue=V[X.materialIndex];if(ue&&ue.visible){let ce=M(E,ue,w,b);E.onBeforeShadow(i,E,R,L,O,ce,X),i.renderBufferDirect(L,null,O,ce,E,X),E.onAfterShadow(i,E,R,L,O,ce,X)}}}else if(V.visible){let W=M(E,V,w,b);E.onBeforeShadow(i,E,R,L,O,W,null),i.renderBufferDirect(L,null,O,W,E,null),E.onAfterShadow(i,E,R,L,O,W,null)}}let k=E.children;for(let O=0,V=k.length;O<V;O++)v(k[O],R,L,w,b)}function P(E){E.target.removeEventListener("dispose",P);for(let L in c){let w=c[L],b=E.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var ox={[Ea]:Ta,[Aa]:Pa,[Ra]:Ia,[hr]:Ca,[Ta]:Ea,[Pa]:Aa,[Ia]:Ra,[Ca]:hr};function ax(i,e){function t(){let N=!1,de=new rt,q=null,Q=new rt(0,0,0,0);return{setMask:function(fe){q!==fe&&!N&&(i.colorMask(fe,fe,fe,fe),q=fe)},setLocked:function(fe){N=fe},setClear:function(fe,pe,ie,Te,Ze){Ze===!0&&(fe*=Te,pe*=Te,ie*=Te),de.set(fe,pe,ie,Te),Q.equals(de)===!1&&(i.clearColor(fe,pe,ie,Te),Q.copy(de))},reset:function(){N=!1,q=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,de=!1,q=null,Q=null,fe=null;return{setReversed:function(pe){if(de!==pe){let ie=e.get("EXT_clip_control");de?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT);let Te=fe;fe=null,this.setClear(Te)}de=pe},getReversed:function(){return de},setTest:function(pe){pe?ee(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(pe){q!==pe&&!N&&(i.depthMask(pe),q=pe)},setFunc:function(pe){if(de&&(pe=ox[pe]),Q!==pe){switch(pe){case Ea:i.depthFunc(i.NEVER);break;case Ta:i.depthFunc(i.ALWAYS);break;case Aa:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case Ra:i.depthFunc(i.EQUAL);break;case Ca:i.depthFunc(i.GEQUAL);break;case Pa:i.depthFunc(i.GREATER);break;case Ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=pe}},setLocked:function(pe){N=pe},setClear:function(pe){fe!==pe&&(de&&(pe=1-pe),i.clearDepth(pe),fe=pe)},reset:function(){N=!1,q=null,Q=null,fe=null,de=!1}}}function r(){let N=!1,de=null,q=null,Q=null,fe=null,pe=null,ie=null,Te=null,Ze=null;return{setTest:function(G){N||(G?ee(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(G){de!==G&&!N&&(i.stencilMask(G),de=G)},setFunc:function(G,Le,Xe){(q!==G||Q!==Le||fe!==Xe)&&(i.stencilFunc(G,Le,Xe),q=G,Q=Le,fe=Xe)},setOp:function(G,Le,Xe){(pe!==G||ie!==Le||Te!==Xe)&&(i.stencilOp(G,Le,Xe),pe=G,ie=Le,Te=Xe)},setLocked:function(G){N=G},setClear:function(G){Ze!==G&&(i.clearStencil(G),Ze=G)},reset:function(){N=!1,de=null,q=null,Q=null,fe=null,pe=null,ie=null,Te=null,Ze=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},p=new WeakMap,d=[],g=null,x=!1,m=null,f=null,y=null,M=null,v=null,P=null,E=null,R=new Ce(0,0,0),L=0,w=!1,b=null,I=null,k=null,O=null,V=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,te=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=te>=2);let ue=null,ce={},ge=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),He=new rt().fromArray(ge),Z=new rt().fromArray(Ee);function ne(N,de,q,Q){let fe=new Uint8Array(4),pe=i.createTexture();i.bindTexture(N,pe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<q;ie++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(de+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return pe}let xe={};xe[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(hr),Be(!1),Pe(Nc),ee(i.CULL_FACE),F(Nn);function ee(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Se(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Ae(N,de){return h[N]!==de?(i.bindFramebuffer(N,de),h[N]=de,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function De(N,de){let q=d,Q=!1;if(N){q=p.get(de),q===void 0&&(q=[],p.set(de,q));let fe=N.textures;if(q.length!==fe.length||q[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,ie=fe.length;pe<ie;pe++)q[pe]=i.COLOR_ATTACHMENT0+pe;q.length=fe.length,Q=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Q=!0);Q&&i.drawBuffers(q)}function at(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let Oe={[Kn]:i.FUNC_ADD,[Cd]:i.FUNC_SUBTRACT,[Pd]:i.FUNC_REVERSE_SUBTRACT};Oe[Id]=i.MIN,Oe[Ld]=i.MAX;let Ye={[Dd]:i.ZERO,[wo]:i.ONE,[Ud]:i.SRC_COLOR,[wa]:i.SRC_ALPHA,[kd]:i.SRC_ALPHA_SATURATE,[Bd]:i.DST_COLOR,[Fd]:i.DST_ALPHA,[Nd]:i.ONE_MINUS_SRC_COLOR,[ur]:i.ONE_MINUS_SRC_ALPHA,[zd]:i.ONE_MINUS_DST_COLOR,[Od]:i.ONE_MINUS_DST_ALPHA,[Hd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[Gd]:i.CONSTANT_ALPHA,[Wd]:i.ONE_MINUS_CONSTANT_ALPHA};function F(N,de,q,Q,fe,pe,ie,Te,Ze,G){if(N===Nn){x===!0&&(Se(i.BLEND),x=!1);return}if(x===!1&&(ee(i.BLEND),x=!0),N!==Jl){if(N!==m||G!==w){if((f!==Kn||v!==Kn)&&(i.blendEquation(i.FUNC_ADD),f=Kn,v=Kn),G)switch(N){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ii:i.blendFunc(i.ONE,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ii:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,M=null,P=null,E=null,R.set(0,0,0),L=0,m=N,w=G}return}fe=fe||de,pe=pe||q,ie=ie||Q,(de!==f||fe!==v)&&(i.blendEquationSeparate(Oe[de],Oe[fe]),f=de,v=fe),(q!==y||Q!==M||pe!==P||ie!==E)&&(i.blendFuncSeparate(Ye[q],Ye[Q],Ye[pe],Ye[ie]),y=q,M=Q,P=pe,E=ie),(Te.equals(R)===!1||Ze!==L)&&(i.blendColor(Te.r,Te.g,Te.b,Ze),R.copy(Te),L=Ze),m=N,w=!1}function _t(N,de){N.side===en?Se(i.CULL_FACE):ee(i.CULL_FACE);let q=N.side===Ct;de&&(q=!q),Be(q),N.blending===sr&&N.transparent===!1?F(Nn):F(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ze(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(N){b!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),b=N)}function Pe(N){N!==Ad?(ee(i.CULL_FACE),N!==I&&(N===Nc?i.cullFace(i.BACK):N===Rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),I=N}function Me(N){N!==k&&(H&&i.lineWidth(N),k=N)}function ze(N,de,q){N?(ee(i.POLYGON_OFFSET_FILL),(O!==de||V!==q)&&(i.polygonOffset(de,q),O=de,V=q)):Se(i.POLYGON_OFFSET_FILL)}function we(N){N?ee(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function T(N){N===void 0&&(N=i.TEXTURE0+W-1),ue!==N&&(i.activeTexture(N),ue=N)}function _(N,de,q){q===void 0&&(ue===null?q=i.TEXTURE0+W-1:q=ue);let Q=ce[q];Q===void 0&&(Q={type:void 0,texture:void 0},ce[q]=Q),(Q.type!==N||Q.texture!==de)&&(ue!==q&&(i.activeTexture(q),ue=q),i.bindTexture(N,de||xe[N]),Q.type=N,Q.texture=de)}function z(){let N=ce[ue];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(N){He.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),He.copy(N))}function he(N){Z.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function We(N,de){let q=c.get(de);q===void 0&&(q=new WeakMap,c.set(de,q));let Q=q.get(N);Q===void 0&&(Q=i.getUniformBlockIndex(de,N.name),q.set(N,Q))}function Fe(N,de){let Q=c.get(de).get(N);l.get(de)!==Q&&(i.uniformBlockBinding(de,Q,N.__bindingPointIndex),l.set(de,Q))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ue=null,ce={},h={},p=new WeakMap,d=[],g=null,x=!1,m=null,f=null,y=null,M=null,v=null,P=null,E=null,R=new Ce(0,0,0),L=0,w=!1,b=null,I=null,k=null,O=null,V=null,He.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:Se,bindFramebuffer:Ae,drawBuffers:De,useProgram:at,setBlending:F,setMaterial:_t,setFlipSided:Be,setCullFace:Pe,setLineWidth:Me,setPolygonOffset:ze,setScissorTest:we,activeTexture:T,bindTexture:_,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:j,texImage2D:le,texImage3D:Re,updateUBOMapping:We,uniformBlockBinding:Fe,texStorage2D:Ue,texStorage3D:re,texSubImage2D:Y,texSubImage3D:ye,compressedTexSubImage2D:K,compressedTexSubImage3D:se,scissor:_e,viewport:he,reset:lt}}function Uu(i,e,t,n){let r=lx(n);switch(t){case nh:return i*e;case rh:return i*e;case sh:return i*e*2;case sc:return i*e/r.components*r.byteLength;case oc:return i*e/r.components*r.byteLength;case oh:return i*e*2/r.components*r.byteLength;case ac:return i*e*2/r.components*r.byteLength;case ih:return i*e*3/r.components*r.byteLength;case Sn:return i*e*4/r.components*r.byteLength;case lc:return i*e*4/r.components*r.byteLength;case Js:case Ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qs:case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:case za:return Math.max(i,16)*Math.max(e,8)/4;case Fa:case Ba:return Math.max(i,8)*Math.max(e,8)/2;case ka:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $s:case il:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ah:case sl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ol:case al:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lx(i){switch(i){case $n:case $u:return{byteLength:1,components:1};case Kr:case eh:case Bn:return{byteLength:2,components:1};case ic:case rc:return{byteLength:2,components:4};case Li:case nc:case Un:return{byteLength:4,components:1};case th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function cx(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,h,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return d?new OffscreenCanvas(T,_):no("canvas")}function x(T,_,z){let J=1,j=we(T);if((j.width>z||j.height>z)&&(J=z/Math.max(j.width,j.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Y=Math.floor(J*j.width),ye=Math.floor(J*j.height);h===void 0&&(h=g(Y,ye));let K=_?g(Y,ye):h;return K.width=Y,K.height=ye,K.getContext("2d").drawImage(T,0,0,Y,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+ye+")."),K}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,_,z,J,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=_;if(_===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),_===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),_===i.RGBA){let ye=j?To:ct.getTransfer(J);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=ye===xt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(T,_){let z;return T?_===null||_===Li||_===pr?z=i.DEPTH24_STENCIL8:_===Un?z=i.DEPTH32F_STENCIL8:_===Kr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Li||_===pr?z=i.DEPTH_COMPONENT24:_===Un?z=i.DEPTH_COMPONENT32F:_===Kr&&(z=i.DEPTH_COMPONENT16),z}function P(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ln&&T.minFilter!==Dn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function E(T){let _=T.target;_.removeEventListener("dispose",E),L(_),_.isVideoTexture&&u.delete(_)}function R(T){let _=T.target;_.removeEventListener("dispose",R),b(_)}function L(T){let _=n.get(T);if(_.__webglInit===void 0)return;let z=T.source,J=p.get(z);if(J){let j=J[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(T),Object.keys(J).length===0&&p.delete(z)}n.remove(T)}function w(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let z=T.source,J=p.get(z);delete J[_.__cacheKey],o.memory.textures--}function b(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let j=0;j<_.__webglFramebuffer[J].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[J][j]);else i.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)i.deleteFramebuffer(_.__webglFramebuffer[J]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=T.textures;for(let J=0,j=z.length;J<j;J++){let Y=n.get(z[J]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[J])}n.remove(T)}let I=0;function k(){I=0}function O(){let T=I;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),I+=1,T}function V(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function W(T,_){let z=n.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,T,_);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function H(T,_){let z=n.get(T);if(T.version>0&&z.__version!==T.version){Z(z,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function te(T,_){let z=n.get(T);if(T.version>0&&z.__version!==T.version){Z(z,T,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function X(T,_){let z=n.get(T);if(T.version>0&&z.__version!==T.version){ne(z,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let ue={[Ua]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},ce={[ln]:i.NEAREST,[Zd]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[Go]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},ge={[Qd]:i.NEVER,[rf]:i.ALWAYS,[jd]:i.LESS,[lh]:i.LEQUAL,[$d]:i.EQUAL,[nf]:i.GEQUAL,[ef]:i.GREATER,[tf]:i.NOTEQUAL};function Ee(T,_){if(_.type===Un&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Dn||_.magFilter===Go||_.magFilter===vs||_.magFilter===Pi||_.minFilter===Dn||_.minFilter===Go||_.minFilter===vs||_.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ue[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ue[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ue[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ln||_.minFilter!==vs&&_.minFilter!==Pi||_.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function He(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",E));let J=_.source,j=p.get(J);j===void 0&&(j={},p.set(J,j));let Y=V(_);if(Y!==T.__cacheKey){j[Y]===void 0&&(j[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[Y].usedTimes++;let ye=j[T.__cacheKey];ye!==void 0&&(j[T.__cacheKey].usedTimes--,ye.usedTimes===0&&w(_)),T.__cacheKey=Y,T.__webglTexture=j[Y].texture}return z}function Z(T,_,z){let J=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=i.TEXTURE_3D);let j=He(T,_),Y=_.source;t.bindTexture(J,T.__webglTexture,i.TEXTURE0+z);let ye=n.get(Y);if(Y.version!==ye.__version||j===!0){t.activeTexture(i.TEXTURE0+z);let K=ct.getPrimaries(ct.workingColorSpace),se=_.colorSpace===fi?null:ct.getPrimaries(_.colorSpace),Ue=_.colorSpace===fi||K===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let re=x(_.image,!1,r.maxTextureSize);re=ze(_,re);let le=s.convert(_.format,_.colorSpace),Re=s.convert(_.type),_e=M(_.internalFormat,le,Re,_.colorSpace,_.isVideoTexture);Ee(J,_);let he,We=_.mipmaps,Fe=_.isVideoTexture!==!0,lt=ye.__version===void 0||j===!0,N=Y.dataReady,de=P(_,re);if(_.isDepthTexture)_e=v(_.format===mr,_.type),lt&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,_e,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,_e,re.width,re.height,0,le,Re,null));else if(_.isDataTexture)if(We.length>0){Fe&&lt&&t.texStorage2D(i.TEXTURE_2D,de,_e,We[0].width,We[0].height);for(let q=0,Q=We.length;q<Q;q++)he=We[q],Fe?N&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,he.width,he.height,le,Re,he.data):t.texImage2D(i.TEXTURE_2D,q,_e,he.width,he.height,0,le,Re,he.data);_.generateMipmaps=!1}else Fe?(lt&&t.texStorage2D(i.TEXTURE_2D,de,_e,re.width,re.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,le,Re,re.data)):t.texImage2D(i.TEXTURE_2D,0,_e,re.width,re.height,0,le,Re,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Fe&&lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,_e,We[0].width,We[0].height,re.depth);for(let q=0,Q=We.length;q<Q;q++)if(he=We[q],_.format!==Sn)if(le!==null)if(Fe){if(N)if(_.layerUpdates.size>0){let fe=Uu(he.width,he.height,_.format,_.type);for(let pe of _.layerUpdates){let ie=he.data.subarray(pe*fe/he.data.BYTES_PER_ELEMENT,(pe+1)*fe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,pe,he.width,he.height,1,le,ie)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,he.width,he.height,re.depth,le,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,_e,he.width,he.height,re.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,he.width,he.height,re.depth,le,Re,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,_e,he.width,he.height,re.depth,0,le,Re,he.data)}else{Fe&&lt&&t.texStorage2D(i.TEXTURE_2D,de,_e,We[0].width,We[0].height);for(let q=0,Q=We.length;q<Q;q++)he=We[q],_.format!==Sn?le!==null?Fe?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,he.width,he.height,le,he.data):t.compressedTexImage2D(i.TEXTURE_2D,q,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?N&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,he.width,he.height,le,Re,he.data):t.texImage2D(i.TEXTURE_2D,q,_e,he.width,he.height,0,le,Re,he.data)}else if(_.isDataArrayTexture)if(Fe){if(lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,_e,re.width,re.height,re.depth),N)if(_.layerUpdates.size>0){let q=Uu(re.width,re.height,_.format,_.type);for(let Q of _.layerUpdates){let fe=re.data.subarray(Q*q/re.data.BYTES_PER_ELEMENT,(Q+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,le,Re,fe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,le,Re,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,re.width,re.height,re.depth,0,le,Re,re.data);else if(_.isData3DTexture)Fe?(lt&&t.texStorage3D(i.TEXTURE_3D,de,_e,re.width,re.height,re.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,le,Re,re.data)):t.texImage3D(i.TEXTURE_3D,0,_e,re.width,re.height,re.depth,0,le,Re,re.data);else if(_.isFramebufferTexture){if(lt)if(Fe)t.texStorage2D(i.TEXTURE_2D,de,_e,re.width,re.height);else{let q=re.width,Q=re.height;for(let fe=0;fe<de;fe++)t.texImage2D(i.TEXTURE_2D,fe,_e,q,Q,0,le,Re,null),q>>=1,Q>>=1}}else if(We.length>0){if(Fe&&lt){let q=we(We[0]);t.texStorage2D(i.TEXTURE_2D,de,_e,q.width,q.height)}for(let q=0,Q=We.length;q<Q;q++)he=We[q],Fe?N&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,le,Re,he):t.texImage2D(i.TEXTURE_2D,q,_e,le,Re,he);_.generateMipmaps=!1}else if(Fe){if(lt){let q=we(re);t.texStorage2D(i.TEXTURE_2D,de,_e,q.width,q.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Re,re)}else t.texImage2D(i.TEXTURE_2D,0,_e,le,Re,re);m(_)&&f(J),ye.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ne(T,_,z){if(_.image.length!==6)return;let J=He(T,_),j=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let Y=n.get(j);if(j.version!==Y.__version||J===!0){t.activeTexture(i.TEXTURE0+z);let ye=ct.getPrimaries(ct.workingColorSpace),K=_.colorSpace===fi?null:ct.getPrimaries(_.colorSpace),se=_.colorSpace===fi||ye===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Ue=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!Ue&&!re?le[Q]=x(_.image[Q],!0,r.maxCubemapSize):le[Q]=re?_.image[Q].image:_.image[Q],le[Q]=ze(_,le[Q]);let Re=le[0],_e=s.convert(_.format,_.colorSpace),he=s.convert(_.type),We=M(_.internalFormat,_e,he,_.colorSpace),Fe=_.isVideoTexture!==!0,lt=Y.__version===void 0||J===!0,N=j.dataReady,de=P(_,Re);Ee(i.TEXTURE_CUBE_MAP,_);let q;if(Ue){Fe&&lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,We,Re.width,Re.height);for(let Q=0;Q<6;Q++){q=le[Q].mipmaps;for(let fe=0;fe<q.length;fe++){let pe=q[fe];_.format!==Sn?_e!==null?Fe?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,pe.width,pe.height,_e,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,We,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,pe.width,pe.height,_e,he,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,We,pe.width,pe.height,0,_e,he,pe.data)}}}else{if(q=_.mipmaps,Fe&&lt){q.length>0&&de++;let Q=we(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,We,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){Fe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,_e,he,le[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,le[Q].width,le[Q].height,0,_e,he,le[Q].data);for(let fe=0;fe<q.length;fe++){let ie=q[fe].image[Q].image;Fe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,ie.width,ie.height,_e,he,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,We,ie.width,ie.height,0,_e,he,ie.data)}}else{Fe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e,he,le[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,_e,he,le[Q]);for(let fe=0;fe<q.length;fe++){let pe=q[fe];Fe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,_e,he,pe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,We,_e,he,pe.image[Q])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),Y.__version=j.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function xe(T,_,z,J,j,Y){let ye=s.convert(z.format,z.colorSpace),K=s.convert(z.type),se=M(z.internalFormat,ye,K,z.colorSpace),Ue=n.get(_),re=n.get(z);if(re.__renderTarget=_,!Ue.__hasExternalTextures){let le=Math.max(1,_.width>>Y),Re=Math.max(1,_.height>>Y);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,Y,se,le,Re,_.depth,0,ye,K,null):t.texImage2D(j,Y,se,le,Re,0,ye,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Pe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,j,re.__webglTexture,0,Be(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,j,re.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(T,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let J=_.depthTexture,j=J&&J.isDepthTexture?J.type:null,Y=v(_.stencilBuffer,j),ye=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=Be(_);Pe(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,Y,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,T)}else{let J=_.textures;for(let j=0;j<J.length;j++){let Y=J[j],ye=s.convert(Y.format,Y.colorSpace),K=s.convert(Y.type),se=M(Y.internalFormat,ye,K,Y.colorSpace),Ue=Be(_);z&&Pe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,se,_.width,_.height):Pe(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,se,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,se,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(_.depthTexture);J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);let j=J.__webglTexture,Y=Be(_);if(_.depthTexture.format===or)Pe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===mr)Pe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ae(T){let _=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let J=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",j)};J.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=J}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Se(_.__webglFramebuffer,T)}else if(z){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=i.createRenderbuffer(),ee(_.__webglDepthbuffer[J],T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ee(_.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(T,_,z){let J=n.get(T);_!==void 0&&xe(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ae(T)}function at(T){let _=T.texture,z=n.get(T),J=n.get(_);T.addEventListener("dispose",R);let j=T.textures,Y=T.isWebGLCubeRenderTarget===!0,ye=j.length>1;if(ye||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=_.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let se=0;se<_.mipmaps.length;se++)z.__webglFramebuffer[K][se]=i.createFramebuffer()}else z.__webglFramebuffer[K]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)z.__webglFramebuffer[K]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ye)for(let K=0,se=j.length;K<se;K++){let Ue=n.get(j[K]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Pe(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){let se=j[K];z.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[K]);let Ue=s.convert(se.format,se.colorSpace),re=s.convert(se.type),le=M(se.internalFormat,Ue,re,se.colorSpace,T.isXRRenderTarget===!0),Re=Be(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,le,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,z.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)xe(z.__webglFramebuffer[K][se],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se);else xe(z.__webglFramebuffer[K],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let K=0,se=j.length;K<se;K++){let Ue=j[K],re=n.get(Ue);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),Ee(i.TEXTURE_2D,Ue),xe(z.__webglFramebuffer,T,Ue,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,0),m(Ue)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,J.__webglTexture),Ee(K,_),_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)xe(z.__webglFramebuffer[se],T,_,i.COLOR_ATTACHMENT0,K,se);else xe(z.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,K,0);m(_)&&f(K),t.unbindTexture()}T.depthBuffer&&Ae(T)}function Oe(T){let _=T.textures;for(let z=0,J=_.length;z<J;z++){let j=_[z];if(m(j)){let Y=y(T),ye=n.get(j).__webglTexture;t.bindTexture(Y,ye),f(Y),t.unbindTexture()}}}let Ye=[],F=[];function _t(T){if(T.samples>0){if(Pe(T)===!1){let _=T.textures,z=T.width,J=T.height,j=i.COLOR_BUFFER_BIT,Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(T),K=_.length>1;if(K)for(let se=0;se<_.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let se=0;se<_.length;se++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[se]);let Ue=n.get(_[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,j,i.NEAREST),l===!0&&(Ye.length=0,F.length=0,Ye.push(i.COLOR_ATTACHMENT0+se),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ye.push(Y),F.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let se=0;se<_.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,ye.__webglColorRenderbuffer[se]);let Ue=n.get(_[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Be(T){return Math.min(r.maxSamples,T.samples)}function Pe(T){let _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Me(T){let _=o.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function ze(T,_){let z=T.colorSpace,J=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Sr&&z!==fi&&(ct.getTransfer(z)===xt?(J!==Sn||j!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function we(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=te,this.setTextureCube=X,this.rebindTextures=De,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Pe}function ux(i,e){function t(n,r=fi){let s,o=ct.getTransfer(r);if(n===$n)return i.UNSIGNED_BYTE;if(n===ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$u)return i.BYTE;if(n===eh)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===nc)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===nh)return i.ALPHA;if(n===ih)return i.RGB;if(n===Sn)return i.RGBA;if(n===rh)return i.LUMINANCE;if(n===sh)return i.LUMINANCE_ALPHA;if(n===or)return i.DEPTH_COMPONENT;if(n===mr)return i.DEPTH_STENCIL;if(n===sc)return i.RED;if(n===oc)return i.RED_INTEGER;if(n===oh)return i.RG;if(n===ac)return i.RG_INTEGER;if(n===lc)return i.RGBA_INTEGER;if(n===Js||n===Ks||n===Qs||n===js)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Oa||n===Ba||n===za)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Ha||n===Va)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ka||n===Ha)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Va)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===Ka||n===Qa||n===ja||n===$a||n===el||n===tl||n===nl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ga)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$s||n===il||n===rl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===$s)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ah||n===sl||n===ol||n===al)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===$s)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ml=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},dt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},hx={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fx=`
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

}`,bl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new tn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rt({vertexShader:dx,fragmentShader:fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new kt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sl=class extends mi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,p=null,d=null,g=null,x=new bl,m=t.getContextAttributes(),f=null,y=null,M=[],v=[],P=new oe,E=null,R=new Xt;R.viewport=new rt;let L=new Xt;L.viewport=new rt;let w=[R,L],b=new Ml,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=M[Z];return ne===void 0&&(ne=new Yr,M[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=M[Z];return ne===void 0&&(ne=new Yr,M[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=M[Z];return ne===void 0&&(ne=new Yr,M[Z]=ne),ne.getHandSpace()};function O(Z){let ne=v.indexOf(Z.inputSource);if(ne===-1)return;let xe=M[ne];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,c||o),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",W);for(let Z=0;Z<M.length;Z++){let ne=v[Z];ne!==null&&(v[Z]=null,M[Z].disconnect(ne))}I=null,k=null,x.reset(),e.setRenderTarget(f),d=null,p=null,h=null,r=null,y=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",V),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){let ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new qt(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,xe=null,ee=null;m.depth&&(ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?mr:or,xe=m.stencil?pr:Li);let Se={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};h=new XRWebGLBinding(r,t),p=h.createProjectionLayer(Se),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new qt(p.textureWidth,p.textureHeight,{format:Sn,type:$n,depthTexture:new co(p.textureWidth,p.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(Z){for(let ne=0;ne<Z.removed.length;ne++){let xe=Z.removed[ne],ee=v.indexOf(xe);ee>=0&&(v[ee]=null,M[ee].disconnect(xe))}for(let ne=0;ne<Z.added.length;ne++){let xe=Z.added[ne],ee=v.indexOf(xe);if(ee===-1){for(let Ae=0;Ae<M.length;Ae++)if(Ae>=v.length){v.push(xe),ee=Ae;break}else if(v[Ae]===null){v[Ae]=xe,ee=Ae;break}if(ee===-1)break}let Se=M[ee];Se&&Se.connect(xe)}}let H=new C,te=new C;function X(Z,ne,xe){H.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(xe.matrixWorld);let ee=H.distanceTo(te),Se=ne.projectionMatrix.elements,Ae=xe.projectionMatrix.elements,De=Se[14]/(Se[10]-1),at=Se[14]/(Se[10]+1),Oe=(Se[9]+1)/Se[5],Ye=(Se[9]-1)/Se[5],F=(Se[8]-1)/Se[0],_t=(Ae[8]+1)/Ae[0],Be=De*F,Pe=De*_t,Me=ee/(-F+_t),ze=Me*-F;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ze),Z.translateZ(Me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Se[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let we=De+Me,T=at+Me,_=Be-ze,z=Pe+(ee-ze),J=Oe*at/T*we,j=Ye*at/T*we;Z.projectionMatrix.makePerspective(_,z,J,j,we,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ne=Z.near,xe=Z.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(xe=x.depthFar)),b.near=L.near=R.near=ne,b.far=L.far=R.far=xe,(I!==b.near||k!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,k=b.far),R.layers.mask=Z.layers.mask|2,L.layers.mask=Z.layers.mask|4,b.layers.mask=R.layers.mask|L.layers.mask;let ee=Z.parent,Se=b.cameras;ue(b,ee);for(let Ae=0;Ae<Se.length;Ae++)ue(Se[Ae],ee);Se.length===2?X(b,R,L):b.projectionMatrix.copy(R.projectionMatrix),ce(Z,b,ee)};function ce(Z,ne,xe){xe===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Qr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(Z){l=Z,p!==null&&(p.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let ge=null;function Ee(Z,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){let xe=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ee=!1;xe.length!==b.cameras.length&&(b.cameras.length=0,ee=!0);for(let Ae=0;Ae<xe.length;Ae++){let De=xe[Ae],at=null;if(d!==null)at=d.getViewport(De);else{let Ye=h.getViewSubImage(p,De);at=Ye.viewport,Ae===0&&(e.setRenderTargetTextures(y,Ye.colorTexture,p.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(y))}let Oe=w[Ae];Oe===void 0&&(Oe=new Xt,Oe.layers.enable(Ae),Oe.viewport=new rt,w[Ae]=Oe),Oe.matrix.fromArray(De.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(De.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(at.x,at.y,at.width,at.height),Ae===0&&(b.matrix.copy(Oe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ee===!0&&b.cameras.push(Oe)}let Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")){let Ae=h.getDepthInformation(xe[0]);Ae&&Ae.isValid&&Ae.texture&&x.init(e,Ae,r.renderState)}}for(let xe=0;xe<M.length;xe++){let ee=v[xe],Se=M[xe];ee!==null&&Se!==void 0&&Se.update(ee,ne,c||o)}ge&&ge(Z,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let He=new dh;He.setAnimationLoop(Ee),this.setAnimationLoop=function(Z){ge=Z},this.dispose=function(){}}},Ti=new En,px=new vt;function mx(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,hh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,M,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ct&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ct&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=e.get(f),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,Ti.copy(v),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(px.makeRotationFromEuler(Ti)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function gx(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let v=M.program;n.uniformBlockBinding(y,v)}function c(y,M){let v=r[y.id];v===void 0&&(g(y),v=u(y),r[y.id]=v,y.addEventListener("dispose",m));let P=M.program;n.updateUBOMapping(y,P);let E=e.render.frame;s[y.id]!==E&&(p(y),s[y.id]=E)}function u(y){let M=h();y.__bindingPointIndex=M;let v=i.createBuffer(),P=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let M=r[y.id],v=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,R=v.length;E<R;E++){let L=Array.isArray(v[E])?v[E]:[v[E]];for(let w=0,b=L.length;w<b;w++){let I=L[w];if(d(I,E,w,P)===!0){let k=I.__offset,O=Array.isArray(I.value)?I.value:[I.value],V=0;for(let W=0;W<O.length;W++){let H=O[W],te=x(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,k+V,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,V),V+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,v,P){let E=y.value,R=M+"_"+v;if(P[R]===void 0)return typeof E=="number"||typeof E=="boolean"?P[R]=E:P[R]=E.clone(),!0;{let L=P[R];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return P[R]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function g(y){let M=y.uniforms,v=0,P=16;for(let R=0,L=M.length;R<L;R++){let w=Array.isArray(M[R])?M[R]:[M[R]];for(let b=0,I=w.length;b<I;b++){let k=w[b],O=Array.isArray(k.value)?k.value:[k.value];for(let V=0,W=O.length;V<W;V++){let H=O[V],te=x(H),X=v%P,ue=X%te.boundary,ce=X+ue;v+=ue,ce!==0&&P-ce<te.storage&&(v+=P-ce),k.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=te.storage}}}let E=v%P;return E>0&&(v+=P-E),y.__size=v,y.__cache={},this}function x(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){let M=y.target;M.removeEventListener("dispose",m);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(let y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var xi=class{constructor(e={}){let{canvas:t=Mf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=pn,this.toneMappingExposure=1;let v=this,P=!1,E=0,R=0,L=null,w=-1,b=null,I=new rt,k=new rt,O=null,V=new Ce(0),W=0,H=t.width,te=t.height,X=1,ue=null,ce=null,ge=new rt(0,0,H,te),Ee=new rt(0,0,H,te),He=!1,Z=new $r,ne=!1,xe=!1,ee=new vt,Se=new vt,Ae=new C,De=new rt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function Ye(){return L===null?X:1}let F=n;function _t(S,A){return t.getContext(S,A)}try{let S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",pe,!1),F===null){let A="webgl2";if(F=_t(A,S),F===null)throw _t(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Be,Pe,Me,ze,we,T,_,z,J,j,Y,ye,K,se,Ue,re,le,Re,_e,he,We,Fe,lt,N;function de(){Be=new L0(F),Be.init(),Fe=new ux(F,Be),Pe=new T0(F,Be,e,Fe),Me=new ax(F,Be),Pe.reverseDepthBuffer&&p&&Me.buffers.depth.setReversed(!0),ze=new N0(F),we=new Zg,T=new cx(F,Be,Me,we,Pe,Fe,ze),_=new R0(v),z=new I0(v),J=new Vf(F),lt=new w0(F,J),j=new D0(F,J,ze,lt),Y=new O0(F,j,J,ze),_e=new F0(F,Pe,T),re=new A0(we),ye=new Yg(v,_,z,Be,Pe,lt,re),K=new mx(v,we),se=new Kg,Ue=new nx(Be),Re=new S0(v,_,z,Me,Y,d,l),le=new sx(v,Y,Pe),N=new gx(F,ze,Pe,Me),he=new E0(F,Be,ze),We=new U0(F,Be,ze),ze.programs=ye.programs,v.capabilities=Pe,v.extensions=Be,v.properties=we,v.renderLists=se,v.shadowMap=le,v.state=Me,v.info=ze}de();let q=new Sl(v,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=Be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(H,te,!1))},this.getSize=function(S){return S.set(H,te)},this.setSize=function(S,A,U=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,te=A,t.width=Math.floor(S*X),t.height=Math.floor(A*X),U===!0&&(t.style.width=S+"px",t.style.height=A+"px"),this.setViewport(0,0,S,A)},this.getDrawingBufferSize=function(S){return S.set(H*X,te*X).floor()},this.setDrawingBufferSize=function(S,A,U){H=S,te=A,X=U,t.width=Math.floor(S*U),t.height=Math.floor(A*U),this.setViewport(0,0,S,A)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(ge)},this.setViewport=function(S,A,U,B){S.isVector4?ge.set(S.x,S.y,S.z,S.w):ge.set(S,A,U,B),Me.viewport(I.copy(ge).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(Ee)},this.setScissor=function(S,A,U,B){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,A,U,B),Me.scissor(k.copy(Ee).multiplyScalar(X).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(S){Me.setScissorTest(He=S)},this.setOpaqueSort=function(S){ue=S},this.setTransparentSort=function(S){ce=S},this.getClearColor=function(S){return S.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(S=!0,A=!0,U=!0){let B=0;if(S){let D=!1;if(L!==null){let $=L.texture.format;D=$===lc||$===ac||$===oc}if(D){let $=L.texture.type,ae=$===$n||$===Li||$===Kr||$===pr||$===ic||$===rc,ve=Re.getClearColor(),be=Re.getClearAlpha(),Ge=ve.r,je=ve.g,Ie=ve.b;ae?(g[0]=Ge,g[1]=je,g[2]=Ie,g[3]=be,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Ge,x[1]=je,x[2]=Ie,x[3]=be,F.clearBufferiv(F.COLOR,0,x))}else B|=F.COLOR_BUFFER_BIT}A&&(B|=F.DEPTH_BUFFER_BIT),U&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),se.dispose(),Ue.dispose(),we.dispose(),_.dispose(),z.dispose(),Y.dispose(),lt.dispose(),N.dispose(),ye.dispose(),q.dispose(),q.removeEventListener("sessionstart",it),q.removeEventListener("sessionend",Mt),tt.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let S=ze.autoReset,A=le.enabled,U=le.autoUpdate,B=le.needsUpdate,D=le.type;de(),ze.autoReset=S,le.enabled=A,le.autoUpdate=U,le.needsUpdate=B,le.type=D}function pe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ie(S){let A=S.target;A.removeEventListener("dispose",ie),Te(A)}function Te(S){Ze(S),we.remove(S)}function Ze(S){let A=we.get(S).programs;A!==void 0&&(A.forEach(function(U){ye.releaseProgram(U)}),S.isShaderMaterial&&ye.releaseShaderCache(S))}this.renderBufferDirect=function(S,A,U,B,D,$){A===null&&(A=at);let ae=D.isMesh&&D.matrixWorld.determinant()<0,ve=ki(S,A,U,B,D);Me.setMaterial(B,ae);let be=U.index,Ge=1;if(B.wireframe===!0){if(be=j.getWireframeAttribute(U),be===void 0)return;Ge=2}let je=U.drawRange,Ie=U.attributes.position,ht=je.start*Ge,bt=(je.start+je.count)*Ge;$!==null&&(ht=Math.max(ht,$.start*Ge),bt=Math.min(bt,($.start+$.count)*Ge)),be!==null?(ht=Math.max(ht,0),bt=Math.min(bt,be.count)):Ie!=null&&(ht=Math.max(ht,0),bt=Math.min(bt,Ie.count));let wt=bt-ht;if(wt<0||wt===1/0)return;lt.setup(D,B,ve,U,be);let $t,mt=he;if(be!==null&&($t=J.get(be),mt=We,mt.setIndex($t)),D.isMesh)B.wireframe===!0?(Me.setLineWidth(B.wireframeLinewidth*Ye()),mt.setMode(F.LINES)):mt.setMode(F.TRIANGLES);else if(D.isLine){let Ne=B.linewidth;Ne===void 0&&(Ne=1),Me.setLineWidth(Ne*Ye()),D.isLineSegments?mt.setMode(F.LINES):D.isLineLoop?mt.setMode(F.LINE_LOOP):mt.setMode(F.LINE_STRIP)}else D.isPoints?mt.setMode(F.POINTS):D.isSprite&&mt.setMode(F.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)mt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))mt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Ne=D._multiDrawStarts,Vn=D._multiDrawCounts,gt=D._multiDrawCount,yn=be?J.get(be).bytesPerElement:1,Hi=we.get(B).currentProgram.getUniforms();for(let sn=0;sn<gt;sn++)Hi.setValue(F,"_gl_DrawID",sn),mt.render(Ne[sn]/yn,Vn[sn])}else if(D.isInstancedMesh)mt.renderInstances(ht,wt,D.count);else if(U.isInstancedBufferGeometry){let Ne=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,Vn=Math.min(U.instanceCount,Ne);mt.renderInstances(ht,wt,Vn)}else mt.render(ht,wt)};function G(S,A,U){S.transparent===!0&&S.side===en&&S.forceSinglePass===!1?(S.side=Ct,S.needsUpdate=!0,rn(S,A,U),S.side=wn,S.needsUpdate=!0,rn(S,A,U),S.side=en):rn(S,A,U)}this.compile=function(S,A,U=null){U===null&&(U=S),f=Ue.get(U),f.init(A),M.push(f),U.traverseVisible(function(D){D.isLight&&D.layers.test(A.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),S!==U&&S.traverseVisible(function(D){D.isLight&&D.layers.test(A.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();let B=new Set;return S.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let $=D.material;if($)if(Array.isArray($))for(let ae=0;ae<$.length;ae++){let ve=$[ae];G(ve,U,D),B.add(ve)}else G($,U,D),B.add($)}),M.pop(),f=null,B},this.compileAsync=function(S,A,U=null){let B=this.compile(S,A,U);return new Promise(D=>{function $(){if(B.forEach(function(ae){we.get(ae).currentProgram.isReady()&&B.delete(ae)}),B.size===0){D(S);return}setTimeout($,10)}Be.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Le=null;function Xe(S){Le&&Le(S)}function it(){tt.stop()}function Mt(){tt.start()}let tt=new dh;tt.setAnimationLoop(Xe),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(S){Le=S,q.setAnimationLoop(S),S===null?tt.stop():tt.start()},q.addEventListener("sessionstart",it),q.addEventListener("sessionend",Mt),this.render=function(S,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(A),A=q.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,A,L),f=Ue.get(S,M.length),f.init(A),M.push(f),Se.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),Z.setFromProjectionMatrix(Se),xe=this.localClippingEnabled,ne=re.init(this.clippingPlanes,xe),m=se.get(S,y.length),m.init(),y.push(m),q.enabled===!0&&q.isPresenting===!0){let $=v.xr.getDepthSensingMesh();$!==null&&pt($,A,-1/0,v.sortObjects)}pt(S,A,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ue,ce),Oe=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Oe&&Re.addToRenderList(m,S),this.info.render.frame++,ne===!0&&re.beginShadows();let U=f.state.shadowsArray;le.render(U,S,A),ne===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,D=m.transmissive;if(f.setupLights(),A.isArrayCamera){let $=A.cameras;if(D.length>0)for(let ae=0,ve=$.length;ae<ve;ae++){let be=$[ae];Ht(B,D,S,be)}Oe&&Re.render(S);for(let ae=0,ve=$.length;ae<ve;ae++){let be=$[ae];ot(m,S,be,be.viewport)}}else D.length>0&&Ht(B,D,S,A),Oe&&Re.render(S),ot(m,S,A);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(v,S,A),lt.resetDefaultState(),w=-1,b=null,M.pop(),M.length>0?(f=M[M.length-1],ne===!0&&re.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function pt(S,A,U,B){if(S.visible===!1)return;if(S.layers.test(A.layers)){if(S.isGroup)U=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(A);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){B&&De.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Se);let ae=Y.update(S),ve=S.material;ve.visible&&m.push(S,ae,ve,U,De.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Z.intersectsObject(S))){let ae=Y.update(S),ve=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),De.copy(S.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),De.copy(ae.boundingSphere.center)),De.applyMatrix4(S.matrixWorld).applyMatrix4(Se)),Array.isArray(ve)){let be=ae.groups;for(let Ge=0,je=be.length;Ge<je;Ge++){let Ie=be[Ge],ht=ve[Ie.materialIndex];ht&&ht.visible&&m.push(S,ae,ht,U,De.z,Ie)}}else ve.visible&&m.push(S,ae,ve,U,De.z,null)}}let $=S.children;for(let ae=0,ve=$.length;ae<ve;ae++)pt($[ae],A,U,B)}function ot(S,A,U,B){let D=S.opaque,$=S.transmissive,ae=S.transparent;f.setupLightsView(U),ne===!0&&re.setGlobalState(v.clippingPlanes,U),B&&Me.viewport(I.copy(B)),D.length>0&&Pt(D,A,U),$.length>0&&Pt($,A,U),ae.length>0&&Pt(ae,A,U),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ht(S,A,U,B){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new qt(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Bn:$n,minFilter:Pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));let $=f.state.transmissionRenderTarget[B.id],ae=B.viewport||I;$.setSize(ae.z,ae.w);let ve=v.getRenderTarget();v.setRenderTarget($),v.getClearColor(V),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Oe&&Re.render(U);let be=v.toneMapping;v.toneMapping=pn;let Ge=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),ne===!0&&re.setGlobalState(v.clippingPlanes,B),Pt(S,U,B),T.updateMultisampleRenderTarget($),T.updateRenderTargetMipmap($),Be.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ie=0,ht=A.length;Ie<ht;Ie++){let bt=A[Ie],wt=bt.object,$t=bt.geometry,mt=bt.material,Ne=bt.group;if(mt.side===en&&wt.layers.test(B.layers)){let Vn=mt.side;mt.side=Ct,mt.needsUpdate=!0,hn(wt,U,B,$t,mt,Ne),mt.side=Vn,mt.needsUpdate=!0,je=!0}}je===!0&&(T.updateMultisampleRenderTarget($),T.updateRenderTargetMipmap($))}v.setRenderTarget(ve),v.setClearColor(V,W),Ge!==void 0&&(B.viewport=Ge),v.toneMapping=be}function Pt(S,A,U){let B=A.isScene===!0?A.overrideMaterial:null;for(let D=0,$=S.length;D<$;D++){let ae=S[D],ve=ae.object,be=ae.geometry,Ge=B===null?ae.material:B,je=ae.group;ve.layers.test(U.layers)&&hn(ve,A,U,be,Ge,je)}}function hn(S,A,U,B,D,$){S.onBeforeRender(v,A,U,B,D,$),S.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),D.onBeforeRender(v,A,U,B,S,$),D.transparent===!0&&D.side===en&&D.forceSinglePass===!1?(D.side=Ct,D.needsUpdate=!0,v.renderBufferDirect(U,A,B,D,S,$),D.side=wn,D.needsUpdate=!0,v.renderBufferDirect(U,A,B,D,S,$),D.side=en):v.renderBufferDirect(U,A,B,D,S,$),S.onAfterRender(v,A,U,B,D,$)}function rn(S,A,U){A.isScene!==!0&&(A=at);let B=we.get(S),D=f.state.lights,$=f.state.shadowsArray,ae=D.state.version,ve=ye.getParameters(S,D.state,$,A,U),be=ye.getProgramCacheKey(ve),Ge=B.programs;B.environment=S.isMeshStandardMaterial?A.environment:null,B.fog=A.fog,B.envMap=(S.isMeshStandardMaterial?z:_).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?A.environmentRotation:S.envMapRotation,Ge===void 0&&(S.addEventListener("dispose",ie),Ge=new Map,B.programs=Ge);let je=Ge.get(be);if(je!==void 0){if(B.currentProgram===je&&B.lightsStateVersion===ae)return zi(S,ve),je}else ve.uniforms=ye.getUniforms(S),S.onBeforeCompile(ve,v),je=ye.acquireProgram(ve,be),Ge.set(be,je),B.uniforms=ve.uniforms;let Ie=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ie.clippingPlanes=re.uniform),zi(S,ve),B.needsLights=ri(S),B.lightsStateVersion=ae,B.needsLights&&(Ie.ambientLightColor.value=D.state.ambient,Ie.lightProbe.value=D.state.probe,Ie.directionalLights.value=D.state.directional,Ie.directionalLightShadows.value=D.state.directionalShadow,Ie.spotLights.value=D.state.spot,Ie.spotLightShadows.value=D.state.spotShadow,Ie.rectAreaLights.value=D.state.rectArea,Ie.ltc_1.value=D.state.rectAreaLTC1,Ie.ltc_2.value=D.state.rectAreaLTC2,Ie.pointLights.value=D.state.point,Ie.pointLightShadows.value=D.state.pointShadow,Ie.hemisphereLights.value=D.state.hemi,Ie.directionalShadowMap.value=D.state.directionalShadowMap,Ie.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Ie.spotShadowMap.value=D.state.spotShadowMap,Ie.spotLightMatrix.value=D.state.spotLightMatrix,Ie.spotLightMap.value=D.state.spotLightMap,Ie.pointShadowMap.value=D.state.pointShadowMap,Ie.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=je,B.uniformsList=null,je}function Vt(S){if(S.uniformsList===null){let A=S.currentProgram.getUniforms();S.uniformsList=cr.seqWithValue(A.seq,S.uniforms)}return S.uniformsList}function zi(S,A){let U=we.get(S);U.outputColorSpace=A.outputColorSpace,U.batching=A.batching,U.batchingColor=A.batchingColor,U.instancing=A.instancing,U.instancingColor=A.instancingColor,U.instancingMorph=A.instancingMorph,U.skinning=A.skinning,U.morphTargets=A.morphTargets,U.morphNormals=A.morphNormals,U.morphColors=A.morphColors,U.morphTargetsCount=A.morphTargetsCount,U.numClippingPlanes=A.numClippingPlanes,U.numIntersection=A.numClipIntersection,U.vertexAlphas=A.vertexAlphas,U.vertexTangents=A.vertexTangents,U.toneMapping=A.toneMapping}function ki(S,A,U,B,D){A.isScene!==!0&&(A=at),T.resetTextureUnits();let $=A.fog,ae=B.isMeshStandardMaterial?A.environment:null,ve=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Sr,be=(B.isMeshStandardMaterial?z:_).get(B.envMap||ae),Ge=B.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,je=!!U.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ie=!!U.morphAttributes.position,ht=!!U.morphAttributes.normal,bt=!!U.morphAttributes.color,wt=pn;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(wt=v.toneMapping);let $t=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,mt=$t!==void 0?$t.length:0,Ne=we.get(B),Vn=f.state.lights;if(ne===!0&&(xe===!0||S!==b)){let dn=S===b&&B.id===w;re.setState(B,S,dn)}let gt=!1;B.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Vn.state.version||Ne.outputColorSpace!==ve||D.isBatchedMesh&&Ne.batching===!1||!D.isBatchedMesh&&Ne.batching===!0||D.isBatchedMesh&&Ne.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Ne.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Ne.instancing===!1||!D.isInstancedMesh&&Ne.instancing===!0||D.isSkinnedMesh&&Ne.skinning===!1||!D.isSkinnedMesh&&Ne.skinning===!0||D.isInstancedMesh&&Ne.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ne.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ne.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ne.instancingMorph===!1&&D.morphTexture!==null||Ne.envMap!==be||B.fog===!0&&Ne.fog!==$||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==re.numPlanes||Ne.numIntersection!==re.numIntersection)||Ne.vertexAlphas!==Ge||Ne.vertexTangents!==je||Ne.morphTargets!==Ie||Ne.morphNormals!==ht||Ne.morphColors!==bt||Ne.toneMapping!==wt||Ne.morphTargetsCount!==mt)&&(gt=!0):(gt=!0,Ne.__version=B.version);let yn=Ne.currentProgram;gt===!0&&(yn=rn(B,A,D));let Hi=!1,sn=!1,Ur=!1,Et=yn.getUniforms(),In=Ne.uniforms;if(Me.useProgram(yn.program)&&(Hi=!0,sn=!0,Ur=!0),B.id!==w&&(w=B.id,sn=!0),Hi||b!==S){Me.buffers.depth.getReversed()?(ee.copy(S.projectionMatrix),Sf(ee),wf(ee),Et.setValue(F,"projectionMatrix",ee)):Et.setValue(F,"projectionMatrix",S.projectionMatrix),Et.setValue(F,"viewMatrix",S.matrixWorldInverse);let si=Et.map.cameraPosition;si!==void 0&&si.setValue(F,Ae.setFromMatrixPosition(S.matrixWorld)),Pe.logarithmicDepthBuffer&&Et.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Et.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,sn=!0,Ur=!0)}if(D.isSkinnedMesh){Et.setOptional(F,D,"bindMatrix"),Et.setOptional(F,D,"bindMatrixInverse");let dn=D.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Et.setValue(F,"boneTexture",dn.boneTexture,T))}D.isBatchedMesh&&(Et.setOptional(F,D,"batchingTexture"),Et.setValue(F,"batchingTexture",D._matricesTexture,T),Et.setOptional(F,D,"batchingIdTexture"),Et.setValue(F,"batchingIdTexture",D._indirectTexture,T),Et.setOptional(F,D,"batchingColorTexture"),D._colorsTexture!==null&&Et.setValue(F,"batchingColorTexture",D._colorsTexture,T));let Nr=U.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&_e.update(D,U,yn),(sn||Ne.receiveShadow!==D.receiveShadow)&&(Ne.receiveShadow=D.receiveShadow,Et.setValue(F,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(In.envMap.value=be,In.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&A.environment!==null&&(In.envMapIntensity.value=A.environmentIntensity),sn&&(Et.setValue(F,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&jt(In,Ur),$&&B.fog===!0&&K.refreshFogUniforms(In,$),K.refreshMaterialUniforms(In,B,X,te,f.state.transmissionRenderTarget[S.id]),cr.upload(F,Vt(Ne),In,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(cr.upload(F,Vt(Ne),In,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Et.setValue(F,"center",D.center),Et.setValue(F,"modelViewMatrix",D.modelViewMatrix),Et.setValue(F,"normalMatrix",D.normalMatrix),Et.setValue(F,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let dn=B.uniformsGroups;for(let si=0,oi=dn.length;si<oi;si++){let Uc=dn[si];N.update(Uc,yn),N.bind(Uc,yn)}}return yn}function jt(S,A){S.ambientLightColor.needsUpdate=A,S.lightProbe.needsUpdate=A,S.directionalLights.needsUpdate=A,S.directionalLightShadows.needsUpdate=A,S.pointLights.needsUpdate=A,S.pointLightShadows.needsUpdate=A,S.spotLights.needsUpdate=A,S.spotLightShadows.needsUpdate=A,S.rectAreaLights.needsUpdate=A,S.hemisphereLights.needsUpdate=A}function ri(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,A,U){we.get(S.texture).__webglTexture=A,we.get(S.depthTexture).__webglTexture=U;let B=we.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=U===void 0,B.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,A){let U=we.get(S);U.__webglFramebuffer=A,U.__useDefaultFramebuffer=A===void 0},this.setRenderTarget=function(S,A=0,U=0){L=S,E=A,R=U;let B=!0,D=null,$=!1,ae=!1;if(S){let be=we.get(S);if(be.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(F.FRAMEBUFFER,null),B=!1;else if(be.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(be.__hasExternalTextures)T.rebindTextures(S,we.get(S.texture).__webglTexture,we.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ie=S.depthTexture;if(be.__boundDepthTexture!==Ie){if(Ie!==null&&we.has(Ie)&&(S.width!==Ie.image.width||S.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ae=!0);let je=we.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(je[A])?D=je[A][U]:D=je[A],$=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?D=we.get(S).__webglMultisampledFramebuffer:Array.isArray(je)?D=je[U]:D=je,I.copy(S.viewport),k.copy(S.scissor),O=S.scissorTest}else I.copy(ge).multiplyScalar(X).floor(),k.copy(Ee).multiplyScalar(X).floor(),O=He;if(Me.bindFramebuffer(F.FRAMEBUFFER,D)&&B&&Me.drawBuffers(S,D),Me.viewport(I),Me.scissor(k),Me.setScissorTest(O),$){let be=we.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+A,be.__webglTexture,U)}else if(ae){let be=we.get(S.texture),Ge=A||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.__webglTexture,U||0,Ge)}w=-1},this.readRenderTargetPixels=function(S,A,U,B,D,$,ae){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=we.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ae!==void 0&&(ve=ve[ae]),ve){Me.bindFramebuffer(F.FRAMEBUFFER,ve);try{let be=S.texture,Ge=be.format,je=be.type;if(!Pe.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=S.width-B&&U>=0&&U<=S.height-D&&F.readPixels(A,U,B,D,Fe.convert(Ge),Fe.convert(je),$)}finally{let be=L!==null?we.get(L).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(S,A,U,B,D,$,ae){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=we.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ae!==void 0&&(ve=ve[ae]),ve){let be=S.texture,Ge=be.format,je=be.type;if(!Pe.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(A>=0&&A<=S.width-B&&U>=0&&U<=S.height-D){Me.bindFramebuffer(F.FRAMEBUFFER,ve);let Ie=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ie),F.bufferData(F.PIXEL_PACK_BUFFER,$.byteLength,F.STREAM_READ),F.readPixels(A,U,B,D,Fe.convert(Ge),Fe.convert(je),0);let ht=L!==null?we.get(L).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,ht);let bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await bf(F,bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ie),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,$),F.deleteBuffer(Ie),F.deleteSync(bt),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,A=null,U=0){S.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),A=arguments[0]||null,S=arguments[1]);let B=Math.pow(2,-U),D=Math.floor(S.image.width*B),$=Math.floor(S.image.height*B),ae=A!==null?A.x:0,ve=A!==null?A.y:0;T.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,U,0,0,ae,ve,D,$),Me.unbindTexture()},this.copyTextureToTexture=function(S,A,U=null,B=null,D=0){S.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1],A=arguments[2],D=arguments[3]||0,U=null);let $,ae,ve,be,Ge,je,Ie,ht,bt,wt=S.isCompressedTexture?S.mipmaps[D]:S.image;U!==null?($=U.max.x-U.min.x,ae=U.max.y-U.min.y,ve=U.isBox3?U.max.z-U.min.z:1,be=U.min.x,Ge=U.min.y,je=U.isBox3?U.min.z:0):($=wt.width,ae=wt.height,ve=wt.depth||1,be=0,Ge=0,je=0),B!==null?(Ie=B.x,ht=B.y,bt=B.z):(Ie=0,ht=0,bt=0);let $t=Fe.convert(A.format),mt=Fe.convert(A.type),Ne;A.isData3DTexture?(T.setTexture3D(A,0),Ne=F.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(T.setTexture2DArray(A,0),Ne=F.TEXTURE_2D_ARRAY):(T.setTexture2D(A,0),Ne=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,A.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,A.unpackAlignment);let Vn=F.getParameter(F.UNPACK_ROW_LENGTH),gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),yn=F.getParameter(F.UNPACK_SKIP_PIXELS),Hi=F.getParameter(F.UNPACK_SKIP_ROWS),sn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,wt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,be),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),F.pixelStorei(F.UNPACK_SKIP_IMAGES,je);let Ur=S.isDataArrayTexture||S.isData3DTexture,Et=A.isDataArrayTexture||A.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let In=we.get(S),Nr=we.get(A),dn=we.get(In.__renderTarget),si=we.get(Nr.__renderTarget);Me.bindFramebuffer(F.READ_FRAMEBUFFER,dn.__webglFramebuffer),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let oi=0;oi<ve;oi++)Ur&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.get(S).__webglTexture,D,je+oi),S.isDepthTexture?(Et&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.get(A).__webglTexture,D,bt+oi),F.blitFramebuffer(be,Ge,$,ae,Ie,ht,$,ae,F.DEPTH_BUFFER_BIT,F.NEAREST)):Et?F.copyTexSubImage3D(Ne,D,Ie,ht,bt+oi,be,Ge,$,ae):F.copyTexSubImage2D(Ne,D,Ie,ht,bt+oi,be,Ge,$,ae);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Et?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Ne,D,Ie,ht,bt,$,ae,ve,$t,mt,wt.data):A.isCompressedArrayTexture?F.compressedTexSubImage3D(Ne,D,Ie,ht,bt,$,ae,ve,$t,wt.data):F.texSubImage3D(Ne,D,Ie,ht,bt,$,ae,ve,$t,mt,wt):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,D,Ie,ht,$,ae,$t,mt,wt.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,D,Ie,ht,wt.width,wt.height,$t,wt.data):F.texSubImage2D(F.TEXTURE_2D,D,Ie,ht,$,ae,$t,mt,wt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Vn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Hi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,sn),D===0&&A.generateMipmaps&&F.generateMipmap(Ne),Me.unbindTexture()},this.copyTextureToTexture3D=function(S,A,U=null,B=null,D=0){return S.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,B=arguments[1]||null,S=arguments[2],A=arguments[3],D=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,A,U,B,D)},this.initRenderTarget=function(S){we.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Me.unbindTexture()},this.resetState=function(){E=0,R=0,L=null,Me.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var An=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var wl=class extends tn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=ln,u=ln,h,p){super(null,o,a,l,c,u,r,s,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=class extends ut{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},nr=new vt,Nu=new vt,zs=[],Fu=new mn,xx=new vt,kr=new st,Hr=new ei,yr=class extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,xx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Fu.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(Fu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Hr.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,nr),Nu.multiplyMatrices(n,nr),kr.matrixWorld=Nu,kr.raycast(e,zs);for(let o=0,a=zs.length;o<a;o++){let l=zs[o];l.instanceId=s,l.object=this,t.push(l)}zs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new wl(new Float32Array(r*this.count),r,this.count,sc,Un));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ns=class extends Fn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uo=new C,ho=new C,Ou=new vt,Vr=new gr,ks=new ei,xa=new C,Bu=new C,El=class extends Ut{constructor(e=new yt,t=new ns){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)uo.fromBufferAttribute(t,r-1),ho.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=uo.distanceTo(ho);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),ks.radius+=s,e.ray.intersectsSphere(ks)===!1)return;Ou.copy(r).invert(),Vr.copy(e.ray).applyMatrix4(Ou);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let f=u.getX(x),y=u.getX(x+1),M=Hs(this,e,Vr,l,f,y);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),f=Hs(this,e,Vr,l,x,m);f&&t.push(f)}}else{let d=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let f=Hs(this,e,Vr,l,x,x+1);f&&t.push(f)}if(this.isLineLoop){let x=Hs(this,e,Vr,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Hs(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(uo.fromBufferAttribute(o,r),ho.fromBufferAttribute(o,s),t.distanceSqToSegment(uo,ho,xa,Bu)>n)return;xa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(xa);if(!(l<e.near||l>e.far))return{distance:l,point:Bu.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var zu=new C,ku=new C,is=class extends El{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)zu.fromBufferAttribute(t,r),ku.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+zu.distanceTo(ku);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var rs=class extends Fn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hu=new vt,Tl=new gr,Vs=new ei,Gs=new C,ti=class extends Ut{constructor(e=new yt,t=new rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),Vs.radius+=s,e.ray.intersectsSphere(Vs)===!1)return;Hu.copy(r).invert(),Tl.copy(e.ray).applyMatrix4(Hu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let p=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=p,x=d;g<x;g++){let m=c.getX(g);Gs.fromBufferAttribute(h,m),Vu(Gs,m,l,r,e,t,this)}}else{let p=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=p,x=d;g<x;g++)Gs.fromBufferAttribute(h,g),Vu(Gs,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Vu(i,e,t,n,r,s,o){let a=Tl.distanceSqToPoint(i);if(a<t){let l=new C;Tl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var _r=class extends tn{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],p=n[r+1]-u,d=(o-u)/p;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new oe:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,r=[],s=[],o=[],a=new C,l=new vt;for(let d=0;d<=e;d++){let g=d/e;r[d]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Bt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Bt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ss=class extends gn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*h+this.aX,c=p*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Al=class extends ss{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function pc(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let p=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;p*=u,d*=u,r(o,a,p,d)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Ws=new C,va=new pc,ya=new pc,_a=new pc,Rl=class extends gn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new C){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ws.subVectors(r[0],r[1]).add(r[0]),c=Ws);let h=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ws.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ws),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),va.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,g,x,m),ya.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,g,x,m),_a.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(va.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),ya.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),_a.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return n.set(va.calc(l),ya.calc(l),_a.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gu(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function vx(i,e){let t=1-i;return t*t*e}function yx(i,e){return 2*(1-i)*i*e}function _x(i,e){return i*i*e}function Zr(i,e,t,n){return vx(i,e)+yx(i,t)+_x(i,n)}function Mx(i,e){let t=1-i;return t*t*t*e}function bx(i,e){let t=1-i;return 3*t*t*i*e}function Sx(i,e){return 3*(1-i)*i*i*e}function wx(i,e){return i*i*i*e}function Jr(i,e,t,n,r){return Mx(i,e)+bx(i,t)+Sx(i,n)+wx(i,r)}var fo=class extends gn{constructor(e=new oe,t=new oe,n=new oe,r=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new oe){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Jr(e,r.x,s.x,o.x,a.x),Jr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cl=class extends gn{constructor(e=new C,t=new C,n=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new C){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Jr(e,r.x,s.x,o.x,a.x),Jr(e,r.y,s.y,o.y,a.y),Jr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},po=class extends gn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pl=class extends gn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends gn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Zr(e,r.x,s.x,o.x),Zr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Il=class extends gn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Zr(e,r.x,s.x,o.x),Zr(e,r.y,s.y,o.y),Zr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Gu(a,l.x,c.x,u.x,h.x),Gu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new oe().fromArray(r))}return this}},Wu=Object.freeze({__proto__:null,ArcCurve:Al,CatmullRomCurve3:Rl,CubicBezierCurve:fo,CubicBezierCurve3:Cl,EllipseCurve:ss,LineCurve:po,LineCurve3:Pl,QuadraticBezierCurve:mo,QuadraticBezierCurve3:Il,SplineCurve:go}),Ll=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Wu[r.type]().fromJSON(r))}return this}},Dl=class extends Ll{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new po(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new mo(this.currentPoint.clone(),new oe(e,t),new oe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new fo(this.currentPoint.clone(),new oe(e,t),new oe(n,r),new oe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new go(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new ss(e,t,n,r,s,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ul=class i extends yt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Bt(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,h=new C,p=new oe,d=new C,g=new C,x=new C,m=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,d.x=f*1,d.y=-m,d.z=f*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=t;y++){let M=n+y*u*r,v=Math.sin(M),P=Math.cos(M);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*v,h.y=e[E].y,h.z=e[E].x*P,o.push(h.x,h.y,h.z),p.x=y/t,p.y=E/(e.length-1),a.push(p.x,p.y);let R=l[3*E+0]*v,L=l[3*E+1],w=l[3*E+0]*P;c.push(R,L,w)}}for(let y=0;y<t;y++)for(let M=0;M<e.length-1;M++){let v=M+y*e.length,P=v,E=v+e.length,R=v+e.length+1,L=v+1;s.push(P,E,L),s.push(R,L,E)}this.setIndex(s),this.setAttribute("position",new ft(o,3)),this.setAttribute("uv",new ft(a,2)),this.setAttribute("normal",new ft(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},xo=class i extends Ul{constructor(e=1,t=1,n=4,r=8){let s=new Dl;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},vo=class i extends yt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new C,u=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=t;h++,p+=3){let d=n+h/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[p]/e+1)/2,u.y=(o[p+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mr=class i extends yt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],p=[],d=[],g=0,x=[],m=n/2,f=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(p,3)),this.setAttribute("uv",new ft(d,2));function y(){let v=new C,P=new C,E=0,R=(t-e)/n;for(let L=0;L<=s;L++){let w=[],b=L/s,I=b*(t-e)+e;for(let k=0;k<=r;k++){let O=k/r,V=O*l+a,W=Math.sin(V),H=Math.cos(V);P.x=I*W,P.y=-b*n+m,P.z=I*H,h.push(P.x,P.y,P.z),v.set(W,R,H).normalize(),p.push(v.x,v.y,v.z),d.push(O,1-b),w.push(g++)}x.push(w)}for(let L=0;L<r;L++)for(let w=0;w<s;w++){let b=x[w][L],I=x[w+1][L],k=x[w+1][L+1],O=x[w][L+1];(e>0||w!==0)&&(u.push(b,I,O),E+=3),(t>0||w!==s-1)&&(u.push(I,k,O),E+=3)}c.addGroup(f,E,0),f+=E}function M(v){let P=g,E=new oe,R=new C,L=0,w=v===!0?e:t,b=v===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,m*b,0),p.push(0,b,0),d.push(.5,.5),g++;let I=g;for(let k=0;k<=r;k++){let V=k/r*l+a,W=Math.cos(V),H=Math.sin(V);R.x=w*H,R.y=m*b,R.z=w*W,h.push(R.x,R.y,R.z),p.push(0,b,0),E.x=W*.5+.5,E.y=H*.5*b+.5,d.push(E.x,E.y),g++}for(let k=0;k<r;k++){let O=P+k,V=I+k;v===!0?u.push(V,V+1,O):u.push(V+1,V,O),L+=3}c.addGroup(f,L,v===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xs=new C,qs=new C,Ma=new C,Ys=new pi,os=class extends yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(ar*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),p={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:f}=Ys;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Ys.getNormal(Ma),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){let M=(y+1)%3,v=h[y],P=h[M],E=Ys[u[y]],R=Ys[u[M]],L=`${v}_${P}`,w=`${P}_${v}`;w in p&&p[w]?(Ma.dot(p[w].normal)<=s&&(d.push(E.x,E.y,E.z),d.push(R.x,R.y,R.z)),p[w]=null):L in p||(p[L]={index0:c[y],index1:c[M],normal:Ma.clone()})}}for(let g in p)if(p[g]){let{index0:x,index1:m}=p[g];Xs.fromBufferAttribute(a,x),qs.fromBufferAttribute(a,m),d.push(Xs.x,Xs.y,Xs.z),d.push(qs.x,qs.y,qs.z)}this.setAttribute("position",new ft(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var vi=class i extends yt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new C,p=new C,d=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let y=[],M=f/n,v=0;f===0&&o===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){let E=P/t;h.x=-e*Math.cos(r+E*s)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),p.copy(h).normalize(),x.push(p.x,p.y,p.z),m.push(E+v,1-M),y.push(c++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){let M=u[f][y+1],v=u[f][y],P=u[f+1][y],E=u[f+1][y+1];(f!==0||o>0)&&d.push(M,v,E),(f!==n-1||l<Math.PI)&&d.push(v,P,E)}this.setIndex(d),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Di=class i extends yt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new C,h=new C,p=new C;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){let x=g/r*s,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),c.push(g/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){let x=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,f=(r+1)*(d-1)+g,y=(r+1)*d+g;o.push(x,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ui=class extends Fn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var as=class extends Fn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Zs(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ex(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var br=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nl=class extends br{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bc,endingEnd:Bc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case zc:s=e,a=2*t-n;break;case kc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zc:o=e,l=2*n-t;break;case kc:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,f=-p*m+2*p*x-p*g,y=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*g+1,M=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let P=0;P!==a;++P)s[P]=f*o[u+P]+y*o[c+P]+M*o[l+P]+v*o[h+P];return s}},Fl=class extends br{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let p=0;p!==a;++p)s[p]=o[c+p]*h+o[l+p]*u;return s}},Ol=class extends br{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Rn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zs(t,this.TimeBufferType),this.values=Zs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zs(e.times,Array),values:Zs(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case eo:t=this.InterpolantFactoryMethodDiscrete;break;case ll:t=this.InterpolantFactoryMethodLinear;break;case Wo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eo;case this.InterpolantFactoryMethodLinear:return ll;case this.InterpolantFactoryMethodSmooth:return Wo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Ex(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Wo,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*n,p=h-n,d=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[p+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,p=o*n;for(let d=0;d!==n;++d)t[p+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=ll;var Ni=class extends Rn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=eo;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends Rn{};Bl.prototype.ValueTypeName="color";var zl=class extends Rn{};zl.prototype.ValueTypeName="number";var kl=class extends br{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)gi.slerpFlat(s,0,o,c-a,o,c,l);return s}},yo=class extends Rn{InterpolantFactoryMethodLinear(e){return new kl(this.times,this.values,this.getValueSize(),e)}};yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Rn{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=eo;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Rn{};Hl.prototype.ValueTypeName="vector";var Vl=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},Tx=new Vl,Gl=class{constructor(e){this.manager=e!==void 0?e:Tx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},_o=class extends ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ba=new vt,Xu=new C,qu=new C,Mo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xu),qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qu),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Yu=new vt,Gr=new C,Sa=new C,Wl=class extends Mo{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gr),Sa.copy(n.position),Sa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sa),n.updateMatrixWorld(),r.makeTranslation(-Gr.x,-Gr.y,-Gr.z),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu)}},cs=class extends ls{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Wl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Xl=class extends Mo{constructor(){super(new On(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},us=class extends ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Xl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var bo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Zu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Zu(){return performance.now()}var mc="\\[\\]\\.:\\/",Ax=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",Rx="[^"+mc.replace("\\.","")+"]",Cx=/((?:WC+[\/:])*)/.source.replace("WC",gc),Px=/(WCOD+)?/.source.replace("WCOD",Rx),Ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),Lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),Dx=new RegExp("^"+Cx+Px+Ix+Lx+"$"),Ux=["material","materials","bones","map"],ql=class{constructor(e,t,n){let r=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ax,"")}static parseTrackName(e){let t=Dx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Ux.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=ql;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bv=new Float32Array(1);var Ju=new vt,So=class{constructor(e,t,n=0,r=1/0){this.ray=new gr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ju),this}intersectObject(e,t=!0,n=[]){return Yl(e,this,n,t),n.sort(Ku),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Yl(e[r],this,n,t);return n.sort(Ku),n}};function Ku(i,e){return i.distance-e.distance}function Yl(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Yl(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var xn={bg:526607,amber:15250790,champagne:16043918,ember:13201727,ice:9419007,iceHi:14478335},Ro={half:5,wallH:3.4,wallT:.3},Dt={workstation:[.9,0,.7],tableTop:.76,monitorRel:[.35,-.38],island:[.9,0,-2.7],deskX:-4.5,deskStations:[-2.7,-.55,1.6]},Je={grid:[0,.1],slab:[.03,.12],trim:[.1,.16],tiles:[.08,.22],rug:[.2,.27],wallA:[.15,.25],wallB:[.19,.29],corner:[.24,.3],glazing:[.27,.34],desks:[.24,.37],storage:[.28,.39],island:[.3,.4],workstation:[.33,.43],props:[.36,.5],unity:[.53,.67],screens:[.57,.63],approach:[.72,.9],hover:[.89,.93],select:[.93,.97],preview:[.935,.975]},ni={fov:[[0,22],[.5,22],[.7,22],[.9,40],[1,42]],az:[[0,64],[.22,55],[.5,45],[.7,47],[.82,28],[.9,12],[1,8]],el:[[0,46],[.25,38],[.5,33],[.7,31],[.82,24],[.9,15],[1,13]],dist:[[0,1.22],[.25,1.1],[.5,1],[.7,.97],[.82,.33],[.9,.085],[1,.075]],tx:[[0,0],[.5,0],[.7,0],[.82,.8],[.9,1.15],[1,1.2]],ty:[[0,.4],[.3,1.1],[.5,1.3],[.7,1.3],[.9,1.3],[1,1.3]],tz:[[0,0],[.5,0],[.7,0],[.82,.4],[.9,.35],[1,.35]]};var Nx=i=>i<0?0:i>1?1:i,zn=(i,e,t)=>i+(e-i)*t,Ve=(i,e,t)=>Nx((i-e)/(t-e)),Tt=i=>i*i*(3-2*i),Ar=i=>1-(1-i)**3,xc=i=>1-(1-i)**4,Co=(i,e=1.5)=>1+(e+1)*(i-1)**3+e*(i-1)**2,kn=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)};function yi(i){let e=i.length,t=i.map(o=>o[0]),n=i.map(o=>o[1]),r=[];for(let o=0;o<e-1;o++)r[o]=(n[o+1]-n[o])/(t[o+1]-t[o]);let s=new Array(e);s[0]=r[0],s[e-1]=r[e-2];for(let o=1;o<e-1;o++)s[o]=r[o-1]*r[o]<=0?0:(r[o-1]+r[o])/2;for(let o=0;o<e-1;o++){if(r[o]===0){s[o]=s[o+1]=0;continue}let a=s[o]/r[o],l=s[o+1]/r[o],c=a*a+l*l;if(c>9){let u=3/Math.sqrt(c);s[o]=u*a*r[o],s[o+1]=u*l*r[o]}}return o=>{if(o<=t[0])return n[0];if(o>=t[e-1])return n[e-1];let a=0;for(;o>t[a+1];)a++;let l=t[a+1]-t[a],c=(o-t[a])/l,u=c*c,h=u*c;return(2*h-3*u+1)*n[a]+(h-2*u+c)*l*s[a]+(-2*h+3*u)*n[a+1]+(h-u)*l*s[a+1]}}function xh(i=null){let e=(n,r={})=>new as({color:n,...r}),t=(n,r=.6,s=.05,o={})=>new Ui({color:n,roughness:r,metalness:s,envMap:i,envMapIntensity:.55,userData:{reflects:!0},...o});return{paint:e(12433582),wainscot:e(6650250),baseboard:e(2829878),slab:e(1052950),tile:e(16777215),brass:t(14263889,.32,.85),rug:e(3422534),wood:e(13082478),woodDark:e(7622970),laminate:e(15131612),steel:t(10134189,.42,.35),steelDark:t(3093308,.5,.4),plastic:t(1184536,.45,.05),plasticWhite:t(14869479,.4),fabric:e(2961986),fabricBlue:e(4022159),paper:e(15789799),cardboard:e(11636322),pot:e(11692619),tape:e(14857535),vertex:e(16777215,{vertexColors:!0}),lampBulb:new Ui({color:1709064,emissive:16763274,emissiveIntensity:2.2,roughness:.4}),glass:new Ui({color:11126510,roughness:.06,metalness:0,transparent:!0,opacity:.22,depthWrite:!1})}}function vh(i){let e=new An;e.add(new st(new vi(60,32,16),new zt({color:460813,side:Ct})));let t=(s,o,a,l,c)=>{let u=new st(new kt(s,o),new zt({color:new Ce(a).multiplyScalar(l),side:en}));u.position.set(...c),u.lookAt(0,0,0),e.add(u)};t(30,16,xn.champagne,4.5,[-24,26,18]),t(10,26,xn.ice,2.6,[30,10,-14]),t(14,14,16777215,1.8,[0,40,2]);let n=new vr(i),r=n.fromScene(e,.04);return n.dispose(),e.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),r.texture}function yh(i,e){i.traverse(t=>{let n=t.material?Array.isArray(t.material)?t.material:[t.material]:[];for(let r of n)!r.userData.reflects||r.envMap===e||(r.envMap=e,r.needsUpdate=!0)})}var vc=new Set;function Yt(i,e=512,t=512,{anisotropy:n=4,redraw:r=!1}={}){let s=document.createElement("canvas");s.width=e,s.height=t;let o=s.getContext("2d"),a=new _r(s);a.colorSpace=St,a.anisotropy=n,a.needsUpdate=!1;let l=!1;return a.userData.paint=()=>{l||(l=!0,vc.delete(a),i(o,e,t),a.needsUpdate=!0)},vc.add(a),r&&document.fonts&&document.fonts.ready.then(()=>{l&&(o.clearRect(0,0,e,t),i(o,e,t),a.needsUpdate=!0)}),a}var _h=i=>i.userData.paint?.();function Mh(){for(let i of[...vc])i.userData.paint()}function ii(i,e=.55,t=.1){return t<.15?new as({map:i}):new Ui({map:i,roughness:e,metalness:t})}function cn(i,e=1){return new zt({map:i,color:new Ce().setScalar(e)})}function bh(i,e){let t=new dt,n=new _o(11123932,3420202,1.5);t.add(n);let r=new us(15988479,1.5);r.position.set(-7,15,10),r.castShadow=!0;let s=e.shadowSize;r.shadow.mapSize.set(s,s);let o=r.shadow.camera;o.left=-9,o.right=9,o.top=9,o.bottom=-9,o.near=2,o.far=42,r.shadow.bias=-4e-4,r.shadow.normalBias=.035,t.add(r,r.target);let a=new us(9416938,.35);a.position.set(11,7,-5),t.add(a);let l=new cs(16763274,0,4,2),c=new cs(16763274,0,3.5,2);t.add(l,c),i.add(t);let u=new Ce(15988479),h=new Ce(16765856),p="intensity"in r.shadow;return{group:t,setPractical(d,g){l.position.copy(d),c.position.copy(g)},update({unity:d=0}={}){n.intensity=zn(1.5,.62,d),r.color.copy(u).lerp(h,d),r.intensity=zn(2.3,3.4,d),p&&(r.shadow.intensity=zn(.5,1,d)),a.intensity=zn(.35,.7,d),l.intensity=6*d,c.intensity=5*d}}}var Sh=ni.fov[0][1],Oi={fov:yi(ni.fov),az:yi(ni.az),el:yi(ni.el),logDist:yi(ni.dist.map(([i,e])=>[i,Math.log(e)])),tx:yi(ni.tx),ty:yi(ni.ty),tz:yi(ni.tz)},yc=Math.PI/180;function wh(){let i=new Xt(Sh,1,.5,160),e=40,t=!1;function n(a,l){let c=a/Math.max(1,l);i.aspect=c,t=c<.9;let u=Math.tan(Sh*yc/2),h=t?8.8:9.25,p=t?7.5:9.2;e=Math.max(h/u,p/(u*c)),i.setViewOffset(a,l,0,-Math.round(l*(t?.01:.075)),a,l),i.updateProjectionMatrix()}let r=new C,s=-1;function o(a){let l=Oi.az(a)*yc,c=Oi.el(a)*yc,u=Math.exp(Oi.logDist(a))*e;r.set(Oi.tx(a),Oi.ty(a),Oi.tz(a)),i.position.set(r.x+u*Math.cos(c)*Math.sin(l),r.y+u*Math.sin(c),r.z+u*Math.cos(c)*Math.cos(l));let h=Tt(Ve(a,...Je.approach))*(1-Tt(Ve(a,Je.approach[1]-.03,Je.approach[1]+.02)));i.position.y+=(t?0:.015)*h*Math.sin(a*260),i.lookAt(r);let p=Oi.fov(a)*(t?1+.25*Ve(a,...Je.approach):1);Math.abs(p-s)>.01&&(s=p,i.fov=p,i.updateProjectionMatrix()),i.updateMatrixWorld()}return{camera:i,resize:n,update:o}}var Eh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Fx=new On(-1,1,1,-1,0,1),_c=class extends yt{constructor(){super(),this.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ft([0,2,0,0,2,0],2))}},Ox=new _c,Rr=class{constructor(e){this._mesh=new st(Ox,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Cr=class extends Cn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=dc.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Rr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ds=class extends Cn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Po=class extends Cn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Io=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cr(Eh),this.copyPass.material.blending=Nn,this.clock=new bo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ds!==void 0&&(o instanceof ds?n=!0:o instanceof Po&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Lo=class extends Cn{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}};var Bx=`
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
  }`,zx=`
  uniform sampler2D tDiffuse;
  uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv + uTexel * vec2(-1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2(-1.0,  1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
    gl_FragColor = vec4(c * 0.25, 1.0);
  }`,kx=`
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
  }`,Hx=`
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
  }`,Vx={uniforms:{tDiffuse:{value:null},resolution:{value:new oe(1/1024,1/512)}},vertexShader:`
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
    }`},Gx=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Do=(i,e)=>new Rt({vertexShader:Gx,fragmentShader:i,uniforms:e,depthTest:!1,depthWrite:!1}),Mc=class extends Cn{constructor({strength:e=.32,threshold:t=1,knee:n=.5}={}){super();let r=()=>new qt(4,4,{type:Bn,depthBuffer:!1});this.near=[r(),r()],this.far=[r(),r()],this.bright=Do(Bx,{tDiffuse:{value:null},uTexel:{value:new oe},uThreshold:{value:t},uKnee:{value:n}}),this.down=Do(zx,{tDiffuse:{value:null},uTexel:{value:new oe}}),this.blur=Do(kx,{tDiffuse:{value:null},uDir:{value:new oe}}),this.composite=Do(Hx,{tDiffuse:{value:null},tNear:{value:null},tFar:{value:null},uStrength:{value:e},uGrade:{value:0}}),this.composite.toneMapped=!1,this.quad=new Rr(this.bright)}setSize(e,t){let n=Math.max(2,Math.round(e/4)),r=Math.max(2,Math.round(t/4)),s=Math.max(2,Math.round(e/16)),o=Math.max(2,Math.round(t/16));this.near.forEach(a=>a.setSize(n,r)),this.far.forEach(a=>a.setSize(s,o)),this.srcSize=[e,t]}_run(e,t,n){this.quad.material=t,e.setRenderTarget(n),this.quad.render(e)}_blur(e,t,n,r){let[s,o]=t;this.blur.uniforms.uDir.value.set(1/n,0),this.blur.uniforms.tDiffuse.value=s.texture,this._run(e,this.blur,o),this.blur.uniforms.uDir.value.set(0,1/r),this.blur.uniforms.tDiffuse.value=o.texture,this._run(e,this.blur,s)}render(e,t,n){let[r,s]=this.srcSize,[o,a]=[this.near[0].width,this.near[0].height],[l,c]=[this.far[0].width,this.far[0].height];this.bright.uniforms.tDiffuse.value=n.texture,this.bright.uniforms.uTexel.value.set(1/r,1/s),this._run(e,this.bright,this.near[0]),this._blur(e,this.near,o,a),this.down.uniforms.tDiffuse.value=this.near[0].texture,this.down.uniforms.uTexel.value.set(1/o,1/a),this._run(e,this.down,this.far[0]),this._blur(e,this.far,l,c),this._blur(e,this.far,l,c);let u=this.composite.uniforms;u.tDiffuse.value=n.texture,u.tNear.value=this.near[0].texture,u.tFar.value=this.far[0].texture,this._run(e,this.composite,this.renderToScreen?null:t)}dispose(){[...this.near,...this.far].forEach(e=>e.dispose()),[this.bright,this.down,this.blur,this.composite].forEach(e=>e.dispose()),this.quad.dispose()}},Th={[Ql]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[$l]:"CINEON_TONE_MAPPING",[hs]:"ACES_FILMIC_TONE_MAPPING",[ec]:"AGX_TONE_MAPPING",[tc]:"NEUTRAL_TONE_MAPPING"};function Ah(i,e){let t=`${e.toneMapping}|${e.outputColorSpace}`;i.userData.outputKey!==t&&(i.userData.outputKey=t,i.defines={},ct.getTransfer(e.outputColorSpace)===xt&&(i.defines.SRGB_TRANSFER=""),Th[e.toneMapping]&&(i.defines[Th[e.toneMapping]]=""),i.needsUpdate=!0)}function Rh(i,e,t){let n=new qt(4,4,{type:Bn,samples:0}),r=new Io(i,n);r.addPass(new Lo(e,t));let s=new Mc;r.addPass(s),Ah(s.composite,i);let o=new Cr(Vx);return r.addPass(o),{render:()=>r.render(),sceneTarget:n,programs(){return Ah(s.composite,i),[[s.bright,!1],[s.down,!1],[s.blur,!1],[s.composite,!o.enabled],[o.material,!0]]},setSize(a,l,c){r.setPixelRatio(c),r.setSize(a,l),o.enabled=c<1.75,o.material.uniforms.resolution.value.set(1/(a*c),1/(l*c))},setBloom:a=>s.enabled=a,setGrade:a=>s.composite.uniforms.uGrade.value=a,dispose:()=>r.dispose()}}function Ch(){let i=new Rt({transparent:!0,depthWrite:!1,blending:Ii,uniforms:{uOpacity:{value:0},uReveal:{value:0},uColor:{value:new Ce(xn.amber)}},vertexShader:`
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
      }`}),e=new st(new kt(140,140),i);return e.rotation.x=-Math.PI/2,e.position.y=-.62,e.renderOrder=-1,e.frustumCulled=!1,{group:e,update(t){i.uniforms.uReveal.value=zn(0,60,Tt(Ve(t,...Je.grid)));let n=zn(1,.22,Tt(Ve(t,.14,.3)));i.uniforms.uOpacity.value=n*(1-Tt(Ve(t,...Je.unity)))}}}var fs=new C;function vn(i,e,t,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;fs.copy(e),fs[n]=0,fs.normalize();let c=.5*o/(o+a),u=1-fs.angleTo(i)/l;return Math.sign(fs[t])===1?u*c:a/(o+a)+c+c*(1-u)}var Pr=class extends Tn{constructor(e=1,t=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),r===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new C,l=new C,c=new C(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,d=u.length/6,g=new C,x=.5/r;for(let m=0,f=0;m<u.length;m+=3,f+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*s,u[m+1]=c.y*Math.sign(a.y)+l.y*s,u[m+2]=c.z*Math.sign(a.z)+l.z*s,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),p[f+0]=vn(g,l,"z","y",s,n),p[f+1]=1-vn(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),p[f+0]=1-vn(g,l,"z","y",s,n),p[f+1]=1-vn(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),p[f+0]=1-vn(g,l,"x","z",s,e),p[f+1]=vn(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),p[f+0]=1-vn(g,l,"x","z",s,e),p[f+1]=1-vn(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),p[f+0]=1-vn(g,l,"x","y",s,e),p[f+1]=1-vn(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),p[f+0]=vn(g,l,"x","y",s,e),p[f+1]=1-vn(g,l,"y","x",s,t);break}}};function Ih(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new yt,c=0;for(let u=0;u<i.length;++u){let h=i[u],p=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let p=0;p<i.length;++p){let d=i[p].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[p].attributes.position.count}l.setIndex(h)}for(let u in s){let h=Ph(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<h;++p){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][p]);let g=Ph(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Ph(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new ut(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let p=0,d=u.count;p<d;p++)for(let g=0;g<t;g++){let x=u.getComponent(p,g);a.setComponent(p+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}var bc=new Map;function Sc(i,e,t,n,r){let s=`${i},${e},${t},${n},${r}`,o=bc.get(s);return o||bc.set(s,o=new Pr(i,e,t,n,r)),new yt().copy(o)}function Dh(){bc.clear()}var Lh=()=>new ns({color:xn.amber,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1});function et({size:i,at:e=[0,0,0],material:t,radius:n=.04,wire:r=!0,keepWire:s=0,fx:o="drop",drop:a=3,dir:l=new C(0,-3,0),geometry:c=null,shadow:u=!0}){let[h,p,d]=i,g=c;if(!g){let P=Math.max(.004,Math.min(n,Math.min(h,p,d)/2-.002));g=Sc(h,p,d,P>.03?3:2,P),g.translate(0,p/2,0)}let x=t.clone();x.alphaHash=!0,x.transparent=!1,x.opacity=0;let m=new st(g,x);m.receiveShadow=!0,m.userData.shadowCaster=u;let f=new dt;f.add(m),f.position.set(e[0],e[1],e[2]),f.visible=!1;let y=null;if(r==="edges")y=new is(new os(g,25),Lh()),f.add(y);else if(r){let P=new Tn(h,p,d).translate(0,p/2,0);y=new is(new os(P),Lh()),P.dispose(),f.add(y)}let M=f.position.clone();function v(P){let E=P>5e-4;if(f.visible=E,!E)return;let R=Ve(P,.06,.8);switch(o){case"drop":{f.position.y=M.y+a*(1-xc(R));let L=Math.sin(Math.PI*Ve(P,.62,.9));f.scale.y=1-.035*L;break}case"rise":f.scale.y=Math.max(.001,Ar(Ve(P,.04,.85)));break;case"slide":f.position.copy(M).addScaledVector(l,1-xc(R));break;case"pop":f.scale.setScalar(Math.max(.001,Co(Ve(P,.04,.8),1.2)));break}if(x.opacity=Tt(Ve(P,.34,.8)),m.castShadow=u&&P>.6,y){let L=Tt(Ve(P,.02,.2)),w=Tt(Ve(P,.68,1));y.material.opacity=L*(1-(1-s)*w)*.9}}return{root:f,mesh:m,mat:x,set:v,rest:M}}function ke(i,e,t={}){return et({size:[1,1,1],geometry:i,material:e,wire:!1,fx:"drop",drop:2.4,shadow:!1,...t})}function Zt(i){let e=Ih(i.map(t=>t.index?t.toNonIndexed():t));return i.forEach(t=>t.dispose()),e}function nn(i,e,t,n=.55){let r=t>1?e/(t-1)*n:0;return Ve(i,r,r+1-n)}var Uh={blender:{color:"#E87D0D",path:"M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626"},unity:{color:"#FFFFFF",path:"m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z"}};var Wx='"Inter", "Segoe UI", system-ui, sans-serif';function Nh(i,e,t,n,r,s=1){let o=Uh[e];i.save(),i.translate(t,n),i.scale(r/24,r/24),i.globalAlpha=s,i.fillStyle=o.color,i.fill(new Path2D(o.path)),i.restore()}var Ke=(i,e,t,n,r,s,o=0)=>{i.fillStyle=s,o?(i.beginPath(),i.roundRect(e,t,n,r,o),i.fill()):i.fillRect(e,t,n,r)},Jt=(i,e,t,n,r,s,o=500,a="left")=>{i.font=`${o} ${r}px ${Wx}`,i.fillStyle=s,i.textAlign=a,i.textBaseline="middle",i.fillText(e,t,n)};function Fh(i,e,t,n,{fill:r,line:s,outline:o,lit:a}){let l=(u,h,p)=>[e+(u-p)*n*.866,t+(u+p)*n*.5-h*n],c=(u,h,p,d=1.5)=>{i.beginPath(),u.forEach(([g,x],m)=>m?i.lineTo(g,x):i.moveTo(g,x)),i.closePath(),h&&(i.fillStyle=h,i.fill()),p&&(i.strokeStyle=p,i.lineWidth=d,i.stroke())};c([l(-1,0,-1),l(1,0,-1),l(1,0,1),l(-1,0,1)],r.floor,s),c([l(-1,0,-1),l(1,0,-1),l(1,1,-1),l(-1,1,-1)],r.wallB,s),c([l(-1,0,-1),l(-1,0,1),l(-1,1,1),l(-1,1,-1)],r.wallA,s),c([l(-.95,0,-.6),l(-.8,0,-.6),l(-.8,.3,-.6),l(-.95,.3,-.6)],null,null),c([l(-.95,.28,-.6),l(-.8,.28,-.6),l(-.8,.28,.6),l(-.95,.28,.6)],r.desk,s),c([l(-.3,.28,.1),l(.4,.28,.1),l(.4,.28,.6),l(-.3,.28,.6)],r.desk,o||s,o?2.6:1.5),a&&(i.fillStyle=a,i.beginPath(),i.arc(...l(0,.5,.4),n*.05,0,7),i.fill())}function Ir(){return Yt((i,e,t)=>{Ke(i,0,0,e,t,"#232323"),Ke(i,0,0,e,40,"#1d1d1d"),Nh(i,"blender",12,7,26),["File","Edit","Render","Window","Help"].forEach((l,c)=>Jt(i,l,56+c*62,20,15,"#c9c9c9")),["Layout","Modeling","Sculpting","Shading"].forEach((l,c)=>{Ke(i,e-380+c*92,8,84,26,c===1?"#3f3f3f":"#2b2b2b",6),Jt(i,l,e-338+c*92,21,13,c===1?"#f0f0f0":"#a8a8a8",500,"center")});let n=50,r=46,s=e-50-270,o=t-46-90,a=i.createLinearGradient(0,r,0,r+o);a.addColorStop(0,"#404040"),a.addColorStop(1,"#565656"),i.fillStyle=a,i.fillRect(n,r,s,o),i.save(),i.beginPath(),i.rect(n,r,s,o),i.clip(),i.strokeStyle="rgba(255,255,255,0.10)",i.lineWidth=1;for(let l=-14;l<=14;l++)i.beginPath(),i.moveTo(n+s/2+l*60,r+o*.52),i.lineTo(n+s/2+l*200,r+o),i.stroke();for(let l=0;l<9;l++){let c=r+o*.52+l*l*o*.5/60;i.beginPath(),i.moveTo(n,c),i.lineTo(n+s,c),i.stroke()}i.strokeStyle="rgba(203,68,68,0.85)",i.lineWidth=2,i.beginPath(),i.moveTo(n,r+o*.78),i.lineTo(n+s,r+o*.7),i.stroke(),i.strokeStyle="rgba(112,171,58,0.85)",i.beginPath(),i.moveTo(n+s*.52,r+o*.5),i.lineTo(n+s*.62,r+o),i.stroke(),Fh(i,n+s*.5,r+o*.5,150,{fill:{floor:"#6a6a6a",wallA:"#7a7a7a",wallB:"#8b8b8b",desk:"#a0a0a0"},line:"rgba(30,30,30,0.9)",outline:"#f5a623"}),i.restore(),Jt(i,"User Perspective",n+12,r+16,12,"rgba(255,255,255,0.7)"),Jt(i,"(1) Lab",n+12,r+32,11,"rgba(255,255,255,0.5)");for(let l=0;l<9;l++)Ke(i,10,54+l*42,30,30,l===1?"#4772b3":"#333",5);Ke(i,e-264,46,264,210,"#282828"),Jt(i,"Scene Collection",e-250,62,13,"#dcdcdc",600),["Lab","Walls","Desks","Chairs","Workstation","Monitor","Headset"].forEach((l,c)=>{Ke(i,e-250+(c?14:0),82+c*22,6,6,c===5?"#f5a623":"#7a7a7a",3),Jt(i,l,e-236+(c?14:0),86+c*22,12,c===5?"#f5a623":"#bcbcbc")}),Ke(i,e-264,262,264,t-262-90,"#2b2b2b"),["Location","Rotation","Scale"].forEach((l,c)=>{Jt(i,l,e-250,286+c*60,12,"#c4c4c4",600);for(let u=0;u<3;u++)Ke(i,e-250+u*78,298+c*60,72,22,"#3d3d3d",4)}),Ke(i,0,t-84,e,84,"#262626");for(let l=0;l<40;l++)Ke(i,60+l*22,t-60,1,l%5?8:16,"#555");[180,320,470,640].forEach(l=>{i.save(),i.translate(l,t-30),i.rotate(Math.PI/4),Ke(i,-6,-6,12,12,"#f5a623"),i.restore()})},1024,640)}function Uo(){return Yt((i,e,t)=>{Ke(i,0,0,e,t,"#383838"),Ke(i,0,0,e,44,"#282828"),Nh(i,"unity",12,8,28),["File","Edit","Assets","GameObject","Window"].forEach((l,c)=>Jt(i,l,56+c*70,22,14,"#cfcfcf")),Ke(i,e/2-70,8,44,28,"#4c8be6",5),i.fillStyle="#fff",i.beginPath(),i.moveTo(e/2-55,15),i.lineTo(e/2-55,29),i.lineTo(e/2-43,22),i.fill(),Ke(i,e/2-20,8,44,28,"#4a4a4a",5),Ke(i,e/2+28,8,44,28,"#4a4a4a",5),Ke(i,0,44,200,t-44-190,"#2f2f2f"),Jt(i,"Hierarchy",12,62,13,"#e0e0e0",600),[["SampleScene",0],["Lab",1],["Walls",2],["Desks",2],["XR Origin",1],["Workstation",1],["Monitor",2],["Headset",2]].forEach(([l,c],u)=>{l==="Monitor"&&Ke(i,0,78+u*24,200,24,"#2c5d87"),Jt(i,l,16+c*16,91+u*24,13,l==="Monitor"?"#ffffff":"#c8c8c8")});let r=204,s=e-204-270,o=t-44-190,a=i.createLinearGradient(0,44,0,44+o);a.addColorStop(0,"#4b6f97"),a.addColorStop(1,"#a9bccd"),i.fillStyle=a,i.fillRect(r,44,s,o),i.save(),i.beginPath(),i.rect(r,44,s,o),i.clip(),Fh(i,r+s*.5,44+o*.55,165,{fill:{floor:"#6f747e",wallA:"#c9c2b6",wallB:"#d6cfc2",desk:"#c79f6e"},line:"rgba(20,24,32,0.55)",outline:"#ff9f1a",lit:"#ffd28a"}),i.restore(),Jt(i,"Scene",r+10,62,13,"#e6e6e6",600),i.strokeStyle="#e04b4b",i.lineWidth=3,i.beginPath(),i.moveTo(r+s-60,96),i.lineTo(r+s-30,108),i.stroke(),i.strokeStyle="#7fc043",i.beginPath(),i.moveTo(r+s-60,96),i.lineTo(r+s-60,62),i.stroke(),i.strokeStyle="#4c8be6",i.beginPath(),i.moveTo(r+s-60,96),i.lineTo(r+s-88,110),i.stroke(),Ke(i,e-266,44,266,t-44-190,"#2f2f2f"),Jt(i,"Inspector",e-254,62,13,"#e0e0e0",600),Jt(i,"Monitor",e-254,92,15,"#ffffff",600),["Transform","Mesh Renderer","XR Simple Interactable"].forEach((l,c)=>{Ke(i,e-258,112+c*88,250,26,"#3c3c3c",3),Ke(i,e-250,121+c*88,8,8,"#4c8be6",2),Jt(i,l,e-234,126+c*88,12,"#dcdcdc",600);for(let u=0;u<3;u++)Ke(i,e-250,146+c*88+u*18,232-u*40,9,"#454545",2)}),Ke(i,0,t-186,e,186,"#2b2b2b"),Jt(i,"Project",12,t-168,13,"#e0e0e0",600),["Models","Materials","Scenes","Scripts","Prefabs","XR"].forEach((l,c)=>{Ke(i,20+c*130,t-138,100,70,"#3a3a3a",6),Ke(i,20+c*130+28,t-128,44,34,"#7f8a99",4),Jt(i,l,70+c*130,t-50,12,"#cfcfcf",500,"center")})},1024,640)}function Lr(i=0){return Yt((e,t,n)=>{Ke(e,0,0,t,n,"#1e1f24"),Ke(e,0,0,t,34,"#2a2b31"),Ke(e,0,34,220,n-34,"#232429");for(let s=0;s<14;s++)Ke(e,18+s%3*14,56+s*24,90+(s*37+i*11)%90,8,s===4?"#5b8fd9":"#4a4d57",3);let r=["#c586c0","#9cdcfe","#dcdcaa","#569cd6","#ce9178","#6a9955"];for(let s=0;s<24;s++){let o=250+(s%4===2?30:0)+(s%7===3?30:0);for(let a=0;a<3+(s+i)%3;a++){let l=40+((s+1)*(a+3)*37+i*17)%120;Ke(e,o,60+s*22,l,9,r[(s+a+i)%r.length],3),o+=l+12}}},1024,640)}function Oh(){return Yt((i,e,t)=>{Ke(i,0,0,e,t,"#f3f3ef");let n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(0,0,0,0.05)"),i.fillStyle=n,i.fillRect(0,0,e,t),i.lineCap="round",i.lineJoin="round",[[90,"Blender","#d0701a"],[380,"Unity","#2a2f3a"],[670,"XR","#2c6db4"]].forEach(([s,o,a])=>{i.strokeStyle=a,i.lineWidth=5,i.beginPath(),i.roundRect(s,130,220,110,14),i.stroke(),i.font='600 44px "Segoe Print", "Bradley Hand", "Comic Sans MS", cursive',i.fillStyle=a,i.textAlign="center",i.textBaseline="middle",i.fillText(o,s+110,188)}),i.strokeStyle="#333",i.lineWidth=5,[[318,372],[608,662]].forEach(([s,o])=>{i.beginPath(),i.moveTo(s,186),i.lineTo(o,186),i.moveTo(o-16,170),i.lineTo(o,186),i.lineTo(o-16,202),i.stroke()}),i.strokeStyle="#3a7a3a",i.lineWidth=4,i.strokeRect(120,300,220,150),i.beginPath(),i.moveTo(120,360),i.lineTo(230,360),i.lineTo(230,450),i.moveTo(230,300),i.lineTo(230,330),i.stroke(),i.strokeStyle="#a33",i.lineWidth=3;for(let s=0;s<4;s++)i.beginPath(),i.moveTo(440,330+s*34),i.lineTo(600+s*53%110,330+s*34+(s%2*6-3)),i.stroke();i.fillStyle="#f7e27a",i.fillRect(760,300,130,120),i.strokeStyle="rgba(0,0,0,0.35)",i.lineWidth=3;for(let s=0;s<4;s++)i.beginPath(),i.moveTo(776,332+s*20),i.lineTo(870-s%2*28,332+s*20),i.stroke()},1024,460,{redraw:!0})}function Bh(){return Yt((i,e,t)=>{let n=e/2;i.fillStyle="#f4f2ec",i.beginPath(),i.arc(n,n,n,0,7),i.fill(),i.strokeStyle="#2c2f38";for(let r=0;r<12;r++){let s=r/12*Math.PI*2;i.lineWidth=r%3?4:8,i.beginPath(),i.moveTo(n+Math.sin(s)*n*.78,n-Math.cos(s)*n*.78),i.lineTo(n+Math.sin(s)*n*.9,n-Math.cos(s)*n*.9),i.stroke()}i.lineCap="round",i.lineWidth=9,i.beginPath(),i.moveTo(n,n),i.lineTo(n+Math.sin(-1.05)*n*.5,n-Math.cos(-1.05)*n*.5),i.stroke(),i.lineWidth=6,i.beginPath(),i.moveTo(n,n),i.lineTo(n+Math.sin(.35)*n*.72,n-Math.cos(.35)*n*.72),i.stroke()},256,256)}function zh(i="#8f9bab"){return Yt((e,t,n)=>{Ke(e,0,0,t,n,i),e.strokeStyle="rgba(0,0,0,0.35)",e.lineWidth=4,e.strokeRect(6,6,t/2-9,n-12),e.strokeRect(t/2+3,6,t/2-9,n-12),e.fillStyle="rgba(0,0,0,0.42)";for(let r=0;r<2;r++)for(let s=0;s<6;s++)Ke(e,24+r*(t/2),34+s*12,t/2-48,5,"rgba(0,0,0,0.42)",2);Ke(e,t/2-22,n*.5,10,70,"#d9dbe0",4),Ke(e,t/2+12,n*.5,10,70,"#d9dbe0",4)},256,640)}function kh(i="#dedbd3"){return Yt((e,t,n)=>{Ke(e,0,0,t,n,i),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=4;for(let r=0;r<3;r++){let s=8+r*(n/3);e.strokeRect(8,s,t-16,n/3-12),Ke(e,t/2-40,s+(n/3-12)/2-4,80,8,"#8a8f99",4)}},256,256)}function Hh(){return Yt((i,e,t)=>{for(let n=0;n<9;n++){let r=n/9*t;Ke(i,0,r,e,t/9-8,"#e6e2d8"),Ke(i,0,r+t/9-8,e,8,"rgba(60,55,45,0.55)")}},128,512)}function No(){return Yt((i,e,t)=>{Ke(i,0,0,e,t,"#1b1c21");for(let n=0;n<5;n++)for(let r=0;r<16;r++)Ke(i,14+r*30,14+n*26,26,22,"#2e3038",4);Ke(i,110,118,260,22,"#2e3038",4)},512,160)}function Vh(){return Yt((i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#5f86b8"),n.addColorStop(.55,"#a9c1dc"),n.addColorStop(1,"#f0d9b5"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="rgba(70,86,100,0.55)";for(let r=0;r<14;r++){let s=40+r*53%60,o=24+r*37%70;i.fillRect(r*(e/14),t-o,s,o)}},1024,256)}function Gh(){return Yt((i,e,t)=>{Ke(i,0,0,e,t,"#eef0f2"),i.strokeStyle="#3d6db0",i.lineWidth=2,i.strokeRect(30,30,e-60,t-60),i.beginPath(),i.moveTo(30,t*.45),i.lineTo(e*.55,t*.45),i.lineTo(e*.55,t-30),i.moveTo(e*.55,30),i.lineTo(e*.55,t*.22),i.stroke(),i.strokeStyle="#8fa8c8",i.lineWidth=1;for(let n=1;n<12;n++)i.beginPath(),i.moveTo(30+n*((e-60)/12),30),i.lineTo(30+n*((e-60)/12),t-30),i.stroke();i.fillStyle="#3d6db0",[[70,60],[150,60],[230,60],[e*.7,t*.7]].forEach(([n,r])=>i.fillRect(n,r,34,22))},512,320)}function Wh(){return Yt((i,e,t)=>{i.strokeStyle="rgba(226,181,63,0.95)",i.lineWidth=16,i.lineCap="butt";let n=20,r=130;[[n,n,1,1],[e-n,n,-1,1],[e-n,t-n,-1,-1],[n,t-n,1,-1]].forEach(([s,o,a,l])=>{i.beginPath(),i.moveTo(s+a*r,o),i.lineTo(s,o),i.lineTo(s,o+l*r),i.stroke()})},512,512)}function Xh({materials:i}){let e=new dt,t=Ro.half*2,n=et({size:[t+.4,.5,t+.4],at:[0,-.6,0],material:i.slab,radius:.08,fx:"slide",dir:new C(0,-6,0),shadow:!1}),r=et({size:[t+.46,.05,t+.46],at:[0,-.42,0],material:i.brass,radius:.012,fx:"slide",dir:new C(0,0,0),wire:!1,shadow:!1});e.add(n.root,r.root);let s=t,o=s*s,a=new Tn(.985,.06,.985).translate(0,.03,0),l=new yr(a,i.tile,o);l.receiveShadow=!0,l.frustumCulled=!1;let c=new Float32Array(o),u=[],h=new Ce(5659496),p=new Ce(6580856),d=new Ce;for(let v=0;v<s;v++)for(let P=0;P<s;P++){let E=v*s+P,R=v-s/2+.5,L=P-s/2+.5;u.push([R,L]),c[E]=Math.hypot(R-Dt.workstation[0],L-Dt.workstation[2])/9*.6+kn(E)*.06,d.copy(h).lerp(p,((v+P)%2?.5:.1)+kn(E+9)*.35),l.setColorAt(E,d)}e.add(l);let g=new Ut,x=-1;function m(v){if(v!==x){x=v;for(let P=0;P<o;P++){let E=Ve(v,c[P],c[P]+.4),[R,L]=u[P],w=E<=0?1e-4:Math.max(1e-4,Co(E,1.1));g.position.set(R,-.06-1.3*(1-Ar(E)),L),g.scale.set(w,w,w),g.updateMatrix(),l.setMatrixAt(P,g.matrix)}l.instanceMatrix.needsUpdate=!0}}let f=et({size:[3.9,.02,3.3],at:[Dt.workstation[0],0,Dt.workstation[2]+.55],material:i.rug,radius:.008,fx:"drop",drop:2.2,wire:!1,shadow:!1});e.add(f.root);let y=new zt({map:Wh(),transparent:!0,opacity:0,depthWrite:!1,color:12566463}),M=new st(new kt(2.9,2.9),y);return M.rotation.x=-Math.PI/2,M.position.set(3.4,.004,3),M.renderOrder=1,e.add(M),{group:e,update(v){n.set(Ve(v,...Je.slab)),r.set(Ve(v,...Je.trim)),m(Ve(v,...Je.tiles));let P=Ve(v,...Je.rug);f.set(P),y.opacity=Tt(Ve(P,.4,1))*.85}}}function Qe(i,e,t,n=[0,0,0],r=.012,s=null){let o=Math.max(.003,Math.min(r,Math.min(i,e,t)/2-.001)),a=Sc(i,e,t,o>.03?3:o>.012?2:1,o).translate(0,e/2,0);return s&&(s[0]&&a.rotateX(s[0]),s[1]&&a.rotateY(s[1]),s[2]&&a.rotateZ(s[2])),a.translate(n[0],n[1],n[2])}function Pn(i,e,t,n=[0,0,0],r=20){return new Mr(i,e,t,r).translate(0,t/2,0).translate(n[0],n[1],n[2])}function wc(i,e=[0,0,0],t=10){return new vi(i,t,Math.max(6,t-2)).translate(e[0],e[1],e[2])}function Fo(i,e){let t=new Ce(e),n=i.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r.set([t.r,t.g,t.b],s*3);return i.setAttribute("color",new ut(r,3)),i}function qe(i,e,t,n,r=0){return r&&i.rotateY(r),i.translate(e,t,n)}function Bi(i,e,t,n,r=0){let s=new kt(i.screen.w,i.screen.h).translate(0,i.screen.y,i.screen.z);return qe(s,e,t,n,r)}var ps=null;function Dr(){return ps||(ps=Xx()),{base:ps.base.clone(),fabric:ps.fabric.clone()}}function qh(){ps=null}function Xx(){let i=[];for(let n=0;n<5;n++){let r=n/5*Math.PI*2,s=Qe(.34,.03,.05,[.17,.07,0],.01);s.rotateY(r),i.push(s);let o=Math.cos(r)*.34,a=-Math.sin(r)*.34;i.push(Pn(.035,.035,.05,[o,0,a],10))}let e=Zt([...i,Pn(.032,.032,.34,[0,.08,0],12),Qe(.44,.03,.4,[0,.4,0],.01),Qe(.04,.24,.05,[0,.4,-.26],.01),Qe(.05,.04,.34,[-.29,.62,-.05],.015),Qe(.05,.04,.34,[.29,.62,-.05],.015),Qe(.03,.2,.03,[-.29,.44,-.05],.008),Qe(.03,.2,.03,[.29,.44,-.05],.008)]),t=Zt([Qe(.5,.09,.48,[0,.42,.02],.04),Qe(.46,.5,.07,[0,.66,-.27],.04,[-.12,0,0])]);return{base:e,fabric:t}}function ms(i,e){return{body:Zt([Qe(i+.06,e+.06,.045,[0,.15,0],.02),Qe(.09,.16999999999999998,.05,[0,0,-.045],.01),Qe(.34,.02,.22,[0,0,0],.01)]),screen:{w:i,h:e,y:.15+.03+e/2,z:.0235},top:.15+e+.06}}var Oo=()=>Qe(.46,.022,.16,[0,0,0],.008),Bo=()=>Qe(.06,.028,.1,[0,0,0],.025);function Ec(){return{base:Qe(.5,.02,.34,[0,0,0],.01),lid:Qe(.5,.33,.015,[0,.02,-.16],.008,[-.22,0,0])}}var _i=()=>Zt([Pn(.045,.04,.1,[0,0,0],14),Qe(.02,.06,.03,[.06,.02,0],.008)]);function zo(){return{body:Zt([Pn(.09,.1,.02,[0,0,0],16),Qe(.025,.42,.025,[0,.02,0],.008,[.15,0,0]),Qe(.025,.36,.025,[.04,.4,.06],.008,[-.75,0,0]),Pn(.02,.11,.14,[.04,.6,-.16],16).rotateX(0)]),bulb:wc(.035,[.04,.6,-.14],10)}}function Tc(i=1){let e=i,t=[],n=[5144395,6066002,4288066,6922330];for(let r=0;r<9;r++){let s=r/9*Math.PI*2+r*.7,o=(.1+r%3*.05)*e,a=wc(.13*e,[Math.cos(s)*o,(.32+r%4*.08)*e,Math.sin(s)*o],8);a.scale(1,1.25,1),t.push(Fo(a,n[r%n.length]))}return t.push(Fo(wc(.16*e,[0,.5*e,0],8),n[1])),{pot:Zt([Pn(.15*e,.11*e,.24*e,[0,0,0],16),Pn(.155*e,.155*e,.03*e,[0,.24*e,0],16)]),leaves:Zt(t)}}function Yh(){return{shell:Zt([Qe(.4,.22,.26,[0,.02,0],.07),Qe(.46,.05,.04,[0,.13,-.12],.02)]),dark:Zt([Qe(.33,.14,.02,[0,.06,.135],.03),Qe(.3,.13,.05,[0,.055,-.15],.04),new Di(.17,.018,8,24,Math.PI).rotateX(Math.PI/2).translate(0,.14,-.28)])}}var Ac=()=>Zt([new Di(.05,.011,8,20).rotateX(-.9).translate(0,.07,.03),new xo(.022,.09,4,10).rotateX(Math.PI/2-.25).translate(0,.03,-.03)]);function Zh({materials:i}){let e=new dt,t=Ro.wallH,n=M=>(e.add(M.root),M),r=n(et({size:[.3,t,10.3],at:[-5.15,0,-.15],material:i.paint,radius:.02,fx:"rise"})),s=n(et({size:[10,t,.3],at:[0,0,-5.15],material:i.paint,radius:.02,fx:"rise"})),o=[],a=(M,v,P)=>{n(M),o.push({p:M,wallKey:v,order:P})},l=new C(.6,0,0),c=new C(0,0,.6);a(et({size:[.06,1.05,10],at:[-4.97,0,0],material:i.wainscot,radius:.015,fx:"slide",dir:l,wire:!1}),"wallA",0),a(et({size:[9.94,1.05,.06],at:[.03,0,-4.97],material:i.wainscot,radius:.015,fx:"slide",dir:c,wire:!1}),"wallB",0),a(et({size:[.09,.03,10],at:[-4.955,1.05,0],material:i.brass,radius:.01,fx:"slide",dir:l,wire:!1,shadow:!1}),"wallA",1),a(et({size:[9.94,.03,.09],at:[.03,1.05,-4.955],material:i.brass,radius:.01,fx:"slide",dir:c,wire:!1,shadow:!1}),"wallB",1),a(et({size:[.04,.12,10],at:[-4.93,0,0],material:i.baseboard,radius:.01,fx:"slide",dir:l,wire:!1}),"wallA",1),a(et({size:[9.94,.12,.04],at:[.03,0,-4.93],material:i.baseboard,radius:.01,fx:"slide",dir:c,wire:!1}),"wallB",1),a(et({size:[.36,.05,10.36],at:[-5.15,t,-.15],material:i.brass,radius:.012,fx:"drop",drop:1.5,wire:!1}),"wallA",2),a(et({size:[10.06,.05,.36],at:[0,t,-5.15],material:i.brass,radius:.012,fx:"drop",drop:1.5,wire:!1}),"wallB",2);let u=n(et({size:[.4,t+.06,.4],at:[-4.8,0,-4.8],material:i.paint,radius:.03,fx:"rise"})),h=cn(Vh(),.9),p=[],d=M=>(p.push(n(M)),M),g=d(et({size:[.02,1.62,6],at:[-4.985,1.1,-.7],material:h,radius:.004,fx:"slide",dir:new C(.4,0,0),wire:!1,shadow:!1})),x=(M,v,P=i.plasticWhite)=>d(et({size:M,at:v,material:P,radius:.01,fx:"drop",drop:1.2,wire:!1}));x([.1,.06,6.2],[-4.95,2.72,-.7]),x([.1,.05,6.2],[-4.95,1.08,-.7]),[-3.7,-1.7,.3,2.3].forEach(M=>x([.1,1.66,.07],[-4.95,1.08,M])),x([.26,.04,6.4],[-4.88,1.04,-.7],i.laminate),d(et({size:[.03,.62,6],at:[-4.93,2.1,-.7],material:cn(Hh(),.95),radius:.004,fx:"drop",drop:1,wire:!1,shadow:!1})),x([.1,.08,6.1],[-4.93,2.72,-.7],i.plasticWhite),d(et({size:[3,1.4,.03],at:[1.1,.95,-4.97],material:cn(Oh(),1),radius:.008,fx:"slide",dir:new C(0,0,.5),wire:!1,shadow:!1})),x([3.1,1.5,.02],[1.1,.9,-4.99],i.steel),x([3,.04,.09],[1.1,.9,-4.93],i.steel),d(et({size:[.6,.6,.01],at:[3.95,2.72,-4.985],geometry:new vo(.3,40),material:cn(Bh(),1),fx:"drop",drop:1,wire:!1,shadow:!1})),d(et({size:[.66,.66,.05],at:[3.95,2.72,-4.975],geometry:new Di(.31,.03,8,40),material:i.brass,fx:"drop",drop:1,wire:!1,shadow:!1})),d(et({size:[1.3,2.2,.04],at:[3.85,0,-4.98],material:i.slab,radius:.006,fx:"slide",dir:new C(0,0,.5),wire:!1,shadow:!1})),x([.09,2.24,.14],[3.2,0,-4.93],i.woodDark),x([.09,2.24,.14],[4.5,0,-4.93],i.woodDark),x([1.4,.09,.14],[3.85,2.2,-4.93],i.woodDark);let m=d(et({size:[1.02,2.1,.05],at:[4.42,0,-4.86],geometry:Qe(1.02,2.1,.05,[-.51,0,0],.012),material:i.wood,radius:.012,fx:"drop",drop:1.4,wire:!1}));m.root.rotation.y=.62;let f=d(et({size:[.12,.04,.09],at:[4.42,1,-4.86],geometry:Qe(.12,.04,.09,[-.9,0,0],.01),material:i.brass,radius:.01,fx:"drop",drop:1.4,wire:!1,shadow:!1}));f.root.rotation.y=.62;let y={wallA:Je.wallA,wallB:Je.wallB,corner:Je.corner};return{group:e,update(M){let v=R=>Ve(M,...y[R]);r.set(v("wallA")),s.set(v("wallB")),u.set(v("corner"));for(let{p:R,wallKey:L,order:w}of o)R.set(Ve(v(L),.35+w*.12,.85+w*.08));let P=Ve(M,...Je.glazing);p.forEach((R,L)=>R.set(nn(P,L,p.length,.7)));let E=Tt(Ve(M,...Je.unity));g.mat.color.setScalar(zn(.8,1.15,E))}}}function Jh({materials:i}){let e=new dt,t=Dt.deskX,n=[],r=[],s=y=>(e.add(y.root),n.push(y),y),o=y=>(e.add(y.root),r.push(y),y),a=y=>s(et({size:[.76,.72,.04],at:[t,0,y],material:i.laminate,radius:.008,fx:"drop",drop:3.2})),l=ii(kh(),.6),c=y=>s(et({size:[.5,.68,.7],at:[t-.15,0,y],material:l,radius:.012,fx:"drop",drop:3.2}));a(2.67),c(1.9),a(.55),a(-1.65),c(-3.45),a(-3.97),s(et({size:[.84,.04,6.7],at:[t,.72,-.65],material:i.wood,radius:.012,fx:"drop",drop:2.4,keepWire:.1}));let u=[{tex:Ir(),gain:.85},{tex:Lr(1),gain:.85},{tex:Uo(),gain:.85}],h=[-.12,.28,-.3],p=[-2.3,-.55,.95],d=No(),g=[],x=[];Dt.deskStations.forEach((y,M)=>{let v=ms(.86,.52);o(ke(qe(v.body,t-.05,.76,y,Math.PI/2),i.plastic,{shadow:!0})),o(ke(Bi(v,t-.05,.76,y,Math.PI/2),cn(u[M].tex,u[M].gain),{shadow:!1})),o(ke(qe(Oo(),t+.3,.76,y,Math.PI/2),ii(d,.5))),o(ke(qe(Bo(),t+.3,.76,y+.36),i.plastic)),o(ke(qe(Qe(.22,.48,.46,[0,0,0],.02),t-.05,0,p[M],Math.PI/2),i.plastic,{drop:3}));let P=Dr(),E=-Math.PI/2+h[M];o(ke(qe(P.base,t+1.15,0,y+.1,E),i.steelDark,{drop:3.4,shadow:!0})),o(ke(qe(P.fabric,t+1.15,0,y+.1,E),M===1?i.fabricBlue:i.fabric,{drop:3.4,shadow:!0}))});let m=zo();o(ke(qe(m.body,t-.22,.76,Dt.deskStations[0]-.62,Math.PI/2),i.steelDark));let f=o(ke(qe(m.bulb,t-.22,.76,Dt.deskStations[0]-.62,Math.PI/2),i.lampBulb.clone(),{shadow:!1}));return g.push(f),x.push(new C(t-.02,1.35,Dt.deskStations[0]-.5)),o(ke(qe(_i(),t+.28,.76,Dt.deskStations[1]-.5),i.plasticWhite)),o(ke(qe(Qe(.22,.03,.3,[0,0,0],.004),t+.3,.76,Dt.deskStations[1]+.55,.3),i.paper)),o(ke(qe(_i(),t+.25,.76,Dt.deskStations[2]-.5,1.2),i.pot)),{group:e,lampPositions:x,bulbs:g,update(y){let M=Ve(y,...Je.desks);n.forEach((P,E)=>P.set(nn(M,E,n.length,.6)));let v=Ve(y,...Je.props);r.forEach((P,E)=>P.set(nn(v,E,r.length,.62)))}}}function Kh({materials:i}){let e=new dt,t=[],n=[];[[-4.4,"#8593a6"],[-3.55,"#7c8f9c"]].forEach(([m,f])=>{let y=et({size:[.8,2,.55],at:[m,0,-4.68],material:ii(zh(f),.5,.25),radius:.015,fx:"rise"});e.add(y.root),t.push(y)});let r=-2.05,s=-4.76,o=[.02,.55,1.05,1.55,2.03],a=Zt([Qe(.04,2.06,.38,[-.83,0,0],.006),Qe(.04,2.06,.38,[.83,0,0],.006),...o.map(m=>Qe(1.66,.03,.38,[0,m,0],.006))]),l=et({size:[1.7,2.06,.38],at:[r,0,s],geometry:a,material:i.steel,fx:"rise"});e.add(l.root),t.push(l);let c=[9187129,3103372,3042127,8092546,13672762,3356223,13222836],u=[11636322,10846810,12294768],h=[5597834,7304320,4942691],p=[],d=0,g=()=>kn(d++*1.37+3.1);o.slice(0,4).forEach((m,f)=>{let y=-.78,M=m+.03;for(;y<.7;){let v,P,E,R;if(f===0?(v=.28+g()*.12,P=.26+g()*.1,E=.3,R=h[Math.floor(g()*h.length)]):f===2&&g()>.4?(v=.28+g()*.14,P=.3+g()*.12,E=.32,R=u[Math.floor(g()*u.length)]):(v=.05+g()*.04,P=.3+g()*.12,E=.27,R=c[Math.floor(g()*c.length)]),y+v>.8)break;p.push(Fo(Qe(v,P,E,[y+v/2,M,0],.004),R)),y+=v+(f===0||f===2?.04:.005),f>=1&&g()>.9&&(y+=.16)}});let x=et({size:[1.7,1.7,.38],at:[r,0,s],geometry:Zt(p),material:i.vertex,radius:.01,fx:"drop",drop:2.6,wire:!1});return e.add(x.root),n.push(x),{group:e,update(m){let f=Ve(m,...Je.storage);t.forEach((y,M)=>y.set(nn(f,M,t.length,.5))),n.forEach(y=>y.set(Ve(f,.55,1)))}}}function Qh({materials:i}){let[e,,t]=Dt.island,n=new dt,r=[],s=[],o=p=>(n.add(p.root),r.push(p),p),a=p=>(n.add(p.root),s.push(p),p);[[-1.5,-.45],[1.5,-.45],[-1.5,.45],[1.5,.45]].forEach(([p,d])=>o(et({size:[.07,.71,.07],at:[e+p,0,t+d],material:i.steelDark,radius:.012,fx:"drop",drop:3.2,wire:!1}))),o(et({size:[3.2,.05,1.1],at:[e,.71,t],material:i.wood,radius:.012,fx:"drop",drop:2.4,keepWire:.1}));let l=(p,d,g,x)=>{let m=new kt(.46,.3).translate(0,.165,.009).rotateX(-.22).translate(0,.02,-.16);return qe(m,p,d,g,x)},c=.76;a(ke(qe(Qe(1.5,.006,.95,[0,0,0],.002),e-.25,c,t,.12),ii(Gh(),.9,0)));let u=Ec(),h=Ec();return a(ke(qe(u.base,e-1.1,c,t+.28),i.steel)),a(ke(qe(u.lid,e-1.1,c,t+.28),i.steel)),a(ke(l(e-1.1,c,t+.28,0),cn(Lr(3),.85),{shadow:!1})),a(ke(qe(h.base,e+1.15,c,t-.22,Math.PI),i.steel)),a(ke(qe(h.lid,e+1.15,c,t-.22,Math.PI),i.steel)),a(ke(l(e+1.15,c,t-.22,Math.PI),cn(Ir(),.85),{shadow:!1})),a(ke(qe(_i(),e+.55,c,t+.32,.8),i.plasticWhite)),a(ke(qe(_i(),e-.1,c,t-.36,2.1),i.pot)),[[e-.45,t+1.1,Math.PI-.2,i.fabric],[e+.75,t+1,Math.PI+.4,i.fabricBlue],[e+.2,t-1.05,.15,i.fabric]].forEach(([p,d,g,x])=>{let m=Dr();a(ke(qe(m.base,p,0,d,g),i.steelDark,{drop:3.4,shadow:!0})),a(ke(qe(m.fabric,p,0,d,g),x,{drop:3.4,shadow:!0}))}),{group:n,update(p){let d=Ve(p,...Je.island);r.forEach((x,m)=>x.set(nn(d,m,r.length,.5)));let g=Ve(p,...Je.props);s.forEach((x,m)=>x.set(nn(g,m,s.length,.62)))}}}var jh="data:image/webp;base64,UklGRrhHAABXRUJQVlA4IKxHAACwuAGdASogA+ABPlUokEajojEkpHOaQiAKiWc6NmFnQfWTvBRtUDdphHqU9xpDhr3wobqmaDR5jUUY6XeSc9lyDkD8z7uvOzscf+T9n/e9+sv+57hf69epn/y/sZ8H/6v/4/Uj/Mv8V+1nvEf9/1vf5z1AP6n/suuB9Ajy7/3P+Hb+1f+P91Pay///sAf//26NUhSHoED+vyf7nakOoo/k/Lx6tPhq1Ef2GH6am1DmePUC+bTcfphslW0fsXNJAFO2vaE8l9FEez9/Sg4mOmDDbfMf2gojCfUDihO637mWVY1yIc09fRxav8UbvBFyT3TuLelIHFhOM/S71sv+6deinclRMRKRkkhr80J2bllEp/9lyE3bsl5jtRh0twq0u/iBxLMJ5ZPJoT0eEUaKzCWKGd+HdM85X7Mzs/R6iYqevuaanbuuFCuP1ld/LeOOBI9wT/UhSLdDl8ir6z6uJhK/F6+mslMxSVTj/WoIPazAMBL4fPohelAb34bJH3pzAP7nBv3JtPN8b4PCwEaPB+uDrx/bX8mdwOiBkCHTWm40zmpf9nIHVkxihrY0b6/aeI3ntvjRXuvji5nWP5mXgyCf6Dr4JZQn5btxzWHnP8QVgJ3Zk9nUkyYXQ32z6hqFanPulbG/Viq1avj9hueGyTnlLRRWS+FjVY4EfcaB3e3HSskmrMbd2KpDv31LPGzR9/GCKO3wJ7l3mSugdgklPq/PX5FqKK4Qqgl6QXvvRI1YkDQqcMw60U4+AlB4TSyi6M4QIUp9qQTR9KqvN32gWk6TzLMEyFjQuB08R1choXEnEdJSRRdCDxqrYdNZrZtLfQoVqHLtY9A7v1FBZPzo/410cUZUUPK8l7TxNO3Mubvlf0dmUNrDsJBpH3Bt8dXASyMcd1l0fFUIK3YmvICsCtlVBflV8cajMlCkFdqzqJJG+04di2Zk+AI8xWicl883VBbE30hEraarX3dFqflWtAxynjT8OodSbBJ+jVPlar8yOSUmV7AugyXFVprBWX/mr1QfR+M91RHMME6ojndpBBSnO/WYcePDbJjfIs0X7HYYCQ7JpKcR1ZGESdAhClgTwBMmILshQ0TjKtzk9K2Fj3InC04F0Ho838arOF3DH1kLGluAEWv0LiFbZZxAGBsJJHzYb1hf6k7lQv1f/BS7vG/NWqMAHtManGZO7b47omwey2Bnsn7qETDt7sXP9Qzwo/SmvR1tY17llAIK6snEOlG2jIhlf1w7U5oWOB4e9y9+Bo3Q/XDyhNn6CDOieHi7dnV6MZtO6JZO2QYzsQyx0zCWQhxVbb2O5XZvdwqSDHiIuLawHF3yJuvVIsSKVsImft5eOFZ8ah/muD3cBcygqHUNoXDbhMluFH0ZEUvzVM16o5VwCgd9R2vVv7++3HUidCvhrkn7aZ6VXXBE2WZTvD6Rf1sgOx6R/KQSC3abiPj9xuUjZGMoZ/zaeFAYfsNdqDQaG3RR9v1EuvpnWuiRQ02M6MN38JaBmZPvQd1IxxyzaIsraDaLWFP4DOtcRnJrCTiBknX+Q4OIPWz524AhGPztNQ0hk3ZcO7+EguhY9AWsU6Jiu0E2ENVj/nEYsaUtqp5N34z5wN++F0x6cl+oyxDEIaLkZcpY8xDFEXBqIrhussHc/N+t8OsoxedMVI/krpccfMJ+M4C7bhFJfFkV+ZDx+ZsJNJGK3BAAzB7poAVqAMpaclWO6IY/irrZ847WR7c2Ezsc3Y1PtS4nvhM8XXvfbDnb8dFPbhyWtLuPAlfRFXp/7YKVaxIH07cMFYPQVo9cjyaEERvXATDRd3WEv2mSWXJ4ZwPPcAgLNr5YpuOt4XI0ISmdIu0TeuDFIWKLPmW2k7ZM4h4kEhDEqNQSap8KHo0BjiUI54ehGWfGx3/mD3sYS72LChdGTC8jtG+FOMaF6WIl4VULnZ09RChkjG01wGwf33OCtkSBpa8ZNr5N0xTR23jzFfyn7PUoKhfDNJTJzhNHQOJcwI1Xn1CjwcC51i7muaWy2Vd75K/TzXLg/HsmNZspVnyPcpGu0yM/TUJv7lMvxXUOZ/H0ShfABNilTNdAo9ONy6YrkA++wGU0T0XINzJ60A+vzQtjZLX+onjvoyVMMIE4sbW3wrYqJ5qZWYiMHfUfwe6zg9960g22xKbbm6S+bNNpndYEKURdzHpxTim1B8LwemaPsifUd9ePouRKSQabwhtDq9bJpWJP5bwhdRfRNNPKzL6KYNd/+xgiMs4qQhqWZJSysbdk/MaPa190pTQ9SP2iAplCQpjP14rIxbreUOgnCjxTICs5BqtQOHM0A57gU645dr5x8IwGUBttEt89vmJ6sBo9LmkyoQEn6cSc2iY/RW7m1y2q6Li1R0E7tCDSCfGmE/FKO62ixpof5YJYoMZTqmcBCk2HMHjRTASCbl37yRbeBF9SGVuaX8dTu4EAw7XFUBh4vxGDBrhwdagoRqF+vGLsNpcX2UCZSoFnf5X1l3y0BmNYDv4YuU3S4IhpL75OoTpdtkBZpqhOim91RJ9VKIvETyWu/QhuTeBdrkArQEktPUtA4UzpmsRTT/z23Ssxop44V8LZfdSTOmkEfc3c0HYW3A0qy4uMvAra6IJvRBzAxfoUJPYRRGofh3ASKlwX2OYhIN4bngY96N3VtQDESoqZgGOio1FN8ki3YUovTtwJZsNFGCWI7zZAus7tJVMK2Ve3nYAg8Tliy4Oad9wp3OdySb5RSfzf0YZqhcw13GoCo+Z69nslMr1I8rz3Maxor9SBT6tm6ogRimDJoBx+9XO0A+dARz+7MgTxvxUqLI7eU1D1/IANagPX0/yM84YqdOJCrN9XHOQgIPyLIoNer9enXGrCluZiaQ/Yjoi9g+AHR8OgMNO5QqvGsKy5mWjDX7Xk7WiyxsFLOw2350C9kh+zRG1JOM9BjtG106x9pRtTYBhWr0Sm79gu8izcsw7Uum/aFsMAVOoNEkp64bV7Cu0AMpxY5aYfjo9BRF1onPzwhR12rEgnBmUwSaNGirmNQqgWtOpwzOvPI5Mek6NcCChUzlfudVbYb9NEBZC2uc4UuJt5Wl7nKlTZC35JWtENBdRmACud2rr0M+9G0xylJ8uoRSCPQoOM//4DcLoMP6W08F9rX2V8/zBMBIhPuNvrC/xTx3jYi2F/YU0E6tq/kR1+XNCn/GbYUOxUT0ipJTRCXlzcjVJKPQ2JwFkGLSZJ3jZBRe2Nftu0NzZDIfVg8O+muH0wT6a6OK9PvmOO/aeWcvh8uxYaVDtOez/l7yBjoCR4QYuICFNltPqq08VClatxzZWCRhm5ScXE+/jnS9zpAiFc2ObXaQ3cXQNguIuCbmRE32lI8oaUTBVI/amlgpxaF2iWXCX8bEBWiviAGHPlRRu9dwPzt2UTGKOstze2OR/HcqyXctE4ef/bfVQNMbiOmzk6/UJZ819fnSIy37lF0QA9Xpr6vHVGa1RRFybzKxLvAw0ARCqFfKswPCOr4IPXvXzKxucimQak9R1nkPiWHP/vxZNKm0UHFUQsfaKUWm4RLTs+S5dB90f6Vmv0qLew6i5g4cy09T0SQ22LZDY0ksxNLALt12pOEkWaCyj+/+QAWtLihhVKJ/ylyCL4gofld0surXDbftjnQWkk2xpg79omVHfAaunvGi6950g+Su00vpM1nC4E7xaD1kU61BDwad4JCIHKGhId9Hj96bYo2qxitemIKVZNzd3vtH//6siNSfY3037aWhwgzfPeVW4cn7mEmx7VGQsiogfCsX3BeoeHoPI6Wg8+d4IqH1Y7ROKj8pymqHsRIrGHOPbYl+KpT9D0MoDdkyBt1bCworOPsv/vNIkdmukQ7DvuVj7SPYso9ej5IwSEUEHiQuy2D+dsLiHzCkJLEnxd1xVo6WGdN4GTZQ0UwqMeEFAyC99vbIL/5T4DDtWii9Sizz3eaCCtBHR2oxgWhav0c/zHwn6zamBqiFGfW97tSR1Hxjfo5GQBWCA9zcsuYCeOgy/Cf86tm6mGiGKF2S8p0o28+XYc9iW4GApYeNCpw0WpeAkCOhMsicB91z9KTwAmI9s/Ce2mK4zhqN66u2GQ9wbNv1VKApTvbo4OWSa225zMbjsvEIXC8FBf7ZMgqWSS511Q1Hw2wONKnipJo4jE+zsbAbjR4wLaB697mYCfs3nO9JX3Annl5eXVkIZP3qMwPMe555WUeGhZdz2ErPkKMY4qYQFNpnOm6+fGTAM4xEpxrvFnL6ZOoPtuVlY18KZ/HAY+vAdYEd67/2LamDJhcjn+NbhGN5YGHWWct/xwQHtwBBhCL4gnSobCJEiIq+oYcjIoqHAtkdEA1rJplSjLAFHpOhmMi0jOu2K9+2G6q8kCgU0dQi/SxI7O8HX8n7GOYtw9kP4ULSabf/Aitc9KrXw8KKwRQn7mD/kN990w3tqOLToysiGdyjIPIgeHRNxLCa78baqzn58sZsfdme3GiPoxJMk5oh373G/3l3gcoclb4OGyj8fgJRK2kcL4cfc+0KrTA7Xcz8b+3NSwN7xPM050irOQcpP4DK46i5n26vA6IlBl7RSPuF8KuLOx3wjCInac1GEYEDE1ioYZa/tR5wGPbk65ENgIFUqDlMkBg5GqDunfnW+LixIj4yHOZS0hT3uvq4lCDrRPOonNwvKT+no1v93TkiLR87gLVeBfjiggMW+nqlOOZ5aW9RfOh5NqLAAsZxuZpnAA/v2lBMSjNuqvYuwRQWW+VWoPpjIKM4JDRUm7LuFt3QkShG2s9T8GfAytWP2TwMoFIeMAfyA4E0PaMu/gNcpimtPAG3JOldXlCcj+0MpWtPEFm0rCcxrQFUdmxZoy73zWmi4wo0U9HCQolt2mPc1SqliJbR8J4igMC3xjU5HdnjdweHc9lNVSgZXuuaUX4T5Va68269fEwV7+7OrHGL/gFPohlcuikm7YzGLiAVPqGs/Es0evcQHPrFEL1Zjqj9RvVbXiypXBKihPp5ReVLvsXCF4+1ck4F89e+1Stlux9y56ZEa/5c8imSsw0S74oa2ZBObpXPdbRwC4wtiUrlUOGJqP18At/0BcQaKvciFI6TojO+/2W2Q6N3+Apv1xEbgonF4BUK9HDS/gbWBrt4gqhnOV1p0MO2mYTWa1q7K764k345fNbhqmqDKxbkQwzhF7GCrRyw1ZsFsilvp7fud/9y5C8rKGhdVq0VEmnb/FJ6Ivllo7hrLeIQIE7bvRcMYNAjdYKwj1NRJkUJEcSdGrCt6Fnsi3WJNYO5Xyx6vsMy329ctUK4/yYS9FG8jv70N7RhRIdWaF+2GXHjSXGmkoyEHSlfQsVDkwJ4Feq5m+4MysVHgL9IlLOj5rhr+zXaJh1MDRIVhJVZv3RCyCh1f37I2gUIwW2+J/kfieTJthSzFY8uJLfbjFekWG2Fw7htO25vGiH8o/axonGpMxE38NQdATmWifQmoM/wWkoTY8PWr/Ehaf9V3GNfDE+FsLsPDviS+PW4eBsRidWyzmFAMagB6MHMsZ0IWudmKYp8djzdLDuoff1PobQLDwswE/Elx7e/JP7OybrnSjqHjYNtehIADiVqC0ghJ57jC2DdesSxFTSqwl06dASeIl0yJLrQupSngC4ouTsFKHQoYeSB/QZYsBRmxjw+A4piSpBPJv3Rh4pasCylHvWkimMwpwXOLWVmBxE72LV6SX5aTQQdQG3VC4KTbw4etWY+TAbQaPPIKhdCtGzJZmi69SDUmKRZCfyBKP+8yEJF4IR+vedLn56ejePdC7q3z6gV/Zr3SnwBjdtuaN20LFIcgBfXuHGxNc0zaEPaapENU9Wh0ZzsL8C3ZTnTjvUL2wF2anKvfsVHR1T87tTqrrqf3K4c20nPQIW/Z4tFCF0cN/BZ0vJZ/4DVM9TbvI5krlCojyUSZXWnUz/sCzf5UNNmWKAZbsK3o9Bn6N8F+FDeje5vhFghs9jMjfrIXA9AdWw4f+JtLw+ahtBAglRhMCMfgC0YiStB5fGIr95gihklRCoFXAqM6YB1roeXUJUqogoEE1wI9xHeYu3g0kTOJiBKOLOqP2foR1LHPRhP9wGP0zmHlSStOivaZnu7DALjAWhPWTBScfAFE7sm5OJbHa9hb80oLOZU0X0B7B+Xhy3NTVNVYXcmRnP+E0aN2yPzu55ovhywyngG6b9OsoFlVPzu6hNAVf0Hwm66TI2O7D6U3DQKRAtla9LH6XtoQQ686ZjsjDldaaD7Kz25YgZTHvZJcZ8XG5KJeJtfF3lBTawh9MKd7AKUNdAHv8NuysjJSrwtIrdKB+qQRQ3uM7lFztxS6igOVElLh9BJMbS3dx8f5RHWnG9dpTP9hEUEFyx7qyoJYR3AHNylzUXfFuvkSBNmiciWWnsvFwNFU5bE96Iis1vLBECfng7ZQs5ud6qHdEumWXtYh+c957Q/Ieg6xyO34FcckNOIOupcDQ+0sSGB4835I0yoCEjTYbObCuGIsJlnKYVBvUSYDCQqcrJ3eWAnmoJberpIJTwD3ET2Xr7Imo6kk8A0YZIKFAOFuGdc2ukucRcGjBlH1FkOATuB0n8WIk6UPCBto0GRe775qtu0TLq6LQ3QjtK5mjyZE7Wqf8ssxPT7LI6D0VHf1Kx/SPg9toQ564Y26jQ756QgKnjLZKCqRwMYLzpoJqDPRe4nUdSVUb2Lfpdg73g3PnuUtsJtfcZTay3nUwt1uF4VDtHO439auta8hXg9W8nXdz+H3CFA3cggnbZuOqVC9ChQBnsWdXZlArtWlc1vI57/kiyvNZSzc173/YDVUqXV2v0Xqbtar7iggHrw7XRFyiju57tJUCePS7Mhuq6fQ66UFAR4vsdwNLXWpHqIap8WsYxihJjtUkCe+oD2f5m99byVyNm032OuHdZrbBLTrwa0rr17gaJA/pFB9gCxofNHL1rOP6DRXctSl2PXNxgWd1fwgT9oXuAftsav/dRu/RkwxFv/kOcFSX84vB6asy+NQJBqQpW1a65hQq99gev5Vq3gxWXv0GA3tuhwq4Cl7UGtH6vSL9UmUWOTKSWmc42FoGz9vZ+faeN3GKp9lp6Iu9uH2ihddXzifHnLKMpx6vJgRUoHvrtsFQ7USNOpAh+zIW0I0x8F47nJZrpLlDYhPK+dXkdqvsFtvOo1Aq2YiFJ098ANdYxbEYJJoFGPz33pV/c1px2L6JAjKoUB2d1xlgikmSjzbwDaKxsGvFD+Ttpb2VLdcG+I4UoyHMTeRMsyQyDeQoijuFUfcknRBPXmPCaEXgXkQvckkzeS7WycIue/HirTjjv7s9LBPwwqfJelQpczHYkDOipfRqljvR1VfV8Cw+nXMEqeYs2UDy0YIm1Vrx6Dylvnu6jxeSYQrqKuKNhnB0eFWyMLYK95pBNHhSvwM26e1NuW+7KcNF7CBdoQlCbwognEW5q27w7pVIyepaFyQh1BdsB7ALI23CQ+0ZROyTucJsZeTtaHueLUxh6pMFQQOmp1jM0l6671EfYTtLCjqP5I1Uy5wkM5ypRs4AQaekQvDme0pa6RO4aQbrZ1dba9x7H/+Bm8rR+yU6VxSKz5fsHJISy+ufIEl8xY6qYClQSw90L3QoA45rDU9hC8tnaQn/4Zj/waYFn/GqkVnCUJpAroLNp3Z1rGcl0ufwAxSCAbJsqTIjr+vHSCbNCfF6HUJHuVVhNuza2neRSXh0yqrgAW2v7pec5n5ppfLWv++uTG55K/AX64c75o9HjRqwsrRR1si6a/6m0a1uaGpoDmSB1Ltrg6HyxAHsk4HeEP4xwU+cIoEnOmP/ra/FACUnH8TyT7ecdIRu9565uQT1ge7B9V1nAKoHLm4jWyjN/U4mC1EJtlvR2vxKFxLBgo3qHmo+GZd3u1pMxgu7Td2laaWU4VPG+1OCocX9wJkzL6OV4dt1xBAQvVywZJP9fYBNahwC29uXzQm5camaJMe20JwTE3RStvz07IDnG6p49dFYVQATr1I/pgDlvitvFrczXPiebVomR6qTe6KIxpSakntweItA5+U+9V4bcrWNYGAiScdwFmYqB/eJ+c+TTc0ADKs3DHSAVShJLihttdIjZVJjxxt2rWEL8XO8/lFtdE6rHognO/Y+SlySTmq3WOI/BVVx6fwxAtirZgn9HPdPBOCppZLMdHq+BbYeOeUF3OTSXiTtC5FdQ+8WkxMekVza4XDeJxd8hbf4a2C1TA++dftNpXxn3QjJmAIz1fn2rggFNFXUqcNUtBs3azickwDonkA6qOt0eNjev+3Vc/zDgqcmrFTIkoyspN8cQJarKQMGD8QIciZhAK6FdXPFWK7+7rQ5aH2+XZYkfV5Z1f1XKOibJpMlFGJ3ABPPuucwe0zW1pR8M0FwJYgiLMbccD1aT08/9SESvpsXu9pdVtpE9QneYDIJc+G8/WVVA1sdUxxTfKOGhggZoI6aY/hK6fNVc0eA4nSqXy9te7ySWDWZPfgveLibhm0kx+a12MPfjXHtZtZVPrGXz31PRNWwKKdOEFXPlCO623oYr16BZ1vrC5zTKmu+9cRRqzvxxnjC5As5onvtkoemEUYQRk+4ujOqVBeRtdcxNCVGS17FC/J53kpH5OWSWDwPALMTuXaODhpkzV/Ei9bnkOX24PGDAYBJaiRok4wpL4TyJO3yhDgJMWz2Py3lCgL2X5n/uFOOPzjAFjpgEbKvnH6kDpeD2H+ZLql3ed0cidN3Xgg4V1ZCo2Xob1ZStQhO/JINmEHcCqeDaYCVYUalE/fw/anV1X3fdNNsP9To+5HzHA3bjjhsiE4lJ0l0cC4Evgd4FakC/qRcYhCqKIzLeZo2HxloBkrTBQkl3ErmiwtqIKpPKU4/y7ZkOd8C16Vwr9TJq4oIFbcjsfvA0QcTiRUMb9LXSB3DHevA8ATqUkpZNqT/34uSp+hFrEs84OpiegGOOT2OevXDjlHSvvUNyjfck6tSseBbgmDTeNLajec7cRgtZj3wnx7A3zOUFRcCR1EksbL+mEtpHd8H+bk86jMCZST/RBCNFMbtTEsHcxz10h+YjaJJJ3mlq4B9v0LPTMWKRNZ8TO3nrYLdbxzvM1KgfCwZIfkvxD1ON5NGu5IlhwsTQt++YzxTtD7xZavdVV2+G6Lm9r3LHNa5fTpaR/sCEZxS4PkEndITyptl7D/f1p+qkikOS7ilr14cxh0NsJr4XycCXB6ek5XlOLd8MWU+ePnZ3sDFNEJcss3KfrKDdaT3/ic5UYS35D9adk8wan2i6JDKOiqPXOzuC4BHOiXUNC5j4fhSjQ0Ev7y0+9TlftTGk16XAOlRiTNaDpJ3nBBbBXT7k2hym3Ay7M99fjRvK7E8ATmqVcxe+dLp/W1jRs+5fIpXgJDuO6ptKQeYqLENrrOHbWGRlYmfL/Az2dIg0Gvk6vNJDOCrZp7WzzZD0fD02lctRKNA4JyizAKnCFogNhdS9yiQw9dwYnLhE0L9Bup6d4pAZy7gvjXW4LeKpm9qDZUvIzoK15f5xdZV4UotEW6r8tkb4ZdZUw/VyJUiZELuFm2J9s428aamaTSvpoRhdwDKN7Fcc4lu5KEYPNinqr66LixMU68qKY2M2mCV1jEv5S41C6iLc/hakOKTgaYE/DyTQkXLbndEljdIifBuHNw+enb3sbxXjQpt6YpNqv/YQBXJk2wOka/kPPazhCa537m9XLENKEa8e+FU1qwohqNwJbCvvIoLuKduTEXFJrJbZ72t7AkFezC5DQOttBOq9mCcTmletPAtXqAl45Jc0f2Toz6U+/2RwTxLSxyt2mAsmK+bcb2xfgtvorJdE0lRGzp78nerKL1Toq+0PF5MraP5LYbrvEy9ZEZ88/mLip5YjDu5rNSdjrh2QPDTeIyCu5pHPBlkZnkrt9n+jbYA42x2JGdtD19GKzzbElWUaRUJFgYJI1jYaFwFV1HuUeufA+vgQ28+9+ZjTfweMblvn0WhjPByNh3o6E27zc408+xI8hP73+ZhuB0h3fUXPcyP9NEVr1WzAuZssuPNsL4FroswQ/1Op17s7ya4STyTWXDCfN9cI/oZnr6Q3vX1gUMqsdt40oqIj7pZl642oe+ON7jTZIpYHgK2scTR1dkdOeNgA/gnFXyObtj+n8bP335bBsocNzcabMoZI7vaqGGi+2KwLuPhJNED3euRAu6gAoXuTEO5zQudZTqLCbE7cpVanZRhbdCpMQKTB4Y1CVoLc1D+nTgMqufqB/V6JkfWQR6nQTRDS4y1S18uvOH8kpA75Td1xEqd7X4hJc5Ll3te16y9Nw8IenIlJGgiHeMPCsmwEcSyv7G7/koetII5otR2Zb3uG2AscRDN6+yCnTFGt+LtA+JU95BhPOLWp94CN1KZTrBU5wYU51zoklTRCA/tI7BApYDxAFsgKXzX7HDrvx5UkFp2tPDs+3gO/2b1WuctC9PrjncjE3VYETIYG1DkfagFP+yJAjsALOBjxST+aQ3nITFH1flyl1Xooa/fISvmHmKD+djyQ2fLIr8C6ofrQgY2yZ/JWfTVtQdmZwp0qgMz48lhfG3f1WWkd6mQmb8SCCoKL4B+lGNmZhHvn1xcfDm0kuniAhNOYHYYEhQOsYpdK0jrAwRhu9oXo5/kuqR56yDTJlaUomfTM8aS6fQ2+KanulrE6gzNoGvstgZhGjBYNFYhayMA53nQn1isUmfxf4/NqAjib4rvfoYdbJvgZN9NjaENIccXupQ0aFWma4qZt1C4VJKWMpUpWucxasphy4uoKTOdSYzcD56G6zKoNN9gxcjR1Y2253+mjXnE1B6/EFvtVI7+sEMTYmPCO0llroDfKSaWX4v6WIP7xsV50SwcedqWtZtQ4xGh6kIxQOkDqXgKq5lvGk8LFr7FgTDpRrJbA2cQIvE5a4Lk5WW1vS3B0Jbzpp74Dyjy5pQuTgY9n9FOIrCeTeo/jhvpUNnYWdstBpp32vu7xSNDIbXv88c+iz7q0ai1n3jVIGsrQpFW2X4IS3Vp5vNlxpx4zuOddtCBCFYR7Slj4yLb0qy4Nsi2Aery6PKhGqcKJYY6r8ep9SgeJo3Bb/hVhwg72PyoWd4JbI6DE8/8+FM/JGKch+wWY3m3oSF1hHXaFOnPWKOlWXLhpIZLZlUgRxf1+x+kMTcgSP624NMOd4rnWmty5/O7IcvfAdNcohccfa2f7KdEn8d874U/7cVC822/v6nbTbIZjHPb9xuI9RXdKu2d4xgb0+wQveNoT4wtQskCKvmZuRkYW6H/SxwX7eIdMxAJugp7mMjp3LOx0EH5+EkzNGdDu7ZWbIr3zZ9CwRquPPcCwFXPGR6FVTYLw9u+xPom3A6FVI8roY5+w2BUusNw8NW6fbndwS9qdMIB9TB2qCfOna4Sejt7exSLbli7dUUJsKAVtKVVDhsSOt5UxrEF2Mo33+M3MJsqnFmbSTkir/RJk/bXr19LngpIHkJVHpLQX0VtMBzIIQ9Z1NaYsctdAu0rED9ZW5ZyR7rywGFilehAdRidn+83R4lOC5/fEBDRx053wFbGFewWMZ1c7RkjzOqDyeW5p9h+y6fKNjnyUoQG5lyifKiR58w3xNPoNcvVgx7YhK1KsFNIGFn1JKzmTl8heqHYQyILHMENTGmL8UkQzKvluhxaF0IpG+3KqYzkauNdgQ89G54HKkW4Kmh2Ik7qDVE8d3Rltuwc/WNkqvbJIT74cx9HonBQHKrhIn2YzhygSgwubRl/0pcenYNSK51eUkhK8IFsXef5e2w3U+tGEY6N0NUZVygf7vXHcDNnPBfpMs2F7KWQSj5GpSU9i97eF86SFdHdgHQfBJFZZe1hdXcvSWtDOGehr+nrqJZZunI87TMDARzBk7BiEC09pdqwFpxXLZ0MLt1H7+C5Uddm4HwZ93nFWoFjP2utLv4w1uffY5aqFUnbcgN4DQWqnhGBvq5NFlkuAANpgaTecl898VWy8PY/6J5VNLvBFe0ceORqzixqHISNGvPJK+hgUxxjwe0UU3eSRbFYr6/0516/FYqWkfJgqELRxoxVfqcVcAiwUD1DsXNPloX8QqNNwioVmaiEQs//V2whbXD7UvlbbWF9BeROiQAoX3vRBuEhRAA9Hxj6qJTMKBCPtaM3OOQ/O+tAQbCWgMZ2fSZ3sGVi0kEgf9vo5oEYElg+TO1/DQF+biad0/y2PKNQGxLCPStVXJeRE/87nGmaB494Xsxe2aAGAvJh3lngyFTOGqn1nEsXaD9Eij5wb9F4b/7E6fNruJ1ZWRBjYNsE024x6WWMoDzRtU6j3kKhyj6JtPXs/NIeB0SXwW6PDkJ5t90d8bOJ7RwWSDANPOP6i0OSWSny9CkLZfHqrRgNbBpDI6FQb/bvQgUe+f1HUwZJetMF74x9fY65JCkts+44V9yJs4DmbRX6mxm/uKG/o1OJzAgEzDiXW4QuKsmTbZmN8AUTIdLdoCMWxXr/q5+mxzMyxkcftI++3pGvlBzu/vRz83SwTIguWkF9yZlj+0G3s4Ujoo9quKjJ8DyjNol8aPS5WJO+SW1jTJ2Chm6+bIYX6RyvNisP0vdvx89olgI8I1oNliqVIufyGcC/XQuB21Nkx4WVtSoHKccvWpTmOseC0nTyQWuxCsuF47mMw4m7QMJlLiD/ARTe+7QNLHpJ8QU7H6uOrZMKqtWIgloVV0VgJ2qr4qhdSPReKmiTdOJJ55bSJkJuNkjD+Avel0EZj8vZkZ9ZGx42pEYY9XeEsx3lP1Vik4Ax4SX7XzwO2hgNqG7Y6tLzSlwIg+o3oK9VRZI+iRE93CXmXZNInffTz5nJUEScfEdn1wwhF+ajeKLnzg04PpObeiaQtYGVC47QWVs0uXlANCGEaBoHURyLp8gL0B7xiOIuKObZODRQW822MfHyYGF/QFAAIjvLev/Y566mTh7Jkbnpq4ztj5DD3pN5QLux7U/HW/Su7uMvQQ+cmcU4FoIqvBOv54UnPfEfZRVbhrNXJBftsvrAtxEKPwd8ujhwtaILPlokSdLn/k0ysu1JJUoh+fUMBvkmJ+ixuZJN4C9fQsEMeLUwqzVGqyyq0mlewDgVA5bn7p/PayrnbPRqg1adfXfjzHg1ZxQ0PheofL1+pE1oJYxCJP2X6gUlTgu2rNxseJE1eN3kB01HiqhIvAjd0ARSfeso6STd0TfG079w5WrR3/g7Uzkkq4kHn7V5whxmzYCpe9cWD9xmBbiS5SdswAzKz7yXgODO3/6tlsZT3yvex6faaXtPpyF5lSNugHtZK+NLSn4rRXktVW56TVKe5OTtB6eGTZe9R1FUaoV/qZyulxLybQIQNQQkobw7Huy+ZlGPbCTz0IhJOj2IZsLIHLneD6IX5dxNBkdJa8h1FZCaTy+t6V1EopJDhhs2o3Q6tvS6lccqFfEZw36zfPUZRrZ8lT+NVdVPglyCt7H93AZmZV7FQjUx/I1Z30oKOzgGIupPCVbGFkdAF5KsgOoeEXms7HuxDdknSou93y89YAjrlaCe0IvpIXOadENFLxso3AAcKd4/lzXYDrXP6oxF4j0CCiVEbB8yoFa+awNX28y0gng8OXaq01lEuvjqMEmRxdRE8YLsAQCuZGrNe3DecDkJtAssDgnWjl2JE7CypRXYcNFX5UGvKNgIha83Cbpco0iJeYR5CX3hlFolpK6ed2xV5GvKQgbBmh+gNjkGIBihAEI/pXyOH9kcoC2jFBPeJhiRrqwO+poUEIyg5uSHc4pQPXcpopv+9ACG/+9LU5oILTqcPGC8dXAE7XN0mYYXrYLiZStUjpqIJQyHdXx8RFtgV4hRwmq+MGg1S7gu5eTkjD3iLj9i/07IeIJcGi/2WxVOSOKj+i5kJPMzgoNQFOeekaXLMkioTaLOkm5SGPZelvA8qpgeMxppFRg69rexMrhJZCmwPy2kPuVd52mT8r7MHY1SqEr1aiLTe8XytcvH8HF1Wb52WctPDYwXI85PTrYcilBMBDCljZXeGh+x4nofYTqKFdKaqysGBG7ImiJnMTNJb2sSGvVphmyGihu+fO9XKSaMjIln45ZZoZS0Dqc6a6NS6YgYAcf8gc2inj3ayYfpyzuOLTwDLAlRBtkkjACwMAEZFOYqpYbeNjVIwvHoW4bXRoH/TI/NDgwuWh8ItScSnM5bE9e+ScywjgoHjj6T3SnJuQSUOLEzHcf8RCCV2KaHXwfeEF2kriFOYlW20W9i8mVnInuC4KaGqH5nMQnmQ05Q2cgCwwRSqxRB2kSV1etcIX/rwYLbbPnNKMQiUPXrQPeGeVP0GEkHFdFwREhjKaYw4ZNx5fSsLIRhIx5jQYo9TtNtEFMqExmk68O66tHLXoEwArn6LiiU83RCmQskZCEcdqNphJowQR4AGYg+Nylqjp6V1vBZwWFBb8qUVLoKk22TaeH4ioqWvrCWAhBnmAABlbGrR0IXWmD0/hSnTN6dXIYmYkvy8vRW+Ug/oz4e6EZ8NCRqMkGjylt13BzJlCBXdjikDi67wBH2qVHZ+NSDYOfl+HEAqqOOhxMRquOPe2bsX5B1j8nDi7ccnnIW95mD5D81baA5K+ghv8AwZapnUu5a50sWQq78vaDUw9cC7AxZMqUC2asnvNm7fKYXGOXIFhsYJt7qh6aLb6hTk/zBV72sNKjVgLM+v3ggQ9FraTTqlV6+F4sH7zPPlB2NGNTsFlq2UlCwgJRTuoaUe87iwPOxRRulZfV+ZJ1kyMmubWjKtDLT1x5J/1h085FOnYl1vzZTdBYsWf3OvOZbmeE5o/+/SWOmRtRIM7pAlZDQs05LJSb3dr4G7zznU4Q8zngBN0OarE9RCUh/aICDZ5jXEqExErC3qxc0q7XrauVgH4KkT3iXTwzfLWCsImSBpzQ/jyFwqe9IJRwMupwPHfrNgBkltYaGHCG4XRJZl+VcVR+y2b6W6/5L/pDoGAys+GFFCfCAstQy7+FtP1PHrsk8lQ9HG7GvuTj/w4VmueBs4wQ2NkQYhEm+C5BesBDv6jaOOLTe+fz019E1juAgIxcKBziu8B6UgJVtTB/Ocrxj6SiUEhczzm0fYWiW6NlF488hoZlSFRcHR6umdhs5pp5JcnSpDG35uIdSRPQyHFk6g3qMuA1IyRPMI/rQwH934m/6YTEB3UcIfNDwJBr5J2yDSlSrrSlzZ855fzd9xx2fvVuLA/v2Fr7Xud5rxW/sGjkZ7Rvf2eYBqA90EwUW5mW3X9OAJT63g3SoU+ruujxkhqcmJjiBiebIgpQ52Hd31CqEmzmrgOpMfeaKt35etPA4o00+FfbOmjx6RqPu159s0RczhnvkoLwKzZPGkExZMrR9R2PYpKZ6P0iUEAbUFjmdRBaOHe32McHur87UYxkde69t1etpMODqyF5S5zzjcOE4ec1f44mY1xdUq/gn/zd4jiV0Uf34JdmLilAgUYQWJaGkSino2lijygGx4MMy5MadF/zuhao8ck5egrwzYjd2voweyEP/rCWL8m3kuUWyGCnOquUZLkGs077C2noEcbKS8vmN1oNmHuT+VJ0OW+O8EV2Poww6qKEP/4/Kn5AD32GFYj2xjFZwuwZmT2DccHE0r8KZb7IHsKhAJA9G8alFSqInLWWnub6giW7iBWJlCkgyzdjOqhRIgTWUMhSXeCrDBy5+NjDN2yKBRpZ7GVa0Gmzp7U5lbqvVASut5vSZJUsmSAmSUyxEtwKTBT/nA3OIpnAbklVIRpYIYBRcDWB9Qm4txAlX9ozfYXnIHAJUakk9Ow1I/llcvcQU9nM8uOi/8FsjieuBNslMSsy/u5sgertCrLNK3451xVADqk2FBbp7kHMn3d1L2SQPmeq/FffDlvi15TjpyGwNHZflI53GaN1B0JQqWD170/toL30UOSiy+tehz3A8htfBN49cas9vGdXssgtsUXajIBIxLt94QuUTSYYge2uqO3zk/R8RRrrvJ29gg0+YzZ//K2ptopIvg5PH2ridexLTsPkq4OJYZmYzbJ/VtRXgZl74uPibwmUyDtApmUiFXd0NMDakR4T5ijt35EVQs2XDnXl97/nM5+zkPbgG9V8Jwm30IVcDvdB9/39H7Yuf+CyNXnDshlkghHYbWQiGmufMmYmFWMlk/HbE91i6p3sbeFq3SLL1qUlrco1DgkpUrA9bclj+fTfeu72a40ws2KQ1H4CAKx/IqX5ddkfMTgTB0POTBtMVh8pZMb1HF8zrp85ydJ8kU6eKDbiOByB53+waaxHwMIh0sUZDAVX6D00dNP9VeANXiE609+/lIv0MAHbb9yL6LXE+kP/83H/wFYZk2GF8DQ+7rH2zvJfyYua3x8kqxG9Pyh0vPH4jt2TiZgUgwZhlIAHZBscQPjIQ/fB/PeLOWSaB9bdRJeOnpb268LC7HkQ8GyKc+jMhzWunseKtnSQnDH5gH+BWj6Yq41nAoVc5C0LEGRN6FKrOkuE/tJ9hfB1YSz81LHnFuYhgFbHSgGBElBZALoGtdDFvysG0eNyZGPEln3RNUtUYcrRcCrREGitoemLxu/oa4m3vMUhi40u7QLqbXKg42R7DHpv8QUn3fvyHxrO2yoEFwGEfd65zhOsNvznFod8h6YfHqhS7BLftL/zKeelOxrZ76oOasNN8PcnSkGOVhrOChL7nEGzwxLiKzOuD4srP97Dpj/Os76u1FHNnd2NOORQAeiQi/CVlO1ww0vyhMUzBPfFUJhnGjVDXHZaHxSCdpB1hUi+j41MI+k25fsm4wPb4bHpW4gHnYy3cGfxnP83WinAz2JrMn2sN8BMTuJAm+sUsC/L45oc923M+p8VQR/QE9PYOZPK0UPT1IzkWGBT16SsK4dei8+oiLYhhiac8dK/ld8WykF2lEw30cGkJXExhjJD6CbKH2qFvVQozvnF1XTpXTD1kIG7ObL5DPIOXFCIyD5uUraUlUv/VFYcdqenBkbybeNiI4Uw0A0ODqsrPgd0COpvImx4E9xpIrH6snCyGhV219TqRoDB8cT6mABxKWnEmE1qQB0EzKFpefPUvbqXMlIUcGjsIcZYrLLPXSibTchrOQHJLroLnEIKXyJxXzZ+j74igvLA+KDkgGIkSNSNqMqXEdFXg8g+bhRbLwR1oFHCijOJatlHnKYC/SIQz9zvhAxWArDs2lf7myRTgHGiSPvRLZrlZOIGwmppixwS5oGED10UqukrHtMr3OEnV+mqbFLX9ifFskh1K33XEe95+o4lWe8E75rl8KNevr+NuKnbXHISLrEF0v3WXrmI/jjGcPuxA/QwR/QqNpJEzBug6/Y6egKBbQLHRrcZCPph8IjzUExXu3yC27ySE3s2VzG40EKA/HueacLonPNiGjBx8VEJ4onLUpuvLBoed2LeMtS0E9wo9nnthegiuOVbavZSouPs/KlfFzQ1tMgDMx2bPN8Y2o6nQzL1UdEldWs/p5fZPar3pNAF38rckxd0BuQ4Ds59AZVP0udJLFuQyE6vTomr5E35aQbcDety3YfKkrYG54X/KR6RKJCN5uVZy3BK+oSJqnfjmCmKHUyeOOy5SPpWzpB45YCZvM0rq8XdW9rLqQccWBXF2YV4MJW01BxMDUydVjqhMyiKb1R2rAKy8cs8iAQ+rxRdfRid7zXkWKB8QmFHDfpNtjJh/3XGTdAMX/7tsa2fE8YsTp1tSdrDuR3kzirRSHNA2QqWs082+QNdyci3F1kqUJ+7ot3saECcXlJYRPy4X8SXC0udLA5YCEg+JWyDeh/yw6h8r5QmRymons0prVGfBCOqsjahQx+7v1TwLHkuRh1VCky0keCZ84TVEUJ2raLMLgFjgTGei2TLTxSwzNQIBr5chSN9FYQK6EIFoBsW11j8/pr7I/U3iW2tVFXLBBn2ENFFB3qXu5ya2GgkM5sre22agUnnyw06jy7MKG+6gpTqetw4KspDHbG7rWTc5kevaGrFrrxHPDQqWcJVkv0NqtWTG6aDiH9tjyMUvMQChToKi1FaUD5vw1fCJqsHMj/Dhqi0p5mAt9aRNrYz/LvodbJllOwEC7xCkHPsoUxLwhhBwk/GHtDIq5IRHvsjjXROsR+/EDMuUstrwTPY7uLDf572gB7lTrrIeooC2CSUK1iLbCmZzYNeDzWQeabiG7rEwEsUUCJhcU72QTfXWybdt9RPTeMWeSmItzmiZaOVjDeeuX2AlJOvTY+8m2hGUsm7x71c0DGbY9lwXarxpPUuOr/2fYuqiwC1g7MuRMO1hfl09MMeY+sOZRj7pfE6c53SCYRUH3/ajfKvIhGu8S3ulEyPp3ydTwVSz45cbmjIw9VMh6kX3cV03rsRCUAtraTLRrQvGTj8D96ZazZWeY/OF10CVSxSueFJqqcm5fAM1XsqOb1pBdJiEG1tsbLSS/J6XxpuW0M8I2c18H8AtUD6f3988sJJxNoNEZqO+PkryrkvN4bdcYMivKZe8nsXNHJvOKS37JCV2hxlXXaZKBf5lfbnqomJAu2/3+QbNRleP4usx7Z53a6UN9vPPVwiIUZP/N5Rh9Ms1UmpIu8KPDH9LWhU8SHRgplh0oS4m+i2gs/YubcWIVrOz0P5OLroh9tygWUM1CoLMVnaX1p5VdL4BPBOS//OlzizZxBJLxoaKeuAhQV7nlndvB0Fc7kpfDpjDYqAsEucg2KvMt+8xKa7KQLIcJ6FXFrhnHJ502Xpn6zv8f8z20oWDDyYgP7f/pJbZn68vZyals7NcUmzYvQCgAL2bIGtiDkGDgdkNuMBQlrF1vJ2PI/nUd5/sArv4MIycowF5sExKs19IP8/tqlr7y2VrVuDXTFlqYT8CJPU3Lx4C00ugU2cxGdep4XCVjhzhgjV223gQIoylxuiErY1VW+tjjhoKdMdfiidxfJLDxrMsm6f08e0c5QtCg0xOyfkrPYwrDrzi0QOFnR4X9AiWo3hcNAVCCbg3GHOQMjxNk9OaoiGaGyNLp3o9ntJVsfcjlFqkV1wH1pl4/RDKFqiqKJwnoylnuGFTrrNXlQrZQr0m+0zvVtfWTTPKZYwIzexpQQeFnloWDPygoMOCKN82WwVOQxD5scKIe22v8LJihIP6rnuvKsfKZZrFtN62niXtNS1edJprqaGhI+pNZH7j0pfAVG76OoFIKutl/aJDGk6XCN7Lqj1OSod6I5oCbhKV0bQ75J/ltQluJF9DzUudVxiurZmtXx7hbd7kU8cjSXNZlAmhrTGLUWTgVQ5sEHMFmq87TzQxEvblAwWZzsewRyF4rIfBsvgRu+cTCiKVG/aye4Eup9NV5PAPQ3nhUbiTA+8copO/FMItCwA6Fb7p+JFZxQO5r3yRulsY4lb8q3gBaXwgNj0FJF96JvI+0Q5Pe6aRB6HJdmo2Ox3M0c1J3qtEfZyjjfW2xGNtQxZGqcHsw7ZKSYJYHEnF477009tPKUxy23xfEJ/X+zC0ziiI3Ceq1WgTKjPLDDxaASlcHoKvJqmf0uPgBkIORZaWx56H5xAu+GJfoHrjTMK6eovnkqkRPQYl/px5hlph2/Wz2DqOpnKDCKdH7clgsnbbDWrd4Tboq1LkLZHuRQKFOHszrs9F1yjYHQuvg/2ln454umBfCgsdGPVRHlJnDcTWvwFk7xIh8xm0jktSnOvng1IsRYO0W2VGcRi/JVuvOPgf/uNzm0Q4Z8zMDBkSA1CO84eSCGl7RIVbKp9+uLrWi47+HePH+3YAqTj9tmXhZCCHPlbV1jxvVzRVQaK723vsnQXIa9JRuDdx3naJ1r6CrZVOL1l2477dBjGNvZiGCadtIpqHxm2gAahkp6Exlv9Zklntnmtrgjb3tMQPMwIJaKkWO9JOA4lKVv/PoD7k4ixLL1wAAOuPzd7w4MgsOdRo6laZvxBWs1nkIDQsy0BNOfP6rQHahf9bJk96olQPEPNfaKCHLOkKXqFC2tJ4x+HJdOFZmFWWxQyL83GPBZaEnN0M6N8e6Qg6muNuxRFGQT1u6Q1ZcoFLI7JnvgvA/vowaWAtg4c4yIm2srYA8SMPAdttxfHe/qi14Qi+swwZZ32+qz3lewZoKO+HE6lqzAVzsBQQpDslzIAclKwNEKQ+N3hgRnjRk+RKbRCC80mjsYcSEmmbJlOuCDiG/Q9HZ1wh0ys/6WWDh2/iu7NsrtahxxgZJOkFvzsvHuQs8OBt6Y8TNn5CgamQ+oFQqdK8cHObrKpe1Cp9gmh8DXbMvSPT47x2NEortXASntNy1lUe3m6DtMAvuwddx/NaglU3aTp6AIU/7ntqPFj7JKF43/ZBMyRM5HRew612sp5zcfGl1uXde3+x2HL/c5Q5VKcpji/2nPQC/zfmAV87h6/iEI5+9sIkDLaqxmQJ5R7P2tuEhgbuZ7ituQjRw1YEBRHkpKrqvA0k5W+pavCfAZOoIWfv2w+KirMybbvaV2veg20Yv1ilnYD0SOK0ALABa3Je5qWN8UmNqVfpDe294gX0p7PyM5qhFknCpMDvl0zr9XqwSGZWC1jVTkTBlRjnHUGmCQYxaw66kANxWN7gHheUMcU12T81HaZE/fbbqeqHA1dZXiIXRbQgTlXS712ar790LYqGSomPWuuIYv0B9YLP/GFmkImQ/5sGVCxXKaCzA8vcNceLOlyMH2ONAgnT0Fd1If8InLMcMn1Jn10npF0goy0LMJzmaQzLYpzxuQz/Kh743Xl6holEHQU4smalwl52PAU0uiFZUfbXShTs0cAC690gtFJoHrWFYCNav5KdMlvC3xywm6Kfd0ZQpw4tKc8HesbvKMEcEv7RrIS7uStLmYsiz19StbUWLnXpyLZmxXnVePrGSivvJnkZ5dhgfWPqsZRih/Zq6zDAMjyURU67hXHZaBnpgAZzGXaumoulbRRK5ek1y18VQ8A7bgKH+fEastXJKyxU605wBuOmKl8AcEpZMfDPaNFKfxyZ6uH5LFzhYLNo6FbTvSNgb2xkRKJBgaPAFwc77XZnK6PHeiUR2Rp4W5Yf7nzdJitJ/MaSPou5cip8PJkZ5Phe0Fu/4nr1cjKX9pSV26+vuQXMZDjxnt74fV2AiWV7w3sRZ1qyET5bI/KNqx+G4yPz/yAKG0ZSuX0Wwh5iEee/1wUoDyE0doNYVhu4F/A3mToTIi6Qd5jQbpvNuDKDDfvvMxl+Z3CB3BgyNb+xQaUPkZBUALnNvtsbEURPMjWHl8cc7qj5BN+tOoogkP1Ib/JoFe/6a0Ii7HA+DxgRT5e0CQT3n1KJDSUaGuvndRemuF8Hl0Pr4kM8y7LfB/eNf9v7RACAiO3MdqfzMC3PGk3jOImv71NHwV4z9RkSlGRUrhBz73I+sTwI0PiJ8dBaORhqMhBsPKceh7O6c7lARFjL4+Z0qRPs7BidzeJAJXCLHj6OoclJJQPiMKz5VmvxzD+KAAG4hmeYF0nsHvVuR1hrDoAv5zRo1ne1tdKUt0AAAI2oddQ1kafTRzyzVbFYpZfP2Sg2r2GG9BnXRw6YVXcX2tIEk0If3ucQfuWeyCRg5Owyc4UB6q5eVhpGuTLSl5v3EQdY3HKxNJaXHyszHyWibML+EVO0xclxPttaNzzM6IXRioMFILfvAI1bz+xy/VARC1NnXf89QfjmET8RYWAPpnjEZyVw+A++5ta1lBxxZWUQATK0q8qPdoAi+g6NpDKzf1vQMDIg76cHymaIiODNKE/J0b023FB9XTGIZliRgm0mjy5bycWLxwjnQCGhaf4yZa9e/k6yAqDMQAYkO0DsyqJrypyuzHtfLXbQHWb0Okx70HP1qILwhocsquc+9ZpMK0yV7kWO5MlKCALjUWhbFi676pUyPZJAPYtQB/FNykhop9oIlHw/i9VQwQ2gqml+F24NHdcDbm4gtDKPxy010Xt8wn/NceumfSwM1pxVIkgrxdp+5Owe1AfGgb3ynaDYi/K78hlVyGpfnv89okEZbhJOgnR/gYDEX/jkln/ufVG95uPRfhmP+4qnUizUXXviX+yUzmIxPdxadPzxk/SiFV5wFGNWgzm/p2/2fwxmh5XoxpWuLxFhDhZZTQhJU9/ozsFJ1dwmQthGtSkv2lTBKIWid3eym5FAiUny9P2i39+HdK3LPbud2QZgtqqt0i9NtYhgdOedVjwxzCBvBY+fWedaQC+P4NDRVFXjrbfWLAyO+69USKWpB0w0zm7d+T/5T36/83wEarVfvg1H6LIWDv6uIHXFRI6C3DKy7/DJ8//OjAQdEDqBFpIryi5IuuB4ghyirPYpbYeMrDI94gCcdLY9utcT7bhA/Vof+7lpfj1bKb2eSg0CL/RdqtiXobPXB5sz/Bn1NbfhiEm8E+5dCJ6+CuJftfrGKWrMOaWWm+LfjPHcDGKpvWp7n2Fzj0ryfujyhzl8me0EkO/aXFNZF6r/HfjSWSw+0mFjvyko/oerJj2/Evd5dPBOSWqYe2WbUz/pev10Xl/VzeXDCFv4LvFpUjx7ETAun1Tg4Gt4jNakNwkR/GWX0jMVmG5f+U0gSkWIYM8OATrsPJ9RjMENZWP3HFQrQxZA8Ek8cvk4o66mhWr3l0QUnLj2ywfd+VLr9Ez13uWy0Mx/rwvxUnlwiJQo+/ChoDYz/B/JPWcT5j7XMp/uiI0cbX9J/iDd9SiVXtM5fwiV6+P7IgjYFsKgJhKuCU1V7jr/V60habWlOJf9HpCUPXp0BUHDshD+/XXka8gy+wspwl17DaaO9ysQ6vbNxhiI6sQs4Vv1LoXMqlOkRajyRp5XRWCinh5r50+hHs/it57hyK6uIym37B/dGtTzqw/Q+3q3UB3RR8T/tOs3GyAM9Vkah0ucTfhj5F0aRkVi/o70OsObOEmYKSH1M43+oir/n1lkjsmxSxJ+vfBqI6UaBqaXV3xq+2+iDZfVFdFQRe7283v3p3hyF15/yjUUidmP8xCw5bbXRe8RtMdRyVyBZ6tVwa8saBYsi3vcg9c62RaU12lun43Cg3uzccyflWfV08NKIa0CQexaAQSNBtGzw8T3ub+/zEdNQGwXfulnbqwoEw/UXXvFgTocgiCwBVGED8Woe4c+CQ9if8VPCnE4aGpuQan0zX+ao4ZKEyoveWOB89ruM37w/nF+9Yy9+TaUOiyt5WFjmsRYPsR/7hnaq3ilEPKo3m5hv8mue8DMUJ/24nYQl3vUlouQPQJw+NSBY1X8+m/RQF1xSBr020YMrVCcSfek3hm9VPtql8jw2OEjwxioMaUhOxXTJVvRdK8vj/zPeQKSXZvM2chiCBduSx/AX2YlxJ+uSaND67aInDiO7xdewCavfm15YNdlTCyQ19FH6LzsTqHRa/P7fEK+PZ38+B6AYF5V2IklxnedgYkZFxui65JfbS/j8vqPMZ8qh31jm3FA6JlnFK9KfUvnyM1njm5mGpdGumARbEJine8CHU7kUN5kdxQLM/ZnpvaEjz3rxqPbqNmRjVRXcECH3sAn7xWjHnpc7LeZ2WF1/vG/TTKGbe+Bnptc0vZqBTigt++gOYPuYtfOF8gskk+ajNxac7AX66g0dS30SqT8iW53GPI2hzO3smemUKx/PcsoPQABq3U3T5trEeGaqfhP992OM8UGluI8KBuRIaUPH4AbQYla4KyZ9I7PXJAedLQYYb7wRNWtnxlJ90AAC4Tx2/pMvdQp3F4vMXyf9ZISUNu4Hw4V4PsQtszjIqC+dxDtfF+FX7kkouP4E9EQkyjT1y39upcsvSBwPYRHSALnmUGkyGrWJf6RXQ985b8gYwrz/zPkhqcRVW11oYavr8ky/SgjGi+vMmbWIEto8/dDkU0cY1c1fYmGvy2O7NUqYgIQS5AfWR0dPsgmTNouXotaQ3dmbTcVFX/ex4/yaFnbjC7FkzxnrRaGZPXvkjc8Vg+cUoURcJB43QVxB9Xht1RhoamHVHfwAAAAAjfgDqxyZ15ltL06ExloThHDENUV4NywGWAKphwInlzKapDliBeaGt4ixKxBFwUTW+sl8ltK1vtRPVa3pzeBsZd92tDfScfMXd7NCr/D3arsCRTojVQvXBJKmuGLjxet2ZScRNQqBuxAqsecySB5WrcW+rgbGnumyjZhor8Qxw4hEOXpIZydkhv7GpyetLcFziS/4jJ6Kx3hOYTZoAm9Dq45sOTP/7tznB1VrjKpVYgVn+2VlcQkesoLHl4g8oyzYp7Ntggn46tguEABlc8O6EGsdIMDBTZrLysWlNIUwbeEVB2QPHnRnbCtJz/bIqumiq3Y+BKTBqtrIJvX/ndz1qN3xlN6akYV0L+b1UpkfvYnpDNbP5x3U0hbYtMPJwgkS8kjkzN3Wi4C/oAvCPX9iQ20zfM16wKEeeemIAX1tnWFjRns64AoAClc9SY7hs9cC8DENO8JK1vBtARJXbLoQO2ZLFYWnkgJufH0ZmeK9nDPhIh/WPLHCpeKjukyOAwzB7O4m8lXNfcXzerGEPPINynvFDl0z1dix9LJqk/U0TAVPn7+izVzCX7GT6ISooVjJdrqBiIHhkLyyFQPijZUbDflegZefWVb/opYT+sdtY9AAATms/c9pkRTWeuQAAA=";var ko='"Space Grotesk", "Inter", "Segoe UI", system-ui, sans-serif',Rc=1024,Cc=614,gs={x:.5,y:.58,r:.1};function Pc(i,e,t,n,r,s="left"){let o=[...e].map(c=>i.measureText(c).width),a=o.reduce((c,u)=>c+u,0)+r*(e.length-1),l=s==="center"?t-a/2:s==="right"?t-a:t;[...e].forEach((c,u)=>{i.fillText(c,l,n),l+=o[u]+r})}function $h(i,e,t,n){if(i.fillStyle="#130c10",i.fillRect(0,0,e,t),n.complete&&n.naturalWidth){let o=Math.max(e/n.naturalWidth,t/n.naturalHeight),a=n.naturalWidth*o,l=n.naturalHeight*o;i.drawImage(n,(e-a)/2,(t-l)/2,a,l)}let r=i.createLinearGradient(0,0,0,t);r.addColorStop(0,"rgba(8,3,4,0.35)"),r.addColorStop(.26,"rgba(8,3,4,0)"),r.addColorStop(.58,"rgba(8,3,4,0)"),r.addColorStop(1,"rgba(8,3,4,0.7)"),i.fillStyle=r,i.fillRect(0,0,e,t);let s=i.createRadialGradient(e/2,t/2,t*.3,e/2,t/2,e*.62);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.4)"),i.fillStyle=s,i.fillRect(0,0,e,t)}function qx(i,e,t,n){i.textBaseline="alphabetic",i.fillStyle="#ff3355",i.beginPath(),i.arc(50,56,10,0,Math.PI*2),i.fill(),i.font=`700 28px ${ko}`,i.fillStyle="rgba(255,240,240,0.92)",Pc(i,"REC",70,66,4),i.save(),i.font=`700 92px ${ko}`,i.shadowColor="rgba(255,51,85,0.75)",i.shadowBlur=28,i.fillStyle="#fff3f3",i.fillText("NeuroMaze",40,t-70),i.restore(),i.font=`600 26px ${ko}`,i.fillStyle="rgba(255,214,222,0.88)",Pc(i,"UNITY \xB7 3D HORROR",44,t-30,4),i.font=`700 30px ${ko}`,i.fillStyle="rgba(255,255,255,0.95)",i.shadowColor="rgba(0,0,0,0.85)",i.shadowBlur=12,Pc(i,n,e/2,(1-gs.y+gs.r)*t+52,6,"center")}var Yx=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Zx=`
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
`;function ed(i){let e=new Image,t=Yt((u,h,p)=>$h(u,h,p,e),Rc,Cc),n=Yt((u,h,p)=>qx(u,h,p,"IN CREATIVE WORKS"),Rc,Cc,{redraw:!0});e.onload=()=>{$h(t.image.getContext("2d"),Rc,Cc,e),t.needsUpdate=!0},e.src=jh;let r={uPicture:{value:t},uChrome:{value:n},uOn:{value:0},uTime:{value:0},uHover:{value:0},uTap:{value:0},uChromeOpacity:{value:1},uButton:{value:new C(gs.x,gs.y,gs.r)}},s=new Rt({uniforms:r,vertexShader:Yx,fragmentShader:Zx}),o=new st(i,s);o.renderOrder=3;let a=0,l=-1,c=0;return{mesh:o,setOn(u){r.uOn.value=u},setHover(u){a=u?1:0},press(){l=performance.now()},animate(u){let h=Math.min(.05,Math.max(0,u-c));c=u,r.uTime.value=u,r.uHover.value+=(a-r.uHover.value)*(1-Math.exp(-h*10)),r.uTap.value=l<0?0:Math.min(1,(performance.now()-l)/520),r.uTap.value>=1&&(l=-1)}}}function td({materials:i}){let[e,,t]=Dt.workstation,n=Dt.tableTop,r=new dt,s=[],o=(E,R=r)=>(R.add(E.root),s.push(E),E);o(et({size:[2.8,.05,1.3],at:[e,n-.05,t],material:i.wood,radius:.012,fx:"drop",drop:2.6,keepWire:.1})),[-1.32,1.32].forEach(E=>o(et({size:[.05,n-.05,1.1],at:[e+E,0,t],material:i.laminate,radius:.01,fx:"drop",drop:3.2}))),o(et({size:[2.56,.42,.03],at:[e,.26,t-.5],material:i.laminate,radius:.008,fx:"drop",drop:3.2,wire:!1}));let[a,l]=Dt.monitorRel,c=e+a,u=t+l,h=ms(1,.6),p=new dt;r.add(p),o(ke(qe(h.body,c,n,u),i.plastic,{shadow:!0}),p),o(ke(Bi(h,c,n,u),cn(Ir(),.9),{shadow:!1}),p);let d=new zt({map:Uo(),transparent:!0,opacity:0,depthWrite:!1}),g=new st(Bi(h,c,n,u),d);g.position.z=.0015,g.renderOrder=2,g.visible=!1,p.add(g);let x=ed(Bi(h,c,n,u));x.mesh.position.z=.003,p.add(x.mesh);let m=ms(.86,.52);o(ke(qe(m.body,e-.8,n,t-.38,.25),i.plastic,{shadow:!0})),o(ke(Bi(m,e-.8,n,t-.38,.25),cn(Lr(2),.85),{shadow:!1})),o(ke(qe(Oo(),e-.15,n,t+.12),ii(No(),.5))),o(ke(qe(Bo(),e+.34,n,t+.14,.1),i.plastic));let f=Yh();o(ke(qe(f.shell,e+1.02,n,t+.1,-.5),i.plasticWhite)),o(ke(qe(f.dark,e+1.02,n,t+.1,-.5),i.plastic)),o(ke(qe(Ac(),e+.9,n,t+.47,.6),i.plasticWhite)),o(ke(qe(Ac(),e+1.1,n,t+.42,1.05),i.plasticWhite));let y=zo();o(ke(qe(y.body,e-1.2,n,t-.42,.5),i.steelDark));let M=o(ke(qe(y.bulb,e-1.2,n,t-.42,.5),i.lampBulb.clone(),{shadow:!1}));o(ke(qe(_i(),e-1.02,n,t+.2,.4),i.plasticWhite)),o(ke(qe(Qe(.22,.025,.3,[0,0,0],.004),e-.62,n,t+.32,.25),i.paper)),o(ke(qe(Qe(.22,.48,.46,[0,0,0],.02),e+1,0,t-.22,-.2),i.plastic,{drop:3})),[[e+.5,t+1.35,Math.PI+.3,i.fabric],[e-.85,t+1.7,Math.PI-.55,i.fabricBlue]].forEach(([E,R,L,w])=>{let b=Dr();o(ke(qe(b.base,E,0,R,L),i.steelDark,{drop:3.4,shadow:!0})),o(ke(qe(b.fabric,E,0,R,L),w,{drop:3.4,shadow:!0}))});let v=h.top-.15,P={group:p,unityMat:d,preview:x,center:new C(c,n+.15+.03+.3,u+.03),bezel:{w:1.06,h:v,d:.045,cy:n+.15+v/2,z:u},x:c};return{group:r,target:P,lampPosition:new C(e-1.1,n+.75,t-.5),bulb:M,update(E){let R=Ve(E,...Je.workstation);s.forEach((w,b)=>w.set(nn(R,b,s.length,.68)));let L=Tt(Ve(E,...Je.screens));g.visible=L>.001,d.opacity=L,x.setOn(Tt(Ve(E,...Je.preview)))},animate(E){x.animate(E)}}}function nd({materials:i}){let e=new dt,t=[],n=s=>(e.add(s.root),t.push(s),s);[[-2,.7],[.9,.62]].forEach(([s,o])=>{let a=Tc(o);n(ke(qe(a.pot,-4.85,1.08,s),i.pot)),n(ke(qe(a.leaves,-4.85,1.08,s),i.vertex))});let r=Tc(1.7);return n(ke(qe(r.pot,-4.2,0,3.9),i.pot,{drop:3})),n(ke(qe(r.leaves,-4.2,0,3.9),i.vertex,{drop:3})),n(ke(Pn(.17,.15,.4,[2.75,0,-4.6],18),i.steelDark,{drop:3})),n(ke(Zt([Pn(.075,.075,.42,[3.02,.35,-4.72],14),Pn(.03,.03,.08,[3.02,.77,-4.72],10)]),i.tape,{drop:3})),n(ke(qe(Qe(.55,.42,.5,[0,0,0],.01),4.6,0,-4.45,.1),i.cardboard,{drop:3})),n(ke(qe(Qe(.42,.3,.4,[0,0,0],.01),4.62,.42,-4.42,-.15),i.cardboard,{drop:3})),{group:e,update(s){let o=Ve(s,...Je.props);t.forEach((a,l)=>a.set(nn(o,l,t.length,.62)))}}}function id({workstation:i,stage:e,onChange:t=()=>{},onOpen:n=()=>{},isAvailable:r=()=>!0}){let s=i.target,o=s.bezel,a=new dt,l=new zt({color:16760938,side:Ct,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),c=new st(new Pr(o.w,o.h,o.d,2,.02),l);c.position.set(s.x,o.cy,o.z),c.visible=!1,s.group.add(c);let u=new C(0,1,0),h=new zt({color:16773590,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),p=new st(new Mr(.006,.006,1,6).translate(0,.5,0),h);p.visible=!1,p.frustumCulled=!1;let d=new zt({color:16777215,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),g=new st(new vi(.02,12,12),d);g.visible=!1,a.add(p,g);let x=document.createElement("button");x.className="lab-tag",x.type="button",x.disabled=!0,x.tabIndex=-1,x.setAttribute("aria-label","NeuroMaze: go to chapter 04, Creative works"),x.innerHTML='<span class="lab-tag__box"><i class="lab-tag__dot"></i><span class="lab-tag__name">NeuroMaze</span><span class="lab-tag__state">Up next \u2193</span></span>',e.parentElement.appendChild(x);let m=x.firstElementChild,f=!1,y=m.offsetWidth||190,M=()=>{if(f)return;let K=m.offsetWidth||190;K!==y&&(y=K,t())},v=typeof ResizeObserver<"u"?new ResizeObserver(M):null;v?.observe(m),v||window.addEventListener("resize",M,{passive:!0}),document.fonts?.ready.then(M),document.fonts?.addEventListener("loadingdone",M);let P=new C,E=new C,R=new C,L=new C,w=new C,b=new C,I=-1,k=!1,O=NaN,V=NaN,W=-1,H=-1,te=-1,X=!1,ue=0,ce=-1,ge=null,Ee=null,He=!1,Z=0,ne=null,xe=null,ee=e.closest?.(".story")||e.parentElement,Se=new So,Ae=new oe,De=()=>!f&&xe&&r()&&V>=Je.hover[0],at=()=>{ue++,t()},Oe=0,Ye=()=>{!De()||Oe||(s.preview.press(),x.classList.add("is-opening"),t(),Oe=setTimeout(()=>{Oe=0,x.classList.remove("is-opening"),f||n()},220))},F=K=>{K!==ge&&(ge=K,s.preview.setHover(K===!0),ee.style.cursor=K?"pointer":"",at())};function _t(K){if(!De())return!1;let se=e.getBoundingClientRect();return!se.width||!se.height||(Ae.set((K.clientX-se.left)/se.width*2-1,-(K.clientY-se.top)/se.height*2+1),Math.abs(Ae.x)>1||Math.abs(Ae.y)>1)?!1:(Se.setFromCamera(Ae,xe),Se.intersectObject(s.group,!0).some(Ue=>Ue.object.visible&&Ue.object!==c))}function Be(K){Ee&&Math.hypot(K.clientX-Ee.x,K.clientY-Ee.y)>8&&(Ee=null),!(K.pointerType==="touch"||!De())&&(ne={clientX:K.clientX,clientY:K.clientY},!Z&&(Z=requestAnimationFrame(()=>{Z=0,!(!ne||!De())&&F(_t(ne))})))}function Pe(){ne=null,F(null)}function Me(K){He=!1;let se=x.contains(K.target);K.isPrimary===!1||K.pointerType!=="touch"&&K.button!==0||!De()||!se&&!_t(K)||(Ee={id:K.pointerId,x:K.clientX,y:K.clientY,at:performance.now(),progress:V,label:se})}function ze(K){let se=Ee;if(Ee=null,!(!se||K.pointerId!==se.id||V!==se.progress||performance.now()-se.at>500||Math.hypot(K.clientX-se.x,K.clientY-se.y)>8||!(se.label?x.contains(K.target):_t(K)))){if(se.label){He=!0;return}Ye()}}let we=()=>{Ee=null,He=!1},T=K=>{K.detail>0&&"PointerEvent"in window&&!He||(He=!1,Ye())},_=K=>se=>{x.contains(se.target)||K(se)},z=_(Be),J=_(Me),j=_(ze),Y=_(we);x.addEventListener("click",T),"PointerEvent"in window&&(ee.addEventListener("pointermove",z,{passive:!0}),ee.addEventListener("pointerleave",Pe,{passive:!0}),ee.addEventListener("pointerdown",J,{passive:!0}),ee.addEventListener("pointerup",j,{passive:!0}),ee.addEventListener("pointercancel",Y,{passive:!0}),x.addEventListener("pointermove",Be,{passive:!0}),x.addEventListener("pointerdown",Me,{passive:!0}),x.addEventListener("pointerup",ze,{passive:!0}),x.addEventListener("pointercancel",we,{passive:!0}));function ye(K,se,Ue,re=!1){xe=se;let le=r();if(!re&&K!==V&&(V=K,Ee=null,He=!1,ge!==null&&(ge=null,s.preview.setHover(!1),ee.style.cursor="",ue++)),K===O&&Ue.w===W&&Ue.h===H&&y===te&&le===X&&ue===ce)return!1;O=K,W=Ue.w,H=Ue.h,te=y,X=le,ce=ue;let Re=K>=Je.hover[0],_e=Tt(Ve(K,...Je.select)),he=Math.max(_e,Re&&ge!==null?Number(ge):Tt(Ve(K,...Je.hover))),We=.005+.009*_e;c.visible=he>.001,c.scale.set(1+2*We/o.w,1+2*We/o.h,1+5*_e),l.opacity=.5*he+.4*_e,s.group.position.y=.045*_e,s.unityMat.color.setScalar(1+.16*_e),se.matrixWorld.extractBasis(L,w,b),P.copy(se.position).addScaledVector(L,.8).addScaledVector(w,-.55).addScaledVector(b,-.7),R.copy(s.center).setY(s.center.y+s.group.position.y),E.subVectors(R,P);let Fe=E.length();E.divideScalar(Fe);let lt=Ar(he);p.visible=he>.001,p.position.copy(P),p.quaternion.setFromUnitVectors(u,E),p.scale.set(1,Fe*lt,1),h.opacity=.34*he*(1-.6*_e),g.visible=lt>.98,g.position.copy(R),d.opacity=.9*he,g.scale.setScalar(1-.35*_e);let N=_e;x.style.opacity=String(N);let de=le&&Re&&N>.001;if(x.disabled=!de,x.tabIndex=de?0:-1,x.classList.toggle("is-interactive",de),N>.001){k||M(),R.set(s.x+o.w/2,o.cy+o.h/2+s.group.position.y,o.z).project(se);let Q=(R.x*.5+.5)*Ue.w,fe=Math.max(96,(-R.y*.5+.5)*Ue.h),pe=Ue.w-Q-30-y-12;x.classList.toggle("is-left",pe<0&&Q>Ue.w/2),x.style.transform=`translate(${(Q+(Ue.x||0)).toFixed(1)}px, ${(fe+(Ue.y||0)).toFixed(1)}px)`}k=N>.001;let q=Math.round(_e*100)/100;return q!==I&&(I=q,e.style.setProperty("--lab-focus",String(q))),!0}return{group:a,update:ye,stats:()=>({manualHover:ge}),dispose(){f=!0,clearTimeout(Oe),ee.style.cursor="",v?.disconnect(),window.removeEventListener("resize",M),document.fonts?.removeEventListener("loadingdone",M),cancelAnimationFrame(Z),ee.removeEventListener("pointermove",z),ee.removeEventListener("pointerleave",Pe),ee.removeEventListener("pointerdown",J),ee.removeEventListener("pointerup",j),ee.removeEventListener("pointercancel",Y),x.removeEventListener("pointermove",Be),x.removeEventListener("pointerdown",Me),x.removeEventListener("pointerup",ze),x.removeEventListener("pointercancel",we),x.removeEventListener("click",T),x.remove(),e.style.removeProperty("--lab-focus")}}}function sd({quality:i}){let e=new dt,t=rd([[0,"rgba(232,181,102,0.55)"],[.45,"rgba(201,113,63,0.18)"],[1,"rgba(201,113,63,0)"]]),n=new zt({map:t,transparent:!0,opacity:0,blending:Ii,depthWrite:!1,toneMapped:!1}),r=new st(new kt(30,30).rotateX(-Math.PI/2),n);r.position.y=-.72,r.renderOrder=-2,e.add(r);let s=i.low?110:240,o=new Float32Array(s*3),a=new Float32Array(s),l=new Float32Array(s),c=new Float32Array(s*3);for(let d=0;d<s;d++)o[d*3]=(kn(d*3.1)-.5)*20,o[d*3+1]=-.5,o[d*3+2]=(kn(d*5.7)-.5)*20,a[d]=kn(d*7.3),l[d]=.012+kn(d*11.9)*.02;let u=new yt;u.setAttribute("position",new ut(c,3));let h=new rs({size:.09,map:rd([[0,"rgba(255,240,215,1)"],[1,"rgba(255,240,215,0)"]]),color:xn.champagne,transparent:!0,opacity:0,blending:Ii,depthWrite:!1,toneMapped:!1,sizeAttenuation:!0}),p=new ti(u,h);return p.frustumCulled=!1,e.add(p),{group:e,update(d,g){let x=Tt(Ve(d,...Je.slab));n.opacity=x*.12,h.opacity=x*.28;for(let m=0;m<s;m++){let f=(g*l[m]+a[m])%1;c[m*3]=o[m*3]+Math.sin(g*.15+a[m]*6.28)*.5,c[m*3+1]=o[m*3+1]+f*9,c[m*3+2]=o[m*3+2]+Math.cos(g*.12+a[m]*6.28)*.5}u.attributes.position.needsUpdate=!0}}}function rd(i){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);i.forEach(([s,o])=>n.addColorStop(s,o)),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new _r(e);return r.colorSpace=St,r}function Jx(){let i=matchMedia("(pointer: coarse)").matches,e=Math.min(screen.width,screen.height)<700,t=i||e;return{low:t,maxDpr:t?1.5:2,shadowSize:t?1024:2048,bloom:!t}}async function od({canvas:i,stage:e,state:t,pause:n=null}){performance.mark("hiwi:start");let r=Jx(),s=document.documentElement.classList.contains("has-story"),o=!1,a=!0,l=0,c=new xi({canvas:i,antialias:!r.bloom,powerPreference:"high-performance",alpha:!1,stencil:!1,preserveDrawingBuffer:!s});c.outputColorSpace=St,c.toneMapping=hs,c.toneMappingExposure=1,c.shadowMap.enabled=!0,c.shadowMap.type=Zl,c.shadowMap.autoUpdate=!1,c.shadowMap.needsUpdate=!0,c.setClearColor(xn.bg,1);let u=new An;u.background=new Ce(xn.bg),u.matrixWorldAutoUpdate=!1;let h=window.SceneIdle,p=A=>new Promise(U=>setTimeout(U,A));n||(n=(A=200,U=900)=>h?h.quiet(A,U):p(A));let d=t.buildLog=[],g=performance.now(),x=async A=>{d.push({step:A,ms:Math.round(performance.now()-g)}),await n(),g=performance.now()};c.setDrawingBufferSize(Math.max(1,e.clientWidth),Math.max(1,e.clientHeight),Math.min(window.devicePixelRatio||1,r.maxDpr)),await x("renderer");let m=xh(),f=wh(),{camera:y}=f,M=bh(u,r),v=M.group.children.find(A=>A.castShadow&&A.shadow),P=new Float64Array(48).fill(NaN),E=v?[v.matrixWorld.elements,v.target.matrixWorld.elements,v.shadow.camera.projectionMatrix.elements]:[],R=Ch(),L=Xh({materials:m});await x("grid+floor");let w=Zh({materials:m});await x("walls");let b=Jh({materials:m});await x("desks");let I=Kh({materials:m});await x("storage");let k=Qh({materials:m});await x("island");let O=td({materials:m});await x("workstation");let V=nd({materials:m});await x("props");let W=sd({quality:r});Dh(),qh(),await x("atmosphere");let H=()=>{},te=id({workstation:O,stage:e,onChange:()=>H(),onOpen:()=>{if(window.WorksPlayer?.showShelf?.(0))return;let A=matchMedia("(prefers-reduced-motion: reduce)").matches;document.getElementById("chapter-work")?.scrollIntoView({behavior:A?"auto":"smooth",block:"start"})},isAvailable:()=>!o&&a&&!document.hidden&&(!s||Q())});[R,W,L,w,b,I,k,O,V,te].forEach(A=>u.add(A.group)),M.setPractical(b.lampPositions[0],O.lampPosition);let ue=[...b.bulbs,O.bulb];await x("assemble"),await n(250,800,!0),g=performance.now(),yh(u,vh(c)),await x("environment");let ce=r.bloom?Rh(c,u,y):null,ge=!!ce,Ee=Math.min(window.devicePixelRatio||1,r.maxDpr),He={w:0,h:0,x:0,y:0},Z=0,ne=new oe,xe=(A,U)=>(c.getDrawingBufferSize(ne),ne.x!==Math.floor(A*Ee)||ne.y!==Math.floor(U*Ee));function ee(){if(o)return;let A=Math.max(1,e.clientWidth),U=Math.max(1,e.clientHeight),B=c.getPixelRatio()!==Ee;if(!(A===He.w&&U===He.h&&!B))return He.w=A,He.h=U,He.x=e.offsetLeft,He.y=e.offsetTop,B?c.setDrawingBufferSize(A,U,Ee):xe(A,U)&&c.setSize(A,U,!1),ce?.setSize(A,U,Ee),f.resize(A,U),Z++,c.shadowMap.needsUpdate=!0,!_&&(!s||K>0)&&T(),!0}let Se=typeof ResizeObserver<"u"?new ResizeObserver(ee):null;Se?.observe(e),Se||window.addEventListener("resize",ee,{passive:!0});let Ae=0,De=0,at=NaN,Oe=-1,Ye=NaN,F=NaN,_t=0,Be=0;function Pe(A,U,B=!1){let D=A!==at||Oe!==Z,$=Tt(Ve(A,...Je.unity));D&&R.update(A),W.update(A,U),O.animate(U),D&&(L.update(A),w.update(A,U),b.update(A),I.update(A),k.update(A),O.update(A),V.update(A),ue.forEach(ve=>ve.mat.emissiveIntensity=.2+2.4*$),f.update(A));let ae=te.update(A,y,He,B);if(D&&(M.update({unity:$}),ce?.setGrade($),at=A,Oe=Z),D||ae){u.updateMatrixWorld(),Be++;let ve=Math.min(A,Je.props[1]),be=O.target.group.position.y;(ve!==Ye||be!==F)&&(c.shadowMap.needsUpdate=!0,Ye=ve,F=be)}}let Me=!1;function ze(){if(!v)return;v.updateWorldMatrix(!0,!1),v.target.updateWorldMatrix(!0,!1);let A=0;for(let U of E)for(let B of U)B!==P[A]&&(P[A]=B,c.shadowMap.needsUpdate=!0),A++;v.shadow.needsUpdate&&(c.shadowMap.needsUpdate=!0)}function we(A=!0){if(o||!a)return;Mh(),ze();let U=c.shadowMap.enabled&&c.shadowMap.needsUpdate;ce?ce.render():c.render(u,y),U&&_t++,A&&!Me&&(performance.mark("hiwi:live"),Me=!0,e.classList.add("is-live"))}function T(){o||(Pe(Ae,De),we())}let _=!1,z=0,J=0,j=0,Y=0,ye=!1,K=0,se=c.extensions.has("KHR_parallel_shader_compile"),Ue=!s,re=!1,le=()=>{},Re=null,_e=0,he=()=>{},We=0,Fe=0,lt=e.parentElement,N=e.closest(".story"),de=()=>getComputedStyle(i).visibility!=="hidden"&&parseFloat(getComputedStyle(lt).opacity)>.01,q=()=>typeof t.visible=="boolean"?t.visible:de(),Q=()=>!o&&a&&ye&&!document.hidden&&q();function fe(){return typeof t.override=="number"?t.override:t.progress}H=()=>{o||!a||!_&&(!s||Q())&&(Ae=fe(),T())};function pe(A){if(o||!_)return;z=requestAnimationFrame(pe);let U=Math.min(.05,(A-J)/1e3||.016);if(J=A,De+=U,!a||!ye||document.hidden||(typeof t.visible=="boolean"?!t.visible:j++%10===0&&!de())){Ze();return}Ae=fe(),T(),K++,ie(U)}function ie(A){t.noAdapt||(Y=A>.028?Y+1:Math.max(0,Y-2),!(Y<60)&&(Y=0,Ee>1?(Ee=Math.max(1,Ee-.25),ee()):ce&&ge&&(ge=!1,ce.setBloom(!1))))}function Te(){if(!(o||!a||_)){if(!Ue){if(re)return;re=!0,tt=!0,pt();let A=l;Pe(fe(),De),ri().then(()=>{o||!a||A!==l||(performance.mark("hiwi:primed"),Ue=!0,re=!1,le())});return}_=!0,J=performance.now(),Ae=fe(),z=requestAnimationFrame(pe)}}function Ze(){_=!1,cancelAnimationFrame(z),z=0}if(s){let A=Ze;he=()=>{if(clearTimeout(_e),_e=0,o||!a||!ye||document.hidden){A();return}Q()?Te():(A(),typeof t.visible!="boolean"&&(_e=setTimeout(he,200)))},document.addEventListener("visibilitychange",he),le=he,Ze=()=>{A(),o||he()},typeof IntersectionObserver<"u"?(Re=new IntersectionObserver(([U])=>{o||(ye=U.isIntersecting,ye?he():Ze())}),Re.observe(e)):(ye=!0,he()),N?.addEventListener("sceneprogress",he)}else Ae=1,t.progress=1,We=requestAnimationFrame(()=>{We=0,ee()}),document.fonts?.ready.then(()=>{o||(Fe=requestAnimationFrame(()=>{Fe=0,T()}))});function G(A){o||(A.preventDefault(),a=!1,l++,Ue=!1,re=!1,jt=null,it.length=0,Ze())}function Le(){o||(a=!0,Z++,Ye=F=NaN,c.shadowMap.needsUpdate=!0,s?le():T())}i.addEventListener("webglcontextlost",G),i.addEventListener("webglcontextrestored",Le),ee(),d.push({step:"post+size",ms:Math.round(performance.now()-g)});let Xe=new qt(1,1),it=[],Mt=t.prepareLog=[],tt=!1,pt=()=>{},ot=new Promise(A=>{pt=A}),Ht=(A,U=4e3)=>tt?Promise.resolve():Promise.race([ot,n(A,U)]);function Pt(A,U,B=null){let D=c.getRenderTarget();c.setRenderTarget(U?null:Xe);try{return se?c.compileAsync(A,y,B):(c.compile(A,y,B),Promise.resolve())}finally{c.setRenderTarget(D)}}function hn(){let A={[wn]:Ct,[Ct]:wn,[en]:en},U=new dt,B=new Set;return u.traverse(D=>{if(!D.isMesh||!(D.castShadow||D.userData.shadowCaster)||!D.material||Array.isArray(D.material))return;let $=D.material,ae=$.shadowSide??A[$.side],ve=[ae,!!$.map,!!D.isInstancedMesh,!!D.instanceColor].join();if(B.has(ve))return;B.add(ve);let be=new es({depthPacking:cc,side:ae,map:$.map||null}),Ge=D.isInstancedMesh?new yr(D.geometry,be,1):new st(D.geometry,be);D.instanceColor&&(Ge.instanceColor=D.instanceColor),U.add(Ge)}),it.push(U),U}let rn=null;function Vt(A){let U=new dt;rn||(rn=new kt(2,2));for(let[B,D]of ce.programs())D===A&&U.add(new st(rn,B));return it.push(U),U}function zi(A){A.traverse(U=>{let B=U.material?Array.isArray(U.material)?U.material:[U.material]:[];for(let D of B)c.properties.get(D).currentProgram?.getUniforms()})}function ki(){let A=new Set;return u.traverse(U=>{let B=U.material?Array.isArray(U.material)?U.material:[U.material]:[];for(let D of B){let $=[...Object.values(D),...Object.values(D.uniforms||{}).map(ae=>ae?.value)];for(let ae of $)ae?.isTexture&&!ae.isRenderTargetTexture&&A.add(ae)}}),[...A]}let jt=null;function ri(){if(jt)return jt;let A=l;return jt=(async()=>{let U=[...u.children.filter($=>!$.isLight).map(($,ae)=>[`room${ae}`,()=>Pt($,!ce,u),!0]),["room",()=>Pt(u,!ce)],["shadows",()=>Pt(hn(),!1,u)],ce&&["post",()=>Pt(Vt(!1),!1).then(()=>Pt(Vt(!0),!0))]].filter(Boolean),B=[],D=performance.now();for(let[$,ae,ve]of U){if(await Ht(300),o||A!==l)return!1;let be=performance.now(),Ge=ae();if(Mt.push({step:$,sync:Math.round(performance.now()-be)}),ve){B.push(Ge);continue}await Promise.all(B.splice(0)),await Ge,Mt.push({step:$,ms:Math.round(performance.now()-D),programs:c.info.programs?.length})}se||await Ht(400,1500);for(let $ of[u,...it]){if(await Ht(150,1500),o||A!==l)return!1;let ae=performance.now();zi($),Mt.push({step:"firstUse",ms:Math.round(performance.now()-ae)})}for(let $ of ki()){if(await Ht(150,1500),o||A!==l)return!1;let ae=performance.now();_h($),c.initTexture($),Mt.push({step:"texture",ms:Math.round(performance.now()-ae)})}return Mt.push({step:"textures",programs:c.info.programs?.length}),!0})().catch(U=>(o||console.warn("HiWi lab: shader preparation skipped \u2014",U),!1)),jt}return{warm:s?ri():Promise.resolve(!1),renderer:c,scene:u,camera:y,quality:r,workstation:O,screenRect(){let A=O.target.preview.mesh,U=e.getBoundingClientRect();A.geometry.boundingBox||A.geometry.computeBoundingBox();let B=A.geometry.boundingBox;A.updateWorldMatrix(!0,!1);let D=[B.min.x,B.max.x].flatMap(ve=>[B.min.y,B.max.y].map(be=>new C(ve,be,(B.min.z+B.max.z)/2).applyMatrix4(A.matrixWorld).project(y))),$=D.map(ve=>U.left+(ve.x*.5+.5)*U.width),ae=D.map(ve=>U.top+(-ve.y*.5+.5)*U.height);return{x:Math.min(...$),y:Math.min(...ae),width:Math.max(...$)-Math.min(...$),height:Math.max(...ae)-Math.min(...ae)}},stats:()=>({running:_,inView:ye,drawn:K,dpr:Ee,bloom:ge,L:Ae,shadowUpdates:_t,matrixUpdates:Be,contextAvailable:a,manualInput:te.stats()}),tune:({dpr:A,bloom:U,shadows:B}={})=>{o||(typeof A=="number"&&(Ee=A),typeof U=="boolean"&&ce&&(ge=U,ce.setBloom(U)),typeof B=="boolean"&&(c.shadowMap.enabled=B,c.shadowMap.needsUpdate=!0,u.traverse(D=>D.material&&(D.material.needsUpdate=!0))),!ee()&&!_&&(!s||K>0)&&T())},dispose(){o||(o=!0,Ze(),clearTimeout(_e),pt(),Xe.dispose(),cancelAnimationFrame(We),cancelAnimationFrame(Fe),Se?.disconnect(),window.removeEventListener("resize",ee),Re?.disconnect(),N?.removeEventListener("sceneprogress",he),document.removeEventListener("visibilitychange",he),i.removeEventListener("webglcontextlost",G),i.removeEventListener("webglcontextrestored",Le),te.dispose(),ce?.dispose(),c.dispose())}}}var un=Er.clamp,Ic=(i,e,t)=>{let n=un((t-i)/(e-i),0,1);return n*n*(3-2*n)};function Kx(){let i=matchMedia("(pointer: coarse)").matches,e=Math.min(window.innerWidth,window.innerHeight)<721,t=navigator.deviceMemory||8,n=navigator.hardwareConcurrency||8,r=i||e||t<=4||n<=4;return{low:r,count:t<=2?3500:r?5500:12e3,maxDpr:t<=2?1:r?1.25:1.5,pointSize:r?1.8:1.7}}function ld(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Qx(i){let e=i.bounds,n=e?.min?.length===3&&e?.max?.length===3&&e.min.every((o,a)=>Number.isFinite(o)&&Number.isFinite(e.max[a])&&(a===2?e.max[a]>=o:e.max[a]>o))?new mn(new C().fromArray(e.min),new C().fromArray(e.max)):new mn().setFromBufferAttribute(new ut(i.positions,3)),r=n.getCenter(new C),s=n.getSize(new C);if(n.isEmpty()||!Number.isFinite(s.x+s.y)||s.x<=0||s.y<=0)throw new Error("Portrait geometry has no visible surface");return{center:r,size:s}}function jx(i,e,t){let n=ld(6270189),r=i.positions,s=i.indices,o=Math.floor(s.length/3),a=new Float64Array(o),l=0;for(let x=0;x<o;x++){let m=s[x*3]*3,f=s[x*3+1]*3,y=s[x*3+2]*3,M=((r[m+1]+r[f+1]+r[y+1])/3-e.center.y)/e.size.y+.5,v=1+2.5*Ic(.45,.82,M),P=Math.abs((r[f]-r[m])*(r[y+1]-r[m+1])-(r[f+1]-r[m+1])*(r[y]-r[m]));l+=P*v,a[x]=l}if(!Number.isFinite(l)||l<=0)throw new Error("Portrait geometry has no triangles");let c=new Float32Array(t*3),u=new Float32Array(t*3),h=new Float32Array(t*3),p=new Float32Array(t*4),d=new Ce;for(let x=0;x<t;x++){let m=n()*l,f=0,y=o-1;for(;f<y;){let O=f+y>>>1;a[O]<m?f=O+1:y=O}let M=[s[f*3],s[f*3+1],s[f*3+2]],v=Math.sqrt(n()),P=n(),E=[1-v,v*(1-P),v*P],R=0,L=0,w=0,b=0,I=0;for(let O=0;O<3;O++){let V=M[O]*3,W=E[O];R+=r[V]*W,L+=r[V+1]*W,w+=i.colors[V]*W,b+=i.colors[V+1]*W,I+=i.colors[V+2]*W}c.set([R-e.center.x,L-e.center.y,0],x*3),d.setRGB(w,b,I,St),u.set([d.r,d.g,d.b],x*3),h.set([(n()-.5)*1.7,n(),n()-.5],x*3);let k=1-un((L-e.center.y)/e.size.y+.5,0,1);p.set([n(),.55+Math.pow(n(),5)*1.4,n()<.045?1:0,k],x*4)}let g=new yt;return g.setAttribute("position",new ut(c,3)),g.setAttribute("color",new ut(u,3)),g.setAttribute("aCloud",new ut(h,3)),g.setAttribute("aSeed",new ut(p,4)),g.setDrawRange(0,t),g}var $x=`
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
`,ad=`
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
`;function ev(i){let e=i.groupIds.length,t=new Float32Array(i.colors.length),n=new Float32Array(e*4),r=new Ce,s=ld(2119680269);for(let a=0;a<e;a++)r.setRGB(i.colors[a*3],i.colors[a*3+1],i.colors[a*3+2],St),t.set([r.r,r.g,r.b],a*3),n.set([s(),s(),s(),s()],a*4);let o=new yt;return o.setAttribute("position",new ut(i.positions,3)),o.setAttribute("color",new ut(t,3)),o.setAttribute("aGroup",new ut(i.groupIds,1)),o.setAttribute("aSeed",new ut(n,4)),o}var tv=`
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
`;function cd({canvas:i,container:e=i?.parentElement,state:t,portraitData:n,assetUrl:r,loadPortraitData:s,onError:o,settle:a}){if(!i||!e||!t)throw new Error("Portrait requires canvas, container, and state");let l=Kx(),c=new xi({canvas:i,alpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"});c.outputColorSpace=St,c.toneMapping=pn,c.setClearColor(0,0),c.autoClear=!1,c.debug.onShaderError=(G,Le,Xe,it)=>{let Mt=G.getProgramInfoLog(Le)||G.getShaderInfoLog(Xe)||G.getShaderInfoLog(it);throw new Error(`Portrait shader compilation failed: ${Mt||"unknown driver error"}`)};let u=new An,h=new On(-1,1,1,-1,.1,2e3);h.position.z=1e3;let p=G=>c.extensions.has("KHR_parallel_shader_compile")?c.compileAsync(G,h):Promise.resolve(c.compile(G,h)),d=Math.min(window.devicePixelRatio||1,l.maxDpr),g=l.count,x,m,f,y,M=64,v=0,P=0,E=0,R=!1,L=!1,w=!1,b=!0,I=0,k=!0,O=!1,V=!1,W=0,H=0,te=0,X=0,ue=0,ce=0,ge=0,Ee=0,He=[],Z=matchMedia("(prefers-reduced-motion: reduce)"),ne=!Z.matches,xe=1e3/(l.low?30:45),ee=0,Se=0,Ae=0,De=new oe,at=new oe,Oe=!1,Ye=0,F=!1,_t=0;function Be(){return!L&&!w&&R&&b&&!document.hidden}function Pe(){return un(Number(t.exitProgress)||0,0,1)}function Me(){return un(Number(t.workProgress)||0,0,1)}function ze(G){return t.textEnabled!==!1&&y&&(Number(t.textProgress?.[G])||0)>0&&(Number(t.textOpacity?.[G])||0)<1}function we(){if(t.workActive)return Me()>0&&Me()<.85;let G=Pe();return G>0?G<1:(Number(t.progress)||0)>0&&(Number(t.photoOpacity)||0)<1}function T(){if(!f||t.textEnabled===!1)return!1;if(t.workActive)return Me()>0&&(Number(t.workOpacity)||0)<1;let G=Pe();return G>0?G<1:[0,1,2].some(ze)}function _(){return Be()&&t.visible&&(we()||T())}function z(){if(!_()||!ne)return!1;let G=Number(t.progress)||0;return t.workActive?Me()>0&&Me()<.98:Pe()>0?Pe()<.99:G>.035&&G<.9||[0,1,2].some(Le=>ze(Le)&&(Number(t.textProgress[Le])||0)<.98)}function J(){!I&&Be()&&(k&&_()||O||z())&&(I=requestAnimationFrame(Ue))}function j(G=!1){if(L)return;let Le=t.frame,Xe=t.viewport,it=t.portal,Mt=[t.progress,t.visible,t.photoOpacity,t.interactive,Le?.x,Le?.y,Le?.width,Le?.height,Xe?.width,Xe?.height,it?.x,it?.y,it?.width,it?.height,it?.mix,t.exitProgress,t.exitTarget?.x,t.exitTarget?.y,t.workActive,t.textEnabled,t.workProgress,t.workOpacity,t.workOrigin?.x,t.workOrigin?.y,t.workOrigin?.width,t.workOrigin?.height,t.workOffset?.x,t.workOffset?.y,...[0,1,2].flatMap(tt=>[t.textProgress?.[tt],t.textOpacity?.[tt],t.textOffsets?.[tt]?.x,t.textOffsets?.[tt]?.y])];(G||Mt.some((tt,pt)=>tt!==He[pt]))&&(k=!0),He=Mt,_()||(I&&cancelAnimationFrame(I),I=0,te=0,Se=0,ee=0,O=V,Ye=0,le()),t.interactive===!1&&le(),Xe&&(Xe.width!==W||Xe.height!==H)&&Y(),J()}function Y(){if(L)return;let G=e.getBoundingClientRect(),Le=t.viewport,Xe=Math.max(1,Math.round(Le?.width||G.width||window.innerWidth)),it=Math.max(1,Math.round(Le?.height||G.height||window.innerHeight));(Xe!==W||it!==H||c.getPixelRatio()!==d)&&(W=Xe,H=it,c.setPixelRatio(d),c.setSize(W,H,!1),h.left=-W/2,h.right=W/2,h.top=H/2,h.bottom=-H/2,h.updateProjectionMatrix(),k=!0),J()}function ye(){let G=t.frame||{x:0,y:0,width:W,height:H},Le=Number.isFinite(G.x)?G.x:0,Xe=Number.isFinite(G.y)?G.y:0,it=Math.max(1,Number.isFinite(G.width)?G.width:W),Mt=Math.max(1,Number.isFinite(G.height)?G.height:H),tt=Math.max(x.size.y,x.size.x/(it/Mt))*.55,pt=m.material.uniforms;pt.uTargetScale.value=Mt/(2*tt),pt.uTargetCenter.value.set(Le+it/2-W/2,H/2-Xe-Mt/2);let ot=t.portal,Ht=ot&&[ot.x,ot.y,ot.width,ot.height].every(Number.isFinite)&&ot.width>0&&ot.height>0,Pt=Ht?un(Number(ot.mix)||0,0,1):1,hn=Ht?Er.lerp(ot.width,W,Pt):W,rn=Ht?Er.lerp(ot.height,H,Pt):H,Vt=Ht?ot.x*(1-Pt):0,zi=Ht?ot.y*(1-Pt):0;pt.uViewport.value.set(hn,rn),pt.uFieldCenter.value.set(Vt+hn/2-W/2,H/2-zi-rn/2);let ki=t.exitTarget||{x:W/2,y:H/2};pt.uExitTarget.value.set(ki.x-W/2,H/2-ki.y);let jt=t.workOrigin||{x:W/2,y:H/2,width:W*.4,height:H*.3};pt.uWorkOrigin.value.set(jt.x+jt.width/2-W/2,H/2-jt.y-jt.height/2,jt.width,jt.height);let ri=t.workOffset||{x:W/2,y:H/2},S=y?.groupBounds?.[3]||{width:1,height:1};if(pt.uWorkTarget.value.set(ri.x+S.width/2-W/2,H/2-ri.y-S.height/2),f){let A=f.material.uniforms;A.uCanvas.value.set(W,H),A.uFieldCenter.value.copy(pt.uFieldCenter.value),A.uFieldSize.value.copy(pt.uViewport.value),A.uExitTarget.value.copy(pt.uExitTarget.value),A.uWorkOrigin.value.copy(pt.uWorkOrigin.value),A.uTextProgress.value.set(...[0,1,2].map(U=>un(Number(t.textProgress?.[U])||0,0,1)),Me()),A.uTextOpacity.value.set(...[0,1,2].map(U=>un(Number(t.textOpacity?.[U])||0,0,1)),un(Number(t.workOpacity)||0,0,1)),A.uTextOffsets.value.forEach((U,B)=>{let D=B===3?ri:t.textOffsets?.[B];U.set(Number(D?.x)||0,Number(D?.y)||0)})}}function K(){c.setViewport(0,0,W,H),c.clear(!0,!1,!1),V=!1,O=!1,ge=0}function se(){t.noAdapt||ce>=2||(g=Math.max(2400,Math.floor(g*.72)),m.geometry.setDrawRange(0,g),d=Math.max(.8,d-.2),ce++,Y(),X=0)}function Ue(G){if(I=0,!Be()){te=0,Se=0,ee=0;return}if(!_()){O&&K(),k=!1,te=0,Se=0,ee=0;return}let Le=z(),Xe=k;if(!Xe&&(!Le||G<ee-.5)){Le&&J();return}let it=Se?Math.min(.06,Math.max(0,(G-Se)/1e3)):0;Se=G,Le&&(Ae+=it),F&&G>=_t&&(F=!1),De.lerp(at,1-Math.exp(-it*14));let Mt=F&&Le&&t.interactive!==!1?1:0;Ye+=(Mt-Ye)*(1-Math.exp(-it*(Mt?14:4.3))),Ye<.001&&!Mt&&(Ye=0);let tt=un(Number(t.progress)||0,0,1),pt=t.workActive||Pe()>0?1:1-un(Number(t.photoOpacity)||0,0,1),ot=m.material.uniforms;if(ot.uProgress.value=tt,ot.uPixelRatio.value=d,ot.uOpacity.value=pt,ot.uTime.value=Ae,ot.uMotionStrength.value=ne?t.workActive||Pe()>0?1:Ic(.035,.12,tt)*(1-Ic(.74,.9,tt)):0,ot.uPointer.value.copy(De),ot.uPointerStrength.value=Ye,ot.uExitProgress.value=Pe(),ot.uWorkProgress.value=Me(),ot.uWorkMode.value=t.workActive?1:0,m.visible=we(),m.geometry.setDrawRange(0,t.workActive?Math.min(g,l.low?280:480):g),f){let Vt=f.material.uniforms;Vt.uTime.value=Ae,Vt.uPixelRatio.value=d,Vt.uMotionStrength.value=ne?1:0,Vt.uPointerStrength.value=Ye,Vt.uPointer.value.copy(De),Vt.uExitProgress.value=Pe(),Vt.uWorkMode.value=t.workActive?1:0,f.visible=T()}ye();let Ht=performance.now();K();try{c.render(u,h)}catch(Vt){Te(),o?.(Vt);return}ge=c.info.render.calls,V=m.visible||!!f?.visible,ue++,k=!1;let Pt=G-te,hn=performance.now()-Ht,rn=Xe?1e3/60:xe;te&&Pt<150&&(Le||Math.abs(tt-Ee)>5e-4)&&(X=Pt>rn*1.8||hn>20?X+1:Math.max(0,X-2),X>=18&&se()),te=G,Ee=tt,ee=Xe||!ee?G+xe:Math.max(ee+xe,G+1),(k||Le)&&J()}function re(G){return!!G?.closest?.('nav, .nav-wrap, a, button, input, select, textarea, summary, [role="button"], [role="link"], [contenteditable], [data-no-particles]')}function le(){F=!1,_t=0}function Re(G,Le,Xe,it=!1){if(!z()||t.interactive===!1||re(G.target)){le();return}at.set(Le-W/2,H/2-Xe),(!Oe||Ye<.001)&&De.copy(at),Oe=!0,F=!0,_t=it?1/0:performance.now()+700,k=!0,J()}function _e(G){if(G.isPrimary===!1||G.pointerType==="mouse"&&G.buttons>1){le();return}Re(G,G.clientX,G.clientY,G.pointerType==="touch")}function he(G){!G.relatedTarget&&G.pointerType!=="touch"&&le()}function We(G){if(G.touches.length!==1){le();return}let Le=G.touches[0];Re(G,Le.clientX,Le.clientY,!0)}function Fe(){ne=!Z.matches,le(),Ye=0,Se=0,ee=0,j(!0)}function lt(){te=0,j(!0)}function N(G){G.preventDefault(),w=!0,j(),o?.(new Error("Portrait WebGL context was lost"))}function de(){w=!1,j(!0)}window.addEventListener("pointermove",_e,{passive:!0}),window.addEventListener("pointerdown",_e,{passive:!0}),window.addEventListener("pointerup",le,{passive:!0}),window.addEventListener("pointercancel",le,{passive:!0}),window.addEventListener("pointerout",he,{passive:!0}),window.addEventListener("touchstart",We,{passive:!0}),window.addEventListener("touchmove",We,{passive:!0}),window.addEventListener("touchend",le,{passive:!0}),window.addEventListener("touchcancel",le,{passive:!0}),window.addEventListener("blur",le),Z.addEventListener?Z.addEventListener("change",Fe):Z.addListener(Fe),document.addEventListener("visibilitychange",lt),i.addEventListener("webglcontextlost",N),i.addEventListener("webglcontextrestored",de);let q=typeof ResizeObserver<"u"?new ResizeObserver(Y):null;q?.observe(e),q||window.addEventListener("resize",Y);let Q=typeof IntersectionObserver<"u"?new IntersectionObserver(G=>{b=G.some(Le=>Le.isIntersecting),j(!0)}):null;Q?.observe(i),Y();let fe=Promise.resolve().then(()=>n??s?.(r)).then(async G=>{if(L)throw new Error("Portrait was disposed before loading finished");if(!G?.positions?.length||G.positions.length%3||!G.indices?.length||G.indices.length%3||G.colors?.length!==G.positions.length)throw new Error("Portrait asset must include matching positions/colors and triangle indices");x=Qx(G),E=G.indices.length/3;let Le=jx(G,x,l.count),Xe=c.getContext();if(M=Xe.getParameter(Xe.ALIASED_POINT_SIZE_RANGE)[1],m=new ti(Le,new Rt({uniforms:{uProgress:{value:0},uTime:{value:0},uMotionStrength:{value:0},uPointerStrength:{value:0},uOpacity:{value:0},uPointSize:{value:l.pointSize},uPixelRatio:{value:d},uPointLimit:{value:M},uTargetScale:{value:1},uBottomY:{value:-x.size.y*.5},uPortraitHeight:{value:x.size.y},uPortraitWidth:{value:x.size.x},uExitProgress:{value:0},uWorkProgress:{value:0},uWorkMode:{value:0},uExitTarget:{value:new oe},uWorkTarget:{value:new oe},uWorkOrigin:{value:new rt},uTargetCenter:{value:new oe},uViewport:{value:new oe(W,H)},uFieldCenter:{value:new oe},uPointer:{value:new oe}},vertexShader:$x,fragmentShader:ad,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})),m.frustumCulled=!1,u.add(m),Y(),ye(),await p(u),await a?.(),L)throw new Error("Portrait was disposed before shader preparation finished");return K(),c.render(u,h),R=!0,j(!0),Ze}).catch(G=>{throw L||(Te(),o?.(G)),G});async function pe(G){if(await fe,L)throw new Error("Portrait has been disposed");if(!G?.positions?.length||G.positions.length%3||G.colors?.length!==G.positions.length||G.groupIds?.length!==G.positions.length/3||G.groupBounds?.length!==4)throw new Error("Text targets require matching positions/colors/groups and four group bounds");let Le=++P,Xe=l.low?1800:4e3;if(G.groupIds.length>Xe)throw new Error(`Text targets exceed the ${Xe}-point device budget`);let it=ev(G),Mt=new Rt({uniforms:{uTextProgress:{value:new rt},uTextOpacity:{value:new rt(1,1,1,1)},uTextOffsets:{value:Array.from({length:4},()=>new oe)},uTextBounds:{value:G.groupBounds.map(ot=>new oe(ot.width,ot.height))},uCanvas:{value:new oe(W,H)},uFieldCenter:{value:new oe},uFieldSize:{value:new oe(W,H)},uExitTarget:{value:new oe},uWorkOrigin:{value:new rt},uPointer:{value:new oe},uExitProgress:{value:0},uWorkMode:{value:0},uTime:{value:0},uMotionStrength:{value:0},uPointerStrength:{value:0},uPointSize:{value:l.low?1.65:1.6},uPixelRatio:{value:d},uPointLimit:{value:M},uOpacity:{value:1}},vertexShader:tv,fragmentShader:ad,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),tt=new ti(it,Mt);tt.frustumCulled=!1,tt.visible=!1;let pt=new An;pt.add(tt);try{if(tt.visible=!0,await p(pt),tt.visible=!1,await a?.(),L)throw new Error("Portrait disposed while preparing text")}catch(ot){throw pt.remove(tt),it.dispose(),Mt.dispose(),ot}return pt.remove(tt),Le!==P?(it.dispose(),Mt.dispose(),G.groupBounds):(u.add(tt),f&&(u.remove(f),f.geometry.dispose(),f.material.dispose()),f=tt,y=G,v=G.groupIds.length,ye(),j(!0),G.groupBounds)}function ie(){let G=un(Number(t.progress)||0,0,1),Le=un(Number(t.photoOpacity)||0,0,1),Xe=t.visible?t.workActive?"work-title":Pe()>0&&Pe()<1?"intro-disintegration":T()&&Le===1?"text-assembly":Le===1?"photo":G<=.005?"waiting":G<.58?"rising-stars":G<.9?"face-assembly":G<.94?"settled-dots":"photo-crossfade":"hidden";return{ready:R,visible:!!t.visible,running:!!I,particles:g,textParticles:v,textBudget:l.low?1800:4e3,textEnabled:t.textEnabled!==!1,textGroups:y?.groupBounds.map(it=>it.count)||[],textProgress:[0,1,2].map(it=>Number(t.textProgress?.[it])||0),textOpacity:[0,1,2].map(it=>Number(t.textOpacity?.[it])||0),exitProgress:Pe(),workActive:!!t.workActive,workProgress:Me(),workOpacity:un(Number(t.workOpacity)||0,0,1),dpr:d,drawCalls:ge,renderedFrames:ue,qualityReductions:ce,sourceTriangles:E,geometries:c.info.memory.geometries,textures:c.info.memory.textures,kind:"photographic-particles",interactive:z()&&t.interactive!==!1,motionActive:z(),motionEnabled:ne,ambientFps:l.low?30:45,motionTime:Ae,pointerStrength:Ye,pointerActive:F,portalFramed:!!t.portal,progress:G,photoOpacity:Le,phase:Xe}}function Te(){L||(L=!0,I&&cancelAnimationFrame(I),I=0,q?.disconnect(),Q?.disconnect(),window.removeEventListener("resize",Y),window.removeEventListener("pointermove",_e),window.removeEventListener("pointerdown",_e),window.removeEventListener("pointerup",le),window.removeEventListener("pointercancel",le),window.removeEventListener("pointerout",he),window.removeEventListener("touchstart",We),window.removeEventListener("touchmove",We),window.removeEventListener("touchend",le),window.removeEventListener("touchcancel",le),window.removeEventListener("blur",le),Z.removeEventListener?Z.removeEventListener("change",Fe):Z.removeListener(Fe),document.removeEventListener("visibilitychange",lt),i.removeEventListener("webglcontextlost",N),i.removeEventListener("webglcontextrestored",de),m?.geometry.dispose(),m?.material.dispose(),f?.geometry.dispose(),f?.material.dispose(),c.dispose(),c.forceContextLoss())}let Ze={ready:fe,update:j,resize:Y,setTextTargets:pe,stats:ie,dispose:Te};return Ze}var Ho=new Map,nv=[[420,39],[409,41],[404,39],[399,43],[389,42],[383,48],[377,47],[369,54],[366,53],[360,62],[353,63],[349,70],[345,71],[339,79],[334,79],[330,89],[324,88],[322,98],[316,99],[315,106],[309,111],[310,116],[303,125],[303,133],[298,140],[299,148],[294,154],[296,163],[291,170],[294,179],[292,187],[298,195],[299,203],[304,208],[303,216],[308,222],[307,229],[314,237],[322,243],[324,247],[324,254],[325,261],[327,272],[329,280],[333,286],[337,296],[344,304],[343,309],[347,313],[352,314],[354,317],[355,318],[358,318.5],[360,319],[362,322],[365,326],[368,330],[371,334],[374.5,339],[378,344],[381,349],[383,354],[382.8,360],[382.7,370],[383.1,380],[383.6,387],[383.8,391],[382.8,393],[372,393.8],[364,395],[360,397.5],[358,400],[355,408],[351,416],[342,423],[330,435],[313,443],[294,449],[276,459],[255,468],[236,477],[217,487],[204,497],[191,512],[181,527],[169,547],[159,567],[153,587],[155,607],[156,625],[160,653],[162,680],[164,700],[166,760],[183,830],[201,896],[225,941],[708,941],[750,933],[799,917],[816,897],[826,850],[831,816],[829,774],[817,719],[807,672],[803,648],[797,626],[790,607],[785,588],[783,573],[778,556],[773,542],[767,528],[759,516],[750,505],[739,495],[726,487],[714,480],[700,474],[690,469],[678,466],[667,462],[654,460],[643,455],[634,451],[624,447],[614,442],[604,438],[593,433],[586,429],[578,424],[570,419],[565,412],[561,404],[552,400],[546.5,398],[543.2,394],[540.8,390],[539.4,385],[538.2,380],[537.6,375],[536.8,370],[536.3,365],[535.8,360],[535.3,355],[535.1,350],[534.8,345],[534.3,340],[533.7,335],[534.3,330],[538.2,325],[540.4,320],[542.4,315],[543.6,310],[544.8,305],[545.3,300],[546.2,295],[547,290],[547.6,285],[547.7,280],[547.4,278],[554,277],[560.7,276],[563.5,274],[565,272],[566,270],[567,265],[567,256],[566,249],[565,243],[565,235],[562,223],[563,218],[560,210],[562,200],[561,192],[558,184],[559,177],[555,168],[554,156],[550,148],[549,138],[545,126],[540,116],[540,107],[531,100],[526,89],[519,86],[515,80],[508,77],[502,69],[494,68],[488,61],[479,59],[472,54],[461,54],[455,47],[447,46],[440,42],[433,44]];function iv(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[(n+i.length-1)%i.length],s=i[n],o=r[1]<=e,a=s[1]<=e;if(o!==a){let l=(e-r[1])/(s[1]-r[1]);t.push([r[0]+(s[0]-r[0])*l,e])}a&&t.push(s.slice())}return t}function rv(i,e=1.25){let t=i.map((o,a)=>{let l=i[(a+i.length-1)%i.length],c=i[(a+1)%i.length],u=Math.hypot(o[0]-l[0],o[1]-l[1]),h=Math.hypot(c[0]-o[0],c[1]-o[1]),p=Math.min(e,u*.35,h*.35);return{point:o,enter:o.map((d,g)=>d+(l[g]-d)*p/u),leave:o.map((d,g)=>d+(c[g]-d)*p/h)}}),n=[],r=o=>o.map(a=>Number(a.toFixed(3))).join(","),s=[`M${r(t[0].enter)}`];for(let{point:o,enter:a,leave:l}of t){s.push(`L${r(a)}Q${r(o)} ${r(l)}`),n.push(a);for(let c of[.25,.5,.75,1])n.push(o.map((u,h)=>(1-c)**2*a[h]+2*(1-c)*c*u+c**2*l[h]))}return{samples:n,path:s.join("")+"Z"}}var dd=rv(nv),fd=iv(dd.samples,700),Hn={left:150,top:37,width:662.9574468085107,height:663},{left:pd,top:md}=Hn,ud=fd.map(([i,e])=>[(i-pd)/Hn.width,(e-md)/Hn.height]),sv=`<svg xmlns="http://www.w3.org/2000/svg" width="1672" height="941" viewBox="0 0 1672 941"><path fill="white" d="${dd.path}"/></svg>`,ov=`url("data:image/svg+xml,${encodeURIComponent(sv)}")`,Lc=Object.freeze({sourceWidth:1672,sourceHeight:941,sourceRect:Hn,sourceContour:fd,normalizedContour:ud,maskImage:ov,aspect:Hn.width/Hn.height,clipPath:`polygon(${ud.map(([i,e])=>`${(i*100).toFixed(6)}% ${(e*100).toFixed(6)}%`).join(",")})`,imageCss:{width:`${(1672/Hn.width*100).toFixed(6)}%`,height:`${(941/Hn.height*100).toFixed(6)}%`,left:`${(-pd/Hn.width*100).toFixed(6)}%`,top:`${(-md/Hn.height*100).toFixed(6)}%`}});function xs(i){return i.reason||new DOMException("Portrait loading was cancelled.","AbortError")}function av(i,e){return e?e.aborted?Promise.reject(xs(e)):new Promise((t,n)=>{let r=()=>n(xs(e));e.addEventListener("abort",r,{once:!0}),i.then(t,n).finally(()=>e.removeEventListener("abort",r))}):i}function lv(i){if(Ho.has(i.href))return Ho.get(i.href);let e=new Promise((t,n)=>{let r=document.createElement("script");r.async=!0,r.src=i.href,r.onload=()=>{r.remove();let s=globalThis.PortraitEmbeddedData;if(s?.version!==6||s.encoding!=="base64"||typeof s.data!="string"){n(new Error("Invalid embedded portrait asset."));return}try{let o=atob(s.data),a=new Uint8Array(o.length);for(let l=0;l<o.length;l++)a[l]=o.charCodeAt(l);globalThis.PortraitEmbeddedData===s&&delete globalThis.PortraitEmbeddedData,t(a.buffer)}catch(o){n(o)}},r.onerror=()=>{r.remove(),n(new Error("Embedded portrait asset unavailable."))},document.head.append(r)});return Ho.set(i.href,e),e.catch(()=>Ho.delete(i.href)),e}function hd(i,{textureUrl:e=""}={}){let t=new DataView(i);if(i.byteLength<40||t.getUint32(0,!1)!==1380208689)throw new Error("Invalid portrait asset.");let n=t.getUint32(4,!0),r=t.getUint32(8,!0);if(t.getUint32(36,!0)!==1||!n||n>=65536||r%3||i.byteLength!==40+n*13+r*2)throw new Error("Unsupported portrait asset layout.");let o=[0,1,2].map(d=>t.getFloat32(12+d*4,!0)),a=[0,1,2].map(d=>t.getFloat32(24+d*4,!0));if(o.some((d,g)=>!Number.isFinite(d)||!Number.isFinite(a[g])||a[g]<=d))throw new Error("Invalid portrait bounds.");let l=new Float32Array(n*3),c=new Float32Array(n*3),u=new Float32Array(n*2),h=new Uint16Array(r),p=40;for(let d=0;d<l.length;d++){let g=d%3;l[d]=o[g]+t.getUint16(p,!0)/65535*(a[g]-o[g]),p+=2}for(let d=0;d<u.length;d++)u[d]=t.getUint16(p,!0)/65535,p+=2;for(let d=0;d<c.length;d++)c[d]=t.getUint8(p++)/255;for(let d=0;d<r;d++)if(h[d]=t.getUint16(p,!0),p+=2,h[d]>=n)throw new Error("Invalid portrait triangle.");return{positions:l,colors:c,uvs:u,indices:h,textureUrl:e,bounds:{min:o,max:a},presentation:Lc,kind:"photo-depth-approximation"}}async function gd({signal:i,baseUrl:e}={}){let t=new URL(e||"assets/face/",document.baseURI),n=new URL("portrait-depth.bin.gz?v=6",t),r=new URL("portrait-depth.bin?v=6",t),s=new URL("../roshan-reveal-after.webp",t).href;if(i?.aborted)throw xs(i);if(t.protocol==="file:"){let u=new URL("portrait-data.js?v=6",t),h=await av(lv(u),i);if(i?.aborted)throw xs(i);return hd(h,{textureUrl:s})}let a=await fetch(typeof DecompressionStream=="function"?n:r,{signal:i,cache:"force-cache"});if(!a.ok)throw new Error(`Portrait asset unavailable (${a.status}).`);let l=await a.arrayBuffer(),c=new Uint8Array(l,0,Math.min(l.byteLength,2));if(c[0]===31&&c[1]===139&&(l=await new Response(new Blob([l]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()),i?.aborted)throw xs(i);return hd(l,{textureUrl:s})}function cv(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function uv(i){let e=i.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);return e?[Number(e[1])/255,Number(e[2])/255,Number(e[3])/255]:[.9,.91,.94]}function hv(i,e){return e.textTransform==="uppercase"?i.toUpperCase():e.textTransform==="lowercase"?i.toLowerCase():i}function dv(i,e){if(!i)return null;let t=i.getBoundingClientRect(),n=t.width,r=t.height;if(n<=0||r<=0||t.width<=0||t.height<=0)return null;let s=t.width/n,o=t.height/r,a=3,l=Math.min(1,4096/(n+a*2),4096/(r+a*2)),c=document.createElement("canvas");c.width=Math.max(1,Math.ceil((n+a*2)*l)),c.height=Math.max(1,Math.ceil((r+a*2)*l));let u=c.getContext("2d",{willReadFrequently:!0});if(!u)return null;u.scale(l,l),u.textBaseline="alphabetic";let h=document.createTreeWalker(i,NodeFilter.SHOW_TEXT),p=document.createRange(),d;for(;d=h.nextNode();){let f=d.parentElement;if(!f||f.closest('[aria-hidden="true"], [data-particle-decoration], script, style'))continue;let y=getComputedStyle(f);if(y.display==="none")continue;u.font=`${y.fontStyle} ${y.fontWeight} ${y.fontSize} ${y.fontFamily}`,u.fillStyle=y.color;let M=u.measureText("Hg"),v=parseFloat(y.fontSize)||16,P=M.fontBoundingBoxAscent??M.actualBoundingBoxAscent??v*.8,E=M.fontBoundingBoxDescent??M.actualBoundingBoxDescent??v*.2;for(let R=0;R<d.length;){let w=d.textContent.codePointAt(R)>65535?2:1,b=d.textContent.slice(R,R+w);p.setStart(d,R),p.setEnd(d,R+w);let I=p.getBoundingClientRect();if(R+=w,!b.trim()||I.width<=0||I.height<=0)continue;let k=(I.left-t.left)/s,O=(I.top-t.top)/o,V=I.height/o,W=O+(V-P-E)*.5+P;u.fillText(hv(b,y),k+a,W+a)}}p.detach?.();let g=u.getImageData(0,0,c.width,c.height).data,x=[],m=Math.max(1,Math.round(l*1.7));for(let f=0;f<c.height;f+=m)for(let y=0;y<c.width;y+=m){let M=(f*c.width+y)*4;g[M+3]<80||x.push([(y+.5)/l-a,(f+.5)/l-a,g[M]/255,g[M+1]/255,g[M+2]/255])}return{group:e,width:n,height:r,candidates:x,color:uv(getComputedStyle(i).color)}}async function xd(i,{maxPoints:e=4e3}={}){await document.fonts?.ready;let t=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<721||(navigator.deviceMemory||8)<=4||(navigator.hardwareConcurrency||8)<=4,n=Math.max(0,Math.min(t?1800:4e3,Math.floor(e))),r=Array.from({length:4},(x,m)=>dv(i[m],m)),s=r.reduce((x,m)=>x+(m?.candidates.length||0),0),o=r.map(x=>Math.sqrt(x?.candidates.length||0)),a=o.reduce((x,m)=>x+m,0),l=r.map(x=>({width:x?.width||1,height:x?.height||1,count:0})),c=[],u=Math.min(n,s),h=cv(2119695054);r.forEach((x,m)=>{if(!x?.candidates.length||!u)return;let f=o.slice(m).reduce((M,v)=>M+v,0),y=Math.min(x.candidates.length,f>0?Math.max(1,Math.round(u*o[m]/f)):0);for(let M=0;M<y;M++){let v=Math.min(x.candidates.length-1,Math.floor((M+h())*x.candidates.length/y));c.push({group:m,value:x.candidates[v]})}l[m].count=y,u-=y});let p=new Float32Array(c.length*3),d=new Float32Array(c.length*3),g=new Float32Array(c.length);return c.forEach(({group:x,value:m},f)=>{p.set([m[0],m[1],0],f*3),d.set(m.slice(2,5),f*3),g[f]=x}),{positions:p,colors:d,groupIds:g,groupBounds:l,count:c.length,colorSpace:"srgb",totalWeight:a}}var yd=i=>Er.clamp(Number(i)||0,0,1),vd=(i,e,t)=>{let n=yd((t-i)/(e-i));return n*n*(3-2*n)};function fv(){let i=navigator.deviceMemory||8,e=navigator.hardwareConcurrency||8,t=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<721,n=t||i<=4||e<=4;return{low:n,count:i<=2?4e3:n?7e3:16e3,dpr:i<=2?1:t?2:n?1.25:1.5,pointSize:t?1.6:n?1.8:1.7,ambientFps:n?30:45}}function pv(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var mv=[[.1514,.5138],[.8185,.5151]],Dc=[.553,.482];function gv(i,e){let t=new Float32Array(e),n=new Uint8Array(e),r=new Float32Array(e),s=new Uint8Array(e);for(let g=0;g<e;g++){let x=i.source[g*2],m=i.source[g*2+1],[f,y]=mv.map(([P,E])=>Math.hypot(x-P,(m-E)*1.77777778));t[g]=Math.min(f,y),n[g]=f<=y?1:0;let M=i.target[g*2],v=i.target[g*2+1];r[g]=Math.hypot(M-Dc[0],(v-Dc[1])*1.7768),s[g]=M<Dc[0]?1:0}let o=g=>Array.from({length:e},(x,m)=>m).sort((x,m)=>g[x]-g[m]),a=o(t),l=o(r),c=new Uint32Array(e);l.forEach((g,x)=>{c[g]=x});let u=[l.filter(g=>!s[g]),l.filter(g=>s[g])],h=[0,0],p=Math.max(16,Math.round(e*.04)),d=new Uint32Array(e);return a.forEach((g,x)=>{let m=n[g],f=1-m,y=u[m][h[m]],M=y!==void 0&&(c[y]<=x+p||h[f]>=u[f].length)?m:f;d[g]=u[M][h[M]++]}),d}function xv(i,e){let t=gv(i,e),n=new Float32Array(e*3),r=new Float32Array(e*2),s=new Float32Array(e*3),o=new Float32Array(e*3),a=new Float32Array(e*4),l=new Ce,c=pv(186320324);for(let h=0;h<e;h++){let p=i.source[h*2],d=i.source[h*2+1],g=t[h],x=i.target[g*2],m=i.target[g*2+1];if(![p,d,x,m].every(Number.isFinite))throw new Error("BMW bridge has an invalid photo sample");n.set([p,d,0],h*3),r.set([x,m],h*2);let f=h*3,y=g*3,M=i.sourceColors,v=i.targetColors;if(![M[f],M[f+1],M[f+2],v[y],v[y+1],v[y+2]].every(Number.isFinite))throw new Error("BMW bridge has an invalid sample color");l.setRGB(M[f],M[f+1],M[f+2],St),s.set([l.r,l.g,l.b],f),l.setRGB(v[y],v[y+1],v[y+2],St),o.set([l.r,l.g,l.b],f);let P=v[y]*.2126+v[y+1]*.7152+v[y+2]*.0722;a.set([c(),c(),c(),P],h*4)}let u=new yt;return u.setAttribute("position",new ut(n,3)),u.setAttribute("aTarget",new ut(r,2)),u.setAttribute("aSourceColor",new ut(s,3)),u.setAttribute("aTargetColor",new ut(o,3)),u.setAttribute("aSeed",new ut(a,4)),u.setDrawRange(0,e),u}var vv=`
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
`,yv=`
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
`;function _d({canvas:i,state:e,data:t,onError:n,settle:r}){let s=Math.floor(Number(t?.count)||0);if(!i||!e||s<1||t.source?.length!==s*2||t.target?.length!==s*2||t.sourceColors?.length!==s*3||t.targetColors?.length!==s*3)throw new Error("BMW bridge requires a canvas, state and matching paired photo samples");let o=fv(),a=Math.min(s,o.count),l=a,c=Math.min(devicePixelRatio||1,o.dpr),u=xv(t,l),h;try{h=new xi({canvas:i,alpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"})}catch(ie){throw u.dispose(),ie}h.outputColorSpace=St,h.toneMapping=pn,h.setClearColor(0,0),h.autoClear=!1,h.debug.onShaderError=(ie,Te,Ze,G)=>{throw new Error(`BMW bridge shader failed: ${ie.getProgramInfoLog(Te)||ie.getShaderInfoLog(Ze)||ie.getShaderInfoLog(G)||"unknown driver error"}`)};let p=h.getContext(),d=p.getParameter(p.ALIASED_POINT_SIZE_RANGE)[1],g={uProgress:{value:0},uTime:{value:0},uMotionStrength:{value:0},uPointerStrength:{value:0},uVelocity:{value:0},uPixelRatio:{value:c},uPointSize:{value:o.pointSize},uPointLimit:{value:d},uViewport:{value:new oe(1,1)},uPointer:{value:new oe},uSource:{value:new rt},uTarget:{value:new rt},uSourceFrame:{value:new rt},uTargetFrame:{value:new rt},uReveal:{value:new rt},uOpacity:{value:0}},x=new Rt({uniforms:g,vertexShader:vv,fragmentShader:yv,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Jl,blendEquation:Kn,blendSrc:wo,blendDst:ur,blendSrcAlpha:wo,blendDstAlpha:ur}),m=new ti(u,x);m.frustumCulled=!1;let f=new An;f.add(m);let y=new On(-1,1,1,-1,.1,2e3);y.position.z=1e3;let M=matchMedia("(prefers-reduced-motion: reduce)"),v=!M.matches,P=!1,E=!1,R=!1,L=!1,w=!0,b=1,I=1,k=0,O=!0,V=!1,W=!1,H=[],te=0,X=0,ue=0,ce=0,ge=0,Ee=0,He=0,Z=0,ne=null,xe=0,ee=null,Se=1e3/o.ambientFps,Ae=new oe,De=new oe,at=!1,Oe=0,Ye=!1,F=0;function _t(){return R&&!E&&!L&&w&&!document.hidden}function Be(){return yd(e.progress)}function Pe(){return _t()&&P&&e.visible&&Be()>.1&&Be()<.95}function Me(){return Pe()&&v&&Be()>.11&&Be()<.93}function ze(){Ye=!1,F=0}function we(){te=0,X=0,ue=0,xe=0,ee=null}function T(){!k&&_t()&&(V||O&&Pe()||Me())&&(k=requestAnimationFrame(K))}function _(){h.setViewport(0,0,b,I),h.clear(!0,!1,!1),W=!1,V=!1,Ee=0}function z(){if(E)return;let ie=i.getBoundingClientRect(),Te=Math.max(1,Math.round(e.viewport?.width||ie.width||innerWidth)),Ze=Math.max(1,Math.round(e.viewport?.height||ie.height||innerHeight));(Te!==b||Ze!==I||h.getPixelRatio()!==c)&&(b=Te,I=Ze,h.setPixelRatio(c),h.setSize(b,I,!1),y.left=-b/2,y.right=b/2,y.top=I/2,y.bottom=-I/2,y.updateProjectionMatrix(),g.uViewport.value.set(b,I),O=!0),T()}function J(ie=!1){if(E)return;let Te=e.source,Ze=e.target,G=[P,e.visible,e.progress,e.interactive,e.viewport?.width,e.viewport?.height,Te?.x,Te?.y,Te?.width,Te?.height,Ze?.x,Ze?.y,Ze?.width,Ze?.height];(ie||G.some((Le,Xe)=>Le!==H[Xe]))&&(O=!0),H=G,Pe()||(k&&cancelAnimationFrame(k),k=0,V=W,Oe=0,ze(),we()),e.interactive===!1&&ze(),e.viewport&&(e.viewport.width!==b||e.viewport.height!==I)&&z(),T()}function j(ie){P=!!ie,J()}function Y(ie,Te){let Ze=Te&&[Te.x,Te.y,Te.width,Te.height].every(Number.isFinite)&&Te.width>0&&Te.height>0;return Ze&&ie.value.set(Te.x,Te.y,Te.width,Te.height),!!Ze}function ye(){e.noAdapt||Z>=2||(l=Math.max(Math.min(a,2400),Math.floor(l*.75)),u.setDrawRange(0,l),c=Math.max(.85,c-.15),Z++,He=0,z())}function K(ie){if(k=0,!_t()){we();return}if(!Pe()){V&&_(),O=!1,we();return}let Te=Me(),Ze=O;if(!Ze&&(!Te||ie<ue-.5)){Te&&T();return}let G=te?Math.min(.06,Math.max(0,(ie-te)/1e3)):0;te=ie,Te&&(ce+=G),Ye&&ie>=F&&(Ye=!1),Ae.lerp(De,1-Math.exp(-G*14));let Le=Te&&Ye&&e.interactive!==!1?1:0;Oe+=(Le-Oe)*(1-Math.exp(-G*(Le?14:4.3))),!Le&&Oe<.001&&(Oe=0);let Xe=Be();ee!==null&&G>0&&(xe+=((Xe-ee)/G-xe)*(1-Math.exp(-G*5)),Math.abs(xe)<.002&&(xe=0)),ee=Xe,g.uVelocity.value=v?xe:0,g.uProgress.value=Xe,g.uTime.value=ce,g.uPixelRatio.value=c,g.uOpacity.value=1,g.uMotionStrength.value=v?vd(.11,.35,Xe)*(1-vd(.72,.85,Xe)):0,g.uPointer.value.copy(Ae),g.uPointerStrength.value=Oe;let it=Y(g.uSource,e.source),Mt=Y(g.uTarget,e.target);Y(g.uSourceFrame,e.sourceFrame||{x:0,y:0,width:b,height:I}),Y(g.uTargetFrame,e.targetFrame||{x:0,y:0,width:b,height:I});let tt=e.reveal;g.uReveal.value.set(tt?.x||0,tt?.y||0,tt?.radius||0,tt?.feather||1);let pt=performance.now();if(_(),!it||!Mt){O=!1;return}try{h.render(f,y)}catch(hn){ne=String(hn),P=!1,_(),we(),queueMicrotask(()=>n?.(hn));return}Ee=h.info.render.calls,W=!0,ge++,O=!1;let ot=ie-X,Ht=performance.now()-pt,Pt=Ze?1e3/60:Se;X&&ot<150&&(He=ot>Pt*1.8||Ht>20?He+1:Math.max(0,He-2),He>=18&&ye()),X=ie,ue=Ze||!ue?ie+Se:Math.max(ue+Se,ie+1),(O||Te)&&T()}function se(ie){return!!ie?.closest?.('nav, .nav-wrap, a, button, input, select, textarea, summary, [role="button"], [role="link"], [contenteditable], [data-no-particles]')}function Ue(ie,Te,Ze,G=!1){if(!Me()||e.interactive===!1||se(ie.target)){ze();return}De.set(Te-b/2,I/2-Ze),(!at||Oe<.001)&&Ae.copy(De),at=!0,Ye=!0,F=G?1/0:performance.now()+700,O=!0,T()}function re(ie){if(ie.isPrimary===!1||ie.pointerType==="mouse"&&ie.buttons>1){ze();return}Ue(ie,ie.clientX,ie.clientY,ie.pointerType==="touch")}function le(ie){!ie.relatedTarget&&ie.pointerType!=="touch"&&ze()}function Re(ie){if(ie.touches.length!==1){ze();return}let Te=ie.touches[0];Ue(ie,Te.clientX,Te.clientY,!0)}function _e(){v=!M.matches,Oe=0,ze(),we(),J(!0)}function he(){we(),J(!0)}function We(ie){ie.preventDefault(),L=!0,ne="BMW bridge WebGL context lost",J(!0)}function Fe(){L=!1,ne=null,J(!0)}z();let N=(h.extensions.has("KHR_parallel_shader_compile")?h.compileAsync(f,y):Promise.resolve(h.compile(f,y))).then(()=>r?.()).then(()=>{if(E)throw new Error("BMW bridge was disposed during preparation");return _(),h.render(f,y),_(),R=!0,J(!0),pe}).catch(ie=>{throw fe(),ie});window.addEventListener("pointermove",re,{passive:!0}),window.addEventListener("pointerdown",re,{passive:!0}),window.addEventListener("pointerup",ze,{passive:!0}),window.addEventListener("pointercancel",ze,{passive:!0}),window.addEventListener("pointerout",le,{passive:!0}),window.addEventListener("touchstart",Re,{passive:!0}),window.addEventListener("touchmove",Re,{passive:!0}),window.addEventListener("touchend",ze,{passive:!0}),window.addEventListener("touchcancel",ze,{passive:!0}),window.addEventListener("blur",ze),M.addEventListener?M.addEventListener("change",_e):M.addListener(_e),document.addEventListener("visibilitychange",he),i.addEventListener("webglcontextlost",We),i.addEventListener("webglcontextrestored",Fe);let de=typeof ResizeObserver<"u"?new ResizeObserver(z):null;de?.observe(i),de||window.addEventListener("resize",z,{passive:!0});let q=typeof IntersectionObserver<"u"?new IntersectionObserver(ie=>{w=ie.some(Te=>Te.isIntersecting),J(!0)}):null;q?.observe(i);function Q(){let ie=Be(),Te=!P||!e.visible?"hidden":ie<=.1?"waiting":ie<.4?"bmw-release":ie<.55?"light-streams":ie<.85?"cockpit-assembly":ie<.95?"native-crossfade":"cockpit";return{ready:R&&!E&&!L,active:Pe(),visible:!!(P&&e.visible),running:!!k,renderedFrames:ge,frameCount:ge,drawCalls:Ee,drawn:W,particles:l,initialParticles:a,geometries:h.info.memory.geometries,textures:h.info.memory.textures,dpr:c,qualityReductions:Z,ambientFps:o.ambientFps,motionEnabled:v,motionActive:Me(),motionTime:ce,pointerActive:Ye,pointerStrength:Oe,progress:ie,phase:Te,error:ne,kind:"photo-particle-bridge"}}function fe(){E||(E=!0,k&&cancelAnimationFrame(k),k=0,de?.disconnect(),q?.disconnect(),window.removeEventListener("resize",z),window.removeEventListener("pointermove",re),window.removeEventListener("pointerdown",re),window.removeEventListener("pointerup",ze),window.removeEventListener("pointercancel",ze),window.removeEventListener("pointerout",le),window.removeEventListener("touchstart",Re),window.removeEventListener("touchmove",Re),window.removeEventListener("touchend",ze),window.removeEventListener("touchcancel",ze),window.removeEventListener("blur",ze),M.removeEventListener?M.removeEventListener("change",_e):M.removeListener(_e),document.removeEventListener("visibilitychange",he),i.removeEventListener("webglcontextlost",We),i.removeEventListener("webglcontextrestored",Fe),u.dispose(),x.dispose(),h.dispose(),h.forceContextLoss())}let pe={ready:N,setActive:j,resize:z,stats:Q,dispose:fe};return pe}return Td(_v);})();
