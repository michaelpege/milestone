function calorieCounter (weight, height, age, gender) {
	let calLimit = 1.55 * ((10 * weight) + (6.25 * height) - (5 * age))
	if (gender === "Male") {
		return calLimit + 5;
	}else{
		return calLimit - 161;
	}
}

function formatDate(today) {
	const day = ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri", "Sat"];
	const month = [
	  "Jan",
	  "Feb",
	  "Mar",
	  "Apr",
	  "May",
	  "Jun",
	  "Jul",
	  "Aug",
	  "Sept",
	  "Oct",
	  "Nov",
	  "Dec",
	];

	//creating dateObj on 00:00:00
	let y = today.getFullYear();
	let m = today.getMonth();
	let d = today.getDate();
	let dateObj = new Date(y, m, d);

	//Creating date in format : Sun, 09 August 2020
	let dateVisual = `${day[today.getDay()]}, ${today.getDate()} ${
	  month[today.getMonth()]
	} ${today.getFullYear()}`;

	return { dateObj, dateVisual };
}

function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function getAKG (bio){
	console.log("ini bio", bio);
	let cal = calorieCounter(bio.weight, bio.height, calculateAge(bio.birthDateObj), bio.gender);
	console.log("ini cal", cal);
	let ret = {
		cal: cal,
		carbs: 55/400 * cal,
		protein: 15/400 * cal,
		fat: 30/900 * cal,
		fiber: 0,
	}
	console.log("ini akg");
	console.log(ret);
	//variabel calLimit satuannya kalori, yang menunjukkan konsumsi kalori ideal per hari.
	//variabel carbsLimit, proteinLimit, dan fatLimit satuannya gram, yang menunjukkan konsumsi ideal per hari.
	return ret;
}

export { getAKG }