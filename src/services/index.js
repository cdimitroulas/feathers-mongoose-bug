const skills = require('./skills/skills.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(skills);
};
