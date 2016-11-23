# DataHubApi.QueryApi

All URIs are relative to *http://datahub.incapture.net:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryData**](QueryApi.md#queryData) | **GET** /query/{elementcode} | 


<a name="queryData"></a>
# **queryData**
> &#39;String&#39; queryData(apiKey, elementcode, query, opts)



Querys data in a KV element

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.QueryApi();

var apiKey = "apiKey_example"; // String | The user api key

var elementcode = "elementcode_example"; // String | 

var query = "query_example"; // String | The query, currently a string rep of a JSON mongo query

var opts = { 
  'page': 56, // Integer | The page of data to return
  'limit': 56 // Integer | The maximum rows to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queryData(apiKey, elementcode, query, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **elementcode** | **String**|  | 
 **query** | **String**| The query, currently a string rep of a JSON mongo query | 
 **page** | **Integer**| The page of data to return | [optional] 
 **limit** | **Integer**| The maximum rows to return | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

