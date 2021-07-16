// // Write your JavaScript code here.
// // Remember to pay attention to page loading!
// Write your JavaScript code here. function
// Remember to pay attention to page load
window.addEventListener("load",function(){
    console.log("page load");
    const takeoff = document.getElementById("takeoff");
    console.log(takeoff)
    const flightStatus=document.getElementById("flightStatus");
    const landing=document.getElementById("landing");
    const missionAbort=document.getElementById("missionAbort");
    const shuttleHeight= document.getElementById("spaceShuttleHeight");
    const buttonup=document.getElementById("buttonup");
    const buttondown=document.getElementById("buttondown");
    const buttonright=document.getElementById("buttonright");
    const buttonleft=document.getElementById("buttonleft");
    const rocket =document.getElementById("rocket")
    rocket.style.position="absolute";
    rocket.style.left="0px";
    rocket.style.bottom="0px";
   
     function takeoffclicked(){
       
        let answer=window.confirm(" Confirm that the shuttle is ready for takeoff.")
        if(answer){
            flightStatus.innerHTML='shuutle in flight';
            document.getElementById("shuttleBackground").style.background="blue";
            shuttleHeight.innerHTML=10000;

        }
    }
    takeoff.addEventListener("click",takeoffclicked)
     function landingclicked(){
         window.alert("The shuttle is landing. Landing gear engaged.")
         flightStatus.innerHTML='The shuttle has landed.';
         document.getElementById("shuttleBackground").style.background="green";
         shuttleHeight.innerHTML=0;
         rocket.style.bottom="0px";
     }
     landing.addEventListener("click",landingclicked);

     function missionAbortclicked(){
         let  response =window.confirm("Confirm that you want to abort the mission.")
         if(response)
         {
            document.getElementById("flightStatus").innerHTML=' Mission aborted.'; 
            document.getElementById("shuttleBackground").style.background="green"; 
            document.getElementById("spaceShuttleHeight").innerHTML=0;
            rocket.style.bottom="0px";
         }
         

     }
     missionAbort.addEventListener("click",missionAbortclicked);
     function buttonupclicked(){
        if(parseInt(rocket.style.bottom)<=240) { 
        console.log(rocket.style.bottom);      
         rocket.style.bottom = parseInt( rocket.style.bottom )+10+"px";
         shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML)+10000;
        }
         
     }
     
     buttonup.addEventListener("click",buttonupclicked);
     function buttondownclicked(){
        if(parseInt(rocket.style.bottom)>=0) { 
        //console.log(rocket.style.bottom);      
        rocket.style.bottom = parseInt( rocket.style.bottom )-10+"px";
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML)-10000;
        }
        
    }
    
    buttondown.addEventListener("click",buttondownclicked);

     function buttonrightclicked(){
        if(parseInt(rocket.style.left)<=380) { 
            console.log(rocket.style.left);
        rocket.style.left = parseInt( rocket.style.left )+10+"px";
    }
        //shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML)+10000;
        
    }
    
    buttonright.addEventListener("click",buttonrightclicked);
    function buttonleftclicked(){
        if(parseInt(rocket.style.left)>=0) {          
        rocket.style.left = parseInt( rocket.style.left )-10+"px";
    }
        //shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML)+10000;
        
    }
    
    buttonleft.addEventListener("click",buttonleftclicked);






})


