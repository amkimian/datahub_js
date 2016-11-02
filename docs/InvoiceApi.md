# DataHubApi.InvoiceApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubscriptionToInvoice**](InvoiceApi.md#addSubscriptionToInvoice) | **GET** /invoice/addSubscription/{owner}/{dataset} | 
[**getCart**](InvoiceApi.md#getCart) | **GET** /invoice/retrieveCurrent | 
[**getInvoices**](InvoiceApi.md#getInvoices) | **GET** /invoice/retrieve | 
[**processCart**](InvoiceApi.md#processCart) | **GET** /invoice/processCurrent | 


<a name="addSubscriptionToInvoice"></a>
# **addSubscriptionToInvoice**
> Invoice addSubscriptionToInvoice(apiKey, owner, dataset)



Adds the subscription to the current users current invoice

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.InvoiceApi();

var apiKey = "apiKey_example"; // String | The user api key

var owner = "owner_example"; // String | The owner of the data element

var dataset = "dataset_example"; // String | The name of the data set


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addSubscriptionToInvoice(apiKey, owner, dataset, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **owner** | **String**| The owner of the data element | 
 **dataset** | **String**| The name of the data set | 

### Return type

[**Invoice**](Invoice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCart"></a>
# **getCart**
> Invoice getCart(apiKey)



retrieve the current open oneoff invoice

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.InvoiceApi();

var apiKey = "apiKey_example"; // String | The user api key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCart(apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 

### Return type

[**Invoice**](Invoice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getInvoices"></a>
# **getInvoices**
> [Invoice] getInvoices(apiKey, opts)



retrieve a page of invoices

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.InvoiceApi();

var apiKey = "apiKey_example"; // String | The user api key

var opts = { 
  'page': 56 // Integer | The page to show
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInvoices(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **page** | **Integer**| The page to show | [optional] 

### Return type

[**[Invoice]**](Invoice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="processCart"></a>
# **processCart**
> Invoice processCart(apiKey)



Process a successful payment

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.InvoiceApi();

var apiKey = "apiKey_example"; // String | The user api key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.processCart(apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 

### Return type

[**Invoice**](Invoice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

