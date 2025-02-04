// Finally blok akan selalu dieksekusi tidak peduli try punya error atau tidak

try {
    console.log('Ini try block');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  } 
  // output : hanya try dan finally yang di print

try {
    console.log('Ini try block');
    throw new Error('Error: Program berhenti');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  }
  // output : semua di print