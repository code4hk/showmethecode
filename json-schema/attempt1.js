var Ajv = require('ajv');
var ajv = new Ajv();

var reaction = {
  id: 123,
  date: '2016-11-29T05:41:02+00:00',
  reaction: 'LIKE'
}

var reactionSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'number'
    },
    date: {
      type: 'string',
      format: 'date-time'
    },
    siteUrl: {
      type: 'string',
      format: 'uri'
    },
    reaction: {
     enum : ['LOVE', 'LIKE']
   }
  },
  required: ['id']
}
//
var correct = Object.assign({}, reaction);
ajv.validate(reactionSchema, correct)
console.log('correct, errors:');
console.log(ajv.errors);

var withWrongUrl = Object.assign({}, reaction);
withWrongUrl.siteUrl = 'hk.appledaily.com'
ajv.validate(reactionSchema, withWrongUrl)
console.log('wrong url, errors:');
console.log(ajv.errors);

var noId = Object.assign({}, reaction);
delete noId.id
ajv.validate(reactionSchema, noId)
console.log(ajv.errors);

var wrongDatetime = Object.assign({}, reaction);
wrongDatetime.date ='2016-11-29'
ajv.validate(reactionSchema, wrongDatetime)
console.log(ajv.errors);

var wrongReaction = Object.assign({}, reaction);
wrongReaction.reaction = 'CHAM'
ajv.validate(reactionSchema, wrongReaction)
console.log(ajv.errors);
