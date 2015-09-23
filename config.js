'use strict';

var config = {
    "templateBucket" : "madebytr-emails",
    "templateKey" : "contact-message.html",
    "targetAddress" : "tyler@madebytr.com",
    "fromAddress": "Madebytr.com <bot@madebytr.com>",
    "defaultSubject" : "Inquiry on MBTR From {{name}}",
};

module.exports = config;
