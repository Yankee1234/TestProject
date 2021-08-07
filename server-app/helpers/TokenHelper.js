class TokenHelper {
    generateToken() {
        var result = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charLength = chars.length;

        for(let i = 0; i < 5; i++) {
            result += chars.charAt(Math.floor(Math.random() * charLength));
        }

        return result;
    }
}

module.exports = new TokenHelper();