import { branchList } from './branch_list';
import { bHidraMainlineBuildList } from './build_list.b-hidra-mainline'
import { mainDonat } from './main_donat';


export const fakeData: any[] = [
  branchList,
  bHidraMainlineBuildList,
  mainDonat
]

export * from './branch_list';
export * from './build_list.b-hidra-mainline'
export * from './main_donat';