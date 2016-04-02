'use strict';

var StringifyCompiler = function() {};
StringifyCompiler.prototype.compile = function(params) {
  return Promise.resolve({
    data: 'module.exports = ' + JSON.stringify(params.data) + ';'
  });
};
StringifyCompiler.prototype.brunchPlugin = true;
StringifyCompiler.prototype.type = 'template';
StringifyCompiler.prototype.extension = 'html';
StringifyCompiler.prototype.pattern = /\.html$/;

module.exports = StringifyCompiler;
