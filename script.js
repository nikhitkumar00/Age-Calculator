const dob = document.getElementById("dob");
const result = document.getElementById("result");

function startAgeUpdate() {
	const date = new Date(dob.value);
	setInterval(() => {
		const current = new Date();
		const age = current - date;
		result.innerText = (age / 1000 / 60 / 60 / 24 / 365.25).toPrecision(10);
	}, 100);
}
