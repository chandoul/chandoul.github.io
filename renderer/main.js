const baseLink =
    "https://raw.githubusercontent.com/chandoul/aoeii_em/refs/heads/master/libs/Base.ahk";
const installerLink =
    "https://github.com/chandoul/aoeii_em/raw/refs/heads/master/release/aoeii_em_setup_latest.exe";
const installerSize =
    "https://raw.githubusercontent.com/chandoul/aoeii_em/refs/heads/master/release/aoeii_em_setup_size.txt";

const titleText = "Age of Empires II Easy Manager";
const aboutText = `Humbly made by Smile 💚`;
const title = document.getElementById("title");
const about = document.getElementById("about");
const installButton = document.getElementById("installer");
const instsize = document.getElementById("size");
installButton.innerText = "Download";

updatePageInfo();

async function updatePageInfo() {
    const base = await fetch(baseLink);
    const baseRaw = await base.text();
    const version = baseRaw.match(/version\s*=>\s*'([\d.]+)'/);
    const size = await fetch(installerSize);
    const sizeRaw = await size.text();

    title.innerText = `${titleText} v${version[1]}`;
    document.title = title.innerText;
    about.innerText = aboutText;
    instsize.innerText = `aoeii_em_setup_latest.exe ( ${sizeRaw} MB )`;
}

instsize.addEventListener("click", () =>
    downloadFile(installerLink, "aoeii_em_setup_latest.exe")
);

installButton.addEventListener("click", () =>
    downloadFile(installerLink, "aoeii_em_setup_latest.exe")
);

function downloadFile(url, filename) {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
