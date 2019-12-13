'use strict';

const test = require('supertape');
const itype = require('..');

test('itype', (t) => {
    t.equal(itype(global), 'global', 'should return object');
    t.end();
});

test('itype.array', (t) => {
    t.ok(itype.array([]), 'should return array');
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

test('itype.undefined: true', (t) => {
    t.ok(itype.undefined(undefined), 'should return true');
    t.end();
});

test('itype.undefined: false', (t) => {
    t.notOk(itype.undefined(null), 'should return false');
    t.end();
});

test('itype.null: true', (t) => {
    t.ok(itype.null(null), 'should return true');
    t.end();
});

test('itype.null: false', (t) => {
    t.notOk(itype.null(undefined), 'should return false');
    t.end();
});
