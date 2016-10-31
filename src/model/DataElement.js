(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DataElementCsvInfo', './DataElementDisplayInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DataElementCsvInfo'), require('./DataElementDisplayInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.DataElement = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.DataElementCsvInfo, root.MimirDataHubApi.DataElementDisplayInfo);
  }
}(this, function(ApiClient, DataElementCsvInfo, DataElementDisplayInfo) {
  'use strict';

  /**
   * The DataElement model module.
   * @module model/DataElement
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>DataElement</code>.
   * @alias module:model/DataElement
   * @class
   */
  var exports = function() {

















  };

  /**
   * Constructs a <code>DataElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataElement} obj Optional instance to populate.
   * @return {module:model/DataElement} The populated <code>DataElement</code> instance.
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
      if (data.hasOwnProperty('release')) {
        obj['release'] = ApiClient.convertToType(data['release'], 'String');
      }
      if (data.hasOwnProperty('mimeType')) {
        obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('schema')) {
        obj['schema'] = ApiClient.convertToType(data['schema'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('storage')) {
        obj['storage'] = ApiClient.convertToType(data['storage'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('blockId')) {
        obj['blockId'] = ApiClient.convertToType(data['blockId'], 'Integer');
      }
      if (data.hasOwnProperty('keyField')) {
        obj['keyField'] = ApiClient.convertToType(data['keyField'], 'String');
      }
      if (data.hasOwnProperty('published')) {
        obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
      }
      if (data.hasOwnProperty('displayInfo')) {
        obj['displayInfo'] = DataElementDisplayInfo.constructFromObject(data['displayInfo']);
      }
      if (data.hasOwnProperty('csvInfo')) {
        obj['csvInfo'] = DataElementCsvInfo.constructFromObject(data['csvInfo']);
      }
    }
    return obj;
  }


  /**
   * The id of this data element
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * The data set this element relates to
   * @member {String} dataset
   */
  exports.prototype['dataset'] = undefined;

  /**
   * The user this element relates to
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;

  /**
   * The release this element relates to
   * @member {String} release
   */
  exports.prototype['release'] = undefined;

  /**
   * The mime type of the data element
   * @member {String} mimeType
   */
  exports.prototype['mimeType'] = undefined;

  /**
   * Some information about this element
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * The underlying data type of this element
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * The underlying format of the data
   * @member {String} schema
   */
  exports.prototype['schema'] = undefined;

  /**
   * The state of this element (is it published?)
   * @member {String} state
   */
  exports.prototype['state'] = undefined;

  /**
   * Where blocks are stored for this element
   * @member {String} storage
   */
  exports.prototype['storage'] = undefined;

  /**
   * If the type is text, this is the text
   * @member {String} content
   */
  exports.prototype['content'] = undefined;

  /**
   * If the type is csv, this is the next block when added
   * @member {Integer} blockId
   */
  exports.prototype['blockId'] = undefined;

  /**
   * If the type is keyed, this is the key field that represents the unique key
   * @member {String} keyField
   */
  exports.prototype['keyField'] = undefined;

  /**
   * Whether this element has been published (by publishing its release)
   * @member {Boolean} published
   */
  exports.prototype['published'] = undefined;

  /**
   * @member {module:model/DataElementDisplayInfo} displayInfo
   */
  exports.prototype['displayInfo'] = undefined;

  /**
   * @member {module:model/DataElementCsvInfo} csvInfo
   */
  exports.prototype['csvInfo'] = undefined;




  return exports;
}));
