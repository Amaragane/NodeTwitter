window.addEventListener("DOMContentLoaded", () => {
  const inputAvatar = document.querySelector("#input-avatar");
  const formAvatar = document.querySelector("#form-avatar");
  if (inputAvatar !== null) {
    formAvatar.addEventListener("click", () => {
      inputAvatar.click();
    });

    inputAvatar.addEventListener("change", () => {
      formAvatar.submit();
    });
  }
});
