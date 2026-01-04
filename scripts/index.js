var open = document.querySelector('div#openmenu')
var close = document.querySelector('div#closemenu')
var nav = document.querySelector('div#navegacao')
var menu = document.querySelector('div#menu')

function abrir(){
    nav.style.display = 'block'
    open.style.display = 'none'
    
    
    
}

function fechar(){
    nav.style.display = 'none'
    open.style.display = 'block'
}