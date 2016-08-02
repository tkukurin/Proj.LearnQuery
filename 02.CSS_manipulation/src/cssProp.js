var cssProp = function(element, keyOrMap, valueIfPresent) {
  'use strict';
  require(element);
  return Optional.of(valueIfPresent)
                 .ifPresent(value => element.style[keyOrMap] = value)
                 .orElseGet(() => parseKeyOrMap(element, keyOrMap));
};

function parseKeyOrMap(element, keyOrMap) {
    if(isMap(keyOrMap)) {
        addCssPropertiesFromMap(element, keyOrMap);
    } else {
        var keyIsARequestedCssProperty = keyOrMap;
        return element.style[keyIsARequestedCssProperty];
    }
}

function isMap(keyOrMap) {
    return keyOrMap instanceof Object;
}

function addCssPropertiesFromMap(element, map) {
    for(var keyAsCssProperty in map) {
        element.style[keyAsCssProperty] = map[keyAsCssProperty];
    }
}
