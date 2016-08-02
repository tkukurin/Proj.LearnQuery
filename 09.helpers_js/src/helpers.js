function require(element, optionalElementName) {
    if(element == null) {
        var elementName = Optional.of(optionalElementName)
                                  .orElseGet(() => "Element");
        throw elementName + " should not be null.";
    }
}

function requireAll() {
    for(var i = 0; i < arguments.length; i++) {
        require(arguments[i]);
    }
}
