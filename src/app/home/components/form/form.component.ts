import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { HomeModel, IData } from '../../model/home.model';
import { INodButtonProps } from '../../../shared/components';
import { genderOptions, HomeUtils, IOptions, recommendationOptions } from '../../utils/home.utils';

@Component({
  selector: 'nod-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit, OnDestroy {
  // setting initial button properties
  buttonProperties: INodButtonProps = {
    disabled: true,
    class: 'primary',
    text: 'Generate CSV'
  }
  formValidations;
  progressBar: number;
  // destroy subject
  destroy$ = new Subject<null>();
  // setting form from model
  form: FormGroup = HomeModel.form();
  // getting gender options from utils
  genderOptions: IOptions[] = genderOptions;
  // getting recommendation options from utils
  recommendationOptions: IOptions[] = recommendationOptions;

  constructor() {}

  onSubmit() {
    if (this.form.invalid) {
      return
    }

    // once form has no error create csv
    HomeUtils.createExcel([this.form.value])

    // reset form after submit
    this.form.reset()
  }

  onDateChange(date: string) {
    this.form.get('dob').setValue(date);
  }

  ngOnInit(): void {
    /* on form value changes track the form status (valid or invalid)
     * and set each field status valid or invalid once user touches the field
     * (field is dirty if user touches default no errors shown)
    */
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((formData: IData) => {
      this.buttonProperties = { ...this.buttonProperties, disabled: this.form.invalid };
      this.formValidations = {
        first_name: this.form.get('first_name').dirty && this.form.get('first_name').invalid,
        last_name: this.form.get('last_name').dirty && this.form.get('last_name').invalid,
        phone: this.form.get('phone').dirty && this.form.get('phone').invalid,
        dob: this.form.get('dob').dirty && this.form.get('dob').invalid,
        email: this.form.get('email').dirty && this.form.get('email').invalid,
        address: this.form.get('address').dirty && this.form.get('address').invalid,
        gender: this.form.get('gender').dirty && this.form.get('gender').invalid,
        recommendation: this.form.get('recommendation').dirty && this.form.get('recommendation').invalid
      }

      this.progressBar = HomeUtils.calculateProgressPercentage(formData, this.formValidations)
    });
  }

  ngOnDestroy() {
    // destroy the observable stream to prevent memory leak
    this.destroy$.next();
    this.destroy$.complete();
  }
}
