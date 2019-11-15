import { objectValues } from '@reagentum/front-core/lib/common/utils/common';

import CoreService from '@reagentum/front-core/lib/server/services/utils/CoreService';

/*
 * Если в serverConfig.server.endpointServices[serviceName] нету используется
 * по умолчанию serverConfig.server.endpointServices.middlewareApiService
 */
export default class Service<%=moduleNameCapital%> extends CoreService {
  serviceName = 'Service<%=moduleNameCapital%>';

  /**
   @override

   если его определить то все методы
     innerFindRecords
     findRecords
     findRecordsWithPagination
     createRecord
     readRecord
     updateRecord
     deleteRecord
     patchRecord
     - заработают автоматом

   * @return {null}
   */
  getCrudUrlsPrefix() {
    return <%=moduleNameCamel%>;
  }

  //   /**
  //    * @override
  //    *
  //    * query: {
  //    *   filters
  //    *
  //    *   search: PropTypes.string,
  //        startPage: PropTypes.number,
  //        itemsPerPage: PropTypes.number,
  //        sortBy: PropTypes.string,
  //        sortDesc: PropTypes.bool,
  //    * }
  //    */
  // async innerFindRecords(query, searchFields, options = undefined, withPagination = false) {
  //   const {
  //   filters,
  //   sortBy,
  //   sortDesc,
  //   search,
  //
  //   startPage: page,
  //   itemsPerPage: pageSize,
  // } = query;
  //
  //   const {
  //   items,
  //   pageCount,
  //   pageNumber,
  //   // pageSize,
  //   totalItems,
  // } = await this.sendWithAuth('/call-me-back', {
  //   page,
  //   pageSize,
  // });
  //
  //   return createTableResponse(
  //   // await this.serializeRecords(items, this.OPERATION_TYPE.FIND, options)),
  //   items,
  //   createMeta({
  //   sortBy,
  //   sortDesc,
  //   search,
  //
  //   startPage: pageNumber,
  //   itemsPerPage: pageSize,
  // }),
  //   totalItems,
  //   );
  // }
}
