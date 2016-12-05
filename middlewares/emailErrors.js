const {sendEmail} = require('../emailer.js');

const emailErrorsMiddleware = (error, request, response, next) => {
  if (error.name == 'FooError' || error.name == 'BarError') {
    const data = {
      'FromEmail': 'bnboseman@gmail.com',
      'FromName': 'SERVICE ALERTS',
      'Subject': `ALERT: a ${error.name} occurred`,
      'Text-part': `Something went wrong!!\n${error.message}\n${error.stack}`,
      'Recipients': [{'Email': 'bnboseman@gmail.com'}]
    };
    sendEmail(data);
  }
  return next();
};

module.exports = {emailErrorsMiddleware};