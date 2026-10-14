/*! Lab and portrait — built from js/scene-3d.js; includes Three.js r170 (MIT, Copyright 2010-2024 Three.js authors). Do not edit: rebuild from source. */
var HiWiLabBundle=(()=>{var zo=Object.defineProperty;var id=Object.getOwnPropertyDescriptor;var rd=Object.getOwnPropertyNames;var sd=Object.prototype.hasOwnProperty;var od=(i,e)=>{for(var t in e)zo(i,t,{get:e[t],enumerable:!0})},ad=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of rd(e))!sd.call(i,r)&&r!==t&&zo(i,r,{get:()=>e[r],enumerable:!(n=id(e,r))||n.enumerable});return i};var ld=i=>ad(zo({},"__esModule",{value:!0}),i);var Jx={};od(Jx,{loadPortraitAsset:()=>Qh,portraitPresentation:()=>Sc,sampleTextTargets:()=>jh,startBMWBridge:()=>nd,startLab:()=>Vh,startPortrait:()=>Xh});var cd=0,Ec=1,ud=2;var Hu=1,Xl=2,Kn=3,An=0,Dt=1,tn=2,Bn=0,sr=1,Ui=2,Tc=3,Ac=4,ql=5,jn=100,hd=101,dd=102,fd=103,pd=104,md=200,bo=201,gd=202,xd=203,Ma=204,ur=205,vd=206,_d=207,yd=208,Md=209,bd=210,Sd=211,wd=212,Ed=213,Td=214,ba=0,Sa=1,wa=2,hr=3,Ea=4,Ta=5,Aa=6,Ra=7,Yl=0,Ad=1,Rd=2,xn=0,Zl=1,$l=2,Jl=3,hs=4,Cd=5,Kl=6,Ql=7;var Vu=300,dr=301,fr=302,Ca=303,Pa=304,So=306,Ia=1e3,Li=1001,La=1002,cn=1003,Pd=1004;var gs=1005;var Fn=1006,ko=1007;var Di=1008;var ni=1009,Gu=1010,Wu=1011,Jr=1012,jl=1013,Ni=1014,On=1015,Hn=1016,ec=1017,tc=1018,pr=1020,Xu=35902,qu=1021,Yu=1022,Tn=1023,Zu=1024,$u=1025,or=1026,mr=1027,nc=1028,ic=1029,Ju=1030,rc=1031;var sc=1033,Ys=33776,Zs=33777,$s=33778,Js=33779,Da=35840,Ua=35841,Na=35842,Fa=35843,Oa=36196,Ba=37492,za=37496,ka=37808,Ha=37809,Va=37810,Ga=37811,Wa=37812,Xa=37813,qa=37814,Ya=37815,Za=37816,$a=37817,Ja=37818,Ka=37819,Qa=37820,ja=37821,Ks=36492,el=36494,tl=36495,Ku=36283,nl=36284,il=36285,rl=36286;var Qs=2300,sl=2301,Ho=2302,Rc=2400,Cc=2401,Pc=2402;var Id=3200,oc=3201;var ac=0,Ld=1,mi="",Tt="srgb",Sr="srgb-linear",wo="linear",yt="srgb";var Vi=7680;var Ic=519,Dd=512,Ud=513,Nd=514,Qu=515,Fd=516,Od=517,Bd=518,zd=519,Lc=35044;var Dc="300 es",ei=2e3,js=2001,xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uc=1234567,ar=Math.PI/180,Kr=180/Math.PI;function wr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function lc(i,e){return(i%e+e)%e}function kd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Hd(i,e,t){return i!==e?(t-i)/(e-i):0}function qr(i,e,t){return(1-t)*i+t*e}function Vd(i,e,t,n){return qr(i,e,1-Math.exp(-t*n))}function Gd(i,e=1){return e-Math.abs(lc(i,e*2)-e)}function Wd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function qd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yd(i,e){return i+Math.random()*(e-i)}function Zd(i){return i*(.5-Math.random())}function $d(i){i!==void 0&&(Uc=i);let e=Uc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jd(i){return i*ar}function Kd(i){return i*Kr}function Qd(i){return(i&i-1)===0&&i!==0}function jd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ef(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tf(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),p=o((e-n)/2),h=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*p,a*c);break;case"YZY":i.set(l*p,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*p,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*h,a*c);break;case"YXY":i.set(l*h,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ir(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Er={DEG2RAD:ar,RAD2DEG:Kr,generateUUID:wr,clamp:Ht,euclideanModulo:lc,mapLinear:kd,inverseLerp:Hd,lerp:qr,damp:Vd,pingpong:Gd,smoothstep:Wd,smootherstep:Xd,randInt:qd,randFloat:Yd,randFloatSpread:Zd,seededRandom:$d,degToRad:Jd,radToDeg:Kd,isPowerOfTwo:Qd,ceilPowerOfTwo:jd,floorPowerOfTwo:ef,setQuaternionFromProperEuler:tf,normalize:Kt,denormalize:ir},ae=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nt=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],h=n[5],g=n[8],x=r[0],m=r[3],f=r[6],y=r[1],S=r[4],_=r[7],R=r[2],T=r[5],A=r[8];return s[0]=o*x+a*y+l*R,s[3]=o*m+a*S+l*T,s[6]=o*f+a*_+l*A,s[1]=c*x+u*y+d*R,s[4]=c*m+u*S+d*T,s[7]=c*f+u*_+d*A,s[2]=p*x+h*y+g*R,s[5]=p*m+h*S+g*T,s[8]=p*f+h*_+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,p=a*l-u*s,h=c*s-o*l,g=t*d+n*p+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(r*c-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=p*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vo=new nt;function ju(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nf(){let i=eo("canvas");return i.style.display="block",i}var Nc={};function Wr(i){i in Nc||(Nc[i]=!0,console.warn(i))}function rf(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function sf(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function of(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ht={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mi?wo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fc=[.64,.33,.3,.6,.15,.06],Oc=[.2126,.7152,.0722],Bc=[.3127,.329],zc=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kc=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[Sr]:{primaries:Fc,whitePoint:Bc,transfer:wo,toXYZ:zc,fromXYZ:kc,luminanceCoefficients:Oc,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:Fc,whitePoint:Bc,transfer:yt,toXYZ:zc,fromXYZ:kc,luminanceCoefficients:Oc,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});var Gi,ol=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=eo("canvas")),Gi.width=e.width,Gi.height=e.height;let n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=eo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},af=0,to=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Go(r[o].image)):s.push(Go(r[o]))}else s=Go(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ol.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lf=0,nn=class i extends xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Li,r=Li,s=Fn,o=Di,a=Tn,l=ni,c=i.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=wr(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Vu;nn.DEFAULT_ANISOTROPY=1;var lt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],h=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,_=(h+1)/2,R=(f+1)/2,T=(u+p)/4,A=(d+x)/4,I=(g+m)/4;return S>_&&S>R?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=T/n,s=A/n):_>R?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=T/r,s=I/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=A/s,r=I/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-x)/y,this.z=(p-u)/y,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new nn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new to(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},no=class extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ll=class extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],p=s[o+0],h=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=h,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==p||c!==h||u!==g){let m=1-a,f=l*p+c*h+u*g+d*x,y=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let R=Math.sqrt(S),T=Math.atan2(R,f*y);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let _=a*y;if(l=l*m+p*_,c=c*m+h*_,u=u*m+g*_,d=d*m+x*_,m===1-a){let R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],p=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*h-c*p,e[t+1]=l*g+u*p+c*d-a*h,e[t+2]=c*g+u*h+a*p-l*d,e[t+3]=u*g-a*d-l*p-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),p=l(n/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=p*u*d+c*h*g,this._y=c*h*d-p*u*g,this._z=c*u*g+p*h*d,this._w=c*u*d-p*h*g;break;case"YXZ":this._x=p*u*d+c*h*g,this._y=c*h*d-p*u*g,this._z=c*u*g-p*h*d,this._w=c*u*d+p*h*g;break;case"ZXY":this._x=p*u*d-c*h*g,this._y=c*h*d+p*u*g,this._z=c*u*g+p*h*d,this._w=c*u*d-p*h*g;break;case"ZYX":this._x=p*u*d-c*h*g,this._y=c*h*d+p*u*g,this._z=c*u*g-p*h*d,this._w=c*u*d+p*h*g;break;case"YZX":this._x=p*u*d+c*h*g,this._y=c*h*d+p*u*g,this._z=c*u*g-p*h*d,this._w=c*u*d-p*h*g;break;case"XZY":this._x=p*u*d-c*h*g,this._y=c*h*d-p*u*g,this._z=c*u*g+p*h*d,this._w=c*u*d+p*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=n+a+d;if(p>0){let h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(n>a&&n>d){let h=2*Math.sqrt(1+n-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-n-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-n-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wo=new C,Hc=new vi,vn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),vs.subVectors(this.max,Fr),Wi.subVectors(e.a,Fr),Xi.subVectors(e.b,Fr),qi.subVectors(e.c,Fr),ci.subVectors(Xi,Wi),ui.subVectors(qi,Xi),wi.subVectors(Wi,qi);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-wi.z,wi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,wi.z,0,-wi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-wi.y,wi.x,0];return!Xo(t,Wi,Xi,qi,vs)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Wi,Xi,qi,vs))?!1:(_s.crossVectors(ci,ui),t=[_s.x,_s.y,_s.z],Xo(t,Wi,Xi,qi,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qn=[new C,new C,new C,new C,new C,new C,new C,new C],Sn=new C,xs=new vn,Wi=new C,Xi=new C,qi=new C,ci=new C,ui=new C,wi=new C,Fr=new C,vs=new C,_s=new C,Ei=new C;function Xo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ei.fromArray(i,s);let a=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var cf=new vn,Or=new C,qo=new C,ii=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Or,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(qo)),this.expandByPoint(Or.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new C,Yo=new C,ys=new C,hi=new C,Zo=new C,Ms=new C,$o=new C,gr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Yo.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Yo);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ys),a=hi.dot(this.direction),l=-hi.dot(ys),c=hi.lengthSq(),u=Math.abs(1-o*o),d,p,h,g;if(u>0)if(d=o*l-a,p=o*a-l,g=s*u,d>=0)if(p>=-g)if(p<=g){let x=1/u;d*=x,p*=x,h=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=s,d=Math.max(0,-(o*p+a)),h=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(o*p+a)),h=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-s,-l),s),h=p*(p+2*l)+c):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+p*(p+2*l)+c);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),h=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Yo).addScaledVector(ys,p),h}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);let n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,r,s){Zo.subVectors(t,e),Ms.subVectors(n,e),$o.crossVectors(Zo,Ms);let o=this.direction.dot($o),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);let l=a*this.direction.dot(Ms.crossVectors(hi,Ms));if(l<0)return null;let c=a*this.direction.dot(Zo.cross(hi));if(c<0||l+c>o)return null;let u=-a*hi.dot($o);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mt=class i{constructor(e,t,n,r,s,o,a,l,c,u,d,p,h,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,d,p,h,g,x,m)}set(e,t,n,r,s,o,a,l,c,u,d,p,h,g,x,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=p,f[3]=h,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let p=o*u,h=o*d,g=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=p-x*c,t[9]=-a*l,t[2]=x-p*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*u,h=l*d,g=c*u,x=c*d;t[0]=p+x*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=x+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*u,h=l*d,g=c*u,x=c*d;t[0]=p-x*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=x-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*u,h=o*d,g=a*u,x=a*d;t[0]=l*u,t[4]=g*c-h,t[8]=p*c+x,t[1]=l*d,t[5]=x*c+p,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,h=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-p*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+g,t[10]=p-x*d}else if(e.order==="XZY"){let p=o*l,h=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+x,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=x*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uf,e,hf)}lookAt(e,t,n){let r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),di.crossVectors(n,an),di.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),di.crossVectors(n,an)),di.normalize(),bs.crossVectors(an,di),r[0]=di.x,r[4]=bs.x,r[8]=an.x,r[1]=di.y,r[5]=bs.y,r[9]=an.y,r[2]=di.z,r[6]=bs.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],h=n[13],g=n[2],x=n[6],m=n[10],f=n[14],y=n[3],S=n[7],_=n[11],R=n[15],T=r[0],A=r[4],I=r[8],w=r[12],M=r[1],P=r[5],z=r[9],F=r[13],V=r[2],W=r[6],k=r[10],te=r[14],G=r[3],se=r[7],ue=r[11],pe=r[15];return s[0]=o*T+a*M+l*V+c*G,s[4]=o*A+a*P+l*W+c*se,s[8]=o*I+a*z+l*k+c*ue,s[12]=o*w+a*F+l*te+c*pe,s[1]=u*T+d*M+p*V+h*G,s[5]=u*A+d*P+p*W+h*se,s[9]=u*I+d*z+p*k+h*ue,s[13]=u*w+d*F+p*te+h*pe,s[2]=g*T+x*M+m*V+f*G,s[6]=g*A+x*P+m*W+f*se,s[10]=g*I+x*z+m*k+f*ue,s[14]=g*w+x*F+m*te+f*pe,s[3]=y*T+S*M+_*V+R*G,s[7]=y*A+S*P+_*W+R*se,s[11]=y*I+S*z+_*k+R*ue,s[15]=y*w+S*F+_*te+R*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],h=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*a*p+n*c*p+r*a*h-n*l*h)+x*(+t*l*h-t*c*p+s*o*p-r*o*h+r*c*u-s*l*u)+m*(+t*c*d-t*a*h-s*o*d+n*o*h+s*a*u-n*c*u)+f*(-r*a*u-t*l*d+t*a*p+r*o*d-n*o*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],h=e[11],g=e[12],x=e[13],m=e[14],f=e[15],y=d*m*c-x*p*c+x*l*h-a*m*h-d*l*f+a*p*f,S=g*p*c-u*m*c-g*l*h+o*m*h+u*l*f-o*p*f,_=u*x*c-g*d*c+g*a*h-o*x*h-u*a*f+o*d*f,R=g*d*l-u*x*l-g*a*p+o*x*p+u*a*m-o*d*m,T=t*y+n*S+r*_+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=y*A,e[1]=(x*p*s-d*m*s-x*r*h+n*m*h+d*r*f-n*p*f)*A,e[2]=(a*m*s-x*l*s+x*r*c-n*m*c-a*r*f+n*l*f)*A,e[3]=(d*l*s-a*p*s-d*r*c+n*p*c+a*r*h-n*l*h)*A,e[4]=S*A,e[5]=(u*m*s-g*p*s+g*r*h-t*m*h-u*r*f+t*p*f)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*A,e[7]=(o*p*s-u*l*s+u*r*c-t*p*c-o*r*h+t*l*h)*A,e[8]=_*A,e[9]=(g*d*s-u*x*s-g*n*h+t*x*h+u*n*f-t*d*f)*A,e[10]=(o*x*s-g*a*s+g*n*c-t*x*c-o*n*f+t*a*f)*A,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*h-t*a*h)*A,e[12]=R*A,e[13]=(u*x*r-g*d*r+g*n*p-t*x*p-u*n*m+t*d*m)*A,e[14]=(g*a*r-o*x*r-g*n*l+t*x*l+o*n*m-t*a*m)*A,e[15]=(o*d*r-u*a*r+u*n*l-t*d*l-o*n*p+t*a*p)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,p=s*c,h=s*u,g=s*d,x=o*u,m=o*d,f=a*d,y=l*c,S=l*u,_=l*d,R=n.x,T=n.y,A=n.z;return r[0]=(1-(x+f))*R,r[1]=(h+_)*R,r[2]=(g-S)*R,r[3]=0,r[4]=(h-_)*T,r[5]=(1-(p+f))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(g+S)*A,r[9]=(m-y)*A,r[10]=(1-(p+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Yi.set(r[0],r[1],r[2]).length(),o=Yi.set(r[4],r[5],r[6]).length(),a=Yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);let c=1/s,u=1/o,d=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,t.setFromRotationMatrix(wn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=ei){let l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r),h,g;if(a===ei)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===js)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=ei){let l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(o-s),p=(t+e)*c,h=(n+r)*u,g,x;if(a===ei)g=(o+s)*d,x=-2*d;else if(a===js)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Yi=new C,wn=new Mt,uf=new C(0,0,0),hf=new C(1,1,1),di=new C,bs=new C,an=new C,Vc=new Mt,Gc=new vi,Rn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},df=0,Wc=new C,Zi=new vi,Zn=new Mt,Ss=new C,Br=new C,ff=new C,pf=new vi,Xc=new C(1,0,0),qc=new C(0,1,0),Yc=new C(0,0,1),Zc={type:"added"},mf={type:"removed"},$i={type:"childadded",child:null},Jo={type:"childremoved",child:null},Ft=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Rn,n=new vi,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new nt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Xc,e)}rotateY(e){return this.rotateOnAxis(qc,e)}rotateZ(e){return this.rotateOnAxis(Yc,e)}translateOnAxis(e,t){return Wc.copy(e).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xc,e)}translateY(e){return this.translateOnAxis(qc,e)}translateZ(e){return this.translateOnAxis(Yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ss.copy(e):Ss.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Br,Ss,this.up):Zn.lookAt(Ss,Br,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),Zi.setFromRotationMatrix(Zn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zc),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mf),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zc),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),p=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ft.DEFAULT_UP=new C(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new C,$n=new C,Ko=new C,Jn=new C,Ji=new C,Ki=new C,$c=new C,Qo=new C,jo=new C,ea=new C,ta=new lt,na=new lt,ia=new lt,gi=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),En.subVectors(e,t),r.cross(En);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){En.subVectors(r,t),$n.subVectors(n,t),Ko.subVectors(e,t);let o=En.dot(En),a=En.dot($n),l=En.dot(Ko),c=$n.dot($n),u=$n.dot(Ko),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let p=1/d,h=(c*l-a*u)*p,g=(o*u-a*l)*p;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,n),ia.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ta,s.x),o.addScaledVector(na,s.y),o.addScaledVector(ia,s.z),o}static isFrontFacing(e,t,n,r){return En.subVectors(n,t),$n.subVectors(e,t),En.cross($n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),En.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Ji.subVectors(r,n),Ki.subVectors(s,n),Qo.subVectors(e,n);let l=Ji.dot(Qo),c=Ki.dot(Qo);if(l<=0&&c<=0)return t.copy(n);jo.subVectors(e,r);let u=Ji.dot(jo),d=Ki.dot(jo);if(u>=0&&d<=u)return t.copy(r);let p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ji,o);ea.subVectors(e,s);let h=Ji.dot(ea),g=Ki.dot(ea);if(g>=0&&h<=g)return t.copy(s);let x=h*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ki,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return $c.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector($c,a);let f=1/(m+x+p);return o=x*f,a=p*f,t.copy(n).addScaledVector(Ji,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},ws={h:0,s:0,l:0};function ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=lc(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ra(o,s,e+1/3),this.g=ra(o,s,e),this.b=ra(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=eh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ht.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Ht(Xt.r*255,0,255))*65536+Math.round(Ht(Xt.g*255,0,255))*256+Math.round(Ht(Xt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Xt.copy(this),t);let n=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Tt){ht.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,r=Xt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(ws);let n=qr(fi.h,ws.h,t),r=qr(fi.s,ws.s,t),s=qr(fi.l,ws.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Ce;Ce.NAMES=eh;var gf=0,zn=class extends xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=wr(),this.name="",this.blending=sr,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=ur,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ur&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Vt=class extends zn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ut=new C,Es=new ae,ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lc&&(e.usage=this.usage),e}};var io=class extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ro=class extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},xf=0,gn=new Mt,sa=new Ft,Qi=new C,ln=new vn,zr=new vn,kt=new C,At=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ju(e)?ro:io)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(ln.min,zr.min),ln.expandByPoint(kt),kt.addVectors(ln.max,zr.max),ln.expandByPoint(kt)):(ln.expandByPoint(zr.min),ln.expandByPoint(zr.max))}ln.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),kt.add(Qi)),r=Math.max(r,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new C,l[I]=new C;let c=new C,u=new C,d=new C,p=new ae,h=new ae,g=new ae,x=new C,m=new C;function f(I,w,M){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),p.fromBufferAttribute(s,I),h.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),u.sub(c),d.sub(c),h.sub(p),g.sub(p);let P=1/(h.x*g.y-g.x*h.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(P),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(P),a[I].add(x),a[w].add(x),a[M].add(x),l[I].add(m),l[w].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,w=y.length;I<w;++I){let M=y[I],P=M.start,z=M.count;for(let F=P,V=P+z;F<V;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let S=new C,_=new C,R=new C,T=new C;function A(I){R.fromBufferAttribute(r,I),T.copy(R);let w=a[I];S.copy(w),S.sub(R.multiplyScalar(R.dot(w))).normalize(),_.crossVectors(T,w);let P=_.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,P)}for(let I=0,w=y.length;I<w;++I){let M=y[I],P=M.start,z=M.count;for(let F=P,V=P+z;F<V;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,h=n.count;p<h;p++)n.setXYZ(p,0,0,0);let r=new C,s=new C,o=new C,a=new C,l=new C,c=new C,u=new C,d=new C;if(e)for(let p=0,h=e.count;p<h;p+=3){let g=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,h=t.count;p<h;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,p=new c.constructor(l.length*u),h=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let f=0;f<u;f++)p[g++]=c[h++]}return new ft(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let p=c[u],h=e(p,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let p=0,h=d.length;p<h;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jc=new Mt,Ti=new gr,Ts=new ii,Kc=new C,As=new C,Rs=new C,Cs=new C,oa=new C,Ps=new C,Qc=new C,Is=new C,dt=class extends Ft{constructor(e=new At,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(oa.fromBufferAttribute(d,e),o?Ps.addScaledVector(oa,u):Ps.addScaledVector(oa.sub(t),u))}t.add(Ps)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(Ts.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Ts,Kc)===null||Ti.origin.distanceToSquared(Kc)>(e.far-e.near)**2))&&(Jc.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(Jc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],f=o[m.materialIndex],y=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let _=y,R=S;_<R;_+=3){let T=a.getX(_),A=a.getX(_+1),I=a.getX(_+2);r=Ls(this,f,e,n,c,u,d,T,A,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,f=x;m<f;m+=3){let y=a.getX(m),S=a.getX(m+1),_=a.getX(m+2);r=Ls(this,o,e,n,c,u,d,y,S,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],f=o[m.materialIndex],y=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let _=y,R=S;_<R;_+=3){let T=_,A=_+1,I=_+2;r=Ls(this,f,e,n,c,u,d,T,A,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=g,f=x;m<f;m+=3){let y=m,S=m+1,_=m+2;r=Ls(this,o,e,n,c,u,d,y,S,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function vf(i,e,t,n,r,s,o,a){let l;if(e.side===Dt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===An,a),l===null)return null;Is.copy(a),Is.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Is);return c<t.near||c>t.far?null:{distance:c,point:Is.clone(),object:i}}function Ls(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,As),i.getVertexPosition(l,Rs),i.getVertexPosition(c,Cs);let u=vf(i,e,t,n,As,Rs,Cs,Qc);if(u){let d=new C;gi.getBarycoord(Qc,As,Rs,Cs,d),r&&(u.uv=gi.getInterpolatedAttribute(r,a,l,c,d,new ae)),s&&(u.uv1=gi.getInterpolatedAttribute(s,a,l,c,d,new ae)),o&&(u.normal=gi.getInterpolatedAttribute(o,a,l,c,d,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new C,materialIndex:0};gi.getNormal(As,Rs,Cs,p.normal),u.face=p,u.barycoord=d}return u}var Cn=class i extends At{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],p=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(d,2));function g(x,m,f,y,S,_,R,T,A,I,w){let M=_/A,P=R/I,z=_/2,F=R/2,V=T/2,W=A+1,k=I+1,te=0,G=0,se=new C;for(let ue=0;ue<k;ue++){let pe=ue*P-F;for(let Pe=0;Pe<W;Pe++){let Ge=Pe*M-z;se[x]=Ge*y,se[m]=pe*S,se[f]=V,c.push(se.x,se.y,se.z),se[x]=0,se[m]=0,se[f]=T>0?1:-1,u.push(se.x,se.y,se.z),d.push(Pe/A),d.push(1-ue/I),te+=1}}for(let ue=0;ue<I;ue++)for(let pe=0;pe<A;pe++){let Pe=p+pe+W*ue,Ge=p+pe+W*(ue+1),X=p+(pe+1)+W*(ue+1),ie=p+(pe+1)+W*ue;l.push(Pe,Ge,ie),l.push(Ge,X,ie),G+=6}a.addGroup(h,G,w),h+=G,p+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Qt(i){let e={};for(let t=0;t<i.length;t++){let n=xr(i[t]);for(let r in n)e[r]=n[r]}return e}function _f(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function th(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var cc={clone:xr,merge:Qt},yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends zn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=_f(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},so=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pi=new C,jc=new ae,eu=new ae,qt=class extends so{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,jc,eu),t.subVectors(eu,jc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ji=-90,er=1,cl=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(ji,er,e,t);r.layers=this.layers,this.add(r);let s=new qt(ji,er,e,t);s.layers=this.layers,this.add(s);let o=new qt(ji,er,e,t);o.layers=this.layers,this.add(o);let a=new qt(ji,er,e,t);a.layers=this.layers,this.add(a);let l=new qt(ji,er,e,t);l.layers=this.layers,this.add(l);let c=new qt(ji,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,p,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},oo=class extends nn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ul=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cn(5,5,5),s=new Lt({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Bn});s.uniforms.tEquirect.value=t;let o=new dt(r,s),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Fn),new cl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},aa=new C,bf=new C,Sf=new nt,Qn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=aa.subVectors(n,t).cross(bf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(aa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sf.getNormalMatrix(e),r=this.coplanarPoint(aa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new ii,Ds=new C,jr=class{constructor(e=new Qn,t=new Qn,n=new Qn,r=new Qn,s=new Qn,o=new Qn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],p=r[7],h=r[8],g=r[9],x=r[10],m=r[11],f=r[12],y=r[13],S=r[14],_=r[15];if(n[0].setComponents(l-s,p-c,m-h,_-f).normalize(),n[1].setComponents(l+s,p+c,m+h,_+f).normalize(),n[2].setComponents(l+o,p+u,m+g,_+y).normalize(),n[3].setComponents(l-o,p-u,m-g,_-y).normalize(),n[4].setComponents(l-a,p-d,m-x,_-S).normalize(),t===ei)n[5].setComponents(l+a,p+d,m+x,_+S).normalize();else if(t===js)n[5].setComponents(a,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ds.x=r.normal.x>0?e.max.x:e.min.x,Ds.y=r.normal.y>0?e.max.y:e.min.y,Ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function wf(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let p=0;for(let h=1;h<d.length;h++){let g=d[p],x=d[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,d[p]=x)}d.length=p+1;for(let h=0,g=d.length;h<g;h++){let x=d[h];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Gt=class i extends At{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,p=t/l,h=[],g=[],x=[],m=[];for(let f=0;f<u;f++){let y=f*p-o;for(let S=0;S<c;S++){let _=S*d-s;g.push(_,-y,0),x.push(0,0,1),m.push(S/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){let S=y+c*f,_=y+c*(f+1),R=y+1+c*(f+1),T=y+1+c*f;h.push(S,_,T),h.push(_,R,T)}this.setIndex(h),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
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
#endif`,Af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
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
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Df=`#ifdef USE_BATCHING
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
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Of=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
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
#endif`,zf=`#ifdef USE_BUMPMAP
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
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zf=`#define PI 3.141592653589793
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
} // validated`,$f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ip=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
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
}`,fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
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
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
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
#endif`,Sp=`struct PhysicalMaterial {
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
}`,wp=`
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Up=`#if defined( USE_POINTS_UV )
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
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yp=`#ifdef USE_NORMALMAP
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
#endif`,Zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cm=`float getShadowMask() {
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
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
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
}`,Im=`#if DEPTH_PACKING == 3200
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
}`,Lm=`#define DISTANCE
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
}`,Dm=`#define DISTANCE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,zm=`uniform vec3 diffuse;
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
}`,km=`#define LAMBERT
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
}`,Hm=`#define LAMBERT
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
}`,Vm=`#define MATCAP
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
}`,Gm=`#define MATCAP
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define NORMAL
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
}`,qm=`#define PHONG
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
}`,Ym=`#define PHONG
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
}`,Zm=`#define STANDARD
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
}`,$m=`#define STANDARD
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
}`,Jm=`#define TOON
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
}`,Km=`#define TOON
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
}`,Qm=`uniform float size;
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
}`,jm=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,t0=`uniform vec3 color;
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
}`,n0=`uniform float rotation;
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
}`,i0=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Ef,alphahash_pars_fragment:Tf,alphamap_fragment:Af,alphamap_pars_fragment:Rf,alphatest_fragment:Cf,alphatest_pars_fragment:Pf,aomap_fragment:If,aomap_pars_fragment:Lf,batching_pars_vertex:Df,batching_vertex:Uf,begin_vertex:Nf,beginnormal_vertex:Ff,bsdfs:Of,iridescence_fragment:Bf,bumpmap_pars_fragment:zf,clipping_planes_fragment:kf,clipping_planes_pars_fragment:Hf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Gf,color_fragment:Wf,color_pars_fragment:Xf,color_pars_vertex:qf,color_vertex:Yf,common:Zf,cube_uv_reflection_fragment:$f,defaultnormal_vertex:Jf,displacementmap_pars_vertex:Kf,displacementmap_vertex:Qf,emissivemap_fragment:jf,emissivemap_pars_fragment:ep,colorspace_fragment:tp,colorspace_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:rp,envmap_pars_fragment:sp,envmap_pars_vertex:op,envmap_physical_pars_fragment:xp,envmap_vertex:ap,fog_vertex:lp,fog_pars_vertex:cp,fog_fragment:up,fog_pars_fragment:hp,gradientmap_pars_fragment:dp,lightmap_pars_fragment:fp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:vp,lights_toon_pars_fragment:_p,lights_phong_fragment:yp,lights_phong_pars_fragment:Mp,lights_physical_fragment:bp,lights_physical_pars_fragment:Sp,lights_fragment_begin:wp,lights_fragment_maps:Ep,lights_fragment_end:Tp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Cp,logdepthbuf_vertex:Pp,map_fragment:Ip,map_pars_fragment:Lp,map_particle_fragment:Dp,map_particle_pars_fragment:Up,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Op,morphcolor_vertex:Bp,morphnormal_vertex:zp,morphtarget_pars_vertex:kp,morphtarget_vertex:Hp,normal_fragment_begin:Vp,normal_fragment_maps:Gp,normal_pars_fragment:Wp,normal_pars_vertex:Xp,normal_vertex:qp,normalmap_pars_fragment:Yp,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:Kp,opaque_fragment:Qp,packing:jp,premultiplied_alpha_fragment:em,project_vertex:tm,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:rm,roughnessmap_pars_fragment:sm,shadowmap_pars_fragment:om,shadowmap_pars_vertex:am,shadowmap_vertex:lm,shadowmask_pars_fragment:cm,skinbase_vertex:um,skinning_pars_vertex:hm,skinning_vertex:dm,skinnormal_vertex:fm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:xm,transmission_fragment:vm,transmission_pars_fragment:_m,uv_pars_fragment:ym,uv_pars_vertex:Mm,uv_vertex:bm,worldpos_vertex:Sm,background_vert:wm,background_frag:Em,backgroundCube_vert:Tm,backgroundCube_frag:Am,cube_vert:Rm,cube_frag:Cm,depth_vert:Pm,depth_frag:Im,distanceRGBA_vert:Lm,distanceRGBA_frag:Dm,equirect_vert:Um,equirect_frag:Nm,linedashed_vert:Fm,linedashed_frag:Om,meshbasic_vert:Bm,meshbasic_frag:zm,meshlambert_vert:km,meshlambert_frag:Hm,meshmatcap_vert:Vm,meshmatcap_frag:Gm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:qm,meshphong_frag:Ym,meshphysical_vert:Zm,meshphysical_frag:$m,meshtoon_vert:Jm,meshtoon_frag:Km,points_vert:Qm,points_frag:jm,shadow_vert:e0,shadow_frag:t0,sprite_vert:n0,sprite_frag:i0},ge={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Nn={basic:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Qt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Qt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Qt([ge.points,ge.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Qt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Qt([ge.common,ge.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Qt([ge.sprite,ge.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Qt([ge.common,ge.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Qt([ge.lights,ge.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Nn.physical={uniforms:Qt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Us={r:0,b:0,g:0},Ri=new Rn,r0=new Mt;function s0(i,e,t,n,r,s,o){let a=new Ce(0),l=s===!0?0:1,c,u,d=null,p=0,h=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function x(y){let S=!1,_=g(y);_===null?f(a,l):_&&_.isColor&&(f(_,1),S=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){let _=g(S);_&&(_.isCubeTexture||_.mapping===So)?(u===void 0&&(u=new dt(new Cn(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:xr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ri.copy(S.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(Ri)),u.material.toneMapped=ht.getTransfer(_.colorSpace)!==yt,(d!==_||p!==_.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=_,p=_.version,h=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new dt(new Gt(2,2),new Lt({name:"BackgroundMaterial",uniforms:xr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ht.getTransfer(_.colorSpace)!==yt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||p!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,p=_.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,S){y.getRGB(Us,th(i)),n.buffers.color.setClear(Us.r,Us.g,Us.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:x,addToRenderList:m}}function o0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null),s=r,o=!1;function a(M,P,z,F,V){let W=!1,k=d(F,z,P);s!==k&&(s=k,c(s.object)),W=h(M,F,z,V),W&&g(M,F,z,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,_(M,P,z,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,P,z){let F=z.wireframe===!0,V=n[M.id];V===void 0&&(V={},n[M.id]=V);let W=V[P.id];W===void 0&&(W={},V[P.id]=W);let k=W[F];return k===void 0&&(k=p(l()),W[F]=k),k}function p(M){let P=[],z=[],F=[];for(let V=0;V<t;V++)P[V]=0,z[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:F,object:M,attributes:{},index:null}}function h(M,P,z,F){let V=s.attributes,W=P.attributes,k=0,te=z.getAttributes();for(let G in te)if(te[G].location>=0){let ue=V[G],pe=W[G];if(pe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),ue===void 0||ue.attribute!==pe||pe&&ue.data!==pe.data)return!0;k++}return s.attributesNum!==k||s.index!==F}function g(M,P,z,F){let V={},W=P.attributes,k=0,te=z.getAttributes();for(let G in te)if(te[G].location>=0){let ue=W[G];ue===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));let pe={};pe.attribute=ue,ue&&ue.data&&(pe.data=ue.data),V[G]=pe,k++}s.attributes=V,s.attributesNum=k,s.index=F}function x(){let M=s.newAttributes;for(let P=0,z=M.length;P<z;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){let z=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;z[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),V[M]!==P&&(i.vertexAttribDivisor(M,P),V[M]=P)}function y(){let M=s.newAttributes,P=s.enabledAttributes;for(let z=0,F=P.length;z<F;z++)P[z]!==M[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function S(M,P,z,F,V,W,k){k===!0?i.vertexAttribIPointer(M,P,z,V,W):i.vertexAttribPointer(M,P,z,F,V,W)}function _(M,P,z,F){x();let V=F.attributes,W=z.getAttributes(),k=P.defaultAttributeValues;for(let te in W){let G=W[te];if(G.location>=0){let se=V[te];if(se===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){let ue=se.normalized,pe=se.itemSize,Pe=e.get(se);if(Pe===void 0)continue;let Ge=Pe.buffer,X=Pe.type,ie=Pe.bytesPerElement,ve=X===i.INT||X===i.UNSIGNED_INT||se.gpuType===jl;if(se.isInterleavedBufferAttribute){let le=se.data,be=le.stride,Se=se.offset;if(le.isInstancedInterleavedBuffer){for(let Ie=0;Ie<G.locationSize;Ie++)f(G.location+Ie,le.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ie=0;Ie<G.locationSize;Ie++)m(G.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Ie=0;Ie<G.locationSize;Ie++)S(G.location+Ie,pe/G.locationSize,X,ue,be*ie,(Se+pe/G.locationSize*Ie)*ie,ve)}else{if(se.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)f(G.location+le,se.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let le=0;le<G.locationSize;le++)S(G.location+le,pe/G.locationSize,X,ue,pe*ie,pe/G.locationSize*le*ie,ve)}}else if(k!==void 0){let ue=k[te];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(G.location,ue);break;case 3:i.vertexAttrib3fv(G.location,ue);break;case 4:i.vertexAttrib4fv(G.location,ue);break;default:i.vertexAttrib1fv(G.location,ue)}}}}y()}function R(){I();for(let M in n){let P=n[M];for(let z in P){let F=P[z];for(let V in F)u(F[V].object),delete F[V];delete P[z]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let z in P){let F=P[z];for(let V in F)u(F[V].object),delete F[V];delete P[z]}delete n[M.id]}function A(M){for(let P in n){let z=n[P];if(z[M.id]===void 0)continue;let F=z[M.id];for(let V in F)u(F[V].object),delete F[V];delete z[M.id]}}function I(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function a0(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,n,1)}function l(c,u,d,p){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],p[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*p[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function l0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let I=A===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ni&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==On&&!I)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:R,maxSamples:T}}function c0(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Qn,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let h=d.length!==0||p||n!==0||r;return r=p,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,h){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let y=s?0:n,S=y*4,_=f.clippingState||null;l.value=_,_=u(g,p,S,h);for(let R=0;R!==S;++R)_[R]=t[R];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,h,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=h+x*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,_=h;S!==x;++S,_+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function u0(i){let e=new WeakMap;function t(o,a){return a===Ca?o.mapping=dr:a===Pa&&(o.mapping=fr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ca||a===Pa)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ul(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var kn=class extends so{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},rr=4,tu=[.125,.215,.35,.446,.526,.582],Ii=20,la=new kn,nu=new Ce,ca=null,ua=0,ha=0,da=!1,Pi=(1+Math.sqrt(5))/2,tr=1/Pi,iu=[new C(-Pi,tr,0),new C(Pi,tr,0),new C(-tr,0,Pi),new C(tr,0,Pi),new C(0,Pi,-tr),new C(0,Pi,tr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],vr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ca,ua,ha),this._renderer.xr.enabled=da,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Hn,format:Tn,colorSpace:Sr,depthBuffer:!1},r=ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h0(s)),this._blurMaterial=d0(s,e,t)}return r}_compileMaterial(e){let t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,n,r){let a=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(nu),u.toneMapping=xn,u.autoClear=!1;let h=new Vt({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new dt(new Cn,h),x=!1,m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,x=!0):(h.color.copy(nu),x=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let S=this._cubeSize;Ns(r,y*S,f>2?S:0,S,S),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===dr||e.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Ns(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,la)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=iu[(r-s-1)%iu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new dt(this._lodPlanes[r],c),p=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ii-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Ii;m>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let f=[],y=0;for(let A=0;A<Ii;++A){let I=A/x,w=Math.exp(-I*I/2);f.push(w),A===0?y+=w:A<m&&(y+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:S}=this;p.dTheta.value=g,p.mipInt.value=S-n;let _=this._sizeLods[r],R=3*_*(r>S-rr?r-S+rr:0),T=4*(this._cubeSize-_);Ns(t,R,T,3*_,2*_),l.setRenderTarget(t),l.render(d,la)}};function h0(i){let e=[],t=[],n=[],r=i,s=i-rr+1+tu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-rr?l=tu[o-i+rr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,x=3,m=2,f=1,y=new Float32Array(x*g*h),S=new Float32Array(m*g*h),_=new Float32Array(f*g*h);for(let T=0;T<h;T++){let A=T%3*2/3-1,I=T>2?0:-1,w=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(w,x*g*T),S.set(p,m*g*T);let M=[T,T,T,T,T,T];_.set(M,f*g*T)}let R=new At;R.setAttribute("position",new ft(y,x)),R.setAttribute("uv",new ft(S,m)),R.setAttribute("faceIndex",new ft(_,f)),e.push(R),r>rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ru(i,e,t){let n=new Yt(i,e,t);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function d0(i,e,t){let n=new Float32Array(Ii),r=new C(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uc(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function su(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ou(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function f0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ca||l===Pa,u=l===dr||l===fr;if(c||u){let d=e.get(a),p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new vr(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new vr(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function p0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Wr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function m0(i,e,t,n){let r={},s=new WeakMap;function o(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);for(let g in p.morphAttributes){let x=p.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}p.removeEventListener("dispose",o),delete r[p.id];let h=s.get(p);h&&(e.remove(h),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(d){let p=d.attributes;for(let g in p)e.update(p[g],i.ARRAY_BUFFER);let h=d.morphAttributes;for(let g in h){let x=h[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(d){let p=[],h=d.index,g=d.attributes.position,x=0;if(h!==null){let y=h.array;x=h.version;for(let S=0,_=y.length;S<_;S+=3){let R=y[S+0],T=y[S+1],A=y[S+2];p.push(R,T,T,A,A,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let S=0,_=y.length/3-1;S<_;S+=3){let R=S+0,T=S+1,A=S+2;p.push(R,T,T,A,A,R)}}else return;let m=new(ju(p)?ro:io)(p,1);m.version=x;let f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){let p=s.get(d);if(p){let h=d.index;h!==null&&p.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function g0(i,e,t){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,h){i.drawElements(n,h,s,p*o),t.update(h,n,1)}function c(p,h,g){g!==0&&(i.drawElementsInstanced(n,h,s,p*o,g),t.update(h,n,g))}function u(p,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,p,0,g);let m=0;for(let f=0;f<g;f++)m+=h[f];t.update(m,n,1)}function d(p,h,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/o,h[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,p,0,x,0,g);let f=0;for(let y=0;y<g;y++)f+=h[y]*x[y];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function x0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function v0(i,e,t){let n=new WeakMap,r=new lt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,p=n.get(a);if(p===void 0||p.count!==d){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};p!==void 0&&p.texture.dispose();let h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;h===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let _=a.attributes.position.count*S,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*R*4*d),A=new no(T,_,R,d);A.type=On,A.needsUpdate=!0;let I=S*4;for(let M=0;M<d;M++){let P=m[M],z=f[M],F=y[M],V=_*R*4*M;for(let W=0;W<P.count;W++){let k=W*I;h===!0&&(r.fromBufferAttribute(P,W),T[V+k+0]=r.x,T[V+k+1]=r.y,T[V+k+2]=r.z,T[V+k+3]=0),g===!0&&(r.fromBufferAttribute(z,W),T[V+k+4]=r.x,T[V+k+5]=r.y,T[V+k+6]=r.z,T[V+k+7]=0),x===!0&&(r.fromBufferAttribute(F,W),T[V+k+8]=r.x,T[V+k+9]=r.y,T[V+k+10]=r.z,T[V+k+11]=F.itemSize===4?r.w:1)}}p={count:d,texture:A,size:new ae(_,R)},n.set(a,p),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function _0(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var ao=class extends nn{constructor(e,t,n,r,s,o,a,l,c,u=or){if(u!==or&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===or&&(n=Ni),n===void 0&&u===mr&&(n=pr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ih=new nn,au=new ao(1,1),rh=new no,sh=new ll,oh=new oo,lu=[],cu=[],uu=new Float32Array(16),hu=new Float32Array(9),du=new Float32Array(4);function Tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=lu[r];if(s===void 0&&(s=new Float32Array(r),lu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Eo(i,e){let t=cu[e];t===void 0&&(t=new Int32Array(e),cu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function y0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function M0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function b0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function S0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function w0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;du.set(n),i.uniformMatrix2fv(this.addr,!1,du),Bt(t,n)}}function E0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;hu.set(n),i.uniformMatrix3fv(this.addr,!1,hu),Bt(t,n)}}function T0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;uu.set(n),i.uniformMatrix4fv(this.addr,!1,uu),Bt(t,n)}}function A0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function R0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function C0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function I0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function L0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function D0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function U0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function N0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(au.compareFunction=Qu,s=au):s=ih,t.setTexture2D(e||s,r)}function F0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||sh,r)}function O0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||oh,r)}function B0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||rh,r)}function z0(i){switch(i){case 5126:return y0;case 35664:return M0;case 35665:return b0;case 35666:return S0;case 35674:return w0;case 35675:return E0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return R0;case 35668:case 35672:return C0;case 35669:case 35673:return P0;case 5125:return I0;case 36294:return L0;case 36295:return D0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return B0}}function k0(i,e){i.uniform1fv(this.addr,e)}function H0(i,e){let t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function V0(i,e){let t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function G0(i,e){let t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function W0(i,e){let t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function X0(i,e){let t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function q0(i,e){let t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Y0(i,e){i.uniform1iv(this.addr,e)}function Z0(i,e){i.uniform2iv(this.addr,e)}function $0(i,e){i.uniform3iv(this.addr,e)}function J0(i,e){i.uniform4iv(this.addr,e)}function K0(i,e){i.uniform1uiv(this.addr,e)}function Q0(i,e){i.uniform2uiv(this.addr,e)}function j0(i,e){i.uniform3uiv(this.addr,e)}function eg(i,e){i.uniform4uiv(this.addr,e)}function tg(i,e,t){let n=this.cache,r=e.length,s=Eo(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ih,s[o])}function ng(i,e,t){let n=this.cache,r=e.length,s=Eo(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||sh,s[o])}function ig(i,e,t){let n=this.cache,r=e.length,s=Eo(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||oh,s[o])}function rg(i,e,t){let n=this.cache,r=e.length,s=Eo(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||rh,s[o])}function sg(i){switch(i){case 5126:return k0;case 35664:return H0;case 35665:return V0;case 35666:return G0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return Z0;case 35668:case 35672:return $0;case 35669:case 35673:return J0;case 5125:return K0;case 36294:return Q0;case 36295:return j0;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return rg}}var hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=z0(t.type)}},dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sg(t.type)}},fl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},fa=/(\w+)(\])?(\[|\.)?/g;function fu(i,e){i.seq.push(e),i.map[e.id]=e}function og(i,e,t){let n=i.name,r=n.length;for(fa.lastIndex=0;;){let s=fa.exec(n),o=fa.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){fu(t,c===void 0?new hl(a,i,e):new dl(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new fl(a),fu(t,d)),t=d}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);og(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function pu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ag=37297,lg=0;function cg(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var mu=new nt;function ug(i){ht._getMatrix(mu,ht.workingColorSpace,i);let e=`mat3( ${mu.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case wo:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+cg(i.getShaderSource(e),o)}else return r}function hg(i,e){let t=ug(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dg(i,e){let t;switch(e){case Zl:t="Linear";break;case $l:t="Reinhard";break;case Jl:t="Cineon";break;case hs:t="ACESFilmic";break;case Kl:t="AgX";break;case Ql:t="Neutral";break;case Cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fs=new C;function fg(){ht.getLuminanceCoefficients(Fs);let i=Fs.x.toFixed(4),e=Fs.y.toFixed(4),t=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function mg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xr(i){return i!==""}function xu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(i){return i.replace(xg,_g)}var vg=new Map;function _g(i,e){let t=ot[e];if(t===void 0){let n=vg.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pl(t)}var yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(i){return i.replace(yg,Mg)}function Mg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function bg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function Sg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case fr:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fr&&(e="ENVMAP_MODE_REFRACTION"),e}function Eg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yl:e="ENVMAP_BLENDING_MULTIPLY";break;case Ad:e="ENVMAP_BLENDING_MIX";break;case Rd:e="ENVMAP_BLENDING_ADD";break}return e}function Tg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ag(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=bg(t),c=Sg(t),u=wg(t),d=Eg(t),p=Tg(t),h=pg(t),g=mg(s),x=r.createProgram(),m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xr).join(`
`),f.length>0&&(f+=`
`)):(m=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),f=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?ot.tonemapping_pars_fragment:"",t.toneMapping!==xn?dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,hg("linearToOutputTexel",t.outputColorSpace),fg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),o=pl(o),o=xu(o,t),o=vu(o,t),a=pl(a),a=xu(a,t),a=vu(a,t),o=_u(o),a=_u(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=y+m+o,_=y+f+a,R=pu(r,r.VERTEX_SHADER,S),T=pu(r,r.FRAGMENT_SHADER,_);r.attachShader(x,R),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let z=r.getProgramInfoLog(x).trim(),F=r.getShaderInfoLog(R).trim(),V=r.getShaderInfoLog(T).trim(),W=!0,k=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,R,T);else{let te=gu(r,R,"vertex"),G=gu(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+te+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||V==="")&&(k=!1);k&&(P.diagnostics={runnable:W,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:f}})}r.deleteShader(R),r.deleteShader(T),I=new cr(r,x),w=gg(r,x)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,ag)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var Rg=0,ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gl(e),t.set(e,n)),n}},gl=class{constructor(e){this.id=Rg++,this.code=e,this.usedTimes=0}};function Cg(i,e,t,n,r,s,o){let a=new Qr,l=new ml,c=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,P,z,F){let V=z.fog,W=F.geometry,k=w.isMeshStandardMaterial?z.environment:null,te=(w.isMeshStandardMaterial?t:e).get(w.envMap||k),G=te&&te.mapping===So?te.image.height:null,se=g[w.type];w.precision!==null&&(h=r.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));let ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=ue!==void 0?ue.length:0,Pe=0;W.morphAttributes.position!==void 0&&(Pe=1),W.morphAttributes.normal!==void 0&&(Pe=2),W.morphAttributes.color!==void 0&&(Pe=3);let Ge,X,ie,ve;if(se){let Y=Nn[se];Ge=Y.vertexShader,X=Y.fragmentShader}else Ge=w.vertexShader,X=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),ve=l.getFragmentShaderID(w);let le=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Se=F.isInstancedMesh===!0,Ie=F.isBatchedMesh===!0,Ze=!!w.map,He=!!w.matcap,qe=!!te,U=!!w.aoMap,bt=!!w.lightMap,Fe=!!w.bumpMap,me=!!w.normalMap,xe=!!w.displacementMap,$e=!!w.emissiveMap,we=!!w.metalnessMap,E=!!w.roughnessMap,v=w.anisotropy>0,O=w.clearcoat>0,J=w.dispersion>0,j=w.iridescence>0,$=w.sheen>0,ye=w.transmission>0,Q=v&&!!w.anisotropyMap,ne=O&&!!w.clearcoatMap,Te=O&&!!w.clearcoatNormalMap,re=O&&!!w.clearcoatRoughnessMap,oe=j&&!!w.iridescenceMap,Re=j&&!!w.iridescenceThicknessMap,Me=$&&!!w.sheenColorMap,fe=$&&!!w.sheenRoughnessMap,We=!!w.specularMap,Oe=!!w.specularColorMap,et=!!w.specularIntensityMap,L=ye&&!!w.transmissionMap,he=ye&&!!w.thicknessMap,q=!!w.gradientMap,K=!!w.alphaMap,Z=w.alphaTest>0,ee=!!w.alphaHash,Ee=!!w.extensions,Je=xn;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Je=i.toneMapping);let St={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:Ge,fragmentShader:X,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:ve,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:Ie,batchingColor:Ie&&F._colorsTexture!==null,instancing:Se,instancingColor:Se&&F.instanceColor!==null,instancingMorph:Se&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Sr,alphaToCoverage:!!w.alphaToCoverage,map:Ze,matcap:He,envMap:qe,envMapMode:qe&&te.mapping,envMapCubeUVHeight:G,aoMap:U,lightMap:bt,bumpMap:Fe,normalMap:me,displacementMap:p&&xe,emissiveMap:$e,normalMapObjectSpace:me&&w.normalMapType===Ld,normalMapTangentSpace:me&&w.normalMapType===ac,metalnessMap:we,roughnessMap:E,anisotropy:v,anisotropyMap:Q,clearcoat:O,clearcoatMap:ne,clearcoatNormalMap:Te,clearcoatRoughnessMap:re,dispersion:J,iridescence:j,iridescenceMap:oe,iridescenceThicknessMap:Re,sheen:$,sheenColorMap:Me,sheenRoughnessMap:fe,specularMap:We,specularColorMap:Oe,specularIntensityMap:et,transmission:ye,transmissionMap:L,thicknessMap:he,gradientMap:q,opaque:w.transparent===!1&&w.blending===sr&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:Z,alphaHash:ee,combine:w.combine,mapUv:Ze&&x(w.map.channel),aoMapUv:U&&x(w.aoMap.channel),lightMapUv:bt&&x(w.lightMap.channel),bumpMapUv:Fe&&x(w.bumpMap.channel),normalMapUv:me&&x(w.normalMap.channel),displacementMapUv:xe&&x(w.displacementMap.channel),emissiveMapUv:$e&&x(w.emissiveMap.channel),metalnessMapUv:we&&x(w.metalnessMap.channel),roughnessMapUv:E&&x(w.roughnessMap.channel),anisotropyMapUv:Q&&x(w.anisotropyMap.channel),clearcoatMapUv:ne&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Te&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:fe&&x(w.sheenRoughnessMap.channel),specularMapUv:We&&x(w.specularMap.channel),specularColorMapUv:Oe&&x(w.specularColorMap.channel),specularIntensityMapUv:et&&x(w.specularIntensityMap.channel),transmissionMapUv:L&&x(w.transmissionMap.channel),thicknessMapUv:he&&x(w.thicknessMap.channel),alphaMapUv:K&&x(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(me||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Ze||K),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:be,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Pe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:Ze&&w.map.isVideoTexture===!0&&ht.getTransfer(w.map.colorSpace)===yt,decodeVideoTextureEmissive:$e&&w.emissiveMap.isVideoTexture===!0&&ht.getTransfer(w.emissiveMap.colorSpace)===yt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===tn,flipSided:w.side===Dt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ee&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&w.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function f(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(M,w),S(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let M=g[w.type],P;if(M){let z=Nn[M];P=cc.clone(z.uniforms)}else P=w.uniforms;return P}function R(w,M){let P;for(let z=0,F=u.length;z<F;z++){let V=u[z];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Ag(i,M,w,s),u.push(P)),P}function T(w){if(--w.usedTimes===0){let M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:I}}function Pg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Ig(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bu(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,p,h,g,x,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:h,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=h,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function a(d,p,h,g,x,m){let f=o(d,p,h,g,x,m);h.transmission>0?n.push(f):h.transparent===!0?r.push(f):t.push(f)}function l(d,p,h,g,x,m){let f=o(d,p,h,g,x,m);h.transmission>0?n.unshift(f):h.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,p){t.length>1&&t.sort(d||Ig),n.length>1&&n.sort(p||Mu),r.length>1&&r.sort(p||Mu)}function u(){for(let d=e,p=i.length;d<p;d++){let h=i[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Lg(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new bu,i.set(n,[o])):r>=s.length?(o=new bu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ce};break;case"SpotLight":t={position:new C,direction:new C,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Ug(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ng=0;function Fg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Og(i){let e=new Dg,t=Ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let r=new C,s=new Mt,o=new Mt;function a(c){let u=0,d=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let h=0,g=0,x=0,m=0,f=0,y=0,S=0,_=0,R=0,T=0,A=0;c.sort(Fg);for(let w=0,M=c.length;w<M;w++){let P=c[w],z=P.color,F=P.intensity,V=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=z.r*F,d+=z.g*F,p+=z.b*F;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],F);A++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let te=P.shadow,G=t.get(P);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,n.directionalShadow[h]=G,n.directionalShadowMap[h]=W,n.directionalShadowMatrix[h]=P.shadow.matrix,y++}n.directional[h]=k,h++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(z).multiplyScalar(F),k.distance=V,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[x]=k;let te=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,te.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[x]=te.matrix,P.castShadow){let G=t.get(P);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=W,_++}x++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(z).multiplyScalar(F),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let te=P.shadow,G=t.get(P);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,G.shadowCameraNear=te.camera.near,G.shadowCameraFar=te.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=k,g++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(F),k.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;let I=n.hash;(I.directionalLength!==h||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==y||I.numPointShadows!==S||I.numSpotShadows!==_||I.numSpotMaps!==R||I.numLightProbes!==A)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=h,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=y,I.numPointShadows=S,I.numSpotShadows=_,I.numSpotMaps=R,I.numLightProbes=A,n.version=Ng++)}function l(c,u){let d=0,p=0,h=0,g=0,x=0,m=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let S=c[f];if(S.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(S.isSpotLight){let _=n.spot[h];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let _=n.point[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Su(i){let e=new Og(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Bg(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Su(i),e.set(r,[a])):s>=o.length?(a=new Su(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var es=class extends zn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xl=class extends zn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kg=`uniform sampler2D shadow_pass;
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
}`;function Hg(i,e,t){let n=new jr,r=new ae,s=new ae,o=new lt,a=new es({depthPacking:oc}),l=new xl,c={},u=t.maxTextureSize,d={[An]:Dt,[Dt]:An,[tn]:tn},p=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:zg,fragmentShader:kg}),h=p.clone();h.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new dt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let f=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Bn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=f!==Kn&&this.type===Kn,V=f===Kn&&this.type!==Kn;for(let W=0,k=T.length;W<k;W++){let te=T[W],G=te.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let se=G.getFrameExtents();if(r.multiply(se),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,G.mapSize.y=s.y)),G.map===null||F===!0||V===!0){let pe=this.type!==Kn?{minFilter:cn,magFilter:cn}:{};G.map!==null&&G.map.dispose(),G.map=new Yt(r.x,r.y,pe),G.map.texture.name=te.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let ue=G.getViewportCount();for(let pe=0;pe<ue;pe++){let Pe=G.getViewport(pe);o.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),z.viewport(o),G.updateMatrices(te,pe),n=G.getFrustum(),_(A,I,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===Kn&&y(G,I),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,P)};function y(T,A){let I=e.update(x);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Yt(r.x,r.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,p,x,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,h,x,null)}function S(T,A,I,w){let M=null,P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let z=M.uuid,F=A.uuid,V=c[z];V===void 0&&(V={},c[z]=V);let W=V[F];W===void 0&&(W=M.clone(),V[F]=W,A.addEventListener("dispose",R)),M=W}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Kn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=i.properties.get(M);z.light=I}return M}function _(T,A,I,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let F=e.update(T),V=T.material;if(Array.isArray(V)){let W=F.groups;for(let k=0,te=W.length;k<te;k++){let G=W[k],se=V[G.materialIndex];if(se&&se.visible){let ue=S(T,se,w,M);T.onBeforeShadow(i,T,A,I,F,ue,G),i.renderBufferDirect(I,null,F,ue,T,G),T.onAfterShadow(i,T,A,I,F,ue,G)}}}else if(V.visible){let W=S(T,V,w,M);T.onBeforeShadow(i,T,A,I,F,W,null),i.renderBufferDirect(I,null,F,W,T,null),T.onAfterShadow(i,T,A,I,F,W,null)}}let z=T.children;for(let F=0,V=z.length;F<V;F++)_(z[F],A,I,w,M)}function R(T){T.target.removeEventListener("dispose",R);for(let I in c){let w=c[I],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var Vg={[ba]:Sa,[wa]:Aa,[Ea]:Ra,[hr]:Ta,[Sa]:ba,[Aa]:wa,[Ra]:Ea,[Ta]:hr};function Gg(i,e){function t(){let L=!1,he=new lt,q=null,K=new lt(0,0,0,0);return{setMask:function(Z){q!==Z&&!L&&(i.colorMask(Z,Z,Z,Z),q=Z)},setLocked:function(Z){L=Z},setClear:function(Z,ee,Ee,Je,St){St===!0&&(Z*=Je,ee*=Je,Ee*=Je),he.set(Z,ee,Ee,Je),K.equals(he)===!1&&(i.clearColor(Z,ee,Ee,Je),K.copy(he))},reset:function(){L=!1,q=null,K.set(-1,0,0,0)}}}function n(){let L=!1,he=!1,q=null,K=null,Z=null;return{setReversed:function(ee){if(he!==ee){let Ee=e.get("EXT_clip_control");he?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT);let Je=Z;Z=null,this.setClear(Je)}he=ee},getReversed:function(){return he},setTest:function(ee){ee?le(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ee){q!==ee&&!L&&(i.depthMask(ee),q=ee)},setFunc:function(ee){if(he&&(ee=Vg[ee]),K!==ee){switch(ee){case ba:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case Ea:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ee}},setLocked:function(ee){L=ee},setClear:function(ee){Z!==ee&&(he&&(ee=1-ee),i.clearDepth(ee),Z=ee)},reset:function(){L=!1,q=null,K=null,Z=null,he=!1}}}function r(){let L=!1,he=null,q=null,K=null,Z=null,ee=null,Ee=null,Je=null,St=null;return{setTest:function(Y){L||(Y?le(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Y){he!==Y&&!L&&(i.stencilMask(Y),he=Y)},setFunc:function(Y,Be,rt){(q!==Y||K!==Be||Z!==rt)&&(i.stencilFunc(Y,Be,rt),q=Y,K=Be,Z=rt)},setOp:function(Y,Be,rt){(ee!==Y||Ee!==Be||Je!==rt)&&(i.stencilOp(Y,Be,rt),ee=Y,Ee=Be,Je=rt)},setLocked:function(Y){L=Y},setClear:function(Y){St!==Y&&(i.clearStencil(Y),St=Y)},reset:function(){L=!1,he=null,q=null,K=null,Z=null,ee=null,Ee=null,Je=null,St=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},p=new WeakMap,h=[],g=null,x=!1,m=null,f=null,y=null,S=null,_=null,R=null,T=null,A=new Ce(0,0,0),I=0,w=!1,M=null,P=null,z=null,F=null,V=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,te=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=te>=2);let se=null,ue={},pe=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),Ge=new lt().fromArray(pe),X=new lt().fromArray(Pe);function ie(L,he,q,K){let Z=new Uint8Array(4),ee=i.createTexture();i.bindTexture(L,ee),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<q;Ee++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,Z):i.texImage2D(he+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Z);return ee}let ve={};ve[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(hr),Fe(!1),me(Ec),le(i.CULL_FACE),U(Bn);function le(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function be(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Se(L,he){return d[L]!==he?(i.bindFramebuffer(L,he),d[L]=he,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=he),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Ie(L,he){let q=h,K=!1;if(L){q=p.get(he),q===void 0&&(q=[],p.set(he,q));let Z=L.textures;if(q.length!==Z.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Ee=Z.length;ee<Ee;ee++)q[ee]=i.COLOR_ATTACHMENT0+ee;q.length=Z.length,K=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,K=!0);K&&i.drawBuffers(q)}function Ze(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let He={[jn]:i.FUNC_ADD,[hd]:i.FUNC_SUBTRACT,[dd]:i.FUNC_REVERSE_SUBTRACT};He[fd]=i.MIN,He[pd]=i.MAX;let qe={[md]:i.ZERO,[bo]:i.ONE,[gd]:i.SRC_COLOR,[Ma]:i.SRC_ALPHA,[bd]:i.SRC_ALPHA_SATURATE,[yd]:i.DST_COLOR,[vd]:i.DST_ALPHA,[xd]:i.ONE_MINUS_SRC_COLOR,[ur]:i.ONE_MINUS_SRC_ALPHA,[Md]:i.ONE_MINUS_DST_COLOR,[_d]:i.ONE_MINUS_DST_ALPHA,[Sd]:i.CONSTANT_COLOR,[wd]:i.ONE_MINUS_CONSTANT_COLOR,[Ed]:i.CONSTANT_ALPHA,[Td]:i.ONE_MINUS_CONSTANT_ALPHA};function U(L,he,q,K,Z,ee,Ee,Je,St,Y){if(L===Bn){x===!0&&(be(i.BLEND),x=!1);return}if(x===!1&&(le(i.BLEND),x=!0),L!==ql){if(L!==m||Y!==w){if((f!==jn||_!==jn)&&(i.blendEquation(i.FUNC_ADD),f=jn,_=jn),Y)switch(L){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,S=null,R=null,T=null,A.set(0,0,0),I=0,m=L,w=Y}return}Z=Z||he,ee=ee||q,Ee=Ee||K,(he!==f||Z!==_)&&(i.blendEquationSeparate(He[he],He[Z]),f=he,_=Z),(q!==y||K!==S||ee!==R||Ee!==T)&&(i.blendFuncSeparate(qe[q],qe[K],qe[ee],qe[Ee]),y=q,S=K,R=ee,T=Ee),(Je.equals(A)===!1||St!==I)&&(i.blendColor(Je.r,Je.g,Je.b,St),A.copy(Je),I=St),m=L,w=!1}function bt(L,he){L.side===tn?be(i.CULL_FACE):le(i.CULL_FACE);let q=L.side===Dt;he&&(q=!q),Fe(q),L.blending===sr&&L.transparent===!1?U(Bn):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),$e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function me(L){L!==cd?(le(i.CULL_FACE),L!==P&&(L===Ec?i.cullFace(i.BACK):L===ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),P=L}function xe(L){L!==z&&(k&&i.lineWidth(L),z=L)}function $e(L,he,q){L?(le(i.POLYGON_OFFSET_FILL),(F!==he||V!==q)&&(i.polygonOffset(he,q),F=he,V=q)):be(i.POLYGON_OFFSET_FILL)}function we(L){L?le(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function E(L){L===void 0&&(L=i.TEXTURE0+W-1),se!==L&&(i.activeTexture(L),se=L)}function v(L,he,q){q===void 0&&(se===null?q=i.TEXTURE0+W-1:q=se);let K=ue[q];K===void 0&&(K={type:void 0,texture:void 0},ue[q]=K),(K.type!==L||K.texture!==he)&&(se!==q&&(i.activeTexture(q),se=q),i.bindTexture(L,he||ve[L]),K.type=L,K.texture=he)}function O(){let L=ue[se];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(L){Ge.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ge.copy(L))}function fe(L){X.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function We(L,he){let q=c.get(he);q===void 0&&(q=new WeakMap,c.set(he,q));let K=q.get(L);K===void 0&&(K=i.getUniformBlockIndex(he,L.name),q.set(L,K))}function Oe(L,he){let K=c.get(he).get(L);l.get(he)!==K&&(i.uniformBlockBinding(he,K,L.__bindingPointIndex),l.set(he,K))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,ue={},d={},p=new WeakMap,h=[],g=null,x=!1,m=null,f=null,y=null,S=null,_=null,R=null,T=null,A=new Ce(0,0,0),I=0,w=!1,M=null,P=null,z=null,F=null,V=null,Ge.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:be,bindFramebuffer:Se,drawBuffers:Ie,useProgram:Ze,setBlending:U,setMaterial:bt,setFlipSided:Fe,setCullFace:me,setLineWidth:xe,setPolygonOffset:$e,setScissorTest:we,activeTexture:E,bindTexture:v,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:j,texImage2D:oe,texImage3D:Re,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:Te,texStorage3D:re,texSubImage2D:$,texSubImage3D:ye,compressedTexSubImage2D:Q,compressedTexSubImage3D:ne,scissor:Me,viewport:fe,reset:et}}function wu(i,e,t,n){let r=Wg(n);switch(t){case qu:return i*e;case Zu:return i*e;case $u:return i*e*2;case nc:return i*e/r.components*r.byteLength;case ic:return i*e/r.components*r.byteLength;case Ju:return i*e*2/r.components*r.byteLength;case rc:return i*e*2/r.components*r.byteLength;case Yu:return i*e*3/r.components*r.byteLength;case Tn:return i*e*4/r.components*r.byteLength;case sc:return i*e*4/r.components*r.byteLength;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $s:case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ua:case Fa:return Math.max(i,16)*Math.max(e,8)/4;case Da:case Na:return Math.max(i,8)*Math.max(e,8)/2;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ks:case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ku:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case il:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wg(i){switch(i){case ni:case Gu:return{byteLength:1,components:1};case Jr:case Wu:case Hn:return{byteLength:2,components:1};case ec:case tc:return{byteLength:2,components:4};case Ni:case jl:case On:return{byteLength:4,components:1};case Xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xg(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,u=new WeakMap,d,p=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return h?new OffscreenCanvas(E,v):eo("canvas")}function x(E,v,O){let J=1,j=we(E);if((j.width>O||j.height>O)&&(J=O/Math.max(j.width,j.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let $=Math.floor(J*j.width),ye=Math.floor(J*j.height);d===void 0&&(d=g($,ye));let Q=v?g($,ye):d;return Q.width=$,Q.height=ye,Q.getContext("2d").drawImage(E,0,0,$,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+ye+")."),Q}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,v,O,J,j=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=v;if(v===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),v===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),v===i.RGBA){let ye=j?wo:ht.getTransfer(J);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=ye===yt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(E,v){let O;return E?v===null||v===Ni||v===pr?O=i.DEPTH24_STENCIL8:v===On?O=i.DEPTH32F_STENCIL8:v===Jr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ni||v===pr?O=i.DEPTH_COMPONENT24:v===On?O=i.DEPTH_COMPONENT32F:v===Jr&&(O=i.DEPTH_COMPONENT16),O}function R(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==cn&&E.minFilter!==Fn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function T(E){let v=E.target;v.removeEventListener("dispose",T),I(v),v.isVideoTexture&&u.delete(v)}function A(E){let v=E.target;v.removeEventListener("dispose",A),M(v)}function I(E){let v=n.get(E);if(v.__webglInit===void 0)return;let O=E.source,J=p.get(O);if(J){let j=J[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(E),Object.keys(J).length===0&&p.delete(O)}n.remove(E)}function w(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let O=E.source,J=p.get(O);delete J[v.__cacheKey],o.memory.textures--}function M(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let j=0;j<v.__webglFramebuffer[J].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[J][j]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=E.textures;for(let J=0,j=O.length;J<j;J++){let $=n.get(O[J]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(O[J])}n.remove(E)}let P=0;function z(){P=0}function F(){let E=P;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),P+=1,E}function V(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function W(E,v){let O=n.get(E);if(E.isVideoTexture&&xe(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){let J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,E,v);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function k(E,v){let O=n.get(E);if(E.version>0&&O.__version!==E.version){X(O,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function te(E,v){let O=n.get(E);if(E.version>0&&O.__version!==E.version){X(O,E,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function G(E,v){let O=n.get(E);if(E.version>0&&O.__version!==E.version){ie(O,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let se={[Ia]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},ue={[cn]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[gs]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[ko]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},pe={[Dd]:i.NEVER,[zd]:i.ALWAYS,[Ud]:i.LESS,[Qu]:i.LEQUAL,[Nd]:i.EQUAL,[Bd]:i.GEQUAL,[Fd]:i.GREATER,[Od]:i.NOTEQUAL};function Pe(E,v){if(v.type===On&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Fn||v.magFilter===ko||v.magFilter===gs||v.magFilter===Di||v.minFilter===Fn||v.minFilter===ko||v.minFilter===gs||v.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,se[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,se[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,se[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ue[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===cn||v.minFilter!==gs&&v.minFilter!==Di||v.type===On&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ge(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",T));let J=v.source,j=p.get(J);j===void 0&&(j={},p.set(J,j));let $=V(v);if($!==E.__cacheKey){j[$]===void 0&&(j[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),j[$].usedTimes++;let ye=j[E.__cacheKey];ye!==void 0&&(j[E.__cacheKey].usedTimes--,ye.usedTimes===0&&w(v)),E.__cacheKey=$,E.__webglTexture=j[$].texture}return O}function X(E,v,O){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);let j=Ge(E,v),$=v.source;t.bindTexture(J,E.__webglTexture,i.TEXTURE0+O);let ye=n.get($);if($.version!==ye.__version||j===!0){t.activeTexture(i.TEXTURE0+O);let Q=ht.getPrimaries(ht.workingColorSpace),ne=v.colorSpace===mi?null:ht.getPrimaries(v.colorSpace),Te=v.colorSpace===mi||Q===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let re=x(v.image,!1,r.maxTextureSize);re=$e(v,re);let oe=s.convert(v.format,v.colorSpace),Re=s.convert(v.type),Me=S(v.internalFormat,oe,Re,v.colorSpace,v.isVideoTexture);Pe(J,v);let fe,We=v.mipmaps,Oe=v.isVideoTexture!==!0,et=ye.__version===void 0||j===!0,L=$.dataReady,he=R(v,re);if(v.isDepthTexture)Me=_(v.format===mr,v.type),et&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,Me,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Me,re.width,re.height,0,oe,Re,null));else if(v.isDataTexture)if(We.length>0){Oe&&et&&t.texStorage2D(i.TEXTURE_2D,he,Me,We[0].width,We[0].height);for(let q=0,K=We.length;q<K;q++)fe=We[q],Oe?L&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,fe.width,fe.height,oe,Re,fe.data):t.texImage2D(i.TEXTURE_2D,q,Me,fe.width,fe.height,0,oe,Re,fe.data);v.generateMipmaps=!1}else Oe?(et&&t.texStorage2D(i.TEXTURE_2D,he,Me,re.width,re.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,oe,Re,re.data)):t.texImage2D(i.TEXTURE_2D,0,Me,re.width,re.height,0,oe,Re,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Oe&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Me,We[0].width,We[0].height,re.depth);for(let q=0,K=We.length;q<K;q++)if(fe=We[q],v.format!==Tn)if(oe!==null)if(Oe){if(L)if(v.layerUpdates.size>0){let Z=wu(fe.width,fe.height,v.format,v.type);for(let ee of v.layerUpdates){let Ee=fe.data.subarray(ee*Z/fe.data.BYTES_PER_ELEMENT,(ee+1)*Z/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ee,fe.width,fe.height,1,oe,Ee)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,fe.width,fe.height,re.depth,oe,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Me,fe.width,fe.height,re.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,fe.width,fe.height,re.depth,oe,Re,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,Me,fe.width,fe.height,re.depth,0,oe,Re,fe.data)}else{Oe&&et&&t.texStorage2D(i.TEXTURE_2D,he,Me,We[0].width,We[0].height);for(let q=0,K=We.length;q<K;q++)fe=We[q],v.format!==Tn?oe!==null?Oe?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,fe.width,fe.height,oe,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,q,Me,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?L&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,fe.width,fe.height,oe,Re,fe.data):t.texImage2D(i.TEXTURE_2D,q,Me,fe.width,fe.height,0,oe,Re,fe.data)}else if(v.isDataArrayTexture)if(Oe){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Me,re.width,re.height,re.depth),L)if(v.layerUpdates.size>0){let q=wu(re.width,re.height,v.format,v.type);for(let K of v.layerUpdates){let Z=re.data.subarray(K*q/re.data.BYTES_PER_ELEMENT,(K+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,re.width,re.height,1,oe,Re,Z)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,oe,Re,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,re.width,re.height,re.depth,0,oe,Re,re.data);else if(v.isData3DTexture)Oe?(et&&t.texStorage3D(i.TEXTURE_3D,he,Me,re.width,re.height,re.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,oe,Re,re.data)):t.texImage3D(i.TEXTURE_3D,0,Me,re.width,re.height,re.depth,0,oe,Re,re.data);else if(v.isFramebufferTexture){if(et)if(Oe)t.texStorage2D(i.TEXTURE_2D,he,Me,re.width,re.height);else{let q=re.width,K=re.height;for(let Z=0;Z<he;Z++)t.texImage2D(i.TEXTURE_2D,Z,Me,q,K,0,oe,Re,null),q>>=1,K>>=1}}else if(We.length>0){if(Oe&&et){let q=we(We[0]);t.texStorage2D(i.TEXTURE_2D,he,Me,q.width,q.height)}for(let q=0,K=We.length;q<K;q++)fe=We[q],Oe?L&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,oe,Re,fe):t.texImage2D(i.TEXTURE_2D,q,Me,oe,Re,fe);v.generateMipmaps=!1}else if(Oe){if(et){let q=we(re);t.texStorage2D(i.TEXTURE_2D,he,Me,q.width,q.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Re,re)}else t.texImage2D(i.TEXTURE_2D,0,Me,oe,Re,re);m(v)&&f(J),ye.__version=$.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ie(E,v,O){if(v.image.length!==6)return;let J=Ge(E,v),j=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let $=n.get(j);if(j.version!==$.__version||J===!0){t.activeTexture(i.TEXTURE0+O);let ye=ht.getPrimaries(ht.workingColorSpace),Q=v.colorSpace===mi?null:ht.getPrimaries(v.colorSpace),ne=v.colorSpace===mi||ye===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Te=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let K=0;K<6;K++)!Te&&!re?oe[K]=x(v.image[K],!0,r.maxCubemapSize):oe[K]=re?v.image[K].image:v.image[K],oe[K]=$e(v,oe[K]);let Re=oe[0],Me=s.convert(v.format,v.colorSpace),fe=s.convert(v.type),We=S(v.internalFormat,Me,fe,v.colorSpace),Oe=v.isVideoTexture!==!0,et=$.__version===void 0||J===!0,L=j.dataReady,he=R(v,Re);Pe(i.TEXTURE_CUBE_MAP,v);let q;if(Te){Oe&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,We,Re.width,Re.height);for(let K=0;K<6;K++){q=oe[K].mipmaps;for(let Z=0;Z<q.length;Z++){let ee=q[Z];v.format!==Tn?Me!==null?Oe?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z,0,0,ee.width,ee.height,Me,ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z,We,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z,0,0,ee.width,ee.height,Me,fe,ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z,We,ee.width,ee.height,0,Me,fe,ee.data)}}}else{if(q=v.mipmaps,Oe&&et){q.length>0&&he++;let K=we(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,We,K.width,K.height)}for(let K=0;K<6;K++)if(re){Oe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,oe[K].width,oe[K].height,Me,fe,oe[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,oe[K].width,oe[K].height,0,Me,fe,oe[K].data);for(let Z=0;Z<q.length;Z++){let Ee=q[Z].image[K].image;Oe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z+1,0,0,Ee.width,Ee.height,Me,fe,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z+1,We,Ee.width,Ee.height,0,Me,fe,Ee.data)}}else{Oe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me,fe,oe[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,Me,fe,oe[K]);for(let Z=0;Z<q.length;Z++){let ee=q[Z];Oe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z+1,0,0,Me,fe,ee.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z+1,We,Me,fe,ee.image[K])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),$.__version=j.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ve(E,v,O,J,j,$){let ye=s.convert(O.format,O.colorSpace),Q=s.convert(O.type),ne=S(O.internalFormat,ye,Q,O.colorSpace),Te=n.get(v),re=n.get(O);if(re.__renderTarget=v,!Te.__hasExternalTextures){let oe=Math.max(1,v.width>>$),Re=Math.max(1,v.height>>$);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,$,ne,oe,Re,v.depth,0,ye,Q,null):t.texImage2D(j,$,ne,oe,Re,0,ye,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),me(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,j,re.__webglTexture,0,Fe(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,j,re.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(E,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let J=v.depthTexture,j=J&&J.isDepthTexture?J.type:null,$=_(v.stencilBuffer,j),ye=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=Fe(v);me(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,$,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,E)}else{let J=v.textures;for(let j=0;j<J.length;j++){let $=J[j],ye=s.convert($.format,$.colorSpace),Q=s.convert($.type),ne=S($.internalFormat,ye,Q,$.colorSpace),Te=Fe(v);O&&me(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ne,v.width,v.height):me(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,ne,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ne,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);let j=J.__webglTexture,$=Fe(v);if(v.depthTexture.format===or)me(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(v.depthTexture.format===mr)me(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Se(E){let v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let J=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",j)};J.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=J}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");be(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),le(v.__webglDepthbuffer[J],E,!1);else{let j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),le(v.__webglDepthbuffer,E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(E,v,O){let J=n.get(E);v!==void 0&&ve(J.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Se(E)}function Ze(E){let v=E.texture,O=n.get(E),J=n.get(v);E.addEventListener("dispose",A);let j=E.textures,$=E.isWebGLCubeRenderTarget===!0,ye=j.length>1;if(ye||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[Q]=[];for(let ne=0;ne<v.mipmaps.length;ne++)O.__webglFramebuffer[Q][ne]=i.createFramebuffer()}else O.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)O.__webglFramebuffer[Q]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ye)for(let Q=0,ne=j.length;Q<ne;Q++){let Te=n.get(j[Q]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&me(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){let ne=j[Q];O.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Q]);let Te=s.convert(ne.format,ne.colorSpace),re=s.convert(ne.type),oe=S(ne.internalFormat,Te,re,ne.colorSpace,E.isXRRenderTarget===!0),Re=Fe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,oe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,O.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),le(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)ve(O.__webglFramebuffer[Q][ne],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else ve(O.__webglFramebuffer[Q],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let Q=0,ne=j.length;Q<ne;Q++){let Te=j[Q],re=n.get(Te);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),Pe(i.TEXTURE_2D,Te),ve(O.__webglFramebuffer,E,Te,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,0),m(Te)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,J.__webglTexture),Pe(Q,v),v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)ve(O.__webglFramebuffer[ne],E,v,i.COLOR_ATTACHMENT0,Q,ne);else ve(O.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,Q,0);m(v)&&f(Q),t.unbindTexture()}E.depthBuffer&&Se(E)}function He(E){let v=E.textures;for(let O=0,J=v.length;O<J;O++){let j=v[O];if(m(j)){let $=y(E),ye=n.get(j).__webglTexture;t.bindTexture($,ye),f($),t.unbindTexture()}}}let qe=[],U=[];function bt(E){if(E.samples>0){if(me(E)===!1){let v=E.textures,O=E.width,J=E.height,j=i.COLOR_BUFFER_BIT,$=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(E),Q=v.length>1;if(Q)for(let ne=0;ne<v.length;ne++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ne=0;ne<v.length;ne++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ne]);let Te=n.get(v[ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,j,i.NEAREST),l===!0&&(qe.length=0,U.length=0,qe.push(i.COLOR_ATTACHMENT0+ne),E.depthBuffer&&E.resolveDepthBuffer===!1&&(qe.push($),U.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ne=0;ne<v.length;ne++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ne]);let Te=n.get(v[ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Fe(E){return Math.min(r.maxSamples,E.samples)}function me(E){let v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function xe(E){let v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function $e(E,v){let O=E.colorSpace,J=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Sr&&O!==mi&&(ht.getTransfer(O)===yt?(J!==Tn||j!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function we(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=te,this.setTextureCube=G,this.rebindTextures=Ie,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=me}function qg(i,e){function t(n,r=mi){let s,o=ht.getTransfer(r);if(n===ni)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gu)return i.BYTE;if(n===Wu)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===jl)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===qu)return i.ALPHA;if(n===Yu)return i.RGB;if(n===Tn)return i.RGBA;if(n===Zu)return i.LUMINANCE;if(n===$u)return i.LUMINANCE_ALPHA;if(n===or)return i.DEPTH_COMPONENT;if(n===mr)return i.DEPTH_STENCIL;if(n===nc)return i.RED;if(n===ic)return i.RED_INTEGER;if(n===Ju)return i.RG;if(n===rc)return i.RG_INTEGER;if(n===sc)return i.RGBA_INTEGER;if(n===Ys||n===Zs||n===$s||n===Js)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ys)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ys)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ua||n===Na||n===Fa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Da)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===za)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oa||n===Ba)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===za)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===Qa||n===ja)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ka)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ja)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ka)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ks||n===el||n===tl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ks)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ku||n===nl||n===il||n===rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ks)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var vl=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},mt=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yg={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&p>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$g=`
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

}`,_l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new nn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:Zg,fragmentShader:$g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yl=class extends xi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,p=null,h=null,g=null,x=new _l,m=t.getContextAttributes(),f=null,y=null,S=[],_=[],R=new ae,T=null,A=new qt;A.viewport=new lt;let I=new qt;I.viewport=new lt;let w=[A,I],M=new vl,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=S[X];return ie===void 0&&(ie=new Yr,S[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=S[X];return ie===void 0&&(ie=new Yr,S[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=S[X];return ie===void 0&&(ie=new Yr,S[X]=ie),ie.getHandSpace()};function F(X){let ie=_.indexOf(X.inputSource);if(ie===-1)return;let ve=S[ie];ve!==void 0&&(ve.update(X.inputSource,X.frame,c||o),ve.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",W);for(let X=0;X<S.length;X++){let ie=_[X];ie!==null&&(_[X]=null,S[X].disconnect(ie))}P=null,z=null,x.reset(),e.setRenderTarget(f),h=null,p=null,d=null,r=null,y=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){let ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Yt(h.framebufferWidth,h.framebufferHeight,{format:Tn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,ve=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?mr:or,ve=m.stencil?pr:Ni);let be={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(be),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Yt(p.textureWidth,p.textureHeight,{format:Tn,type:ni,depthTexture:new ao(p.textureWidth,p.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(X){for(let ie=0;ie<X.removed.length;ie++){let ve=X.removed[ie],le=_.indexOf(ve);le>=0&&(_[le]=null,S[le].disconnect(ve))}for(let ie=0;ie<X.added.length;ie++){let ve=X.added[ie],le=_.indexOf(ve);if(le===-1){for(let Se=0;Se<S.length;Se++)if(Se>=_.length){_.push(ve),le=Se;break}else if(_[Se]===null){_[Se]=ve,le=Se;break}if(le===-1)break}let be=S[le];be&&be.connect(ve)}}let k=new C,te=new C;function G(X,ie,ve){k.setFromMatrixPosition(ie.matrixWorld),te.setFromMatrixPosition(ve.matrixWorld);let le=k.distanceTo(te),be=ie.projectionMatrix.elements,Se=ve.projectionMatrix.elements,Ie=be[14]/(be[10]-1),Ze=be[14]/(be[10]+1),He=(be[9]+1)/be[5],qe=(be[9]-1)/be[5],U=(be[8]-1)/be[0],bt=(Se[8]+1)/Se[0],Fe=Ie*U,me=Ie*bt,xe=le/(-U+bt),$e=xe*-U;if(ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX($e),X.translateZ(xe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),be[10]===-1)X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let we=Ie+xe,E=Ze+xe,v=Fe-$e,O=me+(le-$e),J=He*Ze/E*we,j=qe*Ze/E*we;X.projectionMatrix.makePerspective(v,O,J,j,we,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function se(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ie=X.near,ve=X.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),M.near=I.near=A.near=ie,M.far=I.far=A.far=ve,(P!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,z=M.far),A.layers.mask=X.layers.mask|2,I.layers.mask=X.layers.mask|4,M.layers.mask=A.layers.mask|I.layers.mask;let le=X.parent,be=M.cameras;se(M,le);for(let Se=0;Se<be.length;Se++)se(be[Se],le);be.length===2?G(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),ue(X,M,le)};function ue(X,ie,ve){ve===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(ve.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Kr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&h===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let pe=null;function Pe(X,ie){if(u=ie.getViewerPose(c||o),g=ie,u!==null){let ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let le=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let Se=0;Se<ve.length;Se++){let Ie=ve[Se],Ze=null;if(h!==null)Ze=h.getViewport(Ie);else{let qe=d.getViewSubImage(p,Ie);Ze=qe.viewport,Se===0&&(e.setRenderTargetTextures(y,qe.colorTexture,p.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(y))}let He=w[Se];He===void 0&&(He=new qt,He.layers.enable(Se),He.viewport=new lt,w[Se]=He),He.matrix.fromArray(Ie.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ie.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Se===0&&(M.matrix.copy(He.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(He)}let be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){let Se=d.getDepthInformation(ve[0]);Se&&Se.isValid&&Se.texture&&x.init(e,Se,r.renderState)}}for(let ve=0;ve<S.length;ve++){let le=_[ve],be=S[ve];le!==null&&be!==void 0&&be.update(le,ie,c||o)}pe&&pe(X,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Ge=new nh;Ge.setAnimationLoop(Pe),this.setAnimationLoop=function(X){pe=X},this.dispose=function(){}}},Ci=new Rn,Jg=new Mt;function Kg(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,th(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,S,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&h(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Dt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Dt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=e.get(f),S=y.envMap,_=y.envMapRotation;S&&(m.envMap.value=S,Ci.copy(_),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(Ci)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Qg(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let _=S.program;n.uniformBlockBinding(y,_)}function c(y,S){let _=r[y.id];_===void 0&&(g(y),_=u(y),r[y.id]=_,y.addEventListener("dispose",m));let R=S.program;n.updateUBOMapping(y,R);let T=e.render.frame;s[y.id]!==T&&(p(y),s[y.id]=T)}function u(y){let S=d();y.__bindingPointIndex=S;let _=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,_),_}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let S=r[y.id],_=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=_.length;T<A;T++){let I=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,M=I.length;w<M;w++){let P=I[w];if(h(P,T,w,R)===!0){let z=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],V=0;for(let W=0;W<F.length;W++){let k=F[W],te=x(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,z+V,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,V),V+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,S,_,R){let T=y.value,A=S+"_"+_;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let I=R[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(y){let S=y.uniforms,_=0,R=16;for(let A=0,I=S.length;A<I;A++){let w=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,P=w.length;M<P;M++){let z=w[M],F=Array.isArray(z.value)?z.value:[z.value];for(let V=0,W=F.length;V<W;V++){let k=F[V],te=x(k),G=_%R,se=G%te.boundary,ue=G+se;_+=se,ue!==0&&R-ue<te.storage&&(_+=R-ue),z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=te.storage}}}let T=_%R;return T>0&&(_+=R-T),y.__size=_,y.__cache={},this}function x(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){let S=y.target;S.removeEventListener("dispose",m);let _=o.indexOf(S.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(let y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var _i=class{constructor(e={}){let{canvas:t=nf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=xn,this.toneMappingExposure=1;let _=this,R=!1,T=0,A=0,I=null,w=-1,M=null,P=new lt,z=new lt,F=null,V=new Ce(0),W=0,k=t.width,te=t.height,G=1,se=null,ue=null,pe=new lt(0,0,k,te),Pe=new lt(0,0,k,te),Ge=!1,X=new jr,ie=!1,ve=!1,le=new Mt,be=new Mt,Se=new C,Ie=new lt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function qe(){return I===null?G:1}let U=n;function bt(b,D){return t.getContext(b,D)}try{let b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",ee,!1),U===null){let D="webgl2";if(U=bt(D,b),U===null)throw bt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Fe,me,xe,$e,we,E,v,O,J,j,$,ye,Q,ne,Te,re,oe,Re,Me,fe,We,Oe,et,L;function he(){Fe=new p0(U),Fe.init(),Oe=new qg(U,Fe),me=new l0(U,Fe,e,Oe),xe=new Gg(U,Fe),me.reverseDepthBuffer&&p&&xe.buffers.depth.setReversed(!0),$e=new x0(U),we=new Pg,E=new Xg(U,Fe,xe,we,me,Oe,$e),v=new u0(_),O=new f0(_),J=new wf(U),et=new o0(U,J),j=new m0(U,J,$e,et),$=new _0(U,j,J,$e),Me=new v0(U,me,E),re=new c0(we),ye=new Cg(_,v,O,Fe,me,et,re),Q=new Kg(_,we),ne=new Lg,Te=new Bg(Fe),Re=new s0(_,v,O,xe,$,h,l),oe=new Hg(_,$,me),L=new Qg(U,$e,me,xe),fe=new a0(U,Fe,$e),We=new g0(U,Fe,$e),$e.programs=ye.programs,_.capabilities=me,_.extensions=Fe,_.properties=we,_.renderLists=ne,_.shadowMap=oe,_.state=xe,_.info=$e}he();let q=new yl(_,U);this.xr=q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=Fe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Fe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(k,te,!1))},this.getSize=function(b){return b.set(k,te)},this.setSize=function(b,D,B=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,te=D,t.width=Math.floor(b*G),t.height=Math.floor(D*G),B===!0&&(t.style.width=b+"px",t.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(k*G,te*G).floor()},this.setDrawingBufferSize=function(b,D,B){k=b,te=D,G=B,t.width=Math.floor(b*B),t.height=Math.floor(D*B),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(pe)},this.setViewport=function(b,D,B,H){b.isVector4?pe.set(b.x,b.y,b.z,b.w):pe.set(b,D,B,H),xe.viewport(P.copy(pe).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Pe)},this.setScissor=function(b,D,B,H){b.isVector4?Pe.set(b.x,b.y,b.z,b.w):Pe.set(b,D,B,H),xe.scissor(z.copy(Pe).multiplyScalar(G).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(b){xe.setScissorTest(Ge=b)},this.setOpaqueSort=function(b){se=b},this.setTransparentSort=function(b){ue=b},this.getClearColor=function(b){return b.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(b=!0,D=!0,B=!0){let H=0;if(b){let N=!1;if(I!==null){let ce=I.texture.format;N=ce===sc||ce===rc||ce===ic}if(N){let ce=I.texture.type,_e=ce===ni||ce===Ni||ce===Jr||ce===pr||ce===ec||ce===tc,Le=Re.getClearColor(),De=Re.getClearAlpha(),Xe=Le.r,tt=Le.g,Ue=Le.b;_e?(g[0]=Xe,g[1]=tt,g[2]=Ue,g[3]=De,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Xe,x[1]=tt,x[2]=Ue,x[3]=De,U.clearBufferiv(U.COLOR,0,x))}else H|=U.COLOR_BUFFER_BIT}D&&(H|=U.DEPTH_BUFFER_BIT),B&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),ne.dispose(),Te.dispose(),we.dispose(),v.dispose(),O.dispose(),$.dispose(),et.dispose(),L.dispose(),ye.dispose(),q.dispose(),q.removeEventListener("sessionstart",at),q.removeEventListener("sessionend",wt),ut.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let b=$e.autoReset,D=oe.enabled,B=oe.autoUpdate,H=oe.needsUpdate,N=oe.type;he(),$e.autoReset=b,oe.enabled=D,oe.autoUpdate=B,oe.needsUpdate=H,oe.type=N}function ee(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ee(b){let D=b.target;D.removeEventListener("dispose",Ee),Je(D)}function Je(b){St(b),we.remove(b)}function St(b){let D=we.get(b).programs;D!==void 0&&(D.forEach(function(B){ye.releaseProgram(B)}),b.isShaderMaterial&&ye.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,B,H,N,ce){D===null&&(D=Ze);let _e=N.isMesh&&N.matrixWorld.determinant()<0,Le=Ae(b,D,B,H,N);xe.setMaterial(H,_e);let De=B.index,Xe=1;if(H.wireframe===!0){if(De=j.getWireframeAttribute(B),De===void 0)return;Xe=2}let tt=B.drawRange,Ue=B.attributes.position,pt=tt.start*Xe,Et=(tt.start+tt.count)*Xe;ce!==null&&(pt=Math.max(pt,ce.start*Xe),Et=Math.min(Et,(ce.start+ce.count)*Xe)),De!==null?(pt=Math.max(pt,0),Et=Math.min(Et,De.count)):Ue!=null&&(pt=Math.max(pt,0),Et=Math.min(Et,Ue.count));let Rt=Et-pt;if(Rt<0||Rt===1/0)return;et.setup(N,H,Le,B,De);let en,vt=fe;if(De!==null&&(en=J.get(De),vt=We,vt.setIndex(en)),N.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*qe()),vt.setMode(U.LINES)):vt.setMode(U.TRIANGLES);else if(N.isLine){let Ne=H.linewidth;Ne===void 0&&(Ne=1),xe.setLineWidth(Ne*qe()),N.isLineSegments?vt.setMode(U.LINES):N.isLineLoop?vt.setMode(U.LINE_LOOP):vt.setMode(U.LINE_STRIP)}else N.isPoints?vt.setMode(U.POINTS):N.isSprite&&vt.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)vt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))vt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ne=N._multiDrawStarts,Xn=N._multiDrawCounts,_t=N._multiDrawCount,bn=De?J.get(De).bytesPerElement:1,Hi=we.get(H).currentProgram.getUniforms();for(let on=0;on<_t;on++)Hi.setValue(U,"_gl_DrawID",on),vt.render(Ne[on]/bn,Xn[on])}else if(N.isInstancedMesh)vt.renderInstances(pt,Rt,N.count);else if(B.isInstancedBufferGeometry){let Ne=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Xn=Math.min(B.instanceCount,Ne);vt.renderInstances(pt,Rt,Xn)}else vt.render(pt,Rt)};function Y(b,D,B){b.transparent===!0&&b.side===tn&&b.forceSinglePass===!1?(b.side=Dt,b.needsUpdate=!0,pn(b,D,B),b.side=An,b.needsUpdate=!0,pn(b,D,B),b.side=tn):pn(b,D,B)}this.compile=function(b,D,B=null){B===null&&(B=b),f=Te.get(B),f.init(D),S.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),b!==B&&b.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let H=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ce=N.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){let Le=ce[_e];Y(Le,B,N),H.add(Le)}else Y(ce,B,N),H.add(ce)}),S.pop(),f=null,H},this.compileAsync=function(b,D,B=null){let H=this.compile(b,D,B);return new Promise(N=>{function ce(){if(H.forEach(function(_e){we.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){N(b);return}setTimeout(ce,10)}Fe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Be=null;function rt(b){Be&&Be(b)}function at(){ut.stop()}function wt(){ut.start()}let ut=new nh;ut.setAnimationLoop(rt),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(b){Be=b,q.setAnimationLoop(b),b===null?ut.stop():ut.start()},q.addEventListener("sessionstart",at),q.addEventListener("sessionend",wt),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(D),D=q.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,D,I),f=Te.get(b,S.length),f.init(D),S.push(f),be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(be),ve=this.localClippingEnabled,ie=re.init(this.clippingPlanes,ve),m=ne.get(b,y.length),m.init(),y.push(m),q.enabled===!0&&q.isPresenting===!0){let ce=_.xr.getDepthSensingMesh();ce!==null&&xt(ce,D,-1/0,_.sortObjects)}xt(b,D,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(se,ue),He=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,He&&Re.addToRenderList(m,b),this.info.render.frame++,ie===!0&&re.beginShadows();let B=f.state.shadowsArray;oe.render(B,b,D),ie===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,N=m.transmissive;if(f.setupLights(),D.isArrayCamera){let ce=D.cameras;if(N.length>0)for(let _e=0,Le=ce.length;_e<Le;_e++){let De=ce[_e];fn(H,N,b,De)}He&&Re.render(b);for(let _e=0,Le=ce.length;_e<Le;_e++){let De=ce[_e];ct(m,b,De,De.viewport)}}else N.length>0&&fn(H,N,b,D),He&&Re.render(b),ct(m,b,D);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(_,b,D),et.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],ie===!0&&re.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function xt(b,D,B,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){H&&Ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(be);let _e=$.update(b),Le=b.material;Le.visible&&m.push(b,_e,Le,B,Ie.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){let _e=$.update(b),Le=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ie.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ie.copy(_e.boundingSphere.center)),Ie.applyMatrix4(b.matrixWorld).applyMatrix4(be)),Array.isArray(Le)){let De=_e.groups;for(let Xe=0,tt=De.length;Xe<tt;Xe++){let Ue=De[Xe],pt=Le[Ue.materialIndex];pt&&pt.visible&&m.push(b,_e,pt,B,Ie.z,Ue)}}else Le.visible&&m.push(b,_e,Le,B,Ie.z,null)}}let ce=b.children;for(let _e=0,Le=ce.length;_e<Le;_e++)xt(ce[_e],D,B,H)}function ct(b,D,B,H){let N=b.opaque,ce=b.transmissive,_e=b.transparent;f.setupLightsView(B),ie===!0&&re.setGlobalState(_.clippingPlanes,B),H&&xe.viewport(P.copy(H)),N.length>0&&jt(N,D,B),ce.length>0&&jt(ce,D,B),_e.length>0&&jt(_e,D,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function fn(b,D,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new Yt(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Hn:ni,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let ce=f.state.transmissionRenderTarget[H.id],_e=H.viewport||P;ce.setSize(_e.z,_e.w);let Le=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(V),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),He&&Re.render(B);let De=_.toneMapping;_.toneMapping=xn;let Xe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),ie===!0&&re.setGlobalState(_.clippingPlanes,H),jt(b,B,H),E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ue=0,pt=D.length;Ue<pt;Ue++){let Et=D[Ue],Rt=Et.object,en=Et.geometry,vt=Et.material,Ne=Et.group;if(vt.side===tn&&Rt.layers.test(H.layers)){let Xn=vt.side;vt.side=Dt,vt.needsUpdate=!0,sn(Rt,B,H,en,vt,Ne),vt.side=Xn,vt.needsUpdate=!0,tt=!0}}tt===!0&&(E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce))}_.setRenderTarget(Le),_.setClearColor(V,W),Xe!==void 0&&(H.viewport=Xe),_.toneMapping=De}function jt(b,D,B){let H=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ce=b.length;N<ce;N++){let _e=b[N],Le=_e.object,De=_e.geometry,Xe=H===null?_e.material:H,tt=_e.group;Le.layers.test(B.layers)&&sn(Le,D,B,De,Xe,tt)}}function sn(b,D,B,H,N,ce){b.onBeforeRender(_,D,B,H,N,ce),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(_,D,B,H,b,ce),N.transparent===!0&&N.side===tn&&N.forceSinglePass===!1?(N.side=Dt,N.needsUpdate=!0,_.renderBufferDirect(B,D,H,N,b,ce),N.side=An,N.needsUpdate=!0,_.renderBufferDirect(B,D,H,N,b,ce),N.side=tn):_.renderBufferDirect(B,D,H,N,b,ce),b.onAfterRender(_,D,B,H,N,ce)}function pn(b,D,B){D.isScene!==!0&&(D=Ze);let H=we.get(b),N=f.state.lights,ce=f.state.shadowsArray,_e=N.state.version,Le=ye.getParameters(b,N.state,ce,D,B),De=ye.getProgramCacheKey(Le),Xe=H.programs;H.environment=b.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(b.isMeshStandardMaterial?O:v).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Xe===void 0&&(b.addEventListener("dispose",Ee),Xe=new Map,H.programs=Xe);let tt=Xe.get(De);if(tt!==void 0){if(H.currentProgram===tt&&H.lightsStateVersion===_e)return de(b,Le),tt}else Le.uniforms=ye.getUniforms(b),b.onBeforeCompile(Le,_),tt=ye.acquireProgram(Le,De),Xe.set(De,tt),H.uniforms=Le.uniforms;let Ue=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ue.clippingPlanes=re.uniform),de(b,Le),H.needsLights=st(b),H.lightsStateVersion=_e,H.needsLights&&(Ue.ambientLightColor.value=N.state.ambient,Ue.lightProbe.value=N.state.probe,Ue.directionalLights.value=N.state.directional,Ue.directionalLightShadows.value=N.state.directionalShadow,Ue.spotLights.value=N.state.spot,Ue.spotLightShadows.value=N.state.spotShadow,Ue.rectAreaLights.value=N.state.rectArea,Ue.ltc_1.value=N.state.rectAreaLTC1,Ue.ltc_2.value=N.state.rectAreaLTC2,Ue.pointLights.value=N.state.point,Ue.pointLightShadows.value=N.state.pointShadow,Ue.hemisphereLights.value=N.state.hemi,Ue.directionalShadowMap.value=N.state.directionalShadowMap,Ue.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ue.spotShadowMap.value=N.state.spotShadowMap,Ue.spotLightMatrix.value=N.state.spotLightMatrix,Ue.spotLightMap.value=N.state.spotLightMap,Ue.pointShadowMap.value=N.state.pointShadowMap,Ue.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=tt,H.uniformsList=null,tt}function Jt(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=cr.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function de(b,D){let B=we.get(b);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Ae(b,D,B,H,N){D.isScene!==!0&&(D=Ze),E.resetTextureUnits();let ce=D.fog,_e=H.isMeshStandardMaterial?D.environment:null,Le=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Sr,De=(H.isMeshStandardMaterial?O:v).get(H.envMap||_e),Xe=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,tt=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!B.morphAttributes.position,pt=!!B.morphAttributes.normal,Et=!!B.morphAttributes.color,Rt=xn;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Rt=_.toneMapping);let en=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,vt=en!==void 0?en.length:0,Ne=we.get(H),Xn=f.state.lights;if(ie===!0&&(ve===!0||b!==M)){let mn=b===M&&H.id===w;re.setState(H,b,mn)}let _t=!1;H.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Xn.state.version||Ne.outputColorSpace!==Le||N.isBatchedMesh&&Ne.batching===!1||!N.isBatchedMesh&&Ne.batching===!0||N.isBatchedMesh&&Ne.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ne.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ne.instancing===!1||!N.isInstancedMesh&&Ne.instancing===!0||N.isSkinnedMesh&&Ne.skinning===!1||!N.isSkinnedMesh&&Ne.skinning===!0||N.isInstancedMesh&&Ne.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ne.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ne.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ne.instancingMorph===!1&&N.morphTexture!==null||Ne.envMap!==De||H.fog===!0&&Ne.fog!==ce||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==re.numPlanes||Ne.numIntersection!==re.numIntersection)||Ne.vertexAlphas!==Xe||Ne.vertexTangents!==tt||Ne.morphTargets!==Ue||Ne.morphNormals!==pt||Ne.morphColors!==Et||Ne.toneMapping!==Rt||Ne.morphTargetsCount!==vt)&&(_t=!0):(_t=!0,Ne.__version=H.version);let bn=Ne.currentProgram;_t===!0&&(bn=pn(H,D,N));let Hi=!1,on=!1,Ur=!1,Ct=bn.getUniforms(),Un=Ne.uniforms;if(xe.useProgram(bn.program)&&(Hi=!0,on=!0,Ur=!0),H.id!==w&&(w=H.id,on=!0),Hi||M!==b){xe.buffers.depth.getReversed()?(le.copy(b.projectionMatrix),sf(le),of(le),Ct.setValue(U,"projectionMatrix",le)):Ct.setValue(U,"projectionMatrix",b.projectionMatrix),Ct.setValue(U,"viewMatrix",b.matrixWorldInverse);let ai=Ct.map.cameraPosition;ai!==void 0&&ai.setValue(U,Se.setFromMatrixPosition(b.matrixWorld)),me.logarithmicDepthBuffer&&Ct.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ct.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,on=!0,Ur=!0)}if(N.isSkinnedMesh){Ct.setOptional(U,N,"bindMatrix"),Ct.setOptional(U,N,"bindMatrixInverse");let mn=N.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ct.setValue(U,"boneTexture",mn.boneTexture,E))}N.isBatchedMesh&&(Ct.setOptional(U,N,"batchingTexture"),Ct.setValue(U,"batchingTexture",N._matricesTexture,E),Ct.setOptional(U,N,"batchingIdTexture"),Ct.setValue(U,"batchingIdTexture",N._indirectTexture,E),Ct.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&Ct.setValue(U,"batchingColorTexture",N._colorsTexture,E));let Nr=B.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&Me.update(N,B,bn),(on||Ne.receiveShadow!==N.receiveShadow)&&(Ne.receiveShadow=N.receiveShadow,Ct.setValue(U,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Un.envMap.value=De,Un.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(Un.envMapIntensity.value=D.environmentIntensity),on&&(Ct.setValue(U,"toneMappingExposure",_.toneMappingExposure),Ne.needsLights&&Ke(Un,Ur),ce&&H.fog===!0&&Q.refreshFogUniforms(Un,ce),Q.refreshMaterialUniforms(Un,H,G,te,f.state.transmissionRenderTarget[b.id]),cr.upload(U,Jt(Ne),Un,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(cr.upload(U,Jt(Ne),Un,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ct.setValue(U,"center",N.center),Ct.setValue(U,"modelViewMatrix",N.modelViewMatrix),Ct.setValue(U,"normalMatrix",N.normalMatrix),Ct.setValue(U,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let mn=H.uniformsGroups;for(let ai=0,li=mn.length;ai<li;ai++){let wc=mn[ai];L.update(wc,bn),L.bind(wc,bn)}}return bn}function Ke(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function st(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,D,B){we.get(b.texture).__webglTexture=D,we.get(b.depthTexture).__webglTexture=B;let H=we.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){let B=we.get(b);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,B=0){I=b,T=D,A=B;let H=!0,N=null,ce=!1,_e=!1;if(b){let De=we.get(b);if(De.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(De.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(De.__hasExternalTextures)E.rebindTextures(b,we.get(b.texture).__webglTexture,we.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ue=b.depthTexture;if(De.__boundDepthTexture!==Ue){if(Ue!==null&&we.has(Ue)&&(b.width!==Ue.image.width||b.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let Xe=b.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(_e=!0);let tt=we.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(tt[D])?N=tt[D][B]:N=tt[D],ce=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?N=we.get(b).__webglMultisampledFramebuffer:Array.isArray(tt)?N=tt[B]:N=tt,P.copy(b.viewport),z.copy(b.scissor),F=b.scissorTest}else P.copy(pe).multiplyScalar(G).floor(),z.copy(Pe).multiplyScalar(G).floor(),F=Ge;if(xe.bindFramebuffer(U.FRAMEBUFFER,N)&&H&&xe.drawBuffers(b,N),xe.viewport(P),xe.scissor(z),xe.setScissorTest(F),ce){let De=we.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,De.__webglTexture,B)}else if(_e){let De=we.get(b.texture),Xe=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.__webglTexture,B||0,Xe)}w=-1},this.readRenderTargetPixels=function(b,D,B,H,N,ce,_e){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Le=Le[_e]),Le){xe.bindFramebuffer(U.FRAMEBUFFER,Le);try{let De=b.texture,Xe=De.format,tt=De.type;if(!me.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&B>=0&&B<=b.height-N&&U.readPixels(D,B,H,N,Oe.convert(Xe),Oe.convert(tt),ce)}finally{let De=I!==null?we.get(I).__webglFramebuffer:null;xe.bindFramebuffer(U.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,D,B,H,N,ce,_e){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Le=Le[_e]),Le){let De=b.texture,Xe=De.format,tt=De.type;if(!me.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-H&&B>=0&&B<=b.height-N){xe.bindFramebuffer(U.FRAMEBUFFER,Le);let Ue=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ue),U.bufferData(U.PIXEL_PACK_BUFFER,ce.byteLength,U.STREAM_READ),U.readPixels(D,B,H,N,Oe.convert(Xe),Oe.convert(tt),0);let pt=I!==null?we.get(I).__webglFramebuffer:null;xe.bindFramebuffer(U.FRAMEBUFFER,pt);let Et=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await rf(U,Et,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ue),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ce),U.deleteBuffer(Ue),U.deleteSync(Et),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,B=0){b.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);let H=Math.pow(2,-B),N=Math.floor(b.image.width*H),ce=Math.floor(b.image.height*H),_e=D!==null?D.x:0,Le=D!==null?D.y:0;E.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,_e,Le,N,ce),xe.unbindTexture()},this.copyTextureToTexture=function(b,D,B=null,H=null,N=0){b.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let ce,_e,Le,De,Xe,tt,Ue,pt,Et,Rt=b.isCompressedTexture?b.mipmaps[N]:b.image;B!==null?(ce=B.max.x-B.min.x,_e=B.max.y-B.min.y,Le=B.isBox3?B.max.z-B.min.z:1,De=B.min.x,Xe=B.min.y,tt=B.isBox3?B.min.z:0):(ce=Rt.width,_e=Rt.height,Le=Rt.depth||1,De=0,Xe=0,tt=0),H!==null?(Ue=H.x,pt=H.y,Et=H.z):(Ue=0,pt=0,Et=0);let en=Oe.convert(D.format),vt=Oe.convert(D.type),Ne;D.isData3DTexture?(E.setTexture3D(D,0),Ne=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),Ne=U.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),Ne=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let Xn=U.getParameter(U.UNPACK_ROW_LENGTH),_t=U.getParameter(U.UNPACK_IMAGE_HEIGHT),bn=U.getParameter(U.UNPACK_SKIP_PIXELS),Hi=U.getParameter(U.UNPACK_SKIP_ROWS),on=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Rt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,De),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,tt);let Ur=b.isDataArrayTexture||b.isData3DTexture,Ct=D.isDataArrayTexture||D.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Un=we.get(b),Nr=we.get(D),mn=we.get(Un.__renderTarget),ai=we.get(Nr.__renderTarget);xe.bindFramebuffer(U.READ_FRAMEBUFFER,mn.__webglFramebuffer),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let li=0;li<Le;li++)Ur&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.get(b).__webglTexture,N,tt+li),b.isDepthTexture?(Ct&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.get(D).__webglTexture,N,Et+li),U.blitFramebuffer(De,Xe,ce,_e,Ue,pt,ce,_e,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ct?U.copyTexSubImage3D(Ne,N,Ue,pt,Et+li,De,Xe,ce,_e):U.copyTexSubImage2D(Ne,N,Ue,pt,Et+li,De,Xe,ce,_e);xe.bindFramebuffer(U.READ_FRAMEBUFFER,null),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ct?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Ne,N,Ue,pt,Et,ce,_e,Le,en,vt,Rt.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Ne,N,Ue,pt,Et,ce,_e,Le,en,Rt.data):U.texSubImage3D(Ne,N,Ue,pt,Et,ce,_e,Le,en,vt,Rt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,Ue,pt,ce,_e,en,vt,Rt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,Ue,pt,Rt.width,Rt.height,en,Rt.data):U.texSubImage2D(U.TEXTURE_2D,N,Ue,pt,ce,_e,en,vt,Rt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Xn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t),U.pixelStorei(U.UNPACK_SKIP_PIXELS,bn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Hi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,on),N===0&&D.generateMipmaps&&U.generateMipmap(Ne),xe.unbindTexture()},this.copyTextureToTexture3D=function(b,D,B=null,H=null,N=0){return b.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,b=arguments[2],D=arguments[3],N=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,D,B,H,N)},this.initRenderTarget=function(b){we.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){T=0,A=0,I=null,xe.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var Pn=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ml=class extends nn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=cn,u=cn,d,p){super(null,o,a,l,c,u,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=class extends ft{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},nr=new Mt,Eu=new Mt,Os=[],Tu=new vn,jg=new Mt,kr=new dt,Hr=new ii,_r=class extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,jg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Tu.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(Tu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Hr.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,nr),Eu.multiplyMatrices(n,nr),kr.matrixWorld=Eu,kr.raycast(e,Os);for(let o=0,a=Os.length;o<a;o++){let l=Os[o];l.instanceId=s,l.object=this,t.push(l)}Os.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ml(new Float32Array(r*this.count),r,this.count,nc,On));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ns=class extends zn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lo=new C,co=new C,Au=new Mt,Vr=new gr,Bs=new ii,pa=new C,Ru=new C,bl=class extends Ft{constructor(e=new At,t=new ns){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)lo.fromBufferAttribute(t,r-1),co.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=lo.distanceTo(co);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(r),Bs.radius+=s,e.ray.intersectsSphere(Bs)===!1)return;Au.copy(r).invert(),Vr.copy(e.ray).applyMatrix4(Au);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){let h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=h,m=g-1;x<m;x+=c){let f=u.getX(x),y=u.getX(x+1),S=zs(this,e,Vr,l,f,y);S&&t.push(S)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(h),f=zs(this,e,Vr,l,x,m);f&&t.push(f)}}else{let h=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let x=h,m=g-1;x<m;x+=c){let f=zs(this,e,Vr,l,x,x+1);f&&t.push(f)}if(this.isLineLoop){let x=zs(this,e,Vr,l,g-1,h);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function zs(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(lo.fromBufferAttribute(o,r),co.fromBufferAttribute(o,s),t.distanceSqToSegment(lo,co,pa,Ru)>n)return;pa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(pa);if(!(l<e.near||l>e.far))return{distance:l,point:Ru.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Cu=new C,Pu=new C,is=class extends bl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Cu.fromBufferAttribute(t,r),Pu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Cu.distanceTo(Pu);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var rs=class extends zn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Iu=new Mt,Sl=new gr,ks=new ii,Hs=new C,ri=class extends Ft{constructor(e=new At,t=new rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),ks.radius+=s,e.ray.intersectsSphere(ks)===!1)return;Iu.copy(r).invert(),Sl.copy(e.ray).applyMatrix4(Iu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let p=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=p,x=h;g<x;g++){let m=c.getX(g);Hs.fromBufferAttribute(d,m),Lu(Hs,m,l,r,e,t,this)}}else{let p=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=p,x=h;g<x;g++)Hs.fromBufferAttribute(d,g),Lu(Hs,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Lu(i,e,t,n,r,s,o){let a=Sl.distanceSqToPoint(i);if(a<t){let l=new C;Sl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var yr=class extends nn{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],p=n[r+1]-u,h=(o-u)/p;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ae:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,r=[],s=[],o=[],a=new C,l=new Mt;for(let h=0;h<=e;h++){let g=h/e;r[h]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ht(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Ht(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],h*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ss=class extends _n{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,h=c-this.aY;l=p*u-h*d+this.aX,c=p*d+h*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wl=class extends ss{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hc(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let p=(o-s)/c-(a-s)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;p*=u,h*=u,r(o,a,p,h)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Vs=new C,ma=new hc,ga=new hc,xa=new hc,El=class extends _n{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new C){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Vs.subVectors(r[0],r[1]).add(r[0]),c=Vs);let d=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Vs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Vs),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(p),h),m=Math.pow(p.distanceToSquared(u),h);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ma.initNonuniformCatmullRom(c.x,d.x,p.x,u.x,g,x,m),ga.initNonuniformCatmullRom(c.y,d.y,p.y,u.y,g,x,m),xa.initNonuniformCatmullRom(c.z,d.z,p.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(c.x,d.x,p.x,u.x,this.tension),ga.initCatmullRom(c.y,d.y,p.y,u.y,this.tension),xa.initCatmullRom(c.z,d.z,p.z,u.z,this.tension));return n.set(ma.calc(l),ga.calc(l),xa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Du(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function ex(i,e){let t=1-i;return t*t*e}function tx(i,e){return 2*(1-i)*i*e}function nx(i,e){return i*i*e}function Zr(i,e,t,n){return ex(i,e)+tx(i,t)+nx(i,n)}function ix(i,e){let t=1-i;return t*t*t*e}function rx(i,e){let t=1-i;return 3*t*t*i*e}function sx(i,e){return 3*(1-i)*i*i*e}function ox(i,e){return i*i*i*e}function $r(i,e,t,n,r){return ix(i,e)+rx(i,t)+sx(i,n)+ox(i,r)}var uo=class extends _n{constructor(e=new ae,t=new ae,n=new ae,r=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ae){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set($r(e,r.x,s.x,o.x,a.x),$r(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tl=class extends _n{constructor(e=new C,t=new C,n=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new C){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set($r(e,r.x,s.x,o.x,a.x),$r(e,r.y,s.y,o.y,a.y),$r(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ho=class extends _n{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Al=class extends _n{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends _n{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Zr(e,r.x,s.x,o.x),Zr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rl=class extends _n{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Zr(e,r.x,s.x,o.x),Zr(e,r.y,s.y,o.y),Zr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Du(a,l.x,c.x,u.x,d.x),Du(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ae().fromArray(r))}return this}},Uu=Object.freeze({__proto__:null,ArcCurve:wl,CatmullRomCurve3:El,CubicBezierCurve:uo,CubicBezierCurve3:Tl,EllipseCurve:ss,LineCurve:ho,LineCurve3:Al,QuadraticBezierCurve:fo,QuadraticBezierCurve3:Rl,SplineCurve:po}),Cl=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Uu[r.type]().fromJSON(r))}return this}},Pl=class extends Cl{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ho(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new fo(this.currentPoint.clone(),new ae(e,t),new ae(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new uo(this.currentPoint.clone(),new ae(e,t),new ae(n,r),new ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new po(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new ss(e,t,n,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Il=class i extends At{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Ht(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,d=new C,p=new ae,h=new C,g=new C,x=new C,m=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,h.x=f*1,h.y=-m,h.z=f*0,x.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,h.x=f*1,h.y=-m,h.z=f*0,g.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),l.push(h.x,h.y,h.z),x.copy(g)}for(let y=0;y<=t;y++){let S=n+y*u*r,_=Math.sin(S),R=Math.cos(S);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*_,d.y=e[T].y,d.z=e[T].x*R,o.push(d.x,d.y,d.z),p.x=y/t,p.y=T/(e.length-1),a.push(p.x,p.y);let A=l[3*T+0]*_,I=l[3*T+1],w=l[3*T+0]*R;c.push(A,I,w)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){let _=S+y*e.length,R=_,T=_+e.length,A=_+e.length+1,I=_+1;s.push(R,T,I),s.push(A,I,T)}this.setIndex(s),this.setAttribute("position",new gt(o,3)),this.setAttribute("uv",new gt(a,2)),this.setAttribute("normal",new gt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},mo=class i extends Il{constructor(e=1,t=1,n=4,r=8){let s=new Pl;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},go=class i extends At{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new C,u=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let h=n+d/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[p]/e+1)/2,u.y=(o[p+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(a,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mr=class i extends At{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],p=[],h=[],g=0,x=[],m=n/2,f=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(p,3)),this.setAttribute("uv",new gt(h,2));function y(){let _=new C,R=new C,T=0,A=(t-e)/n;for(let I=0;I<=s;I++){let w=[],M=I/s,P=M*(t-e)+e;for(let z=0;z<=r;z++){let F=z/r,V=F*l+a,W=Math.sin(V),k=Math.cos(V);R.x=P*W,R.y=-M*n+m,R.z=P*k,d.push(R.x,R.y,R.z),_.set(W,A,k).normalize(),p.push(_.x,_.y,_.z),h.push(F,1-M),w.push(g++)}x.push(w)}for(let I=0;I<r;I++)for(let w=0;w<s;w++){let M=x[w][I],P=x[w+1][I],z=x[w+1][I+1],F=x[w][I+1];(e>0||w!==0)&&(u.push(M,P,F),T+=3),(t>0||w!==s-1)&&(u.push(P,z,F),T+=3)}c.addGroup(f,T,0),f+=T}function S(_){let R=g,T=new ae,A=new C,I=0,w=_===!0?e:t,M=_===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,m*M,0),p.push(0,M,0),h.push(.5,.5),g++;let P=g;for(let z=0;z<=r;z++){let V=z/r*l+a,W=Math.cos(V),k=Math.sin(V);A.x=w*k,A.y=m*M,A.z=w*W,d.push(A.x,A.y,A.z),p.push(0,M,0),T.x=W*.5+.5,T.y=k*.5*M+.5,h.push(T.x,T.y),g++}for(let z=0;z<r;z++){let F=R+z,V=P+z;_===!0?u.push(V,V+1,F):u.push(V+1,V,F),I+=3}c.addGroup(f,I,_===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Gs=new C,Ws=new C,va=new C,Xs=new gi,os=class extends At{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(ar*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),p={},h=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:f}=Xs;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Xs.getNormal(va),d[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){let S=(y+1)%3,_=d[y],R=d[S],T=Xs[u[y]],A=Xs[u[S]],I=`${_}_${R}`,w=`${R}_${_}`;w in p&&p[w]?(va.dot(p[w].normal)<=s&&(h.push(T.x,T.y,T.z),h.push(A.x,A.y,A.z)),p[w]=null):I in p||(p[I]={index0:c[y],index1:c[S],normal:va.clone()})}}for(let g in p)if(p[g]){let{index0:x,index1:m}=p[g];Gs.fromBufferAttribute(a,x),Ws.fromBufferAttribute(a,m),h.push(Gs.x,Gs.y,Gs.z),h.push(Ws.x,Ws.y,Ws.z)}this.setAttribute("position",new gt(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var yi=class i extends At{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new C,p=new C,h=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let y=[],S=f/n,_=0;f===0&&o===0?_=.5/t:f===n&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let T=R/t;d.x=-e*Math.cos(r+T*s)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),m.push(T+_,1-S),y.push(c++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){let S=u[f][y+1],_=u[f][y],R=u[f+1][y],T=u[f+1][y+1];(f!==0||o>0)&&h.push(S,_,T),(f!==n-1||l<Math.PI)&&h.push(_,R,T)}this.setIndex(h),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fi=class i extends At{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new C,d=new C,p=new C;for(let h=0;h<=n;h++)for(let g=0;g<=r;g++){let x=g/r*s,m=h/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),p.subVectors(d,u).normalize(),l.push(p.x,p.y,p.z),c.push(g/r),c.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=r;g++){let x=(r+1)*h+g-1,m=(r+1)*(h-1)+g-1,f=(r+1)*(h-1)+g,y=(r+1)*h+g;o.push(x,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Oi=class extends zn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var as=class extends zn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function qs(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ax(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var br=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ll=class extends br{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cc:s=e,a=2*t-n;break;case Pc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cc:o=e,l=2*n-t;break;case Pc:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,h=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,f=-p*m+2*p*x-p*g,y=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*g+1,S=(-1-h)*m+(1.5+h)*x+.5*g,_=h*m-h*x;for(let R=0;R!==a;++R)s[R]=f*o[u+R]+y*o[c+R]+S*o[l+R]+_*o[d+R];return s}},Dl=class extends br{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),d=1-u;for(let p=0;p!==a;++p)s[p]=o[c+p]*d+o[l+p]*u;return s}},Ul=class extends br{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},In=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qs(t,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qs(e.times,Array),values:qs(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ll(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case sl:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return sl;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&ax(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ho,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*n,p=d-n,h=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[p+g]||x!==t[h+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,p=o*n;for(let h=0;h!==n;++h)t[p+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=sl;var Bi=class extends In{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Qs;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends In{};Nl.prototype.ValueTypeName="color";var Fl=class extends In{};Fl.prototype.ValueTypeName="number";var Ol=class extends br{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)vi.slerpFlat(s,0,o,c-a,o,c,l);return s}},xo=class extends In{InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}};xo.prototype.ValueTypeName="quaternion";xo.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends In{constructor(e,t,n){super(e,t,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Qs;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends In{};Bl.prototype.ValueTypeName="vector";var zl=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){let h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}},lx=new zl,kl=class{constructor(e){this.manager=e!==void 0?e:lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},vo=class extends ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},_a=new Mt,Nu=new C,Fu=new C,_o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fu),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ou=new Mt,Gr=new C,ya=new C,Hl=class extends _o{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gr),ya.copy(n.position),ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ya),n.updateMatrixWorld(),r.makeTranslation(-Gr.x,-Gr.y,-Gr.z),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}},cs=class extends ls{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Hl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vl=class extends _o{constructor(){super(new kn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},us=class extends ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var yo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Bu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Bu(){return performance.now()}var dc="\\[\\]\\.:\\/",cx=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",ux="[^"+dc.replace("\\.","")+"]",hx=/((?:WC+[\/:])*)/.source.replace("WC",fc),dx=/(WCOD+)?/.source.replace("WCOD",ux),fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),mx=new RegExp("^"+hx+dx+fx+px+"$"),gx=["material","materials","bones","map"],Gl=class{constructor(e,t,n){let r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cx,"")}static parseTrackName(e){let t=mx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);gx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Gl;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qx=new Float32Array(1);var zu=new Mt,Mo=class{constructor(e,t,n=0,r=1/0){this.ray=new gr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zu),this}intersectObject(e,t=!0,n=[]){return Wl(e,this,n,t),n.sort(ku),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Wl(e[r],this,n,t);return n.sort(ku),n}};function ku(i,e){return i.distance-e.distance}function Wl(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Wl(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var yn={bg:526607,amber:15250790,champagne:16043918,ember:13201727,ice:9419007,iceHi:14478335},To={half:5,wallH:3.4,wallT:.3},Nt={workstation:[.9,0,.7],tableTop:.76,monitorRel:[.35,-.38],island:[.9,0,-2.7],deskX:-4.5,deskStations:[-2.7,-.55,1.6]},Qe={grid:[0,.1],slab:[.03,.12],trim:[.1,.16],tiles:[.08,.22],rug:[.2,.27],wallA:[.15,.25],wallB:[.19,.29],corner:[.24,.3],glazing:[.27,.34],desks:[.24,.37],storage:[.28,.39],island:[.3,.4],workstation:[.33,.43],props:[.36,.5],unity:[.53,.67],screens:[.57,.63],approach:[.72,.9],hover:[.89,.93],select:[.93,.97]},si={fov:[[0,22],[.5,22],[.7,22],[.9,40],[1,42]],az:[[0,64],[.22,55],[.5,45],[.7,47],[.82,28],[.9,12],[1,8]],el:[[0,46],[.25,38],[.5,33],[.7,31],[.82,24],[.9,15],[1,13]],dist:[[0,1.22],[.25,1.1],[.5,1],[.7,.97],[.82,.33],[.9,.085],[1,.075]],tx:[[0,0],[.5,0],[.7,0],[.82,.8],[.9,1.15],[1,1.2]],ty:[[0,.4],[.3,1.1],[.5,1.3],[.7,1.3],[.9,1.3],[1,1.3]],tz:[[0,0],[.5,0],[.7,0],[.82,.4],[.9,.35],[1,.35]]};var xx=i=>i<0?0:i>1?1:i,Vn=(i,e,t)=>i+(e-i)*t,ke=(i,e,t)=>xx((i-e)/(t-e)),It=i=>i*i*(3-2*i),Ar=i=>1-(1-i)**3,pc=i=>1-(1-i)**4,Ao=(i,e=1.5)=>1+(e+1)*(i-1)**3+e*(i-1)**2,Gn=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)};function Mi(i){let e=i.length,t=i.map(o=>o[0]),n=i.map(o=>o[1]),r=[];for(let o=0;o<e-1;o++)r[o]=(n[o+1]-n[o])/(t[o+1]-t[o]);let s=new Array(e);s[0]=r[0],s[e-1]=r[e-2];for(let o=1;o<e-1;o++)s[o]=r[o-1]*r[o]<=0?0:(r[o-1]+r[o])/2;for(let o=0;o<e-1;o++){if(r[o]===0){s[o]=s[o+1]=0;continue}let a=s[o]/r[o],l=s[o+1]/r[o],c=a*a+l*l;if(c>9){let u=3/Math.sqrt(c);s[o]=u*a*r[o],s[o+1]=u*l*r[o]}}return o=>{if(o<=t[0])return n[0];if(o>=t[e-1])return n[e-1];let a=0;for(;o>t[a+1];)a++;let l=t[a+1]-t[a],c=(o-t[a])/l,u=c*c,d=u*c;return(2*d-3*u+1)*n[a]+(d-2*u+c)*l*s[a]+(-2*d+3*u)*n[a+1]+(d-u)*l*s[a+1]}}function ah(i){let e=(n,r={})=>new as({color:n,...r}),t=(n,r=.6,s=.05,o={})=>new Oi({color:n,roughness:r,metalness:s,envMap:i,envMapIntensity:.55,...o});return{paint:e(12433582),wainscot:e(6650250),baseboard:e(2829878),slab:e(1052950),tile:e(16777215),brass:t(14263889,.32,.85),rug:e(3422534),wood:e(13082478),woodDark:e(7622970),laminate:e(15131612),steel:t(10134189,.42,.35),steelDark:t(3093308,.5,.4),plastic:t(1184536,.45,.05),plasticWhite:t(14869479,.4),fabric:e(2961986),fabricBlue:e(4022159),paper:e(15789799),cardboard:e(11636322),pot:e(11692619),tape:e(14857535),vertex:e(16777215,{vertexColors:!0}),lampBulb:new Oi({color:1709064,emissive:16763274,emissiveIntensity:2.2,roughness:.4}),glass:new Oi({color:11126510,roughness:.06,metalness:0,transparent:!0,opacity:.22,depthWrite:!1})}}function lh(i){let e=new Pn;e.add(new dt(new yi(60,32,16),new Vt({color:460813,side:Dt})));let t=(s,o,a,l,c)=>{let u=new dt(new Gt(s,o),new Vt({color:new Ce(a).multiplyScalar(l),side:tn}));u.position.set(...c),u.lookAt(0,0,0),e.add(u)};t(30,16,yn.champagne,4.5,[-24,26,18]),t(10,26,yn.ice,2.6,[30,10,-14]),t(14,14,16777215,1.8,[0,40,2]);let n=new vr(i),r=n.fromScene(e,.04);return n.dispose(),e.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),r.texture}function un(i,e=512,t=512,{anisotropy:n=4,redraw:r=!1}={}){let s=document.createElement("canvas");s.width=e,s.height=t;let o=s.getContext("2d");i(o,e,t);let a=new yr(s);return a.colorSpace=Tt,a.anisotropy=n,r&&document.fonts&&document.fonts.ready.then(()=>{o.clearRect(0,0,e,t),i(o,e,t),a.needsUpdate=!0}),a}function oi(i,e=.55,t=.1){return t<.15?new as({map:i}):new Oi({map:i,roughness:e,metalness:t})}function hn(i,e=1){return new Vt({map:i,color:new Ce().setScalar(e)})}function ch(i,e){let t=new mt,n=new vo(11123932,3420202,1.5);t.add(n);let r=new us(15988479,1.5);r.position.set(-7,15,10),r.castShadow=!0;let s=e.shadowSize;r.shadow.mapSize.set(s,s);let o=r.shadow.camera;o.left=-9,o.right=9,o.top=9,o.bottom=-9,o.near=2,o.far=42,r.shadow.bias=-4e-4,r.shadow.normalBias=.035,t.add(r,r.target);let a=new us(9416938,.35);a.position.set(11,7,-5),t.add(a);let l=new cs(16763274,0,4,2),c=new cs(16763274,0,3.5,2);t.add(l,c),i.add(t);let u=new Ce(15988479),d=new Ce(16765856),p="intensity"in r.shadow;return{group:t,setPractical(h,g){l.position.copy(h),c.position.copy(g)},update({unity:h=0}={}){n.intensity=Vn(1.5,.62,h),r.color.copy(u).lerp(d,h),r.intensity=Vn(2.3,3.4,h),p&&(r.shadow.intensity=Vn(.5,1,h)),a.intensity=Vn(.35,.7,h),l.intensity=6*h,c.intensity=5*h}}}var uh=si.fov[0][1],ki={fov:Mi(si.fov),az:Mi(si.az),el:Mi(si.el),logDist:Mi(si.dist.map(([i,e])=>[i,Math.log(e)])),tx:Mi(si.tx),ty:Mi(si.ty),tz:Mi(si.tz)},mc=Math.PI/180;function hh(){let i=new qt(uh,1,.5,160),e=40,t=!1;function n(a,l){let c=a/Math.max(1,l);i.aspect=c,t=c<.9;let u=Math.tan(uh*mc/2),d=t?8.8:9.25,p=t?7.5:9.2;e=Math.max(d/u,p/(u*c)),i.setViewOffset(a,l,0,-Math.round(l*(t?.01:.075)),a,l),i.updateProjectionMatrix()}let r=new C,s=-1;function o(a){let l=ki.az(a)*mc,c=ki.el(a)*mc,u=Math.exp(ki.logDist(a))*e;r.set(ki.tx(a),ki.ty(a),ki.tz(a)),i.position.set(r.x+u*Math.cos(c)*Math.sin(l),r.y+u*Math.sin(c),r.z+u*Math.cos(c)*Math.cos(l));let d=It(ke(a,...Qe.approach))*(1-It(ke(a,Qe.approach[1]-.03,Qe.approach[1]+.02)));i.position.y+=(t?0:.015)*d*Math.sin(a*260),i.lookAt(r);let p=ki.fov(a)*(t?1+.25*ke(a,...Qe.approach):1);Math.abs(p-s)>.01&&(s=p,i.fov=p,i.updateProjectionMatrix()),i.updateMatrixWorld()}return{camera:i,resize:n,update:o}}var dh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},vx=new kn(-1,1,1,-1,0,1),gc=class extends At{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}},_x=new gc,Rr=class{constructor(e){this._mesh=new dt(_x,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Cr=class extends Ln{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cc.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Rr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ds=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Ro=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Co=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cr(dh),this.copyPass.material.blending=Bn,this.clock=new yo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ds!==void 0&&(o instanceof ds?n=!0:o instanceof Ro&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Po=class extends Ln{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}};var yx=`
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
  }`,Mx=`
  uniform sampler2D tDiffuse;
  uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv + uTexel * vec2(-1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2(-1.0,  1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
    gl_FragColor = vec4(c * 0.25, 1.0);
  }`,bx=`
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
  }`,Sx=`
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
  }`,wx={uniforms:{tDiffuse:{value:null},resolution:{value:new ae(1/1024,1/512)}},vertexShader:`
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
    }`},Ex=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Io=(i,e)=>new Lt({vertexShader:Ex,fragmentShader:i,uniforms:e,depthTest:!1,depthWrite:!1}),xc=class extends Ln{constructor({strength:e=.32,threshold:t=1,knee:n=.5}={}){super();let r=()=>new Yt(4,4,{type:Hn,depthBuffer:!1});this.near=[r(),r()],this.far=[r(),r()],this.bright=Io(yx,{tDiffuse:{value:null},uTexel:{value:new ae},uThreshold:{value:t},uKnee:{value:n}}),this.down=Io(Mx,{tDiffuse:{value:null},uTexel:{value:new ae}}),this.blur=Io(bx,{tDiffuse:{value:null},uDir:{value:new ae}}),this.composite=Io(Sx,{tDiffuse:{value:null},tNear:{value:null},tFar:{value:null},uStrength:{value:e},uGrade:{value:0}}),this.composite.toneMapped=!1,this.quad=new Rr(this.bright)}setSize(e,t){let n=Math.max(2,Math.round(e/4)),r=Math.max(2,Math.round(t/4)),s=Math.max(2,Math.round(e/16)),o=Math.max(2,Math.round(t/16));this.near.forEach(a=>a.setSize(n,r)),this.far.forEach(a=>a.setSize(s,o)),this.srcSize=[e,t]}_run(e,t,n){this.quad.material=t,e.setRenderTarget(n),this.quad.render(e)}_blur(e,t,n,r){let[s,o]=t;this.blur.uniforms.uDir.value.set(1/n,0),this.blur.uniforms.tDiffuse.value=s.texture,this._run(e,this.blur,o),this.blur.uniforms.uDir.value.set(0,1/r),this.blur.uniforms.tDiffuse.value=o.texture,this._run(e,this.blur,s)}render(e,t,n){let[r,s]=this.srcSize,[o,a]=[this.near[0].width,this.near[0].height],[l,c]=[this.far[0].width,this.far[0].height];this.bright.uniforms.tDiffuse.value=n.texture,this.bright.uniforms.uTexel.value.set(1/r,1/s),this._run(e,this.bright,this.near[0]),this._blur(e,this.near,o,a),this.down.uniforms.tDiffuse.value=this.near[0].texture,this.down.uniforms.uTexel.value.set(1/o,1/a),this._run(e,this.down,this.far[0]),this._blur(e,this.far,l,c),this._blur(e,this.far,l,c);let u=this.composite.uniforms;u.tDiffuse.value=n.texture,u.tNear.value=this.near[0].texture,u.tFar.value=this.far[0].texture,this._run(e,this.composite,this.renderToScreen?null:t)}dispose(){[...this.near,...this.far].forEach(e=>e.dispose()),[this.bright,this.down,this.blur,this.composite].forEach(e=>e.dispose()),this.quad.dispose()}},fh={[Zl]:"LINEAR_TONE_MAPPING",[$l]:"REINHARD_TONE_MAPPING",[Jl]:"CINEON_TONE_MAPPING",[hs]:"ACES_FILMIC_TONE_MAPPING",[Kl]:"AGX_TONE_MAPPING",[Ql]:"NEUTRAL_TONE_MAPPING"};function ph(i,e){let t=`${e.toneMapping}|${e.outputColorSpace}`;i.userData.outputKey!==t&&(i.userData.outputKey=t,i.defines={},ht.getTransfer(e.outputColorSpace)===yt&&(i.defines.SRGB_TRANSFER=""),fh[e.toneMapping]&&(i.defines[fh[e.toneMapping]]=""),i.needsUpdate=!0)}function mh(i,e,t){let n=new Yt(4,4,{type:Hn,samples:0}),r=new Co(i,n);r.addPass(new Po(e,t));let s=new xc;r.addPass(s),ph(s.composite,i);let o=new Cr(wx);return r.addPass(o),{render:()=>r.render(),sceneTarget:n,programs(){return ph(s.composite,i),[[s.bright,!1],[s.down,!1],[s.blur,!1],[s.composite,!o.enabled],[o.material,!0]]},setSize(a,l,c){r.setPixelRatio(c),r.setSize(a,l),o.enabled=c<1.75,o.material.uniforms.resolution.value.set(1/(a*c),1/(l*c))},setBloom:a=>s.enabled=a,setGrade:a=>s.composite.uniforms.uGrade.value=a,dispose:()=>r.dispose()}}function gh(){let i=new Lt({transparent:!0,depthWrite:!1,blending:Ui,uniforms:{uOpacity:{value:0},uReveal:{value:0},uColor:{value:new Ce(yn.amber)}},vertexShader:`
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
      }`}),e=new dt(new Gt(140,140),i);return e.rotation.x=-Math.PI/2,e.position.y=-.62,e.renderOrder=-1,e.frustumCulled=!1,{group:e,update(t){i.uniforms.uReveal.value=Vn(0,60,It(ke(t,...Qe.grid)));let n=Vn(1,.22,It(ke(t,.14,.3)));i.uniforms.uOpacity.value=n*(1-It(ke(t,...Qe.unity)))}}}var fs=new C;function Mn(i,e,t,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;fs.copy(e),fs[n]=0,fs.normalize();let c=.5*o/(o+a),u=1-fs.angleTo(i)/l;return Math.sign(fs[t])===1?u*c:a/(o+a)+c+c*(1-u)}var bi=class extends Cn{constructor(e=1,t=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),r===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new C,l=new C,c=new C(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,h=u.length/6,g=new C,x=.5/r;for(let m=0,f=0;m<u.length;m+=3,f+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*s,u[m+1]=c.y*Math.sign(a.y)+l.y*s,u[m+2]=c.z*Math.sign(a.z)+l.z*s,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/h)){case 0:g.set(1,0,0),p[f+0]=Mn(g,l,"z","y",s,n),p[f+1]=1-Mn(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),p[f+0]=1-Mn(g,l,"z","y",s,n),p[f+1]=1-Mn(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),p[f+0]=1-Mn(g,l,"x","z",s,e),p[f+1]=Mn(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),p[f+0]=1-Mn(g,l,"x","z",s,e),p[f+1]=1-Mn(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),p[f+0]=1-Mn(g,l,"x","y",s,e),p[f+1]=1-Mn(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),p[f+0]=Mn(g,l,"x","y",s,e),p[f+1]=1-Mn(g,l,"y","x",s,t);break}}};function vh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new At,c=0;for(let u=0;u<i.length;++u){let d=i[u],p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(d.attributes[h]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,d=[];for(let p=0;p<i.length;++p){let h=i[p].index;for(let g=0;g<h.count;++g)d.push(h.getX(g)+u);u+=i[p].attributes.position.count}l.setIndex(d)}for(let u in s){let d=xh(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<d;++p){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][p]);let g=xh(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function xh(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new ft(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let p=0,h=u.count;p<h;p++)for(let g=0;g<t;g++){let x=u.getComponent(p,g);a.setComponent(p+d,g,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}var _h=()=>new ns({color:yn.amber,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1});function it({size:i,at:e=[0,0,0],material:t,radius:n=.04,wire:r=!0,keepWire:s=0,fx:o="drop",drop:a=3,dir:l=new C(0,-3,0),geometry:c=null,shadow:u=!0}){let[d,p,h]=i,g=c;if(!g){let R=Math.max(.004,Math.min(n,Math.min(d,p,h)/2-.002));g=new bi(d,p,h,R>.03?3:2,R),g.translate(0,p/2,0)}let x=t.clone();x.alphaHash=!0,x.transparent=!1,x.opacity=0;let m=new dt(g,x);m.receiveShadow=!0,m.userData.shadowCaster=u;let f=new mt;f.add(m),f.position.set(e[0],e[1],e[2]),f.visible=!1;let y=null;if(r==="edges")y=new is(new os(g,25),_h()),f.add(y);else if(r){let R=new Cn(d,p,h).translate(0,p/2,0);y=new is(new os(R),_h()),R.dispose(),f.add(y)}let S=f.position.clone();function _(R){let T=R>5e-4;if(f.visible=T,!T)return;let A=ke(R,.06,.8);switch(o){case"drop":{f.position.y=S.y+a*(1-pc(A));let I=Math.sin(Math.PI*ke(R,.62,.9));f.scale.y=1-.035*I;break}case"rise":f.scale.y=Math.max(.001,Ar(ke(R,.04,.85)));break;case"slide":f.position.copy(S).addScaledVector(l,1-pc(A));break;case"pop":f.scale.setScalar(Math.max(.001,Ao(ke(R,.04,.8),1.2)));break}if(x.opacity=It(ke(R,.34,.8)),m.castShadow=u&&R>.6,y){let I=It(ke(R,.02,.2)),w=It(ke(R,.68,1));y.material.opacity=I*(1-(1-s)*w)*.9}}return{root:f,mesh:m,mat:x,set:_,rest:S}}function ze(i,e,t={}){return it({size:[1,1,1],geometry:i,material:e,wire:!1,fx:"drop",drop:2.4,shadow:!1,...t})}function Zt(i){let e=vh(i.map(t=>t.index?t.toNonIndexed():t));return i.forEach(t=>t.dispose()),e}function rn(i,e,t,n=.55){let r=t>1?e/(t-1)*n:0;return ke(i,r,r+1-n)}var yh={blender:{color:"#E87D0D",path:"M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626"},unity:{color:"#FFFFFF",path:"m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z"}};var Tx='"Inter", "Segoe UI", system-ui, sans-serif';function Mh(i,e,t,n,r,s=1){let o=yh[e];i.save(),i.translate(t,n),i.scale(r/24,r/24),i.globalAlpha=s,i.fillStyle=o.color,i.fill(new Path2D(o.path)),i.restore()}var Ye=(i,e,t,n,r,s,o=0)=>{i.fillStyle=s,o?(i.beginPath(),i.roundRect(e,t,n,r,o),i.fill()):i.fillRect(e,t,n,r)},$t=(i,e,t,n,r,s,o=500,a="left")=>{i.font=`${o} ${r}px ${Tx}`,i.fillStyle=s,i.textAlign=a,i.textBaseline="middle",i.fillText(e,t,n)};function bh(i,e,t,n,{fill:r,line:s,outline:o,lit:a}){let l=(u,d,p)=>[e+(u-p)*n*.866,t+(u+p)*n*.5-d*n],c=(u,d,p,h=1.5)=>{i.beginPath(),u.forEach(([g,x],m)=>m?i.lineTo(g,x):i.moveTo(g,x)),i.closePath(),d&&(i.fillStyle=d,i.fill()),p&&(i.strokeStyle=p,i.lineWidth=h,i.stroke())};c([l(-1,0,-1),l(1,0,-1),l(1,0,1),l(-1,0,1)],r.floor,s),c([l(-1,0,-1),l(1,0,-1),l(1,1,-1),l(-1,1,-1)],r.wallB,s),c([l(-1,0,-1),l(-1,0,1),l(-1,1,1),l(-1,1,-1)],r.wallA,s),c([l(-.95,0,-.6),l(-.8,0,-.6),l(-.8,.3,-.6),l(-.95,.3,-.6)],null,null),c([l(-.95,.28,-.6),l(-.8,.28,-.6),l(-.8,.28,.6),l(-.95,.28,.6)],r.desk,s),c([l(-.3,.28,.1),l(.4,.28,.1),l(.4,.28,.6),l(-.3,.28,.6)],r.desk,o||s,o?2.6:1.5),a&&(i.fillStyle=a,i.beginPath(),i.arc(...l(0,.5,.4),n*.05,0,7),i.fill())}function Pr(){return un((i,e,t)=>{Ye(i,0,0,e,t,"#232323"),Ye(i,0,0,e,40,"#1d1d1d"),Mh(i,"blender",12,7,26),["File","Edit","Render","Window","Help"].forEach((l,c)=>$t(i,l,56+c*62,20,15,"#c9c9c9")),["Layout","Modeling","Sculpting","Shading"].forEach((l,c)=>{Ye(i,e-380+c*92,8,84,26,c===1?"#3f3f3f":"#2b2b2b",6),$t(i,l,e-338+c*92,21,13,c===1?"#f0f0f0":"#a8a8a8",500,"center")});let n=50,r=46,s=e-50-270,o=t-46-90,a=i.createLinearGradient(0,r,0,r+o);a.addColorStop(0,"#404040"),a.addColorStop(1,"#565656"),i.fillStyle=a,i.fillRect(n,r,s,o),i.save(),i.beginPath(),i.rect(n,r,s,o),i.clip(),i.strokeStyle="rgba(255,255,255,0.10)",i.lineWidth=1;for(let l=-14;l<=14;l++)i.beginPath(),i.moveTo(n+s/2+l*60,r+o*.52),i.lineTo(n+s/2+l*200,r+o),i.stroke();for(let l=0;l<9;l++){let c=r+o*.52+l*l*o*.5/60;i.beginPath(),i.moveTo(n,c),i.lineTo(n+s,c),i.stroke()}i.strokeStyle="rgba(203,68,68,0.85)",i.lineWidth=2,i.beginPath(),i.moveTo(n,r+o*.78),i.lineTo(n+s,r+o*.7),i.stroke(),i.strokeStyle="rgba(112,171,58,0.85)",i.beginPath(),i.moveTo(n+s*.52,r+o*.5),i.lineTo(n+s*.62,r+o),i.stroke(),bh(i,n+s*.5,r+o*.5,150,{fill:{floor:"#6a6a6a",wallA:"#7a7a7a",wallB:"#8b8b8b",desk:"#a0a0a0"},line:"rgba(30,30,30,0.9)",outline:"#f5a623"}),i.restore(),$t(i,"User Perspective",n+12,r+16,12,"rgba(255,255,255,0.7)"),$t(i,"(1) Lab",n+12,r+32,11,"rgba(255,255,255,0.5)");for(let l=0;l<9;l++)Ye(i,10,54+l*42,30,30,l===1?"#4772b3":"#333",5);Ye(i,e-264,46,264,210,"#282828"),$t(i,"Scene Collection",e-250,62,13,"#dcdcdc",600),["Lab","Walls","Desks","Chairs","Workstation","Monitor","Headset"].forEach((l,c)=>{Ye(i,e-250+(c?14:0),82+c*22,6,6,c===5?"#f5a623":"#7a7a7a",3),$t(i,l,e-236+(c?14:0),86+c*22,12,c===5?"#f5a623":"#bcbcbc")}),Ye(i,e-264,262,264,t-262-90,"#2b2b2b"),["Location","Rotation","Scale"].forEach((l,c)=>{$t(i,l,e-250,286+c*60,12,"#c4c4c4",600);for(let u=0;u<3;u++)Ye(i,e-250+u*78,298+c*60,72,22,"#3d3d3d",4)}),Ye(i,0,t-84,e,84,"#262626");for(let l=0;l<40;l++)Ye(i,60+l*22,t-60,1,l%5?8:16,"#555");[180,320,470,640].forEach(l=>{i.save(),i.translate(l,t-30),i.rotate(Math.PI/4),Ye(i,-6,-6,12,12,"#f5a623"),i.restore()})},1024,640)}function Lo(){return un((i,e,t)=>{Ye(i,0,0,e,t,"#383838"),Ye(i,0,0,e,44,"#282828"),Mh(i,"unity",12,8,28),["File","Edit","Assets","GameObject","Window"].forEach((l,c)=>$t(i,l,56+c*70,22,14,"#cfcfcf")),Ye(i,e/2-70,8,44,28,"#4c8be6",5),i.fillStyle="#fff",i.beginPath(),i.moveTo(e/2-55,15),i.lineTo(e/2-55,29),i.lineTo(e/2-43,22),i.fill(),Ye(i,e/2-20,8,44,28,"#4a4a4a",5),Ye(i,e/2+28,8,44,28,"#4a4a4a",5),Ye(i,0,44,200,t-44-190,"#2f2f2f"),$t(i,"Hierarchy",12,62,13,"#e0e0e0",600),[["SampleScene",0],["Lab",1],["Walls",2],["Desks",2],["XR Origin",1],["Workstation",1],["Monitor",2],["Headset",2]].forEach(([l,c],u)=>{l==="Monitor"&&Ye(i,0,78+u*24,200,24,"#2c5d87"),$t(i,l,16+c*16,91+u*24,13,l==="Monitor"?"#ffffff":"#c8c8c8")});let r=204,s=e-204-270,o=t-44-190,a=i.createLinearGradient(0,44,0,44+o);a.addColorStop(0,"#4b6f97"),a.addColorStop(1,"#a9bccd"),i.fillStyle=a,i.fillRect(r,44,s,o),i.save(),i.beginPath(),i.rect(r,44,s,o),i.clip(),bh(i,r+s*.5,44+o*.55,165,{fill:{floor:"#6f747e",wallA:"#c9c2b6",wallB:"#d6cfc2",desk:"#c79f6e"},line:"rgba(20,24,32,0.55)",outline:"#ff9f1a",lit:"#ffd28a"}),i.restore(),$t(i,"Scene",r+10,62,13,"#e6e6e6",600),i.strokeStyle="#e04b4b",i.lineWidth=3,i.beginPath(),i.moveTo(r+s-60,96),i.lineTo(r+s-30,108),i.stroke(),i.strokeStyle="#7fc043",i.beginPath(),i.moveTo(r+s-60,96),i.lineTo(r+s-60,62),i.stroke(),i.strokeStyle="#4c8be6",i.beginPath(),i.moveTo(r+s-60,96),i.lineTo(r+s-88,110),i.stroke(),Ye(i,e-266,44,266,t-44-190,"#2f2f2f"),$t(i,"Inspector",e-254,62,13,"#e0e0e0",600),$t(i,"Monitor",e-254,92,15,"#ffffff",600),["Transform","Mesh Renderer","XR Simple Interactable"].forEach((l,c)=>{Ye(i,e-258,112+c*88,250,26,"#3c3c3c",3),Ye(i,e-250,121+c*88,8,8,"#4c8be6",2),$t(i,l,e-234,126+c*88,12,"#dcdcdc",600);for(let u=0;u<3;u++)Ye(i,e-250,146+c*88+u*18,232-u*40,9,"#454545",2)}),Ye(i,0,t-186,e,186,"#2b2b2b"),$t(i,"Project",12,t-168,13,"#e0e0e0",600),["Models","Materials","Scenes","Scripts","Prefabs","XR"].forEach((l,c)=>{Ye(i,20+c*130,t-138,100,70,"#3a3a3a",6),Ye(i,20+c*130+28,t-128,44,34,"#7f8a99",4),$t(i,l,70+c*130,t-50,12,"#cfcfcf",500,"center")})},1024,640)}function Ir(i=0){return un((e,t,n)=>{Ye(e,0,0,t,n,"#1e1f24"),Ye(e,0,0,t,34,"#2a2b31"),Ye(e,0,34,220,n-34,"#232429");for(let s=0;s<14;s++)Ye(e,18+s%3*14,56+s*24,90+(s*37+i*11)%90,8,s===4?"#5b8fd9":"#4a4d57",3);let r=["#c586c0","#9cdcfe","#dcdcaa","#569cd6","#ce9178","#6a9955"];for(let s=0;s<24;s++){let o=250+(s%4===2?30:0)+(s%7===3?30:0);for(let a=0;a<3+(s+i)%3;a++){let l=40+((s+1)*(a+3)*37+i*17)%120;Ye(e,o,60+s*22,l,9,r[(s+a+i)%r.length],3),o+=l+12}}},1024,640)}function Sh(){return un((i,e,t)=>{Ye(i,0,0,e,t,"#f3f3ef");let n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(0,0,0,0.05)"),i.fillStyle=n,i.fillRect(0,0,e,t),i.lineCap="round",i.lineJoin="round",[[90,"Blender","#d0701a"],[380,"Unity","#2a2f3a"],[670,"XR","#2c6db4"]].forEach(([s,o,a])=>{i.strokeStyle=a,i.lineWidth=5,i.beginPath(),i.roundRect(s,130,220,110,14),i.stroke(),i.font='600 44px "Segoe Print", "Bradley Hand", "Comic Sans MS", cursive',i.fillStyle=a,i.textAlign="center",i.textBaseline="middle",i.fillText(o,s+110,188)}),i.strokeStyle="#333",i.lineWidth=5,[[318,372],[608,662]].forEach(([s,o])=>{i.beginPath(),i.moveTo(s,186),i.lineTo(o,186),i.moveTo(o-16,170),i.lineTo(o,186),i.lineTo(o-16,202),i.stroke()}),i.strokeStyle="#3a7a3a",i.lineWidth=4,i.strokeRect(120,300,220,150),i.beginPath(),i.moveTo(120,360),i.lineTo(230,360),i.lineTo(230,450),i.moveTo(230,300),i.lineTo(230,330),i.stroke(),i.strokeStyle="#a33",i.lineWidth=3;for(let s=0;s<4;s++)i.beginPath(),i.moveTo(440,330+s*34),i.lineTo(600+s*53%110,330+s*34+(s%2*6-3)),i.stroke();i.fillStyle="#f7e27a",i.fillRect(760,300,130,120),i.strokeStyle="rgba(0,0,0,0.35)",i.lineWidth=3;for(let s=0;s<4;s++)i.beginPath(),i.moveTo(776,332+s*20),i.lineTo(870-s%2*28,332+s*20),i.stroke()},1024,460,{redraw:!0})}function wh(){return un((i,e,t)=>{let n=e/2;i.fillStyle="#f4f2ec",i.beginPath(),i.arc(n,n,n,0,7),i.fill(),i.strokeStyle="#2c2f38";for(let r=0;r<12;r++){let s=r/12*Math.PI*2;i.lineWidth=r%3?4:8,i.beginPath(),i.moveTo(n+Math.sin(s)*n*.78,n-Math.cos(s)*n*.78),i.lineTo(n+Math.sin(s)*n*.9,n-Math.cos(s)*n*.9),i.stroke()}i.lineCap="round",i.lineWidth=9,i.beginPath(),i.moveTo(n,n),i.lineTo(n+Math.sin(-1.05)*n*.5,n-Math.cos(-1.05)*n*.5),i.stroke(),i.lineWidth=6,i.beginPath(),i.moveTo(n,n),i.lineTo(n+Math.sin(.35)*n*.72,n-Math.cos(.35)*n*.72),i.stroke()},256,256)}function Eh(i="#8f9bab"){return un((e,t,n)=>{Ye(e,0,0,t,n,i),e.strokeStyle="rgba(0,0,0,0.35)",e.lineWidth=4,e.strokeRect(6,6,t/2-9,n-12),e.strokeRect(t/2+3,6,t/2-9,n-12),e.fillStyle="rgba(0,0,0,0.42)";for(let r=0;r<2;r++)for(let s=0;s<6;s++)Ye(e,24+r*(t/2),34+s*12,t/2-48,5,"rgba(0,0,0,0.42)",2);Ye(e,t/2-22,n*.5,10,70,"#d9dbe0",4),Ye(e,t/2+12,n*.5,10,70,"#d9dbe0",4)},256,640)}function Th(i="#dedbd3"){return un((e,t,n)=>{Ye(e,0,0,t,n,i),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=4;for(let r=0;r<3;r++){let s=8+r*(n/3);e.strokeRect(8,s,t-16,n/3-12),Ye(e,t/2-40,s+(n/3-12)/2-4,80,8,"#8a8f99",4)}},256,256)}function Ah(){return un((i,e,t)=>{for(let n=0;n<9;n++){let r=n/9*t;Ye(i,0,r,e,t/9-8,"#e6e2d8"),Ye(i,0,r+t/9-8,e,8,"rgba(60,55,45,0.55)")}},128,512)}function Do(){return un((i,e,t)=>{Ye(i,0,0,e,t,"#1b1c21");for(let n=0;n<5;n++)for(let r=0;r<16;r++)Ye(i,14+r*30,14+n*26,26,22,"#2e3038",4);Ye(i,110,118,260,22,"#2e3038",4)},512,160)}function Rh(){return un((i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#5f86b8"),n.addColorStop(.55,"#a9c1dc"),n.addColorStop(1,"#f0d9b5"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="rgba(70,86,100,0.55)";for(let r=0;r<14;r++){let s=40+r*53%60,o=24+r*37%70;i.fillRect(r*(e/14),t-o,s,o)}},1024,256)}function Ch(){return un((i,e,t)=>{Ye(i,0,0,e,t,"#eef0f2"),i.strokeStyle="#3d6db0",i.lineWidth=2,i.strokeRect(30,30,e-60,t-60),i.beginPath(),i.moveTo(30,t*.45),i.lineTo(e*.55,t*.45),i.lineTo(e*.55,t-30),i.moveTo(e*.55,30),i.lineTo(e*.55,t*.22),i.stroke(),i.strokeStyle="#8fa8c8",i.lineWidth=1;for(let n=1;n<12;n++)i.beginPath(),i.moveTo(30+n*((e-60)/12),30),i.lineTo(30+n*((e-60)/12),t-30),i.stroke();i.fillStyle="#3d6db0",[[70,60],[150,60],[230,60],[e*.7,t*.7]].forEach(([n,r])=>i.fillRect(n,r,34,22))},512,320)}function Ph(){return un((i,e,t)=>{i.strokeStyle="rgba(226,181,63,0.95)",i.lineWidth=16,i.lineCap="butt";let n=20,r=130;[[n,n,1,1],[e-n,n,-1,1],[e-n,t-n,-1,-1],[n,t-n,1,-1]].forEach(([s,o,a,l])=>{i.beginPath(),i.moveTo(s+a*r,o),i.lineTo(s,o),i.lineTo(s,o+l*r),i.stroke()})},512,512)}function Ih({materials:i}){let e=new mt,t=To.half*2,n=it({size:[t+.4,.5,t+.4],at:[0,-.6,0],material:i.slab,radius:.08,fx:"slide",dir:new C(0,-6,0),shadow:!1}),r=it({size:[t+.46,.05,t+.46],at:[0,-.42,0],material:i.brass,radius:.012,fx:"slide",dir:new C(0,0,0),wire:!1,shadow:!1});e.add(n.root,r.root);let s=t,o=s*s,a=new Cn(.985,.06,.985).translate(0,.03,0),l=new _r(a,i.tile,o);l.receiveShadow=!0,l.frustumCulled=!1;let c=new Float32Array(o),u=[],d=new Ce(5659496),p=new Ce(6580856),h=new Ce;for(let _=0;_<s;_++)for(let R=0;R<s;R++){let T=_*s+R,A=_-s/2+.5,I=R-s/2+.5;u.push([A,I]),c[T]=Math.hypot(A-Nt.workstation[0],I-Nt.workstation[2])/9*.6+Gn(T)*.06,h.copy(d).lerp(p,((_+R)%2?.5:.1)+Gn(T+9)*.35),l.setColorAt(T,h)}e.add(l);let g=new Ft,x=-1;function m(_){if(_!==x){x=_;for(let R=0;R<o;R++){let T=ke(_,c[R],c[R]+.4),[A,I]=u[R],w=T<=0?1e-4:Math.max(1e-4,Ao(T,1.1));g.position.set(A,-.06-1.3*(1-Ar(T)),I),g.scale.set(w,w,w),g.updateMatrix(),l.setMatrixAt(R,g.matrix)}l.instanceMatrix.needsUpdate=!0}}let f=it({size:[3.9,.02,3.3],at:[Nt.workstation[0],0,Nt.workstation[2]+.55],material:i.rug,radius:.008,fx:"drop",drop:2.2,wire:!1,shadow:!1});e.add(f.root);let y=new Vt({map:Ph(),transparent:!0,opacity:0,depthWrite:!1,color:12566463}),S=new dt(new Gt(2.9,2.9),y);return S.rotation.x=-Math.PI/2,S.position.set(3.4,.004,3),S.renderOrder=1,e.add(S),{group:e,update(_){n.set(ke(_,...Qe.slab)),r.set(ke(_,...Qe.trim)),m(ke(_,...Qe.tiles));let R=ke(_,...Qe.rug);f.set(R),y.opacity=It(ke(R,.4,1))*.85}}}function je(i,e,t,n=[0,0,0],r=.012,s=null){let o=Math.max(.003,Math.min(r,Math.min(i,e,t)/2-.001)),a=new bi(i,e,t,o>.03?3:o>.012?2:1,o).translate(0,e/2,0);return s&&(s[0]&&a.rotateX(s[0]),s[1]&&a.rotateY(s[1]),s[2]&&a.rotateZ(s[2])),a.translate(n[0],n[1],n[2])}function Dn(i,e,t,n=[0,0,0],r=20){return new Mr(i,e,t,r).translate(0,t/2,0).translate(n[0],n[1],n[2])}function vc(i,e=[0,0,0],t=10){return new yi(i,t,Math.max(6,t-2)).translate(e[0],e[1],e[2])}function Uo(i,e){let t=new Ce(e),n=i.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r.set([t.r,t.g,t.b],s*3);return i.setAttribute("color",new ft(r,3)),i}function Ve(i,e,t,n,r=0){return r&&i.rotateY(r),i.translate(e,t,n)}function Lr(i,e,t,n,r=0){let s=new Gt(i.screen.w,i.screen.h).translate(0,i.screen.y,i.screen.z);return Ve(s,e,t,n,r)}function Dr(){let i=[];for(let n=0;n<5;n++){let r=n/5*Math.PI*2,s=je(.34,.03,.05,[.17,.07,0],.01);s.rotateY(r),i.push(s);let o=Math.cos(r)*.34,a=-Math.sin(r)*.34;i.push(Dn(.035,.035,.05,[o,0,a],10))}let e=Zt([...i,Dn(.032,.032,.34,[0,.08,0],12),je(.44,.03,.4,[0,.4,0],.01),je(.04,.24,.05,[0,.4,-.26],.01),je(.05,.04,.34,[-.29,.62,-.05],.015),je(.05,.04,.34,[.29,.62,-.05],.015),je(.03,.2,.03,[-.29,.44,-.05],.008),je(.03,.2,.03,[.29,.44,-.05],.008)]),t=Zt([je(.5,.09,.48,[0,.42,.02],.04),je(.46,.5,.07,[0,.66,-.27],.04,[-.12,0,0])]);return{base:e,fabric:t}}function ps(i,e){return{body:Zt([je(i+.06,e+.06,.045,[0,.15,0],.02),je(.09,.16999999999999998,.05,[0,0,-.045],.01),je(.34,.02,.22,[0,0,0],.01)]),screen:{w:i,h:e,y:.15+.03+e/2,z:.0235},top:.15+e+.06}}var No=()=>je(.46,.022,.16,[0,0,0],.008),Fo=()=>je(.06,.028,.1,[0,0,0],.025);function _c(){return{base:je(.5,.02,.34,[0,0,0],.01),lid:je(.5,.33,.015,[0,.02,-.16],.008,[-.22,0,0])}}var Si=()=>Zt([Dn(.045,.04,.1,[0,0,0],14),je(.02,.06,.03,[.06,.02,0],.008)]);function Oo(){return{body:Zt([Dn(.09,.1,.02,[0,0,0],16),je(.025,.42,.025,[0,.02,0],.008,[.15,0,0]),je(.025,.36,.025,[.04,.4,.06],.008,[-.75,0,0]),Dn(.02,.11,.14,[.04,.6,-.16],16).rotateX(0)]),bulb:vc(.035,[.04,.6,-.14],10)}}function yc(i=1){let e=i,t=[],n=[5144395,6066002,4288066,6922330];for(let r=0;r<9;r++){let s=r/9*Math.PI*2+r*.7,o=(.1+r%3*.05)*e,a=vc(.13*e,[Math.cos(s)*o,(.32+r%4*.08)*e,Math.sin(s)*o],8);a.scale(1,1.25,1),t.push(Uo(a,n[r%n.length]))}return t.push(Uo(vc(.16*e,[0,.5*e,0],8),n[1])),{pot:Zt([Dn(.15*e,.11*e,.24*e,[0,0,0],16),Dn(.155*e,.155*e,.03*e,[0,.24*e,0],16)]),leaves:Zt(t)}}function Lh(){return{shell:Zt([je(.4,.22,.26,[0,.02,0],.07),je(.46,.05,.04,[0,.13,-.12],.02)]),dark:Zt([je(.33,.14,.02,[0,.06,.135],.03),je(.3,.13,.05,[0,.055,-.15],.04),new Fi(.17,.018,8,24,Math.PI).rotateX(Math.PI/2).translate(0,.14,-.28)])}}var Mc=()=>Zt([new Fi(.05,.011,8,20).rotateX(-.9).translate(0,.07,.03),new mo(.022,.09,4,10).rotateX(Math.PI/2-.25).translate(0,.03,-.03)]);function Dh({materials:i}){let e=new mt,t=To.wallH,n=S=>(e.add(S.root),S),r=n(it({size:[.3,t,10.3],at:[-5.15,0,-.15],material:i.paint,radius:.02,fx:"rise"})),s=n(it({size:[10,t,.3],at:[0,0,-5.15],material:i.paint,radius:.02,fx:"rise"})),o=[],a=(S,_,R)=>{n(S),o.push({p:S,wallKey:_,order:R})},l=new C(.6,0,0),c=new C(0,0,.6);a(it({size:[.06,1.05,10],at:[-4.97,0,0],material:i.wainscot,radius:.015,fx:"slide",dir:l,wire:!1}),"wallA",0),a(it({size:[9.94,1.05,.06],at:[.03,0,-4.97],material:i.wainscot,radius:.015,fx:"slide",dir:c,wire:!1}),"wallB",0),a(it({size:[.09,.03,10],at:[-4.955,1.05,0],material:i.brass,radius:.01,fx:"slide",dir:l,wire:!1,shadow:!1}),"wallA",1),a(it({size:[9.94,.03,.09],at:[.03,1.05,-4.955],material:i.brass,radius:.01,fx:"slide",dir:c,wire:!1,shadow:!1}),"wallB",1),a(it({size:[.04,.12,10],at:[-4.93,0,0],material:i.baseboard,radius:.01,fx:"slide",dir:l,wire:!1}),"wallA",1),a(it({size:[9.94,.12,.04],at:[.03,0,-4.93],material:i.baseboard,radius:.01,fx:"slide",dir:c,wire:!1}),"wallB",1),a(it({size:[.36,.05,10.36],at:[-5.15,t,-.15],material:i.brass,radius:.012,fx:"drop",drop:1.5,wire:!1}),"wallA",2),a(it({size:[10.06,.05,.36],at:[0,t,-5.15],material:i.brass,radius:.012,fx:"drop",drop:1.5,wire:!1}),"wallB",2);let u=n(it({size:[.4,t+.06,.4],at:[-4.8,0,-4.8],material:i.paint,radius:.03,fx:"rise"})),d=hn(Rh(),.9),p=[],h=S=>(p.push(n(S)),S),g=h(it({size:[.02,1.62,6],at:[-4.985,1.1,-.7],material:d,radius:.004,fx:"slide",dir:new C(.4,0,0),wire:!1,shadow:!1})),x=(S,_,R=i.plasticWhite)=>h(it({size:S,at:_,material:R,radius:.01,fx:"drop",drop:1.2,wire:!1}));x([.1,.06,6.2],[-4.95,2.72,-.7]),x([.1,.05,6.2],[-4.95,1.08,-.7]),[-3.7,-1.7,.3,2.3].forEach(S=>x([.1,1.66,.07],[-4.95,1.08,S])),x([.26,.04,6.4],[-4.88,1.04,-.7],i.laminate),h(it({size:[.03,.62,6],at:[-4.93,2.1,-.7],material:hn(Ah(),.95),radius:.004,fx:"drop",drop:1,wire:!1,shadow:!1})),x([.1,.08,6.1],[-4.93,2.72,-.7],i.plasticWhite),h(it({size:[3,1.4,.03],at:[1.1,.95,-4.97],material:hn(Sh(),1),radius:.008,fx:"slide",dir:new C(0,0,.5),wire:!1,shadow:!1})),x([3.1,1.5,.02],[1.1,.9,-4.99],i.steel),x([3,.04,.09],[1.1,.9,-4.93],i.steel),h(it({size:[.6,.6,.01],at:[3.95,2.72,-4.985],geometry:new go(.3,40),material:hn(wh(),1),fx:"drop",drop:1,wire:!1,shadow:!1})),h(it({size:[.66,.66,.05],at:[3.95,2.72,-4.975],geometry:new Fi(.31,.03,8,40),material:i.brass,fx:"drop",drop:1,wire:!1,shadow:!1})),h(it({size:[1.3,2.2,.04],at:[3.85,0,-4.98],material:i.slab,radius:.006,fx:"slide",dir:new C(0,0,.5),wire:!1,shadow:!1})),x([.09,2.24,.14],[3.2,0,-4.93],i.woodDark),x([.09,2.24,.14],[4.5,0,-4.93],i.woodDark),x([1.4,.09,.14],[3.85,2.2,-4.93],i.woodDark);let m=h(it({size:[1.02,2.1,.05],at:[4.42,0,-4.86],geometry:je(1.02,2.1,.05,[-.51,0,0],.012),material:i.wood,radius:.012,fx:"drop",drop:1.4,wire:!1}));m.root.rotation.y=.62;let f=h(it({size:[.12,.04,.09],at:[4.42,1,-4.86],geometry:je(.12,.04,.09,[-.9,0,0],.01),material:i.brass,radius:.01,fx:"drop",drop:1.4,wire:!1,shadow:!1}));f.root.rotation.y=.62;let y={wallA:Qe.wallA,wallB:Qe.wallB,corner:Qe.corner};return{group:e,update(S){let _=A=>ke(S,...y[A]);r.set(_("wallA")),s.set(_("wallB")),u.set(_("corner"));for(let{p:A,wallKey:I,order:w}of o)A.set(ke(_(I),.35+w*.12,.85+w*.08));let R=ke(S,...Qe.glazing);p.forEach((A,I)=>A.set(rn(R,I,p.length,.7)));let T=It(ke(S,...Qe.unity));g.mat.color.setScalar(Vn(.8,1.15,T))}}}function Uh({materials:i}){let e=new mt,t=Nt.deskX,n=[],r=[],s=y=>(e.add(y.root),n.push(y),y),o=y=>(e.add(y.root),r.push(y),y),a=y=>s(it({size:[.76,.72,.04],at:[t,0,y],material:i.laminate,radius:.008,fx:"drop",drop:3.2})),l=oi(Th(),.6),c=y=>s(it({size:[.5,.68,.7],at:[t-.15,0,y],material:l,radius:.012,fx:"drop",drop:3.2}));a(2.67),c(1.9),a(.55),a(-1.65),c(-3.45),a(-3.97),s(it({size:[.84,.04,6.7],at:[t,.72,-.65],material:i.wood,radius:.012,fx:"drop",drop:2.4,keepWire:.1}));let u=[{tex:Pr(),gain:.85},{tex:Ir(1),gain:.85},{tex:Lo(),gain:.85}],d=[-.12,.28,-.3],p=[-2.3,-.55,.95],h=Do(),g=[],x=[];Nt.deskStations.forEach((y,S)=>{let _=ps(.86,.52);o(ze(Ve(_.body,t-.05,.76,y,Math.PI/2),i.plastic,{shadow:!0})),o(ze(Lr(_,t-.05,.76,y,Math.PI/2),hn(u[S].tex,u[S].gain),{shadow:!1})),o(ze(Ve(No(),t+.3,.76,y,Math.PI/2),oi(h,.5))),o(ze(Ve(Fo(),t+.3,.76,y+.36),i.plastic)),o(ze(Ve(je(.22,.48,.46,[0,0,0],.02),t-.05,0,p[S],Math.PI/2),i.plastic,{drop:3}));let R=Dr(),T=-Math.PI/2+d[S];o(ze(Ve(R.base,t+1.15,0,y+.1,T),i.steelDark,{drop:3.4,shadow:!0})),o(ze(Ve(R.fabric,t+1.15,0,y+.1,T),S===1?i.fabricBlue:i.fabric,{drop:3.4,shadow:!0}))});let m=Oo();o(ze(Ve(m.body,t-.22,.76,Nt.deskStations[0]-.62,Math.PI/2),i.steelDark));let f=o(ze(Ve(m.bulb,t-.22,.76,Nt.deskStations[0]-.62,Math.PI/2),i.lampBulb.clone(),{shadow:!1}));return g.push(f),x.push(new C(t-.02,1.35,Nt.deskStations[0]-.5)),o(ze(Ve(Si(),t+.28,.76,Nt.deskStations[1]-.5),i.plasticWhite)),o(ze(Ve(je(.22,.03,.3,[0,0,0],.004),t+.3,.76,Nt.deskStations[1]+.55,.3),i.paper)),o(ze(Ve(Si(),t+.25,.76,Nt.deskStations[2]-.5,1.2),i.pot)),{group:e,lampPositions:x,bulbs:g,update(y){let S=ke(y,...Qe.desks);n.forEach((R,T)=>R.set(rn(S,T,n.length,.6)));let _=ke(y,...Qe.props);r.forEach((R,T)=>R.set(rn(_,T,r.length,.62)))}}}function Nh({materials:i}){let e=new mt,t=[],n=[];[[-4.4,"#8593a6"],[-3.55,"#7c8f9c"]].forEach(([m,f])=>{let y=it({size:[.8,2,.55],at:[m,0,-4.68],material:oi(Eh(f),.5,.25),radius:.015,fx:"rise"});e.add(y.root),t.push(y)});let r=-2.05,s=-4.76,o=[.02,.55,1.05,1.55,2.03],a=Zt([je(.04,2.06,.38,[-.83,0,0],.006),je(.04,2.06,.38,[.83,0,0],.006),...o.map(m=>je(1.66,.03,.38,[0,m,0],.006))]),l=it({size:[1.7,2.06,.38],at:[r,0,s],geometry:a,material:i.steel,fx:"rise"});e.add(l.root),t.push(l);let c=[9187129,3103372,3042127,8092546,13672762,3356223,13222836],u=[11636322,10846810,12294768],d=[5597834,7304320,4942691],p=[],h=0,g=()=>Gn(h++*1.37+3.1);o.slice(0,4).forEach((m,f)=>{let y=-.78,S=m+.03;for(;y<.7;){let _,R,T,A;if(f===0?(_=.28+g()*.12,R=.26+g()*.1,T=.3,A=d[Math.floor(g()*d.length)]):f===2&&g()>.4?(_=.28+g()*.14,R=.3+g()*.12,T=.32,A=u[Math.floor(g()*u.length)]):(_=.05+g()*.04,R=.3+g()*.12,T=.27,A=c[Math.floor(g()*c.length)]),y+_>.8)break;p.push(Uo(je(_,R,T,[y+_/2,S,0],.004),A)),y+=_+(f===0||f===2?.04:.005),f>=1&&g()>.9&&(y+=.16)}});let x=it({size:[1.7,1.7,.38],at:[r,0,s],geometry:Zt(p),material:i.vertex,radius:.01,fx:"drop",drop:2.6,wire:!1});return e.add(x.root),n.push(x),{group:e,update(m){let f=ke(m,...Qe.storage);t.forEach((y,S)=>y.set(rn(f,S,t.length,.5))),n.forEach(y=>y.set(ke(f,.55,1)))}}}function Fh({materials:i}){let[e,,t]=Nt.island,n=new mt,r=[],s=[],o=p=>(n.add(p.root),r.push(p),p),a=p=>(n.add(p.root),s.push(p),p);[[-1.5,-.45],[1.5,-.45],[-1.5,.45],[1.5,.45]].forEach(([p,h])=>o(it({size:[.07,.71,.07],at:[e+p,0,t+h],material:i.steelDark,radius:.012,fx:"drop",drop:3.2,wire:!1}))),o(it({size:[3.2,.05,1.1],at:[e,.71,t],material:i.wood,radius:.012,fx:"drop",drop:2.4,keepWire:.1}));let l=(p,h,g,x)=>{let m=new Gt(.46,.3).translate(0,.165,.009).rotateX(-.22).translate(0,.02,-.16);return Ve(m,p,h,g,x)},c=.76;a(ze(Ve(je(1.5,.006,.95,[0,0,0],.002),e-.25,c,t,.12),oi(Ch(),.9,0)));let u=_c(),d=_c();return a(ze(Ve(u.base,e-1.1,c,t+.28),i.steel)),a(ze(Ve(u.lid,e-1.1,c,t+.28),i.steel)),a(ze(l(e-1.1,c,t+.28,0),hn(Ir(3),.85),{shadow:!1})),a(ze(Ve(d.base,e+1.15,c,t-.22,Math.PI),i.steel)),a(ze(Ve(d.lid,e+1.15,c,t-.22,Math.PI),i.steel)),a(ze(l(e+1.15,c,t-.22,Math.PI),hn(Pr(),.85),{shadow:!1})),a(ze(Ve(Si(),e+.55,c,t+.32,.8),i.plasticWhite)),a(ze(Ve(Si(),e-.1,c,t-.36,2.1),i.pot)),[[e-.45,t+1.1,Math.PI-.2,i.fabric],[e+.75,t+1,Math.PI+.4,i.fabricBlue],[e+.2,t-1.05,.15,i.fabric]].forEach(([p,h,g,x])=>{let m=Dr();a(ze(Ve(m.base,p,0,h,g),i.steelDark,{drop:3.4,shadow:!0})),a(ze(Ve(m.fabric,p,0,h,g),x,{drop:3.4,shadow:!0}))}),{group:n,update(p){let h=ke(p,...Qe.island);r.forEach((x,m)=>x.set(rn(h,m,r.length,.5)));let g=ke(p,...Qe.props);s.forEach((x,m)=>x.set(rn(g,m,s.length,.62)))}}}function Oh({materials:i}){let[e,,t]=Nt.workstation,n=Nt.tableTop,r=new mt,s=[],o=(R,T=r)=>(T.add(R.root),s.push(R),R);o(it({size:[2.8,.05,1.3],at:[e,n-.05,t],material:i.wood,radius:.012,fx:"drop",drop:2.6,keepWire:.1})),[-1.32,1.32].forEach(R=>o(it({size:[.05,n-.05,1.1],at:[e+R,0,t],material:i.laminate,radius:.01,fx:"drop",drop:3.2}))),o(it({size:[2.56,.42,.03],at:[e,.26,t-.5],material:i.laminate,radius:.008,fx:"drop",drop:3.2,wire:!1}));let[a,l]=Nt.monitorRel,c=e+a,u=t+l,d=ps(1,.6),p=new mt;r.add(p),o(ze(Ve(d.body,c,n,u),i.plastic,{shadow:!0}),p),o(ze(Lr(d,c,n,u),hn(Pr(),.9),{shadow:!1}),p);let h=new Vt({map:Lo(),transparent:!0,opacity:0,depthWrite:!1}),g=new dt(Lr(d,c,n,u),h);g.position.z=.0015,g.renderOrder=2,g.visible=!1,p.add(g);let x=ps(.86,.52);o(ze(Ve(x.body,e-.8,n,t-.38,.25),i.plastic,{shadow:!0})),o(ze(Lr(x,e-.8,n,t-.38,.25),hn(Ir(2),.85),{shadow:!1})),o(ze(Ve(No(),e-.15,n,t+.12),oi(Do(),.5))),o(ze(Ve(Fo(),e+.34,n,t+.14,.1),i.plastic));let m=Lh();o(ze(Ve(m.shell,e+1.02,n,t+.1,-.5),i.plasticWhite)),o(ze(Ve(m.dark,e+1.02,n,t+.1,-.5),i.plastic)),o(ze(Ve(Mc(),e+.9,n,t+.47,.6),i.plasticWhite)),o(ze(Ve(Mc(),e+1.1,n,t+.42,1.05),i.plasticWhite));let f=Oo();o(ze(Ve(f.body,e-1.2,n,t-.42,.5),i.steelDark));let y=o(ze(Ve(f.bulb,e-1.2,n,t-.42,.5),i.lampBulb.clone(),{shadow:!1}));o(ze(Ve(Si(),e-1.02,n,t+.2,.4),i.plasticWhite)),o(ze(Ve(je(.22,.025,.3,[0,0,0],.004),e-.62,n,t+.32,.25),i.paper)),o(ze(Ve(je(.22,.48,.46,[0,0,0],.02),e+1,0,t-.22,-.2),i.plastic,{drop:3})),[[e+.5,t+1.35,Math.PI+.3,i.fabric],[e-.85,t+1.7,Math.PI-.55,i.fabricBlue]].forEach(([R,T,A,I])=>{let w=Dr();o(ze(Ve(w.base,R,0,T,A),i.steelDark,{drop:3.4,shadow:!0})),o(ze(Ve(w.fabric,R,0,T,A),I,{drop:3.4,shadow:!0}))});let S=d.top-.15,_={group:p,unityMat:h,center:new C(c,n+.15+.03+.3,u+.03),bezel:{w:1.06,h:S,d:.045,cy:n+.15+S/2,z:u},x:c};return{group:r,target:_,lampPosition:new C(e-1.1,n+.75,t-.5),bulb:y,update(R){let T=ke(R,...Qe.workstation);s.forEach((I,w)=>I.set(rn(T,w,s.length,.68)));let A=It(ke(R,...Qe.screens));g.visible=A>.001,h.opacity=A}}}function Bh({materials:i}){let e=new mt,t=[],n=s=>(e.add(s.root),t.push(s),s);[[-2,.7],[.9,.62]].forEach(([s,o])=>{let a=yc(o);n(ze(Ve(a.pot,-4.85,1.08,s),i.pot)),n(ze(Ve(a.leaves,-4.85,1.08,s),i.vertex))});let r=yc(1.7);return n(ze(Ve(r.pot,-4.2,0,3.9),i.pot,{drop:3})),n(ze(Ve(r.leaves,-4.2,0,3.9),i.vertex,{drop:3})),n(ze(Dn(.17,.15,.4,[2.75,0,-4.6],18),i.steelDark,{drop:3})),n(ze(Zt([Dn(.075,.075,.42,[3.02,.35,-4.72],14),Dn(.03,.03,.08,[3.02,.77,-4.72],10)]),i.tape,{drop:3})),n(ze(Ve(je(.55,.42,.5,[0,0,0],.01),4.6,0,-4.45,.1),i.cardboard,{drop:3})),n(ze(Ve(je(.42,.3,.4,[0,0,0],.01),4.62,.42,-4.42,-.15),i.cardboard,{drop:3})),{group:e,update(s){let o=ke(s,...Qe.props);t.forEach((a,l)=>a.set(rn(o,l,t.length,.62)))}}}function zh({workstation:i,stage:e,onChange:t=()=>{},isAvailable:n=()=>!0}){let r=i.target,s=r.bezel,o=new mt,a=new Vt({color:16760938,side:Dt,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),l=new dt(new bi(s.w,s.h,s.d,2,.02),a);l.position.set(r.x,s.cy,s.z),l.visible=!1,r.group.add(l);let c=new C(0,1,0),u=new Vt({color:16773590,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),d=new dt(new Mr(.006,.006,1,6).translate(0,.5,0),u);d.visible=!1,d.frustumCulled=!1;let p=new Vt({color:16777215,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),h=new dt(new yi(.02,12,12),p);h.visible=!1,o.add(d,h);let g=document.createElement("button");g.className="lab-tag",g.type="button",g.disabled=!0,g.tabIndex=-1,g.setAttribute("aria-label","Select monitor"),g.setAttribute("aria-pressed","false"),g.innerHTML='<span class="lab-tag__box"><i class="lab-tag__dot"></i><span class="lab-tag__name">Monitor</span><span class="lab-tag__state">Selected</span></span>',e.parentElement.appendChild(g);let x=g.firstElementChild,m=x.querySelector(".lab-tag__state"),f=!1,y=x.offsetWidth||190,S=()=>{if(f)return;let Q=x.offsetWidth||190;Q!==y&&(y=Q,t())},_=typeof ResizeObserver<"u"?new ResizeObserver(S):null;_?.observe(x),_||window.addEventListener("resize",S,{passive:!0}),document.fonts?.ready.then(S),document.fonts?.addEventListener("loadingdone",S);let R=new C,T=new C,A=new C,I=new C,w=new C,M=new C,P=-1,z=!1,F=NaN,V=NaN,W=-1,k=-1,te=-1,G=!1,se=0,ue=-1,pe=null,Pe=null,Ge=!1,X=null,ie=!1,ve=0,le=null,be=null,Se=e.closest?.(".story")||e.parentElement,Ie=new Mo,Ze=new ae,He=()=>!f&&be&&n()&&V>=Qe.hover[0],qe=()=>{se++,t()},U=()=>{He()&&(Pe=!Ge,pe=!0,qe())};function bt(Q){if(!He())return!1;let ne=e.getBoundingClientRect();return!ne.width||!ne.height||(Ze.set((Q.clientX-ne.left)/ne.width*2-1,-(Q.clientY-ne.top)/ne.height*2+1),Math.abs(Ze.x)>1||Math.abs(Ze.y)>1)?!1:(Ie.setFromCamera(Ze,be),Ie.intersectObject(r.group,!0).some(Te=>Te.object.visible&&Te.object!==l))}function Fe(Q){X&&Math.hypot(Q.clientX-X.x,Q.clientY-X.y)>8&&(X=null),!(Q.pointerType==="touch"||!He())&&(le={clientX:Q.clientX,clientY:Q.clientY},!ve&&(ve=requestAnimationFrame(()=>{if(ve=0,!le||!He())return;let ne=bt(le);ne!==pe&&(pe=ne,qe())})))}function me(){le=null,pe!==null&&(pe=null,qe())}function xe(Q){ie=!1;let ne=g.contains(Q.target);Q.isPrimary===!1||Q.pointerType!=="touch"&&Q.button!==0||!He()||!ne&&!bt(Q)||(X={id:Q.pointerId,x:Q.clientX,y:Q.clientY,at:performance.now(),progress:V,label:ne})}function $e(Q){let ne=X;if(X=null,!(!ne||Q.pointerId!==ne.id||V!==ne.progress||performance.now()-ne.at>500||Math.hypot(Q.clientX-ne.x,Q.clientY-ne.y)>8||!(ne.label?g.contains(Q.target):bt(Q)))){if(ne.label){ie=!0;return}U()}}let we=()=>{X=null,ie=!1},E=Q=>{Q.detail>0&&"PointerEvent"in window&&!ie||(ie=!1,U())},v=Q=>ne=>{g.contains(ne.target)||Q(ne)},O=v(Fe),J=v(xe),j=v($e),$=v(we);g.addEventListener("click",E),"PointerEvent"in window&&(Se.addEventListener("pointermove",O,{passive:!0}),Se.addEventListener("pointerleave",me,{passive:!0}),Se.addEventListener("pointerdown",J,{passive:!0}),Se.addEventListener("pointerup",j,{passive:!0}),Se.addEventListener("pointercancel",$,{passive:!0}),g.addEventListener("pointermove",Fe,{passive:!0}),g.addEventListener("pointerdown",xe,{passive:!0}),g.addEventListener("pointerup",$e,{passive:!0}),g.addEventListener("pointercancel",we,{passive:!0}));function ye(Q,ne,Te,re=!1){be=ne;let oe=n();if(!re&&Q!==V&&(V=Q,X=null,ie=!1,(pe!==null||Pe!==null)&&(pe=Pe=null,se++)),Q===F&&Te.w===W&&Te.h===k&&y===te&&oe===G&&se===ue)return!1;F=Q,W=Te.w,k=Te.h,te=y,G=oe,ue=se;let Re=Q>=Qe.hover[0],Me=Re&&Pe!==null?Number(Pe):It(ke(Q,...Qe.select)),fe=Math.max(Me,Re&&pe!==null?Number(pe):It(ke(Q,...Qe.hover)));Ge=Me>=.5;let We=.005+.009*Me;l.visible=fe>.001,l.scale.set(1+2*We/s.w,1+2*We/s.h,1+5*Me),a.opacity=.5*fe+.4*Me,r.group.position.y=.045*Me,r.unityMat.color.setScalar(1+.16*Me),ne.matrixWorld.extractBasis(I,w,M),R.copy(ne.position).addScaledVector(I,.8).addScaledVector(w,-.55).addScaledVector(M,-.7),A.copy(r.center).setY(r.center.y+r.group.position.y),T.subVectors(A,R);let Oe=T.length();T.divideScalar(Oe);let et=Ar(fe);d.visible=fe>.001,d.position.copy(R),d.quaternion.setFromUnitVectors(c,T),d.scale.set(1,Oe*et,1),u.opacity=.34*fe*(1-.6*Me),h.visible=et>.98,h.position.copy(A),p.opacity=.9*fe,h.scale.setScalar(1-.35*Me);let L=Re&&Pe!==null?1:Me;g.style.opacity=String(L);let he=oe&&Re&&L>.001;if(g.disabled=!he,g.tabIndex=he?0:-1,g.classList.toggle("is-interactive",he),g.setAttribute("aria-pressed",String(Ge)),g.setAttribute("aria-label",Ge?"Deselect monitor":"Select monitor"),m.textContent=Ge?"Selected":"Select",L>.001){z||S(),A.set(r.x+s.w/2,s.cy+s.h/2+r.group.position.y,s.z).project(ne);let K=(A.x*.5+.5)*Te.w,Z=Math.max(96,(-A.y*.5+.5)*Te.h),ee=Te.w-K-30-y-12;g.classList.toggle("is-left",ee<0&&K>Te.w/2),g.style.transform=`translate(${(K+(Te.x||0)).toFixed(1)}px, ${(Z+(Te.y||0)).toFixed(1)}px)`}z=L>.001;let q=Math.round(Me*100)/100;return q!==P&&(P=q,e.style.setProperty("--lab-focus",String(q))),!0}return{group:o,update:ye,stats:()=>({manualHover:pe,manualSelect:Pe}),dispose(){f=!0,_?.disconnect(),window.removeEventListener("resize",S),document.fonts?.removeEventListener("loadingdone",S),cancelAnimationFrame(ve),Se.removeEventListener("pointermove",O),Se.removeEventListener("pointerleave",me),Se.removeEventListener("pointerdown",J),Se.removeEventListener("pointerup",j),Se.removeEventListener("pointercancel",$),g.removeEventListener("pointermove",Fe),g.removeEventListener("pointerdown",xe),g.removeEventListener("pointerup",$e),g.removeEventListener("pointercancel",we),g.removeEventListener("click",E),g.remove(),e.style.removeProperty("--lab-focus")}}}function Hh({quality:i}){let e=new mt,t=kh([[0,"rgba(232,181,102,0.55)"],[.45,"rgba(201,113,63,0.18)"],[1,"rgba(201,113,63,0)"]]),n=new Vt({map:t,transparent:!0,opacity:0,blending:Ui,depthWrite:!1,toneMapped:!1}),r=new dt(new Gt(30,30).rotateX(-Math.PI/2),n);r.position.y=-.72,r.renderOrder=-2,e.add(r);let s=i.low?110:240,o=new Float32Array(s*3),a=new Float32Array(s),l=new Float32Array(s),c=new Float32Array(s*3);for(let h=0;h<s;h++)o[h*3]=(Gn(h*3.1)-.5)*20,o[h*3+1]=-.5,o[h*3+2]=(Gn(h*5.7)-.5)*20,a[h]=Gn(h*7.3),l[h]=.012+Gn(h*11.9)*.02;let u=new At;u.setAttribute("position",new ft(c,3));let d=new rs({size:.09,map:kh([[0,"rgba(255,240,215,1)"],[1,"rgba(255,240,215,0)"]]),color:yn.champagne,transparent:!0,opacity:0,blending:Ui,depthWrite:!1,toneMapped:!1,sizeAttenuation:!0}),p=new ri(u,d);return p.frustumCulled=!1,e.add(p),{group:e,update(h,g){let x=It(ke(h,...Qe.slab));n.opacity=x*.12,d.opacity=x*.28;for(let m=0;m<s;m++){let f=(g*l[m]+a[m])%1;c[m*3]=o[m*3]+Math.sin(g*.15+a[m]*6.28)*.5,c[m*3+1]=o[m*3+1]+f*9,c[m*3+2]=o[m*3+2]+Math.cos(g*.12+a[m]*6.28)*.5}u.attributes.position.needsUpdate=!0}}}function kh(i){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);i.forEach(([s,o])=>n.addColorStop(s,o)),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new yr(e);return r.colorSpace=Tt,r}function Ax(){let i=matchMedia("(pointer: coarse)").matches,e=Math.min(screen.width,screen.height)<700,t=i||e;return{low:t,maxDpr:t?1.5:2,shadowSize:t?1024:2048,bloom:!t}}async function Vh({canvas:i,stage:e,state:t,pause:n=null}){performance.mark("hiwi:start");let r=Ax(),s=document.documentElement.classList.contains("has-story"),o=!1,a=!0,l=0,c=new _i({canvas:i,antialias:!r.bloom,powerPreference:"high-performance",alpha:!1,stencil:!1,preserveDrawingBuffer:!s});c.outputColorSpace=Tt,c.toneMapping=hs,c.toneMappingExposure=1,c.shadowMap.enabled=!0,c.shadowMap.type=Xl,c.shadowMap.autoUpdate=!1,c.shadowMap.needsUpdate=!0,c.setClearColor(yn.bg,1);let u=new Pn;u.background=new Ce(yn.bg),u.matrixWorldAutoUpdate=!1;let d=window.SceneIdle,p=de=>new Promise(Ae=>setTimeout(Ae,de));n||(n=(de=200,Ae=900)=>d?d.quiet(de,Ae):p(de)),await n();let h=ah(lh(c));await n();let g=hh(),{camera:x}=g,m=ch(u,r),f=m.group.children.find(de=>de.castShadow&&de.shadow),y=new Float64Array(48).fill(NaN),S=f?[f.matrixWorld.elements,f.target.matrixWorld.elements,f.shadow.camera.projectionMatrix.elements]:[],_=gh(),R=Ih({materials:h}),T=Dh({materials:h});await n();let A=Uh({materials:h}),I=Nh({materials:h}),w=Fh({materials:h});await n();let M=Oh({materials:h}),P=Bh({materials:h}),z=Hh({quality:r});await n();let F=()=>{},V=zh({workstation:M,stage:e,onChange:()=>F(),isAvailable:()=>!o&&a&&!document.hidden&&(!s||Oe())});[_,z,R,T,A,I,w,M,P,V].forEach(de=>u.add(de.group)),m.setPractical(A.lampPositions[0],M.lampPosition);let k=[...A.bulbs,M.bulb],te=r.bloom?mh(c,u,x):null,G=!!te,se=Math.min(window.devicePixelRatio||1,r.maxDpr),ue={w:0,h:0,x:0,y:0},pe=0;function Pe(){if(o)return;let de=Math.max(1,e.clientWidth),Ae=Math.max(1,e.clientHeight),Ke=c.getPixelRatio()!==se;if(!(de===ue.w&&Ae===ue.h&&!Ke))return ue.w=de,ue.h=Ae,ue.x=e.offsetLeft,ue.y=e.offsetTop,Ke?c.setDrawingBufferSize(de,Ae,se):c.setSize(de,Ae,!1),te?.setSize(de,Ae,se),g.resize(de,Ae),pe++,c.shadowMap.needsUpdate=!0,!me&&(!s||O>0)&&Fe(),!0}let Ge=typeof ResizeObserver<"u"?new ResizeObserver(Pe):null;Ge?.observe(e),Ge||window.addEventListener("resize",Pe,{passive:!0});let X=0,ie=0,ve=NaN,le=-1,be=NaN,Se=NaN,Ie=0,Ze=0;function He(de,Ae,Ke=!1){let st=de!==ve||le!==pe,b=It(ke(de,...Qe.unity));st&&_.update(de),z.update(de,Ae),st&&(R.update(de),T.update(de,Ae),A.update(de),I.update(de),w.update(de),M.update(de),P.update(de),k.forEach(B=>B.mat.emissiveIntensity=.2+2.4*b),g.update(de));let D=V.update(de,x,ue,Ke);if(st&&(m.update({unity:b}),te?.setGrade(b),ve=de,le=pe),st||D){u.updateMatrixWorld(),Ze++;let B=Math.min(de,Qe.props[1]),H=M.target.group.position.y;(B!==be||H!==Se)&&(c.shadowMap.needsUpdate=!0,be=B,Se=H)}}let qe=!1;function U(){if(!f)return;f.updateWorldMatrix(!0,!1),f.target.updateWorldMatrix(!0,!1);let de=0;for(let Ae of S)for(let Ke of Ae)Ke!==y[de]&&(y[de]=Ke,c.shadowMap.needsUpdate=!0),de++;f.shadow.needsUpdate&&(c.shadowMap.needsUpdate=!0)}function bt(de=!0){if(o||!a)return;U();let Ae=c.shadowMap.enabled&&c.shadowMap.needsUpdate;te?te.render():c.render(u,x),Ae&&Ie++,de&&!qe&&(performance.mark("hiwi:live"),qe=!0,e.classList.add("is-live"))}function Fe(){o||(He(X,ie),bt())}let me=!1,xe=0,$e=0,we=0,E=0,v=!1,O=0,J=c.extensions.has("KHR_parallel_shader_compile"),j=!s,$=!1,ye=()=>{},Q=null,ne=0,Te=()=>{},re=0,oe=0,Re=e.parentElement,Me=e.closest(".story"),fe=()=>getComputedStyle(i).visibility!=="hidden"&&parseFloat(getComputedStyle(Re).opacity)>.01,We=()=>typeof t.visible=="boolean"?t.visible:fe(),Oe=()=>!o&&a&&v&&!document.hidden&&We();function et(){return typeof t.override=="number"?t.override:t.progress}F=()=>{o||!a||!me&&(!s||Oe())&&(X=et(),Fe())};function L(de){if(o||!me)return;xe=requestAnimationFrame(L);let Ae=Math.min(.05,(de-$e)/1e3||.016);if($e=de,ie+=Ae,!a||!v||document.hidden||(typeof t.visible=="boolean"?!t.visible:we++%10===0&&!fe())){K();return}X=et(),Fe(),O++,he(Ae)}function he(de){t.noAdapt||(E=de>.028?E+1:Math.max(0,E-2),!(E<60)&&(E=0,se>1?(se=Math.max(1,se-.25),Pe()):te&&G&&(G=!1,te.setBloom(!1))))}function q(){if(!(o||!a||me)){if(!j){if($)return;$=!0,Y=!0,Be();let de=l;He(et(),ie),pn().then(()=>{o||!a||de!==l||(performance.mark("hiwi:primed"),j=!0,$=!1,ye())});return}me=!0,$e=performance.now(),X=et(),xe=requestAnimationFrame(L)}}function K(){me=!1,cancelAnimationFrame(xe),xe=0}if(s){let de=K;Te=()=>{if(clearTimeout(ne),ne=0,o||!a||!v||document.hidden){de();return}Oe()?q():(de(),typeof t.visible!="boolean"&&(ne=setTimeout(Te,200)))},document.addEventListener("visibilitychange",Te),ye=Te,K=()=>{de(),o||Te()},typeof IntersectionObserver<"u"?(Q=new IntersectionObserver(([Ae])=>{o||(v=Ae.isIntersecting,v?Te():K())}),Q.observe(e)):(v=!0,Te()),Me?.addEventListener("sceneprogress",Te)}else X=1,t.progress=1,re=requestAnimationFrame(()=>{re=0,Pe()}),document.fonts?.ready.then(()=>{o||(oe=requestAnimationFrame(()=>{oe=0,Fe()}))});function Z(de){o||(de.preventDefault(),a=!1,l++,j=!1,$=!1,sn=null,Je.length=0,K())}function ee(){o||(a=!0,pe++,be=Se=NaN,c.shadowMap.needsUpdate=!0,s?ye():Fe())}i.addEventListener("webglcontextlost",Z),i.addEventListener("webglcontextrestored",ee),Pe();let Ee=new Yt(1,1),Je=[],St=t.prepareLog=[],Y=!1,Be=()=>{},rt=new Promise(de=>{Be=de}),at=(de,Ae=4e3)=>Y?Promise.resolve():Promise.race([rt,n(de,Ae)]);function wt(de,Ae,Ke=null){let st=c.getRenderTarget();c.setRenderTarget(Ae?null:Ee);try{return J?c.compileAsync(de,x,Ke):(c.compile(de,x,Ke),Promise.resolve())}finally{c.setRenderTarget(st)}}function ut(){let de={[An]:Dt,[Dt]:An,[tn]:tn},Ae=new mt,Ke=new Set;return u.traverse(st=>{if(!st.isMesh||!(st.castShadow||st.userData.shadowCaster)||!st.material||Array.isArray(st.material))return;let b=st.material,D=b.shadowSide??de[b.side],B=[D,!!b.map,!!st.isInstancedMesh,!!st.instanceColor].join();if(Ke.has(B))return;Ke.add(B);let H=new es({depthPacking:oc,side:D,map:b.map||null}),N=st.isInstancedMesh?new _r(st.geometry,H,1):new dt(st.geometry,H);st.instanceColor&&(N.instanceColor=st.instanceColor),Ae.add(N)}),Je.push(Ae),Ae}let xt=null;function ct(de){let Ae=new mt;xt||(xt=new Gt(2,2));for(let[Ke,st]of te.programs())st===de&&Ae.add(new dt(xt,Ke));return Je.push(Ae),Ae}function fn(de){de.traverse(Ae=>{let Ke=Ae.material?Array.isArray(Ae.material)?Ae.material:[Ae.material]:[];for(let st of Ke)c.properties.get(st).currentProgram?.getUniforms()})}function jt(){let de=new Set;return u.traverse(Ae=>{let Ke=Ae.material?Array.isArray(Ae.material)?Ae.material:[Ae.material]:[];for(let st of Ke)for(let b of Object.values(st))b?.isTexture&&!b.isRenderTargetTexture&&de.add(b)}),[...de]}let sn=null;function pn(){if(sn)return sn;let de=l;return sn=(async()=>{let Ae=[["room",()=>wt(u,!te)],["shadows",()=>wt(ut(),!1,u)],te&&["post",()=>wt(ct(!1),!1).then(()=>wt(ct(!0),!0))]].filter(Boolean);for(let[Ke,st]of Ae){if(await at(300),o||de!==l)return!1;let b=performance.now();await st(),St.push({step:Ke,ms:Math.round(performance.now()-b),programs:c.info.programs?.length})}J||await at(400,1500);for(let Ke of[u,...Je]){if(await at(150,1500),o||de!==l)return!1;fn(Ke)}for(let Ke of jt()){if(await at(150,1500),o||de!==l)return!1;c.initTexture(Ke)}return St.push({step:"textures",programs:c.info.programs?.length}),!0})().catch(Ae=>(o||console.warn("HiWi lab: shader preparation skipped \u2014",Ae),!1)),sn}return{warm:s?pn():Promise.resolve(!1),renderer:c,scene:u,camera:x,quality:r,workstation:M,screenRect(){let de=M.target,Ae=de.bezel,Ke=e.getBoundingClientRect(),st=[-1,1].flatMap(B=>[-1,1].map(H=>new C(de.x+B*Ae.w/2,Ae.cy+H*Ae.h/2+de.group.position.y,Ae.z+Ae.d/2).project(x))),b=st.map(B=>Ke.left+(B.x*.5+.5)*Ke.width),D=st.map(B=>Ke.top+(-B.y*.5+.5)*Ke.height);return{x:Math.min(...b),y:Math.min(...D),width:Math.max(...b)-Math.min(...b),height:Math.max(...D)-Math.min(...D)}},stats:()=>({running:me,inView:v,drawn:O,dpr:se,bloom:G,L:X,shadowUpdates:Ie,matrixUpdates:Ze,contextAvailable:a,manualInput:V.stats()}),tune:({dpr:de,bloom:Ae,shadows:Ke}={})=>{o||(typeof de=="number"&&(se=de),typeof Ae=="boolean"&&te&&(G=Ae,te.setBloom(Ae)),typeof Ke=="boolean"&&(c.shadowMap.enabled=Ke,c.shadowMap.needsUpdate=!0,u.traverse(st=>st.material&&(st.material.needsUpdate=!0))),!Pe()&&!me&&(!s||O>0)&&Fe())},dispose(){o||(o=!0,K(),clearTimeout(ne),Be(),Ee.dispose(),cancelAnimationFrame(re),cancelAnimationFrame(oe),Ge?.disconnect(),window.removeEventListener("resize",Pe),Q?.disconnect(),Me?.removeEventListener("sceneprogress",Te),document.removeEventListener("visibilitychange",Te),i.removeEventListener("webglcontextlost",Z),i.removeEventListener("webglcontextrestored",ee),V.dispose(),te?.dispose(),c.dispose())}}}var dn=Er.clamp,bc=(i,e,t)=>{let n=dn((t-i)/(e-i),0,1);return n*n*(3-2*n)};function Rx(){let i=matchMedia("(pointer: coarse)").matches,e=Math.min(window.innerWidth,window.innerHeight)<721,t=navigator.deviceMemory||8,n=navigator.hardwareConcurrency||8,r=i||e||t<=4||n<=4;return{low:r,count:t<=2?3500:r?5500:12e3,maxDpr:t<=2?1:r?1.25:1.5,pointSize:r?1.8:1.7}}function Wh(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Cx(i){let e=i.bounds,n=e?.min?.length===3&&e?.max?.length===3&&e.min.every((o,a)=>Number.isFinite(o)&&Number.isFinite(e.max[a])&&(a===2?e.max[a]>=o:e.max[a]>o))?new vn(new C().fromArray(e.min),new C().fromArray(e.max)):new vn().setFromBufferAttribute(new ft(i.positions,3)),r=n.getCenter(new C),s=n.getSize(new C);if(n.isEmpty()||!Number.isFinite(s.x+s.y)||s.x<=0||s.y<=0)throw new Error("Portrait geometry has no visible surface");return{center:r,size:s}}function Px(i,e,t){let n=Wh(6270189),r=i.positions,s=i.indices,o=Math.floor(s.length/3),a=new Float64Array(o),l=0;for(let x=0;x<o;x++){let m=s[x*3]*3,f=s[x*3+1]*3,y=s[x*3+2]*3,S=((r[m+1]+r[f+1]+r[y+1])/3-e.center.y)/e.size.y+.5,_=1+2.5*bc(.45,.82,S),R=Math.abs((r[f]-r[m])*(r[y+1]-r[m+1])-(r[f+1]-r[m+1])*(r[y]-r[m]));l+=R*_,a[x]=l}if(!Number.isFinite(l)||l<=0)throw new Error("Portrait geometry has no triangles");let c=new Float32Array(t*3),u=new Float32Array(t*3),d=new Float32Array(t*3),p=new Float32Array(t*4),h=new Ce;for(let x=0;x<t;x++){let m=n()*l,f=0,y=o-1;for(;f<y;){let F=f+y>>>1;a[F]<m?f=F+1:y=F}let S=[s[f*3],s[f*3+1],s[f*3+2]],_=Math.sqrt(n()),R=n(),T=[1-_,_*(1-R),_*R],A=0,I=0,w=0,M=0,P=0;for(let F=0;F<3;F++){let V=S[F]*3,W=T[F];A+=r[V]*W,I+=r[V+1]*W,w+=i.colors[V]*W,M+=i.colors[V+1]*W,P+=i.colors[V+2]*W}c.set([A-e.center.x,I-e.center.y,0],x*3),h.setRGB(w,M,P,Tt),u.set([h.r,h.g,h.b],x*3),d.set([(n()-.5)*1.7,n(),n()-.5],x*3);let z=1-dn((I-e.center.y)/e.size.y+.5,0,1);p.set([n(),.55+Math.pow(n(),5)*1.4,n()<.045?1:0,z],x*4)}let g=new At;return g.setAttribute("position",new ft(c,3)),g.setAttribute("color",new ft(u,3)),g.setAttribute("aCloud",new ft(d,3)),g.setAttribute("aSeed",new ft(p,4)),g.setDrawRange(0,t),g}var Ix=`
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
`,Gh=`
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
`;function Lx(i){let e=i.groupIds.length,t=new Float32Array(i.colors.length),n=new Float32Array(e*4),r=new Ce,s=Wh(2119680269);for(let a=0;a<e;a++)r.setRGB(i.colors[a*3],i.colors[a*3+1],i.colors[a*3+2],Tt),t.set([r.r,r.g,r.b],a*3),n.set([s(),s(),s(),s()],a*4);let o=new At;return o.setAttribute("position",new ft(i.positions,3)),o.setAttribute("color",new ft(t,3)),o.setAttribute("aGroup",new ft(i.groupIds,1)),o.setAttribute("aSeed",new ft(n,4)),o}var Dx=`
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
`;function Xh({canvas:i,container:e=i?.parentElement,state:t,portraitData:n,assetUrl:r,loadPortraitData:s,onError:o,settle:a}){if(!i||!e||!t)throw new Error("Portrait requires canvas, container, and state");let l=Rx(),c=new _i({canvas:i,alpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"});c.outputColorSpace=Tt,c.toneMapping=xn,c.setClearColor(0,0),c.autoClear=!1,c.debug.onShaderError=(Y,Be,rt,at)=>{let wt=Y.getProgramInfoLog(Be)||Y.getShaderInfoLog(rt)||Y.getShaderInfoLog(at);throw new Error(`Portrait shader compilation failed: ${wt||"unknown driver error"}`)};let u=new Pn,d=new kn(-1,1,1,-1,.1,2e3);d.position.z=1e3;let p=Y=>c.extensions.has("KHR_parallel_shader_compile")?c.compileAsync(Y,d):Promise.resolve(c.compile(Y,d)),h=Math.min(window.devicePixelRatio||1,l.maxDpr),g=l.count,x,m,f,y,S=64,_=0,R=0,T=0,A=!1,I=!1,w=!1,M=!0,P=0,z=!0,F=!1,V=!1,W=0,k=0,te=0,G=0,se=0,ue=0,pe=0,Pe=0,Ge=[],X=matchMedia("(prefers-reduced-motion: reduce)"),ie=!X.matches,ve=1e3/(l.low?30:45),le=0,be=0,Se=0,Ie=new ae,Ze=new ae,He=!1,qe=0,U=!1,bt=0;function Fe(){return!I&&!w&&A&&M&&!document.hidden}function me(){return dn(Number(t.exitProgress)||0,0,1)}function xe(){return dn(Number(t.workProgress)||0,0,1)}function $e(Y){return t.textEnabled!==!1&&y&&(Number(t.textProgress?.[Y])||0)>0&&(Number(t.textOpacity?.[Y])||0)<1}function we(){if(t.workActive)return xe()>0&&xe()<.85;let Y=me();return Y>0?Y<1:(Number(t.progress)||0)>0&&(Number(t.photoOpacity)||0)<1}function E(){if(!f||t.textEnabled===!1)return!1;if(t.workActive)return xe()>0&&(Number(t.workOpacity)||0)<1;let Y=me();return Y>0?Y<1:[0,1,2].some($e)}function v(){return Fe()&&t.visible&&(we()||E())}function O(){if(!v()||!ie)return!1;let Y=Number(t.progress)||0;return t.workActive?xe()>0&&xe()<.98:me()>0?me()<.99:Y>.035&&Y<.9||[0,1,2].some(Be=>$e(Be)&&(Number(t.textProgress[Be])||0)<.98)}function J(){!P&&Fe()&&(z&&v()||F||O())&&(P=requestAnimationFrame(Te))}function j(Y=!1){if(I)return;let Be=t.frame,rt=t.viewport,at=t.portal,wt=[t.progress,t.visible,t.photoOpacity,t.interactive,Be?.x,Be?.y,Be?.width,Be?.height,rt?.width,rt?.height,at?.x,at?.y,at?.width,at?.height,at?.mix,t.exitProgress,t.exitTarget?.x,t.exitTarget?.y,t.workActive,t.textEnabled,t.workProgress,t.workOpacity,t.workOrigin?.x,t.workOrigin?.y,t.workOrigin?.width,t.workOrigin?.height,t.workOffset?.x,t.workOffset?.y,...[0,1,2].flatMap(ut=>[t.textProgress?.[ut],t.textOpacity?.[ut],t.textOffsets?.[ut]?.x,t.textOffsets?.[ut]?.y])];(Y||wt.some((ut,xt)=>ut!==Ge[xt]))&&(z=!0),Ge=wt,v()||(P&&cancelAnimationFrame(P),P=0,te=0,be=0,le=0,F=V,qe=0,oe()),t.interactive===!1&&oe(),rt&&(rt.width!==W||rt.height!==k)&&$(),J()}function $(){if(I)return;let Y=e.getBoundingClientRect(),Be=t.viewport,rt=Math.max(1,Math.round(Be?.width||Y.width||window.innerWidth)),at=Math.max(1,Math.round(Be?.height||Y.height||window.innerHeight));(rt!==W||at!==k||c.getPixelRatio()!==h)&&(W=rt,k=at,c.setPixelRatio(h),c.setSize(W,k,!1),d.left=-W/2,d.right=W/2,d.top=k/2,d.bottom=-k/2,d.updateProjectionMatrix(),z=!0),J()}function ye(){let Y=t.frame||{x:0,y:0,width:W,height:k},Be=Number.isFinite(Y.x)?Y.x:0,rt=Number.isFinite(Y.y)?Y.y:0,at=Math.max(1,Number.isFinite(Y.width)?Y.width:W),wt=Math.max(1,Number.isFinite(Y.height)?Y.height:k),ut=Math.max(x.size.y,x.size.x/(at/wt))*.55,xt=m.material.uniforms;xt.uTargetScale.value=wt/(2*ut),xt.uTargetCenter.value.set(Be+at/2-W/2,k/2-rt-wt/2);let ct=t.portal,fn=ct&&[ct.x,ct.y,ct.width,ct.height].every(Number.isFinite)&&ct.width>0&&ct.height>0,jt=fn?dn(Number(ct.mix)||0,0,1):1,sn=fn?Er.lerp(ct.width,W,jt):W,pn=fn?Er.lerp(ct.height,k,jt):k,Jt=fn?ct.x*(1-jt):0,de=fn?ct.y*(1-jt):0;xt.uViewport.value.set(sn,pn),xt.uFieldCenter.value.set(Jt+sn/2-W/2,k/2-de-pn/2);let Ae=t.exitTarget||{x:W/2,y:k/2};xt.uExitTarget.value.set(Ae.x-W/2,k/2-Ae.y);let Ke=t.workOrigin||{x:W/2,y:k/2,width:W*.4,height:k*.3};xt.uWorkOrigin.value.set(Ke.x+Ke.width/2-W/2,k/2-Ke.y-Ke.height/2,Ke.width,Ke.height);let st=t.workOffset||{x:W/2,y:k/2},b=y?.groupBounds?.[3]||{width:1,height:1};if(xt.uWorkTarget.value.set(st.x+b.width/2-W/2,k/2-st.y-b.height/2),f){let D=f.material.uniforms;D.uCanvas.value.set(W,k),D.uFieldCenter.value.copy(xt.uFieldCenter.value),D.uFieldSize.value.copy(xt.uViewport.value),D.uExitTarget.value.copy(xt.uExitTarget.value),D.uWorkOrigin.value.copy(xt.uWorkOrigin.value),D.uTextProgress.value.set(...[0,1,2].map(B=>dn(Number(t.textProgress?.[B])||0,0,1)),xe()),D.uTextOpacity.value.set(...[0,1,2].map(B=>dn(Number(t.textOpacity?.[B])||0,0,1)),dn(Number(t.workOpacity)||0,0,1)),D.uTextOffsets.value.forEach((B,H)=>{let N=H===3?st:t.textOffsets?.[H];B.set(Number(N?.x)||0,Number(N?.y)||0)})}}function Q(){c.setViewport(0,0,W,k),c.clear(!0,!1,!1),V=!1,F=!1,pe=0}function ne(){t.noAdapt||ue>=2||(g=Math.max(2400,Math.floor(g*.72)),m.geometry.setDrawRange(0,g),h=Math.max(.8,h-.2),ue++,$(),G=0)}function Te(Y){if(P=0,!Fe()){te=0,be=0,le=0;return}if(!v()){F&&Q(),z=!1,te=0,be=0,le=0;return}let Be=O(),rt=z;if(!rt&&(!Be||Y<le-.5)){Be&&J();return}let at=be?Math.min(.06,Math.max(0,(Y-be)/1e3)):0;be=Y,Be&&(Se+=at),U&&Y>=bt&&(U=!1),Ie.lerp(Ze,1-Math.exp(-at*14));let wt=U&&Be&&t.interactive!==!1?1:0;qe+=(wt-qe)*(1-Math.exp(-at*(wt?14:4.3))),qe<.001&&!wt&&(qe=0);let ut=dn(Number(t.progress)||0,0,1),xt=t.workActive||me()>0?1:1-dn(Number(t.photoOpacity)||0,0,1),ct=m.material.uniforms;if(ct.uProgress.value=ut,ct.uPixelRatio.value=h,ct.uOpacity.value=xt,ct.uTime.value=Se,ct.uMotionStrength.value=ie?t.workActive||me()>0?1:bc(.035,.12,ut)*(1-bc(.74,.9,ut)):0,ct.uPointer.value.copy(Ie),ct.uPointerStrength.value=qe,ct.uExitProgress.value=me(),ct.uWorkProgress.value=xe(),ct.uWorkMode.value=t.workActive?1:0,m.visible=we(),m.geometry.setDrawRange(0,t.workActive?Math.min(g,l.low?280:480):g),f){let Jt=f.material.uniforms;Jt.uTime.value=Se,Jt.uPixelRatio.value=h,Jt.uMotionStrength.value=ie?1:0,Jt.uPointerStrength.value=qe,Jt.uPointer.value.copy(Ie),Jt.uExitProgress.value=me(),Jt.uWorkMode.value=t.workActive?1:0,f.visible=E()}ye();let fn=performance.now();Q();try{c.render(u,d)}catch(Jt){Je(),o?.(Jt);return}pe=c.info.render.calls,V=m.visible||!!f?.visible,se++,z=!1;let jt=Y-te,sn=performance.now()-fn,pn=rt?1e3/60:ve;te&&jt<150&&(Be||Math.abs(ut-Pe)>5e-4)&&(G=jt>pn*1.8||sn>20?G+1:Math.max(0,G-2),G>=18&&ne()),te=Y,Pe=ut,le=rt||!le?Y+ve:Math.max(le+ve,Y+1),(z||Be)&&J()}function re(Y){return!!Y?.closest?.('nav, .nav-wrap, a, button, input, select, textarea, summary, [role="button"], [role="link"], [contenteditable], [data-no-particles]')}function oe(){U=!1,bt=0}function Re(Y,Be,rt,at=!1){if(!O()||t.interactive===!1||re(Y.target)){oe();return}Ze.set(Be-W/2,k/2-rt),(!He||qe<.001)&&Ie.copy(Ze),He=!0,U=!0,bt=at?1/0:performance.now()+700,z=!0,J()}function Me(Y){if(Y.isPrimary===!1||Y.pointerType==="mouse"&&Y.buttons>1){oe();return}Re(Y,Y.clientX,Y.clientY,Y.pointerType==="touch")}function fe(Y){!Y.relatedTarget&&Y.pointerType!=="touch"&&oe()}function We(Y){if(Y.touches.length!==1){oe();return}let Be=Y.touches[0];Re(Y,Be.clientX,Be.clientY,!0)}function Oe(){ie=!X.matches,oe(),qe=0,be=0,le=0,j(!0)}function et(){te=0,j(!0)}function L(Y){Y.preventDefault(),w=!0,j(),o?.(new Error("Portrait WebGL context was lost"))}function he(){w=!1,j(!0)}window.addEventListener("pointermove",Me,{passive:!0}),window.addEventListener("pointerdown",Me,{passive:!0}),window.addEventListener("pointerup",oe,{passive:!0}),window.addEventListener("pointercancel",oe,{passive:!0}),window.addEventListener("pointerout",fe,{passive:!0}),window.addEventListener("touchstart",We,{passive:!0}),window.addEventListener("touchmove",We,{passive:!0}),window.addEventListener("touchend",oe,{passive:!0}),window.addEventListener("touchcancel",oe,{passive:!0}),window.addEventListener("blur",oe),X.addEventListener?X.addEventListener("change",Oe):X.addListener(Oe),document.addEventListener("visibilitychange",et),i.addEventListener("webglcontextlost",L),i.addEventListener("webglcontextrestored",he);let q=typeof ResizeObserver<"u"?new ResizeObserver($):null;q?.observe(e),q||window.addEventListener("resize",$);let K=typeof IntersectionObserver<"u"?new IntersectionObserver(Y=>{M=Y.some(Be=>Be.isIntersecting),j(!0)}):null;K?.observe(i),$();let Z=Promise.resolve().then(()=>n??s?.(r)).then(async Y=>{if(I)throw new Error("Portrait was disposed before loading finished");if(!Y?.positions?.length||Y.positions.length%3||!Y.indices?.length||Y.indices.length%3||Y.colors?.length!==Y.positions.length)throw new Error("Portrait asset must include matching positions/colors and triangle indices");x=Cx(Y),T=Y.indices.length/3;let Be=Px(Y,x,l.count),rt=c.getContext();if(S=rt.getParameter(rt.ALIASED_POINT_SIZE_RANGE)[1],m=new ri(Be,new Lt({uniforms:{uProgress:{value:0},uTime:{value:0},uMotionStrength:{value:0},uPointerStrength:{value:0},uOpacity:{value:0},uPointSize:{value:l.pointSize},uPixelRatio:{value:h},uPointLimit:{value:S},uTargetScale:{value:1},uBottomY:{value:-x.size.y*.5},uPortraitHeight:{value:x.size.y},uPortraitWidth:{value:x.size.x},uExitProgress:{value:0},uWorkProgress:{value:0},uWorkMode:{value:0},uExitTarget:{value:new ae},uWorkTarget:{value:new ae},uWorkOrigin:{value:new lt},uTargetCenter:{value:new ae},uViewport:{value:new ae(W,k)},uFieldCenter:{value:new ae},uPointer:{value:new ae}},vertexShader:Ix,fragmentShader:Gh,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})),m.frustumCulled=!1,u.add(m),$(),ye(),await p(u),await a?.(),I)throw new Error("Portrait was disposed before shader preparation finished");return Q(),c.render(u,d),A=!0,j(!0),St}).catch(Y=>{throw I||(Je(),o?.(Y)),Y});async function ee(Y){if(await Z,I)throw new Error("Portrait has been disposed");if(!Y?.positions?.length||Y.positions.length%3||Y.colors?.length!==Y.positions.length||Y.groupIds?.length!==Y.positions.length/3||Y.groupBounds?.length!==4)throw new Error("Text targets require matching positions/colors/groups and four group bounds");let Be=++R,rt=l.low?1800:4e3;if(Y.groupIds.length>rt)throw new Error(`Text targets exceed the ${rt}-point device budget`);let at=Lx(Y),wt=new Lt({uniforms:{uTextProgress:{value:new lt},uTextOpacity:{value:new lt(1,1,1,1)},uTextOffsets:{value:Array.from({length:4},()=>new ae)},uTextBounds:{value:Y.groupBounds.map(ct=>new ae(ct.width,ct.height))},uCanvas:{value:new ae(W,k)},uFieldCenter:{value:new ae},uFieldSize:{value:new ae(W,k)},uExitTarget:{value:new ae},uWorkOrigin:{value:new lt},uPointer:{value:new ae},uExitProgress:{value:0},uWorkMode:{value:0},uTime:{value:0},uMotionStrength:{value:0},uPointerStrength:{value:0},uPointSize:{value:l.low?1.65:1.6},uPixelRatio:{value:h},uPointLimit:{value:S},uOpacity:{value:1}},vertexShader:Dx,fragmentShader:Gh,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),ut=new ri(at,wt);ut.frustumCulled=!1,ut.visible=!1;let xt=new Pn;xt.add(ut);try{if(ut.visible=!0,await p(xt),ut.visible=!1,await a?.(),I)throw new Error("Portrait disposed while preparing text")}catch(ct){throw xt.remove(ut),at.dispose(),wt.dispose(),ct}return xt.remove(ut),Be!==R?(at.dispose(),wt.dispose(),Y.groupBounds):(u.add(ut),f&&(u.remove(f),f.geometry.dispose(),f.material.dispose()),f=ut,y=Y,_=Y.groupIds.length,ye(),j(!0),Y.groupBounds)}function Ee(){let Y=dn(Number(t.progress)||0,0,1),Be=dn(Number(t.photoOpacity)||0,0,1),rt=t.visible?t.workActive?"work-title":me()>0&&me()<1?"intro-disintegration":E()&&Be===1?"text-assembly":Be===1?"photo":Y<=.005?"waiting":Y<.58?"rising-stars":Y<.9?"face-assembly":Y<.94?"settled-dots":"photo-crossfade":"hidden";return{ready:A,visible:!!t.visible,running:!!P,particles:g,textParticles:_,textBudget:l.low?1800:4e3,textEnabled:t.textEnabled!==!1,textGroups:y?.groupBounds.map(at=>at.count)||[],textProgress:[0,1,2].map(at=>Number(t.textProgress?.[at])||0),textOpacity:[0,1,2].map(at=>Number(t.textOpacity?.[at])||0),exitProgress:me(),workActive:!!t.workActive,workProgress:xe(),workOpacity:dn(Number(t.workOpacity)||0,0,1),dpr:h,drawCalls:pe,renderedFrames:se,qualityReductions:ue,sourceTriangles:T,geometries:c.info.memory.geometries,textures:c.info.memory.textures,kind:"photographic-particles",interactive:O()&&t.interactive!==!1,motionActive:O(),motionEnabled:ie,ambientFps:l.low?30:45,motionTime:Se,pointerStrength:qe,pointerActive:U,portalFramed:!!t.portal,progress:Y,photoOpacity:Be,phase:rt}}function Je(){I||(I=!0,P&&cancelAnimationFrame(P),P=0,q?.disconnect(),K?.disconnect(),window.removeEventListener("resize",$),window.removeEventListener("pointermove",Me),window.removeEventListener("pointerdown",Me),window.removeEventListener("pointerup",oe),window.removeEventListener("pointercancel",oe),window.removeEventListener("pointerout",fe),window.removeEventListener("touchstart",We),window.removeEventListener("touchmove",We),window.removeEventListener("touchend",oe),window.removeEventListener("touchcancel",oe),window.removeEventListener("blur",oe),X.removeEventListener?X.removeEventListener("change",Oe):X.removeListener(Oe),document.removeEventListener("visibilitychange",et),i.removeEventListener("webglcontextlost",L),i.removeEventListener("webglcontextrestored",he),m?.geometry.dispose(),m?.material.dispose(),f?.geometry.dispose(),f?.material.dispose(),c.dispose(),c.forceContextLoss())}let St={ready:Z,update:j,resize:$,setTextTargets:ee,stats:Ee,dispose:Je};return St}var Bo=new Map,Ux=[[420,39],[409,41],[404,39],[399,43],[389,42],[383,48],[377,47],[369,54],[366,53],[360,62],[353,63],[349,70],[345,71],[339,79],[334,79],[330,89],[324,88],[322,98],[316,99],[315,106],[309,111],[310,116],[303,125],[303,133],[298,140],[299,148],[294,154],[296,163],[291,170],[294,179],[292,187],[298,195],[299,203],[304,208],[303,216],[308,222],[307,229],[314,237],[322,243],[324,247],[324,254],[325,261],[327,272],[329,280],[333,286],[337,296],[344,304],[343,309],[347,313],[352,314],[354,317],[355,318],[358,318.5],[360,319],[362,322],[365,326],[368,330],[371,334],[374.5,339],[378,344],[381,349],[383,354],[382.8,360],[382.7,370],[383.1,380],[383.6,387],[383.8,391],[382.8,393],[372,393.8],[364,395],[360,397.5],[358,400],[355,408],[351,416],[342,423],[330,435],[313,443],[294,449],[276,459],[255,468],[236,477],[217,487],[204,497],[191,512],[181,527],[169,547],[159,567],[153,587],[155,607],[156,625],[160,653],[162,680],[164,700],[166,760],[183,830],[201,896],[225,941],[708,941],[750,933],[799,917],[816,897],[826,850],[831,816],[829,774],[817,719],[807,672],[803,648],[797,626],[790,607],[785,588],[783,573],[778,556],[773,542],[767,528],[759,516],[750,505],[739,495],[726,487],[714,480],[700,474],[690,469],[678,466],[667,462],[654,460],[643,455],[634,451],[624,447],[614,442],[604,438],[593,433],[586,429],[578,424],[570,419],[565,412],[561,404],[552,400],[546.5,398],[543.2,394],[540.8,390],[539.4,385],[538.2,380],[537.6,375],[536.8,370],[536.3,365],[535.8,360],[535.3,355],[535.1,350],[534.8,345],[534.3,340],[533.7,335],[534.3,330],[538.2,325],[540.4,320],[542.4,315],[543.6,310],[544.8,305],[545.3,300],[546.2,295],[547,290],[547.6,285],[547.7,280],[547.4,278],[554,277],[560.7,276],[563.5,274],[565,272],[566,270],[567,265],[567,256],[566,249],[565,243],[565,235],[562,223],[563,218],[560,210],[562,200],[561,192],[558,184],[559,177],[555,168],[554,156],[550,148],[549,138],[545,126],[540,116],[540,107],[531,100],[526,89],[519,86],[515,80],[508,77],[502,69],[494,68],[488,61],[479,59],[472,54],[461,54],[455,47],[447,46],[440,42],[433,44]];function Nx(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[(n+i.length-1)%i.length],s=i[n],o=r[1]<=e,a=s[1]<=e;if(o!==a){let l=(e-r[1])/(s[1]-r[1]);t.push([r[0]+(s[0]-r[0])*l,e])}a&&t.push(s.slice())}return t}function Fx(i,e=1.25){let t=i.map((o,a)=>{let l=i[(a+i.length-1)%i.length],c=i[(a+1)%i.length],u=Math.hypot(o[0]-l[0],o[1]-l[1]),d=Math.hypot(c[0]-o[0],c[1]-o[1]),p=Math.min(e,u*.35,d*.35);return{point:o,enter:o.map((h,g)=>h+(l[g]-h)*p/u),leave:o.map((h,g)=>h+(c[g]-h)*p/d)}}),n=[],r=o=>o.map(a=>Number(a.toFixed(3))).join(","),s=[`M${r(t[0].enter)}`];for(let{point:o,enter:a,leave:l}of t){s.push(`L${r(a)}Q${r(o)} ${r(l)}`),n.push(a);for(let c of[.25,.5,.75,1])n.push(o.map((u,d)=>(1-c)**2*a[d]+2*(1-c)*c*u+c**2*l[d]))}return{samples:n,path:s.join("")+"Z"}}var Zh=Fx(Ux),$h=Nx(Zh.samples,700),Wn={left:150,top:37,width:662.9574468085107,height:663},{left:Jh,top:Kh}=Wn,qh=$h.map(([i,e])=>[(i-Jh)/Wn.width,(e-Kh)/Wn.height]),Ox=`<svg xmlns="http://www.w3.org/2000/svg" width="1672" height="941" viewBox="0 0 1672 941"><path fill="white" d="${Zh.path}"/></svg>`,Bx=`url("data:image/svg+xml,${encodeURIComponent(Ox)}")`,Sc=Object.freeze({sourceWidth:1672,sourceHeight:941,sourceRect:Wn,sourceContour:$h,normalizedContour:qh,maskImage:Bx,aspect:Wn.width/Wn.height,clipPath:`polygon(${qh.map(([i,e])=>`${(i*100).toFixed(6)}% ${(e*100).toFixed(6)}%`).join(",")})`,imageCss:{width:`${(1672/Wn.width*100).toFixed(6)}%`,height:`${(941/Wn.height*100).toFixed(6)}%`,left:`${(-Jh/Wn.width*100).toFixed(6)}%`,top:`${(-Kh/Wn.height*100).toFixed(6)}%`}});function ms(i){return i.reason||new DOMException("Portrait loading was cancelled.","AbortError")}function zx(i,e){return e?e.aborted?Promise.reject(ms(e)):new Promise((t,n)=>{let r=()=>n(ms(e));e.addEventListener("abort",r,{once:!0}),i.then(t,n).finally(()=>e.removeEventListener("abort",r))}):i}function kx(i){if(Bo.has(i.href))return Bo.get(i.href);let e=new Promise((t,n)=>{let r=document.createElement("script");r.async=!0,r.src=i.href,r.onload=()=>{r.remove();let s=globalThis.PortraitEmbeddedData;if(s?.version!==6||s.encoding!=="base64"||typeof s.data!="string"){n(new Error("Invalid embedded portrait asset."));return}try{let o=atob(s.data),a=new Uint8Array(o.length);for(let l=0;l<o.length;l++)a[l]=o.charCodeAt(l);globalThis.PortraitEmbeddedData===s&&delete globalThis.PortraitEmbeddedData,t(a.buffer)}catch(o){n(o)}},r.onerror=()=>{r.remove(),n(new Error("Embedded portrait asset unavailable."))},document.head.append(r)});return Bo.set(i.href,e),e.catch(()=>Bo.delete(i.href)),e}function Yh(i,{textureUrl:e=""}={}){let t=new DataView(i);if(i.byteLength<40||t.getUint32(0,!1)!==1380208689)throw new Error("Invalid portrait asset.");let n=t.getUint32(4,!0),r=t.getUint32(8,!0);if(t.getUint32(36,!0)!==1||!n||n>=65536||r%3||i.byteLength!==40+n*13+r*2)throw new Error("Unsupported portrait asset layout.");let o=[0,1,2].map(h=>t.getFloat32(12+h*4,!0)),a=[0,1,2].map(h=>t.getFloat32(24+h*4,!0));if(o.some((h,g)=>!Number.isFinite(h)||!Number.isFinite(a[g])||a[g]<=h))throw new Error("Invalid portrait bounds.");let l=new Float32Array(n*3),c=new Float32Array(n*3),u=new Float32Array(n*2),d=new Uint16Array(r),p=40;for(let h=0;h<l.length;h++){let g=h%3;l[h]=o[g]+t.getUint16(p,!0)/65535*(a[g]-o[g]),p+=2}for(let h=0;h<u.length;h++)u[h]=t.getUint16(p,!0)/65535,p+=2;for(let h=0;h<c.length;h++)c[h]=t.getUint8(p++)/255;for(let h=0;h<r;h++)if(d[h]=t.getUint16(p,!0),p+=2,d[h]>=n)throw new Error("Invalid portrait triangle.");return{positions:l,colors:c,uvs:u,indices:d,textureUrl:e,bounds:{min:o,max:a},presentation:Sc,kind:"photo-depth-approximation"}}async function Qh({signal:i,baseUrl:e}={}){let t=new URL(e||"assets/face/",document.baseURI),n=new URL("portrait-depth.bin.gz?v=6",t),r=new URL("portrait-depth.bin?v=6",t),s=new URL("../roshan-reveal-after.webp",t).href;if(i?.aborted)throw ms(i);if(t.protocol==="file:"){let u=new URL("portrait-data.js?v=6",t),d=await zx(kx(u),i);if(i?.aborted)throw ms(i);return Yh(d,{textureUrl:s})}let a=await fetch(typeof DecompressionStream=="function"?n:r,{signal:i,cache:"force-cache"});if(!a.ok)throw new Error(`Portrait asset unavailable (${a.status}).`);let l=await a.arrayBuffer(),c=new Uint8Array(l,0,Math.min(l.byteLength,2));if(c[0]===31&&c[1]===139&&(l=await new Response(new Blob([l]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()),i?.aborted)throw ms(i);return Yh(l,{textureUrl:s})}function Hx(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Vx(i){let e=i.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);return e?[Number(e[1])/255,Number(e[2])/255,Number(e[3])/255]:[.9,.91,.94]}function Gx(i,e){return e.textTransform==="uppercase"?i.toUpperCase():e.textTransform==="lowercase"?i.toLowerCase():i}function Wx(i,e){if(!i)return null;let t=i.getBoundingClientRect(),n=t.width,r=t.height;if(n<=0||r<=0||t.width<=0||t.height<=0)return null;let s=t.width/n,o=t.height/r,a=3,l=Math.min(1,4096/(n+a*2),4096/(r+a*2)),c=document.createElement("canvas");c.width=Math.max(1,Math.ceil((n+a*2)*l)),c.height=Math.max(1,Math.ceil((r+a*2)*l));let u=c.getContext("2d",{willReadFrequently:!0});if(!u)return null;u.scale(l,l),u.textBaseline="alphabetic";let d=document.createTreeWalker(i,NodeFilter.SHOW_TEXT),p=document.createRange(),h;for(;h=d.nextNode();){let f=h.parentElement;if(!f||f.closest('[aria-hidden="true"], [data-particle-decoration], script, style'))continue;let y=getComputedStyle(f);if(y.display==="none")continue;u.font=`${y.fontStyle} ${y.fontWeight} ${y.fontSize} ${y.fontFamily}`,u.fillStyle=y.color;let S=u.measureText("Hg"),_=parseFloat(y.fontSize)||16,R=S.fontBoundingBoxAscent??S.actualBoundingBoxAscent??_*.8,T=S.fontBoundingBoxDescent??S.actualBoundingBoxDescent??_*.2;for(let A=0;A<h.length;){let w=h.textContent.codePointAt(A)>65535?2:1,M=h.textContent.slice(A,A+w);p.setStart(h,A),p.setEnd(h,A+w);let P=p.getBoundingClientRect();if(A+=w,!M.trim()||P.width<=0||P.height<=0)continue;let z=(P.left-t.left)/s,F=(P.top-t.top)/o,V=P.height/o,W=F+(V-R-T)*.5+R;u.fillText(Gx(M,y),z+a,W+a)}}p.detach?.();let g=u.getImageData(0,0,c.width,c.height).data,x=[],m=Math.max(1,Math.round(l*1.7));for(let f=0;f<c.height;f+=m)for(let y=0;y<c.width;y+=m){let S=(f*c.width+y)*4;g[S+3]<80||x.push([(y+.5)/l-a,(f+.5)/l-a,g[S]/255,g[S+1]/255,g[S+2]/255])}return{group:e,width:n,height:r,candidates:x,color:Vx(getComputedStyle(i).color)}}async function jh(i,{maxPoints:e=4e3}={}){await document.fonts?.ready;let t=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<721||(navigator.deviceMemory||8)<=4||(navigator.hardwareConcurrency||8)<=4,n=Math.max(0,Math.min(t?1800:4e3,Math.floor(e))),r=Array.from({length:4},(x,m)=>Wx(i[m],m)),s=r.reduce((x,m)=>x+(m?.candidates.length||0),0),o=r.map(x=>Math.sqrt(x?.candidates.length||0)),a=o.reduce((x,m)=>x+m,0),l=r.map(x=>({width:x?.width||1,height:x?.height||1,count:0})),c=[],u=Math.min(n,s),d=Hx(2119695054);r.forEach((x,m)=>{if(!x?.candidates.length||!u)return;let f=o.slice(m).reduce((S,_)=>S+_,0),y=Math.min(x.candidates.length,f>0?Math.max(1,Math.round(u*o[m]/f)):0);for(let S=0;S<y;S++){let _=Math.min(x.candidates.length-1,Math.floor((S+d())*x.candidates.length/y));c.push({group:m,value:x.candidates[_]})}l[m].count=y,u-=y});let p=new Float32Array(c.length*3),h=new Float32Array(c.length*3),g=new Float32Array(c.length);return c.forEach(({group:x,value:m},f)=>{p.set([m[0],m[1],0],f*3),h.set(m.slice(2,5),f*3),g[f]=x}),{positions:p,colors:h,groupIds:g,groupBounds:l,count:c.length,colorSpace:"srgb",totalWeight:a}}var td=i=>Er.clamp(Number(i)||0,0,1),ed=(i,e,t)=>{let n=td((t-i)/(e-i));return n*n*(3-2*n)};function Xx(){let i=navigator.deviceMemory||8,e=navigator.hardwareConcurrency||8,n=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<721||i<=4||e<=4;return{low:n,count:i<=2?4e3:n?7e3:16e3,dpr:i<=2?1:n?1.25:1.5,pointSize:n?1.9:1.8,ambientFps:n?30:45}}function qx(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Yx(i,e){let t=new Float32Array(e*3),n=new Float32Array(e*2),r=new Float32Array(e*3),s=new Float32Array(e*3),o=new Float32Array(e*4),a=new Ce,l=qx(186320324);for(let u=0;u<e;u++){let d=i.source[u*2],p=i.source[u*2+1],h=i.target[u*2],g=i.target[u*2+1];if(![d,p,h,g].every(Number.isFinite))throw new Error("BMW bridge has an invalid photo sample");t.set([d,p,0],u*3),n.set([h,g],u*2);let x=u*3,m=i.sourceColors,f=i.targetColors;if(![m[x],m[x+1],m[x+2],f[x],f[x+1],f[x+2]].every(Number.isFinite))throw new Error("BMW bridge has an invalid sample color");a.setRGB(m[x],m[x+1],m[x+2],Tt),r.set([a.r,a.g,a.b],x),a.setRGB(f[x],f[x+1],f[x+2],Tt),s.set([a.r,a.g,a.b],x);let y=f[x]*.2126+f[x+1]*.7152+f[x+2]*.0722;o.set([l(),l(),l(),y],u*4)}let c=new At;return c.setAttribute("position",new ft(t,3)),c.setAttribute("aTarget",new ft(n,2)),c.setAttribute("aSourceColor",new ft(r,3)),c.setAttribute("aTargetColor",new ft(s,3)),c.setAttribute("aSeed",new ft(o,4)),c.setDrawRange(0,e),c}var Zx=`
  attribute vec2 aTarget;
  attribute vec3 aSourceColor;
  attribute vec3 aTargetColor;
  attribute vec4 aSeed;
  uniform float uProgress;
  uniform float uTime;
  uniform float uMotionStrength;
  uniform float uPointerStrength;
  uniform float uPixelRatio;
  uniform float uPointSize;
  uniform float uPointLimit;
  uniform vec2 uViewport;
  uniform vec2 uPointer;
  uniform vec4 uSource;
  uniform vec4 uTarget;
  uniform vec4 uSourceFrame;
  uniform vec4 uTargetFrame;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vSettled;
  varying float vBlur;
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
    // Points lift away in the same wave that releases them: the car comes
    // apart outward from its headlamps, keeping its shape a moment longer
    // where the light has not reached yet.
    float detachAt = 0.155 + metric * 0.32 + aSeed.x * 0.03;
    float detach = ease(clamp((uProgress - detachAt) / 0.20, 0.0, 1.0));
    // The original night photograph is dark: a low classification threshold
    // recognizes its cockpit edges/strips rather than delaying almost all of it.
    float structure = smoothstep(0.035, 0.20, aSeed.w);
    float along = aSeed.y - 0.5;
    float depth = aSeed.z - 0.5;
    float extent = min(uViewport.x, uViewport.y);

    // One camera move, one direction of travel. Released points become a
    // shallow volume around the car; the camera pushes in through the badge,
    // so everything streams outward from a single focus and passes the
    // viewer, the way a dolly shot reads on film.
    vec2 carFocus = photoPoint(vec2(0.485, 0.50), uSource);
    float push = clamp((uProgress - 0.30) / 0.30, 0.0, 1.0);
    push = push * push * (3.0 - 2.0 * push);
    float pointZ = 3.0 + depth * 1.0 * detach;
    float dist = pointZ - push * 3.5;
    float scale = 3.0 / max(dist, 0.05);
    // Released points rise a touch, like sparks lifting off the paint.
    vec2 lift = vec2(along * 0.6, 0.4 + aSeed.x) * extent * 0.03 * detach;
    vec2 car = carFocus + (source + lift - carFocus) * scale;
    // Close to the lens, points fall out of focus into soft discs.
    float blur = smoothstep(1.1, 0.3, dist);
    // 0 while ahead of the camera, 1 once passed (fully transparent at .5).
    float passed = smoothstep(0.45, 0.12, dist);

    // The cockpit is approached head on: it emerges small at the Bosch
    // display, then grows and decelerates into place (a dolly that lands).
    vec2 dashFocus = photoPoint(vec2(0.553, 0.482), uTarget);
    float arrive = clamp((uProgress - 0.42) / 0.40, 0.0, 1.0);
    float landing = 1.0 - pow(1.0 - arrive, 3.0);
    float dashZ = mix(6.0, 1.0, landing) + depth * 0.8 * (1.0 - landing);
    vec2 dash = dashFocus + (target - dashFocus) / dashZ;
    // Bright structure appears first; dark surfaces fill in behind it.
    float join = smoothstep(0.44 + (1.0 - structure) * 0.08, 0.54 + (1.0 - structure) * 0.10, uProgress);

    bool onCar = passed < 0.5;
    vec2 formed = onCar ? car : dash;
    float gathering = onCar ? 0.0 : landing;
    float motion = uMotionStrength * (1.0 - gathering);
    float phase = along * 6.2 + depth * 2.5;
    formed += vec2(sin(uTime * 0.31 + phase), cos(uTime * 0.26 + phase * 1.15))
      * clamp(extent * 0.006, 2.0, 4.0) * motion;
    // The cursor parts the particles and lights them as it passes.
    vec2 delta = formed - uPointer;
    float distance = length(delta);
    float influence = 1.0 - smoothstep(0.0, clamp(extent * 0.20, 90.0, 190.0), distance);
    float touch = influence * influence * uPointerStrength * motion;
    vec2 outward = delta / max(1.0, distance);
    formed += (outward * 0.8 + vec2(-outward.y, outward.x) * 0.35) * 22.0 * touch;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(formed, 0.0, 1.0);

    float variation = mix(1.0, 0.8 + aSeed.y * 0.4, detach);
    float carSize = uPointSize * pow(min(scale, 7.0), 0.8) * variation + blur * extent * 0.012;
    float size = onCar ? carSize : uPointSize;
    gl_PointSize = min(uPointLimit, max(1.45, size) * uPixelRatio);
    vBlur = onCar ? blur : 0.0;

    vec3 coolWhite = vec3(0.72, 0.84, 1.0);
    float energyFront = sin(release * 3.14159265) * (1.0 - detach);
    vec3 energizedSource = mix(aSourceColor, coolWhite, energyFront * 0.16);
    // In flight the car keeps its own colours, lifted so its dark body still
    // reads as a faint volume of light around the bright chrome and lamps.
    vec3 carColor = mix(energizedSource, max(aSourceColor * 1.45, coolWhite * 0.13), detach);
    // A restrained temporary tint keeps the early settled structure visible;
    // it returns to exact photograph RGB before the native image handoff.
    vec3 readableTarget = max(aTargetColor, vec3(0.030, 0.035, 0.042));
    readableTarget = mix(readableTarget, aTargetColor, smoothstep(0.76, 0.85, uProgress));
    vec3 dashColor = mix(readableTarget * 2.0 + coolWhite * 0.07, readableTarget, landing);
    vColor = (onCar ? carColor : dashColor) * (1.0 + touch * 0.8);

    float carAlpha = mix(frameAlpha(source, uSourceFrame), 1.0, detach)
      * mix(1.0, 0.22, blur) * (1.0 - smoothstep(0.0, 0.5, passed));
    // Match the native photograph's scaled frame and exact edge feathering,
    // particularly where the portrait viewport crops the steering wheel.
    float dashAlpha = frameAlpha(dash, uTargetFrame) * join * smoothstep(0.5, 1.0, passed);
    vAlpha = release * (1.0 - smoothstep(0.85, 0.95, uProgress)) * (onCar ? carAlpha : dashAlpha);
    // A tiny viewport-edge fade avoids hard sprite clipping on tall phones.
    // Points outside the native crop remain outside rather than being clamped.
    vec2 edge = uViewport * 0.5 - abs(formed);
    vAlpha *= smoothstep(0.0, extent * 0.03, min(edge.x, edge.y));
    // Settled points cover like the photographs; points in flight add light.
    vSettled = onCar ? 1.0 - detach : landing * landing;
  }
`,$x=`
  uniform float uOpacity;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vSettled;
  varying float vBlur;
  void main() {
    float radius = length(gl_PointCoord - vec2(0.5));
    float crisp = 1.0 - smoothstep(0.37, 0.50, radius);
    float core = 1.0 - smoothstep(0.0, 0.22, radius);
    float halo = exp(-radius * radius * 18.0) * 0.55;
    // Out-of-focus points render as flat discs with a faint bright rim,
    // like lens bokeh, rather than as larger dots.
    float disc = (1.0 - smoothstep(0.30, 0.50, radius)) * 0.6
      + smoothstep(0.30, 0.42, radius) * (1.0 - smoothstep(0.42, 0.50, radius)) * 0.12;
    float sprite = mix(mix(core + halo, disc, vBlur), crisp, vSettled);
    float alpha = min(1.0, sprite) * vAlpha * uOpacity;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(vColor, 1.0);
    #include <colorspace_fragment>
    // Premultiplied output: settled points cover like the photograph, while
    // points in flight write no coverage and so add up as light.
    gl_FragColor = vec4(gl_FragColor.rgb * alpha, alpha * vSettled);
  }
`;function nd({canvas:i,state:e,data:t,onError:n,settle:r}){let s=Math.floor(Number(t?.count)||0);if(!i||!e||s<1||t.source?.length!==s*2||t.target?.length!==s*2||t.sourceColors?.length!==s*3||t.targetColors?.length!==s*3)throw new Error("BMW bridge requires a canvas, state and matching paired photo samples");let o=Xx(),a=Math.min(s,o.count),l=a,c=Math.min(devicePixelRatio||1,o.dpr),u=Yx(t,l),d;try{d=new _i({canvas:i,alpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"})}catch(Z){throw u.dispose(),Z}d.outputColorSpace=Tt,d.toneMapping=xn,d.setClearColor(0,0),d.autoClear=!1,d.debug.onShaderError=(Z,ee,Ee,Je)=>{throw new Error(`BMW bridge shader failed: ${Z.getProgramInfoLog(ee)||Z.getShaderInfoLog(Ee)||Z.getShaderInfoLog(Je)||"unknown driver error"}`)};let p=d.getContext(),h=p.getParameter(p.ALIASED_POINT_SIZE_RANGE)[1],g={uProgress:{value:0},uTime:{value:0},uMotionStrength:{value:0},uPointerStrength:{value:0},uPixelRatio:{value:c},uPointSize:{value:o.pointSize},uPointLimit:{value:h},uViewport:{value:new ae(1,1)},uPointer:{value:new ae},uSource:{value:new lt},uTarget:{value:new lt},uSourceFrame:{value:new lt},uTargetFrame:{value:new lt},uOpacity:{value:0}},x=new Lt({uniforms:g,vertexShader:Zx,fragmentShader:$x,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:ql,blendEquation:jn,blendSrc:bo,blendDst:ur,blendSrcAlpha:bo,blendDstAlpha:ur}),m=new ri(u,x);m.frustumCulled=!1;let f=new Pn;f.add(m);let y=new kn(-1,1,1,-1,.1,2e3);y.position.z=1e3;let S=matchMedia("(prefers-reduced-motion: reduce)"),_=!S.matches,R=!1,T=!1,A=!1,I=!1,w=!0,M=1,P=1,z=0,F=!0,V=!1,W=!1,k=[],te=0,G=0,se=0,ue=0,pe=0,Pe=0,Ge=0,X=0,ie=null,ve=1e3/o.ambientFps,le=new ae,be=new ae,Se=!1,Ie=0,Ze=!1,He=0;function qe(){return A&&!T&&!I&&w&&!document.hidden}function U(){return td(e.progress)}function bt(){return qe()&&R&&e.visible&&U()>.1&&U()<.95}function Fe(){return bt()&&_&&U()>.11&&U()<.85}function me(){Ze=!1,He=0}function xe(){te=0,G=0,se=0}function $e(){!z&&qe()&&(V||F&&bt()||Fe())&&(z=requestAnimationFrame($))}function we(){d.setViewport(0,0,M,P),d.clear(!0,!1,!1),W=!1,V=!1,Pe=0}function E(){if(T)return;let Z=i.getBoundingClientRect(),ee=Math.max(1,Math.round(e.viewport?.width||Z.width||innerWidth)),Ee=Math.max(1,Math.round(e.viewport?.height||Z.height||innerHeight));(ee!==M||Ee!==P||d.getPixelRatio()!==c)&&(M=ee,P=Ee,d.setPixelRatio(c),d.setSize(M,P,!1),y.left=-M/2,y.right=M/2,y.top=P/2,y.bottom=-P/2,y.updateProjectionMatrix(),g.uViewport.value.set(M,P),F=!0),$e()}function v(Z=!1){if(T)return;let ee=e.source,Ee=e.target,Je=[R,e.visible,e.progress,e.interactive,e.viewport?.width,e.viewport?.height,ee?.x,ee?.y,ee?.width,ee?.height,Ee?.x,Ee?.y,Ee?.width,Ee?.height];(Z||Je.some((St,Y)=>St!==k[Y]))&&(F=!0),k=Je,bt()||(z&&cancelAnimationFrame(z),z=0,V=W,Ie=0,me(),xe()),e.interactive===!1&&me(),e.viewport&&(e.viewport.width!==M||e.viewport.height!==P)&&E(),$e()}function O(Z){R=!!Z,v()}function J(Z,ee){let Ee=ee&&[ee.x,ee.y,ee.width,ee.height].every(Number.isFinite)&&ee.width>0&&ee.height>0;return Ee&&Z.value.set(ee.x,ee.y,ee.width,ee.height),!!Ee}function j(){e.noAdapt||X>=2||(l=Math.max(Math.min(a,2400),Math.floor(l*.75)),u.setDrawRange(0,l),c=Math.max(.85,c-.15),X++,Ge=0,E())}function $(Z){if(z=0,!qe()){xe();return}if(!bt()){V&&we(),F=!1,xe();return}let ee=Fe(),Ee=F;if(!Ee&&(!ee||Z<se-.5)){ee&&$e();return}let Je=te?Math.min(.06,Math.max(0,(Z-te)/1e3)):0;te=Z,ee&&(ue+=Je),Ze&&Z>=He&&(Ze=!1),le.lerp(be,1-Math.exp(-Je*14));let St=ee&&Ze&&e.interactive!==!1?1:0;Ie+=(St-Ie)*(1-Math.exp(-Je*(St?14:4.3))),!St&&Ie<.001&&(Ie=0);let Y=U();g.uProgress.value=Y,g.uTime.value=ue,g.uPixelRatio.value=c,g.uOpacity.value=1,g.uMotionStrength.value=_?ed(.11,.35,Y)*(1-ed(.72,.85,Y)):0,g.uPointer.value.copy(le),g.uPointerStrength.value=Ie;let Be=J(g.uSource,e.source),rt=J(g.uTarget,e.target);J(g.uSourceFrame,e.sourceFrame||{x:0,y:0,width:M,height:P}),J(g.uTargetFrame,e.targetFrame||{x:0,y:0,width:M,height:P});let at=performance.now();if(we(),!Be||!rt){F=!1;return}try{d.render(f,y)}catch(ct){ie=String(ct),R=!1,we(),xe(),queueMicrotask(()=>n?.(ct));return}Pe=d.info.render.calls,W=!0,pe++,F=!1;let wt=Z-G,ut=performance.now()-at,xt=Ee?1e3/60:ve;G&&wt<150&&(Ge=wt>xt*1.8||ut>20?Ge+1:Math.max(0,Ge-2),Ge>=18&&j()),G=Z,se=Ee||!se?Z+ve:Math.max(se+ve,Z+1),(F||ee)&&$e()}function ye(Z){return!!Z?.closest?.('nav, .nav-wrap, a, button, input, select, textarea, summary, [role="button"], [role="link"], [contenteditable], [data-no-particles]')}function Q(Z,ee,Ee,Je=!1){if(!Fe()||e.interactive===!1||ye(Z.target)){me();return}be.set(ee-M/2,P/2-Ee),(!Se||Ie<.001)&&le.copy(be),Se=!0,Ze=!0,He=Je?1/0:performance.now()+700,F=!0,$e()}function ne(Z){if(Z.isPrimary===!1||Z.pointerType==="mouse"&&Z.buttons>1){me();return}Q(Z,Z.clientX,Z.clientY,Z.pointerType==="touch")}function Te(Z){!Z.relatedTarget&&Z.pointerType!=="touch"&&me()}function re(Z){if(Z.touches.length!==1){me();return}let ee=Z.touches[0];Q(Z,ee.clientX,ee.clientY,!0)}function oe(){_=!S.matches,Ie=0,me(),xe(),v(!0)}function Re(){xe(),v(!0)}function Me(Z){Z.preventDefault(),I=!0,ie="BMW bridge WebGL context lost",v(!0)}function fe(){I=!1,ie=null,v(!0)}E();let Oe=(d.extensions.has("KHR_parallel_shader_compile")?d.compileAsync(f,y):Promise.resolve(d.compile(f,y))).then(()=>r?.()).then(()=>{if(T)throw new Error("BMW bridge was disposed during preparation");return we(),d.render(f,y),we(),A=!0,v(!0),K}).catch(Z=>{throw q(),Z});window.addEventListener("pointermove",ne,{passive:!0}),window.addEventListener("pointerdown",ne,{passive:!0}),window.addEventListener("pointerup",me,{passive:!0}),window.addEventListener("pointercancel",me,{passive:!0}),window.addEventListener("pointerout",Te,{passive:!0}),window.addEventListener("touchstart",re,{passive:!0}),window.addEventListener("touchmove",re,{passive:!0}),window.addEventListener("touchend",me,{passive:!0}),window.addEventListener("touchcancel",me,{passive:!0}),window.addEventListener("blur",me),S.addEventListener?S.addEventListener("change",oe):S.addListener(oe),document.addEventListener("visibilitychange",Re),i.addEventListener("webglcontextlost",Me),i.addEventListener("webglcontextrestored",fe);let et=typeof ResizeObserver<"u"?new ResizeObserver(E):null;et?.observe(i),et||window.addEventListener("resize",E,{passive:!0});let L=typeof IntersectionObserver<"u"?new IntersectionObserver(Z=>{w=Z.some(ee=>ee.isIntersecting),v(!0)}):null;L?.observe(i);function he(){let Z=U(),ee=!R||!e.visible?"hidden":Z<=.1?"waiting":Z<.4?"bmw-release":Z<.55?"push-in":Z<.85?"cockpit-assembly":Z<.95?"native-crossfade":"cockpit";return{ready:A&&!T&&!I,active:bt(),visible:!!(R&&e.visible),running:!!z,renderedFrames:pe,frameCount:pe,drawCalls:Pe,drawn:W,particles:l,initialParticles:a,geometries:d.info.memory.geometries,textures:d.info.memory.textures,dpr:c,qualityReductions:X,ambientFps:o.ambientFps,motionEnabled:_,motionActive:Fe(),motionTime:ue,pointerActive:Ze,pointerStrength:Ie,progress:Z,phase:ee,error:ie,kind:"photo-particle-bridge"}}function q(){T||(T=!0,z&&cancelAnimationFrame(z),z=0,et?.disconnect(),L?.disconnect(),window.removeEventListener("resize",E),window.removeEventListener("pointermove",ne),window.removeEventListener("pointerdown",ne),window.removeEventListener("pointerup",me),window.removeEventListener("pointercancel",me),window.removeEventListener("pointerout",Te),window.removeEventListener("touchstart",re),window.removeEventListener("touchmove",re),window.removeEventListener("touchend",me),window.removeEventListener("touchcancel",me),window.removeEventListener("blur",me),S.removeEventListener?S.removeEventListener("change",oe):S.removeListener(oe),document.removeEventListener("visibilitychange",Re),i.removeEventListener("webglcontextlost",Me),i.removeEventListener("webglcontextrestored",fe),u.dispose(),x.dispose(),d.dispose(),d.forceContextLoss())}let K={ready:Oe,setActive:O,resize:E,stats:he,dispose:q};return K}return ld(Jx);})();
