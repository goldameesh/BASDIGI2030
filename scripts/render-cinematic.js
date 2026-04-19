const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const path = require('path');

// ◈ CONFIGURATION ◈
const PORT = 3005; 
const DURATION = 72000; // 72 seconds for Reveal (69s base + buffer)
const OUTPUT_FILE = path.join(__dirname, '../BAS_Reveal_Visual_Master.mp4');
const FFMPEG_PATH = 'C:/Users/amish/OneDrive/2026/BASDIGI2030/node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe';

process.env.FFMPEG_PATH = FFMPEG_PATH;

async function render() {
    console.log('◈ INITIALIZING REVEAL RENDER ENGINE...');
    
    const browser = await puppeteer.launch({
        headless: "new",
        args: [
            '--no-sandbox', 
            '--disable-setuid-sandbox',
            '--window-size=1920,1080',
            '--autoplay-policy=no-user-gesture-required'
        ]
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    const recorder = new PuppeteerScreenRecorder(page, {
        followNewTab: true,
        fps: 60,
        ffmpeg_Path: FFMPEG_PATH,
        videoFrame: { width: 1920, height: 1080 },
        aspectRatio: '16:9',
    });

    console.log(`◈ ACCESSING REVEAL HUB: http://localhost:${PORT}/cinematic`);
    await page.goto(`http://localhost:${PORT}/cinematic`, { waitUntil: 'networkidle2' });

    console.log('◈ STARTING MASTER RECORDING (60 FPS)...');
    await recorder.start(OUTPUT_FILE);

    console.log('◈ TRIGGERING CEREMONY...');
    await page.click('button');

    console.log(`◈ RECORDING IN PROGRESS... (${DURATION / 1000}s)`);
    await new Promise(resolve => setTimeout(resolve, DURATION));

    console.log('◈ FINALIZING MASTER BUFFER...');
    await recorder.stop();

    console.log(`◈ MASTER BUILD COMPLETE: ${OUTPUT_FILE}`);
    await browser.close();
}

render().catch(err => {
    console.error('◈ RENDER FAILED:', err);
    process.exit(1);
});
