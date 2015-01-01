if(typeof exports === 'object') {
	var assert = require("assert");
	var alasql = require('../alasql.js');
};

describe('Test 54 - SELECT Number', function() {
	it('SELECT number', function(done){
		alasql('create database test54');
		alasql('use test54');

		assert(10 == alasql('SELECT VALUE 10'));
		assert.deepEqual([10,20],alasql('SELECT ROW 10,20'));
		assert(4 == alasql('SELECT VALUE 2+2'));
		assert("Peter" == alasql('SELECT VALUE "Peter"'));
		assert(10 == alasql('SELECT VALUE a FROM (SELECT 10 AS a) AS t'));
		assert(10 == alasql('SELECT VALUE a FROM (SELECT 10 as a)'));
		assert.deepEqual([10,20], alasql('SELECT COLUMN a FROM (SELECT 10 as a UNION ALL SELECT 20 as a)'));
		done();
	});
});
