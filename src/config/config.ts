const production = {
        url: process.env["PROD_SERVER_URL"] 
    };
const development = {
        url: 'http://localhost:4000'
    };

export const config = process.env["NODE_ENV"] === 'development' ? development : production;