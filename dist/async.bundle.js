"use strict";
(self["webpackChunkodin_weather"] = self["webpackChunkodin_weather"] || []).push([["async"],{

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


async function getForecast(loc) {

        const location = "http://api.weatherapi.com/v1/forecast.json?key=e6dc67c92e1b4a5a93750817231505&q=" + loc + "&days=3&aqi=no&alerts=no";
        
        try {
            const fetchResponse = await fetch(location);
            const forecast = await fetchResponse.json();
            const object = _logic_js__WEBPACK_IMPORTED_MODULE_0__.myWeatherData(forecast)
            console.log(object)
        } catch (e) {
            console.log(e)
        }
      
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/async.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9DOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9EQUFtQjtBQUM5QztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9hc3luYy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbG9naWMgZnJvbSAnLi9sb2dpYy5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxvYykge1xuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWU2ZGM2N2M5MmUxYjRhNWE5Mzc1MDgxNzIzMTUwNSZxPVwiICsgbG9jICsgXCImZGF5cz0zJmFxaT1ubyZhbGVydHM9bm9cIjtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobG9jYXRpb24pO1xuICAgICAgICAgICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBmZXRjaFJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IGxvZ2ljLm15V2VhdGhlckRhdGEoZm9yZWNhc3QpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvYmplY3QpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIH1cbiAgICAgIFxufVxuXG5cblxuZXhwb3J0IHtnZXRGb3JlY2FzdH0iLCJpbXBvcnQgKiBhcyBhc3luYyBmcm9tICcuL2FzeW5jLmpzJ1xuXG5mdW5jdGlvbiBteVdlYXRoZXJEYXRhKGRhdGEpIHtcbiAgICBcbiAgICBjb25zdCBteWRhdGEgPSB7XG4gICAgICAgIHRlbXA6IGRhdGEuY3VycmVudC50ZW1wX2YsXG4gICAgICAgIHdpbmQ6ICBkYXRhLmN1cnJlbnQud2luZF9kaXIsXG4gICAgICAgIGh1bTogZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICBmZWVsczogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgICAgICBpY29uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gICAgICAgIHRleHQ6IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgbG9jYXRpb246IGRhdGEubG9jYXRpb24ubmFtZVxuICAgIH1cblxuICAgIHJldHVybiBteWRhdGFcblxufVxuXG5cblxuXG5leHBvcnQge215V2VhdGhlckRhdGF9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9