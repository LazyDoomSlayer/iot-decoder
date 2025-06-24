import { resolve } from "node:path";
import dts from "vite-plugin-dts";

export default {
	build: {
		lib: {
			entry: [resolve(__dirname, "src/index.ts")],
			name: "doomguy",
			fileName: (format, name) => {
				if (format === "es") {
					return `${name}.js`;
				}

				return `${name}.${format}`;
			},
		},
		rollupOptions: {
			external: [],
		},
	},
	plugins: [dts()],
};
