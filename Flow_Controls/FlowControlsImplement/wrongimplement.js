function checkGrades(grades) {
    for (let i = 0; i < grades.length; i++) {
        try{
        if (typeof grades[i] !== 'number') {
        throw new Error('Invalid input. Please provide an array of numbers.');
      }} catch(e){
        console.error('tolol'); // tangkap error di sini salah, karena iterasi akan tetap dilanjutkan
      }
  
      const grade = grades[i];
      let predicate;
  
      if (grade >= 90) {
        predicate = 'A';
      } else if (grade >= 80) {
        predicate = 'B';
      } else if (grade >= 70) {
        predicate = 'C';
      } else if (grade >= 60) {
        predicate = 'D';
      } else {
        predicate = 'E';
      }
  
      console.log(`grade ${i + 1}: ${grade} (${predicate})`);
    }
  }
  

    const studentGrades = ['a', '85', 65, 80, 70];
    checkGrades(studentGrades);
