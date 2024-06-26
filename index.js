/**
 * @module bgl-units
 */

var Big = require('big.js');

// @private
var conversion = 100000000;

// es6 polyfill
if (!Number.isInteger) {
  Number.isInteger = function (num) {
    return typeof num === 'number' && num % 1 === 0;
  }
}

// @private
function toNumber(notNum) {
  return Number(notNum);
}

module.exports = {

  /**
   * Convert Satoshi(smallest BGL units) to BGL
   * @param {number|string} satoshi (BGL units) Amount of Satoshi to convert. Must be a whole number
   * @throws {TypeError} Thrown if input is not a number or string
   * @throws {TypeError} Thrown if input is not a whole number or string format whole number
   * @returns {number}
   */
  toBGL: function (satoshi) {
    //validate arg
    var satoshiType = typeof satoshi;
    if (satoshiType === 'string') {
      satoshi = toNumber(satoshi);
      satoshiType = 'number';
    }
    if (satoshiType !== 'number') {
      throw new TypeError('toBitcoin must be called on a number or string, got ' + satoshiType);
    }
    if (!Number.isInteger(satoshi)) {
      throw new TypeError('toBitcoin must be called on a whole number or string format whole number');
    }

    var bigSatoshiUnits = new Big(satoshi);
    return Number(bigSatoshiUnits.div(conversion));
  },

  /**
   * Convert Bitgesell to Satoshi units
   * @param {number|string} bitcoin Amount of Bitcoin to convert
   * @throws {TypeError} Thrown if input is not a number or string
   * @returns {number}
   */
  toSatoshiUnits: function (BGL) {
    //validate arg
    var bitgesellType = typeof BGL;
    if (bitgesellType === 'string') {
      bitcoin = toNumber(BGL);
      bitgesellType = 'number';
    }
    if (bitgesellType !== 'number') {
      throw new TypeError('toSatoshi must be called on a number or string, got ' + bitgesellType);
    }

    var bigBitgesell = new Big(BGL);
    return Number(bigBitgesell.times(conversion));
  }

};
