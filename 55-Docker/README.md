# Using Angular with Docker 

## Service 

In this first step, you will create a service for use by an Angular app and learn how to create an image for it. The service will take a number in the query string and return an array of iterations using something known as a [bifurcation diagram](https://en.wikipedia.org/wiki/Bifurcation_diagram). The bifurcation diagram uses a straightforward recursive function: 

> *x(n+1) = x(n) * r * (1.0 - x(n))*

The *x* represents a percetnage of potential population and the *r* is a factor for environment. The *x* value is typically in the range of 0 to 1 and the *r* value is typically between 0 and 4. 

1. Create a new directory `bifurcation` 

2. Set it as working directory and run `npm init` 

3. Take all of the defaults or enter a description and license as desired 

4. Add the following section to `package.json`: 

```JavaScript
"dependencies": {
    "micro": "~6.2.0"
}
````

5. Install the `micro` package with `npm i` 

6. Create a `.gitignore` file and add `node_modules` 

7. Create an `index.js` and populate it with this service: 

```JavaScript 
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
```

The service tags itself with a unique identifier. It parses the query string to get the *r* value, then loads an array with the result of 89 iterations (it ignores the first 11 to allow the *x* value to settle). See how `micro` makes it easy to parse the request and send a response. 

8. In the `package.json` add the following to the `scripts` section: 

```JavaScript
"start" : "micro" 
```

9. On the command line, run the service using `npm start` and test it by browsing to [http://localhost:3000?r=3.2](http://localhost:3000?r=3.2) and verify you receive a result.

10. Stop the service and create a `.dockerignore` and `Dockerfile` 

11. Add `node_modules` and `.gitignore` to the `.dockerignore` file 

12. In the `Dockerfile` add: 

`FROM node:6-onbuild`

`EXPOSE 3000` 

This first line uses a special image that will package the current Node.js app, and the second line allows the port to be accessed.

13. Build the Docker image: `docker build -t bifurc .` 

14. Run the Docker image: `docker run -i --name bifurcsvc -p 3000:3000 bifurc` 

15. Test the image works by browsing to the same endpoint you did earlier




