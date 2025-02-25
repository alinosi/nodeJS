import { doSomething } from './asyncAwaitHelp.mjs';

async function promiseWithAsyncAwait() {
  try {
    console.log('Start.');

    const result = await doSomething(); // Jika promises reject, output langsung lompat ke catch
    console.log(result); // Dilewati jika terjadi error

    console.log('End.'); // Dilewati jika terjadi error
  } catch (error) {
    console.log(error.message);
  }
}

promiseWithAsyncAwait();

/* Output:
Start.
You did it.
End.
*/

// await yang akan menangani proses promise apakah berhasil/tidak