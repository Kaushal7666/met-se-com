let add = document.querySelector("#new_todo");
let pop = document.querySelector(".popup");

console.log(pop);

add.addEventListener("click", function (){
    console.log("click");
    pop.style.display ="flex";
})

let save= document.querySelector("#save");
let closed= document.querySelector("#close");

save.addEventListener("click", function (){
    if(document.querySelector("input").value==""){
        alert(`Please enter the name!!`);
    }
});
closed.addEventListener("click", function (){
    pop.style.display ="none";
});

save.querySelector("click", function (){
    document.querySelector(".new_row").innerHTML = `<td>
    <dl>
        <dt>${document.querySelector("input").value} <button class="pri" type="button" style="background-color: #2fa84f;">!</button></dt>
        <dd>${document.querySelector("textarea").value}</dd>
    </dl>
</td>
<td><button class="bin"><i class="fa fa-trash" aria-hidden="true"></i></button></td>`
});

