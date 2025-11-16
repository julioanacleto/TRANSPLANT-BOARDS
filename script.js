
const questionsDiv = document.getElementById('questions');

questions.forEach((q, i) => {
  const div = document.createElement('div');
  div.className = 'question';
  const header = document.createElement('h3');
  header.textContent = `${i + 1}. ${q.q}`;
  div.appendChild(header);
  q.options.forEach((opt, idx) => {
    const label = document.createElement('label');
    label.innerHTML = `<input type="radio" name="q${i}" value="${String.fromCharCode(65 + idx)}"> ${String.fromCharCode(65 + idx)}) ${opt}`;
    div.appendChild(label);
  });
  questionsDiv.appendChild(div);
});

document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  const username = document.getElementById('username').value;
  document.getElementById('result').textContent = `${username}, you got ${score} out of ${questions.length} correct.`;
});
