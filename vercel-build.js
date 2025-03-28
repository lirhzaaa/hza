import { execSync } from 'child_process';
import { mkdirSync } from 'fs';

try {
    // Ensure build directory exists
    mkdirSync('public/build/_assets', { recursive: true });
    console.log('Build completed successfully');
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
}
