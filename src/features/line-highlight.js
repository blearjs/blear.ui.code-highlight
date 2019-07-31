/**
 * line-highlight
 * @author ydr.me
 * @create 2019-07-31 19:20:31
 * @update 2019-07-31 19:20:31
 */


'use strict';


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
    var className = 'prism_nums';
    if (attribute.hasClass(preEl, className)) {
        return;
    }


});
