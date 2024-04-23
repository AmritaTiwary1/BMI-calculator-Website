     
     

     let results = (document.querySelector('#results'));
     let calculate =(document.querySelector('#calculate'));
    calculate.addEventListener('click',(e)=>{
        var height = (document.querySelector('#height').value); //---> since , input take strings, so it is imp. to convert it to int
   var weight = (document.querySelector('#weight').value);

        if(height=="" || height <0 || isNaN(height)){  //isNaN is function which check whether argument 
            results.innerHTML = `<span>Please Give A Valid Height </span>`;
         }
         else if(weight=="" || weight <0 || isNaN(weight)){  //isNaN is function which check whether argument 
            results.innerHTML = `<span>Please Give A Valid weight </span>`;
         }
         else{
            const bmi= (weight /((height*height)/10000)).toFixed(2); //to fixed will print decimal value upto 2 place
            console.log(bmi);
          //show the result
          results.innerHTML = bmi;
        }
 })    

    
