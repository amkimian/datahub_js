(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ModelDate', './UserProfile', './UserTokens'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelDate'), require('./UserProfile'), require('./UserTokens'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.User = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.ModelDate, root.MimirDataHubApi.UserProfile, root.MimirDataHubApi.UserTokens);
  }
}(this, function(ApiClient, ModelDate, UserProfile, UserTokens) {
  'use strict';

  /**
   * The User model module.
   * @module model/User
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {















  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('gravatar')) {
        obj['gravatar'] = ApiClient.convertToType(data['gravatar'], 'String');
      }
      if (data.hasOwnProperty('apiKey')) {
        obj['apiKey'] = ApiClient.convertToType(data['apiKey'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('passwordResetToken')) {
        obj['passwordResetToken'] = ApiClient.convertToType(data['passwordResetToken'], 'String');
      }
      if (data.hasOwnProperty('passwordResetExpires')) {
        obj['passwordResetExpires'] = ApiClient.convertToType(data['passwordResetExpires'], ModelDate);
      }
      if (data.hasOwnProperty('twitter')) {
        obj['twitter'] = ApiClient.convertToType(data['twitter'], 'String');
      }
      if (data.hasOwnProperty('google')) {
        obj['google'] = ApiClient.convertToType(data['google'], 'String');
      }
      if (data.hasOwnProperty('github')) {
        obj['github'] = ApiClient.convertToType(data['github'], 'String');
      }
      if (data.hasOwnProperty('linkedin')) {
        obj['linkedin'] = ApiClient.convertToType(data['linkedin'], 'String');
      }
      if (data.hasOwnProperty('tokens')) {
        obj['tokens'] = ApiClient.convertToType(data['tokens'], [UserTokens]);
      }
      if (data.hasOwnProperty('profile')) {
        obj['profile'] = UserProfile.constructFromObject(data['profile']);
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * @member {String} gravatar
   */
  exports.prototype['gravatar'] = undefined;

  /**
   * The api key that can be used to impersonate this user
   * @member {String} apiKey
   */
  exports.prototype['apiKey'] = undefined;

  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;

  /**
   * @member {String} passwordResetToken
   */
  exports.prototype['passwordResetToken'] = undefined;

  /**
   * @member {module:model/ModelDate} passwordResetExpires
   */
  exports.prototype['passwordResetExpires'] = undefined;

  /**
   * @member {String} twitter
   */
  exports.prototype['twitter'] = undefined;

  /**
   * @member {String} google
   */
  exports.prototype['google'] = undefined;

  /**
   * @member {String} github
   */
  exports.prototype['github'] = undefined;

  /**
   * @member {String} linkedin
   */
  exports.prototype['linkedin'] = undefined;

  /**
   * @member {Array.<module:model/UserTokens>} tokens
   */
  exports.prototype['tokens'] = undefined;

  /**
   * @member {module:model/UserProfile} profile
   */
  exports.prototype['profile'] = undefined;




  return exports;
}));
