	/**
     * check the validity of the name
     */
    function isValidName() {
      const value      = $name.value.trim();
      const regexMatch = value.match(/\d/g);

      if (
        value.length == 0 ||
        (regexMatch && regexMatch.length > 0)
      ) {
        showError($name, errorMessages.name);
        return 1;
      }

      showError($name, '');
      return 0;
    }

    /**
     *check the validity of the telephone number.
     */
    function isValidTelephone() {
      const value      = $tel.value.trim();
      const regexMatch = value.match(/[0-9]{2}-[0-9]{4}-[0-9]{4}/g);

      if (regexMatch && regexMatch.length > 0) {
        showError($tel, '');
        return 0;
      }

      showError($tel, errorMessages.tel);
      return 1;
    }

    /**
     * check the validity of the date of birth.
     */
    function isValidBirthDate() {
      const value = $birthdate.value.trim();

      if (dateRegex.test(value) === false) {
        showError($birthdate, errorMessages.birthdate);
        dateError = true;
        return 1;
      } else {
        showError($birthdate, '');
        dateError = false;
      }

      return 0;
    }

    /**
     * check the validity of the form submission
     */
    function isValidForm() {
      let errors = 0;

      errors += isValidName();
      errors += isValidTelephone();
      errors += isValidBirthDate();

      return errors === 0;
    }

    /**
     * text target elements
     */
    function showError($element, message) {
      const $message = $element.parentNode.querySelector('.fieldset__message');
      $message.innerText = message;
    }

    /**
     *event handler, form submission
     */
    function submitHandler(e) {
      if (isValidForm() === false) {
        e.preventDefault();
      }
    }

    /**event hanling
     */
    function keyUpListener(e) {
      
      if (timeoutID > 0) {
        clearTimeout(timeoutID);
      }

      // error message
      if (dateError === true) {
        showError($birthdate, '');
        dateError = false;
      }

      timeoutID = setTimeout(isValidBirthDate, keyUpInterval, e.target.value);
    }

    const $form         = document.getElementById('form');
    const $name         = document.getElementById('name');
    const $birthdate    = document.getElementById('birthdate');
    const $tel          = document.getElementById('tel');
    const keyUpInterval = 1000;
    const dateRegex     = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;
	
    const errorMessages = {
      'birthdate': 'Please provide a valid date in the DD/MM/YYYY format.',
      'name'     : 'Please provide a valid name.',
      'tel'      : 'Please provide a valid telephone number in this format: 00-0000-0000.',
    };

    let timeoutID = 0;
    let dateError = false;

    $form.addEventListener('submit', submitHandler);
    $birthdate.addEventListener('keyup', keyUpListener);