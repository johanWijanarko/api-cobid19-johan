function getDatacoronaIndo(){
    fetch('https://indonesia-covid-19.mathdro.id/api') //ini adalh url untuk mengetahui jumlah covid
    .then(response => response.json()) //data diambil dan format dalam bentuk json
    .then(data => { //uraikan data
        // console.log(data); tes apakah data sudah ada
        let positif = data.jumlahKasus //buat variable penampung 
        let sembuh = data.sembuh //buat variable penampung 
        let meninggal = data.meninggal//buat variable penampung 

        document.getElementById("data-positif").innerHTML = positif // cetak ke dalam html dengan innerHTML
        document.getElementById("data-sembuh").innerHTML = sembuh // cetak ke dalam html dengan innerHTML
        document.getElementById("data-meninggal").innerHTML = meninggal // cetak ke dalam html dengan innerHTML
    })
    .catch(err => {
        console.log(err) //console jika ada error data
    });
}
function getdataProvinsi(){
    // buat variable dengan format table
    let dataProvinsi = `<tr><th width="200px">Provinsi</th><th width="100px">Positif</th><th width="100px">Sembuh</th><th width="100px">Meninggal</th></tr>`;

    fetch('https://indonesia-covid-19.mathdro.id/api/provinsi') //ambil api/data dari link disamping
    .then(response => response.json()) //cetak kedalam json
    .then(data => { //uraikan data
        // console.log(data);  cek data sudah ada ap belum
        data.data.forEach(function (item) { //loop dengan forEach
            dataProvinsi += '<tr>'
            dataProvinsi += '<td>' + item.provinsi + '</td>' //cetak kedalam table
            dataProvinsi += '<td>' + item.kasusPosi + '</td>' //cetak kedalam table
            dataProvinsi += '<td>' + item.kasusSemb + '</td>' //cetak kedalam table
            dataProvinsi += '<td>' + item.kasusMeni + '</td>' //cetak kedalam table
        })
        document.getElementById("table-provinsi").innerHTML = dataProvinsi //tampilkan di html

    })
    .catch(err => {
        console.log(err)
    });
    
}