const baseLink =
    "https://raw.githubusercontent.com/chandoul/aoeii_em/refs/heads/master/libs/Base.ahk";
const installerLink =
    "https://github.com/chandoul/aoeii_em/raw/refs/heads/master/release/aoeii_em_setup_latest.exe";

const titleText = "Age of Empires II: AoK & AoC Easy Manager";
const aboutText = `Humbly made by Smile 💚`;
const title = document.getElementById("title");
const about = document.getElementById("about");
const installButton = document.getElementById("installer");
installButton.innerText = "Download";

updatePageInfo();

async function updatePageInfo() {
    const result = await fetch(baseLink);
    const baseRaw = await result.text();
    const version = baseRaw.match(/version\s*=>\s*'([\d.]+)'/);
    title.innerText = `${titleText} v${version[1]}`;
    document.title = title.innerText;
    about.innerText = aboutText;
}

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
