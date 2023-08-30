// 工具类引入
import ArrayUtils from "./array";
import AssistUtils from "./assist";
import DispathUrl from "./dispathUrl";
import ToolKit from "./toolKit";

export const toolKit = new ToolKit();
export const dispathUrl = new DispathUrl();
export const assistUtils = new AssistUtils();
export const arrayUtils = new ArrayUtils();

// 工具类

// 包库

const XcUtils = {
  assistUtils,
  arrayUtils,
  dispathUrl,
  toolKit,
};

export default XcUtils;
