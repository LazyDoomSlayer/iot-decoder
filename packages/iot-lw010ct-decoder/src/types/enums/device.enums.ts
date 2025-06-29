/**
 * Operation modes (fPort 1–5) indicating the device's configuration for positional and movement reporting.
 *
 * @typedef {number} EOperationMode
 * @property {number} Standby - Standby mode: no active reporting.
 * @property {number} Timing - Timing mode: report based on timer intervals.
 * @property {number} Periodic - Periodic mode: periodic position reporting.
 * @property {number} StationaryInMotion - Stationary-in-motion mode: detects stationary within motion.
 * @property {number} StartOfMovementInMotion - Start-of-movement in-motion: initial movement event.
 * @property {number} MovementInMotion - Movement in-motion: ongoing movement reporting.
 * @property {number} EndOfMovementInMotion - End-of-movement in-motion: movement end event.
 * @property {number} TimingPlusPeriod - Timing + Period mode: combination of timing and periodic.
 */
export const EOperationMode = {
	Standby: 0,
	Timing: 1,
	Periodic: 2,
	StationaryInMotion: 3,
	StartOfMovementInMotion: 4,
	MovementInMotion: 5,
	EndOfMovementInMotion: 6,
	TimingPlusPeriod: 7,
} as const;

export type EOperationMode =
	(typeof EOperationMode)[keyof typeof EOperationMode];

/**
 * Shutdown types (fPort=2) indicating how the device was powered off.
 *
 * @typedef {number} EShutdownType
 * @property {number} BluetoothCommand - Turned off via Bluetooth command.
 * @property {number} LoRaWANCommand - Turned off via LoRaWAN command.
 * @property {number} MagneticSwitch - Turned off via magnetic switch.
 * @property {number} BatteryRunOut - Device turned off due to battery exhaustion.
 */
export const EShutdownType = {
	BluetoothCommand: 0,
	LoRaWANCommand: 1,
	MagneticSwitch: 2,
	BatteryRunOut: 3,
} as const;

export type EShutdownType = (typeof EShutdownType)[keyof typeof EShutdownType];

/**
 * Low‐power thresholds reported by the device.
 *
 * @typedef {number} ELowPowerPercent
 * @property {number} Ten - 10%
 * @property {number} Twenty - 20%
 * @property {number} Thirty - 30%
 * @property {number} Forty - 40%
 * @property {number} Fifty - 50%
 * @property {number} Sixty - 60%
 */
export const ELowPowerPercent = {
	Ten: 0,
	Twenty: 1,
	Thirty: 2,
	Forty: 3,
	Fifty: 4,
	Sixty: 5,
} as const;

export type ELowPowerPercent =
	(typeof ELowPowerPercent)[keyof typeof ELowPowerPercent];

/**
 * Types of events the device can report.
 *
 * @typedef {number} EEventType
 * @property {number} StartMovement - Movement started.
 * @property {number} InMovement - Movement ongoing.
 * @property {number} EndOfMovement - Movement ended.
 * @property {number} ManDownStart - Man Down alarm triggered.
 * @property {number} ExitManDown - Man Down condition cleared.
 * @property {number} SOSStart - SOS alarm started.
 * @property {number} SOSEnd - SOS alarm ended.
 * @property {number} AlertAlarmStart - Alert alarm started.
 * @property {number} AlertAlarmEnd - Alert alarm ended.
 * @property {number} Reserved9 - Reserved (unused).
 * @property {number} Reserved10 - Reserved (unused).
 * @property {number} DownlinkForPositioning - Triggered by downlink.
 * @property {number} TemperatureHigh - High temperature detected.
 * @property {number} TemperatureLow - Low temperature detected.
 * @property {number} LightIntensityOverThreshold - Brightness threshold exceeded.
 */
