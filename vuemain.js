var app = new Vue({
	el: '#main',
	data: {
		isHidden: true,
		isHidden1: true
	},
	methods: {

		showHide: function () {

			if (this.isHidden) {
				this.isHidden = false;
			} else {
				this.isHidden = true;
			}
		},
		showHide1: function () {
			if (this.isHidden1) {
				this.isHidden1 = false;
			} else {
				this.isHidden1 = true;
			}

		}
	}
})
