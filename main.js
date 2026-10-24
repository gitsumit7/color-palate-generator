const formatSelect = document.getElementById("format");
const toneSelect = document.getElementById("tone");
const generateButton = document.getElementById("generateBtn");
const palette = document.getElementById("palette");

function randomChannel(tone) {
    if (tone === "light") {
        return Math.floor(Math.random() * 128) + 128;
    }

    if (tone === "dark") {
        return Math.floor(Math.random() * 128);
    }

    return Math.floor(Math.random() * 256);
}

function toHex(value) {
    return value.toString(16).padStart(2, "0").toUpperCase();
}

function createColorCard(color, label) {
    const card = document.createElement("article");
    card.className = "color-card";

    const swatch = document.createElement("div");
    swatch.className = "color-swatch";
    swatch.style.backgroundColor = color;
    swatch.setAttribute("aria-label", `Color preview: ${label}`);

    const code = document.createElement("span");
    code.className = "color-code";
    code.textContent = label;

    card.append(swatch, code);
    return card;
}

function generatePalette() {
    const format = formatSelect.value;
    const tone = toneSelect.value;
    const { r, g, b } = {
        r: randomChannel(tone),
        g: randomChannel(tone),
        b: randomChannel(tone)
    };
    const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    const color = format === "rgb" ? `rgb(${r}, ${g}, ${b})` : hexColor;

    palette.append(createColorCard(color, color));
}

generatePalette();
generateButton.addEventListener("click", generatePalette);