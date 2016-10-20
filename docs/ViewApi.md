# MimirDataHubApi.ViewApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserViews**](ViewApi.md#getUserViews) | **GET** /view/getUserViews | 


<a name="getUserViews"></a>
# **getUserViews**
> [DataSetView] getUserViews(apiKey, opts)



Returns view information for datasets of a user

### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.ViewApi();

var apiKey = "apiKey_example"; // String | The user api key

var opts = { 
  'page': 56 // Integer | The page of results to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserViews(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **page** | **Integer**| The page of results to return | [optional] 

### Return type

[**[DataSetView]**](DataSetView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

