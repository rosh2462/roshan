/*! Lab and portrait — built from js/scene-3d.js; includes Three.js r170 (MIT, Copyright 2010-2024 Three.js authors). Do not edit: rebuild from source. */
var HiWiLabBundle=(()=>{var zo=Object.defineProperty;var rd=Object.getOwnPropertyDescriptor;var sd=Object.getOwnPropertyNames;var od=Object.prototype.hasOwnProperty;var ad=(i,e)=>{for(var t in e)zo(i,t,{get:e[t],enumerable:!0})},ld=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of sd(e))!od.call(i,r)&&r!==t&&zo(i,r,{get:()=>e[r],enumerable:!(n=rd(e,r))||n.enumerable});return i};var cd=i=>ld(zo({},"__esModule",{value:!0}),i);var jx={};ad(jx,{loadPortraitAsset:()=>jh,portraitPresentation:()=>Sc,sampleTextTargets:()=>ed,startBMWBridge:()=>id,startLab:()=>Gh,startPortrait:()=>qh});var ud=0,Tc=1,hd=2;var Vu=1,Xl=2,Kn=3,An=0,Dt=1,rn=2,Bn=0,sr=1,Ui=2,Ac=3,Rc=4,ql=5,jn=100,dd=101,fd=102,pd=103,md=104,gd=200,bo=201,xd=202,vd=203,Ma=204,ur=205,_d=206,yd=207,Md=208,bd=209,Sd=210,wd=211,Ed=212,Td=213,Ad=214,ba=0,Sa=1,wa=2,hr=3,Ea=4,Ta=5,Aa=6,Ra=7,Yl=0,Rd=1,Cd=2,xn=0,Zl=1,$l=2,Jl=3,hs=4,Pd=5,Kl=6,Ql=7;var Gu=300,dr=301,fr=302,Ca=303,Pa=304,So=306,Ia=1e3,Li=1001,La=1002,un=1003,Id=1004;var gs=1005;var Fn=1006,ko=1007;var Di=1008;var ni=1009,Wu=1010,Xu=1011,Jr=1012,jl=1013,Ni=1014,On=1015,Hn=1016,ec=1017,tc=1018,pr=1020,qu=35902,Yu=1021,Zu=1022,Tn=1023,$u=1024,Ju=1025,or=1026,mr=1027,nc=1028,ic=1029,Ku=1030,rc=1031;var sc=1033,Ys=33776,Zs=33777,$s=33778,Js=33779,Da=35840,Ua=35841,Na=35842,Fa=35843,Oa=36196,Ba=37492,za=37496,ka=37808,Ha=37809,Va=37810,Ga=37811,Wa=37812,Xa=37813,qa=37814,Ya=37815,Za=37816,$a=37817,Ja=37818,Ka=37819,Qa=37820,ja=37821,Ks=36492,el=36494,tl=36495,Qu=36283,nl=36284,il=36285,rl=36286;var Qs=2300,sl=2301,Ho=2302,Cc=2400,Pc=2401,Ic=2402;var Ld=3200,oc=3201;var ac=0,Dd=1,mi="",Tt="srgb",Sr="srgb-linear",wo="linear",Mt="srgb";var Vi=7680;var Lc=519,Ud=512,Nd=513,Fd=514,ju=515,Od=516,Bd=517,zd=518,kd=519,Dc=35044;var Uc="300 es",ei=2e3,js=2001,xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=1234567,ar=Math.PI/180,Kr=180/Math.PI;function wr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function lc(i,e){return(i%e+e)%e}function Hd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Vd(i,e,t){return i!==e?(t-i)/(e-i):0}function qr(i,e,t){return(1-t)*i+t*e}function Gd(i,e,t,n){return qr(i,e,1-Math.exp(-t*n))}function Wd(i,e=1){return e-Math.abs(lc(i,e*2)-e)}function Xd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Yd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Zd(i,e){return i+Math.random()*(e-i)}function $d(i){return i*(.5-Math.random())}function Jd(i){i!==void 0&&(Nc=i);let e=Nc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kd(i){return i*ar}function Qd(i){return i*Kr}function jd(i){return(i&i-1)===0&&i!==0}function ef(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nf(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),p=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*p,a*c);break;case"YZY":i.set(l*p,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*p,a*u,a*c);break;case"XZX":i.set(a*u,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ir(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Er={DEG2RAD:ar,RAD2DEG:Kr,generateUUID:wr,clamp:Ht,euclideanModulo:lc,mapLinear:Hd,inverseLerp:Vd,lerp:qr,damp:Gd,pingpong:Wd,smoothstep:Xd,smootherstep:qd,randInt:Yd,randFloat:Zd,randFloatSpread:$d,seededRandom:Jd,degToRad:Kd,radToDeg:Qd,isPowerOfTwo:jd,ceilPowerOfTwo:ef,floorPowerOfTwo:tf,setQuaternionFromProperEuler:nf,normalize:jt,denormalize:ir},oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nt=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],d=n[5],m=n[8],x=r[0],g=r[3],f=r[6],_=r[1],M=r[4],v=r[7],R=r[2],T=r[5],A=r[8];return s[0]=o*x+a*_+l*R,s[3]=o*g+a*M+l*T,s[6]=o*f+a*v+l*A,s[1]=c*x+u*_+h*R,s[4]=c*g+u*M+h*T,s[7]=c*f+u*v+h*A,s[2]=p*x+d*_+m*R,s[5]=p*g+d*M+m*T,s[8]=p*f+d*v+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,p=a*l-u*s,d=c*s-o*l,m=t*h+n*p+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(r*c-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=p*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vo=new nt;function eh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rf(){let i=eo("canvas");return i.style.display="block",i}var Fc={};function Wr(i){i in Fc||(Fc[i]=!0,console.warn(i))}function sf(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function of(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function af(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var dt={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Mt&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Mt&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mi?wo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Oc=[.64,.33,.3,.6,.15,.06],Bc=[.2126,.7152,.0722],zc=[.3127,.329],kc=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[Sr]:{primaries:Oc,whitePoint:zc,transfer:wo,toXYZ:kc,fromXYZ:Hc,luminanceCoefficients:Bc,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:Oc,whitePoint:zc,transfer:Mt,toXYZ:kc,fromXYZ:Hc,luminanceCoefficients:Bc,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});var Gi,ol=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=eo("canvas")),Gi.width=e.width,Gi.height=e.height;let n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=eo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lf=0,to=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Go(r[o].image)):s.push(Go(r[o]))}else s=Go(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ol.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cf=0,sn=class i extends xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Li,r=Li,s=Fn,o=Di,a=Tn,l=ni,c=i.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=wr(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Gu;sn.DEFAULT_ANISOTROPY=1;var lt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],d=l[5],m=l[9],x=l[2],g=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(d+1)/2,R=(f+1)/2,T=(u+p)/4,A=(h+x)/4,I=(m+g)/4;return M>v&&M>R?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=T/n,s=A/n):v>R?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=I/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=A/s,r=I/s),this.set(n,r,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(p-u)*(p-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(h-x)/_,this.z=(p-u)/_,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new to(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},no=class extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ll=class extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],p=s[o+0],d=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(h!==x||l!==p||c!==d||u!==m){let g=1-a,f=l*p+c*d+u*m+h*x,_=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let R=Math.sqrt(M),T=Math.atan2(R,f*_);g=Math.sin(g*T)/R,a=Math.sin(a*T)/R}let v=a*_;if(l=l*g+p*v,c=c*g+d*v,u=u*g+m*v,h=h*g+x*v,g===1-a){let R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],p=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*d-c*p,e[t+1]=l*m+u*p+c*h-a*d,e[t+2]=c*m+u*d+a*p-l*h,e[t+3]=u*m-a*h-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),p=l(n/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=p*u*h+c*d*m,this._y=c*d*h-p*u*m,this._z=c*u*m+p*d*h,this._w=c*u*h-p*d*m;break;case"YXZ":this._x=p*u*h+c*d*m,this._y=c*d*h-p*u*m,this._z=c*u*m-p*d*h,this._w=c*u*h+p*d*m;break;case"ZXY":this._x=p*u*h-c*d*m,this._y=c*d*h+p*u*m,this._z=c*u*m+p*d*h,this._w=c*u*h-p*d*m;break;case"ZYX":this._x=p*u*h-c*d*m,this._y=c*d*h+p*u*m,this._z=c*u*m-p*d*h,this._w=c*u*h+p*d*m;break;case"YZX":this._x=p*u*h+c*d*m,this._y=c*d*h+p*u*m,this._z=c*u*m-p*d*h,this._w=c*u*h-p*d*m;break;case"XZY":this._x=p*u*h-c*d*m,this._y=c*d*h-p*u*m,this._z=c*u*m+p*d*h,this._w=c*u*h+p*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=n+a+h;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wo=new C,Vc=new vi,vn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),vs.subVectors(this.max,Fr),Wi.subVectors(e.a,Fr),Xi.subVectors(e.b,Fr),qi.subVectors(e.c,Fr),ci.subVectors(Xi,Wi),ui.subVectors(qi,Xi),wi.subVectors(Wi,qi);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-wi.z,wi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,wi.z,0,-wi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-wi.y,wi.x,0];return!Xo(t,Wi,Xi,qi,vs)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Wi,Xi,qi,vs))?!1:(_s.crossVectors(ci,ui),t=[_s.x,_s.y,_s.z],Xo(t,Wi,Xi,qi,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qn=[new C,new C,new C,new C,new C,new C,new C,new C],Sn=new C,xs=new vn,Wi=new C,Xi=new C,qi=new C,ci=new C,ui=new C,wi=new C,Fr=new C,vs=new C,_s=new C,Ei=new C;function Xo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ei.fromArray(i,s);let a=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var uf=new vn,Or=new C,qo=new C,ii=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):uf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Or,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(qo)),this.expandByPoint(Or.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new C,Yo=new C,ys=new C,hi=new C,Zo=new C,Ms=new C,$o=new C,gr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Yo.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Yo);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ys),a=hi.dot(this.direction),l=-hi.dot(ys),c=hi.lengthSq(),u=Math.abs(1-o*o),h,p,d,m;if(u>0)if(h=o*l-a,p=o*a-l,m=s*u,h>=0)if(p>=-m)if(p<=m){let x=1/u;h*=x,p*=x,d=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;else p<=-m?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+p*(p+2*l)+c):p<=m?(h=0,p=Math.min(Math.max(-s,-l),s),d=p*(p+2*l)+c):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+p*(p+2*l)+c);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Yo).addScaledVector(ys,p),d}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);let n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,r,s){Zo.subVectors(t,e),Ms.subVectors(n,e),$o.crossVectors(Zo,Ms);let o=this.direction.dot($o),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);let l=a*this.direction.dot(Ms.crossVectors(hi,Ms));if(l<0)return null;let c=a*this.direction.dot(Zo.cross(hi));if(c<0||l+c>o)return null;let u=-a*hi.dot($o);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class i{constructor(e,t,n,r,s,o,a,l,c,u,h,p,d,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,p,d,m,x,g)}set(e,t,n,r,s,o,a,l,c,u,h,p,d,m,x,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let p=o*u,d=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=p-x*c,t[9]=-a*l,t[2]=x-p*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*u,d=l*h,m=c*u,x=c*h;t[0]=p+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=x+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*u,d=l*h,m=c*u,x=c*h;t[0]=p-x*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=x-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*u,d=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=p*c+x,t[1]=l*h,t[5]=x*c+p,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-p*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=p-x*h}else if(e.order==="XZY"){let p=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+x,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=x*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hf,e,df)}lookAt(e,t,n){let r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),di.crossVectors(n,ln),di.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),di.crossVectors(n,ln)),di.normalize(),bs.crossVectors(ln,di),r[0]=di.x,r[4]=bs.x,r[8]=ln.x,r[1]=di.y,r[5]=bs.y,r[9]=ln.y,r[2]=di.z,r[6]=bs.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],d=n[13],m=n[2],x=n[6],g=n[10],f=n[14],_=n[3],M=n[7],v=n[11],R=n[15],T=r[0],A=r[4],I=r[8],w=r[12],b=r[1],P=r[5],z=r[9],F=r[13],V=r[2],X=r[6],k=r[10],j=r[14],W=r[3],re=r[7],ue=r[11],me=r[15];return s[0]=o*T+a*b+l*V+c*W,s[4]=o*A+a*P+l*X+c*re,s[8]=o*I+a*z+l*k+c*ue,s[12]=o*w+a*F+l*j+c*me,s[1]=u*T+h*b+p*V+d*W,s[5]=u*A+h*P+p*X+d*re,s[9]=u*I+h*z+p*k+d*ue,s[13]=u*w+h*F+p*j+d*me,s[2]=m*T+x*b+g*V+f*W,s[6]=m*A+x*P+g*X+f*re,s[10]=m*I+x*z+g*k+f*ue,s[14]=m*w+x*F+g*j+f*me,s[3]=_*T+M*b+v*V+R*W,s[7]=_*A+M*P+v*X+R*re,s[11]=_*I+M*z+v*k+R*ue,s[15]=_*w+M*F+v*j+R*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],d=e[14],m=e[3],x=e[7],g=e[11],f=e[15];return m*(+s*l*h-r*c*h-s*a*p+n*c*p+r*a*d-n*l*d)+x*(+t*l*d-t*c*p+s*o*p-r*o*d+r*c*u-s*l*u)+g*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+f*(-r*a*u-t*l*h+t*a*p+r*o*h-n*o*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],d=e[11],m=e[12],x=e[13],g=e[14],f=e[15],_=h*g*c-x*p*c+x*l*d-a*g*d-h*l*f+a*p*f,M=m*p*c-u*g*c-m*l*d+o*g*d+u*l*f-o*p*f,v=u*x*c-m*h*c+m*a*d-o*x*d-u*a*f+o*h*f,R=m*h*l-u*x*l-m*a*p+o*x*p+u*a*g-o*h*g,T=t*_+n*M+r*v+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=_*A,e[1]=(x*p*s-h*g*s-x*r*d+n*g*d+h*r*f-n*p*f)*A,e[2]=(a*g*s-x*l*s+x*r*c-n*g*c-a*r*f+n*l*f)*A,e[3]=(h*l*s-a*p*s-h*r*c+n*p*c+a*r*d-n*l*d)*A,e[4]=M*A,e[5]=(u*g*s-m*p*s+m*r*d-t*g*d-u*r*f+t*p*f)*A,e[6]=(m*l*s-o*g*s-m*r*c+t*g*c+o*r*f-t*l*f)*A,e[7]=(o*p*s-u*l*s+u*r*c-t*p*c-o*r*d+t*l*d)*A,e[8]=v*A,e[9]=(m*h*s-u*x*s-m*n*d+t*x*d+u*n*f-t*h*f)*A,e[10]=(o*x*s-m*a*s+m*n*c-t*x*c-o*n*f+t*a*f)*A,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*A,e[12]=R*A,e[13]=(u*x*r-m*h*r+m*n*p-t*x*p-u*n*g+t*h*g)*A,e[14]=(m*a*r-o*x*r-m*n*l+t*x*l+o*n*g-t*a*g)*A,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*p+t*a*p)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,p=s*c,d=s*u,m=s*h,x=o*u,g=o*h,f=a*h,_=l*c,M=l*u,v=l*h,R=n.x,T=n.y,A=n.z;return r[0]=(1-(x+f))*R,r[1]=(d+v)*R,r[2]=(m-M)*R,r[3]=0,r[4]=(d-v)*T,r[5]=(1-(p+f))*T,r[6]=(g+_)*T,r[7]=0,r[8]=(m+M)*A,r[9]=(g-_)*A,r[10]=(1-(p+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Yi.set(r[0],r[1],r[2]).length(),o=Yi.set(r[4],r[5],r[6]).length(),a=Yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);let c=1/s,u=1/o,h=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,t.setFromRotationMatrix(wn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=ei){let l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r),d,m;if(a===ei)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===js)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=ei){let l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),p=(t+e)*c,d=(n+r)*u,m,x;if(a===ei)m=(o+s)*h,x=-2*h;else if(a===js)m=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Yi=new C,wn=new bt,hf=new C(0,0,0),df=new C(1,1,1),di=new C,bs=new C,ln=new C,Gc=new bt,Wc=new vi,Rn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],p=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ff=0,Xc=new C,Zi=new vi,Zn=new bt,Ss=new C,Br=new C,pf=new C,mf=new vi,qc=new C(1,0,0),Yc=new C(0,1,0),Zc=new C(0,0,1),$c={type:"added"},gf={type:"removed"},$i={type:"childadded",child:null},Jo={type:"childremoved",child:null},Ft=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Rn,n=new vi,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new nt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return Xc.copy(e).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ss.copy(e):Ss.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Br,Ss,this.up):Zn.lookAt(Ss,Br,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),Zi.setFromRotationMatrix(Zn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($c),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gf),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($c),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ft.DEFAULT_UP=new C(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new C,$n=new C,Ko=new C,Jn=new C,Ji=new C,Ki=new C,Jc=new C,Qo=new C,jo=new C,ea=new C,ta=new lt,na=new lt,ia=new lt,gi=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),En.subVectors(e,t),r.cross(En);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){En.subVectors(r,t),$n.subVectors(n,t),Ko.subVectors(e,t);let o=En.dot(En),a=En.dot($n),l=En.dot(Ko),c=$n.dot($n),u=$n.dot(Ko),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let p=1/h,d=(c*l-a*u)*p,m=(o*u-a*l)*p;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,n),ia.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ta,s.x),o.addScaledVector(na,s.y),o.addScaledVector(ia,s.z),o}static isFrontFacing(e,t,n,r){return En.subVectors(n,t),$n.subVectors(e,t),En.cross($n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),En.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Ji.subVectors(r,n),Ki.subVectors(s,n),Qo.subVectors(e,n);let l=Ji.dot(Qo),c=Ki.dot(Qo);if(l<=0&&c<=0)return t.copy(n);jo.subVectors(e,r);let u=Ji.dot(jo),h=Ki.dot(jo);if(u>=0&&h<=u)return t.copy(r);let p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ji,o);ea.subVectors(e,s);let d=Ji.dot(ea),m=Ki.dot(ea);if(m>=0&&d<=m)return t.copy(s);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ki,a);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Jc.subVectors(s,r),a=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(Jc,a);let f=1/(g+x+p);return o=x*f,a=p*f,t.copy(n).addScaledVector(Ji,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},ws={h:0,s:0,l:0};function ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=lc(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ra(o,s,e+1/3),this.g=ra(o,s,e),this.b=ra(o,s,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return dt.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Ht(Yt.r*255,0,255))*65536+Math.round(Ht(Yt.g*255,0,255))*256+Math.round(Ht(Yt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Yt.copy(this),t);let n=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Tt){dt.fromWorkingColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,r=Yt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(ws);let n=qr(fi.h,ws.h,t),r=qr(fi.s,ws.s,t),s=qr(fi.l,ws.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new Pe;Pe.NAMES=th;var xf=0,zn=class extends xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=wr(),this.name="",this.blending=sr,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=ur,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ur&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Vt=class extends zn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ut=new C,Es=new oe,pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dc&&(e.usage=this.usage),e}};var io=class extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ro=class extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},vf=0,gn=new bt,sa=new Ft,Qi=new C,cn=new vn,zr=new vn,kt=new C,At=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eh(e)?ro:io)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(cn.min,zr.min),cn.expandByPoint(kt),kt.addVectors(cn.max,zr.max),cn.expandByPoint(kt)):(cn.expandByPoint(zr.min),cn.expandByPoint(zr.max))}cn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),kt.add(Qi)),r=Math.max(r,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new C,l[I]=new C;let c=new C,u=new C,h=new C,p=new oe,d=new oe,m=new oe,x=new C,g=new C;function f(I,w,b){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,b),p.fromBufferAttribute(s,I),d.fromBufferAttribute(s,w),m.fromBufferAttribute(s,b),u.sub(c),h.sub(c),d.sub(p),m.sub(p);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(P),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(P),a[I].add(x),a[w].add(x),a[b].add(x),l[I].add(g),l[w].add(g),l[b].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,w=_.length;I<w;++I){let b=_[I],P=b.start,z=b.count;for(let F=P,V=P+z;F<V;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new C,v=new C,R=new C,T=new C;function A(I){R.fromBufferAttribute(r,I),T.copy(R);let w=a[I];M.copy(w),M.sub(R.multiplyScalar(R.dot(w))).normalize(),v.crossVectors(T,w);let P=v.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,P)}for(let I=0,w=_.length;I<w;++I){let b=_[I],P=b.start,z=b.count;for(let F=P,V=P+z;F<V;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let r=new C,s=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let p=0,d=e.count;p<d;p+=3){let m=e.getX(p+0),x=e.getX(p+1),g=e.getX(p+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let f=0;f<u;f++)p[m++]=c[d++]}return new pt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let p=c[u],d=e(p,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kc=new bt,Ti=new gr,Ts=new ii,Qc=new C,As=new C,Rs=new C,Cs=new C,oa=new C,Ps=new C,jc=new C,Is=new C,ft=class extends Ft{constructor(e=new At,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(oa.fromBufferAttribute(h,e),o?Ps.addScaledVector(oa,u):Ps.addScaledVector(oa.sub(t),u))}t.add(Ps)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(Ts.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Ts,Qc)===null||Ti.origin.distanceToSquared(Qc)>(e.far-e.near)**2))&&(Kc.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(Kc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=p.length;m<x;m++){let g=p[m],f=o[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,R=M;v<R;v+=3){let T=a.getX(v),A=a.getX(v+1),I=a.getX(v+2);r=Ls(this,f,e,n,c,u,h,T,A,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,f=x;g<f;g+=3){let _=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);r=Ls(this,o,e,n,c,u,h,_,M,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=p.length;m<x;m++){let g=p[m],f=o[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,R=M;v<R;v+=3){let T=v,A=v+1,I=v+2;r=Ls(this,f,e,n,c,u,h,T,A,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,f=x;g<f;g+=3){let _=g,M=g+1,v=g+2;r=Ls(this,o,e,n,c,u,h,_,M,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function _f(i,e,t,n,r,s,o,a){let l;if(e.side===Dt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===An,a),l===null)return null;Is.copy(a),Is.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Is);return c<t.near||c>t.far?null:{distance:c,point:Is.clone(),object:i}}function Ls(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,As),i.getVertexPosition(l,Rs),i.getVertexPosition(c,Cs);let u=_f(i,e,t,n,As,Rs,Cs,jc);if(u){let h=new C;gi.getBarycoord(jc,As,Rs,Cs,h),r&&(u.uv=gi.getInterpolatedAttribute(r,a,l,c,h,new oe)),s&&(u.uv1=gi.getInterpolatedAttribute(s,a,l,c,h,new oe)),o&&(u.normal=gi.getInterpolatedAttribute(o,a,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new C,materialIndex:0};gi.getNormal(As,Rs,Cs,p.normal),u.face=p,u.barycoord=h}return u}var Cn=class i extends At{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],p=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(h,2));function m(x,g,f,_,M,v,R,T,A,I,w){let b=v/A,P=R/I,z=v/2,F=R/2,V=T/2,X=A+1,k=I+1,j=0,W=0,re=new C;for(let ue=0;ue<k;ue++){let me=ue*P-F;for(let Ie=0;Ie<X;Ie++){let qe=Ie*b-z;re[x]=qe*_,re[g]=me*M,re[f]=V,c.push(re.x,re.y,re.z),re[x]=0,re[g]=0,re[f]=T>0?1:-1,u.push(re.x,re.y,re.z),h.push(Ie/A),h.push(1-ue/I),j+=1}}for(let ue=0;ue<I;ue++)for(let me=0;me<A;me++){let Ie=p+me+X*ue,qe=p+me+X*(ue+1),q=p+(me+1)+X*(ue+1),ee=p+(me+1)+X*ue;l.push(Ie,qe,ee),l.push(qe,q,ee),W+=6}a.addGroup(d,W,w),d+=W,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=xr(i[t]);for(let r in n)e[r]=n[r]}return e}function yf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var cc={clone:xr,merge:en},Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends zn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},so=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pi=new C,eu=new oe,tu=new oe,Zt=class extends so{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,eu,tu),t.subVectors(tu,eu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ji=-90,er=1,cl=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(ji,er,e,t);r.layers=this.layers,this.add(r);let s=new Zt(ji,er,e,t);s.layers=this.layers,this.add(s);let o=new Zt(ji,er,e,t);o.layers=this.layers,this.add(o);let a=new Zt(ji,er,e,t);a.layers=this.layers,this.add(a);let l=new Zt(ji,er,e,t);l.layers=this.layers,this.add(l);let c=new Zt(ji,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,p,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},oo=class extends sn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ul=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cn(5,5,5),s=new Lt({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Bn});s.uniforms.tEquirect.value=t;let o=new ft(r,s),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Fn),new cl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},aa=new C,Sf=new C,wf=new nt,Qn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=aa.subVectors(n,t).cross(Sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(aa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wf.getNormalMatrix(e),r=this.coplanarPoint(aa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new ii,Ds=new C,jr=class{constructor(e=new Qn,t=new Qn,n=new Qn,r=new Qn,s=new Qn,o=new Qn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],p=r[7],d=r[8],m=r[9],x=r[10],g=r[11],f=r[12],_=r[13],M=r[14],v=r[15];if(n[0].setComponents(l-s,p-c,g-d,v-f).normalize(),n[1].setComponents(l+s,p+c,g+d,v+f).normalize(),n[2].setComponents(l+o,p+u,g+m,v+_).normalize(),n[3].setComponents(l-o,p-u,g-m,v-_).normalize(),n[4].setComponents(l-a,p-h,g-x,v-M).normalize(),t===ei)n[5].setComponents(l+a,p+h,g+x,v+M).normalize();else if(t===js)n[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ds.x=r.normal.x>0?e.max.x:e.min.x,Ds.y=r.normal.y>0?e.max.y:e.min.y,Ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ih(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ef(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let p=0;for(let d=1;d<h.length;d++){let m=h[p],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++p,h[p]=x)}h.length=p+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Gt=class i extends At{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,p=t/l,d=[],m=[],x=[],g=[];for(let f=0;f<u;f++){let _=f*p-o;for(let M=0;M<c;M++){let v=M*h-s;m.push(v,-_,0),x.push(0,0,1),g.push(M/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){let M=_+c*f,v=_+c*(f+1),R=_+1+c*(f+1),T=_+1+c*f;d.push(M,v,T),d.push(v,R,T)}this.setIndex(d),this.setAttribute("position",new xt(m,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
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
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lf=`#ifdef USE_AOMAP
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
#endif`,Df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uf=`#ifdef USE_BATCHING
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
#endif`,Nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zf=`#ifdef USE_IRIDESCENCE
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
#endif`,kf=`#ifdef USE_BUMPMAP
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$f=`#define PI 3.141592653589793
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kf=`vec3 transformedNormal = objectNormal;
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
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rp=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
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
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xp=`uniform bool receiveShadow;
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
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,_p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sp=`PhysicalMaterial material;
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
#endif`,wp=`struct PhysicalMaterial {
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
}`,Ep=`
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Np=`#if defined( USE_POINTS_UV )
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
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
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
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
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
#endif`,$p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,um=`float getShadowMask() {
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
}`,hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
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
}`,Lm=`#if DEPTH_PACKING == 3200
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
}`,Dm=`#define DISTANCE
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
}`,Um=`#define DISTANCE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,km=`uniform vec3 diffuse;
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
}`,Hm=`#define LAMBERT
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
}`,Vm=`#define LAMBERT
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
}`,Gm=`#define MATCAP
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define NORMAL
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
}`,qm=`#define NORMAL
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
}`,Ym=`#define PHONG
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
}`,Zm=`#define PHONG
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
}`,$m=`#define STANDARD
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
}`,Jm=`#define STANDARD
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
}`,Km=`#define TOON
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
}`,Qm=`#define TOON
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
}`,jm=`uniform float size;
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
}`,e0=`uniform vec3 diffuse;
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
}`,t0=`#include <common>
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
}`,n0=`uniform vec3 color;
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
}`,i0=`uniform float rotation;
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
}`,r0=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Tf,alphahash_pars_fragment:Af,alphamap_fragment:Rf,alphamap_pars_fragment:Cf,alphatest_fragment:Pf,alphatest_pars_fragment:If,aomap_fragment:Lf,aomap_pars_fragment:Df,batching_pars_vertex:Uf,batching_vertex:Nf,begin_vertex:Ff,beginnormal_vertex:Of,bsdfs:Bf,iridescence_fragment:zf,bumpmap_pars_fragment:kf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Gf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:qf,color_pars_vertex:Yf,color_vertex:Zf,common:$f,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:Kf,displacementmap_pars_vertex:Qf,displacementmap_vertex:jf,emissivemap_fragment:ep,emissivemap_pars_fragment:tp,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:rp,envmap_common_pars_fragment:sp,envmap_pars_fragment:op,envmap_pars_vertex:ap,envmap_physical_pars_fragment:vp,envmap_vertex:lp,fog_vertex:cp,fog_pars_vertex:up,fog_fragment:hp,fog_pars_fragment:dp,gradientmap_pars_fragment:fp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:xp,lights_toon_fragment:_p,lights_toon_pars_fragment:yp,lights_phong_fragment:Mp,lights_phong_pars_fragment:bp,lights_physical_fragment:Sp,lights_physical_pars_fragment:wp,lights_fragment_begin:Ep,lights_fragment_maps:Tp,lights_fragment_end:Ap,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Ip,map_fragment:Lp,map_pars_fragment:Dp,map_particle_fragment:Up,map_particle_pars_fragment:Np,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:Op,morphinstance_vertex:Bp,morphcolor_vertex:zp,morphnormal_vertex:kp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Vp,normal_fragment_begin:Gp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:qp,normal_vertex:Yp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:Qp,opaque_fragment:jp,packing:em,premultiplied_alpha_fragment:tm,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:rm,roughnessmap_fragment:sm,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:am,shadowmap_pars_vertex:lm,shadowmap_vertex:cm,shadowmask_pars_fragment:um,skinbase_vertex:hm,skinning_pars_vertex:dm,skinning_vertex:fm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:xm,tonemapping_pars_fragment:vm,transmission_fragment:_m,transmission_pars_fragment:ym,uv_pars_fragment:Mm,uv_pars_vertex:bm,uv_vertex:Sm,worldpos_vertex:wm,background_vert:Em,background_frag:Tm,backgroundCube_vert:Am,backgroundCube_frag:Rm,cube_vert:Cm,cube_frag:Pm,depth_vert:Im,depth_frag:Lm,distanceRGBA_vert:Dm,distanceRGBA_frag:Um,equirect_vert:Nm,equirect_frag:Fm,linedashed_vert:Om,linedashed_frag:Bm,meshbasic_vert:zm,meshbasic_frag:km,meshlambert_vert:Hm,meshlambert_frag:Vm,meshmatcap_vert:Gm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:qm,meshphong_vert:Ym,meshphong_frag:Zm,meshphysical_vert:$m,meshphysical_frag:Jm,meshtoon_vert:Km,meshtoon_frag:Qm,points_vert:jm,points_frag:e0,shadow_vert:t0,shadow_frag:n0,sprite_vert:i0,sprite_frag:r0},xe={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Nn={basic:{uniforms:en([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:en([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:en([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:en([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:en([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:en([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:en([xe.points,xe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:en([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:en([xe.common,xe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:en([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:en([xe.sprite,xe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:en([xe.common,xe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:en([xe.lights,xe.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Nn.physical={uniforms:en([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Us={r:0,b:0,g:0},Ri=new Rn,s0=new bt;function o0(i,e,t,n,r,s,o){let a=new Pe(0),l=s===!0?0:1,c,u,h=null,p=0,d=null;function m(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M}function x(_){let M=!1,v=m(_);v===null?f(a,l):v&&v.isColor&&(f(v,1),M=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,M){let v=m(M);v&&(v.isCubeTexture||v.mapping===So)?(u===void 0&&(u=new ft(new Cn(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:xr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ri.copy(M.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(s0.makeRotationFromEuler(Ri)),u.material.toneMapped=dt.getTransfer(v.colorSpace)!==Mt,(h!==v||p!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ft(new Gt(2,2),new Lt({name:"BackgroundMaterial",uniforms:xr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=dt.getTransfer(v.colorSpace)!==Mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,M){_.getRGB(Us,nh(i)),n.buffers.color.setClear(Us.r,Us.g,Us.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:x,addToRenderList:g}}function a0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null),s=r,o=!1;function a(b,P,z,F,V){let X=!1,k=h(F,z,P);s!==k&&(s=k,c(s.object)),X=d(b,F,z,V),X&&m(b,F,z,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(b,P,z,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,P,z){let F=z.wireframe===!0,V=n[b.id];V===void 0&&(V={},n[b.id]=V);let X=V[P.id];X===void 0&&(X={},V[P.id]=X);let k=X[F];return k===void 0&&(k=p(l()),X[F]=k),k}function p(b){let P=[],z=[],F=[];for(let V=0;V<t;V++)P[V]=0,z[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:F,object:b,attributes:{},index:null}}function d(b,P,z,F){let V=s.attributes,X=P.attributes,k=0,j=z.getAttributes();for(let W in j)if(j[W].location>=0){let ue=V[W],me=X[W];if(me===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),ue===void 0||ue.attribute!==me||me&&ue.data!==me.data)return!0;k++}return s.attributesNum!==k||s.index!==F}function m(b,P,z,F){let V={},X=P.attributes,k=0,j=z.getAttributes();for(let W in j)if(j[W].location>=0){let ue=X[W];ue===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor));let me={};me.attribute=ue,ue&&ue.data&&(me.data=ue.data),V[W]=me,k++}s.attributes=V,s.attributesNum=k,s.index=F}function x(){let b=s.newAttributes;for(let P=0,z=b.length;P<z;P++)b[P]=0}function g(b){f(b,0)}function f(b,P){let z=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;z[b]=1,F[b]===0&&(i.enableVertexAttribArray(b),F[b]=1),V[b]!==P&&(i.vertexAttribDivisor(b,P),V[b]=P)}function _(){let b=s.newAttributes,P=s.enabledAttributes;for(let z=0,F=P.length;z<F;z++)P[z]!==b[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function M(b,P,z,F,V,X,k){k===!0?i.vertexAttribIPointer(b,P,z,V,X):i.vertexAttribPointer(b,P,z,F,V,X)}function v(b,P,z,F){x();let V=F.attributes,X=z.getAttributes(),k=P.defaultAttributeValues;for(let j in X){let W=X[j];if(W.location>=0){let re=V[j];if(re===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){let ue=re.normalized,me=re.itemSize,Ie=e.get(re);if(Ie===void 0)continue;let qe=Ie.buffer,q=Ie.type,ee=Ie.bytesPerElement,ge=q===i.INT||q===i.UNSIGNED_INT||re.gpuType===jl;if(re.isInterleavedBufferAttribute){let se=re.data,Se=se.stride,we=re.offset;if(se.isInstancedInterleavedBuffer){for(let He=0;He<W.locationSize;He++)f(W.location+He,se.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let He=0;He<W.locationSize;He++)g(W.location+He);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let He=0;He<W.locationSize;He++)M(W.location+He,me/W.locationSize,q,ue,Se*ee,(we+me/W.locationSize*He)*ee,ge)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)f(W.location+se,re.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<W.locationSize;se++)g(W.location+se);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let se=0;se<W.locationSize;se++)M(W.location+se,me/W.locationSize,q,ue,me*ee,me/W.locationSize*se*ee,ge)}}else if(k!==void 0){let ue=k[j];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(W.location,ue);break;case 3:i.vertexAttrib3fv(W.location,ue);break;case 4:i.vertexAttrib4fv(W.location,ue);break;default:i.vertexAttrib1fv(W.location,ue)}}}}_()}function R(){I();for(let b in n){let P=n[b];for(let z in P){let F=P[z];for(let V in F)u(F[V].object),delete F[V];delete P[z]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let z in P){let F=P[z];for(let V in F)u(F[V].object),delete F[V];delete P[z]}delete n[b.id]}function A(b){for(let P in n){let z=n[P];if(z[b.id]===void 0)continue;let F=z[b.id];for(let V in F)u(F[V].object),delete F[V];delete z[b.id]}}function I(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function l0(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function l(c,u,h,p){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],p[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x]*p[x];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function c0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let I=A===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ni&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==On&&!I)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function u0(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Qn,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let d=h.length!==0||p||n!==0||r;return r=p,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,f=i.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{let _=s?0:n,M=_*4,v=f.clippingState||null;l.value=v,v=u(m,p,M,d);for(let R=0;R!==M;++R)v[R]=t[R];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let f=d+x*4,_=p.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let M=0,v=d;M!==x;++M,v+=4)o.copy(h[M]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function h0(i){let e=new WeakMap;function t(o,a){return a===Ca?o.mapping=dr:a===Pa&&(o.mapping=fr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ca||a===Pa)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ul(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var kn=class extends so{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},rr=4,nu=[.125,.215,.35,.446,.526,.582],Ii=20,la=new kn,iu=new Pe,ca=null,ua=0,ha=0,da=!1,Pi=(1+Math.sqrt(5))/2,tr=1/Pi,ru=[new C(-Pi,tr,0),new C(Pi,tr,0),new C(-tr,0,Pi),new C(tr,0,Pi),new C(0,Pi,-tr),new C(0,Pi,tr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],vr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ca,ua,ha),this._renderer.xr.enabled=da,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Hn,format:Tn,colorSpace:Sr,depthBuffer:!1},r=su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(s)),this._blurMaterial=f0(s,e,t)}return r}_compileMaterial(e){let t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,n,r){let a=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(iu),u.toneMapping=xn,u.autoClear=!1;let d=new Vt({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),m=new ft(new Cn,d),x=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,x=!0):(d.color.copy(iu),x=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let M=this._cubeSize;Ns(r,_*M,f>2?M:0,M,M),u.setRenderTarget(r),x&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===dr||e.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Ns(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,la)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ru[(r-s-1)%ru.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ft(this._lodPlanes[r],c),p=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),x=s/m,g=isFinite(s)?1+Math.floor(u*x):Ii;g>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ii}`);let f=[],_=0;for(let A=0;A<Ii;++A){let I=A/x,w=Math.exp(-I*I/2);f.push(w),A===0?_+=w:A<g&&(_+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:M}=this;p.dTheta.value=m,p.mipInt.value=M-n;let v=this._sizeLods[r],R=3*v*(r>M-rr?r-M+rr:0),T=4*(this._cubeSize-v);Ns(t,R,T,3*v,2*v),l.setRenderTarget(t),l.render(h,la)}};function d0(i){let e=[],t=[],n=[],r=i,s=i-rr+1+nu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-rr?l=nu[o-i+rr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,x=3,g=2,f=1,_=new Float32Array(x*m*d),M=new Float32Array(g*m*d),v=new Float32Array(f*m*d);for(let T=0;T<d;T++){let A=T%3*2/3-1,I=T>2?0:-1,w=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];_.set(w,x*m*T),M.set(p,g*m*T);let b=[T,T,T,T,T,T];v.set(b,f*m*T)}let R=new At;R.setAttribute("position",new pt(_,x)),R.setAttribute("uv",new pt(M,g)),R.setAttribute("faceIndex",new pt(v,f)),e.push(R),r>rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function su(i,e,t){let n=new $t(i,e,t);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function f0(i,e,t){let n=new Float32Array(Ii),r=new C(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uc(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ou(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function au(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

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
	`}function p0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ca||l===Pa,u=l===dr||l===fr;if(c||u){let h=e.get(a),p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new vr(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new vr(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function m0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Wr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function g0(i,e,t,n){let r={},s=new WeakMap;function o(h){let p=h.target;p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);for(let m in p.morphAttributes){let x=p.morphAttributes[m];for(let g=0,f=x.length;g<f;g++)e.remove(x[g])}p.removeEventListener("dispose",o),delete r[p.id];let d=s.get(p);d&&(e.remove(d),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(h){let p=h.attributes;for(let m in p)e.update(p[m],i.ARRAY_BUFFER);let d=h.morphAttributes;for(let m in d){let x=d[m];for(let g=0,f=x.length;g<f;g++)e.update(x[g],i.ARRAY_BUFFER)}}function c(h){let p=[],d=h.index,m=h.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let M=0,v=_.length;M<v;M+=3){let R=_[M+0],T=_[M+1],A=_[M+2];p.push(R,T,T,A,A,R)}}else if(m!==void 0){let _=m.array;x=m.version;for(let M=0,v=_.length/3-1;M<v;M+=3){let R=M+0,T=M+1,A=M+2;p.push(R,T,T,A,A,R)}}else return;let g=new(eh(p)?ro:io)(p,1);g.version=x;let f=s.get(h);f&&e.remove(f),s.set(h,g)}function u(h){let p=s.get(h);if(p){let d=h.index;d!==null&&p.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function x0(i,e,t){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,d){i.drawElements(n,d,s,p*o),t.update(d,n,1)}function c(p,d,m){m!==0&&(i.drawElementsInstanced(n,d,s,p*o,m),t.update(d,n,m))}function u(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,p,0,m);let g=0;for(let f=0;f<m;f++)g+=d[f];t.update(g,n,1)}function h(p,d,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<p.length;f++)c(p[f]/o,d[f],x[f]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,p,0,x,0,m);let f=0;for(let _=0;_<m;_++)f+=d[_]*x[_];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function v0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function _0(i,e,t){let n=new WeakMap,r=new lt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,p=n.get(a);if(p===void 0||p.count!==h){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*R*4*h),A=new no(T,v,R,h);A.type=On,A.needsUpdate=!0;let I=M*4;for(let b=0;b<h;b++){let P=g[b],z=f[b],F=_[b],V=v*R*4*b;for(let X=0;X<P.count;X++){let k=X*I;d===!0&&(r.fromBufferAttribute(P,X),T[V+k+0]=r.x,T[V+k+1]=r.y,T[V+k+2]=r.z,T[V+k+3]=0),m===!0&&(r.fromBufferAttribute(z,X),T[V+k+4]=r.x,T[V+k+5]=r.y,T[V+k+6]=r.z,T[V+k+7]=0),x===!0&&(r.fromBufferAttribute(F,X),T[V+k+8]=r.x,T[V+k+9]=r.y,T[V+k+10]=r.z,T[V+k+11]=F.itemSize===4?r.w:1)}}p={count:h,texture:A,size:new oe(v,R)},n.set(a,p),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function y0(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var ao=class extends sn{constructor(e,t,n,r,s,o,a,l,c,u=or){if(u!==or&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===or&&(n=Ni),n===void 0&&u===mr&&(n=pr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},rh=new sn,lu=new ao(1,1),sh=new no,oh=new ll,ah=new oo,cu=[],uu=[],hu=new Float32Array(16),du=new Float32Array(9),fu=new Float32Array(4);function Tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=cu[r];if(s===void 0&&(s=new Float32Array(r),cu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Eo(i,e){let t=uu[e];t===void 0&&(t=new Int32Array(e),uu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function M0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function b0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function S0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function w0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function E0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;fu.set(n),i.uniformMatrix2fv(this.addr,!1,fu),Bt(t,n)}}function T0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;du.set(n),i.uniformMatrix3fv(this.addr,!1,du),Bt(t,n)}}function A0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;hu.set(n),i.uniformMatrix4fv(this.addr,!1,hu),Bt(t,n)}}function R0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function C0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function I0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function L0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function D0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function U0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function N0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function F0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(lu.compareFunction=ju,s=lu):s=rh,t.setTexture2D(e||s,r)}function O0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||oh,r)}function B0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ah,r)}function z0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||sh,r)}function k0(i){switch(i){case 5126:return M0;case 35664:return b0;case 35665:return S0;case 35666:return w0;case 35674:return E0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return I0;case 5125:return L0;case 36294:return D0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}function H0(i,e){i.uniform1fv(this.addr,e)}function V0(i,e){let t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function G0(i,e){let t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function W0(i,e){let t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function X0(i,e){let t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function q0(i,e){let t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Y0(i,e){let t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Z0(i,e){i.uniform1iv(this.addr,e)}function $0(i,e){i.uniform2iv(this.addr,e)}function J0(i,e){i.uniform3iv(this.addr,e)}function K0(i,e){i.uniform4iv(this.addr,e)}function Q0(i,e){i.uniform1uiv(this.addr,e)}function j0(i,e){i.uniform2uiv(this.addr,e)}function eg(i,e){i.uniform3uiv(this.addr,e)}function tg(i,e){i.uniform4uiv(this.addr,e)}function ng(i,e,t){let n=this.cache,r=e.length,s=Eo(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||rh,s[o])}function ig(i,e,t){let n=this.cache,r=e.length,s=Eo(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||oh,s[o])}function rg(i,e,t){let n=this.cache,r=e.length,s=Eo(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ah,s[o])}function sg(i,e,t){let n=this.cache,r=e.length,s=Eo(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||sh,s[o])}function og(i){switch(i){case 5126:return H0;case 35664:return V0;case 35665:return G0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return Z0;case 35667:case 35671:return $0;case 35668:case 35672:return J0;case 35669:case 35673:return K0;case 5125:return Q0;case 36294:return j0;case 36295:return eg;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return sg}}var hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=k0(t.type)}},dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=og(t.type)}},fl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},fa=/(\w+)(\])?(\[|\.)?/g;function pu(i,e){i.seq.push(e),i.map[e.id]=e}function ag(i,e,t){let n=i.name,r=n.length;for(fa.lastIndex=0;;){let s=fa.exec(n),o=fa.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){pu(t,c===void 0?new hl(a,i,e):new dl(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new fl(a),pu(t,h)),t=h}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ag(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function mu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var lg=37297,cg=0;function ug(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var gu=new nt;function hg(i){dt._getMatrix(gu,dt.workingColorSpace,i);let e=`mat3( ${gu.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case wo:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ug(i.getShaderSource(e),o)}else return r}function dg(i,e){let t=hg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fg(i,e){let t;switch(e){case Zl:t="Linear";break;case $l:t="Reinhard";break;case Jl:t="Cineon";break;case hs:t="ACESFilmic";break;case Kl:t="AgX";break;case Ql:t="Neutral";break;case Pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fs=new C;function pg(){dt.getLuminanceCoefficients(Fs);let i=Fs.x.toFixed(4),e=Fs.y.toFixed(4),t=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function gg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xr(i){return i!==""}function vu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _u(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(i){return i.replace(vg,yg)}var _g=new Map;function yg(i,e){let t=st[e];if(t===void 0){let n=_g.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pl(t)}var Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(i){return i.replace(Mg,bg)}function bg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Sg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function wg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case fr:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Eg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fr&&(e="ENVMAP_MODE_REFRACTION"),e}function Tg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yl:e="ENVMAP_BLENDING_MULTIPLY";break;case Rd:e="ENVMAP_BLENDING_MIX";break;case Cd:e="ENVMAP_BLENDING_ADD";break}return e}function Ag(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Rg(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Sg(t),c=wg(t),u=Eg(t),h=Tg(t),p=Ag(t),d=mg(t),m=gg(s),x=r.createProgram(),g,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Xr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Xr).join(`
`),f.length>0&&(f+=`
`)):(g=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),f=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?st.tonemapping_pars_fragment:"",t.toneMapping!==xn?fg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,dg("linearToOutputTexel",t.outputColorSpace),pg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),o=pl(o),o=vu(o,t),o=_u(o,t),a=pl(a),a=vu(a,t),a=_u(a,t),o=yu(o),a=yu(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=_+g+o,v=_+f+a,R=mu(r,r.VERTEX_SHADER,M),T=mu(r,r.FRAGMENT_SHADER,v);r.attachShader(x,R),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let z=r.getProgramInfoLog(x).trim(),F=r.getShaderInfoLog(R).trim(),V=r.getShaderInfoLog(T).trim(),X=!0,k=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,R,T);else{let j=xu(r,R,"vertex"),W=xu(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+j+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||V==="")&&(k=!1);k&&(P.diagnostics={runnable:X,programLog:z,vertexShader:{log:F,prefix:g},fragmentShader:{log:V,prefix:f}})}r.deleteShader(R),r.deleteShader(T),I=new cr(r,x),w=xg(r,x)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,lg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var Cg=0,ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gl(e),t.set(e,n)),n}},gl=class{constructor(e){this.id=Cg++,this.code=e,this.usedTimes=0}};function Pg(i,e,t,n,r,s,o){let a=new Qr,l=new ml,c=new Set,u=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures,d=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,P,z,F){let V=z.fog,X=F.geometry,k=w.isMeshStandardMaterial?z.environment:null,j=(w.isMeshStandardMaterial?t:e).get(w.envMap||k),W=j&&j.mapping===So?j.image.height:null,re=m[w.type];w.precision!==null&&(d=r.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,me=ue!==void 0?ue.length:0,Ie=0;X.morphAttributes.position!==void 0&&(Ie=1),X.morphAttributes.normal!==void 0&&(Ie=2),X.morphAttributes.color!==void 0&&(Ie=3);let qe,q,ee,ge;if(re){let G=Nn[re];qe=G.vertexShader,q=G.fragmentShader}else qe=w.vertexShader,q=w.fragmentShader,l.update(w),ee=l.getVertexShaderID(w),ge=l.getFragmentShaderID(w);let se=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),we=F.isInstancedMesh===!0,He=F.isBatchedMesh===!0,ct=!!w.map,Be=!!w.matcap,Ye=!!j,U=!!w.aoMap,St=!!w.lightMap,Fe=!!w.bumpMap,Te=!!w.normalMap,ve=!!w.displacementMap,ke=!!w.emissiveMap,Ee=!!w.metalnessMap,E=!!w.roughnessMap,y=w.anisotropy>0,O=w.clearcoat>0,$=w.dispersion>0,Q=w.iridescence>0,Z=w.sheen>0,Me=w.transmission>0,K=y&&!!w.anisotropyMap,te=O&&!!w.clearcoatMap,Ae=O&&!!w.clearcoatNormalMap,ie=O&&!!w.clearcoatRoughnessMap,ae=Q&&!!w.iridescenceMap,Re=Q&&!!w.iridescenceThicknessMap,_e=Z&&!!w.sheenColorMap,pe=Z&&!!w.sheenRoughnessMap,We=!!w.specularMap,ze=!!w.specularColorMap,ut=!!w.specularIntensityMap,L=Me&&!!w.transmissionMap,le=Me&&!!w.thicknessMap,Y=!!w.gradientMap,J=!!w.alphaMap,de=w.alphaTest>0,fe=!!w.alphaHash,ne=!!w.extensions,be=xn;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(be=i.toneMapping);let et={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:qe,fragmentShader:q,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:He,batchingColor:He&&F._colorsTexture!==null,instancing:we,instancingColor:we&&F.instanceColor!==null,instancingMorph:we&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Sr,alphaToCoverage:!!w.alphaToCoverage,map:ct,matcap:Be,envMap:Ye,envMapMode:Ye&&j.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:St,bumpMap:Fe,normalMap:Te,displacementMap:p&&ve,emissiveMap:ke,normalMapObjectSpace:Te&&w.normalMapType===Dd,normalMapTangentSpace:Te&&w.normalMapType===ac,metalnessMap:Ee,roughnessMap:E,anisotropy:y,anisotropyMap:K,clearcoat:O,clearcoatMap:te,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ie,dispersion:$,iridescence:Q,iridescenceMap:ae,iridescenceThicknessMap:Re,sheen:Z,sheenColorMap:_e,sheenRoughnessMap:pe,specularMap:We,specularColorMap:ze,specularIntensityMap:ut,transmission:Me,transmissionMap:L,thicknessMap:le,gradientMap:Y,opaque:w.transparent===!1&&w.blending===sr&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:fe,combine:w.combine,mapUv:ct&&x(w.map.channel),aoMapUv:U&&x(w.aoMap.channel),lightMapUv:St&&x(w.lightMap.channel),bumpMapUv:Fe&&x(w.bumpMap.channel),normalMapUv:Te&&x(w.normalMap.channel),displacementMapUv:ve&&x(w.displacementMap.channel),emissiveMapUv:ke&&x(w.emissiveMap.channel),metalnessMapUv:Ee&&x(w.metalnessMap.channel),roughnessMapUv:E&&x(w.roughnessMap.channel),anisotropyMapUv:K&&x(w.anisotropyMap.channel),clearcoatMapUv:te&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:pe&&x(w.sheenRoughnessMap.channel),specularMapUv:We&&x(w.specularMap.channel),specularColorMapUv:ze&&x(w.specularColorMap.channel),specularIntensityMapUv:ut&&x(w.specularIntensityMap.channel),transmissionMapUv:L&&x(w.transmissionMap.channel),thicknessMapUv:le&&x(w.thicknessMap.channel),alphaMapUv:J&&x(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Te||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(ct||J),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Se,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:ct&&w.map.isVideoTexture===!0&&dt.getTransfer(w.map.colorSpace)===Mt,decodeVideoTextureEmissive:ke&&w.emissiveMap.isVideoTexture===!0&&dt.getTransfer(w.emissiveMap.colorSpace)===Mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===rn,flipSided:w.side===Dt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ne&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&w.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function f(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)b.push(P),b.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(_(b,w),M(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function _(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function M(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let b=m[w.type],P;if(b){let z=Nn[b];P=cc.clone(z.uniforms)}else P=w.uniforms;return P}function R(w,b){let P;for(let z=0,F=u.length;z<F;z++){let V=u[z];if(V.cacheKey===b){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Rg(i,b,w,s),u.push(P)),P}function T(w){if(--w.usedTimes===0){let b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:I}}function Ig(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Lg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Su(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,p,d,m,x,g){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},i[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=m,f.renderOrder=h.renderOrder,f.z=x,f.group=g),e++,f}function a(h,p,d,m,x,g){let f=o(h,p,d,m,x,g);d.transmission>0?n.push(f):d.transparent===!0?r.push(f):t.push(f)}function l(h,p,d,m,x,g){let f=o(h,p,d,m,x,g);d.transmission>0?n.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,p){t.length>1&&t.sort(h||Lg),n.length>1&&n.sort(p||bu),r.length>1&&r.sort(p||bu)}function u(){for(let h=e,p=i.length;h<p;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Dg(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Su,i.set(n,[o])):r>=s.length?(o=new Su,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ug(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Pe};break;case"SpotLight":t={position:new C,direction:new C,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Ng(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Fg=0;function Og(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bg(i){let e=new Ug,t=Ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let r=new C,s=new bt,o=new bt;function a(c){let u=0,h=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,m=0,x=0,g=0,f=0,_=0,M=0,v=0,R=0,T=0,A=0;c.sort(Og);for(let w=0,b=c.length;w<b;w++){let P=c[w],z=P.color,F=P.intensity,V=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=z.r*F,h+=z.g*F,p+=z.b*F;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],F);A++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,W=t.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=P.shadow.matrix,_++}n.directional[d]=k,d++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(z).multiplyScalar(F),k.distance=V,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[x]=k;let j=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,j.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[x]=j.matrix,P.castShadow){let W=t.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=X,v++}x++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(z).multiplyScalar(F),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=k,g++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let j=P.shadow,W=t.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=P.shadow.matrix,M++}n.point[m]=k,m++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(F),k.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[f]=k,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;let I=n.hash;(I.directionalLength!==d||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==g||I.hemiLength!==f||I.numDirectionalShadows!==_||I.numPointShadows!==M||I.numSpotShadows!==v||I.numSpotMaps!==R||I.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=d,I.pointLength=m,I.spotLength=x,I.rectAreaLength=g,I.hemiLength=f,I.numDirectionalShadows=_,I.numPointShadows=M,I.numSpotShadows=v,I.numSpotMaps=R,I.numLightProbes=A,n.version=Fg++)}function l(c,u){let h=0,p=0,d=0,m=0,x=0,g=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){let M=c[f];if(M.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),h++}else if(M.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),d++}else if(M.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),p++}else if(M.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function wu(i){let e=new Bg(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zg(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new wu(i),e.set(r,[a])):s>=o.length?(a=new wu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var es=class extends zn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xl=class extends zn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hg=`uniform sampler2D shadow_pass;
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
}`;function Vg(i,e,t){let n=new jr,r=new oe,s=new oe,o=new lt,a=new es({depthPacking:oc}),l=new xl,c={},u=t.maxTextureSize,h={[An]:Dt,[Dt]:An,[rn]:rn},p=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:kg,fragmentShader:Hg}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let m=new At;m.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ft(m,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vu;let f=this.type;this.render=function(T,A,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let w=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Bn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=f!==Kn&&this.type===Kn,V=f===Kn&&this.type!==Kn;for(let X=0,k=T.length;X<k;X++){let j=T[X],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let re=W.getFrameExtents();if(r.multiply(re),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,W.mapSize.y=s.y)),W.map===null||F===!0||V===!0){let me=this.type!==Kn?{minFilter:un,magFilter:un}:{};W.map!==null&&W.map.dispose(),W.map=new $t(r.x,r.y,me),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let ue=W.getViewportCount();for(let me=0;me<ue;me++){let Ie=W.getViewport(me);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),z.viewport(o),W.updateMatrices(j,me),n=W.getFrustum(),v(A,I,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Kn&&_(W,I),W.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(w,b,P)};function _(T,A){let I=e.update(x);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $t(r.x,r.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,p,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,d,x,null)}function M(T,A,I,w){let b=null,P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=I.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let z=b.uuid,F=A.uuid,V=c[z];V===void 0&&(V={},c[z]=V);let X=V[F];X===void 0&&(X=b.clone(),V[F]=X,A.addEventListener("dispose",R)),b=X}if(b.visible=A.visible,b.wireframe=A.wireframe,w===Kn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=i.properties.get(b);z.light=I}return b}function v(T,A,I,w,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let F=e.update(T),V=T.material;if(Array.isArray(V)){let X=F.groups;for(let k=0,j=X.length;k<j;k++){let W=X[k],re=V[W.materialIndex];if(re&&re.visible){let ue=M(T,re,w,b);T.onBeforeShadow(i,T,A,I,F,ue,W),i.renderBufferDirect(I,null,F,ue,T,W),T.onAfterShadow(i,T,A,I,F,ue,W)}}}else if(V.visible){let X=M(T,V,w,b);T.onBeforeShadow(i,T,A,I,F,X,null),i.renderBufferDirect(I,null,F,X,T,null),T.onAfterShadow(i,T,A,I,F,X,null)}}let z=T.children;for(let F=0,V=z.length;F<V;F++)v(z[F],A,I,w,b)}function R(T){T.target.removeEventListener("dispose",R);for(let I in c){let w=c[I],b=T.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var Gg={[ba]:Sa,[wa]:Aa,[Ea]:Ra,[hr]:Ta,[Sa]:ba,[Aa]:wa,[Ra]:Ea,[Ta]:hr};function Wg(i,e){function t(){let L=!1,le=new lt,Y=null,J=new lt(0,0,0,0);return{setMask:function(de){Y!==de&&!L&&(i.colorMask(de,de,de,de),Y=de)},setLocked:function(de){L=de},setClear:function(de,fe,ne,be,et){et===!0&&(de*=be,fe*=be,ne*=be),le.set(de,fe,ne,be),J.equals(le)===!1&&(i.clearColor(de,fe,ne,be),J.copy(le))},reset:function(){L=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,Y=null,J=null,de=null;return{setReversed:function(fe){if(le!==fe){let ne=e.get("EXT_clip_control");le?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);let be=de;de=null,this.setClear(be)}le=fe},getReversed:function(){return le},setTest:function(fe){fe?se(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(fe){Y!==fe&&!L&&(i.depthMask(fe),Y=fe)},setFunc:function(fe){if(le&&(fe=Gg[fe]),J!==fe){switch(fe){case ba:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case Ea:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=fe}},setLocked:function(fe){L=fe},setClear:function(fe){de!==fe&&(le&&(fe=1-fe),i.clearDepth(fe),de=fe)},reset:function(){L=!1,Y=null,J=null,de=null,le=!1}}}function r(){let L=!1,le=null,Y=null,J=null,de=null,fe=null,ne=null,be=null,et=null;return{setTest:function(G){L||(G?se(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(G){le!==G&&!L&&(i.stencilMask(G),le=G)},setFunc:function(G,Le,Ze){(Y!==G||J!==Le||de!==Ze)&&(i.stencilFunc(G,Le,Ze),Y=G,J=Le,de=Ze)},setOp:function(G,Le,Ze){(fe!==G||ne!==Le||be!==Ze)&&(i.stencilOp(G,Le,Ze),fe=G,ne=Le,be=Ze)},setLocked:function(G){L=G},setClear:function(G){et!==G&&(i.clearStencil(G),et=G)},reset:function(){L=!1,le=null,Y=null,J=null,de=null,fe=null,ne=null,be=null,et=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},p=new WeakMap,d=[],m=null,x=!1,g=null,f=null,_=null,M=null,v=null,R=null,T=null,A=new Pe(0,0,0),I=0,w=!1,b=null,P=null,z=null,F=null,V=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=j>=2);let re=null,ue={},me=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),qe=new lt().fromArray(me),q=new lt().fromArray(Ie);function ee(L,le,Y,J){let de=new Uint8Array(4),fe=i.createTexture();i.bindTexture(L,fe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<Y;ne++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(le+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return fe}let ge={};ge[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(hr),Fe(!1),Te(Tc),se(i.CULL_FACE),U(Bn);function se(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Se(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function we(L,le){return h[L]!==le?(i.bindFramebuffer(L,le),h[L]=le,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function He(L,le){let Y=d,J=!1;if(L){Y=p.get(le),Y===void 0&&(Y=[],p.set(le,Y));let de=L.textures;if(Y.length!==de.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,ne=de.length;fe<ne;fe++)Y[fe]=i.COLOR_ATTACHMENT0+fe;Y.length=de.length,J=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,J=!0);J&&i.drawBuffers(Y)}function ct(L){return m!==L?(i.useProgram(L),m=L,!0):!1}let Be={[jn]:i.FUNC_ADD,[dd]:i.FUNC_SUBTRACT,[fd]:i.FUNC_REVERSE_SUBTRACT};Be[pd]=i.MIN,Be[md]=i.MAX;let Ye={[gd]:i.ZERO,[bo]:i.ONE,[xd]:i.SRC_COLOR,[Ma]:i.SRC_ALPHA,[Sd]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[_d]:i.DST_ALPHA,[vd]:i.ONE_MINUS_SRC_COLOR,[ur]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[yd]:i.ONE_MINUS_DST_ALPHA,[wd]:i.CONSTANT_COLOR,[Ed]:i.ONE_MINUS_CONSTANT_COLOR,[Td]:i.CONSTANT_ALPHA,[Ad]:i.ONE_MINUS_CONSTANT_ALPHA};function U(L,le,Y,J,de,fe,ne,be,et,G){if(L===Bn){x===!0&&(Se(i.BLEND),x=!1);return}if(x===!1&&(se(i.BLEND),x=!0),L!==ql){if(L!==g||G!==w){if((f!==jn||v!==jn)&&(i.blendEquation(i.FUNC_ADD),f=jn,v=jn),G)switch(L){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,M=null,R=null,T=null,A.set(0,0,0),I=0,g=L,w=G}return}de=de||le,fe=fe||Y,ne=ne||J,(le!==f||de!==v)&&(i.blendEquationSeparate(Be[le],Be[de]),f=le,v=de),(Y!==_||J!==M||fe!==R||ne!==T)&&(i.blendFuncSeparate(Ye[Y],Ye[J],Ye[fe],Ye[ne]),_=Y,M=J,R=fe,T=ne),(be.equals(A)===!1||et!==I)&&(i.blendColor(be.r,be.g,be.b,et),A.copy(be),I=et),g=L,w=!1}function St(L,le){L.side===rn?Se(i.CULL_FACE):se(i.CULL_FACE);let Y=L.side===Dt;le&&(Y=!Y),Fe(Y),L.blending===sr&&L.transparent===!1?U(Bn):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let J=L.stencilWrite;a.setTest(J),J&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ke(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){b!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),b=L)}function Te(L){L!==ud?(se(i.CULL_FACE),L!==P&&(L===Tc?i.cullFace(i.BACK):L===hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),P=L}function ve(L){L!==z&&(k&&i.lineWidth(L),z=L)}function ke(L,le,Y){L?(se(i.POLYGON_OFFSET_FILL),(F!==le||V!==Y)&&(i.polygonOffset(le,Y),F=le,V=Y)):Se(i.POLYGON_OFFSET_FILL)}function Ee(L){L?se(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function E(L){L===void 0&&(L=i.TEXTURE0+X-1),re!==L&&(i.activeTexture(L),re=L)}function y(L,le,Y){Y===void 0&&(re===null?Y=i.TEXTURE0+X-1:Y=re);let J=ue[Y];J===void 0&&(J={type:void 0,texture:void 0},ue[Y]=J),(J.type!==L||J.texture!==le)&&(re!==Y&&(i.activeTexture(Y),re=Y),i.bindTexture(L,le||ge[L]),J.type=L,J.texture=le)}function O(){let L=ue[re];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(L){qe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),qe.copy(L))}function pe(L){q.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function We(L,le){let Y=c.get(le);Y===void 0&&(Y=new WeakMap,c.set(le,Y));let J=Y.get(L);J===void 0&&(J=i.getUniformBlockIndex(le,L.name),Y.set(L,J))}function ze(L,le){let J=c.get(le).get(L);l.get(le)!==J&&(i.uniformBlockBinding(le,J,L.__bindingPointIndex),l.set(le,J))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,ue={},h={},p=new WeakMap,d=[],m=null,x=!1,g=null,f=null,_=null,M=null,v=null,R=null,T=null,A=new Pe(0,0,0),I=0,w=!1,b=null,P=null,z=null,F=null,V=null,qe.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Se,bindFramebuffer:we,drawBuffers:He,useProgram:ct,setBlending:U,setMaterial:St,setFlipSided:Fe,setCullFace:Te,setLineWidth:ve,setPolygonOffset:ke,setScissorTest:Ee,activeTexture:E,bindTexture:y,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:ae,texImage3D:Re,updateUBOMapping:We,uniformBlockBinding:ze,texStorage2D:Ae,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:Me,compressedTexSubImage2D:K,compressedTexSubImage3D:te,scissor:_e,viewport:pe,reset:ut}}function Eu(i,e,t,n){let r=Xg(n);switch(t){case Yu:return i*e;case $u:return i*e;case Ju:return i*e*2;case nc:return i*e/r.components*r.byteLength;case ic:return i*e/r.components*r.byteLength;case Ku:return i*e*2/r.components*r.byteLength;case rc:return i*e*2/r.components*r.byteLength;case Zu:return i*e*3/r.components*r.byteLength;case Tn:return i*e*4/r.components*r.byteLength;case sc:return i*e*4/r.components*r.byteLength;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $s:case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ua:case Fa:return Math.max(i,16)*Math.max(e,8)/4;case Da:case Na:return Math.max(i,8)*Math.max(e,8)/2;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ks:case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qu:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case il:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xg(i){switch(i){case ni:case Wu:return{byteLength:1,components:1};case Jr:case Xu:case Hn:return{byteLength:2,components:1};case ec:case tc:return{byteLength:2,components:4};case Ni:case jl:case On:return{byteLength:4,components:1};case qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qg(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,h,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,y){return d?new OffscreenCanvas(E,y):eo("canvas")}function x(E,y,O){let $=1,Q=Ee(E);if((Q.width>O||Q.height>O)&&($=O/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Z=Math.floor($*Q.width),Me=Math.floor($*Q.height);h===void 0&&(h=m(Z,Me));let K=y?m(Z,Me):h;return K.width=Z,K.height=Me,K.getContext("2d").drawImage(E,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+Me+")."),K}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function g(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(E,y,O,$,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=y;if(y===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),y===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),y===i.RGBA){let Me=Q?wo:dt.getTransfer($);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=Me===Mt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(E,y){let O;return E?y===null||y===Ni||y===pr?O=i.DEPTH24_STENCIL8:y===On?O=i.DEPTH32F_STENCIL8:y===Jr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ni||y===pr?O=i.DEPTH_COMPONENT24:y===On?O=i.DEPTH_COMPONENT32F:y===Jr&&(O=i.DEPTH_COMPONENT16),O}function R(E,y){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==un&&E.minFilter!==Fn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function T(E){let y=E.target;y.removeEventListener("dispose",T),I(y),y.isVideoTexture&&u.delete(y)}function A(E){let y=E.target;y.removeEventListener("dispose",A),b(y)}function I(E){let y=n.get(E);if(y.__webglInit===void 0)return;let O=E.source,$=p.get(O);if($){let Q=$[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(E),Object.keys($).length===0&&p.delete(O)}n.remove(E)}function w(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let O=E.source,$=p.get(O);delete $[y.__cacheKey],o.memory.textures--}function b(E){let y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let Q=0;Q<y.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)i.deleteFramebuffer(y.__webglFramebuffer[$]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=E.textures;for(let $=0,Q=O.length;$<Q;$++){let Z=n.get(O[$]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(O[$])}n.remove(E)}let P=0;function z(){P=0}function F(){let E=P;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),P+=1,E}function V(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function X(E,y){let O=n.get(E);if(E.isVideoTexture&&ve(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){let $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,E,y);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function k(E,y){let O=n.get(E);if(E.version>0&&O.__version!==E.version){q(O,E,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function j(E,y){let O=n.get(E);if(E.version>0&&O.__version!==E.version){q(O,E,y);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function W(E,y){let O=n.get(E);if(E.version>0&&O.__version!==E.version){ee(O,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}let re={[Ia]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},ue={[un]:i.NEAREST,[Id]:i.NEAREST_MIPMAP_NEAREST,[gs]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[ko]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},me={[Ud]:i.NEVER,[kd]:i.ALWAYS,[Nd]:i.LESS,[ju]:i.LEQUAL,[Fd]:i.EQUAL,[zd]:i.GEQUAL,[Od]:i.GREATER,[Bd]:i.NOTEQUAL};function Ie(E,y){if(y.type===On&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Fn||y.magFilter===ko||y.magFilter===gs||y.magFilter===Di||y.minFilter===Fn||y.minFilter===ko||y.minFilter===gs||y.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,re[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,re[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,re[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ue[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ue[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===un||y.minFilter!==gs&&y.minFilter!==Di||y.type===On&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function qe(E,y){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",T));let $=y.source,Q=p.get($);Q===void 0&&(Q={},p.set($,Q));let Z=V(y);if(Z!==E.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[Z].usedTimes++;let Me=Q[E.__cacheKey];Me!==void 0&&(Q[E.__cacheKey].usedTimes--,Me.usedTimes===0&&w(y)),E.__cacheKey=Z,E.__webglTexture=Q[Z].texture}return O}function q(E,y,O){let $=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=i.TEXTURE_3D);let Q=qe(E,y),Z=y.source;t.bindTexture($,E.__webglTexture,i.TEXTURE0+O);let Me=n.get(Z);if(Z.version!==Me.__version||Q===!0){t.activeTexture(i.TEXTURE0+O);let K=dt.getPrimaries(dt.workingColorSpace),te=y.colorSpace===mi?null:dt.getPrimaries(y.colorSpace),Ae=y.colorSpace===mi||K===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ie=x(y.image,!1,r.maxTextureSize);ie=ke(y,ie);let ae=s.convert(y.format,y.colorSpace),Re=s.convert(y.type),_e=M(y.internalFormat,ae,Re,y.colorSpace,y.isVideoTexture);Ie($,y);let pe,We=y.mipmaps,ze=y.isVideoTexture!==!0,ut=Me.__version===void 0||Q===!0,L=Z.dataReady,le=R(y,ie);if(y.isDepthTexture)_e=v(y.format===mr,y.type),ut&&(ze?t.texStorage2D(i.TEXTURE_2D,1,_e,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,_e,ie.width,ie.height,0,ae,Re,null));else if(y.isDataTexture)if(We.length>0){ze&&ut&&t.texStorage2D(i.TEXTURE_2D,le,_e,We[0].width,We[0].height);for(let Y=0,J=We.length;Y<J;Y++)pe=We[Y],ze?L&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,pe.width,pe.height,ae,Re,pe.data):t.texImage2D(i.TEXTURE_2D,Y,_e,pe.width,pe.height,0,ae,Re,pe.data);y.generateMipmaps=!1}else ze?(ut&&t.texStorage2D(i.TEXTURE_2D,le,_e,ie.width,ie.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,ae,Re,ie.data)):t.texImage2D(i.TEXTURE_2D,0,_e,ie.width,ie.height,0,ae,Re,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,_e,We[0].width,We[0].height,ie.depth);for(let Y=0,J=We.length;Y<J;Y++)if(pe=We[Y],y.format!==Tn)if(ae!==null)if(ze){if(L)if(y.layerUpdates.size>0){let de=Eu(pe.width,pe.height,y.format,y.type);for(let fe of y.layerUpdates){let ne=pe.data.subarray(fe*de/pe.data.BYTES_PER_ELEMENT,(fe+1)*de/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,fe,pe.width,pe.height,1,ae,ne)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,pe.width,pe.height,ie.depth,ae,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,_e,pe.width,pe.height,ie.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,pe.width,pe.height,ie.depth,ae,Re,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,_e,pe.width,pe.height,ie.depth,0,ae,Re,pe.data)}else{ze&&ut&&t.texStorage2D(i.TEXTURE_2D,le,_e,We[0].width,We[0].height);for(let Y=0,J=We.length;Y<J;Y++)pe=We[Y],y.format!==Tn?ae!==null?ze?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,pe.width,pe.height,ae,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?L&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,pe.width,pe.height,ae,Re,pe.data):t.texImage2D(i.TEXTURE_2D,Y,_e,pe.width,pe.height,0,ae,Re,pe.data)}else if(y.isDataArrayTexture)if(ze){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,_e,ie.width,ie.height,ie.depth),L)if(y.layerUpdates.size>0){let Y=Eu(ie.width,ie.height,y.format,y.type);for(let J of y.layerUpdates){let de=ie.data.subarray(J*Y/ie.data.BYTES_PER_ELEMENT,(J+1)*Y/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,ae,Re,de)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ae,Re,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,ie.width,ie.height,ie.depth,0,ae,Re,ie.data);else if(y.isData3DTexture)ze?(ut&&t.texStorage3D(i.TEXTURE_3D,le,_e,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ae,Re,ie.data)):t.texImage3D(i.TEXTURE_3D,0,_e,ie.width,ie.height,ie.depth,0,ae,Re,ie.data);else if(y.isFramebufferTexture){if(ut)if(ze)t.texStorage2D(i.TEXTURE_2D,le,_e,ie.width,ie.height);else{let Y=ie.width,J=ie.height;for(let de=0;de<le;de++)t.texImage2D(i.TEXTURE_2D,de,_e,Y,J,0,ae,Re,null),Y>>=1,J>>=1}}else if(We.length>0){if(ze&&ut){let Y=Ee(We[0]);t.texStorage2D(i.TEXTURE_2D,le,_e,Y.width,Y.height)}for(let Y=0,J=We.length;Y<J;Y++)pe=We[Y],ze?L&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ae,Re,pe):t.texImage2D(i.TEXTURE_2D,Y,_e,ae,Re,pe);y.generateMipmaps=!1}else if(ze){if(ut){let Y=Ee(ie);t.texStorage2D(i.TEXTURE_2D,le,_e,Y.width,Y.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,Re,ie)}else t.texImage2D(i.TEXTURE_2D,0,_e,ae,Re,ie);g(y)&&f($),Me.__version=Z.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ee(E,y,O){if(y.image.length!==6)return;let $=qe(E,y),Q=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let Z=n.get(Q);if(Q.version!==Z.__version||$===!0){t.activeTexture(i.TEXTURE0+O);let Me=dt.getPrimaries(dt.workingColorSpace),K=y.colorSpace===mi?null:dt.getPrimaries(y.colorSpace),te=y.colorSpace===mi||Me===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Ae=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,ae=[];for(let J=0;J<6;J++)!Ae&&!ie?ae[J]=x(y.image[J],!0,r.maxCubemapSize):ae[J]=ie?y.image[J].image:y.image[J],ae[J]=ke(y,ae[J]);let Re=ae[0],_e=s.convert(y.format,y.colorSpace),pe=s.convert(y.type),We=M(y.internalFormat,_e,pe,y.colorSpace),ze=y.isVideoTexture!==!0,ut=Z.__version===void 0||$===!0,L=Q.dataReady,le=R(y,Re);Ie(i.TEXTURE_CUBE_MAP,y);let Y;if(Ae){ze&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,We,Re.width,Re.height);for(let J=0;J<6;J++){Y=ae[J].mipmaps;for(let de=0;de<Y.length;de++){let fe=Y[de];y.format!==Tn?_e!==null?ze?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,fe.width,fe.height,_e,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,We,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,fe.width,fe.height,_e,pe,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,We,fe.width,fe.height,0,_e,pe,fe.data)}}}else{if(Y=y.mipmaps,ze&&ut){Y.length>0&&le++;let J=Ee(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,We,J.width,J.height)}for(let J=0;J<6;J++)if(ie){ze?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ae[J].width,ae[J].height,_e,pe,ae[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,ae[J].width,ae[J].height,0,_e,pe,ae[J].data);for(let de=0;de<Y.length;de++){let ne=Y[de].image[J].image;ze?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,ne.width,ne.height,_e,pe,ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,We,ne.width,ne.height,0,_e,pe,ne.data)}}else{ze?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e,pe,ae[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,_e,pe,ae[J]);for(let de=0;de<Y.length;de++){let fe=Y[de];ze?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,_e,pe,fe.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,We,_e,pe,fe.image[J])}}}g(y)&&f(i.TEXTURE_CUBE_MAP),Z.__version=Q.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ge(E,y,O,$,Q,Z){let Me=s.convert(O.format,O.colorSpace),K=s.convert(O.type),te=M(O.internalFormat,Me,K,O.colorSpace),Ae=n.get(y),ie=n.get(O);if(ie.__renderTarget=y,!Ae.__hasExternalTextures){let ae=Math.max(1,y.width>>Z),Re=Math.max(1,y.height>>Z);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,Z,te,ae,Re,y.depth,0,Me,K,null):t.texImage2D(Q,Z,te,ae,Re,0,Me,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Te(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,ie.__webglTexture,0,Fe(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,ie.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(E,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let $=y.depthTexture,Q=$&&$.isDepthTexture?$.type:null,Z=v(y.stencilBuffer,Q),Me=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=Fe(y);Te(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,Z,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,E)}else{let $=y.textures;for(let Q=0;Q<$.length;Q++){let Z=$[Q],Me=s.convert(Z.format,Z.colorSpace),K=s.convert(Z.type),te=M(Z.internalFormat,Me,K,Z.colorSpace),Ae=Fe(y);O&&Te(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,te,y.width,y.height):Te(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,te,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,te,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);let Q=$.__webglTexture,Z=Fe(y);if(y.depthTexture.format===or)Te(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(y.depthTexture.format===mr)Te(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function we(E){let y=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let $=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=$}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Se(y.__webglFramebuffer,E)}else if(O){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=i.createRenderbuffer(),se(y.__webglDepthbuffer[$],E,!1);else{let Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),se(y.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(E,y,O){let $=n.get(E);y!==void 0&&ge($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&we(E)}function ct(E){let y=E.texture,O=n.get(E),$=n.get(y);E.addEventListener("dispose",A);let Q=E.textures,Z=E.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=y.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let te=0;te<y.mipmaps.length;te++)O.__webglFramebuffer[K][te]=i.createFramebuffer()}else O.__webglFramebuffer[K]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)O.__webglFramebuffer[K]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Me)for(let K=0,te=Q.length;K<te;K++){let Ae=n.get(Q[K]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Te(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<Q.length;K++){let te=Q[K];O.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[K]);let Ae=s.convert(te.format,te.colorSpace),ie=s.convert(te.type),ae=M(te.internalFormat,Ae,ie,te.colorSpace,E.isXRRenderTarget===!0),Re=Fe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ae,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,O.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),se(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)ge(O.__webglFramebuffer[K][te],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,te);else ge(O.__webglFramebuffer[K],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);g(y)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let K=0,te=Q.length;K<te;K++){let Ae=Q[K],ie=n.get(Ae);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Ie(i.TEXTURE_2D,Ae),ge(O.__webglFramebuffer,E,Ae,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,0),g(Ae)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,$.__webglTexture),Ie(K,y),y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)ge(O.__webglFramebuffer[te],E,y,i.COLOR_ATTACHMENT0,K,te);else ge(O.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,K,0);g(y)&&f(K),t.unbindTexture()}E.depthBuffer&&we(E)}function Be(E){let y=E.textures;for(let O=0,$=y.length;O<$;O++){let Q=y[O];if(g(Q)){let Z=_(E),Me=n.get(Q).__webglTexture;t.bindTexture(Z,Me),f(Z),t.unbindTexture()}}}let Ye=[],U=[];function St(E){if(E.samples>0){if(Te(E)===!1){let y=E.textures,O=E.width,$=E.height,Q=i.COLOR_BUFFER_BIT,Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(E),K=y.length>1;if(K)for(let te=0;te<y.length;te++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let te=0;te<y.length;te++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[te]);let Ae=n.get(y[te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,Q,i.NEAREST),l===!0&&(Ye.length=0,U.length=0,Ye.push(i.COLOR_ATTACHMENT0+te),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ye.push(Z),U.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let te=0;te<y.length;te++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,Me.__webglColorRenderbuffer[te]);let Ae=n.get(y[te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,Ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Fe(E){return Math.min(r.maxSamples,E.samples)}function Te(E){let y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ve(E){let y=o.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function ke(E,y){let O=E.colorSpace,$=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Sr&&O!==mi&&(dt.getTransfer(O)===Mt?($!==Tn||Q!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Ee(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=He,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Te}function Yg(i,e){function t(n,r=mi){let s,o=dt.getTransfer(r);if(n===ni)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wu)return i.BYTE;if(n===Xu)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===jl)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===Yu)return i.ALPHA;if(n===Zu)return i.RGB;if(n===Tn)return i.RGBA;if(n===$u)return i.LUMINANCE;if(n===Ju)return i.LUMINANCE_ALPHA;if(n===or)return i.DEPTH_COMPONENT;if(n===mr)return i.DEPTH_STENCIL;if(n===nc)return i.RED;if(n===ic)return i.RED_INTEGER;if(n===Ku)return i.RG;if(n===rc)return i.RG_INTEGER;if(n===sc)return i.RGBA_INTEGER;if(n===Ys||n===Zs||n===$s||n===Js)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ys)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ys)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ua||n===Na||n===Fa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Da)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===za)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oa||n===Ba)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===za)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===Qa||n===ja)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ka)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ja)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ka)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ks||n===el||n===tl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ks)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qu||n===nl||n===il||n===rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ks)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var vl=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},gt=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zg={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),f=this._getHandJoint(c,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&p>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$g=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jg=`
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

}`,_l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new sn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:$g,fragmentShader:Jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yl=class extends xi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,p=null,d=null,m=null,x=new _l,g=t.getContextAttributes(),f=null,_=null,M=[],v=[],R=new oe,T=null,A=new Zt;A.viewport=new lt;let I=new Zt;I.viewport=new lt;let w=[A,I],b=new vl,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=M[q];return ee===void 0&&(ee=new Yr,M[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=M[q];return ee===void 0&&(ee=new Yr,M[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=M[q];return ee===void 0&&(ee=new Yr,M[q]=ee),ee.getHandSpace()};function F(q){let ee=v.indexOf(q.inputSource);if(ee===-1)return;let ge=M[ee];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||o),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",X);for(let q=0;q<M.length;q++){let ee=v[q];ee!==null&&(v[q]=null,M[q].disconnect(ee))}P=null,z=null,x.reset(),e.setRenderTarget(f),d=null,p=null,h=null,r=null,_=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){let ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new $t(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ee=null,ge=null,se=null;g.depth&&(se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=g.stencil?mr:or,ge=g.stencil?pr:Ni);let Se={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(r,t),p=h.createProjectionLayer(Se),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),_=new $t(p.textureWidth,p.textureHeight,{format:Tn,type:ni,depthTexture:new ao(p.textureWidth,p.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(q){for(let ee=0;ee<q.removed.length;ee++){let ge=q.removed[ee],se=v.indexOf(ge);se>=0&&(v[se]=null,M[se].disconnect(ge))}for(let ee=0;ee<q.added.length;ee++){let ge=q.added[ee],se=v.indexOf(ge);if(se===-1){for(let we=0;we<M.length;we++)if(we>=v.length){v.push(ge),se=we;break}else if(v[we]===null){v[we]=ge,se=we;break}if(se===-1)break}let Se=M[se];Se&&Se.connect(ge)}}let k=new C,j=new C;function W(q,ee,ge){k.setFromMatrixPosition(ee.matrixWorld),j.setFromMatrixPosition(ge.matrixWorld);let se=k.distanceTo(j),Se=ee.projectionMatrix.elements,we=ge.projectionMatrix.elements,He=Se[14]/(Se[10]-1),ct=Se[14]/(Se[10]+1),Be=(Se[9]+1)/Se[5],Ye=(Se[9]-1)/Se[5],U=(Se[8]-1)/Se[0],St=(we[8]+1)/we[0],Fe=He*U,Te=He*St,ve=se/(-U+St),ke=ve*-U;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ke),q.translateZ(ve),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Ee=He+ve,E=ct+ve,y=Fe-ke,O=Te+(se-ke),$=Be*ct/E*Ee,Q=Ye*ct/E*Ee;q.projectionMatrix.makePerspective(y,O,$,Q,Ee,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function re(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ee=q.near,ge=q.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(ge=x.depthFar)),b.near=I.near=A.near=ee,b.far=I.far=A.far=ge,(P!==b.near||z!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,z=b.far),A.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,b.layers.mask=A.layers.mask|I.layers.mask;let se=q.parent,Se=b.cameras;re(b,se);for(let we=0;we<Se.length;we++)re(Se[we],se);Se.length===2?W(b,A,I):b.projectionMatrix.copy(A.projectionMatrix),ue(q,b,se)};function ue(q,ee,ge){ge===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Kr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let me=null;function Ie(q,ee){if(u=ee.getViewerPose(c||o),m=ee,u!==null){let ge=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let se=!1;ge.length!==b.cameras.length&&(b.cameras.length=0,se=!0);for(let we=0;we<ge.length;we++){let He=ge[we],ct=null;if(d!==null)ct=d.getViewport(He);else{let Ye=h.getViewSubImage(p,He);ct=Ye.viewport,we===0&&(e.setRenderTargetTextures(_,Ye.colorTexture,p.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(_))}let Be=w[we];Be===void 0&&(Be=new Zt,Be.layers.enable(we),Be.viewport=new lt,w[we]=Be),Be.matrix.fromArray(He.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(He.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(ct.x,ct.y,ct.width,ct.height),we===0&&(b.matrix.copy(Be.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),se===!0&&b.cameras.push(Be)}let Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")){let we=h.getDepthInformation(ge[0]);we&&we.isValid&&we.texture&&x.init(e,we,r.renderState)}}for(let ge=0;ge<M.length;ge++){let se=v[ge],Se=M[ge];se!==null&&Se!==void 0&&Se.update(se,ee,c||o)}me&&me(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}let qe=new ih;qe.setAnimationLoop(Ie),this.setAnimationLoop=function(q){me=q},this.dispose=function(){}}},Ci=new Rn,Kg=new bt;function Qg(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,nh(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,_,M,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f)):f.isMeshStandardMaterial?(s(g,f),p(g,f),f.isMeshPhysicalMaterial&&d(g,f,v)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),x(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,_,M):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Dt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Dt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let _=e.get(f),M=_.envMap,v=_.envMapRotation;M&&(g.envMap.value=M,Ci.copy(v),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),g.envMapRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(Ci)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,M){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=M*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function p(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,_){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){let _=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jg(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let v=M.program;n.uniformBlockBinding(_,v)}function c(_,M){let v=r[_.id];v===void 0&&(m(_),v=u(_),r[_.id]=v,_.addEventListener("dispose",g));let R=M.program;n.updateUBOMapping(_,R);let T=e.render.frame;s[_.id]!==T&&(p(_),s[_.id]=T)}function u(_){let M=h();_.__bindingPointIndex=M;let v=i.createBuffer(),R=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){let M=r[_.id],v=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,A=v.length;T<A;T++){let I=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,b=I.length;w<b;w++){let P=I[w];if(d(P,T,w,R)===!0){let z=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],V=0;for(let X=0;X<F.length;X++){let k=F[X],j=x(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,z+V,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,M,v,R){let T=_.value,A=M+"_"+v;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let I=R[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(_){let M=_.uniforms,v=0,R=16;for(let A=0,I=M.length;A<I;A++){let w=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,P=w.length;b<P;b++){let z=w[b],F=Array.isArray(z.value)?z.value:[z.value];for(let V=0,X=F.length;V<X;V++){let k=F[V],j=x(k),W=v%R,re=W%j.boundary,ue=W+re;v+=re,ue!==0&&R-ue<j.storage&&(v+=R-ue),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=j.storage}}}let T=v%R;return T>0&&(v+=R-T),_.__size=v,_.__cache={},this}function x(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function g(_){let M=_.target;M.removeEventListener("dispose",g);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(let _ in r)i.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var _i=class{constructor(e={}){let{canvas:t=rf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,f=null,_=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=xn,this.toneMappingExposure=1;let v=this,R=!1,T=0,A=0,I=null,w=-1,b=null,P=new lt,z=new lt,F=null,V=new Pe(0),X=0,k=t.width,j=t.height,W=1,re=null,ue=null,me=new lt(0,0,k,j),Ie=new lt(0,0,k,j),qe=!1,q=new jr,ee=!1,ge=!1,se=new bt,Se=new bt,we=new C,He=new lt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function Ye(){return I===null?W:1}let U=n;function St(S,D){return t.getContext(S,D)}try{let S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",fe,!1),U===null){let D="webgl2";if(U=St(D,S),U===null)throw St(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Fe,Te,ve,ke,Ee,E,y,O,$,Q,Z,Me,K,te,Ae,ie,ae,Re,_e,pe,We,ze,ut,L;function le(){Fe=new m0(U),Fe.init(),ze=new Yg(U,Fe),Te=new c0(U,Fe,e,ze),ve=new Wg(U,Fe),Te.reverseDepthBuffer&&p&&ve.buffers.depth.setReversed(!0),ke=new v0(U),Ee=new Ig,E=new qg(U,Fe,ve,Ee,Te,ze,ke),y=new h0(v),O=new p0(v),$=new Ef(U),ut=new a0(U,$),Q=new g0(U,$,ke,ut),Z=new y0(U,Q,$,ke),_e=new _0(U,Te,E),ie=new u0(Ee),Me=new Pg(v,y,O,Fe,Te,ut,ie),K=new Qg(v,Ee),te=new Dg,Ae=new zg(Fe),Re=new o0(v,y,O,ve,Z,d,l),ae=new Vg(v,Z,Te),L=new jg(U,ke,Te,ve),pe=new l0(U,Fe,ke),We=new x0(U,Fe,ke),ke.programs=Me.programs,v.capabilities=Te,v.extensions=Fe,v.properties=Ee,v.renderLists=te,v.shadowMap=ae,v.state=ve,v.info=ke}le();let Y=new yl(v,U);this.xr=Y,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=Fe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Fe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(k,j,!1))},this.getSize=function(S){return S.set(k,j)},this.setSize=function(S,D,B=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,j=D,t.width=Math.floor(S*W),t.height=Math.floor(D*W),B===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(k*W,j*W).floor()},this.setDrawingBufferSize=function(S,D,B){k=S,j=D,W=B,t.width=Math.floor(S*B),t.height=Math.floor(D*B),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(me)},this.setViewport=function(S,D,B,H){S.isVector4?me.set(S.x,S.y,S.z,S.w):me.set(S,D,B,H),ve.viewport(P.copy(me).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(Ie)},this.setScissor=function(S,D,B,H){S.isVector4?Ie.set(S.x,S.y,S.z,S.w):Ie.set(S,D,B,H),ve.scissor(z.copy(Ie).multiplyScalar(W).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(S){ve.setScissorTest(qe=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(S=!0,D=!0,B=!0){let H=0;if(S){let N=!1;if(I!==null){let ce=I.texture.format;N=ce===sc||ce===rc||ce===ic}if(N){let ce=I.texture.type,ye=ce===ni||ce===Ni||ce===Jr||ce===pr||ce===ec||ce===tc,De=Re.getClearColor(),Ue=Re.getClearAlpha(),$e=De.r,tt=De.g,Ne=De.b;ye?(m[0]=$e,m[1]=tt,m[2]=Ne,m[3]=Ue,U.clearBufferuiv(U.COLOR,0,m)):(x[0]=$e,x[1]=tt,x[2]=Ne,x[3]=Ue,U.clearBufferiv(U.COLOR,0,x))}else H|=U.COLOR_BUFFER_BIT}D&&(H|=U.DEPTH_BUFFER_BIT),B&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),te.dispose(),Ae.dispose(),Ee.dispose(),y.dispose(),O.dispose(),Z.dispose(),ut.dispose(),L.dispose(),Me.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ot),Y.removeEventListener("sessionend",wt),at.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let S=ke.autoReset,D=ae.enabled,B=ae.autoUpdate,H=ae.needsUpdate,N=ae.type;le(),ke.autoReset=S,ae.enabled=D,ae.autoUpdate=B,ae.needsUpdate=H,ae.type=N}function fe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ne(S){let D=S.target;D.removeEventListener("dispose",ne),be(D)}function be(S){et(S),Ee.remove(S)}function et(S){let D=Ee.get(S).programs;D!==void 0&&(D.forEach(function(B){Me.releaseProgram(B)}),S.isShaderMaterial&&Me.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,B,H,N,ce){D===null&&(D=ct);let ye=N.isMesh&&N.matrixWorld.determinant()<0,De=Ce(S,D,B,H,N);ve.setMaterial(H,ye);let Ue=B.index,$e=1;if(H.wireframe===!0){if(Ue=Q.getWireframeAttribute(B),Ue===void 0)return;$e=2}let tt=B.drawRange,Ne=B.attributes.position,mt=tt.start*$e,Et=(tt.start+tt.count)*$e;ce!==null&&(mt=Math.max(mt,ce.start*$e),Et=Math.min(Et,(ce.start+ce.count)*$e)),Ue!==null?(mt=Math.max(mt,0),Et=Math.min(Et,Ue.count)):Ne!=null&&(mt=Math.max(mt,0),Et=Math.min(Et,Ne.count));let Rt=Et-mt;if(Rt<0||Rt===1/0)return;ut.setup(N,H,De,B,Ue);let nn,_t=pe;if(Ue!==null&&(nn=$.get(Ue),_t=We,_t.setIndex(nn)),N.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*Ye()),_t.setMode(U.LINES)):_t.setMode(U.TRIANGLES);else if(N.isLine){let Oe=H.linewidth;Oe===void 0&&(Oe=1),ve.setLineWidth(Oe*Ye()),N.isLineSegments?_t.setMode(U.LINES):N.isLineLoop?_t.setMode(U.LINE_LOOP):_t.setMode(U.LINE_STRIP)}else N.isPoints?_t.setMode(U.POINTS):N.isSprite&&_t.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)_t.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))_t.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Oe=N._multiDrawStarts,Xn=N._multiDrawCounts,yt=N._multiDrawCount,bn=Ue?$.get(Ue).bytesPerElement:1,Hi=Ee.get(H).currentProgram.getUniforms();for(let an=0;an<yt;an++)Hi.setValue(U,"_gl_DrawID",an),_t.render(Oe[an]/bn,Xn[an])}else if(N.isInstancedMesh)_t.renderInstances(mt,Rt,N.count);else if(B.isInstancedBufferGeometry){let Oe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Xn=Math.min(B.instanceCount,Oe);_t.renderInstances(mt,Rt,Xn)}else _t.render(mt,Rt)};function G(S,D,B){S.transparent===!0&&S.side===rn&&S.forceSinglePass===!1?(S.side=Dt,S.needsUpdate=!0,pn(S,D,B),S.side=An,S.needsUpdate=!0,pn(S,D,B),S.side=rn):pn(S,D,B)}this.compile=function(S,D,B=null){B===null&&(B=S),f=Ae.get(B),f.init(D),M.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==B&&S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let H=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ce=N.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){let De=ce[ye];G(De,B,N),H.add(De)}else G(ce,B,N),H.add(ce)}),M.pop(),f=null,H},this.compileAsync=function(S,D,B=null){let H=this.compile(S,D,B);return new Promise(N=>{function ce(){if(H.forEach(function(ye){Ee.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){N(S);return}setTimeout(ce,10)}Fe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Le=null;function Ze(S){Le&&Le(S)}function ot(){at.stop()}function wt(){at.start()}let at=new ih;at.setAnimationLoop(Ze),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(S){Le=S,Y.setAnimationLoop(S),S===null?at.stop():at.start()},Y.addEventListener("sessionstart",ot),Y.addEventListener("sessionend",wt),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(D),D=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,D,I),f=Ae.get(S,M.length),f.init(D),M.push(f),Se.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(Se),ge=this.localClippingEnabled,ee=ie.init(this.clippingPlanes,ge),g=te.get(S,_.length),g.init(),_.push(g),Y.enabled===!0&&Y.isPresenting===!0){let ce=v.xr.getDepthSensingMesh();ce!==null&&vt(ce,D,-1/0,v.sortObjects)}vt(S,D,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(re,ue),Be=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Be&&Re.addToRenderList(g,S),this.info.render.frame++,ee===!0&&ie.beginShadows();let B=f.state.shadowsArray;ae.render(B,S,D),ee===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,N=g.transmissive;if(f.setupLights(),D.isArrayCamera){let ce=D.cameras;if(N.length>0)for(let ye=0,De=ce.length;ye<De;ye++){let Ue=ce[ye];tn(H,N,S,Ue)}Be&&Re.render(S);for(let ye=0,De=ce.length;ye<De;ye++){let Ue=ce[ye];ht(g,S,Ue,Ue.viewport)}}else N.length>0&&tn(H,N,S,D),Be&&Re.render(S),ht(g,S,D);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(v,S,D),ut.resetDefaultState(),w=-1,b=null,M.pop(),M.length>0?(f=M[M.length-1],ee===!0&&ie.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function vt(S,D,B,H){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){H&&He.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Se);let ye=Z.update(S),De=S.material;De.visible&&g.push(S,ye,De,B,He.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){let ye=Z.update(S),De=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),He.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),He.copy(ye.boundingSphere.center)),He.applyMatrix4(S.matrixWorld).applyMatrix4(Se)),Array.isArray(De)){let Ue=ye.groups;for(let $e=0,tt=Ue.length;$e<tt;$e++){let Ne=Ue[$e],mt=De[Ne.materialIndex];mt&&mt.visible&&g.push(S,ye,mt,B,He.z,Ne)}}else De.visible&&g.push(S,ye,De,B,He.z,null)}}let ce=S.children;for(let ye=0,De=ce.length;ye<De;ye++)vt(ce[ye],D,B,H)}function ht(S,D,B,H){let N=S.opaque,ce=S.transmissive,ye=S.transparent;f.setupLightsView(B),ee===!0&&ie.setGlobalState(v.clippingPlanes,B),H&&ve.viewport(P.copy(H)),N.length>0&&Wt(N,D,B),ce.length>0&&Wt(ce,D,B),ye.length>0&&Wt(ye,D,B),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function tn(S,D,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new $t(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Hn:ni,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let ce=f.state.transmissionRenderTarget[H.id],ye=H.viewport||P;ce.setSize(ye.z,ye.w);let De=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(V),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Be&&Re.render(B);let Ue=v.toneMapping;v.toneMapping=xn;let $e=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),ee===!0&&ie.setGlobalState(v.clippingPlanes,H),Wt(S,B,H),E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ne=0,mt=D.length;Ne<mt;Ne++){let Et=D[Ne],Rt=Et.object,nn=Et.geometry,_t=Et.material,Oe=Et.group;if(_t.side===rn&&Rt.layers.test(H.layers)){let Xn=_t.side;_t.side=Dt,_t.needsUpdate=!0,Xt(Rt,B,H,nn,_t,Oe),_t.side=Xn,_t.needsUpdate=!0,tt=!0}}tt===!0&&(E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce))}v.setRenderTarget(De),v.setClearColor(V,X),$e!==void 0&&(H.viewport=$e),v.toneMapping=Ue}function Wt(S,D,B){let H=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ce=S.length;N<ce;N++){let ye=S[N],De=ye.object,Ue=ye.geometry,$e=H===null?ye.material:H,tt=ye.group;De.layers.test(B.layers)&&Xt(De,D,B,Ue,$e,tt)}}function Xt(S,D,B,H,N,ce){S.onBeforeRender(v,D,B,H,N,ce),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(v,D,B,H,S,ce),N.transparent===!0&&N.side===rn&&N.forceSinglePass===!1?(N.side=Dt,N.needsUpdate=!0,v.renderBufferDirect(B,D,H,N,S,ce),N.side=An,N.needsUpdate=!0,v.renderBufferDirect(B,D,H,N,S,ce),N.side=rn):v.renderBufferDirect(B,D,H,N,S,ce),S.onAfterRender(v,D,B,H,N,ce)}function pn(S,D,B){D.isScene!==!0&&(D=ct);let H=Ee.get(S),N=f.state.lights,ce=f.state.shadowsArray,ye=N.state.version,De=Me.getParameters(S,N.state,ce,D,B),Ue=Me.getProgramCacheKey(De),$e=H.programs;H.environment=S.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(S.isMeshStandardMaterial?O:y).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,$e===void 0&&(S.addEventListener("dispose",ne),$e=new Map,H.programs=$e);let tt=$e.get(Ue);if(tt!==void 0){if(H.currentProgram===tt&&H.lightsStateVersion===ye)return he(S,De),tt}else De.uniforms=Me.getUniforms(S),S.onBeforeCompile(De,v),tt=Me.acquireProgram(De,Ue),$e.set(Ue,tt),H.uniforms=De.uniforms;let Ne=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=ie.uniform),he(S,De),H.needsLights=rt(S),H.lightsStateVersion=ye,H.needsLights&&(Ne.ambientLightColor.value=N.state.ambient,Ne.lightProbe.value=N.state.probe,Ne.directionalLights.value=N.state.directional,Ne.directionalLightShadows.value=N.state.directionalShadow,Ne.spotLights.value=N.state.spot,Ne.spotLightShadows.value=N.state.spotShadow,Ne.rectAreaLights.value=N.state.rectArea,Ne.ltc_1.value=N.state.rectAreaLTC1,Ne.ltc_2.value=N.state.rectAreaLTC2,Ne.pointLights.value=N.state.point,Ne.pointLightShadows.value=N.state.pointShadow,Ne.hemisphereLights.value=N.state.hemi,Ne.directionalShadowMap.value=N.state.directionalShadowMap,Ne.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ne.spotShadowMap.value=N.state.spotShadowMap,Ne.spotLightMatrix.value=N.state.spotLightMatrix,Ne.spotLightMap.value=N.state.spotLightMap,Ne.pointShadowMap.value=N.state.pointShadowMap,Ne.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=tt,H.uniformsList=null,tt}function Qt(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=cr.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function he(S,D){let B=Ee.get(S);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Ce(S,D,B,H,N){D.isScene!==!0&&(D=ct),E.resetTextureUnits();let ce=D.fog,ye=H.isMeshStandardMaterial?D.environment:null,De=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Sr,Ue=(H.isMeshStandardMaterial?O:y).get(H.envMap||ye),$e=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,tt=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!B.morphAttributes.position,mt=!!B.morphAttributes.normal,Et=!!B.morphAttributes.color,Rt=xn;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Rt=v.toneMapping);let nn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_t=nn!==void 0?nn.length:0,Oe=Ee.get(H),Xn=f.state.lights;if(ee===!0&&(ge===!0||S!==b)){let mn=S===b&&H.id===w;ie.setState(H,S,mn)}let yt=!1;H.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Xn.state.version||Oe.outputColorSpace!==De||N.isBatchedMesh&&Oe.batching===!1||!N.isBatchedMesh&&Oe.batching===!0||N.isBatchedMesh&&Oe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Oe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Oe.instancing===!1||!N.isInstancedMesh&&Oe.instancing===!0||N.isSkinnedMesh&&Oe.skinning===!1||!N.isSkinnedMesh&&Oe.skinning===!0||N.isInstancedMesh&&Oe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Oe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Oe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Oe.instancingMorph===!1&&N.morphTexture!==null||Oe.envMap!==Ue||H.fog===!0&&Oe.fog!==ce||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ie.numPlanes||Oe.numIntersection!==ie.numIntersection)||Oe.vertexAlphas!==$e||Oe.vertexTangents!==tt||Oe.morphTargets!==Ne||Oe.morphNormals!==mt||Oe.morphColors!==Et||Oe.toneMapping!==Rt||Oe.morphTargetsCount!==_t)&&(yt=!0):(yt=!0,Oe.__version=H.version);let bn=Oe.currentProgram;yt===!0&&(bn=pn(H,D,N));let Hi=!1,an=!1,Ur=!1,Ct=bn.getUniforms(),Un=Oe.uniforms;if(ve.useProgram(bn.program)&&(Hi=!0,an=!0,Ur=!0),H.id!==w&&(w=H.id,an=!0),Hi||b!==S){ve.buffers.depth.getReversed()?(se.copy(S.projectionMatrix),of(se),af(se),Ct.setValue(U,"projectionMatrix",se)):Ct.setValue(U,"projectionMatrix",S.projectionMatrix),Ct.setValue(U,"viewMatrix",S.matrixWorldInverse);let ai=Ct.map.cameraPosition;ai!==void 0&&ai.setValue(U,we.setFromMatrixPosition(S.matrixWorld)),Te.logarithmicDepthBuffer&&Ct.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ct.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,an=!0,Ur=!0)}if(N.isSkinnedMesh){Ct.setOptional(U,N,"bindMatrix"),Ct.setOptional(U,N,"bindMatrixInverse");let mn=N.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ct.setValue(U,"boneTexture",mn.boneTexture,E))}N.isBatchedMesh&&(Ct.setOptional(U,N,"batchingTexture"),Ct.setValue(U,"batchingTexture",N._matricesTexture,E),Ct.setOptional(U,N,"batchingIdTexture"),Ct.setValue(U,"batchingIdTexture",N._indirectTexture,E),Ct.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&Ct.setValue(U,"batchingColorTexture",N._colorsTexture,E));let Nr=B.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&_e.update(N,B,bn),(an||Oe.receiveShadow!==N.receiveShadow)&&(Oe.receiveShadow=N.receiveShadow,Ct.setValue(U,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Un.envMap.value=Ue,Un.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(Un.envMapIntensity.value=D.environmentIntensity),an&&(Ct.setValue(U,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&Ke(Un,Ur),ce&&H.fog===!0&&K.refreshFogUniforms(Un,ce),K.refreshMaterialUniforms(Un,H,W,j,f.state.transmissionRenderTarget[S.id]),cr.upload(U,Qt(Oe),Un,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(cr.upload(U,Qt(Oe),Un,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ct.setValue(U,"center",N.center),Ct.setValue(U,"modelViewMatrix",N.modelViewMatrix),Ct.setValue(U,"normalMatrix",N.normalMatrix),Ct.setValue(U,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let mn=H.uniformsGroups;for(let ai=0,li=mn.length;ai<li;ai++){let Ec=mn[ai];L.update(Ec,bn),L.bind(Ec,bn)}}return bn}function Ke(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function rt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,D,B){Ee.get(S.texture).__webglTexture=D,Ee.get(S.depthTexture).__webglTexture=B;let H=Ee.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){let B=Ee.get(S);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,B=0){I=S,T=D,A=B;let H=!0,N=null,ce=!1,ye=!1;if(S){let Ue=Ee.get(S);if(Ue.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(Ue.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(Ue.__hasExternalTextures)E.rebindTextures(S,Ee.get(S.texture).__webglTexture,Ee.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ne=S.depthTexture;if(Ue.__boundDepthTexture!==Ne){if(Ne!==null&&Ee.has(Ne)&&(S.width!==Ne.image.width||S.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}let $e=S.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ye=!0);let tt=Ee.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(tt[D])?N=tt[D][B]:N=tt[D],ce=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?N=Ee.get(S).__webglMultisampledFramebuffer:Array.isArray(tt)?N=tt[B]:N=tt,P.copy(S.viewport),z.copy(S.scissor),F=S.scissorTest}else P.copy(me).multiplyScalar(W).floor(),z.copy(Ie).multiplyScalar(W).floor(),F=qe;if(ve.bindFramebuffer(U.FRAMEBUFFER,N)&&H&&ve.drawBuffers(S,N),ve.viewport(P),ve.scissor(z),ve.setScissorTest(F),ce){let Ue=Ee.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ue.__webglTexture,B)}else if(ye){let Ue=Ee.get(S.texture),$e=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.__webglTexture,B||0,$e)}w=-1},this.readRenderTargetPixels=function(S,D,B,H,N,ce,ye){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(De=De[ye]),De){ve.bindFramebuffer(U.FRAMEBUFFER,De);try{let Ue=S.texture,$e=Ue.format,tt=Ue.type;if(!Te.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-H&&B>=0&&B<=S.height-N&&U.readPixels(D,B,H,N,ze.convert($e),ze.convert(tt),ce)}finally{let Ue=I!==null?Ee.get(I).__webglFramebuffer:null;ve.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(S,D,B,H,N,ce,ye){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(De=De[ye]),De){let Ue=S.texture,$e=Ue.format,tt=Ue.type;if(!Te.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-H&&B>=0&&B<=S.height-N){ve.bindFramebuffer(U.FRAMEBUFFER,De);let Ne=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ne),U.bufferData(U.PIXEL_PACK_BUFFER,ce.byteLength,U.STREAM_READ),U.readPixels(D,B,H,N,ze.convert($e),ze.convert(tt),0);let mt=I!==null?Ee.get(I).__webglFramebuffer:null;ve.bindFramebuffer(U.FRAMEBUFFER,mt);let Et=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await sf(U,Et,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ne),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ce),U.deleteBuffer(Ne),U.deleteSync(Et),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,B=0){S.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);let H=Math.pow(2,-B),N=Math.floor(S.image.width*H),ce=Math.floor(S.image.height*H),ye=D!==null?D.x:0,De=D!==null?D.y:0;E.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,ye,De,N,ce),ve.unbindTexture()},this.copyTextureToTexture=function(S,D,B=null,H=null,N=0){S.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let ce,ye,De,Ue,$e,tt,Ne,mt,Et,Rt=S.isCompressedTexture?S.mipmaps[N]:S.image;B!==null?(ce=B.max.x-B.min.x,ye=B.max.y-B.min.y,De=B.isBox3?B.max.z-B.min.z:1,Ue=B.min.x,$e=B.min.y,tt=B.isBox3?B.min.z:0):(ce=Rt.width,ye=Rt.height,De=Rt.depth||1,Ue=0,$e=0,tt=0),H!==null?(Ne=H.x,mt=H.y,Et=H.z):(Ne=0,mt=0,Et=0);let nn=ze.convert(D.format),_t=ze.convert(D.type),Oe;D.isData3DTexture?(E.setTexture3D(D,0),Oe=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),Oe=U.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),Oe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let Xn=U.getParameter(U.UNPACK_ROW_LENGTH),yt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),bn=U.getParameter(U.UNPACK_SKIP_PIXELS),Hi=U.getParameter(U.UNPACK_SKIP_ROWS),an=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Rt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),U.pixelStorei(U.UNPACK_SKIP_ROWS,$e),U.pixelStorei(U.UNPACK_SKIP_IMAGES,tt);let Ur=S.isDataArrayTexture||S.isData3DTexture,Ct=D.isDataArrayTexture||D.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Un=Ee.get(S),Nr=Ee.get(D),mn=Ee.get(Un.__renderTarget),ai=Ee.get(Nr.__renderTarget);ve.bindFramebuffer(U.READ_FRAMEBUFFER,mn.__webglFramebuffer),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let li=0;li<De;li++)Ur&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.get(S).__webglTexture,N,tt+li),S.isDepthTexture?(Ct&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.get(D).__webglTexture,N,Et+li),U.blitFramebuffer(Ue,$e,ce,ye,Ne,mt,ce,ye,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ct?U.copyTexSubImage3D(Oe,N,Ne,mt,Et+li,Ue,$e,ce,ye):U.copyTexSubImage2D(Oe,N,Ne,mt,Et+li,Ue,$e,ce,ye);ve.bindFramebuffer(U.READ_FRAMEBUFFER,null),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ct?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Oe,N,Ne,mt,Et,ce,ye,De,nn,_t,Rt.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Oe,N,Ne,mt,Et,ce,ye,De,nn,Rt.data):U.texSubImage3D(Oe,N,Ne,mt,Et,ce,ye,De,nn,_t,Rt):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,Ne,mt,ce,ye,nn,_t,Rt.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,Ne,mt,Rt.width,Rt.height,nn,Rt.data):U.texSubImage2D(U.TEXTURE_2D,N,Ne,mt,ce,ye,nn,_t,Rt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Xn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,bn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Hi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,an),N===0&&D.generateMipmaps&&U.generateMipmap(Oe),ve.unbindTexture()},this.copyTextureToTexture3D=function(S,D,B=null,H=null,N=0){return S.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,S=arguments[2],D=arguments[3],N=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,B,H,N)},this.initRenderTarget=function(S){Ee.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),ve.unbindTexture()},this.resetState=function(){T=0,A=0,I=null,ve.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var Pn=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ml=class extends sn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=un,u=un,h,p){super(null,o,a,l,c,u,r,s,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=class extends pt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},nr=new bt,Tu=new bt,Os=[],Au=new vn,ex=new bt,kr=new ft,Hr=new ii,_r=class extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,ex)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Au.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(Au)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Hr.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,nr),Tu.multiplyMatrices(n,nr),kr.matrixWorld=Tu,kr.raycast(e,Os);for(let o=0,a=Os.length;o<a;o++){let l=Os[o];l.instanceId=s,l.object=this,t.push(l)}Os.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ml(new Float32Array(r*this.count),r,this.count,nc,On));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ns=class extends zn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lo=new C,co=new C,Ru=new bt,Vr=new gr,Bs=new ii,pa=new C,Cu=new C,bl=class extends Ft{constructor(e=new At,t=new ns){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)lo.fromBufferAttribute(t,r-1),co.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=lo.distanceTo(co);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(r),Bs.radius+=s,e.ray.intersectsSphere(Bs)===!1)return;Ru.copy(r).invert(),Vr.copy(e.ray).applyMatrix4(Ru);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let f=u.getX(x),_=u.getX(x+1),M=zs(this,e,Vr,l,f,_);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),f=zs(this,e,Vr,l,x,g);f&&t.push(f)}}else{let d=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let f=zs(this,e,Vr,l,x,x+1);f&&t.push(f)}if(this.isLineLoop){let x=zs(this,e,Vr,l,m-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function zs(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(lo.fromBufferAttribute(o,r),co.fromBufferAttribute(o,s),t.distanceSqToSegment(lo,co,pa,Cu)>n)return;pa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(pa);if(!(l<e.near||l>e.far))return{distance:l,point:Cu.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Pu=new C,Iu=new C,is=class extends bl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Pu.fromBufferAttribute(t,r),Iu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Pu.distanceTo(Iu);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var rs=class extends zn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lu=new bt,Sl=new gr,ks=new ii,Hs=new C,ri=class extends Ft{constructor(e=new At,t=new rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),ks.radius+=s,e.ray.intersectsSphere(ks)===!1)return;Lu.copy(r).invert(),Sl.copy(e.ray).applyMatrix4(Lu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let p=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=p,x=d;m<x;m++){let g=c.getX(m);Hs.fromBufferAttribute(h,g),Du(Hs,g,l,r,e,t,this)}}else{let p=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=p,x=d;m<x;m++)Hs.fromBufferAttribute(h,m),Du(Hs,m,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Du(i,e,t,n,r,s,o){let a=Sl.distanceSqToPoint(i);if(a<t){let l=new C;Sl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var yr=class extends sn{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],p=n[r+1]-u,d=(o-u)/p;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new oe:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,r=[],s=[],o=[],a=new C,l=new bt;for(let d=0;d<=e;d++){let m=d/e;r[d]=this.getTangentAt(m,new C)}s[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ht(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Ht(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ss=class extends _n{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*h+this.aX,c=p*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wl=class extends ss{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hc(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let p=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;p*=u,d*=u,r(o,a,p,d)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Vs=new C,ma=new hc,ga=new hc,xa=new hc,El=class extends _n{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new C){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Vs.subVectors(r[0],r[1]).add(r[0]),c=Vs);let h=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Vs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Vs),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(p),d),g=Math.pow(p.distanceToSquared(u),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),ma.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,m,x,g),ga.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,m,x,g),xa.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),ga.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),xa.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return n.set(ma.calc(l),ga.calc(l),xa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uu(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function tx(i,e){let t=1-i;return t*t*e}function nx(i,e){return 2*(1-i)*i*e}function ix(i,e){return i*i*e}function Zr(i,e,t,n){return tx(i,e)+nx(i,t)+ix(i,n)}function rx(i,e){let t=1-i;return t*t*t*e}function sx(i,e){let t=1-i;return 3*t*t*i*e}function ox(i,e){return 3*(1-i)*i*i*e}function ax(i,e){return i*i*i*e}function $r(i,e,t,n,r){return rx(i,e)+sx(i,t)+ox(i,n)+ax(i,r)}var uo=class extends _n{constructor(e=new oe,t=new oe,n=new oe,r=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new oe){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set($r(e,r.x,s.x,o.x,a.x),$r(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tl=class extends _n{constructor(e=new C,t=new C,n=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new C){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set($r(e,r.x,s.x,o.x,a.x),$r(e,r.y,s.y,o.y,a.y),$r(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ho=class extends _n{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Al=class extends _n{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends _n{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Zr(e,r.x,s.x,o.x),Zr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rl=class extends _n{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Zr(e,r.x,s.x,o.x),Zr(e,r.y,s.y,o.y),Zr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Uu(a,l.x,c.x,u.x,h.x),Uu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new oe().fromArray(r))}return this}},Nu=Object.freeze({__proto__:null,ArcCurve:wl,CatmullRomCurve3:El,CubicBezierCurve:uo,CubicBezierCurve3:Tl,EllipseCurve:ss,LineCurve:ho,LineCurve3:Al,QuadraticBezierCurve:fo,QuadraticBezierCurve3:Rl,SplineCurve:po}),Cl=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Nu[r.type]().fromJSON(r))}return this}},Pl=class extends Cl{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ho(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new fo(this.currentPoint.clone(),new oe(e,t),new oe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new uo(this.currentPoint.clone(),new oe(e,t),new oe(n,r),new oe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new po(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new ss(e,t,n,r,s,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Il=class i extends At{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Ht(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,h=new C,p=new oe,d=new C,m=new C,x=new C,g=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,d.x=f*1,d.y=-g,d.z=f*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,d.x=f*1,d.y=-g,d.z=f*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let _=0;_<=t;_++){let M=n+_*u*r,v=Math.sin(M),R=Math.cos(M);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*v,h.y=e[T].y,h.z=e[T].x*R,o.push(h.x,h.y,h.z),p.x=_/t,p.y=T/(e.length-1),a.push(p.x,p.y);let A=l[3*T+0]*v,I=l[3*T+1],w=l[3*T+0]*R;c.push(A,I,w)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let v=M+_*e.length,R=v,T=v+e.length,A=v+e.length+1,I=v+1;s.push(R,T,I),s.push(A,I,T)}this.setIndex(s),this.setAttribute("position",new xt(o,3)),this.setAttribute("uv",new xt(a,2)),this.setAttribute("normal",new xt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},mo=class i extends Il{constructor(e=1,t=1,n=4,r=8){let s=new Pl;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},go=class i extends At{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new C,u=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=t;h++,p+=3){let d=n+h/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[p]/e+1)/2,u.y=(o[p+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mr=class i extends At{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],p=[],d=[],m=0,x=[],g=n/2,f=0;_(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(p,3)),this.setAttribute("uv",new xt(d,2));function _(){let v=new C,R=new C,T=0,A=(t-e)/n;for(let I=0;I<=s;I++){let w=[],b=I/s,P=b*(t-e)+e;for(let z=0;z<=r;z++){let F=z/r,V=F*l+a,X=Math.sin(V),k=Math.cos(V);R.x=P*X,R.y=-b*n+g,R.z=P*k,h.push(R.x,R.y,R.z),v.set(X,A,k).normalize(),p.push(v.x,v.y,v.z),d.push(F,1-b),w.push(m++)}x.push(w)}for(let I=0;I<r;I++)for(let w=0;w<s;w++){let b=x[w][I],P=x[w+1][I],z=x[w+1][I+1],F=x[w][I+1];(e>0||w!==0)&&(u.push(b,P,F),T+=3),(t>0||w!==s-1)&&(u.push(P,z,F),T+=3)}c.addGroup(f,T,0),f+=T}function M(v){let R=m,T=new oe,A=new C,I=0,w=v===!0?e:t,b=v===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,g*b,0),p.push(0,b,0),d.push(.5,.5),m++;let P=m;for(let z=0;z<=r;z++){let V=z/r*l+a,X=Math.cos(V),k=Math.sin(V);A.x=w*k,A.y=g*b,A.z=w*X,h.push(A.x,A.y,A.z),p.push(0,b,0),T.x=X*.5+.5,T.y=k*.5*b+.5,d.push(T.x,T.y),m++}for(let z=0;z<r;z++){let F=R+z,V=P+z;v===!0?u.push(V,V+1,F):u.push(V+1,V,F),I+=3}c.addGroup(f,I,v===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Gs=new C,Ws=new C,va=new C,Xs=new gi,os=class extends At{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(ar*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),p={},d=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:g,c:f}=Xs;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Xs.getNormal(va),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){let M=(_+1)%3,v=h[_],R=h[M],T=Xs[u[_]],A=Xs[u[M]],I=`${v}_${R}`,w=`${R}_${v}`;w in p&&p[w]?(va.dot(p[w].normal)<=s&&(d.push(T.x,T.y,T.z),d.push(A.x,A.y,A.z)),p[w]=null):I in p||(p[I]={index0:c[_],index1:c[M],normal:va.clone()})}}for(let m in p)if(p[m]){let{index0:x,index1:g}=p[m];Gs.fromBufferAttribute(a,x),Ws.fromBufferAttribute(a,g),d.push(Gs.x,Gs.y,Gs.z),d.push(Ws.x,Ws.y,Ws.z)}this.setAttribute("position",new xt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var yi=class i extends At{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new C,p=new C,d=[],m=[],x=[],g=[];for(let f=0;f<=n;f++){let _=[],M=f/n,v=0;f===0&&o===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){let T=R/t;h.x=-e*Math.cos(r+T*s)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+M*a),m.push(h.x,h.y,h.z),p.copy(h).normalize(),x.push(p.x,p.y,p.z),g.push(T+v,1-M),_.push(c++)}u.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){let M=u[f][_+1],v=u[f][_],R=u[f+1][_],T=u[f+1][_+1];(f!==0||o>0)&&d.push(M,v,T),(f!==n-1||l<Math.PI)&&d.push(v,R,T)}this.setIndex(d),this.setAttribute("position",new xt(m,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fi=class i extends At{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new C,h=new C,p=new C;for(let d=0;d<=n;d++)for(let m=0;m<=r;m++){let x=m/r*s,g=d/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),c.push(m/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=r;m++){let x=(r+1)*d+m-1,g=(r+1)*(d-1)+m-1,f=(r+1)*(d-1)+m,_=(r+1)*d+m;o.push(x,g,_),o.push(g,f,_)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Oi=class extends zn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var as=class extends zn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function qs(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function lx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var br=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ll=class extends br{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cc,endingEnd:Cc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pc:s=e,a=2*t-n;break;case Ic:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pc:o=e,l=2*n-t;break;case Ic:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,d=this._weightNext,m=(n-t)/(r-t),x=m*m,g=x*m,f=-p*g+2*p*x-p*m,_=(1+p)*g+(-1.5-2*p)*x+(-.5+p)*m+1,M=(-1-d)*g+(1.5+d)*x+.5*m,v=d*g-d*x;for(let R=0;R!==a;++R)s[R]=f*o[u+R]+_*o[c+R]+M*o[l+R]+v*o[h+R];return s}},Dl=class extends br{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let p=0;p!==a;++p)s[p]=o[c+p]*h+o[l+p]*u;return s}},Ul=class extends br{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},In=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qs(t,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qs(e.times,Array),values:qs(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ll(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case sl:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return sl;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&lx(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ho,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*n,p=h-n,d=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[p+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,p=o*n;for(let d=0;d!==n;++d)t[p+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=sl;var Bi=class extends In{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Qs;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends In{};Nl.prototype.ValueTypeName="color";var Fl=class extends In{};Fl.prototype.ValueTypeName="number";var Ol=class extends br{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)vi.slerpFlat(s,0,o,c-a,o,c,l);return s}},xo=class extends In{InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}};xo.prototype.ValueTypeName="quaternion";xo.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends In{constructor(e,t,n){super(e,t,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Qs;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends In{};Bl.prototype.ValueTypeName="vector";var zl=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}},cx=new zl,kl=class{constructor(e){this.manager=e!==void 0?e:cx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},vo=class extends ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},_a=new bt,Fu=new C,Ou=new C,_o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fu),Ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ou),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Bu=new bt,Gr=new C,ya=new C,Hl=class extends _o{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gr),ya.copy(n.position),ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ya),n.updateMatrixWorld(),r.makeTranslation(-Gr.x,-Gr.y,-Gr.z),Bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu)}},cs=class extends ls{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Hl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vl=class extends _o{constructor(){super(new kn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},us=class extends ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var yo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=zu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function zu(){return performance.now()}var dc="\\[\\]\\.:\\/",ux=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",hx="[^"+dc.replace("\\.","")+"]",dx=/((?:WC+[\/:])*)/.source.replace("WC",fc),fx=/(WCOD+)?/.source.replace("WCOD",hx),px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),mx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),gx=new RegExp("^"+dx+fx+px+mx+"$"),xx=["material","materials","bones","map"],Gl=class{constructor(e,t,n){let r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ux,"")}static parseTrackName(e){let t=gx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);xx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Gl;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tv=new Float32Array(1);var ku=new bt,Mo=class{constructor(e,t,n=0,r=1/0){this.ray=new gr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ku.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ku),this}intersectObject(e,t=!0,n=[]){return Wl(e,this,n,t),n.sort(Hu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Wl(e[r],this,n,t);return n.sort(Hu),n}};function Hu(i,e){return i.distance-e.distance}function Wl(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Wl(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var yn={bg:526607,amber:15250790,champagne:16043918,ember:13201727,ice:9419007,iceHi:14478335},To={half:5,wallH:3.4,wallT:.3},Nt={workstation:[.9,0,.7],tableTop:.76,monitorRel:[.35,-.38],island:[.9,0,-2.7],deskX:-4.5,deskStations:[-2.7,-.55,1.6]},Qe={grid:[0,.1],slab:[.03,.12],trim:[.1,.16],tiles:[.08,.22],rug:[.2,.27],wallA:[.15,.25],wallB:[.19,.29],corner:[.24,.3],glazing:[.27,.34],desks:[.24,.37],storage:[.28,.39],island:[.3,.4],workstation:[.33,.43],props:[.36,.5],unity:[.53,.67],screens:[.57,.63],approach:[.72,.9],hover:[.89,.93],select:[.93,.97]},si={fov:[[0,22],[.5,22],[.7,22],[.9,40],[1,42]],az:[[0,64],[.22,55],[.5,45],[.7,47],[.82,28],[.9,12],[1,8]],el:[[0,46],[.25,38],[.5,33],[.7,31],[.82,24],[.9,15],[1,13]],dist:[[0,1.22],[.25,1.1],[.5,1],[.7,.97],[.82,.33],[.9,.085],[1,.075]],tx:[[0,0],[.5,0],[.7,0],[.82,.8],[.9,1.15],[1,1.2]],ty:[[0,.4],[.3,1.1],[.5,1.3],[.7,1.3],[.9,1.3],[1,1.3]],tz:[[0,0],[.5,0],[.7,0],[.82,.4],[.9,.35],[1,.35]]};var vx=i=>i<0?0:i>1?1:i,Vn=(i,e,t)=>i+(e-i)*t,Ge=(i,e,t)=>vx((i-e)/(t-e)),It=i=>i*i*(3-2*i),Ar=i=>1-(1-i)**3,pc=i=>1-(1-i)**4,Ao=(i,e=1.5)=>1+(e+1)*(i-1)**3+e*(i-1)**2,Gn=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)};function Mi(i){let e=i.length,t=i.map(o=>o[0]),n=i.map(o=>o[1]),r=[];for(let o=0;o<e-1;o++)r[o]=(n[o+1]-n[o])/(t[o+1]-t[o]);let s=new Array(e);s[0]=r[0],s[e-1]=r[e-2];for(let o=1;o<e-1;o++)s[o]=r[o-1]*r[o]<=0?0:(r[o-1]+r[o])/2;for(let o=0;o<e-1;o++){if(r[o]===0){s[o]=s[o+1]=0;continue}let a=s[o]/r[o],l=s[o+1]/r[o],c=a*a+l*l;if(c>9){let u=3/Math.sqrt(c);s[o]=u*a*r[o],s[o+1]=u*l*r[o]}}return o=>{if(o<=t[0])return n[0];if(o>=t[e-1])return n[e-1];let a=0;for(;o>t[a+1];)a++;let l=t[a+1]-t[a],c=(o-t[a])/l,u=c*c,h=u*c;return(2*h-3*u+1)*n[a]+(h-2*u+c)*l*s[a]+(-2*h+3*u)*n[a+1]+(h-u)*l*s[a+1]}}function lh(i){let e=(n,r={})=>new as({color:n,...r}),t=(n,r=.6,s=.05,o={})=>new Oi({color:n,roughness:r,metalness:s,envMap:i,envMapIntensity:.55,...o});return{paint:e(12433582),wainscot:e(6650250),baseboard:e(2829878),slab:e(1052950),tile:e(16777215),brass:t(14263889,.32,.85),rug:e(3422534),wood:e(13082478),woodDark:e(7622970),laminate:e(15131612),steel:t(10134189,.42,.35),steelDark:t(3093308,.5,.4),plastic:t(1184536,.45,.05),plasticWhite:t(14869479,.4),fabric:e(2961986),fabricBlue:e(4022159),paper:e(15789799),cardboard:e(11636322),pot:e(11692619),tape:e(14857535),vertex:e(16777215,{vertexColors:!0}),lampBulb:new Oi({color:1709064,emissive:16763274,emissiveIntensity:2.2,roughness:.4}),glass:new Oi({color:11126510,roughness:.06,metalness:0,transparent:!0,opacity:.22,depthWrite:!1})}}function ch(i){let e=new Pn;e.add(new ft(new yi(60,32,16),new Vt({color:460813,side:Dt})));let t=(s,o,a,l,c)=>{let u=new ft(new Gt(s,o),new Vt({color:new Pe(a).multiplyScalar(l),side:rn}));u.position.set(...c),u.lookAt(0,0,0),e.add(u)};t(30,16,yn.champagne,4.5,[-24,26,18]),t(10,26,yn.ice,2.6,[30,10,-14]),t(14,14,16777215,1.8,[0,40,2]);let n=new vr(i),r=n.fromScene(e,.04);return n.dispose(),e.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),r.texture}function hn(i,e=512,t=512,{anisotropy:n=4,redraw:r=!1}={}){let s=document.createElement("canvas");s.width=e,s.height=t;let o=s.getContext("2d");i(o,e,t);let a=new yr(s);return a.colorSpace=Tt,a.anisotropy=n,r&&document.fonts&&document.fonts.ready.then(()=>{o.clearRect(0,0,e,t),i(o,e,t),a.needsUpdate=!0}),a}function oi(i,e=.55,t=.1){return t<.15?new as({map:i}):new Oi({map:i,roughness:e,metalness:t})}function dn(i,e=1){return new Vt({map:i,color:new Pe().setScalar(e)})}function uh(i,e){let t=new gt,n=new vo(11123932,3420202,1.5);t.add(n);let r=new us(15988479,1.5);r.position.set(-7,15,10),r.castShadow=!0;let s=e.shadowSize;r.shadow.mapSize.set(s,s);let o=r.shadow.camera;o.left=-9,o.right=9,o.top=9,o.bottom=-9,o.near=2,o.far=42,r.shadow.bias=-4e-4,r.shadow.normalBias=.035,t.add(r,r.target);let a=new us(9416938,.35);a.position.set(11,7,-5),t.add(a);let l=new cs(16763274,0,4,2),c=new cs(16763274,0,3.5,2);t.add(l,c),i.add(t);let u=new Pe(15988479),h=new Pe(16765856),p="intensity"in r.shadow;return{group:t,setPractical(d,m){l.position.copy(d),c.position.copy(m)},update({unity:d=0}={}){n.intensity=Vn(1.5,.62,d),r.color.copy(u).lerp(h,d),r.intensity=Vn(2.3,3.4,d),p&&(r.shadow.intensity=Vn(.5,1,d)),a.intensity=Vn(.35,.7,d),l.intensity=6*d,c.intensity=5*d}}}var hh=si.fov[0][1],ki={fov:Mi(si.fov),az:Mi(si.az),el:Mi(si.el),logDist:Mi(si.dist.map(([i,e])=>[i,Math.log(e)])),tx:Mi(si.tx),ty:Mi(si.ty),tz:Mi(si.tz)},mc=Math.PI/180;function dh(){let i=new Zt(hh,1,.5,160),e=40,t=!1;function n(a,l){let c=a/Math.max(1,l);i.aspect=c,t=c<.9;let u=Math.tan(hh*mc/2),h=t?8.8:9.25,p=t?7.5:9.2;e=Math.max(h/u,p/(u*c)),i.setViewOffset(a,l,0,-Math.round(l*(t?.01:.075)),a,l),i.updateProjectionMatrix()}let r=new C,s=-1;function o(a){let l=ki.az(a)*mc,c=ki.el(a)*mc,u=Math.exp(ki.logDist(a))*e;r.set(ki.tx(a),ki.ty(a),ki.tz(a)),i.position.set(r.x+u*Math.cos(c)*Math.sin(l),r.y+u*Math.sin(c),r.z+u*Math.cos(c)*Math.cos(l));let h=It(Ge(a,...Qe.approach))*(1-It(Ge(a,Qe.approach[1]-.03,Qe.approach[1]+.02)));i.position.y+=(t?0:.015)*h*Math.sin(a*260),i.lookAt(r);let p=ki.fov(a)*(t?1+.25*Ge(a,...Qe.approach):1);Math.abs(p-s)>.01&&(s=p,i.fov=p,i.updateProjectionMatrix()),i.updateMatrixWorld()}return{camera:i,resize:n,update:o}}var fh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},_x=new kn(-1,1,1,-1,0,1),gc=class extends At{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}},yx=new gc,Rr=class{constructor(e){this._mesh=new ft(yx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_x)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Cr=class extends Ln{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cc.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Rr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ds=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Ro=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Co=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cr(fh),this.copyPass.material.blending=Bn,this.clock=new yo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ds!==void 0&&(o instanceof ds?n=!0:o instanceof Ro&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Po=class extends Ln{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}};var Mx=`
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
  }`,bx=`
  uniform sampler2D tDiffuse;
  uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv + uTexel * vec2(-1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2(-1.0,  1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
    gl_FragColor = vec4(c * 0.25, 1.0);
  }`,Sx=`
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
  }`,wx=`
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
  }`,Ex={uniforms:{tDiffuse:{value:null},resolution:{value:new oe(1/1024,1/512)}},vertexShader:`
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
    }`},Tx=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Io=(i,e)=>new Lt({vertexShader:Tx,fragmentShader:i,uniforms:e,depthTest:!1,depthWrite:!1}),xc=class extends Ln{constructor({strength:e=.32,threshold:t=1,knee:n=.5}={}){super();let r=()=>new $t(4,4,{type:Hn,depthBuffer:!1});this.near=[r(),r()],this.far=[r(),r()],this.bright=Io(Mx,{tDiffuse:{value:null},uTexel:{value:new oe},uThreshold:{value:t},uKnee:{value:n}}),this.down=Io(bx,{tDiffuse:{value:null},uTexel:{value:new oe}}),this.blur=Io(Sx,{tDiffuse:{value:null},uDir:{value:new oe}}),this.composite=Io(wx,{tDiffuse:{value:null},tNear:{value:null},tFar:{value:null},uStrength:{value:e},uGrade:{value:0}}),this.composite.toneMapped=!1,this.quad=new Rr(this.bright)}setSize(e,t){let n=Math.max(2,Math.round(e/4)),r=Math.max(2,Math.round(t/4)),s=Math.max(2,Math.round(e/16)),o=Math.max(2,Math.round(t/16));this.near.forEach(a=>a.setSize(n,r)),this.far.forEach(a=>a.setSize(s,o)),this.srcSize=[e,t]}_run(e,t,n){this.quad.material=t,e.setRenderTarget(n),this.quad.render(e)}_blur(e,t,n,r){let[s,o]=t;this.blur.uniforms.uDir.value.set(1/n,0),this.blur.uniforms.tDiffuse.value=s.texture,this._run(e,this.blur,o),this.blur.uniforms.uDir.value.set(0,1/r),this.blur.uniforms.tDiffuse.value=o.texture,this._run(e,this.blur,s)}render(e,t,n){let[r,s]=this.srcSize,[o,a]=[this.near[0].width,this.near[0].height],[l,c]=[this.far[0].width,this.far[0].height];this.bright.uniforms.tDiffuse.value=n.texture,this.bright.uniforms.uTexel.value.set(1/r,1/s),this._run(e,this.bright,this.near[0]),this._blur(e,this.near,o,a),this.down.uniforms.tDiffuse.value=this.near[0].texture,this.down.uniforms.uTexel.value.set(1/o,1/a),this._run(e,this.down,this.far[0]),this._blur(e,this.far,l,c),this._blur(e,this.far,l,c);let u=this.composite.uniforms;u.tDiffuse.value=n.texture,u.tNear.value=this.near[0].texture,u.tFar.value=this.far[0].texture,this._run(e,this.composite,this.renderToScreen?null:t)}dispose(){[...this.near,...this.far].forEach(e=>e.dispose()),[this.bright,this.down,this.blur,this.composite].forEach(e=>e.dispose()),this.quad.dispose()}},ph={[Zl]:"LINEAR_TONE_MAPPING",[$l]:"REINHARD_TONE_MAPPING",[Jl]:"CINEON_TONE_MAPPING",[hs]:"ACES_FILMIC_TONE_MAPPING",[Kl]:"AGX_TONE_MAPPING",[Ql]:"NEUTRAL_TONE_MAPPING"};function mh(i,e){let t=`${e.toneMapping}|${e.outputColorSpace}`;i.userData.outputKey!==t&&(i.userData.outputKey=t,i.defines={},dt.getTransfer(e.outputColorSpace)===Mt&&(i.defines.SRGB_TRANSFER=""),ph[e.toneMapping]&&(i.defines[ph[e.toneMapping]]=""),i.needsUpdate=!0)}function gh(i,e,t){let n=new $t(4,4,{type:Hn,samples:0}),r=new Co(i,n);r.addPass(new Po(e,t));let s=new xc;r.addPass(s),mh(s.composite,i);let o=new Cr(Ex);return r.addPass(o),{render:()=>r.render(),sceneTarget:n,programs(){return mh(s.composite,i),[[s.bright,!1],[s.down,!1],[s.blur,!1],[s.composite,!o.enabled],[o.material,!0]]},setSize(a,l,c){r.setPixelRatio(c),r.setSize(a,l),o.enabled=c<1.75,o.material.uniforms.resolution.value.set(1/(a*c),1/(l*c))},setBloom:a=>s.enabled=a,setGrade:a=>s.composite.uniforms.uGrade.value=a,dispose:()=>r.dispose()}}function xh(){let i=new Lt({transparent:!0,depthWrite:!1,blending:Ui,uniforms:{uOpacity:{value:0},uReveal:{value:0},uColor:{value:new Pe(yn.amber)}},vertexShader:`
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
      }`}),e=new ft(new Gt(140,140),i);return e.rotation.x=-Math.PI/2,e.position.y=-.62,e.renderOrder=-1,e.frustumCulled=!1,{group:e,update(t){i.uniforms.uReveal.value=Vn(0,60,It(Ge(t,...Qe.grid)));let n=Vn(1,.22,It(Ge(t,.14,.3)));i.uniforms.uOpacity.value=n*(1-It(Ge(t,...Qe.unity)))}}}var fs=new C;function Mn(i,e,t,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;fs.copy(e),fs[n]=0,fs.normalize();let c=.5*o/(o+a),u=1-fs.angleTo(i)/l;return Math.sign(fs[t])===1?u*c:a/(o+a)+c+c*(1-u)}var bi=class extends Cn{constructor(e=1,t=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),r===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new C,l=new C,c=new C(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,d=u.length/6,m=new C,x=.5/r;for(let g=0,f=0;g<u.length;g+=3,f+=2)switch(a.fromArray(u,g),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[g+0]=c.x*Math.sign(a.x)+l.x*s,u[g+1]=c.y*Math.sign(a.y)+l.y*s,u[g+2]=c.z*Math.sign(a.z)+l.z*s,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/d)){case 0:m.set(1,0,0),p[f+0]=Mn(m,l,"z","y",s,n),p[f+1]=1-Mn(m,l,"y","z",s,t);break;case 1:m.set(-1,0,0),p[f+0]=1-Mn(m,l,"z","y",s,n),p[f+1]=1-Mn(m,l,"y","z",s,t);break;case 2:m.set(0,1,0),p[f+0]=1-Mn(m,l,"x","z",s,e),p[f+1]=Mn(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),p[f+0]=1-Mn(m,l,"x","z",s,e),p[f+1]=1-Mn(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),p[f+0]=1-Mn(m,l,"x","y",s,e),p[f+1]=1-Mn(m,l,"y","x",s,t);break;case 5:m.set(0,0,-1),p[f+0]=Mn(m,l,"x","y",s,e),p[f+1]=1-Mn(m,l,"y","x",s,t);break}}};function _h(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new At,c=0;for(let u=0;u<i.length;++u){let h=i[u],p=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let p=0;p<i.length;++p){let d=i[p].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=i[p].attributes.position.count}l.setIndex(h)}for(let u in s){let h=vh(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<h;++p){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][p]);let m=vh(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function vh(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new pt(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let p=0,d=u.count;p<d;p++)for(let m=0;m<t;m++){let x=u.getComponent(p,m);a.setComponent(p+h,m,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}var yh=()=>new ns({color:yn.amber,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1});function it({size:i,at:e=[0,0,0],material:t,radius:n=.04,wire:r=!0,keepWire:s=0,fx:o="drop",drop:a=3,dir:l=new C(0,-3,0),geometry:c=null,shadow:u=!0}){let[h,p,d]=i,m=c;if(!m){let R=Math.max(.004,Math.min(n,Math.min(h,p,d)/2-.002));m=new bi(h,p,d,R>.03?3:2,R),m.translate(0,p/2,0)}let x=t.clone();x.alphaHash=!0,x.transparent=!1,x.opacity=0;let g=new ft(m,x);g.receiveShadow=!0,g.userData.shadowCaster=u;let f=new gt;f.add(g),f.position.set(e[0],e[1],e[2]),f.visible=!1;let _=null;if(r==="edges")_=new is(new os(m,25),yh()),f.add(_);else if(r){let R=new Cn(h,p,d).translate(0,p/2,0);_=new is(new os(R),yh()),R.dispose(),f.add(_)}let M=f.position.clone();function v(R){let T=R>5e-4;if(f.visible=T,!T)return;let A=Ge(R,.06,.8);switch(o){case"drop":{f.position.y=M.y+a*(1-pc(A));let I=Math.sin(Math.PI*Ge(R,.62,.9));f.scale.y=1-.035*I;break}case"rise":f.scale.y=Math.max(.001,Ar(Ge(R,.04,.85)));break;case"slide":f.position.copy(M).addScaledVector(l,1-pc(A));break;case"pop":f.scale.setScalar(Math.max(.001,Ao(Ge(R,.04,.8),1.2)));break}if(x.opacity=It(Ge(R,.34,.8)),g.castShadow=u&&R>.6,_){let I=It(Ge(R,.02,.2)),w=It(Ge(R,.68,1));_.material.opacity=I*(1-(1-s)*w)*.9}}return{root:f,mesh:g,mat:x,set:v,rest:M}}function Ve(i,e,t={}){return it({size:[1,1,1],geometry:i,material:e,wire:!1,fx:"drop",drop:2.4,shadow:!1,...t})}function Jt(i){let e=_h(i.map(t=>t.index?t.toNonIndexed():t));return i.forEach(t=>t.dispose()),e}function on(i,e,t,n=.55){let r=t>1?e/(t-1)*n:0;return Ge(i,r,r+1-n)}var Mh={blender:{color:"#E87D0D",path:"M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626"},unity:{color:"#FFFFFF",path:"m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z"}};var Ax='"Inter", "Segoe UI", system-ui, sans-serif';function bh(i,e,t,n,r,s=1){let o=Mh[e];i.save(),i.translate(t,n),i.scale(r/24,r/24),i.globalAlpha=s,i.fillStyle=o.color,i.fill(new Path2D(o.path)),i.restore()}var Je=(i,e,t,n,r,s,o=0)=>{i.fillStyle=s,o?(i.beginPath(),i.roundRect(e,t,n,r,o),i.fill()):i.fillRect(e,t,n,r)},Kt=(i,e,t,n,r,s,o=500,a="left")=>{i.font=`${o} ${r}px ${Ax}`,i.fillStyle=s,i.textAlign=a,i.textBaseline="middle",i.fillText(e,t,n)};function Sh(i,e,t,n,{fill:r,line:s,outline:o,lit:a}){let l=(u,h,p)=>[e+(u-p)*n*.866,t+(u+p)*n*.5-h*n],c=(u,h,p,d=1.5)=>{i.beginPath(),u.forEach(([m,x],g)=>g?i.lineTo(m,x):i.moveTo(m,x)),i.closePath(),h&&(i.fillStyle=h,i.fill()),p&&(i.strokeStyle=p,i.lineWidth=d,i.stroke())};c([l(-1,0,-1),l(1,0,-1),l(1,0,1),l(-1,0,1)],r.floor,s),c([l(-1,0,-1),l(1,0,-1),l(1,1,-1),l(-1,1,-1)],r.wallB,s),c([l(-1,0,-1),l(-1,0,1),l(-1,1,1),l(-1,1,-1)],r.wallA,s),c([l(-.95,0,-.6),l(-.8,0,-.6),l(-.8,.3,-.6),l(-.95,.3,-.6)],null,null),c([l(-.95,.28,-.6),l(-.8,.28,-.6),l(-.8,.28,.6),l(-.95,.28,.6)],r.desk,s),c([l(-.3,.28,.1),l(.4,.28,.1),l(.4,.28,.6),l(-.3,.28,.6)],r.desk,o||s,o?2.6:1.5),a&&(i.fillStyle=a,i.beginPath(),i.arc(...l(0,.5,.4),n*.05,0,7),i.fill())}function Pr(){return hn((i,e,t)=>{Je(i,0,0,e,t,"#232323"),Je(i,0,0,e,40,"#1d1d1d"),bh(i,"blender",12,7,26),["File","Edit","Render","Window","Help"].forEach((l,c)=>Kt(i,l,56+c*62,20,15,"#c9c9c9")),["Layout","Modeling","Sculpting","Shading"].forEach((l,c)=>{Je(i,e-380+c*92,8,84,26,c===1?"#3f3f3f":"#2b2b2b",6),Kt(i,l,e-338+c*92,21,13,c===1?"#f0f0f0":"#a8a8a8",500,"center")});let n=50,r=46,s=e-50-270,o=t-46-90,a=i.createLinearGradient(0,r,0,r+o);a.addColorStop(0,"#404040"),a.addColorStop(1,"#565656"),i.fillStyle=a,i.fillRect(n,r,s,o),i.save(),i.beginPath(),i.rect(n,r,s,o),i.clip(),i.strokeStyle="rgba(255,255,255,0.10)",i.lineWidth=1;for(let l=-14;l<=14;l++)i.beginPath(),i.moveTo(n+s/2+l*60,r+o*.52),i.lineTo(n+s/2+l*200,r+o),i.stroke();for(let l=0;l<9;l++){let c=r+o*.52+l*l*o*.5/60;i.beginPath(),i.moveTo(n,c),i.lineTo(n+s,c),i.stroke()}i.strokeStyle="rgba(203,68,68,0.85)",i.lineWidth=2,i.beginPath(),i.moveTo(n,r+o*.78),i.lineTo(n+s,r+o*.7),i.stroke(),i.strokeStyle="rgba(112,171,58,0.85)",i.beginPath(),i.moveTo(n+s*.52,r+o*.5),i.lineTo(n+s*.62,r+o),i.stroke(),Sh(i,n+s*.5,r+o*.5,150,{fill:{floor:"#6a6a6a",wallA:"#7a7a7a",wallB:"#8b8b8b",desk:"#a0a0a0"},line:"rgba(30,30,30,0.9)",outline:"#f5a623"}),i.restore(),Kt(i,"User Perspective",n+12,r+16,12,"rgba(255,255,255,0.7)"),Kt(i,"(1) Lab",n+12,r+32,11,"rgba(255,255,255,0.5)");for(let l=0;l<9;l++)Je(i,10,54+l*42,30,30,l===1?"#4772b3":"#333",5);Je(i,e-264,46,264,210,"#282828"),Kt(i,"Scene Collection",e-250,62,13,"#dcdcdc",600),["Lab","Walls","Desks","Chairs","Workstation","Monitor","Headset"].forEach((l,c)=>{Je(i,e-250+(c?14:0),82+c*22,6,6,c===5?"#f5a623":"#7a7a7a",3),Kt(i,l,e-236+(c?14:0),86+c*22,12,c===5?"#f5a623":"#bcbcbc")}),Je(i,e-264,262,264,t-262-90,"#2b2b2b"),["Location","Rotation","Scale"].forEach((l,c)=>{Kt(i,l,e-250,286+c*60,12,"#c4c4c4",600);for(let u=0;u<3;u++)Je(i,e-250+u*78,298+c*60,72,22,"#3d3d3d",4)}),Je(i,0,t-84,e,84,"#262626");for(let l=0;l<40;l++)Je(i,60+l*22,t-60,1,l%5?8:16,"#555");[180,320,470,640].forEach(l=>{i.save(),i.translate(l,t-30),i.rotate(Math.PI/4),Je(i,-6,-6,12,12,"#f5a623"),i.restore()})},1024,640)}function Lo(){return hn((i,e,t)=>{Je(i,0,0,e,t,"#383838"),Je(i,0,0,e,44,"#282828"),bh(i,"unity",12,8,28),["File","Edit","Assets","GameObject","Window"].forEach((l,c)=>Kt(i,l,56+c*70,22,14,"#cfcfcf")),Je(i,e/2-70,8,44,28,"#4c8be6",5),i.fillStyle="#fff",i.beginPath(),i.moveTo(e/2-55,15),i.lineTo(e/2-55,29),i.lineTo(e/2-43,22),i.fill(),Je(i,e/2-20,8,44,28,"#4a4a4a",5),Je(i,e/2+28,8,44,28,"#4a4a4a",5),Je(i,0,44,200,t-44-190,"#2f2f2f"),Kt(i,"Hierarchy",12,62,13,"#e0e0e0",600),[["SampleScene",0],["Lab",1],["Walls",2],["Desks",2],["XR Origin",1],["Workstation",1],["Monitor",2],["Headset",2]].forEach(([l,c],u)=>{l==="Monitor"&&Je(i,0,78+u*24,200,24,"#2c5d87"),Kt(i,l,16+c*16,91+u*24,13,l==="Monitor"?"#ffffff":"#c8c8c8")});let r=204,s=e-204-270,o=t-44-190,a=i.createLinearGradient(0,44,0,44+o);a.addColorStop(0,"#4b6f97"),a.addColorStop(1,"#a9bccd"),i.fillStyle=a,i.fillRect(r,44,s,o),i.save(),i.beginPath(),i.rect(r,44,s,o),i.clip(),Sh(i,r+s*.5,44+o*.55,165,{fill:{floor:"#6f747e",wallA:"#c9c2b6",wallB:"#d6cfc2",desk:"#c79f6e"},line:"rgba(20,24,32,0.55)",outline:"#ff9f1a",lit:"#ffd28a"}),i.restore(),Kt(i,"Scene",r+10,62,13,"#e6e6e6",600),i.strokeStyle="#e04b4b",i.lineWidth=3,i.beginPath(),i.moveTo(r+s-60,96),i.lineTo(r+s-30,108),i.stroke(),i.strokeStyle="#7fc043",i.beginPath(),i.moveTo(r+s-60,96),i.lineTo(r+s-60,62),i.stroke(),i.strokeStyle="#4c8be6",i.beginPath(),i.moveTo(r+s-60,96),i.lineTo(r+s-88,110),i.stroke(),Je(i,e-266,44,266,t-44-190,"#2f2f2f"),Kt(i,"Inspector",e-254,62,13,"#e0e0e0",600),Kt(i,"Monitor",e-254,92,15,"#ffffff",600),["Transform","Mesh Renderer","XR Simple Interactable"].forEach((l,c)=>{Je(i,e-258,112+c*88,250,26,"#3c3c3c",3),Je(i,e-250,121+c*88,8,8,"#4c8be6",2),Kt(i,l,e-234,126+c*88,12,"#dcdcdc",600);for(let u=0;u<3;u++)Je(i,e-250,146+c*88+u*18,232-u*40,9,"#454545",2)}),Je(i,0,t-186,e,186,"#2b2b2b"),Kt(i,"Project",12,t-168,13,"#e0e0e0",600),["Models","Materials","Scenes","Scripts","Prefabs","XR"].forEach((l,c)=>{Je(i,20+c*130,t-138,100,70,"#3a3a3a",6),Je(i,20+c*130+28,t-128,44,34,"#7f8a99",4),Kt(i,l,70+c*130,t-50,12,"#cfcfcf",500,"center")})},1024,640)}function Ir(i=0){return hn((e,t,n)=>{Je(e,0,0,t,n,"#1e1f24"),Je(e,0,0,t,34,"#2a2b31"),Je(e,0,34,220,n-34,"#232429");for(let s=0;s<14;s++)Je(e,18+s%3*14,56+s*24,90+(s*37+i*11)%90,8,s===4?"#5b8fd9":"#4a4d57",3);let r=["#c586c0","#9cdcfe","#dcdcaa","#569cd6","#ce9178","#6a9955"];for(let s=0;s<24;s++){let o=250+(s%4===2?30:0)+(s%7===3?30:0);for(let a=0;a<3+(s+i)%3;a++){let l=40+((s+1)*(a+3)*37+i*17)%120;Je(e,o,60+s*22,l,9,r[(s+a+i)%r.length],3),o+=l+12}}},1024,640)}function wh(){return hn((i,e,t)=>{Je(i,0,0,e,t,"#f3f3ef");let n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(0,0,0,0.05)"),i.fillStyle=n,i.fillRect(0,0,e,t),i.lineCap="round",i.lineJoin="round",[[90,"Blender","#d0701a"],[380,"Unity","#2a2f3a"],[670,"XR","#2c6db4"]].forEach(([s,o,a])=>{i.strokeStyle=a,i.lineWidth=5,i.beginPath(),i.roundRect(s,130,220,110,14),i.stroke(),i.font='600 44px "Segoe Print", "Bradley Hand", "Comic Sans MS", cursive',i.fillStyle=a,i.textAlign="center",i.textBaseline="middle",i.fillText(o,s+110,188)}),i.strokeStyle="#333",i.lineWidth=5,[[318,372],[608,662]].forEach(([s,o])=>{i.beginPath(),i.moveTo(s,186),i.lineTo(o,186),i.moveTo(o-16,170),i.lineTo(o,186),i.lineTo(o-16,202),i.stroke()}),i.strokeStyle="#3a7a3a",i.lineWidth=4,i.strokeRect(120,300,220,150),i.beginPath(),i.moveTo(120,360),i.lineTo(230,360),i.lineTo(230,450),i.moveTo(230,300),i.lineTo(230,330),i.stroke(),i.strokeStyle="#a33",i.lineWidth=3;for(let s=0;s<4;s++)i.beginPath(),i.moveTo(440,330+s*34),i.lineTo(600+s*53%110,330+s*34+(s%2*6-3)),i.stroke();i.fillStyle="#f7e27a",i.fillRect(760,300,130,120),i.strokeStyle="rgba(0,0,0,0.35)",i.lineWidth=3;for(let s=0;s<4;s++)i.beginPath(),i.moveTo(776,332+s*20),i.lineTo(870-s%2*28,332+s*20),i.stroke()},1024,460,{redraw:!0})}function Eh(){return hn((i,e,t)=>{let n=e/2;i.fillStyle="#f4f2ec",i.beginPath(),i.arc(n,n,n,0,7),i.fill(),i.strokeStyle="#2c2f38";for(let r=0;r<12;r++){let s=r/12*Math.PI*2;i.lineWidth=r%3?4:8,i.beginPath(),i.moveTo(n+Math.sin(s)*n*.78,n-Math.cos(s)*n*.78),i.lineTo(n+Math.sin(s)*n*.9,n-Math.cos(s)*n*.9),i.stroke()}i.lineCap="round",i.lineWidth=9,i.beginPath(),i.moveTo(n,n),i.lineTo(n+Math.sin(-1.05)*n*.5,n-Math.cos(-1.05)*n*.5),i.stroke(),i.lineWidth=6,i.beginPath(),i.moveTo(n,n),i.lineTo(n+Math.sin(.35)*n*.72,n-Math.cos(.35)*n*.72),i.stroke()},256,256)}function Th(i="#8f9bab"){return hn((e,t,n)=>{Je(e,0,0,t,n,i),e.strokeStyle="rgba(0,0,0,0.35)",e.lineWidth=4,e.strokeRect(6,6,t/2-9,n-12),e.strokeRect(t/2+3,6,t/2-9,n-12),e.fillStyle="rgba(0,0,0,0.42)";for(let r=0;r<2;r++)for(let s=0;s<6;s++)Je(e,24+r*(t/2),34+s*12,t/2-48,5,"rgba(0,0,0,0.42)",2);Je(e,t/2-22,n*.5,10,70,"#d9dbe0",4),Je(e,t/2+12,n*.5,10,70,"#d9dbe0",4)},256,640)}function Ah(i="#dedbd3"){return hn((e,t,n)=>{Je(e,0,0,t,n,i),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=4;for(let r=0;r<3;r++){let s=8+r*(n/3);e.strokeRect(8,s,t-16,n/3-12),Je(e,t/2-40,s+(n/3-12)/2-4,80,8,"#8a8f99",4)}},256,256)}function Rh(){return hn((i,e,t)=>{for(let n=0;n<9;n++){let r=n/9*t;Je(i,0,r,e,t/9-8,"#e6e2d8"),Je(i,0,r+t/9-8,e,8,"rgba(60,55,45,0.55)")}},128,512)}function Do(){return hn((i,e,t)=>{Je(i,0,0,e,t,"#1b1c21");for(let n=0;n<5;n++)for(let r=0;r<16;r++)Je(i,14+r*30,14+n*26,26,22,"#2e3038",4);Je(i,110,118,260,22,"#2e3038",4)},512,160)}function Ch(){return hn((i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#5f86b8"),n.addColorStop(.55,"#a9c1dc"),n.addColorStop(1,"#f0d9b5"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="rgba(70,86,100,0.55)";for(let r=0;r<14;r++){let s=40+r*53%60,o=24+r*37%70;i.fillRect(r*(e/14),t-o,s,o)}},1024,256)}function Ph(){return hn((i,e,t)=>{Je(i,0,0,e,t,"#eef0f2"),i.strokeStyle="#3d6db0",i.lineWidth=2,i.strokeRect(30,30,e-60,t-60),i.beginPath(),i.moveTo(30,t*.45),i.lineTo(e*.55,t*.45),i.lineTo(e*.55,t-30),i.moveTo(e*.55,30),i.lineTo(e*.55,t*.22),i.stroke(),i.strokeStyle="#8fa8c8",i.lineWidth=1;for(let n=1;n<12;n++)i.beginPath(),i.moveTo(30+n*((e-60)/12),30),i.lineTo(30+n*((e-60)/12),t-30),i.stroke();i.fillStyle="#3d6db0",[[70,60],[150,60],[230,60],[e*.7,t*.7]].forEach(([n,r])=>i.fillRect(n,r,34,22))},512,320)}function Ih(){return hn((i,e,t)=>{i.strokeStyle="rgba(226,181,63,0.95)",i.lineWidth=16,i.lineCap="butt";let n=20,r=130;[[n,n,1,1],[e-n,n,-1,1],[e-n,t-n,-1,-1],[n,t-n,1,-1]].forEach(([s,o,a,l])=>{i.beginPath(),i.moveTo(s+a*r,o),i.lineTo(s,o),i.lineTo(s,o+l*r),i.stroke()})},512,512)}function Lh({materials:i}){let e=new gt,t=To.half*2,n=it({size:[t+.4,.5,t+.4],at:[0,-.6,0],material:i.slab,radius:.08,fx:"slide",dir:new C(0,-6,0),shadow:!1}),r=it({size:[t+.46,.05,t+.46],at:[0,-.42,0],material:i.brass,radius:.012,fx:"slide",dir:new C(0,0,0),wire:!1,shadow:!1});e.add(n.root,r.root);let s=t,o=s*s,a=new Cn(.985,.06,.985).translate(0,.03,0),l=new _r(a,i.tile,o);l.receiveShadow=!0,l.frustumCulled=!1;let c=new Float32Array(o),u=[],h=new Pe(5659496),p=new Pe(6580856),d=new Pe;for(let v=0;v<s;v++)for(let R=0;R<s;R++){let T=v*s+R,A=v-s/2+.5,I=R-s/2+.5;u.push([A,I]),c[T]=Math.hypot(A-Nt.workstation[0],I-Nt.workstation[2])/9*.6+Gn(T)*.06,d.copy(h).lerp(p,((v+R)%2?.5:.1)+Gn(T+9)*.35),l.setColorAt(T,d)}e.add(l);let m=new Ft,x=-1;function g(v){if(v!==x){x=v;for(let R=0;R<o;R++){let T=Ge(v,c[R],c[R]+.4),[A,I]=u[R],w=T<=0?1e-4:Math.max(1e-4,Ao(T,1.1));m.position.set(A,-.06-1.3*(1-Ar(T)),I),m.scale.set(w,w,w),m.updateMatrix(),l.setMatrixAt(R,m.matrix)}l.instanceMatrix.needsUpdate=!0}}let f=it({size:[3.9,.02,3.3],at:[Nt.workstation[0],0,Nt.workstation[2]+.55],material:i.rug,radius:.008,fx:"drop",drop:2.2,wire:!1,shadow:!1});e.add(f.root);let _=new Vt({map:Ih(),transparent:!0,opacity:0,depthWrite:!1,color:12566463}),M=new ft(new Gt(2.9,2.9),_);return M.rotation.x=-Math.PI/2,M.position.set(3.4,.004,3),M.renderOrder=1,e.add(M),{group:e,update(v){n.set(Ge(v,...Qe.slab)),r.set(Ge(v,...Qe.trim)),g(Ge(v,...Qe.tiles));let R=Ge(v,...Qe.rug);f.set(R),_.opacity=It(Ge(R,.4,1))*.85}}}function je(i,e,t,n=[0,0,0],r=.012,s=null){let o=Math.max(.003,Math.min(r,Math.min(i,e,t)/2-.001)),a=new bi(i,e,t,o>.03?3:o>.012?2:1,o).translate(0,e/2,0);return s&&(s[0]&&a.rotateX(s[0]),s[1]&&a.rotateY(s[1]),s[2]&&a.rotateZ(s[2])),a.translate(n[0],n[1],n[2])}function Dn(i,e,t,n=[0,0,0],r=20){return new Mr(i,e,t,r).translate(0,t/2,0).translate(n[0],n[1],n[2])}function vc(i,e=[0,0,0],t=10){return new yi(i,t,Math.max(6,t-2)).translate(e[0],e[1],e[2])}function Uo(i,e){let t=new Pe(e),n=i.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r.set([t.r,t.g,t.b],s*3);return i.setAttribute("color",new pt(r,3)),i}function Xe(i,e,t,n,r=0){return r&&i.rotateY(r),i.translate(e,t,n)}function Lr(i,e,t,n,r=0){let s=new Gt(i.screen.w,i.screen.h).translate(0,i.screen.y,i.screen.z);return Xe(s,e,t,n,r)}function Dr(){let i=[];for(let n=0;n<5;n++){let r=n/5*Math.PI*2,s=je(.34,.03,.05,[.17,.07,0],.01);s.rotateY(r),i.push(s);let o=Math.cos(r)*.34,a=-Math.sin(r)*.34;i.push(Dn(.035,.035,.05,[o,0,a],10))}let e=Jt([...i,Dn(.032,.032,.34,[0,.08,0],12),je(.44,.03,.4,[0,.4,0],.01),je(.04,.24,.05,[0,.4,-.26],.01),je(.05,.04,.34,[-.29,.62,-.05],.015),je(.05,.04,.34,[.29,.62,-.05],.015),je(.03,.2,.03,[-.29,.44,-.05],.008),je(.03,.2,.03,[.29,.44,-.05],.008)]),t=Jt([je(.5,.09,.48,[0,.42,.02],.04),je(.46,.5,.07,[0,.66,-.27],.04,[-.12,0,0])]);return{base:e,fabric:t}}function ps(i,e){return{body:Jt([je(i+.06,e+.06,.045,[0,.15,0],.02),je(.09,.16999999999999998,.05,[0,0,-.045],.01),je(.34,.02,.22,[0,0,0],.01)]),screen:{w:i,h:e,y:.15+.03+e/2,z:.0235},top:.15+e+.06}}var No=()=>je(.46,.022,.16,[0,0,0],.008),Fo=()=>je(.06,.028,.1,[0,0,0],.025);function _c(){return{base:je(.5,.02,.34,[0,0,0],.01),lid:je(.5,.33,.015,[0,.02,-.16],.008,[-.22,0,0])}}var Si=()=>Jt([Dn(.045,.04,.1,[0,0,0],14),je(.02,.06,.03,[.06,.02,0],.008)]);function Oo(){return{body:Jt([Dn(.09,.1,.02,[0,0,0],16),je(.025,.42,.025,[0,.02,0],.008,[.15,0,0]),je(.025,.36,.025,[.04,.4,.06],.008,[-.75,0,0]),Dn(.02,.11,.14,[.04,.6,-.16],16).rotateX(0)]),bulb:vc(.035,[.04,.6,-.14],10)}}function yc(i=1){let e=i,t=[],n=[5144395,6066002,4288066,6922330];for(let r=0;r<9;r++){let s=r/9*Math.PI*2+r*.7,o=(.1+r%3*.05)*e,a=vc(.13*e,[Math.cos(s)*o,(.32+r%4*.08)*e,Math.sin(s)*o],8);a.scale(1,1.25,1),t.push(Uo(a,n[r%n.length]))}return t.push(Uo(vc(.16*e,[0,.5*e,0],8),n[1])),{pot:Jt([Dn(.15*e,.11*e,.24*e,[0,0,0],16),Dn(.155*e,.155*e,.03*e,[0,.24*e,0],16)]),leaves:Jt(t)}}function Dh(){return{shell:Jt([je(.4,.22,.26,[0,.02,0],.07),je(.46,.05,.04,[0,.13,-.12],.02)]),dark:Jt([je(.33,.14,.02,[0,.06,.135],.03),je(.3,.13,.05,[0,.055,-.15],.04),new Fi(.17,.018,8,24,Math.PI).rotateX(Math.PI/2).translate(0,.14,-.28)])}}var Mc=()=>Jt([new Fi(.05,.011,8,20).rotateX(-.9).translate(0,.07,.03),new mo(.022,.09,4,10).rotateX(Math.PI/2-.25).translate(0,.03,-.03)]);function Uh({materials:i}){let e=new gt,t=To.wallH,n=M=>(e.add(M.root),M),r=n(it({size:[.3,t,10.3],at:[-5.15,0,-.15],material:i.paint,radius:.02,fx:"rise"})),s=n(it({size:[10,t,.3],at:[0,0,-5.15],material:i.paint,radius:.02,fx:"rise"})),o=[],a=(M,v,R)=>{n(M),o.push({p:M,wallKey:v,order:R})},l=new C(.6,0,0),c=new C(0,0,.6);a(it({size:[.06,1.05,10],at:[-4.97,0,0],material:i.wainscot,radius:.015,fx:"slide",dir:l,wire:!1}),"wallA",0),a(it({size:[9.94,1.05,.06],at:[.03,0,-4.97],material:i.wainscot,radius:.015,fx:"slide",dir:c,wire:!1}),"wallB",0),a(it({size:[.09,.03,10],at:[-4.955,1.05,0],material:i.brass,radius:.01,fx:"slide",dir:l,wire:!1,shadow:!1}),"wallA",1),a(it({size:[9.94,.03,.09],at:[.03,1.05,-4.955],material:i.brass,radius:.01,fx:"slide",dir:c,wire:!1,shadow:!1}),"wallB",1),a(it({size:[.04,.12,10],at:[-4.93,0,0],material:i.baseboard,radius:.01,fx:"slide",dir:l,wire:!1}),"wallA",1),a(it({size:[9.94,.12,.04],at:[.03,0,-4.93],material:i.baseboard,radius:.01,fx:"slide",dir:c,wire:!1}),"wallB",1),a(it({size:[.36,.05,10.36],at:[-5.15,t,-.15],material:i.brass,radius:.012,fx:"drop",drop:1.5,wire:!1}),"wallA",2),a(it({size:[10.06,.05,.36],at:[0,t,-5.15],material:i.brass,radius:.012,fx:"drop",drop:1.5,wire:!1}),"wallB",2);let u=n(it({size:[.4,t+.06,.4],at:[-4.8,0,-4.8],material:i.paint,radius:.03,fx:"rise"})),h=dn(Ch(),.9),p=[],d=M=>(p.push(n(M)),M),m=d(it({size:[.02,1.62,6],at:[-4.985,1.1,-.7],material:h,radius:.004,fx:"slide",dir:new C(.4,0,0),wire:!1,shadow:!1})),x=(M,v,R=i.plasticWhite)=>d(it({size:M,at:v,material:R,radius:.01,fx:"drop",drop:1.2,wire:!1}));x([.1,.06,6.2],[-4.95,2.72,-.7]),x([.1,.05,6.2],[-4.95,1.08,-.7]),[-3.7,-1.7,.3,2.3].forEach(M=>x([.1,1.66,.07],[-4.95,1.08,M])),x([.26,.04,6.4],[-4.88,1.04,-.7],i.laminate),d(it({size:[.03,.62,6],at:[-4.93,2.1,-.7],material:dn(Rh(),.95),radius:.004,fx:"drop",drop:1,wire:!1,shadow:!1})),x([.1,.08,6.1],[-4.93,2.72,-.7],i.plasticWhite),d(it({size:[3,1.4,.03],at:[1.1,.95,-4.97],material:dn(wh(),1),radius:.008,fx:"slide",dir:new C(0,0,.5),wire:!1,shadow:!1})),x([3.1,1.5,.02],[1.1,.9,-4.99],i.steel),x([3,.04,.09],[1.1,.9,-4.93],i.steel),d(it({size:[.6,.6,.01],at:[3.95,2.72,-4.985],geometry:new go(.3,40),material:dn(Eh(),1),fx:"drop",drop:1,wire:!1,shadow:!1})),d(it({size:[.66,.66,.05],at:[3.95,2.72,-4.975],geometry:new Fi(.31,.03,8,40),material:i.brass,fx:"drop",drop:1,wire:!1,shadow:!1})),d(it({size:[1.3,2.2,.04],at:[3.85,0,-4.98],material:i.slab,radius:.006,fx:"slide",dir:new C(0,0,.5),wire:!1,shadow:!1})),x([.09,2.24,.14],[3.2,0,-4.93],i.woodDark),x([.09,2.24,.14],[4.5,0,-4.93],i.woodDark),x([1.4,.09,.14],[3.85,2.2,-4.93],i.woodDark);let g=d(it({size:[1.02,2.1,.05],at:[4.42,0,-4.86],geometry:je(1.02,2.1,.05,[-.51,0,0],.012),material:i.wood,radius:.012,fx:"drop",drop:1.4,wire:!1}));g.root.rotation.y=.62;let f=d(it({size:[.12,.04,.09],at:[4.42,1,-4.86],geometry:je(.12,.04,.09,[-.9,0,0],.01),material:i.brass,radius:.01,fx:"drop",drop:1.4,wire:!1,shadow:!1}));f.root.rotation.y=.62;let _={wallA:Qe.wallA,wallB:Qe.wallB,corner:Qe.corner};return{group:e,update(M){let v=A=>Ge(M,..._[A]);r.set(v("wallA")),s.set(v("wallB")),u.set(v("corner"));for(let{p:A,wallKey:I,order:w}of o)A.set(Ge(v(I),.35+w*.12,.85+w*.08));let R=Ge(M,...Qe.glazing);p.forEach((A,I)=>A.set(on(R,I,p.length,.7)));let T=It(Ge(M,...Qe.unity));m.mat.color.setScalar(Vn(.8,1.15,T))}}}function Nh({materials:i}){let e=new gt,t=Nt.deskX,n=[],r=[],s=_=>(e.add(_.root),n.push(_),_),o=_=>(e.add(_.root),r.push(_),_),a=_=>s(it({size:[.76,.72,.04],at:[t,0,_],material:i.laminate,radius:.008,fx:"drop",drop:3.2})),l=oi(Ah(),.6),c=_=>s(it({size:[.5,.68,.7],at:[t-.15,0,_],material:l,radius:.012,fx:"drop",drop:3.2}));a(2.67),c(1.9),a(.55),a(-1.65),c(-3.45),a(-3.97),s(it({size:[.84,.04,6.7],at:[t,.72,-.65],material:i.wood,radius:.012,fx:"drop",drop:2.4,keepWire:.1}));let u=[{tex:Pr(),gain:.85},{tex:Ir(1),gain:.85},{tex:Lo(),gain:.85}],h=[-.12,.28,-.3],p=[-2.3,-.55,.95],d=Do(),m=[],x=[];Nt.deskStations.forEach((_,M)=>{let v=ps(.86,.52);o(Ve(Xe(v.body,t-.05,.76,_,Math.PI/2),i.plastic,{shadow:!0})),o(Ve(Lr(v,t-.05,.76,_,Math.PI/2),dn(u[M].tex,u[M].gain),{shadow:!1})),o(Ve(Xe(No(),t+.3,.76,_,Math.PI/2),oi(d,.5))),o(Ve(Xe(Fo(),t+.3,.76,_+.36),i.plastic)),o(Ve(Xe(je(.22,.48,.46,[0,0,0],.02),t-.05,0,p[M],Math.PI/2),i.plastic,{drop:3}));let R=Dr(),T=-Math.PI/2+h[M];o(Ve(Xe(R.base,t+1.15,0,_+.1,T),i.steelDark,{drop:3.4,shadow:!0})),o(Ve(Xe(R.fabric,t+1.15,0,_+.1,T),M===1?i.fabricBlue:i.fabric,{drop:3.4,shadow:!0}))});let g=Oo();o(Ve(Xe(g.body,t-.22,.76,Nt.deskStations[0]-.62,Math.PI/2),i.steelDark));let f=o(Ve(Xe(g.bulb,t-.22,.76,Nt.deskStations[0]-.62,Math.PI/2),i.lampBulb.clone(),{shadow:!1}));return m.push(f),x.push(new C(t-.02,1.35,Nt.deskStations[0]-.5)),o(Ve(Xe(Si(),t+.28,.76,Nt.deskStations[1]-.5),i.plasticWhite)),o(Ve(Xe(je(.22,.03,.3,[0,0,0],.004),t+.3,.76,Nt.deskStations[1]+.55,.3),i.paper)),o(Ve(Xe(Si(),t+.25,.76,Nt.deskStations[2]-.5,1.2),i.pot)),{group:e,lampPositions:x,bulbs:m,update(_){let M=Ge(_,...Qe.desks);n.forEach((R,T)=>R.set(on(M,T,n.length,.6)));let v=Ge(_,...Qe.props);r.forEach((R,T)=>R.set(on(v,T,r.length,.62)))}}}function Fh({materials:i}){let e=new gt,t=[],n=[];[[-4.4,"#8593a6"],[-3.55,"#7c8f9c"]].forEach(([g,f])=>{let _=it({size:[.8,2,.55],at:[g,0,-4.68],material:oi(Th(f),.5,.25),radius:.015,fx:"rise"});e.add(_.root),t.push(_)});let r=-2.05,s=-4.76,o=[.02,.55,1.05,1.55,2.03],a=Jt([je(.04,2.06,.38,[-.83,0,0],.006),je(.04,2.06,.38,[.83,0,0],.006),...o.map(g=>je(1.66,.03,.38,[0,g,0],.006))]),l=it({size:[1.7,2.06,.38],at:[r,0,s],geometry:a,material:i.steel,fx:"rise"});e.add(l.root),t.push(l);let c=[9187129,3103372,3042127,8092546,13672762,3356223,13222836],u=[11636322,10846810,12294768],h=[5597834,7304320,4942691],p=[],d=0,m=()=>Gn(d++*1.37+3.1);o.slice(0,4).forEach((g,f)=>{let _=-.78,M=g+.03;for(;_<.7;){let v,R,T,A;if(f===0?(v=.28+m()*.12,R=.26+m()*.1,T=.3,A=h[Math.floor(m()*h.length)]):f===2&&m()>.4?(v=.28+m()*.14,R=.3+m()*.12,T=.32,A=u[Math.floor(m()*u.length)]):(v=.05+m()*.04,R=.3+m()*.12,T=.27,A=c[Math.floor(m()*c.length)]),_+v>.8)break;p.push(Uo(je(v,R,T,[_+v/2,M,0],.004),A)),_+=v+(f===0||f===2?.04:.005),f>=1&&m()>.9&&(_+=.16)}});let x=it({size:[1.7,1.7,.38],at:[r,0,s],geometry:Jt(p),material:i.vertex,radius:.01,fx:"drop",drop:2.6,wire:!1});return e.add(x.root),n.push(x),{group:e,update(g){let f=Ge(g,...Qe.storage);t.forEach((_,M)=>_.set(on(f,M,t.length,.5))),n.forEach(_=>_.set(Ge(f,.55,1)))}}}function Oh({materials:i}){let[e,,t]=Nt.island,n=new gt,r=[],s=[],o=p=>(n.add(p.root),r.push(p),p),a=p=>(n.add(p.root),s.push(p),p);[[-1.5,-.45],[1.5,-.45],[-1.5,.45],[1.5,.45]].forEach(([p,d])=>o(it({size:[.07,.71,.07],at:[e+p,0,t+d],material:i.steelDark,radius:.012,fx:"drop",drop:3.2,wire:!1}))),o(it({size:[3.2,.05,1.1],at:[e,.71,t],material:i.wood,radius:.012,fx:"drop",drop:2.4,keepWire:.1}));let l=(p,d,m,x)=>{let g=new Gt(.46,.3).translate(0,.165,.009).rotateX(-.22).translate(0,.02,-.16);return Xe(g,p,d,m,x)},c=.76;a(Ve(Xe(je(1.5,.006,.95,[0,0,0],.002),e-.25,c,t,.12),oi(Ph(),.9,0)));let u=_c(),h=_c();return a(Ve(Xe(u.base,e-1.1,c,t+.28),i.steel)),a(Ve(Xe(u.lid,e-1.1,c,t+.28),i.steel)),a(Ve(l(e-1.1,c,t+.28,0),dn(Ir(3),.85),{shadow:!1})),a(Ve(Xe(h.base,e+1.15,c,t-.22,Math.PI),i.steel)),a(Ve(Xe(h.lid,e+1.15,c,t-.22,Math.PI),i.steel)),a(Ve(l(e+1.15,c,t-.22,Math.PI),dn(Pr(),.85),{shadow:!1})),a(Ve(Xe(Si(),e+.55,c,t+.32,.8),i.plasticWhite)),a(Ve(Xe(Si(),e-.1,c,t-.36,2.1),i.pot)),[[e-.45,t+1.1,Math.PI-.2,i.fabric],[e+.75,t+1,Math.PI+.4,i.fabricBlue],[e+.2,t-1.05,.15,i.fabric]].forEach(([p,d,m,x])=>{let g=Dr();a(Ve(Xe(g.base,p,0,d,m),i.steelDark,{drop:3.4,shadow:!0})),a(Ve(Xe(g.fabric,p,0,d,m),x,{drop:3.4,shadow:!0}))}),{group:n,update(p){let d=Ge(p,...Qe.island);r.forEach((x,g)=>x.set(on(d,g,r.length,.5)));let m=Ge(p,...Qe.props);s.forEach((x,g)=>x.set(on(m,g,s.length,.62)))}}}function Bh({materials:i}){let[e,,t]=Nt.workstation,n=Nt.tableTop,r=new gt,s=[],o=(R,T=r)=>(T.add(R.root),s.push(R),R);o(it({size:[2.8,.05,1.3],at:[e,n-.05,t],material:i.wood,radius:.012,fx:"drop",drop:2.6,keepWire:.1})),[-1.32,1.32].forEach(R=>o(it({size:[.05,n-.05,1.1],at:[e+R,0,t],material:i.laminate,radius:.01,fx:"drop",drop:3.2}))),o(it({size:[2.56,.42,.03],at:[e,.26,t-.5],material:i.laminate,radius:.008,fx:"drop",drop:3.2,wire:!1}));let[a,l]=Nt.monitorRel,c=e+a,u=t+l,h=ps(1,.6),p=new gt;r.add(p),o(Ve(Xe(h.body,c,n,u),i.plastic,{shadow:!0}),p),o(Ve(Lr(h,c,n,u),dn(Pr(),.9),{shadow:!1}),p);let d=new Vt({map:Lo(),transparent:!0,opacity:0,depthWrite:!1}),m=new ft(Lr(h,c,n,u),d);m.position.z=.0015,m.renderOrder=2,m.visible=!1,p.add(m);let x=ps(.86,.52);o(Ve(Xe(x.body,e-.8,n,t-.38,.25),i.plastic,{shadow:!0})),o(Ve(Lr(x,e-.8,n,t-.38,.25),dn(Ir(2),.85),{shadow:!1})),o(Ve(Xe(No(),e-.15,n,t+.12),oi(Do(),.5))),o(Ve(Xe(Fo(),e+.34,n,t+.14,.1),i.plastic));let g=Dh();o(Ve(Xe(g.shell,e+1.02,n,t+.1,-.5),i.plasticWhite)),o(Ve(Xe(g.dark,e+1.02,n,t+.1,-.5),i.plastic)),o(Ve(Xe(Mc(),e+.9,n,t+.47,.6),i.plasticWhite)),o(Ve(Xe(Mc(),e+1.1,n,t+.42,1.05),i.plasticWhite));let f=Oo();o(Ve(Xe(f.body,e-1.2,n,t-.42,.5),i.steelDark));let _=o(Ve(Xe(f.bulb,e-1.2,n,t-.42,.5),i.lampBulb.clone(),{shadow:!1}));o(Ve(Xe(Si(),e-1.02,n,t+.2,.4),i.plasticWhite)),o(Ve(Xe(je(.22,.025,.3,[0,0,0],.004),e-.62,n,t+.32,.25),i.paper)),o(Ve(Xe(je(.22,.48,.46,[0,0,0],.02),e+1,0,t-.22,-.2),i.plastic,{drop:3})),[[e+.5,t+1.35,Math.PI+.3,i.fabric],[e-.85,t+1.7,Math.PI-.55,i.fabricBlue]].forEach(([R,T,A,I])=>{let w=Dr();o(Ve(Xe(w.base,R,0,T,A),i.steelDark,{drop:3.4,shadow:!0})),o(Ve(Xe(w.fabric,R,0,T,A),I,{drop:3.4,shadow:!0}))});let M=h.top-.15,v={group:p,unityMat:d,center:new C(c,n+.15+.03+.3,u+.03),bezel:{w:1.06,h:M,d:.045,cy:n+.15+M/2,z:u},x:c};return{group:r,target:v,lampPosition:new C(e-1.1,n+.75,t-.5),bulb:_,update(R){let T=Ge(R,...Qe.workstation);s.forEach((I,w)=>I.set(on(T,w,s.length,.68)));let A=It(Ge(R,...Qe.screens));m.visible=A>.001,d.opacity=A}}}function zh({materials:i}){let e=new gt,t=[],n=s=>(e.add(s.root),t.push(s),s);[[-2,.7],[.9,.62]].forEach(([s,o])=>{let a=yc(o);n(Ve(Xe(a.pot,-4.85,1.08,s),i.pot)),n(Ve(Xe(a.leaves,-4.85,1.08,s),i.vertex))});let r=yc(1.7);return n(Ve(Xe(r.pot,-4.2,0,3.9),i.pot,{drop:3})),n(Ve(Xe(r.leaves,-4.2,0,3.9),i.vertex,{drop:3})),n(Ve(Dn(.17,.15,.4,[2.75,0,-4.6],18),i.steelDark,{drop:3})),n(Ve(Jt([Dn(.075,.075,.42,[3.02,.35,-4.72],14),Dn(.03,.03,.08,[3.02,.77,-4.72],10)]),i.tape,{drop:3})),n(Ve(Xe(je(.55,.42,.5,[0,0,0],.01),4.6,0,-4.45,.1),i.cardboard,{drop:3})),n(Ve(Xe(je(.42,.3,.4,[0,0,0],.01),4.62,.42,-4.42,-.15),i.cardboard,{drop:3})),{group:e,update(s){let o=Ge(s,...Qe.props);t.forEach((a,l)=>a.set(on(o,l,t.length,.62)))}}}function kh({workstation:i,stage:e,onChange:t=()=>{},isAvailable:n=()=>!0}){let r=i.target,s=r.bezel,o=new gt,a=new Vt({color:16760938,side:Dt,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),l=new ft(new bi(s.w,s.h,s.d,2,.02),a);l.position.set(r.x,s.cy,s.z),l.visible=!1,r.group.add(l);let c=new C(0,1,0),u=new Vt({color:16773590,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),h=new ft(new Mr(.006,.006,1,6).translate(0,.5,0),u);h.visible=!1,h.frustumCulled=!1;let p=new Vt({color:16777215,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),d=new ft(new yi(.02,12,12),p);d.visible=!1,o.add(h,d);let m=document.createElement("button");m.className="lab-tag",m.type="button",m.disabled=!0,m.tabIndex=-1,m.setAttribute("aria-label","Select monitor"),m.setAttribute("aria-pressed","false"),m.innerHTML='<span class="lab-tag__box"><i class="lab-tag__dot"></i><span class="lab-tag__name">Monitor</span><span class="lab-tag__state">Selected</span></span>',e.parentElement.appendChild(m);let x=m.firstElementChild,g=x.querySelector(".lab-tag__state"),f=!1,_=x.offsetWidth||190,M=()=>{if(f)return;let K=x.offsetWidth||190;K!==_&&(_=K,t())},v=typeof ResizeObserver<"u"?new ResizeObserver(M):null;v?.observe(x),v||window.addEventListener("resize",M,{passive:!0}),document.fonts?.ready.then(M),document.fonts?.addEventListener("loadingdone",M);let R=new C,T=new C,A=new C,I=new C,w=new C,b=new C,P=-1,z=!1,F=NaN,V=NaN,X=-1,k=-1,j=-1,W=!1,re=0,ue=-1,me=null,Ie=null,qe=!1,q=null,ee=!1,ge=0,se=null,Se=null,we=e.closest?.(".story")||e.parentElement,He=new Mo,ct=new oe,Be=()=>!f&&Se&&n()&&V>=Qe.hover[0],Ye=()=>{re++,t()},U=()=>{Be()&&(Ie=!qe,me=!0,Ye())};function St(K){if(!Be())return!1;let te=e.getBoundingClientRect();return!te.width||!te.height||(ct.set((K.clientX-te.left)/te.width*2-1,-(K.clientY-te.top)/te.height*2+1),Math.abs(ct.x)>1||Math.abs(ct.y)>1)?!1:(He.setFromCamera(ct,Se),He.intersectObject(r.group,!0).some(Ae=>Ae.object.visible&&Ae.object!==l))}function Fe(K){q&&Math.hypot(K.clientX-q.x,K.clientY-q.y)>8&&(q=null),!(K.pointerType==="touch"||!Be())&&(se={clientX:K.clientX,clientY:K.clientY},!ge&&(ge=requestAnimationFrame(()=>{if(ge=0,!se||!Be())return;let te=St(se);te!==me&&(me=te,Ye())})))}function Te(){se=null,me!==null&&(me=null,Ye())}function ve(K){ee=!1;let te=m.contains(K.target);K.isPrimary===!1||K.pointerType!=="touch"&&K.button!==0||!Be()||!te&&!St(K)||(q={id:K.pointerId,x:K.clientX,y:K.clientY,at:performance.now(),progress:V,label:te})}function ke(K){let te=q;if(q=null,!(!te||K.pointerId!==te.id||V!==te.progress||performance.now()-te.at>500||Math.hypot(K.clientX-te.x,K.clientY-te.y)>8||!(te.label?m.contains(K.target):St(K)))){if(te.label){ee=!0;return}U()}}let Ee=()=>{q=null,ee=!1},E=K=>{K.detail>0&&"PointerEvent"in window&&!ee||(ee=!1,U())},y=K=>te=>{m.contains(te.target)||K(te)},O=y(Fe),$=y(ve),Q=y(ke),Z=y(Ee);m.addEventListener("click",E),"PointerEvent"in window&&(we.addEventListener("pointermove",O,{passive:!0}),we.addEventListener("pointerleave",Te,{passive:!0}),we.addEventListener("pointerdown",$,{passive:!0}),we.addEventListener("pointerup",Q,{passive:!0}),we.addEventListener("pointercancel",Z,{passive:!0}),m.addEventListener("pointermove",Fe,{passive:!0}),m.addEventListener("pointerdown",ve,{passive:!0}),m.addEventListener("pointerup",ke,{passive:!0}),m.addEventListener("pointercancel",Ee,{passive:!0}));function Me(K,te,Ae,ie=!1){Se=te;let ae=n();if(!ie&&K!==V&&(V=K,q=null,ee=!1,(me!==null||Ie!==null)&&(me=Ie=null,re++)),K===F&&Ae.w===X&&Ae.h===k&&_===j&&ae===W&&re===ue)return!1;F=K,X=Ae.w,k=Ae.h,j=_,W=ae,ue=re;let Re=K>=Qe.hover[0],_e=Re&&Ie!==null?Number(Ie):It(Ge(K,...Qe.select)),pe=Math.max(_e,Re&&me!==null?Number(me):It(Ge(K,...Qe.hover)));qe=_e>=.5;let We=.005+.009*_e;l.visible=pe>.001,l.scale.set(1+2*We/s.w,1+2*We/s.h,1+5*_e),a.opacity=.5*pe+.4*_e,r.group.position.y=.045*_e,r.unityMat.color.setScalar(1+.16*_e),te.matrixWorld.extractBasis(I,w,b),R.copy(te.position).addScaledVector(I,.8).addScaledVector(w,-.55).addScaledVector(b,-.7),A.copy(r.center).setY(r.center.y+r.group.position.y),T.subVectors(A,R);let ze=T.length();T.divideScalar(ze);let ut=Ar(pe);h.visible=pe>.001,h.position.copy(R),h.quaternion.setFromUnitVectors(c,T),h.scale.set(1,ze*ut,1),u.opacity=.34*pe*(1-.6*_e),d.visible=ut>.98,d.position.copy(A),p.opacity=.9*pe,d.scale.setScalar(1-.35*_e);let L=Re&&Ie!==null?1:_e;m.style.opacity=String(L);let le=ae&&Re&&L>.001;if(m.disabled=!le,m.tabIndex=le?0:-1,m.classList.toggle("is-interactive",le),m.setAttribute("aria-pressed",String(qe)),m.setAttribute("aria-label",qe?"Deselect monitor":"Select monitor"),g.textContent=qe?"Selected":"Select",L>.001){z||M(),A.set(r.x+s.w/2,s.cy+s.h/2+r.group.position.y,s.z).project(te);let J=(A.x*.5+.5)*Ae.w,de=Math.max(96,(-A.y*.5+.5)*Ae.h),fe=Ae.w-J-30-_-12;m.classList.toggle("is-left",fe<0&&J>Ae.w/2),m.style.transform=`translate(${(J+(Ae.x||0)).toFixed(1)}px, ${(de+(Ae.y||0)).toFixed(1)}px)`}z=L>.001;let Y=Math.round(_e*100)/100;return Y!==P&&(P=Y,e.style.setProperty("--lab-focus",String(Y))),!0}return{group:o,update:Me,stats:()=>({manualHover:me,manualSelect:Ie}),dispose(){f=!0,v?.disconnect(),window.removeEventListener("resize",M),document.fonts?.removeEventListener("loadingdone",M),cancelAnimationFrame(ge),we.removeEventListener("pointermove",O),we.removeEventListener("pointerleave",Te),we.removeEventListener("pointerdown",$),we.removeEventListener("pointerup",Q),we.removeEventListener("pointercancel",Z),m.removeEventListener("pointermove",Fe),m.removeEventListener("pointerdown",ve),m.removeEventListener("pointerup",ke),m.removeEventListener("pointercancel",Ee),m.removeEventListener("click",E),m.remove(),e.style.removeProperty("--lab-focus")}}}function Vh({quality:i}){let e=new gt,t=Hh([[0,"rgba(232,181,102,0.55)"],[.45,"rgba(201,113,63,0.18)"],[1,"rgba(201,113,63,0)"]]),n=new Vt({map:t,transparent:!0,opacity:0,blending:Ui,depthWrite:!1,toneMapped:!1}),r=new ft(new Gt(30,30).rotateX(-Math.PI/2),n);r.position.y=-.72,r.renderOrder=-2,e.add(r);let s=i.low?110:240,o=new Float32Array(s*3),a=new Float32Array(s),l=new Float32Array(s),c=new Float32Array(s*3);for(let d=0;d<s;d++)o[d*3]=(Gn(d*3.1)-.5)*20,o[d*3+1]=-.5,o[d*3+2]=(Gn(d*5.7)-.5)*20,a[d]=Gn(d*7.3),l[d]=.012+Gn(d*11.9)*.02;let u=new At;u.setAttribute("position",new pt(c,3));let h=new rs({size:.09,map:Hh([[0,"rgba(255,240,215,1)"],[1,"rgba(255,240,215,0)"]]),color:yn.champagne,transparent:!0,opacity:0,blending:Ui,depthWrite:!1,toneMapped:!1,sizeAttenuation:!0}),p=new ri(u,h);return p.frustumCulled=!1,e.add(p),{group:e,update(d,m){let x=It(Ge(d,...Qe.slab));n.opacity=x*.12,h.opacity=x*.28;for(let g=0;g<s;g++){let f=(m*l[g]+a[g])%1;c[g*3]=o[g*3]+Math.sin(m*.15+a[g]*6.28)*.5,c[g*3+1]=o[g*3+1]+f*9,c[g*3+2]=o[g*3+2]+Math.cos(m*.12+a[g]*6.28)*.5}u.attributes.position.needsUpdate=!0}}}function Hh(i){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);i.forEach(([s,o])=>n.addColorStop(s,o)),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new yr(e);return r.colorSpace=Tt,r}function Rx(){let i=matchMedia("(pointer: coarse)").matches,e=Math.min(screen.width,screen.height)<700,t=i||e;return{low:t,maxDpr:t?1.5:2,shadowSize:t?1024:2048,bloom:!t}}async function Gh({canvas:i,stage:e,state:t,pause:n=null}){performance.mark("hiwi:start");let r=Rx(),s=document.documentElement.classList.contains("has-story"),o=!1,a=!0,l=0,c=new _i({canvas:i,antialias:!r.bloom,powerPreference:"high-performance",alpha:!1,stencil:!1,preserveDrawingBuffer:!s});c.outputColorSpace=Tt,c.toneMapping=hs,c.toneMappingExposure=1,c.shadowMap.enabled=!0,c.shadowMap.type=Xl,c.shadowMap.autoUpdate=!1,c.shadowMap.needsUpdate=!0,c.setClearColor(yn.bg,1);let u=new Pn;u.background=new Pe(yn.bg),u.matrixWorldAutoUpdate=!1;let h=window.SceneIdle,p=he=>new Promise(Ce=>setTimeout(Ce,he));n||(n=(he=200,Ce=900)=>h?h.quiet(he,Ce):p(he)),await n();let d=lh(ch(c));await n();let m=dh(),{camera:x}=m,g=uh(u,r),f=g.group.children.find(he=>he.castShadow&&he.shadow),_=new Float64Array(48).fill(NaN),M=f?[f.matrixWorld.elements,f.target.matrixWorld.elements,f.shadow.camera.projectionMatrix.elements]:[],v=xh(),R=Lh({materials:d}),T=Uh({materials:d});await n();let A=Nh({materials:d}),I=Fh({materials:d}),w=Oh({materials:d});await n();let b=Bh({materials:d}),P=zh({materials:d}),z=Vh({quality:r});await n();let F=()=>{},V=kh({workstation:b,stage:e,onChange:()=>F(),isAvailable:()=>!o&&a&&!document.hidden&&(!s||ze())});[v,z,R,T,A,I,w,b,P,V].forEach(he=>u.add(he.group)),g.setPractical(A.lampPositions[0],b.lampPosition);let k=[...A.bulbs,b.bulb],j=r.bloom?gh(c,u,x):null,W=!!j,re=Math.min(window.devicePixelRatio||1,r.maxDpr),ue={w:0,h:0,x:0,y:0},me=0;function Ie(){if(o)return;let he=Math.max(1,e.clientWidth),Ce=Math.max(1,e.clientHeight),Ke=c.getPixelRatio()!==re;if(!(he===ue.w&&Ce===ue.h&&!Ke))return ue.w=he,ue.h=Ce,ue.x=e.offsetLeft,ue.y=e.offsetTop,Ke?c.setDrawingBufferSize(he,Ce,re):c.setSize(he,Ce,!1),j?.setSize(he,Ce,re),m.resize(he,Ce),me++,c.shadowMap.needsUpdate=!0,!Te&&(!s||O>0)&&Fe(),!0}let qe=typeof ResizeObserver<"u"?new ResizeObserver(Ie):null;qe?.observe(e),qe||window.addEventListener("resize",Ie,{passive:!0});let q=0,ee=0,ge=NaN,se=-1,Se=NaN,we=NaN,He=0,ct=0;function Be(he,Ce,Ke=!1){let rt=he!==ge||se!==me,S=It(Ge(he,...Qe.unity));rt&&v.update(he),z.update(he,Ce),rt&&(R.update(he),T.update(he,Ce),A.update(he),I.update(he),w.update(he),b.update(he),P.update(he),k.forEach(B=>B.mat.emissiveIntensity=.2+2.4*S),m.update(he));let D=V.update(he,x,ue,Ke);if(rt&&(g.update({unity:S}),j?.setGrade(S),ge=he,se=me),rt||D){u.updateMatrixWorld(),ct++;let B=Math.min(he,Qe.props[1]),H=b.target.group.position.y;(B!==Se||H!==we)&&(c.shadowMap.needsUpdate=!0,Se=B,we=H)}}let Ye=!1;function U(){if(!f)return;f.updateWorldMatrix(!0,!1),f.target.updateWorldMatrix(!0,!1);let he=0;for(let Ce of M)for(let Ke of Ce)Ke!==_[he]&&(_[he]=Ke,c.shadowMap.needsUpdate=!0),he++;f.shadow.needsUpdate&&(c.shadowMap.needsUpdate=!0)}function St(he=!0){if(o||!a)return;U();let Ce=c.shadowMap.enabled&&c.shadowMap.needsUpdate;j?j.render():c.render(u,x),Ce&&He++,he&&!Ye&&(performance.mark("hiwi:live"),Ye=!0,e.classList.add("is-live"))}function Fe(){o||(Be(q,ee),St())}let Te=!1,ve=0,ke=0,Ee=0,E=0,y=!1,O=0,$=c.extensions.has("KHR_parallel_shader_compile"),Q=!s,Z=!1,Me=()=>{},K=null,te=0,Ae=()=>{},ie=0,ae=0,Re=e.parentElement,_e=e.closest(".story"),pe=()=>getComputedStyle(i).visibility!=="hidden"&&parseFloat(getComputedStyle(Re).opacity)>.01,We=()=>typeof t.visible=="boolean"?t.visible:pe(),ze=()=>!o&&a&&y&&!document.hidden&&We();function ut(){return typeof t.override=="number"?t.override:t.progress}F=()=>{o||!a||!Te&&(!s||ze())&&(q=ut(),Fe())};function L(he){if(o||!Te)return;ve=requestAnimationFrame(L);let Ce=Math.min(.05,(he-ke)/1e3||.016);if(ke=he,ee+=Ce,!a||!y||document.hidden||(typeof t.visible=="boolean"?!t.visible:Ee++%10===0&&!pe())){J();return}q=ut(),Fe(),O++,le(Ce)}function le(he){t.noAdapt||(E=he>.028?E+1:Math.max(0,E-2),!(E<60)&&(E=0,re>1?(re=Math.max(1,re-.25),Ie()):j&&W&&(W=!1,j.setBloom(!1))))}function Y(){if(!(o||!a||Te)){if(!Q){if(Z)return;Z=!0,G=!0,Le();let he=l;Be(ut(),ee),pn().then(()=>{o||!a||he!==l||(performance.mark("hiwi:primed"),Q=!0,Z=!1,Me())});return}Te=!0,ke=performance.now(),q=ut(),ve=requestAnimationFrame(L)}}function J(){Te=!1,cancelAnimationFrame(ve),ve=0}if(s){let he=J;Ae=()=>{if(clearTimeout(te),te=0,o||!a||!y||document.hidden){he();return}ze()?Y():(he(),typeof t.visible!="boolean"&&(te=setTimeout(Ae,200)))},document.addEventListener("visibilitychange",Ae),Me=Ae,J=()=>{he(),o||Ae()},typeof IntersectionObserver<"u"?(K=new IntersectionObserver(([Ce])=>{o||(y=Ce.isIntersecting,y?Ae():J())}),K.observe(e)):(y=!0,Ae()),_e?.addEventListener("sceneprogress",Ae)}else q=1,t.progress=1,ie=requestAnimationFrame(()=>{ie=0,Ie()}),document.fonts?.ready.then(()=>{o||(ae=requestAnimationFrame(()=>{ae=0,Fe()}))});function de(he){o||(he.preventDefault(),a=!1,l++,Q=!1,Z=!1,Xt=null,be.length=0,J())}function fe(){o||(a=!0,me++,Se=we=NaN,c.shadowMap.needsUpdate=!0,s?Me():Fe())}i.addEventListener("webglcontextlost",de),i.addEventListener("webglcontextrestored",fe),Ie();let ne=new $t(1,1),be=[],et=t.prepareLog=[],G=!1,Le=()=>{},Ze=new Promise(he=>{Le=he}),ot=(he,Ce=4e3)=>G?Promise.resolve():Promise.race([Ze,n(he,Ce)]);function wt(he,Ce,Ke=null){let rt=c.getRenderTarget();c.setRenderTarget(Ce?null:ne);try{return $?c.compileAsync(he,x,Ke):(c.compile(he,x,Ke),Promise.resolve())}finally{c.setRenderTarget(rt)}}function at(){let he={[An]:Dt,[Dt]:An,[rn]:rn},Ce=new gt,Ke=new Set;return u.traverse(rt=>{if(!rt.isMesh||!(rt.castShadow||rt.userData.shadowCaster)||!rt.material||Array.isArray(rt.material))return;let S=rt.material,D=S.shadowSide??he[S.side],B=[D,!!S.map,!!rt.isInstancedMesh,!!rt.instanceColor].join();if(Ke.has(B))return;Ke.add(B);let H=new es({depthPacking:oc,side:D,map:S.map||null}),N=rt.isInstancedMesh?new _r(rt.geometry,H,1):new ft(rt.geometry,H);rt.instanceColor&&(N.instanceColor=rt.instanceColor),Ce.add(N)}),be.push(Ce),Ce}let vt=null;function ht(he){let Ce=new gt;vt||(vt=new Gt(2,2));for(let[Ke,rt]of j.programs())rt===he&&Ce.add(new ft(vt,Ke));return be.push(Ce),Ce}function tn(he){he.traverse(Ce=>{let Ke=Ce.material?Array.isArray(Ce.material)?Ce.material:[Ce.material]:[];for(let rt of Ke)c.properties.get(rt).currentProgram?.getUniforms()})}function Wt(){let he=new Set;return u.traverse(Ce=>{let Ke=Ce.material?Array.isArray(Ce.material)?Ce.material:[Ce.material]:[];for(let rt of Ke)for(let S of Object.values(rt))S?.isTexture&&!S.isRenderTargetTexture&&he.add(S)}),[...he]}let Xt=null;function pn(){if(Xt)return Xt;let he=l;return Xt=(async()=>{let Ce=[["room",()=>wt(u,!j)],["shadows",()=>wt(at(),!1,u)],j&&["post",()=>wt(ht(!1),!1).then(()=>wt(ht(!0),!0))]].filter(Boolean);for(let[Ke,rt]of Ce){if(await ot(300),o||he!==l)return!1;let S=performance.now();await rt(),et.push({step:Ke,ms:Math.round(performance.now()-S),programs:c.info.programs?.length})}$||await ot(400,1500);for(let Ke of[u,...be]){if(await ot(150,1500),o||he!==l)return!1;tn(Ke)}for(let Ke of Wt()){if(await ot(150,1500),o||he!==l)return!1;c.initTexture(Ke)}return et.push({step:"textures",programs:c.info.programs?.length}),!0})().catch(Ce=>(o||console.warn("HiWi lab: shader preparation skipped \u2014",Ce),!1)),Xt}return{warm:s?pn():Promise.resolve(!1),renderer:c,scene:u,camera:x,quality:r,workstation:b,screenRect(){let he=b.target,Ce=he.bezel,Ke=e.getBoundingClientRect(),rt=[-1,1].flatMap(B=>[-1,1].map(H=>new C(he.x+B*Ce.w/2,Ce.cy+H*Ce.h/2+he.group.position.y,Ce.z+Ce.d/2).project(x))),S=rt.map(B=>Ke.left+(B.x*.5+.5)*Ke.width),D=rt.map(B=>Ke.top+(-B.y*.5+.5)*Ke.height);return{x:Math.min(...S),y:Math.min(...D),width:Math.max(...S)-Math.min(...S),height:Math.max(...D)-Math.min(...D)}},stats:()=>({running:Te,inView:y,drawn:O,dpr:re,bloom:W,L:q,shadowUpdates:He,matrixUpdates:ct,contextAvailable:a,manualInput:V.stats()}),tune:({dpr:he,bloom:Ce,shadows:Ke}={})=>{o||(typeof he=="number"&&(re=he),typeof Ce=="boolean"&&j&&(W=Ce,j.setBloom(Ce)),typeof Ke=="boolean"&&(c.shadowMap.enabled=Ke,c.shadowMap.needsUpdate=!0,u.traverse(rt=>rt.material&&(rt.material.needsUpdate=!0))),!Ie()&&!Te&&(!s||O>0)&&Fe())},dispose(){o||(o=!0,J(),clearTimeout(te),Le(),ne.dispose(),cancelAnimationFrame(ie),cancelAnimationFrame(ae),qe?.disconnect(),window.removeEventListener("resize",Ie),K?.disconnect(),_e?.removeEventListener("sceneprogress",Ae),document.removeEventListener("visibilitychange",Ae),i.removeEventListener("webglcontextlost",de),i.removeEventListener("webglcontextrestored",fe),V.dispose(),j?.dispose(),c.dispose())}}}var fn=Er.clamp,bc=(i,e,t)=>{let n=fn((t-i)/(e-i),0,1);return n*n*(3-2*n)};function Cx(){let i=matchMedia("(pointer: coarse)").matches,e=Math.min(window.innerWidth,window.innerHeight)<721,t=navigator.deviceMemory||8,n=navigator.hardwareConcurrency||8,r=i||e||t<=4||n<=4;return{low:r,count:t<=2?3500:r?5500:12e3,maxDpr:t<=2?1:r?1.25:1.5,pointSize:r?1.8:1.7}}function Xh(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Px(i){let e=i.bounds,n=e?.min?.length===3&&e?.max?.length===3&&e.min.every((o,a)=>Number.isFinite(o)&&Number.isFinite(e.max[a])&&(a===2?e.max[a]>=o:e.max[a]>o))?new vn(new C().fromArray(e.min),new C().fromArray(e.max)):new vn().setFromBufferAttribute(new pt(i.positions,3)),r=n.getCenter(new C),s=n.getSize(new C);if(n.isEmpty()||!Number.isFinite(s.x+s.y)||s.x<=0||s.y<=0)throw new Error("Portrait geometry has no visible surface");return{center:r,size:s}}function Ix(i,e,t){let n=Xh(6270189),r=i.positions,s=i.indices,o=Math.floor(s.length/3),a=new Float64Array(o),l=0;for(let x=0;x<o;x++){let g=s[x*3]*3,f=s[x*3+1]*3,_=s[x*3+2]*3,M=((r[g+1]+r[f+1]+r[_+1])/3-e.center.y)/e.size.y+.5,v=1+2.5*bc(.45,.82,M),R=Math.abs((r[f]-r[g])*(r[_+1]-r[g+1])-(r[f+1]-r[g+1])*(r[_]-r[g]));l+=R*v,a[x]=l}if(!Number.isFinite(l)||l<=0)throw new Error("Portrait geometry has no triangles");let c=new Float32Array(t*3),u=new Float32Array(t*3),h=new Float32Array(t*3),p=new Float32Array(t*4),d=new Pe;for(let x=0;x<t;x++){let g=n()*l,f=0,_=o-1;for(;f<_;){let F=f+_>>>1;a[F]<g?f=F+1:_=F}let M=[s[f*3],s[f*3+1],s[f*3+2]],v=Math.sqrt(n()),R=n(),T=[1-v,v*(1-R),v*R],A=0,I=0,w=0,b=0,P=0;for(let F=0;F<3;F++){let V=M[F]*3,X=T[F];A+=r[V]*X,I+=r[V+1]*X,w+=i.colors[V]*X,b+=i.colors[V+1]*X,P+=i.colors[V+2]*X}c.set([A-e.center.x,I-e.center.y,0],x*3),d.setRGB(w,b,P,Tt),u.set([d.r,d.g,d.b],x*3),h.set([(n()-.5)*1.7,n(),n()-.5],x*3);let z=1-fn((I-e.center.y)/e.size.y+.5,0,1);p.set([n(),.55+Math.pow(n(),5)*1.4,n()<.045?1:0,z],x*4)}let m=new At;return m.setAttribute("position",new pt(c,3)),m.setAttribute("color",new pt(u,3)),m.setAttribute("aCloud",new pt(h,3)),m.setAttribute("aSeed",new pt(p,4)),m.setDrawRange(0,t),m}var Lx=`
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
`,Wh=`
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
`;function Dx(i){let e=i.groupIds.length,t=new Float32Array(i.colors.length),n=new Float32Array(e*4),r=new Pe,s=Xh(2119680269);for(let a=0;a<e;a++)r.setRGB(i.colors[a*3],i.colors[a*3+1],i.colors[a*3+2],Tt),t.set([r.r,r.g,r.b],a*3),n.set([s(),s(),s(),s()],a*4);let o=new At;return o.setAttribute("position",new pt(i.positions,3)),o.setAttribute("color",new pt(t,3)),o.setAttribute("aGroup",new pt(i.groupIds,1)),o.setAttribute("aSeed",new pt(n,4)),o}var Ux=`
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
`;function qh({canvas:i,container:e=i?.parentElement,state:t,portraitData:n,assetUrl:r,loadPortraitData:s,onError:o,settle:a}){if(!i||!e||!t)throw new Error("Portrait requires canvas, container, and state");let l=Cx(),c=new _i({canvas:i,alpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"});c.outputColorSpace=Tt,c.toneMapping=xn,c.setClearColor(0,0),c.autoClear=!1,c.debug.onShaderError=(G,Le,Ze,ot)=>{let wt=G.getProgramInfoLog(Le)||G.getShaderInfoLog(Ze)||G.getShaderInfoLog(ot);throw new Error(`Portrait shader compilation failed: ${wt||"unknown driver error"}`)};let u=new Pn,h=new kn(-1,1,1,-1,.1,2e3);h.position.z=1e3;let p=G=>c.extensions.has("KHR_parallel_shader_compile")?c.compileAsync(G,h):Promise.resolve(c.compile(G,h)),d=Math.min(window.devicePixelRatio||1,l.maxDpr),m=l.count,x,g,f,_,M=64,v=0,R=0,T=0,A=!1,I=!1,w=!1,b=!0,P=0,z=!0,F=!1,V=!1,X=0,k=0,j=0,W=0,re=0,ue=0,me=0,Ie=0,qe=[],q=matchMedia("(prefers-reduced-motion: reduce)"),ee=!q.matches,ge=1e3/(l.low?30:45),se=0,Se=0,we=0,He=new oe,ct=new oe,Be=!1,Ye=0,U=!1,St=0;function Fe(){return!I&&!w&&A&&b&&!document.hidden}function Te(){return fn(Number(t.exitProgress)||0,0,1)}function ve(){return fn(Number(t.workProgress)||0,0,1)}function ke(G){return t.textEnabled!==!1&&_&&(Number(t.textProgress?.[G])||0)>0&&(Number(t.textOpacity?.[G])||0)<1}function Ee(){if(t.workActive)return ve()>0&&ve()<.85;let G=Te();return G>0?G<1:(Number(t.progress)||0)>0&&(Number(t.photoOpacity)||0)<1}function E(){if(!f||t.textEnabled===!1)return!1;if(t.workActive)return ve()>0&&(Number(t.workOpacity)||0)<1;let G=Te();return G>0?G<1:[0,1,2].some(ke)}function y(){return Fe()&&t.visible&&(Ee()||E())}function O(){if(!y()||!ee)return!1;let G=Number(t.progress)||0;return t.workActive?ve()>0&&ve()<.98:Te()>0?Te()<.99:G>.035&&G<.9||[0,1,2].some(Le=>ke(Le)&&(Number(t.textProgress[Le])||0)<.98)}function $(){!P&&Fe()&&(z&&y()||F||O())&&(P=requestAnimationFrame(Ae))}function Q(G=!1){if(I)return;let Le=t.frame,Ze=t.viewport,ot=t.portal,wt=[t.progress,t.visible,t.photoOpacity,t.interactive,Le?.x,Le?.y,Le?.width,Le?.height,Ze?.width,Ze?.height,ot?.x,ot?.y,ot?.width,ot?.height,ot?.mix,t.exitProgress,t.exitTarget?.x,t.exitTarget?.y,t.workActive,t.textEnabled,t.workProgress,t.workOpacity,t.workOrigin?.x,t.workOrigin?.y,t.workOrigin?.width,t.workOrigin?.height,t.workOffset?.x,t.workOffset?.y,...[0,1,2].flatMap(at=>[t.textProgress?.[at],t.textOpacity?.[at],t.textOffsets?.[at]?.x,t.textOffsets?.[at]?.y])];(G||wt.some((at,vt)=>at!==qe[vt]))&&(z=!0),qe=wt,y()||(P&&cancelAnimationFrame(P),P=0,j=0,Se=0,se=0,F=V,Ye=0,ae()),t.interactive===!1&&ae(),Ze&&(Ze.width!==X||Ze.height!==k)&&Z(),$()}function Z(){if(I)return;let G=e.getBoundingClientRect(),Le=t.viewport,Ze=Math.max(1,Math.round(Le?.width||G.width||window.innerWidth)),ot=Math.max(1,Math.round(Le?.height||G.height||window.innerHeight));(Ze!==X||ot!==k||c.getPixelRatio()!==d)&&(X=Ze,k=ot,c.setPixelRatio(d),c.setSize(X,k,!1),h.left=-X/2,h.right=X/2,h.top=k/2,h.bottom=-k/2,h.updateProjectionMatrix(),z=!0),$()}function Me(){let G=t.frame||{x:0,y:0,width:X,height:k},Le=Number.isFinite(G.x)?G.x:0,Ze=Number.isFinite(G.y)?G.y:0,ot=Math.max(1,Number.isFinite(G.width)?G.width:X),wt=Math.max(1,Number.isFinite(G.height)?G.height:k),at=Math.max(x.size.y,x.size.x/(ot/wt))*.55,vt=g.material.uniforms;vt.uTargetScale.value=wt/(2*at),vt.uTargetCenter.value.set(Le+ot/2-X/2,k/2-Ze-wt/2);let ht=t.portal,tn=ht&&[ht.x,ht.y,ht.width,ht.height].every(Number.isFinite)&&ht.width>0&&ht.height>0,Wt=tn?fn(Number(ht.mix)||0,0,1):1,Xt=tn?Er.lerp(ht.width,X,Wt):X,pn=tn?Er.lerp(ht.height,k,Wt):k,Qt=tn?ht.x*(1-Wt):0,he=tn?ht.y*(1-Wt):0;vt.uViewport.value.set(Xt,pn),vt.uFieldCenter.value.set(Qt+Xt/2-X/2,k/2-he-pn/2);let Ce=t.exitTarget||{x:X/2,y:k/2};vt.uExitTarget.value.set(Ce.x-X/2,k/2-Ce.y);let Ke=t.workOrigin||{x:X/2,y:k/2,width:X*.4,height:k*.3};vt.uWorkOrigin.value.set(Ke.x+Ke.width/2-X/2,k/2-Ke.y-Ke.height/2,Ke.width,Ke.height);let rt=t.workOffset||{x:X/2,y:k/2},S=_?.groupBounds?.[3]||{width:1,height:1};if(vt.uWorkTarget.value.set(rt.x+S.width/2-X/2,k/2-rt.y-S.height/2),f){let D=f.material.uniforms;D.uCanvas.value.set(X,k),D.uFieldCenter.value.copy(vt.uFieldCenter.value),D.uFieldSize.value.copy(vt.uViewport.value),D.uExitTarget.value.copy(vt.uExitTarget.value),D.uWorkOrigin.value.copy(vt.uWorkOrigin.value),D.uTextProgress.value.set(...[0,1,2].map(B=>fn(Number(t.textProgress?.[B])||0,0,1)),ve()),D.uTextOpacity.value.set(...[0,1,2].map(B=>fn(Number(t.textOpacity?.[B])||0,0,1)),fn(Number(t.workOpacity)||0,0,1)),D.uTextOffsets.value.forEach((B,H)=>{let N=H===3?rt:t.textOffsets?.[H];B.set(Number(N?.x)||0,Number(N?.y)||0)})}}function K(){c.setViewport(0,0,X,k),c.clear(!0,!1,!1),V=!1,F=!1,me=0}function te(){t.noAdapt||ue>=2||(m=Math.max(2400,Math.floor(m*.72)),g.geometry.setDrawRange(0,m),d=Math.max(.8,d-.2),ue++,Z(),W=0)}function Ae(G){if(P=0,!Fe()){j=0,Se=0,se=0;return}if(!y()){F&&K(),z=!1,j=0,Se=0,se=0;return}let Le=O(),Ze=z;if(!Ze&&(!Le||G<se-.5)){Le&&$();return}let ot=Se?Math.min(.06,Math.max(0,(G-Se)/1e3)):0;Se=G,Le&&(we+=ot),U&&G>=St&&(U=!1),He.lerp(ct,1-Math.exp(-ot*14));let wt=U&&Le&&t.interactive!==!1?1:0;Ye+=(wt-Ye)*(1-Math.exp(-ot*(wt?14:4.3))),Ye<.001&&!wt&&(Ye=0);let at=fn(Number(t.progress)||0,0,1),vt=t.workActive||Te()>0?1:1-fn(Number(t.photoOpacity)||0,0,1),ht=g.material.uniforms;if(ht.uProgress.value=at,ht.uPixelRatio.value=d,ht.uOpacity.value=vt,ht.uTime.value=we,ht.uMotionStrength.value=ee?t.workActive||Te()>0?1:bc(.035,.12,at)*(1-bc(.74,.9,at)):0,ht.uPointer.value.copy(He),ht.uPointerStrength.value=Ye,ht.uExitProgress.value=Te(),ht.uWorkProgress.value=ve(),ht.uWorkMode.value=t.workActive?1:0,g.visible=Ee(),g.geometry.setDrawRange(0,t.workActive?Math.min(m,l.low?280:480):m),f){let Qt=f.material.uniforms;Qt.uTime.value=we,Qt.uPixelRatio.value=d,Qt.uMotionStrength.value=ee?1:0,Qt.uPointerStrength.value=Ye,Qt.uPointer.value.copy(He),Qt.uExitProgress.value=Te(),Qt.uWorkMode.value=t.workActive?1:0,f.visible=E()}Me();let tn=performance.now();K();try{c.render(u,h)}catch(Qt){be(),o?.(Qt);return}me=c.info.render.calls,V=g.visible||!!f?.visible,re++,z=!1;let Wt=G-j,Xt=performance.now()-tn,pn=Ze?1e3/60:ge;j&&Wt<150&&(Le||Math.abs(at-Ie)>5e-4)&&(W=Wt>pn*1.8||Xt>20?W+1:Math.max(0,W-2),W>=18&&te()),j=G,Ie=at,se=Ze||!se?G+ge:Math.max(se+ge,G+1),(z||Le)&&$()}function ie(G){return!!G?.closest?.('nav, .nav-wrap, a, button, input, select, textarea, summary, [role="button"], [role="link"], [contenteditable], [data-no-particles]')}function ae(){U=!1,St=0}function Re(G,Le,Ze,ot=!1){if(!O()||t.interactive===!1||ie(G.target)){ae();return}ct.set(Le-X/2,k/2-Ze),(!Be||Ye<.001)&&He.copy(ct),Be=!0,U=!0,St=ot?1/0:performance.now()+700,z=!0,$()}function _e(G){if(G.isPrimary===!1||G.pointerType==="mouse"&&G.buttons>1){ae();return}Re(G,G.clientX,G.clientY,G.pointerType==="touch")}function pe(G){!G.relatedTarget&&G.pointerType!=="touch"&&ae()}function We(G){if(G.touches.length!==1){ae();return}let Le=G.touches[0];Re(G,Le.clientX,Le.clientY,!0)}function ze(){ee=!q.matches,ae(),Ye=0,Se=0,se=0,Q(!0)}function ut(){j=0,Q(!0)}function L(G){G.preventDefault(),w=!0,Q(),o?.(new Error("Portrait WebGL context was lost"))}function le(){w=!1,Q(!0)}window.addEventListener("pointermove",_e,{passive:!0}),window.addEventListener("pointerdown",_e,{passive:!0}),window.addEventListener("pointerup",ae,{passive:!0}),window.addEventListener("pointercancel",ae,{passive:!0}),window.addEventListener("pointerout",pe,{passive:!0}),window.addEventListener("touchstart",We,{passive:!0}),window.addEventListener("touchmove",We,{passive:!0}),window.addEventListener("touchend",ae,{passive:!0}),window.addEventListener("touchcancel",ae,{passive:!0}),window.addEventListener("blur",ae),q.addEventListener?q.addEventListener("change",ze):q.addListener(ze),document.addEventListener("visibilitychange",ut),i.addEventListener("webglcontextlost",L),i.addEventListener("webglcontextrestored",le);let Y=typeof ResizeObserver<"u"?new ResizeObserver(Z):null;Y?.observe(e),Y||window.addEventListener("resize",Z);let J=typeof IntersectionObserver<"u"?new IntersectionObserver(G=>{b=G.some(Le=>Le.isIntersecting),Q(!0)}):null;J?.observe(i),Z();let de=Promise.resolve().then(()=>n??s?.(r)).then(async G=>{if(I)throw new Error("Portrait was disposed before loading finished");if(!G?.positions?.length||G.positions.length%3||!G.indices?.length||G.indices.length%3||G.colors?.length!==G.positions.length)throw new Error("Portrait asset must include matching positions/colors and triangle indices");x=Px(G),T=G.indices.length/3;let Le=Ix(G,x,l.count),Ze=c.getContext();if(M=Ze.getParameter(Ze.ALIASED_POINT_SIZE_RANGE)[1],g=new ri(Le,new Lt({uniforms:{uProgress:{value:0},uTime:{value:0},uMotionStrength:{value:0},uPointerStrength:{value:0},uOpacity:{value:0},uPointSize:{value:l.pointSize},uPixelRatio:{value:d},uPointLimit:{value:M},uTargetScale:{value:1},uBottomY:{value:-x.size.y*.5},uPortraitHeight:{value:x.size.y},uPortraitWidth:{value:x.size.x},uExitProgress:{value:0},uWorkProgress:{value:0},uWorkMode:{value:0},uExitTarget:{value:new oe},uWorkTarget:{value:new oe},uWorkOrigin:{value:new lt},uTargetCenter:{value:new oe},uViewport:{value:new oe(X,k)},uFieldCenter:{value:new oe},uPointer:{value:new oe}},vertexShader:Lx,fragmentShader:Wh,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})),g.frustumCulled=!1,u.add(g),Z(),Me(),await p(u),await a?.(),I)throw new Error("Portrait was disposed before shader preparation finished");return K(),c.render(u,h),A=!0,Q(!0),et}).catch(G=>{throw I||(be(),o?.(G)),G});async function fe(G){if(await de,I)throw new Error("Portrait has been disposed");if(!G?.positions?.length||G.positions.length%3||G.colors?.length!==G.positions.length||G.groupIds?.length!==G.positions.length/3||G.groupBounds?.length!==4)throw new Error("Text targets require matching positions/colors/groups and four group bounds");let Le=++R,Ze=l.low?1800:4e3;if(G.groupIds.length>Ze)throw new Error(`Text targets exceed the ${Ze}-point device budget`);let ot=Dx(G),wt=new Lt({uniforms:{uTextProgress:{value:new lt},uTextOpacity:{value:new lt(1,1,1,1)},uTextOffsets:{value:Array.from({length:4},()=>new oe)},uTextBounds:{value:G.groupBounds.map(ht=>new oe(ht.width,ht.height))},uCanvas:{value:new oe(X,k)},uFieldCenter:{value:new oe},uFieldSize:{value:new oe(X,k)},uExitTarget:{value:new oe},uWorkOrigin:{value:new lt},uPointer:{value:new oe},uExitProgress:{value:0},uWorkMode:{value:0},uTime:{value:0},uMotionStrength:{value:0},uPointerStrength:{value:0},uPointSize:{value:l.low?1.65:1.6},uPixelRatio:{value:d},uPointLimit:{value:M},uOpacity:{value:1}},vertexShader:Ux,fragmentShader:Wh,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),at=new ri(ot,wt);at.frustumCulled=!1,at.visible=!1;let vt=new Pn;vt.add(at);try{if(at.visible=!0,await p(vt),at.visible=!1,await a?.(),I)throw new Error("Portrait disposed while preparing text")}catch(ht){throw vt.remove(at),ot.dispose(),wt.dispose(),ht}return vt.remove(at),Le!==R?(ot.dispose(),wt.dispose(),G.groupBounds):(u.add(at),f&&(u.remove(f),f.geometry.dispose(),f.material.dispose()),f=at,_=G,v=G.groupIds.length,Me(),Q(!0),G.groupBounds)}function ne(){let G=fn(Number(t.progress)||0,0,1),Le=fn(Number(t.photoOpacity)||0,0,1),Ze=t.visible?t.workActive?"work-title":Te()>0&&Te()<1?"intro-disintegration":E()&&Le===1?"text-assembly":Le===1?"photo":G<=.005?"waiting":G<.58?"rising-stars":G<.9?"face-assembly":G<.94?"settled-dots":"photo-crossfade":"hidden";return{ready:A,visible:!!t.visible,running:!!P,particles:m,textParticles:v,textBudget:l.low?1800:4e3,textEnabled:t.textEnabled!==!1,textGroups:_?.groupBounds.map(ot=>ot.count)||[],textProgress:[0,1,2].map(ot=>Number(t.textProgress?.[ot])||0),textOpacity:[0,1,2].map(ot=>Number(t.textOpacity?.[ot])||0),exitProgress:Te(),workActive:!!t.workActive,workProgress:ve(),workOpacity:fn(Number(t.workOpacity)||0,0,1),dpr:d,drawCalls:me,renderedFrames:re,qualityReductions:ue,sourceTriangles:T,geometries:c.info.memory.geometries,textures:c.info.memory.textures,kind:"photographic-particles",interactive:O()&&t.interactive!==!1,motionActive:O(),motionEnabled:ee,ambientFps:l.low?30:45,motionTime:we,pointerStrength:Ye,pointerActive:U,portalFramed:!!t.portal,progress:G,photoOpacity:Le,phase:Ze}}function be(){I||(I=!0,P&&cancelAnimationFrame(P),P=0,Y?.disconnect(),J?.disconnect(),window.removeEventListener("resize",Z),window.removeEventListener("pointermove",_e),window.removeEventListener("pointerdown",_e),window.removeEventListener("pointerup",ae),window.removeEventListener("pointercancel",ae),window.removeEventListener("pointerout",pe),window.removeEventListener("touchstart",We),window.removeEventListener("touchmove",We),window.removeEventListener("touchend",ae),window.removeEventListener("touchcancel",ae),window.removeEventListener("blur",ae),q.removeEventListener?q.removeEventListener("change",ze):q.removeListener(ze),document.removeEventListener("visibilitychange",ut),i.removeEventListener("webglcontextlost",L),i.removeEventListener("webglcontextrestored",le),g?.geometry.dispose(),g?.material.dispose(),f?.geometry.dispose(),f?.material.dispose(),c.dispose(),c.forceContextLoss())}let et={ready:de,update:Q,resize:Z,setTextTargets:fe,stats:ne,dispose:be};return et}var Bo=new Map,Nx=[[420,39],[409,41],[404,39],[399,43],[389,42],[383,48],[377,47],[369,54],[366,53],[360,62],[353,63],[349,70],[345,71],[339,79],[334,79],[330,89],[324,88],[322,98],[316,99],[315,106],[309,111],[310,116],[303,125],[303,133],[298,140],[299,148],[294,154],[296,163],[291,170],[294,179],[292,187],[298,195],[299,203],[304,208],[303,216],[308,222],[307,229],[314,237],[322,243],[324,247],[324,254],[325,261],[327,272],[329,280],[333,286],[337,296],[344,304],[343,309],[347,313],[352,314],[354,317],[355,318],[358,318.5],[360,319],[362,322],[365,326],[368,330],[371,334],[374.5,339],[378,344],[381,349],[383,354],[382.8,360],[382.7,370],[383.1,380],[383.6,387],[383.8,391],[382.8,393],[372,393.8],[364,395],[360,397.5],[358,400],[355,408],[351,416],[342,423],[330,435],[313,443],[294,449],[276,459],[255,468],[236,477],[217,487],[204,497],[191,512],[181,527],[169,547],[159,567],[153,587],[155,607],[156,625],[160,653],[162,680],[164,700],[166,760],[183,830],[201,896],[225,941],[708,941],[750,933],[799,917],[816,897],[826,850],[831,816],[829,774],[817,719],[807,672],[803,648],[797,626],[790,607],[785,588],[783,573],[778,556],[773,542],[767,528],[759,516],[750,505],[739,495],[726,487],[714,480],[700,474],[690,469],[678,466],[667,462],[654,460],[643,455],[634,451],[624,447],[614,442],[604,438],[593,433],[586,429],[578,424],[570,419],[565,412],[561,404],[552,400],[546.5,398],[543.2,394],[540.8,390],[539.4,385],[538.2,380],[537.6,375],[536.8,370],[536.3,365],[535.8,360],[535.3,355],[535.1,350],[534.8,345],[534.3,340],[533.7,335],[534.3,330],[538.2,325],[540.4,320],[542.4,315],[543.6,310],[544.8,305],[545.3,300],[546.2,295],[547,290],[547.6,285],[547.7,280],[547.4,278],[554,277],[560.7,276],[563.5,274],[565,272],[566,270],[567,265],[567,256],[566,249],[565,243],[565,235],[562,223],[563,218],[560,210],[562,200],[561,192],[558,184],[559,177],[555,168],[554,156],[550,148],[549,138],[545,126],[540,116],[540,107],[531,100],[526,89],[519,86],[515,80],[508,77],[502,69],[494,68],[488,61],[479,59],[472,54],[461,54],[455,47],[447,46],[440,42],[433,44]];function Fx(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[(n+i.length-1)%i.length],s=i[n],o=r[1]<=e,a=s[1]<=e;if(o!==a){let l=(e-r[1])/(s[1]-r[1]);t.push([r[0]+(s[0]-r[0])*l,e])}a&&t.push(s.slice())}return t}function Ox(i,e=1.25){let t=i.map((o,a)=>{let l=i[(a+i.length-1)%i.length],c=i[(a+1)%i.length],u=Math.hypot(o[0]-l[0],o[1]-l[1]),h=Math.hypot(c[0]-o[0],c[1]-o[1]),p=Math.min(e,u*.35,h*.35);return{point:o,enter:o.map((d,m)=>d+(l[m]-d)*p/u),leave:o.map((d,m)=>d+(c[m]-d)*p/h)}}),n=[],r=o=>o.map(a=>Number(a.toFixed(3))).join(","),s=[`M${r(t[0].enter)}`];for(let{point:o,enter:a,leave:l}of t){s.push(`L${r(a)}Q${r(o)} ${r(l)}`),n.push(a);for(let c of[.25,.5,.75,1])n.push(o.map((u,h)=>(1-c)**2*a[h]+2*(1-c)*c*u+c**2*l[h]))}return{samples:n,path:s.join("")+"Z"}}var $h=Ox(Nx),Jh=Fx($h.samples,700),Wn={left:150,top:37,width:662.9574468085107,height:663},{left:Kh,top:Qh}=Wn,Yh=Jh.map(([i,e])=>[(i-Kh)/Wn.width,(e-Qh)/Wn.height]),Bx=`<svg xmlns="http://www.w3.org/2000/svg" width="1672" height="941" viewBox="0 0 1672 941"><path fill="white" d="${$h.path}"/></svg>`,zx=`url("data:image/svg+xml,${encodeURIComponent(Bx)}")`,Sc=Object.freeze({sourceWidth:1672,sourceHeight:941,sourceRect:Wn,sourceContour:Jh,normalizedContour:Yh,maskImage:zx,aspect:Wn.width/Wn.height,clipPath:`polygon(${Yh.map(([i,e])=>`${(i*100).toFixed(6)}% ${(e*100).toFixed(6)}%`).join(",")})`,imageCss:{width:`${(1672/Wn.width*100).toFixed(6)}%`,height:`${(941/Wn.height*100).toFixed(6)}%`,left:`${(-Kh/Wn.width*100).toFixed(6)}%`,top:`${(-Qh/Wn.height*100).toFixed(6)}%`}});function ms(i){return i.reason||new DOMException("Portrait loading was cancelled.","AbortError")}function kx(i,e){return e?e.aborted?Promise.reject(ms(e)):new Promise((t,n)=>{let r=()=>n(ms(e));e.addEventListener("abort",r,{once:!0}),i.then(t,n).finally(()=>e.removeEventListener("abort",r))}):i}function Hx(i){if(Bo.has(i.href))return Bo.get(i.href);let e=new Promise((t,n)=>{let r=document.createElement("script");r.async=!0,r.src=i.href,r.onload=()=>{r.remove();let s=globalThis.PortraitEmbeddedData;if(s?.version!==6||s.encoding!=="base64"||typeof s.data!="string"){n(new Error("Invalid embedded portrait asset."));return}try{let o=atob(s.data),a=new Uint8Array(o.length);for(let l=0;l<o.length;l++)a[l]=o.charCodeAt(l);globalThis.PortraitEmbeddedData===s&&delete globalThis.PortraitEmbeddedData,t(a.buffer)}catch(o){n(o)}},r.onerror=()=>{r.remove(),n(new Error("Embedded portrait asset unavailable."))},document.head.append(r)});return Bo.set(i.href,e),e.catch(()=>Bo.delete(i.href)),e}function Zh(i,{textureUrl:e=""}={}){let t=new DataView(i);if(i.byteLength<40||t.getUint32(0,!1)!==1380208689)throw new Error("Invalid portrait asset.");let n=t.getUint32(4,!0),r=t.getUint32(8,!0);if(t.getUint32(36,!0)!==1||!n||n>=65536||r%3||i.byteLength!==40+n*13+r*2)throw new Error("Unsupported portrait asset layout.");let o=[0,1,2].map(d=>t.getFloat32(12+d*4,!0)),a=[0,1,2].map(d=>t.getFloat32(24+d*4,!0));if(o.some((d,m)=>!Number.isFinite(d)||!Number.isFinite(a[m])||a[m]<=d))throw new Error("Invalid portrait bounds.");let l=new Float32Array(n*3),c=new Float32Array(n*3),u=new Float32Array(n*2),h=new Uint16Array(r),p=40;for(let d=0;d<l.length;d++){let m=d%3;l[d]=o[m]+t.getUint16(p,!0)/65535*(a[m]-o[m]),p+=2}for(let d=0;d<u.length;d++)u[d]=t.getUint16(p,!0)/65535,p+=2;for(let d=0;d<c.length;d++)c[d]=t.getUint8(p++)/255;for(let d=0;d<r;d++)if(h[d]=t.getUint16(p,!0),p+=2,h[d]>=n)throw new Error("Invalid portrait triangle.");return{positions:l,colors:c,uvs:u,indices:h,textureUrl:e,bounds:{min:o,max:a},presentation:Sc,kind:"photo-depth-approximation"}}async function jh({signal:i,baseUrl:e}={}){let t=new URL(e||"assets/face/",document.baseURI),n=new URL("portrait-depth.bin.gz?v=6",t),r=new URL("portrait-depth.bin?v=6",t),s=new URL("../roshan-reveal-after.webp",t).href;if(i?.aborted)throw ms(i);if(t.protocol==="file:"){let u=new URL("portrait-data.js?v=6",t),h=await kx(Hx(u),i);if(i?.aborted)throw ms(i);return Zh(h,{textureUrl:s})}let a=await fetch(typeof DecompressionStream=="function"?n:r,{signal:i,cache:"force-cache"});if(!a.ok)throw new Error(`Portrait asset unavailable (${a.status}).`);let l=await a.arrayBuffer(),c=new Uint8Array(l,0,Math.min(l.byteLength,2));if(c[0]===31&&c[1]===139&&(l=await new Response(new Blob([l]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()),i?.aborted)throw ms(i);return Zh(l,{textureUrl:s})}function Vx(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Gx(i){let e=i.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);return e?[Number(e[1])/255,Number(e[2])/255,Number(e[3])/255]:[.9,.91,.94]}function Wx(i,e){return e.textTransform==="uppercase"?i.toUpperCase():e.textTransform==="lowercase"?i.toLowerCase():i}function Xx(i,e){if(!i)return null;let t=i.getBoundingClientRect(),n=t.width,r=t.height;if(n<=0||r<=0||t.width<=0||t.height<=0)return null;let s=t.width/n,o=t.height/r,a=3,l=Math.min(1,4096/(n+a*2),4096/(r+a*2)),c=document.createElement("canvas");c.width=Math.max(1,Math.ceil((n+a*2)*l)),c.height=Math.max(1,Math.ceil((r+a*2)*l));let u=c.getContext("2d",{willReadFrequently:!0});if(!u)return null;u.scale(l,l),u.textBaseline="alphabetic";let h=document.createTreeWalker(i,NodeFilter.SHOW_TEXT),p=document.createRange(),d;for(;d=h.nextNode();){let f=d.parentElement;if(!f||f.closest('[aria-hidden="true"], [data-particle-decoration], script, style'))continue;let _=getComputedStyle(f);if(_.display==="none")continue;u.font=`${_.fontStyle} ${_.fontWeight} ${_.fontSize} ${_.fontFamily}`,u.fillStyle=_.color;let M=u.measureText("Hg"),v=parseFloat(_.fontSize)||16,R=M.fontBoundingBoxAscent??M.actualBoundingBoxAscent??v*.8,T=M.fontBoundingBoxDescent??M.actualBoundingBoxDescent??v*.2;for(let A=0;A<d.length;){let w=d.textContent.codePointAt(A)>65535?2:1,b=d.textContent.slice(A,A+w);p.setStart(d,A),p.setEnd(d,A+w);let P=p.getBoundingClientRect();if(A+=w,!b.trim()||P.width<=0||P.height<=0)continue;let z=(P.left-t.left)/s,F=(P.top-t.top)/o,V=P.height/o,X=F+(V-R-T)*.5+R;u.fillText(Wx(b,_),z+a,X+a)}}p.detach?.();let m=u.getImageData(0,0,c.width,c.height).data,x=[],g=Math.max(1,Math.round(l*1.7));for(let f=0;f<c.height;f+=g)for(let _=0;_<c.width;_+=g){let M=(f*c.width+_)*4;m[M+3]<80||x.push([(_+.5)/l-a,(f+.5)/l-a,m[M]/255,m[M+1]/255,m[M+2]/255])}return{group:e,width:n,height:r,candidates:x,color:Gx(getComputedStyle(i).color)}}async function ed(i,{maxPoints:e=4e3}={}){await document.fonts?.ready;let t=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<721||(navigator.deviceMemory||8)<=4||(navigator.hardwareConcurrency||8)<=4,n=Math.max(0,Math.min(t?1800:4e3,Math.floor(e))),r=Array.from({length:4},(x,g)=>Xx(i[g],g)),s=r.reduce((x,g)=>x+(g?.candidates.length||0),0),o=r.map(x=>Math.sqrt(x?.candidates.length||0)),a=o.reduce((x,g)=>x+g,0),l=r.map(x=>({width:x?.width||1,height:x?.height||1,count:0})),c=[],u=Math.min(n,s),h=Vx(2119695054);r.forEach((x,g)=>{if(!x?.candidates.length||!u)return;let f=o.slice(g).reduce((M,v)=>M+v,0),_=Math.min(x.candidates.length,f>0?Math.max(1,Math.round(u*o[g]/f)):0);for(let M=0;M<_;M++){let v=Math.min(x.candidates.length-1,Math.floor((M+h())*x.candidates.length/_));c.push({group:g,value:x.candidates[v]})}l[g].count=_,u-=_});let p=new Float32Array(c.length*3),d=new Float32Array(c.length*3),m=new Float32Array(c.length);return c.forEach(({group:x,value:g},f)=>{p.set([g[0],g[1],0],f*3),d.set(g.slice(2,5),f*3),m[f]=x}),{positions:p,colors:d,groupIds:m,groupBounds:l,count:c.length,colorSpace:"srgb",totalWeight:a}}var nd=i=>Er.clamp(Number(i)||0,0,1),td=(i,e,t)=>{let n=nd((t-i)/(e-i));return n*n*(3-2*n)};function qx(){let i=navigator.deviceMemory||8,e=navigator.hardwareConcurrency||8,t=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<721,n=t||i<=4||e<=4;return{low:n,count:i<=2?4e3:n?7e3:16e3,dpr:i<=2?1:t?2:n?1.25:1.5,pointSize:t?1.6:n?1.8:1.7,ambientFps:n?30:45}}function Yx(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Zx=[[.1514,.5138],[.8185,.5151]],wc=[.553,.482];function $x(i,e){let t=new Float32Array(e),n=new Uint8Array(e),r=new Float32Array(e),s=new Uint8Array(e);for(let m=0;m<e;m++){let x=i.source[m*2],g=i.source[m*2+1],[f,_]=Zx.map(([R,T])=>Math.hypot(x-R,(g-T)*1.77777778));t[m]=Math.min(f,_),n[m]=f<=_?1:0;let M=i.target[m*2],v=i.target[m*2+1];r[m]=Math.hypot(M-wc[0],(v-wc[1])*1.7768),s[m]=M<wc[0]?1:0}let o=m=>Array.from({length:e},(x,g)=>g).sort((x,g)=>m[x]-m[g]),a=o(t),l=o(r),c=new Uint32Array(e);l.forEach((m,x)=>{c[m]=x});let u=[l.filter(m=>!s[m]),l.filter(m=>s[m])],h=[0,0],p=Math.max(16,Math.round(e*.04)),d=new Uint32Array(e);return a.forEach((m,x)=>{let g=n[m],f=1-g,_=u[g][h[g]],M=_!==void 0&&(c[_]<=x+p||h[f]>=u[f].length)?g:f;d[m]=u[M][h[M]++]}),d}function Jx(i,e){let t=$x(i,e),n=new Float32Array(e*3),r=new Float32Array(e*2),s=new Float32Array(e*3),o=new Float32Array(e*3),a=new Float32Array(e*4),l=new Pe,c=Yx(186320324);for(let h=0;h<e;h++){let p=i.source[h*2],d=i.source[h*2+1],m=t[h],x=i.target[m*2],g=i.target[m*2+1];if(![p,d,x,g].every(Number.isFinite))throw new Error("BMW bridge has an invalid photo sample");n.set([p,d,0],h*3),r.set([x,g],h*2);let f=h*3,_=m*3,M=i.sourceColors,v=i.targetColors;if(![M[f],M[f+1],M[f+2],v[_],v[_+1],v[_+2]].every(Number.isFinite))throw new Error("BMW bridge has an invalid sample color");l.setRGB(M[f],M[f+1],M[f+2],Tt),s.set([l.r,l.g,l.b],f),l.setRGB(v[_],v[_+1],v[_+2],Tt),o.set([l.r,l.g,l.b],f);let R=v[_]*.2126+v[_+1]*.7152+v[_+2]*.0722;a.set([c(),c(),c(),R],h*4)}let u=new At;return u.setAttribute("position",new pt(n,3)),u.setAttribute("aTarget",new pt(r,2)),u.setAttribute("aSourceColor",new pt(s,3)),u.setAttribute("aTargetColor",new pt(o,3)),u.setAttribute("aSeed",new pt(a,4)),u.setDrawRange(0,e),u}var Kx=`
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
`,Qx=`
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
`;function id({canvas:i,state:e,data:t,onError:n,settle:r}){let s=Math.floor(Number(t?.count)||0);if(!i||!e||s<1||t.source?.length!==s*2||t.target?.length!==s*2||t.sourceColors?.length!==s*3||t.targetColors?.length!==s*3)throw new Error("BMW bridge requires a canvas, state and matching paired photo samples");let o=qx(),a=Math.min(s,o.count),l=a,c=Math.min(devicePixelRatio||1,o.dpr),u=Jx(t,l),h;try{h=new _i({canvas:i,alpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"})}catch(ne){throw u.dispose(),ne}h.outputColorSpace=Tt,h.toneMapping=xn,h.setClearColor(0,0),h.autoClear=!1,h.debug.onShaderError=(ne,be,et,G)=>{throw new Error(`BMW bridge shader failed: ${ne.getProgramInfoLog(be)||ne.getShaderInfoLog(et)||ne.getShaderInfoLog(G)||"unknown driver error"}`)};let p=h.getContext(),d=p.getParameter(p.ALIASED_POINT_SIZE_RANGE)[1],m={uProgress:{value:0},uTime:{value:0},uMotionStrength:{value:0},uPointerStrength:{value:0},uVelocity:{value:0},uPixelRatio:{value:c},uPointSize:{value:o.pointSize},uPointLimit:{value:d},uViewport:{value:new oe(1,1)},uPointer:{value:new oe},uSource:{value:new lt},uTarget:{value:new lt},uSourceFrame:{value:new lt},uTargetFrame:{value:new lt},uReveal:{value:new lt},uOpacity:{value:0}},x=new Lt({uniforms:m,vertexShader:Kx,fragmentShader:Qx,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:ql,blendEquation:jn,blendSrc:bo,blendDst:ur,blendSrcAlpha:bo,blendDstAlpha:ur}),g=new ri(u,x);g.frustumCulled=!1;let f=new Pn;f.add(g);let _=new kn(-1,1,1,-1,.1,2e3);_.position.z=1e3;let M=matchMedia("(prefers-reduced-motion: reduce)"),v=!M.matches,R=!1,T=!1,A=!1,I=!1,w=!0,b=1,P=1,z=0,F=!0,V=!1,X=!1,k=[],j=0,W=0,re=0,ue=0,me=0,Ie=0,qe=0,q=0,ee=null,ge=0,se=null,Se=1e3/o.ambientFps,we=new oe,He=new oe,ct=!1,Be=0,Ye=!1,U=0;function St(){return A&&!T&&!I&&w&&!document.hidden}function Fe(){return nd(e.progress)}function Te(){return St()&&R&&e.visible&&Fe()>.1&&Fe()<.95}function ve(){return Te()&&v&&Fe()>.11&&Fe()<.93}function ke(){Ye=!1,U=0}function Ee(){j=0,W=0,re=0,ge=0,se=null}function E(){!z&&St()&&(V||F&&Te()||ve())&&(z=requestAnimationFrame(K))}function y(){h.setViewport(0,0,b,P),h.clear(!0,!1,!1),X=!1,V=!1,Ie=0}function O(){if(T)return;let ne=i.getBoundingClientRect(),be=Math.max(1,Math.round(e.viewport?.width||ne.width||innerWidth)),et=Math.max(1,Math.round(e.viewport?.height||ne.height||innerHeight));(be!==b||et!==P||h.getPixelRatio()!==c)&&(b=be,P=et,h.setPixelRatio(c),h.setSize(b,P,!1),_.left=-b/2,_.right=b/2,_.top=P/2,_.bottom=-P/2,_.updateProjectionMatrix(),m.uViewport.value.set(b,P),F=!0),E()}function $(ne=!1){if(T)return;let be=e.source,et=e.target,G=[R,e.visible,e.progress,e.interactive,e.viewport?.width,e.viewport?.height,be?.x,be?.y,be?.width,be?.height,et?.x,et?.y,et?.width,et?.height];(ne||G.some((Le,Ze)=>Le!==k[Ze]))&&(F=!0),k=G,Te()||(z&&cancelAnimationFrame(z),z=0,V=X,Be=0,ke(),Ee()),e.interactive===!1&&ke(),e.viewport&&(e.viewport.width!==b||e.viewport.height!==P)&&O(),E()}function Q(ne){R=!!ne,$()}function Z(ne,be){let et=be&&[be.x,be.y,be.width,be.height].every(Number.isFinite)&&be.width>0&&be.height>0;return et&&ne.value.set(be.x,be.y,be.width,be.height),!!et}function Me(){e.noAdapt||q>=2||(l=Math.max(Math.min(a,2400),Math.floor(l*.75)),u.setDrawRange(0,l),c=Math.max(.85,c-.15),q++,qe=0,O())}function K(ne){if(z=0,!St()){Ee();return}if(!Te()){V&&y(),F=!1,Ee();return}let be=ve(),et=F;if(!et&&(!be||ne<re-.5)){be&&E();return}let G=j?Math.min(.06,Math.max(0,(ne-j)/1e3)):0;j=ne,be&&(ue+=G),Ye&&ne>=U&&(Ye=!1),we.lerp(He,1-Math.exp(-G*14));let Le=be&&Ye&&e.interactive!==!1?1:0;Be+=(Le-Be)*(1-Math.exp(-G*(Le?14:4.3))),!Le&&Be<.001&&(Be=0);let Ze=Fe();se!==null&&G>0&&(ge+=((Ze-se)/G-ge)*(1-Math.exp(-G*5)),Math.abs(ge)<.002&&(ge=0)),se=Ze,m.uVelocity.value=v?ge:0,m.uProgress.value=Ze,m.uTime.value=ue,m.uPixelRatio.value=c,m.uOpacity.value=1,m.uMotionStrength.value=v?td(.11,.35,Ze)*(1-td(.72,.85,Ze)):0,m.uPointer.value.copy(we),m.uPointerStrength.value=Be;let ot=Z(m.uSource,e.source),wt=Z(m.uTarget,e.target);Z(m.uSourceFrame,e.sourceFrame||{x:0,y:0,width:b,height:P}),Z(m.uTargetFrame,e.targetFrame||{x:0,y:0,width:b,height:P});let at=e.reveal;m.uReveal.value.set(at?.x||0,at?.y||0,at?.radius||0,at?.feather||1);let vt=performance.now();if(y(),!ot||!wt){F=!1;return}try{h.render(f,_)}catch(Xt){ee=String(Xt),R=!1,y(),Ee(),queueMicrotask(()=>n?.(Xt));return}Ie=h.info.render.calls,X=!0,me++,F=!1;let ht=ne-W,tn=performance.now()-vt,Wt=et?1e3/60:Se;W&&ht<150&&(qe=ht>Wt*1.8||tn>20?qe+1:Math.max(0,qe-2),qe>=18&&Me()),W=ne,re=et||!re?ne+Se:Math.max(re+Se,ne+1),(F||be)&&E()}function te(ne){return!!ne?.closest?.('nav, .nav-wrap, a, button, input, select, textarea, summary, [role="button"], [role="link"], [contenteditable], [data-no-particles]')}function Ae(ne,be,et,G=!1){if(!ve()||e.interactive===!1||te(ne.target)){ke();return}He.set(be-b/2,P/2-et),(!ct||Be<.001)&&we.copy(He),ct=!0,Ye=!0,U=G?1/0:performance.now()+700,F=!0,E()}function ie(ne){if(ne.isPrimary===!1||ne.pointerType==="mouse"&&ne.buttons>1){ke();return}Ae(ne,ne.clientX,ne.clientY,ne.pointerType==="touch")}function ae(ne){!ne.relatedTarget&&ne.pointerType!=="touch"&&ke()}function Re(ne){if(ne.touches.length!==1){ke();return}let be=ne.touches[0];Ae(ne,be.clientX,be.clientY,!0)}function _e(){v=!M.matches,Be=0,ke(),Ee(),$(!0)}function pe(){Ee(),$(!0)}function We(ne){ne.preventDefault(),I=!0,ee="BMW bridge WebGL context lost",$(!0)}function ze(){I=!1,ee=null,$(!0)}O();let L=(h.extensions.has("KHR_parallel_shader_compile")?h.compileAsync(f,_):Promise.resolve(h.compile(f,_))).then(()=>r?.()).then(()=>{if(T)throw new Error("BMW bridge was disposed during preparation");return y(),h.render(f,_),y(),A=!0,$(!0),fe}).catch(ne=>{throw de(),ne});window.addEventListener("pointermove",ie,{passive:!0}),window.addEventListener("pointerdown",ie,{passive:!0}),window.addEventListener("pointerup",ke,{passive:!0}),window.addEventListener("pointercancel",ke,{passive:!0}),window.addEventListener("pointerout",ae,{passive:!0}),window.addEventListener("touchstart",Re,{passive:!0}),window.addEventListener("touchmove",Re,{passive:!0}),window.addEventListener("touchend",ke,{passive:!0}),window.addEventListener("touchcancel",ke,{passive:!0}),window.addEventListener("blur",ke),M.addEventListener?M.addEventListener("change",_e):M.addListener(_e),document.addEventListener("visibilitychange",pe),i.addEventListener("webglcontextlost",We),i.addEventListener("webglcontextrestored",ze);let le=typeof ResizeObserver<"u"?new ResizeObserver(O):null;le?.observe(i),le||window.addEventListener("resize",O,{passive:!0});let Y=typeof IntersectionObserver<"u"?new IntersectionObserver(ne=>{w=ne.some(be=>be.isIntersecting),$(!0)}):null;Y?.observe(i);function J(){let ne=Fe(),be=!R||!e.visible?"hidden":ne<=.1?"waiting":ne<.4?"bmw-release":ne<.55?"light-streams":ne<.85?"cockpit-assembly":ne<.95?"native-crossfade":"cockpit";return{ready:A&&!T&&!I,active:Te(),visible:!!(R&&e.visible),running:!!z,renderedFrames:me,frameCount:me,drawCalls:Ie,drawn:X,particles:l,initialParticles:a,geometries:h.info.memory.geometries,textures:h.info.memory.textures,dpr:c,qualityReductions:q,ambientFps:o.ambientFps,motionEnabled:v,motionActive:ve(),motionTime:ue,pointerActive:Ye,pointerStrength:Be,progress:ne,phase:be,error:ee,kind:"photo-particle-bridge"}}function de(){T||(T=!0,z&&cancelAnimationFrame(z),z=0,le?.disconnect(),Y?.disconnect(),window.removeEventListener("resize",O),window.removeEventListener("pointermove",ie),window.removeEventListener("pointerdown",ie),window.removeEventListener("pointerup",ke),window.removeEventListener("pointercancel",ke),window.removeEventListener("pointerout",ae),window.removeEventListener("touchstart",Re),window.removeEventListener("touchmove",Re),window.removeEventListener("touchend",ke),window.removeEventListener("touchcancel",ke),window.removeEventListener("blur",ke),M.removeEventListener?M.removeEventListener("change",_e):M.removeListener(_e),document.removeEventListener("visibilitychange",pe),i.removeEventListener("webglcontextlost",We),i.removeEventListener("webglcontextrestored",ze),u.dispose(),x.dispose(),h.dispose(),h.forceContextLoss())}let fe={ready:L,setActive:Q,resize:O,stats:J,dispose:de};return fe}return cd(jx);})();
