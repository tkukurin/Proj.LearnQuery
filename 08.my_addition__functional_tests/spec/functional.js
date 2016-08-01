
describe('Selector', function() {
  'use strict';

  it('should correctly handle null values as empty optionals', function() {
      var givenSomeEmptyOptional = Optional.empty();
      var givenSomeEmptyOptional2 = new Optional(null);

      expect(givenSomeEmptyOptional.value).toEqual(givenSomeEmptyOptional2.value);
      expect(givenSomeEmptyOptional.isPresent()).toEqual(false);
      expect(givenSomeEmptyOptional.isEmpty()).toEqual(true);
  });

  it('should execute ifPresent when value is present', function() {
      var givenSomePresentOptional = Optional.of(10);

      var givenValueToBeModified = 1;
      var givenModifiedNewValue = 11;

      function givenArbitraryModifyingFunction() {
          givenValueToBeModified = givenModifiedNewValue
      }

      givenSomePresentOptional.ifPresent(givenArbitraryModifyingFunction);
      expect(givenValueToBeModified).toEqual(givenModifiedNewValue)
  });

  it('should execute orElse when value is not present', function() {
      var givenSomeEmptyOptional = Optional.empty();

      var givenValueToBeModified = 1;
      var givenModifiedNewValue = 11;

      function givenArbitraryModifyingFunction() {
          givenValueToBeModified = givenModifiedNewValue
      }

      givenSomeEmptyOptional.orElse(givenArbitraryModifyingFunction);
      expect(givenValueToBeModified).toEqual(givenModifiedNewValue)
  });

  it('should return self if filter returns true.', function() {
      var givenSomePresentOptional = Optional.of(10);

      var givenValueToBeModified = 1;
      var givenModifiedNewValue = 11;

      function givenArbitraryModifyingFunction() {
          givenValueToBeModified = givenModifiedNewValue
      }

      givenSomePresentOptional.filter(el => el == 10)
                              .ifPresent(givenArbitraryModifyingFunction);
      expect(givenValueToBeModified).toEqual(givenModifiedNewValue)
  });

  it('should return empty optional if filter returns false.', function() {
      var givenSomePresentOptional = Optional.of(10);

      var givenValueToBeModified = 1;
      var givenModifiedNewValue = 11;

      function givenArbitraryModifyingFunction() {
          givenValueToBeModified = givenModifiedNewValue
      }

      var whenFiltered = givenSomePresentOptional.filter(el => el == 11);
      expect(whenFiltered.isPresent()).toEqual(false);
  });

  it('should flatMap correctly when value is present.', function() {
      var givenSomePresentOptional = Optional.of(10);
      var flatMapped = givenSomePresentOptional.flatMap(el => Optional.of(11));

      expect(flatMapped.value).toEqual(11);
  });

  it('should flatMap correctly when value is not present.', function() {
      var givenSomeEmptyOptional = Optional.empty();
      var flatMapped = givenSomeEmptyOptional.flatMap(el => Optional.of(11));

      expect(flatMapped.isPresent()).toEqual(false);
  });

  it('should map correctly when value is present.', function() {
      var givenSomePresentOptional = Optional.of(10);
      var mapped = givenSomePresentOptional.map(el => 11);

      expect(mapped.value).toEqual(11);
  });

  it('should map correctly when value is not present.', function() {
      var givenSomeEmptyOptional = Optional.empty();
      var mapped = givenSomeEmptyOptional.map(el => 11);

      expect(mapped.isPresent()).toEqual(false);
  });

});
