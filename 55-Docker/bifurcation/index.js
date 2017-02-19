const {send} = require('micro'),
    url = require('url'),
    id = Math.ceil(Math.random() * 999999);
 
module.exports = async (req, res) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let parseUrl = url.parse(req.url);
        console.log(`bifurcation (${id}): request from ${parseUrl.pathname} with query ${parseUrl.query}`);
        if (parseUrl.query) {
            let queries = parseUrl.query.split('&'),
                data = {};
            queries.forEach(query => {
                let queryParts = query.split('=');
                data[queryParts[0]] = Number(queryParts[1]);
            });
            let x = Math.random(), result = []; 
            for (let i = 0; i < 100; i += 1) {
                let xn = x * data.r * (1.0 - x); 
                if (i > 10) {
                    result.push(xn);
                }
                x = xn;
            }
            send(res, 200, {
                id,
                result 
            });
        }
        else {
            send(res, 400, { error: 'Need r and x values!'});
        }
    }
    catch(e) {
        console.log('descriptions error:', e);
        send(res, 500, e.message);
    }
}