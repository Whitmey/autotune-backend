const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

global.__basedir = __dirname; // Set project root

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('AutoTune Algorithm API server started on: ' + port);
// oref0-autotune --dir=~/myopenaps --ns-host=https:william-cgm.herokuapp.com --start-date=YYYY-MM-DD
// /Users/willwhitmey/autotune-backend/node_modules/oref0/bin/oref0-autotune.sh
