(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/DataElement', './model/DataElementCsvInfo', './model/DataElementDisplayInfo', './model/DataSet', './model/DataSetRelease', './model/DataSetView', './model/GeneralError', './model/GeneralText', './model/Invoice', './model/InvoiceEntry', './model/KVBody', './model/PriceInfo', './model/Scheme', './model/SchemeField', './model/SchemeValueType', './model/Subscription', './model/User', './model/UserProfile', './model/UserTokens', './api/AdminApi', './api/DataApi', './api/DatasetApi', './api/ElementApi', './api/InvoiceApi', './api/MarketplaceApi', './api/ReleaseApi', './api/SchemeApi', './api/UserApi', './api/ViewApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/DataElement'), require('./model/DataElementCsvInfo'), require('./model/DataElementDisplayInfo'), require('./model/DataSet'), require('./model/DataSetRelease'), require('./model/DataSetView'), require('./model/GeneralError'), require('./model/GeneralText'), require('./model/Invoice'), require('./model/InvoiceEntry'), require('./model/KVBody'), require('./model/PriceInfo'), require('./model/Scheme'), require('./model/SchemeField'), require('./model/SchemeValueType'), require('./model/Subscription'), require('./model/User'), require('./model/UserProfile'), require('./model/UserTokens'), require('./api/AdminApi'), require('./api/DataApi'), require('./api/DatasetApi'), require('./api/ElementApi'), require('./api/InvoiceApi'), require('./api/MarketplaceApi'), require('./api/ReleaseApi'), require('./api/SchemeApi'), require('./api/UserApi'), require('./api/ViewApi'));
  }
}(function(ApiClient, DataElement, DataElementCsvInfo, DataElementDisplayInfo, DataSet, DataSetRelease, DataSetView, GeneralError, GeneralText, Invoice, InvoiceEntry, KVBody, PriceInfo, Scheme, SchemeField, SchemeValueType, Subscription, User, UserProfile, UserTokens, AdminApi, DataApi, DatasetApi, ElementApi, InvoiceApi, MarketplaceApi, ReleaseApi, SchemeApi, UserApi, ViewApi) {
  'use strict';

  /**
   * Mimir DataHub API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var MimirDataHubApi = require('./index'); // See note below*.
   * var xxxSvc = new MimirDataHubApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new MimirDataHubApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
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
   * @version 0.0.10
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
     * The GeneralText model constructor.
     * @property {module:model/GeneralText}
     */
    GeneralText: GeneralText,
    /**
     * The Invoice model constructor.
     * @property {module:model/Invoice}
     */
    Invoice: Invoice,
    /**
     * The InvoiceEntry model constructor.
     * @property {module:model/InvoiceEntry}
     */
    InvoiceEntry: InvoiceEntry,
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
     * The InvoiceApi service constructor.
     * @property {module:api/InvoiceApi}
     */
    InvoiceApi: InvoiceApi,
    /**
     * The MarketplaceApi service constructor.
     * @property {module:api/MarketplaceApi}
     */
    MarketplaceApi: MarketplaceApi,
    /**
     * The ReleaseApi service constructor.
     * @property {module:api/ReleaseApi}
     */
    ReleaseApi: ReleaseApi,
    /**
     * The SchemeApi service constructor.
     * @property {module:api/SchemeApi}
     */
    SchemeApi: SchemeApi,
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
