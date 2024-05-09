var should = require('chai').should();
var bglunits = require('../index.js');

describe('#toBGL', function () {
  it('converts simple integer amounts', function () {
    bglunits.toBGL(100000000).should.equal(1);
    bglunits.toBGL(123456789012345).should.equal(1234567.89012345);
  });
  it('converts simple string amounts', function () {
    bglunits.toBGL('100000000').should.equal(1);
    bglunits.toBGL('123456789012345').should.equal(1234567.89012345);
  });

  it('converts to Bitcoin, not to Satoshi', function () {
    bglunits.toBGL(98765).should.not.equal(9876500000000);
  });

  it('converts and handles corner case rounding', function () {
    bglunits.toBGL(46).should.equal(.00000046);
  });

  it('handles TypeError input', function () {
    bglunits.toBGL.bind(this, true).should.throw('toBGL must be called on a number or string');
    bglunits.toBGL.bind(this, 1.1).should.throw('toBGL must be called on a whole number or string format whole number');
  });
});

describe('#toSatoshiUnits', function () {
  it('converts simple integer amounts', function () {
    bglunits.toSatoshiUnits(0.00000001).should.equal(1);
    bglunits.toSatoshiUnits(98765).should.equal(9876500000000);
  });
  it('converts simple string amounts', function () {
    bglunits.toSatoshiUnits('0.00000001').should.equal(1);
    bglunits.toSatoshiUnits('98765').should.equal(9876500000000);
  });

  it('converts to Satoshi, not to Bitcoin', function () {
    bglunits.toSatoshiUnits(123456789012345).should.not.equal(1234567.89012345);
  });

  it('converts and handles corner case rounding', function () {
    bglunits.toSatoshiUnits(4.6).should.equal(460000000);
  });

  it('handles TypeError input', function () {
    bglunits.toSatoshiUnits.bind(this, true).should.throw('toSatoshiUnits must be called on a number or string');
  });
});
