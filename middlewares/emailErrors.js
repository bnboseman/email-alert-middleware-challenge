const {sendEmail} = require('../emailer.js');

const emailErrorsMiddleware = (errorTypes) => (error, request, response, next) => {
  if (errorTypes.includes(error.name)) {
    const data = {
      'FromEmail': 'bnboseman@gmail.com',
      'FromName': 'SERVICE ALERTS',
      'Subject': `ALERT: a ${error.name} occurred`,
      'Text-part': `Something went wrong!!\n${error.message}\n${error.stack}`,
      'Recipients': [{'Email': 'bnboseman@gmail.com'}]
    };
    sendEmail(data);
  }
  next(error);
};

module.exports = {emailErrorsMiddleware};