/**
 * Device status codes representing various alarms or auxiliary states.
 *
 * @typedef {number} EDeviceStatus
 * @property {number} NoAuxiliary - No auxiliary event.
 * @property {number} ManDown - Man Down alarm detected.
 * @property {number} DownlinkPosition - Downlink-for-positioning event.
 * @property {number} AlertAlarm - General alert alarm triggered.
 * @property {number} SOSAlarm - SOS alarm triggered.
 */
export const EDeviceStatus = {
	NoAuxiliary: 0,
	ManDown: 1,
	DownlinkPosition: 2,
	AlertAlarm: 3,
	SOSAlarm: 4,
} as const;

export type EDeviceStatus = (typeof EDeviceStatus)[keyof typeof EDeviceStatus];
/**
 * Possible charging states reported by the device.
 *
 * @typedef {string} EChargingStatus
 * @property {string} CHARGING - Device is currently charging.
 * @property {string} NO_CHARGING - Device is not charging.
 */
export const EChargingStatus = {
	CHARGING: "Charging",
	NO_CHARGING: "No charging",
} as const;

export type EChargingStatus =
	(typeof EChargingStatus)[keyof typeof EChargingStatus];

/**
 * Units in which temperature can be represented.
 *
 * @typedef {number} ETemperatureUnit
 * @property {number} CELSIUS - Celsius scale (°C).
 * @property {number} FAHRENHEIT - Fahrenheit scale (°F).
 */
export const ETemperatureUnit = {
	CELSIUS: 0,
	FAHRENHEIT: 1,
} as const;

export type ETemperatureUnit =
	(typeof ETemperatureUnit)[keyof typeof ETemperatureUnit];
