// script.js

function copyTextToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    // Add a purple, blurred, and transparent popup notification
    var popup = document.createElement("div");
    popup.innerHTML = "Text copied to clipboard!";
    popup.style.position = "fixed";
    popup.style.bottom = "10px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.padding = "10px";
    popup.style.background = "rgba(138, 43, 226, 0.8)"; // Purple color with 80% transparency
    popup.style.color = "#fff";
    popup.style.borderRadius = "5px";
    popup.style.zIndex = "9999";
    popup.style.filter = "blur(0.5px)"; // Blur effect
    document.body.appendChild(popup);

    // Remove the popup after 2 seconds
    setTimeout(function () {
        document.body.removeChild(popup);
    }, 2000);
}

// Example usage on button click:
var copyButton = document.getElementById("copyButton"); // Replace with the actual button ID
copyButton.addEventListener("click", function () {
    var textToCopy = "Hello, this text will be copied to clipboard !";
    copyTextToClipboard(textToCopy);
});

// Navigate to a URL
function navigateTo(url) {
    window.location.href = url;
}