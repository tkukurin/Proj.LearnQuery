var dom = function(){
  // code goes here
};

dom.append = function(element, childToBeAppended) {
    element.appendChild(childToBeAppended);
}

dom.prepend = function(targetElement, childToBePrepended) {
    targetElement.insertBefore(childToBePrepended, targetElement.childNodes[0]);
}

dom.remove = function(element) {
    ignoreThrowable(() => element.parentElement.removeChild(element));
}

dom.after = function(targetElement, elementToBeInsertedAfterTargetElement) {
    ignoreThrowable(() => {
        targetElement.parentNode
                     .insertBefore(elementToBeInsertedAfterTargetElement,
                         targetElement.nextSibling);
    });
}

dom.before = function(targetElement, elementToBeInsertedBeforeTargetElement) {
    targetElement.parentElement.insertBefore(elementToBeInsertedBeforeTargetElement,
        targetElement);
}

dom.val = function(element) {
    return element.value;
}
