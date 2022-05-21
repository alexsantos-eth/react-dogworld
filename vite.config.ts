/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const configDeps = [tsconfigPaths()]

export default defineConfig(({ mode }) => ({
	plugins: mode === 'development' ? [react(), ...configDeps] : configDeps,
	build: {
		outDir: 'build',
	},
}))
