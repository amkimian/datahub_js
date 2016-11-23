# DataHubApi.RepoApi

All URIs are relative to *http://datahub.incapture.net:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRepository**](RepoApi.md#addRepository) | **POST** /repos/{userId} | Create a new repository, associated with the given user id
[**deleteRepository**](RepoApi.md#deleteRepository) | **DELETE** /repos/{repocode} | Remove a repository and all releases and data sets
[**findReposByTags**](RepoApi.md#findReposByTags) | **GET** /marketplace/getByTag | 
[**findRepositories**](RepoApi.md#findRepositories) | **GET** /user/getRepositories | 
[**getFront**](RepoApi.md#getFront) | **GET** /marketplace/getFront | 
[**getMyRepositories**](RepoApi.md#getMyRepositories) | **GET** /marketplace/getMyRepositories | 
[**getRepositories**](RepoApi.md#getRepositories) | **GET** /repos | Retrieve current users Repositories
[**getRepositoryByCode**](RepoApi.md#getRepositoryByCode) | **GET** /repos/{repocode} | Find a repository given its code (code is owner + repo short code)
[**updateRepository**](RepoApi.md#updateRepository) | **PUT** /repos/{repocode} | Update an existing repository.


<a name="addRepository"></a>
# **addRepository**
> GeneralStatus addRepository(userApiKey, userId, body)

Create a new repository, associated with the given user id

This creates a new repository that can then be added to through releases and datasets 

### Example
```javascript
var DataHubApi = require('data_hub_api');
var defaultClient = DataHubApi.ApiClient.default;

// Configure API key authorization: userApiKey
var userApiKey = defaultClient.authentications['userApiKey'];
userApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//userApiKey.apiKeyPrefix = 'Token';

var apiInstance = new DataHubApi.RepoApi();

var userApiKey = "userApiKey_example"; // String | The user API key for this operation

var userId = "userId_example"; // String | The id of the user that this dataset is associated with

var body = new DataHubApi.Repository(); // Repository | Repository object that defines the element


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addRepository(userApiKey, userId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userApiKey** | **String**| The user API key for this operation | 
 **userId** | **String**| The id of the user that this dataset is associated with | 
 **body** | [**Repository**](Repository.md)| Repository object that defines the element | 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

[userApiKey](../README.md#userApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRepository"></a>
# **deleteRepository**
> GeneralStatus deleteRepository(repocode, opts)

Remove a repository and all releases and data sets



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.RepoApi();

var repocode = "repocode_example"; // String | The code of the repository

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
apiInstance.deleteRepository(repocode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repocode** | **String**| The code of the repository | 
 **apiKey** | **String**| The user api key | [optional] 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="findReposByTags"></a>
# **findReposByTags**
> [Repository] findReposByTags(opts)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.RepoApi();

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
apiInstance.findReposByTags(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | [optional] 
 **tags** | [**[String]**](String.md)| Tags to filter by | [optional] 
 **page** | **Integer**| Page to return (defaults to zero) | [optional] 

### Return type

[**[Repository]**](Repository.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findRepositories"></a>
# **findRepositories**
> [Repository] findRepositories(apiKey, opts)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.RepoApi();

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
apiInstance.findRepositories(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **tags** | [**[String]**](String.md)| Tags to filter by | [optional] 
 **page** | **Integer**| Page to return (defaults to zero) | [optional] 
 **subscribed** | **Boolean**| If true, also return subscribed data sets | [optional] 

### Return type

[**[Repository]**](Repository.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFront"></a>
# **getFront**
> [Repository] getFront(opts)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.RepoApi();

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

[**[Repository]**](Repository.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMyRepositories"></a>
# **getMyRepositories**
> [Repository] getMyRepositories(apiKey, opts)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.RepoApi();

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
apiInstance.getMyRepositories(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **page** | **Integer**| Page to return (defaults to zero) | [optional] 

### Return type

[**[Repository]**](Repository.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRepositories"></a>
# **getRepositories**
> [Repository] getRepositories(userApiKey, opts)

Retrieve current users Repositories

Retrieve the repositories for a given user (owned by)

### Example
```javascript
var DataHubApi = require('data_hub_api');
var defaultClient = DataHubApi.ApiClient.default;

// Configure API key authorization: userApiKey
var userApiKey = defaultClient.authentications['userApiKey'];
userApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//userApiKey.apiKeyPrefix = 'Token';

var apiInstance = new DataHubApi.RepoApi();

var userApiKey = "userApiKey_example"; // String | The user API key for this operation

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
apiInstance.getRepositories(userApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userApiKey** | **String**| The user API key for this operation | 
 **page** | **Integer**| The page of results to return | [optional] 

### Return type

[**[Repository]**](Repository.md)

### Authorization

[userApiKey](../README.md#userApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRepositoryByCode"></a>
# **getRepositoryByCode**
> Repository getRepositoryByCode(repocode, opts)

Find a repository given its code (code is owner + repo short code)

Returns a repository

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.RepoApi();

var repocode = "repocode_example"; // String | The code of the repo

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
apiInstance.getRepositoryByCode(repocode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repocode** | **String**| The code of the repo | 
 **apiKey** | **String**| The user api key | [optional] 

### Return type

[**Repository**](Repository.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateRepository"></a>
# **updateRepository**
> GeneralStatus updateRepository(apiKey, repocode, body)

Update an existing repository.



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.RepoApi();

var apiKey = "apiKey_example"; // String | The user api key

var repocode = "repocode_example"; // String | The code of the repository

var body = new DataHubApi.Repository(); // Repository | Repository object that defines the element


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRepository(apiKey, repocode, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **repocode** | **String**| The code of the repository | 
 **body** | [**Repository**](Repository.md)| Repository object that defines the element | 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

