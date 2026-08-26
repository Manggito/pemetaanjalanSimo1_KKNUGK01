var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GENJAHAN_SHP_1 = new ol.format.GeoJSON();
var features_GENJAHAN_SHP_1 = format_GENJAHAN_SHP_1.readFeatures(json_GENJAHAN_SHP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GENJAHAN_SHP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GENJAHAN_SHP_1.addFeatures(features_GENJAHAN_SHP_1);
var lyr_GENJAHAN_SHP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GENJAHAN_SHP_1, 
                style: style_GENJAHAN_SHP_1,
                popuplayertitle: 'GENJAHAN_SHP',
                interactive: true,
                title: '<img src="styles/legend/GENJAHAN_SHP_1.png" /> GENJAHAN_SHP'
            });
var format_BATASDUSUN_2 = new ol.format.GeoJSON();
var features_BATASDUSUN_2 = format_BATASDUSUN_2.readFeatures(json_BATASDUSUN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDUSUN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDUSUN_2.addFeatures(features_BATASDUSUN_2);
var lyr_BATASDUSUN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDUSUN_2, 
                style: style_BATASDUSUN_2,
                popuplayertitle: 'BATAS DUSUN',
                interactive: true,
                title: '<img src="styles/legend/BATASDUSUN_2.png" /> BATAS DUSUN'
            });
var format_BATAS_RT_3 = new ol.format.GeoJSON();
var features_BATAS_RT_3 = format_BATAS_RT_3.readFeatures(json_BATAS_RT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_RT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_RT_3.addFeatures(features_BATAS_RT_3);
var lyr_BATAS_RT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATAS_RT_3, 
                style: style_BATAS_RT_3,
                popuplayertitle: 'BATAS_RT',
                interactive: true,
    title: 'BATAS_RT<br />\
    <img src="styles/legend/BATAS_RT_3_0.png" /> 01<br />\
    <img src="styles/legend/BATAS_RT_3_1.png" /> 02<br />\
    <img src="styles/legend/BATAS_RT_3_2.png" /> 03<br />\
    <img src="styles/legend/BATAS_RT_3_3.png" /> 04<br />' });
var format_JALANSIMO1_4 = new ol.format.GeoJSON();
var features_JALANSIMO1_4 = format_JALANSIMO1_4.readFeatures(json_JALANSIMO1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANSIMO1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANSIMO1_4.addFeatures(features_JALANSIMO1_4);
var lyr_JALANSIMO1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALANSIMO1_4, 
                style: style_JALANSIMO1_4,
                popuplayertitle: 'JALAN SIMO 1',
                interactive: true,
                title: '<img src="styles/legend/JALANSIMO1_4.png" /> JALAN SIMO 1'
            });
var format_SALURANAIR_5 = new ol.format.GeoJSON();
var features_SALURANAIR_5 = format_SALURANAIR_5.readFeatures(json_SALURANAIR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALURANAIR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALURANAIR_5.addFeatures(features_SALURANAIR_5);
var lyr_SALURANAIR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SALURANAIR_5, 
                style: style_SALURANAIR_5,
                popuplayertitle: 'SALURAN AIR',
                interactive: true,
                title: '<img src="styles/legend/SALURANAIR_5.png" /> SALURAN AIR'
            });
var format_FASILITASUMUM_6 = new ol.format.GeoJSON();
var features_FASILITASUMUM_6 = format_FASILITASUMUM_6.readFeatures(json_FASILITASUMUM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FASILITASUMUM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FASILITASUMUM_6.addFeatures(features_FASILITASUMUM_6);
var lyr_FASILITASUMUM_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FASILITASUMUM_6, 
                style: style_FASILITASUMUM_6,
                popuplayertitle: 'FASILITAS UMUM',
                interactive: true,
                title: '<img src="styles/legend/FASILITASUMUM_6.png" /> FASILITAS UMUM'
            });
var format_INFORMASI_7 = new ol.format.GeoJSON();
var features_INFORMASI_7 = format_INFORMASI_7.readFeatures(json_INFORMASI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFORMASI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFORMASI_7.addFeatures(features_INFORMASI_7);
var lyr_INFORMASI_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFORMASI_7, 
                style: style_INFORMASI_7,
                popuplayertitle: 'INFORMASI',
                interactive: true,
                title: '<img src="styles/legend/INFORMASI_7.png" /> INFORMASI'
            });
var format_TITIKSTAPER50M_8 = new ol.format.GeoJSON();
var features_TITIKSTAPER50M_8 = format_TITIKSTAPER50M_8.readFeatures(json_TITIKSTAPER50M_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKSTAPER50M_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKSTAPER50M_8.addFeatures(features_TITIKSTAPER50M_8);
var lyr_TITIKSTAPER50M_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKSTAPER50M_8, 
                style: style_TITIKSTAPER50M_8,
                popuplayertitle: 'TITIK STA PER 50 M',
                interactive: true,
                title: '<img src="styles/legend/TITIKSTAPER50M_8.png" /> TITIK STA PER 50 M'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GENJAHAN_SHP_1.setVisible(true);lyr_BATASDUSUN_2.setVisible(true);lyr_BATAS_RT_3.setVisible(true);lyr_JALANSIMO1_4.setVisible(true);lyr_SALURANAIR_5.setVisible(true);lyr_FASILITASUMUM_6.setVisible(true);lyr_INFORMASI_7.setVisible(true);lyr_TITIKSTAPER50M_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GENJAHAN_SHP_1,lyr_BATASDUSUN_2,lyr_BATAS_RT_3,lyr_JALANSIMO1_4,lyr_SALURANAIR_5,lyr_FASILITASUMUM_6,lyr_INFORMASI_7,lyr_TITIKSTAPER50M_8];
lyr_GENJAHAN_SHP_1.set('fieldAliases', {'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'kdbbps': 'kdbbps', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdpbps': 'kdpbps', 'kdpkab': 'kdpkab', 'kdppum': 'kdppum', 'luaswh': 'luaswh', 'tipadm': 'tipadm', 'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'wiadkc': 'wiadkc', 'wiadkk': 'wiadkk', 'wiadpr': 'wiadpr', 'wiadkd': 'wiadkd', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_BATASDUSUN_2.set('fieldAliases', {'Id': 'Id', 'DUSUN': 'DUSUN', });
lyr_BATAS_RT_3.set('fieldAliases', {'Id': 'Id', 'RT': 'RT', 'RW': 'RW', });
lyr_JALANSIMO1_4.set('fieldAliases', {'Id': 'Id', 'FUNGSI_JLN': 'FUNGSI_JLN', 'PERKERASAN': 'PERKERASAN', 'LEBAR_M': 'LEBAR_M', 'KOND_JLN': 'KOND_JLN', 'AKSES': 'AKSES', 'PENERANGAN': 'PENERANGAN', 'PANJANG': 'PANJANG', 'VOLUME M3': 'VOLUME M3', 'TEBAL CM': 'TEBAL CM', });
lyr_SALURANAIR_5.set('fieldAliases', {'Id': 'Id', });
lyr_FASILITASUMUM_6.set('fieldAliases', {'Id': 'Id', 'NAMA': 'NAMA', 'X': 'X', 'Y': 'Y', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', });
lyr_INFORMASI_7.set('fieldAliases', {'Id': 'Id', 'KETERANGAN': 'KETERANGAN', 'NAMA': 'NAMA', 'NO_TLF': 'NO_TLF', 'X': 'X', 'Y': 'Y', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', });
lyr_TITIKSTAPER50M_8.set('fieldAliases', {'PANJANG': 'PANJANG', 'NAMA': 'NAMA', 'X': 'X', 'Y': 'Y', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', });
lyr_GENJAHAN_SHP_1.set('fieldImages', {'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'kdbbps': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdebps': 'TextEdit', 'kdepum': 'TextEdit', 'kdpbps': 'TextEdit', 'kdpkab': 'TextEdit', 'kdppum': 'TextEdit', 'luaswh': 'TextEdit', 'tipadm': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkd': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadkc': 'TextEdit', 'wiadkk': 'TextEdit', 'wiadpr': 'TextEdit', 'wiadkd': 'Range', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_BATASDUSUN_2.set('fieldImages', {'Id': 'Range', 'DUSUN': 'TextEdit', });
lyr_BATAS_RT_3.set('fieldImages', {'Id': 'Range', 'RT': 'TextEdit', 'RW': 'TextEdit', });
lyr_JALANSIMO1_4.set('fieldImages', {'Id': 'Range', 'FUNGSI_JLN': 'TextEdit', 'PERKERASAN': 'TextEdit', 'LEBAR_M': 'TextEdit', 'KOND_JLN': 'TextEdit', 'AKSES': 'TextEdit', 'PENERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', 'VOLUME M3': 'TextEdit', 'TEBAL CM': 'TextEdit', });
lyr_SALURANAIR_5.set('fieldImages', {'Id': 'Range', });
lyr_FASILITASUMUM_6.set('fieldImages', {'Id': 'Range', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', });
lyr_INFORMASI_7.set('fieldImages', {'Id': 'Range', 'KETERANGAN': 'TextEdit', 'NAMA': 'TextEdit', 'NO_TLF': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', });
lyr_TITIKSTAPER50M_8.set('fieldImages', {'PANJANG': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', });
lyr_GENJAHAN_SHP_1.set('fieldLabels', {'namobj': 'hidden field', 'fcode': 'hidden field', 'remark': 'hidden field', 'metadata': 'hidden field', 'srs_id': 'hidden field', 'kdbbps': 'hidden field', 'kdcbps': 'hidden field', 'kdcpum': 'hidden field', 'kdebps': 'hidden field', 'kdepum': 'hidden field', 'kdpbps': 'hidden field', 'kdpkab': 'hidden field', 'kdppum': 'hidden field', 'luaswh': 'hidden field', 'tipadm': 'hidden field', 'wadmkc': 'hidden field', 'wadmkd': 'hidden field', 'wadmkk': 'hidden field', 'wadmpr': 'hidden field', 'wiadkc': 'hidden field', 'wiadkk': 'hidden field', 'wiadpr': 'hidden field', 'wiadkd': 'hidden field', 'st_area_sh': 'hidden field', 'st_length_': 'hidden field', });
lyr_BATASDUSUN_2.set('fieldLabels', {'Id': 'hidden field', 'DUSUN': 'header label - visible with data', });
lyr_BATAS_RT_3.set('fieldLabels', {'Id': 'hidden field', 'RT': 'header label - visible with data', 'RW': 'header label - visible with data', });
lyr_JALANSIMO1_4.set('fieldLabels', {'Id': 'hidden field', 'FUNGSI_JLN': 'header label - visible with data', 'PERKERASAN': 'header label - visible with data', 'LEBAR_M': 'header label - visible with data', 'KOND_JLN': 'header label - visible with data', 'AKSES': 'header label - visible with data', 'PENERANGAN': 'header label - visible with data', 'PANJANG': 'header label - visible with data', 'VOLUME M3': 'header label - visible with data', 'TEBAL CM': 'header label - visible with data', });
lyr_SALURANAIR_5.set('fieldLabels', {'Id': 'hidden field', });
lyr_FASILITASUMUM_6.set('fieldLabels', {'Id': 'hidden field', 'NAMA': 'header label - visible with data', 'X': 'header label - visible with data', 'Y': 'header label - visible with data', 'FOTO_1': 'header label - visible with data', 'FOTO_2': 'header label - visible with data', 'FOTO_3': 'header label - visible with data', 'FOTO_4': 'header label - visible with data', 'FOTO_5': 'header label - visible with data', 'FOTO_6': 'header label - visible with data', 'FOTO_7': 'header label - visible with data', });
lyr_INFORMASI_7.set('fieldLabels', {'Id': 'hidden field', 'KETERANGAN': 'header label - visible with data', 'NAMA': 'inline label - visible with data', 'NO_TLF': 'header label - visible with data', 'X': 'header label - visible with data', 'Y': 'header label - visible with data', 'FOTO_1': 'header label - visible with data', 'FOTO_2': 'header label - visible with data', 'FOTO_3': 'header label - visible with data', });
lyr_TITIKSTAPER50M_8.set('fieldLabels', {'PANJANG': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'X': 'header label - visible with data', 'Y': 'header label - visible with data', 'FOTO_1': 'header label - visible with data', 'FOTO_2': 'header label - visible with data', 'FOTO_3': 'header label - visible with data', 'FOTO_4': 'header label - visible with data', });
lyr_TITIKSTAPER50M_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});