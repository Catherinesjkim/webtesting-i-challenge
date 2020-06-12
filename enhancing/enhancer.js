module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// #1. repair(item) method that accepts an item obj and returns a new item with the durability restored to 100
// when an item is repaired the only thing that changes is the durability.
function repair(item) {
  if (item.durability === 0 || item.durability < 101) {
    const repairedItem = {
      name: item.name,
      durability: 100,
      enhancement: item.enhancement,
    }
    return repairedItem
  }
}

// #2. success(item) method that accepts an item obj and returns a new item obj modified according to the rules defined by the client for enhancement success
function succeed(item) {
  // if enhancement is less tahn 20 you will get a +1
  if (item.enhancement < 20) {
    const successItem = {
      name: item.name, 
      durability: item.durability, 
      enhancement: item.enhancement + 1,
    }
    return successItem
    // if enhancement is === 20 you will get no change on the enhancement
  } else if (item.enhancement === 20) {
    const successItem = {
      name: item.name, 
      durability: item.durability,
      enhancement: item.enhancement,
    }
    return successItem
    // if enhancement reaches a NUMBER > 20 display error
  } else if (item.enhancement > 20 || item.durability > 100) {
    const error = "Please don't try to add a bigger number than 20."
    return error
  }
}

// #3. fail(item) method that accetps an item obj and returns a new item obj modified according to the rules defined by the client for enhancement failure
function fail(item) {
  if (item.enhancement < 15) {
    const failItem = {
      name: item.name,
      durability: item.durability - 5,
      enhancement: item.enhancement,
      }
      return failItem
    } else if (item.enhancement >= 15) {
      const failItem = {
        name: item.name,
        durability: item.durability - 10,
        enhancement: item.enhancement - 1,
      }
      return failItem
    } else if (item.enhancement > 16) {
      const failItem = {
        name: item.name, 
        durability: item.durability,
        enhancement: item.enhancement - 1,
      }
      return failItem
    }
  }

// #4. a get() method for use when working on the stretch problem
function get(item) {
  return { ...item }
}
