/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

const configDeps = [
	tsconfigPaths(),
	VitePWA({
		includeAssets: ['/terms.pdf'],
		registerType: 'autoUpdate',
		workbox: {
			navigateFallbackDenylist: [/\/__\/auth\/(.*)/],
		},
		manifest: {
			name: 'Proyecta® - APP',
			short_name: 'Proyecta® - APP',
			icons: [
				{
					src: '/images/favicon-32x32.png',
					sizes: '32x32',
					type: 'image/png',
				},
				{
					src: '/images/favicon-64x64.png',
					sizes: '64x64',
					type: 'image/png',
				},
				{
					src: '/images/favicon-256x256.png',
					sizes: '256x256',
					type: 'image/png',
				},
				{
					src: '/images/favicon-512x512.png',
					sizes: '512x512',
					type: 'image/png',
				},
				{
					src: '/images/favicon-1024x1024.png',
					sizes: '1024x1024',
					type: 'image/png',
				},
			],
			theme_color: '#ffffff',
			background_color: '#ffffff',
			categories: ['books', 'education', 'schedule', 'social', 'learning', 'news'],
			start_url: '/',
			lang: 'es',
			dir: 'ltr',
			description:
				'Proyecta® - APP es una plataforma gratuita para los estudiantes de Ingeniería, cuenta con una biblioteca virtual y un foro gratuito de cursos.',
			display: 'standalone',
		},
	}),
]

export default defineConfig(({ mode }) => ({
	plugins: mode === 'development' ? [react(), ...configDeps] : configDeps,
	build: {
		outDir: 'build',
	},
}))
