const submitEmail = document.querySelector(".submit-email");
const inputSubmit = document.querySelector(".get-news-input-submit");

submitEmail.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("ПОЧТА ОТПРАВЛЕНА");
});

inputSubmit.addEventListener("click", () => {
  submitEmail.submit();
});
