# gowasm-load

[![NPM version](https://img.shields.io/npm/v/gowasm-load.svg?style=flat)](https://npmjs.com/package/gowasm-load)
[![NPM downloads](http://img.shields.io/npm/dm/gowasm-load.svg?style=flat)](https://npmjs.com/package/gowasm-load)

## 使用
1. 将 wasm_exec.js 和 wasm 文件放到 public 目录下
2. 在 index.html 中引入
```html
<script src="/js/wasm_exec.js"></script>
```
3. 初始化 wasm
```js
import { initWasm } from 'gowasm-load'

useEffect(() => {
  initWasm("/wasm/calculator.wasm")
}, []);

const add = () => {
  console.log('计算结果', window?.add(1, 2))
}

<button onClick={add}>add</button>
```
## LICENSE

MIT
