/*
 * @Author: yubao
 * @Date: 2023-04-18 14:04:03
 * @LastEditors: yubao
 * @LastEditTime: 2023-04-18 14:04:55
 * @Description: 请填写简介
 * @FilePath: \learn-astro\src\pages\rss.xml.js
 */
import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: 'https://yubao.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>zh-cn</language>`,
  });
}