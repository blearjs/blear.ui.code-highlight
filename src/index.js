/**
 * blear.utils.code-highlight
 * @author ydr.me
 * @create 2018年09月06日14:30:42
 */

'use strict';

var string = require('blear.utils.string');

var prism = require('../prismjs/prism');

require('../prismjs/components/prism-clike');
require('../prismjs/components/prism-markup');
require('../prismjs/components/prism-markup-templating');
require('../prismjs/components/prism-css');
require('../prismjs/components/prism-javascript');

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
 */
exports.text = function (text, lang) {
    var grammar = prism.languages[lang];

    if (!grammar) {
        return string.escapeHTML(text);
    }

    return prism.highlight(text, grammar, lang);
};
