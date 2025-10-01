var EndDate=new Date("1 Jan, 2026 24:00:00").getTime();
var startDate=new Date('1 Jan, 2025 23:59:59:00').getTime();
function updateTimer(){
   var now=new Date().getTime();
   var distanceCovered=now-startDate;
   var distancePending=EndDate-now;
   //calculate days min hours
   //1 day=24*60*60*1000ms
   var days=Math.floor(distancePending/(24*60*60*1000));
   var hrs=Math.floor((distancePending%(24*60*60*1000))/(60*60*1000));
   var min=Math.floor((distancePending%(60*60*1000))/(60*1000));
   var sec=Math.floor((distancePending%(60*1000))/(1000));
   var miliSec=Math.floor((distancePending%(1000)));
   document.getElementById('days').innerHTML=days;
   document.getElementById('hours').innerHTML=hrs;
   document.getElementById('minutes').innerHTML=min;
   document.getElementById('seconds').innerHTML=sec;
   document.getElementById('mili-seconds').innerHTML=miliSec;

   //calculate width precen for progress now
   var totalDistance=EndDate-startDate;
   const precentagedistance=(distanceCovered/totalDistance)*100;
   document.getElementById('progress-bar').style.width=precentagedistance+'%';
   if(distancePending<0){
     clearInterval();
     document.getElementById('countdown').innerHTML="EXPIRED";
     document.getElementById('progress-bar').style.width='100%';
   }
}
setInterval(updateTimer,1000);