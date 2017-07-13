$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/2292865.json',
    dataType: 'jsonp',
    success: function(response) {
      for (var i = 0; i < response.courses.completed.length; i++) {
        var courseDiv = "<div class='course'><h3>"+
        response.courses.completed[i].title  +"</h3>"+
        "<img src='"+ response.courses.completed[i].badge +"'>"+
        "<a href='"+response.courses.completed[i].url+
        "' class='btn btn-primary' target='_blank'>See Course</a>"+
        "</div>";
        $('#badges').append(courseDiv);
      }
    }
  });

});
