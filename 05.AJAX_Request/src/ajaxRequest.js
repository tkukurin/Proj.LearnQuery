
var SUCCESS = "success";
var FAILURE = "failure";
var COMPLETE = "complete";
var CONTEXT = "context";
var METHOD = "method";

var DONE = 4;
var HttpResponse = {
    "OK": 200
};

var propertiesToDefaults = {
    SUCCESS: () => {},
    FAILURE: () => {},
    COMPLETE: () => {},
    CONTEXT: null,
    METHOD: "GET"
};

function ajaxReq(endpoint, propertiesAndCallbacks) {
  'use strict';

  var request = new XMLHttpRequest();
  var getOrDefault = (key) => getPropertyOrDefaultValue(key, propertiesAndCallbacks);

  request.onreadystatechange = () => readyStateChangeHandler(request, getOrDefault);
  request.open(getOrDefault(METHOD), endpoint);
  request.send();
}

function readyStateChangeHandler(request, getOrDefault) {
    var context = getOrDefault(CONTEXT);
    var contextApply = (functionName, params) => getOrDefault(functionName).apply(context, params);

    if (request.readyState == DONE) {
        contextApply(COMPLETE, [request, request.status]);

        if (request.status == HttpResponse.OK) {
            contextApply(SUCCESS, [request, request.status, JSON.parse(request.responseText) ]);
        } else {
            contextApply(FAILURE, [request, request.status, request.responseText ]);
        }
    }
}

function getPropertyOrDefaultValue(key, propertiesAndCallbacks) {
    return Optional.of(propertiesAndCallbacks[key])
                   .orElseGet(() => propertiesToDefaults[key]);
}
