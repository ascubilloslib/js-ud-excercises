document.getElementById('test').
addEventListener('mouseout', (event) =>{

    event.target.style.color = 'red'

    setTimeout(() => {
      event.target.style.color = "black";
    }, 1000);

});
