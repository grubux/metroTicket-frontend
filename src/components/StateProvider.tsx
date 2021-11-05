export interface GlobalStateInterface {
  articleName: string;
  price: number;
  VATType: string;
  isFood: boolean;
  quantity: number;
  index: number;
}

export interface RawGlobalStateInterface {
  articleName: string;
  price: string;
  VATType: string;
  isFood: boolean;
  quantity: number;
  index: number;
}

// export { GlobalStateInterface, RawGlobalStateInterface };
