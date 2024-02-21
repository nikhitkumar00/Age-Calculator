const dob = document.getElementById("dob");
const result = document.getElementById("result");
const quotes = document.getElementById("quotes");
const imp = document.getElementById("imp");
const darkMode = document.getElementById("darkmode");
let ageUpdateInterval;

darkMode.addEventListener("click", () =>
	document.documentElement.classList.toggle("dark")
);

function startAgeUpdate() {
	const birthDate = new Date(dob.value);
	clearInterval(ageUpdateInterval);
	ageUpdateInterval = setInterval(() => {
		const currentDate = new Date();
		const elapsedTime = currentDate - birthDate;
		const years = Math.floor(elapsedTime / 1000 / 60 / 60 / 24 / 365.25);

		let remainingMilliseconds =
			elapsedTime - years * 1000 * 60 * 60 * 24 * 365.25;

		const timeUnits = ["months", "days", "hours", "minutes", "seconds"];
		const values = timeUnits.map((unit) => {
			const value = Math.floor(
				remainingMilliseconds / timeUnitInMilliseconds[unit]
			);
			remainingMilliseconds -= value * timeUnitInMilliseconds[unit];
			return value;
		});

		result.innerText = (
			elapsedTime /
			1000 /
			60 /
			60 /
			24 /
			365
		).toPrecision(11);
	}, 50);
}

const timeUnitInMilliseconds = {
	months: 1000 * 60 * 60 * 24 * 30.44,
	days: 1000 * 60 * 60 * 24,
	hours: 1000 * 60 * 60,
	minutes: 1000 * 60,
	seconds: 1000,
};

if ("serviceWorker" in navigator) {
	window.addEventListener("load", function () {
		navigator.serviceWorker.register("/service-worker.js").then(
			function (registration) {
				console.log(
					"ServiceWorker registration successful with scope: ",
					registration.scope
				);
			},
			function (err) {
				console.log("ServiceWorker registration failed: ", err);
			}
		);
	});
}

const quotesList = [
	"Time is the most valuable thing a man can spend. - Theophrastus",
	"Time flies over us, but leaves its shadow behind. - Nathaniel Hawthorne",
	"Lost time is never found again. - Benjamin Franklin",
	"Time waits for no one. - Folk Saying",
	"Time is what we want most, but what we use worst. - William Penn",
	"The two most powerful warriors are patience and time. - Leo Tolstoy",
	"Time is the wisest counselor of all. - Pericles",
	"Time heals what reason cannot. - Seneca",
	"Time is a created thing. To say 'I don't have time' is like saying, 'I don't want to.' - Lao Tzu",
	"Time you enjoy wasting is not wasted time. - Marthe Troly-Curtin",
	"Age is merely the number of years the world has been enjoying you. - Anonymous",
	"Age is an issue of mind over matter. If you don't mind, it doesn't matter. - Mark Twain",
	"Age is opportunity no less than youth itself. - Henry Wadsworth Longfellow",
	"Youth is the gift of nature, but age is a work of art. - Stanislaw Jerzy Lec",
	"Age is not a matter of how old you are, but how you are old. - Jules Renard",
	"With age comes wisdom, but sometimes age comes alone. - Oscar Wilde",
	"Do not go gentle into that good night. Rage, rage against the dying of the light. - Dylan Thomas",
	"Age is a case of mind over matter. If you don't mind, it doesn't matter. - Jack Benny",
	"Age is an opportunity to do good, to do better, and to reflect on your past. - Anonymous",
	"Growing old is mandatory, but growing up is optional. - Walt Disney",
	"Our lives are like candles in the wind, fragile, uncertain, and constantly changing. - Anonymous",
	"Time is the currency of life; spend it wisely. - Unknown",
	"In the end, it's not the years in your life that count; it's the life in your years. - Abraham Lincoln",
	"As we grow older, we don't lose friends. We just learn who the real ones are. - Unknown",
	"Age is not determined by years, but by the stories you tell. - Unknown",
	"Time is a great teacher, but unfortunately, it kills all its pupils. - Louis-Hector Berlioz",
	"The older I get, the more I realize how precious time is and how it should not be wasted on trivial matters. - Unknown",
	"Time is like a river; you cannot touch the same water twice because the flow that has passed will never pass again. - Unknown",
	"Age may wrinkle the face, but lack of enthusiasm wrinkles the soul. - Albert Schweitzer",
	"Time and tide wait for no man. - Geoffrey Chaucer",
	"It takes a long time to become young. - Pablo Picasso",
	"Age is a prison from which we cannot escape, but wisdom allows us to find joy within its walls. - Unknown",
	"The first forty years of life give us the text, the next thirty supply the commentary. - Arthur Schopenhauer",
	"Age is the acceptance of a term of years. But maturity is the glory of years. - Martha Graham",
	"Age is opportunity no less than youth itself, though in another dress, and as the evening twilight fades away, the sky is filled with stars, invisible by day. - Henry Wadsworth Longfellow",
	"Age is not how old you are, but how many years of fun you've had. - Matt Maldre",
	"Age does not protect you from love. But love, to some extent, protects you from age. - Jeanne Moreau",
	"The older I get, the greater power I seem to have to help the world; I am like a snowball - the further I am rolled, the more I gain. - Susan B. Anthony",
	"Age should not have its face lifted, but it should rather teach the world to admire wrinkles as the etchings of experience and the firm line of character. - Clarence Day",
	"One of the best things about growing older is realizing you can tell people whatever you want, and they'll believe you. - Unknown",
	"Time flies over us, but leaves its shadow behind. - Nathaniel Hawthorne",
	"Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin. - Mother Teresa",
	"The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
	"Time flies, whether you're having fun or not. - Mary Engelbreit",
	"Time is a created thing. To say 'I don't have time' is like saying, 'I don't want to.' - Lao Tzu",
	"Time is what we want most, but what we use worst. - William Penn",
	"Time you enjoy wasting is not wasted time. - Marthe Troly-Curtin",
	"Don't watch the clock; do what it does. Keep going. - Sam Levenson",
	"The future is something which everyone reaches at the rate of sixty minutes an hour, whatever they do, whoever they are. - C.S. Lewis",
	"Time is like money; the less we have of it to spare, the further we make it go. - Josh Billings",
	"Memories are timeless treasures of the heart. - Unknown",
	"Time will pass, and seasons will come and go. - Roy Bean",
	"Time is the soul of this world. - Pythagoras",
	"The past beats inside me like a second heart. - John Banville",
	"Time, which sees all things, has found you out. - Sophocles",
	"Time will teach you what you were ignorant of. - Horace",
	"Time is a created thing. To say 'I don't have time' is like saying, 'I don't want to.' - Lao Tzu",
	"Time is the most valuable thing a man can spend. - Theophrastus",
	"The two most powerful warriors are patience and time. - Leo Tolstoy",
	"Time flies over us, but leaves its shadow behind. - Nathaniel Hawthorne",
	"Life is a journey that must be traveled no matter how bad the roads and accommodations. - Oliver Goldsmith",
	"Life is really simple, but we insist on making it complicated. - Confucius",
	"Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
	"Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
	"Life is short, and it is up to you to make it sweet. - Sarah Louise Delany",
	"Life is what happens when you're busy making other plans. - John Lennon",
	"Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like. - Lao Tzu",
	"Life is like a coin. You can spend it any way you wish, but you only spend it once. - Lillian Dickson",
	"Life is what we make it, always has been, always will be. - Grandma Moses",
	"Life is really simple, but we insist on making it complicated. - Confucius",
];

new Typewriter(quotes, {
	strings: quotesList,
	autoStart: true,
	loop: true,
	cursor: "",
});
