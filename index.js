"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
var WeatherOrNot = /** @class */ (function () {
    function WeatherOrNot(apiKey) {
        this.apiKey = apiKey;
        this.zip = '';
        this.cityName = '';
        this.cityID = '';
        this.lat = 0;
        this.lon = 0;
        this.units = 'metric';
    }
    // Get the openweather api url for this object for a specific location type
    WeatherOrNot.prototype.getUrlString = function (locationType) {
        var locationString = '';
        switch (locationType) {
            case 'zip':
                locationString = "zip=" + this.zip;
                break;
            case 'cityID':
                locationString = "id=" + this.cityID;
                break;
            case 'geocoordinates':
                locationString = "lat=" + this.lat + "&lon=" + this.lon;
                break;
            case 'cityName':
            default:
                locationString = "q=" + this.cityName;
        }
        return "https://api.openweathermap.org/data/2.5/weather?" + locationString + "&appid=" + this.apiKey + "&units=" + this.units;
    };
    WeatherOrNot.prototype.reqApi = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var path, res, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = url;
                        return [4 /*yield*/, node_fetch_1["default"](path)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    WeatherOrNot.prototype.weatherForCity = function () {
        return this.reqApi(this.getUrlString('cityName'));
    };
    WeatherOrNot.prototype.weatherForId = function () {
        return this.reqApi(this.getUrlString('cityID'));
    };
    WeatherOrNot.prototype.weatherForGeo = function () {
        return this.reqApi(this.getUrlString('geocoordinates'));
    };
    WeatherOrNot.prototype.weatherForZip = function () {
        return this.reqApi(this.getUrlString('zip'));
    };
    WeatherOrNot.prototype.getWeatherUpdates = function (callback) {
        var _this = this;
        callback(this.weatherForZip());
        this.interval = setInterval(function () {
            callback(_this.weatherForZip());
        }, 10000); // 1800000
    };
    WeatherOrNot.prototype.endWeatherUpdates = function () {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
            return 'Interval Stopped Successfully';
        }
        return 'No Interval to Stop';
    };
    return WeatherOrNot;
}());
exports.WeatherOrNot = WeatherOrNot;
var w = new WeatherOrNot('20c0cb1514e2cf3462e90d9133dcfa1d');
w.zip = '22801';
w.weatherForZip().then(function (weather) { console.log(weather); });
