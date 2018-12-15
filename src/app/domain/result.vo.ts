import {TodoVo} from './todo.vo';

export interface ResultVo {
  result: boolean;
  value: string;
  data?: TodoVo[];
  total?: number;
}
