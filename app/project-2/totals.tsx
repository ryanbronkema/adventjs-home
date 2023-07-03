export default function Totals(props: { 
  subtotal: number
}) {
  
  var taxTotal: number = props.subtotal * 0.07;
  var grandTotal: number = props.subtotal + taxTotal;

  return (
    <div className="totals">
      <div className="line-item">
        <div className="label">Subtotal:</div>
        <div className="amount price subtotal">${props.subtotal.toFixed(2)}</div>
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