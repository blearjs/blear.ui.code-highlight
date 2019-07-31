/**
 * blear.ui.code-highlight
 * @author ydr.me
 * @create 2018年09月06日14:30:42
 */

'use strict';

var string = require('blear.utils.string');

var prism = require('./prismjs/prism');

// 内置基本语言
require('./langs/c');
require('./langs/js');
require('./langs/css');
require('./langs/html');


/**
 * 高亮区域代码【浏览器渲染】
 * @param [el=body]
 */
exports.element = function (el) {
    el = el || document.body;
    prism.highlightAllUnder(el);
};

/**
 * 高亮文本【服务端渲染】
 * @param text
 * @param lang
 * @param [wrap=false]
 */
exports.text = function (text, lang, wrap) {
    var grammar = prism.languages[lang];
    var html = grammar
        ? prism.highlight(text, grammar, lang)
        : string.escapeHTML(text);

    if (wrap) {
        return string.assign('<pre class="prism" data-language="${l}"><code></code></pre>', {
            h: html,
            l: lang
        });
    }

    return html;
};

