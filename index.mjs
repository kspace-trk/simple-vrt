#!/usr/bin/env node

import looksSame from 'looks-same'
import puppeteer from 'puppeteer'
import simpleVrtConfig from '../../simple-vrt.config.mjs'

const main = async () => {
  const browser = await puppeteer.launch({headless: 'new'})
  const page = await browser.newPage()
  await page.goto(simpleVrtConfig.targetUrl)
  await page.setViewport(simpleVrtConfig.viewport)
  await page.screenshot({ path: simpleVrtConfig.actualImagePath })
  const res = await looksSame.createDiff({
    reference: simpleVrtConfig.expectImagePath,
    current: simpleVrtConfig.actualImagePath,
    diff: simpleVrtConfig.diffImagePath,
    strict: false,
    tolerance: 50,
  })
  if (res.equal) {
    console.log(colorizeText("Test passed", "32"))
  } else {
    console.error(colorizeText("Test failed. Exported difference files to " + simpleVrtConfig.diffImagePath, "31"))
  }
  await browser.close()
}

const colorizeText =(text, colorCode) => {
  return `\x1b[${colorCode}m${text}\x1b[0m`
}

main()

export default main
