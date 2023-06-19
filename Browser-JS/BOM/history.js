//window.history

// The window.history property allows limited access to the previously visited pages in the same browser sesion.

//you can see how many pages uder has visited before coming to your page.

window.history.length;

console.log(window.history.length)
//You cannot see the actuual URLs though. For privacy reasons, this doesn't work.

window.history[0];
console.log(window.history[0]);



//You can however, navigate back and forth through the user's sessions as if the user had clicked on the back/forward browser buttons.

history.forward();

history.back();

// You can also skip pages back and forth with history.go(). This is the same as calling history.back().

history.go(-1);

//Reload the current page using the following code:

history.go(0);