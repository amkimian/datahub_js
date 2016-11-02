# DataHubApi.DatasetApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDataSet**](DatasetApi.md#addDataSet) | **POST** /datasets/{userId} | Create a new data set, associated with the given user id
[**deleteDataSet**](DatasetApi.md#deleteDataSet) | **DELETE** /datasets/{userId}/{dataSet} | Remove a data set and all releases and elements
[**findDataSetsByTags**](DatasetApi.md#findDataSetsByTags) | **GET** /marketplace/getByTag | 
[**findUserDataSets**](DatasetApi.md#findUserDataSets) | **GET** /user/getDataSets | 
[**getDataSetById**](DatasetApi.md#getDataSetById) | **GET** /datasets/{userId}/{dataSet} | Find a dataset for a user and a dataset
[**getFront**](DatasetApi.md#getFront) | **GET** /marketplace/getFront | 
[**getMyDataSets**](DatasetApi.md#getMyDataSets) | **GET** /marketplace/getMyDataSets | 
[**updateDataSet**](DatasetApi.md#updateDataSet) | **PUT** /datasets/{userId}/{dataSet} | Update an existing data set.


<a name="addDataSet"></a>
# **addDataSet**
> addDataSet(userId, body, opts)

Create a new data set, associated with the given user id

This creates a new data set that can then be added to 

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DatasetApi();

var userId = "userId_example"; // String | The id of the user that this dataset is associated with

var body = new DataHubApi.DataSet(); // DataSet | DataSet object that defines the element

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
apiInstance.addDataSet(userId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user that this dataset is associated with | 
 **body** | [**DataSet**](DataSet.md)| DataSet object that defines the element | 
 **apiKey** | **String**| The user api key | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDataSet"></a>
# **deleteDataSet**
> deleteDataSet(userId, dataSet, opts)

Remove a data set and all releases and elements



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DatasetApi();

var userId = "userId_example"; // String | The id of the user owning this dataset

var dataSet = "dataSet_example"; // String | The id of the dataset

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
apiInstance.deleteDataSet(userId, dataSet, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user owning this dataset | 
 **dataSet** | **String**| The id of the dataset | 
 **apiKey** | **String**| The user api key | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="findDataSetsByTags"></a>
# **findDataSetsByTags**
> [DataSet] findDataSetsByTags(opts)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DatasetApi();

var opts = { 
  'apiKey': "apiKey_example", // String | The user api key
  'tags': ["tags_example"], // [String] | Tags to filter by
  'page': 56 // Integer | Page to return (defaults to zero)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findDataSetsByTags(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | [optional] 
 **tags** | [**[String]**](String.md)| Tags to filter by | [optional] 
 **page** | **Integer**| Page to return (defaults to zero) | [optional] 

### Return type

[**[DataSet]**](DataSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findUserDataSets"></a>
# **findUserDataSets**
> [DataSet] findUserDataSets(apiKey, opts)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DatasetApi();

var apiKey = "apiKey_example"; // String | The user api key

var opts = { 
  'tags': ["tags_example"], // [String] | Tags to filter by
  'page': 56, // Integer | Page to return (defaults to zero)
  'subscribed': true // Boolean | If true, also return subscribed data sets
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findUserDataSets(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **tags** | [**[String]**](String.md)| Tags to filter by | [optional] 
 **page** | **Integer**| Page to return (defaults to zero) | [optional] 
 **subscribed** | **Boolean**| If true, also return subscribed data sets | [optional] 

### Return type

[**[DataSet]**](DataSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDataSetById"></a>
# **getDataSetById**
> DataSet getDataSetById(userId, dataSet, opts)

Find a dataset for a user and a dataset

Returns a data set

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DatasetApi();

var userId = "userId_example"; // String | The id of the user owning this dataset

var dataSet = "dataSet_example"; // String | The id of the dataset

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
apiInstance.getDataSetById(userId, dataSet, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user owning this dataset | 
 **dataSet** | **String**| The id of the dataset | 
 **apiKey** | **String**| The user api key | [optional] 

### Return type

[**DataSet**](DataSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFront"></a>
# **getFront**
> [DataSet] getFront(opts)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DatasetApi();

var opts = { 
  'page': 56, // Integer | Page to return (defaults to zero)
  'limit': 56 // Integer | The maximum amount of records to be returned (the size of the page)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFront(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Page to return (defaults to zero) | [optional] 
 **limit** | **Integer**| The maximum amount of records to be returned (the size of the page) | [optional] 

### Return type

[**[DataSet]**](DataSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMyDataSets"></a>
# **getMyDataSets**
> [DataSet] getMyDataSets(apiKey, opts)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DatasetApi();

var apiKey = "apiKey_example"; // String | The user api key

var opts = { 
  'page': 56 // Integer | Page to return (defaults to zero)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMyDataSets(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **page** | **Integer**| Page to return (defaults to zero) | [optional] 

### Return type

[**[DataSet]**](DataSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDataSet"></a>
# **updateDataSet**
> updateDataSet(apiKey, owner, dataset, body)

Update an existing data set.



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.DatasetApi();

var apiKey = "apiKey_example"; // String | The user api key

var owner = "owner_example"; // String | The id of the user that this dataset is associated with

var dataset = "dataset_example"; // String | The data set id to update

var body = new DataHubApi.DataSet(); // DataSet | DataSet object that defines the element


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateDataSet(apiKey, owner, dataset, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **owner** | **String**| The id of the user that this dataset is associated with | 
 **dataset** | **String**| The data set id to update | 
 **body** | [**DataSet**](DataSet.md)| DataSet object that defines the element | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

