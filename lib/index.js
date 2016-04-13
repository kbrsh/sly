'use strict';

var analyze = require('./analyze');
var tree = require('./tree');
var VERSION = '0.0.3'


module.exports = function(data) {
  return '/* Generated with Sly ' + VERSION +  ' */ \n' + tree.transform(
    tree.ify(
      analyze(
        data.split('\n')
      )
    )
  ).join('\n');
};
