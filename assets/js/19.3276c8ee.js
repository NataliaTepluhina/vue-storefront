(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{62:function(e,t,r){"use strict";r.r(t);var s=r(0),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"typescript-action-plan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#typescript-action-plan","aria-hidden":"true"}},[e._v("#")]),e._v(" TypeScript Action Plan")]),r("p",[e._v("We've started adding the TypeScript support to Vue Storefront - mostly because of the following reasons:")]),r("ul",[r("li",[e._v("developer convenience (intellisense support in the IDEs)")]),r("li",[e._v("types safety and code-testability")]),r("li",[e._v("making Vue Storefront code base easier to understand for newcomers.")])]),r("h2",{attrs:{id:"desired-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#desired-state","aria-hidden":"true"}},[e._v("#")]),e._v(" Desired state")]),r("p",[r("strong",[e._v("Type Script is for internal implementation only. Does NOT affect ES users, but should improve TS integration for TS users.")])]),r("p",[e._v("Desired state is that Vue Storefront Core outputs JS libraries, it's written using some TypeScript features, but all the user code (themes, extensions) is still JavaScript. No TypeScript experience is required to build Vue Storefront stores. "),r("strong",[e._v("This is just for core developers and transparent to the end users.")])]),r("p",[e._v("Therefore we're refactoring just:")]),r("ul",[r("li",[e._v("core/api")]),r("li",[e._v("core/store")]),r("li",[e._v("core/lib")])]),r("p",[e._v("where it makes sense. The key TypeScript feature we feel is usable are data types.")]),r("p",[e._v("We're in the middle of "),r("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/issues/1213",target:"_blank",rel:"noopener noreferrer"}},[e._v("refactoring "),r("code",[e._v("core/components")]),e._v(" to "),r("code",[e._v("core/api")]),e._v(" modules")]),e._v(". All the modules should be created using TypeScript")]),r("h3",{attrs:{id:"the-action-plan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-action-plan","aria-hidden":"true"}},[e._v("#")]),e._v(" The Action Plan:")]),r("ol",[r("li",[e._v("Introduce types - move _.js modules to _.ts modules incrementally without breaking changes.")]),r("li",[e._v("Use types when it's appropriate in your newly written modules and new features.")]),r("li",[e._v("One Vuex module, or just few components refactored within one release (once a month) is fine.")]),r("li",[e._v("All "),r("code",[e._v("core/api")]),e._v(" modules should be created using TypeScript.")]),r("li",[e._v("All new modules and Vuex stores should be created using TypeScript.")]),r("li",[r("strong",[e._v("For now please don't refactor existing UI layer (components, pages) to use TypeScript. We should focus at Vuex, core libraries and APIs at first to not introduce a chaos into theme development.")])]),r("li",[e._v("We should put the types/interfaces inside "),r("code",[e._v("core/store/types")]),e._v(" for all Entity/Data related models or in "),r("code",[e._v("core/types")]),e._v(" for some shared ones; for example: "),r("code",[e._v("Product.ts")]),e._v(" should be placed in "),r("code",[e._v("core/store/types/product/Product.ts")])]),r("li",[e._v("We should use minimal possible set of interfaces. Try to introduce 1-2 interfaces per entity (e.g. Product shouldn't be represented by more than 2 interfaces)")])])])}],!1,null,null,null);t.default=o.exports}}]);