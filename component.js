function jumpById(x){
    let jump = document.getElementById(x)
    jump.scrollIntoView()

}
function addBgById(x){
    let element = document.getElementById(x);
    element.classList.add('bg-[#1DD100]')
}
function removeBgById(x){
    let element = document.getElementById(x);
    element.classList.remove('bg-[#F7F8F8]')
}
function setBgbyId(x){
    removeBgById(x)
    addBgById(x)

}






