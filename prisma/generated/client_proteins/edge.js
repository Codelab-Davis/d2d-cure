
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/vikramkarmarkar/Desktop/CodeLab/D2D_Project/d2d-cure/prisma/generated/client_proteins",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../..",
  "clientVersion": "5.9.1",
  "engineVersion": "5a9203d0590c951969e85a7d07215503f4672eb9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "mysql://admin:hellothere@d2ddb.ckxjdd4ew6cp.us-east-2.rds.amazonaws.com:3306/BglB"
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnRfcHJvdGVpbnMiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm15c3FsIgogIHVybCAgICAgID0gIm15c3FsOi8vYWRtaW46aGVsbG90aGVyZUBkMmRkYi5ja3hqZGQ0ZXc2Y3AudXMtZWFzdC0yLnJkcy5hbWF6b25hd3MuY29tOjMzMDYvQmdsQiIKfQoKbW9kZWwgQ2hhcmFjdGVyaXphdGlvbkRhdGEgewogIGlkICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkTWVkaXVtSW50CiAgcmVzaWQgICAgICAgICAgICAgICAgICBTdHJpbmcgICBAZGIuQ2hhcigxKQogIHJlc251bSAgICAgICAgICAgICAgICAgSW50ICAgICAgQGRiLlVuc2lnbmVkU21hbGxJbnQKICByZXNtdXQgICAgICAgICAgICAgICAgIFN0cmluZyAgIEBkYi5DaGFyKDEpCiAgb2xpZ29fb3JkZXJlZCAgICAgICAgICBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkKICBwbGFzbWlkX3ZlcmlmaWVkICAgICAgIEJvb2xlYW4gIEBkZWZhdWx0KGZhbHNlKQogIGV4cHJlc3NlZCAgICAgICAgICAgICAgQm9vbGVhbj8KICB5aWVsZF9hdmcgICAgICAgICAgICAgIEZsb2F0PyAgIEBkYi5GbG9hdAogIEtNX2F2ZyAgICAgICAgICAgICAgICAgRmxvYXQ/ICAgQGRiLkZsb2F0CiAgS01fU0QgICAgICAgICAgICAgICAgICBGbG9hdD8gICBAZGIuRmxvYXQKICBrY2F0X2F2ZyAgICAgICAgICAgICAgIEZsb2F0PyAgIEBkYi5GbG9hdAogIGtjYXRfU0QgICAgICAgICAgICAgICAgRmxvYXQ/ICAgQGRiLkZsb2F0CiAga2NhdF9vdmVyX0tNICAgICAgICAgICBGbG9hdD8gICBAZGIuRmxvYXQKICBrY2F0X292ZXJfS01fU0QgICAgICAgIEZsb2F0PyAgIEBkYi5GbG9hdAogIFQ1MCAgICAgICAgICAgICAgICAgICAgRmxvYXQ/ICAgQGRiLkZsb2F0CiAgVDUwX1NEICAgICAgICAgICAgICAgICBGbG9hdD8gICBAZGIuRmxvYXQKICBUNTBfayAgICAgICAgICAgICAgICAgIEZsb2F0PyAgIEBkYi5GbG9hdAogIFQ1MF9rX1NEICAgICAgICAgICAgICAgRmxvYXQ/ICAgQGRiLkZsb2F0CiAgVG0gICAgICAgICAgICAgICAgICAgICBGbG9hdD8gICBAZGIuRmxvYXQKICBUbV9TRCAgICAgICAgICAgICAgICAgIEZsb2F0PyAgIEBkYi5GbG9hdAogIFJvc2V0dGFfc2NvcmUgICAgICAgICAgRmxvYXQ/ICAgQGRiLkZsb2F0CiAgcmF3X2RhdGFfaWQgICAgICAgICAgICBJbnQgICAgICBAZGVmYXVsdCgwKSBAZGIuVW5zaWduZWRNZWRpdW1JbnQKICB0ZW1wX3Jhd19kYXRhX2lkICAgICAgIEludCAgICAgIEBkZWZhdWx0KDApIEBkYi5VbnNpZ25lZE1lZGl1bUludAogIFdUX3Jhd19kYXRhX2lkICAgICAgICAgSW50ICAgICAgQGRlZmF1bHQoMCkgQGRiLlVuc2lnbmVkTWVkaXVtSW50CiAgV1RfdGVtcF9yYXdfZGF0YV9pZCAgICBJbnQgICAgICBAZGVmYXVsdCgwKSBAZGIuVW5zaWduZWRNZWRpdW1JbnQKICBhYjFfZmlsZW5hbWUgICAgICAgICAgIFN0cmluZz8gIEBkYi5WYXJDaGFyKDg0KQogIGdlbF9maWxlbmFtZSAgICAgICAgICAgU3RyaW5nPyAgQGRiLlZhckNoYXIoODQpCiAgY3JlYXRvciAgICAgICAgICAgICAgICBTdHJpbmcgICBAZGVmYXVsdCgidW5rbm93biIpIEBkYi5WYXJDaGFyKDMwKQogIHRlYW1tYXRlICAgICAgICAgICAgICAgU3RyaW5nPyAgQGRiLlZhckNoYXIoMzApCiAgdGVhbW1hdGUyICAgICAgICAgICAgICBTdHJpbmc/ICBAZGIuVmFyQ2hhcigzMCkKICB0ZWFtbWF0ZTMgICAgICAgICAgICAgIFN0cmluZz8gIEBkYi5WYXJDaGFyKDMwKQogIHBpICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgQGRiLlZhckNoYXIoMzApCiAgaW5zdGl0dXRpb24gICAgICAgICAgICBTdHJpbmcgICBAZGIuVmFyQ2hhcig1MCkKICBzdWJtaXR0ZWRfZm9yX2N1cmF0aW9uIEJvb2xlYW4gIEBkZWZhdWx0KGZhbHNlKQogIGFwcHJvdmVkX2J5X3BpICAgICAgICAgQm9vbGVhbiAgQGRlZmF1bHQoZmFsc2UpCiAgY3VyYXRlZCAgICAgICAgICAgICAgICBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkKICByZWZlcmVuY2UxICAgICAgICAgICAgIEludCAgICAgIEBkZWZhdWx0KDApIEBkYi5VbnNpZ25lZFRpbnlJbnQKICByZWZlcmVuY2UyICAgICAgICAgICAgIEludCAgICAgIEBkZWZhdWx0KDApIEBkYi5VbnNpZ25lZFRpbnlJbnQKICByZWZlcmVuY2UzICAgICAgICAgICAgIEludCAgICAgIEBkZWZhdWx0KDApIEBkYi5VbnNpZ25lZFRpbnlJbnQKICBjb21tZW50cyAgICAgICAgICAgICAgIFN0cmluZz8gIEBkYi5UaW55VGV4dAp9Cgptb2RlbCBLaW5ldGljUmF3RGF0YSB7CiAgaWQgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRNZWRpdW1JbnQKICB1c2VyX25hbWUgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDMwKQogIHBsYXRlX251bSAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjQpCiAgdmFyaWFudCAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig2KQogIGNlbGxfZGF0YSAgICAgICAgICAgQnl0ZXM/ICAgICAgICAgICAgICAgICAgICAgQGRiLkJsb2IKICBzbG9wZV91bml0cyAgICAgICAgIEtpbmV0aWNSYXdEYXRhX3Nsb3BlX3VuaXRzCiAgeWllbGQgICAgICAgICAgICAgICBGbG9hdD8gICAgICAgICAgICAgICAgICAgICBAZGIuRmxvYXQKICB5aWVsZF91bml0cyAgICAgICAgIEtpbmV0aWNSYXdEYXRhX3lpZWxkX3VuaXRzCiAgZGlsdXRpb24gICAgICAgICAgICBGbG9hdD8gICAgICAgICAgICAgICAgICAgICBAZGIuRmxvYXQKICBzdWJzdHJhdGVfZGlsdXRpb24gIEludCAgICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDMpIEBkYi5VbnNpZ25lZFRpbnlJbnQKICBwdXJpZmljYXRpb25fZGF0ZSAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW55VGV4dAogIGFzc2F5X2RhdGUgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbnlUZXh0CiAgY3N2X2ZpbGVuYW1lICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig4NCkKICBwbG90X2ZpbGVuYW1lICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDg0KQogIHVwZGF0ZWQgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBkYi5EYXRlVGltZSgwKQogIHBhcmVudF9pZCAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkTWVkaXVtSW50CiAgYXBwcm92ZWRfYnlfc3R1ZGVudCBCb29sZWFuICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKfQoKbW9kZWwgT2xpZ29zIHsKICBpZCAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRTbWFsbEludAogIHZhcmlhbnQgU3RyaW5nIEBkYi5WYXJDaGFyKDUpCiAgb2xpZ28gICBTdHJpbmcgQGRiLlZhckNoYXIoMzMpCn0KCm1vZGVsIFNlcXVlbmNlIHsKICBpZCAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGIuVW5zaWduZWRTbWFsbEludAogIHJlc251bSAgICAgICAgIFN0cmluZyAgQGRiLlZhckNoYXIoNikKICBSb3NldHRhX3Jlc251bSBJbnQ/ICAgIEBkYi5VbnNpZ25lZFNtYWxsSW50CiAgUERCcmVzbnVtICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcig2KQogIHJlc2lkICAgICAgICAgIFN0cmluZyAgQGRiLkNoYXIoMSkKfQoKbW9kZWwgVGVtcFJhd0RhdGEgewogIGlkICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkTWVkaXVtSW50CiAgdXNlcl9uYW1lICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigzMCkKICBwbGF0ZV9udW0gICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI0KQogIHZhcmlhbnQgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoNikKICB0ZW1wX3ZhbHVlcyAgICAgICAgIEJ5dGVzPyAgICAgICAgICAgICAgICAgIEBkYi5CbG9iCiAgY2VsbF9kYXRhICAgICAgICAgICBCeXRlcz8gICAgICAgICAgICAgICAgICBAZGIuQmxvYgogIHNsb3BlX3VuaXRzICAgICAgICAgVGVtcFJhd0RhdGFfc2xvcGVfdW5pdHMKICBwdXJpZmljYXRpb25fZGF0ZSAgIFN0cmluZyAgICAgICAgICAgICAgICAgIEBkYi5UaW55VGV4dAogIGFzc2F5X2RhdGUgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgQGRiLlRpbnlUZXh0CiAgY3N2X2ZpbGVuYW1lICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig4NCkKICBwbG90X2ZpbGVuYW1lICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDg0KQogIHVwZGF0ZWQgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBkYi5EYXRlVGltZSgwKQogIHBhcmVudF9pZCAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgQGRiLlVuc2lnbmVkTWVkaXVtSW50CiAgYXBwcm92ZWRfYnlfc3R1ZGVudCBCb29sZWFuICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKfQoKZW51bSBLaW5ldGljUmF3RGF0YV9zbG9wZV91bml0cyB7CiAgbWluXzFtaW5fS2luIEBtYXAoIigxL21pbikiKQogIHNfMXNfS2luICAgQG1hcCgiKDEvcykiKQogIG1pbl8zbWluX0tpbiBAbWFwKCIoMTBeLTMvbWluKSIpCiAgc18xMHNfS2luICAgQG1hcCgiKDEwXi0zL3MpIikKfQoKZW51bSBUZW1wUmF3RGF0YV9zbG9wZV91bml0cyB7CiAgbWluXzNtaW5fVGVtcCBAbWFwKCIoMTBeLTMvbWluKSIpCiAgc18zc19UZW1wICAgQG1hcCgiKDEwXi0zL3MpIikKICBtaW5fMW1pbl9UZW1wIEBtYXAoIigxL21pbikiKQogIHNfMXNfVGVtcCAgIEBtYXAoIigxL3MpIikKfQoKZW51bSBLaW5ldGljUmF3RGF0YV95aWVsZF91bml0cyB7CiAgQTI4MF8gIEBtYXAoIkEyODAqIikKICBtZ19tTF8gQG1hcCgiKG1nL21MKSIpCiAgbU1fICAgIEBtYXAoIihtTSkiKQogIE1fICAgICBAbWFwKCIoTSkiKQp9Cg==",
  "inlineSchemaHash": "b5aa7f49e3871618b9fab5bb2ff757daaec16786c138fe0f4613cdbd2e425ada",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"CharacterizationData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resnum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resmut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oligo_ordered\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plasmid_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expressed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"yield_avg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"KM_avg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"KM_SD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kcat_avg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kcat_SD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kcat_over_KM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kcat_over_KM_SD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T50\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T50_SD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T50_k\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T50_k_SD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tm_SD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Rosetta_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"raw_data_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"temp_raw_data_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WT_raw_data_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WT_temp_raw_data_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ab1_filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gel_filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"unknown\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teammate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teammate2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teammate3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institution\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submitted_for_curation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"approved_by_pi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"curated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reference1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reference2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reference3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"KineticRawData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plate_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"variant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cell_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slope_units\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KineticRawData_slope_units\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"yield\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"yield_units\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KineticRawData_yield_units\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dilution\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"substrate_dilution\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":3,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purification_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assay_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"csv_filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plot_filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"approved_by_student\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Oligos\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"variant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oligo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Sequence\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resnum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Rosetta_resnum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PDBresnum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TempRawData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plate_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"variant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"temp_values\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cell_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slope_units\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TempRawData_slope_units\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purification_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assay_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"csv_filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plot_filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"approved_by_student\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"KineticRawData_slope_units\":{\"values\":[{\"name\":\"min_1min_Kin\",\"dbName\":\"(1/min)\"},{\"name\":\"s_1s_Kin\",\"dbName\":\"(1/s)\"},{\"name\":\"min_3min_Kin\",\"dbName\":\"(10^-3/min)\"},{\"name\":\"s_10s_Kin\",\"dbName\":\"(10^-3/s)\"}],\"dbName\":null},\"TempRawData_slope_units\":{\"values\":[{\"name\":\"min_3min_Temp\",\"dbName\":\"(10^-3/min)\"},{\"name\":\"s_3s_Temp\",\"dbName\":\"(10^-3/s)\"},{\"name\":\"min_1min_Temp\",\"dbName\":\"(1/min)\"},{\"name\":\"s_1s_Temp\",\"dbName\":\"(1/s)\"}],\"dbName\":null},\"KineticRawData_yield_units\":{\"values\":[{\"name\":\"A280_\",\"dbName\":\"A280*\"},{\"name\":\"mg_mL_\",\"dbName\":\"(mg/mL)\"},{\"name\":\"mM_\",\"dbName\":\"(mM)\"},{\"name\":\"M_\",\"dbName\":\"(M)\"}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {}
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

