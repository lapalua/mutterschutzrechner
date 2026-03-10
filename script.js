
document.getElementById("calculate-btn").addEventListener("click", function(){

const etDate = new Date(document.getElementById("et-date").value);

if(!etDate){
return;
}

let startDate = new Date(etDate);
startDate.setDate(startDate.getDate() - 42);

let endDate = new Date(etDate);
endDate.setDate(endDate.getDate() + 56);

document.getElementById("results").innerHTML =
"Beginn: " + startDate.toLocaleDateString() +
"<br>Ende: " + endDate.toLocaleDateString();

});
