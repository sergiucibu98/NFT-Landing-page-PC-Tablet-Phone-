const showPopup = () => {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
};

const closePopup = () => {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
};

setTimeout(showPopup, 3000);
