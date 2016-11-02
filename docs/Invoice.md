# DataHubApi.Invoice

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **String** | The user this invoice relates to | [optional] 
**_number** | **String** | The invoice id | [optional] 
**oneoff** | **Boolean** | Whether this is an out of cycle (not monthly) invoice | [optional] 
**invoiceDate** | **Date** | The date of this invoice | [optional] 
**year** | **Integer** |  | [optional] 
**month** | **Integer** | The month this invoice applies to (the cycle) | [optional] 
**status** | **String** | The status of this invoice (open, paid, cancelled) | [optional] 
**entries** | [**[InvoiceEntry]**](InvoiceEntry.md) | The entries of this invoice | [optional] 
**subtotal** | **Integer** | Subtotal before tax in cents | [optional] 
**tax** | **Integer** | Any tax due on this invoice in cents | [optional] 
**total** | **Integer** | The total amount of the invoice (in cents in case the tax) | [optional] 


