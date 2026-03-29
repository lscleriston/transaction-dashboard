import React from 'react';
import TransactionRow from './TransactionRow';
import { formatDayLabel } from '@/lib/tokens';

export default function DayGroup({ date, transactions = [], onUpdated }: any) {
  return (
    <div>
      <div className="py-2 px-3 bg-muted/10 rounded text-sm font-semibold">{formatDayLabel(date)}</div>
      <div className="mt-2 space-y-1">
        {transactions.map((t: any) => (
          <TransactionRow key={t.id} txn={t} onUpdated={onUpdated} />
        ))}
      </div>
    </div>
  );
}
