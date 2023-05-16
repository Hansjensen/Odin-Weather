"use strict";
(self["webpackChunkodin_weather"] = self["webpackChunkodin_weather"] || []).push([["logic"],{

/***/ "./src/async.js":
/*!**********************!*\
  !*** ./src/async.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getForecast": () => (/* binding */ getForecast)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _domStuff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domStuff.js */ "./src/domStuff.js");



async function getForecast(loc) {

        const location = "http://api.weatherapi.com/v1/forecast.json?key=e6dc67c92e1b4a5a93750817231505&q=" + loc + "&days=3&aqi=no&alerts=no";
        
        try {
            _domStuff_js__WEBPACK_IMPORTED_MODULE_1__.loading()
            const fetchResponse = await fetch(location);
            const forecast = await fetchResponse.json();
            const object = _logic_js__WEBPACK_IMPORTED_MODULE_0__.myWeatherData(forecast)
            _domStuff_js__WEBPACK_IMPORTED_MODULE_1__.domRequest(object);
        } catch (e) {
            _domStuff_js__WEBPACK_IMPORTED_MODULE_1__.error()
            console.log(e)
        }
      
}





/***/ }),

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


/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myWeatherData": () => (/* binding */ myWeatherData)
/* harmony export */ });
/* harmony import */ var _async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async.js */ "./src/async.js");


function myWeatherData(data) {
    
    const mydata = {
        temp: data.current.temp_f,
        wind:  data.current.wind_dir,
        hum: data.current.humidity,
        feels: data.current.feelslike_f,
        icon: data.current.condition.icon,
        text: data.current.condition.text,
        location: data.location.name
    }

    return mydata

}






/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/logic.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNNOztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFnQjtBQUM1QjtBQUNBO0FBQ0EsMkJBQTJCLG9EQUFtQjtBQUM5QyxZQUFZLG9EQUFtQjtBQUMvQixVQUFVO0FBQ1YsWUFBWSwrQ0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9hc3luYy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvZG9tU3R1ZmYuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2xvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxvZ2ljIGZyb20gJy4vbG9naWMuanMnO1xuaW1wb3J0ICogYXMgZG9tU3R1ZmYgZnJvbSAnLi9kb21TdHVmZi5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxvYykge1xuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWU2ZGM2N2M5MmUxYjRhNWE5Mzc1MDgxNzIzMTUwNSZxPVwiICsgbG9jICsgXCImZGF5cz0zJmFxaT1ubyZhbGVydHM9bm9cIjtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb21TdHVmZi5sb2FkaW5nKClcbiAgICAgICAgICAgIGNvbnN0IGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsb2NhdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmb3JlY2FzdCA9IGF3YWl0IGZldGNoUmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gbG9naWMubXlXZWF0aGVyRGF0YShmb3JlY2FzdClcbiAgICAgICAgICAgIGRvbVN0dWZmLmRvbVJlcXVlc3Qob2JqZWN0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZG9tU3R1ZmYuZXJyb3IoKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuICAgICAgXG59XG5cblxuXG5leHBvcnQge2dldEZvcmVjYXN0fSIsImZ1bmN0aW9uIGRvbVJlcXVlc3Qod2VhdGhlcil7XG4gICAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJykudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmxvY2F0aW9uO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25kaXRpb24nKS50ZXh0Q29udGVudCA9IHdlYXRoZXIudGV4dDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpLnRleHRDb250ZW50ID0gd2VhdGhlci50ZW1wICsgJ8KwJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uSW1nJykuc3JjID0gd2VhdGhlci5pY29uO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVscycpLnRleHRDb250ZW50ID0gd2VhdGhlci5mZWVscyArICfCsCc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bScpLnRleHRDb250ZW50ID0gd2VhdGhlci5odW0gKyAnJSc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bVRpdCcpLnRleHRDb250ZW50ID1cIkh1bWlkaXR5XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzVGl0JykudGV4dENvbnRlbnQgPVwiRmVlbHMgTGlrZVwiO1xuXG4gICAgY29uc29sZS5sb2coJ2trJylcblxuICAgIFxufVxuXG5mdW5jdGlvbiBsb2FkaW5nKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpLnRleHRDb250ZW50ID0gXCJMb2FkaW5nLi4uXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmRpdGlvbicpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uSW1nJykuc3JjID0gXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHMnKS50ZXh0Q29udGVudCA9XCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtJykudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1UaXQnKS50ZXh0Q29udGVudCA9XCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNUaXQnKS50ZXh0Q29udGVudCA9XCJcIjtcblxufVxuXG5mdW5jdGlvbiBlcnJvcigpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKS50ZXh0Q29udGVudCA9IFwiTm90IEZvdW5kXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmRpdGlvbicpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uSW1nJykuc3JjID0gXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHMnKS50ZXh0Q29udGVudCA9XCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtJykudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1UaXQnKS50ZXh0Q29udGVudCA9XCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNUaXQnKS50ZXh0Q29udGVudCA9XCJcIjtcblxufVxuZXhwb3J0IHtkb21SZXF1ZXN0LCBsb2FkaW5nLCBlcnJvcn0iLCJpbXBvcnQgKiBhcyBhc3luYyBmcm9tICcuL2FzeW5jLmpzJ1xuXG5mdW5jdGlvbiBteVdlYXRoZXJEYXRhKGRhdGEpIHtcbiAgICBcbiAgICBjb25zdCBteWRhdGEgPSB7XG4gICAgICAgIHRlbXA6IGRhdGEuY3VycmVudC50ZW1wX2YsXG4gICAgICAgIHdpbmQ6ICBkYXRhLmN1cnJlbnQud2luZF9kaXIsXG4gICAgICAgIGh1bTogZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICBmZWVsczogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgICAgICBpY29uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gICAgICAgIHRleHQ6IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgbG9jYXRpb246IGRhdGEubG9jYXRpb24ubmFtZVxuICAgIH1cblxuICAgIHJldHVybiBteWRhdGFcblxufVxuXG5cblxuXG5leHBvcnQge215V2VhdGhlckRhdGF9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9