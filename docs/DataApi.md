# DataHubApi.DataApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCSVData**](DataApi.md#getCSVData) | **GET** /data/{owner}/{dataset}/{release}/{element}/getCSVBlock | 
[**putCSVData**](DataApi.md#putCSVData) | **POST** /data/{owner}/{dataset}/{release}/{element}/csv | 
[**putKVData**](DataApi.md#putKVData) | **POST** /data/{owner}/{dataset}/{release}/{element}/kv | 


<a name="getCSVData"></a>
# **getCSVData**
> &#39;String&#39; getCSVData(apiKey, owner, dataset, release, element, opts)



Returns a block of CSV data

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DataApi();

var apiKey = "apiKey_example"; // String | The user api key

var owner = "owner_example"; // String | The owner of the data element

var dataset = "dataset_example"; // String | The name of the data set

var release = "release_example"; // String | The name of the release

var element = "element_example"; // String | The element name

var opts = { 
  'withHeader': true, // Boolean | Whether to include headers (row 0)
  'skip': 56, // Integer | which page to show
  'limit': 56 // Integer | How many records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCSVData(apiKey, owner, dataset, release, element, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **owner** | **String**| The owner of the data element | 
 **dataset** | **String**| The name of the data set | 
 **release** | **String**| The name of the release | 
 **element** | **String**| The element name | 
 **withHeader** | **Boolean**| Whether to include headers (row 0) | [optional] 
 **skip** | **Integer**| which page to show | [optional] 
 **limit** | **Integer**| How many records to return | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="putCSVData"></a>
# **putCSVData**
> GeneralStatus putCSVData(apiKey, owner, dataset, release, element, data)



Writes a block of CSV data

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DataApi();

var apiKey = "apiKey_example"; // String | The user api key

var owner = "owner_example"; // String | The owner of the data element

var dataset = "dataset_example"; // String | The name of the data set

var release = "release_example"; // String | The name of the release

var element = "element_example"; // String | The element name

var data = "data_example"; // String | The CSV data to write


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putCSVData(apiKey, owner, dataset, release, element, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **owner** | **String**| The owner of the data element | 
 **dataset** | **String**| The name of the data set | 
 **release** | **String**| The name of the release | 
 **element** | **String**| The element name | 
 **data** | **String**| The CSV data to write | 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: Not defined

<a name="putKVData"></a>
# **putKVData**
> GeneralStatus putKVData(apiKey, owner, dataset, release, element, fields)



Writes a block of key/value style data

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DataApi();

var apiKey = "apiKey_example"; // String | The user api key

var owner = "owner_example"; // String | The owner of the data element

var dataset = "dataset_example"; // String | The name of the data set

var release = "release_example"; // String | The name of the release

var element = "element_example"; // String | The element name

var fields = new DataHubApi.KVBody(); // KVBody | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putKVData(apiKey, owner, dataset, release, element, fields, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **owner** | **String**| The owner of the data element | 
 **dataset** | **String**| The name of the data set | 
 **release** | **String**| The name of the release | 
 **element** | **String**| The element name | 
 **fields** | [**KVBody**](KVBody.md)|  | 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

