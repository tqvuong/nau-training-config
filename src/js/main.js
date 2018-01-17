const ntc = window.ntc || {};
const widthViewport = window.innerWidth;

(function() {
	ntc.isDesktop = widthViewport >= 992;

	const destructuringObjectInfoPerson = {
		height: '170cm',
		firstName: 'Vuong',
		lastName: 'Tran',
		middleName: 'Quoc',
		age: 25,
		address: {
			street: '9E, No 4',
			ward: 'Truong Tho',
			district: 'Thu Duc',
		},
	};
	const { firstName, lastName, middleName, ...other } = destructuringObjectInfoPerson;
	console.log(firstName);
	console.log(lastName);
	console.log(middleName);
	console.log(other);
}());
