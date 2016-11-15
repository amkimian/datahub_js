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
    instance = new DataHubApi.SchemaApi();
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

  describe('SchemaApi', function() {
    describe('createScheme', function() {
      it('should call createScheme successfully', function(done) {
        //uncomment below and update the code to test createScheme
        //instance.createScheme(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteScheme', function() {
      it('should call deleteScheme successfully', function(done) {
        //uncomment below and update the code to test deleteScheme
        //instance.deleteScheme(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScheme', function() {
      it('should call getScheme successfully', function(done) {
        //uncomment below and update the code to test getScheme
        //instance.getScheme(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSchemes', function() {
      it('should call getSchemes successfully', function(done) {
        //uncomment below and update the code to test getSchemes
        //instance.getSchemes(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateScheme', function() {
      it('should call updateScheme successfully', function(done) {
        //uncomment below and update the code to test updateScheme
        //instance.updateScheme(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));