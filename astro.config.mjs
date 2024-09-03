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
								'konstruktion/mc/mc3',
								'konstruktion/mc/mc4',
								'konstruktion/mc/mc5',
								'konstruktion/mc/mc6',
								'konstruktion/mc/mc7',
								'konstruktion/mc/mc8',
								'konstruktion/mc/mc9',
								'konstruktion/mc/mc10',
								'konstruktion/mc/mc11',
								'konstruktion/mc/mc12',
								'konstruktion/mc/mc13',
								'konstruktion/mc/mc14',
								'konstruktion/mc/mc15',
								'konstruktion/mc/mc16',
								'konstruktion/mc/mc17',
								'konstruktion/mc/mc18',
								'konstruktion/mc/mc19',
								'konstruktion/mc/mc20',
								'konstruktion/mc/mc21',
								'konstruktion/mc/mc22',
								'konstruktion/mc/mc23',
								'konstruktion/mc/mc24',
								'konstruktion/mc/mc25',
								'konstruktion/mc/mc26',
								'konstruktion/mc/mc27',
								'konstruktion/mc/mc28',
								'konstruktion/mc/mc29',
								'konstruktion/mc/mc30',
								'konstruktion/mc/mc31',
								'konstruktion/mc/mc32',
								'konstruktion/mc/mc33',
								'konstruktion/mc/mc34',
								'konstruktion/mc/mc35',
								'konstruktion/mc/mc36',
								'konstruktion/mc/mc37',
								'konstruktion/mc/mc38',
								'konstruktion/mc/mc39',
								'konstruktion/mc/mc40',
								'konstruktion/mc/mc41',
								'konstruktion/mc/mc42',
								'konstruktion/mc/mc43',
								'konstruktion/mc/mc44',
								'konstruktion/mc/mc45',
								'konstruktion/mc/mc46',
								'konstruktion/mc/mc47',
								'konstruktion/mc/mc48',
								'konstruktion/mc/mc49',
								'konstruktion/mc/mc50',
								'konstruktion/mc/mc51',
								'konstruktion/mc/mc52',
							],
						},
						{
							label: 'Komplexaufgaben',
							items: [
								'konstruktion/komplex/aufgabe1',
								'konstruktion/komplex/aufgabe2',
								'konstruktion/komplex/aufgabe3',
								'konstruktion/komplex/aufgabe4',
								'konstruktion/komplex/aufgabe5',
								'konstruktion/komplex/aufgabe6',
								'konstruktion/komplex/aufgabe7',
								'konstruktion/komplex/aufgabe8',
								'konstruktion/komplex/aufgabe9',
								'konstruktion/komplex/aufgabe10',
								'konstruktion/komplex/aufgabe11',
								'konstruktion/komplex/aufgabe12',
							],
						},
					],
				},
				{
					label: 'Dynamik',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Dynamik', slug: 'dynamik/bewegung' },
						{
							label: 'Kinematik und Dynamik',
							items: [
								'dynamik/kd/1',
								'dynamik/kd/2',
								'dynamik/kd/3',
								'dynamik/kd/4',
								'dynamik/kd/5',
								'dynamik/kd/6',
								'dynamik/kd/7',
								'dynamik/kd/8',
								'dynamik/kd/9',
								'dynamik/kd/10',
							],
						},
					],
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
