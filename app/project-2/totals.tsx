import React, { useEffect, useState } from 'react';

export default function Totals(props: { subtotalSum: number }) {
  const [taxTotal, setTaxTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    const calculateTotals = () => {
      const tax = props.subtotalSum * 0.07;
      const total = props.subtotalSum + tax;

      setTaxTotal(tax);
      setGrandTotal(total);
    };

    calculateTotals();
  }, [props.subtotalSum]);

  return (
    <div className="totals">
      <div className="line-item">
        <div className="label">Subtotal:</div>
        <div className="amount price subtotal">${props.subtotalSum.toFixed(2)}</div>
      </div>
      <div className="line-item">
        <div className="label">Tax:</div>
        <div className="amount price tax">${taxTotal.toFixed(2)}</div>
      </div>
      <div className="line-item total">
        <div className="label">Total:</div>
        <div className="amount price total">${grandTotal.toFixed(2)}</div>
      </div>
    </div>
  );
}
