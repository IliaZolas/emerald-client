const production = {
        url: 'https://emerald-server-production.up.railway.app'    
    };
const development = {
        url: 'http://localhost:4000'
    };

export const config = process.env["NODE_ENV"] === 'development' ? development : production;