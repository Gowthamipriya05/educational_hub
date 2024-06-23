function RegisterValidation(values) {
  let errors = {};
  const contactPattern = /[6789][0-9]{9}/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.password === "") {
    errors.password = "Password should not be empty";
  } else if (!passwordPattern.test(values.password)) {
    errors.password = "Password format is invalid";
  } else {
    errors.password = "";
  }

  if (values.mobile === "") {
    errors.mobile = "Mobile number should not be empty";
  } else if (!contactPattern.test(values.mobile)) {
    errors.mobile = "Invalid mobile number format";
  } else {
    errors.mobile = "";
  }

  if (values.email === "") {
    errors.email = "Email should not be empty";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Invalid email format";
  } else {
    errors.email = "";
  }

  if (values.fname === "") {
    errors.fname = "First Name should not be empty";
  } else {
    errors.fname = "";
  }

  if (values.lname === "") {
    errors.lname = "Last Name should not be empty";
  } else {
    errors.lname = "";
  }

  if (values.address === "") {
    errors.address = "Address should not be empty";
  } else {
    errors.address = "";
  }

  if (values.gender === "") {
    errors.gender = "Gender should not be empty";
  } else {
    errors.gender = "";
  }

  return errors;
}

export default RegisterValidation;
