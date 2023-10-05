document.getElementById('calcular').addEventListener('click', function(){

    const num1 = parseFloat(document.getElementById('n1').value);
    const num2 = parseFloat(document.getElementById('n2').value);
    const num3 = parseFloat(document.getElementById('n3').value);
   
if(isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 === 0){
    document.getElementById('x').textContent = 'Invalído';

    return;
}else{

    let result = (num3 * num2) / num1;
if(Number.isInteger(result)){
    document.getElementById('x').textContent = result;
}else{
    document.getElementById('x').textContent = result.toFixed(2).replace('.', ',');
}}
});