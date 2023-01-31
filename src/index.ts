import fetch, { Headers } from 'node-fetch';

(
    async () => {
        try {
            // Add the API key to an header object
            const meta = {
                "x-dune-api-key": "YOUR_API_KEY"
            };
            const header = new Headers(meta);

            //  Call the Dune API
            const response = await fetch('https://api.dune.com/api/v1/query/1258228/execute', {
                method: 'POST',
                headers: header
            });
            const body = await response.text();

            // Log the returned response
            console.log(body);
        } catch (err) {
            console.log(err);
        }
    }
)();
