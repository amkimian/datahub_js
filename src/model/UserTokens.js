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
    root.MimirDataHubApi.UserTokens = factory(root.MimirDataHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserTokens model module.
   * @module model/UserTokens
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>UserTokens</code>.
   * @alias module:model/UserTokens
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>UserTokens</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserTokens} obj Optional instance to populate.
   * @return {module:model/UserTokens} The populated <code>UserTokens</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('accessToken')) {
        obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
      }
      if (data.hasOwnProperty('tokenSecret')) {
        obj['tokenSecret'] = ApiClient.convertToType(data['tokenSecret'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;

  /**
   * @member {String} accessToken
   */
  exports.prototype['accessToken'] = undefined;

  /**
   * @member {String} tokenSecret
   */
  exports.prototype['tokenSecret'] = undefined;




  return exports;
}));
