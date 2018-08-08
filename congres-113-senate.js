var members = data.results[0].members


function senate(members) {
        var table = document.getElementById("senate-data");
		var thead = document.createElement("thead");
	
		var  row0 = document.createElement("tr");
		var  c1 = document.createElement("th");
		c1.textContent = "Senator";
		var  c2 = document.createElement("th");
		c2.textContent = "Party";
		var  c3 = document.createElement("th");
		c3.textContent = "State";
		var  c4 = document.createElement("th");
		c4.textContent = "Seniority";
		var  c5 = document.createElement("th");
		c5.textContent = "Percentage";

	
	 	var tableBody= document.createElement("tbody"); 
	
	
	for (var i = 0; i < members.length; i++) {
		var row = document.createElement("tr");
		
		var name = members[i].first_name + members[i].last_name;
		var col0 = document.createElement("a");
		
		col0.setAttribute("href",members[i].url);
		col0.textContent = name;
		//if ()
		
		var col1 = document.createElement("td");
		col1.appendChild(col0);
		
		
		var party = members[i].party
		var col2= document.createElement("td");
		col2.textContent = party
			
		var state = members[i].state
		var col3 = document.createElement("td");
		col3.textContent = state
			
		var seniority = members[i].seniority
		var col4  = document.createElement("td");
		col4.textContent = seniority
			
		var por = "%";
		var votes_with_party_pct = members[i].votes_with_party_pct 
		var col5  = document.createElement("td");
		col5.textContent = votes_with_party_pct + por
		
	
		row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
		tableBody.appendChild(row);
		}
	
	
		row0.appendChild(c1);
        row0.appendChild(c2);
       	row0.appendChild(c3);
        row0.appendChild(c4);
        row0.appendChild(c5);
		thead.appendChild(row0);
	
	table.appendChild(tableBody);
	table.appendChild(thead);
	
	
}

senate(members);








var filtro = document.querySelectorAll("form1")
var array = []
var newarray = []

function all(){
	for(i = 0; i < members.length; i++)
var party = members[i].party
		if(party == "R"){
			array.push.members[i]
		}

	for(i = 0; i < members.length; i++)
var party = members[i].party
		if(party == "D"){
			array.push.members[i]
		}
	
		for(i = 0; i < members.length; i++)
var party = members[i].party
		if(party == "I"){
			array.push.members[i]
		}
}
		
		
		
		
/*
este es el check del boton cuando funciones todo
checkbox.addEventListener("change", validaCheckbox, false);

function validaCheckbox(){
  var checked = checkbox0.checked;
  if(checked){
    alert('checkbox esta seleccionado');
  }
}

<label for="test"><input type="checkbox" name="test" id="test">
  Pincha aquí
</label>*/
	
	
	
	
	
	
	
	
	
	
	


//--------------hacer funcion return para midlename------------> 
//--------------hacer grids------------> 
//function removeClass(element, classToRemove){//
/*    var currentClassValue = element.className;
 
    if (currentClassValue == classToRemove) {
        element.className = "";
        return;
    }*/