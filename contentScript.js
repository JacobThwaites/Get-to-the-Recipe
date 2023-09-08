function doesClassExist(className) {
    return document.querySelector(`.${className}`) !== null;
}
  
function scrollToClass(className) {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
}
  
const classToCheck = 'wprm-recipe-container'; // Replace with the class you want to check
const classesToCheck = [
    'wprm-recipe-container',
    'wprm-recipe', // https://therecipecritic.com/croissant-breakfast-casserole/ adds id to the end of regular class - maybe check LIKE
    'tasty-recipes-entry-header',
    'mv-create-wrapper', // maybe not right,
    'easyrecipe',
    'Recipe', // e.g. https://www.thekitchn.com/one-pot-corn-pasta-recipe-23567076,
    'recipe-block', // https://www.simplyrecipes.com/skillet-eggplant-parmesan-recipe-7254594
]
  

  // Communicate with the background script using messaging
  chrome.runtime.sendMessage({ checkClass: true, test: 'qwer' }, (response) => {
    for (const recipeClass of classesToCheck) {
        console.log(recipeClass);
        if (doesClassExist(recipeClass)) {
          scrollToClass(recipeClass);
          chrome.runtime.sendMessage({ classExists: true });
          return;
        } else {
            chrome.runtime.sendMessage({ classExists: false });
        }
    } 
  });