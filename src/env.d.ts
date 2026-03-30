/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_SITE_URL?: string;
	readonly PUBLIC_WEB3FORMS_ACCESS_KEY?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
