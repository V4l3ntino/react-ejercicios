import React from 'react'

export const TableRow = ({item, deleteItem}) => {
  return (
    <tr>
        <td>{item.name}</td>
        <td>{item.cantidad}</td>
        <td>{item.category}</td>
        <td><button class="btn btn-danger" onClick={() => deleteItem(item.id)}><i class="bi bi-trash-fill"></i></button></td>
    </tr>
  )
}
