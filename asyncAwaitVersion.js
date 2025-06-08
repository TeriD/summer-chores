function mowYard(name) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        resolve();
      }, 2000);
    });
  }

  function weedEat(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const fellAsleep = Math.random() < 0.3;
        if (fellAsleep) {
          console.log(`${name} fell asleep after mowing the yard.`);
          reject("Weed eating failed.");
          return;
        }
        console.log(`${name} finished using the weed eater.`);
        resolve();
      }, 1500);
    });
  }

  function trimHedges(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const fellAsleep = Math.random() < 0.3;
        if (fellAsleep) {
          console.log(`${name} fell asleep after weed eating the yard.`);
          reject("Trimming hedges failed.");
          return;
        }
        console.log(`${name} finished trimming the hedges.`);
        resolve();
      }, 1000);
    });
  }

  function collectWood(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const fellAsleep = Math.random() < 0.3;
        if (fellAsleep) {
          console.log(`${name} fell asleep after trimming the hedges.`);
          reject("Collecting wood failed.");
          return;
        }
        console.log(`${name} finished collecting wood.`);
        resolve();
      }, 2500);
    });
  }

  function waterGarden(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const fellAsleep = Math.random() < 0.3;
        if (fellAsleep) {
          console.log(`${name} fell asleep after collecting wood.`);
          reject("Watering garden failed.");
          return;
        }
        console.log(`${name} finished watering the garden.`);
        resolve();
      }, 500);
    });
  }

  // ✅ NEW async/await version of doSummerChores
  async function doSummerChores(name) {
    try {
      await mowYard(name);
      await weedEat(name);
      await trimHedges(name);
      await collectWood(name);
      await waterGarden(name);
      console.log(`${name} finished all their chores!`);
    } catch (error) {
      console.log(`${name} couldn't finish all their chores. Reason: ${error}`);
    }
  }

  doSummerChores("Joe");