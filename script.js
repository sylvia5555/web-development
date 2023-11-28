function changeBigImage(img_id) {
  let imgSrc = "pictures/red_shoes" + img_id + ".png";
  let bigImg = document.getElementById("bigImage");
  bigImg.src = imgSrc;
}
