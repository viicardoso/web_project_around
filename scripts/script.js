let editProfile = document.querySelector(".profile__edit");
let popupOpen = document.querySelector("#editProfilePopup");
let popupClose = document.querySelector("#closePopupButton");

function openPopup() {
  popupOpen.classList.add("popup_opened");
}

function closePopup() {
  popupOpen.classList.remove("popup_opened");
}

editProfile.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);

let formElement = document.querySelector(".popup__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector("#name");
  let aboutInput = document.querySelector("#about");

  let nameValue = nameInput.value;
  let aboutValue = aboutInput.value;

  let profileName = document.querySelector(".profile__name");
  let profileAbout = document.querySelector(".profile__about");

  profileName.textContent = nameValue;
  profileAbout.textContent = aboutValue;
}

formElement.addEventListener("submit", handleProfileFormSubmit);
