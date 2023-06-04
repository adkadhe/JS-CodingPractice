// const promise = (isTrue) => new Promise((resolve, reject) => {
//   if (isTrue) {
//     return resolve("Promise is resolved");
//   } else {
//     return reject("Promise failed to resolve");
//   }
// });
// const isTrue = false;
// promise(isTrue).then(res => {
//   console.log({ res });
// }).catch(err => {
//   console.log({ err });
// });

//  export function HelloWorld(){
//   return "Hello World";
// }

/**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let jobpromise = job();

// jobpromise

//   .then(function () {
//     console.log('Success 1');
//   })

//   .then(function () {
//     console.log('Success 2');
//   })

//   .then(function () {
//     console.log('Success 3');
//   })

//   .catch(function () {
//     console.log('Error 1');
//   })
//   .then(function () {
//     console.log('Success 4');
//   });

  /**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

// function job2(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve('success');
//     } else {
//       reject('error');
//     }
//   });
// }

// let job2promise = job2(true);

// job2promise

//   .then(function (data) {
//     console.log(data);

//     return job2(false);
//   })

//   .catch(function (error) {
//     console.log(error);

//     return 'Error caught';
//   })

//   .then(function (data) {
//     console.log(data);

//     return job2(true);
//   })

//   .catch(function (error) {
//     console.log(error);
//   });


/**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

function timeoutJob(timeinsec){
 return new Promise((resolve)=>{
   setTimeout(() => {
     console.log(`Resolving ${timeinsec}`);
     resolve(`Done ${timeinsec}`)
    }, timeinsec);
  })
}

const timeOutPromise = Promise.all([timeoutJob(10000), timeoutJob(20000), timeoutJob(30000)])

timeOutPromise.then(data=>{
  console.log('All done');
  data.forEach(function (text) {
    console.log(text);
  });
})