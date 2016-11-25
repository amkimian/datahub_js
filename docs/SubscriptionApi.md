# DataHubApi.SubscriptionApi

All URIs are relative to *http://datahub.incapture.net:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscription**](SubscriptionApi.md#createSubscription) | **POST** /subscription/{repocode}/{usercode} | Create a new subscription
[**getUserSubscriptions**](SubscriptionApi.md#getUserSubscriptions) | **GET** /subs | Get the repositories that the current user is subscribed to


<a name="createSubscription"></a>
# **createSubscription**
> createSubscription(adminKey, repocode, usercode, body)

Create a new subscription

This is an admin api call that creates a subscription between a user and a repository

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.SubscriptionApi();

var adminKey = "adminKey_example"; // String | The admin key for the environment

var repocode = "repocode_example"; // String | The repocode that this subscription relates to

var usercode = "usercode_example"; // String | The usercode (shortcode) of the user that is the beneficiary of the subscription

var body = new DataHubApi.Subscription(); // Subscription | A new subscription


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createSubscription(adminKey, repocode, usercode, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminKey** | **String**| The admin key for the environment | 
 **repocode** | **String**| The repocode that this subscription relates to | 
 **usercode** | **String**| The usercode (shortcode) of the user that is the beneficiary of the subscription | 
 **body** | [**Subscription**](Subscription.md)| A new subscription | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserSubscriptions"></a>
# **getUserSubscriptions**
> [RepositoryView] getUserSubscriptions(apiKey, opts)

Get the repositories that the current user is subscribed to

Retrieves the repositories a user is subscribed to

### Example
```javascript
var DataHubApi = require('data_hub_api');

var apiInstance = new DataHubApi.SubscriptionApi();

var apiKey = "apiKey_example"; // String | The user api key

var opts = { 
  'skip': 56, // Integer | The amount of records to skip
  'limit': 56 // Integer | The maximum amount of records to be returned (the size of the page)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserSubscriptions(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The user api key | 
 **skip** | **Integer**| The amount of records to skip | [optional] 
 **limit** | **Integer**| The maximum amount of records to be returned (the size of the page) | [optional] 

### Return type

[**[RepositoryView]**](RepositoryView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

