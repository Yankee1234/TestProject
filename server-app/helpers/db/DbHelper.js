const config = require('../../config/config')
const MongoClient = require('mongodb').MongoClient;

class DbHelper {

    async findItem(collection, options) {
        return new Promise((resolve) => {
            collection.findOne(options, (err, result) => {
                if(err) {
                    throw err;
                }

                if(!result) {
                    resolve(false);
                }
                else resolve(result);
            });
        })
    }

    async insertItem(collection, item) {
        return new Promise(async (resolve) => {
            var result = await this.findItem(collection, {url: item.url});
            if(!result) {
                collection.insertOne(item, async (err, result) => {
                    if(err) {
                        throw err;
                    }

                    if(result) {
                        resolve(true);
                    }

                    else resolve(null);

                })
            }

            resolve(result);
            
        })
    }

    getMongoClient() {
        return new MongoClient(config.connection_string, {useNewUrlParser: true, useUnifiedTopology: true});
    }

    getCollection(client, name) {
        return client.db(config.db_name).collection(name);
    }
}

module.exports = new DbHelper();