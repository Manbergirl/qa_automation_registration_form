const formElement = document.getElementById("registration-form");
formElement.onsubmit = function (e) {
  e.preventDefault();

  const formData = new FormData(formElement);

  const formDataString = `name: ${formData.get(
    "name"
  )}\nbirthday: ${formData.get("birthday")}\ngender: ${formData.get(
    "gender"
  )}\nPhone Prefix: ${formData.get(
    "Phone Prefix"
  )}\nPhone Number: ${formData.get("Phone Number")}\nEGN: ${formData.get(
    "EGN"
  )}`;
  console.log(formDataString);
  alert(formDataString);
};
