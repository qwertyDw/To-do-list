// ES5 var, function => ES6 let, const
/*var a=5;
var a="text"; Aldaa garahgu.*/

/*let b=5;
let b="text"; Aldaa garna 2 utga avj bolohgu*/
let input= document.getElementsByTagName('input')[0];
let addBtn = document.querySelector(".add");
let olEl= document.getElementsByTagName('ol')[0];
// ES5 function => ES6 addEventListener
addBtn.addEventListener("click",()=>{
    if(input.value==''){
        alert("Can't be empty.")
    }else{
        // create li-> createElement
        let liEl = document.createElement("li")
        // li dotor input utgiig oruulna
        liEl.innerText=input.value;
        // ol dotor li gargaj irne
        olEl.append(liEl);
        liEl.style.color="red"
        liEl.style.fontSize="20px"
        // clear
        input.value=""
        let delBtn= document.createElement("button")
        delBtn.innerHTML="<i class='bi bi-trash'></i>"
        liEl.append(delBtn)
        let check=document.createElement("button")
        check.innerHTML="<i class='bi bi-check-circle'></i>"
        liEl.append(check)
        // tag-d class name ugdug -> className
        delBtn.className = "del";
        saveData();
    }
})
olEl.addEventListener("click", (e)=>{
    let targetEl=e.target;
    let parentEl=targetEl.parentElement;
    let gpEl=parentEl.parentElement
    if(targetEl.className=="bi bi-trash"){
        // .remove() -> tag ustgah func
        gpEl.remove();
    }if(targetEl.className=="bi bi-check-circle"){
        // classList -> tag deer class nemne -> toggle
        gpEl.classList.toggle("checked")
    }
    saveData();
})
// localStorage -> data hadgalah dav
// setItem-> hadgalah, getItem()-> hadgalsnaa duudah

function saveData(){
    localStorage.setItem('todo', olEl.innerHTML);
}
function getData(){
    olEl.innerHTML= localStorage.getItem('todo');
}
getData();