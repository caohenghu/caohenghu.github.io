(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{311:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("在使用 "),s("code",[t._v("git")]),t._v(" 提交 "),s("code",[t._v("commit")]),t._v(" 时，最好有一个规范，这样可以很方便地生成 "),s("code",[t._v("changelog")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"commit-msg-规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commit-msg-规范"}},[t._v("#")]),t._v(" commit msg 规范")]),t._v(" "),s("ol",[s("li",[t._v("安装依赖包")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强制commit msg需符合规范才能提交")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" @commitlint/config-conventional @commitlint/cli husky\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用来生成CHANGELOG.md")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" conventional-changelog-cli\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("在"),s("code",[t._v("package.json")]),t._v("里添加配置")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"changelog"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"conventional-changelog -p angular -i CHANGELOG.md -s -r 0"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit-msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commitlint -E HUSKY_GIT_PARAMS"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commitlint"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@commitlint/config-conventional"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("生成"),s("code",[t._v("CHANGELOG.md")])])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行script里的代码")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" changelog\n")])])]),s("h2",{attrs:{id:"便捷输入-commit-msg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#便捷输入-commit-msg"}},[t._v("#")]),t._v(" 便捷输入 commit msg")]),t._v(" "),s("blockquote",[s("p",[t._v("如果对规范比较了解，可以不使用这个工具")])]),t._v(" "),s("ol",[s("li",[t._v("安装依赖包")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在全局安装后可以使用 git cz 来代替 git commit，如果装在本地则需要使用 yarn git-cz")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" commitizen\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装后就有友好提示了")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" cz-conventional-changelog\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("在"),s("code",[t._v("package.json")]),t._v("里添加配置")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commitizen"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cz-conventional-changelog"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("所有的"),s("code",[t._v("commit msg")]),t._v("类型，使用的是"),s("code",[t._v("angular")]),t._v("规范")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("feat:")]),t._v(" A new feature")]),t._v(" "),s("li",[s("strong",[t._v("fix:")]),t._v(" A bug fix")]),t._v(" "),s("li",[s("strong",[t._v("docs:")]),t._v(" Documentation only changes")]),t._v(" "),s("li",[s("strong",[t._v("style:")]),t._v(" Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)")]),t._v(" "),s("li",[s("strong",[t._v("refactor:")]),t._v(" A code change that neither fixes a bug nor adds a feature")]),t._v(" "),s("li",[s("strong",[t._v("perf:")]),t._v(" A code change that improves performance")]),t._v(" "),s("li",[s("strong",[t._v("test:")]),t._v(" Adding missing tests or correcting existing tests")]),t._v(" "),s("li",[s("strong",[t._v("build:")]),t._v(" Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)")]),t._v(" "),s("li",[s("strong",[t._v("ci:")]),t._v(" Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)")]),t._v(" "),s("li",[s("strong",[t._v("chore:")]),t._v(" Other changes that don't modify src or test files")]),t._v(" "),s("li",[s("strong",[t._v("revert:")]),t._v(" Reverts a previous commit")])])])}),[],!1,null,null,null);s.default=e.exports}}]);