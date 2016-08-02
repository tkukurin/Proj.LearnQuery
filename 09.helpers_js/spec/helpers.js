/*global affix, cssClass*/

describe('CssClassManipulation', function() {
  'use strict';

  var $selectedElement, selectedElement;

  it('should throw exception when element is nonexistent.', function() {
      expect(function() {
        require(null);
      }).toThrowError();
  });

  it('should throw exception when one of elements is nonexistent.', function() {
      expect(function() {
        requireAll("givenExisting", null);
      }).toThrowError();
  });
});
