/**
 * line-highlight
 * @author ydr.me
 * @create 2019-07-31 19:20:31
 * @update 2019-07-31 19:20:31
 */


'use strict';

var selector = require('blear.core.selector');
var attribute = require('blear.core.attribute');
var modification = require('blear.core.modification');


// 依赖行号
require('./line-numbers');

Prism.hooks.add('complete', function (env) {
    var code = env.code;

    if (!code) {
        return;
    }

    var codeEl = env.element;
    var preEl = codeEl.parentNode;

    // works only for <code> wrapped inside <pre> (not inline)
    if (!preEl || !/pre/i.test(preEl.nodeName)) {
        return;
    }

    // Abort if line numbers already exists
    var className = 'prism_lineHighlight';
    if (attribute.hasClass(preEl, className)) {
        return;
    }

    attribute.addClass(preEl, className);
    var ranges = attribute.attr(preEl, 'data-highlight');
    var rangeList = ranges.replace(/\s+/, '').split(',').map(function (range) {
        var ranges = range.split('-');
        return [ranges[0], ranges[1] || ranges[0]];
    });
    var lineEls = selector.query('.prism-line', preEl);

    rangeList.forEach(function (range) {
        var start = range[0];
        var end = range[1];

        for (; start <= end; start++) {
            attribute.addClass(lineEls[start - 1], 'prism-highlight');
        }
    });
});
