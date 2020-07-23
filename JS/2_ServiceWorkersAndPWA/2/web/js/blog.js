(function Blog(){
	"use strict";

	let offlineIcon;
	let isOnline = ("onLine" in navigator) ? navigator.onLine: true
	let isLoggedIn = /isLoggedIn=1/.test(document.cookie.toString() || "");
	let sw
	document.addEventListener("DOMContentLoaded",ready,false);
	initServiceWorker()
		.catch(console.error)

	// **********************************

	function ready() {
		offlineIcon = document.getElementById("connectivity-status");
		
		if(!isOnline) {
			offlineIcon.classList.remove('hidden')
		}
		window.addEventListener('isOnline', function online() {
			offlineIcon.classList.add('hidden')
			isOnline = true
		})
		window.addEventListener('offline', function offline() {
			offlineIcon.classList.remove('hidden')
			isOnline = false
		})
	}

})();
