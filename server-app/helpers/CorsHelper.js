class CorsHelper { 
    unabledCorsPolicy(resp, next) {
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");

        resp.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        resp.setHeader("Access-Control-Allow-Credentials", true);
        next(); 
    }
}

module.exports = new CorsHelper();