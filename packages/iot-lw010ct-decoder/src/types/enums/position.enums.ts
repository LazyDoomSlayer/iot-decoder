export const EEventType = {
	StartMovement: 0,
	InMovement: 1,
	EndOfMovement: 2,
	ManDownStart: 3,
	ExitManDown: 4,
	SOSStart: 5,
	SOSEnd: 6,
	AlertAlarmStart: 7,
	AlertAlarmEnd: 8,
	Reserved9: 9,
	Reserved10: 10,
	DownlinkForPositioning: 11,
	TemperatureHigh: 12,
	TemperatureLow: 13,
	LightIntensityOverThreshold: 14,
} as const;

export type EEventType = (typeof EEventType)[keyof typeof EEventType];

/**
 * Position‐type codes for different operating contexts.
 *
 * @typedef {number} EPositionType
 * @property {number} WorkingMode - Standard working mode position.
 * @property {number} ManDown - Position requested due to Man Down alarm.
 * @property {number} DownlinkForPositioning - Position requested by downlink command.
 * @property {number} AlertPositioning - Position requested due to alert alarm.
 * @property {number} SOSPositioning - Position requested due to SOS alarm.
 */
export const EPositionType = {
	WorkingMode: 0,
	ManDown: 1,
	DownlinkForPositioning: 2,
	AlertPositioning: 3,
	SOSPositioning: 4,
} as const;

export type EPositionType = (typeof EPositionType)[keyof typeof EPositionType];

/**
 * Assistance types indicating why a position fix was requested.
 *
 * @typedef {number} EAssistanceType
 * @property {number} NoAuxiliary - No auxiliary reason.
 * @property {number} ManDown - Position fix requested due to Man Down alarm.
 * @property {number} DownlinkForPositioning - Triggered by downlink command.
 * @property {number} AlertAlarm - Triggered by alert alarm.
 * @property {number} SOSAlarm - Triggered by SOS alarm.
 */
export const EAssistanceType = {
	NoAuxiliary: 0,
	ManDown: 1,
	DownlinkForPositioning: 2,
	AlertAlarm: 3,
	SOSAlarm: 4,
} as const;

export type EAssistanceType =
	(typeof EAssistanceType)[keyof typeof EAssistanceType];

/**
 * Enum of all possible position failure codes.
 *
 * @typedef {number} PositionFailedCode
 * @property {number} BluetoothTimeNotEnough - Bluetooth time insufficient.
 * @property {number} BluetoothStrategyTimeout - Bluetooth strategy timeout.
 * @property {number} GPSTimeNotEnough - GPS time insufficient.
 * @property {number} GPSStrategyTimeout - GPS strategy timeout.
 * @property {number} GPSAidingTimeout - GPS aiding timeout.
 * @property {number} InterruptedByEndOfMovement - Interrupted by end of movement.
 * @property {number} InterruptedByStartOfMovement - Interrupted by start of movement.
 * @property {number} InterruptedByManDown - Interrupted by Man Down.
 * @property {number} InterruptedByDownlinkPositioning - Interrupted by downlink request.
 * @property {number} InterruptedByAlarm - Interrupted by alarm.
 */
export const PositionFailedCode = {
	BluetoothTimeNotEnough: 3,
	BluetoothStrategyTimeout: 4,
	GPSTimeNotEnough: 6,
	GPSStrategyTimeout: 7,
	GPSAidingTimeout: 10,
	InterruptedByEndOfMovement: 11,
	InterruptedByStartOfMovement: 12,
	InterruptedByManDown: 13,
	InterruptedByDownlinkPositioning: 14,
	InterruptedByAlarm: 15,
} as const;

export type PositionFailedCode =
	(typeof PositionFailedCode)[keyof typeof PositionFailedCode];

/**
 * Symbols indicating positioning method success.
 *
 * @typedef {string} EPositionSymbol
 * @property {string} BLUETOOTH - Bluetooth positioning success.
 * @property {string} GPS - GPS positioning success.
 */
export const EPositionSymbol = {
	BLUETOOTH: "Bluetooth positioning success",
	GPS: "GPS positioning success",
} as const;

export type EPositionSymbol =
	(typeof EPositionSymbol)[keyof typeof EPositionSymbol];
