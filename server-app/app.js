const app = require('express')();
const config = require('./config/config');
const corsHelper = require('./helpers/CorsHelper');
const urlService = require('./services/urlService');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, resp, next) => {
    corsHelper.unabledCorsPolicy(resp, next);
})

app.post('/', urlService.getShortenedUrl);

app.listen(config.port, (err) => {
    if(err) throw err;

    console.log('Server has started');
})