/*
 * @Author: yubao
 * @Date: 2023-04-17 16:40:35
 * @LastEditors: yubao
 * @LastEditTime: 2023-04-17 16:59:02
 * @Description: 请填写简介
 * @FilePath: \learn-astro\src\scripts\menu.js
 */
document.querySelector('.hamburger').addEventListener('click',() => {
  console.log(1);
  document.querySelector('.nav-links').classList.toggle('expanded')
})