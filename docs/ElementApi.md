# DataHubApi.ElementApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addElement**](ElementApi.md#addElement) | **POST** /elements/{releasecode} | Create a new open element
[**deleteElement**](ElementApi.md#deleteElement) | **DELETE** /element/{elementcode} | Delete element information
[**getElement**](ElementApi.md#getElement) | **GET** /element/{elementcode} | Get element information
[**getElements**](ElementApi.md#getElements) | **GET** /elements/{releasecode} | Get elements for this release
[**updateElement**](ElementApi.md#updateElement) | **PUT** /element/{elementcode} | Updates an element


<a name="addElement"></a>
# **addElement**
> GeneralStatus addElement(apiKey, releasecode, body)

Create a new open element

This creates a new element in a release in a data set. The element defaults to the open (and therefore unpublished) state. 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ElementApi();

var apiKey = "apiKey_example"; // String | The user api key

var releasecode = "releasecode_example"; // String | The code of the release this element is associated with

var body = new DataHubApi.DataElement(); // DataElement | Element object that defines the element in a data set


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addElement(apiKey, releasecode, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **releasecode** | **String**| The code of the release this element is associated with | 
 **body** | [**DataElement**](DataElement.md)| Element object that defines the element in a data set | 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteElement"></a>
# **deleteElement**
> GeneralStatus deleteElement(apiKey, elementcode)

Delete element information

This removes an element 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ElementApi();

var apiKey = "apiKey_example"; // String | The user api key

var elementcode = "elementcode_example"; // String | The code of the element


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteElement(apiKey, elementcode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **elementcode** | **String**| The code of the element | 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getElement"></a>
# **getElement**
> DataElement getElement(apiKey, elementcode)

Get element information

This returns information about an element 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ElementApi();

var apiKey = "apiKey_example"; // String | The user api key

var elementcode = "elementcode_example"; // String | The code of the element


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElement(apiKey, elementcode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **elementcode** | **String**| The code of the element | 

### Return type

[**DataElement**](DataElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getElements"></a>
# **getElements**
> [DataElement] getElements(apiKey, releasecode)

Get elements for this release

Get elements for this release

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ElementApi();

var apiKey = "apiKey_example"; // String | The user api key

var releasecode = "releasecode_example"; // String | The code of the release this element is associated with


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElements(apiKey, releasecode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **releasecode** | **String**| The code of the release this element is associated with | 

### Return type

[**[DataElement]**](DataElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateElement"></a>
# **updateElement**
> DataElement updateElement(apiKey, elementcode, body)

Updates an element

Updates an element

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.ElementApi();

var apiKey = "apiKey_example"; // String | The user api key

var elementcode = "elementcode_example"; // String | The code of the element

var body = new DataHubApi.DataElement(); // DataElement | The updated element


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateElement(apiKey, elementcode, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **elementcode** | **String**| The code of the element | 
 **body** | [**DataElement**](DataElement.md)| The updated element | 

### Return type

[**DataElement**](DataElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

