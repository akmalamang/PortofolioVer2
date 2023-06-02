function toogleDetail(e) {
  const target = $(e.target);

  if ($(target).hasClass('.hover')) {
    $(target).html('More Info').removeClass('.hover');
  } else {
    $(target).html('Last Info').addClass('.hover');
  }

  const item = $(target).parents('.about-exp-item');
  const detail = $(item).children('.about-exp-item-detail');

  $(detail).slideToggle();
}
