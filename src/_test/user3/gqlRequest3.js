const request = require('supertest');
const url = 'http://localhost:5000'; // Убедитесь, что это правильный URL для вашего сервера

function gqlRequest3(postData) {
    return request(url)
        .post('/') // Убедитесь, что это правильный путь для вашего GraphQL сервера
        .send(postData);
}

module.exports = gqlRequest3;
