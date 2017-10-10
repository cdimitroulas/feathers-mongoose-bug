// Initializes the `skills` service on path `/skills`
const createService = require('feathers-mongoose');
const createModel = require('../../models/skills.model');
const hooks = require('./skills.hooks');
const filters = require('./skills.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'skills',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/skills', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('skills');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
