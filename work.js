let currentInput = document.querySelector('.currentInput');
let showResult = document.querySelector('.showResult');
let buttons = document.querySelectorAll('button');
let deletebtn = document.querySelector('#delete');
let clearbtn = document.querySelector('#clear');
let compute = document.querySelector('#compute');
let realTimeScreenValue = []

clearbtn.addEventListener("click", ()=>{
    realTimeScreenValue=[''];
    showResult.innerHTML=0;
    currentInput.className = 'currentInput';
    showResult.className = 'showResult';
    showResult.style.color = "black";
})

buttons.forEach((btn)=>{
    btn.addEventListener("click", () => {
        // When clicked button is not deleted button
        if(!btn.id.match('delete')){
            // To display value on button press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML=realTimeScreenValue.join('');
            // To evaluate answer in real time
            if(btn.classList.contains('num-btn')){
                showResult.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }
        // When delete button is clicked
        if(btn.id.match('delete')){
            realTimeScreenValue.pop();
            currentInput.innerHTML=realTimeScreenValue.join('');
            showResult.innerHTML=eval(realTimeScreenValue.join(''));
        }
        // When clicked button is compute button
        if(btn.id.match('compute')){
            currentInput.className = 'showResult';
            showResult.className = 'currentInput';
            showResult.style.color = "black";

        }
        // To prevent undefined error in result
        if(typeof eval(realTimeScreenValue.join('')) == 'undefined'){
            showResult.innerHTML=0;
        }
    })
})
