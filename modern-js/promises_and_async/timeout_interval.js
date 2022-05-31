setTimeout(() => {
    console.log("Starting over two seconds");
},2000)

let second = 0
let intervalID = setInterval(() => {
    second += 2
    console.log("Starting over two seconds and again");
    if (second == 4) clearInterval(intervalID)
},2000)