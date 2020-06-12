const { repair, succeed, fail } = require('./enhancer.js');
// test away!
// Items have a name, durability and enhancement
// The item's enhancement is a number from 0 to 20
// The item's durabiltiy is a number from 0 to 100

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
// the item's enhancement increase by 1
// the durability of the item is not changed
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
// if the item enhancement level is 20, the enhancement level is not changed
// the durability of the item is not changed
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
// passes = completed && Fail = Completed\
// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
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
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
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

// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
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