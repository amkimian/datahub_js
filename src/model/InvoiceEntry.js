(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.InvoiceEntry = factory(root.MimirDataHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InvoiceEntry model module.
   * @module model/InvoiceEntry
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>InvoiceEntry</code>.
   * A line entry in an invoice
   * @alias module:model/InvoiceEntry
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>InvoiceEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoiceEntry} obj Optional instance to populate.
   * @return {module:model/InvoiceEntry} The populated <code>InvoiceEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('dataset')) {
        obj['dataset'] = ApiClient.convertToType(data['dataset'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;

  /**
   * @member {String} dataset
   */
  exports.prototype['dataset'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {Integer} amount
   */
  exports.prototype['amount'] = undefined;




  return exports;
}));
