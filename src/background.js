const myButton = document.getElementById("myButton");
const baseUrl = "https://12ft.io/";

function getPage() {
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
    const genurl = baseUrl + tabs[0].url;
    browser.tabs.update({
      url: genurl,
    });
  });
}
myButton.addEventListener("click", () => {
  getPage();
});
