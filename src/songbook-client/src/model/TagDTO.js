/*
 * Songbook API
 * Tourist songs application
 *
 * OpenAPI spec version: 1.5.5
 * Contact: andrzej.przybysz01@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
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
    if (!root.SongbookApi) {
      root.SongbookApi = {};
    }
    root.SongbookApi.TagDTO = factory(root.SongbookApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TagDTO model module.
   * @module model/TagDTO
   * @version 1.5.5
   */

  /**
   * Constructs a new <code>TagDTO</code>.
   * @alias module:model/TagDTO
   * @class
   * @param id {Number} 
   * @param name {String} 
   */
  var exports = function(id, name) {
    this.id = id;
    this.name = name;
  };

  /**
   * Constructs a <code>TagDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagDTO} obj Optional instance to populate.
   * @return {module:model/TagDTO} The populated <code>TagDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  return exports;

}));
