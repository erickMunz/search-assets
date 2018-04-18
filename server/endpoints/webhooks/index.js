const express = require('express');
const bodyParser = require('body-parser');
const guidesWebhook = require('./webhook-guides');
// const challengesWebhook = require('./webhook-challenges');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
guidesWebhook(router);
// TODO
// challengesWebhook(router);
// youtubeWebook(router);

module.exports = router;
