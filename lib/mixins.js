'use strict';
var parse = require('./params').parse;

exports.find = function(tree) {
  var ret = {};

  tree.forEach(function(child) {
    if (child.name.search('mixin ') === 0) {
      var parts = child.name.split(' ');
      var params = parse(parts.slice(2).join(''));

      ret[child.name.split(' ')[1].trim()] = {
        children: child.children,
        params: params
      };

      child.deleted = true;
    }
  });

  return ret;
};