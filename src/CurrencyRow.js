import React from 'react'
import ControlButton from './ControlButton'

export default function CurrencyRow() {
  return (
    <tr className='table__row'>
      <td><ControlButton /></td>
      <td>1</td>
      <td><div className='table__cell'><span className='table__currency-name'>Bitcoin</span><span className='table__currency-ticker'>BTC</span></div></td>
      <td>$6,929.82</td>
      <td className='table__percent_deleting'>-0.81%</td>
      <td>$7,175.07</td>
      <td>$119,150,835,874.47</td>
      <td>$2,927,959,461.18</td>
      <td>17,193,925 BTC</td>
      <td>21,000,000 BTC</td>
    </tr>
  )
}
