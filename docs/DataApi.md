# MimirDataHubApi.DataApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCSVData**](DataApi.md#getCSVData) | **GET** /data/{owner}/{dataset}/{release}/{element}/getCSVBlock | 
[**putCSVData**](DataApi.md#putCSVData) | **POST** /data/{owner}/{dataset}/{release}/{element}/csv | 


<a name="getCSVData"></a>
# **getCSVData**
> getCSVData(apiKey, owner, dataset, release, element, opts)



Returns a block of CSV data

### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.DataApi();

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
    console.log('API called successfully.');
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

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="putCSVData"></a>
# **putCSVData**
> putCSVData(apiKey, owner, dataset, release, element, data)



Writes a block of CSV data

### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.DataApi();

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
    console.log('API called successfully.');
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

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: Not defined

