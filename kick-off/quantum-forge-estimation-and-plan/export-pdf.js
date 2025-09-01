const puppeteer = require('puppeteer');

async function exportToPDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to presentation size
  await page.setViewport({ width: 1920, height: 1080 });
  
  // Navigate to your presentation
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  // Wait for presentation to load
  await page.waitForTimeout(2000);
  
  // Enter print mode (Alt+P)
  await page.keyboard.down('Alt');
  await page.keyboard.press('P');
  await page.keyboard.up('Alt');
  
  await page.waitForTimeout(1000);
  
  // Generate PDF
  await page.pdf({ 
    path: 'presentation.pdf',
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  
  await browser.close();
  console.log('PDF exported successfully!');
}

exportToPDF().catch(console.error);