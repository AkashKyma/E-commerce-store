import { cn } from '@/src/utils';

export function Toast({
  message,
  visible
}: {
  message: string;
  visible: boolean;
}) {
  return (
    <div
      className={cn(
        'pointer-events-none fixed bottom-6 right-6 z-50 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-soft transition duration-300',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      )}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
