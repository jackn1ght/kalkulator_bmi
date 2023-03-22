// src https://stackoverflow.com/questions/2304941/what-is-the-non-jquery-equivalent-of-document-ready
// https://bobbyhadz.com/blog/javascript-set-radio-to-checked-unchecked

const hasil = document.querySelector('#hasil');
const pernyataan_1 = document.querySelector('#pernyataan-1');
const pernyataan_2 = document.querySelector('#pernyataan-2');
const pernyataan_3 = document.querySelector('#pernyataan-3');
const laki_laki = document.querySelector('#laki-laki');
const perempuan = document.querySelector('#perempuan');
const form  = document.querySelector('.form');
var dark = document.querySelector('.dark');
var light = document.querySelector('.light');
var card = document.querySelector('.card');
var body = document.querySelector('body');
var input = document.querySelectorAll('.input');
var button = document.querySelectorAll('.button');
var header = document.querySelector('header');
var footer = document.querySelector('footer');
var reset = document.querySelector('#reset');
var kalkulator = document.querySelector('.kalkulator');
var hasil_div = document.querySelector('.hasil');
var hitung_lagi = document.querySelector('#hitung-lagi');

dark.style.display = 'none';
hasil_div.style.display = 'none';

dark.onclick = function(){
	dark.style.display = 'none';
	light.style.display = 'block';
	body.style.background = 'rgb(246, 241, 241)';
	header.style.background = 'rgb(25, 167, 206)';
	footer.style.background = 'rgb(20, 108, 148)';
	body.style.color = 'rgb(0, 0, 0)';
	for(var i = 0; i < input.length; i++){
		input[i].style.color = '#000';
	}
	for(var i = 0; i < button.length; i++){
		button[i].style.color = '#000';
	}
	card.style.border= '1px solid #000';
};
light.onclick = function(){
	light.style.display = 'none';
	dark.style.display = 'block';
	header.style.background = 'rgb(14, 131, 136)';
	footer.style.background = 'rgb(46, 79, 79)';
	body.style.background = 'rgb(44, 51, 51)';
	body.style.color = 'rgb(203, 228, 222)';
	for(var i = 0; i < input.length; i++){
		input[i].style.color = 'rgb(203, 228, 222)';
	}
	for(var i = 0; i < button.length; i++){
		button[i].style.color = 'rgb(203, 228, 222)';
	}
	card.style.border= '1px solid rgb(203, 228, 222)';
};
reset.onclick = function(){
	laki_laki.checked = false;
	perempuan.checked = false;
	form.elements['berat-badan'].value = '';
	form.elements['tinggi-badan'].value = '';
	form.elements['usia'].value = '';
}
hitung_lagi.onclick = function(){
	laki_laki.checked = false;
	perempuan.checked = false;
	form.elements['berat-badan'].value = '';
	form.elements['tinggi-badan'].value = '';
	form.elements['usia'].value = '';
	kalkulator.style.display = 'block';
	hasil_div.style.display = 'none';
    footer.style.position = 'relative';
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.elements['jenis-kelamin'].value || !form.elements['berat-badan'].value || !form.elements['tinggi-badan'].value || !form.elements['usia'].value) {
    	alert('Field input belum terisi!');
    } else {
	    var berat_badan = form.elements['berat-badan'].value;
	    var tinggi_badan = form.elements['tinggi-badan'].value;
	    var tinggi_badan_meter = tinggi_badan/100;
	    var jumlah = berat_badan / (tinggi_badan_meter * tinggi_badan_meter);
	    if (jumlah < 18.5) {
	    	pernyataan_1.textContent = 'Kekurangan berat badan';
	    	pernyataan_2.textContent = 'Sebagai seorang '+form.elements['jenis-kelamin'].value+' berusia '+form.elements['usia'].value+' tahun, anda memiliki berat badan yang kurang';
	    	pernyataan_3.textContent = 'Hasil BMI anda dibawah 18.5';
	    }else if(jumlah >= 18.5 && jumlah < 25){
	    	pernyataan_1.textContent = 'Normal (Ideal)';
	    	pernyataan_2.textContent = 'Sebagai seorang '+form.elements['jenis-kelamin'].value+' berusia '+form.elements['usia'].value+' tahun, anda memiliki berat badan yang ideal';
	    	pernyataan_3.textContent = 'Hasil BMI anda diantara 18.5 & 24';
	    }else if(jumlah >= 25 && jumlah < 30){
	    	pernyataan_1.textContent = 'Kelebihan berat badan';
	    	pernyataan_2.textContent = 'Sebagai seorang '+form.elements['jenis-kelamin'].value+' berusia '+form.elements['usia'].value+' tahun, anda memiliki berat badan berlebih';
	    	pernyataan_3.textContent = 'Hasil BMI anda diantara 25 & 29';
	    }else{
	    	pernyataan_1.textContent = 'Kegemukan (Obesitas)';
	    	pernyataan_2.textContent = 'Sebagai seorang '+form.elements['jenis-kelamin'].value+' berusia '+form.elements['usia'].value+' tahun, anda menderita obesitas';
	    	pernyataan_3.textContent = 'Hasil BMI anda diatas 29';
	    }
	    hasil.textContent = jumlah.toFixed(1);
	    footer.style.position = 'absolute';
	    footer.style.bottom = '0';
	    kalkulator.style.display = 'none';
	    hasil_div.style.display = 'block';
    }
});

// src https://www.w3schools.com/jsref/met_document_queryselector.asp
// src https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_addeventlistener

