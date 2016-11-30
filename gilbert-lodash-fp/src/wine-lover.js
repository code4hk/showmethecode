/**
 * Imagine your newly learn Promise, unmotivated 5-year-younger you wrote this
 */
import Promise from 'bluebird';
import api from './mock-api';

let WineLover = {
  taste : (beverage) => {
    let comment = "";
    if (beverage === 'Wine') {
      return new Promise(function(resolve, reject) {
        api.look((color) => {
          comment += `Color is ${color.color}. `;
          api.smell((aroma) => {
            comment += `Aroma is ${aroma.aroma}. `;
            api.sip((taste) => {
              comment += `Taste is ${taste.taste}. `;
              resolve(comment);
            });
          });
        })
      });
    } else {
      comment = "I only drink wine.";
      return Promise.resolve(comment);
    }
  }
};

export default WineLover;
