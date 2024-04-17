"use strict";(self.webpackChunk_pekings_r_ui_component=self.webpackChunk_pekings_r_ui_component||[]).push([[643],{"./src/components/VerificationCodeBox/verificationCodeBox.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>verificationCodeBox_stories});var react=__webpack_require__("./node_modules/react/index.js");function t(t){var i=function(t,i,n){if(n||2==arguments.length)for(var a,o=0,r=i.length;o<r;o++)!a&&o in i||(a||(a=Array.prototype.slice.call(i,0,o)),a[o]=i[o]);return t.concat(a||Array.prototype.slice.call(i))}([],t,!0);return i.sort(function(t,i){return t-i}),Math.floor(Math.random()*(i[1]-i[0])+i[0])}"function"==typeof SuppressedError&&SuppressedError;var i=function(){function i(t,i,n){this.paint=null;var a=Object.assign({lineWidth:.5,lineNum:2,dotNum:5,dotR:1,foreGroundColor:[10,80],backGroundColor:[150,250],fontSize:20,fontFamily:"Georgia",fontStyle:"fill",content:"acdefhijkmnpwxyABCDEFGHJKMNPQWXY12345789",len:4},n);if(this.options=a,!(t instanceof HTMLCanvasElement))throw Error("Canvas DOM is required");if("function"!=typeof i)throw Error("Error callback");if(this.canvas=t,this.paint=this.canvas.getContext("2d"),!this.paint)throw Error("Canvas getContext fail");this.callBack=i}return i.prototype.getColor=function(i){return[t(i),t(i),t(i)]},i.prototype.getText=function(){for(var i=this.options,n=i.content,a=i.len,o="",r=0;r<a;r+=1)o+=n[t([0,n.length])];return o},i.prototype.drawLine=function(){if(this.canvas&&this.paint)for(var i=this.options,n=i.lineNum,a=i.foreGroundColor,o=this.canvas,r=o.width,s=o.height,e=0;e<n;e+=1){var h=t([0,r]),c=t([0,s]),l=t([0,r]),p=t([0,s]),f=this.getColor(a);this.paint.strokeStyle="rgba(".concat(f[0],",").concat(f[1],",").concat(f[2],",0.8)"),this.paint.beginPath(),this.paint.moveTo(h,c),this.paint.lineTo(l,p),this.paint.closePath(),this.paint.stroke()}},i.prototype.drawArc=function(){if(this.canvas&&this.paint)for(var i=this.options,n=i.dotNum,a=i.dotR,o=i.foreGroundColor,r=0;r<n;r+=1){var s=t([0,this.canvas.width]),e=t([0,this.canvas.height]),h=this.getColor(o);this.paint.fillStyle="rgba(".concat(h[0],",").concat(h[1],",").concat(h[2],",0.8)"),this.paint.beginPath(),this.paint.arc(s,e,a,0,2*Math.PI,!1),this.paint.closePath(),this.paint.fill()}},i.prototype.drawText=function(){if(this.paint&&this.canvas){var i=this.getText();this.callBack&&this.callBack(i);var n=this.options,a=n.fontSize,o=n.fontFamily,r=n.len,s=n.fontStyle,e=n.foreGroundColor,h=this.canvas,c=h.width,l=h.height;this.paint.font="".concat(a,"px ").concat(o),this.paint.textBaseline="middle";for(var p="".concat(s,"Text"),f="".concat(s,"Style"),u=this.getColor(e),d=l/2,v=0;v<r;v+=1){var g=this.paint.measureText(i[v]).width,y=c/r*v,w=t([y+2*g,y+c/r-2*g]),C=t([-6,6]);this.paint.save(),this.paint[f]="rgba(".concat(u[0],",").concat(u[1],",").concat(u[2],", 0.8)"),this.paint.rotate(C*Math.PI/180),this.paint[p](i[v],w,d),this.paint.restore()}}},i.prototype.draw=function(){if(this.paint&&this.canvas){var t=this.options.backGroundColor,i=this.getColor(t);this.paint.fillStyle="rgba(".concat(i[0],",").concat(i[1],",").concat(i[2],", 0.8)"),this.paint.fillRect(0,0,this.canvas.width,this.canvas.height),this.drawArc(),this.drawLine(),this.drawText()}},i.prototype.clear=function(){this.paint&&this.canvas&&this.paint.clearRect(0,0,this.canvas.width,this.canvas.height)},i.prototype.drawAgain=function(){this.clear(),this.draw()},i}(),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let VerificationCodeBox=(0,react.forwardRef)((props,ref)=>{let{id="v-code",options,width,height,clickToRefresh,onCodeRecieve,onClick}=props,[vCode,setVCode]=(0,react.useState)(null);return(0,react.useEffect)(()=>{let vCode=new i(document.getElementById(id),onCodeRecieve,options);setVCode(vCode),vCode.draw()},[]),(0,react.useImperativeHandle)(ref,()=>({vCode})),(0,jsx_runtime.jsx)("canvas",{"data-testid":id,width:width,height:height,id:id,onClick:function(e){vCode&&clickToRefresh&&vCode.drawAgain(),onClick&&onClick(e)}})});VerificationCodeBox.defaultProps={width:200,height:100,clickToRefresh:!0};try{VerificationCodeBox.displayName="VerificationCodeBox",VerificationCodeBox.__docgenInfo={description:"",displayName:"VerificationCodeBox",props:{height:{defaultValue:{value:"100"},description:"验证码组件高度",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:{value:"200"},description:"验证码组件宽度",name:"width",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"验证码组件元素id，默认: v-code",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"监听点击事件",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLCanvasElement, MouseEvent>) => void)"}},options:{defaultValue:null,description:"验证码配置",name:"options",required:!1,type:{name:"{ lineWidth?: number; lineNum?: number; dotNum?: number | undefined; dotR?: number | undefined; foreGroundColor?: [number, number] | undefined; backGroundColor?: [...] | undefined; ... 4 more ...; len?: number | undefined; } | undefined"}},clickToRefresh:{defaultValue:{value:"true"},description:"是否开启点击刷新",name:"clickToRefresh",required:!1,type:{name:"boolean"}},onCodeRecieve:{defaultValue:null,description:"监听验证码获取",name:"onCodeRecieve",required:!0,type:{name:"(code: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VerificationCodeBox/verificationCodeBox.tsx#VerificationCodeBox"]={docgenInfo:VerificationCodeBox.__docgenInfo,name:"VerificationCodeBox",path:"src/components/VerificationCodeBox/verificationCodeBox.tsx#VerificationCodeBox"})}catch(__react_docgen_typescript_loader_error){}try{verificationCodeBox.displayName="verificationCodeBox",verificationCodeBox.__docgenInfo={description:"",displayName:"verificationCodeBox",props:{height:{defaultValue:{value:"100"},description:"验证码组件高度",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:{value:"200"},description:"验证码组件宽度",name:"width",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"验证码组件元素id，默认: v-code",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"监听点击事件",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLCanvasElement, MouseEvent>) => void)"}},options:{defaultValue:null,description:"验证码配置",name:"options",required:!1,type:{name:"{ lineWidth?: number; lineNum?: number; dotNum?: number | undefined; dotR?: number | undefined; foreGroundColor?: [number, number] | undefined; backGroundColor?: [...] | undefined; ... 4 more ...; len?: number | undefined; } | undefined"}},clickToRefresh:{defaultValue:{value:"true"},description:"是否开启点击刷新",name:"clickToRefresh",required:!1,type:{name:"boolean"}},onCodeRecieve:{defaultValue:null,description:"监听验证码获取",name:"onCodeRecieve",required:!0,type:{name:"(code: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VerificationCodeBox/verificationCodeBox.tsx#verificationCodeBox"]={docgenInfo:verificationCodeBox.__docgenInfo,name:"verificationCodeBox",path:"src/components/VerificationCodeBox/verificationCodeBox.tsx#verificationCodeBox"})}catch(__react_docgen_typescript_loader_error){}let verificationCodeBox_stories={title:"VerificationCodeBox",component:VerificationCodeBox,tags:["autodocs"],parameters:{layout:"centered"}},Default={args:{width:200,height:100,onCodeRecieve:code=>{console.log(code)}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    width: 200,\n    height: 100,\n    onCodeRecieve: code => {\n      console.log(code);\n    }\n  }\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-VerificationCodeBox-verificationCodeBox-stories.e4d0d850.iframe.bundle.js.map