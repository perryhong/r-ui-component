(self.webpackChunk_pekings_r_ui_component=self.webpackChunk_pekings_r_ui_component||[]).push([[175],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/Welcome.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>Welcome_stories}),__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");let components_Button=__webpack_require__("./src/components/Button/button.tsx").A;try{Button.displayName="Button",Button.__docgenInfo={description:"页面中最常用的的按钮元素\n### 引用方法\n~~~js\nimport { Button } from '@pekings/r-ui-component'\n~~~",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},btnType:{defaultValue:{value:"default"},description:"设置Button的类型",name:"btnType",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"default"'},{value:'"primary"'},{value:'"danger"'}]}},size:{defaultValue:null,description:"设置Button的尺寸",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:{value:"false"},description:"是否禁用Button",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"设置Button的跳转链接, 当btnType为link时该参数必须",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}let package_namespaceObject={rE:"0.2.3"};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",h3:"h3",code:"code",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}},title:"Welcome"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"sb-introduction",children:[(0,jsx_runtime.jsx)("img",{className:"sb-img",src:"images/logo.jpg"}),(0,jsx_runtime.jsxs)("div",{className:"github-info",children:[(0,jsx_runtime.jsx)(components_Button,{className:"github-btn",btnType:"link",href:"https://github.com/perryhong/r-ui-component",children:(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"})})}),(0,jsx_runtime.jsx)("h3",{className:"version",children:`Version ${package_namespaceObject.rE}`})]})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"introduction",children:"Introduction"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"欢迎来到 @pekings/r-ui-component 组件库"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"getting-start",children:"Getting Start"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"开始使用"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"install",children:"Install"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Using ",(0,jsx_runtime.jsx)(_components.code,{children:"npm"})," to install"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @pekings/r-ui-component --save\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Using ",(0,jsx_runtime.jsx)(_components.code,{children:"yarn"})," to install"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"yarn add @pekings/r-ui-component\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"import",children:"Import"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// 全局引入样式\nimport "@pekings/r-ui-component/dist/index.css";\n// 引入组件\nimport { Button } from "@pekings/r-ui-component";\n'})}),"\n",(0,jsx_runtime.jsx)("style",{children:`
    .sb-introduction {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
    }

    .github-info {
      display: flex;
      align-items: center;
    }

    .github-info .version {
      font-size: 16px;
      margin-bottom: 0px;
      margin-left: 10px;
      color: #0d6efd;
    }

    .sb-img {
      width: 88px;
      height: 88px;
      border-radius: 10px;
    }

    .github-btn {
      width: 40px;
      height: 40px;
    }
  `})]})}function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}let __page=()=>{throw Error("Docs-only story")};__page.parameters={docsOnly:!0};let componentMeta={title:"Welcome",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:MDXContent};let Welcome_stories=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return classNames}).apply(exports,[]))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./src/components/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");let Button1=props=>{let{className,btnType,size,disabled,href,children,...restProps}=props,classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("btn",className,{["btn-".concat(btnType)]:btnType,["btn-".concat(size)]:size,disabled:"link"===btnType&&disabled});return"link"===btnType&&href?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{className:classes,href:href,...restProps,children:children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:classes,disabled:disabled,...restProps,children:children})};Button1.defaultProps={btnType:"default",disabled:!1};let __WEBPACK_DEFAULT_EXPORT__=Button1;try{Button1.displayName="Button",Button1.__docgenInfo={description:"页面中最常用的的按钮元素\n### 引用方法\n~~~js\nimport { Button } from '@pekings/r-ui-component'\n~~~",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},btnType:{defaultValue:{value:"default"},description:"设置Button的类型",name:"btnType",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"default"'},{value:'"primary"'},{value:'"danger"'}]}},size:{defaultValue:null,description:"设置Button的尺寸",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:{value:"false"},description:"是否禁用Button",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"设置Button的跳转链接, 当btnType为link时该参数必须",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/button.tsx#Button"]={docgenInfo:Button1.__docgenInfo,name:"Button",path:"src/components/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{button.displayName="button",button.__docgenInfo={description:"页面中最常用的的按钮元素\n### 引用方法\n~~~js\nimport { Button } from '@pekings/r-ui-component'\n~~~",displayName:"button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},btnType:{defaultValue:{value:"default"},description:"设置Button的类型",name:"btnType",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"default"'},{value:'"primary"'},{value:'"danger"'}]}},size:{defaultValue:null,description:"设置Button的尺寸",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:{value:"false"},description:"是否禁用Button",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"设置Button的跳转链接, 当btnType为link时该参数必须",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/button.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"src/components/Button/button.tsx#button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=Welcome-stories-mdx.bff8709a.iframe.bundle.js.map