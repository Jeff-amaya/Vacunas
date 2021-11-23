import { HttpParams } from '@angular/common/http';

export class UtilsService {
  static buildQueryParams(source: Object): HttpParams {
    let target: HttpParams = new HttpParams();
    Object.entries(source).forEach((entry) => {
      target = target.append(entry[0], entry[1]);
    });
    return target;
  }
}
