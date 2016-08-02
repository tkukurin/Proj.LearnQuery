
var MAPPERS = {
    '#': sel => [ document.getElementById(sel) ],
    '.': sel => document.getElementsByClassName(sel)
}

var domSelector = function(selectors) {
  'use strict';

  return Optional.of(selectors)
                 .map(selector => {
                     var selectorType = selector[0];
                     return Optional.of(MAPPERS[selectorType])
                                    .map(fn => fn(removePrefix(selector)))
                                    .orElseGet(() => defaultQuery(selector))
                 }).orElseGet(emptyArray);
};

function emptyArray() { return []; }
function removePrefix(selector) { return selector.substring(1); }
function defaultQuery(selector) { return document.querySelectorAll(selector); }
