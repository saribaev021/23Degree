document.querySelector('.floor-area').onclick = function(){
  let select = document.querySelector('input[name = area]:checked').value;  
  let formatter = new Intl.NumberFormat("ru");
  document.querySelector('#floor-area').innerHTML = formatter.format(select)+'м<sup>2</sup';
  let middlePrice = 4850;
  document.querySelector('#middle-price_property').innerHTML =formatter.format(+select*middlePrice)+'м<sup>2</sup';
}