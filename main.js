/*
 * 工程主配置文件
 */
if(!require){
    require = null;
}
require.config({
    paths: {
        "jquery": "bower_components/jquery/dist/jquery",
        "highcharts": "bower_components/highcharts/highcharts",
        "highcharts.exporting": "bower_components/highcharts/modules/exporting",

        "drawing-deps": "src/js/deps-drawing"
    },
    shim: {
        "highcharts.exporting": {deps: ["highcharts"]}
    }
});
