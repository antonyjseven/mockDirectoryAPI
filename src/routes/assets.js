const assetClassesAll = require('../mock/assetClassesAll');
const geographicalFocusAll = require('../mock/geographicalFocusAll');
const jobFunctionsAll = require('../mock/jobFunctionsAll');
const url = '/api/rcs';
module.exports = function(app) {
    app.get(`${url}/asset_classes_all`, (req, res) => {
        res.send(assetClassesAll);
    });
    app.get(`${url}/geographical_focuses_all`, (req, res) => {
        res.send(geographicalFocusAll);
    });
    app.get(`${url}/job_functions_all`, (req, res) => {
        res.send(jobFunctionsAll);
    });
};
