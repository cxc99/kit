export default class DispathUrl {
  /*  
  获取当前路由上的data 数据并且 返回obj
  **/
  public getUrlData() {
    let u = new URL(document.URL);

    let obj = <Record<string, any>>{};

    // 对参数进行遍历
    for (let [k, v] of u.searchParams.entries()) {
      obj[k] = v;
    }

    return obj;
  }
}
