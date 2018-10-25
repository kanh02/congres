Vue.component('accordion', {
  props: ['theme'],
  
  template: `<div class="accordion" v-bind:class="theme">
    <div class="header" v-on:click="toggle">
      <slot name="header">+More info</slot>
      <i class="fa fa-2x fa-angle-down header-icon" v-bind:class="{ rotate: show }"></i>
    </div>
    <transition name="accordion"
      v-on:before-enter="beforeEnter" v-on:enter="enter"
      v-on:before-leave="beforeLeave" v-on:leave="leave">
      <div class="body" v-show="show">
        <div class="body-inner">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>`,

  data() {
    return {
      show: false
    };
  },
  
  methods: {
    toggle: function() {
      this.show = !this.show;
    },
    beforeEnter: function(el) {
      el.style.height = '0';
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave: function(el) {
      el.style.height = '0';
    }
  }
});

var app = new Vue({
	el: '#app',
	data: {
		members: [],
		membersAll: [],
		myVar: '',
		url:''

	},
	created: function () {
		this.getUrl();
		this.getData();
	},
	methods: {
		getUrl: function(){
			var direccion="";
			if (document.getElementById("senate") != null) {
				direccion ="senate";
			} else if (document.getElementById("house") != null){
				direccion="house";
			}
			this.url = direccion;		
	},


		getData: function () {

				fetch("https://api.propublica.org/congress/v1/113/" + this.url +"/members.json", {
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
					app.membersAll = json.results[0].members
					app.loader();
					app.filterDrown();
					app.drownMenu();
				})

		},

		filterDrown: function () {
			var selectedValue = city.options[city.selectedIndex].value;
			var resulFil = []
			var option = app.states();

			for (t = 0; t < app.members.length; t++) {
				if (selectedValue == app.members[t].state) {
					resulFil.push(app.members[t]);
				}
			}
		},
		drownMenu: function () {
			var menu = document.getElementById("city");
			var option = app.states();
			for (var m = 0; m < option.length; m++) {
				option.value = option[m];
				var span = document.createElement("option");
				span.textContent = option[m];
				menu.appendChild(span);
			}
		},

		states: function () {
			var allStates = []
			for (s = 0; s < app.members.length; s++) {
				if (allStates.indexOf(app.members[s].state) === -1) {
					allStates.push(app.members[s].state);
				}
			}
			allStates.sort();
			return allStates;
		},

		filtrar: function () {

			var filtro = document.querySelectorAll("input[name=party]:checked");
			var filteredMembers = [];
			var selectedValue = city.options[city.selectedIndex].value;

			for (a = 0; a < filtro.length; a++) {

				for (i = 0; i < app.membersAll.length; i++) {
					var party = app.membersAll[i].party
					var states = app.membersAll[i].state
					if ((party == filtro[a].value) && (states == selectedValue)) {
						filteredMembers.push(app.membersAll[i]);
					} else if ((party == filtro[a].value) && (selectedValue == "All")) {
						filteredMembers.push(app.membersAll[i]);
					}
				}
			}
			app.members = filteredMembers;
		},

		loader: function () {
			document.getElementById("loader").style.display = "none";
		}
	}
})
