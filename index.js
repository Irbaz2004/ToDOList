let put=document.getElementById("in");
let nue=document.querySelector(".new");


function add(){
    if(put.value==""){
        alert("Please enter your task!")
    }
    else{
       let data=document.createElement("ul");
        data.innerHTML=`${put.value}  <i id="e" class="fa-solid fa-pen-to-square"></i>  <i class="fa-solid fa-trash"></i>`;
        nue.appendChild(data);
        put.value="";

        data.querySelector(".fa-trash").addEventListener("click",remov)
        function remov(){
            data.remove()
        }

        data.querySelector(".fa-pen-to-square").addEventListener("click",update)
        function update(){
            let re = data.textContent.trim()
            put.value=re
            data.remove()
        }
    


        }
    }

   
