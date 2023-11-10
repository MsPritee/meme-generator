const generateMemeBtn = document.querySelector(".btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(" .meme-title");
const memeAuthor = document.querySelector(".meme-autor");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by : ${author}`;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((Response) => Response.json())
        .then((data) => {
            updateDetails(data.url, data.title, data.author);
        });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();

