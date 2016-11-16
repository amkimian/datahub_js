# DataHubApi.User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The id is the unique key for a user and is normally set to be the email of the user | [optional] 
**code** | **String** | The code is the unique (upper case) string used for referencing datasets. Short codes (three chars or less are premium) | [optional] 
**accountType** | **String** | The type of account this is. Basic &#x3D; free, Bronze, Silver, Gold, Platinum. | [optional] 
**accountStatus** | **String** | Is the account in good standing? If this is non blank then the account will act as basic and no subscribed datasets will work | [optional] 
**group** | **Boolean** | Whether this entry is for a group or not. | [optional] 
**name** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**gravatar** | **String** |  | [optional] 
**apiKey** | **String** | The api key that can be used to impersonate this user | [optional] 
**password** | **String** |  | [optional] 
**passwordResetToken** | **String** |  | [optional] 
**passwordResetExpires** | **Date** |  | [optional] 
**twitter** | **String** |  | [optional] 
**google** | **String** |  | [optional] 
**github** | **String** |  | [optional] 
**linkedin** | **String** |  | [optional] 
**tokens** | [**[UserTokens]**](UserTokens.md) |  | [optional] 
**stripe** | [**UserStripe**](UserStripe.md) |  | [optional] 
**profile** | [**UserProfile**](UserProfile.md) |  | [optional] 


