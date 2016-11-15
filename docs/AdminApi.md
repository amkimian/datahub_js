# DataHubApi.AdminApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](AdminApi.md#createUser) | **POST** /admin/user | 


<a name="createUser"></a>
# **createUser**
> User createUser(adminKey, body)



Create a new user in the system, usually initiated by the web app

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.AdminApi();

var adminKey = "adminKey_example"; // String | The admin user api key

var body = new DataHubApi.User(); // User | A new user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUser(adminKey, body, callback);
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

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

