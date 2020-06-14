//initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function (e) {
        const styls = e.currentTarget.classList;
        if(styls.contains('decrease')){
            count--;
        }
        else if (styls.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        
        if (count>0){
            value.style.color = 'green';
        }
        else if(count<0){
            value.style.color = 'red';
        }
        else{
            value.style.color = 'black'
        }
        value.textContent = count;
     });
});
