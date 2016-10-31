(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/User', '../model/GeneralError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/User'), require('../model/GeneralError'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.AdminApi = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.User, root.MimirDataHubApi.GeneralError);
  }
}(this, function(ApiClient, User, GeneralError) {
  'use strict';

  /**
   * Admin service.
   * @module api/AdminApi
   * @version 0.0.10
   */

  /**
   * Constructs a new AdminApi. 
   * @alias module:api/AdminApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUser operation.
     * @callback module:api/AdminApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} adminKey The admin user api key
     * @param {module:model/User} body A new user
     * @param {module:api/AdminApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.createUser = function(adminKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'adminKey' is set
      if (adminKey == undefined || adminKey == null) {
        throw "Missing the required parameter 'adminKey' when calling createUser";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createUser";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'admin_key': adminKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/admin/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
