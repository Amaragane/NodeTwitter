window.addEventListener("DOMContentLoaded", () => {
  bindDeleteButton();
  bindEditButton();
});
function bindDeleteButton() {
  const elements = document.querySelectorAll(".btn-danger");
  const tweetContainer = document.querySelector("#tweet-list-container");
  console.log(elements);

  elements.forEach((e) => {
    e.addEventListener("click", ($event) => {
      console.log($event);
      const tweetId = $event.target.getAttribute("tweetid");
      axios
        .delete("/tweets/" + tweetId)
        .then(function (response) {
          tweetContainer.innerHTML = response.data;
          bindDeleteButton();
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  });
}
function bindEditButton() {
  const elements = document.querySelectorAll(".btn-primary");
  const tweetContainer = document.querySelector("#tweet-list-container");
  console.log(elements);

  elements.forEach((e) => {
    e.addEventListener("click", ($event) => {
      console.log($event);
      const tweetId = $event.target.getAttribute("tweetid");
      window.location.href = "/tweets/edit/" + tweetId;
    });
  });
}
