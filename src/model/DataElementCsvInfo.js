/**
 * DataHub API
 * DataHub API
 *
 * OpenAPI spec version: 0.0.12
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
    root.DataHubApi.DataElementCsvInfo = factory(root.DataHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DataElementCsvInfo model module.
   * @module model/DataElementCsvInfo
   * @version 0.0.12
   */

  /**
   * Constructs a new <code>DataElementCsvInfo</code>.
   * @alias module:model/DataElementCsvInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DataElementCsvInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataElementCsvInfo} obj Optional instance to populate.
   * @return {module:model/DataElementCsvInfo} The populated <code>DataElementCsvInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fieldTypes')) {
        obj['fieldTypes'] = ApiClient.convertToType(data['fieldTypes'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} fieldTypes
   */
  exports.prototype['fieldTypes'] = undefined;



  return exports;
}));


