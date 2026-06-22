import { OrderSuccessBanner } from '@/components/order-success-banner';
import { createMockOrderNumber } from '@/src/utils';

export default function OrderSuccessPage({
  searchParams
}: {
  searchParams: { order?: string };
}) {
  const orderNumber = searchParams.order ?? createMockOrderNumber();

  return <OrderSuccessBanner orderNumber={orderNumber} />;
}
