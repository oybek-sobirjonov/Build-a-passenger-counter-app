let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let refresh = document.getElementById("refresh");
let count = 0;

function increment () {
	count++;
	countEl.innerText = count;
	}

function save() {
	let countStr = ` ${count} - `;
	saveEl.innerText += countStr;
	countEl.innerText = 0;
	count = 0;
}

function clean() {
	countEl.innerText = 0;
	saveEl.innerText = "Previous entries:";
}