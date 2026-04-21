const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const path = require('path');
const { execSync } = require('child_process');

// ◈ CONFIGURATION ◈
const PORT = 3000; 
const DURATION = 90000; // 90 seconds (82s sequence + buffer)
const OUTPUT_VISUAL = path.join(__dirname, '../temp_visual_master.mp4');
const OUTPUT_FINAL = path.join(__dirname, '../BAS_Oscar_Global_Master_FINAL_SOP.mp4');
const AUDIO_SRC = path.join(__dirname, '../public/audio/bas-theme-2.mp3');
const FFMPEG_PATH = 'C:/Users/amish/OneDrive/2026/BASDIGI2030/node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe';

process.env.FFMPEG_PATH = FFMPEG_PATH;

async function render() {
    console.log('◈ INITIALIZING MASTER RENDER ENGINE (OSCAR-GRADE)...');
    
    const browser = await puppeteer.launch({
        headless: "new",
        args: [
            '--no-sandbox', 
            '--disable-setuid-sandbox',
            '--window-size=1920,1080',
            '--autoplay-policy=no-user-gesture-required',
            '--hide-scrollbars'
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

    console.log(`◈ ACCESSING PREVIEW CORE: http://localhost:${PORT}/cinematic-master`);
    await page.goto(`http://localhost:${PORT}/cinematic-master`, { waitUntil: 'networkidle2' });

    // Wait 2 seconds for initial assets to settle
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('◈ STARTING RAW VISUAL CAPTURE...');
    await recorder.start(OUTPUT_VISUAL);

    console.log('◈ TRIGGERING BOARDROOM REVEAL CEREMONY...');
    await page.click('button');

    console.log(`◈ RECORDING IN PROGRESS... (${DURATION / 1000}s)`);
    await new Promise(resolve => setTimeout(resolve, DURATION));

    console.log('◈ FINALIZING VISUAL BUFFER...');
    await recorder.stop();
    await browser.close();

    console.log('◈ PHASE 2: INITIATING AUDIO FUSION...');
    try {
        // Build FFmpeg command to merge visual and audio
        // -i visual -i audio -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 -shortest
        const cmd = `"${FFMPEG_PATH}" -y -i "${OUTPUT_VISUAL}" -i "${AUDIO_SRC}" -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 -shortest "${OUTPUT_FINAL}"`;
        console.log(`◈ EXECUTING FUSION: ${cmd}`);
        execSync(cmd);
        console.log(`◈ MASTER BUILD COMPLETE: ${OUTPUT_FINAL}`);
    } catch (err) {
        console.error('◈ AUDIO FUSION FAILED:', err.message);
    }
}

render().catch(err => {
    console.error('◈ RENDER ENGINE CRITICAL FAILURE:', err);
    process.exit(1);
});
