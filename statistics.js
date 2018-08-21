var members = data.results[0].members

	
	var Democrats = []
 	var Republicans = []
 	var Independents = []
	
	

function Table(members) {
     
	var table = document.getElementById("senate-glance");
	var tableBody= document.createElement("tBody");
	tableBody.setAttribute("id","tBody")
	
	
	for (var t = 0; t < members.length; t++) {
		var row = document.createElement("tr");
		
		
		var col1 = document.createElement("td");
		col1.appendChild(col0);
		
		
		var col2= document.createElement("td");
		col2.textContent = Democrats
			
		
		var col3 = document.createElement("td");
		col3.textContent = Republicans
			
		
		var col4  = document.createElement("td");
		col4.textContent = Independents
		
	
		row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
		tableBody.appendChild(row);
		}
	
	table.appendChild(tableBody);

}

Table(members);



	
function countMembers(Arr1,letter){

	for (var i = 0; i < members.length; i++) {
		
		if(members[i].party == letter){
			Arr1.push(members[i]);
		}
	}
}
var numD =countMembers(Democrats,"D");
var numR =countMembers(Republicans,"R");
var numI =countMembers(Independents,"I");



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
	
	
	
	
	
var sortedMembers = members;	
function sortVotes(){
	
sortedMembers.sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct});
console.log(sortedMembers)
}
sortVotes();
	
// votos ordenadamente positivo//






var sortedMembersInverse = members;
console.log(sortedMembersInverse);

function sortVotesInv(){
	
sortedMembersInverse.sort(function(a, b){return b.votes_with_party_pct - a.votes_with_party_pct});

}
//sortVotesInv();
console.log(sortedMembersInverse)
// votos ordenadamente negativo//




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

var least = leastOften(sortedMembers,least);
var most = leastOften(sortedMembersInverse,most);




 
	

	





var statistics = {
	
	"number_of_Democrats":numD,
	"number_of_Republicans":numR,
	"number_of_Independents":numI,
	"average_Vote_With_Party_Demo":demo_ptc,
	"average_Vote_With_Party_Repu":repu_ptc,
	"members_Who_Least_Often_Vote_with_Their_Party":least,
	"members_Who_Most_Often_Vote_with_Their_Party":most,
	"missed_Votes":0,
	"members_Missed_Votes": 0,
	"members_Do_Not_Vote_With_Their_Party":0,
	"members_Do_Vote_With_Their_Party": 0.
	
}

