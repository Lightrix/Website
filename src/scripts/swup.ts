// @ts-expect-error
import SwupBodyClassPlugin from "@swup/body-class-plugin";
import SwupPreloadPlugin from "@swup/preload-plugin";
// @ts-expect-error
import SwupScrollPlugin from "@swup/scroll-plugin";
// @ts-expect-error
import SwupHeadPlugin from "@swup/head-plugin";
import Swup from "swup";

new Swup({
	containers: ["#footer", "#main", "#header"],
	plugins: [
		new SwupHeadPlugin(),
		new SwupPreloadPlugin(),
		new SwupScrollPlugin(),
		new SwupBodyClassPlugin(),
	],
});
