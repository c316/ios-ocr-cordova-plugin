var exec = require("cordova/exec");
               
var ocrplugin = {
    scan: function (success, fail, resultType) {
        return exec(success, fail, "com.jcesarmobile.ocrplugin", "recogniseOCR", [resultType]);
    }
};
module.exports = ocrplugin;
