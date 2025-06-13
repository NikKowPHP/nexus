"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeVSCodeTab = closeVSCodeTab;
const puppeteer_1 = __importDefault(require("puppeteer"));
async function closeVSCodeTab(fileName) {
    const browser = await puppeteer_1.default.launch();
    const page = await browser.newPage();
    await page.goto('vscode://file//home/kasjer/projects/nexus');
    await page.waitForSelector(`div.tab[data-resource-name$="${fileName}"]`);
    await page.evaluate((fileName) => {
        const tabs = Array.from(document.querySelectorAll('div.tab'));
        const targetTab = tabs.find(tab => { var _a; return (_a = tab.dataset.resourceName) === null || _a === void 0 ? void 0 : _a.includes(fileName); });
        if (targetTab) {
            const closeButton = targetTab.querySelector('.tab-close');
            closeButton === null || closeButton === void 0 ? void 0 : closeButton.click();
        }
    }, fileName);
    await browser.close();
}
