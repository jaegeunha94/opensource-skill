/* Shared quiz widget for Python Backend Engineering lessons */
(function () {
  function initQuiz(containerEl) {
    const questions = containerEl.querySelectorAll('.quiz-question');
    let answered = 0;
    let correct  = 0;

    questions.forEach(function (qEl) {
      const options  = qEl.querySelectorAll('.quiz-option');
      const feedback = qEl.querySelector('.quiz-feedback');
      const answer   = qEl.dataset.answer; // e.g. "b"
      let done = false;

      options.forEach(function (opt) {
        opt.addEventListener('click', function () {
          if (done) return;
          done = true;
          answered++;

          const chosen = opt.dataset.value;
          options.forEach(function (o) {
            o.classList.add('disabled');
            if (o.dataset.value === answer) o.classList.add('correct');
          });

          if (chosen === answer) {
            opt.classList.add('correct');
            feedback.textContent = '✓ 정답입니다! ' + (qEl.dataset.explanation || '');
            feedback.className   = 'quiz-feedback correct-msg';
            correct++;
          } else {
            opt.classList.add('wrong');
            feedback.textContent = '✗ 오답입니다. ' + (qEl.dataset.explanation || '');
            feedback.className   = 'quiz-feedback wrong-msg';
          }

          if (answered === questions.length) {
            const scoreEl = containerEl.querySelector('.quiz-score');
            if (scoreEl) {
              scoreEl.style.display = 'block';
              var pct = Math.round((correct / questions.length) * 100);
              var emoji = pct === 100 ? '🎯' : pct >= 60 ? '💪' : '📚';
              scoreEl.textContent = emoji + '  ' + correct + ' / ' + questions.length + '  (' + pct + '%)';
              if (pct === 100) scoreEl.style.color = 'var(--green)';
              else if (pct >= 60) scoreEl.style.color = 'var(--yellow)';
              else scoreEl.style.color = 'var(--red)';
            }
          }
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.quiz-section').forEach(initQuiz);
  });
})();
