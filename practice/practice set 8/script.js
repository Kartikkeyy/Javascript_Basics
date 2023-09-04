let google = document.getElementById("google");
let youtube = document.getElementById("youtube");
let twitter = document.getElementById("twitter");
let wikipedia = document.getElementById("wikipedia");
let chatgpt = document.getElementById("chatgpt");

google.addEventListener("click", function() {
    window.location.href = "https://www.google.com";
    window.focus();
});

youtube.addEventListener("click", function() {
    window.location.href = "https://www.youtube.com";
    window.focus();
});

twitter.addEventListener("click", function() {
    window.location.href = "https://www.twitter.com";
    window.focus();
});

wikipedia.addEventListener("click", function() {
    window.location.href = "https://www.wikipedia.org"; // It should be ".org" instead of ".com"
    window.focus();
});

chatgpt.addEventListener("click", function() {
    window.location.href = "https://www.chat.openai.com";
    window.focus();
});
