/**
 * Mimir DataHub API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.2
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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BlockId', 'model/DataElement', 'model/DataElementBlock', 'model/DataSet', 'model/DataSetRelease', 'model/User', 'model/UserProfile', 'api/AdminApi', 'api/BlockApi', 'api/DatasetApi', 'api/ElementApi', 'api/ReleaseApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/BlockId'), require('./model/DataElement'), require('./model/DataElementBlock'), require('./model/DataSet'), require('./model/DataSetRelease'), require('./model/User'), require('./model/UserProfile'), require('./api/AdminApi'), require('./api/BlockApi'), require('./api/DatasetApi'), require('./api/ElementApi'), require('./api/ReleaseApi'), require('./api/UserApi'));
  }
}(function(ApiClient, BlockId, DataElement, DataElementBlock, DataSet, DataSetRelease, User, UserProfile, AdminApi, BlockApi, DatasetApi, ElementApi, ReleaseApi, UserApi) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var MimirDataHubApi = require('index'); // See note below*.
   * var xxxSvc = new MimirDataHubApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new MimirDataHubApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new MimirDataHubApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new MimirDataHubApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.2
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The BlockId model constructor.
     * @property {module:model/BlockId}
     */
    BlockId: BlockId,
    /**
     * The DataElement model constructor.
     * @property {module:model/DataElement}
     */
    DataElement: DataElement,
    /**
     * The DataElementBlock model constructor.
     * @property {module:model/DataElementBlock}
     */
    DataElementBlock: DataElementBlock,
    /**
     * The DataSet model constructor.
     * @property {module:model/DataSet}
     */
    DataSet: DataSet,
    /**
     * The DataSetRelease model constructor.
     * @property {module:model/DataSetRelease}
     */
    DataSetRelease: DataSetRelease,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserProfile model constructor.
     * @property {module:model/UserProfile}
     */
    UserProfile: UserProfile,
    /**
     * The AdminApi service constructor.
     * @property {module:api/AdminApi}
     */
    AdminApi: AdminApi,
    /**
     * The BlockApi service constructor.
     * @property {module:api/BlockApi}
     */
    BlockApi: BlockApi,
    /**
     * The DatasetApi service constructor.
     * @property {module:api/DatasetApi}
     */
    DatasetApi: DatasetApi,
    /**
     * The ElementApi service constructor.
     * @property {module:api/ElementApi}
     */
    ElementApi: ElementApi,
    /**
     * The ReleaseApi service constructor.
     * @property {module:api/ReleaseApi}
     */
    ReleaseApi: ReleaseApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));
