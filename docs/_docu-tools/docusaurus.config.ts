import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {filterSidebarItems} from "./src/js/sidebar-filters";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: 'WooCommerce developer docs',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://developer.woocommerce.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'woocommerce', // Usually your GitHub org/user name.
	projectName: 'woo-docs-build', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: [ 'en' ],
	},

	presets: [
		[
			'classic',
			{
				blog: false,
				pages: false,
				docs: {
					sidebarPath: './sidebars.ts',
					path: '../',
					exclude: [ '_docu-tools/**' ],
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/woocommerce/woocommerce/tree/trunk/docs/docs/',
					routeBasePath: '/',

					// Custom sidebar filter to remove some items from the docs sidebar.
					async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {					
						let sidebarItems = await defaultSidebarItemsGenerator(args);
						sidebarItems = filterSidebarItems(sidebarItems);
						return sidebarItems;
					},

				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/woo-dev-site-logo.svg',
		navbar: {
			logo: {
				alt: 'WooCommerce developer docs',
				src: 'img/woo-dev-site-logo.svg',
				// srcDark: 'img/woo-dev-site-logo-dark.svg',
				href: '/',
			},
			items: [
				{          
					type: 'docSidebar',
					sidebarId: 'docsSidebar',
					label: 'Docs',
				},
				{          
					type: 'docSidebar',
					sidebarId: 'extensionsSidebar',
					label: 'Extensions',
				},
				{          
					type: 'docSidebar',
					sidebarId: 'apiSidebar',
					label: 'API',
				},
				{          
					type: 'docSidebar',
					sidebarId: 'cliSidebar',
					label: 'CLI',
				},
				{
					href: 'https://developer.woocommerce.com/',
					label: 'Blog',
					position: 'right',
				},
				{
					href: 'https://github.com/woocommerce/woocommerce/tree/trunk/docs',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			links: [
				{
					title: 'COMMUNITY',
					items: [
						{
							label: 'GitHub Discussions',
							href: 'https://github.com/woocommerce/woocommerce/discussions',
						},
						{
							label: 'Community Slack',
							href: 'https://woocommerce.com/community-slack/',
						},
						{
							label: 'Community Forum',
							href: 'https://wordpress.org/support/plugin/woocommerce/',
						},
						{
							label: 'Code of Conduct',
							href: 'https://developer.woocommerce.com/code-of-conduct/',
						},
						{
							label: 'Community Participation Guide',
							href: 'https://developer.woocommerce.com/community-participation-guide/',
						},
					],
				},
				{
					title: 'GROW WITH WOO',
					items: [
						{
							label: 'Become a Woo agency partner',
							href: 'https://woocommerce.com/for-agencies/',
						},
						{
							label: 'Become a Marketplace partner',
							href: 'https://woocommerce.com/partners/',
						},
						{
							label: 'Contribute to WooCommerce',
							href: '/docs/contribution/contributing',
						},
					],
				},
				{
					title: 'MORE',
					items: [
						{
							label: 'Woo Developer Blog',
							href: 'https://developer.woocommerce.com/',
						},
						{
							label: 'WooCommerce Monorepo',
							href: 'https://github.com/woocommerce/woocommerce/',
						},
						{
							label: 'Woo Storybook',
							href: 'https://woocommerce.github.io/woocommerce/',
						},
						{
							label: 'Merchant Documentation',
							href: 'https://woocommerce.com/docs',
						},
						{
							label: 'WooCommerce Marketplace',
							href: 'https://woocommerce.com/woocommerce-marketplace/',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/woocommerce/woocommerce/',
						},
					],
				},
			],
			copyright: `Copyright © ${ new Date().getFullYear() } Built with Docusaurus. Documentation is licensed under <a href="https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/license.txt/">GPLv3</a> and can be modified in the <a href="https://github.com/woocommerce/woocommerce/">WooCommerce Monorepo</a>.
				<div class="docusaurus-footer-for-automattic">
					<a href="https://automattic.com/">An Automattic Creation</a>
				</div>`,
		},
		prism: {
			theme: prismThemes.github,
			// darkTheme: prismThemes.dracula,
			additionalLanguages: [ 'php' ],
		},
		colorMode: {
			defaultMode: 'light',
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},

		// algolia: {
		// 	// The application ID provided by Algolia
		// 	appId: 'DGCTEY3UZR',

		// 	// Public API key: it is safe to commit it
		// 	apiKey: '8b541e433184605374ff8fb8985b3dc4',

		// 	indexName: 'developer-woocommerce',

		// 	contextualSearch: true,
		// },
	} satisfies Preset.ThemeConfig,
};

export default config;
