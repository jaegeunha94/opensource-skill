/* Reusable quiz widget for Data Structures lessons */

function initQuiz(containerId, correctIndex, explanation) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const btn = container.querySelector('.quiz-submit');
  const feedback = container.querySelector('.quiz-feedback');
  const options = container.querySelectorAll('.quiz-options label');

  btn.addEventListener('click', () => {
    const selected = container.querySelector('input[type="radio"]:checked');
    if (!selected) {
      feedback.textContent = '답을 선택해 주세요.';
      feedback.className = 'quiz-feedback incorrect';
      feedback.style.display = 'block';
      return;
    }

    const selectedIndex = parseInt(selected.value);
    const isCorrect = selectedIndex === correctIndex;

    options.forEach((label, i) => {
      label.style.pointerEvents = 'none';
      if (i === correctIndex) label.classList.add('correct-answer');
      else if (i === selectedIndex && !isCorrect) label.classList.add('wrong-answer');
    });
    btn.disabled = true;

    if (isCorrect) {
      feedback.innerHTML = '✓ 정답입니다! ' + (explanation || '');
      feedback.className = 'quiz-feedback correct';
    } else {
      feedback.innerHTML = '✗ 틀렸습니다. ' + (explanation || '');
      feedback.className = 'quiz-feedback incorrect';
    }
    feedback.style.display = 'block';
  });
}
