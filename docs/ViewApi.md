# MimirDataHubApi.ViewApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDataSetReleases**](ViewApi.md#getDataSetReleases) | **GET** /view/releases/{userId}/{dataset} | 
[**getReleaseElements**](ViewApi.md#getReleaseElements) | **GET** /view/elements/{userId}/{dataset}/{release} | 
[**getUserViews**](ViewApi.md#getUserViews) | **GET** /view/getUserViews | 


<a name="getDataSetReleases"></a>
# **getDataSetReleases**
> [DataElement] getDataSetReleases(apiKey, userId, dataset)



Returns releases for a given data set

### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.ViewApi();

var apiKey = "apiKey_example"; // String | The user api key

var userId = "userId_example"; // String | The user id that owns the data set

var dataset = "dataset_example"; // String | The id of the data set


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDataSetReleases(apiKey, userId, dataset, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **userId** | **String**| The user id that owns the data set | 
 **dataset** | **String**| The id of the data set | 

### Return type

[**[DataElement]**](DataElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReleaseElements"></a>
# **getReleaseElements**
> [DataSetRelease] getReleaseElements(apiKey, userId, dataset, release)



Returns the element information for a given release

### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.ViewApi();

var apiKey = "apiKey_example"; // String | The user api key

var userId = "userId_example"; // String | 

var dataset = "dataset_example"; // String | 

var release = "release_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReleaseElements(apiKey, userId, dataset, release, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **userId** | **String**|  | 
 **dataset** | **String**|  | 
 **release** | **String**|  | 

### Return type

[**[DataSetRelease]**](DataSetRelease.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

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

