let para = document.querySelector('p');
para.remove();     //para will be removed


let em = document.querySelector('em');

// em.remove();            //em will be removed



// removeChild();

em.parentElement.removeChild(em);       //it will also remove em 