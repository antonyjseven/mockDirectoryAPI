const validateResponse = require('../mock/validateResponse');
module.exports = function(app) {
    app.get('/api/auth/validate', (req, res) => {
        res.send(validateResponse);
    });
};
