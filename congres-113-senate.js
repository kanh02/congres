//var members = data.results[0].members

//function callFetch(){
//	
//	if(document.getElementById("attendance") != null ){
//	}else if(document.getElementById("loyalty") != null){
//	}
//}



var data;


fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
 
   method: "GET",
   headers: {
       'X-API-Key': 'pmqDNmvWUtCTN7wj4hFYHNeopxEGihOQpjAc4iff'
   }
}).then(function (response) {
 
   if (response.ok) {
       // add a new promise to the chain
       return response.json();
   }
   // signal a server error to the chain
   throw new Error(response.statusText);
}).then(function (json) {
   // equals to .success in JQuery Ajax call
	data = json;
	console.log(data)
	members = data.results[0].members
	console.log(members)
	
	functionComplete();
	
  
}).catch(function (error) {
   // called when an error occurs anywhere in the chain
   console.log("Request failed: " + error.message);
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function functionComplete(){

	 var members = data.results[0].members
	
function senate(members) {
        var table = document.getElementById("senate-data");
	 	var tableBody= document.createElement("tBody");
		tableBody.setAttribute("id","tBody")
		for (var i = 0; i < members.length; i++) {
		var row = document.createElement("tr");
		
		var nom =" ";
		var name = members[i].first_name + nom + members[i].last_name;
		var col0 = document.createElement("a");
		
		col0.setAttribute("href",members[i].url);
		col0.textContent = name;
		
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
	table.appendChild(tableBody);
}
senate(members);
	console.log(senate(members))



document.getElementById("city").onchange = function (){
	All();
}

var option = states();

function All(){
	var filtro = document.querySelectorAll("input[name=party]:checked");
	var tableBody= document.createElement("tBody"); 

	var filteredMembers = []
	var selectedValue = city.options[city.selectedIndex].value;

	for(a = 0; a < filtro.length; a++){
		
	for(i = 0; i < members.length; i++){
		var party = members[i].party
		var states = members[i].state
			if( (party == filtro[a].value ) && (states == selectedValue)) {
			filteredMembers.push(members[i]);
			}else if ( (party == filtro[a].value ) && (selectedValue == "All")) {
			filteredMembers.push(members[i]);
			}
}
}
	return filteredMembers;
}


document.getElementById("city").onchange = function (){
	removeTable();
	senate(All());
}


document.getElementById("form1").onchange = function(){
	removeTable();
	senate(All());	
}



function removeTable(){
	document.getElementById("tBody").remove();
}





function states(){
	var allStates = []
	for(s = 0; s < members.length; s++){
		if( allStates.indexOf(members[s].state)  === -1){
		allStates.push(members[s].state);
	}
	}
	allStates.sort();
	return allStates;
	}

	

function drownMenu(){
	var menu = document.getElementById("city");
	var option = states();
	for(var m = 0; m < option.length; m++){
    	option.value = option[m];
		var span = document.createElement("option");
    	span.textContent = option[m];
		menu.appendChild(span);
}
}
	drownMenu();





function filterDrown(){
	var selectedValue = city.options[city.selectedIndex].value;
	var resulFil = []
	var option = states();
	console.log(selectedValue);
	for(t = 0; t < members.length; t++){
		if(selectedValue == members[t].state){
			resulFil.push(members[t]);
		}
		}
	
	console.log(resulFil)

}
	
}
functionComplete();
















/*

function otra(){
	
	var filtro = document.querySelectorAll("input[name=form1]:checked");
	var newArray = []
	 
		for(i = 0; i < filtro.length; i++){
			
			if(filtro[0].checked && filtro[0].value == members.party){
			newArray.push(members[i]);
				
				si checkBox 0 == D hacer el appenchild
		}
			if(filtro[1].checked && filtro[1].value == members.party){
			newArray.push(members[i]);
				
				si checkBox 1 == R hacer el appenchild
		}
			if(filtro[2].checked && filtro[2].value == members.party){
			newArray.push(members[i]);
				
				si checkBox 2 == I hacer el appenchild

				
			console.log(otra);
		}
	}
}
	
	
	
	---------------------pseudocode----------------------
	
	for(recorrelista checkboxes){
		if (checkboxes is true ){
			for(recorre lista members){
				if(members.party == checkboxes.party){
					new array.push(member)
				}
				
				}
			}
		}
	
	
	
*/


//--------------hacer funcion return para midlename------------> 
//--------------hacer grids------------> 
