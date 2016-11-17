# DataHubApi.DatasetApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findReposByTags**](DatasetApi.md#findReposByTags) | **GET** /marketplace/getByTag | 


<a name="findReposByTags"></a>
# **findReposByTags**
> [Repository] findReposByTags(opts)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DatasetApi();

var opts = { 
  'apiKey': "apiKey_example", // String | The user api key
  'tags': ["tags_example"], // [String] | Tags to filter by
  'page': 56 // Integer | Page to return (defaults to zero)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findReposByTags(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | [optional] 
 **tags** | [**[String]**](String.md)| Tags to filter by | [optional] 
 **page** | **Integer**| Page to return (defaults to zero) | [optional] 

### Return type

[**[Repository]**](Repository.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

