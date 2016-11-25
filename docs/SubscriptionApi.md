# DataHubApi.SubscriptionApi

All URIs are relative to *http://datahub.incapture.net:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscription**](SubscriptionApi.md#createSubscription) | **POST** /subscription/{repocode}/{usercode} | Create a new subscription


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

