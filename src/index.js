function displayRecipe(response){
    console.log("recipe generated");
    new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      cursor: "",
    });
}

function generateRecipe(event) {
  event.preventDefault();

 let instructionsInput=document.querySelector("#user-instructions");
let apiKey = "3a1ba03353eo46c2131e8effa9ted923";
let context="You are a health and nutrition expert and love quick healthy recipes under 500 calories"
let prompt=`User instructions: Generate quick healthy meal recipe about ${instructionsInput.value} must be quick and straight to the point and follow
user instructions. Sign off with "SheCodes AI" inside a <strong> element.`
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating recipe");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
