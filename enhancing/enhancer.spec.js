const { repair, succeed, fail } = require('./enhancer.js');
// test away!

// Everything related to repair()...
// passes = completed && Fail = Completed
// -- TODO => If durability is set to be greater than 100, it should not pass.
describe("enhancer.js", () => {
  describe("repair()", () => {
    it("should make durability from Number to 100...", () => {
      const items = {
        name: "Catherine",
        durability: 43, 
        enhancement: 20, 
      }

      const expects = {
        name: "Catherine",
        durability: 100, 
        enhancement: 20,
      }

      const itemRepaired = repair(items)

      expect(itemRepaired).toEqual(expects)
    })
  })
})

// Everything related to success()...
// You are able to check all conditions for succeed() function
// passes = completed && Fail = Completed
describe("enhancer.js", () => {
  describe("success()", () => {
    it("should make enhancement current + 1", () => {
      const items = {
        name: "Catherine",
        durability: 12,
        enhancement: 18,
      }

      const expects = {
        name: "Catherine",
        durability: 12, 
        enhancement: 19, 
      }

      const itemEnhanced = succeed(items)

      expect(itemEnhanced).toEqual(expects)
    })
  })
})

// passes = completed && Fail = Completed
describe("enhancer.js", () => {
  describe("success()", () => {
    it("should make enhancement state = unchanged", () => {
      const items = {
        name: "Catherine",
        durability: 12, 
        enhancement: 20,
      }

      const expects = {
        name: "Catherine",
        durability: 12, 
        enhancement: 20,
      }

      const itemEnhanced = succeed(items)

      expect(itemEnhanced).toEqual(expects)
    })
  })
})

// Everything related to fail()...
// passes = completed && Fail = Completed
describe("enhancer.js", () => {
  describe("fail()", () => {
    it("if enhancement of (item) < 15 = durability - 5", () => {
      const items = {
        name: "Catherine",
        durability: 100,
        enhancement: 13,
      }
      const expects = {
        name: "Catherine",
        durability: 95,
        enhancement: 13,
      }
      const itemFail = fail(items)

      expect(itemFail).toEqual(expects)
    })
  })
})

// passes = completed && Fail = Completed
describe("enhancer.js", () => {
  describe("fail()", () => {
    it("if enhancement of (item) >= 15 = durability - 10", () => {
      const items = {
        name: "Catherine",
        durability: 100,
        enhancement: 15,
      }
      const expects = {
        name: "Catherine",
        durability: 90,
        enhancement: 14,
      }
      const itemFail = fail(items)

      expect(itemFail).toEqual(expects)
    })
  })
})

describe("enhancer.js", () => {
  describe("fail()", () => {
    it("if enhancement of (item) > 16 = enhancement -1", () => {
      const item = {
        name: "Catherine",
        durability: 55,
        enhancement: 17, 
      }
      const expects = {
        name: "Catherine",
        durability: 45,
        enhancement: 16, 
      }
      const itemFail = fail(item)

      expect(itemFail).toEqual(expects)
    })
  })
})