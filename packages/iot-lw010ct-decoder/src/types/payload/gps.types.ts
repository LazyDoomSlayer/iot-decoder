/**
 * Represents one entry of GPS positioning data or failure context.
 *
 * @interface IGPSPositionData
 * @property {number} [latitude]   - Latitude in decimal degrees.
 * @property {number} [longitude]  - Longitude in decimal degrees.
 * @property {string} [pdop]       - Position Dilution of Precision as a string (e.g. "2.5").
 * @property {number[]} [cn_list]  - Array of carrier‐to‐noise ratios from satellites.
 */
export interface IGPSPositionData {
	latitude?: number;
	longitude?: number;
	pdop?: string;
	cn_list?: number[];
}
