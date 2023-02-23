/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api, wire } from "lwc";
import getQuoteData from '@salesforce/apex/QuoteController.getQuoteData';
import { getRecord,getFieldValue} from 'lightning/uiRecordApi';
/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_lightning_ui_api_record */
export default class EditQuote extends LightningElement {
  @api recordId;
  contactData;
  error;

  @wire(getQuoteData)
  quoteData({data, error}){
    if(data){
      console.log(data);
      this.contactData = data;
      this.error = undefined;
    }else if(error){
      this.contactData = undefined;
      this.error = error;
    }
  };

  renderedCallback() {}
}
