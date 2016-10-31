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
    root.MimirDataHubApi.DataElementCsvInfo = factory(root.MimirDataHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DataElementCsvInfo model module.
   * @module model/DataElementCsvInfo
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>DataElementCsvInfo</code>.
   * @alias module:model/DataElementCsvInfo
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DataElementCsvInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataElementCsvInfo} obj Optional instance to populate.
   * @return {module:model/DataElementCsvInfo} The populated <code>DataElementCsvInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('fieldTypes')) {
        obj['fieldTypes'] = ApiClient.convertToType(data['fieldTypes'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} fieldTypes
   */
  exports.prototype['fieldTypes'] = undefined;




  return exports;
}));
