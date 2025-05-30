"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crew_routes_js_1 = require("./crew-routes.js");
const gearItem_routes_js_1 = require("./gearItem-routes.js");
const gearList_routes_js_1 = require("./gearList-routes.js");
const meal_routes_js_1 = require("./meal-routes.js");
const schedule_routes_js_1 = require("./schedule-routes.js");
const trip_routes_js_1 = require("./trip-routes.js");
const user_routes_js_1 = require("./user-routes.js");
const router = (0, express_1.Router)();
router.use("/trips/crew", crew_routes_js_1.crewRouter);
router.use("/gear", gearList_routes_js_1.gearListRouter);
router.use("/meals", meal_routes_js_1.mealRouter);
router.use("/trips", trip_routes_js_1.tripRouter);
router.use("/users", user_routes_js_1.userRouter);
router.use("/gear/:id", gearItem_routes_js_1.gearItemRouter);
router.use("/schedule/:id", schedule_routes_js_1.scheduleRouter);
exports.default = router;
