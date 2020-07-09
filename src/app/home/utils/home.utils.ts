import { Injectable } from '@angular/core';

import { IData } from '../model/home.model';
import { createSpreadSheet } from "../../shared/utils";

export interface IOptions {
  value: any;
  label: string;
}

// setting gender options
export const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

// setting recommendations options
export const recommendationOptions = [
  { label: 'Insurance', value: 'insurance' },
  { label: 'Superannuation', value: 'superannuation' },
  { label: 'Investments', value: 'investments' },
  { label: 'Cashflow', value: 'cashflow' },
  { label: 'Pension', value: 'pension' },
  { label: 'Estate Planning', value: 'estate planning' },
];

/**
 * Home Utility service which contains all utility stuff
 */
@Injectable({ providedIn: 'root'})
export class HomeUtils {
  constructor() {}

  /**
   * static method which gets data as param
   * and parse data and create spread sheet/csv
   */
  static createExcel(data) {
    const filename = 'submissions'
    const columns = [
      'First Name',
      'Last Name',
      'Contact Number',
      'Date of Birth',
      'Email',
      'Gender',
      'Address',
      'Area of Recommendations']

    data = data.map((res: IData) => {
      return {
        ['First Name']: res.first_name,
        ['Last Name']: res.last_name,
        ['Contact Number']: res.phone,
        ['Date of Birth']: res.dob,
        ['Email']: res.email,
        ['Gender']: res.gender,
        ['Address']: res.address,
        ['Area of Recommendations']: res.recommendation
      }
    })

    createSpreadSheet(data, columns, filename)
  }

  /**
   * calculate progress bar percentage depends on each field
   * has a valid value and calculate total percentage and return.
   */
  static calculateProgressPercentage(formData: IData, fieldValidations) {
    let progressPercent = 0;
    Object.entries((formData)).map(([key, value]) => {
      // if form field has value and not validation error then add progress percentage
      if (value && !fieldValidations[key]) {
        progressPercent = progressPercent + 12.5
      }
    })

    return progressPercent
  }
}
