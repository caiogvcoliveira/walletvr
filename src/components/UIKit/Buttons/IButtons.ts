export interface IButtonProps {
  testID?: string;
  label?: string;
  onPress?: () => void;
  color?: string;
  disabled?: boolean;
  backgroundColor?: string;
  colorLabel?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  align?: 'left' | 'center' | 'right';
  fontFamily?: 'PTSansCaption-Bold' | 'PTSansCaption-Regular';
  fontSize?: number;
  labelWeight?: 'normal' | 'bold' | '400' | '500' | '600' | '700' | '800';
  children?: React.ReactNode;
  decoration?: 'none' | 'underline' | 'line-through';
  lineHeight?: number;
  opacity?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
}
