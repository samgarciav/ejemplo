/* --------------------------------------------------------------------------------------------------------------- */
/************************************ I guess this is the simplest way to do it ************************************/
const request = new XMLHttpRequest();                            // here we are creating the request Object
request.addEventListener('readystatechange', () => {
  //console.log(request, request.readyState)                     //this console the request itself and it's readyState  
  if (request.readyState === 4 && request.status === 200) {      // all this code is to ckeck for an error and if there is not an error then parse and console the request
    console.log("basic way", JSON.parse(request.responseText));
  } else if (request.readyState === 4) {
    console.log('could not fetch the data');
  }
});
request.open('get', 'https://swapi.dev/api/people/');           // we are telling what type of request and where to get the data (setting up the request)
request.send();                                                 // we are actually sending the request
/* -------------------------------------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------------------------------------------------- */
/************************************ Makeing it more re usable ************************************/
const getPeople = (resource, callback) => {
  const request = new XMLHttpRequest();                           // here we are creating the request Object
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {     // when this is done the callback will be fired
      callback(undefined, JSON.parse(request.responseText));      // this callback is sent with two argements, the first one is undefined and the second one the data
    } else if (request.readyState === 4) {
      callback("could not fetch the data", undefined);            // the value that is truthy will be used to decide what to do on the callback
    }
  })
  request.open('get', resource);                                  // we are telling what type of request and where to get the data (setting up the request)
  request.send();
};

getPeople('https://swapi.dev/api/people/', (err, data) => {        // it looks like the getToDos is in the thread, but when within this step a callback is fired the step(getToDos) is completed, and continues with the next step and returns to the callback within "later" wich, I don't completetly understand when. When the other processes are done? or when the callback already is finished                         
  if (err) {                                                       // err and data are the parameters of the callback Function
    console.log(err);
  } else if (data) {
    console.log("reusable way", data);
    getPeople(data.next, (err, data) => {                           // withing the first success I call again my function with a different resource
      if (err) {
        console.log(err);
      } else if (data) {
        console.log("reusable way 2nd page", data);
        getPeople(data.next, (err, data) => {                       // withing the second success I call again my function with a different resource
          if (err) {
            console.log(err);
          } else if (data) {                                        // And this starts to look like the triangle of doom or callback hell
            console.log("reusable way 3th page", data);
          }
        });
      }
    });
  }
});
/* -------------------------------------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------------------------------------------------- */
/************************************ Promises ************************************/
const goGetData = () => {
  return new Promise((resolve, reject) => {       // this new Promise uses a callback function to initialize ... this callback function has 2 parameters that are also functions
    // fetch some data                            // these resolve and reject are or will be functions that will be fired when the conditions are matched
    resolve(/* data as an argument */);           // if the condition match resolve() will be fired
    reject(/* error as an argument */);           // if the condition match reject() will be fired
  });
}

goGetData()                                             // the goGetData() will return a new Promise
  .then(/* callback1, callback2 */);                      // the .then() method sets two function arguments for the Promise
//.then( callback1.- ()=>{} ,                           // the first callback recieves as a parameter what the resolve() in the Promise sends as an argument 
// callback2.- ()=>{} );                                // the second callback recieves as a parameter what the reject() in the Promise sends as an argument 

/* A kind of better way to do the previos thing */
goGetData()                                             // instead of passing two arguments in the .then() method 
  .then()                                               // we pass only one in the .then for the resolve
  .catch();                                             // and the catch is for the reject
/* --------------------------------------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------------------------------------------------- */
/************************************ Applying Promises ************************************/
const getPeoplePromise = (resource/* , callback */) => {           // I dont need the callback anymore

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {     // when this is done the callback will be fired
        resolve(JSON.parse(request.responseText));                  // but now the callback is the resolve
      } else if (request.readyState === 4) {
        reject("could not fetch the data");                         // and this callback is the reject
      }
    });
    request.open('get', resource);
    request.send();
  });
};
getPeoplePromise('https://swapi.dev/api/people/')
  .then((data) => { console.log("using promise", data); })
  .catch((err) => { console.log(err) });
/* --------------------------------------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------------------------------------------------- */
/************************************ Chaining Promises ************************************/
const getPeopleChain = (resource/* , callback */) => {           // I dont need the callback anymore

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {     // when this is done the callback will be fired
        resolve(JSON.parse(request.responseText));                  // but now the callback is the resolve
      } else if (request.readyState === 4) {
        reject("could not fetch the data");                         // and this callback is the reject
      }
    });
    request.open('get', resource);
    request.send();
  });
};
getPeopleChain('https://swapi.dev/api/people/')
  .then((data) => {
    console.log("using promise", data);                             // withing this .then() we are calling again the getPeopleChain
    return getPeopleChain(data.next);                               // wich will return  also a promise (that's way we added the return)
  }).then((data) => { console.log("data 2nd page Chaining", data) })     // we can use the .then() because the previos step returned a promise
  .catch((err) => { console.log(err) });                            // it is not necesarry to add another catch, this same catch catches all the errors
/* --------------------------------------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------------------------------------------------- */
/************************************ FETCH  ************************************/

fetch('https://swapi.dev/api/people/')                       // this fetch returns a promise (a function that will be called depending on the result, resolve or reject)
  // the fetch will return as an argument's promise a response Object
  .then((response) => {                                     // the same principle applies, we can tackle a .then() for the promise resolve. 
    console.log("response object", response);               // this response Object has a method called json()    
    return response.json()                                  // this method will return a PROMISE, it is not yet the actual data
  }).then(data => console.log("fetching", data))            // same as befor, we tackle the .then() for the returned response.json() wich now it has the data                                      
  .catch();                                                 // same for the .catch() BUT it works a little different. It will resolve either if the endpoint is wrong. It only throws an error on network error
/* --------------------------------------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------------------------------------------------- */
/************************************ FETCH CHAINING  ************************************/

fetch('https://swapi.dev/api/people/')                            // this fetch returns a promise (a function that will be called depending on the result, resolve or reject)
  // the fetch will return as an argument's promise a response Object
  .then((response) => {                                           // We can tackle a .then(that will fire a function) for the promise resolve. 
    console.log("response object", response);                     // this function will recive as a parameter an Object (response objejct) that has a .json() medoth
    return response.json()                                        // response.json() returns a PROMISE, it is not yet the actual data
  }).then(data => {                                               // again, the promise when resolved fires a callback function that passes as the argument the data
    console.log("fetching", data);
    return fetch(data.next).then(response => response.json());
  }).then(data2 => console.log("fetch 2nd page", data2))                                                       // same as befor, we tackle the .then() for the returned response.json() wich now it has the data                                      
  .catch();                                                    // same for the .catch() BUT it works a little different. It will resolve either if the endpoint is wrong. It only throws an error on network error
/* --------------------------------------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------------------------------------------------- */
/************************************ async and await  ************************************/
const getPeopleAA = async () => {
  const response = await fetch('https://swapi.dev/api/people/');
  const data = await response.json()
  console.log('async and await', data)
}

getPeopleAA();
