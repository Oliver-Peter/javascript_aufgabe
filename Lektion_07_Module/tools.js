export const removeElement = function (element) {
  element.remove();
};


/* export const delegate = function (selector, callback) {
  let items = document.querySelectorAll(selector);
  items.forEach(item => {
    item.addEventListener('click', callback);
  });
  
} */

export const delegate = function (selector, fn) {
  return function (e) { //woher nimmt es das richgite Event-Objekt?
    if(e.target.matches(selector)) {
      fn(e);
    }
  }
}



//Es Funktioniert...aber warum?
//Real use case?


