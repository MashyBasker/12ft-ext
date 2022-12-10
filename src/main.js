let browserUrl = window.location.href;
const button = document.getElementsByClassName("button-2");

const searchURl = (browserUrl) => {
  //   console.log("Redirecting...");
  window.location("https://12ft.io/");
  let inputBox = document.getElementsByClassName(
    "px-4 flex-1 min-w-0 border border-gray-400 border-r-0"
  );
  let searchbutton = document.getElementsByClassName(
    "px-4 py-2 min-w-12 text-sm leading-none font-medium border border-yellow-500 bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
  );
  inputBox.value = browserUrl;
  searchbutton.click();
};
button.addEventListener("click", searchURl(browserUrl));
