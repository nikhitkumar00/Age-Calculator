let intervalId;
let dobDate;

function startAgeUpdate() {
	dobDate = new Date(document.getElementById("dob").value);
	const ageElement = document.getElementById("ageResult");

	intervalId = setInterval(function () {
		const today = new Date();
		const ageInMilliseconds = today - dobDate;
		const ageInSeconds = ageInMilliseconds / 1000;
		const decimalAge = ageInSeconds / (365.25 * 24 * 60 * 60);
		ageElement.textContent = decimalAge.toFixed(10);
	}, 10);
}
