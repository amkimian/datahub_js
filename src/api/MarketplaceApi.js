(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DataSet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DataSet'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.MarketplaceApi = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.DataSet);
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
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
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
     * data is of type: {Array.<module:model/DataSet>}
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
