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
    root.MimirDataHubApi.UserProfile = factory(root.MimirDataHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserProfile model module.
   * @module model/UserProfile
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>UserProfile</code>.
   * @alias module:model/UserProfile
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>UserProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserProfile} obj Optional instance to populate.
   * @return {module:model/UserProfile} The populated <code>UserProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('website')) {
        obj['website'] = ApiClient.convertToType(data['website'], 'String');
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('picture')) {
        obj['picture'] = ApiClient.convertToType(data['picture'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} website
   */
  exports.prototype['website'] = undefined;

  /**
   * @member {String} gender
   */
  exports.prototype['gender'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} location
   */
  exports.prototype['location'] = undefined;

  /**
   * @member {String} picture
   */
  exports.prototype['picture'] = undefined;




  return exports;
}));
