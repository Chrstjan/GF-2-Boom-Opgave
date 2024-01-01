const formContainer = document.getElementById("join");

const createForm = () => {
  const formElement = document.createElement("form");
  const formFieldset = document.createElement("fieldset");
  formFieldset.classList.add("form-fieldset");

  //Helper functions
  const createFormLabel = (text, forInput) => {
    const label = document.createElement("label");
    label.textContent = text;
    label.setAttribute("for", forInput);

    return label;
  };

  const createFormInput = (type, placeholder, id) => {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("id", id);

    return input;
  };

  const createFormBtn = (type, value) => {
    const formBtn = document.createElement("input");
    formBtn.setAttribute("type", type);
    formBtn.setAttribute("value", value);

    return formBtn;
  };

  const fNameLabel = createFormLabel("Your first name", "fName");
  const fName = createFormInput("text", "John", "fName");

  const lNameLabel = createFormLabel("Your last name", "lName");
  const lName = createFormInput("text", "Doe", "lName");

  const emailLabel = createFormLabel("Your Email", "email");
  const email = createFormInput("email", "None@fake.com", "email");

  const phoneLabel = createFormLabel("Your phonenumber", "phone");
  const phone = createFormInput("tel", "xxxxxxxx", "phone");

  const formBtnContainer = document.createElement("fieldset");
  formBtnContainer.classList.add("btn-container");

  const resetBtn = createFormBtn("reset", "Reset");
  resetBtn.classList.add("reset-btn");
  const submitBtn = createFormBtn("submit", "Submit");
  submitBtn.classList.add("submit-btn");

  const validateInput = (input, regEx, errorMessage) => {
    const trimmedValue = input.value.trim();
    const isValid = regEx.test(trimmedValue);

    if (isValid) {
      //Add classes
    } else {
      //add classes
      displayErrorMessage(errorMessage);
    }

    return isValid;
  };

  const displayErrorMessage = (message) => {
    errorTextContainer.textContent = message;
  };

  const formValidation = (e) => {
    const nameRegEx = /^[a-zA-Z]{2,17}$/;
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    const phoneRegEx = /^[0-9]{8,}$/;

    const isFNameValid = validateInput(
      fName,
      nameRegEx,
      "Name must be between 2 & 17 characters"
    );

    const isLNameValid = validateInput(
      lName,
      nameRegEx,
      "Name must be between 2 & 17 characters"
    );

    const isEmailValid = validateInput(
      email,
      emailRegEx,
      "Email must be a valid email"
    );

    const isPhoneValid = validateInput(
      phone,
      phoneRegEx,
      "Phonenumber must be at least 8 characters"
    );

    if (isFNameValid && isLNameValid && isEmailValid && isPhoneValid) {
      formFieldset.innerHTML = "";
      const signedUp = document.createElement("h2");
      signedUp.textContent = "Thank you for joining our community";

      formFieldset.appendChild(signedUp);
    } else {
      e.preventDefault();
    }
  };

  submitBtn.addEventListener("click", formValidation);

  const errorTextContainer = document.createElement("div");
  errorTextContainer.classList.add("error-text");

  const appendChildren = (parent, elements) => {
    elements.forEach((element) => {
      parent.appendChild(element);
    });
  };

  appendChildren(formBtnContainer, [resetBtn, submitBtn]);

  appendChildren(formFieldset, [
    fNameLabel,
    fName,
    lNameLabel,
    lName,
    emailLabel,
    email,
    phoneLabel,
    phone,
    formBtnContainer,
    errorTextContainer,
  ]);

  formElement.appendChild(formFieldset);
  formContainer.appendChild(formElement);
};

window.addEventListener("load", createForm);
