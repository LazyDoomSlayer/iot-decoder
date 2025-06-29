export interface IGatewayPayload {
	GatewayEui: string;
	Rssi: number;
	Snr: number;
}

export type TGatewayList = IGatewayPayload[];
