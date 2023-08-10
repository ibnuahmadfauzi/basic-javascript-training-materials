// Menangkap pilihan player
var player = prompt("pilih : gajah / semut / orang");

// Menangkap pilihan computer
// Membangkitkan bilangan random
var bot = Math.random();
if ( bot >= 0 && bot <= 0.3 ) {
	bot = "gajah";
} else if ( bot > 0.3 && bot <= 0.6 ) {
	bot = "semut";
} else {
	bot = "orang";
}

// Menentukan rules
var hasil = "hasil";
if ( bot == player ) {
	hasil = "seri";
} else if ( (bot == "gajah" && player == "orang") || (bot == "orang" && player == "semut") || (bot == "semut" && player == "gajah") ) {
	hasil = "kalah";
} else if ( (bot == "gajah" && player == "semut") || (bot == "orang" && player == "gajah") || (bot == "semut" && player == "orang") ) {
	hasil = "menang";
} else {
	hasil = "tidak ada keputusan";
}

// Tampilkan hasil
console.log("Bot    : " + bot);
console.log("Player : " + player);
console.log("Hasil  : " + hasil);