/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api } from "lwc";
import fetchQuote from '@salesforce/apex/editQuoteHandler.fetchQuote';
import EndDate from '@salesforce/schema/Quote__c.EndDate__c';
import StartDate from '@salesforce/schema/Quote__c.Start_Date__c';
import { showToastEvent } from 'lightning/platformShowToastEvent';

export default class EditQuote extends LightningElement {
  @api recordId;
  objectApiName = 'Quote__c';
  fields = [EndDate,StartDate];

  quoteData = {};
  error = {};

  connectedCallback(){
    this.fetchQuoteHandler();
  }

  handleSubmit(event) {
    event.preventDefault(); // stop the form from submitting
    const fields = event.detail.fields;
    this.template.querySelector('lightning-record-form').submit(fields);
    //this.showToast();
  }


  fetchQuoteHandler() {
    console.log('method reached');
    fetchQuote({ QuoteId:  this.recordId})
        .then(result => {
          console.log('result: '+JSON.stringify(result));
            this.quoteData = result;
        })
        .catch(error => {
            this.error = error;
        });
  }

  showToast() {
    const event = new ShowToastEvent({
      title: 'Saved Quote Details.',
      message: 'Saved Quote Details.',
      variant: 'success',
      mode: 'dismissable'
  });
    this.dispatchEvent(event);
}

  handleClick(event){
    this.quoteData.StartDate = this.template.querySelector('.startDate').value;
    this.quoteData.endDate = this.template.querySelector('.endDate').value;
    console.log('Quote: '+ JSON.stringify(this.quoteData));
  }
}
