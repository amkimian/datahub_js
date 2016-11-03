/**
 * DataHub API
 * DataHub API
 *
 * OpenAPI spec version: 0.0.11
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
    if (!root.DataHubApi) {
      root.DataHubApi = {};
    }
    root.DataHubApi.DataSetView = factory(root.DataHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DataSetView model module.
   * @module model/DataSetView
   * @version 0.0.11
   */

  /**
   * Constructs a new <code>DataSetView</code>.
   * @alias module:model/DataSetView
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DataSetView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataSetView} obj Optional instance to populate.
   * @return {module:model/DataSetView} The populated <code>DataSetView</code> instance.
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
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
    }
    return obj;
  }

  /**
   * The short name of this dataset
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;



  return exports;
}));


