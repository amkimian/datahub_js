# DataHubApi.UserApi

All URIs are relative to *http://datahub.incapture.net:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkCodeFree**](UserApi.md#checkCodeFree) | **GET** /admin/checkCode | 
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /admin/user/{userId} | 
[**getUser**](UserApi.md#getUser) | **GET** /admin/user/{userId} | 
[**getUserByCode**](UserApi.md#getUserByCode) | **GET** /admin/getUserByCode | 
[**getUserByEmail**](UserApi.md#getUserByEmail) | **GET** /admin/getUserByEmail | 
[**getUserByTag**](UserApi.md#getUserByTag) | **GET** /admin/getUserByTag | 
[**getUserByToken**](UserApi.md#getUserByToken) | **GET** /admin/getUserByToken | 
[**putUser**](UserApi.md#putUser) | **PUT** /admin/user/{userId} | 


<a name="checkCodeFree"></a>
# **checkCodeFree**
> GeneralStatus checkCodeFree(adminKey, code)



Check that a user code is free for assigning to a user

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.UserApi();

var adminKey = "adminKey_example"; // String | The admin user api key

var code = "code_example"; // String | The code to check


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkCodeFree(adminKey, code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminKey** | **String**| The admin user api key | 
 **code** | **String**| The code to check | 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteUser"></a>
# **deleteUser**
> GeneralStatus deleteUser(userId, opts)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.UserApi();

var userId = "userId_example"; // String | 

var opts = { 
  'adminKey': "adminKey_example", // String | The admin user api key
  'apiKey': "apiKey_example" // String | The user api key
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUser(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **adminKey** | **String**| The admin user api key | [optional] 
 **apiKey** | **String**| The user api key | [optional] 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> User getUser(userId, opts)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.UserApi();

var userId = "userId_example"; // String | 

var opts = { 
  'adminKey': "adminKey_example", // String | The admin user api key
  'apiKey': "apiKey_example" // String | The user api key
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **adminKey** | **String**| The admin user api key | [optional] 
 **apiKey** | **String**| The user api key | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserByCode"></a>
# **getUserByCode**
> User getUserByCode(adminKey, code)



Retrieves a user given its code

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.UserApi();

var adminKey = "adminKey_example"; // String | The admin user api key

var code = "code_example"; // String | The code to search for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserByCode(adminKey, code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminKey** | **String**| The admin user api key | 
 **code** | **String**| The code to search for | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserByEmail"></a>
# **getUserByEmail**
> User getUserByEmail(adminKey, email)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.UserApi();

var adminKey = "adminKey_example"; // String | The admin user api key

var email = "email_example"; // String | The email to search for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserByEmail(adminKey, email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminKey** | **String**| The admin user api key | 
 **email** | **String**| The email to search for | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserByTag"></a>
# **getUserByTag**
> User getUserByTag(adminKey, tagName, tagValue)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.UserApi();

var adminKey = "adminKey_example"; // String | The admin user api key

var tagName = "tagName_example"; // String | The tag field to search (e.g. github)

var tagValue = "tagValue_example"; // String | The tag value to search


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserByTag(adminKey, tagName, tagValue, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminKey** | **String**| The admin user api key | 
 **tagName** | **String**| The tag field to search (e.g. github) | 
 **tagValue** | **String**| The tag value to search | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserByToken"></a>
# **getUserByToken**
> User getUserByToken(adminKey, token, expiry)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.UserApi();

var adminKey = "adminKey_example"; // String | The admin user api key

var token = "token_example"; // String | The token passed by an email

var expiry = new Date("2013-10-20"); // Date | The latest date for which the token is valid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserByToken(adminKey, token, expiry, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminKey** | **String**| The admin user api key | 
 **token** | **String**| The token passed by an email | 
 **expiry** | **Date**| The latest date for which the token is valid | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putUser"></a>
# **putUser**
> GeneralStatus putUser(userId, body, opts)



### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.UserApi();

var userId = "userId_example"; // String | 

var body = new DataHubApi.User(); // User | 

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
apiInstance.putUser(userId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **body** | [**User**](User.md)|  | 
 **apiKey** | **String**| The user api key | [optional] 

### Return type

[**GeneralStatus**](GeneralStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

