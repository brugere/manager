// Generated by https://quicktype.io

export interface HubResponse {
  status: string;
  data: HubResponseData;
}

export interface HubResponseData {
  auth: StatusObject<Auth>;
  bills: StatusObject<Bills>;
  billingServices: StatusObject<BillingServicesObject>;
  catalog: StatusObject<Catalog[]>;
  certificates: StatusObject<string[]>;
  debt: StatusObject<Debt>;
  lastOrder: StatusObject<LastOrder>;
  me: StatusObject<User>;
  notifications: StatusObject<OvhNotification>;
  paymentMethods: StatusObject<{}>;
  services: StatusObject<Services>;
  support: StatusObject<SupportObject>;
  survey: string;
  supportLevel: StatusObject<SupportLevel>;
}

export interface StatusObject<T> {
  status: string;
  data: T;
}

export interface Auth {
  user: {};
  description: string;
}

export interface SupportObject {
  count: number;
  data: SupportDemand[];
}

export interface SupportDemand {
  subject: string;
  serviceName: string;
  state: string;
  ticketId: number;
}

export interface BillingServicesObject {
  data: BillingService[];
  count: number;
}

export interface BillingService {
  canDeleteAtExpiration: boolean;
  contactAdmin: string;
  contactBilling: string;
  domain: string;
  id: number | string;
  status: string;
  engagedUpTo: Date;
  expiration: string;
  renew: Renew;
  renewalType: string;
  serviceId: string;
  serviceType: string;
  url: string;
}

export interface Renew {
  forced: boolean;
  period: number | null;
  automatic: boolean;
  manualPayment: boolean;
  deleteAtExpiration: boolean;
}

export interface Bills {
  total: number;
  period: Period;
  currency: Currency;
}

export interface Currency {
  symbol: string;
  code: string;
  format: string;
}

export interface Period {
  from: string;
  to: string;
}

export interface Catalog {
  productName: string;
  order: string;
  category?: string;
  universe: UniverseEnum;
  name: string;
  description: string;
  highlight?: boolean;
  regions?: string[];
  excludeSubsidiaries?: string[];
}

export enum UniverseEnum {
  BareMetalCloud = 'Bare Metal Cloud',
  HostedPrivateCloud = 'Hosted Private Cloud',
  PublicCloud = 'Public Cloud',
  Telecom = 'Telecom',
  WebCloud = 'Web Cloud',
}

export interface Debt {
  unmaturedAmount: DueAmount;
  active: boolean;
  todoAmount: DueAmount;
  dueAmount: DueAmount;
  pendingAmount: DueAmount;
}

export interface DueAmount {
  value: number;
  currencyCode: string;
  text: string;
}

export interface LastOrder {
  tax: DueAmount;
  url: string;
  date: string;
  pdfUrl: string;
  orderId: number;
  password: string;
  priceWithTax: DueAmount;
  expirationDate: string;
  retractionDate: null;
  priceWithoutTax: DueAmount;
}

export interface User {
  phone: string;
  address: string;
  email: string;
  phoneCountry: string;
  vat: string;
  country: string;
  spareEmail: string;
  birthCity: string;
  companyNationalIdentificationNumber: null;
  legalform: string;
  birthDay: string;
  organisation: string;
  firstname: string;
  corporationType: string;
  language: string;
  sex: string;
  customerCode: string;
  ovhCompany: string;
  name: string;
  state: string;
  nationalIdentificationNumber: null;
  city: string;
  italianSDI: string;
  fax: string;
  area: string;
  ovhSubsidiary: string;
  nichandle: string;
  zip: string;
  currency: Currency;
}

export interface OvhNotification {
  id: string;
  date: string;
  description: string;
  level: string;
  status: string;
  subject: string;
  urlDetails?: URLDetails;
}

export interface URLDetails {
  universe: string;
  relativePath: string;
  href: string;
}

export interface Services {
  count: number;
  data: Products;
}

export interface Products {
  [key: string]: Service;
}

export interface Service {
  count: number;
  data: ProductsData[];
}

export enum LicensePropertyIDsEnum {
  BillingAccount = 'billingAccount',
  Domain = 'domain',
  ID = 'id',
  IP = 'ip',
  Name = 'name',
  PackName = 'packName',
  ProjectID = 'project_id',
  Service = 'service',
  ServiceName = 'serviceName',
  UUID = 'uuid',
}

export interface Resource {
  name: string;
  state: State;
  product?: Product;
  displayName: string;
}

export interface Product {
  name: string;
  description: string;
}

export enum State {
  Active = 'active',
  Deleted = 'deleted',
  Suspended = 'suspended',
  ToActivate = 'toActivate',
  ToSuspend = 'toSuspend',
}

export interface Route {
  path: string;
}

export enum ServiceType {
  DedicatedCloud = 'DEDICATED_CLOUD',
  Essentials = 'ESSENTIALS',
}

export interface UniverseClass {
  EU: Eu;
  CA: Eu | null;
  US: Eu | null;
}

export enum Eu {
  Dedicated = 'dedicated',
  Empty = '',
  PublicCloud = 'public-cloud',
  Web = 'web',
}

export interface ProductsData {
  resource: Resource;
  route: Route;
  serviceId: number;
  propertyId: LicensePropertyIDsEnum;
  url: null | string;
  universe: UniverseClass;
  serviceType?: ServiceType;
}

export interface SupportLevel {
  level: string;
}
