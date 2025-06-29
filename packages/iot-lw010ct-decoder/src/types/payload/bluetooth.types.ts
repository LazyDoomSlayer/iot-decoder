/**
 * Represents a single Bluetooth beacon scan result in batch positioning data.
 *
 * @interface IBluetoothPositionData
 * @property {string} mac_address - MAC address of the beacon (hex string).
 * @property {number} [rssi] - Received Signal Strength Indicator in dBm.
 * @property {number} [voltage] - Optional beacon voltage reading in millivolts.
 */
export interface IBluetoothPositionData {
	mac_address?: string;
	rssi?: string;
	voltage?: string;
}
