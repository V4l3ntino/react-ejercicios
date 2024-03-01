import React from 'react'
import { TableRow } from './TableRow'


export const Table = ({cosas, deleteItem}) => {
  return (
    <table className='table-dark table table-striped'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Categoría</th>
              <th>ㅤ</th>
            </tr>
          </thead>
          <tbody>
            {cosas.map(item => (
              <TableRow item={item} deleteItem={deleteItem} />
            ))}
          </tbody>
    </table>
  )
}
