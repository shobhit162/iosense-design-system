(self.webpackChunkiosense_design_system=self.webpackChunkiosense_design_system||[]).push([[592,980],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/_7.0Colors.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{colors:()=>colors,convertHexRgba:()=>convertHexRgba,default:()=>MDXContent,hexToRgb:()=>hexToRgb});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_shobhitchaurasia_Desktop_projects_iosense_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const hexToRgb=hex=>{const result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?{r:parseInt(result[1],16),g:parseInt(result[2],16),b:parseInt(result[3],16)}:null},convertHexRgba=value=>{if(value.includes("rgba(#")){const matches=value.match(/rgba\(#([A-Fa-f0-9]{6}),\s*([\d.]+)\)/);if(matches){const hex=matches[1],alpha=matches[2],rgb=hexToRgb(`#${hex}`);return rgb?`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`:value}}return value},colors={base:{red:{50:{name:"--global-red-50",value:"#FFE4DC"},100:{name:"--global-red-100",value:"#FFC8BB"},200:{name:"--global-red-200",value:"#FBAD9A"},300:{name:"--global-red-300",value:"#F5917A"},400:{name:"--global-red-400",value:"#ED745B"},500:{name:"--global-red-500",value:"#E4553D"},600:{name:"--global-red-600",value:"#D92D20"},700:{name:"--global-red-700",value:"#B22A1C"},800:{name:"--global-red-800",value:"#8D2619"},900:{name:"--global-red-900",value:"#692015"},1e3:{name:"--global-red-1000",value:"#471A11"},a50:{name:"--global-red-a50",value:"rgba(#D92D20, 0.09)"},a100:{name:"--global-red-a100",value:"rgba(#D92D20, 0.18)"},a150:{name:"--global-red-a150",value:"rgba(#D92D20, 0.24)"},a200:{name:"--global-red-a200",value:"rgba(#D92D20, 0.32)"}},yellow:{50:{name:"--global-yellow-50",value:"#FFF3DF"},100:{name:"--global-yellow-100",value:"#FFE6C0"},200:{name:"--global-yellow-200",value:"#FFDAA1"},300:{name:"--global-yellow-300",value:"#FFCE82"},400:{name:"--global-yellow-400",value:"#FFC262"},500:{name:"--global-yellow-500",value:"#FFB63F"},600:{name:"--global-yellow-600",value:"#FFAB00"},700:{name:"--global-yellow-700",value:"#D08B0F"},800:{name:"--global-yellow-800",value:"#A36E14"},900:{name:"--global-yellow-900",value:"#785215"},1e3:{name:"--global-yellow-1000",value:"#503713"},a50:{name:"--global-yellow-a50",value:"rgba(#FFAB00, 0.09)"},a100:{name:"--global-yellow-a100",value:"rgba(#FFAB00, 0.18)"},a150:{name:"--global-yellow-a150",value:"rgba(#FFAB00, 0.24)"},a200:{name:"--global-yellow-a200",value:"rgba(#FFAB00, 0.32)"}},aquaGreen:{50:{name:"--global-aqua-green-50",value:"#E7F6F1"},100:{name:"--global-aqua-green-100",value:"#C9EADF"},200:{name:"--global-aqua-green-200",value:"#AEDFD0"},300:{name:"--global-aqua-green-300",value:"#91D4C1"},400:{name:"--global-aqua-green-400",value:"#73C9B1"},500:{name:"--global-aqua-green-500",value:"#50BEA3"},600:{name:"--global-aqua-green-600",value:"#1AB394"},700:{name:"--global-aqua-green-700",value:"#1F937A"},800:{name:"--global-aqua-green-800",value:"#207460"},900:{name:"--global-aqua-green-900",value:"#1D5648"},1e3:{name:"--global-aqua-green-1000",value:"#193A31"},a50:{name:"--global-aqua-green-a50",value:"rgba(#1AB394, 0.09)"},a100:{name:"--global-aqua-green-a100",value:"rgba(#1AB394, 0.18)"},a150:{name:"--global-aqua-green-a150",value:"rgba(#1AB394, 0.24)"},a200:{name:"--global-aqua-green-a200",value:"rgba(#1AB394, 0.32)"}},green:{50:{name:"--global-green-50",value:"#EBFAF3"},100:{name:"--global-green-100",value:"#DAF5E8"},200:{name:"--global-green-200",value:"#B6ECD1"},300:{name:"--global-green-300",value:"#91E38A"},400:{name:"--global-green-400",value:"#48D08C"},500:{name:"--global-green-500",value:"#00BE5F"},600:{name:"--global-green-600",value:"#00A251"},700:{name:"--global-green-700",value:"#008743"},800:{name:"--global-green-800",value:"#006C36"},900:{name:"--global-green-900",value:"#005128"},1e3:{name:"--global-green-1000",value:"#00361B"},a50:{name:"--global-green-a50",value:"rgba(#00A251, 0.09)"},a100:{name:"--global-green-a100",value:"rgba(#00A251, 0.18)"},a150:{name:"--global-green-a150",value:"rgba(#00A251, 0.24)"},a200:{name:"--global-green-a200",value:"rgba(#00A251, 0.32)"}},skyBlue:{50:{name:"--global-sky-blue-50",value:"#E7F6FE"},100:{name:"--global-sky-blue-100",value:"#CFEDFC"},200:{name:"--global-sky-blue-200",value:"#A8DFFA"},300:{name:"--global-sky-blue-300",value:"#79CEF8"},400:{name:"--global-sky-blue-400",value:"#57C1F6"},500:{name:"--global-sky-blue-500",value:"#15B0F3"},600:{name:"--global-sky-blue-600",value:"#1291D0"},700:{name:"--global-sky-blue-700",value:"#0F78AD"},800:{name:"--global-sky-blue-800",value:"#0C608A"},900:{name:"--global-sky-blue-900",value:"#094868"},1e3:{name:"--global-sky-blue-1000",value:"#063145"},a50:{name:"--global-sky-blue-a50",value:"rgba(#1291D0, 0.09)"},a100:{name:"--global-sky-blue-a100",value:"rgba(#1291D0, 0.18)"},a150:{name:"--global-sky-blue-a150",value:"rgba(#1291D0, 0.24)"},a200:{name:"--global-sky-blue-a200",value:"rgba(#1291D0, 0.32)"}},blue:{50:{name:"--global-blue-50",value:"#F5F8FF"},100:{name:"--global-blue-100",value:"#D8E4FD"},200:{name:"--global-blue-200",value:"#B4CDFD"},300:{name:"--global-blue-300",value:"#75A3FF"},400:{name:"--global-blue-400",value:"#4D7FFF"},500:{name:"--global-blue-500",value:"#305EFF"},600:{name:"--global-blue-600",value:"#2950DA"},700:{name:"--global-blue-700",value:"#2243B6"},800:{name:"--global-blue-800",value:"#1B3591"},900:{name:"--global-blue-900",value:"#14286D"},1e3:{name:"--global-blue-1000",value:"#0D1A48"},a50:{name:"--global-blue-a50",value:"rgba(#305EFF, 0.09)"},a100:{name:"--global-blue-a100",value:"rgba(#305EFF, 0.18)"},a150:{name:"--global-blue-a150",value:"rgba(#305EFF, 0.24)"},a200:{name:"--global-blue-a200",value:"rgba(#305EFF, 0.32)"}},pink:{50:{name:"--global-pink-50",value:"#FFE5EE"},100:{name:"--global-pink-100",value:"#FFCADD"},200:{name:"--global-pink-200",value:"#FFAFCC"},300:{name:"--global-pink-300",value:"#FF93BC"},400:{name:"--global-pink-400",value:"#FD74AC"},500:{name:"--global-pink-500",value:"#F9519C"},600:{name:"--global-pink-600",value:"#F3168D"},700:{name:"--global-pink-700",value:"#C71E73"},800:{name:"--global-pink-800",value:"#9C205B"},900:{name:"--global-pink-900",value:"#731E45"},1e3:{name:"--global-pink-1000",value:"#4D192F"},a50:{name:"--global-pink-a50",value:"rgba(#F3168D, 0.09)"},a100:{name:"--global-pink-a100",value:"rgba(#F3168D, 0.18)"},a150:{name:"--global-pink-a150",value:"rgba(#F3168D, 0.24)"},a200:{name:"--global-pink-a200",value:"rgba(#F3168D, 0.32)"}},purple:{50:{name:"--global-purple-50",value:"#F7E2FE"},100:{name:"--global-purple-100",value:"#EDC6FE"},200:{name:"--global-purple-200",value:"#E3A9FC"},300:{name:"--global-purple-300",value:"#D78BFA"},400:{name:"--global-purple-400",value:"#CB6CF8"},500:{name:"--global-purple-500",value:"#BD4AF6"},600:{name:"--global-purple-600",value:"#AD16F3"},700:{name:"--global-purple-700",value:"#8F1BC6"},800:{name:"--global-purple-800",value:"#711C9B"},900:{name:"--global-purple-900",value:"#551B72"},1e3:{name:"--global-purple-1000",value:"#3A174C"},a50:{name:"--global-purple-a50",value:"rgba(#8F1BC6, 0.09)"},a100:{name:"--global-purple-a100",value:"rgba(#8F1BC6, 0.18)"},a150:{name:"--global-purple-a150",value:"rgba(#8F1BC6, 0.24)"},a200:{name:"--global-purple-a200",value:"rgba(#8F1BC6, 0.32)"}},charcoalBlue:{50:{name:"--global-charcoal-blue-50",value:"#E3E5E7"},100:{name:"--global-charcoal-blue-100",value:"#C7CBD0"},200:{name:"--global-charcoal-blue-200",value:"#ACB2B9"},300:{name:"--global-charcoal-blue-300",value:"#919AA3"},400:{name:"--global-charcoal-blue-400",value:"#78828D"},500:{name:"--global-charcoal-blue-500",value:"#5F6B78"},600:{name:"--global-charcoal-blue-600",value:"#465564"},700:{name:"--global-charcoal-blue-700",value:"#2F4050"},800:{name:"--global-charcoal-blue-800",value:"#25313C"},900:{name:"--global-charcoal-blue-900",value:"#1B232A"},1e3:{name:"--global-charcoal-blue-1000",value:"#111519"},a50:{name:"--global-charcoal-blue-a50",value:"rgba(#1F5C7A, 0.09)"},a100:{name:"--global-charcoal-blue-a100",value:"rgba(#1F5C7A, 0.18)"},a150:{name:"--global-charcoal-blue-a150",value:"rgba(#1F5C7A, 0.24)"},a200:{name:"--global-charcoal-blue-a200",value:"rgba(#1F5C7A, 0.32)"}},neutral:{10:{name:"--global-neutral-10",value:"#F4F5F6"},20:{name:"--global-neutral-20",value:"#EEEEEE"},30:{name:"--global-neutral-30",value:"#E2E2E2"},40:{name:"--global-neutral-40",value:"#D3D3D3"},50:{name:"--global-neutral-50",value:"#C6C6C6"},100:{name:"--global-neutral-100",value:"#BCBCBC"},200:{name:"--global-neutral-200",value:"#ABABAB"},300:{name:"--global-neutral-300",value:"#909090"},400:{name:"--global-neutral-400",value:"#777777"},500:{name:"--global-neutral-500",value:"#646465"},600:{name:"--global-neutral-600",value:"#464646"},700:{name:"--global-neutral-700",value:"#2B2B2B"},800:{name:"--global-neutral-800",value:"#252525"},900:{name:"--global-neutral-900",value:"#1B1B1B"},1e3:{name:"--global-neutral-1000",value:"#111111"}},black:{main:{name:"--global-black",value:"#000000"}},white:{main:{name:"--global-white",value:"#FFFFFF"}}}};function _createMdxContent(props){const _components={code:"code",div:"div",h1:"h1",h3:"h3",p:"p",span:"span",...(0,_Users_shobhitchaurasia_Desktop_projects_iosense_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{title:"Tokens/Colors/Base Variables"}),"\n","\n","\n","\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"colors",children:"Colors"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["These color variables should be used for consistent color styling across applications.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:"Note:"})," These global color variables are then used to make variables of theme classes."]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"color-usage-guide",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3",{children:"Quick Usage Guide"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can use these global color variables directly in your CSS as:\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"color: var(--global-red-200);"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"background-color: var(--global-blue-500);"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"border-color: var(--global-green-100);"})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"sb-section",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-colors-demo",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:"Base Colors"}),Object.entries(colors.base).map((([colorName,shades])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.div,{className:"color-section",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{children:colorName.replace(/([A-Z])/g," $1").trim()}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.div,{className:"color-grid",children:Object.entries(shades).map((([shade,{name,value}])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.div,{className:"color-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.div,{className:"color-preview",style:{backgroundColor:convertHexRgba(value)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.div,{className:"color-info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.span,{children:value})]})]},shade)))})]},colorName)))]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:"\n    .sb-container {\n      margin-bottom: 48px;\n    }\n\n    .sb-section-title {\n      margin-bottom: 32px;\n    }\n\n    .sb-colors-demo {\n      width: 100%;\n    }\n\n    h2 {\n      margin: 32px 0 16px;\n      padding-bottom: 8px;\n      border-bottom: 1px solid #E6E6E6;\n    }\n\n    h3 {\n      margin-top: 24px;\n      margin-bottom: 16px;\n    }\n\n    .color-section {\n      margin-bottom: 32px;\n    }\n\n    .color-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n      gap: 16px;\n      margin-bottom: 24px;\n    }\n\n    .color-item {\n      border: 1px solid #E6E6E6;\n      border-radius: 4px;\n      overflow: hidden;\n    }\n\n    .color-preview {\n      height: 100px;\n      border-bottom: 1px solid #E6E6E6;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .color-info {\n      padding: 12px;\n      background: #FFFFFF;\n    }\n\n    .color-info code {\n      display: block;\n      margin-bottom: 4px;\n      font-family: monospace;\n      font-size: 12px;\n      color: #666;\n    }\n\n    .color-info span {\n      font-size: 14px;\n      color: #333;\n    }\n\n    .color-item:hover {\n      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    }\n\n     .color-usage-guide {\n      background-color: #f4f4f4;\n      padding: 15px;\n      border-radius: 4px;\n      margin-top: 15px;\n      margin-bottom: 15px;\n    }\n\n    .color-usage-guide h3 {\n      margin-bottom: 0px;\n      color: #333;\n    }\n\n    .color-usage-guide p {\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n    }\n\n    .color-usage-guide code {\n      background-color: #e5e7eb;\n      padding: 5px;\n      border-radius: 4px;\n      font-family: monospace;\n    }\n  "})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_shobhitchaurasia_Desktop_projects_iosense_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext}}]);