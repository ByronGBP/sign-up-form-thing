/* eslint-disable */
import { FormController } from '../../src/controllers/form';

const controller = new FormController();
describe('FormController', function () {
  it('should be a function', function () {
    expect(typeof FormController).toBe('function');
  });
  describe('check() method', () => {
    it('should be a function', function () {
      expect(typeof controller.check).toBe('function');
    });

    describe('given a type and text', () => {
      describe('given an email type', () => {
        it('should call _checkEmail', () => {
          spyOn(controller, '_checkEmail');
          controller.check('email', '');
          expect(controller._checkEmail).toHaveBeenCalled();
        });

        it('should return true if the text has a valid email', () => {
          const text = 'email@email.com';
          const type = 'email';
          spyOn(controller, '_checkEmail').withArgs(text).and.returnValue(true);
          controller.check(type, text);
        });

        it('should return false if the text has a not valid email', () => {
          const text = 'email.com';
          const type = 'email';
          spyOn(controller, '_checkEmail').withArgs(text).and.returnValue(true);
          controller.check(type, text);
        });
      });

      describe('given an password type', () => {
        it('should call _checkPassword', () => {
          spyOn(controller, '_checkPassword');
          controller.check('password', '');
          expect(controller._checkPassword).toHaveBeenCalled();
        });

        it('should return true if the text has a valid password', () => {
          const text = 'qweQWER1234!"·$';
          const type = 'password';
          spyOn(controller, '_checkPassword').withArgs(text).and.returnValue(true);
          controller.check(type, text);
        });

        it('should return false if the text has a not valid password', () => {
          const text = 'password';
          const type = 'password';
          spyOn(controller, '_checkPassword').withArgs(text).and.returnValue(true);
          controller.check(type, text);
        });
      });

      describe('given an name type', () => {
        it('should call _checkName', () => {
          spyOn(controller, '_checkName');
          controller.check('name', '');
          expect(controller._checkName).toHaveBeenCalled();
        });

        it('should return true if the text has a valid name', () => {
          const text = 'Yi';
          const type = 'name';
          spyOn(controller, '_checkName').withArgs(text).and.returnValue(true);
          controller.check(type, text);
        });

        it('should return false if the text has a not valid name', () => {
          const text = '';
          const type = 'name';
          spyOn(controller, '_checkName').withArgs(text).and.returnValue(true);
          controller.check(type, text);
        });
      });

      describe('given an address type', () => {
        it('should call _checkAddress', () => {
          spyOn(controller, '_checkAddress');
          controller.check('address', '');
          expect(controller._checkAddress).toHaveBeenCalled();
        });

        it('should return true if the text has a valid address', () => {
          const text = 'Barcelona';
          const type = 'address';
          spyOn(controller, '_checkAddress').withArgs(text).and.returnValue(true);
          controller.check(type, text);
        });

        it('should return false if the text has a not valid address', () => {
          const text = '';
          const type = 'address';
          spyOn(controller, '_checkAddress').withArgs(text).and.returnValue(true);
          controller.check(type, text);
        });
      });

      describe('given an postal-code type', () => {
        it('should call _checkPostalCode', () => {
          spyOn(controller, '_checkPostalCode');
          controller.check('postal-code', '');
          expect(controller._checkPostalCode).toHaveBeenCalled();
        });

        it('should return true if the text has a valid postal-code', () => {
          const text = '08080';
          const type = 'postal-code';
          spyOn(controller, '_checkPostalCode').withArgs(text).and.returnValue(true);
          controller.check(type, text);
        });

        it('should return false if the text has a not valid postal-code', () => {
          const text = '';
          const type = 'postal-code';
          spyOn(controller, '_checkPostalCode').withArgs(text).and.returnValue(true);
          controller.check(type, text);
        });
      });

      describe('given a not supported type', () => {
        it('should throw an error', () => {
          const text = '';
          const type = 'nop';
          expect(() => { controller.check(type, text); }).toThrow(new Error(`type not supported: ${type}`));
        });
      });
    });
  });
});
