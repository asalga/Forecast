module.exports = {

    getDataByCityName(city) {
        let api = 'b35827e52f2e77d232dfbb7634a24a99';

        // 5 days * 8 samplers per day = 40
        const cnt = 40;

        const promise = new Promise((res, rej) => {

            const xhr = new XMLHttpRequest();

            xhr.onload = () => {
                res(JSON.parse(xhr.responseText));
            };

            xhr.onerror = () => {
                console.log("XHR ON ERROR");
                rej('error');
            };

            const path = [
                `http://api.openweathermap.org/data/2.5/forecast?`,
                `q=${city}`,
                `&units=metric`,
                `&cnt=${cnt}`,
                `&appid=${api}`
            ].join('');

            xhr.open("GET", path, true);

            xhr.onloadend = () => {
                if (xhr.status === 404) {
                    throw new Error('404 - ', path);
                }
            }

            xhr.send();
        });

        return promise;
    }
}