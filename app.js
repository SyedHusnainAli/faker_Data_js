console.log(faker);

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let info = faker.helpers.createCard();
  // console.log(info);

  let {
    name,
    email,
    address: { city, country, zipcode },
  } = info;

  document.querySelector("#name").value = name;
  document.querySelector("#email").value = email;
  document.querySelector("#city").value = city;
  document.querySelector("#zipCode").value = zipcode;
  document.querySelector("#country").value = country;
});
