import { describe, expect, test } from 'vitest'

import simpleVrt from '../packages/simple-vrt'

describe('simple-vrt', () => {
  test('should no error', async () => {
    expect(await simpleVrt({
      expectImagePath: "./test/img/expect.png",
      actualImagePath: "./test/img/screenshot.png",
      diffImagePath: "./test/img/diff.png",
      targetUrl: "https://example.com",
      viewport: {width: 1920, height: 1080},
    })).toBe(true);
  });
  test('should error', async () => {
    expect(await simpleVrt({
      expectImagePath: "./test/img/not-correct.png",
      actualImagePath: "./test/img/screenshot.png",
      diffImagePath: "./test/img/diff.png",
      targetUrl: "https://example.com",
      viewport: {width: 1920, height: 1080},
    })).toBe(false);
  });
})
