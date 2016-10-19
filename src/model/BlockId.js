/**
 * Mimir DataHub API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.3
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.BlockId = factory(root.MimirDataHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BlockId model module.
   * @module model/BlockId
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>BlockId</code>.
   * @alias module:model/BlockId
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>BlockId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BlockId} obj Optional instance to populate.
   * @return {module:model/BlockId} The populated <code>BlockId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dataset')) {
        obj['dataset'] = ApiClient.convertToType(data['dataset'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
      if (data.hasOwnProperty('release')) {
        obj['release'] = ApiClient.convertToType(data['release'], 'String');
      }
      if (data.hasOwnProperty('element')) {
        obj['element'] = ApiClient.convertToType(data['element'], 'String');
      }
      if (data.hasOwnProperty('blockId')) {
        obj['blockId'] = ApiClient.convertToType(data['blockId'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * The data set this element relates to
   * @member {String} dataset
   */
  exports.prototype['dataset'] = undefined;
  /**
   * The user this element relates to
   * @member {String} user
   */
  exports.prototype['user'] = undefined;
  /**
   * The release this element relates to
   * @member {String} release
   */
  exports.prototype['release'] = undefined;
  /**
   * The element this block relates to
   * @member {String} element
   */
  exports.prototype['element'] = undefined;
  /**
   * The id of this block
   * @member {Integer} blockId
   */
  exports.prototype['blockId'] = undefined;



  return exports;
}));


