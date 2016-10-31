(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Invoice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Invoice'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.InvoiceApi = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.Invoice);
  }
}(this, function(ApiClient, Invoice) {
  'use strict';

  /**
   * Invoice service.
   * @module api/InvoiceApi
   * @version 0.0.10
   */

  /**
   * Constructs a new InvoiceApi. 
   * @alias module:api/InvoiceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addSubscriptionToInvoice operation.
     * @callback module:api/InvoiceApi~addSubscriptionToInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Invoice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds the subscription to the current users current invoice
     * @param {String} apiKey The user api key
     * @param {String} owner The owner of the data element
     * @param {String} dataset The name of the data set
     * @param {module:api/InvoiceApi~addSubscriptionToInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Invoice}
     */
    this.addSubscriptionToInvoice = function(apiKey, owner, dataset, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling addSubscriptionToInvoice";
      }

      // verify the required parameter 'owner' is set
      if (owner == undefined || owner == null) {
        throw "Missing the required parameter 'owner' when calling addSubscriptionToInvoice";
      }

      // verify the required parameter 'dataset' is set
      if (dataset == undefined || dataset == null) {
        throw "Missing the required parameter 'dataset' when calling addSubscriptionToInvoice";
      }


      var pathParams = {
        'owner': owner,
        'dataset': dataset
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Invoice;

      return this.apiClient.callApi(
        '/invoice/addSubscription/{owner}/{dataset}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCart operation.
     * @callback module:api/InvoiceApi~getCartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Invoice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieve the current open oneoff invoice
     * @param {String} apiKey The user api key
     * @param {module:api/InvoiceApi~getCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Invoice}
     */
    this.getCart = function(apiKey, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling getCart";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Invoice;

      return this.apiClient.callApi(
        '/invoice/retrieveCurrent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoices operation.
     * @callback module:api/InvoiceApi~getInvoicesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Invoice>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieve a page of invoices
     * @param {String} apiKey The user api key
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page The page to show
     * @param {module:api/InvoiceApi~getInvoicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Invoice>}
     */
    this.getInvoices = function(apiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling getInvoices";
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
      var accepts = [];
      var returnType = [Invoice];

      return this.apiClient.callApi(
        '/invoice/retrieve', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the processCart operation.
     * @callback module:api/InvoiceApi~processCartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Invoice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Process a successful payment
     * @param {String} apiKey The user api key
     * @param {module:api/InvoiceApi~processCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Invoice}
     */
    this.processCart = function(apiKey, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling processCart";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Invoice;

      return this.apiClient.callApi(
        '/invoice/processCurrent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
