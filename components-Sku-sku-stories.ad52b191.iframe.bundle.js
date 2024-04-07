(self.webpackChunk_pekings_r_ui_component=self.webpackChunk_pekings_r_ui_component||[]).push([[999],{"./src/components/Sku/sku.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>sku_stories});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Sku=props=>{let{className,specClassName,specTitleClassName,specRowClassName,selectedClassName,unSelectedClassName,disabledClassName,specList,specCombinationList,onSkuSelected}=props,[specsArr,setSpecsArr]=(0,react.useState)([]),[adjoinArr,setAdjoinArr]=(0,react.useState)([]),[optionSpecs,setOptionSpecs]=(0,react.useState)([]),vertex=specList.reduce((prev,cur)=>[...prev,...cur.list],[]),len=vertex.length,setAdjoinVertexs=(side,sides,weight)=>{let pIndex=-1;for(let i=0;i<len;i+=1)if(side.id===vertex[i].id){pIndex=i;break}sides.forEach(item=>{let index=-1;for(let i=0;i<len;i+=1)if(item.id===vertex[i].id){index=i;break}setAdjoinArr(arr=>{let newArr=[...arr],cur=newArr[pIndex*len+index];return Array.isArray(cur)?cur.push(weight):"number"==typeof cur&&cur>1?newArr[pIndex*len+index]=[cur,weight]:newArr[pIndex*len+index]=weight,newArr})})},fillInSpec=(params,weight)=>{params.forEach(param=>{setAdjoinVertexs(param,params,weight)})},getVertexCol=param=>{let idx=-1;for(let i=0;i<len;i+=1)if(param&&param.id===vertex[i].id){idx=i;break}let col=[];return vertex.forEach((item,pIndex)=>{col.push(adjoinArr[idx+len*pIndex])}),col},isArrayUnions=params=>!!params.length&&!!params[0]&&params[0].some(t=>params.every(_t=>_t&&_t.includes(t))),isItemEqual=params=>{if(params&&params.includes(0))return!1;let weight=-1;return params.length&&(params.some(t=>("number"==typeof t&&(weight=t),"number"==typeof t)),-1===weight)?isArrayUnions(params):params.every(t=>"number"==typeof t?t===weight:t&&t.includes(weight))},getUnion=params=>{let paramsVertex=params.map(param=>getVertexCol(param)),union=[];return paramsVertex.forEach((col,index)=>{col.some(item=>0!==item)&&union.push(params[index])}),union},getIntersection=params=>{let paramsVertex=params.map(param=>getVertexCol(param)),intersection=[];return vertex.forEach((type,index)=>{isItemEqual(paramsVertex.map(col=>col[index]).filter(t=>1!==t))&&intersection.push(type)}),intersection},getSpecOptions=params=>params.some(Boolean)?getIntersection(params.filter(Boolean)):getUnion(vertex),initSpec=()=>{specCombinationList.forEach((item,index)=>fillInSpec(item.specs,index+2))},initSameLevel=options=>{specList.forEach(item=>{let params=[];item.list.forEach(val=>{options.find(item=>item.id===val.id)&&params.push(val)}),fillInSpec(params,1)})},isActive=item=>!!specsArr.find(specs=>specs&&specs.id===item.id),isOptions=item=>!!optionSpecs.find(specs=>specs.id===item.id),getSpecChoiceClasses=item=>classnames_default()("rec-spec-choice",{...selectedClassName?{[selectedClassName]:isActive(item)}:{"rec-spec-choice-active":isActive(item)},...unSelectedClassName?{[unSelectedClassName]:!isActive(item)}:{"rec-spec-choice-unactive":!isActive(item)},...disabledClassName?{[disabledClassName]:!isOptions(item)}:{"rec-spec-choice-disabled":!isOptions(item)}}),init=()=>{let adjoin=Array(len*len).fill(0),specs=Array(specList.length).fill(null),options=handleSpecsArrChange(specs);setAdjoinArr(adjoin),setSpecsArr(specs),initSpec(),initSameLevel(options)},handleSpecsArrChange=arr=>{let newOptionSpecs=getSpecOptions(arr);if(setOptionSpecs(newOptionSpecs),arr.every(Boolean)&&arr.length===specList.length)for(let i=0;i<specCombinationList.length;i+=1){let specComb=specCombinationList[i],combSpecMap={};specComb.specs.forEach(item=>combSpecMap["".concat(item.value,"-").concat(item.id)]=1);let flag=!0;for(let j=0;j<arr.length;j+=1){let item=arr[j];if(!combSpecMap["".concat(null==item?void 0:item.value,"-").concat(null==item?void 0:item.id)]){flag=!1;break}}if(flag){onSkuSelected(specComb);break}}return newOptionSpecs},handleSpecChoiceClick=(flag,item,idx)=>{flag&&(specsArr[idx]?setSpecsArr(arr=>{var _newArr$idx;let newArr=[...arr];return newArr[idx]=(null===(_newArr$idx=newArr[idx])||void 0===_newArr$idx?void 0:_newArr$idx.id)===item.id?null:item,handleSpecsArrChange(newArr),newArr}):setSpecsArr(arr=>{let newArr=[...arr];return newArr[idx]=item,handleSpecsArrChange(newArr),newArr}))};(0,react.useEffect)(()=>{init()},[]);let classes=classnames_default()("rec-sku-container",className),specBlockClasses=classnames_default()("rec-spec-block",specClassName),specTitleClasses=classnames_default()("rec-spec-title",specTitleClassName);return(0,jsx_runtime.jsx)("div",{"data-testid":"rec-sku",className:classes,children:specList.map((item,idx)=>(0,jsx_runtime.jsxs)("div",{className:specBlockClasses,children:[(0,jsx_runtime.jsx)("p",{className:specTitleClasses,children:item.title}),(0,jsx_runtime.jsx)("div",{className:specRowClassName,children:item.list.map(specItem=>(0,jsx_runtime.jsx)("span",{className:getSpecChoiceClasses(specItem),onClick:()=>handleSpecChoiceClick(isOptions(specItem),specItem,idx),children:specItem.value},specItem.id))})]},item.title))})};try{Sku.displayName="Sku",Sku.__docgenInfo={description:"Sku 选择器 通过点击切换sku属性\n\n~~~js\n// 这样引用\nimport { Sku } from '@pekings/r-ui-component'\n~~~",displayName:"Sku",props:{className:{defaultValue:null,description:"Sku组件最外层的样式Class",name:"className",required:!1,type:{name:"string"}},specClassName:{defaultValue:null,description:"Sku属性块的样式Class",name:"specClassName",required:!1,type:{name:"string"}},specTitleClassName:{defaultValue:null,description:"Sku属性名的样式Class,如颜色、尺寸",name:"specTitleClassName",required:!1,type:{name:"string"}},specRowClassName:{defaultValue:null,description:"Sku属性值列表外层块的样式Class",name:"specRowClassName",required:!1,type:{name:"string"}},selectedClassName:{defaultValue:null,description:"Sku属性值选中的样式Class",name:"selectedClassName",required:!1,type:{name:"string"}},unSelectedClassName:{defaultValue:null,description:"Sku属性值未选中的样式Class",name:"unSelectedClassName",required:!1,type:{name:"string"}},disabledClassName:{defaultValue:null,description:"Sku属性值禁止选中的样式Class",name:"disabledClassName",required:!1,type:{name:"string"}},specList:{defaultValue:null,description:"Sku属性值列表",name:"specList",required:!0,type:{name:"SpecItem[]"}},specCombinationList:{defaultValue:null,description:"所有可选Sku组合列表",name:"specCombinationList",required:!0,type:{name:"SpecCombinationItem[]"}},onSkuSelected:{defaultValue:null,description:"选出一个Sku组合后的回调",name:"onSkuSelected",required:!0,type:{name:"(val: SpecCombinationItem) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Sku/sku.tsx#Sku"]={docgenInfo:Sku.__docgenInfo,name:"Sku",path:"src/components/Sku/sku.tsx#Sku"})}catch(__react_docgen_typescript_loader_error){}try{sku.displayName="sku",sku.__docgenInfo={description:"Sku 选择器 通过点击切换sku属性\n\n~~~js\n// 这样引用\nimport { Sku } from '@pekings/r-ui-component'\n~~~",displayName:"sku",props:{className:{defaultValue:null,description:"Sku组件最外层的样式Class",name:"className",required:!1,type:{name:"string"}},specClassName:{defaultValue:null,description:"Sku属性块的样式Class",name:"specClassName",required:!1,type:{name:"string"}},specTitleClassName:{defaultValue:null,description:"Sku属性名的样式Class,如颜色、尺寸",name:"specTitleClassName",required:!1,type:{name:"string"}},specRowClassName:{defaultValue:null,description:"Sku属性值列表外层块的样式Class",name:"specRowClassName",required:!1,type:{name:"string"}},selectedClassName:{defaultValue:null,description:"Sku属性值选中的样式Class",name:"selectedClassName",required:!1,type:{name:"string"}},unSelectedClassName:{defaultValue:null,description:"Sku属性值未选中的样式Class",name:"unSelectedClassName",required:!1,type:{name:"string"}},disabledClassName:{defaultValue:null,description:"Sku属性值禁止选中的样式Class",name:"disabledClassName",required:!1,type:{name:"string"}},specList:{defaultValue:null,description:"Sku属性值列表",name:"specList",required:!0,type:{name:"SpecItem[]"}},specCombinationList:{defaultValue:null,description:"所有可选Sku组合列表",name:"specCombinationList",required:!0,type:{name:"SpecCombinationItem[]"}},onSkuSelected:{defaultValue:null,description:"选出一个Sku组合后的回调",name:"onSkuSelected",required:!0,type:{name:"(val: SpecCombinationItem) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Sku/sku.tsx#sku"]={docgenInfo:sku.__docgenInfo,name:"sku",path:"src/components/Sku/sku.tsx#sku"})}catch(__react_docgen_typescript_loader_error){}let sku_stories={title:"Sku",component:Sku,tags:["autodocs"],parameters:{layout:"centered"}},Default={args:{specList:[{title:"颜色",list:[{value:"红色",id:"1"},{value:"紫色",id:"2"}]},{title:"套餐",list:[{value:"套餐一",id:"3"},{value:"套餐二",id:"4"}]},{title:"内存",list:[{value:"64G",id:"5"},{value:"128G",id:"6"},{value:"256G",id:"7"}]}],specCombinationList:[{id:"1",specs:[{value:"紫色",id:"2"},{value:"套餐一",id:"3"},{value:"64G",id:"5"}]},{id:"2",specs:[{value:"紫色",id:"2"},{value:"套餐一",id:"3"},{value:"128G",id:"6"}]},{id:"3",specs:[{value:"紫色",id:"2"},{value:"套餐二",id:"4"},{value:"128G",id:"6"}]},{id:"4",specs:[{value:"红色",id:"1"},{value:"套餐二",id:"4"},{value:"256G",id:"7"}]}],onSkuSelected:item=>{console.log(item)}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    specList: [{\n      title: "颜色",\n      list: [{\n        value: "红色",\n        id: "1"\n      }, {\n        value: "紫色",\n        id: "2"\n      }]\n    }, {\n      title: "套餐",\n      list: [{\n        value: "套餐一",\n        id: "3"\n      }, {\n        value: "套餐二",\n        id: "4"\n      }]\n    }, {\n      title: "内存",\n      list: [{\n        value: "64G",\n        id: "5"\n      }, {\n        value: "128G",\n        id: "6"\n      }, {\n        value: "256G",\n        id: "7"\n      }]\n    }],\n    specCombinationList: [{\n      id: "1",\n      specs: [{\n        value: "紫色",\n        id: "2"\n      }, {\n        value: "套餐一",\n        id: "3"\n      }, {\n        value: "64G",\n        id: "5"\n      }]\n    }, {\n      id: "2",\n      specs: [{\n        value: "紫色",\n        id: "2"\n      }, {\n        value: "套餐一",\n        id: "3"\n      }, {\n        value: "128G",\n        id: "6"\n      }]\n    }, {\n      id: "3",\n      specs: [{\n        value: "紫色",\n        id: "2"\n      }, {\n        value: "套餐二",\n        id: "4"\n      }, {\n        value: "128G",\n        id: "6"\n      }]\n    }, {\n      id: "4",\n      specs: [{\n        value: "红色",\n        id: "1"\n      }, {\n        value: "套餐二",\n        id: "4"\n      }, {\n        value: "256G",\n        id: "7"\n      }]\n    }],\n    onSkuSelected: item => {\n      console.log(item);\n    }\n  }\n}',...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return classNames}).apply(exports,[]))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-Sku-sku-stories.ad52b191.iframe.bundle.js.map