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
    define(['ApiClient', 'model/PlaylistDTO', 'model/UserDTO', 'model/UserSongRatingDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PlaylistDTO'), require('../model/UserDTO'), require('../model/UserSongRatingDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.SongbookApi) {
      root.SongbookApi = {};
    }
    root.SongbookApi.UserResourceApi = factory(root.SongbookApi.ApiClient, root.SongbookApi.PlaylistDTO, root.SongbookApi.UserDTO, root.SongbookApi.UserSongRatingDTO);
  }
}(this, function(ApiClient, PlaylistDTO, UserDTO, UserSongRatingDTO) {
  'use strict';

  /**
   * UserResource service.
   * @module api/UserResourceApi
   * @version 1.5.5
   */

  /**
   * Constructs a new UserResourceApi. 
   * @alias module:api/UserResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addSongToLibraryUsingPATCH operation.
     * @callback module:api/UserResourceApi~addSongToLibraryUsingPATCHCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addSongToLibrary
     * @param {Number} id id
     * @param {Number} songId songId
     * @param {module:api/UserResourceApi~addSongToLibraryUsingPATCHCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addSongToLibraryUsingPATCH = function(id, songId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addSongToLibraryUsingPATCH");
      }

      // verify the required parameter 'songId' is set
      if (songId === undefined || songId === null) {
        throw new Error("Missing the required parameter 'songId' when calling addSongToLibraryUsingPATCH");
      }


      var pathParams = {
        'id': id,
        'songId': songId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/users/{id}/add-song/{songId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUsingDELETE6 operation.
     * @callback module:api/UserResourceApi~deleteUsingDELETE6Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete
     * @param {Number} id id
     * @param {module:api/UserResourceApi~deleteUsingDELETE6Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUsingDELETE6 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUsingDELETE6");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/users/id/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllUsingGET6 operation.
     * @callback module:api/UserResourceApi~getAllUsingGET6Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAll
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit limit
     * @param {module:api/UserResourceApi~getAllUsingGET6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserDTO>}
     */
    this.getAllUsingGET6 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [UserDTO];

      return this.apiClient.callApi(
        '/api/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getByIdUsingGET6 operation.
     * @callback module:api/UserResourceApi~getByIdUsingGET6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getById
     * @param {Number} id id
     * @param {module:api/UserResourceApi~getByIdUsingGET6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDTO}
     */
    this.getByIdUsingGET6 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getByIdUsingGET6");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = UserDTO;

      return this.apiClient.callApi(
        '/api/users/id/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPlaylistsByUserIdUsingGET operation.
     * @callback module:api/UserResourceApi~getPlaylistsByUserIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PlaylistDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getPlaylistsByUserId
     * @param {Number} id id
     * @param {module:api/UserResourceApi~getPlaylistsByUserIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PlaylistDTO>}
     */
    this.getPlaylistsByUserIdUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPlaylistsByUserIdUsingGET");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [PlaylistDTO];

      return this.apiClient.callApi(
        '/api/users/id/{id}/playlists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRatingsByUserIdUsingGET operation.
     * @callback module:api/UserResourceApi~getRatingsByUserIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserSongRatingDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getRatingsByUserId
     * @param {Number} id id
     * @param {module:api/UserResourceApi~getRatingsByUserIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserSongRatingDTO>}
     */
    this.getRatingsByUserIdUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRatingsByUserIdUsingGET");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [UserSongRatingDTO];

      return this.apiClient.callApi(
        '/api/users/id/{id}/ratings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeSongFromLibraryUsingPATCH operation.
     * @callback module:api/UserResourceApi~removeSongFromLibraryUsingPATCHCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeSongFromLibrary
     * @param {Number} id id
     * @param {Number} songId songId
     * @param {module:api/UserResourceApi~removeSongFromLibraryUsingPATCHCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeSongFromLibraryUsingPATCH = function(id, songId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling removeSongFromLibraryUsingPATCH");
      }

      // verify the required parameter 'songId' is set
      if (songId === undefined || songId === null) {
        throw new Error("Missing the required parameter 'songId' when calling removeSongFromLibraryUsingPATCH");
      }


      var pathParams = {
        'id': id,
        'songId': songId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/users/{id}/remove-song/{songId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
