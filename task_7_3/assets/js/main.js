
function getList(arr) {
	for (const itera of arr) {
		$('.item-range').append(`${itera.range}<br>`);
		$('.item-name').append(`${itera.name}<br>`);
		$('.item-country').append(`${itera.country}<br>`);
		$('.item-score').append(`${itera.score}<br>`);
	}
}
function clearList(){
	for (const itera of arr) {
		$('.item-range').empty();
		$('.item-name').empty();
		$('.item-country').empty();
		$('.item-score').empty();
	}
}
function findPlayer(arr) {  //Вот тут засада в функции, не могу понять
	let plVal =  $("#search-value").val();
	if(plVal == arr.name) {
		console.log("tratyattat")
	}else{
		console.log(plVal); //Срабатывает тут
	};
  }     
const settings = {
	"async": true,
	"url": "assets/api.json",
	"method": "GET",
};
let arr = new Array;
$.ajax(settings)
	.done((data) => {
		$('.item-name-header').append(`Биатлонисты<br>`).css("font-weight", "bold");
		$('.item-country-header').append(`Страна<br>`).css("font-weight", "bold");
		$('.item-score-header').append(`Рейтинг<br>`).css("font-weight", "bold");
		arr = data;
		getList(data);
	})
	.done((dataFoo) => {
		$("#sort-by-name").click(() => {
			dataFoo.sort((a, b) => a.name > b.name ? 1 : -1);
			clearList();
			getList(dataFoo);
		})
		$("#sort-by-country").click(() => {
			dataFoo.sort((a, b) => a.country > b.country ? 1 : -1);
			clearList();
			getList(dataFoo);
		})
		$("#sort-by-range").click(() => {
			dataFoo.sort((a, b) => a.range - b.range);
			clearList();
			getList(dataFoo);
		})
		$("#search-by-name").click(()=>{
			//let player =  $("#search-value").val();
			findPlayer(dataFoo);
		})
	}
	);

