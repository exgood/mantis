// Code goes here

$(document).ready(function() {
    $('#exampleModalCenter').modal('show').on('hidden.bs.modal', function () {
       $("#videoHolder").removeAttr("style").append('<iframe width="420" height="315" src="https://www.youtube.com/embed/hyuF6VXxw_4?autoplay=1&cc_load_policy=1" frameborder="0" allowfullscreen></iframe>');
     });
});
