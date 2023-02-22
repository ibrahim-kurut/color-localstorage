document.body.classList.add(localStorage.getItem("pageColor") )



let li = document.querySelectorAll("ul li");

let classesList = [];

for(let i = 0; i < li.length; i++){
    classesList.push(li[i].getAttribute("data-color"));

    li[i].addEventListener("click", function(){

        document.body.classList.remove(...classesList);

        document.body.classList.add(this.getAttribute("data-color"));


        localStorage.setItem("pageColor", this.getAttribute("data-color"))

    }, false);
}