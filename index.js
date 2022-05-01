const clock = document.querySelector('.clock');

//function to update the time on the digital clock every second
const tick = ()=>{
    
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <h4>The time is:</h4>
        <span>${h} hrs</span> : 
        <span>${m} min</span> : 
        <span>${s} s</span>
    `;
    clock.innerHTML = html;
    //console.log(h, m, s);  
};

//calling a function every second
setInterval(tick, 1000);