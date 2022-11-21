import compress from "astro-compress";
import critters from "astro-critters";

import sitemap from "@astrojs/sitemap";

export default {
	integrations: [
		sitemap(),
		critters(),
		compress(),
	],
};
