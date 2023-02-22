/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement,api } from "lwc";

export default class AdjustQuotePrice extends LightningElement {
  @api adjustedAmountLabel = "Adjusted Amount";
  @api adjustedAmount = 0;
}
