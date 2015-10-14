if(!require){
    require = null;
}
require.config({
    paths: {
        "jquery": "bower_components/jquery/dist/jquery",
        "jquery-private": "src/jquery-private",
        "highcharts": "bower_components/highcharts/highcharts.src",
        "highcharts.exporting": "bower_components/highcharts/modules/exporting",

        "drawing-deps": "src/deps-drawing"
    },
    shim: {
        "highcharts.exporting": {deps: ["highcharts"]}
    }
});
