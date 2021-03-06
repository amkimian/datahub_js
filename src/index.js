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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DataElement', 'model/DataElementCsvInfo', 'model/DataElementDisplayInfo', 'model/DataSetRelease', 'model/DataSetView', 'model/GeneralError', 'model/GeneralStatus', 'model/GeneralText', 'model/GroupMembership', 'model/KVBody', 'model/PriceInfo', 'model/Program', 'model/ProgramParameters', 'model/Repository', 'model/RepositoryView', 'model/Scheme', 'model/SchemeField', 'model/SchemeValueType', 'model/Subscription', 'model/User', 'model/UserProfile', 'model/UserStripe', 'model/UserTokens', 'api/AdminApi', 'api/DataApi', 'api/ElementApi', 'api/MarketplaceApi', 'api/ProgramApi', 'api/QueryApi', 'api/ReleaseApi', 'api/RepoApi', 'api/SchemaApi', 'api/SubscriptionApi', 'api/UserApi', 'api/ViewApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/DataElement'), require('./model/DataElementCsvInfo'), require('./model/DataElementDisplayInfo'), require('./model/DataSetRelease'), require('./model/DataSetView'), require('./model/GeneralError'), require('./model/GeneralStatus'), require('./model/GeneralText'), require('./model/GroupMembership'), require('./model/KVBody'), require('./model/PriceInfo'), require('./model/Program'), require('./model/ProgramParameters'), require('./model/Repository'), require('./model/RepositoryView'), require('./model/Scheme'), require('./model/SchemeField'), require('./model/SchemeValueType'), require('./model/Subscription'), require('./model/User'), require('./model/UserProfile'), require('./model/UserStripe'), require('./model/UserTokens'), require('./api/AdminApi'), require('./api/DataApi'), require('./api/ElementApi'), require('./api/MarketplaceApi'), require('./api/ProgramApi'), require('./api/QueryApi'), require('./api/ReleaseApi'), require('./api/RepoApi'), require('./api/SchemaApi'), require('./api/SubscriptionApi'), require('./api/UserApi'), require('./api/ViewApi'));
  }
}(function(ApiClient, DataElement, DataElementCsvInfo, DataElementDisplayInfo, DataSetRelease, DataSetView, GeneralError, GeneralStatus, GeneralText, GroupMembership, KVBody, PriceInfo, Program, ProgramParameters, Repository, RepositoryView, Scheme, SchemeField, SchemeValueType, Subscription, User, UserProfile, UserStripe, UserTokens, AdminApi, DataApi, ElementApi, MarketplaceApi, ProgramApi, QueryApi, ReleaseApi, RepoApi, SchemaApi, SubscriptionApi, UserApi, ViewApi) {
  'use strict';

  /**
   * DataHub_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var DataHubApi = require('index'); // See note below*.
   * var xxxSvc = new DataHubApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new DataHubApi.Yyy(); // Construct a model instance.
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
   * var xxxSvc = new DataHubApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new DataHubApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.12
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The DataElement model constructor.
     * @property {module:model/DataElement}
     */
    DataElement: DataElement,
    /**
     * The DataElementCsvInfo model constructor.
     * @property {module:model/DataElementCsvInfo}
     */
    DataElementCsvInfo: DataElementCsvInfo,
    /**
     * The DataElementDisplayInfo model constructor.
     * @property {module:model/DataElementDisplayInfo}
     */
    DataElementDisplayInfo: DataElementDisplayInfo,
    /**
     * The DataSetRelease model constructor.
     * @property {module:model/DataSetRelease}
     */
    DataSetRelease: DataSetRelease,
    /**
     * The DataSetView model constructor.
     * @property {module:model/DataSetView}
     */
    DataSetView: DataSetView,
    /**
     * The GeneralError model constructor.
     * @property {module:model/GeneralError}
     */
    GeneralError: GeneralError,
    /**
     * The GeneralStatus model constructor.
     * @property {module:model/GeneralStatus}
     */
    GeneralStatus: GeneralStatus,
    /**
     * The GeneralText model constructor.
     * @property {module:model/GeneralText}
     */
    GeneralText: GeneralText,
    /**
     * The GroupMembership model constructor.
     * @property {module:model/GroupMembership}
     */
    GroupMembership: GroupMembership,
    /**
     * The KVBody model constructor.
     * @property {module:model/KVBody}
     */
    KVBody: KVBody,
    /**
     * The PriceInfo model constructor.
     * @property {module:model/PriceInfo}
     */
    PriceInfo: PriceInfo,
    /**
     * The Program model constructor.
     * @property {module:model/Program}
     */
    Program: Program,
    /**
     * The ProgramParameters model constructor.
     * @property {module:model/ProgramParameters}
     */
    ProgramParameters: ProgramParameters,
    /**
     * The Repository model constructor.
     * @property {module:model/Repository}
     */
    Repository: Repository,
    /**
     * The RepositoryView model constructor.
     * @property {module:model/RepositoryView}
     */
    RepositoryView: RepositoryView,
    /**
     * The Scheme model constructor.
     * @property {module:model/Scheme}
     */
    Scheme: Scheme,
    /**
     * The SchemeField model constructor.
     * @property {module:model/SchemeField}
     */
    SchemeField: SchemeField,
    /**
     * The SchemeValueType model constructor.
     * @property {module:model/SchemeValueType}
     */
    SchemeValueType: SchemeValueType,
    /**
     * The Subscription model constructor.
     * @property {module:model/Subscription}
     */
    Subscription: Subscription,
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
     * The UserStripe model constructor.
     * @property {module:model/UserStripe}
     */
    UserStripe: UserStripe,
    /**
     * The UserTokens model constructor.
     * @property {module:model/UserTokens}
     */
    UserTokens: UserTokens,
    /**
     * The AdminApi service constructor.
     * @property {module:api/AdminApi}
     */
    AdminApi: AdminApi,
    /**
     * The DataApi service constructor.
     * @property {module:api/DataApi}
     */
    DataApi: DataApi,
    /**
     * The ElementApi service constructor.
     * @property {module:api/ElementApi}
     */
    ElementApi: ElementApi,
    /**
     * The MarketplaceApi service constructor.
     * @property {module:api/MarketplaceApi}
     */
    MarketplaceApi: MarketplaceApi,
    /**
     * The ProgramApi service constructor.
     * @property {module:api/ProgramApi}
     */
    ProgramApi: ProgramApi,
    /**
     * The QueryApi service constructor.
     * @property {module:api/QueryApi}
     */
    QueryApi: QueryApi,
    /**
     * The ReleaseApi service constructor.
     * @property {module:api/ReleaseApi}
     */
    ReleaseApi: ReleaseApi,
    /**
     * The RepoApi service constructor.
     * @property {module:api/RepoApi}
     */
    RepoApi: RepoApi,
    /**
     * The SchemaApi service constructor.
     * @property {module:api/SchemaApi}
     */
    SchemaApi: SchemaApi,
    /**
     * The SubscriptionApi service constructor.
     * @property {module:api/SubscriptionApi}
     */
    SubscriptionApi: SubscriptionApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi,
    /**
     * The ViewApi service constructor.
     * @property {module:api/ViewApi}
     */
    ViewApi: ViewApi
  };

  return exports;
}));
