public with sharing class editQuoteHandler {
    public editQuoteHandler() {    }

    @AuraEnabled
    public static QuoteDto fetchQuote(String QuoteId){
        try {
            quote__c QuoteObj = [select id,EndDate__c,Start_Date__c,name from Quote__c where id=:QuoteId];
            QuoteDto qdto = new QuoteDto(QuoteObj);
            qdto = qdto.returnQuoteDTOObj();
            return qdto;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static void saveQuote(QuoteDto QuoteObj){
        try {
            quote__c qt = new quote__c();
            qt.id = QuoteObj.id;
            qt.Start_Date__c = QuoteObj.startDate;
            qt.EndDate__c = QuoteObj.endDate;
            update qt;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}