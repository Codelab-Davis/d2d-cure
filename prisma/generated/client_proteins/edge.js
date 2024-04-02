
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
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
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
      "value": "C:\\Users\\visha\\CodeLab\\D2D WSQ24\\d2d-cure\\prisma\\generated\\client_proteins",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
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
  "clientVersion": "5.10.2",
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
  "inlineSchema": "generator client {\r\n  provider = \"prisma-client-js\"\r\n  output   = \"./generated/client_proteins\"\r\n}\r\n\r\ndatasource db {\r\n  provider = \"mysql\"\r\n  url      = \"mysql://admin:hellothere@d2ddb.ckxjdd4ew6cp.us-east-2.rds.amazonaws.com:3306/BglB\"\r\n}\r\n\r\nmodel CharacterizationData {\r\n  id                     Int      @id @default(autoincrement()) @db.UnsignedMediumInt\r\n  resid                  String   @db.Char(1)\r\n  resnum                 Int      @db.UnsignedSmallInt\r\n  resmut                 String   @db.Char(1)\r\n  oligo_ordered          Boolean  @default(false)\r\n  plasmid_verified       Boolean  @default(false)\r\n  expressed              Boolean?\r\n  yield_avg              Float?   @db.Float\r\n  KM_avg                 Float?   @db.Float\r\n  KM_SD                  Float?   @db.Float\r\n  kcat_avg               Float?   @db.Float\r\n  kcat_SD                Float?   @db.Float\r\n  kcat_over_KM           Float?   @db.Float\r\n  kcat_over_KM_SD        Float?   @db.Float\r\n  T50                    Float?   @db.Float\r\n  T50_SD                 Float?   @db.Float\r\n  T50_k                  Float?   @db.Float\r\n  T50_k_SD               Float?   @db.Float\r\n  Tm                     Float?   @db.Float\r\n  Tm_SD                  Float?   @db.Float\r\n  Rosetta_score          Float?   @db.Float\r\n  raw_data_id            Int      @default(0) @db.UnsignedMediumInt\r\n  temp_raw_data_id       Int      @default(0) @db.UnsignedMediumInt\r\n  WT_raw_data_id         Int      @default(0) @db.UnsignedMediumInt\r\n  WT_temp_raw_data_id    Int      @default(0) @db.UnsignedMediumInt\r\n  ab1_filename           String?  @db.VarChar(84)\r\n  gel_filename           String?  @db.VarChar(84)\r\n  creator                String   @default(\"unknown\") @db.VarChar(30)\r\n  teammate               String?  @db.VarChar(30)\r\n  teammate2              String?  @db.VarChar(30)\r\n  teammate3              String?  @db.VarChar(30)\r\n  pi                     String   @db.VarChar(30)\r\n  institution            String   @db.VarChar(50)\r\n  submitted_for_curation Boolean  @default(false)\r\n  approved_by_pi         Boolean  @default(false)\r\n  curated                Boolean  @default(false)\r\n  reference1             Int      @default(0) @db.UnsignedTinyInt\r\n  reference2             Int      @default(0) @db.UnsignedTinyInt\r\n  reference3             Int      @default(0) @db.UnsignedTinyInt\r\n  comments               String?  @db.TinyText\r\n}\r\n\r\nmodel KineticRawData {\r\n  id                  Int                        @id @default(autoincrement()) @db.UnsignedMediumInt\r\n  user_name           String?                    @db.VarChar(30)\r\n  plate_num           String?                    @db.VarChar(24)\r\n  variant             String?                    @db.VarChar(6)\r\n  cell_data           Bytes?                     @db.Blob\r\n  slope_units         KineticRawData_slope_units\r\n  yield               Float?                     @db.Float\r\n  yield_units         KineticRawData_yield_units\r\n  dilution            Float?                     @db.Float\r\n  substrate_dilution  Int                        @default(3) @db.UnsignedTinyInt\r\n  purification_date   String                     @db.TinyText\r\n  assay_date          String                     @db.TinyText\r\n  csv_filename        String                     @db.VarChar(84)\r\n  plot_filename       String                     @db.VarChar(84)\r\n  updated             DateTime                   @default(now()) @db.DateTime(0)\r\n  parent_id           Int                        @db.UnsignedMediumInt\r\n  approved_by_student Boolean                    @default(false)\r\n}\r\n\r\nmodel Oligos {\r\n  id      Int    @id @default(autoincrement()) @db.UnsignedSmallInt\r\n  variant String @db.VarChar(5)\r\n  oligo   String @db.VarChar(33)\r\n}\r\n\r\nmodel Sequence {\r\n  id             Int     @id @db.UnsignedSmallInt\r\n  resnum         String  @db.VarChar(6)\r\n  Rosetta_resnum Int?    @db.UnsignedSmallInt\r\n  PDBresnum      String? @db.VarChar(6)\r\n  resid          String  @db.Char(1)\r\n}\r\n\r\nmodel TempRawData {\r\n  id                  Int                     @id @default(autoincrement()) @db.UnsignedMediumInt\r\n  user_name           String?                 @db.VarChar(30)\r\n  plate_num           String?                 @db.VarChar(24)\r\n  variant             String?                 @db.VarChar(6)\r\n  temp_values         Bytes?                  @db.Blob\r\n  cell_data           Bytes?                  @db.Blob\r\n  slope_units         TempRawData_slope_units\r\n  purification_date   String                  @db.TinyText\r\n  assay_date          String                  @db.TinyText\r\n  csv_filename        String                  @db.VarChar(84)\r\n  plot_filename       String                  @db.VarChar(84)\r\n  updated             DateTime                @default(now()) @db.DateTime(0)\r\n  parent_id           Int                     @db.UnsignedMediumInt\r\n  approved_by_student Boolean                 @default(false)\r\n}\r\n\r\nenum KineticRawData_slope_units {\r\n  min_1min_Kin @map(\"(1/min)\")\r\n  s_1s_Kin   @map(\"(1/s)\")\r\n  min_3min_Kin @map(\"(10^-3/min)\")\r\n  s_10s_Kin   @map(\"(10^-3/s)\")\r\n}\r\n\r\nenum TempRawData_slope_units {\r\n  min_3min_Temp @map(\"(10^-3/min)\")\r\n  s_3s_Temp   @map(\"(10^-3/s)\")\r\n  min_1min_Temp @map(\"(1/min)\")\r\n  s_1s_Temp   @map(\"(1/s)\")\r\n}\r\n\r\nenum KineticRawData_yield_units {\r\n  A280_  @map(\"A280*\")\r\n  mg_mL_ @map(\"(mg/mL)\")\r\n  mM_    @map(\"(mM)\")\r\n  M_     @map(\"(M)\")\r\n}\r\n",
  "inlineSchemaHash": "bbea2865a8cd327e2aec7088819819ee464ce1667a57366aa37fc21c17341e7d",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"CharacterizationData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resnum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resmut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oligo_ordered\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plasmid_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expressed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"yield_avg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"KM_avg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"KM_SD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kcat_avg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kcat_SD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kcat_over_KM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kcat_over_KM_SD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T50\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T50_SD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T50_k\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T50_k_SD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tm_SD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Rosetta_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"raw_data_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"temp_raw_data_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WT_raw_data_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WT_temp_raw_data_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ab1_filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gel_filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"unknown\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teammate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teammate2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teammate3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institution\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submitted_for_curation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"approved_by_pi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"curated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reference1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reference2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reference3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"KineticRawData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plate_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"variant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cell_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slope_units\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KineticRawData_slope_units\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"yield\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"yield_units\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KineticRawData_yield_units\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dilution\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"substrate_dilution\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":3,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purification_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assay_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"csv_filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plot_filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"approved_by_student\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Oligos\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"variant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oligo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Sequence\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resnum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Rosetta_resnum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PDBresnum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TempRawData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plate_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"variant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"temp_values\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cell_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slope_units\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TempRawData_slope_units\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purification_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assay_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"csv_filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plot_filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"approved_by_student\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"KineticRawData_slope_units\":{\"values\":[{\"name\":\"min_1min_Kin\",\"dbName\":\"(1/min)\"},{\"name\":\"s_1s_Kin\",\"dbName\":\"(1/s)\"},{\"name\":\"min_3min_Kin\",\"dbName\":\"(10^-3/min)\"},{\"name\":\"s_10s_Kin\",\"dbName\":\"(10^-3/s)\"}],\"dbName\":null},\"TempRawData_slope_units\":{\"values\":[{\"name\":\"min_3min_Temp\",\"dbName\":\"(10^-3/min)\"},{\"name\":\"s_3s_Temp\",\"dbName\":\"(10^-3/s)\"},{\"name\":\"min_1min_Temp\",\"dbName\":\"(1/min)\"},{\"name\":\"s_1s_Temp\",\"dbName\":\"(1/s)\"}],\"dbName\":null},\"KineticRawData_yield_units\":{\"values\":[{\"name\":\"A280_\",\"dbName\":\"A280*\"},{\"name\":\"mg_mL_\",\"dbName\":\"(mg/mL)\"},{\"name\":\"mM_\",\"dbName\":\"(mM)\"},{\"name\":\"M_\",\"dbName\":\"(M)\"}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {}
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

