var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

function random(min, max) {
    return Math.floor(Math.random() * max) + min;}

const seattle = {
    city: 'Seattle',
    minGuestPerHr: 23,
    maxGuestPerHr: 65,
    avgCookiePerGuest: 6.3,
    guestEachHour:[],
    cookiesEachHour: [],
    totalDailyCookies: 0,

    randomCookies: random(this.minGuestPerHr, this.maxGuestPerHr),
    randomGuests: random(this.minGuestPerHr, this.maxGuestPerHr),


    calcGuestEachHour: function() {
        for(var i = 0; i < hours.length; i++) {
        return seattle.randomCookies.render;
        }    
    } 
}
    console.log(seattle.randomCookies());

const tokyo = {
    city: 'Tokyo',
    minGuestPerHr: 3,
    maxGuestPerHr: 24,
    avgCookiePerGuest: 1.2,
    guestEachHour:[],
    cookiesEachHour: [],
    totalDailyCookies: 0,




    calcGuestEachHour: function() {
        console.log(this.randomGuests + this.avgCookiePerGuest)
        return Math.random()
    },
    calcCookiesEachHour: function() {

    },

    render() {

     }    
}
const dubai = {
    city: 'Dubai',
    minGuestPerHr: 11,
    maxGuestPerHr: 38,
    avgCookiePerGuest: 3.7,
    guestEachHour:[],
    cookiesEachHour: [],
    totalDailyCookies: 0,

    randomCookies: function() {
        console.log(Math.floor(Math.random() * this.maxGuestPerHr) + this.minGuestPerHr);
    },
    randomGuests: function() {
        console.log(Math.floor(Math.random() * this.maxGuestPerHr) + this.minGuestPerHr);

    },

render() {

}
};


const paris = {
    city: 'Paris',
    minGuestPerHr: 20,
    maxGuestPerHr: 38,
    avgCookiePerGuest: 2.3,
    guestEachHour:[],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcGuestEachHour: function() {
        console.log(this.randomGuests + this.avgCookiePerGuest)
        return Math.random()
    },
    calcCookiesEachHour: function() {

    },

    render() {

     }    
}
const lima = {
    city: 'Lima',
    minGuestPerHr: 2,
    maxGuestPerHr: 16,
    avgCookiePerGuest: 4.6,
    guestEachHour:[],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcGuestEachHour: function() {
        console.log(this.randomGuests + this.avgCookiePerGuest)
        return Math.random()
    },
    calcCookiesEachHour: function() {

    },

    render() {

     }    
}