(self.webpackChunkiosense_design_system=self.webpackChunkiosense_design_system||[]).push([[592,980],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/_7.0Colors.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{colors:()=>colors,convertHexRgba:()=>convertHexRgba,default:()=>MDXContent,hexToRgb:()=>hexToRgb});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_shobhitchaurasia_Desktop_projects_iosense_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const hexToRgb=hex=>{const result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?{r:parseInt(result[1],16),g:parseInt(result[2],16),b:parseInt(result[3],16)}:null},convertHexRgba=value=>{if(value.includes("rgba(#")){const matches=value.match(/rgba\(#([A-Fa-f0-9]{6}),\s*([\d.]+)\)/);if(matches){const hex=matches[1],alpha=matches[2],rgb=hexToRgb(`#${hex}`);return rgb?`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`:value}}return value},colors={base:{red:{50:{name:"--global-red-50",value:"#FFE4DC",classes:{text:"global-red-50",background:"global-red-bg-50",border:"global-red-border-50"}},100:{name:"--global-red-100",value:"#FFC8BB",classes:{text:"global-red-100",background:"global-red-bg-100",border:"global-red-border-100"}},200:{name:"--global-red-200",value:"#FBAD9A",classes:{text:"global-red-200",background:"global-red-bg-200",border:"global-red-border-200"}},300:{name:"--global-red-300",value:"#F5917A",classes:{text:"global-red-300",background:"global-red-bg-300",border:"global-red-border-300"}},400:{name:"--global-red-400",value:"#ED745B",classes:{text:"global-red-400",background:"global-red-bg-400",border:"global-red-border-400"}},500:{name:"--global-red-500",value:"#E4553D",classes:{text:"global-red-500",background:"global-red-bg-500",border:"global-red-border-500"}},600:{name:"--global-red-600",value:"#D92D20",classes:{text:"global-red-600",background:"global-red-bg-600",border:"global-red-border-600"}},700:{name:"--global-red-700",value:"#B22A1C",classes:{text:"global-red-700",background:"global-red-bg-700",border:"global-red-border-700"}},800:{name:"--global-red-800",value:"#8D2619",classes:{text:"global-red-800",background:"global-red-bg-800",border:"global-red-border-800"}},900:{name:"--global-red-900",value:"#692015",classes:{text:"global-red-900",background:"global-red-bg-900",border:"global-red-border-900"}},1e3:{name:"--global-red-1000",value:"#471A11",classes:{text:"global-red-1000",background:"global-red-bg-1000",border:"global-red-border-1000"}},a50:{name:"--global-red-a50",value:"rgba(#D92D20, 0.09)",classes:{text:"global-red-a50",background:"global-red-bg-a50",border:"global-red-border-a50"}},a100:{name:"--global-red-a100",value:"rgba(#D92D20, 0.18)",classes:{text:"global-red-a100",background:"global-red-bg-a100",border:"global-red-border-a100"}},a150:{name:"--global-red-a150",value:"rgba(#D92D20, 0.24)",classes:{text:"global-red-a150",background:"global-red-bg-a150",border:"global-red-border-a150"}},a200:{name:"--global-red-a200",value:"rgba(#D92D20, 0.32)",classes:{text:"global-red-a200",background:"global-red-bg-a200",border:"global-red-border-a200"}}},yellow:{50:{name:"--global-yellow-50",value:"#FFF3DF",classes:{text:"global-yellow-50",background:"global-yellow-bg-50",border:"global-yellow-border-50"}},100:{name:"--global-yellow-100",value:"#FFE6C0",classes:{text:"global-yellow-100",background:"global-yellow-bg-100",border:"global-yellow-border-100"}},200:{name:"--global-yellow-200",value:"#FFDAA1",classes:{text:"global-yellow-200",background:"global-yellow-bg-200",border:"global-yellow-border-200"}},300:{name:"--global-yellow-300",value:"#FFCE82",classes:{text:"global-yellow-300",background:"global-yellow-bg-300",border:"global-yellow-border-300"}},400:{name:"--global-yellow-400",value:"#FFC262",classes:{text:"global-yellow-400",background:"global-yellow-bg-400",border:"global-yellow-border-400"}},500:{name:"--global-yellow-500",value:"#FFB63F",classes:{text:"global-yellow-500",background:"global-yellow-bg-500",border:"global-yellow-border-500"}},600:{name:"--global-yellow-600",value:"#FFAB00",classes:{text:"global-yellow-600",background:"global-yellow-bg-600",border:"global-yellow-border-600"}},700:{name:"--global-yellow-700",value:"#D08B0F",classes:{text:"global-yellow-700",background:"global-yellow-bg-700",border:"global-yellow-border-700"}},800:{name:"--global-yellow-800",value:"#A36E14",classes:{text:"global-yellow-800",background:"global-yellow-bg-800",border:"global-yellow-border-800"}},900:{name:"--global-yellow-900",value:"#785215",classes:{text:"global-yellow-900",background:"global-yellow-bg-900",border:"global-yellow-border-900"}},1e3:{name:"--global-yellow-1000",value:"#503713",classes:{text:"global-yellow-1000",background:"global-yellow-bg-1000",border:"global-yellow-border-1000"}},a50:{name:"--global-yellow-a50",value:"rgba(#FFAB00, 0.09)",classes:{text:"global-yellow-a50",background:"global-yellow-bg-a50",border:"global-yellow-border-a50"}},a100:{name:"--global-yellow-a100",value:"rgba(#FFAB00, 0.18)",classes:{text:"global-yellow-a100",background:"global-yellow-bg-a100",border:"global-yellow-border-a100"}},a150:{name:"--global-yellow-a150",value:"rgba(#FFAB00, 0.24)",classes:{text:"global-yellow-a150",background:"global-yellow-bg-a150",border:"global-yellow-border-a150"}},a200:{name:"--global-yellow-a200",value:"rgba(#FFAB00, 0.32)",classes:{text:"global-yellow-a200",background:"global-yellow-bg-a200",border:"global-yellow-border-a200"}}},aquaGreen:{50:{name:"--global-aqua-green-50",value:"#E7F6F1",classes:{text:"global-aqua-green-50",background:"global-aqua-green-bg-50",border:"global-aqua-green-border-50"}},100:{name:"--global-aqua-green-100",value:"#C9EADF",classes:{text:"global-aqua-green-100",background:"global-aqua-green-bg-100",border:"global-aqua-green-border-100"}},200:{name:"--global-aqua-green-200",value:"#AEDFD0",classes:{text:"global-aqua-green-200",background:"global-aqua-green-bg-200",border:"global-aqua-green-border-200"}},300:{name:"--global-aqua-green-300",value:"#91D4C1",classes:{text:"global-aqua-green-300",background:"global-aqua-green-bg-300",border:"global-aqua-green-border-300"}},400:{name:"--global-aqua-green-400",value:"#73C9B1",classes:{text:"global-aqua-green-400",background:"global-aqua-green-bg-400",border:"global-aqua-green-border-400"}},500:{name:"--global-aqua-green-500",value:"#50BEA3",classes:{text:"global-aqua-green-500",background:"global-aqua-green-bg-500",border:"global-aqua-green-border-500"}},600:{name:"--global-aqua-green-600",value:"#1AB394",classes:{text:"global-aqua-green-600",background:"global-aqua-green-bg-600",border:"global-aqua-green-border-600"}},700:{name:"--global-aqua-green-700",value:"#1F937A",classes:{text:"global-aqua-green-700",background:"global-aqua-green-bg-700",border:"global-aqua-green-border-700"}},800:{name:"--global-aqua-green-800",value:"#207460",classes:{text:"global-aqua-green-800",background:"global-aqua-green-bg-800",border:"global-aqua-green-border-800"}},900:{name:"--global-aqua-green-900",value:"#1D5648",classes:{text:"global-aqua-green-900",background:"global-aqua-green-bg-900",border:"global-aqua-green-border-900"}},1e3:{name:"--global-aqua-green-1000",value:"#193A31",classes:{text:"global-aqua-green-1000",background:"global-aqua-green-bg-1000",border:"global-aqua-green-border-1000"}},a50:{name:"--global-aqua-green-a50",value:"rgba(#1AB394, 0.09)",classes:{text:"global-aqua-green-a50",background:"global-aqua-green-bg-a50",border:"global-aqua-green-border-a50"}},a100:{name:"--global-aqua-green-a100",value:"rgba(#1AB394, 0.18)",classes:{text:"global-aqua-green-a100",background:"global-aqua-green-bg-a100",border:"global-aqua-green-border-a100"}},a150:{name:"--global-aqua-green-a150",value:"rgba(#1AB394, 0.24)",classes:{text:"global-aqua-green-a150",background:"global-aqua-green-bg-a150",border:"global-aqua-green-border-a150"}},a200:{name:"--global-aqua-green-a200",value:"rgba(#1AB394, 0.32)",classes:{text:"global-aqua-green-a200",background:"global-aqua-green-bg-a200",border:"global-aqua-green-border-a200"}}},green:{50:{name:"--global-green-50",value:"#EBFAF3",classes:{text:"global-green-50",background:"global-green-bg-50",border:"global-green-border-50"}},100:{name:"--global-green-100",value:"#DAF5E8",classes:{text:"global-green-100",background:"global-green-bg-100",border:"global-green-border-100"}},200:{name:"--global-green-200",value:"#B6ECD1",classes:{text:"global-green-200",background:"global-green-bg-200",border:"global-green-border-200"}},300:{name:"--global-green-300",value:"#91E38A",classes:{text:"global-green-300",background:"global-green-bg-300",border:"global-green-border-300"}},400:{name:"--global-green-400",value:"#48D08C",classes:{text:"global-green-400",background:"global-green-bg-400",border:"global-green-border-400"}},500:{name:"--global-green-500",value:"#00BE5F",classes:{text:"global-green-500",background:"global-green-bg-500",border:"global-green-border-500"}},600:{name:"--global-green-600",value:"#00A251",classes:{text:"global-green-600",background:"global-green-bg-600",border:"global-green-border-600"}},700:{name:"--global-green-700",value:"#008743",classes:{text:"global-green-700",background:"global-green-bg-700",border:"global-green-border-700"}},800:{name:"--global-green-800",value:"#006C36",classes:{text:"global-green-800",background:"global-green-bg-800",border:"global-green-border-800"}},900:{name:"--global-green-900",value:"#005128",classes:{text:"global-green-900",background:"global-green-bg-900",border:"global-green-border-900"}},1e3:{name:"--global-green-1000",value:"#00361B",classes:{text:"global-green-1000",background:"global-green-bg-1000",border:"global-green-border-1000"}},a50:{name:"--global-green-a50",value:"rgba(#00A251, 0.09)",classes:{text:"global-green-a50",background:"global-green-bg-a50",border:"global-green-border-a50"}},a100:{name:"--global-green-a100",value:"rgba(#00A251, 0.18)",classes:{text:"global-green-a100",background:"global-green-bg-a100",border:"global-green-border-a100"}},a150:{name:"--global-green-a150",value:"rgba(#00A251, 0.24)",classes:{text:"global-green-a150",background:"global-green-bg-a150",border:"global-green-border-a150"}},a200:{name:"--global-green-a200",value:"rgba(#00A251, 0.32)",classes:{text:"global-green-a200",background:"global-green-bg-a200",border:"global-green-border-a200"}}},skyBlue:{50:{name:"--global-sky-blue-50",value:"#E7F6FE",classes:{text:"global-sky-blue-50",background:"global-sky-blue-bg-50",border:"global-sky-blue-border-50"}},100:{name:"--global-sky-blue-100",value:"#CFEDFC",classes:{text:"global-sky-blue-100",background:"global-sky-blue-bg-100",border:"global-sky-blue-border-100"}},200:{name:"--global-sky-blue-200",value:"#A8DFFA",classes:{text:"global-sky-blue-200",background:"global-sky-blue-bg-200",border:"global-sky-blue-border-200"}},300:{name:"--global-sky-blue-300",value:"#79CEF8",classes:{text:"global-sky-blue-300",background:"global-sky-blue-bg-300",border:"global-sky-blue-border-300"}},400:{name:"--global-sky-blue-400",value:"#57C1F6",classes:{text:"global-sky-blue-400",background:"global-sky-blue-bg-400",border:"global-sky-blue-border-400"}},500:{name:"--global-sky-blue-500",value:"#15B0F3",classes:{text:"global-sky-blue-500",background:"global-sky-blue-bg-500",border:"global-sky-blue-border-500"}},600:{name:"--global-sky-blue-600",value:"#1291D0",classes:{text:"global-sky-blue-600",background:"global-sky-blue-bg-600",border:"global-sky-blue-border-600"}},700:{name:"--global-sky-blue-700",value:"#0F78AD",classes:{text:"global-sky-blue-700",background:"global-sky-blue-bg-700",border:"global-sky-blue-border-700"}},800:{name:"--global-sky-blue-800",value:"#0C608A",classes:{text:"global-sky-blue-800",background:"global-sky-blue-bg-800",border:"global-sky-blue-border-800"}},900:{name:"--global-sky-blue-900",value:"#094868",classes:{text:"global-sky-blue-900",background:"global-sky-blue-bg-900",border:"global-sky-blue-border-900"}},1e3:{name:"--global-sky-blue-1000",value:"#063145",classes:{text:"global-sky-blue-1000",background:"global-sky-blue-bg-1000",border:"global-sky-blue-border-1000"}},a50:{name:"--global-sky-blue-a50",value:"rgba(#1291D0, 0.09)",classes:{text:"global-sky-blue-a50",background:"global-sky-blue-bg-a50",border:"global-sky-blue-border-a50"}},a100:{name:"--global-sky-blue-a100",value:"rgba(#1291D0, 0.18)",classes:{text:"global-sky-blue-a100",background:"global-sky-blue-bg-a100",border:"global-sky-blue-border-a100"}},a150:{name:"--global-sky-blue-a150",value:"rgba(#1291D0, 0.24)",classes:{text:"global-sky-blue-a150",background:"global-sky-blue-bg-a150",border:"global-sky-blue-border-a150"}},a200:{name:"--global-sky-blue-a200",value:"rgba(#1291D0, 0.32)",classes:{text:"global-sky-blue-a200",background:"global-sky-blue-bg-a200",border:"global-sky-blue-border-a200"}}},blue:{50:{name:"--global-blue-50",value:"#F5F8FF",classes:{text:"global-blue-50",background:"global-blue-bg-50",border:"global-blue-border-50"}},100:{name:"--global-blue-100",value:"#D8E4FD",classes:{text:"global-blue-100",background:"global-blue-bg-100",border:"global-blue-border-100"}},200:{name:"--global-blue-200",value:"#B4CDFD",classes:{text:"global-blue-200",background:"global-blue-bg-200",border:"global-blue-border-200"}},300:{name:"--global-blue-300",value:"#75A3FF",classes:{text:"global-blue-300",background:"global-blue-bg-300",border:"global-blue-border-300"}},400:{name:"--global-blue-400",value:"#4D7FFF",classes:{text:"global-blue-400",background:"global-blue-bg-400",border:"global-blue-border-400"}},500:{name:"--global-blue-500",value:"#305EFF",classes:{text:"global-blue-500",background:"global-blue-bg-500",border:"global-blue-border-500"}},600:{name:"--global-blue-600",value:"#2950DA",classes:{text:"global-blue-600",background:"global-blue-bg-600",border:"global-blue-border-600"}},700:{name:"--global-blue-700",value:"#2243B6",classes:{text:"global-blue-700",background:"global-blue-bg-700",border:"global-blue-border-700"}},800:{name:"--global-blue-800",value:"#1B3591",classes:{text:"global-blue-800",background:"global-blue-bg-800",border:"global-blue-border-800"}},900:{name:"--global-blue-900",value:"#14286D",classes:{text:"global-blue-900",background:"global-blue-bg-900",border:"global-blue-border-900"}},1e3:{name:"--global-blue-1000",value:"#0D1A48",classes:{text:"global-blue-1000",background:"global-blue-bg-1000",border:"global-blue-border-1000"}},a50:{name:"--global-blue-a50",value:"rgba(#305EFF, 0.09)",classes:{text:"global-blue-a50",background:"global-blue-bg-a50",border:"global-blue-border-a50"}},a100:{name:"--global-blue-a100",value:"rgba(#305EFF, 0.18)",classes:{text:"global-blue-a100",background:"global-blue-bg-a100",border:"global-blue-border-a100"}},a150:{name:"--global-blue-a150",value:"rgba(#305EFF, 0.24)",classes:{text:"global-blue-a150",background:"global-blue-bg-a150",border:"global-blue-border-a150"}},a200:{name:"--global-blue-a200",value:"rgba(#305EFF, 0.32)",classes:{text:"global-blue-a200",background:"global-blue-bg-a200",border:"global-blue-border-a200"}}},pink:{50:{name:"--global-pink-50",value:"#FFE5EE",classes:{text:"global-pink-50",background:"global-pink-bg-50",border:"global-pink-border-50"}},100:{name:"--global-pink-100",value:"#FFCADD",classes:{text:"global-pink-100",background:"global-pink-bg-100",border:"global-pink-border-100"}},200:{name:"--global-pink-200",value:"#FFAFCC",classes:{text:"global-pink-200",background:"global-pink-bg-200",border:"global-pink-border-200"}},300:{name:"--global-pink-300",value:"#FF93BC",classes:{text:"global-pink-300",background:"global-pink-bg-300",border:"global-pink-border-300"}},400:{name:"--global-pink-400",value:"#FD74AC",classes:{text:"global-pink-400",background:"global-pink-bg-400",border:"global-pink-border-400"}},500:{name:"--global-pink-500",value:"#F9519C",classes:{text:"global-pink-500",background:"global-pink-bg-500",border:"global-pink-border-500"}},600:{name:"--global-pink-600",value:"#F3168D",classes:{text:"global-pink-600",background:"global-pink-bg-600",border:"global-pink-border-600"}},700:{name:"--global-pink-700",value:"#C71E73",classes:{text:"global-pink-700",background:"global-pink-bg-700",border:"global-pink-border-700"}},800:{name:"--global-pink-800",value:"#9C205B",classes:{text:"global-pink-800",background:"global-pink-bg-800",border:"global-pink-border-800"}},900:{name:"--global-pink-900",value:"#731E45",classes:{text:"global-pink-900",background:"global-pink-bg-900",border:"global-pink-border-900"}},1e3:{name:"--global-pink-1000",value:"#4D192F",classes:{text:"global-pink-1000",background:"global-pink-bg-1000",border:"global-pink-border-1000"}},a50:{name:"--global-pink-a50",value:"rgba(#F3168D, 0.09)",classes:{text:"global-pink-a50",background:"global-pink-bg-a50",border:"global-pink-border-a50"}},a100:{name:"--global-pink-a100",value:"rgba(#F3168D, 0.18)",classes:{text:"global-pink-a100",background:"global-pink-bg-a100",border:"global-pink-border-a100"}},a150:{name:"--global-pink-a150",value:"rgba(#F3168D, 0.24)",classes:{text:"global-pink-a150",background:"global-pink-bg-a150",border:"global-pink-border-a150"}},a200:{name:"--global-pink-a200",value:"rgba(#F3168D, 0.32)",classes:{text:"global-pink-a200",background:"global-pink-bg-a200",border:"global-pink-border-a200"}}},purple:{50:{name:"--global-purple-50",value:"#F7E2FE",classes:{text:"global-purple-50",background:"global-purple-bg-50",border:"global-purple-border-50"}},100:{name:"--global-purple-100",value:"#EDC6FE",classes:{text:"global-purple-100",background:"global-purple-bg-100",border:"global-purple-border-100"}},200:{name:"--global-purple-200",value:"#E3A9FC",classes:{text:"global-purple-200",background:"global-purple-bg-200",border:"global-purple-border-200"}},300:{name:"--global-purple-300",value:"#D78BFA",classes:{text:"global-purple-300",background:"global-purple-bg-300",border:"global-purple-border-300"}},400:{name:"--global-purple-400",value:"#CB6CF8",classes:{text:"global-purple-400",background:"global-purple-bg-400",border:"global-purple-border-400"}},500:{name:"--global-purple-500",value:"#BD4AF6",classes:{text:"global-purple-500",background:"global-purple-bg-500",border:"global-purple-border-500"}},600:{name:"--global-purple-600",value:"#AD16F3",classes:{text:"global-purple-600",background:"global-purple-bg-600",border:"global-purple-border-600"}},700:{name:"--global-purple-700",value:"#8F1BC6",classes:{text:"global-purple-700",background:"global-purple-bg-700",border:"global-purple-border-700"}},800:{name:"--global-purple-800",value:"#711C9B",classes:{text:"global-purple-800",background:"global-purple-bg-800",border:"global-purple-border-800"}},900:{name:"--global-purple-900",value:"#551B72",classes:{text:"global-purple-900",background:"global-purple-bg-900",border:"global-purple-border-900"}},1e3:{name:"--global-purple-1000",value:"#3A174C",classes:{text:"global-purple-1000",background:"global-purple-bg-1000",border:"global-purple-border-1000"}},a50:{name:"--global-purple-a50",value:"rgba(#8F1BC6, 0.09)",classes:{text:"global-purple-a50",background:"global-purple-bg-a50",border:"global-purple-border-a50"}},a100:{name:"--global-purple-a100",value:"rgba(#8F1BC6, 0.18)",classes:{text:"global-purple-a100",background:"global-purple-bg-a100",border:"global-purple-border-a100"}},a150:{name:"--global-purple-a150",value:"rgba(#8F1BC6, 0.24)",classes:{text:"global-purple-a150",background:"global-purple-bg-a150",border:"global-purple-border-a150"}},a200:{name:"--global-purple-a200",value:"rgba(#8F1BC6, 0.32)",classes:{text:"global-purple-a200",background:"global-purple-bg-a200",border:"global-purple-border-a200"}}},charcoalBlue:{50:{name:"--global-charcoal-blue-50",value:"#E3E5E7",classes:{text:"global-charcoal-blue-50",background:"global-charcoal-blue-bg-50",border:"global-charcoal-blue-border-50"}},100:{name:"--global-charcoal-blue-100",value:"#C7CBD0",classes:{text:"global-charcoal-blue-100",background:"global-charcoal-blue-bg-100",border:"global-charcoal-blue-border-100"}},200:{name:"--global-charcoal-blue-200",value:"#ACB2B9",classes:{text:"global-charcoal-blue-200",background:"global-charcoal-blue-bg-200",border:"global-charcoal-blue-border-200"}},300:{name:"--global-charcoal-blue-300",value:"#919AA3",classes:{text:"global-charcoal-blue-300",background:"global-charcoal-blue-bg-300",border:"global-charcoal-blue-border-300"}},400:{name:"--global-charcoal-blue-400",value:"#78828D",classes:{text:"global-charcoal-blue-400",background:"global-charcoal-blue-bg-400",border:"global-charcoal-blue-border-400"}},500:{name:"--global-charcoal-blue-500",value:"#5F6B78",classes:{text:"global-charcoal-blue-500",background:"global-charcoal-blue-bg-500",border:"global-charcoal-blue-border-500"}},600:{name:"--global-charcoal-blue-600",value:"#465564",classes:{text:"global-charcoal-blue-600",background:"global-charcoal-blue-bg-600",border:"global-charcoal-blue-border-600"}},700:{name:"--global-charcoal-blue-700",value:"#2F4050",classes:{text:"global-charcoal-blue-700",background:"global-charcoal-blue-bg-700",border:"global-charcoal-blue-border-700"}},800:{name:"--global-charcoal-blue-800",value:"#25313C",classes:{text:"global-charcoal-blue-800",background:"global-charcoal-blue-bg-800",border:"global-charcoal-blue-border-800"}},900:{name:"--global-charcoal-blue-900",value:"#1B232A",classes:{text:"global-charcoal-blue-900",background:"global-charcoal-blue-bg-900",border:"global-charcoal-blue-border-900"}},1e3:{name:"--global-charcoal-blue-1000",value:"#111519",classes:{text:"global-charcoal-blue-1000",background:"global-charcoal-blue-bg-1000",border:"global-charcoal-blue-border-1000"}},a50:{name:"--global-charcoal-blue-a50",value:"rgba(#1F5C7A, 0.09)",classes:{text:"global-charcoal-blue-a50",background:"global-charcoal-blue-bg-a50",border:"global-charcoal-blue-border-a50"}},a100:{name:"--global-charcoal-blue-a100",value:"rgba(#1F5C7A, 0.18)",classes:{text:"global-charcoal-blue-a100",background:"global-charcoal-blue-bg-a100",border:"global-charcoal-blue-border-a100"}},a150:{name:"--global-charcoal-blue-a150",value:"rgba(#1F5C7A, 0.24)",classes:{text:"global-charcoal-blue-a150",background:"global-charcoal-blue-bg-a150",border:"global-charcoal-blue-border-a150"}},a200:{name:"--global-charcoal-blue-a200",value:"rgba(#1F5C7A, 0.32)",classes:{text:"global-charcoal-blue-a200",background:"global-charcoal-blue-bg-a200",border:"global-charcoal-blue-border-a200"}}},neutral:{10:{name:"--global-neutral-10",value:"#F4F5F6",classes:{text:"global-neutral-10",background:"global-neutral-bg-10",border:"global-neutral-border-10"}},20:{name:"--global-neutral-20",value:"#EEEEEE",classes:{text:"global-neutral-20",background:"global-neutral-bg-20",border:"global-neutral-border-20"}},30:{name:"--global-neutral-30",value:"#E2E2E2",classes:{text:"global-neutral-30",background:"global-neutral-bg-30",border:"global-neutral-border-30"}},40:{name:"--global-neutral-40",value:"#D3D3D3",classes:{text:"global-neutral-40",background:"global-neutral-bg-40",border:"global-neutral-border-40"}},50:{name:"--global-neutral-50",value:"#C6C6C6",classes:{text:"global-neutral-50",background:"global-neutral-bg-50",border:"global-neutral-border-50"}},100:{name:"--global-neutral-100",value:"#BCBCBC",classes:{text:"global-neutral-100",background:"global-neutral-bg-100",border:"global-neutral-border-100"}},200:{name:"--global-neutral-200",value:"#ABABAB",classes:{text:"global-neutral-200",background:"global-neutral-bg-200",border:"global-neutral-border-200"}},300:{name:"--global-neutral-300",value:"#909090",classes:{text:"global-neutral-300",background:"global-neutral-bg-300",border:"global-neutral-border-300"}},400:{name:"--global-neutral-400",value:"#777777",classes:{text:"global-neutral-400",background:"global-neutral-bg-400",border:"global-neutral-border-400"}},500:{name:"--global-neutral-500",value:"#646465",classes:{text:"global-neutral-500",background:"global-neutral-bg-500",border:"global-neutral-border-500"}},600:{name:"--global-neutral-600",value:"#464646",classes:{text:"global-neutral-600",background:"global-neutral-bg-600",border:"global-neutral-border-600"}},700:{name:"--global-neutral-700",value:"#2B2B2B",classes:{text:"global-neutral-700",background:"global-neutral-bg-700",border:"global-neutral-border-700"}},800:{name:"--global-neutral-800",value:"#252525",classes:{text:"global-neutral-800",background:"global-neutral-bg-800",border:"global-neutral-border-800"}},900:{name:"--global-neutral-900",value:"#1B1B1B",classes:{text:"global-neutral-900",background:"global-neutral-bg-900",border:"global-neutral-border-900"}},1e3:{name:"--global-neutral-1000",value:"#111111",classes:{text:"global-neutral-1000",background:"global-neutral-bg-1000",border:"global-neutral-border-1000"}}},black:{main:{name:"--global-black",value:"#000000",classes:{text:"global-black",background:"global-bg-black",border:"global-border-black"}}},white:{main:{name:"--global-white",value:"#FFFFFF",classes:{text:"global-white",background:"global-bg-white",border:"global-border-white"}}}}};function _createMdxContent(props){const _components={code:"code",div:"div",h1:"h1",h3:"h3",h4:"h4",p:"p",span:"span",...(0,_Users_shobhitchaurasia_Desktop_projects_iosense_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{title:"Tokens/Colors/Base Classes"}),"\n","\n","\n","\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"colors",children:"Colors"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["These color variables should be used for consistent color styling across applications.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:"Note:"})," These global color variables are then used to make variables of theme classes."]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"color-usage-guide",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3",{children:"Quick Usage Guide"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{children:"Option 1 (Recommended): Using CSS Classes"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Apply color classes directly to HTML elements:\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:'<div class="global-red-500 global-red-bg-50 global-red-border-100">Example</div>'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:'<p class="global-blue-700">Blue Text</p>'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:'<button class="global-green-bg-100 global-green-border-500">Green Button</button>'})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{children:"Option 2: Using CSS Variables"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can use these global color variables directly in your CSS as:\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"color: var(--global-red-200);"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"background-color: var(--global-blue-500);"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"border-color: var(--global-green-100);"})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"sb-section",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-colors-demo",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:"Base Colors"}),Object.entries(colors.base).map((([colorName,shades])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.div,{className:"color-section",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{children:colorName.replace(/([A-Z])/g," $1").trim()}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.div,{className:"color-grid",children:Object.entries(shades).map((([shade,{name,value,classes}])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.div,{className:"color-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.div,{className:"color-preview",style:{backgroundColor:convertHexRgba(value)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.div,{className:"color-info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.div,{className:"color-classes",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{children:"Classes"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.code,{children:["Text: ",classes.text]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.code,{children:["Background: ",classes.background]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.code,{children:["Border: ",classes.border]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.div,{className:"color-variables",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{children:"Variable"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:name})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.span,{children:value})]})]},shade)))})]},colorName)))]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:"\n    .sb-container {\n      margin-bottom: 48px;\n    }\n\n    .sb-section-title {\n      margin-bottom: 32px;\n    }\n\n    .sb-colors-demo {\n      width: 100%;\n    }\n\n    h2 {\n      margin: 32px 0 16px;\n      padding-bottom: 8px;\n      border-bottom: 1px solid #E6E6E6;\n    }\n\n    h3 {\n      margin-top: 24px;\n      margin-bottom: 16px;\n    }\n\n    .color-section {\n      margin-bottom: 32px;\n    }\n\n    .color-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n      gap: 16px;\n      margin-bottom: 24px;\n    }\n\n    .color-item {\n      border: 1px solid #E6E6E6;\n      border-radius: 4px;\n      overflow: hidden;\n    }\n\n    .color-preview {\n      height: 100px;\n      border-bottom: 1px solid #E6E6E6;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .color-info {\n      padding: 12px;\n      background: #FFFFFF;\n    }\n\n    .color-info code {\n      margin-bottom: 4px;\n      font-family: monospace;\n      font-size: 12px;\n      color: #666;\n    }\n\n    .color-info span {\n      font-size: 14px;\n      color: #333;\n    }\n\n    .color-item:hover {\n      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    }\n\n     .color-usage-guide {\n      background-color: #f4f4f4;\n      padding: 15px;\n      border-radius: 4px;\n      margin-top: 15px;\n      margin-bottom: 15px;\n    }\n\n    .color-usage-guide h3 {\n      margin-bottom: 0px;\n      color: #333;\n    }\n\n    .color-usage-guide h4 {\n      margin-top: 16px !important;\n    }\n\n    .color-usage-guide p {\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n      margin-top: 0px;\n    }\n\n    .color-variables h4 {\n      margin-top: 10px !important;\n    }\n\n    .color-usage-guide code {\n      background-color: #e5e7eb;\n      padding: 5px;\n      border-radius: 4px;\n      font-family: monospace;\n    }\n\n    .color-classes {\n      overflow-y: scroll;\n    }\n  "})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_shobhitchaurasia_Desktop_projects_iosense_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext}}]);