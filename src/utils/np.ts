//  number-precision 缩写
// 使用这些方法，仍然需要注意数值范围、舍入策略和比较运算等方面的问题，根据具体的应用场景进行适当的调整和处理。
export default class Np {
  // 加法运算
  public add(a: number, b: number) {
    const precision = Math.max(this.getPrecision(a), this.getPrecision(b))
    const multiplier = Math.pow(10, precision)
    return (
      (Math.round(a * multiplier) + Math.round(b * multiplier)) / multiplier
    )
  }

  // 减法运算
  public subtract(a: any, b: number) {
    return this.add(a, -b)
  }

  // 乘法运算
  public multiply(a: number, b: number) {
    const precision = this.getPrecision(a) + this.getPrecision(b)
    const multiplier = Math.pow(10, precision)
    return (
      (Math.round(a * multiplier) * Math.round(b * multiplier)) /
      (multiplier * multiplier)
    )
  }

  // 除法运算
  public divide(a: number, b: number) {
    const precision = this.getPrecision(a) - this.getPrecision(b)
    const divisor = Math.pow(10, precision)
    return Math.round((a / b) * divisor) / divisor
  }

  // 获取浮点数的小数位数
  public getPrecision(num: any) {
    const str = String(num)
    const decimalIndex = str.indexOf('.')
    return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1
  }
}
