/**
 * Functional Programming with Bans, Lenses, Envelopes, and Barbed Wires
 */
import _ from 'lodash';
import Promise from 'bluebird';
import api from './mock-api';

let _comment = (obj) => {
  //can do _.reduce here
  return `Color is ${obj.color}. Aroma is ${obj.aroma}. Taste is ${obj.taste}.`;
};

let _callApi = (apiMethodName, commentObj = {}) => {
  return new Promise((resolve, reject) => {
    api[apiMethodName]((obj) => {
      resolve(_.merge(commentObj, obj));
    })
  });
};

let _tasteImpl = (senses, sensesObj = {}) => {
  //Hylomorphism
  //over optimized because bad abstraction
  //just to show currying
  if (senses.length === 0) {
    return Promise.resolve(_comment(sensesObj));
  } else {
    return _callApi(_.head(senses), sensesObj)
      //bad
      .then((result) => { return _.curry(_tasteImpl)(_.tail(senses), result); });
  }
};

let WineLover = {
  taste : (beverage) => {
    if (beverage === 'Wine') {
      let senses = ['look', 'smell', 'sip'];
      return _tasteImpl(senses);
    } else {
      return Promise.resolve("I only drink wine.");
    }
  }
};

export default WineLover;

