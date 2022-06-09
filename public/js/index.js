document.getElementById("img-input-form").onchange = async function (event) {
  document.getElementById("clothingpiece").innerHTML = `
  <img src=${URL.createObjectURL(event.target.files[0])} width="200px" />
  `;
};
