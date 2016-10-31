(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DataElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DataElement'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.ElementApi = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.DataElement);
  }
}(this, function(ApiClient, DataElement) {
  'use strict';

  /**
   * Element service.
   * @module api/ElementApi
   * @version 0.0.10
   */

  /**
   * Constructs a new ElementApi. 
   * @alias module:api/ElementApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addElement operation.
     * @callback module:api/ElementApi~addElementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new open element
     * This creates a new element in a release in a data set. The element defaults\nto the open (and therefore unpublished) state.\n
     * @param {String} userId The id of the user that this dataset is associated with
     * @param {String} dataSet The id of the data set
     * @param {String} release The id of the release this element belongs to
     * @param {module:model/DataElement} body Element object that defines the element in a data set
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {module:api/ElementApi~addElementCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addElement = function(userId, dataSet, release, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling addElement";
      }

      // verify the required parameter 'dataSet' is set
      if (dataSet == undefined || dataSet == null) {
        throw "Missing the required parameter 'dataSet' when calling addElement";
      }

      // verify the required parameter 'release' is set
      if (release == undefined || release == null) {
        throw "Missing the required parameter 'release' when calling addElement";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addElement";
      }


      var pathParams = {
        'userId': userId,
        'dataSet': dataSet,
        'release': release
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': opts['apiKey']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/elements/{userId}/{dataSet}/{release}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteElement operation.
     * @callback module:api/ElementApi~deleteElementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete element information
     * This removes an element\n
     * @param {String} userId The id of the user that this dataset is associated with
     * @param {String} dataSet The id of the data set
     * @param {String} release The id of the release
     * @param {String} element The id of the element
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {module:api/ElementApi~deleteElementCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteElement = function(userId, dataSet, release, element, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteElement";
      }

      // verify the required parameter 'dataSet' is set
      if (dataSet == undefined || dataSet == null) {
        throw "Missing the required parameter 'dataSet' when calling deleteElement";
      }

      // verify the required parameter 'release' is set
      if (release == undefined || release == null) {
        throw "Missing the required parameter 'release' when calling deleteElement";
      }

      // verify the required parameter 'element' is set
      if (element == undefined || element == null) {
        throw "Missing the required parameter 'element' when calling deleteElement";
      }


      var pathParams = {
        'userId': userId,
        'dataSet': dataSet,
        'release': release,
        'element': element
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': opts['apiKey']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/elements/{userId}/{dataSet}/{release}/{element}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getElement operation.
     * @callback module:api/ElementApi~getElementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataElement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get element information
     * This returns information about an element\n
     * @param {String} userId The id of the user that this dataset is associated with
     * @param {String} dataSet The id of the data set
     * @param {String} release The id of the release
     * @param {String} element The id of the element
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {module:api/ElementApi~getElementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DataElement}
     */
    this.getElement = function(userId, dataSet, release, element, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getElement";
      }

      // verify the required parameter 'dataSet' is set
      if (dataSet == undefined || dataSet == null) {
        throw "Missing the required parameter 'dataSet' when calling getElement";
      }

      // verify the required parameter 'release' is set
      if (release == undefined || release == null) {
        throw "Missing the required parameter 'release' when calling getElement";
      }

      // verify the required parameter 'element' is set
      if (element == undefined || element == null) {
        throw "Missing the required parameter 'element' when calling getElement";
      }


      var pathParams = {
        'userId': userId,
        'dataSet': dataSet,
        'release': release,
        'element': element
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': opts['apiKey']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DataElement;

      return this.apiClient.callApi(
        '/elements/{userId}/{dataSet}/{release}/{element}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateElement operation.
     * @callback module:api/ElementApi~updateElementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataElement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an element
     * Updates an element
     * @param {String} userId The id of the user that this dataset is associated with
     * @param {String} dataSet The id of the data set
     * @param {String} release The id of the release
     * @param {String} element The id of the element
     * @param {module:model/DataElement} body The updated element
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {module:api/ElementApi~updateElementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DataElement}
     */
    this.updateElement = function(userId, dataSet, release, element, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling updateElement";
      }

      // verify the required parameter 'dataSet' is set
      if (dataSet == undefined || dataSet == null) {
        throw "Missing the required parameter 'dataSet' when calling updateElement";
      }

      // verify the required parameter 'release' is set
      if (release == undefined || release == null) {
        throw "Missing the required parameter 'release' when calling updateElement";
      }

      // verify the required parameter 'element' is set
      if (element == undefined || element == null) {
        throw "Missing the required parameter 'element' when calling updateElement";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateElement";
      }


      var pathParams = {
        'userId': userId,
        'dataSet': dataSet,
        'release': release,
        'element': element
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': opts['apiKey']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DataElement;

      return this.apiClient.callApi(
        '/elements/{userId}/{dataSet}/{release}/{element}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
