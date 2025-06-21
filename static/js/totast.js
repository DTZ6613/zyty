/*
 * @Author: wht
 * @Date: 2021-09-08 10:00:22
 * @LastEditTime: 2021-09-08 10:13:11
 * @LastEditors: Please set LastEditors
 * @Description: 弹出提示
 * @FilePath: /confession-page/letter/js/totast.js
 */
function snackbar(msg) {
  var content = $('<div class="snackbar el-message">' + msg + "</div>");
  if ($(".snackbar").length < 1) {
    content.appendTo($("body"));
    content.animate(
      {
        top: 50,
        opacity: 1,
      },
      600,
      function () {
        /* stuff to do after animation is complete */
        content.delay(1500).fadeOut(500, function () {
          $(this).remove();
        });
      }
    );
  } else {
    $(".snackbar").not($(this)).remove();
    content.appendTo($("body"));
    content.animate(
      {
        top: 50,
        opacity: 1,
      },
      600,
      function () {
        /* stuff to do after animation is complete */
        content.delay(1000).fadeOut(500, function () {
          $(this).remove();
        });
      }
    );
  }
}
//错误提示
function errorSnackbar(msg) {
  var content = $('<div class="errorbar el-message">错误：' + msg + "</div>");
  if ($(".snackbar").length < 1) {
    content.appendTo($("body"));
    content.animate(
      {
        top: 50,
        //opacity: .8
      },
      600,
      function () {
        /* stuff to do after animation is complete */
        content.delay(2000).fadeOut(500, function () {
          $(this).remove();
        });
      }
    );
  } else {
    $(".snackbar").not($(this)).remove();
    content.appendTo($("body"));
    content.animate(
      {
        top: 50,
        // opacity: .8
      },
      600,
      function () {
        /* stuff to do after animation is complete */
        content.delay(1000).fadeOut(500, function () {
          $(this).remove();
        });
      }
    );
  }
}
