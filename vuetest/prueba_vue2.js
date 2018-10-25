
var app = new Vue({
  el: '#app',
  data: {
    members:[],
    membersAll:[],
	  
	  sortedMembers:'',
	  sortedMembersInverse:'',
	  numD:0,
	  numR:0,
	  numI:0,
	  demo_ptc:0,
	  repu_ptc:0,
	  least:[],
	  most:[],
	  leastengade:[],
	  mostengade:[],
	  Democrats:[],
 	  Republicans:[],
 	  Independents:[],
	 
	 
  }, created: function() {
	 this.getData();
  },
	methods:{


	getData: function(){
		fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
   		method: "GET",
   		headers: {
			'X-API-Key': 'pmqDNmvWUtCTN7wj4hFYHNeopxEGihOQpjAc4iff'
		}
		}).then(function (response) {
   		if (response.ok) {
		return response.json();
		}
   		throw new Error(response.statusText);
		}).then(function (json) {
		app.members = json.results[0].members
		console.log(app.members)
	
	 	sortedMembers = app.members;
		sortedMembersInverse = sortedMembers; 
			
		sortedMembers2 = app.members;
		sortedMembersInverse2 = sortedMembers2;	
			
		app.countMembers(app.members,app.Democrats,"D");
		app.countMembers(app.members,app.Republicans,"R");
		app.countMembers(app.members,app.Independents,"I");
		app.numD = app.Democrats.length
		app.numR = app.Republicans.length
		app.numI = app.Independents.length
			
		app.findAverageVotes(app.Democrats);
		app.findAverageVotes(app.Republicans);
		app.demo_ptc = app.findAverageVotes(app.Democrats)
		app.repu_ptc = app.findAverageVotes(app.Republicans)
			
		// la llamada de estas funciones son los array ordenados con todos los miembros	
		app.sortVotes();			
		app.sortVotesInv();

			
		app.sortbymissedVotes(app.sortedMembersInverse);
		app.sortbymissedVotesInv(app.sortedMembersInverse);
			
			
		app.leastOften(app.members,app.sortVotes(),app.least);
    	app.leastOften(app.members,app.sortVotesInv(),app.most);
			
			
		app.engangement(app.members,app.sortbymissedVotesInv(),app.leastengade);
    	app.engangement(app.members,app.sortbymissedVotes(),app.mostengade);
	
////////////////////////////////////////////////////////////////////////////////////////////////////////			
			
		}).then(function(){
			
		}).catch(function (error) {
			console.log("Request failed: " + error.message);
		})
},
	countMembers:function(members,Arr1,letter){
	
		var Democrats = []
 		var Republicans = []
 		var Independents = []
		
		for (var i = 0; i < members.length; i++) {
			if(members[i].party == letter){
			Arr1.push(members[i]);
		}
	}
},

//////////////////////////////////contar cuantos hay en cada partido////////////////////////////////////


		findAverageVotes:function (Array){
			var sum = 0;
			var avg = 0;
			for( j = 0; j < Array.length; j++){
    		sum = sum + Array[j].votes_with_party_pct;
}
			avg = sum / Array.length;
			var finalAverage = avg.toFixed(2);
			return(finalAverage);
},

/////////////////////////////////cantidad de votos por partido//////////////////////////////////////////
		
		sortVotes: function(){
			app.sortedMembers = app.members.slice(0);
		return app.sortedMembers.sort(function(a, b){return b.votes_with_party_pct - a.votes_with_party_pct});
			
},
		sortVotesInv: function(members){
			app.sortedMembersInverse = app.members.slice(0);
		return app.sortedMembersInverse.sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct});
},
				  
		sortbymissedVotes: function(sortedMembers2){
			app.sortedMembers2 = app.members.slice(0);
		return sortedMembers2.sort(function(a, b){return b.missed_votes_pct - a.missed_votes_pct});
},
		sortbymissedVotesInv: function(sortedMembersInverse){
				app.sortedMembersInverse2 = app.Members.slice(0);
			return sortedMembersInverse.sort(function(a, b){return a.missed_votes_pct - b.missed_votes_pct});
		//////////////////////////////////////////////////////////////////////////////////////////////////				
			
},
		 leastOften: function(members,ArrayVote,arraynew){
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
},
},
	 	engangement:function(members,ArrayVote,arraynew){
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

	

})

