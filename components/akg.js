function calorieCounter (weight, height, age, gender) {
	let calLimit = 1.55 * ((10 * weight) + (6.25 * height) - (5 * age))
	if (gender == "Male") {
		return calLimit + 5;
	}else{
		return calLimit - 161;
	}
}
carbsLimit = 55/400 * calLimit
proteinLimit = 15/400 * calLimit
fatLimit = 30/900 * calLimit
//variabel calLimit satuannya kalori, yang menunjukkan konsumsi kalori ideal per hari.
//variabel carbsLimit, proteinLimit, dan fatLimit satuannya gram, yang menunjukkan konsumsi ideal per hari.