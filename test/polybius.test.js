// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius Square", () => {
  describe("encode", () => {
    it(`(thinkful) should be equal to "4432423352125413"`, () => {
      const actual = polybius("thinkful");
      const expected = "4432423352125413";
      expect(actual).to.be.equal(expected);
    });

    it(`("Hello world") should be equal to "3251131343 2543241341"`, () => {
      const actual = polybius("Hello world");
      const expected = "3251131343 2543241341";
      expect(actual).to.be.equal(expected);
    });
  });

  describe("decode", () => {
    it(`(3251131343 2543241341) should be equal to "hello world"`, () => {
      const actual = polybius("3251131343 2543241341", false);
      const expected = "hello world";
      expect(actual).to.be.equal(expected);
    });

    it("should return false when given an invalid input", () => {
      const expected = false;
      const actual = polybius("44324233521254134", false);
      expect(actual).to.equal(expected);
    });
  });

  describe("submission", () => {
    it(`("message") should be equal to "23513434112251"`, () => {
      const actual = polybius("message");
      const expected = "23513434112251";
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const actual = polybius("A Message");
      const expected = "11 23513434112251";
      expect(actual).to.equal(expected);
    });

    it("When encoding, i and j should translate to 42", () => {
      const actual = "i/j";
      const expected = polybius("42", false);
      expect(actual).to.equal(expected);
    });

    it("When decoding, 42 should translate to i/j", () => {
      const actual = polybius("42", false);
      const expected = "i/j";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces before and after encoding", () => {
      const actual = polybius("s p a c e s");
      const expected = "34 53 11 31 51 34";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces before and after decoding", () => {
      const actual = polybius("34 53 11 31 51 34", false);
      const expected = "s p a c e s";
      expect(actual).to.equal(expected);
    });
  });
});
