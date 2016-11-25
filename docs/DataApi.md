# DataHubApi.DataApi

All URIs are relative to *http://datahub.incapture.net:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCSVData**](DataApi.md#getCSVData) | **GET** /data/{elementcode}/csv | 
[**putCSVData**](DataApi.md#putCSVData) | **POST** /data/{elementcode}/csv | 
[**putKVData**](DataApi.md#putKVData) | **POST** /data/{elementcode}/kv | 


<a name="getCSVData"></a>
# **getCSVData**
> &#39;String&#39; getCSVData(apiKey, elementcode, opts)



Returns a block of CSV data

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DataApi();

var apiKey = "apiKey_example"; // String | The user api key

var elementcode = "elementcode_example"; // String | The code of the element

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
apiInstance.getCSVData(apiKey, elementcode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **elementcode** | **String**| The code of the element | 
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
> GeneralStatus putCSVData(apiKey, elementcode, data)



Writes a block of CSV data

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DataApi();

var apiKey = "apiKey_example"; // String | The user api key

var elementcode = "elementcode_example"; // String | The code of the data element

var data = "data_example"; // String | The CSV data to write


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putCSVData(apiKey, elementcode, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **elementcode** | **String**| The code of the data element | 
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
> GeneralStatus putKVData(apiKey, elementcode, fields)



Writes a block of key/value style data

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DataApi();

var apiKey = "apiKey_example"; // String | The user api key

var elementcode = "elementcode_example"; // String | The code of the data element

var fields = new DataHubApi.KVBody(); // KVBody | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putKVData(apiKey, elementcode, fields, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **elementcode** | **String**| The code of the data element | 
 **fields** | [**KVBody**](KVBody.md)|  | 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

