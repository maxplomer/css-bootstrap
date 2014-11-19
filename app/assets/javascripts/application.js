// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require bootstrap

$(document).ready(function(){

  $(".mySelector").tooltip();

  $("#contact-target").on("click", function(event) {
    event.preventDefault();
    //start by clearing any validation classes from inputs
    $(".form-group").removeClass("has-error");
    $(".form-group").removeClass("has-success");
    $(".form-group").removeClass("alert alert-danger");
    $(".form-group").removeClass("alert alert-success");
    $(".form-group").removeAttr("role","alert");

    if( !$(".form-control-name").val() ){
      $(".form-group-name").addClass("has-error");
      $(".form-group-name").addClass("alert alert-danger");
    } else {
      $(".form-group-name").addClass("has-success");
      $(".form-group-name").addClass("alert alert-success");
    }

    $(".form-group-name").attr("role","alert");

    if( !$(".form-control-email").val() ){
      $(".form-group-email").addClass("has-error");
      $(".form-group-email").addClass("alert alert-danger");
    } else {
      $(".form-group-email").addClass("has-success");
      $(".form-group-email").addClass("alert alert-success");
    }

    $(".form-group-email").attr("role","alert");

    // if( !$(".form-control-name").val() || !$(".form-control-email").val() ) {
    //   $(this).parent().addClass("has-error");
    //   $(this).parent().addClass("alert alert-danger");
    //   $(this).parent().attr("role","alert");
    // } else {
    //   $(this).parent().addClass("has-success");
    //   $(this).parent().addClass("alert alert-success");
    //   $(this).parent().attr("role","alert");
    // }

  });

});