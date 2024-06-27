window.addEventListener("DOMContentLoaded", () => {
  const inputAvatar = document.querySelector("#input-avatar");
  const formAvatar = document.querySelector("#form-avatar");
  formAvatar.addEventListener("click", (e) => {
    inputAvatar.click();
  });
  inputAvatar.addEventListener("change", () => {
    formAvatar.submit();
  });
});
