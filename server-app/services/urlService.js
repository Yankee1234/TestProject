const tokenHelper = require('../helpers/TokenHelper');
const dbHelper = require('../helpers/db/DbHelper');

class UrlService {
    async getShortenedUrl(req, resp) {
        var url = req.body.url;
        var token = tokenHelper.generateToken();

        dbHelper.getMongoClient().connect(async (err, client) => {
            if(err) {
                throw err;
            }

            const collection = dbHelper.getCollection(client, 'Urls');

            var result = await dbHelper.insertItem(collection, {url: url, token: token});


            resp.json(JSON.stringify(result));
        })
    }
}

module.exports = new UrlService();