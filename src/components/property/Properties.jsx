import React from 'react';

import './Properties.css'

const Properties = ({props}) => {
  const defaultInfo = [
    {name:'Type', value: props.type},
    {name:'Gender', value: props.gender},
    {name:'Status', value: props.status},
  ];

  return (
    <table>
      {defaultInfo.map((item) => (
        <tr className="Property">
          <td className="Property-name">{item.name}</td>
          <td className="Property-value">{item.value || '-'}</td>
        </tr>
      ))}
    </table>
  )
}

export default Properties
