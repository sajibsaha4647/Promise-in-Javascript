//javascript -promise

let data = new Promise((resolve, reject) => {
  setTimeout(() => {
    let data = {
      name: "bdtask",
    };
    resolve(data);
  }, 0);
});

data
  .then((res) => {
    console.log(res, "1");
  })
  .then((ress) => {
    console.log(ress, "2");
  })
  .catch((r) => {
    console.log(r, "3");
  })
  .finally((r) => {
    console.log(r, "4");
  });
