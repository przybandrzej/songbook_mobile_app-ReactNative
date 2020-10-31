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

import {ApiClient} from '../ApiClient';

/**
 * The VerseDTO model module.
 * @module model/VerseDTO
 * @version 1.5.5
 */
export class VerseDTO {
  /**
   * Constructs a new <code>VerseDTO</code>.
   * @alias module:model/VerseDTO
   * @class
   * @param id {Number} 
   * @param order {Number} 
   */
  constructor(id, order) {
    this.id = id;
    this.order = order;
  }

  /**
   * Constructs a <code>VerseDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VerseDTO} obj Optional instance to populate.
   * @return {module:model/VerseDTO} The populated <code>VerseDTO</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VerseDTO();
      if (data.hasOwnProperty('chorus'))
        obj.chorus = ApiClient.convertToType(data['chorus'], 'Boolean');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('order'))
        obj.order = ApiClient.convertToType(data['order'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Boolean} chorus
 */
VerseDTO.prototype.chorus = undefined;

/**
 * @member {Number} id
 */
VerseDTO.prototype.id = undefined;

/**
 * @member {Number} order
 */
VerseDTO.prototype.order = undefined;

