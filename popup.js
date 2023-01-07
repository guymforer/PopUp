function OutFunc(PopUpBody, options) {
  let popUpElement = `

    <div id=popup class= popup>
    <h1>${options.popupTitle}</h1>
    <div class=popup-img>${PopUpBody}</img>
    <div id='popup-overly' class='popup-overly'></div>
    </div>`;

  function open() {
    if (!document.getElementById("popup")) {
      document.body.insertAdjacentHTML("beforeend", popUpElement);
    }
    options.isOpen &&
      document.getElementById("popup-overly").addEventListener("click", () => {
        close();
      });
  }

  function close() {
    let o = document.getElementById("popup");
    o && document.body.removeChild(o);
  }

  return {
    open,
    close,
  };
}

const btn = document.getElementById("popup-btn");
const popupService = OutFunc(`<img src="https://github.com/guymforer.png"`, {
  isOpen: true,
  popupTitle: "guy`s popup",
});
btn.addEventListener("click", popupService.open);
