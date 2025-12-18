$(document).ready(function () {
  $('nav a').click(function (e) {
    e.preventDefault();
    let target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 600);
  });

  $('.skill-card').hide();
  $('.skill-card').fadeIn(1200);

  $.ajax({
    url: "api.json",
    method: "GET",
    success: function (projects) {
      $.each(projects, function (index, project) {
        $('#projectList').append(
          '<a href="' + project.link + '" target="_blank" class="project-link">' +
            '<div class="project-card">' +
              '<img src="' + project.image + '">' +
              '<p>' + project.title + '</p>' +
            '</div>' +
          '</a>'
        );
      });
    }
  });

  $('#contactForm').submit(function (e) {
    e.preventDefault();
    alert('Message sent!');
    this.reset();
  });

});
