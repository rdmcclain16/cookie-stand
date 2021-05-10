const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const seattle = {
  locationName: 'Seattle',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerSale: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour))
    }  
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++) {
    const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale)
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
    } 
  },
  render() {
    this.calcCookiesEachHour();
    // grabbed the id from the dom <ul> </ul>
    const unorderedList = document.getElementById('seattle')
    for (let i = 0; i < hours.length; i++) {
      // <li>6am: cookies</li>
      const listItem = document.createElement('li')
      // 6am: 16 cookies
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies'
      unorderedList.appendChild(listItem);
      
      console.log(listItem)
    }
    // <li>Total: 34543 cookies</li>
    const listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(listItem);
  }
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const allShops = [
//   seattle
//   // tokyo, 
//   // dubai, 
//   // paris, 
//   // lima
// ];
// (function renderAllShops() {
//   for (let i = 0; i < allShops.length; i++) {
//     allShops[i].render();
//   } 
// })()
const tokyo = {
    city: 'Tokyo',
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    avgCookiesPerSale: 1.2,
    customersEachHour:[],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustomersEachHour: function() {
      for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour))
      }  
    },
    calcCookiesEachHour: function() {
      this.calcCustomersEachHour();
      for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale)
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
      } 
    },
    render() {
      this.calcCookiesEachHour();
      // grabbed the id from the dom <ul> </ul>
      const unorderedList = document.getElementById('tokyo')
      for (let i = 0; i < hours.length; i++) {
        // <li>6am: cookies</li>
        const listItem = document.createElement('li')
        // 6am: 16 cookies
        listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies'
        unorderedList.appendChild(listItem);
        
        console.log(listItem)
      }
      // <li>Total: 34543 cookies</li>
      const listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
      unorderedList.appendChild(listItem);
    }
  };
  
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
//   const allShops = [
//     seattle,
//     tokyo, 
//     // dubai, 
//     // paris, 
//     // lima
//   ];
  
//   (function renderAllShops() {
//     for (let i = 0; i < allShops.length; i++) {
//       allShops[i].render();
//     } 
//   })()
const dubai = {
    city: 'Dubai',
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    avgCookiesPerSale: 3.7,
    customersEachHour:[],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustomersEachHour: function() {
      for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour))
      }  
    },
    calcCookiesEachHour: function() {
      this.calcCustomersEachHour();
      for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale)
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
      } 
    },
    render() {
      this.calcCookiesEachHour();
      // grabbed the id from the dom <ul> </ul>
      const unorderedList = document.getElementById('dubai')
      for (let i = 0; i < hours.length; i++) {
        // <li>6am: cookies</li>
        const listItem = document.createElement('li')
        // 6am: 16 cookies
        listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies'
        unorderedList.appendChild(listItem);
        
        console.log(listItem)
      }
      // <li>Total: 34543 cookies</li>
      const listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
      unorderedList.appendChild(listItem);
    }
  };
  
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
//   const allShops = [
//     seattle,
//     tokyo, 
//     dubai, 
//     // paris, 
//     // lima
//   ];
  
//   (function renderAllShops() {
//     for (let i = 0; i < allShops.length; i++) {
//       allShops[i].render();
//     } 
//   })()

const paris = {
    city: 'Paris',
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    avgCookiesPerSale: 2.3,
    customersEachHour:[],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustomersEachHour: function() {
      for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour))
      }  
    },
    calcCookiesEachHour: function() {
      this.calcCustomersEachHour();
      for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale)
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
      } 
    },
    render() {
      this.calcCookiesEachHour();
      // grabbed the id from the dom <ul> </ul>
      const unorderedList = document.getElementById('paris')
      for (let i = 0; i < hours.length; i++) {
        // <li>6am: cookies</li>
        const listItem = document.createElement('li')
        // 6am: 16 cookies
        listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies'
        unorderedList.appendChild(listItem);
        
        console.log(listItem)
      }
      // <li>Total: 34543 cookies</li>
      const listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
      unorderedList.appendChild(listItem);
    }
  };
  
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
//   const allShops = [
//     seattle,
//     tokyo, 
//     dubai, 
//     paris, 
//     // lima
  // ];
  
  // (function renderAllShops() {
  //   for (let i = 0; i < allShops.length; i++) {
  //     allShops[i].render();
  //   } 
  // })()
const lima = {
    city: 'Lima',
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    avgCookiesPerSale: 4.6,
    customersEachHour:[],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustomersEachHour: function() {
      for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour))
      }  
    },
    calcCookiesEachHour: function() {
      this.calcCustomersEachHour();
      for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale)
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
      } 
    },
    render() {
      this.calcCookiesEachHour();
      // grabbed the id from the dom <ul> </ul>
      const unorderedList = document.getElementById('lima')
      for (let i = 0; i < hours.length; i++) {
        // <li>6am: cookies</li>
        const listItem = document.createElement('li')
        // 6am: 16 cookies
        listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies'
        unorderedList.appendChild(listItem);
        
        console.log(listItem)
      }
      // <li>Total: 34543 cookies</li>
      const listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
      unorderedList.appendChild(listItem);
    }
  };
  
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const allShops = [
    seattle,
    tokyo, 
    dubai, 
    paris, 
    lima
  ];
  
  (function renderAllShops() {
    for (let i = 0; i < allShops.length; i++) {
      allShops[i].render();
    } 
  })()

