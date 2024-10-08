   const buttons =document.querySelectorAll(".button")
    
   
    const body = document.querySelector(".container")
    //console.log(body);
    

   buttons.forEach(function(button){
     
    button.addEventListener("mouseover",function(e){

     if(e.target.id ==='red'){
        body.style.backgroundColor = e.target.id;
     }
     

     if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
     }
    

     if(e.target.id === 'green'){
        body.style.backgroundColor = e.target.id;
     } 
   
     if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
     }
     if(e.target.id === 'black'){
      body.style.backgroundColor = e.target.id;
   }
   if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
   }
    });


  });
