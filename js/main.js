
// --------all class catch section---------
let count_Down_days = document.querySelector(".countDown_Days");
let count_Down_hrs = document.querySelector(".count_Down_Hrs");
let count_Down_min = document.querySelector(".count_Down_Min");
let count_Down_sec = document.querySelector(".count_Down_Sec");
// -----------dectare variable for total time----
let total ;
// ---------get date----------
let mainDate = new Date("jan 1,2024 12:00:00").getTime();
// -------------countdown function-----------
const countDownfunc = () =>{
    let current = new Date().getTime();
      total= mainDate - current;
    // console.log(total)
    let leftDays=Math.floor(total/(1000*60*60*24));
    // console.log(leftDays)
    let leftHrs=Math.floor(total/(1000*60*60));
    // console.log(leftHrs)
    let leftMin=Math.floor(total/(1000*60));
    // console.log(leftMin);
    let leftSec=Math.floor(total/1000);
    // console.log(leftSec)
    count_Down_days.innerHTML=leftDays;
    count_Down_hrs.innerHTML=leftHrs;
    count_Down_min.innerHTML=leftMin;
    count_Down_sec.innerHTML=leftSec;

}
let setCount = setInterval(countDownfunc,1000);

const countStopfunc=()=>{
    if(total > 0){
        clearInterval(setCount);
        count_Down_days.innerHTML="off";
        count_Down_hrs.innerHTML="off";
        count_Down_min.innerHTML="off";
        count_Down_sec.innerHTML="off";
        
    }
    // console.log(count_Down_days);
    // console.log(count_Down_hrs);
    // console.log(count_Down_min);
    // console.log(count_Down_sec);   
}
countStopfunc()






