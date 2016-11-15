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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DataHubApi);
  }
}(this, function(expect, DataHubApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DataHubApi.GroupMembership();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GroupMembership', function() {
    it('should create an instance of GroupMembership', function() {
      // uncomment below and update the code to test GroupMembership
      //var instane = new DataHubApi.GroupMembership();
      //expect(instance).to.be.a(DataHubApi.GroupMembership);
    });

    it('should have the property groupid (base name: "groupid")', function() {
      // uncomment below and update the code to test the property groupid
      //var instane = new DataHubApi.GroupMembership();
      //expect(instance).to.be();
    });

    it('should have the property userid (base name: "userid")', function() {
      // uncomment below and update the code to test the property userid
      //var instane = new DataHubApi.GroupMembership();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new DataHubApi.GroupMembership();
      //expect(instance).to.be();
    });

  });

}));
