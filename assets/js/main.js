const send = document.querySelector('.buttonSBMT')
let instances = localStorage.getItem('instance') 
const names = []
for(let i = 0; i< listNames.length; i++){
    names[i] = listNames[i].toLowerCase()
}


const revealNamesFor10Seconds = () => {
    for(let i = 1; i < names.length + 1; i++){
        let itemName = names[i-1]
        let arr = itemName.toLowerCase('').split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let name = arr.join(" ");
        console.log(name);

        console.log(i);
        
        let object = document.getElementById(`${i}`)
        console.log(object);
        object.innerHTML = name
        
    }
    setTimeout(() => {
        for(let i = 1; i < names.length + 1; i++){
            console.log(i);
            let object = document.getElementById(`${i}`)
            object.innerHTML = '?????????'
        }   
    }, 10000)
}

document.querySelector('.inputName').addEventListener("keypress", function(e){
    if(e.keyCode === 13 || e.which === 13){
        e.preventDefault()
        return false
    }
    
})
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
        el.style.backgroundColor = "darkgreen"
        
    }
})

function main(){
    revealNamesFor10Seconds();
}

main();
