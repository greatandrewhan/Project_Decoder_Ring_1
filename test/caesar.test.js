// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar Shift", () => {
  describe("encode", () => {
    it(`("thinkful", 3) should be equal to 'wklqnixo'`, () => {
      const actual = caesar("thinkful", 3);
      const expected = "wklqnixo";
      expect(actual).to.be.equal(expected);
    });

    it(`("thinkful", -3) should be equal to 'qefkhcri'`, () => {
      const actual = caesar("thinkful", -3);
      const expected = "qefkhcri";
      expect(actual).to.be.equal(expected);
    });

    it(`("This is a secret message!", 8) should be equal to 'bpqa qa i amkzmb umaaiom!'`, () => {
      const actual = caesar("This is a secret message!", 8);
      const expected = "bpqa qa i amkzmb umaaiom!";
      expect(actual).to.be.equal(expected);
    });
  });

  describe("decode", () => {
    it(`("wklqnixo", 3, false) should be equal to 'wklqnixo'`, () => {
      const actual = caesar("wklqnixo", 3, false);
      const expected = "thinkful";
      expect(actual).to.be.equal(expected);
    });

    it(`("BPQA qa I amkzmb umaaiom!", 8, false) should be equal to 'this is a secret message!'`, () => {
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
      const expected = "this is a secret message!";
      expect(actual).to.be.equal(expected);
    });
  });

  describe("submission", () => {
    it(`caesar("Zebra Magazine", 3) should be equal to "cheud pdjdclqh"`, () => {
      const actual = caesar("Zebra Magazine", 3);
      const expected = "cheud pdjdclqh";
      expect(actual).to.be.equal(expected);
    });

    it("should return false if the shift is not supplied", () => {
      const actual = caesar("thinkful");
      const expected = false;
      expect(actual).to.be.equal(expected);
    });

    it("should return false if shift is 0", () => {
      const actual = caesar("thinkful", 0);
      const expected = false;
      expect(actual).to.be.equal(expected);
    });

    it("should return false if shift is less than -25", () => {
      const actual = caesar("thinkful", -26);
      const expected = false;
      expect(actual).to.be.equal(expected);
    });

    it("should return false if shift is greater than 25", () => {
      const actual = caesar("thinkful", 26);
      const expected = false;
      expect(actual).to.be.equal(expected);
    });

    it("should ignore capital letters", () => {
      const actual = caesar("A Message", 3);
      const expected = "d phvvdjh";
      expect(actual).to.be.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const actual = caesar("zebra magazine", 3);
      const expected = "cheud pdjdclqh";
      expect(actual).to.be.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const actual = caesar("zebra magazine", -3);
      const expected = "wbyox jxdxwfkb";
      expect(actual).to.be.equal(expected);
    });
  });
});
