let setting =
    "https://raw.githubusercontent.com/chandoul/aoeii_easy_manager/main/AoE%20II%20Manager.json";
let installer =
    "https://github.com/chandoul/aoeii_easy_manager/raw/refs/heads/main/bin/base/AoE%20II%20Manager%20AIO.exe";
let updater =
    "https://github.com/chandoul/aoeii_easy_manager/raw/refs/heads/main/bin/update/Age%20of%20Empires%20II%20Easy%20Manager%20%5B%20Update%20-%203.9%20%5D.exe";
let ahkinstaller = "https://www.autohotkey.com/download/ahk-v2.exe";
let rawText = "";

fetch(setting).then(function (response) {
    response.text().then(function (text) {
        getVersion(text);
    });
});

function getVersion(text) {
    document.getElementsByClassName("title")[0].textContent =
        "Age of Empires II: AoK & AoC Easy Manager v" +
        JSON.parse(text)["Version"];
}

function getInstaller() {
    document.location = installer;
}

function getUpdater() {
    document.location = updater;
}

function getAHKInstaller() {
    saveFile(ahkinstaller);
}

function saveFile(url) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = function () {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(xhr.response);
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        delete a;
    };
    xhr.open("GET", url);
    xhr.send();
}
