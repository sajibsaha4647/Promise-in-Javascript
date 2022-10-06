//javascript -promise

// let data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // let data = {
//     //   name: "bdtask",
//     // };
//     // if (true) {
//     //   resolve(data);
//     // } else {
//     //     reject("dfj")
//     // }
//     resolve(data);
//     // setTimeout(() => {
//     //   reject("issue");
//     // }, 0);
//     // setTimeout(() => {
//     //   throw new Error("issue");
//     // }, 2000);
//   }, 0);
// });

// data
//   .then((res) => {
//     console.log(res, "1");
//   })
//   .then((ress) => {
//     console.log(ress, "2");
//   })
//   .catch((r) => {
//     console.log(r, "3");
//   })
//   .finally((r) => {
//     console.log(r, "4");
//   });

let data = Promise.race([
  new Promise((resolve, reject) => {
    resolve("1");
  }),
  new Promise((resolve, reject) => {
    resolve("2");
  }),
  new Promise((resolve, reject) => {
    resolve("3");
  }),
]);

data
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {});

// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one");
// });
// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "two");
// });

// Promise.race([firstPromise, secondPromise]).then((res) => {
//   console.log(res);
// });
