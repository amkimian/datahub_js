# MimirDataHubApi.AdminApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](AdminApi.md#createUser) | **POST** /admin/user | 


<a name="createUser"></a>
# **createUser**
> User createUser(adminKey, body)



### Example
```javascript
var MimirDataHubApi = require('mimir-data-hub-api');

var apiInstance = new MimirDataHubApi.AdminApi()

var adminKey = "adminKey_example"; // {String} The admin user api key

var body = new MimirDataHubApi.User(); // {User} A new user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createUser(adminKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminKey** | **String**| The admin user api key | 
 **body** | [**User**](User.md)| A new user | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

