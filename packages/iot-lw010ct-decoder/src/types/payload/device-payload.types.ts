import type { TPositionData } from "../common/shared.types";
import type { EPositionSymbol } from "../enums/position.enums";
import type { EChargingStatus } from "../enums/status.enums";
import type { TGatewayList } from "./gateway.types";

export interface IDevicePayload {
	MessageId: string;
	WirelessDeviceId: string;
	PayloadData: string;
	WirelessMetadata: {
		LoRaWAN: {
			ADR: boolean;
			Bandwidth: number;
			ClassB: boolean;
			CodeRate: string;
			DataRate: string;
			DevAddr: string;
			DevEui: string;
			FCnt: number;
			FOptLen: number;
			FPort: number;
			Frequency: string;
			Gateways: TGatewayList;
			MIC: string;
			MType: string;
			Major: string;
			Modulation: string;
			PolarizationInversion: boolean;
			SpreadingFactor: number;
			Timestamp: string;
		};
	};
}

export interface DecoderPayload {
	devicePayload: IDevicePayload;
	deviceType: string;
}

export interface IDeviceInfo {
	data: IDeviceData;
}

export interface IDeviceData {
	port?: number;
	hex_format_payload?: string;

	position_type?: string;
	age?: number;
	latitude?: number;
	longitude?: number;
	pdop?: string;

	charging_status?: EChargingStatus;
	battery_percent?: string; // has % at the end

	temperature?: string;
	firmware_version?: string;
	hardware_version?: string;
	work_mode?: string;
	device_status?: string;
	light_intensity?: number;

	timestamp?: number;
	timezone?: number;
	shutdown_type?: string;

	low_power_percent?: string;

	event_type?: string;

	position_data?: TPositionData;
	position_failed_data?: TPositionData;

	position_symbol?: EPositionSymbol;

	assistance_type?: string;
	position_failed_type?: string;

	shock_times?: number;

	work_time?: number;
	adv_times?: number;
	axis_wakeup_time?: number;
	ble_position_time?: number;
	gps_position_time?: number;
	lora_send_times?: number;
	lora_power?: number;
	battery_consumption?: number;
	position_report_times_during_stationary_in_motion_mode?: number;
	position_report_times_during_movement_in_motion_mode?: number;
	green_led_working_time?: number;
	orange_led_working_time?: number;
	blue_led_working_time?: number;
}
export interface IDecoderTranslatedPayload {
	bytes: Uint8Array;
	fPort: number;
}
