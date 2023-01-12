export enum LoadingState {
  IDLE,
  LOADING,
  FAILED,
}

export type AssetsResponse = {
  status: string;
  data: Assets;
};

export type Assets = {
  benefitsList: BenefitsList[];
  supportedCountriesAirtime: string[];
  momoRedeemOptions: MomoRedeemOption[];
  acceptedTokens: AcceptedTokens;
  giftCardsRLD: GiftCardsRLD;
  crytoFacts: CrytoFacts;
  celoWalletAddress: string;
  contests: Contest[];
  fees: Fees;
  validity: Validity;
  subscriptionPlans: SubscriptionPlan[];
  giftCardsWG: GiftCardsWG;
  ecommerce: Ecommerce[];
};

export interface AcceptedTokens {
  xrpl: string[];
}

export interface BenefitsList {
  name: string;
  img?: string;
  description?: string;
  countries?: string[];
  available: boolean;
  code?: string;
  type: Type;
  id?: number;
  vendor?: Vendor;
  product_type?: ProductType;
  created_at?: string;
  handle?: string;
  status?: Status;
  tags?: Tag[];
  price?: number;
  currency?: PurpleCurrency;
  sizes?: Size[];
  variants?: Variant[];
  images?: string[];
  discount?: Discount;
  productId?: number;
  productName?: string;
  global?: boolean;
  senderFee?: number;
  senderFeePercentage?: number;
  denominationType?: DenominationType;
  recipientCurrencyCode?: PurpleCurrency;
  minRecipientDenomination?: number | null;
  maxRecipientDenomination?: number | null;
  senderCurrencyCode?: PurpleCurrency;
  minSenderDenomination?: number | null;
  maxSenderDenomination?: number | null;
  fixedRecipientDenominations?: number[];
  fixedSenderDenominations?: number[] | null;
  fixedRecipientToSenderDenominationsMap?: { [key: string]: number } | null;
  logoUrls?: string[];
  brand?: Brand;
  country?: Country;
  redeemInstruction?: RedeemInstruction;
  countryCode?: CountryCode;
  chi_pvd?: ChiPvd;
  asset?: string;
  displayName?: string;
  enabled?: boolean;
  network?: string;
  fixedOnly?: boolean;
  variableOnly?: boolean;
  contractAddress?: string;
  offline?: boolean;
}

export interface Brand {
  brandId: number;
  brandName: string;
}

export enum ChiPvd {
  Rld = 'rld',
}

export interface Country {
  isoName: CountryCode;
  name: NameElement;
  flagUrl: string;
}

export enum CountryCode {
  Ng = 'NG',
}

export enum NameElement {
  Ghana = 'Ghana',
  Nigeria = 'Nigeria',
}

export enum PurpleCurrency {
  Eur = 'EUR',
  Usd = 'USD',
}

export enum DenominationType {
  Fixed = 'FIXED',
  Range = 'RANGE',
}

export interface Discount {
  name: DiscountName;
  percentOff: number;
}

export enum DiscountName {
  Save20 = 'Save 20%',
}

export enum ProductType {
  TShirt = 'T-Shirt',
}

export interface RedeemInstruction {
  concise: string;
  verbose: string;
}

export enum Size {
  L = 'L',
  M = 'M',
  S = 'S',
  The2Xl = '2XL',
  Xl = 'XL',
}

export enum Status {
  Active = 'active',
}

export enum Tag {
  Chimoney = 'chimoney',
  Tshirts = 'tshirts',
  Xrp = 'xrp',
}

export enum Type {
  Bank = 'Bank',
  DigitalCurrencies = 'Digital Currencies',
  GiftCards = 'Gift Cards',
  MobileAndInternet = 'Mobile and Internet',
  Products = 'Products',
  VirtualCard = 'Virtual Card',
  Wallet = 'Wallet',
}

export interface Variant {
  name: VariantName;
  created_at: string;
  price: number;
}

export enum VariantName {
  Black = 'Black',
  Blue = 'Blue',
  Gray = 'Gray',
  White = 'White',
}

export enum Vendor {
  Chimoney = 'Chimoney',
}

export interface Contest {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  participateAppPath: string;
  contestInfoLink: string;
  qualification?: Qualification;
  prizeAmount: number;
  paused?: boolean;
}

export interface Qualification {
  chimoneyKey: string;
  requirement: string;
  value: number;
}

export interface CrytoFacts {
  assets: { [key: string]: Asset };
  depositMethods: { [key: string]: Method };
  settleMethods: { [key: string]: Method };
}

export interface Asset {
  id: string;
  name: string;
}

export interface Method {
  asset: string;
  displayName: string;
  enabled: boolean;
  invoice?: boolean;
  invoiceRequiresAmount?: boolean;
  network: string;
  contractAddress?: string;
  fixedOnly: boolean;
  variableOnly: boolean;
}

export interface Ecommerce {
  position: number;
  category: EcommerceCategory;
  categoryUrl: string;
  name: string;
  price: number | null;
  currency: CurrencyEnum | null;
  numberOfOffers: number;
  url: string;
  thumbnail: string;
  productId: string;
  marketplace: Marketplace;
}

export enum EcommerceCategory {
  AmazonDevicesAccessories = 'Amazon Devices & Accessories',
  BeautyPersonalCare = 'Beauty & Personal Care',
  CellPhonesAccessories = 'Cell Phones & Accessories',
  ComputersAccessories = 'Computers & Accessories',
  GiftCards = 'Gift Cards',
  HomeKitchen = 'Home & Kitchen',
  KitchenDining = 'Kitchen & Dining',
}

export enum CurrencyEnum {
  Empty = '$',
}

export enum Marketplace {
  Amazon = 'AMAZON',
}

export interface Fees {
  virtualCardIssuanceFee: VirtualCardIssuanceFee;
  giftCardIssuanceFee: Fee;
  mobileMoneyFee: Fee;
}

export interface Fee {
  value: number;
  percent: boolean;
}

export interface VirtualCardIssuanceFee {
  value: number;
  currency: PurpleCurrency;
}

export interface GiftCardsRLD {
  content: GiftCard[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  sort: Sort;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface GiftCard {
  productId: number;
  productName: string;
  global: boolean;
  senderFee: number;
  senderFeePercentage: number;
  denominationType: DenominationType;
  recipientCurrencyCode: PurpleCurrency;
  minRecipientDenomination: number | null;
  maxRecipientDenomination: number | null;
  senderCurrencyCode: PurpleCurrency;
  minSenderDenomination: number | null;
  maxSenderDenomination: number | null;
  fixedRecipientDenominations: number[];
  fixedSenderDenominations: number[] | null;
  fixedRecipientToSenderDenominationsMap: { [key: string]: number } | null;
  logoUrls: string[];
  brand: Brand;
  country: Country;
  redeemInstruction: RedeemInstruction;
  img: string;
  description: string;
  available: boolean;
  code: Code;
  type: Type;
  name: string;
  countryCode: CountryCode;
  chi_pvd: ChiPvd;
}

export enum Code {
  Giftcard = 'giftcard',
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface GiftCardsWG {}

export interface MomoRedeemOption {
  name: string;
  country: string;
  code: string;
  provider: Provider;
  SERVICE?: Service;
  'MIN AMOUNT'?: number;
  'MAX AMOUNT'?: string;
}

export interface Service {
  NETWORK: string;
}

export enum Provider {
  Cll = 'cll',
  Flw = 'flw',
}

export interface SubscriptionPlan {
  id: string;
  category: SubscriptionPlanCategory;
  name: string;
  price_per_month: number;
  setupFee: number;
  features: Features;
  transactionFeePercent: number;
}

export enum SubscriptionPlanCategory {
  APIPartner = 'api-partner',
  DisbursementPayout = 'disbursement-payout',
}

export interface Features {
  apiAccess: boolean;
  countries: NameElement[] | string;
  fundingOptions: FundingOption[] | string;
  maxCredit: number;
  apiCallCount: number;
  maxPayoutAmount: number | string;
  payoutAssets: PayoutAsset[] | string;
  support: Support[];
  professionalReceipt: boolean;
  accountManager: boolean;
  chimoneyHandlesPayout: boolean;
  postPaidInvoiceAndPO: boolean;
}

export enum FundingOption {
  Bank = 'bank',
  Card = 'card',
  Crypto = 'crypto',
}

export enum PayoutAsset {
  Airtime = 'airtime',
  Bank = 'bank',
  Giftcards = 'giftcards',
  MobileMoney = 'mobile money',
}

export enum Support {
  Chat = 'Chat',
  Email = 'Email',
  Phone = 'Phone',
}

export interface Validity {
  virtualCardValidity: VirtualCardValidity;
}

export interface VirtualCardValidity {
  value: number;
  unit: string;
}
