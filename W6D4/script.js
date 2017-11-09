document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const favPlace = document.querySelector(".favorite-input");
  const favorite = favPlace.value;
  favPlace.value = "";

  const newListLi = document.createElement("li");
  newListLi.textContent = favorite;

  const favoritesList = document.createElement("ul")
  favoritesList.appendChild(newListLi);

  // --- your code here!



  // adding new photos
  const showPhotoForm = (e) => {
  const photoFormDiv = document.querySelector(".photo-form-container");
  if (photoFormDiv.className === "photo-form-container") {
    photoFormDiv.className = "photo-form-container hidden";
  } else {
    photoFormDiv.className = "photo-form-container";
  }
};

  // --- your code here!



});
