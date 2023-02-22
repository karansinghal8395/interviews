/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement } from "lwc";

export default class QuoteTotalSummary extends LightningElement {

    handleAdjustQuoteButtonClick(event){
        this.dispatchEvent(new CustomEvent('adjustbuttonclick'));
    }
}
 