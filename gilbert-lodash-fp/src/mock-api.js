//import * as Promise from 'bluebird';

let api = {
  smell : (cb) => {
    setTimeout(cb.bind(null, { "aroma" : "cherry" }), 200);
    // of coz we can do this instead
    // return Promise.delay(2000, { "aroma" : "cherry" });
  },
  sip : (cb) => {
    setTimeout(cb.bind(null, { "taste" : "plum" }), 300);
    // of coz we can do this instead
    // return Promise.delay(3000, { "taste" : "plum" });
  },
  look : (cb) => {
    setTimeout(cb.bind(null, { "color" : "red" }), 100);
    // of coz we can do this instead
    // return Promise.delay(5000, { "color" : "red" });
  }
};

export default api;
