import LayoutAuth from '@/components/Layout/LayoutAuth';

export default function layout({ children }: { children: React.ReactNode }) {
  return <LayoutAuth>{children}</LayoutAuth>;
}
