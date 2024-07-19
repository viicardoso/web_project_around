export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;

    // popup de imagem
    this._popupImage = document.querySelector(".popup__image");
    this._popupParagraph = document.querySelector(".popup__paragraph");
    this._openPopupImage = document.querySelector("#PopupImage");
    this._closePopupImage = document.querySelector("#CloseImagePopup");
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__post")
      .cloneNode(true);
    return cardTemplate;
  }

  _setCardData() {
    this._cardElement.querySelector(".elements__photo").src = this._link;
    this._cardElement.querySelector(".elements__photo").alt = this._name;
    this._cardElement.querySelector(".elements__text").textContent = this._name;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".elements__like")
      .addEventListener("click", () => {
        this._toggleLike();
      });
    this._cardElement
      .querySelector(".elements__del")
      .addEventListener("click", () => {
        this._deleteCard();
      });
    this._cardElement
      .querySelector(".elements__photo")
      .addEventListener("click", (evt) => {
        this._openImage(evt);
      });

    this._closePopupImage.addEventListener("click", () => this._closeImage());

    this._openPopupImage.addEventListener("click", (evt) => {
      if (evt.target === this._openPopupImage) {
        this._closeImage();
      }
    });

    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        const openedImage = document.querySelector(".popup__image_opened");
        if (openedImage) {
          this._closeImage();
        }
      }
    });
  }

  _toggleLike() {
    this._cardElement
      .querySelector(".elements__like")
      .classList.toggle("elements__like_active");
  }

  _deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _openImage(evt) {
    const card = evt.target.closest(".elements__post");
    const image = card.querySelector(".elements__photo");
    const paragraph = card.querySelector(".elements__text");
    this._popupImage.src = image.src;
    this._popupImage.alt = image.alt;
    this._popupParagraph.textContent = paragraph.textContent;
    this._openPopupImage.classList.add("popup__image_opened");
  }

  _closeImage() {
    this._openPopupImage.classList.remove("popup__image_opened");
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._setCardData();
    this._setEventListeners();
    return this._cardElement;
  }
}
