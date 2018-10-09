(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{71:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"ssr-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssr-cache","aria-hidden":"true"}},[t._v("#")]),t._v(" SSR Cache")]),s("p",[t._v("Vue Storefront generates the Server Side rendered pages to improve the SEO results. In the latest version of Vue Storefront we've added the Output cache option (disabled by default) to improve the performance.")]),s("p",[t._v("The output cache is set by the following "),s("code",[t._v("config/local.json")]),t._v(" variables:")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("    "),s("span",{attrs:{class:"token property"}},[t._v('"server"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"host"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"localhost"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"port"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3000")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"api"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"api"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"useOutputCacheTagging"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"useOutputCache"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"outputCacheDefaultTtl"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("86400")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"redis"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"host"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"localhost"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"port"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("6379")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"db"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),s("h2",{attrs:{id:"dynamic-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-tags","aria-hidden":"true"}},[t._v("#")]),t._v(" Dynamic tags")]),s("p",[t._v("The dynamic tags config uption: "),s("code",[t._v("useOutputCacheTaging")]),t._v(" - if set to true, Vue Storefront is generating the special HTTP Header "),s("code",[t._v("X-VS-Cache-Tags")])]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("res"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setHeader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'X-VS-Cache-Tags'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cacheTags"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("Cache tags are assigned regarding the products and categories which are used on the specific page. Typical "),s("code",[t._v("X-VS-Cache-Tags")]),t._v(" tag looks like this:")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("X-VS-Cache-Tags: P1852 P198 C20\n")])]),s("p",[t._v("The tags can be used to invalidate the Varnish cache if You're using it. "),s("a",{attrs:{href:"https://www.drupal.org/docs/8/api/cache-api/cache-tags-varnish",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more on that")]),t._v(".")]),s("h2",{attrs:{id:"redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[t._v("#")]),t._v(" Redis")]),s("p",[t._v("If both "),s("code",[t._v("useOutputCache")]),t._v(" and "),s("code",[t._v("useOutputCacheTagging")]),t._v(" options are set to "),s("code",[t._v("true")]),t._v(" - Vue Storefront is using Output Cache stored in Redis (configured in the "),s("code",[t._v("redis")]),t._v(" section of the config file). Cache is tagged with Dynamic tags and can be invalidated using special webhook:")]),s("p",[t._v("Example call to clear all pages containing specific product and category:\n"),s("code",[t._v("curl http://localhost:3000/invalidate?tag=P1852,C20")])]),s("p",[t._v("Example call to clear all product, category and home pages:\n"),s("code",[t._v("curl http://localhost:3000/invalidate?tag=product,category,home")])]),s("p",[s("strong",[t._v("WARNING:")]),t._v("\nWe strongly recommend You to NOT USE Output cache in the development mode. By using it You won't be able to refresh the UI changes after modyfing the Vue components etc.")]),s("h2",{attrs:{id:"cli-cache-clear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-cache-clear","aria-hidden":"true"}},[t._v("#")]),t._v(" CLI cache clear")]),s("p",[t._v("You can manualy clear Redis cache for specific tags by running the following command:")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run cache "),s("span",{attrs:{class:"token function"}},[t._v("clear")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run cache "),s("span",{attrs:{class:"token function"}},[t._v("clear")]),t._v(" -- --tag"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("product,category\n"),s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run cache "),s("span",{attrs:{class:"token function"}},[t._v("clear")]),t._v(" -- --tag"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("P198\n"),s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run cache "),s("span",{attrs:{class:"token function"}},[t._v("clear")]),t._v(" -- --tag"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("*\n")])]),s("p",[t._v("Available tag keys are set in the "),s("code",[t._v("config.server.availableCacheTags")]),t._v(" (by default: "),s("code",[t._v('"product", "category", "home", "checkout", "page-not-found", "compare", "my-account", "P", "C"')]),t._v(")")]),s("p",[s("strong",[t._v("Dynamic cache invalidation:")]),t._v(" Recent version of "),s("a",{attrs:{href:"https://github.com/DivanteLtd/mage2vuestorefront",target:"_blank",rel:"noopener noreferrer"}},[t._v("mage2vuestorefront")]),t._v(" do support output cache invalidation. Output cache is being tagged with the product and categories id (products and categories used on specific page). Mage2vuestorefront can invalidate cache of product and category pages if You set the following ENV variables:")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("export")]),t._v(" VS_INVALIDATE_CACHE_URL"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("http://localhost:3000/invalidate?key"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("SECRETKEY"),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("tag"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("export")]),t._v(" VS_INVALIDATE_CACHE"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("1\n")])]),s("p",[s("strong",[t._v("SECURITY NOTE:")]),t._v(" Please note that "),s("code",[t._v("key=SECRETKEY")]),t._v(" should be equal to "),s("code",[t._v("vue-storefront/config/local.json")]),t._v(" value of "),s("code",[t._v("server.invalidateCacheKey")])]),s("h2",{attrs:{id:"adding-new-types-cache-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-types-cache-tags","aria-hidden":"true"}},[t._v("#")]),t._v(" Adding new types / cache tags")]),s("p",[t._v("If You're adding new type of page ("),s("code",[t._v("core/pages")]),t._v(") and "),s("code",[t._v("config.server.useOutputCache=true")]),t._v(" - You should also extend the "),s("code",[t._v("config.server.availableCacheTags")]),t._v(" of new general purpose tag that will be connected with the URLs connected with this new page.")]),s("p",[t._v("After doing so, please add the "),s("code",[t._v("asyncData")]),t._v(" method to Your page code assigning the right tag (please take a look at "),s("code",[t._v("core/pages/Home.js")]),t._v(" for instance):")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{attrs:{class:"token function"}},[t._v("asyncData")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" route "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// this is for SSR purposes to prefetch data")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      store"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outputCacheTags"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`home`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'Entering asyncData for Home root '")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      EventBus"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("$emitFilter")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'home-after-load'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" store"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" route"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" route "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("then")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("results"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("error")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("reject")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),s("p",[t._v("This line:")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("store"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outputCacheTags"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`home`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("... is in charge of assigning the specific tag with current HTTP request output.")])])}],!1,null,null,null);a.default=e.exports}}]);