(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{314:function(v,_,e){"use strict";e.r(_);var c=e(0),o=Object(c.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("blockquote",[_("p",[v._v("平时用到终端比较多，这时候熟悉一些常用的 "),_("code",[v._v("vim")]),v._v(" 命令就会很方便。")])]),v._v(" "),_("h2",{attrs:{id:"模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[v._v("#")]),v._v(" 模式")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("正常模式：")]),v._v(" "),_("ul",[_("li",[v._v("使用快捷键命令")]),v._v(" "),_("li",[_("code",[v._v(":")]),v._v(" 输入命令行")])])]),v._v(" "),_("li",[_("p",[v._v("插入模式：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("i")]),v._v(" 在光标前插入")]),v._v(" "),_("li",[_("code",[v._v("a")]),v._v(" 在光标后插入")]),v._v(" "),_("li",[_("code",[v._v("A")]),v._v(" 在光标所在行末插入")]),v._v(" "),_("li",[_("code",[v._v("o")]),v._v(" 在光标下插入空行")]),v._v(" "),_("li",[_("code",[v._v("O")]),v._v(" 在光标上插入空行")])]),v._v(" "),_("blockquote",[_("p",[v._v("一个小技巧：按"),_("code",[v._v("8")]),v._v("，再按"),_("code",[v._v("i")]),v._v("，进入插入模式，输入"),_("code",[v._v("=")]),v._v("， 按"),_("code",[v._v("esc")]),v._v("退出插入模式，就会出现 8 个"),_("code",[v._v("=")]),v._v("。这在插入分割线时非常有用，如按"),_("code",[v._v("30")]),v._v("，再按"),_("code",[v._v("i")]),v._v("，输入"),_("code",[v._v("+")]),v._v("，再按"),_("code",[v._v("esc")]),v._v("，就插入了 30 个"),_("code",[v._v("+")]),v._v("组成的分割线")])])]),v._v(" "),_("li",[_("p",[v._v("可视模式：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("v")]),v._v(" 进入可视模式，移动光标可以选择文本")]),v._v(" "),_("li",[_("code",[v._v("V")]),v._v(" 进入可视行模式， 总是整行整行的选中")]),v._v(" "),_("li",[_("code",[v._v("ctrl+v")]),v._v(" 进入可视块模式，按块选中")])])]),v._v(" "),_("li",[_("p",[v._v("替换模式：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("R")]),v._v(" 进入")])])])]),v._v(" "),_("h2",{attrs:{id:"移动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#移动"}},[v._v("#")]),v._v(" 移动")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("h")]),v._v("或"),_("code",[v._v("退格")]),v._v(" 左移一个字符；")]),v._v(" "),_("li",[_("code",[v._v("l")]),v._v("或"),_("code",[v._v("空格")]),v._v(" 右移一个字符；")]),v._v(" "),_("li",[_("code",[v._v("j")]),v._v(" 下移一行；")]),v._v(" "),_("li",[_("code",[v._v("k")]),v._v(" 上移一行；")]),v._v(" "),_("li",[_("code",[v._v("w")]),v._v(" 后移一个单词，光标停在下一个单词开头；")]),v._v(" "),_("li",[_("code",[v._v("e")]),v._v(" 后移一个单词，光标停在当前单词末尾；")]),v._v(" "),_("li",[_("code",[v._v("b")]),v._v(" 前移一个单词，光标停在当前单词开头；")]),v._v(" "),_("li",[_("code",[v._v("ge")]),v._v(" 前移一个单词，光标停在上一个单词末尾；")]),v._v(" "),_("li",[_("code",[v._v("{")]),v._v(" 前移 1 段。")]),v._v(" "),_("li",[_("code",[v._v("}")]),v._v(" 后移 1 段。")]),v._v(" "),_("li",[_("code",[v._v("f[c]")]),v._v(" 把光标移到同一行的下一个 c 字符处")]),v._v(" "),_("li",[_("code",[v._v("F[c]")]),v._v(" 把光标移到同一行的上一个 c 字符处")]),v._v(" "),_("li",[_("code",[v._v("t[c]")]),v._v(" 把光标移到同一行的下一个 c 字符前")]),v._v(" "),_("li",[_("code",[v._v("T[c]")]),v._v(" 把光标移到同一行的上一个 c 字符后")]),v._v(" "),_("li",[_("code",[v._v(";")]),v._v(" 配合 f & t 使用，重复一次")]),v._v(" "),_("li",[_("code",[v._v(",")]),v._v(" 配合 f & t 使用，反向重复一次")])]),v._v(" "),_("blockquote",[_("p",[v._v("上面的操作都可以配合 n 使用，比如在正常模式下输入 3h， 则光标向左移动 3 个字符")])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("0")]),v._v(" 移动到行首")]),v._v(" "),_("li",[_("code",[v._v("^")]),v._v(" 移动到本行第一个非空白字符")]),v._v(" "),_("li",[_("code",[v._v("$")]),v._v(" 移动到行尾")]),v._v(" "),_("li",[_("code",[v._v("H")]),v._v(" 把光标移到屏幕最顶端一行")]),v._v(" "),_("li",[_("code",[v._v("M")]),v._v(" 把光标移到屏幕中间一行")]),v._v(" "),_("li",[_("code",[v._v("L")]),v._v(" 把光标移到屏幕最底端一行")]),v._v(" "),_("li",[_("code",[v._v("gg")]),v._v(" 到文件头部")]),v._v(" "),_("li",[_("code",[v._v(":$")]),v._v("或"),_("code",[v._v("G")]),v._v(" 到文件尾部")]),v._v(" "),_("li",[_("code",[v._v(":[n]")]),v._v("或"),_("code",[v._v("[n]G")]),v._v(" 到文件第 n 行")])]),v._v(" "),_("h2",{attrs:{id:"删除-剪切"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#删除-剪切"}},[v._v("#")]),v._v(" 删除（剪切）")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("[n]x")]),v._v(" 删除（剪切）光标右边 n 个字符")]),v._v(" "),_("li",[_("code",[v._v("[n]X")]),v._v(" 删除（剪切）光标左边 n 个字符")]),v._v(" "),_("li",[_("code",[v._v("D")]),v._v(" 删除（剪切）当前位置到行尾的内容")]),v._v(" "),_("li",[_("code",[v._v("d0")]),v._v(" 删除（剪切）当前位置到行首的内容")]),v._v(" "),_("li",[_("code",[v._v("d[n]w")]),v._v(" 删除（剪切）光标右边 1(n)个单词")]),v._v(" "),_("li",[_("code",[v._v("d[n]l")]),v._v(" 删除（剪切）光标右边 1(n)个字符")]),v._v(" "),_("li",[_("code",[v._v("d[n]h")]),v._v(" 删除（剪切）光标左边 1(n)个字符")]),v._v(" "),_("li",[_("code",[v._v("[n]dd")]),v._v(" 删除（剪切）1(n)行")])]),v._v(" "),_("h2",{attrs:{id:"复制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[v._v("#")]),v._v(" 复制")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("y")]),v._v(" 复制在可视模式下选中的文本")]),v._v(" "),_("li",[_("code",[v._v("yy")]),v._v("或"),_("code",[v._v("Y")]),v._v(" 复制整行文本")]),v._v(" "),_("li",[_("code",[v._v("y[n]w")]),v._v(" 复制一(n)个词")]),v._v(" "),_("li",[_("code",[v._v("y[n]l")]),v._v(" 复制光标右边 1(n)个字符")]),v._v(" "),_("li",[_("code",[v._v("y[n]h")]),v._v(" 复制光标左边 1(n)个字符")])]),v._v(" "),_("h2",{attrs:{id:"粘贴"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#粘贴"}},[v._v("#")]),v._v(" 粘贴")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("p")]),v._v(" 在光标之后粘贴")]),v._v(" "),_("li",[_("code",[v._v("P")]),v._v(" 在光标之前粘贴")])]),v._v(" "),_("h2",{attrs:{id:"查找"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查找"}},[v._v("#")]),v._v(" 查找")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("/[s]")]),v._v(" 向后查找 s")]),v._v(" "),_("li",[_("code",[v._v("?[s]")]),v._v(" 向前查找 s")]),v._v(" "),_("li",[_("code",[v._v("n")]),v._v(" 向后查找下一个")]),v._v(" "),_("li",[_("code",[v._v("N")]),v._v(" 向前查找下一个")])]),v._v(" "),_("h2",{attrs:{id:"替换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#替换"}},[v._v("#")]),v._v(" 替换")]),v._v(" "),_("ul",[_("li",[_("code",[v._v(":s/old/new")]),v._v(" 用 new 替换当前行第一个 old")]),v._v(" "),_("li",[_("code",[v._v(":s/old/new/g")]),v._v(" 用 new 替换当前行所有的 old")]),v._v(" "),_("li",[_("code",[v._v(":[n1],[n2]s/old/new/g")]),v._v(" 用 new 替换文件 n1 行到 n2 行所有的 old")]),v._v(" "),_("li",[_("code",[v._v(":%s/old/new/g")]),v._v(" 用 new 替换文件中所有的 old")]),v._v(" "),_("li",[_("code",[v._v(":%s/^/xxx/g")]),v._v(" 在每一行的行首插入 xxx，^表示行首")]),v._v(" "),_("li",[_("code",[v._v(":%s/$/xxx/g")]),v._v(" 在每一行的行尾插入 xxx，$表示行尾")]),v._v(" "),_("li",[v._v("所有替换命令末尾加上"),_("code",[v._v("c")]),v._v("，每个替换都将需要用户确认。 如："),_("code",[v._v("%s/old/new/gc")]),v._v("，加上"),_("code",[v._v("i")]),v._v("则忽略大小写")])])])}),[],!1,null,null,null);_.default=o.exports}}]);