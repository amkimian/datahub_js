# MimirDataHubApi.BlockApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**elementsUserIdDataSetReleaseElementPost**](BlockApi.md#elementsUserIdDataSetReleaseElementPost) | **POST** /elements/{userId}/{dataSet}/{release}/{element} | Add a data block to an element


<a name="elementsUserIdDataSetReleaseElementPost"></a>
# **elementsUserIdDataSetReleaseElementPost**
> BlockId elementsUserIdDataSetReleaseElementPost(userId, dataSet, release, element, opts)

Add a data block to an element

Create a new block aganst an element

### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.BlockApi();

var userId = "userId_example"; // String | The id of the user that this dataset is associated with

var dataSet = "dataSet_example"; // String | The id of the data set

var release = "release_example"; // String | The id of the release

var element = "element_example"; // String | The id of the element

var opts = { 
  'apiKey': "apiKey_example" // String | The user api key
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.elementsUserIdDataSetReleaseElementPost(userId, dataSet, release, element, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user that this dataset is associated with | 
 **dataSet** | **String**| The id of the data set | 
 **release** | **String**| The id of the release | 
 **element** | **String**| The id of the element | 
 **apiKey** | **String**| The user api key | [optional] 

### Return type

[**BlockId**](BlockId.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

