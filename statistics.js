
var data;
var members;
var sortedMembers;
var sortedMembersInverse;
var numD;
var numR;
var numI;
var demo_ptc;
var repu_ptc;
var least=[];
var most=[];
var leastengade;
var mostengade;

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
	
	
	if((window.location.pathname == "/senate_house-attendance-starter-page.html")||(window.location.pathname =="/senate_house-party-loyalty-starter-page.html")){
		

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
	
	 members = data.results[0].members
	
	 sortedMembers = members;
	 sortedMembersInverse = sortedMembers;   
	
	countMembers(members,Democrats,"D");
	countMembers(members,Republicans,"R");
	countMembers(members,Independents,"I");
	numD = Democrats.length
	numR = Republicans.length
	numI = Independents.length
	
	findAverageVotes(Democrats);
	findAverageVotes(Republicans);
	demo_ptc = findAverageVotes(Democrats)
	repu_ptc = findAverageVotes(Republicans)
	
	sortVotes(members);
	console.log(sortVotes)
	
	sortVotesInv(members);
	console.log(sortVotesInv)
	
	sortbymissedVotes(sortedMembersInverse);
	console.log(sortbymissedVotes)
	
	sortbymissedVotesInv(sortedMembersInverse);
	console.log(sortbymissedVotesInv(sortedMembersInverse))
	
	leastOften(members,sortVotes(sortedMembers),least);
    leastOften(members,sortVotesInv(sortedMembers),most);
	console.log(least)
	console.log(most)
	
		
    engangement(members,sortbymissedVotesInv(sortedMembersInverse),leastengade);
    engangement(members,sortbymissedVotes(sortedMembersInverse),mostengade);
//	leastengade = engangement(members,sortbymissedVotesInv(sortedMembersInverse),leastengade)
//	mostengade = engangement(members,sortbymissedVotes(sortedMembersInverse),mostengade)
	
statistics = {
	
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
	
}).then(function(){
	console.log(statistics)
	Table();
	callFuntions(least,most,leastengade,mostengade);
	
  
}).catch(function (error) {
   // called when an error occurs anywhere in the chain
   console.log("Request failed: " + error.message);
});



	}else if((window.location.pathname == "/house_house-attendance.html")||(window.location.pathname =="/house_house-loyalty.html")) {



var data;

fetch("https://api.propublica.org/congress/v1/113/house/members.json", {
 
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
	
	members = data.results[0].members
	
	sortedMembers = members;
	sortedMembersInverse = sortedMembers;   
	
	countMembers(members,Democrats,"D");
	countMembers(members,Republicans,"R");
	countMembers(members,Independents,"I");
	numD = Democrats.length
	numR = Republicans.length
	numI = Independents.length
	
	findAverageVotes(Democrats);
	findAverageVotes(Republicans);
	demo_ptc = findAverageVotes(Democrats)
	repu_ptc = findAverageVotes(Republicans)
	
	sortVotes(members);
	console.log(sortVotes)
	
	sortVotesInv(members);
	console.log(sortVotesInv)
	
	sortbymissedVotes(sortedMembersInverse);
	console.log(sortbymissedVotes)
	
	sortbymissedVotesInv(sortedMembersInverse);
	console.log(sortbymissedVotesInv(sortedMembersInverse))
	
	leastOften(members,sortVotes(sortedMembers),least);
    leastOften(members,sortVotesInv(sortedMembers),most);
	console.log(least)
	console.log(most)
	
		
    engangement(members,sortbymissedVotesInv(sortedMembersInverse),leastengade);
    engangement(members,sortbymissedVotes(sortedMembersInverse),mostengade);
//	leastengade = engangement(members,sortbymissedVotesInv(sortedMembersInverse),leastengade)
//	mostengade = engangement(members,sortbymissedVotes(sortedMembersInverse),mostengade)
	
statistics = {
	
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
	
}).then(function(){
	console.log(statistics)
	Table();
	callFuntions(least,most,leastengade,mostengade);
	
  
}).catch(function (error) {
   // called when an error occurs anywhere in the chain
   console.log("Request failed: " + error.message);
});





}








//////////////////////////////////////////////////////////call ajax///////////////////////////////////////////////////////////////
	
	var Democrats = []
 	var Republicans = []
 	var Independents = []
	
function countMembers(members,Arr1,letter){

	for (var i = 0; i < members.length; i++) {
		if(members[i].party == letter){
			Arr1.push(members[i]);
		}
	}
}
//countMembers(Democrats,"D");
//countMembers(Republicans,"R");
//countMembers(Independents,"I");

//var numD = Democrats.length
//var numR = Republicans.length
//var numI = Independents.length

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
/*	var demo_ptc = findAverageVotes(Democrats)
	var repu_ptc = findAverageVotes(Republicans)
	*/
//cantidad de votos por partido//
	
	
	
	


function sortVotes(members){
//var sortedMembers = members;	
console.log(sortedMembers)
return sortedMembers.sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct});
}

// votos ordenadamente positivo//



function sortVotesInv(Members){
//var sortedMembersInverse = sortedMembers;
	console.log(sortedMembers)
return sortedMembersInverse.sort(function(a, b){return b.votes_with_party_pct - a.votes_with_party_pct});
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// votos ordenadamente negativo//

function sortbymissedVotes(sortedMembersInverse){
return sortedMembers.sort(function(a, b){return a.missed_votes_pct - b.missed_votes_pct});
}


// votos ordenadamente positivo//

function sortbymissedVotesInv(sortedMembersInverse){
var sortedMembersInverse = sortedMembers;
return sortedMembersInverse.sort(function(a, b){return b.missed_votes_pct - a.missed_votes_pct});
}







function leastOften(members,ArrayVote,arraynew){
	var total = (members.length * 10)/100;
	total= total.toFixed(0);
	
	for(var x = 0; x < total; x++){
		arraynew.push(ArrayVote[x])
	}
	
	for(var z =0; z< ArrayVote.length; z++){
		if(arraynew[arraynew.length-1].votes_with_party_pct === ArrayVote[z].votes_with_party_pct){
		if(arraynew.indexOf(ArrayVote[z]) ==  -1){
		arraynew.push(ArrayVote[z])
		}
	}
	}
}

	var leastengade = []
	var mostengade = []

	
function engangement(members,ArrayVote,arraynew){
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
//engangement(sortbymissedVotesInv(),leastengade);
//engangement(sortbymissedVotes(),mostengade);

console.log(leastengade)

 
	
/////////////////////////////////////////////////Tables 
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
	
	if(document.getElementById("attendance") != null ){
		Table2(leastengade,"senate-glance1");
		Table2(mostengade,"senate-glance2");
//		Table2(mostengade,"attendance-house");
//		Table2(mostengade,"attendance-house2");

	}else if(document.getElementById("loyalty") != null){
		Table3(least,"senate-loyal");
		Table3(most,"senate-loyal2");
//		Table3(most,"house-loyal");
//		Table3(most,"house-loyal2");

		
	}
	   
}
//callFuntionsSenate(){
//if(document.getElementById("attendance") != null ){
//		Table2(leastengade,"senate-glance1");
//		Table2(mostengade,"senate-glance2");
//		}else if(document.getElementById("loyalty") != null){
//		Table3(least,"senate-loyal");
//		Table3(most,"senate-loyal2");
//}
//callFuntionsHouse(){
//if(document.getElementById("attendance") != null ){
//		Table2(leastengade,"attendance-house");
//		Table2(mostengade,"attendance-house2");
//		}else if(document.getElementById("loyalty") != null){
//		Table3(least,"house-loyal");
//		Table3(most,"house-loyal2");
//}

//
//function callFetch{
//if (json == data){
//	callFuntionsSenate();
//}
//else if(json == data1 ){
//	callFuntionsHouse();
//}
//}

//var myVar;
//
//function myFunction() {
//    myVar = setTimeout(showPage, 2000);
//}
//
//function showPage() {
//  document.getElementById("loader").style.display = "none";
//  document.getElementById("myDiv").style.display = "block";
//}
//



//
//<!--    <body onload="myfunction()" style="margin:0;">-->
//<!--
//		<div id="loader">
//			<div style="display:none;" id="myDiv" class="animate-bottom">
//				<h2>holi!</h2>
//				<p>please wait angry man.....</p>
//-->
//			
