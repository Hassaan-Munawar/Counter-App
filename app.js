var num =0
var getid =document.getElementById("zero")
function plus(){
    num++
    getid.innerHTML = num
}
function minus(){
    if(getid.innerHTML != 0){
        num--
        getid.innerHTML = num
    }
}
function reset (){
    num =0 
    getid.innerHTML = num
}