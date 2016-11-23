# DataHubApi.SchemaApi

All URIs are relative to *http://datahub.incapture.net:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createScheme**](SchemaApi.md#createScheme) | **POST** /scheme/{id} | 
[**deleteScheme**](SchemaApi.md#deleteScheme) | **DELETE** /scheme/{id} | Remove a scheme
[**getScheme**](SchemaApi.md#getScheme) | **GET** /scheme/{id} | 
[**getSchemes**](SchemaApi.md#getSchemes) | **GET** /schemes/get | 
[**updateScheme**](SchemaApi.md#updateScheme) | **PUT** /scheme/{id} | Update an existing scheme.


<a name="createScheme"></a>
# **createScheme**
> GeneralStatus createScheme(adminKey, id, body)



Create a scheme

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.SchemaApi();

var adminKey = "adminKey_example"; // String | The admin api key

var id = "id_example"; // String | The id of the scheme

var body = new DataHubApi.Scheme(); // Scheme | DataSet object that defines the element


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
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

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteScheme"></a>
# **deleteScheme**
> GeneralStatus deleteScheme(adminKey, id)

Remove a scheme



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.SchemaApi();

var adminKey = "adminKey_example"; // String | The admin key

var id = "id_example"; // String | The id of the scheme


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
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

[**GeneralStatus**](GeneralStatus.md)

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
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.SchemaApi();

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

<a name="getSchemes"></a>
# **getSchemes**
> [Scheme] getSchemes(adminKey, opts)



Retrieve schemes

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.SchemaApi();

var adminKey = "adminKey_example"; // String | The admin api key

var opts = { 
  'page': 56, // Integer | The page of schemes to return
  'limit': 56 // Integer | The limit of schemes to return (the page size)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSchemes(adminKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminKey** | **String**| The admin api key | 
 **page** | **Integer**| The page of schemes to return | [optional] 
 **limit** | **Integer**| The limit of schemes to return (the page size) | [optional] 

### Return type

[**[Scheme]**](Scheme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateScheme"></a>
# **updateScheme**
> GeneralStatus updateScheme(apiKey, id, body)

Update an existing scheme.

Update scheme

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.SchemaApi();

var apiKey = "apiKey_example"; // String | The user api key

var id = "id_example"; // String | The id of the scheme

var body = new DataHubApi.Scheme(); // Scheme | Scheme object that defines the element


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
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

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

