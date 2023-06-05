
function Food(foodName, foodType, price) {
    this.foodID = generateFoodID();
    this.foodName = foodName;
    this.foodType = foodType;
    this.price = price;
  }
  
 
  function generateFoodID() {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  
  Food.prototype.render = function () {
    const table = document.getElementById('food-table');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${this.foodID}</td>
      <td>${this.foodName}</td>
      <td>${this.foodType}</td>
      <td>${this.price}</td>
    `;
    table.querySelector('tbody').appendChild(row);
  };
  
  
  document.getElementById('food-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const foodName = document.getElementById('food-name').value;
    const foodType = document.getElementById('food-type').value;
    const price = document.getElementById('food-price').value;
    const food = new Food(foodName, foodType, price);
    food.render();
    this.reset();
  });