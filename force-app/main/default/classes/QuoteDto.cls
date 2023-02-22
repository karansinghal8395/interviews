public with sharing class QuoteDto extends BaseDto {
  @AuraEnabled
  public Date endDate;
  @AuraEnabled
  public String name;
  @AuraEnabled
  public Date startDate;

  public QuoteDto() {
  }

  public QuoteDto(Quote__c quote) {
    super(quote);
    this.endDate = quote.EndDate__c;
    this.name = quote.name;
    this.startDate = quote.Start_Date__c;
  }

  public QuoteDto returnQuoteDTOObj(){
    return this;
  }

  public override SObject refreshSo() {
    return null;
  }
}
