const createVast = require('vast-builder');

function generateMinimalVast() {
  return createVast.v2()
    .attachAd()
    .attachInLine()
    .addImpression('imp_link')
    .addAdSystem('Society')
    .addAdTitle('Title')
    .attachCreatives()
    .attachCreative()
    .attachLinear()
    .addDuration('00:30:00')
    .attachMediaFiles()
    .attachMediaFile('my_video', {
      delivery: 'streaming',
      type: 'video/mp4',
      width: '600',
      height: '400'
    }).toXml()
}

describe('vast builder stress test', () => {
  xit('poc the render', () => {
    console.log(generateMinimalVast());
  });
  it('should generate 100000 vast', () => {
    for (let i = 0; i < 500000; i++) {
      generateMinimalVast()
    }
  }).timeout(60000);
});