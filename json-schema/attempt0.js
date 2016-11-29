var _ = require('lodash')
var fp = require('lodash/fp')

var reaction = {
  id: 123,
  reaction: 'LIKE'
}

var reactionSchema = {
  id: _.isNumber,
  reaction: _.partial(_.includes,['LIKE','HAHA'])
}

var apiSchmea = {
  key: _.isString,
  reaction: fp.conformsTo(reactionSchema)
}

var result = _.conformsTo(reaction, reactionSchema)
console.log(result);

var apiResult = {
  key: 'tw1234',
  reaction: reaction
}

var result = _.conformsTo(apiResult, apiSchmea)
console.log(result);

var badResult = {
  key: null,
  reaction: reaction
}

var result = _.conformsTo(badResult, apiSchmea)
console.log(result);
