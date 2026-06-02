const responses = [
  "oh baby... no.",
  "you already know the answer.",
  "the dolls are not convinced.",
  "absolutely not.",
  "YASSSS QUEEN.",
  "It's giving iconic.",
  "it’s giving questionable.",
  "be serious for once.",
  "Mother approves.",
  "the dolls are all in agreement.",
  "i love the confidence though.",
  "try again with better judgment.",
  "not in this lifetime.",
  "this is why we reflect."
];

function shakeOracle() {
  const responseEl = document.getElementById("answer");
  const ball = document.querySelector(".ball");
  const question = document.getElementById("questionInput").value;

  if (question.trim() === "") {
    responseEl.textContent = "ask something first, diva 💅";
    return;
  }

  ball.classList.remove("initial"); // important
  ball.classList.add("revealed");

  responseEl.textContent = "...";

  setTimeout(() => {
    const random = Math.floor(Math.random() * responses.length);
    responseEl.textContent = responses[random];
  }, 600);
}



function resetOracle() {
  const ball = document.querySelector(".ball");

  document.getElementById("answer").textContent = "";
  document.getElementById("questionInput").value = "";

  ball.classList.remove("revealed");
  ball.classList.add("initial");
}