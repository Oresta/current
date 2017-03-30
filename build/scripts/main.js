'use strict';

var $sidebar = $('.sidebar');
var $subsidebar = $('.subsidebar');
var $overlay = $('.overlay');

$('#menu > .nav-item').click(function () {
  $sidebar.removeClass('active');
  $overlay.addClass('active');
  if (!$subsidebar.hasClass('active')) {
    $subsidebar.addClass('active');
  }
  if (!$(this).hasClass('active')) {
    $('.sidebar .nav-item').removeClass('active');
    $('.sidebar__submenu').removeClass('active');
    $(this).addClass('active');
    $(this).next().addClass('active');
  } else {
    $(this).removeClass('active');
    $(this).next().removeClass('active');
    $('.subsidebar').removeClass('active');
  }
});

/* off-canvas sidebar toggle */
$('[data-toggle=offcanvas]').click(function () {
  $subsidebar.removeClass('active');
  $sidebar.toggleClass('active');
  if ($sidebar.hasClass('active')) {
    $overlay.removeClass('active');
  } else {
    $overlay.addClass('active');
  }
  $('.sidebar__submenu').removeClass('active');
});

$('[data-toggle=offcanvas-in]').click(function () {
  $sidebar.addClass('active');
  if ($sidebar.hasClass('active')) {
    $overlay.removeClass('active');
  } else {
    $overlay.addClass('active');
  }
});

init();

function init() {
  if ($(window).width() < 992) {
    $sidebar.addClass('active');
  }
}

$(window).resize(function () {
  if ($(window).width() < 992) {
    $subsidebar.removeClass('active');
    $sidebar.addClass('active');
    $('.sidebar__submenu').removeClass('active');
  } else {
    $sidebar.removeClass('active');
  }
  $overlay.removeClass('active');
});

/* toggle all checkboxes in group */
$('#payment-table .all').click(function (e) {
  e.stopPropagation();
  var $this = $(this);
  if ($this.is(":checked")) {
    $this.parents('#payment-table').find("[type=checkbox]").prop("checked", true);
  } else {
    $this.parents('#payment-table').find("[type=checkbox]").prop("checked", false);
    $this.prop("checked", false);
  }
});

$('[type=checkbox]').click(function (e) {
  e.stopPropagation();
});

/* toggle checkbox when list group item is clicked */
$('#payment-table tr').click(function (e) {
  e.stopPropagation();
  var $this = $(this).find("[type=checkbox]");
  if ($this.is(":checked")) {
    $this.prop("checked", false);
  } else {
    $this.prop("checked", true);
  }
  if ($this.hasClass("all")) {
    $this.trigger('click');
  }
});