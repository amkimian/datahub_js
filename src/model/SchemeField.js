(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SchemeValueType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SchemeValueType'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.SchemeField = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.SchemeValueType);
  }
}(this, function(ApiClient, SchemeValueType) {
  'use strict';

  /**
   * The SchemeField model module.
   * @module model/SchemeField
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>SchemeField</code>.
   * A field that could be in a kv data element store
   * @alias module:model/SchemeField
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>SchemeField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SchemeField} obj Optional instance to populate.
   * @return {module:model/SchemeField} The populated <code>SchemeField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('dataType')) {
        obj['dataType'] = ApiClient.convertToType(data['dataType'], 'String');
      }
      if (data.hasOwnProperty('input')) {
        obj['input'] = ApiClient.convertToType(data['input'], 'String');
      }
      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], [SchemeValueType]);
      }
      if (data.hasOwnProperty('operators')) {
        obj['operators'] = ApiClient.convertToType(data['operators'], ['String']);
      }
    }
    return obj;
  }


  /**
   * The id of this field (the key in the document)
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * A label that could be used in a UI
   * @member {String} label
   */
  exports.prototype['label'] = undefined;

  /**
   * The type of this data (string, integer, double)
   * @member {String} dataType
   */
  exports.prototype['dataType'] = undefined;

  /**
   * Optional, the type of input control used
   * @member {String} input
   */
  exports.prototype['input'] = undefined;

  /**
   * @member {Array.<module:model/SchemeValueType>} values
   */
  exports.prototype['values'] = undefined;

  /**
   * The operators that could apply to this field
   * @member {Array.<String>} operators
   */
  exports.prototype['operators'] = undefined;




  return exports;
}));
