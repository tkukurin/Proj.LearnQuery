var domSelector = function(selectors) {
  'use strict';
  return Optional.of(selectors).map(parse).orElseGet(() => []);

  function parse(selectors) {
      return [];
  }
};
