# MimirDataHubApi.ElementApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addElement**](ElementApi.md#addElement) | **POST** /elements/{userId}/{dataSet}/{release} | Create a new open element
[**deleteElement**](ElementApi.md#deleteElement) | **DELETE** /elements/{userId}/{dataSet}/{release}/{element} | Delete element information
[**elementsUserIdDataSetReleaseElementPost**](ElementApi.md#elementsUserIdDataSetReleaseElementPost) | **POST** /elements/{userId}/{dataSet}/{release}/{element} | Add a data block to an element
[**getElement**](ElementApi.md#getElement) | **GET** /elements/{userId}/{dataSet}/{release}/{element} | Get element information


<a name="addElement"></a>
# **addElement**
> addElement(userId, dataSet, release, opts)

Create a new open element

This creates a new element in a release in a data set. The element defaults to the open (and therefore unpublished) state. 

### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.ElementApi();

var userId = "userId_example"; // String | The id of the user that this dataset is associated with

var dataSet = "dataSet_example"; // String | The id of the data set

var release = "release_example"; // String | The id of the release this element belongs to

var opts = { 
  'apiKey': "apiKey_example", // String | The user api key
  'body': new MimirDataHubApi.DataElement() // DataElement | Element object that defines the element in a data set
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addElement(userId, dataSet, release, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user that this dataset is associated with | 
 **dataSet** | **String**| The id of the data set | 
 **release** | **String**| The id of the release this element belongs to | 
 **apiKey** | **String**| The user api key | [optional] 
 **body** | [**DataElement**](DataElement.md)| Element object that defines the element in a data set | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteElement"></a>
# **deleteElement**
> deleteElement(userId, dataSet, release, element, opts)

Delete element information

This removes an element 

### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.ElementApi();

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
    console.log('API called successfully.');
  }
};
apiInstance.deleteElement(userId, dataSet, release, element, opts, callback);
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

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="elementsUserIdDataSetReleaseElementPost"></a>
# **elementsUserIdDataSetReleaseElementPost**
> BlockId elementsUserIdDataSetReleaseElementPost(userId, dataSet, release, element, opts)

Add a data block to an element

Create a new block aganst an element

### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.ElementApi();

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

<a name="getElement"></a>
# **getElement**
> DataElement getElement(userId, dataSet, release, element, opts)

Get element information

This returns information about an element 

### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.ElementApi();

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
apiInstance.getElement(userId, dataSet, release, element, opts, callback);
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

[**DataElement**](DataElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

