// const { it } = require('jest-circus');
const Manager = require('../lib/manager');

// const { isTypedArray } = require('util/types');
// const { hasUncaughtExceptionCaptureCallback } = require('process');


    it('set the constructor arguments',() => {
    const office = 100;
    const e = new Manager('John',266768,'john@zipmail.com',100);
    expect(e.officenumber).toBe(office);


    })