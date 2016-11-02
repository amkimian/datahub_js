/**
 * DataHub API
 * DataHub API
 *
 * OpenAPI spec version: 0.0.10
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
    define(['ApiClient', 'model/DataSet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DataSet'));
  } else {
    // Browser globals (root is window)
    if (!root.DataHubApi) {
      root.DataHubApi = {};
    }
    root.DataHubApi.MarketplaceApi = factory(root.DataHubApi.ApiClient, root.DataHubApi.DataSet);
  }
}(this, function(ApiClient, DataSet) {
  'use strict';

  /**
   * Marketplace service.
   * @module api/MarketplaceApi
   * @version 0.0.10
   */

  /**
   * Constructs a new MarketplaceApi. 
   * @alias module:api/MarketplaceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getFront operation.
     * @callback module:api/MarketplaceApi~getFrontCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DataSet>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page Page to return (defaults to zero)
     * @param {Integer} opts.limit The maximum amount of records to be returned (the size of the page)
     * @param {module:api/MarketplaceApi~getFrontCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DataSet>}
     */
    this.getFront = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [DataSet];

      return this.apiClient.callApi(
        '/marketplace/getFront', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
