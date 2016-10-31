(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './InvoiceEntry', './ModelDate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InvoiceEntry'), require('./ModelDate'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.Invoice = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.InvoiceEntry, root.MimirDataHubApi.ModelDate);
  }
}(this, function(ApiClient, InvoiceEntry, ModelDate) {
  'use strict';

  /**
   * The Invoice model module.
   * @module model/Invoice
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>Invoice</code>.
   * @alias module:model/Invoice
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Invoice} obj Optional instance to populate.
   * @return {module:model/Invoice} The populated <code>Invoice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('oneoff')) {
        obj['oneoff'] = ApiClient.convertToType(data['oneoff'], 'Boolean');
      }
      if (data.hasOwnProperty('invoiceDate')) {
        obj['invoiceDate'] = ApiClient.convertToType(data['invoiceDate'], ModelDate);
      }
      if (data.hasOwnProperty('year')) {
        obj['year'] = ApiClient.convertToType(data['year'], 'Integer');
      }
      if (data.hasOwnProperty('month')) {
        obj['month'] = ApiClient.convertToType(data['month'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [InvoiceEntry]);
      }
      if (data.hasOwnProperty('subtotal')) {
        obj['subtotal'] = ApiClient.convertToType(data['subtotal'], 'Integer');
      }
      if (data.hasOwnProperty('tax')) {
        obj['tax'] = ApiClient.convertToType(data['tax'], 'Integer');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * The user this invoice relates to
   * @member {String} user
   */
  exports.prototype['user'] = undefined;

  /**
   * The invoice id
   * @member {String} number
   */
  exports.prototype['number'] = undefined;

  /**
   * Whether this is an out of cycle (not monthly) invoice
   * @member {Boolean} oneoff
   */
  exports.prototype['oneoff'] = undefined;

  /**
   * The date of this invoice
   * @member {module:model/ModelDate} invoiceDate
   */
  exports.prototype['invoiceDate'] = undefined;

  /**
   * @member {Integer} year
   */
  exports.prototype['year'] = undefined;

  /**
   * The month this invoice applies to (the cycle)
   * @member {Integer} month
   */
  exports.prototype['month'] = undefined;

  /**
   * The status of this invoice (open, paid, cancelled)
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * The entries of this invoice
   * @member {Array.<module:model/InvoiceEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * Subtotal before tax in cents
   * @member {Integer} subtotal
   */
  exports.prototype['subtotal'] = undefined;

  /**
   * Any tax due on this invoice in cents
   * @member {Integer} tax
   */
  exports.prototype['tax'] = undefined;

  /**
   * The total amount of the invoice (in cents in case the tax)
   * @member {Integer} total
   */
  exports.prototype['total'] = undefined;




  return exports;
}));
