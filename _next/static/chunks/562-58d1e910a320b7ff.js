(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{96224:function(a,b,c){a.exports=c(74357)},77610:function(a,b,c){"use strict";c.d(b,{JO:function(){return aJ}});var d,e,f=c(50959);let g=/^[a-z0-9]+(-[a-z0-9]+)*$/,h=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function i(a){return{...h,...a}}let j=(a,b,c,d="")=>{let e=a.split(":");if("@"===a.slice(0,1)){if(e.length<2||e.length>3)return null;d=e.shift().slice(1)}if(e.length>3||!e.length)return null;if(e.length>1){let f=e.pop(),g=e.pop(),h={provider:e.length>0?e[0]:d,prefix:g,name:f};return b&&!k(h)?null:h}let i=e[0],j=i.split("-");if(j.length>1){let l={provider:d,prefix:j.shift(),name:j.join("-")};return b&&!k(l)?null:l}if(c&&""===d){let m={provider:d,prefix:"",name:i};return b&&!k(m,c)?null:m}return null},k=(a,b)=>!!a&&!!((""===a.provider||a.provider.match(g))&&(b&&""===a.prefix||a.prefix.match(g))&&a.name.match(g));function l(a,b,c=!1){function d(b,c){if(void 0!==a.icons[b])return Object.assign({},a.icons[b]);if(c>5)return null;let e=a.aliases;if(e&& void 0!==e[b]){let f=e[b],g=d(f.parent,c+1);return g?function(a,b){let c={...a};for(let d in h){let e=d;if(void 0!==b[e]){let f=b[e];if(void 0===c[e]){c[e]=f;continue}switch(e){case"rotate":c[e]=(c[e]+f)%4;break;case"hFlip":case"vFlip":c[e]=f!==c[e];break;default:c[e]=f}}}return c}(g,f):g}let i=a.chars;return!c&&i&& void 0!==i[b]?d(i[b],c+1):null}let e=d(b,0);if(e)for(let f in h)void 0===e[f]&& void 0!==a[f]&&(e[f]=a[f]);return e&&c?i(e):e}function m(a,b,c){c=c||{};let d=[];if("object"!=typeof a||"object"!=typeof a.icons)return d;a.not_found instanceof Array&&a.not_found.forEach(a=>{b(a,null),d.push(a)});let e=a.icons;Object.keys(e).forEach(c=>{let e=l(a,c,!0);e&&(b(c,e),d.push(c))});let f=c.aliases||"all";if("none"!==f&&"object"==typeof a.aliases){let g=a.aliases;Object.keys(g).forEach(c=>{if("variations"===f&&function(a){for(let b in h)if(void 0!==a[b])return!0;return!1}(g[c]))return;let e=l(a,c,!0);e&&(b(c,e),d.push(c))})}return d}let n={provider:"string",aliases:"object",not_found:"object"};for(let o in h)n[o]=typeof h[o];function p(a){if("object"!=typeof a||null===a)return null;let b=a;if("string"!=typeof b.prefix||!a.icons||"object"!=typeof a.icons)return null;for(let c in n)if(void 0!==a[c]&& typeof a[c]!==n[c])return null;let d=b.icons;for(let e in d){let f=d[e];if(!e.match(g)||"string"!=typeof f.body)return null;for(let i in h)if(void 0!==f[i]&& typeof f[i]!=typeof h[i])return null}let j=b.aliases;if(j)for(let k in j){let l=j[k],m=l.parent;if(!k.match(g)||"string"!=typeof m|| !d[m]&&!j[m])return null;for(let o in h)if(void 0!==l[o]&& typeof l[o]!=typeof h[o])return null}return b}let q=Object.create(null);try{let r=window||self;r&&1===r._iconifyStorage.version&&(q=r._iconifyStorage.storage)}catch(s){}function t(a,b){void 0===q[a]&&(q[a]=Object.create(null));let c=q[a];if(void 0===c[b]){var d,e;c[b]=(d=a,e=b,{provider:d,prefix:e,icons:Object.create(null),missing:Object.create(null)})}return c[b]}function u(a,b){if(!p(b))return[];let c=Date.now();return m(b,(b,d)=>{d?a.icons[b]=d:a.missing[b]=c})}let v=!1;function w(a){return"boolean"==typeof a&&(v=a),v}let x=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0}),y=/(-?[0-9.]*[0-9]+[0-9.]*)/g,z=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function A(a,b,c){if(1===b)return a;if(c=void 0===c?100:c,"number"==typeof a)return Math.ceil(a*b*c)/c;if("string"!=typeof a)return a;let d=a.split(y);if(null===d||!d.length)return a;let e=[],f=d.shift(),g=z.test(f);for(;;){if(g){let h=parseFloat(f);isNaN(h)?e.push(f):e.push(Math.ceil(h*b*c)/c)}else e.push(f);if(void 0===(f=d.shift()))return e.join("");g=!g}}let B=/\sid="(\S+)"/g,C="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16),D=0,E=Object.create(null);function F(a){return E[a]||E[""]}function G(a){let b;if("string"==typeof a.resources)b=[a.resources];else if(!((b=a.resources)instanceof Array)||!b.length)return null;let c={resources:b,path:void 0===a.path?"/":a.path,maxURL:a.maxURL?a.maxURL:500,rotate:a.rotate?a.rotate:750,timeout:a.timeout?a.timeout:5e3,random:!0===a.random,index:a.index?a.index:0,dataAfterTimeout:!1!==a.dataAfterTimeout};return c}let H=Object.create(null),I=["https://api.simplesvg.com","https://api.unisvg.com"],J=[];for(;I.length>0;)1===I.length?J.push(I.shift()):Math.random()>.5?J.push(I.shift()):J.push(I.pop());function K(a,b){let c=G(b);return null!==c&&(H[a]=c,!0)}H[""]=G({resources:["https://api.iconify.design"].concat(J)});let L=(a,b)=>{let c=a,d=-1!==c.indexOf("?");return Object.keys(b).forEach(a=>{let e;try{e=function(a){switch(typeof a){case"boolean":return a?"true":"false";case"number":case"string":return encodeURIComponent(a);default:throw Error("Invalid parameter")}}(b[a])}catch(f){return}c+=(d?"&":"?")+encodeURIComponent(a)+"="+e,d=!0}),c},M={},N={},O=(()=>{let a;try{if(a=fetch,"function"==typeof a)return a}catch(b){}return null})(),P=(a,b,c)=>{let d=[],e=M[b];void 0===e&&(e=function(a,b){var c;let d=H[c=a];if(!d)return 0;let e;if(d.maxURL){let f=0;d.resources.forEach(a=>{let b=a;f=Math.max(f,b.length)});let g=L(b+".json",{icons:""});e=d.maxURL-f-d.path.length-g.length}else e=0;let h=a+":"+b;return N[a]=d.path,M[h]=e,e}(a,b));let f="icons",g={type:f,provider:a,prefix:b,icons:[]},h=0;return c.forEach((c,i)=>{(h+=c.length+1)>=e&&i>0&&(d.push(g),g={type:f,provider:a,prefix:b,icons:[]},h=c.length),g.icons.push(c)}),d.push(g),d},Q=(a,b,c)=>{if(!O){c("abort",424);return}let d=function(a){if("string"==typeof a){if(void 0===N[a]){var b;let c=H[b=a];if(!c)return"/";N[a]=c.path}return N[a]}return"/"}(b.provider);switch(b.type){case"icons":{let e=b.prefix,f=b.icons,g=f.join(",");d+=L(e+".json",{icons:g});break}case"custom":{let h=b.uri;d+="/"===h.slice(0,1)?h.slice(1):h;break}default:c("abort",400);return}let i=503;O(a+d).then(a=>{let b=a.status;if(200!==b){setTimeout(()=>{var a;c(404===(a=b)?"abort":"next",b)});return}return i=501,a.json()}).then(a=>{if("object"!=typeof a||null===a){setTimeout(()=>{c("next",i)});return}setTimeout(()=>{c("success",a)})}).catch(()=>{c("next",i)})},R=Object.create(null),S=Object.create(null);function T(a,b){a.forEach(a=>{let c=a.provider;if(void 0===R[c])return;let d=R[c],e=a.prefix,f=d[e];f&&(d[e]=f.filter(a=>a.id!==b))})}let U=0;var V={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function W(a){let b=function(a){if("object"!=typeof a||"object"!=typeof a.resources||!(a.resources instanceof Array)||!a.resources.length)throw Error("Invalid Reduncancy configuration");let b=Object.create(null),c;for(c in V)void 0!==a[c]?b[c]=a[c]:b[c]=V[c];return b}(a),c=[];function d(){c=c.filter(a=>"pending"===a().status)}return{query:function(a,e,f){let g=function(a,b,c,d){let e=a.resources.length,f=a.random?Math.floor(Math.random()*e):a.index,g;if(a.random){let h=a.resources.slice(0);for(g=[];h.length>1;){let i=Math.floor(Math.random()*h.length);g.push(h[i]),h=h.slice(0,i).concat(h.slice(i+1))}g=g.concat(h)}else g=a.resources.slice(f).concat(a.resources.slice(0,f));let j=Date.now(),k="pending",l=0,m,n=null,o=[],p=[];function q(){n&&(clearTimeout(n),n=null)}function r(){"pending"===k&&(k="aborted"),q(),o.forEach(a=>{"pending"===a.status&&(a.status="aborted")}),o=[]}function s(a,b){b&&(p=[]),"function"==typeof a&&p.push(a)}function t(){k="failed",p.forEach(a=>{a(void 0,m)})}function u(){o.forEach(a=>{"pending"===a.status&&(a.status="aborted")}),o=[]}function v(){if("pending"!==k)return;q();let d=g.shift();if(void 0===d){if(o.length){n=setTimeout(()=>{q(),"pending"===k&&(u(),t())},a.timeout);return}t();return}let e={status:"pending",resource:d,callback:(b,c)=>{!function(b,c,d){let e="success"!==c;switch(o=o.filter(a=>a!==b),k){case"pending":break;case"failed":if(e||!a.dataAfterTimeout)return;break;default:return}if("abort"===c){m=d,t();return}if(e){m=d,o.length||(g.length?v():t());return}if(q(),u(),!a.random){let f=a.resources.indexOf(b.resource);-1!==f&&f!==a.index&&(a.index=f)}k="completed",p.forEach(a=>{a(d)})}(e,b,c)}};o.push(e),l++,n=setTimeout(v,a.rotate),c(d,b,e.callback)}return"function"==typeof d&&p.push(d),setTimeout(v),function(){return{startTime:j,payload:b,status:k,queriesSent:l,queriesPending:o.length,subscribe:s,abort:r}}}(b,a,e,(a,b)=>{d(),f&&f(a,b)});return c.push(g),g},find:function(a){let b=c.find(b=>a(b));return void 0!==b?b:null},setIndex:a=>{b.index=a},getIndex:()=>b.index,cleanup:d}}function X(){}let Y=Object.create(null),Z={};function $(){}let _=Object.create(null),aa=Object.create(null),ab=Object.create(null),ac=Object.create(null),ad=Object.create(null),ae=(a,b)=>{let c=function(a,b=!0,c=!1){let d=[];return a.forEach(a=>{let e="string"==typeof a?j(a,!1,c):a;(!b||k(e,c))&&d.push({provider:e.provider,prefix:e.prefix,name:e.name})}),d}(a,!0,w()),d=function(a){let b={loaded:[],missing:[],pending:[]},c=Object.create(null);a.sort((a,b)=>a.provider!==b.provider?a.provider.localeCompare(b.provider):a.prefix!==b.prefix?a.prefix.localeCompare(b.prefix):a.name.localeCompare(b.name));let d={provider:"",prefix:"",name:""};return a.forEach(a=>{if(d.name===a.name&&d.prefix===a.prefix&&d.provider===a.provider)return;d=a;let e=a.provider,f=a.prefix,g=a.name;void 0===c[e]&&(c[e]=Object.create(null));let h=c[e];void 0===h[f]&&(h[f]=t(e,f));let i=h[f],j;(j=void 0!==i.icons[g]?b.loaded:""===f|| void 0!==i.missing[g]?b.missing:b.pending).push({provider:e,prefix:f,name:g})}),b}(c);if(!d.pending.length){let e=!0;return b&&setTimeout(()=>{e&&b(d.loaded,d.missing,d.pending,$)}),()=>{e=!1}}let f=Object.create(null),g=[],h,i;d.pending.forEach(a=>{let b=a.provider,c=a.prefix;if(c===i&&b===h)return;h=b,i=c,g.push({provider:b,prefix:c}),void 0===_[b]&&(_[b]=Object.create(null));let d=_[b];void 0===d[c]&&(d[c]=Object.create(null)),void 0===f[b]&&(f[b]=Object.create(null));let e=f[b];void 0===e[c]&&(e[c]=[])});let l=Date.now();return d.pending.forEach(a=>{let b=a.provider,c=a.prefix,d=a.name,e=_[b][c];void 0===e[d]&&(e[d]=l,f[b][c].push(d))}),g.forEach(a=>{let b=a.provider,c=a.prefix;f[b][c].length&&function(a,b,c){void 0===aa[a]&&(aa[a]=Object.create(null));let d=aa[a];void 0===ac[a]&&(ac[a]=Object.create(null));let e=ac[a];void 0===_[a]&&(_[a]=Object.create(null));let f=_[a];void 0===d[b]?d[b]=c:d[b]=d[b].concat(c).sort(),e[b]||(e[b]=!0,setTimeout(()=>{e[b]=!1;let c=d[b];delete d[b];let g=F(a);if(!g){!function(){let c=(""===a?"":"@"+a+":")+b,d=Math.floor(Date.now()/6e4);ad[c]<d&&(ad[c]=d,console.error('Unable to retrieve icons for "'+c+'" because API is not configured properly.'))}();return}let h=g.prepare(a,b,c);h.forEach(c=>{(function a(b,c,d){let e,f;if("string"==typeof b){let g=F(b);if(!g)return d(void 0,424),X;f=g.send;let h=function(a){if(void 0===Y[a]){var b;let c=H[b=a];if(!c)return;let d=W(c),e={config:c,redundancy:d};Y[a]=e}return Y[a]}(b);h&&(e=h.redundancy)}else{let i=G(b);if(i){e=W(i);let j=b.resources?b.resources[0]:"",k=F(j);k&&(f=k.send)}}return e&&f?e.query(c,f,d)().abort:(d(void 0,424),X)})(a,c,(d,e)=>{let g=t(a,b);if("object"!=typeof d){if(404!==e)return;let h=Date.now();c.icons.forEach(a=>{g.missing[a]=h})}else try{let i=u(g,d);if(!i.length)return;let j=f[b];i.forEach(a=>{delete j[a]}),Z.store&&Z.store(a,d)}catch(k){console.error(k)}!function(a,b){void 0===ab[a]&&(ab[a]=Object.create(null));let c=ab[a];c[b]||(c[b]=!0,setTimeout(()=>{c[b]=!1,function(a,b){void 0===S[a]&&(S[a]=Object.create(null));let c=S[a];c[b]||(c[b]=!0,setTimeout(()=>{if(c[b]=!1,void 0===R[a]|| void 0===R[a][b])return;let d=R[a][b].slice(0);if(!d.length)return;let e=t(a,b),f=!1;d.forEach(c=>{let d=c.icons,g=d.pending.length;d.pending=d.pending.filter(c=>{if(c.prefix!==b)return!0;let g=c.name;if(void 0!==e.icons[g])d.loaded.push({provider:a,prefix:b,name:g});else{if(void 0===e.missing[g])return f=!0,!0;d.missing.push({provider:a,prefix:b,name:g})}return!1}),d.pending.length!==g&&(f||T([{provider:a,prefix:b}],c.id),c.callback(d.loaded.slice(0),d.missing.slice(0),d.pending.slice(0),c.abort))})}))}(a,b)}))}(a,b)})})}))}(b,c,f[b][c])}),b?function(a,b,c){let d=U++,e=T.bind(null,c,d);if(!b.pending.length)return e;let f={id:d,icons:b,callback:a,abort:e};return c.forEach(a=>{let b=a.provider,c=a.prefix;void 0===R[b]&&(R[b]=Object.create(null));let d=R[b];void 0===d[c]&&(d[c]=[]),d[c].push(f)}),e}(b,d,g):$},af="iconify2",ag="iconify",ah=ag+"-count",ai=ag+"-version",aj={local:!0,session:!0},ak=!1,al={local:0,session:0},am={local:[],session:[]},an="undefined"==typeof window?{}:window;function ao(a){let b=a+"Storage";try{if(an&&an[b]&&"number"==typeof an[b].length)return an[b]}catch(c){}return aj[a]=!1,null}function ap(a,b,c){try{return a.setItem(ah,c.toString()),al[b]=c,!0}catch(d){return!1}}function aq(a){let b=a.getItem(ah);if(b){let c=parseInt(b);return c||0}return 0}let ar=()=>{if(ak)return;ak=!0;let a=Math.floor(Date.now()/36e5)-168;function b(b){let c=ao(b);if(!c)return;let d=b=>{let d=ag+b.toString(),e=c.getItem(d);if("string"!=typeof e)return!1;let f=!0;try{let g=JSON.parse(e);if("object"!=typeof g||"number"!=typeof g.cached||g.cached<a||"string"!=typeof g.provider||"object"!=typeof g.data||"string"!=typeof g.data.prefix)f=!1;else{let h=g.provider,i=g.data.prefix,j=t(h,i);f=u(j,g.data).length>0}}catch(k){f=!1}return f||c.removeItem(d),f};try{let e=c.getItem(ai);if(e!==af){e&&function(a){try{let b=aq(a);for(let c=0;c<b;c++)a.removeItem(ag+c.toString())}catch(d){}}(c),function(a,b){try{a.setItem(ai,af)}catch(c){}ap(a,b,0)}(c,b);return}let f=aq(c);for(let g=f-1;g>=0;g--)!d(g)&&(g===f-1?f--:am[b].push(g));ap(c,b,f)}catch(h){}}for(let c in aj)b(c)},as=(a,b)=>{function c(c){if(!aj[c])return!1;let d=ao(c);if(!d)return!1;let e=am[c].shift();if(void 0===e&&(e=al[c],!ap(d,c,e+1)))return!1;try{let f={cached:Math.floor(Date.now()/36e5),provider:a,data:b};d.setItem(ag+e.toString(),JSON.stringify(f))}catch(g){return!1}return!0}ak||ar(),Object.keys(b.icons).length&&(b.not_found&&delete(b=Object.assign({},b)).not_found,c("local")||c("session"))},at=/[\s,]+/;function au(a,b){b.split(at).forEach(b=>{let c=b.trim();switch(c){case"horizontal":a.hFlip=!0;break;case"vertical":a.vFlip=!0}})}function av(a,b){b.split(at).forEach(b=>{let c=b.trim();switch(c){case"left":case"center":case"right":a.hAlign=c;break;case"top":case"middle":case"bottom":a.vAlign=c;break;case"slice":case"crop":a.slice=!0;break;case"meet":a.slice=!1}})}function aw(a,b=0){let c=a.replace(/^-?[0-9.]*/,"");function d(a){for(;a<0;)a+=4;return a%4}if(""===c){let e=parseInt(a);return isNaN(e)?0:d(e)}if(c!==a){let f=0;switch(c){case"%":f=25;break;case"deg":f=90}if(f){let g=parseFloat(a.slice(0,a.length-c.length));return isNaN(g)?0:(g/=f)%1==0?d(g):0}}return b}let ax={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img",style:{}},ay={...x,inline:!0},az=(a,b,c,d)=>{let e=c?ay:x,g=function a(b,c){let d={};for(let e in b){let f=e;if(d[f]=b[f],void 0===c[f])continue;let g=c[f];switch(f){case"inline":case"slice":"boolean"==typeof g&&(d[f]=g);break;case"hFlip":case"vFlip":!0===g&&(d[f]=!d[f]);break;case"hAlign":case"vAlign":"string"==typeof g&&""!==g&&(d[f]=g);break;case"width":case"height":("string"==typeof g&&""!==g||"number"==typeof g&&g||null===g)&&(d[f]=g);break;case"rotate":"number"==typeof g&&(d[f]+=g)}}return d}(e,b),h="object"==typeof b.style&&null!==b.style?b.style:{},i={...ax,ref:d,style:h};for(let j in b){let k=b[j];if(void 0!==k)switch(j){case"icon":case"style":case"children":case"onLoad":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":g[j]=!0===k||"true"===k||1===k;break;case"flip":"string"==typeof k&&au(g,k);break;case"align":"string"==typeof k&&av(g,k);break;case"color":h.color=k;break;case"rotate":"string"==typeof k?g[j]=aw(k):"number"==typeof k&&(g[j]=k);break;case"ariaHidden":case"aria-hidden":!0!==k&&"true"!==k&&delete i["aria-hidden"];break;default:void 0===e[j]&&(i[j]=k)}}let l=function a(b,c){let d={left:b.left,top:b.top,width:b.width,height:b.height},e=b.body;[b,c].forEach(a=>{let b=[],c=a.hFlip,f=a.vFlip,g=a.rotate;c?f?g+=2:(b.push("translate("+(d.width+d.left).toString()+" "+(0-d.top).toString()+")"),b.push("scale(-1 1)"),d.top=d.left=0):f&&(b.push("translate("+(0-d.left).toString()+" "+(d.height+d.top).toString()+")"),b.push("scale(1 -1)"),d.top=d.left=0);let h;switch(g<0&&(g-=4*Math.floor(g/4)),g%=4){case 1:b.unshift("rotate(90 "+(h=d.height/2+d.top).toString()+" "+h.toString()+")");break;case 2:b.unshift("rotate(180 "+(d.width/2+d.left).toString()+" "+(d.height/2+d.top).toString()+")");break;case 3:b.unshift("rotate(-90 "+(h=d.width/2+d.left).toString()+" "+h.toString()+")")}g%2==1&&((0!==d.left||0!==d.top)&&(h=d.left,d.left=d.top,d.top=h),d.width!==d.height&&(h=d.width,d.width=d.height,d.height=h)),b.length&&(e='<g transform="'+b.join(" ")+'">'+e+"</g>")});let f,g;null===c.width&&null===c.height?f=A(g="1em",d.width/d.height):null!==c.width&&null!==c.height?(f=c.width,g=c.height):null!==c.height?f=A(g=c.height,d.width/d.height):g=A(f=c.width,d.height/d.width),"auto"===f&&(f=d.width),"auto"===g&&(g=d.height),f="string"==typeof f?f:f.toString()+"",g="string"==typeof g?g:g.toString()+"";let h={attributes:{width:f,height:g,preserveAspectRatio:function(a){let b="";switch(a.hAlign){case"left":b+="xMin";break;case"right":b+="xMax";break;default:b+="xMid"}switch(a.vAlign){case"top":b+="YMin";break;case"bottom":b+="YMax";break;default:b+="YMid"}return b+(a.slice?" slice":" meet")}(c),viewBox:d.left.toString()+" "+d.top.toString()+" "+d.width.toString()+" "+d.height.toString()},body:e};return c.inline&&(h.inline=!0),h}(a,g),m=0,n=b.id;for(let o in"string"==typeof n&&(n=n.replace(/-/g,"_")),i.dangerouslySetInnerHTML={__html:function(a,b=C){let c=[],d;for(;d=B.exec(a);)c.push(d[1]);return c.length&&c.forEach(c=>{let d="function"==typeof b?b(c):b+(D++).toString(),e=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");a=a.replace(RegExp('([#;"])('+e+')([")]|\\.[a-z])',"g"),"$1"+d+"$3")}),a}(l.body,n?()=>n+"ID"+m++:"iconifyReact")},l.attributes)i[o]=l.attributes[o];return l.inline&& void 0===h.verticalAlign&&(h.verticalAlign="-0.125em"),f.createElement("svg",i)};if(w(!0),e={prepare:P,send:Q},E[""]=e,"undefined"!=typeof document&&"undefined"!=typeof window){Z.store=as,ar();let aA=window;if(void 0!==aA.IconifyPreload){let aB=aA.IconifyPreload,aC="Invalid IconifyPreload syntax.";"object"==typeof aB&&null!==aB&&(aB instanceof Array?aB:[aB]).forEach(a=>{try{("object"!=typeof a||null===a||a instanceof Array||"object"!=typeof a.icons||"string"!=typeof a.prefix||!function(a,b){if("object"!=typeof a)return!1;if("string"!=typeof b&&(b="string"==typeof a.provider?a.provider:""),v&&""===b&&("string"!=typeof a.prefix||""===a.prefix)){let c=!1;return p(a)&&(a.prefix="",m(a,(a,b)=>{b&&function(a,b){let c=j(a,!0,v);if(!c)return!1;let d=t(c.provider,c.prefix);return function(a,b,c){try{if("string"==typeof c.body)return a.icons[b]=Object.freeze(i(c)),!0}catch(d){}return!1}(d,c.name,b)}(a,b)&&(c=!0)})),c}if("string"!=typeof a.prefix||!k({provider:b,prefix:a.prefix,name:"a"}))return!1;let d=t(b,a.prefix);return!!u(d,a)}(a))&&console.error(aC)}catch(b){console.error(aC)}})}if(void 0!==aA.IconifyProviders){let aD=aA.IconifyProviders;if("object"==typeof aD&&null!==aD)for(let aE in aD){let aF="IconifyProviders["+aE+"] is invalid.";try{let aG=aD[aE];if("object"!=typeof aG||!aG|| void 0===aG.resources)continue;K(aE,aG)||console.error(aF)}catch(aH){console.error(aF)}}}}class aI extends f.Component{constructor(a){super(a),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(a){this.state.icon!==a&&this.setState({icon:a})}_checkIcon(a){let b=this.state,c=this.props.icon;if("object"==typeof c&&null!==c&&"string"==typeof c.body){this._icon="",this._abortLoading(),(a||null===b.icon)&&this._setData({data:i(c)});return}let d;if("string"!=typeof c||null===(d=j(c,!1,!0))){this._abortLoading(),this._setData(null);return}let e=function a(b){let c="string"==typeof b?j(b,!0,v):b;return c?function a(b,c){let d=b.icons[c];return void 0===d?null:d}(t(c.provider,c.prefix),c.name):null}(d);if(null===e){this._loading&&this._loading.name===c||(this._abortLoading(),this._icon="",this._setData(null),this._loading={name:c,abort:ae([d],this._checkIcon.bind(this,!1))});return}if(this._icon!==c||null===b.icon){this._abortLoading(),this._icon=c;let f=["iconify"];""!==d.prefix&&f.push("iconify--"+d.prefix),""!==d.provider&&f.push("iconify--"+d.provider),this._setData({data:e,classes:f}),this.props.onLoad&&this.props.onLoad(c)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(a){a.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){let a=this.props,b=this.state.icon;if(null===b)return a.children?a.children:f.createElement("span",{});let c=a;return b.classes&&(c={...a,className:("string"==typeof a.className?a.className+" ":"")+b.classes.join(" ")}),az(b.data,c,a._inline,a._ref)}}let aJ=f.forwardRef(function(a,b){return f.createElement(aI,{...a,_ref:b,_inline:!1})});f.forwardRef(function(a,b){return f.createElement(aI,{...a,_ref:b,_inline:!0})})},18316:function(a,b,c){"use strict";function d(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}c.d(b,{Z:function(){return d}})}}])