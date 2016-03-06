/// <reference path="../../../../typings/tsd.d.ts" />

export class ArrayOps{
	public static remove(arr:Array<any>, item:any) {
		for (var i = arr.length; i--;) {
			if (arr[i] === item) {
				arr.splice(i, 1);
			}
		}
	}
}