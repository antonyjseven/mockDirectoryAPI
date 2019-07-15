module.exports = function(app, db) {
    app.get('/api/profiles', (req, res) => {
        res.send(db.getData());
    });
    app.post('/api/profiles', (req, res) => {
        db.setData(req.body);
        res.send('200');
    });
};
