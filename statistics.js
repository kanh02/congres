var members = data.results[0].members
var members2 = data.results[0].members
	
	var Democrats = []
 	var Republicans = []
 	var Independents = []
	
function countMembers(Arr1,letter){

	for (var i = 0; i < members.length; i++) {
		
		if(members[i].party == letter){
			Arr1.push(members[i]);
		}
	}
}
countMembers(Democrats,"D");
countMembers(Republicans,"R");
countMembers(Independents,"I");

var numD = Democrats.length
var numR = Republicans.length
var numI = Independents.length

//contar cuantos hay en cada partido






function findAverageVotes (Array){
	
	var sum = 0;
	var avg = 0;
	for( j = 0; j < Array.length; j++){
    	sum = sum + Array[j].votes_with_party_pct;
}
		avg = sum / Array.length;
		var finalAverage = avg.toFixed(2);
		return(finalAverage);
}
	var demo_ptc = findAverageVotes(Democrats)
	var repu_ptc = findAverageVotes(Republicans)
	
//cantidad de votos por partido//
	
	
	
	
//	
//	
var sortedMembers = members;	
function sortVotes(){
return sortedMembers.sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct});
}

// votos ordenadamente positivo//



var sortedMembersInverse = sortedMembers;
function sortVotesInv(){
return sortedMembersInverse.sort(function(a, b){return b.votes_with_party_pct - a.votes_with_party_pct});
}
//sortVotesInv();

// votos ordenadamente negativo//

function sortbymissedVotes(){
return sortedMembers.sort(function(a, b){return a.missed_votes_pct - b.missed_votes_pct});
}

// votos ordenadamente positivo//



var sortedMembersInverse = sortedMembers;
function sortbymissedVotesInv(){
return sortedMembersInverse.sort(function(a, b){return b.missed_votes_pct - a.missed_votes_pct});
}





	var least = []
	var most = []

function leastOften(ArrayVote,arraynew){
	var total = (members.length * 10)/100;
	total= total.toFixed(0);
	console.log(total);
	
	for(var x = 0; x < total; x++){
		arraynew.push(ArrayVote[x])
	}
	console.log(arraynew);
	
	for(var z =0; z< ArrayVote.length; z++){
		if(arraynew[arraynew.length-1].votes_with_party_pct === ArrayVote[z].votes_with_party_pct){
			
	if(arraynew.indexOf(ArrayVote[z]) ==  -1){
		arraynew.push(ArrayVote[z])
		}
	}
	}
		console.log(arraynew);		
}
leastOften(sortVotes(),least);
leastOften(sortVotesInv(),most);



	var leastengade = []
	var mostengade = []
	
function engangement(ArrayVote,arraynew){
	var total = (members.length * 10)/100;
	total= total.toFixed(0);
	console.log(total);
	
	for(var x = 0; x < total; x++){
		arraynew.push(ArrayVote[x])
	}
	console.log(arraynew);
	
	for(var z =0; z< ArrayVote.length; z++){
		if(arraynew[arraynew.length-1].missed_votes_pct === ArrayVote[z].missed_votes_pct){
			
	if(arraynew.indexOf(ArrayVote[z]) ==  -1){
		arraynew.push(ArrayVote[z])
		}
	}
	}
		console.log(arraynew);		
}
engangement(sortbymissedVotesInv(),leastengade);
engangement(sortbymissedVotes(),mostengade);

console.log(leastengade)

 
	

	var statistics = {
	
	"number_of_Democrats":numD,
	"number_of_Republicans":numR,
	"number_of_Independents":numI,
	"average_Vote_With_Party_Demo":demo_ptc,
	"average_Vote_With_Party_Repu":repu_ptc,
	"members_Who_Least_Often_Vote_with_Their_Party":least,
	"members_Who_Most_Often_Vote_with_Their_Party":most,
	"members_Who_Least_Missed_Vote_with_Their_Party":leastengade,
	"members_Who_Most_Missed_Vote_with_Their_Party":mostengade,
	
	
}

/////////////////////////////////////////////////Tables Functions///////////////////////////////////////////////////////////////////////////
function Table() {
     
	var table = document.getElementById("senate-glance");
	var tableBody= document.createElement("tBody");
	tableBody.setAttribute("id","tBody")
	
	
	for (var t = 0; t < 4; t++) {
		var row = document.createElement("tr");
		var col1= document.createElement("td");
		var col2 = document.createElement("td");
		var col3  = document.createElement("td");
		var col4 = document.createElement("td");
		
		if( t == 0){
		col1.textContent = "Democrat";
		col2.textContent = statistics.number_of_Democrats
		col3.textContent = statistics.average_Vote_With_Party_Demo
		}
		if ( t == 1){
		col1.textContent = "Republican";
		col2.textContent = statistics.number_of_Republicans
		col3.textContent = statistics.average_Vote_With_Party_Repu
		}
		if ( t == 2){
		col1.textContent = "Independents";
		col2.textContent = statistics.number_of_Independents
		col3.textContent = 0;
		}
		if ( t == 3){
		col1.textContent = "Total";
		col2.textContent = statistics.number_of_Republicans + statistics.number_of_Democrats + statistics.number_of_Independents
		
		}
	
		row.appendChild(col1);
        row.appendChild(col2);
      	row.appendChild(col3);
        row.appendChild(col4);
		
		tableBody.appendChild(row);
		}
	table.appendChild(tableBody);
}
Table();


function Table2(array,id){

	var table = document.getElementById(id);
	var tableBody= document.createElement("tBody");
	tableBody.setAttribute("id","tBody")
	
	for (var r = 0; r < array.length; r++) {
		var row = document.createElement("tr");
		
		
		var nom =" ";
		var name = array[r].first_name + nom + array[r].last_name;
		
		var link = document.createElement("a");
		link.setAttribute("href",members[r].url);
		
		var col = document.createElement("td");
		
		link.textContent = name;
		col.appendChild(link);
		
		var col1= document.createElement("td");
		var Votes = array[r].missed_votes
		col1.textContent = Votes
		
		
		var col2= document.createElement("td");
		var Votes = array[r].missed_votes_pct
		col2.textContent = Votes
		
		
		row.appendChild(col);
		row.appendChild(col1);
		row.appendChild(col2);
		tableBody.appendChild(row);
		}
  
	table.appendChild(tableBody);
		}


	



function Table3(array,id){

	var table = document.getElementById(id);
	var tableBody= document.createElement("tBody");
	tableBody.setAttribute("id","tBody")
	
	for (var q = 0; q < array.length; q++) {
		var row = document.createElement("tr");
		
		var nom =" ";
		var name = array[q].first_name + nom + array[q].last_name;
		
		var link = document.createElement("a");
		link.setAttribute("href",members[q].url);
		
		var col = document.createElement("td");
		
		link.textContent = name;
		col.appendChild(link);
		
		var col1= document.createElement("td");
		var Votes = array[q].total_votes
		col1.textContent = Votes
		
		
		var col2= document.createElement("td");
		var Votes = array[q].votes_with_party_pct
		col2.textContent = Votes
		
		
		row.appendChild(col);
		row.appendChild(col1);
		row.appendChild(col2);
		tableBody.appendChild(row);
		}
  
	table.appendChild(tableBody);
		}

function callFuntions(){
	
	if(document.getElementById("attendance") != null  ){
		Table2(leastengade,"senate-glance1");
		Table2(mostengade,"senate-glance2");
	}else if(document.getElementById("loyalty") != null){
		Table3(least,"senate-loyal");
		Table3(most,"senate-loyal2");

		
	}
	   
}
callFuntions()




