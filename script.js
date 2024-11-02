const internetChecker = document.querySelector('.internet-checker');
const checker = document.querySelector("#checker")
const loader = document.querySelector('.loading');
const copyright = document.querySelector('.copyright');

const onlineInternet = () => {
    internetChecker.style.backgroundColor = "rgb(38 57 237 / 89%)";
    checker.style.color = "white";
    checker.textContent = "You are Online";
}

const offlineInternet = () => {
    internetChecker.style.backgroundColor = "rgba(0, 0, 0, 0.89)";
    checker.style.color = "white";
    checker.textContent = "You are Offline";
}
if(window.navigator.onLine) {
    onlineInternet();
    setTimeout(() => {
        internetChecker.remove()
    }, 5000);
}

else{
    offlineInternet();
}



window.addEventListener("load", (e) => {
    loader.style.display = "none";
});

window.addEventListener("online", (e) => {
    e.preventDefault()
    onlineInternet();
    setTimeout(() => {
        internetChecker.remove()
    }, 5000);
});

window.addEventListener("offline", (e) => {
    e.preventDefault()
    offlineInternet();
});