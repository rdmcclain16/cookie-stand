var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

function random(min, max) {
    return Math.floor(Math.random() * 65) + 23;}

const seattle = {
    city: 'Seattle',
    minGuestPerHr: 23,
    maxGuestPerHr: 65,
    avgCookiePerGuest: 6.3,
    guestEachHour:[],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcGuestsPerHr: function() {
        for(let i = 0; i < hours.length; i++) {
        this.guestEachHr.push(random(this.minGuestPerHr, this.maxGuestPerHr))
        }
    },

    calcCookiesPerHr: function() {
        this.calcGuestsPerHr();
        for(let i = 0; i < hours.length; i++) {
            const oneHour = Math.ceil(this.guestEachHour[i] * this.avgCookiePerGuest)
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies += oneHour;
        }
    },
   render() {
       this.calcCookiesPerHr();
       const unorderedList = document.getElementById('seattle')
       for(let i = 0; i < hours.length; i++) {
       const listItem = document.createElement('li')
       listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies '
        unorderedList.appendChild(listItem);
   
         console.log(listItem)
       }

       const listItem = document.createElement('li');
       listItem.textContent = "Total: " + this.totalDailyCookies + ' cookies';
       unorderedList.appendChild(listItem);
    }
};

    function random(min, max) {
        return Math.floor(math.random() * (max - min + 1)) + min;
    }

    const allStores = [
        seattle
    ];

    function renderAllStores() {
        for(let i = 0; i < allStores.length; i++) {
            allStores[i].render();
        }
    })()
 

//   seattle.randomCookies()



// const tokyo = {
//     city: 'Tokyo',
//     minGuestPerHr: 3,
//     maxGuestPerHr: 24,
//     avgCookiePerGuest: 1.2,
//     guestEachHour:[],
//     cookiesEachHour: [],
//     totalDailyCookies: 0,

//     randomCookies: function() {
//         console.log(Math.floor(Math.random() * 24) + 3);
//     } 
// } 
//     tokyo.randomCookies()


    
// //     render(); {

// //      }    

// const dubai = {
//     city: 'Dubai',
//     minGuestPerHr: 11,
//     maxGuestPerHr: 38,
//     avgCookiePerGuest: 3.7,
//     guestEachHour:[],
//     cookiesEachHour: [],
//     totalDailyCookies: 0,

//     randomCookies: function() {
//         console.log(Math.floor(Math.random() * 38) + 11);
//     }
// } 
//     dubai.randomCookies()

// // render(); {

// // }



// const paris = {
//     city: 'Paris',
//     minGuestPerHr: 20,
//     maxGuestPerHr: 38,
//     avgCookiePerGuest: 2.3,
//     guestEachHour:[],
//     cookiesEachHour: [],
//     totalDailyCookies: 0,
    
//     randomCookies: function() {
//         console.log(Math.floor(Math.random() * 38) + 23);
//     }
// } 
//     paris.randomCookies()

// //     render(); {

// //      }    

// const lima = {
//     city: 'Lima',
//     minGuestPerHr: 2,
//     maxGuestPerHr: 16,
//     avgCookiePerGuest: 4.6,
//     guestEachHour:[],
//     cookiesEachHour: [],
//     totalDailyCookies: 0,
//     randomCookies: function() {
//         console.log(Math.floor(Math.random() * 16) + 2);
//     }
// } 
//     lima.randomCookies()

// //     render(); {

//      }