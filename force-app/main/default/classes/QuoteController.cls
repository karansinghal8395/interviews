public with sharing class QuoteController {
    @AuraEnabled(cacheable=true)
    public static QuoteDto getQuoteData(){
        Quote__c quote = [Select id, name, Start_Date__c, EndDate__c from quote__c limit 1];
        QuoteDto result = new QuoteDto(quote);
        System.debug('result: ' + result);
        return result;
    }
}