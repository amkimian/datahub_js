# MimirDataHubApi.QueryApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryData**](QueryApi.md#queryData) | **GET** /query/{owner}/{dataset}/{release}/{element} | 


<a name="queryData"></a>
# **queryData**
> queryData(apiKey, owner, dataset, release, element, query, opts)



Querys data in a KV element

### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.QueryApi();

var apiKey = "apiKey_example"; // String | The user api key

var owner = "owner_example"; // String | 

var dataset = "dataset_example"; // String | 

var release = "release_example"; // String | 

var element = "element_example"; // String | 

var query = "query_example"; // String | The query, currently a string rep of a JSON mongo query

var opts = { 
  'page': 56, // Integer | The page of data to return
  'limit': 56 // Integer | The maximum rows to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.queryData(apiKey, owner, dataset, release, element, query, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **owner** | **String**|  | 
 **dataset** | **String**|  | 
 **release** | **String**|  | 
 **element** | **String**|  | 
 **query** | **String**| The query, currently a string rep of a JSON mongo query | 
 **page** | **Integer**| The page of data to return | [optional] 
 **limit** | **Integer**| The maximum rows to return | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

