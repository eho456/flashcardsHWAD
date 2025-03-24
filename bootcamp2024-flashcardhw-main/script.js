const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    let cur = flashcards[currentIndex];

    var cardContent = document.getElementById("card-content");

    if(showingTerm){
        cardContent.innerText = flashcards[currentIndex].term;
    }
    else{
        cardContent.innerText = flashcards[currentIndex].definition;
    }
}

// The rest of the code you will write is apart of event listeners

document.getElementById("flashcard").addEventListener('click', function(){
    showingTerm = !showingTerm;
    displayCard();
});

document.getElementById("next-btn").addEventListener('click', function(){
    currentIndex++;
    if(currentIndex >= flashcards.length){
        currentIndex = 0;
    }
    showingTerm = true;
    displayCard();
});

document.getElementById("prev-btn").addEventListener('click', function(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = flashcards.length-1;
    }
    showingTerm = true;
    displayCard();
});

document.getElementById("add-card-btn").addEventListener('click', function(){
    var newTerm = document.getElementById("new-term").value;
    var newDef = document.getElementById("new-definition").value;

    if(newTerm !== "" && newDef !== ""){
        flashcards.push({term: newTerm, definition: newDef});
        document.getElementById("new-term").value = "";
        document.getElementById("new-definition").value = "";
    }
});

// This line will display the card when the page is refreshed
window.onload = displayCard;
