export default class AssistUtils {
  /**
   * 类型检查。
   * 返回的结果是string型
   * @param  {obj} any   类型源
   * @return {String}    类型名称
   */
  public typeOf(obj: any): string {
    const toString = Object.prototype.toString;
    const map: any = {
      "[object Boolean]": "boolean",
      "[object Number]": "number",
      "[object String]": "string",
      "[object Function]": "function",
      "[object Array]": "array",
      "[object Date]": "date",
      "[object RegExp]": "regExp",
      "[object Undefined]": "undefined",
      "[object Null]": "null",
      "[object Object]": "object",
      "[object Error]": "error",
    };
    return map[toString.call(obj)];
  }

  /**
   * 深拷贝
   * 返回的结果是源类型
   * @param  {obj} any   类型源
   * @return {String}    类型名称
   */
  public deepCopy<T>(data: T): T {
    let o: any = data;
    if (Array.isArray(data)) {
      o = [];
      for (let i = 0; i < data.length; i++) {
        o.push(this.deepCopy(data[i]));
      }
    } else if (this.typeOf(data) === "object") {
      o = {};
      for (let i in data) {
        o[i] = this.deepCopy(data[i]);
      }
    }
    return o;
  }

  /**
   * 去掉所有html标记
   * @param  {str} string  文本型HTml
   */
  public delHtmlTag(str: string): string {
    let result = "";
    if (str) {
      result = str.replace(/<style(([\s\S])*?)<\/style>/g, "");
      result = result.replace(/<!--[\s\S]*?-->/g, "");
      result = result.replace(/<[^>]+>/g, "");
      result = result.replace(/&nbsp;/g, "");
      result = result.replace(/&ldquo;/g, "");
      result = result.replace(/&rdquo;/g, "");
      result = result.replace(/&mdash;/g, "");
      result = result.replace(/&hellip;/g, "");
      result = result.replace(/mdash;/g, "");
      result = result.replace(/ldquo;/g, "");
      result = result.replace(/rdquo;/g, "");
      result = result.replace(/hellip;/g, "");
      result = result.replace(/ /g, "");
    }
    return result;
  }

  /**
   *  拷贝指定文本到剪切板
   * @param text 要复制到剪切板的文本
   */
  public copyText(text: string) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.cssText =
      "position:fixed;top:0;left:0;opacity:0;z-index:-99;";
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  /**
   * 数字转成汉字
   * @params num === 要转换的数字
   * @return 汉字
   * */
  public toChinesNum(num: any) {
    let changeNum = [
      "零",
      "一",
      "二",
      "三",
      "四",
      "五",
      "六",
      "七",
      "八",
      "九",
    ];
    let unit = ["", "十", "百", "千", "万"];
    num = parseInt(num);
    let getWan = (temp: number) => {
      let strArr = temp.toString().split("").reverse();
      let newNum = "";
      let newArr: string[] = [];
      strArr.forEach((item: string, index: number) => {
        newArr.unshift(
          item === "0" ? changeNum[item] : changeNum[Number(item)] + unit[index]
        );
      });
      let numArr: number[] = [];
      newArr.forEach((m, n) => {
        if (m !== "零") numArr.push(n);
      });
      if (newArr.length > 1) {
        newArr.forEach((m, n) => {
          if (newArr[newArr.length - 1] === "零") {
            if (n <= numArr[numArr.length - 1]) {
              newNum += m;
            }
          } else {
            newNum += m;
          }
        });
      } else {
        newNum = newArr[0];
      }

      return newNum;
    };
    let overWan = Math.floor(num / 10000);
    let noWan = (num % 10000) as any;
    if (noWan.toString().length < 4) {
      noWan = "0" + noWan;
    }
    return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num);
  }
}
