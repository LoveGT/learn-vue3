/*
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-08 15:30:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-08 16:04:45
 */
export interface ITreeData {
  name: string
  icon?: string
  nums?: number
  children?: ITreeData[] | []
}