import * as React from 'react';

export interface Option {
  name: string;
  value: string;
}

export interface Header {
  key: string;
  name: string;
  sortable?: boolean;
  center?: boolean;
}

export interface AutoCompleteProps extends React.InputHTMLAttributes<HTMLInputElement> {
  options: Option[];
  onUpdate?: (value: string | null) => void;
  defaultValue?: string;
  allowUserValues?: boolean;
  showListOnFocus?: boolean;
  width?: string;
}

export const AutoComplete: React.FC<AutoCompleteProps>;


export interface DataRow {
  [key: string]: any;
  overrides?: {
    [key: string]: React.ReactNode;
  };
}

export interface DataRowResult {
  data: DataRow[];
  marker: string | null;
}

export interface InfiniteScrollTableProps {
  headers: Header[];
  loadMoreData: (marker: string | null, sortValue: string | null, sortAsc: boolean) => Promise<DataRowResult>;
  loadingComponent?: React.ReactNode;
  noDataMessage?: string;
  initialMarker?: string;
  initialSortKey?: string;
  initialSortAsc?: boolean;
  autoLoad?: boolean;
  loadMoreButtonText?: string;
  tableClass?: string;
}

export const InfiniteScrollTable: React.FC<InfiniteScrollTableProps>;


export const IntegerInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>>;


export const NumericInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>>;


export interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  eventGivesRawDigits?: boolean;
}

export const PhoneInput: React.FC<PhoneInputProps>;


export interface ZipInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  eventGivesRawDigits?: boolean;
}

export const ZipInput: React.FC<ZipInputProps>;


export interface ModalProps {
  trigger: React.ReactNode;
  closeClass?: string;
  dialogClass?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps>;


export interface MultiSelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  options: Option[];
  onUpdate?: (selectedValues: string[]) => void;
  defaultValue?: string[];
  width?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
}

export const MultiSelect: React.FC<MultiSelectProps>;


export interface PopoverProps {
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  closeOnContentClick?: boolean;
  disableScrollWhileOpen?: boolean;
  distance?: number;
  zIndex?: number;
  children: React.ReactNode;
}

export const Popover: React.FC<PopoverProps>;


export interface SortableTableDataRow {
  [key: string]: any;
  overrides?: {
    [key: string]: React.ReactNode;
  };
}

export interface SortableTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  headers: Header[];
  data: SortableTableDataRow[];
  initialSortKey?: string;
  initialSortAsc?: boolean;
  tableClass?: string;
}

export const SortableTable: React.FC<SortableTableProps>;


export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps>;
