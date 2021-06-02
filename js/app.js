
'use strict';

const hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let allCookieStands = [];
let newCookieStand = document.getElementById('newCookieStand');

function cookieStand (name, minCustPerHour, maxCustPerHour, cookiesPerSale) {
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.cookiesPerSale = cookiesPerSale;
    this.cookiesPerHr = [];
    this.customersPerHr = [];
    allCookieStands.push(this);
}
new cookieStand('Seattle', '23', '65', '6.3');
new cookieStand('Tokyo', '3', '24', '1.2');
new cookieStand('Dubai', '11', '38', '3.7');
new cookieStand('Paris', '20', '38', '2.3');
new cookieStand('Lima', '2', '16', '4.6');


cookieStand.prototype.calcCustomersPerHr = function() {
  for(let i = 0; i < hours.length; i++) {
      this.customersPerHr.push(Math.floor(Math.random() * (this.maxCustPerHour-this.minCustPerHour+1)+this.minCustPerHour));
  }
};
cookieStand.prototype.calcCookiesPerHr = function() {
  this.calcCustomersPerHr();
  for(let i = 0; i < hours.length; i++) {
this.cookiesPerHr.push(Math.ceil(this.customersPerHr[i] * this.cookiesPerSale))
  }
};
cookieStand.prototype.calcTotalDailyCookies=function() {
  let cookiesTotal = 0;
  for(let i = 0; i < hours.length; i++) {
cookiesTotal += this.cookiesPerHr[i];
  }
  return cookiesTotal;
};
cookieStand.prototype.render = function() {
  this.calcCookiesPerHr();
  let cookieStandTable = document.getElementById('t-body');
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (let i = 0; i < hours.length; i++) {
      let tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesPerHr[i];
      trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.calcTotalDailyCookies();
  trEl.appendChild(tdEl);
  cookieStandTable.appendChild(trEl);
}; 

function tableHead() {
  let cookieStandTable = document.getElementById('t-head');
  let trEl = document.createElement('tr');
  let thEl = document.createElement('th');
  thEl.textContent = ' ';
  trEl.appendChild(thEl);

  for (let i = 0; i < hours.length; i++) {
      thEl = document.createElement('th');
  thEl.textContent = hours[i];
  trEl.appendChild(thEl);
  if (i === hours.length-1) {
      thEl = document.createElement('th');
      thEl.textContent = 'Daily Total';
      trEl.appendChild(thEl);
      cookieStandTable.appendChild(trEl);
      }
  }
}

function renderCookieStand() {
  for (let i = 0; i < allCookieStands.length; i++) {
      allCookieStands[i].render();
  }
}

function totalAtFooter() {
  let standCookiePerHr = [];
  for (let i = 0; i < hours.length; i++) {
      let totalCookiePerHour = 0;
      for (let i = 0; i < allCookieStands.length; i++) {
          totalCookiePerHour = allCookieStands[i].cookiesPerHr[i];
      }
      standCookiePerHr.push(totalCookiePerHour);
  }
let footData = document.getElementById('cookiestand');
let trEl = document.createElement('tr');
trEl.id = 'total-row';
let tdEl = document.createElement('td');
tdEl.textContent = 'Total';
trEl.appendChild(tdEl);
  for (i = 0; i < hours.length; i++) {
  tdEl = document.createElement('td');
  tdEl.textContent = standCookiePerHr[i];
  trEl.appendChild(tdEl);
}
let totalAllStands = 0;
for (i = 0; i < hours.length; i++) {
  totalAllStands = standCookiePerHr[i];
}
tdEl = document.createElement('td');
tdEl.textContent = totalAllStands;
trEl.appendChild(tdEl);

footData.appendChild(trEl);
}


// newCookieStand.addEventListener('submit', handleNewCookieStand);
function handleNewCookieStand(event) {
  event.preventDefault();

  let newName = event.target.name.value;
  let newMinCustPerHour = event.target.minCustPerHour.value;
  let newMaxCustPerHour = event.target.maxCustPerHour.value;
  let newCookiesPerHr = event.target.newCookiesPerHr.value;
  let newInput = new cookieStand(newName, newMinCustPerHour, newMaxCustPerHour, newCookiesPerHr);


  event.target.name.value = null;
  event.target.minSalesPerHour.value = null;
  event.target.maxSalesPerHour.value = null;
  event.target.cookiesPerSale.value = null;

  newInput.render();
  totalAtFooter();
  dupRow();
  }
  
function dupRow() {
  let totalRow = document.getElementById('total-row');
  if (totalRow ) {
  totalRow.remove();
  }
}
tableHead();
renderCookieStand();









// function renderTable() {
//   tbl = document.createElement('table');
//   tbl.id = 'table';
//   const tHead = document.createElement('thead');
//   const tBody = document.createElement('tbody');
//   tBody.id = 't-body';
//   const tFoot = document.createElement('tfoot');
//   tFoot.id = 't-foot';
//   const trEl_one = document.createElement('tr');
//   const thEl_one = document.createElement('th');
//   thEl_one.textContent = '';
//   trEl_one.appendChild(thEl_one);
//   for (let i = 0; i < hours.length; i++) {
//     const thEl_two = document.createElement('th');
//     thEl_two.textContent = hours[i];
//     trEl_one.appendChild(thEl_two);
//   }
//   const thEl_three = document.createElement('th');
//   thEl_three.textContent = 'Totals';
//   trEl_one.appendChild(thEl_three);
//   tHead.appendChild(trEl_one);
//   tbl.appendChild(tHead);
//   tbl.appendChild(tBody);
//   tbl.appendChild(tFoot);
//   document.getElementById('store_data').appendChild(tbl);
// }
// function renderStore(store) {
//   const tableBody = document.getElementById('t-body');
//   const trEl_two = document.createElement('tr');
//   const thEl_four = document.createElement('th');
//   thEl_four.textContent = store.name;
//   trEl_two.id = store.id;
//   trEl_two.appendChild(thEl_four);
//   for (let j = 0; j < hours.length; j++) {
//     const tdEl_one = document.createElement('td');
//     tdEl_one.textContent = store.hourlyCookies[j];
//     trEl_two.appendChild(tdEl_one);
//   }
//   const tdEl_two = document.createElement('td');
//   tdEl_two.textContent = store.dailyCookies;
//   trEl_two.appendChild(tdEl_two);
//   tableBody.appendChild(trEl_two);
// }
// function renderAllStores() {
//   const tBody = document.getElementById('t-body');
//   tBody.innerHTML = '';
//   for (let i = 0; i < shops.length; i++) {
//     renderStore(shops[i]);
//   }
//   renderTotals();
// }
// function renderNew(name, minimum, maximum, average) {
//   new CookieShop(name, minimum, maximum, average);
//   renderAllStores();
// }
// function renderUpdate(shop, min, max, avg) {
//   const trEl = document.getElementById(shop.name.replace(' ', '').toLowerCase());
//   shop.minCustomer = min;
//   shop.maxCustomer = max;
//   shop.avgCustomer = avg;
//   shop.hourlyCookies = [];
//   shop.dailyCookies = 0;
//   shop.generateHourly();
//   for (let i = 0; i < shop.hourlyCookies.length; i++) {
//     trEl.childNodes[i + 1].textContent = shop.hourlyCookies[i];
//   }
//   trEl.childNodes[trEl.childNodes.length - 1].textContent = shop.dailyCookies;
// }
// function renderTotals() {
//   const tFoot = document.getElementById('t-foot');
//   tFoot.innerHTML = '';
//   const trEl = document.createElement('tr');
//   let thEl = document.createElement('th');
//   thEl.textContent = 'Totals';
//   trEl.appendChild(thEl);
//   let total = 0;
//   for (let hourIndex = 0; hourIndex < hours.length; hourIndex++) {
//     let hourlyTotal = 0;
//     for (let shopIndex = 0; shopIndex < shops.length; shopIndex++) {
//       hourlyTotal += shops[shopIndex].hourlyCookies[hourIndex];
//     }
//     thEl = document.createElement('th');
//     thEl.textContent = hourlyTotal;
//     trEl.appendChild(thEl);
//     total += hourlyTotal;
//   }
//   thEl = document.createElement('th');
//   thEl.textContent = total;
//   trEl.appendChild(thEl);
//   tFoot.appendChild(trEl);
// }
// document.getElementById('new-store').addEventListener('submit', function (event) {
//   event.preventDefault();
//   let exists = false;
//   const store = event.target.location.value;
//   const min = parseInt(event.target.min.value);
//   const max = parseInt(event.target.max.value);
//   const avg = parseInt(event.target.avg.value);
//   let i = 0;
//   for (i; i < shops.length; i++) {
//     if (shops[i].id === store.replace(' ', '').toLowerCase()) {
//       exists = true;
//       break;
//     }
//   }
//   if (exists === true) {
//     renderUpdate(shops[i], min, max, avg);
//   } else {
//     renderNew(store, min, max, avg);
//   }
//   event.target.store.value = null;
//   event.target.min.value = null;
//   event.target.max.value = null;
//   event.target.avg.value = null;
// });
// function setup() {
//   renderTable();
//   new CookieShop('Seattle', 23, 65, 6.3, 'seattle');
//   new CookieShop('Tokyo', 3, 24, 1.2, 'seatac');
//   new CookieShop('Dubai', 11, 38, 3.7, 'dubai');
//   new CookieShop('Paris', 20, 38, 2.3, 'paris');
//   new CookieShop('Lima', 2, 16, 4.6, 'lima');
//   renderAllStores();
// }
// setup();



