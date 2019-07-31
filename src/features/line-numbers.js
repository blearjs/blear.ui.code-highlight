/**
 * line-numbers
 * @author ydr.me
 * @create 2019-07-31 18:06:45
 * @update 2019-07-31 18:06:45
 */


'use strict';

var selector = require('blear.core.selector');
var attribute = require('blear.core.attribute');
var modification = require('blear.core.modification');

// Regular expression used for determining line breaks
var NEW_LINE_EXP = /\n(?!$)/g;

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
    var className = 'prism_lineNumbers';
    if (attribute.hasClass(preEl, className)) {
        return;
    }

    attribute.addClass(preEl, className);
    var match = code.match(NEW_LINE_EXP);
    var linesNum = match ? match.length + 1 : 1;
    var lineNumbersWrapper;
    var lines = new Array(linesNum + 1).join('<span class="prism-line"></span>');

    lineNumbersWrapper = modification.create('span', {
        'aria-hidden': 'true',
        'class': 'prism-lines',
        style: ['font-family', 'line-height', 'font-size'].reduce(function (prev, curr, list) {
            prev[curr] = attribute.style(codeEl, curr);
            return prev;
        }, {})
    });
    lineNumbersWrapper.innerHTML = lines;
    modification.insert(lineNumbersWrapper, preEl);
});

require('./line-numbers.css', 'css|style');

