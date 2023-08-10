var volumeKubus1 = prompt("Volume Kubus 1");
var volumeKubus2 = prompt("Volume Kubus 2");

function jumlahVolumeKubus(a, b) {
	var v = a**3 + b**3;
	return v;
}

alert("Jumlah Volume Kubus : " + jumlahVolumeKubus(volumeKubus1, volumeKubus2));