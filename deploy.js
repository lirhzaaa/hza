import { writeFileSync, mkdirSync } from 'fs';
import { spawnSync } from 'child_process';

try {
    // Create .env file
    const envContent = `APP_NAME=Laravel
APP_ENV=production
APP_DEBUG=false
APP_URL=https://lirhza.vercel.app
APP_KEY=${process.env.APP_KEY || 'base64:tqvA5dxhNrhOnqipDtl4+7szGYiI0aqe9TL2079eago='}
CACHE_DRIVER=array
SESSION_DRIVER=array
LOG_CHANNEL=stderr
VIEW_COMPILED_PATH=/tmp/views`;

    writeFileSync('.env', envContent);

    // Create necessary directories
    mkdirSync('public/build/_assets', { recursive: true });
    mkdirSync('/tmp/views', { recursive: true });
    
    // Install Composer globally
    const composerInstall = spawnSync('php', ['-r', 'copy("https://getcomposer.org/installer", "composer-setup.php");']);
    spawnSync('php', ['composer-setup.php', '--install-dir=/usr/local/bin', '--filename=composer']);
    spawnSync('php', ['-r', 'unlink("composer-setup.php");']);
    
    // Install dependencies
    const result = spawnSync('composer', ['install', '--no-dev', '--optimize-autoloader'], {
        stdio: 'inherit',
        shell: true
    });
    
    if (result.status !== 0) {
        throw new Error('Composer installation failed');
    }
    
    console.log('Deployment setup completed');
} catch (error) {
    console.error('Deployment setup failed:', error);
    process.exit(1);
}
