const footerForm = document.querySelector(".footer-submit-email");
const footerFormInput = document.querySelector(".footer-submit-email-input");

footerFormInput.addEventListener("click", () => {
  footerForm.submit();
  alert("ПОЧТА ОТПРАВЛЕНА");
});

footerForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
