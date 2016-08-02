var cssClass = function() {
  'use strict';
};

function removeClassAndReturnTrueIfSuccessful(element, desiredClass) {
    var startingLength = element.className.length;
    element.className = element.className.split(desiredClass).join("");
    var endingLength = element.className.length;

    return startingLength != endingLength;
}

cssClass.toggle = function(element, desiredClass) {
    requireAll(element, desiredClass);
    Optional.of(removeClassAndReturnTrueIfSuccessful(element, desiredClass))
            .filter(successfulyRemovedClass => successfulyRemovedClass == false)
            .ifPresent(val => cssClass.add(element, desiredClass));
}

cssClass.has = function(element, desiredClass) {
    return element.className.indexOf(desiredClass) >= 0;
}

cssClass.add = function(element, desiredClass) {
    element.className += " " + desiredClass;
}

cssClass.remove = function(element, desiredClass) {
    removeClassAndReturnTrueIfSuccessful(element, desiredClass);
}
