export default class ToolKit {
  constructor() {}

  public timer: string | number | NodeJS.Timeout | undefined;

  public switch = true;
  /**
   * 节流
   * @param  {fn} function
   * @param  {wait} number
   */
  public debounce(fn: () => void, wait = 1000) {
    return () => {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => fn.apply(this), wait);
    };
  }

  /**
   * 防抖
   * @param  {fn} function
   * @param  {wait} number
   */
  public throttle = (fn: () => void, wait = 1000) => {
    return () => {
      if (!this.switch) return;
      this.switch = false;
      setTimeout(() => {
        fn.apply(this);
        this.switch = true;
      }, wait);
    };
  };
}
