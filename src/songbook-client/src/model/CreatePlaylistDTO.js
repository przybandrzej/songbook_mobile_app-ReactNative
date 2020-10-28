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
    root.SongbookApi.CreatePlaylistDTO = factory(root.SongbookApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreatePlaylistDTO model module.
   * @module model/CreatePlaylistDTO
   * @version 1.5.5
   */

  /**
   * Constructs a new <code>CreatePlaylistDTO</code>.
   * @alias module:model/CreatePlaylistDTO
   * @class
   * @param isPrivate {Boolean} 
   * @param songs {Array.<Number>} 
   */
  var exports = function(isPrivate, songs) {
    this.isPrivate = isPrivate;
    this.songs = songs;
  };

  /**
   * Constructs a <code>CreatePlaylistDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatePlaylistDTO} obj Optional instance to populate.
   * @return {module:model/CreatePlaylistDTO} The populated <code>CreatePlaylistDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('isPrivate'))
        obj.isPrivate = ApiClient.convertToType(data['isPrivate'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('songs'))
        obj.songs = ApiClient.convertToType(data['songs'], ['Number']);
    }
    return obj;
  }

  /**
   * @member {Boolean} isPrivate
   */
  exports.prototype.isPrivate = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Array.<Number>} songs
   */
  exports.prototype.songs = undefined;

  return exports;

}));