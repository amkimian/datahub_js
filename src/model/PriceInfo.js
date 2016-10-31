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
    root.MimirDataHubApi.PriceInfo = factory(root.MimirDataHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PriceInfo model module.
   * @module model/PriceInfo
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>PriceInfo</code>.
   * @alias module:model/PriceInfo
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>PriceInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PriceInfo} obj Optional instance to populate.
   * @return {module:model/PriceInfo} The populated <code>PriceInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Integer');
      }
      if (data.hasOwnProperty('oneoff')) {
        obj['oneoff'] = ApiClient.convertToType(data['oneoff'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * The amount (in cents) of the subscription
   * @member {Integer} amount
   */
  exports.prototype['amount'] = undefined;

  /**
   * Whether the price is charged every month or one off
   * @member {Boolean} oneoff
   */
  exports.prototype['oneoff'] = undefined;




  return exports;
}));
