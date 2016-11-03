# DataHubApi.ReleaseApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRelease**](ReleaseApi.md#addRelease) | **POST** /releases/{userId}/{dataSet} | Create a new open release
[**deleteRelease**](ReleaseApi.md#deleteRelease) | **DELETE** /releases/{userId}/{dataSet}/{release} | Delete release information
[**getRelease**](ReleaseApi.md#getRelease) | **GET** /releases/{userId}/{dataSet}/{release} | Get release information
[**publishRelease**](ReleaseApi.md#publishRelease) | **GET** /release/publish/{userId}/{dataSet}/{release} | Publish a release


<a name="addRelease"></a>
# **addRelease**
> GeneralStatus addRelease(userId, dataSet, body, opts)

Create a new open release

This creates a new release in a data set. The release defaults to the open (and therefore unpublished) state. 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ReleaseApi();

var userId = "userId_example"; // String | The id of the user that this dataset is associated with

var dataSet = "dataSet_example"; // String | The id of the data set

var body = new DataHubApi.DataSetRelease(); // DataSetRelease | Release object that defines the element in a data set

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
apiInstance.addRelease(userId, dataSet, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user that this dataset is associated with | 
 **dataSet** | **String**| The id of the data set | 
 **body** | [**DataSetRelease**](DataSetRelease.md)| Release object that defines the element in a data set | 
 **apiKey** | **String**| The user api key | [optional] 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRelease"></a>
# **deleteRelease**
> GeneralStatus deleteRelease(userId, dataSet, release, opts)

Delete release information

This deletes a release 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ReleaseApi();

var userId = "userId_example"; // String | The id of the user that this dataset is associated with

var dataSet = "dataSet_example"; // String | The id of the data set

var release = "release_example"; // String | The id of the release

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
apiInstance.deleteRelease(userId, dataSet, release, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user that this dataset is associated with | 
 **dataSet** | **String**| The id of the data set | 
 **release** | **String**| The id of the release | 
 **apiKey** | **String**| The user api key | [optional] 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRelease"></a>
# **getRelease**
> DataSetRelease getRelease(userId, dataSet, release, opts)

Get release information

This returns information about a release 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ReleaseApi();

var userId = "userId_example"; // String | The id of the user that this dataset is associated with

var dataSet = "dataSet_example"; // String | The id of the data set

var release = "release_example"; // String | The id of the release

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
apiInstance.getRelease(userId, dataSet, release, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user that this dataset is associated with | 
 **dataSet** | **String**| The id of the data set | 
 **release** | **String**| The id of the release | 
 **apiKey** | **String**| The user api key | [optional] 

### Return type

[**DataSetRelease**](DataSetRelease.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="publishRelease"></a>
# **publishRelease**
> DataSetRelease publishRelease(apiKey, userId, dataSet, release)

Publish a release

This marks a release as published 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ReleaseApi();

var apiKey = "apiKey_example"; // String | The user api key

var userId = "userId_example"; // String | The id of the user that this dataset is associated with

var dataSet = "dataSet_example"; // String | The id of the data set

var release = "release_example"; // String | The id of the release


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publishRelease(apiKey, userId, dataSet, release, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **userId** | **String**| The id of the user that this dataset is associated with | 
 **dataSet** | **String**| The id of the data set | 
 **release** | **String**| The id of the release | 

### Return type

[**DataSetRelease**](DataSetRelease.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

