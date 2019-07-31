/**
 * 文件描述
 * @author ydr.me
 * @create 2016-06-27 17:34
 */


'use strict';

var codeHighlight = require('../src/index');


require('../src/langs/c');
require('../src/langs/html');
require('../src/langs/css');
require('../src/langs/js');
require('../src/themes/light');

require('../src/features/line-numbers');
require('../src/features/line-highlight');


codeHighlight.element();
