export default function Totals(props: { 
  subtotalSum: number
}) {
  
  var taxTotal: number = props.subtotalSum * 0.07;
  var grandTotal: number = props.subtotalSum + taxTotal;

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
  )
}