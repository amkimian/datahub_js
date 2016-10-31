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
    root.MimirDataHubApi.GeneralText = factory(root.MimirDataHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GeneralText model module.
   * @module model/GeneralText
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>GeneralText</code>.
   * @alias module:model/GeneralText
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>GeneralText</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeneralText} obj Optional instance to populate.
   * @return {module:model/GeneralText} The populated <code>GeneralText</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
    }
    return obj;
  }


  /**
   * The content of the general text
   * @member {String} content
   */
  exports.prototype['content'] = undefined;




  return exports;
}));
