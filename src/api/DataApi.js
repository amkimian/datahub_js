/**
 * Mimir DataHub API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.9
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.DataApi = factory(root.MimirDataHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Data service.
   * @module api/DataApi
   * @version 0.0.9
   */

  /**
   * Constructs a new DataApi. 
   * @alias module:api/DataApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCSVData operation.
     * @callback module:api/DataApi~getCSVDataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a block of CSV data
     * @param {String} apiKey The user api key
     * @param {String} owner The owner of the data element
     * @param {String} dataset The name of the data set
     * @param {String} release The name of the release
     * @param {String} element The element name
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.withHeader Whether to include headers (row 0)
     * @param {Integer} opts.skip which page to show
     * @param {Integer} opts.limit How many records to return
     * @param {module:api/DataApi~getCSVDataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getCSVData = function(apiKey, owner, dataset, release, element, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling getCSVData";
      }

      // verify the required parameter 'owner' is set
      if (owner == undefined || owner == null) {
        throw "Missing the required parameter 'owner' when calling getCSVData";
      }

      // verify the required parameter 'dataset' is set
      if (dataset == undefined || dataset == null) {
        throw "Missing the required parameter 'dataset' when calling getCSVData";
      }

      // verify the required parameter 'release' is set
      if (release == undefined || release == null) {
        throw "Missing the required parameter 'release' when calling getCSVData";
      }

      // verify the required parameter 'element' is set
      if (element == undefined || element == null) {
        throw "Missing the required parameter 'element' when calling getCSVData";
      }


      var pathParams = {
        'owner': owner,
        'dataset': dataset,
        'release': release,
        'element': element
      };
      var queryParams = {
        'withHeader': opts['withHeader'],
        'skip': opts['skip'],
        'limit': opts['limit']
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = null;

      return this.apiClient.callApi(
        '/data/{owner}/{dataset}/{release}/{element}/getCSVBlock', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putCSVData operation.
     * @callback module:api/DataApi~putCSVDataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Writes a block of CSV data
     * @param {String} apiKey The user api key
     * @param {String} owner The owner of the data element
     * @param {String} dataset The name of the data set
     * @param {String} release The name of the release
     * @param {String} element The element name
     * @param {String} data The CSV data to write
     * @param {module:api/DataApi~putCSVDataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putCSVData = function(apiKey, owner, dataset, release, element, data, callback) {
      var postBody = data;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling putCSVData";
      }

      // verify the required parameter 'owner' is set
      if (owner == undefined || owner == null) {
        throw "Missing the required parameter 'owner' when calling putCSVData";
      }

      // verify the required parameter 'dataset' is set
      if (dataset == undefined || dataset == null) {
        throw "Missing the required parameter 'dataset' when calling putCSVData";
      }

      // verify the required parameter 'release' is set
      if (release == undefined || release == null) {
        throw "Missing the required parameter 'release' when calling putCSVData";
      }

      // verify the required parameter 'element' is set
      if (element == undefined || element == null) {
        throw "Missing the required parameter 'element' when calling putCSVData";
      }

      // verify the required parameter 'data' is set
      if (data == undefined || data == null) {
        throw "Missing the required parameter 'data' when calling putCSVData";
      }


      var pathParams = {
        'owner': owner,
        'dataset': dataset,
        'release': release,
        'element': element
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['text/plain'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/data/{owner}/{dataset}/{release}/{element}/csv', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
