  
  var listCity = ["Amravti","Akola","Pune","Mumbai"];
      function myFunction() {        
         var inputValue = document.getElementById("myInput").value;
        var li = document.createElement("li");
        var t = document.createTextNode(inputValue);
        li.appendChild(t);  
        if (inputValue === '') {
         alert("You must write something!");
        } else {
        document.getElementById("myUL").appendChild(li);
        listCity.push(inputValue);
        }
        document.getElementById("myInput").value = "";
      }
    
    function suggest(value) {
      document.getElementById("datalist").innerHTML = '';

      for (var i = 0; i<listCity.length; i++) {
       if(((listCity[i].toLowerCase()).indexOf(value.toLowerCase()))>-1)
        {
        var node = document.createElement("option");
        var val = document.createTextNode(listCity[i]);
        node.appendChild(val);
        document.getElementById("datalist").appendChild(node);
        }
     }
 }