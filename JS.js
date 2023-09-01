let a = document.querySelector('.a')
let l = document.querySelector('.aa')

a.addEventListener('click', function(){
    if (a.classList.contains('klo')) {
        a.classList.remove('klo')
    } else {
        a.classList.add('klo')
    }
    if (l.classList.contains('op')) {
        l.classList.remove('op')
    } else {
        l.classList.add('op')
    }
})