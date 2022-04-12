let instaces = 0
function Personagem(name, photo){
    instaces++
    this.name = name;
    this.photo = photo;
    return this.criarElemento();
}

Personagem.prototype.criarElemento = function(){
    const container = document.querySelector('.container-flex')
    
    let child = document.createElement('div')

    let name = document.createElement('div')
    name.innerHTML = '??????';
    name.classList.toggle('name')
    name.id = instaces

    let photo = document.createElement('img')
    photo.src = `${this.photo}`
    photo.classList.toggle('photo')

    child.appendChild(photo)
    child.appendChild(name)
    
    
    child.classList.toggle('child')
    
    container.appendChild(child)

}
Personagem.prototype.showRealName = function(){
    
}
let allCaracther = []
const listNames = [
    'Leonardo Dicaprio',
    'Will Smith',
    'Oscar Isaac',
    'Scarllet Johansson',
    'Elizabeth Olsen',
    'Paul Dano',
    'Milly Bob Browm',
    'Juliana Paes',
    'Henry Cavil',
    'Tom Hanks'
 ]
const pathImg = './assets/imgs/'


function makeCarachers(){
    for(let i = 0; i< listNames.length; i++){
        allCaracther[i] = new Personagem(listNames[i],pathImg + listNames[i].toLowerCase() + '.jpg')
        
    }
    return allCaracther
}

makeCarachers()
console.log(allCaracther[0].photo);

localStorage.setItem('instance', instaces)



