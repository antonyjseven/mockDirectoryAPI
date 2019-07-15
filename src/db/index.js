const userInfo = require('../mock/user.json');
let db = userInfo;

module.exports = {
    getData: function () { return db},
    setData: function (payload) { db = payload}
};
