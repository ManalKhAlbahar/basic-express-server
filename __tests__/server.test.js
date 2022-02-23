'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('testing API server', () => {

    it('testing /', async () => {
        const response = await request.get('/');
        expect(response.text).toEqual('Home Route');
    })

    it('test /person', async () => {
        const response = await request.get('/person');
        expect(typeof response.body).toEqual('object')
    })

})