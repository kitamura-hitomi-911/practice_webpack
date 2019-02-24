'use strict';
/**
 * 文字列か否か
 * @param obj
 * @returns {boolean}
 */
export default function isString(obj){
	return typeof (obj) === "string" || obj instanceof String;
}