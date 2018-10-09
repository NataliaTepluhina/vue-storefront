(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{58:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modules","aria-hidden":"true"}},[e._v("#")]),e._v(" Modules")]),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("Important")]),o("p",[e._v("Modules are under heavy development. Only a few parts of Vue Storefront are rewritten to modular architecture but we are aiming to rewrite everything soon along with adding TypeScript support and Unit tests to each of them. Some concepts may change over time before we introduce the final version of VS Modules.")])]),o("h2",{attrs:{id:"what-are-vs-modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-are-vs-modules","aria-hidden":"true"}},[e._v("#")]),e._v(" What are VS modules?")]),o("p",[e._v("You can think about each module as a one independent feature available in Vue Storefront with all its logic and dependencies inside. This 'one feature' however is a common denominator that links all the features inside. For example common denominator for adding product to the cart, receiving list of items that are in a cart or applying a cart coupon is obviously a "),o("code",[e._v("cart")]),e._v(" and "),o("code",[e._v("cart")]),e._v(" is not a feature of anything bigger than itself so it should be a module. Wishlist or Newsletter are also a good examples of modules as we intuitively think about them as a standalone features. If you still have troubles with understanding what exactly they are at this point, don't worry - you can find a better explanation below.")]),o("h2",{attrs:{id:"motivation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motivation","aria-hidden":"true"}},[e._v("#")]),e._v(" Motivation")]),o("p",[e._v("I believe that some neat metaphore can clearly describe the problem as well as a solution.")]),o("p",[e._v("To better illustrate the whole concept I'll try to explain it with lego bricks.")]),o("p",[e._v("Let's say we have a box with 90 lego bricks that we can use to build some fancy things like Towers, Castles, or Helicopters. Unfortunately due to some stupid EU regulations we can only have 3 different colors of bricks in our box. As we all know not every color is accurate for every structure that can be built so we need to swap one color with a different one from the shop from time to time to have bricks in colors that are best-suited for our next lego project.")]),o("p",[e._v("Cool, but there is one problem - since we have all our bricks in one box they look more or less like this:")]),o("img",{staticStyle:{width:"150px"},attrs:{src:"http://www.robomiku.ee/wp-content/uploads/2016/10/9027.png"}}),o("p",[e._v("When we want to replace the green bricks with, let's say, the black ones we need to look for each green brick separately among all the others which can take a lot of time... and there is still a chance that we will miss some of them! Not to mention that finding the particular green brick that we need to finish the palm tree we are building ("),o("a",{attrs:{href:"https://www.thedailybrick.co.uk/media/catalog/product/cache/1/image/700x700/9df78eab33525d08d6e5fb8d27136e95/l/e/lego_small_palm_leaf_8_x_3__6148__lego-green-small-palm-leaf-8-x-3-6148-30-257873-61.jpg",target:"_blank",rel:"noopener noreferrer"}},[e._v("this one!")]),e._v(") will require looking for it among all the other bricks which can make this task extremely difficult and time-consuming.")]),o("p",[e._v("This is obviously not a situation that we want to end up in with our small lego empire. Neither we want it with Vue Storefront since it's meant to be easily extendable so you can replace your green bricks (or current user cart feature) with the black ones (different cart feature with multiple carts) without looking for each of them among all the bricks and without worrying that you will miss some of them and EU will confiscate all the bricks you have! We also want to make it easier to find the exact brick we want right now to finish this damn palm tree!")]),o("p",[e._v("So how we make this horrible situation better?")]),o("p",[e._v("Introducing... (drums in the background) "),o("strong",[o("em",[e._v("bricks grouped by colors")])]),e._v("! (wows in the background)")]),o("img",{staticStyle:{width:"150px"},attrs:{src:"https://sh-s7-live-s.legocdn.com/is/image/LEGO/6177?$PDPDefault$"}}),o("p",[e._v("When we have our bricks grouped by their colors (and in a separate boxes - modules) it's much easier to find this green brick that we needed for a palm tree since we only need to search in a small subset of all bricks. Moreover when we want to replace green bricks with the black ones then instead of looking for all the green representatives one by one we are just replacing their box with the one containing black bricks. We also don't need to worry that something was left since we know that all the green bricks were in the box.")]),o("p",[e._v("This is the kind of modularity and extendibility we want in Vue Storefront. If you think about each small feature (or user story) like signing in or adding product to a cart as a brick then we can group them by their common denominator which in case of bricks is a color but in case of user stories it can be some particular subset of data/features that we are interacting with (like a Cart, Acoount etc).")]),o("h2",{attrs:{id:"what-is-the-purpose-of-vs-modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-purpose-of-vs-modules","aria-hidden":"true"}},[e._v("#")]),e._v(" What is the purpose of VS modules?")]),o("p",[e._v("The purpose is well described in "),o("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/issues/1213",target:"_blank",rel:"noopener noreferrer"}},[e._v("this discussion")]),e._v(". It can be summarized to:")]),o("ul",[o("li",[o("strong",[e._v("Better extensibility")]),e._v(": We can extend each module or replace it completely with the new one. For example we may want to replace our Cart module with the one that allows to have multiple carts. With modules we can just detach current Cart module and replace it with our new one. Another example can be using different modules for different content CMS integration etc.")]),o("li",[o("strong",[e._v("Better developer experience")]),e._v(": Along with the modules we are introducing many features focused on delivering better, easier to jump in and more predictable developer experience. We changed the way you can compose components with features, added unit tests, TypeScript interfaces etc.")]),o("li",[o("strong",[e._v("Better upgradability")]),e._v(": Each module is a separate NPM package therefore can be upgraded independently and since it has all the logic encapsulated it shouldn't break any other parts of the application when detached, modified or replaced.")])]),o("h2",{attrs:{id:"how-module-should-look-like"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-module-should-look-like","aria-hidden":"true"}},[e._v("#")]),e._v(" How module should look like")]),o("p",[e._v("Module by its definition should encapsulate all logic required for the feature it represents. You can think about each module as a micro application that exposes it's parts to the outside world (Vue Storefront).")]),o("p",[e._v("Normally module can (but not must) contain following folders:")]),o("ul",[o("li",[o("code",[e._v("features")]),e._v(" - Atomic, almost indivisible features related to this module that can be used to build your components. Each of this features can be treated as one user story. Examples of such features are: Adding product to the cart, signing in, signing out, removing product from the wishlist, getting products that are in a cart etc. We can use this features in components by importing the ones that we need from the module "),o("code",[e._v("import { addToCart, removeFromCart } from 'module/cart/features")])]),o("li",[o("code",[e._v("components")]),e._v(" - components related to this module (eg. Microcart for Cart module)")]),o("li",[o("code",[e._v("store")]),e._v(" - Vuex store associated to module")]),o("li",[o("code",[e._v("helpers")]),e._v(" - everything else that is meant to support modules behavior")]),o("li",[o("code",[e._v("types")]),e._v(" - TypeScript types associated with a module")]),o("li",[o("code",[e._v("test")]),e._v(" - folder with unit tests which is "),o("em",[e._v("required")]),e._v(" for every new or rewritten module. This folder can be placed outside of the module in 'tests' folder.")]),o("li",[o("code",[e._v("extends")]),e._v(" - code that you need to include into core files such as client/server entry, app entry, webpack config or service worker. If you need to extend, let's say "),o("code",[e._v("client-entry.js")]),e._v(", just create a file with the same name and import it in the core "),o("code",[e._v("client-entry.js")]),e._v(" by invoking files content with "),o("code",[e._v("import core/module/module-name/extends/client-entry.js")]),e._v(".")])]),o("h2",{attrs:{id:"contributions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[e._v("#")]),e._v(" Contributions")]),o("p",[e._v("Please introduce every new feature as a standalone, encapsulated module. We also need your help in rewriting Vue Storefront to modular approach - "),o("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/issues?q=is%3Aissue+is%3Aopen+label%3A%22API+Module%22",target:"_blank",rel:"noopener noreferrer"}},[e._v("here")]),e._v(" you can find tasks related to this architectural change and "),o("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/master/doc/api-modules/refactoring-to-modules.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here")]),e._v(" is the tutorial how to approach applying this changes.")])])}],!1,null,null,null);t.default=r.exports}}]);