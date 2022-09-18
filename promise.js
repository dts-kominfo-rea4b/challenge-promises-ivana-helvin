const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(ekspresi) => {
	//let marah = 0;
	//let gak = 0;
	let hitung = 0;

	try {
		const xxi = await promiseTheaterIXX();
		const cgv = await promiseTheaterVGC();

		const gabung = xxi.concat(cgv);

		const counts = {}
		for (eks of gabung){
			//return(eks['hasil']);
			if(eks['hasil']==ekspresi){
				hitung = hitung + 1;
			}
		}

		return hitung;
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
  promiseOutput,
};
