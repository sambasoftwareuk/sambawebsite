type IconName =
  | 'menu'
  | 'close'
  | 'arrow'
  | 'sparkles'
  | 'mobile'
  | 'speed'
  | 'code'
  | 'shop'
  | 'bolt';

type IconProps = {
  name: IconName;
  className?: string;
};

const paths: Record<IconName, string> = {
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'M6 6l12 12M18 6l-12 12',
  arrow: 'M5 12h14m-5-5 5 5-5 5',
  sparkles: 'M12 3l2.2 4.8L19 10l-4.8 2.2L12 17l-2.2-4.8L5 10l4.8-2.2L12 3z',
  mobile: 'M9 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm3 15h.01',
  speed: 'M5 16a7 7 0 1 1 14 0M12 12l4-4',
  code: 'M8 9l-4 3 4 3m8-6 4 3-4 3',
  shop: 'M3 7h18l-1 12H4L3 7zm4-2a5 5 0 0 1 10 0',
  bolt: 'M13 2 4 14h6l-1 8 9-12h-6l1-8z'
};

export function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
      <path d={paths[name]} />
    </svg>
  );
}
