


const Tools = (function() {

  const removeElement = function (element) {
    element.remove();
  };
  
  
  const delegate = function (selector, fn) {
    return function (e) { //woher nimmt es das richgite Event-Objekt?
      if(e.target.matches(selector)) {
        fn(e);
      }
    }
  };

  return {
    delegate: delegate,
    removeElement: removeElement
  };


})

(); //Die "Hauptfunktion, welche in Tools gespeichert wurde, muss zum Schluss noch aufgerufen werden."