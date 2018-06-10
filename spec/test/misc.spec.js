/* eslint-disable */
import { hasUpperCase, hasSymbol, hasNumber, hasLength } from '../../src/public/utils/misc';

describe('hasUpperCase', function () {
    it('should be a function', function () {
      expect(typeof hasUpperCase).toBe('function');
    });

    describe('given a string', () => {
      it('should return true if the string has an upper letter', () => {
        const str = 'example with one uPper letter';
        expect(hasUpperCase(str)).toBeTruthy();
      });

      it('should return false if the string has not an upper letter', () => {
        const str = 'example without upper letter';
        expect(hasUpperCase(str)).toBeFalsy();
      });
    });

    describe('given an empty string', () => {
      it('should return false', () => {
        const str = '';
        expect(hasUpperCase(str)).toBeFalsy();
      });
    });

    describe('given a not string', () => {
      it('should throw an error', () => {
        const str = 1;
        expect(() => { hasUpperCase(str) }).toThrow(new Error(`type not supported -> str: ${typeof str}`));
      });
    });
});

describe('hasSymbol', function () {
    it('should be a function', function () {
      expect(typeof hasSymbol).toBe('function');
    });

    describe('given a string', () => {
      it('should return true if the string has a symbol', () => {
        const str = 'example with $ymbol';
        expect(hasSymbol(str)).toBeTruthy();
      });

      it('should return false if the string has not a symbol', () => {
        const str = 'example';
        expect(hasSymbol(str)).toBeFalsy();
      });
    });

    describe('given an empty string', () => {
      it('should return false', () => {
        const str = '';
        expect(hasSymbol(str)).toBeFalsy();
      });
    });

    describe('given a not string', () => {
      it('should throw an error', () => {
        const str = 1;
        expect(() => { hasSymbol(str) }).toThrow(new Error(`type not supported -> str: ${typeof str}`));
      });
    });
});

describe('hasNumber', function () {
    it('should be a function', function () {
      expect(typeof hasNumber).toBe('function');
    });

    describe('given a string', () => {
      it('should return true if the string has a number', () => {
        const str = 'example with 5';
        expect(hasNumber(str)).toBeTruthy();
      });

      it('should return false if the string has not a number', () => {
        const str = 'example';
        expect(hasNumber(str)).toBeFalsy();
      });
    });

    describe('given an empty string', () => {
      it('should return false', () => {
        const str = '';
        expect(hasNumber(str)).toBeFalsy();
      });
    });

    describe('given a not string', () => {
      it('should throw an error', () => {
        const str = 1;
        expect(() => { hasNumber(str) }).toThrow(new Error(`type not supported -> str: ${typeof str}`));
      });
    });
});

describe('hasLength', function () {
    it('should be a function', function () {
      expect(typeof hasLength).toBe('function');
    });

    it('should be have two arguments', function () {
      expect(hasLength.length).toBe(2);
    });

    describe('given a string and length', () => {
      it('should return true if the string.length === length', () => {
        const str = 'example';
        const length = 7;
        expect(hasLength(str, length)).toBeTruthy();
      });

      it('should return true if the the string.length >= length', () => {
        const str = 'example';
        const length = 5;
        expect(hasLength(str, length)).toBeTruthy();
      });

      it('should return false if the the string.length <= length', () => {
        const str = 'example';
        const length = 10;
        expect(hasLength(str, length)).toBeFalsy();
      });
    });

    describe('given a not string or not a number', () => {
      it('should throw an error', () => {
        const str = 1;
        const length = '1'
        expect(() => { hasLength(str, length) }).toThrow(new Error(`type not supported -> str, length: ${typeof str}, ${typeof length}`));
      });
    });
});
