import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	base: 'todo-test',
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './setupTests.ts'
	}
})
