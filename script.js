navigator.geolocation.getCurrentPosition(function(position){
    coords = position.coords;
    console.log(coords);

    let latitude = coords.latitude; //широта
    let longitude = coords.longitude; //долгота

    console.log(latitude,longitude);

    let path = 'https://www.openstreetmap.org/#map=18/' +latitude + '/' +longitude;

    console.log(path);

    
    let link = document.querySelector('.link');
    link.innerHTML = `<a href="${path}" target="_blank">Посмотреть текущее местоположение</a>`;

    let map = new ol.Map({ //создаем карту из библиотеки OpenLayers
        target: 'map', //указываем id контейнера для карты
        layers: [ //создаем массив, в котором указываем источник данных для карты
        new ol.layer.Tile({
          source: new ol.source.OSM() // наша карта берет данные из OpenStreetMap
        })],
        view: new ol.View({ // настройка внешнего вида карты
        center: ol.proj.fromLonLat([longitude, latitude]), //широта и долгота
        zoom: 10 //увеличение
        })
      });
});
