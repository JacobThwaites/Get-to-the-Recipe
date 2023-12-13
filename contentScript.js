function doesClassExist(className) {
    return document.querySelector(`.${className}`) !== null;
}
  
function scrollToClass(className) {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
}
  
const classesToCheck = [
    'wprm-recipe-container',
    'wprm-recipe',
    'tasty-recipes-entry-header',
    'mv-create-wrapper',
    'easyrecipe',
    'Recipe',
    'recipe-block',
]
  
  chrome.runtime.sendMessage({}, () => {
    for (const recipeClass of classesToCheck) {
        if (doesClassExist(recipeClass)) {
          scrollToClass(recipeClass);
          chrome.runtime.sendMessage({ classExists: true });
          return;
        } else {
            chrome.runtime.sendMessage({ classExists: false });
        }
    } 
  });