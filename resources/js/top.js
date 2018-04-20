sugar = 'technogenesisBaby';
function getc(k, r) {
    return (r = RegExp('(^|; )' + encodeURIComponent(k) + '=([^;]*)').exec(document.cookie)) ? decodeURIComponent(r[2]) : null;
}

function setc(k, v, e, t) {
    t = '';
    if (typeof e === 'number') {
        t = new Date();
        t.setTime(+t + e * 864e+5);
        t = '; expires=' + t.toGMTString();
    }
    document.cookie = encodeURIComponent(k) + '=' + encodeURIComponent(String(v).replace(/[^a-z0-9\.\- \,\;\/\:\?\!\+\&\(\)\']/ig, '')) + t + '; path=/';
}



$(document).ready(function () {

    setc("tgbnid", sugar, 365);


    var snow_options = {
        flakeCount: 150, // number
        flakeColor: '#ffffff', // string
        flakeIndex: 999999, // number
        minSize: 1, // number
        maxSize: 3, // number
        minSpeed: 2, // number
        maxSpeed: 3, // number
        round: false, // bool
        shadow: false, // bool
        /*collection : '.snow_collection' */         // string
    };


    $(document).snowfall(snow_options);


    $('[data-toggle="tooltip"]').tooltip();


    $('.datepicker').datepicker({
        format: 'dd-mm-yyyy',
        autoclose:true
    })
            .on('changeDate', function (evt) {

                if ($('#numerology_form').length > 0) {
                    $(this).valid();
                }

                if ($('#suitable_fm').length > 0) {
                    $(this).valid();
                }





            });




    jQuery.validator.addMethod("validDate", function (value, element) {
        return this.optional(element) || moment(value, "DD/MM/YYYY").isValid();
    }, "Please enter a valid date in the format DD/MM/YYYY");





    // Dropzone

    /*
     
     var dropzone = new Dropzone('#demo-upload', {
     previewTemplate: document.querySelector('#preview-template').innerHTML,
     parallelUploads: 2,
     thumbnailHeight: 120,
     thumbnailWidth: 120,
     maxFilesize: 3,
     filesizeBase: 1000,
     thumbnail: function(file, dataUrl) {
     if (file.previewElement) {
     file.previewElement.classList.remove("dz-file-preview");
     var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
     for (var i = 0; i < images.length; i++) {
     var thumbnailElement = images[i];
     thumbnailElement.alt = file.name;
     thumbnailElement.src = dataUrl;
     }
     setTimeout(function() { file.previewElement.classList.add("dz-image-preview"); }, 1);
     }
     }
     
     });
     
     
     // Now fake the file upload, since GitHub does not handle file uploads
     // and returns a 404
     
     var minSteps = 6,
     maxSteps = 60,
     timeBetweenSteps = 100,
     bytesPerStep = 100000;
     
     dropzone.uploadFiles = function(files) {
     var self = this;
     
     for (var i = 0; i < files.length; i++) {
     
     var file = files[i];
     totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));
     
     for (var step = 0; step < totalSteps; step++) {
     var duration = timeBetweenSteps * (step + 1);
     setTimeout(function(file, totalSteps, step) {
     return function() {
     file.upload = {
     progress: 100 * (step + 1) / totalSteps,
     total: file.size,
     bytesSent: (step + 1) * file.size / totalSteps
     };
     
     self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);
     if (file.upload.progress == 100) {
     file.status = Dropzone.SUCCESS;
     self.emit("success", file, 'success', null);
     self.emit("complete", file);
     self.processQueue();
     }
     };
     }(file, totalSteps, step), duration);
     }
     }
     }
     
     
     */








});







