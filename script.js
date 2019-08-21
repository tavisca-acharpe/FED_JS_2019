  
var listCity = [];

function preList()
{
  var data = localStorage.getItem("city");
  var retrievedData = JSON.parse(data);
  var li,t;
 
  for(let i=0; i<retrievedData.length;i++)
  {
     li = document.createElement("li");
     t = document.createTextNode(retrievedData[i]);
     li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
  }
  listCity=retrievedData;
}

  alert(retrievedData);
 
      function myFunction() { 
       var flag=0;       
        var inputValue = document.getElementById("myInput").value;
        inputValue=inputValue.toUpperCase();
        var li = document.createElement("li");
        t = document.createTextNode(inputValue);
        li.appendChild(t);  
      
        if (inputValue === '') {
         alert("You must write something!");
        } else {
        for(let i=0; i<listCity.length;i++)
        {
          if(inputValue===listCity[i])
          {
            flag=1;
          }
        }
        if(flag===1)
        {
            alert("already present");
        }
        else
        {
        document.getElementById("myUL").appendChild(li);
        listCity.push(inputValue);
        localStorage.setItem("city", JSON.stringify(listCity));
        }
      }
        document.getElementById("myInput").value = "";
      }


    function search(value) {
      data = localStorage.getItem("city");
      retrievedData = JSON.parse(data);
    document.getElementById("datalist").innerHTML = '';
      for (var i = 0; i<retrievedData.length; i++) {
       if(((retrievedData[i].toLowerCase()).indexOf(value.toLowerCase()))>-1)
        {
        var node = document.createElement("option");
        var val = document.createTextNode(retrievedData[i]);
        node.appendChild(val);
        document.getElementById("datalist").appendChild(node);
        }
     }
 }


 function deleteElement(){
  var x = document.getElementById("datalist");
  x.remove(x.selectedIndex);
 }