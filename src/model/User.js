/**
 * Mimir DataHub API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.6
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
    define(['ApiClient', 'model/UserProfile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserProfile'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.User = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.UserProfile);
  }
}(this, function(ApiClient, UserProfile) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version 0.0.6
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {
    var _this = this;















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
        obj['passwordResetExpires'] = ApiClient.convertToType(data['passwordResetExpires'], 'Date');
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
        obj['tokens'] = ApiClient.convertToType(data['tokens'], ['String']);
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
   * @member {Date} passwordResetExpires
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
   * @member {Array.<String>} tokens
   */
  exports.prototype['tokens'] = undefined;
  /**
   * @member {module:model/UserProfile} profile
   */
  exports.prototype['profile'] = undefined;



  return exports;
}));


