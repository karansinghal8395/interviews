public with sharing class QuoteDto extends BaseDto {
  @AuraEnabled
  public Date startDate{ get; set; }
  @AuraEnabled
  public Date endDate{ get; set; }
  @AuraEnabled
  public String name {get; set;}

  public QuoteDto() {
  }

  public QuoteDto(Quote__c quote) {
    super(quote);
    this.name = quote.name;
    this.startDate = quote.Start_Date__c;
    this.endDate = quote.EndDate__c;
  }

  public override SObject refreshSo() {
    return null;
  }
}
