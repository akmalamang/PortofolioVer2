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

function onFormSubmit(e) {
  e.preventDefault();
  const email = $('#inp_email');
  const subject = $('#inp_subject');
  const message = $('#inp_message');

  if (!$(email).val()) {
    alert('email is required');
  } else if (!$(subject).val()) {
    alert('subject is required');
  } else if (!$(message).val()) {
    alert('message is required');
  } else {
    alert('form is required');
    $(email).val('');
    $(subject).val('');
    $(message).val('');
  }
}

function reveal() {
  var reveals = $('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = $(window).height();
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      $(reveals[i]).addClass('active');
    } else {
      $(reveals[i]).removeClass('active');
    }
  }
}

$(window).on('scroll', reveal);
