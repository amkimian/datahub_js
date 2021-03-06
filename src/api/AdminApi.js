/**
 * DataHub API
 * DataHub API
 *
 * OpenAPI spec version: 0.0.12
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/User', 'model/GeneralError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/User'), require('../model/GeneralError'));
  } else {
    // Browser globals (root is window)
    if (!root.DataHubApi) {
      root.DataHubApi = {};
    }
    root.DataHubApi.AdminApi = factory(root.DataHubApi.ApiClient, root.DataHubApi.User, root.DataHubApi.GeneralError);
  }
}(this, function(ApiClient, User, GeneralError) {
  'use strict';

  /**
   * Admin service.
   * @module api/AdminApi
   * @version 0.0.12
   */

  /**
   * Constructs a new AdminApi. 
   * @alias module:api/AdminApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
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
     * Create a new user in the system, usually initiated by the web app
     * @param {String} adminKey The admin user api key
     * @param {module:model/User} body A new user
     * @param {module:api/AdminApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
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
