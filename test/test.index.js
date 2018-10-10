/**
 * karma 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var codeHighlight = require('../src/index.js');

describe('测试文件', function () {
    it('highlight js', function (done) {
        var text = 'var a = 1;';
        var html = codeHighlight.text(text, 'js');
        console.log(html);
        done();
    });

    it('highlight css', function (done) {
        var text = 'body { width: 100px;}';
        var html = codeHighlight.text(text, 'css');
        console.log(html);
        done();
    });

    it('highlight html', function (done) {
        var text = '<h1>Hello</h1>';
        var html = codeHighlight.text(text, 'html');
        console.log(html);
        done();
    });

    it('highlight unkndow', function (done) {
        var text = '<h1>Hello</h1>';
        var html = codeHighlight.text(text, 'unkndow');
        console.log(html);
        done();
    });
});
