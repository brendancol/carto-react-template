import React from 'react';

export function CategoryWidgetUI(props) {
  return (
    <div>
      {props.data.map((d,i) => {
        return <div key={i}>{d.name}---->{d.value}</div>
      })}
    </div>
  )
}