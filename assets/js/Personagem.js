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

const caracther0 = new Personagem('Leonardo Di Caprio', './assets/imgs/leonarda-di-caprio.jpg')




