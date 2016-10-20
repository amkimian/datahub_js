/**
 * Mimir DataHub API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.7
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
    root.MimirDataHubApi.DataSetRelease = factory(root.MimirDataHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DataSetRelease model module.
   * @module model/DataSetRelease
   * @version 0.0.7
   */

  /**
   * Constructs a new <code>DataSetRelease</code>.
   * @alias module:model/DataSetRelease
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>DataSetRelease</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataSetRelease} obj Optional instance to populate.
   * @return {module:model/DataSetRelease} The populated <code>DataSetRelease</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('dataset')) {
        obj['dataset'] = ApiClient.convertToType(data['dataset'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * The id of this release
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The id of the data set this release relates to
   * @member {String} dataset
   */
  exports.prototype['dataset'] = undefined;
  /**
   * The id of the user this data set/release relates to
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * Is this release published (and therefore immutable)
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * Some commentary on this release
   * @member {String} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));


