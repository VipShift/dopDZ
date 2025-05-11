// DZ 1

function checkQuestionAnswer(question, answer) {
    const answers1 = prompt(question);
    const userAnswer = answers1.toLowerCase();
    const coretAnswer = answer.toLowerCase();
    if (userAnswer === coretAnswer) {
        alert('Правильно!');
    } else { 
        alert('Неправильно! Правильный ответ: ' + answer);
    }

 } 
  
  checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
  checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
  checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');
  