'use strict';

var will = require('willy').will;
var app = require('../app.js');

describe('1-10', function () {
  it('1 -> I', function () {
    will(app(1)).be('I');
  });

  it('2 -> II', function () {
    will(app(2)).be('II');
  });

  it('3 -> III', function () {
    will(app(3)).be('III');
  });

  it('4 -> IV', function () {
    will(app(4)).be('IV');
  });

  it('5 -> V', function () {
    will(app(5)).be('V');
  });

  it('6 -> VI', function () {
    will(app(6)).be('VI');
  });

  it('7 -> VII', function () {
    will(app(7)).be('VII');
  });

  it('8 -> VIII', function () {
    will(app(8)).be('VIII');
  });

  it('9 -> IX', function () {
    will(app(9)).be('IX');
  });

  it('10 -> X', function () {
    will(app(10)).be('X');
  });
});

describe('10-20', function () {
  it('should work', function () {
    var map = {
      11: 'XI',
      12: 'XII',
      13: 'XIII',
      14: 'XIV',
      15: 'XV',
      16: 'XVI',
      17: 'XVII',
      18: 'XVIII',
      19: 'XIX',
      20: 'XX'
    };

    Object.keys(map).forEach(function (num) {
      num = parseInt(num, 10);
      console.log('    %s -> %s', num, map[num]);
      will(app(num)).be(map[num]);
    });
  });
});

xdescribe('spot check', function () {
  it('should also work', function () {
    var map = {
      50: 'L',
      51: 'LI',
      59: 'LIX',
      207: 'CCVII',
      1066: 'MLXVI',
      1904: 'MCMIV',
      1954: 'MCMLIV',
      1990: 'MCMXC',
      2014: 'MMXIV'
    };

    Object.keys(map).forEach(function (num) {
      num = parseInt(num, 10);
      console.log('    %s -> %s', num, map[num]);
      will(app(num)).be(map[num]);
    });
  });
});

describe('invalid values', function () {
  it('returns undefined for negatives', function () {
    will(app(-1)).be(undefined);
  });

  it('returns undefined for 0', function () {
    will(app(0)).be(undefined);
  });
});
