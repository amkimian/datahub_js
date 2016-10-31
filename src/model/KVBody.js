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
    root.MimirDataHubApi.KVBody = factory(root.MimirDataHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The KVBody model module.
   * @module model/KVBody
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>KVBody</code>.
   * @alias module:model/KVBody
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>KVBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KVBody} obj Optional instance to populate.
   * @return {module:model/KVBody} The populated <code>KVBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('fieldNames')) {
        obj['fieldNames'] = ApiClient.convertToType(data['fieldNames'], 'String');
      }
      if (data.hasOwnProperty('fieldTypes')) {
        obj['fieldTypes'] = ApiClient.convertToType(data['fieldTypes'], 'String');
      }
      if (data.hasOwnProperty('valueData')) {
        obj['valueData'] = ApiClient.convertToType(data['valueData'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} fieldNames
   */
  exports.prototype['fieldNames'] = undefined;

  /**
   * @member {String} fieldTypes
   */
  exports.prototype['fieldTypes'] = undefined;

  /**
   * @member {String} valueData
   */
  exports.prototype['valueData'] = undefined;




  return exports;
}));
