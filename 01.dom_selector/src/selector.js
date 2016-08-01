
var MAPPERS = {
    '#': sel => [ document.getElementById(sel) ],
    '.': sel => document.getElementsByClassName(sel)
}

var domSelector = function(selectors) {
  'use strict';

  return Optional.of(selectors)
                 .map(selector => {
                     var key = selector[0];
                     return Optional.of(MAPPERS[key])
                                    .map(fn => fn(selector.substring(1)))
                                    .orElseGet(() => document.querySelectorAll(selector)) })
                 .orElseGet(() => []);
};
