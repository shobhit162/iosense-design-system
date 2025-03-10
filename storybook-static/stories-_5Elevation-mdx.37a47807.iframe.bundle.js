(self.webpackChunkiosense_design_system=self.webpackChunkiosense_design_system||[]).push([[46,980],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/_5Elevation.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent,elevation:()=>elevation});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_shobhitchaurasia_Desktop_projects_iosense_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const elevation={shadows:{ultraLowRaised:{name:"global-el-ultraLowRaised",layers:[{x:0,y:2,blur:1,spread:-1},{x:0,y:1,blur:1,spread:0},{x:0,y:1,blur:3,spread:0}]},lowRaised:{name:"global-el-lowRaised",layers:[{x:0,y:3,blur:3,spread:-2},{x:0,y:3,blur:4,spread:0},{x:0,y:1,blur:8,spread:0}]},midRaised:{name:"global-el-midRaised",layers:[{x:0,y:3,blur:5,spread:-1},{x:0,y:6,blur:10,spread:0},{x:0,y:1,blur:18,spread:0}]},highRaised:{name:"global-el-highRaised",layers:[{x:0,y:5,blur:5,spread:-3},{x:0,y:8,blur:10,spread:1},{x:0,y:3,blur:14,spread:2}]},ultraHighRaised:{name:"global-el-ultraHighRaised",layers:[{x:0,y:7,blur:8,spread:-4},{x:0,y:12,blur:17,spread:2},{x:0,y:5,blur:22,spread:4}]}}};function _createMdxContent(props){const _components={code:"code",div:"div",h1:"h1",p:"p",pre:"pre",small:"small",...(0,_Users_shobhitchaurasia_Desktop_projects_iosense_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{title:"Tokens/Elevation"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"elevation",children:"Elevation"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"These tokens provide consistent elevation and depth through box shadows across the application."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"sb-section",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-elevation-demo",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:"Elevation Levels"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"sb-demo-section",children:Object.entries(elevation.shadows).map((([key,{name,layers}])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.div,{className:"sb-demo-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.div,{className:"sb-demo-info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.div,{className:"sb-shadow-layers",children:layers.map(((layer,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.div,{className:"sb-shadow-layer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.small,{children:["Layer ",index+1,": ",layer.x,"px ",layer.y,"px ",layer.blur,"px ",layer.spread,"px"]})},index)))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.div,{className:"sb-demo-box",style:{boxShadow:layers.map((layer=>`${layer.x}px ${layer.y}px ${layer.blur}px ${layer.spread}px rgba(0,0,0,0.1)`)).join(", ")},children:key})]},key)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:"Custom Color Shadows"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-demo-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-demo-info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"@mixin elevation($level, $color)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("small",{children:"Customize shadow color using the elevation mixin"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"sb-color-examples",children:["#0066FF","#FF0066","#66FF00"].map((color=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.div,{className:"sb-demo-box",style:{boxShadow:elevation.shadows.midRaised.layers.map((layer=>`${layer.x}px ${layer.y}px ${layer.blur}px ${layer.spread}px ${color}33`)).join(", ")},children:["Color: ",color]},color)))})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:"Usage Examples"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-code-block",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'\x3c!-- Basic elevation --\x3e\n<div class="global-el-ultraLowRaised">\n  Ultra Low Raised Element\n</div>\n\n\x3c!-- Higher elevation --\x3e\n<div class="global-el-highRaised">\n  High Raised Element\n</div>\n\n'})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-scss",children:"// Custom color using mixin\n.custom-shadow {\n  @include elevation('midRaised', rgba(0, 102, 255, 0.2));\n}\n"})})]})]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:"\n    .sb-container {\n      margin-bottom: 48px;\n    }\n\n    .sb-section-title {\n      margin-bottom: 32px;\n    }\n\n    .sb-elevation-demo {\n      width: 100%;\n    }\n\n    .sb-demo-section {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n      gap: 32px;\n      margin-bottom: 48px;\n    }\n\n    .sb-demo-item {\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n    }\n\n    .sb-demo-info {\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n    }\n\n    .sb-demo-info code {\n      font-family: monospace;\n      font-size: 14px;\n      padding: 4px 8px;\n      background: #F5F5F5;\n      border-radius: 4px;\n    }\n\n    .sb-shadow-layers {\n      display: flex;\n      flex-direction: column;\n      gap: 4px;\n    }\n\n    .sb-shadow-layer small {\n      font-size: 12px;\n      color: #666;\n    }\n\n    .sb-demo-box {\n      width: 100%;\n      height: 120px;\n      background: white;\n      border-radius: 8px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 14px;\n      color: #666;\n    }\n\n    .sb-layer-demo {\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n      margin-bottom: 25px;\n    }\n\n    .sb-layer-examples {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n      gap: 16px;\n    }\n\n    .sb-layer-item {\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n    }\n\n    .sb-color-examples {\n      display: grid;\n      gap: 16px;\n      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    }\n\n    .sb-code-block {\n      background: #F5F5F5;\n      padding: 16px;\n      border-radius: 4px;\n      margin-top: 16px;\n      overflow: auto;\n    }\n\n    h2 {\n      margin: 32px 0 16px;\n      padding-bottom: 8px;\n      border-bottom: 1px solid #E6E6E6;\n    }\n\n    h3 {\n      margin: 16px 0;\n      font-size: 16px;\n    }\n  "})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_shobhitchaurasia_Desktop_projects_iosense_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext}}]);