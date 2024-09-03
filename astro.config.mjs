import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathJax],
	  },
	integrations: [
		starlight({
			title: 'Studium',
//			social: {
//				github: 'https://github.com/withastro/starlight',
//			},
			customCss: ['./src/styles/mathjax.css'],
			sidebar: [
				{
					label: 'Konstruktion',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Multiple Choice', slug: 'konstruktion/mc' },
						{ label: 'Komplexaufgaben', slug: 'konstruktion/komplex' },
						{
							label: 'Multiple Choice',
							items: [
								'konstruktion/mc/mc1',
								'konstruktion/mc/mc2',
							],
						},
						{
							label: 'Komplexaufgaben',
							items: [
								'konstruktion/komplex/aufgabe1',
								'konstruktion/komplex/aufgabe2',
							],
						},
					],
				},
				{
					label: 'Dynamik',
					autogenerate: { directory: 'dynamik' },
				},
				{
					label: 'C++',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Onlineübungen', slug: 'cpp/intro' },
						{
							label: 'Online',
							items: [
								'cpp/online/aufg1',
							],
						},
					],
				},
			],
		}),
	],
});
