(self.webpackChunk_pekings_r_ui_component=self.webpackChunk_pekings_r_ui_component||[]).push([[255],{"./src/components/LazyLoadImage/lazyLoadImage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HorizontalLazyImage:()=>HorizontalLazyImage,NoObserverLazyImage:()=>NoObserverLazyImage,ObserverLazyImage:()=>ObserverLazyImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LazyLoadImage_lazyLoadImage_stories});var react=__webpack_require__("./node_modules/react/index.js");let isIntersectionObserverAvailable=function(){return"undefined"!=typeof window&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let checkIntersections=entries=>{entries.forEach(entry=>{entry.isIntersecting&&entry.target.onVisible()})},LAZY_LOAD_OBSERVERS={},getObserver=threshold=>(LAZY_LOAD_OBSERVERS[threshold]=LAZY_LOAD_OBSERVERS[threshold]||new IntersectionObserver(checkIntersections,{rootMargin:"".concat(threshold,"px")}),LAZY_LOAD_OBSERVERS[threshold]),PlaceholderWithoutTracking=props=>{let{placeholder,useIntersectionObserver,threshold=0,scrollPosition,className,height,width,style,onVisible}=props,isSupportObserver=!scrollPosition&&useIntersectionObserver&&isIntersectionObserverAvailable(),observer=isSupportObserver?getObserver(threshold):null,placeholderRef=(0,react.useRef)(null),getPlaceholderBoundingBox=()=>{var _placeholderRef$curre,_placeholderRef$curre2;let boundingRect=null===(_placeholderRef$curre=placeholderRef.current)||void 0===_placeholderRef$curre?void 0:_placeholderRef$curre.getBoundingClientRect(),style=null===(_placeholderRef$curre2=placeholderRef.current)||void 0===_placeholderRef$curre2?void 0:_placeholderRef$curre2.style,margin={left:style&&style.getPropertyValue("margin-left")?parseInt(style.getPropertyValue("margin-left"),10):0,top:style&&style.getPropertyValue("margin-top")?parseInt(style.getPropertyValue("margin-top"),10):0};return{left:((null==scrollPosition?void 0:scrollPosition.x)||0)+((null==boundingRect?void 0:boundingRect.left)||0)+margin.left,right:((null==scrollPosition?void 0:scrollPosition.x)||0)+((null==boundingRect?void 0:boundingRect.right)||0)+margin.left,top:((null==scrollPosition?void 0:scrollPosition.y)||0)+((null==boundingRect?void 0:boundingRect.top)||0)+margin.top,bottom:((null==scrollPosition?void 0:scrollPosition.y)||0)+((null==boundingRect?void 0:boundingRect.bottom)||0)+margin.top}},isPlaceholderInViewport=()=>{if("undefined"==typeof window||!placeholderRef.current)return!1;let boundingBox=getPlaceholderBoundingBox(),viewport={top:(null==scrollPosition?void 0:scrollPosition.y)||0,bottom:((null==scrollPosition?void 0:scrollPosition.y)||0)+window.innerHeight,left:(null==scrollPosition?void 0:scrollPosition.x)||0,right:((null==scrollPosition?void 0:scrollPosition.x)||0)+window.innerWidth};return!!(viewport.top-threshold<=boundingBox.bottom&&viewport.bottom+threshold>=boundingBox.top&&viewport.left-threshold<=boundingBox.right&&viewport.right+threshold>=boundingBox.left)},updateVisibility=()=>{isPlaceholderInViewport()&&onVisible&&onVisible()};if((0,react.useEffect)(()=>{let ele=placeholderRef.current;return isSupportObserver&&observer&&ele&&(ele.onVisible=onVisible,observer.observe(ele)),()=>{observer&&ele&&observer.unobserve(ele)}},[]),(0,react.useEffect)(()=>{isSupportObserver||updateVisibility()},[scrollPosition]),placeholder&&"function"!=typeof placeholder.type)return react.cloneElement(placeholder,{ref:placeholderRef});let styleProps={display:"inline-block",...style};return void 0!==width&&(styleProps.width=width),void 0!==height&&(styleProps.height=height),(0,jsx_runtime.jsx)("span",{ref:placeholderRef,className:className,style:styleProps,children:placeholder})};PlaceholderWithoutTracking.defaultProps={threshold:100,placeholder:null,useIntersectionObserver:!0};try{placeholderWithoutTracking.displayName="placeholderWithoutTracking",placeholderWithoutTracking.__docgenInfo={description:"",displayName:"placeholderWithoutTracking",props:{threshold:{defaultValue:{value:"100"},description:"图片出现在视图中的哪个分界点开始加载,单位px",name:"threshold",required:!1,type:{name:"number"}},placeholder:{defaultValue:{value:"null"},description:"图片未加载前的placeholder",name:"placeholder",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | null"}},className:{defaultValue:null,description:"图片样式class",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"图片内联样式",name:"style",required:!1,type:{name:"CSSProperties"}},height:{defaultValue:null,description:"图片高度",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:null,description:"图片宽度",name:"width",required:!1,type:{name:"string | number"}},useIntersectionObserver:{defaultValue:{value:"true"},description:"是否使用IntersectionObserver",name:"useIntersectionObserver",required:!1,type:{name:"boolean"}},scrollPosition:{defaultValue:null,description:"滚动的横竖距离,若不使用IntersectionObserver则要传",name:"scrollPosition",required:!1,type:{name:"{ y: number; x: number; }"}},onVisible:{defaultValue:null,description:"",name:"onVisible",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LazyLoadImage/placeholderWithoutTracking.tsx#placeholderWithoutTracking"]={docgenInfo:placeholderWithoutTracking.__docgenInfo,name:"placeholderWithoutTracking",path:"src/components/LazyLoadImage/placeholderWithoutTracking.tsx#placeholderWithoutTracking"})}catch(__react_docgen_typescript_loader_error){}var react_dom=__webpack_require__("./node_modules/react-dom/index.js");let lodash_es_isObject=function isObject(value){var type=typeof value;return null!=value&&("object"==type||"function"==type)};var freeGlobal="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")();let lodash_es_now=function(){return root.Date.now()};var reWhitespace=/\s/;let _trimmedEndIndex=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index};var reTrimStart=/^\s+/,Symbol1=root.Symbol,objectProto=Object.prototype,_getRawTag_hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=Symbol1?Symbol1.toStringTag:void 0;let _getRawTag=function getRawTag(value){var isOwn=_getRawTag_hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=void 0;var unmasked=!0}catch(e){}var result=nativeObjectToString.call(value);return unmasked&&(isOwn?value[symToStringTag]=tag:delete value[symToStringTag]),result};var _objectToString_nativeObjectToString=Object.prototype.toString,_baseGetTag_symToStringTag=Symbol1?Symbol1.toStringTag:void 0;let _baseGetTag=function baseGetTag(value){return null==value?void 0===value?"[object Undefined]":"[object Null]":_baseGetTag_symToStringTag&&_baseGetTag_symToStringTag in Object(value)?_getRawTag(value):_objectToString_nativeObjectToString.call(value)},lodash_es_isSymbol=function isSymbol(value){return"symbol"==typeof value||null!=value&&"object"==typeof value&&"[object Symbol]"==_baseGetTag(value)};var NAN=0/0,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;let lodash_es_toNumber=function toNumber(value){if("number"==typeof value)return value;if(lodash_es_isSymbol(value))return NAN;if(lodash_es_isObject(value)){var string,other="function"==typeof value.valueOf?value.valueOf():value;value=lodash_es_isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=(string=value)?string.slice(0,_trimmedEndIndex(string)+1).replace(reTrimStart,""):string;var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value};var nativeMax=Math.max,nativeMin=Math.min;let lodash_es_debounce=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,timeWaiting=wait-timeSinceLastCall;return maxing?nativeMin(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait}function timerExpired(){var time=lodash_es_now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,remainingWait(time))}function trailingEdge(time){return(timerId=void 0,trailing&&lastArgs)?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0}function flush(){return void 0===timerId?result:trailingEdge(lodash_es_now())}function debounced(){var time=lodash_es_now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return leadingEdge(lastCallTime);if(maxing)return clearTimeout(timerId),timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=lodash_es_toNumber(wait)||0,lodash_es_isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(lodash_es_toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=cancel,debounced.flush=flush,debounced},lodash_es_throttle=function throttle(func,wait,options){var leading=!0,trailing=!0;if("function"!=typeof func)throw TypeError("Expected a function");return lodash_es_isObject(options)&&(leading="leading"in options?!!options.leading:leading,trailing="trailing"in options?!!options.trailing:trailing),lodash_es_debounce(func,wait,{leading:leading,maxWait:wait,trailing:trailing})},getElementOverflowValues=element=>{let computedStyle=getComputedStyle(element,null);return computedStyle.getPropertyValue("overflow")+computedStyle.getPropertyValue("overflow-y")+computedStyle.getPropertyValue("overflow-x")},get_scroll_ancestor=element=>{if(!(element instanceof HTMLElement))return window;let parent=element;for(;parent&&parent instanceof HTMLElement;){if(/(scroll|auto)/.test(getElementOverflowValues(parent)))return parent;parent=parent.parentNode}return window},getScrollX=()=>"undefined"==typeof window?0:window.scrollX,getScrollY=()=>"undefined"==typeof window?0:window.scrollY,trackWindowScroll=BaseComponent=>{let ScrollWrapperComponent=props=>{let{delayTime,delayMethod,...restProps}=props,useIntersectionObserver=props.useIntersectionObserver&&isIntersectionObserverAvailable(),baseComponentRef=(0,react.createRef)(),[scrollPosition,setScrollPosition]=(0,react.useState)({x:getScrollX(),y:getScrollY()}),onScrollChange=()=>{useIntersectionObserver||setScrollPosition({x:getScrollX(),y:getScrollY()})},scrollHandler="debounce"===delayMethod?lodash_es_debounce(onScrollChange,delayTime):lodash_es_throttle(onScrollChange,delayTime),addListeners=scrollElement=>{void 0===scrollElement||useIntersectionObserver||(scrollElement.addEventListener("scroll",scrollHandler,{passive:!0}),window.addEventListener("resize",scrollHandler,{passive:!0}),scrollElement!==window&&window.addEventListener("scroll",scrollHandler,{passive:!0}))},removeListeners=scrollElement=>{void 0===scrollElement||useIntersectionObserver||(scrollElement.removeEventListener("scroll",scrollHandler),window.removeEventListener("resize",scrollHandler),scrollElement!==window&&window.removeEventListener("scroll",scrollHandler))};return(0,react.useEffect)(()=>{let ele=baseComponentRef.current,scrollElement=get_scroll_ancestor(react_dom.findDOMNode(ele));return addListeners(scrollElement),()=>{removeListeners(scrollElement)}},[]),(0,jsx_runtime.jsx)(BaseComponent,{...restProps,forwardRef:baseComponentRef,scrollPosition:useIntersectionObserver?void 0:scrollPosition})};return ScrollWrapperComponent.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},ScrollWrapperComponent};try{trackWindowScroll.displayName="trackWindowScroll",trackWindowScroll.__docgenInfo={description:"",displayName:"trackWindowScroll",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LazyLoadImage/hoc/trackWindowScroll.tsx#trackWindowScroll"]={docgenInfo:trackWindowScroll.__docgenInfo,name:"trackWindowScroll",path:"src/components/LazyLoadImage/hoc/trackWindowScroll.tsx#trackWindowScroll"})}catch(__react_docgen_typescript_loader_error){}let LazyLoadImage_placeholderWithTracking=trackWindowScroll(props=>{let{forwardRef,...restProps}=props;return(0,jsx_runtime.jsx)("span",{ref:forwardRef,children:(0,jsx_runtime.jsx)(PlaceholderWithoutTracking,{...restProps})})});try{placeholderWithTracking.displayName="placeholderWithTracking",placeholderWithTracking.__docgenInfo={description:"",displayName:"placeholderWithTracking",props:{delayTime:{defaultValue:null,description:"滚动监听的节流防抖时间",name:"delayTime",required:!1,type:{name:"number"}},delayMethod:{defaultValue:null,description:"滚动监听采用节流或者防抖",name:"delayMethod",required:!1,type:{name:"enum",value:[{value:'"debounce"'},{value:'"throttle"'}]}},threshold:{defaultValue:null,description:"图片出现在视图中的哪个分界点开始加载,单位px",name:"threshold",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"图片未加载前的placeholder",name:"placeholder",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | null"}},className:{defaultValue:null,description:"图片样式class",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"图片内联样式",name:"style",required:!1,type:{name:"CSSProperties"}},height:{defaultValue:null,description:"图片高度",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:null,description:"图片宽度",name:"width",required:!1,type:{name:"string | number"}},useIntersectionObserver:{defaultValue:null,description:"是否使用IntersectionObserver",name:"useIntersectionObserver",required:!1,type:{name:"boolean"}},scrollPosition:{defaultValue:null,description:"滚动的横竖距离,若不使用IntersectionObserver则要传",name:"scrollPosition",required:!1,type:{name:"{ y: number; x: number; }"}},onVisible:{defaultValue:null,description:"",name:"onVisible",required:!1,type:{name:"(() => void)"}},forwardRef:{defaultValue:null,description:"",name:"forwardRef",required:!1,type:{name:"ForwardedRef<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LazyLoadImage/placeholderWithTracking.tsx#placeholderWithTracking"]={docgenInfo:placeholderWithTracking.__docgenInfo,name:"placeholderWithTracking",path:"src/components/LazyLoadImage/placeholderWithTracking.tsx#placeholderWithTracking"})}catch(__react_docgen_typescript_loader_error){}let LazyLoadComponent=props=>{let{useIntersectionObserver,visibleByDefault,scrollPosition,beforeLoad}=props,[visible,setVisible]=(0,react.useState)(visibleByDefault),isScrollTracked=!!(scrollPosition&&Number.isFinite(scrollPosition.x)&&scrollPosition.x>=0&&Number.isFinite(scrollPosition.y)&&scrollPosition.y>=0),onVisible=()=>{beforeLoad&&beforeLoad(),setVisible(!0)};return((0,react.useEffect)(()=>{visibleByDefault&&beforeLoad&&beforeLoad()},[]),visible)?props.children:isScrollTracked||useIntersectionObserver&&isIntersectionObserverAvailable()?(0,jsx_runtime.jsx)(PlaceholderWithoutTracking,{...props,onVisible:onVisible}):(0,jsx_runtime.jsx)(LazyLoadImage_placeholderWithTracking,{...props,onVisible:onVisible})};LazyLoadComponent.defaultProps={useIntersectionObserver:!0,visibleByDefault:!1};try{lazyLoadComponent.displayName="lazyLoadComponent",lazyLoadComponent.__docgenInfo={description:"",displayName:"lazyLoadComponent",props:{visibleByDefault:{defaultValue:{value:"false"},description:"是否默认直接加载图片，当有重复的已经加载过的可以进行设置",name:"visibleByDefault",required:!1,type:{name:"boolean"}},beforeLoad:{defaultValue:null,description:"图片加载前的回调事件",name:"beforeLoad",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"图片样式class",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"图片内联样式",name:"style",required:!1,type:{name:"CSSProperties"}},forwardRef:{defaultValue:null,description:"",name:"forwardRef",required:!1,type:{name:"ForwardedRef<any>"}},delayTime:{defaultValue:null,description:"滚动监听的节流防抖时间",name:"delayTime",required:!1,type:{name:"number"}},delayMethod:{defaultValue:null,description:"滚动监听采用节流或者防抖",name:"delayMethod",required:!1,type:{name:"enum",value:[{value:'"debounce"'},{value:'"throttle"'}]}},threshold:{defaultValue:null,description:"图片出现在视图中的哪个分界点开始加载,单位px",name:"threshold",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"图片未加载前的placeholder",name:"placeholder",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | null"}},height:{defaultValue:null,description:"图片高度",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:null,description:"图片宽度",name:"width",required:!1,type:{name:"string | number"}},useIntersectionObserver:{defaultValue:{value:"true"},description:"是否使用IntersectionObserver",name:"useIntersectionObserver",required:!1,type:{name:"boolean"}},scrollPosition:{defaultValue:null,description:"滚动的横竖距离,若不使用IntersectionObserver则要传",name:"scrollPosition",required:!1,type:{name:"{ y: number; x: number; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LazyLoadImage/lazyLoadComponent.tsx#lazyLoadComponent"]={docgenInfo:lazyLoadComponent.__docgenInfo,name:"lazyLoadComponent",path:"src/components/LazyLoadImage/lazyLoadComponent.tsx#lazyLoadComponent"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let LazyLoadImage=props=>{let[loaded,setLoaded]=(0,react.useState)(!1),{effect,wrapperClassName,delayTime,wrapperProps,placeholder,placeholderSrc,scrollPosition,threshold,useIntersectionObserver,visibleByDefault,delayMethod,beforeLoad,...imgProps}=props,onImageLoad=()=>loaded?e=>{}:e=>{props.onLoad&&props.onLoad(e),setLoaded(!0)},getImg=()=>(0,jsx_runtime.jsx)("img",{...imgProps,alt:imgProps.alt||"lazy-img",onLoad:onImageLoad()}),getLazyLoadImage=()=>{let{className,width,height,style}=props;return(0,jsx_runtime.jsx)(LazyLoadComponent,{className:className,delayMethod:delayMethod,delayTime:delayTime,height:height,placeholder:placeholder,scrollPosition:scrollPosition,style:style,threshold:threshold,useIntersectionObserver:useIntersectionObserver,visibleByDefault:visibleByDefault,width:width,beforeLoad:beforeLoad,children:getImg()})};return placeholderSrc&&!visibleByDefault||wrapperClassName||wrapperProps?(lazyLoadImage1=>{let{width,height}=props,classes=classnames_default()("lazy-load-image-background",effect,wrapperClassName,loaded?"lazy-load-image-loaded":""),wrapperStyle={...loaded||!placeholderSrc?{}:{backgroundImage:"url(".concat(placeholderSrc,")"),backgroundSize:"100% 100%"},color:"transparent",display:"inline-block",verticalAlign:"middle"};return void 0!==width&&(wrapperStyle.width=width),void 0!==height&&(wrapperStyle.height=height),(0,jsx_runtime.jsx)("span",{className:classes,style:wrapperStyle,...wrapperProps,children:lazyLoadImage1})})(getLazyLoadImage()):getLazyLoadImage()};LazyLoadImage.defaultProps={delayMethod:"throttle",threshold:100,useIntersectionObserver:!0,visibleByDefault:!1};try{LazyLoadImage.displayName="LazyLoadImage",LazyLoadImage.__docgenInfo={description:'图片懒加载组件\n### 基础用法\n~~~js\nimport { LazyLoadImage } from \'@pekings/r-ui-component\'\n\nconst LazyImagesFC = () => {\n return (\n   <div className="img-list">\n     {images.map((image) => (\n       <LazyLoadImage\n         key={image.src}\n         src={image.src}\n         width={400}\n         height={220}\n         effect="blur"\n       />\n     ))}\n   </div>\n )\n}\n~~~\n### 图片较多时基础用法在非IntersectionObserver模式下会卡顿，可采用下面的高阶用法\n~~~js\nimport { LazyLoadImage } from \'@pekings/r-ui-component\'\nconst { trackWindowScroll } = LazyLoadImage\n\nconst LazyImagesFC = ({ scrollPosition }) => {\n return (\n   <div className="img-list">\n     {images.map((image) => (\n       <LazyLoadImage\n         key={image.src}\n         src={image.src}\n         width={400}\n         height={220}\n         effect="blur"\n         scrollPosition={scrollPosition}\n       />\n     ))}\n   </div>\n );\n};\n\nconst ObserverLazyImage = () => {\n const Tracked = trackWindowScroll(LazyImagesFC);\n return <Tracked />;\n};\n~~~',displayName:"LazyLoadImage",props:{delayTime:{defaultValue:null,description:"滚动监听的节流防抖时间",name:"delayTime",required:!1,type:{name:"number"}},delayMethod:{defaultValue:{value:"throttle"},description:"滚动监听采用节流或者防抖",name:"delayMethod",required:!1,type:{name:"enum",value:[{value:'"debounce"'},{value:'"throttle"'}]}},threshold:{defaultValue:{value:"100"},description:"图片出现在视图中的哪个分界点开始加载,单位px",name:"threshold",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"图片未加载前的placeholder",name:"placeholder",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | null"}},useIntersectionObserver:{defaultValue:{value:"true"},description:"是否使用IntersectionObserver",name:"useIntersectionObserver",required:!1,type:{name:"boolean"}},scrollPosition:{defaultValue:null,description:"滚动的横竖距离,若不使用IntersectionObserver则要传",name:"scrollPosition",required:!1,type:{name:"{ y: number; x: number; }"}},visibleByDefault:{defaultValue:{value:"false"},description:"是否默认直接加载图片，当有重复的已经加载过的可以进行设置",name:"visibleByDefault",required:!1,type:{name:"boolean"}},beforeLoad:{defaultValue:null,description:"图片加载前的回调事件",name:"beforeLoad",required:!1,type:{name:"(() => void)"}},effect:{defaultValue:null,description:"图片懒加载过程的css效果",name:"effect",required:!1,type:{name:"enum",value:[{value:'"blur"'},{value:'"black-and-white"'},{value:'"opacity"'}]}},placeholderSrc:{defaultValue:null,description:"图片懒加载默认背景图",name:"placeholderSrc",required:!1,type:{name:"string"}},wrapperClassName:{defaultValue:null,description:"图片父容器的样式class，如果wrapperClassName、wrapperProps、placeholderSrc都不传则不对图片进行包裹",name:"wrapperClassName",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:"图片父容器的额外props",name:"wrapperProps",required:!1,type:{name:"{ [key: string]: any; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LazyLoadImage/lazyLoadImage.tsx#LazyLoadImage"]={docgenInfo:LazyLoadImage.__docgenInfo,name:"LazyLoadImage",path:"src/components/LazyLoadImage/lazyLoadImage.tsx#LazyLoadImage"})}catch(__react_docgen_typescript_loader_error){}try{lazyLoadImage.displayName="lazyLoadImage",lazyLoadImage.__docgenInfo={description:'图片懒加载组件\n### 基础用法\n~~~js\nimport { LazyLoadImage } from \'@pekings/r-ui-component\'\n\nconst LazyImagesFC = () => {\n return (\n   <div className="img-list">\n     {images.map((image) => (\n       <LazyLoadImage\n         key={image.src}\n         src={image.src}\n         width={400}\n         height={220}\n         effect="blur"\n       />\n     ))}\n   </div>\n )\n}\n~~~\n### 图片较多时基础用法在非IntersectionObserver模式下会卡顿，可采用下面的高阶用法\n~~~js\nimport { LazyLoadImage } from \'@pekings/r-ui-component\'\nconst { trackWindowScroll } = LazyLoadImage\n\nconst LazyImagesFC = ({ scrollPosition }) => {\n return (\n   <div className="img-list">\n     {images.map((image) => (\n       <LazyLoadImage\n         key={image.src}\n         src={image.src}\n         width={400}\n         height={220}\n         effect="blur"\n         scrollPosition={scrollPosition}\n       />\n     ))}\n   </div>\n );\n};\n\nconst ObserverLazyImage = () => {\n const Tracked = trackWindowScroll(LazyImagesFC);\n return <Tracked />;\n};\n~~~',displayName:"lazyLoadImage",props:{delayTime:{defaultValue:null,description:"滚动监听的节流防抖时间",name:"delayTime",required:!1,type:{name:"number"}},delayMethod:{defaultValue:{value:"throttle"},description:"滚动监听采用节流或者防抖",name:"delayMethod",required:!1,type:{name:"enum",value:[{value:'"debounce"'},{value:'"throttle"'}]}},threshold:{defaultValue:{value:"100"},description:"图片出现在视图中的哪个分界点开始加载,单位px",name:"threshold",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"图片未加载前的placeholder",name:"placeholder",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | null"}},useIntersectionObserver:{defaultValue:{value:"true"},description:"是否使用IntersectionObserver",name:"useIntersectionObserver",required:!1,type:{name:"boolean"}},scrollPosition:{defaultValue:null,description:"滚动的横竖距离,若不使用IntersectionObserver则要传",name:"scrollPosition",required:!1,type:{name:"{ y: number; x: number; }"}},visibleByDefault:{defaultValue:{value:"false"},description:"是否默认直接加载图片，当有重复的已经加载过的可以进行设置",name:"visibleByDefault",required:!1,type:{name:"boolean"}},beforeLoad:{defaultValue:null,description:"图片加载前的回调事件",name:"beforeLoad",required:!1,type:{name:"(() => void)"}},effect:{defaultValue:null,description:"图片懒加载过程的css效果",name:"effect",required:!1,type:{name:"enum",value:[{value:'"blur"'},{value:'"black-and-white"'},{value:'"opacity"'}]}},placeholderSrc:{defaultValue:null,description:"图片懒加载默认背景图",name:"placeholderSrc",required:!1,type:{name:"string"}},wrapperClassName:{defaultValue:null,description:"图片父容器的样式class，如果wrapperClassName、wrapperProps、placeholderSrc都不传则不对图片进行包裹",name:"wrapperClassName",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:"图片父容器的额外props",name:"wrapperProps",required:!1,type:{name:"{ [key: string]: any; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LazyLoadImage/lazyLoadImage.tsx#lazyLoadImage"]={docgenInfo:lazyLoadImage.__docgenInfo,name:"lazyLoadImage",path:"src/components/LazyLoadImage/lazyLoadImage.tsx#lazyLoadImage"})}catch(__react_docgen_typescript_loader_error){}let LazyLoadImage_lazyLoadImage_stories={title:"LazyLoadImage",component:LazyLoadImage,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"dark"}}},lazyLoadImage_stories_images=[{src:"images/01.jpg"},{src:"images/02.jpg"},{src:"images/03.jpg"},{src:"images/04.jpg"},{src:"images/05.jpg"},{src:"images/06.jpg"},{src:"images/07.jpg"},{src:"images/08.jpg"},{src:"images/09.jpg"},{src:"images/10.jpg"},{src:"images/11.jpg"},{src:"images/12.jpg"},{src:"images/13.jpg"},{src:"images/14.jpg"},{src:"images/15.jpg"},{src:"images/16.jpg"}],LazyImageFC=props=>{let{scrollPosition}=props;return(0,jsx_runtime.jsx)("div",{className:"img-list",children:lazyLoadImage_stories_images.map(image=>(0,jsx_runtime.jsx)(LazyLoadImage,{src:image.src,width:400,height:220,effect:"blur",wrapperProps:{style:{transitionDelay:"1s"}},scrollPosition:scrollPosition,wrapperClassName:"img-wrapper"},image.src))})},NoObserverLazyImage=props=>{let Tracked=trackWindowScroll(LazyImageFC);return(0,jsx_runtime.jsx)(Tracked,{...props})};NoObserverLazyImage.args={useIntersectionObserver:!1};let ObserverLazyImage=props=>{let Tracked=trackWindowScroll(LazyImageFC);return(0,jsx_runtime.jsx)(Tracked,{...props})},HorizontalLazyImageFC=props=>{let{scrollPosition}=props;return(0,jsx_runtime.jsx)("div",{className:"img-list horizontal",children:lazyLoadImage_stories_images.map(image=>(0,jsx_runtime.jsx)(LazyLoadImage,{src:image.src,width:400,height:220,wrapperClassName:"img-wrapper",effect:"blur",wrapperProps:{style:{transitionDelay:"1s"}},scrollPosition:scrollPosition},image.src))})},HorizontalLazyImage=props=>{let Tracked=trackWindowScroll(HorizontalLazyImageFC);return(0,jsx_runtime.jsx)(Tracked,{...props})};NoObserverLazyImage.parameters={...NoObserverLazyImage.parameters,docs:{...NoObserverLazyImage.parameters?.docs,source:{originalSource:"props => {\n  const Tracked = trackWindowScroll(LazyImageFC);\n  return <Tracked {...props} />;\n}",...NoObserverLazyImage.parameters?.docs?.source}}},ObserverLazyImage.parameters={...ObserverLazyImage.parameters,docs:{...ObserverLazyImage.parameters?.docs,source:{originalSource:"props => {\n  const Tracked = trackWindowScroll(LazyImageFC);\n  return <Tracked {...props} />;\n}",...ObserverLazyImage.parameters?.docs?.source}}},HorizontalLazyImage.parameters={...HorizontalLazyImage.parameters,docs:{...HorizontalLazyImage.parameters?.docs,source:{originalSource:"props => {\n  const Tracked = trackWindowScroll(HorizontalLazyImageFC);\n  return <Tracked {...props} />;\n}",...HorizontalLazyImage.parameters?.docs?.source}}};let __namedExportsOrder=["NoObserverLazyImage","ObserverLazyImage","HorizontalLazyImage"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;/*!
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
//# sourceMappingURL=components-LazyLoadImage-lazyLoadImage-stories.5b49b467.iframe.bundle.js.map