export default class ArrayUtils {
  /**
   * 检测是否为一个安全数组,若不是返回空数组
   * @param array   数据源
   */
  safeArray<T>(array: T[]) {
    return Array.isArray(array) ? array : []
  }
  /**
   * 检验一个数组是非为空。
   * true条件(一定为数组，且是空数组)
   * @param array   数据源
   */
  isEmptyArray(array: any): array is any[] {
    return Array.isArray(array) && !array.length
  }
  /**
   * 检验一个数组是否为有效数组。
   * true条件(一定为数组，且数组内有值)
   * @param  array   数据源
   */
  isValidArray(array: any): array is any[] {
    return Array.isArray(array) && !!array.length
  }

  /**
   * 将根据key值获取对象数组中的对应的键值组成数组，若key是数组，则根据key中的值重新组装对象数组
   * @param  {T[]} list   原对象数组
   * @param  {K|K[]} key key值或key数组
   */
  getKeysList<T, K extends keyof T>(list: T[], key: K | K[]): any[] {
    const result: T | any[] = []
    list.forEach((item) => {
      let temp: any = {}
      if (Array.isArray(key)) {
        key.forEach((key) => {
          temp[key] = item[key]
        })
        result.push(temp)
      } else {
        result.push(item[key])
      }
    })
    return result
  }

  /**
   * 数组去重,如果传key则是对象数组去重-根据对象对应key的value值去除重复,不支持直接对比引用类型
   * @param {Array<T>} list 需要判断的数组
   * @param {K} key 需要对比的键名
   */
  filterDuplicate<T, K extends keyof T>(list: T[] | any[], key?: K) {
    const length = list.length
    const listSet: Set<any> = new Set()
    for (let item of list) {
      listSet.add(item[key] || item)
    }
    if (key) {
      return list.filter((item) => {
        let flag = listSet.has(item[key])
        listSet.delete(item[key])
        return flag
      })
    } else {
      return Array.from(listSet)
    }
  }
}
