// The navigator is an object that has some information about the browser and its capabilities.

//navigator;

console.log(window.navigator.userAgent);


navigator.geolocation.getCurrentPosition((d) => {
    console.log(d)
});