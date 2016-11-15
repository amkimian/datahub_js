# DataHubApi.RepoApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRepository**](RepoApi.md#addRepository) | **POST** /repos/{userId} | Create a new repository, associated with the given user id


<a name="addRepository"></a>
# **addRepository**
> GeneralStatus addRepository(userApiKey, userId, body)

Create a new repository, associated with the given user id

This creates a new repository that can then be added to through releases and datasets 

### Example
```javascript
var DataHubApi = require('data_hub_api');
var defaultClient = DataHubApi.ApiClient.default;

// Configure API key authorization: userApiKey
var userApiKey = defaultClient.authentications['userApiKey'];
userApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//userApiKey.apiKeyPrefix = 'Token';

var apiInstance = new DataHubApi.RepoApi();

var userApiKey = "userApiKey_example"; // String | The user API key for this operation

var userId = "userId_example"; // String | The id of the user that this dataset is associated with

var body = new DataHubApi.DataSet(); // DataSet | DataSet object that defines the element


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addRepository(userApiKey, userId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userApiKey** | **String**| The user API key for this operation | 
 **userId** | **String**| The id of the user that this dataset is associated with | 
 **body** | [**DataSet**](DataSet.md)| DataSet object that defines the element | 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

[userApiKey](../README.md#userApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

