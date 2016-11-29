var Ajv = require('ajv');
var ajv = new Ajv();
var _ = require('lodash');
var fp = require('lodash/fp');

// https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md
// https://github.com/epoberezkin/ajv#defining-custom-keywords

var text1 = '有種，文體，叫，鄺體';

var text2 = '鄺俊宇喜愛hip hop舞舞蹈，有「Hip Hop議員」的稱號，早於2007年香港區議會選舉，他以hip hop舞突出自己，無綫電視曾採訪他。';

ajv.addKeyword('kwong', {
  type: 'string',
  compile: function (kwongRatioThreshold, parentSchema) {
    return function (data) {
      var kwongRatio = _.filter(data,fp.isEqual('，')).length / data.length
      console.log(kwongRatio);
      return kwongRatio  > kwongRatioThreshold
    }
} });

var schema = {
    type: "string",
    kwong: 0.25
};
var validate = ajv.compile(schema);
console.log(text1);
console.log(validate(text1));
console.log(text2);
console.log(validate(text2));
