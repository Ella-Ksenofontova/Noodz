document.body.addEventListener("click", event => {
  if (event.target.classList.contains("accordion")) {
    const answer = event.target.lastElementChild;
    changeAnswerMaxHeight(answer);
    answer.classList.toggle("accordion__answer_visible");
  } else if (event.target.parentElement.classList.contains("accordion")) {
    const answer = event.target.parentElement.lastElementChild;
    changeAnswerMaxHeight(answer);
    answer.classList.toggle("accordion__answer_visible");
  } else if (event.target.parentElement?.parentElement.classList.contains("accordion")) {
    const answer = event.target.parentElement.parentElement.lastElementChild;
    changeAnswerMaxHeight(answer);
    answer.classList.toggle("accordion__answer_visible");
  }
});

function changeAnswerMaxHeight(answer) {
  if (answer.classList.contains("accordion__answer_visible")) {
    answer.style.maxHeight = "0";
  } else {
    answer.style.maxHeight = `${answer.scrollWidth}px`;
  }
}