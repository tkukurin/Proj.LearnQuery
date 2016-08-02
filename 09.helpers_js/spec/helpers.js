/*global affix, cssClass*/

describe('CssClassManipulation', function() {
  'use strict';

  var $selectedElement, selectedElement;

  it('should throw exception when element is nonexistent.', function() {
      expect(function() {
        require(null);
      }).toThrowError();
  });
});
