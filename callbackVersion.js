function mowYard(name, callback) {
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      if (callback) callback();
    }, 2000);
  }

  function weedEat(name, callback) {
    setTimeout(() => {
      const fellAsleep = Math.random() < 0.3; // 30% chance to fall asleep
      if (fellAsleep) {
        console.log(`${name} fell asleep after mowing the yard.`);
        return;
      }

      console.log(`${name} finished using the weed eater.`);
      if (callback) callback();
    }, 1500);
  }

  function trimHedges(name, callback) {
    setTimeout(() => {
      const fellAsleep = Math.random() < 0.3;
      if (fellAsleep) {
        console.log(`${name} fell asleep after weed eating the yard.`);
        return;
      }

      console.log(`${name} finished trimming the hedges.`);
      if (callback) callback();
    }, 1000);
  }

  function collectWood(name, callback) {
    setTimeout(() => {
      const fellAsleep = Math.random() < 0.3;
      if (fellAsleep) {
        console.log(`${name} fell asleep after trimming the hedges.`);
        return;
      }

      console.log(`${name} finished collecting wood.`);
      if (callback) callback();
    }, 2500);
  }

  function waterGarden(name, callback) {
    setTimeout(() => {
      const fellAsleep = Math.random() < 0.3;
      if (fellAsleep) {
        console.log(`${name} fell asleep after collecting wood.`);
        return;
      }

      console.log(`${name} finished watering the garden.`);
      if (callback) callback();
    }, 500);
  }

  function doSummerChores(name) {
    mowYard(name, () => {
      weedEat(name, () => {
        trimHedges(name, () => {
          collectWood(name, () => {
            waterGarden(name, () => {
              console.log(`${name} finished all their chores!`);
            });
          });
        });
      });
    });
  }

  doSummerChores("Joe");