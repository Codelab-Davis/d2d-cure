
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.13.0
 * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
 */
Prisma.prismaVersion = {
  client: "5.13.0",
  engine: "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CharacterizationDataScalarFieldEnum = {
  id: 'id',
  resid: 'resid',
  resnum: 'resnum',
  resmut: 'resmut',
  oligo_ordered: 'oligo_ordered',
  plasmid_verified: 'plasmid_verified',
  expressed: 'expressed',
  yield_avg: 'yield_avg',
  KM_avg: 'KM_avg',
  KM_SD: 'KM_SD',
  kcat_avg: 'kcat_avg',
  kcat_SD: 'kcat_SD',
  kcat_over_KM: 'kcat_over_KM',
  kcat_over_KM_SD: 'kcat_over_KM_SD',
  T50: 'T50',
  T50_SD: 'T50_SD',
  T50_k: 'T50_k',
  T50_k_SD: 'T50_k_SD',
  Tm: 'Tm',
  Tm_SD: 'Tm_SD',
  Rosetta_score: 'Rosetta_score',
  raw_data_id: 'raw_data_id',
  temp_raw_data_id: 'temp_raw_data_id',
  WT_raw_data_id: 'WT_raw_data_id',
  WT_temp_raw_data_id: 'WT_temp_raw_data_id',
  ab1_filename: 'ab1_filename',
  gel_filename: 'gel_filename',
  creator: 'creator',
  teammate: 'teammate',
  teammate2: 'teammate2',
  teammate3: 'teammate3',
  pi: 'pi',
  institution: 'institution',
  submitted_for_curation: 'submitted_for_curation',
  approved_by_pi: 'approved_by_pi',
  curated: 'curated',
  reference1: 'reference1',
  reference2: 'reference2',
  reference3: 'reference3',
  comments: 'comments'
};

exports.Prisma.KineticRawDataScalarFieldEnum = {
  id: 'id',
  user_name: 'user_name',
  plate_num: 'plate_num',
  variant: 'variant',
  cell_data: 'cell_data',
  slope_units: 'slope_units',
  yield: 'yield',
  yield_units: 'yield_units',
  dilution: 'dilution',
  substrate_dilution: 'substrate_dilution',
  purification_date: 'purification_date',
  assay_date: 'assay_date',
  csv_filename: 'csv_filename',
  plot_filename: 'plot_filename',
  updated: 'updated',
  parent_id: 'parent_id',
  approved_by_student: 'approved_by_student'
};

exports.Prisma.OligosScalarFieldEnum = {
  id: 'id',
  variant: 'variant',
  oligo: 'oligo'
};

exports.Prisma.SequenceScalarFieldEnum = {
  id: 'id',
  resnum: 'resnum',
  Rosetta_resnum: 'Rosetta_resnum',
  PDBresnum: 'PDBresnum',
  resid: 'resid'
};

exports.Prisma.TempRawDataScalarFieldEnum = {
  id: 'id',
  user_name: 'user_name',
  plate_num: 'plate_num',
  variant: 'variant',
  temp_values: 'temp_values',
  cell_data: 'cell_data',
  slope_units: 'slope_units',
  purification_date: 'purification_date',
  assay_date: 'assay_date',
  csv_filename: 'csv_filename',
  plot_filename: 'plot_filename',
  updated: 'updated',
  parent_id: 'parent_id',
  approved_by_student: 'approved_by_student'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.KineticRawData_slope_units = exports.$Enums.KineticRawData_slope_units = {
  min_1min_Kin: 'min_1min_Kin',
  s_1s_Kin: 's_1s_Kin',
  min_3min_Kin: 'min_3min_Kin',
  s_10s_Kin: 's_10s_Kin'
};

exports.KineticRawData_yield_units = exports.$Enums.KineticRawData_yield_units = {
  A280_: 'A280_',
  mg_mL_: 'mg_mL_',
  mM_: 'mM_',
  M_: 'M_'
};

exports.TempRawData_slope_units = exports.$Enums.TempRawData_slope_units = {
  min_3min_Temp: 'min_3min_Temp',
  s_3s_Temp: 's_3s_Temp',
  min_1min_Temp: 'min_1min_Temp',
  s_1s_Temp: 's_1s_Temp'
};

exports.Prisma.ModelName = {
  CharacterizationData: 'CharacterizationData',
  KineticRawData: 'KineticRawData',
  Oligos: 'Oligos',
  Sequence: 'Sequence',
  TempRawData: 'TempRawData'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
