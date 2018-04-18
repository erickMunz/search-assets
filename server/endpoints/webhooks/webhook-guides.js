const { logger } = require('../../../utils');
const { updateGuides } = require('../../../data-push/update/guides');
const { init } = require('../../../data-push/init/');
const log = logger('webhook-guides');

module.exports = function(app) {
  app.post('/guides', (req, res) => {
    //init();
    //updateGuides();
    res.sendStatus(200).end();
    log('Lo active yo', 'blue');
    if (!req.body || !req.body.action || !req.body.pull_request) {
      log('not GitHub POST request', 'yellow');
      res.sendStatus(400).end();
      return;
    }
    const { action, pull_request: { base, merged } } = req.body;
    if (action === 'closed' && base.ref === 'master' && merged) {
      log('Updating the guides from a webhook');
      updateGuides();
      res.sendStatus(200).end();
    } else {
      log('webhook triggered by Github, not a merged PR', 'blue');
      res.sendStatus(200).end();
    }
  });
};
