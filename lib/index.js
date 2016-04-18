'use strict';

var analyze = require('./analyze');
var tree = require('./tree');
var pjson =  require('../package.json')
var VERSION = pjson.version


module.exports = function(data) {
  return '/* Generated with Sly ' + VERSION +  ' */ \n' + tree.transform(
    tree.ify(
      analyze(
        data.split('\n')
      )
    )
  ).join('\n');
};
