# Installing

## yarn

# Using

- common.js

`const {arrayUtils, ...className} = require('wxt-utils');`

- es6、ts

`import {arrayUtils, ...className} from 'wxt-utils'`

# 一级目录

- [Utils **(工具类)**](#utils)
- [Package **(包类)**](#package)

# Utils

- [arrayUtils 类 **（数组操作）**](#arrayutils-类)
- [objectUtils 类 **（对象操作）**](#objectutils-类)
- [assistUtils 类 （辅助开发）](#assistutils-类)
- [cookie 类 **（cookie）**](#cookie-类)
- [fileUtils 类 **（文件处理）**](#fileutils-类)
- [imageUtils 类 **（图片处理）**](#imageutils-类)
- [randomUtils 类 **（随机生成）**](#randomutils-类)
- [transformUtils 类 **（转换处理）**](#transformutils-类)
- [validatorUtils 类 **（验证器）**](#validatorutils-类)
- [crypto 对象 **（AES 加/解密）**](#crypto)

## arrayUtils 类

| 方法                                    | 描述                                                                                              |
| --------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [**safeArray**](#safearray)             | 检测是否为一个安全数组, 若不是返回空数组                                                          |
| [**isEmptyArray**](#isemptyarray)       | 检验一个数组是否为空数组。                                                                        |
| [**isVaildArray**](#isvaildarray)       | 检验一个数组是否为有效数组（非空数组）。                                                          |
| [**splitArray**](#splitarray)           | 将根据设置的 length 将一个数组拆分成多个数组。                                                    |
| [**getKeysList**](#getkeyslist)         | 将根据 key 值获取对象数组中的对应的键值组成数组，若 key 是数组，则根据 key 中的值重新组装对象数组 |
| [**arrayItemSwap**](#arrayitemswap)     | 按下标交换数组项位置                                                                              |
| [**filterDuplicate**](#filterduplicate) | 数组去重, 如果传 key 则根据对应 key 的 value 值去除重复, 不支持直接对比引用类型                   |
| [**treeToList**](#treetolist)           | 树形重组，将树形结构的所有节点平行重组成普通数组                                                  |

<hr>

### safeArray

`safeArray()` 检测是否为一个安全数组, 若不是返回空数组。

```javascript
arrayUtils.safeArray(['1']) // expected output: ['1']
arrayUtils.safeArray('') // expected output: []
arrayUtils.safeArray(null) // expected output: []
arrayUtils.safeArray(undefined) // expected output: []
arrayUtils.safeArray({}) // expected output: []
```

**语法**

> **let newArray=arrayUtils.safeArray(value)**

**参数**

`value` : `必选` <br>
要检测的对象

**返回值**

如果对象是一个非空数组，则原数据返回; 否则为返回 `[]` 。

<hr>

### isEmptyArray

`isEmptyArray()` 用于检验一个数组是否为空数组。

```javascript
arrayUtils.isEmptyArray(['1']) // expected output: false
arrayUtils.isEmptyArray('') // expected output: false
arrayUtils.isEmptyArray(null) // expected output: false
arrayUtils.isEmptyArray(undefined) // expected output: false
arrayUtils.isEmptyArray([]) // expected output: true
```

**语法**

> **let isEmptyArray=arrayUtils.isEmptyArray(value)**

**参数**

`value` : `必选` <br>
要检测的对象

**返回值**

如果对象是一个空数组，则返回 true; 否则返回 false。

<hr>

### isVaildArray

`isVaildArray()` 用于检验一个数组是否为有效数组（非空数组）。

```javascript
arrayUtils.isVaildArray(['1']) // expected output: true
arrayUtils.isVaildArray('') // expected output: false
arrayUtils.isVaildArray(null) // expected output: false
arrayUtils.isVaildArray(undefined) // expected output: false
arrayUtils.isVaildArray([]) // expected output: false
```

**语法**

> **let isVaildArray=arrayUtils.isVaildArray(value)**

**参数**

`value` : `必选` <br>
要检测的对象

**返回值**

如果对象是一个非空数组，则返回 true; 否则为 false。

<hr>

### splitArray

`splitArray()` 将根据设置的 length 将一个数组拆分成多个数组。

```javascript
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(arrayUtils.splitArray(array, 3))
//expected output:[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 0 ] ]
```

**语法**

> **let newList=arrayUtils.splitArray(array, length)**

**参数**

`array` : `必选` <br>
要分割的数组

`length` : `必选` <br>
要分割的间距

**返回值**

返回的结果是二维数组，包含拆分后生成的数组。

<hr>

### getKeysList

`getKeysList()` 将根据 key 值获取对象数组中的对应的键值组成数组，若 key 是数组，则根据 key 中的值重新组装对象

```javascript
let array = [
  {
    name: '张三',
    age: '18',
    weight: 140,
  },
  {
    name: '李四',
    age: '20',
    weight: 160,
  },
]
console.log(arrayUtils.getKeysList(array, 'name'))
//expected output:[ '张三', '李四' ]

console.log(arrayUtils.getKeysList(array, ['name', 'age']))
//expected output:[ { name: '张三', age: '18' }, { name: '李四', age: '20' } ]
```

**语法**

> **let newList=arrayUtils.getKeysList(list, key)**

**参数**

`list` : `必选` <br>
要分割的对象数组

`length` : `必选` <br>
要获取的 key 值，支持字符串和字符串数组

**返回值**

若 key 是字符串，返回由对应 key 的 value 值所组成的简单数组
若 key 是字符串数组，返回过滤掉不匹配 key 的对象数组

<hr>

### arrayItemSwap

`arrayItemSwap()` 按下标交换数组项

```javascript
let array = [1, 2, 3]
console.log(arrayUtils.arrayItemSwap(array, 0, 1))
//expected output:[ 2, 1, 3 ]
console.log(arrayUtils.arrayItemSwap(array, 3, 0))
//expected error:  源下标不存在！
console.log(arrayUtils.arrayItemSwap(array, 1, 3))
//expected error:目标下标不存在！
```

**语法**

> **let newList=arrayUtils.arrayItemSwap(array, sourceIndex, targetIndex)**

**参数**

`array` : `必选` <br>
要交换位置的数组

`sourceIndex` : `必选` <br>
源数据的索引

`targetIndex` : `必选` <br>
要替换数据的索引

**返回值**

交换位置后的数组

<hr>

### filterDuplicate

`filterDuplicate()` 数组去重, 如果是对象类型可以传 key 将会根据对象对应 key 的 value 值去除重复, 只会返回第一次出现的对象，不支持直接对比引用类型

```javascript
let array1 = [1, 2, 2, 3, 3]
let array2 = [
  {
    id: 1,
    name: '张三',
  },
  {
    id: 2,
    name: '李四',
  },
  {
    id: 2,
    name: '王二',
  },
  {
    id: 1,
    name: '赵五',
  },
]
console.log(arrayUtils.filterDuplicate(array1))
//expected error:[ 1, 2, 3 ]
console.log(arrayUtils.filterDuplicate(array2, 'id'))
//expected error:[ { id: 1, name: '张三' }, { id: 2, name: '李四' } ]
```

**语法**

> **let newList=arrayUtils.filterDuplicate(array, [key])**

**参数**

`array` : `必选` <br>
要去重的数组

`key` : `可选` <br>
为对象数组时有效，根据 key 值来过滤重复

**返回值**

去重后的数组

<hr>

### treeToList

`treeToList()` 树形重组，将树形结构的所有节点平行重组成普通数组

```javascript
let tree = [
  {
    id: 1,
    name: 'A',
    children: [
      {
        id: 11,
        name: 'AA',
      },
      {
        id: 12,
        name: 'AB',
      },
      {
        id: 13,
        name: 'AC',
      },
    ],
  },
  {
    id: 2,
    name: 'B',
    children: [
      {
        id: 21,
        name: 'BA',
      },
      {
        id: 22,
        name: 'BB',
      },
      {
        id: 23,
        name: 'BC',
      },
    ],
  },
]
console.log(arrayUtils.treeToList(tree))
/*expected output:
  [{ id: 1, name: 'A' },{ id: 2, name: 'B' },
  { id: 11, name: 'AA' },{ id: 12, name: 'AB' },
  { id: 13, name: 'AC' },{ id: 21, name: 'BA' },
  { id: 22, name: 'BB' },{ id: 23, name: 'BC' }]
*/
```

**语法**

> **let newList=arrayUtils.treeToList(tree)**

**参数**

`tree` : `必选` <br>
要重组的树结构数据

**返回值**

平铺后的树结构数组

## assistUtils 类

| 方法                                  | 描述                           |
| ------------------------------------- | ------------------------------ |
| [**typeOf**](#typeof)                 | 检验详细类型                   |
| [**deepCopy**](#deepcopy)             | 深拷贝                         |
| [**delHtmlTag**](#delhtmltag)         | 过滤所有 html 标签和占位符标记 |
| [**debounce**](#debounce)             | 防抖                           |
| [**throttle**](#throttle)             | 节流                           |
| [**copyText**](#copyText)             | 复制文本到剪切板               |
| [**compressText**](#compressText)     | 压缩字符串                     |
| [**decompressText**](#decompressText) | 解压字符串                     |

<hr>

### typeOf

`typeOf()` 检验详细类型

```javascript
console.log(assistUtils.typeOf('')) // expected output: string
console.log(assistUtils.typeOf(1)) // expected output: number
console.log(assistUtils.typeOf([])) // expected output: array
console.log(assistUtils.typeOf({})) // expected output: object
console.log(assistUtils.typeOf(null)) // expected output: null
console.log(assistUtils.typeOf(undefined)) // expected output: undefined
console.log(assistUtils.typeOf(true)) // expected output: boolean
console.log(assistUtils.typeOf(new Date())) // expected output: date
console.log(assistUtils.typeOf(() => {})) // expected output: function
console.log(assistUtils.typeOf(new RegExp(''))) // expected output: regExp
console.log(assistUtils.typeOf(new Error())) // expected output: error
```

**语法**

> **let isArray=assistUtils.typeOf(value)**

**参数**

`value` : `必选` <br>
要检测的对象

**返回值**

返回一个表示数据对应类型的字符串

<hr>

### deepCopy

`deepCopy()` 深拷贝

```javascript
let arraylist = [
  {
    id: 1,
    name: '哈哈',
  },
  {
    id: 2,
    name: '嘻嘻',
  },
]
let copylist = assistUtils.deepCopy(arraylist)
arraylist.shift()
console.log(arraylist)
// expected output: [ { id: 2, name: '嘻嘻' } ]
console.log(copylist)
// expected output: [ { id: 1, name: '哈哈' }, { id: 2, name: '嘻嘻' } ]
```

**语法**

> **let copylist=assistUtils.deepCopy(value)**

**参数**

`value` : `必选` <br>
要拷贝的对象

**返回值**

返回一个同 value 数据的数据，不受引用类型

<hr>

### delHtmlTag

`delHtmlTag()` 过滤所有 html 标签和占位符标记

```javascript
let textHtml = `<div style="margin:0;">&nbsp；王大锤</div>小锤子`
console.log(assistUtils.delHtmlTag(textHtml)) // expected output: 王大锤小锤子
```

**语法**

> **let isArray=assistUtils.delHtmlTag(value)**

**参数**

`value` : `必选` <br>
要过滤的对象

**返回值**

返回一个过滤后的文本

<hr>

### debounce

`debounce()` 防抖封装方法，传入一个方法，根据配置参数，给这个方法配置相应的防抖属性

```javascript
let nameList = []
let times = 0
const writeMyName = assistsUtils.debounce(() => {
  nameList.push('a')
}, 200)
let myNameInterval = setInterval(() => {
  times++
  writeMyName()
  if (times > 4) {
    clearInterval(myNameInterval)
    myNameInterval = setTimeout(() => {
      times++
      writeMyName()
    }, 210)
    console.log(times)
    //expected output:6
    console.log(nameList)
    //expected output:['a']
  }
}, 50)
```

**语法**

> **const someMethods=assistUtils.debounce(func, wait, option)**

**参数**

`func` : `必选` <br>
要附加防抖功能的方法

`wait` : `可选` <br>
防抖的延时时间（单位: 毫秒） 默认为 0

`option` : `可选` 配置项 <br>

- `leading` : `可选` <br>

  指定是否在延迟开始前调用

- `maxWait` : `可选` <br>

  设置被延迟的最大值

- `trailing` : `可选` <br>

  指定是否在延迟开始后调用

**返回值**

返回一个被防抖功能包裹的原方法

<hr>

### throttle

`throttle()` 节流封装方法 传入一个方法，根据配置参数，给这个方法配置相应的防抖属性

```javascript
let nameList = []
let times = 0
const writeMyName = assistsUtils.throttle(() => {
  nameList.push('a')
}, 200)
const myNameInterval = setInterval(() => {
  times++
  writeMyName()
  if (times > 4) {
    clearInterval(myNameInterval)
    console.log(times)
    //expected output:5
    console.log(nameList)
    //expected output:['a']
  }
}, 50)
```

**语法**

> **const someMethods=assistUtils.throttle(func, wait, option)**

**参数**

`func` : `必选` <br>
要附加节流功能的方法

`wait` : `可选` <br>
节流的等待时间（单位: 毫秒） 默认为 0

`option` : `可选` 配置项 <br>

- `leading` : `可选` <br>

  指定是否在延迟开始前调用

- `trailing` : `可选` <br>

  指定是否在延迟开始后调用

**返回值**

返回一个被节流功能包裹的原方法

<hr>

### copyText

`copyText()` 将指定的文本复制到剪切板

```javascript
const text = 'http://static.weixiaotong.com.cn//f4cf1f1589887398060.csv'
assistUtils.copyText(text)
// ctrl + v  即可复制
```

**语法**

> **assistUtils.copyText(text)**

**参数**

`text` : `必选` <br>
要复制到剪切板的文本

**返回值**

无

<hr>

### compressText

`compressText()` 将传入字符串进行压缩

```javascript
const text = 'http://static.weixiaotong.com.cn//f4cf1f1589887398060.csv'
assistUtils.compressText(text)
// 返回压缩字符串
```

**语法**

> **assistUtils.compressText(text,useUrl?)**

**参数**

`text` : `必选` <br>
要复制压缩的文本 <br>
`useUrl` : `选填` <br>
是否直接作为 url 参数使用

**返回值**

`string`压缩后字符串

**提示**

压缩方法有各自最佳使用场景/局限，适时取用最佳

<hr>

### decompressText

`decompressText()` 将传入字符串进行解压还原对应`compressText()`

```javascript
const text = '⌂惌Ꙁ'
assistUtils.compressText(text)
// 返回解压字符串：123123
```

**语法**

> **assistUtils.decompressText(text,useUrl?)**

**参数**

`text` : `必选` <br>
要解压的文本 <br>
`useUrl` : `选填` <br>
是否直接作为 url 参数进行的压缩

**返回值**

`string`解压恢复后字符串

**提示**

该解压方法对应压缩方法，他俩是一对

<hr>

## cookie 类

| 方法                      | 描述                                                                    |
| ------------------------- | ----------------------------------------------------------------------- |
| [**set**](#set)           | 设置 cookie                                                             |
| [**get**](#get)           | 根据 key 获取 cookie 值                                                 |
| [**includes**](#includes) | 根据 key 查询 cookie 是否存在                                           |
| [**clear**](#clear)       | 删除的 cookie 的域和路径，Cookie 域和路径要一样才能被覆盖。否则无法清除 |

<hr>

### set

`set()` 设置 cookie

```javascript
cookie.set('UUID', 'abscd', {
  path: '/bugu',
  domain: 'wextong.com',
  expires: 1000,
})
let value = cookie.get('UUID')
console.log(value) //expected output:abscd
```

**语法**

> **cookie.set(key, value, [{path, domain, expires})**

**参数**

`key` : `必选` <br>
要绑定 cookie 的 key 值

`value` : `必选` <br>
要绑定 cookie 的 value 值

`path` : `可选` <br>
要绑定 cookie 的作用路径

`domain` : `可选` <br>
要绑定 cookie 的作用域

`expires` : `可选` <br>
要绑定 cookie 的过期时间

<hr>

### get

`get()` 根据 key 获取 cookie 值

```javascript
cookie.set('UUID', 'abscd', {
  path: '/bugu',
  domain: 'wextong.com',
  expires: 1000,
})
let value = cookie.get('UUID')
console.log(value) //expected output:abscd
```

**语法**

> **cookie.get(key)**

**参数**

`key` : `必选` <br>
要绑定 cookie 的 key 值

**返回值**

返回 cookie 中对应 key 的 value 值

<hr>

### includes

`includes()` 根据 key 查询是否有该 cookie

```javascript
cookie.set('UUID', 'abscd')
console.log(cookie.includes('UUID')) //expected output:true
cookie.clear('UUID')
console.log(cookie.includes('UUID')) //expected output:false
```

**语法**

> **cookie.includes(key)**

**参数**

`key` : `必选` <br>
要绑定 cookie 的 key 值

**返回值**

如果 cookie 存在则返回 true, 否则 false

<hr>

### clear

`clear()` 删除的 cookie 的域和路径，Cookie 域和路径要一样才能被覆盖。否则无法清除

```javascript
cookie.set('UUID', 'abscd')
console.log(cookie.includes('UUID')) //expected output:true
cookie.clear('UUID')
console.log(cookie.includes('UUID')) //expected output:false
```

**语法**

> **cookie.clear(key, [{path, domain, expires}])**

**参数**

`key` : `必选` <br>
要清除 cookie 的 key 值

`path` : `可选` <br>
要清除 cookie 的作用路径

`domain` : `可选` <br>
要清除 cookie 的作用域

`expires` : `可选` <br>
要清除 cookie 的过期时间

<hr>

## objectUtils 类

| 方法                                              | 描述                                         |
| ------------------------------------------------- | -------------------------------------------- |
| [**safeObject**](#safeobject)                     | 检测对象是否为一个安全对象，不是则返回空对象 |
| [**isEmptyObject**](#isemptyobject)               | 检测对象是否为空对象                         |
| [**isValidObject**](#isvalidobject)               | 检测对象是否为有效对象                       |
| [**initPropertyValue**](#initpropertyvalue)       | 初始化单层对象的属性值                       |
| [**clearInvalidProperty**](#clearinvalidproperty) | 清空单层对象的无有效值的属性                 |
| [**only**](#only)                                 | 根据 keys 筛选对象                           |

<hr>

### safeObject

`safeObject()` 检测对象是否为一个安全对象，不是则返回空对象

```javascript
objectUtils.safeObject(['1']) // expected output: {}
objectUtils.safeObject('') // expected output: {}
objectUtils.safeObject(null) // expected output: {}
objectUtils.safeObject(undefined) // expected output: {}
objectUtils.safeObject({
  name: '张三',
}) // expected output: {name:'张三'}
```

**语法**

> **let newObject=objectUtils.safeObject(value)**

**参数**

`value` : `必选` <br>
要检测的对象

**返回值**

如果 value 是一个非空对象，则返回原数据，否则返回空对象

<hr>

### isEmptyObject

`isEmptyObject()` 检测是否是空对象

```javascript
objectUtils.isEmptyObject({}) // expected output: true
objectUtils.isEmptyObject(['1']) // expected output: false
objectUtils.isEmptyObject('') // expected output: false
objectUtils.isEmptyObject(null) // expected output: false
objectUtils.isEmptyObject(undefined) // expected output: false
objectUtils.isEmptyObject({
  name: '张三',
}) // expected output: false
```

**语法**

> **let isEmptyObject=objectUtils.isEmptyObject(value)**

**参数**

`value` : `必选` <br>
要检测的对象

**返回值**

如果 value 是一个空对象，返回 true, 否则返回 false

<hr>

### isValidObject

`isValidObject()` 检测是否是有效对象

```javascript
objectUtils.isValidObject({}) // expected output: false
objectUtils.isValidObject(['1']) // expected output: false
objectUtils.isValidObject('') // expected output: false
objectUtils.isValidObject(null) // expected output: false
objectUtils.isValidObject(undefined) // expected output: false
objectUtils.isValidObject({
  name: '张三',
}) // expected output: true
```

**语法**

> **let isVaildObject=objectUtils.isValidObject(value)**

**参数**

`value` : `必选` <br>
要检测的对象

**返回值**

如果 value 是一个有效对象，返回 true, 否则返回 false

<hr>

### initPropertyValue

`initPropertyValue()` 初始化单层对象的属性值

```javascript
let object = {
  name: '张三',
  age: 18,
  children: ['baobao'],
  attr: {
    a: '1',
  },
}
console.log(objectUtils.initPropertyValue(object)) // expected output: { name: '', age: 0, children: [], attr: {} }
console.log(objectUtils.initPropertyValue('')) // expected output: {}}
```

**语法**

> **let initObject=objectUtils.initPropertyValue(value)**

**参数**

`value` : `必选` <br>
要初始化的对象

**返回值**

返回单层数据清空后的对象

<hr>

### clearInvalidProperty

`clearInvalidProperty()` 清空单层对象的非有效值的属性

```javascript
let object = {
  name: '张三',
  age: 0,
  children: [],
  attr: {},
}
console.log(objectUtils.clearInvalidProperty(object)) // expected output: { name: '张三'，age: 0 }
// 清空
// String型: ''
// Number型: NAN
// Array型: []
// Object型: {},undefined,null
```

**语法**

> **let initObject=objectUtils.clearInvalidProperty(value)**

**参数**

`value` : `必选` <br>
要处理的对象

**返回值**

返回单层数据清空后的对象

<hr>

### only

`only()` 根据 keys 筛选对象

```javascript
let object = {
  name: '张三',
  age: 0,
  sex: 1,
}
let filterOptionStr = 'name age'
let filterOptionList = ['name', 'sex']
console.log(objectUtils.only(object, filterOptionStr)) // expected output: { name: '张三'，age: 0 }
console.log(objectUtils.only(object, filterOptionList)) // expected output: { name: '张三', sex: 1 }
```

**语法**

> **let filterObject = objectUtils.only(obj, option)**

**参数**

`obj` : `必选` <br>
要处理的对象

`option` : `必选` <br>
所筛选的字段，字符串时以空格隔开，也可以直接传字符串数组

**返回值**

过滤后的对象

<hr>

## fileUtils 类

| 方法                                            | 描述                                                                 |
| ----------------------------------------------- | -------------------------------------------------------------------- |
| [**fileToImage**](#filetoimage)                 | file(Blob)对象转 image 对象                                          |
| [**strToUint16Array**](#strtouint16array)       | String 转 Uint16Array 对象                                           |
| [**uint16ToUint8Array**](#uint16touint8array)   | Uint16Array 对象 转 Uint8Array 对象                                  |
| [**uint8ArrayToDataUrl**](#uint8arraytodataUrl) | uint8Array 对象 转换 base64 字符串                                   |
| [**strToDataUrl**](#strtodataUrl)               | String 转换 base64 字符串                                            |
| [**base64ToUnincode**](#base64tounincode)       | 将相应的 base64 中字符的值 转成 unincode 对应符号的码值              |
| [**dataUrlToUint8Array**](#dataurltouint8array) | base64 字符串转 Uint8Array 对象                                      |
| [**utf16ToUint8ByUtf8**](#utf16touint8byutf8)   | 将基于 utf16 编码规则的字符串，转换成基于 utf8 编码规则的 Uint8Array |
| [**dataUrlToBlob**](#dataurltoblob)             | base64 字符串转 Blob 对象                                            |
| [**dataUrlToFile**](#dataurltofile)             | base64 字符串转 File 对象                                            |
| [**download**](#download)                       | 根据 url 地址下载文件，并指定文件名                                  |
| [**getLinkFileInfo**](#getlinkfileinfo)         | 根据链接获取文件的名称信息                                           |

<hr>

### fileToImage

`fileToImage()` 将一个 file(Blob)对象转 image 对象

```javascript
let fileObject = {
    lastModified: 1566264410083,
    lastModifiedDate: Tue Aug 20 2019 09: 26: 50 GMT + 0800(中国标准时间) {},
    name: "2_171038921b89fac1b07660f3dff66dd5.jpg",
    size: 15304,
    type: "image/jpeg",
    uid: 1571121923148,
    webkitRelativePath: ""
}
fileUtils.fileToImage(fileObject) // expected output: {<img src="data:image/jpeg;base64...">}
```

**语法**

> **fileUtils.fileToImage(fileObject).then(res=>{}).catch(err=>{})**

**参数**

`fileObject` : `必选` <br>
用于转换的 Blob 对象

**返回值**

返回一个 Promise 类型，其中成功携带的是转换后的 Img 类型，失败则返回错误信息

<hr>

### strToUint16Array

`strToUint16Array()` 将一串 String 转 Uint16Array 对象

```javascript
let uint16Array = strToUint16Array('测试用例')
console.log(uint16Array) // expected output: [ 27979, 35797, 29992, 20363 ]
```

**语法**

> **fileUtils.strToUint16Array(text)**

**参数**

`text` : `必选` <br>
用于转换的 字符串

**返回值**

返回一个 转换后的 Uint16Array

<hr>

### uint16ToUint8Array

`uint16ToUint8Array()` Uint16Array 对象 转 Uint8Array 对象

```javascript
let uint8Array = uint16ToUint8Array(
  new Uint16Array([27979, 35797, 29992, 20363])
)
console.log(uint8Array) // expected output: [ 75, 109, 213, 139, 40, 117, 139, 79 ]
```

**语法**

> **fileUtils.uint16ToUint8Array(array)**

**参数**

`array` : `必选` <br>
用于转换的 Uint16Array

**返回值**

返回一个 转换后的 Uint8Array

<hr>

### base64ToUnincode

`base64ToUnincode()` base64 对应符号值 转 unicode 对应的码值

```javascript
let uint8Array = base64ToUnincode(0) //base64 0-A
console.log(uint8Array) // expected output: 65  unicode 65-A
```

**语法**

> **fileUtils.base64ToUnincode(number)**

**参数**

`number` : `必选` <br>
用于转换的符合 base64 规则的编码值

**返回值**

返回一个 对应字符转换 unicode 后的码值

<hr>

### uint16ToUint8Array

`uint16ToUint8Array()` Uint16Array 对象 转 Uint8Array 对象

```javascript
let uint8Array = uint16ToUint8Array(
  new Uint16Array([27979, 35797, 29992, 20363])
)
console.log(uint8Array) // expected output: [ 75, 109, 213, 139, 40, 117, 139, 79 ]
```

**语法**

> **fileUtils.uint16ToUint8Array(array)**

**参数**

`array` : `必选` <br>
用于转换的 Uint16Array

**返回值**

返回一个 转换后的 Uint8Array

<hr>

### uint8ArrayToDataUrl

`uint8ArrayToDataUrl()` uin8Array 转 base64 字符串

```javascript
let base64 = fileUtils.uint8ArrayToDataUrl(
  new Uint8Array([75, 109, 213, 139, 40, 117, 139, 79])
) //base64 0-A
console.log(base64) // expected output: S23Viyh1i08=
```

**语法**

> **fileUtils.uint8ArrayToDataUrl(uint8Array)**

**参数**

`uint8Array` : `必选` <br>
用于转换的 uint8Array 序列

**返回值**

返回一个 转换后的 base64 字符串

<hr>

### strToDataUrl

`strToDataUrl()` string 转 base64 字符串

```javascript
let base64 = fileUtils.strToDataUrl('哈哈A') //base64 0-A
console.log(base64) // expected output: 5ZOI5ZOIQQ==
```

**语法**

> **fileUtils.strToDataUrl(string)**

**参数**

`string` : `必选` <br>
用于转换的字符串

**返回值**

返回一个 转换后的 base64 字符串

<hr>

### dataUrlToUint8Array

`dataUrlToUint8Array()` 将一个 base64 字符串转 Uint8Array 对象

```javascript
let dataUrl =
  'data:image/png;base64,iVBORw0...1FyA6PP+/c05X5qye+kB6QHpgbTzwH/qQ8Z7ou7LmwAAAABJRU5ErkJggg=='
fileUtils.dataUrlToUint8Array(dataUrl) // expected output: {dataUrl:Uint8Array(384967)....}
```

**语法**

> **fileUtils.dataUrlToUint8Array(dataUrl)**

**参数**

`dataUrl` : `必选` <br>
用于转换的 base64 字符串

**返回值**

返回一个 Uint8Array 对象

<hr>

### utf16ToUint8ByUtf8

`utf16ToUint8ByUtf8()` 将 utf16 编码规则的字符串转换成基于 utf8 编码规则的 uint8Array

```javascript
let array = fileUtils.utf16ToUint8ByUtf8('哈哈A')
console.log(array) // expected output: [ 229, 147, 136, 229, 147, 136, 65 ]
```

**语法**

> **fileUtils.utf16ToUint8ByUtf8(string)**

**参数**

`string` : `必选` <br>
用于转换的 基于 utf16 的字符串

**返回值**

返回一个 Uint8Array 对象

<hr>

### dataUrlToBlob

`dataUrlToBlob()` 将一个 base64 字符串转 Blob 对象

```javascript
let dataUrl =
  'data:image/png;base64,iVBORw0...1FyA6PP+/c05X5qye+kB6QHpgbTzwH/qQ8Z7ou7LmwAAAABJRU5ErkJggg=='
fileUtils.dataUrlToBlob(dataUrl) // expected output: {size: 633850,type: "image/png"}
```

**语法**

> **fileUtils.dataUrlToBlob(dataUrl)**

**参数**

`dataUrl` : `必选` <br>
用于转换的 base64 字符串

**返回值**

返回一个 Blob 对象

<hr>

### dataUrlToFile

`dataUrlToFile()` 将一个 base64 字符串转 File 对象

```javascript
let dataUrl =
  'data:image/png;base64,iVBORw0...1FyA6PP+/c05X5qye+kB6QHpgbTzwH/qQ8Z7ou7LmwAAAABJRU5ErkJggg=='
console.log(fileUtils.dataUrlToFile(dataUrl, 'a'))
// expected output: {name: "a",lastModified: 1576206385992,
//                  lastModifiedDate: Fri Dec 13 2019 11:06:25 GMT+0800 (中国标准时间) {},
//                  webkitRelativePath: "",
//                  size: 579474,
//                  type: "image/png"}
```

**语法**

> **fileUtils.dataUrlToFile(dataUrl, fileName)**

**参数**

`dataUrl` : `必选` <br>
用于转换的 base64 字符串

`fileName` : `可选` <br>
转换后的 file 的名称，默认为 file

**返回值**

返回一个具有特定名称的 file 对象

<hr>

### download

`download()` 根据 url 地址下载文件，并指定文件名

```javascript
let jpegUrl =
  'https://static.weixiaotong.com.cn/static/icon/appstore/19b16d26102f5594c4bdb5b0cf97594a39c83db1109824-nLfx9K_sq320.jpeg'
let svgUrl = 'https://static.weixiaotong.com.cn/static/icon/appstore/all.svg'
fileUtils.download(jpegUrl, '红色') // expected output:以红色.jpeg 命名将文件下载本地
fileUtils.download(svgUrl, 'noaLL') // expected output:以noaLL.svg 命名将文件下载本地
```

**语法**

> **fileUtils.download(downloadUrl, fileName)**

**参数**

`downloadUrl` : `必选` <br>
下载地址

`fileName` : `可选` <br>
要保存的文件名

**返回值**

无返回，直接调用浏览器下载

<hr>

### getLinkFileInfo

`getLinkFileInfo()` 根据链接获取文件的名称信息

```javascript
let jpegUrl = 'https://static.weixiaotong.com.cn/static/icon/download.svg'
fileUtils.getLinkFileInfo(jpegUrl) // {fullName: "download.svg",name: "download",type: "svg"}
```

**语法**

> **fileUtils.getLinkFileInfo(url)**

**参数**

`url` : `必选` <br>
要获取的在线资源地址

**返回值**
一个包含 fullName（文件全称），name（文件名字），type（文件类型）的对象

<hr>

## imageUtils 类

| 属性                          | 描述                                 |
| ----------------------------- | ------------------------------------ |
| **imgThumbnailParam80**       | 将图片压缩成 80\*80 的分辨率大小     |
| **imgThumbnailParam120**      | 将图片压缩成 120\*120 的分辨率大小   |
| **imgThumbnailParam160**      | 将图片压缩成 160\*160 的分辨率大小   |
| **imgThumbnailParam320**      | 将图片压缩成 320\*320 的分辨率大小   |
| **imgThumbnailParam375**      | 将图片压缩成 375\*375 的分辨率大小   |
| **imgThumbnailParamRadius50** | 将图片压缩成半径 50 分辨率的圆形图片 |

| 方法                                                    | 描述                                      |
| ------------------------------------------------------- | ----------------------------------------- |
| [**checkUrl**](#checkUrl)                               | 检验 url 是否包含公司域名                 |
| [**isSupportCompress**](#issupportcompress)             | 检测图片地址是否支持压缩                  |
| [**compressImageByImgParam**](#compressimagebyimgparam) | 根据相对比进行图片压缩                    |
| [**checkUrlStoreCloud**](#checkUrlStoreCloud)           | 检测 url 属于哪个平台                     |
| [**addWatermark**](#addwatermark)                       | 图片加水印                                |
| [**ossUrlSafeBase64**](#ossurlsafebase64)               | 将字符串转换成符合 oss 的 url 安全 base64 |
| [**getFastImage**](#getFastImage)                       | 图片压缩快捷处理                          |
| [**getOriginUrl**](#getoriginurl)                       | 过滤 url 配置，获取原始图片               |
| [**ossImageProcess**](#ossImageProcess)                 | aliyunOss 图片处理                        |
| [**ossImageProcessV2**](#ossImageProcess)               | aliyunOss 图片处理                        |
| [**ossImageProcessV3**](#ossImageProcess)               | aliyunOss 图片处理                        |
| [**imageProcess**](#imageProcess)                       | 云存储图片处理                            |
| [**cosImageProcess**](#cosImageProcess)                 | 腾讯云 cos 图片处理                       |

<hr>

### checkUrl

`checkUrl()` 检验 url 是否包含公司域名

```javascript
const url =
  'https://cosstatic.weixiaotong.com.cn/static/icon/main/menu/3db9af3f05641721c4306ed0a95f25c636f792f7.png'
const isInclude = imageUtils.checkUrl(url)
console.log(isInclude) // expected output:false
```

**语法**

> **imageUtils.checkUrl(url)**

**参数**

`url` : `必选` <br>
检测的 url

**返回值**

返回一个 Boolean 类型，true 表示包含，false 表示不包含

<hr>

### isSupportCompress

`isSupportCompress()` 检测图片地址是否支持压缩

```javascript
const isSupportCompress = imageUtils.isSupportCompress(
  'https://static.weixiaotong.com.cn/static/icon/edit.png'
)
console.log(isSupportCompress) // expected output:true
const isSupportCompress2 = imageUtils.isSupportCompress(
  'https://static.weixiaotong.com.cn/static/icon/card-dark--angle.svg'
)
console.log(isSupportCompress2) // expected output:false
```

**语法**

> **imageUtils.isSupportCompress(url)**

**参数**

`url` : `必选` <br>
用于验证的图片 URL

**返回值**

返回一个 Boolean 类型，true 表示支持，false 表示不支持

<hr>

### compressImageByImgParam

`compressImageByImgParam()` 图片压缩相对比 （弃用）请使用 ossImageProcess

```javascript
const compressUrl = imageUtils.compressImageByImgParam(
  'https://static.weixiaotong.com.cn/static/icon/edit.png',
  80
)
console.log(compressUrl) // expected output:https://static.weixiaotong.com.cn/static/icon/edit.png?x-oss-process=image/resize,m_fill,h_80,w_80
```

**语法**

> **imageUtils.compressImageByImgParam(url, aspectValue)**

**参数**

`url` : `必选` <br>
用于验证的图片 URL

`aspectValue` : `可选` <br>
压缩比值——规定的几种宽高的值
**返回值**

返回一个增加压缩配置的图片 URL, 只限公司域名，且支持压缩

<hr>

### checkUrlStoreCloud

`checkUrlStoreCloud()` 图片压缩相对比 （弃用）请使用 ossImageProcess

```javascript
const url = imageUtils.checkUrlStoreCloud(
  'https://static.weixiaotong.com.cn/static/icon/edit.png'
)
console.log(url) // expected output:oss
```

**语法**

> **imageUtils.checkUrlStoreCloud(url)**

**参数**

`url` : `必选` <br>
用于验证的图片 URL

**返回值**

返回 cos(腾讯云)、oss(阿里云)、other('未知地址')

<hr>

### addWatermark

`addWatermark()` 图片加水印 （弃用）请使用 ossImageProcess

```javascript
const url = imageUtils.addWatermark(
  'https://static.weixiaotong.com.cn/static/icon/edit.png',
  '' //配置已遗弃不可使用
)
console.log(url) // expected output:https://static.weixiaotong.com.cn/static/icon/edit.png
```

**语法**

> **imageUtils.addWatermark(url, watermark)**

**参数**

`url` : `必选` <br>
用于验证的图片 URL

`watermark` : `可选` <br>
阿里云特定水印代码（需要后台配置）
**返回值**

返回一个增加水印的图片 URL, 只限公司域名

<hr>

### ossUrlSafeBase64

`ossUrlSafeBase64()` 将一个字符串转换成符合 oss 所需的 url 安全 base64 常用于水印

```javascript
const url = imageUtils.ossUrlSafeBase64('哈哈A')
console.log(url) // expected output:5ZOI5ZOIQQ==
```

**语法**

> **imageUtils.ossUrlSafeBase64(text)**

**参数**

`text` : `必选` <br>
用于进行 url 安全 base64 转换的文本

**返回值**

返回一个增加水印的图片 URL, 只限公司域名

<hr>

### getFastImage

`getFastImage()` 图片压缩快捷处理

```javascript
const url = imageUtils.getFastImage(
  'https://static.weixiaotong.com.cn/static/icon/edit.png',
  'thumbnail'
)
console.log(url) // expected output:https://static.weixiaotong.com.cn/static/icon/edit.png!max320x320
```

**语法**

> **imageUtils.getFastImage(url)**

**参数**

`url` : `必选` <br>
要压缩的图片 url <br>
<br>
`type` : `必选` <br>
压缩模式

- oss 目前设置两种边界：320(thumbnail)、1920(preivew)
- cos 目前设置三种边界：320(thumbnail)、1920(preivew)、1200(medium) <br>

**返回值**

压缩后的图片 url

<hr>

### getOriginUrl

`getOriginUrl()` 过滤获得初始图

```javascript
const url = imageUtils.getOriginUrl(
  'https://static.weixiaotong.com.cn/static/icon/edit.png?x-oss-process=image/resize,m_fill,h_80,w_80'
)
console.log(url) // expected output:https://static.weixiaotong.com.cn/static/icon/edit.png
```

**语法**

> **imageUtils.getOriginUrl(url)**

**参数**

`text` : `必选` <br>
用于进行 配置过滤的 图片 url

**返回值**

返回一个无配置 query 的图片 url

<hr>

### ossImageProcess

`ossImageProcess()` aliyunOss 图片处理

```javascript
const url = imageUtils.ossImageProcess(
  'https://static.weixiaotong.com.cn/static/icon/edit.png',
  {
    resize: {
      w: 320,
      h: 320,
    },
    quality: {
      q: 70,
    },
  }
)
console.log(url) // expected output:https://static.weixiaotong.com.cn/static/icon/edit.png?x-oss-process=image/resize,w_320,h_320/quality,q_70
```

**语法**

> **imageUtils.ossImageProcess(url, options)**

**参数**

`url` : `必选` <br>
用于验证的图片 URL

`options` : `可选` <br>
详情可看方法描述以对象形式集成 aliYun 图片处理的相关配置
**返回值**

返回一个转换后的图片 url

<hr>

### imageProcess

`imageProcess()` aliyunOss 图片处理

```javascript
const url = imageUtils.imageProcess(
  'https://static.weixiaotong.com.cn/static/icon/edit.png',
  {
    resize: {
      w: 320,
      h: 320,
    },
  }
)
```

**语法**

> **imageUtils.imageProcess(url, options)**

**参数**

`url` : `必选` <br>
待处理的阿里云图片 URL

`options` : `可选` <br>
图片处理的各类参数
详情可看方法描述以对象形式集成 aliYun 图片处理的相关配置，目前只兼容旋转
**返回值**

返回一个转换后的图片 url

<hr>

### cosImageProcess

`cosImageProcess()` 腾讯云 图片处理

```javascript
const url = imageUtils.cosImageProcess(
  'https://cosstatic.weixiaotong.com.cn/static/icon/edit.png',
  {
    resize: {
      w: 320,
      h: 320,
    },
  }
)
```

**语法**

> **imageUtils.cosImageProcess(url, options)**

**参数**

`url` : `必选` <br>
用于验证的腾讯云图片 URL

`options` : `可选` <br>
图片处理的各类参数
详情可看方法描述以对象形式集成 腾讯云 图片处理的相关配置
**返回值**

返回一个转换后的图片 url

<hr>

## randomUtils 类

| 方法                                        | 描述                          |
| ------------------------------------------- | ----------------------------- | --- |
| [**randomHexadecimal**](#randomhexadecimal) | 检验 image 生成英文随机字符串 |     |

<hr>

### randomHexadecimal

`randomHexadecimal()` 生成英文随机字符串

```javascript
randomUtils.randomHexadecimal() // expected output 391D0D7AE8CE4D557EA18E2AC73DFCC7
randomUtils.randomHexadecimal(12) // expected output  5F692DA2F464
```

**语法**

> **randomUtils.randomHexadecimal(length)**

**参数**

`length` : `可选` <br>
返回的字符串长度，默认 32 位

**返回值**

返回一个字符范围在 '0123456789ABCDEF' 内得随机字符串

<hr>

## transformUtils 类

| 方法                                                    | 描述                                                         |
| ------------------------------------------------------- | ------------------------------------------------------------ | --- |
| [**numberToUppercaseLetter**](#numbertouppercaseletter) | 将数字转化为大写字母并返回                                   |     |
| [**convertToChinese**](#converttochinese)               | 将数字转化为文字                                             |     |
| [**numToSex**](#numtosex)                               | 根据输入的数字奇偶性判断性别                                 |     |
| [**strToMD5**](#strtomd5)                               | 将给定的字符串通过 MD5 加密后输出                            |     |
| [**strToSalt**](#strtosalt)                             | 将给定的字符串加盐后输出                                     |     |
| [**sizeToReadableSize**](#sizetoreadablesize)           | 将传入的数值按照文件大小单位向上转换，转换至最大整数大小单位 |     |
| [**numberToReadable**](#numbertoreadable)               | 将数字转换为易读的数字字符串                                 |     |

<hr>

### numberToUppercaseLetter

`numberToUppercaseLetter()` 将数字转化为大写字母并返回

```javascript
transformUtils.numberToUppercaseLetter(1) // expected output: B
transformUtils.numberToUppercaseLetter(3) // expected output: D
```

**语法**

> **transformUtils.numberToUppercaseLetter(nubmer)**

**参数**

`nubmer` : `必选` <br>
数字

**返回值**

返回一个大写字母

<hr>

### convertToChinese

`convertToChinese()` 将数字转化为文字，或星期几

```javascript
transformUtils.convertToChinese(0) // expected output: 零
transformUtils.convertToChinese(0, 'weekday') // expected output: 日
```

**语法**

> **transformUtils.convertToChinese(num, type)**

**参数**

`num` : `必选` <br>
数字

`type` : `可选` <br>
返回类型，可选 `weekday` , 默认 `''`

**返回值**

文字

<hr>

### numToSex

`numToSex()` 根据输入的数字奇偶性判断性别

```javascript
transformUtils.numToSex(1) // expected output { sex: 1,sexCh: '男',isMan: true }
transformUtils.numToSex(4) // expected output { sex: 4,sexCh: '女',isWomen: true }
```

**语法**

> **transformUtils.numToSex(number)**

**参数**

`number` : `必选` <br>
数字

**返回值**

性别信息的对象

<hr>

### strToMD5

`strToMD5()` 将给定的字符串通过 MD5 加密后输出

```javascript
transformUtils.strToMD5('测试') // expected output db06c78d1e24cf708a14ce81c9b617ec

// 其他格式统一返回 487f7b22f68312d2c1bbc93b1aea445b

transformUtils.strToMD5(1) // expected output 487f7b22f68312d2c1bbc93b1aea445b
transformUtils.strToMD5([123]) // expected output 487f7b22f68312d2c1bbc93b1aea445b
```

**语法**

> **transformUtils.strToMD5(str)**

**参数**

`str` : `必选` <br>
需要加密的字符串，其他格式统一返回见上图

**返回值**

通过 MD5 加密后的字符串

<hr>

### strToSalt

`strToSalt()` 将给定的字符串加盐后输出

```javascript
transformUtils.strToSalt('测试') // expected output 1581a4ee
transformUtils.strToSalt('测试', '16') // expected output 1581a4ee258b76e1
```

**语法**

> **transformUtils.strToSalt(str, length)**

**参数**

`str` : `必选` <br>
需要加盐的字符串，其他格式报错

`length` : `可选` <br>
指定加盐后的字符串长度, 默认 8

**返回值**

加盐后的字符串

<hr>

### sizeToReadableSize

`sizeToReadableSize()` 将传入的数值按照文件大小单位向上转换，转换至最大整数大小单位

```javascript
transformUtils.sizeToReadableSize(1024, 'BYTE') // expected output 256.00B
transformUtils.sizeToReadableSize(2048) // 2.00KB
transformUtils.sizeToReadableSize(12) // expected output 12.00B
transformUtils.sizeToReadableSize(12, 'KB') // expected output 12.00KB
transformUtils.sizeToReadableSize('12BYTE', 'KB') // expected output 3.00B
```

**语法**

> **transformUtils.sizeToReadableSize(size, currentUnit)**

**参数**

`size` : `必选` <br>
待转化的二进制大小，若是以对应大小单位当后缀，则 currentUnit 无效，以携带的具体单位为准

`currentUnit` : `可选` <br>
当前待转换数值的单位，默认为 B，可选 `['BYTE', 'B', 'KB', 'MB', 'GB', 'TB', 'PB']`

**返回值**
带单位的数值

<hr>

### numberToReadable

`numberToReadable()` 将数字转换为易读的数字字符串

```javascript
transformUtils.numberToReadable(3333) // expected output 3,333
transformUtils.numberToReadable(3333333) // expected output 3,333,333
transformUtils.numberToReadable(33334, 4, '.') // expected output 3.3334
```

**语法**

> **transformUtils.numberToReadable(number, splitLength, splitStr)**

**参数**

`number` : `必选` <br>
需要分割的数字

`splitLength` : `可选` <br>
分割长度，默认 3

`splitStr` : `可选` <br>
分隔符，默认', '

**返回值**
易读的数字字符串

<hr>

## validatorUtils 类

| 方法                                | 描述                 |
| ----------------------------------- | -------------------- | --- |
| [**isImageUrl**](#isimageurl)       | 验证是否为图片链接   |     |
| [**isVideoUrl**](#isvideourl)       | 验证是否为视频链接   |     |
| [**isMobilePhone**](#ismobilephone) | 验证是否为手机号码   |     |
| [**isLicense**](#islicense)         | 车牌号验证           |     |
| [**isValidID**](#isvalidid)         | 判断身份证号是否有效 |     |
| [**isCoords**](#iscoords)           | 经纬度验证           |     |

<hr>

### isImageUrl

`isImageUrl()` 验证是否为图片链接

```javascript
const url = 'img'
validatorUtils.isImageUrl(url) // expected output false
validatorUtils.isImageUrl(url + '.svg') // expected output true
```

**语法**

> **validatorUtils.isImageUrl(url)**

**参数**

`url` : `必选` <br>
需要检测的 url, 以 `.` + `jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga|svg|JPG|BMP|GIF|ICO|PCX|JPEG|TIF|PNG|RAW|TGA|SVG` 为后缀的 url

**返回值**

布尔值

<hr>

### isVideoUrl

`isVideoUrl()` 验证是否为视频链接

```javascript
const url = 'video'
validatorUtils.isVideoUrl(url) // expected output false
validatorUtils.isVideoUrl(url + '.avi') // expected output true
```

**语法**

> **validatorUtils.isVideoUrl(url)**

**参数**

`url` : `必选` <br>
需要检测的 url, 以 `.` + `swf|flv|mp4|rmvb|avi|mpeg|ra|ram|mov|wmv` 为后缀的 url

**返回值**

布尔值

<hr>

### isMobilePhone

`isMobilePhone()` 验证是否为 `中国大陆` 手机号码

```javascript
validatorUtils.isMobilePhone('13345674567') // expected output true
validatorUtils.isMobilePhone('8613345674567') // expected output true
validatorUtils.isMobilePhone('+8613345674567') // expected output true
validatorUtils.isMobilePhone('13345674567') // expected output true
validatorUtils.isMobilePhone('12345674567') // expected output false
```

**语法**

> **validatorUtils.isMobilePhone(phoneNumber)**

**参数**

`phoneNumber` : `必选` <br>
检测的字符串

**返回值**

布尔值

<hr>

### isLicense

`isLicense()` 车牌号验证

```javascript
validatorUtils.isLicense('皖A8888A') // expected output true
validatorUtils.isLicense('皖A8888') // expected output false
```

**语法**

> **validatorUtils.isLicense(license)**

**参数**

`license` : `必选` <br>
检测的字符串

**返回值**

布尔值

<hr>

### isValidID

`isValidID()` 判断身份证号是否有效

**语法**

> **validatorUtils.isValidID(id)**

**参数**

`id` : `必选` <br>
id 身份证号

**返回值**

布尔值

<hr>

### isCoords

`isCoords()` 经纬度验证

**语法**

> **validatorUtils.isCoords(coords)**

**参数**

`coords` : `必选` <br>
经纬度字符串形式，用 `,` 隔开

**返回值**

布尔值

<hr>

## crypto 对象

| 方法                      | 描述           |
| ------------------------- | -------------- |
| [**AESUtils**](#AESUtils) | AES 加密、解密 |
| [**MD5**](#MD5)           | MD5 加密       |

### AESUtils

#### options

| option | 描述         | default(weixt 后端保持一致)      |
| ------ | ------------ | -------------------------------- |
| mode   | AES 加密模式 | CBC （后端也存在 ECB，注意区分） |
| pad    | AES 加密填充 | Pkcs7                            |
| key    | 密钥         | J90a\*&j\_~!ks^T4j ｜            |
| vi     | 密钥偏移量   | ''                               |

#### methods

| 方法名                  | 描述                    |
| ----------------------- | ----------------------- |
| [**encrypt**](#encrypt) | 对传入字符进行 AES 加密 |
| [**decrypt**](#decrypt) | 对传入密文进行解密      |

#### encrypt

**_语法_**

> cryptoUtils. AES.encrypt(text, options)

| 参数    | 描述                             |
| ------- | -------------------------------- |
| text    | 传入明文（待加密内容）           |
| options | [**aesUtils.options**](#options) |

#### decrypt

**_语法_**

> cryptoUtils. AES.decrypt(text, options)

| 参数    | 描述                             |
| ------- | -------------------------------- |
| text    | 传入密文（待解密内容）           |
| options | [**aesUtils.options**](#options) |

<hr/>

### MD5

| 方法名                  | 描述              |
| ----------------------- | ----------------- |
| [**encrypt**](#encrypt) | 简单用用 MD5 加密 |

#### encrypt

**_语法_**

> cryptoUtils. MD5.encrypt(text)

<hr/>

# Package

- [upload **Web 云上传对象存储 类**](#upload)
- [Debugger **Web 防调试 Debugger 类**](#debugger)
- [LocalDB **Web 本地 LocalDB 缓存类**](#localdb)

## Upload

> web 版，前端直传对应云平台对象存储相关功能的聚合类

| 属性              | 描述                                                   |
| ----------------- | ------------------------------------------------------ |
| **cloudInstance** | 获取已做过初始化的对应云实例, 若返回空则表示没有初始化 |

| 方法                                        | 描述                                                           |
| ------------------------------------------- | -------------------------------------------------------------- |
| [**init**](#init)                           | 根据 bucketName 去初始化对应云存储环境                         |
| [**setDefaultConfig**](#setdefaultconfig)   | 设置默认的相关配置                                             |
| [**setSceneName**](#setscenename)           | 设置场景名称，用于指明文件保存的场景文件夹, 默认 global 文件夹 |
| [**uploadFileToCloud**](#uploadfiletocloud) | 组装存储路径，单个文件上传到云存储，并根据文件类型做特殊处理   |

### init

`init()` 使用该上传类的前置函数，根据指定的上传桶和云平台类型，自动初始化对应平台实例

```javascript
// 由于项目内都会将UploadOss实例化挂载在Vue上，后续UploadOss的相关使用的this都默认指Vue
Vue.prototype.$wxtCloud = new WxtUploadCloud()
// 以上在项目载入时触已处理
// 默认腾讯云COS，桶 weixt-static
this.$wxtCloud.init()
// 使用阿里云OSS，桶 weixt-office
this.$wxtCloud.init('weixt-office', 'oss')
// 执行上传
this.$wxtCloud.uploadFileToCloud(fileList)
```

**语法**

> **this.\$wxtCloud.init(bucketName:string, cloudType:string)**

**参数**

`bucketName` : `可选` <br>
用于指定上传到对象存储中哪个 bucket 中，若不设置则默认上传到**weixt-static**文件夹

`cloudType` : `可选` <br>
用于指定采用哪个云平台的对象存储，若不设置则默认使用腾讯云 COS

**返回值**

返回一个 Promise 对象，若成功对应云平台实例化则 resolve, 失败则 reject

<hr>

### setDefaultConfig

`setDefaultConfig()` 设置默认配置

```javascript
// 在初始化获取用户身份的地方
Vue.prototype.$wxtCloud.setDefaultConfig({
  folderPath: userInfo.campusid,
  id: userInfo.userid,
})
```

**语法**

> **this.\$wxtCloud.setDefaultConfig(config: DefaultConfig)**

**参数**

`config.folderPath` : `必选` <br>
用于全局设置上传的默认路径，通常在用户对应的校区文件夹下
`config.id` : `必选` <br>
唯一标识（当多用户环境提交时间一致时，用于唯一生成文件名），通常为用户 id

**返回值**

同步执行，无返回值

<hr>

### setSceneName

`setSceneName()` 设置场景名称，用于指明上传的文件要保存在哪个场景文件夹下, 不适用则默认 global 文件夹下

```javascript
this.$wxtCloud.setSceneName('app')
```

**语法**

> **this.\$wxtCloud.setSceneName(sceneName: string)**

**参数**

`sceneName` : `必选` <br>
跟在 defaultFolderPath 之后，通常是对应应用文件夹

**返回值**

同步执行，无返回值

<hr>

### uploadFileToCloud

`uploadFileToCloud()` 单个文件上传到对应云平台对象存储，如果上传的是视频，则会走视频转码逻辑

```javascript
// 详细例子可参考 mobile_zjlll全局组件wxt-uploader--> uploadCore.vue
this.$wxtCloud.init('app')
const fileInfo = {
    file: new File(...)
}
const option = {
    // 通过bind的绑定机制，来具体的记录每个文件的上传进度
    progress: progressMethod.bind(this.percentList[index]),
    timeout: 30 * 60 * 1000
}
this.$wxtCloud.uploadFileToCloud(fileInfo)
```

**语法**

> **uploadFileToCloud(fileInfo: FileInfo, options?: OssUploadOption & Partial<CosUploadOption>)**

**参数**

`fileInfo` : `必选` <br>

<!-- 未完待续 -->

标志上传的参数，FileInfo 对象
fileInfo 对象结构:{

    file: 文件对象
    fileName?: 自定义文件名
    path?:  保存的路径(只指派路径，保留自动生成文件名和后缀)
    fullPath?: 文件全路径(从根路径到后缀完全自定义)
    suffix?: 文件后缀

}

`options` : `可选` <br>
上传到对应云存储所需参数，集成 cos 的 `uploadFile` 和 oss 的 `MultipartUpload` 的配置
详情可看[COS uploadFile](https://cloud.tencent.com/document/product/436/64960#.E9.AB.98.E7.BA.A7.E4.B8.8A.E4.BC.A0)、[OSS MultipartUpload](https://github.com/ali-sdk/ali-oss#multipartuploadname-file-options)，以下只列增加的额外参数。

`options.paralleId` : `可选` <br>
用于控制当前用户并发请求下唯一标识相同，时间相同导致的文件名重复，通常是列表上传使用，值为对应 index

`options.retryCount` : `可选、OSS专用` <br>
用于控制当因为连接异常或者网络不稳定等原因导致断链的重连次数, 默认重连 3 次

`options.continuingly(error as string, options)` : `可选、OSS专用` <br>
用于断点续传发生时的回调, `error` 为触发时的报错， `options` 是触发时的配置项，并附带 checkPoint

**返回值**

返回一个 Promise<string>类型 resolve 是一个上传成功后返回的云对象存储地址，reject 失败返回对应错误信息

<hr>

## Debugger

> `Debugger` 内部方法都为 `static` 无需实例化

|   Mehtod   | Description                     | Param |
| :--------: | :------------------------------ | :---: |
| antiDebug  | 浏览器内开启防调试能力          |  --   |
| printWeixt | 在浏览器 Console 字符画 - WEIXT |  --   |

<hr>

&nbsp;

## LocalDB

> 将数据存放于本地缓存空间。缓存空间优先级： `INDEXEDDB > WEBSQL > LOCALSTORAGE` 。 如图: <img src="https://static.weixiaotong.com.cn/static/icon/wxt-utils/企业微信截图_aa597993-f6d6-4208-90f3-3650f5837fb9.png">

> 借助第三方 pkg:**[localforage](http://localforage.docschina.org/)**

> <font color="#dd0000"> 下述方法进行：“读写删除”都是异步执行。**实际使用请根据业务场景选择同/异步方式调用**（如：get 须同步调用，remove 可根据业务场景选择） </font>

| Methods        | Description                                         |                Postion                |
| :------------- | :-------------------------------------------------- | :-----------------------------------: |
| getLocalDB     | 查询本地 LocalDB 中的数据                           |     [doc:getLocalDB](#getlocaldb)     |
| removeLocalDB  | 删除本地 LocalDB 中的数据                           |  [doc:removeLocalDB](#removelocaldb)  |
| getTable       | 查询 LocalDB 中某 table 数据                        |       [doc:getTable](#gettable)       |
| removeTable    | 删除 LocalDB 中某 table 数据                        |    [doc:removeTable](#removetable)    |
| setDataCache   | 设置 cache（向 localDB.table 中写数据 - cachekey）  |   [doc:setDataCache](#setdatacache)   |
| getDataCache   | 查询 cache（ localDB.table 中查询 cacheKey 数据）   |   [doc:getDataCache](#getdatacache)   |
| removeDataCahe | 删除 cache（从 localDB.table 中删除 cacheKey 数据） | [doc:removeDataCahe](#removedatacahe) |

<hr>

### getLocalDB

`getLocalDB()` 查询当前本地 LocalDB 中的缓存数据

```javascript
const localQueue = await this.$localDB.getLocalDB()
```

**语法**

**this.\$localDB.getLocalDB()**

**返回值** `Promise<ITable[]>`

**NOTE:** [interface ITable](http://weixt.spacetech.com.cn:19180/fe/wxt-utils/blob/browser/src/package/DB/index.ts)

<hr>

### removeLocalDB

`removeLocalDB()` 删除本地 LocalDB 中所有缓存数据

```javascript
this.$localDB.removeLocalDB()
```

**语法**

**this.\$localDB.removeLocalDB()**

**返回值** `undefined`

<hr>

### getTable

`getTable()` 查询 LocalDB 中某一 table 所有数据

```javascript
this.$localDB.getTable('APP_CHAT')
```

**语法**

**this.\$localDB.getTable(tableKey:string)**

**参数**

`tabkeKey` : `必须` <br/>
需要查询 LocaDB 中的 table（tableKey）

**返回值** `ITable`

**NOTE:** [interface ITable](http://weixt.spacetech.com.cn:19180/fe/wxt-utils/blob/browser/src/package/DB/index.ts)

<hr>

### removeTable

`removeTable()` 删除 LocalDB 中某一 table

```javascript
this.$localDB.removeTable()
```

**语法**

**this.\$localDB.removeTable()**

**返回值** `undefined`

<hr>

### setDataCache

`setDataCache()` 向 LocalDB 某个 table 内设置 cache

```javascript
this.$localDB.setDataCache(cacheValue, 'cacheKey', 'tableKey')
```

**语法**

**this.\$localDB.setDataCache(cacheValue:string, cacheKey?:string, tableKey:string)**

**参数**

| Attribute  | Description                                                            | Type             |         Default         |
| ---------- | ---------------------------------------------------------------------- | ---------------- | :---------------------: |
| cacheValue | 缓存值 - 类型做好校验（并不是所有数据类型都支持保存 - JSON.stringify ) | string/number/等 |            -            |
| cacheKey   | 可选填参数 - 缓存值 cacheValue 对应他的 key - 用于 cache 取值          | string           |     5 位长度随机数      |
| tableKey   | cache 存放在 LocaDB.table 的那一个 table 中                            | string           | LOCAL_TABLE_DEAFULT_KEY |

<br>

**NOTE:** cacheKey 给入 `void 0 (undefined)` ，内部将自动生成一个随机数作为 `cacheKey` 。同时后续要无法准确取出该 cache

**返回值：** `undefined`

<hr>

### getDataCache

`getDataCache()` 在 `LocalDB` 中，从某个 `table` 中取出某项 `cache`

```javascript
// get cache error chats
this.chatWatingList = await this.$localDB.getDataCache(
  'APP_CHAT',
  this.chatCacheKey
)
```

**语法**

**this.\$localDB.getDataCache(tableKey:string, cacheKey:string)**

**参数**

| Attribute | Description      | Type   |
| --------- | ---------------- | ------ |
| tableKey  | LocalDB 中的表名 | string |
| cacheKey  | 表内 cacheKey    | string |

**返回值：** `Promise<any>` (返回类型由存入 cacheValue 决定)

<hr>

### removeDataCahe

`removeDataCahe()` 在 `LocalDB` 中，某个 `table` 中删除某项 `cache`

```javascript
this.$locaDB.removeDataCahe('BASE_OPENID', `${appid}_${campusid}`)
```

**语法**

**this.\$localDB.removeDataCahe(tableKey:string, cacheKey:string)**

**参数**

| Attribute | Description      | Type   |
| --------- | ---------------- | ------ |
| tableKey  | LocalDB 中的表名 | string |
| cacheKey  | 表内 cacheKey    | string |

**返回值：** `undefined`
