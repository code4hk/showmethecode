import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import mockApi from '../src/mock-api';

describe('Mock API', function() {
  it("should look", function(done) {
    mockApi.look(function(result) {
      result.should.be.a('object').that.have.property('color');
      done();
    });
  });
  it("should smell", function(done) {
    mockApi.smell(function(result) {
      result.should.be.a('object').that.have.property('aroma');
      done();
    });
  });
  it("should sip", function(done) {
    mockApi.sip(function(result) {
      result.should.be.a('object').that.have.property('taste');
      done();
    });
  });
});
