export class MainController {
	constructor ($http) {
		'ngInject';
		this.$http = $http;
		this.getMessages();
	}

	getMessages(){
		var vm = this;
		this.$http.get('http://stark-network-kaustav-m.c9users.io/api/users').then(function(result){
			vm.users = result.data.users;
		});
	}
	postMessage(){
		this.$http.post('http://localhost:5000/api/message',{msg : this.message});
	}
}
