async function updateWallet() {
	amount_element = document.getElementsByClassName('amount')[0];
	
	amount_element.innerHTML = 'Loading...';
	
	// get me
	response = await fetch("http://127.0.0.1:5000/api/v1/user/getMe", {
		headers: {
			'Authorization': 'Basic dGVzdG5hbWU1OjEyMzQ1Njc4'
		}
	});
	
	user = await response.json();
	
	wallet_response = await fetch("http://127.0.0.1:5000/api/v1/wallet/" + user.walletId, 
	{
		headers: {
			'Authorization': 'Basic dGVzdG5hbWU1OjEyMzQ1Njc4'
	}});
	
	wallet = await wallet_response.json();
	
	amount_element.innerHTML = wallet.amount;
}