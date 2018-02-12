const VAST = require('vast-xml');

function generateMinimalVast() {
  const vast = new VAST();
  const ad = vast.attachAd({
    id: 1,
    structure: 'inline',
    AdTitle: 'Common name of the ad',
    AdSystem: { name: 'Test Ad Server', version: '1.0' }
  })
  ad.attachImpression({
    id: "23",
    url: "http://impression.com"
  });
  const creative = ad.attachCreative('Linear', {
    AdParameters: '<xml></xml>',
    Duration: '00:00:30'
  });
  creative.attachMediaFile('http://domain.com/file.ext', {
    id: "22",
    type: "video/mp4",
    bitrate: "320",
    minBitrate: "320",
    maxBitrate: "320",
    width: "640",
    height: "360",
    scalable: "true",
    maintainAspectRatio: "true",
    codec: "",
    apiFramework: "VPAID"
  });
  return vast.xml({ pretty: true, indent: '  ', newline: '\n' });
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