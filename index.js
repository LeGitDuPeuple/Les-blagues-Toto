const url = "https://api.blablagues.net/?rub=blagues"


const header = document.getElementById("header");

const content = document.getElementById("content");

const app = document.querySelector(".app")


function fetchJoke() {
fetch(url)
.then(respons => respons.json())
.then(data => {
    
    // J'ai mis le chemain de la blague ici pour que le code sois plus lisible 
    const blague = data.data.content

    console.log(data);
    // header.textContent += data.data.content.text_head; 
    header.textContent += blague.text_head; 

    // data.data.content.text === ""
if (blague.text === "") {
    
    // content.textContent += data.data.content.text_hidden;
    content.textContent += blague.text_hidden;
}
// data.data.content.text_hidden === ""
else if (blague.text_hidden === "") {
    content.textContent += data.data.content.text;

    content.textContent += blague.text;
}

})
.catch(err => console.log(err, 'erreur'));

} 
fetchJoke()

app.addEventListener( "click", () => {
        
    location.reload();
    
})

