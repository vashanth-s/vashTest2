import fetch from 'node-fetch';

(async () => {
    const t1 = Date.now();

    for (const x of [...Array(100).keys()]) {
        const response = await fetch(
            'http://localhost:3000/check', { method: 'GET' }
        );

        await new Promise((resolve) => setTimeout(resolve, 100));
    
        console.log(await response.text());
    }

    console.log(Date.now() - t1);
})();
