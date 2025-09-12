let list =document.getElementById("ft_list")
const todos =[]
let x = 0
const lists = atob(document.cookie).split(",")
const result = lists.filter(function s(word){
   return word != ""
})
console.log(result)

web_open()
function web_open(){
    for(let i =0 ; i < result.length ; i++){
        let task_p = list.innerHTML
        if(result[i] !=" "){
            list.innerHTML = `<div class=mini onclick=Del(id) id=${x++}>`+result[i]+"</div>"+task_p
        }else{
            console.log(result[i])
        }
    }
}

function new_list(){
    let task =prompt("What do you want to do ? " )
    if(task ===""){
        alert("Try Again ")
        return
    }
    let task_p = list.innerHTML
    list.innerHTML = `<div class=mini onclick=Del(id) id=${x}>`+task+"</div>"+task_p
    result[x++] = task

    document.cookie = btoa(result)

    let file = document.cookie
    console.log("this :"+file)
}

function Del(num){
    if(confirm("Do you want to delete it ???")){
        let a = document.getElementById(`${num}`)
        console.log(num)
        a.remove()
        result[num]=null
        
        document.cookie = btoa(result)
        console.log(document.cookie)
    }
} 