# MimirDataHubApi.MarketplaceApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFront**](MarketplaceApi.md#getFront) | **GET** /marketplace/getFront | 


<a name="getFront"></a>
# **getFront**
> [DataSet] getFront(opts)



### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.MarketplaceApi();

var opts = { 
  'page': 56, // Integer | Page to return (defaults to zero)
  'limit': 56 // Integer | The maximum amount of records to be returned (the size of the page)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFront(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Page to return (defaults to zero) | [optional] 
 **limit** | **Integer**| The maximum amount of records to be returned (the size of the page) | [optional] 

### Return type

[**[DataSet]**](DataSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

