import { FormBuilder, Validators } from '@angular/forms';

export interface IData {
  first_name: string;
  last_name: string;
  phone: number;
  dob: string;
  email: string;
  gender: string;
  address: string;
  recommendation: string;
}

export const mockData: IData = {
  first_name: 'Kamran',
  last_name: 'Khatti',
  phone: 1234567890,
  dob: '2002-07-15',
  email: 'kamrankhatti@yahoo.com',
  gender: 'male',
  address: 'Clifton block #04 Karachi',
  recommendation: 'superannuation, insurance'
}

export class HomeModel {
  static form() {
    const fb = new FormBuilder();
    /**
     * adding some basic validations due to limited time (only two hours to finish :))
     * we can play around form validations as Angular has pretty cool built-in
     * validation rules same as other frameworks.
     */
    return fb.group(
      {
        first_name: [null, [Validators.required, Validators.maxLength(30)]],
        last_name: [null, [Validators.required, Validators.maxLength(30)]],
        phone: [null, [
          Validators.required,
          Validators.pattern('^[0-9]{10}$')]], // regex to match exact 10 digits
        dob: [null, Validators.required],
        email: [null, [
          Validators.email,
          Validators.required,
          Validators.maxLength(40)]],
        gender: [null, Validators.required],
        address: [null, [Validators.required, Validators.maxLength(100)]],
        recommendation: [null, Validators.required],
      }
    );
  }
}
