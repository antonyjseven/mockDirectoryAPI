const profileRoutes = require('./profile');
const validationRoutes = require('./validation');
const assetRoutes = require('./assets');
module.exports = function(app, db) {
    profileRoutes(app, db);
    validationRoutes(app);
    assetRoutes(app);
};
