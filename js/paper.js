document.getElementById('brand').innerHTML = brand;

for (x in menu) {
  document.getElementById(x).innerHTML = menu[x];
  document.getElementById(x).href = "#"+menu[x];
  document.getElementById(x).classList.add('menuLink');
  var a = document.getElementById('a-'+x)
  if (a!=null){
    a.id = menu[x];
  };
  var b = document.getElementById('b-'+x)
  if (b!=null){
    b.innerHTML = menu[x];
  };
  document.getElementById('f'+x).innerHTML = menu[x];
  document.getElementById('f'+x).href = "#"+menu[x];
}
document.getElementById('caption1a').innerHTML = caption1a;
document.getElementById('captionH1').innerHTML = captionH1;
document.getElementById('welcomeImageS1').src = 'client/images/' + welcomeImageS1;
document.getElementById('welcomeImageR1').src = 'client/images/' + welcomeImageR1;
document.getElementById('captionH2a').innerHTML = captionH2a;
document.getElementById('caption1b').innerHTML = caption1b;
document.getElementById('background1').style.backgroundImage = "url('client/images/" + background1 + "')";
document.getElementById('background2').style.backgroundImage = "url('client/images/" + background2 + "')";

// section2
document.getElementById('captionH2b').innerHTML = captionH2b;
document.getElementById('caption2a').innerHTML = caption2a;

var y;
for (y in rooms){
  var divtest = document.createElement("div");
  divtest.classList.add('col-lg-4', 'col-md-6', 'aos-init');
  divtest.dataset.aos = "fade-up";
  divtest.dataset.aos.delay = attrations[y] + '00';
  divtest.innerHTML = '<figure class="img-wrap"><img src="client/images/' + rooms[y]["image"]+ '" alt="Image placeholder" class="img-fluid"></figure><div class="p-3 text-center room-info"><h2>' + rooms[y]["title"] + '</h2><span class="text-uppercase letter-spacing-1">' + rooms[y]["price"]+ '</span></div><div class="text-center"><button type="button" class="btn btn-info" data-toggle="modal" data-target="#my' + y + '">More</button></div>';
  document.getElementById('roomPackage').appendChild(divtest);
  document.getElementById('modalclass').innerHTML += '<div id="my' + y + '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">' + y + '</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><p><img src="client/images/' + rooms[y]["image"]+ '" alt="Image placeholder" class="img-fluid"></p><div class="row"><p class="col-md-12">' + rooms[y]["desc"]+ '</p  ></div></div><div class="modal-footer"><button type="button" class="btn btn-info" data-dismiss="modal">Back</button></div></div></div></div>';
}
document.getElementById('contact-text').innerHTML = callText;
document.getElementById('contact-btn').innerHTML = call;
document.getElementById('caption3a').innerHTML = caption3a;
for (x in galeryImages){
  var divtest = document.createElement("div");
  divtest.innerHTML = '<img src="client/images/' + galeryImages[x]+ '" alt="Image placeholder" class="img-fluid">';
  document.getElementById('carousel').appendChild(divtest);
}

document.getElementById('captionH2d').innerHTML = captionH2d;
document.getElementById('caption4a').innerHTML = caption4a;
for (y in attrations){
  var divtest = document.createElement("div");
  divtest.classList.add('col-lg-4', 'col-md-6', 'col-sm-6', 'col-12', 'post', 'aos-init');
  divtest.dataset.aos = "fade-up";
  divtest.dataset.aos.delay = attrations[y] + '00';
  divtest.innerHTML = '<div class="media media-custom d-block mb-4 h-100"><img src="client/images/' + attrations[y]['image'] + '" alt="Image placeholder" class="img-fluid"><div class="media-body"><h2 class="mt-0 mb-3">' + attrations[y]['title'] + '</h2><p>' + attrations[y]['desc'] + '</p></div></div>';
  document.getElementById('media').appendChild(divtest);
}

for (y in tours){
  var divtest = document.createElement("div");
  divtest.classList.add('owl-item');
  divtest.innerHTML = '<a href="'+ tours[y]["url"] +'"><div class="testimonial text-center slider-item"><img src="client/images/'+ tours[y]["image"]+'" alt="Image placeholder" class="mx-auto"></div><blockquote class="margin0"><h3>'+ tours[y]['title']+'</h3><p>' + tours[y]['desc'] + '</p></blockquote></a>';
  document.getElementById('tours').appendChild(divtest);
}


// section6
document.getElementById('list_custId').value = custId
document.getElementById('list_address').value = address1 + address2
document.getElementById('address').innerHTML = address1 + '<br>' + address2
document.getElementById('mobile').innerHTML = mobile
document.getElementById('whatsapp').href = "https://wa.me/6"+mobile
document.getElementById('url').value = window.location.href 


document.getElementById('fAddress').innerHTML = address1 + '<br>' + address2
document.getElementById('fMobile').innerHTML = mobile

document.getElementById('facebook').href = facebookUrl

