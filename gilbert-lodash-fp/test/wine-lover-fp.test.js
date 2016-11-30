import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import wineLover from '../src/wine-lover-fp';

chai.use(chaiAsPromised);
let should = chai.should();

describe('WineLover Function', function() {
  //Use JSON schema FTW
  it('should able to taste(beverage)', function() {
    wineLover
      .should.have.property('taste')
      .that.is.a('function');
  });
  it('should taste and give comment', function(done) {
    wineLover.taste("Wine")
      .should.eventually.be.a('string')
      .notify(done);
  });
  it('should only taste wine', function(done) {
    wineLover.taste("Beer")
      .should.eventually.be.a('string')
      .and.be.equal("I only drink wine.")
      .notify(done);
  });
  it('should give accurate tasting', function(done) {
    //QA write this, another continent to conquer!
    let color = { color : "red" };
    let aroma = { aroma : "cherry" };
    let taste = { taste : "plum" };
    let comment = '';
    comment += `Color is ${color.color}. `;
    comment += `Aroma is ${aroma.aroma}. `;
    comment += `Taste is ${taste.taste}. `;
    wineLover.taste("Wine")
      .should.eventually.be.a('string')
      .and.be.equal(comment)
      .notify(done);
  })
});