var xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");
xhr.send();

xhr.onload=function(){
   
    if(xhr.status>=200 && xhr.status<300){
       //converts raw into js notation format 
         var data=JSON.parse(xhr.response);
          
            for(var i=0; i<data.length; i++){
                console.log("Name:" + data[i].name);
                console.log("Region:" + data[i].region);
                console.log("Subregion:" + data[i].subregion);
                console.log("Population:" + data[i].population);
            }
    }else{
       
        console.log("Data is not available");
    }
}
