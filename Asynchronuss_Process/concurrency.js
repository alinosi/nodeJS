/*
  Objek promises memilki beberapa method static untuk menghandle multi promises :
  promises.all dan promises.allsettled

  Perbedaan :
  Promise.all akan memasuki kondisi rejected jika salah satu Promise saja terjadi kegagalan.
  Namun, ini tidak berlaku dengan Promise.allSettled.

  tipe parameter static method adalah array berisi sejumlah Promise.
*/

const promise1failure = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2failure = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups!')), 2000)); // promises gagal
const promise3failure = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1failure, promise2failure, promise3failure])
  .then((values) => {
    console.log('Success');
    console.log(values);
  })
  .catch((error) => {
    console.log('Failed');
    console.log(error.message);
  });

/* Output:
Failed
Ups!
*/

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups!')), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise1, promise2, promise3])
  .then((values) => {
    console.log('Success');
    console.log(values);
  })
  .catch((error) => {
    console.log('Failed');
    console.log(error.message);
  });

/* Output:
Success
[
  { status: 'fulfilled', value: 1 },
  {
    status: 'rejected',
    reason: Error: Ups!
        at Timeout._onTimeout (file:///home/nurrizkiadip/static-method.mjs:2:75)
        at listOnTimeout (node:internal/timers:573:17)
        at process.processTimers (node:internal/timers:514:7)
  },
  { status: 'fulfilled', value: 3 }
]
*/