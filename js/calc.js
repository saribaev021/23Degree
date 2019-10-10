let select = document.querySelector('input[name = area]:checked').value;  
let formatter = new Intl.NumberFormat("ru");
let middlePrice = 4850;
document.querySelector('#floor-area').innerHTML = formatter.format(select)+'м<sup>2</sup';
document.querySelector('#middle-price_property').innerHTML =formatter.format(+select*middlePrice)+'м<sup>2</sup';
document.querySelector('.floor-area').onclick = function(){
  select = document.querySelector('input[name = area]:checked').value;  
  formatter = new Intl.NumberFormat("ru");
  document.querySelector('#floor-area').innerHTML = formatter.format(select)+'м<sup>2</sup';
  middlePrice = 4850;
  document.querySelector('#middle-price_property').innerHTML =formatter.format(+select*middlePrice)+'м<sup>2</sup';
}