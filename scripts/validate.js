// const showInputError = (formSelector, inputSelector, errorClass) => {
//   console.log(formSelector);
//   const errorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
//   inputSelector.classList.add("popup__input_type_error");
//   errorClass.textContent = errorMessage;
//   errorClass.classList.add("popup__input-error_active");
// };

// const hideInputError = (formSelector, inputSelector) => {
//   const errorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
//   inputSelector.classList.remove("popup__input_type_error");
//   errorClass.classList.remove("popup__input-error_active");
//   errorClass.textContent = "";
// };

// const checkInputValidity = (formSelector, inputSelector) => {
//   if (!inputSelector.validity.valid) {
//     showInputError(
//       formSelector,
//       inputSelector,
//       inputSelector.validationMessage
//     );
//   } else {
//     hideInputError(formSelector, inputSelector);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputSelector) => {
//     return !inputSelector.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, submitButtonSelector) => {
//   console.log(hasInvalidInput(inputList));
//   if (hasInvalidInput(inputList)) {
//     submitButtonSelector.classList.add("popup__button_disabled");
//   } else {
//     submitButtonSelector.classList.remove("popup__button_disabled");
//   }
// };

// const setEventListeners = (formSelector) => {
//   const inputList = Array.from(formSelector.querySelectorAll(".popup__input"));
//   const submitButtonSelector = formSelector.querySelector(
//     ".popup__save-button"
//   );
//   toggleButtonState(inputList, submitButtonSelector);
//   inputList.forEach((inputSelector) => {
//     inputSelector.addEventListener("input", function () {
//       checkInputValidity(formSelector, inputSelector);
//       toggleButtonState(inputList, submitButtonSelector);
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll(".form"));
//   formList.forEach((formSelector) => {
//     formSelector.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//     });

//     const fieldsetList = Array.from(
//       formSelector.querySelectorAll(".form__set")
//     );

//     fieldsetList.forEach((fieldset) => {
//       setEventListeners(fieldset);
//     });
//   });
// };

// //enableValidation();

// enableValidation({
//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// });

function showInputError(formElement, inputElement, errorMessage, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
}

function hideInputError(formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = "";
}

function checkInputValidity(formElement, inputElement, settings) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, settings) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

function setEventListeners(formElement, settings) {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement, settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
}

function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, settings);
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
