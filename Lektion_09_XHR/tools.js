export const removeElement = function (element) {
  element.remove();
};


export const delegate = function (selector, fn) {
  return function (e) { //woher nimmt es das richgite Event-Objekt?
    if (e.target.matches(selector)) {
      fn(e);
    }
  }
}

export const get = function (url, fn) {

  var request = new XMLHttpRequest();

  request.open('GET', url, true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      console.log('get hat funktionert')

      var response = JSON.parse(request.responseText);
      fn(response);

    } else {
      console.log('Daten konnten nicht verarbeitet werden');
    }
  }

  request.error = function () {
    console.log('Verbindung zum Server fehlgeschlagen');
  }

  request.send();

}

export const post = function (url, array, fn) {

  var request = new XMLHttpRequest();

  request.open('POST', url, true);
  request.setRequestHeader("Content-Type", "application/json");

  var data = JSON.stringify(array);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      console.log('get hat funktionert')
      var response = JSON.parse(request.responseText);
      fn(response);

    } else {
      console.log('Daten konnten nicht verarbeitet werden');
    }
  }

  request.error = function () {
    console.log('Verbindung zum Server fehlgeschlagen');
  }

  request.send(data);

}

