/*
 * @Author: yubao
 * @Date: 2023-04-18 14:12:31
 * @LastEditors: yubao
 * @LastEditTime: 2023-04-18 14:20:50
 * @Description: 请填写简介
 * @FilePath: \learn-astro\src\components\Greeting.jsx
 */
import { h } from 'preact'
import { useState } from 'preact/hooks'

export default function Greeting({messages}) {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))]
  const  [greeting, setGreeting] = useState(messages[0])
  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>new Greeting</button>
    </div>
  )
}