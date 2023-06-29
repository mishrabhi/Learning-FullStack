let anchor = document.querySelector('a');

anchor.onclick = function(event) {
    event.preventDefault();
    console.log(event)
    // alert('Clicked')
    console.log(event.target);

    //pointing to current object == anchor
    console.log(this)
    console.log(this.innerText)
}