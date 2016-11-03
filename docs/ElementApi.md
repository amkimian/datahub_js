# DataHubApi.ElementApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addElement**](ElementApi.md#addElement) | **POST** /elements/{userId}/{dataSet}/{release} | Create a new open element
[**deleteElement**](ElementApi.md#deleteElement) | **DELETE** /elements/{userId}/{dataSet}/{release}/{element} | Delete element information
[**getElement**](ElementApi.md#getElement) | **GET** /elements/{userId}/{dataSet}/{release}/{element} | Get element information
[**updateElement**](ElementApi.md#updateElement) | **PUT** /elements/{userId}/{dataSet}/{release}/{element} | Updates an element


<a name="addElement"></a>
# **addElement**
> GeneralStatus addElement(userId, dataSet, release, body, opts)

Create a new open element

This creates a new element in a release in a data set. The element defaults to the open (and therefore unpublished) state. 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ElementApi();

var userId = "userId_example"; // String | The id of the user that this dataset is associated with

var dataSet = "dataSet_example"; // String | The id of the data set

var release = "release_example"; // String | The id of the release this element belongs to

var body = new DataHubApi.DataElement(); // DataElement | Element object that defines the element in a data set

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
apiInstance.addElement(userId, dataSet, release, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user that this dataset is associated with | 
 **dataSet** | **String**| The id of the data set | 
 **release** | **String**| The id of the release this element belongs to | 
 **body** | [**DataElement**](DataElement.md)| Element object that defines the element in a data set | 
 **apiKey** | **String**| The user api key | [optional] 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteElement"></a>
# **deleteElement**
> GeneralStatus deleteElement(userId, dataSet, release, element, opts)

Delete element information

This removes an element 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ElementApi();

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

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getElement"></a>
# **getElement**
> DataElement getElement(userId, dataSet, release, element, opts)

Get element information

This returns information about an element 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ElementApi();

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

<a name="updateElement"></a>
# **updateElement**
> DataElement updateElement(userId, dataSet, release, element, body, opts)

Updates an element

Updates an element

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ElementApi();

var userId = "userId_example"; // String | The id of the user that this dataset is associated with

var dataSet = "dataSet_example"; // String | The id of the data set

var release = "release_example"; // String | The id of the release

var element = "element_example"; // String | The id of the element

var body = new DataHubApi.DataElement(); // DataElement | The updated element

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
apiInstance.updateElement(userId, dataSet, release, element, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user that this dataset is associated with | 
 **dataSet** | **String**| The id of the data set | 
 **release** | **String**| The id of the release | 
 **element** | **String**| The id of the element | 
 **body** | [**DataElement**](DataElement.md)| The updated element | 
 **apiKey** | **String**| The user api key | [optional] 

### Return type

[**DataElement**](DataElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

