export const handleInputNameChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  index: number,
  state: any,
  setState: any
) => {
  const { value } = e.target;
  const list = [...state];
  list[index].articleName = value;
  setState(list);
};
export const handleInputPriceChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  index: number,
  state: any,
  setState: any
): void => {
  const rawList = [...state];
  rawList[index].price = e.target.value;
  rawList[index].index = index;

  setState(rawList);
};

export const handleQuantityChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  index: number,
  state: any,
  setState: any
): void => {
  const list = [...state];
  list[index].quantity = parseFloat(e.target.value);

  setState(list);
};

export const handleVATType = (bool: boolean, index: number, state: any) => {
  const list = [...state];

  if (bool === true) {
    list[index].VATType = 'D';
  } else {
    list[index].VATType = 'B';
  }
};

export const handleIsFood = (bool: boolean, index: number, state: any) => {
  const list = [...state];
  list[index].isFood = bool;
};
