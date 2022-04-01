module.exports = {
    celciusToFahrenheit(c) {
        return 9 / 5 * c + 32;
    },

    fahrenheitToCelcius(f) {
        return 5 / 9 * (f - 32);
    }
};