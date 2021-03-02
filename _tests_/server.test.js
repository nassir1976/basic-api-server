'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.server);


// ========== Server Tests==============

describe('All tests', () => {

  describe('404 Test', () => {
    it('should pass 404 on a bad route', async () => {
      const response = await request.get('/test');
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('not found')
    });
  });


  it('should pass 404 on a bad method', async () => {
    const response = await request.post('/food/test');

    expect(response.status).toEqual(404);
    expect(response.text).toEqual('not found');

  });
  // =========== test Clothes ==============

  // post......creat//
  it('Should Create a record using POST /clothes', async () => {

    const response = await request.post('/clothes').send({
      name: 'jeans',
      type: 'pant',
    });
    const response2 = await request.post('/clothes').send({
      name: 'Hiking Boots',
      type: 'Shoe',
    });
    // console.log(response.body)
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.record.name).toEqual('jeans');
    expect(response2.body.record.name).toEqual('Hiking Boots');
  });

  // get ...read//
  it('should Read a list of records using GET /clothes', async () => {
    const response = await request.get('/clothes');


    expect(response.status).toEqual(200);
    expect(response.body[0].id).toEqual(1);
    expect(response.body[1].id).toEqual(2);
  });
  //get by id ... read by id//
  it('should Read a record using GET /clothes', async () => {
    const response = await request.get('/clothes/1');

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  //put ...update//
  it('should Update a record using PUT /clothes/:id', async () => {
    await request.post('/clothes').send({
      name: 'jeans',
      type: 'pant',
    });
    const response = await request.put('/clothes/1').send({
      name: 'slicker',
      type: 'Raincoat',
    });


    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.record.name).toEqual('slicker');
  });

// delete... destroy//
  it('should Destroy a record using DELETE - clothes', async () => {
    const response = await request.delete('/clothes/1');

    expect(response.status).toEqual(204);
  });


  // ============ Food Tests =========

  it('Should Create a record using POST /food', async () => {

    const response = await request.post('/food').send({
      name: 'injera',
      type: 'ethio-cuisine',
    });
    const response2 = await request.post('/food').send({
      name: 'burger',
      type: 'fast food',
    });

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.record.name).toEqual('injera');
    expect(response2.body.record.name).toEqual('burger');
  });



  it('should Read a list of records using GET /food', async () => {
    const response = await request.get('/food');


    expect(response.status).toEqual(200);
    expect(response.body[0].id).toEqual(1);
    expect(response.body[1].id).toEqual(2);
  });



  it('should Read a record using GET by id /food', async () => {
    await request.post('/food').send({
      name: 'injera',
      type: 'ethio-cuisine',
    });
    const response = await request.get('/food/1');
    console.log(response.body)

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });


  it('should Update a record using PUT /food/:id', async () => {
    await request.post('/food').send({
      name: 'injera',
      type: 'ethio-cuisine',
    });
    const response = await request.put('/food/1').send({
      name: 'Carbonara',
      type: 'Italian pasta dish',
    });

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.record.name).toEqual('Carbonara');
  });


  it('should Destroy a record using DELETE - food', async () => {
    const response = await request.delete('/food/1');

    expect(response.status).toEqual(204);
  });

});