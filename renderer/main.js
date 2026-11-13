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
const preview = document.getElementById("preview");

updatePageInfo();

async function updatePageInfo() {
	const base = await fetch(baseLink);
	const baseRaw = await base.text();
	const version = baseRaw.match(/version\s*=>\s*'([\d.]+)'/);
	const size = await fetch(installerSize);
	const sizeRaw = await size.text();

	title.innerText = `${titleText} v${version[1]}`;
	document.title = title.innerText;
	installButton.innerText = "Download";
	about.innerText = aboutText;
	instsize.innerText = `aoeii_em_setup_latest.exe ( ${sizeRaw} MB )`;
	preview.src =
		"https://raw.githubusercontent.com/chandoul/aoeii_em/refs/heads/master/screenshots/aoeii_em.png";
}

instsize.addEventListener("click", () =>
	downloadFile(installerLink, "aoeii_em_setup_latest.exe"),
);

installButton.addEventListener("click", () =>
	downloadFile(installerLink, "aoeii_em_setup_latest.exe"),
);

function downloadFile(url, filename) {
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => toggleMusic());
// Optional: Set a lower volume for background ambiance (0.0 to 1.0)
music.volume = 0.3;

function toggleMusic() {
	if (music.paused) {
		music.play();
		btn.textContent = "⏸";
	} else {
		music.pause();
		btn.textContent = "▶";
	}
}