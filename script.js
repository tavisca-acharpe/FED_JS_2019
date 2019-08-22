var listCity = [];
var data = localStorage.getItem("city");
var retrievedData = JSON.parse(data);

function preList()
{
  var li,t;
 
  for(let i=0; i<retrievedData.length;i++)
  {
    tdData = document.createElement("td");
    tdEdit = document.createElement("td");
    tdDelete = document.createElement("td");
    tr = document.createElement("tr");
    t = document.createTextNode(retrievedData[i]);

    buttonDelete = document.createElement("button");
    buttonEdit = document.createElement("button");
    buttonDelete.innerHTML="Delete";
    buttonEdit.innerHTML="Edit";
    buttonDelete.setAttribute('onclick', 'removeRow(this)');

    tdData.appendChild(t);
    tdEdit.appendChild(buttonEdit);
    tdDelete.appendChild(buttonDelete);

    tr.appendChild(tdData);
    tr.appendChild(tdEdit);
    tr.appendChild(tdDelete);

    document.getElementById("table").appendChild(tr);
  }
  listCity=retrievedData;
}
 
 function AddFunction() { 
  var flag=0;       
  var inputValue = document.getElementById("myInput").value;
  inputValue=inputValue.toUpperCase();

  tdData = document.createElement("td");
  tdEdit = document.createElement("td");
  tdDelete = document.createElement("td");
  tr = document.createElement("tr"); 
  t = document.createTextNode(inputValue);
  buttonDelete = document.createElement("button");
  buttonEdit = document.createElement("button");
  buttonDelete.innerHTML="Delete";
  buttonEdit.innerHTML="Edit";
  buttonDelete.setAttribute('onclick', 'removeRow(this)');
  tdData.appendChild(t);
  tdEdit.appendChild(buttonEdit);
  tdDelete.appendChild(buttonDelete);

  tr.appendChild(tdData);
  tr.appendChild(tdEdit);
  tr.appendChild(tdDelete);

      
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
            alert(inputValue +" City is already present");
        }
        else
        {
          document.getElementById("table").appendChild(tr);
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

function removeRow(oButton) {
  var table = document.getElementById('table');
  table.deleteRow(oButton.parentNode.parentNode.rowIndex);     
  localStorage.removeItem("city");
}
