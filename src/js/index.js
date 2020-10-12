import "../sass/styles.scss";
import $ from 'jquery';
import Popper from 'popper.js';
import moment from "moment";

console.log(moment().format("MMMM Do YYYY"));
console.log(moment("20111031", "YYYYMMDD").fromNow()); // 8 years ago
console.log(moment().subtract(10, "days").calendar()); // 05/27/2019
