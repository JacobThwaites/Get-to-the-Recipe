function findElement(className) {
    return document.querySelector(`.${className}`);
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
        const element = findElement(recipeClass)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          chrome.runtime.sendMessage({ classExists: true });
          return;
        }
    } 
  });