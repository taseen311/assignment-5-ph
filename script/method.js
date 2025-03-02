// changing body color

let colors = ["lightblu","lightgreen","lightpink","lightyellow","lightbroen"];
let presentColorIndex = 0;

function changeBodyColor() {
    document.body.style.backgroundColor = colors[presentColorIndex];
    presentColorIndex = (presentColorIndex + 1) % colors.length;
}


// fixing current date

let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'}
let fullDate = new Date().toLocaleDateString(undefined, options);

document.getElementById("full-date").innerText = fullDate;




// card issues 1
document.getElementById("shop-btn").addEventListener("click", function(event){
    event.preventDefault();

    alert("mobile button issue fixed")

    document.getElementById("shop-btn").style.opacity = "0.5";
    document.getElementById("shop-btn").disabled = true;

    const taskNumber = document.getElementById("task-value").innerText;
    // console.log(taskNumber)
    const convertedTaskNumber = parseInt(taskNumber);

    const sum = convertedTaskNumber - 1;

    document.getElementById("task-value").innerText = sum;


    const checkedNumber = document.getElementById("check-no").innerText;
    const convertedCheckedNumber = parseInt(checkedNumber);

    const sum2 = convertedCheckedNumber + 1;
    
    document.getElementById("check-no").innerText = sum2;




    let realTime = new Date().toLocaleTimeString();

    const taskOne = document.getElementById("task-1").innerText;
    const container = document.getElementById("history-container");

    const p = document.createElement("p");
    p.innerText = `You have completed the task ${taskOne}  at ${realTime}
    `;
    container.appendChild(p)
})


// card issues 2

document.getElementById("cloud-btn").addEventListener("click", function(event){
    event.preventDefault();

    alert("Dark mode added")

    document.getElementById("cloud-btn").style.opacity = "0.5";
    document.getElementById("cloud-btn").disabled = true;

    const taskNumber = document.getElementById("task-value").innerText;
    // console.log(taskNumber)
    const convertedTaskNumber = parseInt(taskNumber);

    const sum = convertedTaskNumber - 1;

    document.getElementById("task-value").innerText = sum;


    const checkedNumber = document.getElementById("check-no").innerText;
    const convertedCheckedNumber = parseInt(checkedNumber);

    const sum2 = convertedCheckedNumber + 1;
    
    document.getElementById("check-no").innerText = sum2;




    let realTime = new Date().toLocaleTimeString();
    const taskTwo = document.getElementById("task-2").innerText;

    const container = document.getElementById("history-container");
    const p = document.createElement("p");
    p.innerText = `You have completed the task ${taskTwo}  at ${realTime}
    `;
    container.appendChild(p)
})