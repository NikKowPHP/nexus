import puppeteer from 'puppeteer';

export async function closeVSCodeTab(fileName: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('vscode://file//home/kasjer/projects/nexus');
  await page.waitForSelector(`div.tab[data-resource-name$="${fileName}"]`);
  
  await page.evaluate((fileName) => {
    const tabs = Array.from(document.querySelectorAll('div.tab'));
    const targetTab = tabs.find(tab => 
      (tab as HTMLElement).dataset.resourceName?.includes(fileName));
    
    if (targetTab) {
      const closeButton = targetTab.querySelector('.tab-close');
      (closeButton as HTMLElement)?.click();
    }
  }, fileName);
  
  await browser.close();
}