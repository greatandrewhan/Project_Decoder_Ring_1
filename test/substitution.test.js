// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution Cipher", () => {
  describe("encode", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const actual = substitution("thinkful");
      expect(actual).to.be.false;
    });

    it("should return false if the alphabet is not a string", () => {
      const actual = substitution("thinkful, 0");
      expect(actual).to.be.false;
    });

    it(`("thinkful", "xoyqmcgrukswaflnthdjpzibev") should be equal to 'jrufscpw'`, () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "jrufscpw";
      expect(actual).to.equal(expected);
    });

    it(`("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev") should be equal to 'elp xhm xf mbymwwmfj dne'`, () => {
      const actual = substitution(
        "You are an excellent spy",
        "xoyqmcgrukswaflnthdjpzibev"
      );
      const expected = "elp xhm xf mbymwwmfj dne";
      expect(actual).to.equal(expected);
    });

    it(`("message", "$wae&zrdxtfcygvuhbijnokmpl") should be equal to "y&ii$r&"`, () => {
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      const expected = "y&ii$r&";
      expect(actual).to.equal(expected);
    });
  });

  describe("decode", () => {
    it(`("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false) should be equal to 'thinkful'`, () => {
      const actual = substitution(
        "jrufscpw",
        "xoyqmcgrukswaflnthdjpzibev",
        false
      );
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });

    it(`("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false) should be equal to 'thinkful'`, () => {
      const actual = substitution(
        "jrufscpw",
        "xoyqmcgrukswaflnthdjpzibev",
        false
      );
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });

    it(`("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false) should be equal to 'thinkful'`, () => {
      const actual = substitution(
        "jrufscpw",
        "xoyqmcgrukswaflnthdjpzibev",
        false
      );
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });

    it(`("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false) should be equal to "message"`, () => {
      const actual = substitution(
        "y&ii$r&",
        "$wae&zrdxtfcygvuhbijnokmpl",
        false
      );
      const expected = "message";
      expect(actual).to.equal(expected);
    });
  });

  describe("submission", () => {
    it(`("message", "plmoknijbuhvygctfxrdzeswaq") should be equal to "ykrrpik"`, () => {
      const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
      const expected = "ykrrpik";
      expect(actual).to.equal(expected);
    });

    it(`should return false if the given alphabet isn't exactly 26 characters long`, () => {
      const actual = substitution("thinkful", "short");
      expect(actual).to.be.false;
    });

    it(`should return false if there are any duplicate characters in the given alphabet`, () => {
      const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
      expect(actual).to.be.false;
    });

    it("maintains spaces in the message, before and after encoding or decoding", () => {
      const actual = substitution(
        "maintains spaces in the message",
        "xoyqmcgrukswaflnthdjpzibev"
      );
      const expected = "axufjxufd dnxymd uf jrm amddxgm";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const actual = substitution("A Message", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "x amddxgm";
      expect(actual).to.equal(expected);
    });
  });
});
