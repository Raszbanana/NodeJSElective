// why
// javascript is single threaded
// we dont want to block our entire application at once

// when we
// over the network: for instance fetch the
// file handling service
// setTimeout / setInterval / setTimeout
// databases

// Promise can be pending or fulfilled
// when fulfilled it can be resolved or rejected

new Promise((resolve, reject) => {
  try {
    resolve({ key: "value" });
  } catch {
    reject("All is good my man");
  }
})
  .then((message) => {
    console.log(message);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

async function somethingGoodSomethingBad(ms) {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      try {
        resolve({ message: "Resolved" });
      } catch {
        reject("Rejected");
      }
      console.log(Promise);
    });
  }, ms);
}

(async function callMyCustomPromise() {
  const message = await somethingGoodSomethingBad(4000);
  console.log(message);
})()
