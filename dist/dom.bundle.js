"use strict";
(self["webpackChunkodin_weather"] = self["webpackChunkodin_weather"] || []).push([["dom"],{

/***/ "./src/domStuff.js":
/*!*************************!*\
  !*** ./src/domStuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domRequest": () => (/* binding */ domRequest),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "loading": () => (/* binding */ loading)
/* harmony export */ });
function domRequest(weather){
    
    document.getElementById('location').textContent = weather.location;
    document.getElementById('condition').textContent = weather.text;
    document.getElementById('temp').textContent = weather.temp + '°';
    document.getElementById('conImg').src = weather.icon;
    document.getElementById('feels').textContent = weather.feels + '°';
    document.getElementById('hum').textContent = weather.hum + '%';
    document.getElementById('humTit').textContent ="Humidity";
    document.getElementById('feelsTit').textContent ="Feels Like";

    console.log('kk')

    
}

function loading() {
    document.getElementById('location').textContent = "Loading...";
    document.getElementById('condition').textContent = "";
    document.getElementById('temp').textContent = "";
    document.getElementById('conImg').src = "";
    document.getElementById('feels').textContent ="";
    document.getElementById('hum').textContent = "";
    document.getElementById('humTit').textContent ="";
    document.getElementById('feelsTit').textContent ="";

}

function error() {
    document.getElementById('location').textContent = "Not Found";
    document.getElementById('condition').textContent = "";
    document.getElementById('temp').textContent = "";
    document.getElementById('conImg').src = "";
    document.getElementById('feels').textContent ="";
    document.getElementById('hum').textContent = "";
    document.getElementById('humTit').textContent ="";
    document.getElementById('feelsTit').textContent ="";

}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/domStuff.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvZG9tU3R1ZmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZG9tUmVxdWVzdCh3ZWF0aGVyKXtcbiAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKS50ZXh0Q29udGVudCA9IHdlYXRoZXIubG9jYXRpb247XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmRpdGlvbicpLnRleHRDb250ZW50ID0gd2VhdGhlci50ZXh0O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wJykudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnRlbXAgKyAnwrAnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25JbWcnKS5zcmMgPSB3ZWF0aGVyLmljb247XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzJykudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmZlZWxzICsgJ8KwJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtJykudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmh1bSArICclJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtVGl0JykudGV4dENvbnRlbnQgPVwiSHVtaWRpdHlcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNUaXQnKS50ZXh0Q29udGVudCA9XCJGZWVscyBMaWtlXCI7XG5cbiAgICBjb25zb2xlLmxvZygna2snKVxuXG4gICAgXG59XG5cbmZ1bmN0aW9uIGxvYWRpbmcoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJykudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcuLi5cIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZGl0aW9uJykudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wJykudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25JbWcnKS5zcmMgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVscycpLnRleHRDb250ZW50ID1cIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW0nKS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bVRpdCcpLnRleHRDb250ZW50ID1cIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVsc1RpdCcpLnRleHRDb250ZW50ID1cIlwiO1xuXG59XG5cbmZ1bmN0aW9uIGVycm9yKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpLnRleHRDb250ZW50ID0gXCJOb3QgRm91bmRcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZGl0aW9uJykudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wJykudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25JbWcnKS5zcmMgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVscycpLnRleHRDb250ZW50ID1cIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW0nKS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bVRpdCcpLnRleHRDb250ZW50ID1cIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVsc1RpdCcpLnRleHRDb250ZW50ID1cIlwiO1xuXG59XG5leHBvcnQge2RvbVJlcXVlc3QsIGxvYWRpbmcsIGVycm9yfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==