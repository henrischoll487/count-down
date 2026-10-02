let targetE1 = document.getElementById("targetDate");
let output = document.getElementById("output");
let interval;

targetE1.addEventListener("change", () => {

    interval = setInterval(function(){
        let targetDate = new Date(targetE1.value).getTime();
        let now = new Date().getTime();
        // console.log(targetDate);
        // console.log(now); 
        let diff =targetDate - now;
         if(diff < 0){
            clearInterval(interval);
            output.innerHTML = "countdown finished!"
            return
        }
        let days = Math.floor(diff/ (1000 *60 *60 * 24));
        let hours = Math.floor((diff % (1000 *60 *60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 *60 *60)) / (1000 * 60 ));
        let seconds = Math.floor((diff % (1000 *60 )) /(1000));

output.innerHTML = `${days}d: ${hours}h : ${minutes}m : ${seconds}s`;
    }, 1000)
})