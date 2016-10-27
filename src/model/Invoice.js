/**
 * Mimir DataHub API
 * Mimir DataHub API
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
    define(['ApiClient', 'model/InvoiceEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InvoiceEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.Invoice = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.InvoiceEntry);
  }
}(this, function(ApiClient, InvoiceEntry) {
  'use strict';




  /**
   * The Invoice model module.
   * @module model/Invoice
   * @version 0.0.9
   */

  /**
   * Constructs a new <code>Invoice</code>.
   * @alias module:model/Invoice
   * @class
   */
  var exports = function() {
    var _this = this;











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
        obj['invoiceDate'] = ApiClient.convertToType(data['invoiceDate'], 'Date');
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
   * @member {Date} invoiceDate
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


