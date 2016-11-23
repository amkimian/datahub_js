# DataHubApi.ProgramApi

All URIs are relative to *http://datahub.incapture.net:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPrograms**](ProgramApi.md#getPrograms) | **GET** /programs/get | 


<a name="getPrograms"></a>
# **getPrograms**
> [Program] getPrograms(apiKey, opts)



Retrieve User Programs

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ProgramApi();

var apiKey = "apiKey_example"; // String | User API key

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
apiInstance.getPrograms(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| User API key | 
 **page** | **Integer**| The page to show | [optional] 

### Return type

[**[Program]**](Program.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

