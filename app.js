var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txtarea");
var outputvar = document.querySelector("#outputdiv");


function errorHandler(error){
    console.log("Error type : " + error);
    alert("Error has occurred : Type : " + error)
}

var apiUrl = "https://api.funtranslations.com/translate/minion.json"

function makeUrl(inputText){
    return ( apiUrl + "?text=" + inputText)
}

function runapi(){
    var userText = txtInput.value
    fetch(makeUrl(userText))
    
    .then(response => response.json())
    .then(json =>{
    var translatedText = json.contents.translated;
    
    outputvar.innerText = translatedText})
    .catch(errorHandler)
}




btnTranslate.addEventListener("click", runapi);

 