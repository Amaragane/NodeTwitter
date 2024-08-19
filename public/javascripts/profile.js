window.addEventListener("DOMContentLoaded", () => {
  const inputAvatar = document.querySelector("#input-avatar");
  const formAvatar = document.querySelector("#form-avatar");
  formAvatar.addEventListener("click", () => {
    inputAvatar.click();
  });
  inputAvatar.addEventListener("change", () => {
    formAvatar.submit();
  });
});
