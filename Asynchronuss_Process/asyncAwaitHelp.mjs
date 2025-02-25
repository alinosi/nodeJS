function promiseExecutor(resolve, reject) {
    setTimeout(() => {
      
      const promisesTes = Math.random()

      if (promisesTes > 0.3 ) {
          resolve('You did it!');
      }
      else {
          reject(new Error('denied')); // lempar error jika program gagal
      }
    }, 2000);
  }
  
  export function doSomething() {
    return new Promise(promiseExecutor);
  }

