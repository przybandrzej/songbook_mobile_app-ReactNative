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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SongbookApi);
  }
}(this, function(expect, SongbookApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SongbookApi.SongCoauthorResourceApi();
  });

  describe('(package)', function() {
    describe('SongCoauthorResourceApi', function() {
      describe('createUsingPOST3', function() {
        it('should call createUsingPOST3 successfully', function(done) {
          // TODO: uncomment, update parameter values for createUsingPOST3 call and complete the assertions
          /*
          var songCoauthorDTO = new SongbookApi.SongCoauthorDTO();
          songCoauthorDTO.authorId = "0";
          songCoauthorDTO.coauthorFunction = "MUSIC";
          songCoauthorDTO.songId = "0";

          instance.createUsingPOST3(songCoauthorDTO, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SongbookApi.SongCoauthorDTO);
            expect(data.authorId).to.be.a('number');
            expect(data.authorId).to.be("0");
            expect(data.coauthorFunction).to.be.a('string');
            expect(data.coauthorFunction).to.be("MUSIC");
            expect(data.songId).to.be.a('number');
            expect(data.songId).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteUsingDELETE3', function() {
        it('should call deleteUsingDELETE3 successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteUsingDELETE3 call
          /*
          var authorId = 789;
          var _function = "_function_example";
          var songId = 789;

          instance.deleteUsingDELETE3(authorId, _function, songId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getByAuthorIdUsingGET', function() {
        it('should call getByAuthorIdUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getByAuthorIdUsingGET call and complete the assertions
          /*
          var id = 789;

          instance.getByAuthorIdUsingGET(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SongbookApi.SongCoauthorDTO);
              expect(data.authorId).to.be.a('number');
              expect(data.authorId).to.be("0");
              expect(data.coauthorFunction).to.be.a('string');
              expect(data.coauthorFunction).to.be("MUSIC");
              expect(data.songId).to.be.a('number');
              expect(data.songId).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getByFunctionUsingGET', function() {
        it('should call getByFunctionUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getByFunctionUsingGET call and complete the assertions
          /*
          var _function = "_function_example";

          instance.getByFunctionUsingGET(_function, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SongbookApi.SongCoauthorDTO);
              expect(data.authorId).to.be.a('number');
              expect(data.authorId).to.be("0");
              expect(data.coauthorFunction).to.be.a('string');
              expect(data.coauthorFunction).to.be("MUSIC");
              expect(data.songId).to.be.a('number');
              expect(data.songId).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBySongIdUsingGET', function() {
        it('should call getBySongIdUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getBySongIdUsingGET call and complete the assertions
          /*
          var id = 789;

          instance.getBySongIdUsingGET(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SongbookApi.SongCoauthorDTO);
              expect(data.authorId).to.be.a('number');
              expect(data.authorId).to.be("0");
              expect(data.coauthorFunction).to.be.a('string');
              expect(data.coauthorFunction).to.be("MUSIC");
              expect(data.songId).to.be.a('number');
              expect(data.songId).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateUsingPUT3', function() {
        it('should call updateUsingPUT3 successfully', function(done) {
          // TODO: uncomment, update parameter values for updateUsingPUT3 call and complete the assertions
          /*
          var songCoauthorDTO = new SongbookApi.SongCoauthorDTO();
          songCoauthorDTO.authorId = "0";
          songCoauthorDTO.coauthorFunction = "MUSIC";
          songCoauthorDTO.songId = "0";

          instance.updateUsingPUT3(songCoauthorDTO, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SongbookApi.SongCoauthorDTO);
            expect(data.authorId).to.be.a('number');
            expect(data.authorId).to.be("0");
            expect(data.coauthorFunction).to.be.a('string');
            expect(data.coauthorFunction).to.be("MUSIC");
            expect(data.songId).to.be.a('number');
            expect(data.songId).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
