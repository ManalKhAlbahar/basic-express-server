'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('testing server', () => {
    it('test 404 on a bad route', async () => {
        const response = await request.get('/persons');
        expect(response.status).toEqual(404);
    })
    it('test 500 if no name in the query string', async () => {
        const response = await request.get('/person?name');
        expect(response.status).toEqual(500)
    })
    it('test 200 if the name is in the query string', async () => {
        const response = await request.get('/person?name=fred');
        expect(response.status).toEqual(200)
    })

})