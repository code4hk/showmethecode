import flow from 'yaku/lib/flow';
import sleep from 'yaku/lib/sleep';
import { filter } from 'lodash/fp';

function isBasicLawOK(citizen) {
  return Promise.resolve(true);
}
function isDQable(citizen, basicLawResult) {
  if (citizen === '周庭') {
    return sleep(3000).then(() => true);
  }
  return Promise.resolve(false);
}

test('Promise hell', () => {
  const citizens = ['周庭', '姚松炎'];

  const hkStyleElection = Promise.all(
    citizens.map(citizen => flow([
      citizen => isBasicLawOK(citizen),
      // might not exactly true in this examlpe but often in practice:
      // we need some sort of array /object to carry values forward, if not relying on external scope
      // while chain work best if everyone keep returning the same "shape"
      // then we also need unncessary Promise.all, even for those wait-is-not-needed
      basicLawResult => Promise.all(
        [citizen, isDQable(citizen, basicLawResult)],
      ),
    ])(citizen)),
  )
  // destructing helps but still unncessarily complicated
    .then(results =>
      results.filter(([citizen, isDQed]) => !isDQed)
        .map(([citizen, isDQed]) => citizen),
    );

  return hkStyleElection.then(
    results => expect(results).toEqual(['姚松炎']),
  );
},
);

