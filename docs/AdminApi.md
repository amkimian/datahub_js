# MimirDataHubApi.AdminApi

All URIs are relative to *http://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](AdminApi.md#createUser) | **POST** /admin/user | 


<a name="createUser"></a>
# **createUser**
> createUser(adminKey, opts)



### Example
```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var apiInstance = new MimirDataHubApi.AdminApi();

var adminKey = "adminKey_example"; // String | The admin user api key

var opts = { 
  'body': new MimirDataHubApi.User() // User | A new user
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createUser(adminKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminKey** | **String**| The admin user api key | 
 **body** | [**User**](User.md)| A new user | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

