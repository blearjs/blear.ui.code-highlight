/**
 * blear.utils.code-highlight
 * @author ydr.me
 * @create 2018年09月06日14:30:42
 */

'use strict';

var prism = require('../prismjs/prism');

require('../prismjs/components/prism-clike');
require('../prismjs/components/prism-markup');
require('../prismjs/components/prism-markup-templating');
require('../prismjs/components/prism-css');
require('../prismjs/components/prism-javascript');

/**
 * 高亮区域代码
 * @param [el=body]
 */
module.exports = function (el) {
    el = el || document.body;
    prism.highlightAllUnder(el);
};
