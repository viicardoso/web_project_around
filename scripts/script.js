//botao edit profile

const editProfile = document.querySelector(".profile__edit");
const popupOpen = document.querySelector("#editProfilePopup");
const popupClose = document.querySelector("#closePopupButton");

//funções edit

function openPopup() {
  popupOpen.classList.add("popup_opened");
}

function closePopup() {
  popupOpen.classList.remove("popup_opened");
}

//eventos edit profile

editProfile.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);

//formulário edit profile

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

//botao add post

const addPost = document.querySelector(".profile__add");
const addPostPopup = document.querySelector("#addPostPopup");
const addClosePopup = document.querySelector("#CloseAddPopup");

//funções add

function openAddPost() {
  addPostPopup.classList.add("popup_opened");
}

function closeAddPost() {
  addPostPopup.classList.remove("popup_opened");
}

//eventos add post

addPost.addEventListener("click", openAddPost);
addClosePopup.addEventListener("click", closeAddPost);

//formulário add post

const addPostFormElement = document.querySelector("#addPostForm");

function handleAddPostFormSubmit(evt) {
  evt.preventDefault();

  const titleInput = document.querySelector("#title");
  const linkInput = document.querySelector("#image-link");

  const titleValue = titleInput.value;
  const linkValue = linkInput.value;

  const newCard = {
    name: titleValue,
    link: linkValue,
  };

  addElements(newCard);

  titleInput.value = "";
  linkInput.value = "";

  closeAddPost();
}

addPostFormElement.addEventListener("submit", handleAddPostFormSubmit);

//initial posts

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

//posts

function addElements(elemento) {
  const elementsTemplate = document.querySelector("#template-elements").content;
  const templatePosts = elementsTemplate.cloneNode(true);
  const elementsPhoto = templatePosts.querySelector(".elements__photo");
  const elementsText = templatePosts.querySelector(".elements__text");

  elementsPhoto.src = elemento.link;
  elementsPhoto.alt = elemento.name;
  elementsText.textContent = elemento.name;

  elementsPhoto.addEventListener("click", (evt) => openImage(evt));

  //curtir

  const likeButtonActive = templatePosts.querySelector(".elements__like");
  likeButtonActive.addEventListener("click", function (evt) {
    evt.target.classList.toggle("elements__like_active");
  });

  //deletar

  const deletePost = templatePosts.querySelector(".elements__del");

  deletePost.addEventListener("click", function () {
    const removePost = deletePost.closest(".elements__post");
    removePost.remove();
  });

  const elementsList = document.querySelector(".elements");
  elementsList.prepend(templatePosts);
}

initialCards.forEach(addElements);

//open image

const popupImage = document.querySelector(".popup__image");
const popupParagraph = document.querySelector(".popup__paragraph");
const openPopupImage = document.querySelector("#PopupImage");
const closePopupImage = document.querySelector("#CloseImagePopup");

//funções open image

function openImage(evt) {
  console.log(evt);
  const card = evt.target.offsetParent;
  const image = card.querySelector(".elements__photo");
  const paragraph = card.querySelector(".elements__text");
  popupImage.src = image.src;
  popupImage.alt = image.alt;
  popupParagraph.textContent = paragraph.textContent;
  openPopupImage.classList.add("popup__image_opened");
}

function closeImage() {
  openPopupImage.classList.remove("popup__image_opened");
}

//eventos open image

closePopupImage.addEventListener("click", closeImage);
