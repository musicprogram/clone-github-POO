const UI = require('./ui');
const Github = require('./github');

const {client_id, client_secret} = require('./config.json');

const github = new Github(client_id,client_secret);

const ui = new UI();
// console.log(github.fetchUser('musicprogram'))

const userForm = document.querySelector("#userForm");

userForm.addEventListener('submit', (e)=>{
	
	const textSearch = document.querySelector('#textSearch').value;
	
	if(textSearch !== ''){
		github.fetchUser(textSearch)
			.then(data => {
				if(data.userData.message === 'Not Found'){
					ui.showMessage('User no Found', 'alert alert-danger col-md-12 mt-2')
				}else{
					//console.log(data)
					ui.showProfile(data.userData);
					ui.showRepositories(data.repositories);
				}

				//console.log(data)

			})
	}

	// console.log(textSearch)

	e.preventDefault();
})