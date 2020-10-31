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

import {ApiClient} from "../ApiClient";
import {GuitarCordDTO} from '../model/GuitarCordDTO';

/**
* GuitarCordResource service.
* @module api/GuitarCordResourceApi
* @version 1.5.5
*/
export class GuitarCordResourceApi {

    /**
    * Constructs a new GuitarCordResourceApi. 
    * @alias module:api/GuitarCordResourceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAllGuitarCordsUsingGET operation.
     * @callback module:api/GuitarCordResourceApi~getAllGuitarCordsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GuitarCordDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllGuitarCords
     * @param {module:api/GuitarCordResourceApi~getAllGuitarCordsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GuitarCordDTO>}
     */
    getAllGuitarCordsUsingGET(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [GuitarCordDTO];

      return this.apiClient.callApi(
        '/api/guitar-cords', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGuitarCordByIdUsingGET operation.
     * @callback module:api/GuitarCordResourceApi~getGuitarCordByIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GuitarCordDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getGuitarCordById
     * @param {Number} id id
     * @param {module:api/GuitarCordResourceApi~getGuitarCordByIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GuitarCordDTO}
     */
    getGuitarCordByIdUsingGET(id, callback) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getGuitarCordByIdUsingGET");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = GuitarCordDTO;

      return this.apiClient.callApi(
        '/api/guitar-cords/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGuitarCordUsingPUT operation.
     * @callback module:api/GuitarCordResourceApi~updateGuitarCordUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GuitarCordDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateGuitarCord
     * @param {module:model/GuitarCordDTO} guitarCordDTO guitarCordDTO
     * @param {module:api/GuitarCordResourceApi~updateGuitarCordUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GuitarCordDTO}
     */
    updateGuitarCordUsingPUT(guitarCordDTO, callback) {
      let postBody = guitarCordDTO;

      // verify the required parameter 'guitarCordDTO' is set
      if (guitarCordDTO === undefined || guitarCordDTO === null) {
        throw new Error("Missing the required parameter 'guitarCordDTO' when calling updateGuitarCordUsingPUT");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = GuitarCordDTO;

      return this.apiClient.callApi(
        '/api/guitar-cords', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}