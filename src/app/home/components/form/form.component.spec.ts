import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { FormComponent } from './form.component';
import { HomeModel, mockData } from '../../model/home.model';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.form = HomeModel.form();
  });

 describe('FIRST NAME', () => {
   it('Validation - should fail empty value', () => {
     const invalidFirstName = component.form.get('first_name').invalid;

     expect(invalidFirstName).toBe(true);
     expect(component.buttonProperties.disabled).toBe(true);
   });

   it('Validation - should fail exceed max character limit', () => {
     // setting `a` chars 31 times to first name max limit is 31 - testing max limit validation
     const maxChars = 'a'.repeat(31);
     component.form.get('first_name').setValue(maxChars);

     const invalidFirstName = component.form.get('first_name').invalid;

     expect(invalidFirstName).toBe(true);
     expect(component.buttonProperties.disabled).toBe(true);
   });

   it('Validation - should success', () => {
     component.form.get('first_name').setValue('Kamran');

     const validFirstName = component.form.get('first_name').valid;

     expect(validFirstName).toBe(true);
   });
 });

  describe('LAST NAME', () => {
   it('Validation - should fail empty value', () => {
     const invalidLastName = component.form.get('last_name').invalid;

     expect(invalidLastName).toBe(true);
     expect(component.buttonProperties.disabled).toBe(true);
   });

   it('Validation - should fail exceed max character limit', () => {
     // setting `a` chars 31 times to last name max limit is 31 - testing max limit validation
     const maxChars = 'a'.repeat(31);
     component.form.get('last_name').setValue(maxChars);

     const invalidLastName = component.form.get('last_name').invalid;

     expect(invalidLastName).toBe(true);
     expect(component.buttonProperties.disabled).toBe(true);
   });

   it('Validation - should success', () => {
     component.form.get('last_name').setValue('Kamran');

     const validLastName = component.form.get('last_name').valid;

     expect(validLastName).toBe(true);
   });
 });

  describe('PHONE', () => {
   it('Validation - should fail empty value', () => {
     const invalidPhone = component.form.get('phone').invalid;

     expect(invalidPhone).toBe(true);
     expect(component.buttonProperties.disabled).toBe(true);
   });

   it('Validation - should fail exceed max character limit', () => {
     const maxChars = 12345678900;
     component.form.get('phone').setValue(maxChars);

     const invalidPhone = component.form.get('phone').invalid;

     expect(invalidPhone).toBe(true);
     expect(component.buttonProperties.disabled).toBe(true);
   });

   it('Validation - should fail invalid phone only number accepted', () => {
     const invalidNumbers = '1234567abc';
     component.form.get('phone').setValue(invalidNumbers);

     const invalidPhone = component.form.get('phone').invalid;

     expect(invalidPhone).toBe(true);
     expect(component.buttonProperties.disabled).toBe(true);
   });

   it('Validation - should success', () => {
     const phone = 1234567890;
     component.form.get('phone').setValue(phone);

     const validPhone = component.form.get('phone').valid;

     expect(validPhone).toBe(true);
   });
 });

  describe('DATE OF BIRTH', () => {
   it('Validation - should fail empty value', () => {
     const invalidDob = component.form.get('dob').invalid;

     expect(invalidDob).toBe(true);
     expect(component.buttonProperties.disabled).toBe(true);
   });

   it('Validation - should success', () => {
     const dob = '2020-07-15';
     component.form.get('dob').setValue(dob);

     const validDob = component.form.get('dob').valid;

     expect(validDob).toBe(true);
   });
 });

  describe('EMAIL', () => {
    it('Validation - should fail empty value', () => {
      const invalidEmail = component.form.get('email').invalid;

      expect(invalidEmail).toBe(true);
      expect(component.buttonProperties.disabled).toBe(true);
    });

    it('Validation - should fail exceed max character limit', () => {
      // repeating 'a' 41 times to increase max 40 length
      const maxChars = 'a'.repeat(41);
      component.form.get('email').setValue(maxChars);

      const invalidEmail = component.form.get('email').invalid;

      expect(invalidEmail).toBe(true);
      expect(component.buttonProperties.disabled).toBe(true);
    });

    it('Validation - should fail invalid email pattern', () => {
      const email = 'kamran@gmail.';
      component.form.get('email').setValue(email);

      const invalidEmailAddress = component.form.get('email').invalid;

      expect(invalidEmailAddress).toBe(true);
      expect(component.buttonProperties.disabled).toBe(true);
    });

    it('Validation - should success', () => {
      const email = 'kamrankhatti@yahoo.com';
      component.form.get('email').setValue(email);

      const validEmail = component.form.get('email').valid;

      expect(validEmail).toBe(true);
    });
  });

  describe('GENDER', () => {
    it('Validation - should fail empty value', () => {
      const invalidGender = component.form.get('gender').invalid;

      expect(invalidGender).toBe(true);
      expect(component.buttonProperties.disabled).toBe(true);
    });

    it('Validation - should success', () => {
      const gender = 'female';
      component.form.get('gender').setValue(gender);

      const validGender = component.form.get('gender').valid;

      expect(validGender).toBe(true);
    });
  });

  describe('ADDRESS', () => {
    it('Validation - should fail empty value', () => {
      const invalidAddress = component.form.get('address').invalid;

      expect(invalidAddress).toBe(true);
      expect(component.buttonProperties.disabled).toBe(true);
    });

    it('Validation - should fail exceed max character limit', () => {
      // repeating 'a' 1001 times to increase max 100 length
      const maxChars = 'a'.repeat(1001);
      component.form.get('address').setValue(maxChars);

      const invalidAddress = component.form.get('address').invalid;

      expect(invalidAddress).toBe(true);
      expect(component.buttonProperties.disabled).toBe(true);
    });

    it('Validation - should success', () => {
      const address = '3 Doris St, North Sydney, NSW 2060';
      component.form.get('address').setValue(address);

      const validAddress = component.form.get('address').valid;

      expect(validAddress).toBe(true);
    });
  });

  describe('AREA OF RECOMMENDATIONS', () => {
    it('Validation - should fail empty value', () => {
      const invalidRec = component.form.get('recommendation').invalid;

      expect(invalidRec).toBe(true);
      expect(component.buttonProperties.disabled).toBe(true);
    });

    it('Validation - should success', () => {
      const recommendations = 'insurance, superannuation';
      component.form.get('recommendation').setValue(recommendations);

      const validRec = component.form.get('recommendation').valid

      expect(validRec).toBe(true);
    });
  });

  describe('SUBMIT FORM', () => {
    it('Validation - should success', () => {
      // set mock value to form fields
      component.form.setValue(mockData);

      expect(component.form.valid).toBe(true);
      expect(component.buttonProperties.disabled).toBe(true);
    });

    it('Submit Form - success', () => {
      // set mock value to form fields
      component.form.setValue(mockData);
      spyOn(component.form, 'reset');

      component.onSubmit();

      expect(component.form.reset).toHaveBeenCalled();
      expect(component.form.reset).toHaveBeenCalledTimes(1);
    });
  });
});
