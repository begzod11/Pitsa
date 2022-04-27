var select = document.getElementById('select');
select.setAttribute('class','form-control w-25');
var arr = ["yupqa","o'rta","qalin"];
for(var item of arr){
  var option = document.createElement('option');
   option.textContent = item;
  select.appendChild(option);
}


var size = document.getElementById('size');
var arry = [25,30,35];
var i = 0;


for(let index of arry){
  i++;
   var label = document.createElement('label');
   var span = document.createElement('span');
   var input = document.createElement('input');
   input.setAttribute('class','form-check-input label');
   input.setAttribute('type','radio');
   input.setAttribute('name','i');
   label.appendChild(input);
   label.setAttribute('class','m-4');
   span.setAttribute('class',' m-4');
   span.textContent = index + ' sm';
   label.appendChild(span);
   size.appendChild(label);
}

var retsep = ["pomidor","kurka go'shti","qazi","tuzlangan bodiring","qo'ziqorin","kalbasa"];
var ret = document.getElementById('ret');
for(let k of retsep){
var inputRet = document.createElement('input');
var labelRet = document.createElement('label');
var text = document.createElement('p');
text.textContent = k;
inputRet.setAttribute('class','form-check-input m-2');
inputRet.setAttribute('type','radio');
labelRet.style.display='block'
labelRet.style.display='flex'
labelRet.appendChild(inputRet);
labelRet.appendChild(text);
ret.appendChild(labelRet);
}

var add = ["achchiq","soskali"];
var additional = document.getElementById('additional-item');
for(let l of add){
var labelAdditional = document.createElement('label');
var inputAdditional = document.createElement('input');
var title = document.createElement('p');
title.textContent = l;
inputAdditional.setAttribute('class','form-check-input m-2');
inputAdditional.setAttribute('type','radio');
labelAdditional.style.display='block';
labelAdditional.style.display='flex';
labelAdditional.appendChild(inputAdditional);
labelAdditional.appendChild(title);
additional.appendChild(labelAdditional);
}

var result = document.getElementById('result');
var r = document.createElement('p');
select.addEventListener('input',(value)=>{
  r.textContent = select.value
});
result.appendChild(r);
