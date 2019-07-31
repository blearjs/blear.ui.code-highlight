/**
 * 文件描述
 * @author ydr.me
 * @create 2018-09-06 14:07
 * @update 2018-09-06 14:07
 */


'use strict';

var scopeCSS = require('blear.utils.scope-css');
var modification = require('blear.core.modification');

/**
 * 导入暗黑样式
 * @param scope
 */
module.exports = function (scope) {
    modification.importStyle(scopeCSS(require('./dark.css'), scope));
};


