let browserUrl = window.location.href;
const baseUrl = "https://12ft.io/";
const button232 = document.getElementsByClassName("button-2");

const clickingFunction = () => {
  location.replace(`${baseUrl}+${browserUrl}`);
  console.log(`${baseUrl}+${browserUrl}`);
};
