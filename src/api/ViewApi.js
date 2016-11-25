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
    define(['ApiClient', 'model/Subscription', 'model/DataSetView'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Subscription'), require('../model/DataSetView'));
  } else {
    // Browser globals (root is window)
    if (!root.DataHubApi) {
      root.DataHubApi = {};
    }
    root.DataHubApi.ViewApi = factory(root.DataHubApi.ApiClient, root.DataHubApi.Subscription, root.DataHubApi.DataSetView);
  }
}(this, function(ApiClient, Subscription, DataSetView) {
  'use strict';

  /**
   * View service.
   * @module api/ViewApi
   * @version 0.0.12
   */

  /**
   * Constructs a new ViewApi. 
   * @alias module:api/ViewApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getUserSubscriptions operation.
     * @callback module:api/ViewApi~getUserSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Subscription>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiKey The user api key
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page The page of results to return
     * @param {module:api/ViewApi~getUserSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Subscription>}
     */
    this.getUserSubscriptions = function(apiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling getUserSubscriptions";
      }


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page']
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Subscription];

      return this.apiClient.callApi(
        '/view/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserViews operation.
     * @callback module:api/ViewApi~getUserViewsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DataSetView>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns view information for datasets of a user
     * @param {String} apiKey The user api key
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page The page of results to return
     * @param {module:api/ViewApi~getUserViewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DataSetView>}
     */
    this.getUserViews = function(apiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling getUserViews";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey,
        'page': opts['page']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [DataSetView];

      return this.apiClient.callApi(
        '/view/getUserViews', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
