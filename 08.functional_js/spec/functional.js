
describe('Selector', function() {
  'use strict';

  it('should correctly handle null values as empty optionals', function() {
      // given
      var givenSomeEmptyOptional = Optional.empty();
      var givenSomeEmptyOptional2 = new Optional(null);

      // then
      expect(givenSomeEmptyOptional.value).toEqual(givenSomeEmptyOptional2.value);
      expect(givenSomeEmptyOptional.isPresent()).toEqual(false);
      expect(givenSomeEmptyOptional.isEmpty()).toEqual(true);
  });

  it('should execute ifPresent when value is present', function() {
      // given
      var givenSomePresentOptional = Optional.of(10);
      var arbitraryFunctionWasCalled = false;
      var givenArbitraryFunction = () => arbitraryFunctionWasCalled = true;

      // when
      givenSomePresentOptional.ifPresent(givenArbitraryFunction);

      // then
      expect(arbitraryFunctionWasCalled).toEqual(true)
  });

  it('should execute orElse when value is not present', function() {
      // given
      var givenSomeEmptyOptional = Optional.empty();
      var arbitraryFunctionWasCalled = false;
      var givenArbitraryFunction = () => arbitraryFunctionWasCalled = true;

      // when
      givenSomeEmptyOptional.orElse(givenArbitraryFunction);

      // then
      expect(arbitraryFunctionWasCalled).toEqual(true)
  });

  it('should return self if filter returns true.', function() {
      // given
      var givenOptionalValue = 10;
      var givenSomePresentOptional = Optional.of(givenOptionalValue);
      var arbitraryFunctionWasCalled = false;
      var givenArbitraryFunction = () => arbitraryFunctionWasCalled = true;

      // when
      givenSomePresentOptional.filter(el => el == givenOptionalValue)
                              .ifPresent(givenArbitraryFunction);

      // then
      expect(arbitraryFunctionWasCalled).toEqual(true);
  });

  it('should return empty optional if filter returns false.', function() {
      // given
      var givenSomePresentOptional = Optional.of(10);
      var givenSomeValueOtherThanTen = 11;

      // when
      var whenFiltered = givenSomePresentOptional.filter(el => el == givenSomeValueOtherThanTen);

      // then
      expect(whenFiltered.isPresent()).toEqual(false);
  });

  it('should flatMap correctly when value is present.', function() {
      // given
      var givenSomePresentOptional = Optional.of(10);
      var givenFutureMappedValue = 11;

      // when
      var flatMapped = givenSomePresentOptional.flatMap(el => Optional.of(givenFutureMappedValue));

      // then
      expect(flatMapped.value).toEqual(givenFutureMappedValue);
  });

  it('should flatMap correctly when value is not present.', function() {
      // given
      var givenSomeEmptyOptional = Optional.empty();
      var givenSomeArbitraryValue = 1;

      // when
      var flatMapped = givenSomeEmptyOptional.flatMap(el => Optional.of(givenSomeArbitraryValue));

      // then
      expect(flatMapped.isPresent()).toEqual(false);
  });

  it('should map correctly when value is present.', function() {
      // given
      var givenSomePresentOptional = Optional.of(10);
      var givenFutureMappedValue = 1;

      // when
      var mapped = givenSomePresentOptional.map(el => givenFutureMappedValue);

      // then
      expect(mapped.value).toEqual(givenFutureMappedValue);
  });

  it('should map correctly when value is not present.', function() {
      // given
      var givenSomeEmptyOptional = Optional.empty();
      var givenFutureMappedValue = 1;

      // when
      var mapped = givenSomeEmptyOptional.map(el => givenFutureMappedValue);

      // then
      expect(mapped.isPresent()).toEqual(false);
  });

  it('should supply other value if optional is empty.', function() {
      // given
      var givenSomeEmptyOptional = Optional.empty();
      var givenOrElseValue = 20;

      // when
      var whenOrElseGetInvoked = givenSomeEmptyOptional.orElseGet(() => givenOrElseValue);

      // then
      expect(whenOrElseGetInvoked).toEqual(givenOrElseValue);
  });

  it('should correctly wrap exceptions', function() {
      // given
      var givenThrowableValue = "givenThrowableValue";
      var givenThrowingFunction = () => { throw givenThrowableValue; };

      // when
      var whenThrowableFunctionCalled = Optional.ofThrowable(() => givenThrowingFunction());

      // then
      expect(whenThrowableFunctionCalled.value).toEqual(givenThrowableValue);
  });

});
