import type { IBluetoothPositionData } from "../payload/bluetooth.types";
import type { IGPSPositionData } from "../payload/gps.types";

export type TPositionData =
	| (IBluetoothPositionData | IGPSPositionData)[]
	| Uint8Array;
