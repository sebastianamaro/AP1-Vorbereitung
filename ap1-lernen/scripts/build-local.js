#!/usr/bin/env node
/**
 * Build script for local development (no base path)
 */
import { execSync } from 'child_process';

// Set flag for local build (no base path)
process.env.LOCAL_BUILD = 'true';

console.log('Building with empty base path for local testing...\n');

try {
	// Run content build first
	execSync('node scripts/build-content.js', { stdio: 'inherit' });

	// Run vite build with the env var set
	execSync('npx vite build', {
		stdio: 'inherit',
		env: { ...process.env, LOCAL_BUILD: 'true' }
	});

	console.log('\nBuild complete! Run "npm run preview" to test locally.');
} catch (error) {
	console.error('Build failed:', error.message);
	process.exit(1);
}
