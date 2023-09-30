const formAddress = document.querySelector(".form-address");
const inputSubmit = document.querySelector(".form-address-submit");

formAddress.addEventListener("submit", (e) => {
  e.preventDefault();
});

inputSubmit.addEventListener("click", () => {
  formAddress.submit();
});

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
