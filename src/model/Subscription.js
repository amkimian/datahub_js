/**
 * Mimir DataHub API
 * Mimir DataHub API
 *
 * OpenAPI spec version: 0.0.10
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
    define(['ApiClient', 'model/PriceInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PriceInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.Subscription = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.PriceInfo);
  }
}(this, function(ApiClient, PriceInfo) {
  'use strict';




  /**
   * The Subscription model module.
   * @module model/Subscription
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>Subscription</code>.
   * @alias module:model/Subscription
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Subscription} obj Optional instance to populate.
   * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('dataset')) {
        obj['dataset'] = ApiClient.convertToType(data['dataset'], 'String');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = PriceInfo.constructFromObject(data['price']);
      }
    }
    return obj;
  }

  /**
   * The user id who is subscribed
   * @member {String} user
   */
  exports.prototype['user'] = undefined;
  /**
   * The owner of the dataset that is subscribed
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * The data set id that is subscribed
   * @member {String} dataset
   */
  exports.prototype['dataset'] = undefined;
  /**
   * When this subscription started
   * @member {Date} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * When this subscription ends
   * @member {Date} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * Whether this subscription is active or not
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {module:model/PriceInfo} price
   */
  exports.prototype['price'] = undefined;



  return exports;
}));

