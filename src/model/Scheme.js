(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SchemeField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SchemeField'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.Scheme = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.SchemeField);
  }
}(this, function(ApiClient, SchemeField) {
  'use strict';

  /**
   * The Scheme model module.
   * @module model/Scheme
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>Scheme</code>.
   * A schema that could be associated with kv dataset element
   * @alias module:model/Scheme
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>Scheme</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Scheme} obj Optional instance to populate.
   * @return {module:model/Scheme} The populated <code>Scheme</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], [SchemeField]);
      }
    }
    return obj;
  }


  /**
   * The name of the schema
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * The description of the schema
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * fields in this schema
   * @member {Array.<module:model/SchemeField>} fields
   */
  exports.prototype['fields'] = undefined;




  return exports;
}));
