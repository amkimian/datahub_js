# MimirDataHubApi.SchemeApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createScheme**](SchemeApi.md#createScheme) | **POST** /scheme/{id} | 
[**deleteScheme**](SchemeApi.md#deleteScheme) | **DELETE** /scheme/{id} | Remove a scheme
[**getScheme**](SchemeApi.md#getScheme) | **GET** /scheme/{id} | 
[**updateScheme**](SchemeApi.md#updateScheme) | **PUT** /scheme/{id} | Update an existing scheme.


<a name="createScheme"></a>
# **createScheme**
> createScheme(adminKey, id, body)



Create a scheme

### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.SchemeApi();

var adminKey = "adminKey_example"; // String | The admin api key

var id = "id_example"; // String | The id of the scheme

var body = new MimirDataHubApi.Scheme(); // Scheme | DataSet object that defines the element


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createScheme(adminKey, id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminKey** | **String**| The admin api key | 
 **id** | **String**| The id of the scheme | 
 **body** | [**Scheme**](Scheme.md)| DataSet object that defines the element | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteScheme"></a>
# **deleteScheme**
> deleteScheme(adminKey, id)

Remove a scheme



### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.SchemeApi();

var adminKey = "adminKey_example"; // String | The admin key

var id = "id_example"; // String | The id of the scheme


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteScheme(adminKey, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminKey** | **String**| The admin key | 
 **id** | **String**| The id of the scheme | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getScheme"></a>
# **getScheme**
> Scheme getScheme(apiKey, id)



retrieve a scheme

### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.SchemeApi();

var apiKey = "apiKey_example"; // String | user api key

var id = "id_example"; // String | The id of the scheme


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getScheme(apiKey, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| user api key | 
 **id** | **String**| The id of the scheme | 

### Return type

[**Scheme**](Scheme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateScheme"></a>
# **updateScheme**
> updateScheme(apiKey, id, body)

Update an existing scheme.

Update scheme

### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.SchemeApi();

var apiKey = "apiKey_example"; // String | The user api key

var id = "id_example"; // String | The id of the scheme

var body = new MimirDataHubApi.Scheme(); // Scheme | Scheme object that defines the element


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateScheme(apiKey, id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **id** | **String**| The id of the scheme | 
 **body** | [**Scheme**](Scheme.md)| Scheme object that defines the element | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

