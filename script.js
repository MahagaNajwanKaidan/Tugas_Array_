var mobil = [
    {
        merek : 'toyota',
        nama : 'supra',
        pintu : 2,
    },
    {
        merek : 'bmw',
        nama : 'bmw i8',
        pintu :  2,
    },
    {
        merek : 'mitsubushi',
        nama : 'expander',
        pintu : 4,
    },
    {
        merek : 'mitsubishi',
        nama : 'pajero',
        pintu : 4,
    },
    {
        merek : 'ferari',
        nama : 'ferari f45',
        pintu : 2,
    },
]
let b = parseInt(prompt("tentukan jumlah pintu (2 atau 4): "));
const mobilPintu = mobil.filter((mobil) => mobil.pintu === b);
console.log(mobilPintu);
document.write(mobilPintu);