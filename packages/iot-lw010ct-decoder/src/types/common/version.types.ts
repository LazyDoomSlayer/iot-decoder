/**
 * Represents the components of a version string (e.g. firmware or hardware version).
 */
export interface IFormatVersionPayload {
	/** Major version number or identifier (e.g. `1` in "V1.2.3") */
	major: number | string;
	/** Patch version number or identifier (e.g. `3` in "V1.2.3") */
	patch: number | string;
	/** Optional minor version number or identifier (e.g. `2` in "V1.2.3") */
	minor?: number | string;
}
