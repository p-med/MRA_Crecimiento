//////////////////MÁSCARA - L8///////////////////
function CloudRemovalL8(image) {
    var removeCloud = image.mask(image.select("BQA").eq(2720));
    return removeCloud;
}
//////////////////////////////////////////////////

//////////////////MÁSCARA - L5///////////////////
function CloudRemovalL5(image) {
    var removeCloud = image.mask(image.select("BQA").eq(672));
    return removeCloud;
}
//////////////////////////////////////////////////

//MRA
var MRA = ee.FeatureCollection("FAO/GAUL/2015/level2")
    .filter(ee.Filter.eq("ADM2_NAME", "M. Roque Alonso"));

Map.addLayer(MRA, {}, "Mariano R. Alonso");
Map.centerObject(MRA);

//LANDSAT 5 1985

var L5_0 = ee.ImageCollection("LANDSAT/LT05/C01/T1_TOA")
    .filterDate("1985-01-01", "1986-02-01")
    .filterMetadata("CLOUD_COVER", "less_than", 10)
    .filterBounds(MRA)
    .map(function(image) { return image.clip(MRA) })
    .map(CloudRemovalL5)
    .median();


Map.addLayer(L5_0, {
    max: 0.5,
    min: 0.0,
    gamma: 1.0,
    bands: ["B3", "B2", "B1"]
}, "L5 - 1985", 0);

var L5_0label = ui.Label("LANDSAT 5 - 1985")
L5_0label.style().set("position", "bottom-left");

Map.add(L5_0label);

//LANDSAT 5 1990

var L5_1 = ee.ImageCollection("LANDSAT/LT05/C01/T1_TOA")
    .filterDate("1990-01-01", "1990-12-01")
    .filterMetadata("CLOUD_COVER", "less_than", 10)
    .filterBounds(MRA)
    .map(function(image) { return image.clip(MRA) })
    .map(CloudRemovalL5)
    .median();


Map.addLayer(L5_1, {
    max: 0.5,
    min: 0.0,
    gamma: 1.0,
    bands: ["B3", "B2", "B1"]
}, "L5 - 1990", 0);

var L5_1label = ui.Label("LANDSAT 5 - 1990")
L5_1label.style().set("position", "bottom-left");

Map.add(L5_1label);

//LANDSAT 5 1995

var L5_2 = ee.ImageCollection("LANDSAT/LT05/C01/T1_TOA")
    .filterDate("1995-01-01", "1995-12-01")
    .filterMetadata("CLOUD_COVER", "less_than", 10)
    .filterBounds(MRA)
    .map(function(image) { return image.clip(MRA) })
    .map(CloudRemovalL5)
    .median();


Map.addLayer(L5_2, {
    max: 0.5,
    min: 0.0,
    gamma: 1.0,
    bands: ["B3", "B2", "B1"]
}, "L5 - 1995", 0);

var L5_2label = ui.Label("LANDSAT 5 - 1995")
L5_2label.style().set("position", "bottom-left");

Map.add(L5_2label);

//LANDSAT 7 2000

var L7_0 = ee.ImageCollection("LANDSAT/LE07/C01/T1_TOA")
    .filterDate("2000-01-01", "2000-12-01")
    .filterMetadata("CLOUD_COVER", "less_than", 10)
    .filterBounds(MRA)
    .map(function(image) { return image.clip(MRA) })
    .map(CloudRemovalL5)
    .median();


Map.addLayer(L7_0, {
    max: 0.5,
    min: 0.0,
    gamma: 1.0,
    bands: ["B3", "B2", "B1"]
}, "L7 - 2000", 0);

var L7_0label = ui.Label("LANDSAT 7 - 2000")
L7_0label.style().set("position", "bottom-left");

Map.add(L7_0label);

//LANDSAT 7 2005

var L7_1 = ee.ImageCollection("LANDSAT/LE07/C01/T1_TOA")
    .filterDate("2005-01-01", "2005-12-01")
    .filterMetadata("CLOUD_COVER", "less_than", 10)
    .filterBounds(MRA)
    .map(function(image) { return image.clip(MRA) })
    .map(CloudRemovalL5)
    .median();


Map.addLayer(L7_1, {
    max: 0.5,
    min: 0.0,
    gamma: 1.0,
    bands: ["B3", "B2", "B1"]
}, "L7 - 2005", 0);

var L7_1label = ui.Label("LANDSAT 7 - 2005")
L7_1label.style().set("position", "bottom-left");

Map.add(L7_1label);

//LANDSAT 7 2010

var L7_2 = ee.ImageCollection("LANDSAT/LE07/C01/T1_TOA")
    .filterDate("2010-01-01", "2010-12-01")
    .filterMetadata("CLOUD_COVER", "less_than", 10)
    .filterBounds(MRA)
    .map(function(image) { return image.clip(MRA) })
    .map(CloudRemovalL5)
    .median();


Map.addLayer(L7_2, {
    max: 0.5,
    min: 0.0,
    gamma: 1.0,
    bands: ["B3", "B2", "B1"]
}, "L7 - 2010", 0);

var L7_2label = ui.Label("LANDSAT 7 - 2010")
L7_2label.style().set("position", "bottom-left");

Map.add(L7_2label);

//LANDSAT 8 2015

var L8_0 = ee.ImageCollection("LANDSAT/LC08/C01/T1_TOA")
    .filterDate("2015-01-01", "2015-12-01")
    .filterMetadata("CLOUD_COVER", "less_than", 10)
    .filterBounds(MRA)
    .map(function(image) { return image.clip(MRA) })
    .map(CloudRemovalL8)
    .median();


Map.addLayer(L8_0, {
    max: 0.5,
    min: 0.0,
    gamma: 1.0,
    bands: ["B4", "B3", "B2"]
}, "L8 - 2015", 0);

var L8_0abel = ui.Label("LANDSAT 8 - 2015")
L8_0abel.style().set("position", "bottom-left");

Map.add(L8_0abel);

//LANDSAT 8 2020

var L8_1 = ee.ImageCollection("LANDSAT/LC08/C01/T1_TOA")
    .filterDate("2020-01-01", "2020-12-01")
    .filterMetadata("CLOUD_COVER", "less_than", 10)
    .filterBounds(MRA)
    .map(function(image) { return image.clip(MRA) })
    .map(CloudRemovalL8)
    .median();


Map.addLayer(L8_1, {
    max: 0.5,
    min: 0.0,
    gamma: 1.0,
    bands: ["B4", "B3", "B2"]
}, "L8 - 2020", 1);

var L8_1label = ui.Label("LANDSAT 8 - 2020")
L8_1label.style().set("position", "bottom-left");

Map.add(L8_1label);