# MimirDataHubApi.DataElement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The id of this data element | [optional] 
**dataset** | **String** | The data set this element relates to | [optional] 
**owner** | **String** | The user this element relates to | [optional] 
**release** | **String** | The release this element relates to | [optional] 
**mimeType** | **String** | The mime type of the data element | [optional] 
**description** | **String** | Some information about this element | [optional] 
**type** | **String** | The underlying data type of this element | [optional] 
**schema** | **String** | The underlying format of the data | [optional] 
**state** | **String** | The state of this element (is it published?) | [optional] 
**storage** | **String** | Where blocks are stored for this element | [optional] 
**content** | **String** | If the type is text, this is the text | [optional] 
**blockId** | **Integer** | If the type is csv, this is the next block when added | [optional] 
**keyField** | **String** | If the type is keyed, this is the key field that represents the unique key | [optional] 
**csvInfo** | [**DataElementCsvInfo**](DataElementCsvInfo.md) |  | [optional] 


