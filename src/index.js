function displayRecipe(response){
    new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      cursor: "",
    });
}

function generateRecipe(event) {
  event.preventDefault();

 let instructionsInput= document.querySelector("#user-instructions");
let apiKey = "3a1ba03353eo46c2131e8effa9ted923";
let context="You are a health and nutrition expert and love quick healthy recipes under 500 calories.Your mission is to generate quicky healthy recipe in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
let prompt=`User instructions: Generate quick healthy meal recipe about ${instructionsInput.value};`
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement=document.querySelector("#recipe");
recipeElement.classList.remove("hidden");
recipeElement.innerHTML=`<div class="generating">⏳ Generating a ${instructionsInput.value} Healthy Recipe </div>`;

axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
