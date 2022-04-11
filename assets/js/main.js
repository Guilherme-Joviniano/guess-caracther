

const send = document.querySelector('.buttonSBMT')
const names = [caracther0.name.toLowerCase()]


send.addEventListener("click", function(){
    
    const inputValue = document.querySelector('.inputName').value.toLowerCase()
    
    if(names.includes(inputValue)){
        
        const elID = names.indexOf(inputValue) + 1
        const arr = names[elID-1].toLowerCase('').split(" ");

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        
        const name = arr.join(" ");
        
        const el =  document.getElementById(elID)
        el.innerHTML = name
        el.style.backgroundColor = "green"
        
    }





})


 
