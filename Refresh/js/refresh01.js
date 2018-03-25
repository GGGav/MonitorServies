

var timeout = setInterval(reload, 5000, '#widget01');
var timeout = setInterval(reload, 10000, '#widget02');
//reload();
function reload (tag) {
  //console.log($('#widget01').attr("data"));
  //$('#widget01').load($('#widget01').attr("data"));
  $(tag).load($(tag).attr("data"));
}
