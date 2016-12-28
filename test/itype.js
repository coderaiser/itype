'use strict';

const test = require('tape');
const itype = require('..');

test('itype', (t) => {
    t.equal(itype(global), 'global', 'should return object');
    t.end();
});

test('itype.array', (t) => {
    t.equal(itype.array([]), 'array', 'should return array');
    t.end();
});

test('itype.string: true', (t) => {
    t.ok(itype.string(''), 'should return true');
    t.end();
});

test('itype.string: false', (t) => {
    t.notOk(itype.string(), 'should return false');
    t.end();
});

test('itype.boolean: true', (t) => {
    t.ok(itype.boolean(true), 'should return true');
    t.end();
});

test('itype.boolean: false', (t) => {
    t.notOk(itype.boolean(), 'should return false');
    t.end();
});

