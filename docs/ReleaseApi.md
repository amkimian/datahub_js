# DataHubApi.ReleaseApi

All URIs are relative to *http://datahub.incapture.net:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRelease**](ReleaseApi.md#addRelease) | **POST** /release/{releasecode} | Create a new open release
[**deleteRelease**](ReleaseApi.md#deleteRelease) | **DELETE** /release/{releasecode} | Delete release information
[**getRelease**](ReleaseApi.md#getRelease) | **GET** /release/{releasecode} | Get release information
[**getReleases**](ReleaseApi.md#getReleases) | **GET** /releases/{repocode} | Get releases for a repository
[**publishRelease**](ReleaseApi.md#publishRelease) | **GET** /release/publish/{releasecode} | Publish a release
[**updateRelease**](ReleaseApi.md#updateRelease) | **PUT** /release/{releasecode} | Update a release


<a name="addRelease"></a>
# **addRelease**
> GeneralStatus addRelease(apiKey, releasecode, body)

Create a new open release

This creates a new release in a data set. The release defaults to the open (and therefore unpublished) state. 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ReleaseApi();

var apiKey = "apiKey_example"; // String | The user api key

var releasecode = "releasecode_example"; // String | The id of the new release

var body = new DataHubApi.DataSetRelease(); // DataSetRelease | Release object that defines the element in a data set


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addRelease(apiKey, releasecode, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **releasecode** | **String**| The id of the new release | 
 **body** | [**DataSetRelease**](DataSetRelease.md)| Release object that defines the element in a data set | 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRelease"></a>
# **deleteRelease**
> GeneralStatus deleteRelease(apiKey, releasecode)

Delete release information

This deletes a release 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ReleaseApi();

var apiKey = "apiKey_example"; // String | The user api key

var releasecode = "releasecode_example"; // String | The id of the release


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteRelease(apiKey, releasecode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **releasecode** | **String**| The id of the release | 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRelease"></a>
# **getRelease**
> DataSetRelease getRelease(apiKey, releasecode)

Get release information

This returns information about a release 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ReleaseApi();

var apiKey = "apiKey_example"; // String | The user api key

var releasecode = "releasecode_example"; // String | The id of the release


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelease(apiKey, releasecode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **releasecode** | **String**| The id of the release | 

### Return type

[**DataSetRelease**](DataSetRelease.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReleases"></a>
# **getReleases**
> [DataSetRelease] getReleases(apiKey, repocode)

Get releases for a repository

Get all releases for a repository (with maybe paging later)

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ReleaseApi();

var apiKey = "apiKey_example"; // String | The user api key

var repocode = "repocode_example"; // String | The id of the repository


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReleases(apiKey, repocode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **repocode** | **String**| The id of the repository | 

### Return type

[**[DataSetRelease]**](DataSetRelease.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="publishRelease"></a>
# **publishRelease**
> DataSetRelease publishRelease(apiKey, releasecode)

Publish a release

This marks a release as published 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ReleaseApi();

var apiKey = "apiKey_example"; // String | The user api key

var releasecode = "releasecode_example"; // String | The id of the release


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publishRelease(apiKey, releasecode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **releasecode** | **String**| The id of the release | 

### Return type

[**DataSetRelease**](DataSetRelease.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateRelease"></a>
# **updateRelease**
> GeneralStatus updateRelease(apiKey, releasecode, body)

Update a release

This updates a release in a repository. 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ReleaseApi();

var apiKey = "apiKey_example"; // String | The user api key

var releasecode = "releasecode_example"; // String | The id of the new release

var body = new DataHubApi.DataSetRelease(); // DataSetRelease | Release object that defines the element in a data set


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRelease(apiKey, releasecode, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **releasecode** | **String**| The id of the new release | 
 **body** | [**DataSetRelease**](DataSetRelease.md)| Release object that defines the element in a data set | 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

