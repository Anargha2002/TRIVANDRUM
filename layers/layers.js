var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Thiruvananthapuram_1 = new ol.format.GeoJSON();
var features_Thiruvananthapuram_1 = format_Thiruvananthapuram_1.readFeatures(json_Thiruvananthapuram_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thiruvananthapuram_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thiruvananthapuram_1.addFeatures(features_Thiruvananthapuram_1);
var lyr_Thiruvananthapuram_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thiruvananthapuram_1, 
                style: style_Thiruvananthapuram_1,
                popuplayertitle: "Thiruvananthapuram",
                interactive: true,
                title: '<img src="styles/legend/Thiruvananthapuram_1.png" /> Thiruvananthapuram'
            });
var format_Road_2 = new ol.format.GeoJSON();
var features_Road_2 = format_Road_2.readFeatures(json_Road_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_2.addFeatures(features_Road_2);
var lyr_Road_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_2, 
                style: style_Road_2,
                popuplayertitle: "Road",
                interactive: true,
                title: '<img src="styles/legend/Road_2.png" /> Road'
            });
var format_SOIL_3 = new ol.format.GeoJSON();
var features_SOIL_3 = format_SOIL_3.readFeatures(json_SOIL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOIL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOIL_3.addFeatures(features_SOIL_3);
var lyr_SOIL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOIL_3, 
                style: style_SOIL_3,
                popuplayertitle: "SOIL",
                interactive: true,
                title: '<img src="styles/legend/SOIL_3.png" /> SOIL'
            });
var format_railways_4 = new ol.format.GeoJSON();
var features_railways_4 = format_railways_4.readFeatures(json_railways_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railways_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railways_4.addFeatures(features_railways_4);
var lyr_railways_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railways_4, 
                style: style_railways_4,
                popuplayertitle: "railways",
                interactive: true,
                title: '<img src="styles/legend/railways_4.png" /> railways'
            });
var format_clip_SOIL_5 = new ol.format.GeoJSON();
var features_clip_SOIL_5 = format_clip_SOIL_5.readFeatures(json_clip_SOIL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_SOIL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_SOIL_5.addFeatures(features_clip_SOIL_5);
var lyr_clip_SOIL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_SOIL_5, 
                style: style_clip_SOIL_5,
                popuplayertitle: "clip_SOIL",
                interactive: true,
    title: 'clip_SOIL<br />\
    <img src="styles/legend/clip_SOIL_5_0.png" /> clay<br />\
    <img src="styles/legend/clip_SOIL_5_1.png" /> gravelly clay<br />\
    <img src="styles/legend/clip_SOIL_5_2.png" /> gravelly loam<br />\
    <img src="styles/legend/clip_SOIL_5_3.png" /> loam<br />\
    <img src="styles/legend/clip_SOIL_5_4.png" /> sandy<br />'
        });
var format_clip_railways_6 = new ol.format.GeoJSON();
var features_clip_railways_6 = format_clip_railways_6.readFeatures(json_clip_railways_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_railways_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_railways_6.addFeatures(features_clip_railways_6);
var lyr_clip_railways_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_railways_6, 
                style: style_clip_railways_6,
                popuplayertitle: "clip_railways",
                interactive: true,
                title: '<img src="styles/legend/clip_railways_6.png" /> clip_railways'
            });
var format_clip_Road_7 = new ol.format.GeoJSON();
var features_clip_Road_7 = format_clip_Road_7.readFeatures(json_clip_Road_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Road_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Road_7.addFeatures(features_clip_Road_7);
var lyr_clip_Road_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Road_7, 
                style: style_clip_Road_7,
                popuplayertitle: "clip_Road",
                interactive: true,
                title: '<img src="styles/legend/clip_Road_7.png" /> clip_Road'
            });
var format_clip_DRAINAGE_8 = new ol.format.GeoJSON();
var features_clip_DRAINAGE_8 = format_clip_DRAINAGE_8.readFeatures(json_clip_DRAINAGE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_DRAINAGE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_DRAINAGE_8.addFeatures(features_clip_DRAINAGE_8);
var lyr_clip_DRAINAGE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_DRAINAGE_8, 
                style: style_clip_DRAINAGE_8,
                popuplayertitle: "clip_DRAINAGE",
                interactive: true,
    title: 'clip_DRAINAGE<br />\
    <img src="styles/legend/clip_DRAINAGE_8_0.png" /> 0<br />\
    <img src="styles/legend/clip_DRAINAGE_8_1.png" /> 1<br />\
    <img src="styles/legend/clip_DRAINAGE_8_2.png" /> 2<br />\
    <img src="styles/legend/clip_DRAINAGE_8_3.png" /> 3<br />\
    <img src="styles/legend/clip_DRAINAGE_8_4.png" /> 4<br />\
    <img src="styles/legend/clip_DRAINAGE_8_5.png" /> 5<br />'
        });
var format_clip_Junctions_9 = new ol.format.GeoJSON();
var features_clip_Junctions_9 = format_clip_Junctions_9.readFeatures(json_clip_Junctions_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Junctions_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Junctions_9.addFeatures(features_clip_Junctions_9);
var lyr_clip_Junctions_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Junctions_9, 
                style: style_clip_Junctions_9,
                popuplayertitle: "clip_Junctions",
                interactive: true,
                title: '<img src="styles/legend/clip_Junctions_9.png" /> clip_Junctions'
            });
var format_tvmbeaches_10 = new ol.format.GeoJSON();
var features_tvmbeaches_10 = format_tvmbeaches_10.readFeatures(json_tvmbeaches_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tvmbeaches_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tvmbeaches_10.addFeatures(features_tvmbeaches_10);
var lyr_tvmbeaches_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tvmbeaches_10, 
                style: style_tvmbeaches_10,
                popuplayertitle: "tvm beaches",
                interactive: true,
                title: '<img src="styles/legend/tvmbeaches_10.png" /> tvm beaches'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Thiruvananthapuram_1.setVisible(true);lyr_Road_2.setVisible(true);lyr_SOIL_3.setVisible(true);lyr_railways_4.setVisible(true);lyr_clip_SOIL_5.setVisible(true);lyr_clip_railways_6.setVisible(true);lyr_clip_Road_7.setVisible(true);lyr_clip_DRAINAGE_8.setVisible(true);lyr_clip_Junctions_9.setVisible(true);lyr_tvmbeaches_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Thiruvananthapuram_1,lyr_Road_2,lyr_SOIL_3,lyr_railways_4,lyr_clip_SOIL_5,lyr_clip_railways_6,lyr_clip_Road_7,lyr_clip_DRAINAGE_8,lyr_clip_Junctions_9,lyr_tvmbeaches_10];
lyr_Thiruvananthapuram_1.set('fieldAliases', {'admin_leve': 'admin_leve', 'alt_name': 'alt_name', 'boundary': 'boundary', 'name': 'name', 'name_ar': 'name_ar', 'name_kn': 'name_kn', 'name_ml': 'name_ml', 'name_ta': 'name_ta', 'name_ur': 'name_ur', 'official_n': 'official_n', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', });
lyr_Road_2.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_SOIL_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KERSOIL_': 'KERSOIL_', 'KERSOIL_ID': 'KERSOIL_ID', 'CODE': 'CODE', 'MAP_SYMBOL': 'MAP_SYMBOL', 'DEPTH': 'DEPTH', 'TEXTURE': 'TEXTURE', 'SLOPE': 'SLOPE', 'DRAINAGE': 'DRAINAGE', });
lyr_railways_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_clip_SOIL_5.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KERSOIL_': 'KERSOIL_', 'KERSOIL_ID': 'KERSOIL_ID', 'CODE': 'CODE', 'MAP_SYMBOL': 'MAP_SYMBOL', 'DEPTH': 'DEPTH', 'TEXTURE': 'TEXTURE', 'SLOPE': 'SLOPE', 'DRAINAGE': 'DRAINAGE', });
lyr_clip_railways_6.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_clip_Road_7.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_clip_DRAINAGE_8.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_clip_Junctions_9.set('fieldAliases', {'Id': 'Id', 'Jn_Name': 'Jn_Name', 'District': 'District', 'Name': 'Name', });
lyr_tvmbeaches_10.set('fieldAliases', {'id': 'id', 'beach': 'beach', 'photos': 'photos', });
lyr_Thiruvananthapuram_1.set('fieldImages', {'admin_leve': 'TextEdit', 'alt_name': 'TextEdit', 'boundary': 'TextEdit', 'name': 'TextEdit', 'name_ar': 'TextEdit', 'name_kn': 'TextEdit', 'name_ml': 'TextEdit', 'name_ta': 'TextEdit', 'name_ur': 'TextEdit', 'official_n': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Road_2.set('fieldImages', {'NAME': '', 'Length': '', });
lyr_SOIL_3.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'KERSOIL_': '', 'KERSOIL_ID': '', 'CODE': '', 'MAP_SYMBOL': '', 'DEPTH': '', 'TEXTURE': '', 'SLOPE': '', 'DRAINAGE': '', });
lyr_railways_4.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', });
lyr_clip_SOIL_5.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KERSOIL_': 'Range', 'KERSOIL_ID': 'Range', 'CODE': 'Range', 'MAP_SYMBOL': 'TextEdit', 'DEPTH': 'TextEdit', 'TEXTURE': 'TextEdit', 'SLOPE': 'TextEdit', 'DRAINAGE': 'TextEdit', });
lyr_clip_railways_6.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_clip_Road_7.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_clip_DRAINAGE_8.set('fieldImages', {'ORDER1': 'Range', });
lyr_clip_Junctions_9.set('fieldImages', {'Id': 'Range', 'Jn_Name': 'TextEdit', 'District': 'TextEdit', 'Name': 'TextEdit', });
lyr_tvmbeaches_10.set('fieldImages', {'id': 'TextEdit', 'beach': 'TextEdit', 'photos': 'ExternalResource', });
lyr_Thiruvananthapuram_1.set('fieldLabels', {'admin_leve': 'no label', 'alt_name': 'no label', 'boundary': 'no label', 'name': 'no label', 'name_ar': 'no label', 'name_kn': 'no label', 'name_ml': 'no label', 'name_ta': 'no label', 'name_ur': 'no label', 'official_n': 'no label', 'type': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', });
lyr_Road_2.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_SOIL_3.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KERSOIL_': 'no label', 'KERSOIL_ID': 'no label', 'CODE': 'no label', 'MAP_SYMBOL': 'no label', 'DEPTH': 'no label', 'TEXTURE': 'no label', 'SLOPE': 'no label', 'DRAINAGE': 'no label', });
lyr_railways_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_clip_SOIL_5.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KERSOIL_': 'no label', 'KERSOIL_ID': 'no label', 'CODE': 'no label', 'MAP_SYMBOL': 'no label', 'DEPTH': 'no label', 'TEXTURE': 'no label', 'SLOPE': 'no label', 'DRAINAGE': 'no label', });
lyr_clip_railways_6.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_clip_Road_7.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_clip_DRAINAGE_8.set('fieldLabels', {'ORDER1': 'no label', });
lyr_clip_Junctions_9.set('fieldLabels', {'Id': 'no label', 'Jn_Name': 'no label', 'District': 'no label', 'Name': 'no label', });
lyr_tvmbeaches_10.set('fieldLabels', {'id': 'no label', 'beach': 'no label', 'photos': 'no label', });
lyr_tvmbeaches_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});