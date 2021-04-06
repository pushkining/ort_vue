
let data = "Pellentesque ex eros, +380665433321 porttitor eu bibendum ac, aliquam tincidunt urna. Mauris tristique lobortis orci, nec varius magna convallis interdum. Etiam 5363 4567 8765 3454 pharetra tempor ex, vel eleifend (067) 678 44 21 odio lacinia (0562) 35-30-38 eget. Morbi maximus libero vitae aliquet facilisis. Vivamus 5674-2346-8945-0012 vitae quam nisi. Quisque 12/45 quis venenatis 5192722517688913 lacus. Sed ac lorem (050)567-45-33 nec leo pharetra 4556796335044346 dapibus sed eu +38067432112 ex. In hac 4913-8185-2881-4543  habitasse platea dictumst. In dignissim 5461158320267908 suscipit rutrum. Ut 4916 8494 1754 2904 luctus  sapien in risus 56th street auctor, ac placerat 067-678-44-21  quam malesuada. Pellentesque (056) 7783322 bibendum justo  5363 4567 87653 3455 tempus purus convallis, a viverra nunc ullamcorper. Nulla 5213 9203 2475 5355 eget lectus gravida, porta eros vitae, semper erat +39-926-1234567.  Aenean volutpat vehicula dui ut pharetra.";
let reExp = /\d{4}-\d{4}-\d{4}-\d{4}|\d{4} \d{4} \d{4} \d{4}|\d{16}/g;
let result = data.match(reExp);

result = result.map((i) => i.split(' ').join('')).map((i) => i.split('-').join(''));

for (item of result) {
	let bEven = false;
	let sum = 0;
	for (let n = item.length - 1; n >= 0; n--) {
		let nDigit = parseInt(item.charAt(n), 10);
		if (bEven && (nDigit *= 2) > 9) {
			nDigit -= 9;
		}
		sum += nDigit;
		bEven = !bEven;
	}
	let correct = sum % 10 == 0;
	if (correct) console.log(item.match(/.{4}/g).join(' '));
}
