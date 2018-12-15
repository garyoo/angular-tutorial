export class PageVo {
  constructor(public pageIndex: number = 1,
              public pageSize: number = 10,
              public totalCount: number = 0) {
  }
}
