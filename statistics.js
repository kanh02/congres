var members = data.results[0].members


	

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
	
	
	
	
	

	
function leastOften(){
	
	var total = (members.length * 10)/100;
	total= total.toFixed(0);
	console.log(total);
	
for(var x=0; x<)
	
}
	
	
	





var statistics = {
	
	"number_of_Democrats":0,
	"number_of_Republicans":0,
	"number_of_Independents":0,
	"average_Vote_With_Party_Demo":demo_ptc,
	"average_Vote_With_Party_Repu":repu_ptc,
	"members_Who_Least_Often_Vote_with_Their_Party":0,
	"missed_Votes":0,
	"members_Missed_Votes": 0,
	"members_Do_Not_Vote_With_Their_Party":0,
	"members_Do_Vote_With_Their_Party": 0.
	
}

