
const settings = {
	"async": true,
	"url": "assets/api.json",
	"method": "GET",
};

$.ajax(settings).done((data) => {
	for (const itera of data) {
		// console.log(itera.name,itera.country)
		$('.item-name').append(` ${itera.name}<br>`);
		$('.item-country').append(` ${itera.country}<br>`);
		$('.item-score').append(` ${itera.score}<br>`);
	}
});
