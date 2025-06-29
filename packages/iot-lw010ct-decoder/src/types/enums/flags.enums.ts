/**
 * Masks used to extract fields from packed payload bytes.
 *
 * @typedef {number} EPayloadMask
 * @property {number} LowNibble - Keep only the lower 4 bits (low nibble).
 * @property {number} SevenBits - Keep 7 bits (e.g. for battery %).
 * @property {number} TwelveBits - Keep 12 bits (e.g. for 12-bit age field).
 */
export const EPayloadMask = {
	LowNibble: 0x0f,
	SevenBits: 0x7f,
	TwelveBits: 0x0fff,
} as const;

export type EPayloadMask = (typeof EPayloadMask)[keyof typeof EPayloadMask];

/**
 * Special flag values used in payloads to indicate “no data”.
 *
 * @typedef {number} EPayloadSentinel
 * @property {number} NoLightData - 0xFFFF: no valid light intensity reading.
 * @property {number} NoTemperatureData - 0x80: temperature sensor disabled.
 */
export const EPayloadSentinel = {
	NoLightData: 0xffff,
	NoTemperatureData: 0x80,
} as const;

export type EPayloadSentinel =
	(typeof EPayloadSentinel)[keyof typeof EPayloadSentinel];

/**
 * Flags indicating failed positioning attempts.
 *
 * @typedef {number} EPositionSymbolFailedFlag
 * @property {number} BLUETOOTH - Bluetooth failed flag.
 * @property {number} GPS - GPS failed flag.
 */
export const EPositionSymbolFailedFlag = {
	BLUETOOTH: 1,
	GPS: 3,
} as const;

export type EPositionSymbolFailedFlag =
	(typeof EPositionSymbolFailedFlag)[keyof typeof EPositionSymbolFailedFlag];

/**
 * Bitwise flags for successful positioning.
 *
 * @typedef {number} EPositionSymbolFlag
 * @property {number} BLUETOOTH - Bluetooth position flag (0x01).
 * @property {number} GPS - GPS position flag (0x03).
 */
export const EPositionSymbolFlag = {
	BLUETOOTH: 0x01,
	GPS: 0x03,
} as const;

export type EPositionSymbolFlag =
	(typeof EPositionSymbolFlag)[keyof typeof EPositionSymbolFlag];
