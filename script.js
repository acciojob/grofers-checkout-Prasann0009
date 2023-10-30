const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let sum = 0;

const getSum = () => {
//Add your code here
 const prices = document.querySelectorAll(".price");
 
 prices.forEach(priceElement => {
  const price = parseInt(priceElement.textContent);
  sum += price;
 });

 const row = document.createElement("tr");
const col = document.createElement("td");
col.innerText = sum;
col.setAttribute('id','ans');
row.appendChild(col);
const table = document.querySelector("table");

table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
