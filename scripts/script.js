const editProfile = document.querySelector(".profile__edit");
const popupOpen = document.querySelector("#editProfilePopup");
const popupClose = document.querySelector("#closePopupButton");

function openPopup() {
  popupOpen.classList.add("popup_opened");
}

function closePopup() {
  popupOpen.classList.remove("popup_opened");
}

editProfile.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);

const formElement = document.querySelector(".popup__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("#name");
  const aboutInput = document.querySelector("#about");

  const nameValue = nameInput.value;
  const aboutValue = aboutInput.value;

  const profileName = document.querySelector(".profile__name");
  const profileAbout = document.querySelector(".profile__about");

  profileName.textContent = nameValue;
  profileAbout.textContent = aboutValue;

  closePopup();
}

formElement.addEventListener("submit", handleProfileFormSubmit);
