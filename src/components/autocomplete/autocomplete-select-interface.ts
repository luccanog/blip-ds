/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AutocompleteOption {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bulkOption?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  status?: any;
}

export interface AutocompleteChangeEventDetail {
  value: any | any[] | undefined | null;
  code?: string;
}

export type AutocompleteSelectType = 'text' | 'icon';

export type AutocompleteOptionsPositionType = 'top' | 'bottom';
