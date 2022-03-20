var xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");
xhr.send();


xhr.onload=function(){
    
    if(xhr.status>=200 && xhr.status<300){
       
         var data=JSON.parse(xhr.response);
            
            for(var i=0; i<data.length; i++){
                console.log(data[i].name + " : "+ data[i].flag);
            }
    }else{
       
        console.log("Data is not available");
    }
}
