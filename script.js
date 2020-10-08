$(document).ready(function () {
    $("#buzz-button").on('click', function() {
        $("#buzz-modal").addClass("is-active");
    });
    $("#buzz-modal button.delete").on('click', function() {
        $("#buzz-modal").addClass("slideOutUp").removeClass("is-active");
    });

    $("#teamUp-button").on('click', function() {
        $("#teamUp-modal").addClass("is-active");
    });
    $("#teamUp-modal button.delete").on('click', function() {
        $("#teamUp-modal").addClass("slideOutUp").removeClass("is-active");
    });

    $("#marth-button").on('click', function() {
        $("#marth-modal").addClass("is-active");
    });
    $("#marth-modal button.delete").on('click', function() {
        $("#marth-modal").addClass("slideOutUp").removeClass("is-active");
    });

    $("#techware-button").on('click', function() {
        $("#techware-modal").addClass("is-active");
    });
    $("#techware-modal button.delete").on('click', function() {
        $("#techware-modal").addClass("slideOutUp").removeClass("is-active");
    });

    $("#onww-button").on('click', function() {
        $("#onww-modal").addClass("is-active");
    });
    $("#onww-modal button.delete").on('click', function() {
        $("#onww-modal").addClass("slideOutUp").removeClass("is-active");
    });

    $("#codenames-button").on('click', function() {
        $("#codenames-modal").addClass("is-active");
    });
    $("#codenames-modal button.delete").on('click', function() {
        $("#codenames-modal").addClass("slideOutUp").removeClass("is-active");
    });
});