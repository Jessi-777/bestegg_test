import { getJsonContentsFromDir, writeFileRecords } from './record.js';
import { parseRecordSet, filterRecordSet, wreckRecordSet } from './util.js';

const jsonContents = await getJsonContentsFromDir('./src/js/');
const unfilteredSet = parseRecordSet(jsonContents);
const filteredSet = filterRecordSet(unfilteredSet);
const wreckedSet = wreckRecordSet(filteredSet);

writeFileRecords('./output/newresults.json', wreckedSet);

export {
  getJsonContentsFromDir,
  writeFileRecords,
  parseRecordSet,
  wreckRecordSet,
};
