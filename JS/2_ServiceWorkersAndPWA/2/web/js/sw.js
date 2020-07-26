"use strict";

const version = 3
let isOnline = true
let isLoggedIn = false
let cacheName = `ramblings-${version}`
const urlsToCache = {
	loggedOut: [
		"/",
		"/about",
		"/contact",
		"/login",
		"/404",
		"/js/blog.js",
		"/js/home.js",
		"/js/login.js",
		"/js/add-post.js",
		"/css/styles.css",
		"/images/logo.gif",
		"/images/offline.png",
	]
}

self.addEventListener('install', onInstall)
self.addEventListener('activate', onActivate)
self.addEventListener('message', onMessage)

main().catch(console.error)
///
async function main() {
	console.log('my sw is starting...')
	await sendMessage({ requestStatusUpdate: true })
}
async function onInstall(event) {
	console.log('my sw installed...')
	self.skipWaiting()
}
function onActivate(event) {
	event.waitUntil(handleActivation())
}

async function handleActivation() {
	console.log(22, clients)
	await clients.claim()
	console.log('my sw activated...')
	
}

async function sendMessage(msg) {
	let allClients = await clients.matchAll({ includeUncontrolled: true })
	return Promise.all(
		allClients.map(client => {
			let chan = new MessageChannel()
			chan.port1.onmessage = onMessage
			client.postMessage(msg, [chan.port2])
		})
	)
}

function onMessage({ data }) {
	if (data.statusUpdate) {
		isOnline = data.statusUpdate.isOnline
		isLoggedIn = data.statusUpdate.isLoggedIn
		console.log('sw status update', `is-online:${isOnline}`, `is-logged-in:${isLoggedIn}`)
	}
}
