const counter = document.getElementById("counter");
const pause = document.getElementById("pause");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const likes = document.getElementsByClassName("likes");
const commentForm = document.getElementById("comment-form")


let intervalID = setInterval(function () {
        counter.innerText ++;},1*1000);

plus.addEventListener("click", function(e) {
    counter.innerText ++; 
})

minus.addEventListener("click", function(e) {
    counter.innerText --; 
})

heart.addEventListener("click", function(e) {
    let i = 1
    
    let elementExists = document.getElementById(`${counter.innerText}`);
    // let node = document.createTextNode(`${counter.innerText}` + " has been liked " + i + " time(s)");
    
    if (!!elementExists){
        elementExists.innerText = `${counter.innerText}` + " has been liked " + `${i+1}` + " times"
    } 

    else {
    let like = document.createElement("li")
    like.id = `${counter.innerText}`
    like.innerText = `${counter.innerText}` + " has been liked 1 time"

    likes[0].append(like)}
});



pause.addEventListener("click", function(e) {
    if (pause.innerText === "pause")
    {clearInterval(intervalID);
    this.innerText = "resume";
    plus.disabled = true; 
    minus.disabled = true; 
    heart.disabled = true; }
    else 
    { setInterval(function () {
        counter.innerText ++;},1*1000);
      this.innerText = "pause";
      plus.disabled = false; 
      minus.disabled = false; 
      heart.disabled = false; 
    }

});

commentForm.addEventListener("submit", function(e) {
    let comment = document.createElement("p")
    let list = document.getElementById("list")
    comment.innerText = document.getElementById("comment-input").value
    
    list.appendChild(comment);
    e.preventDefault();



}, false);
