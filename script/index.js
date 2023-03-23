$(function () {
  $(".js-login").each(function () {
    $(this).validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
        psw: {
          required: true,
          minlength: 6,
        },
      },
      messages: {
        email: "Введите e-mail",
        psw: "Пароль должен содержать не менее 6 символов",
      },
      submitHandler: function (form) {
        form.submit();
      },
    });
  });
});
