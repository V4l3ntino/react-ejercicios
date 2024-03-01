import React, { useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';
import { v4 as uuidv4 } from 'uuid';
import { TableRow } from './components/TableRow';
import { Table } from './components/Table';

export const App = () => {
  // Verificar si hay datos almacenados en el localStorage y obtenerlos
  const storedData = JSON.parse(localStorage.getItem('datos')) || [];
  const [cosas, setCosas] = useState(storedData);
  const [filter, setFilter] = useState([])

  // Almacenar los datos actualizados en el localStorage cada vez que el estado cambie
  useEffect(() => {
    localStorage.setItem('datos', JSON.stringify(cosas));
  }, [cosas]);
  useEffect(() => {
    if(storedData.length === 0){
      let products = [
        { id:uuidv4(), category: "Frutas", cantidad: "1", stocked: true, name: "Manzana" },
        { id:uuidv4(), category: "Frutas", cantidad: "1", stocked: true, name: "Fruta del dragón" },
        { id:uuidv4(), category: "Frutas", cantidad: "2", stocked: false, name: "Maracuyá" },
        { id:uuidv4(), category: "Verduras", cantidad: "2", stocked: true, name: "Espinaca" },
        { id:uuidv4(), category: "Verduras", cantidad: "4", stocked: false, name: "Calabaza" },
        { id:uuidv4(), category: "Verduras", cantidad: "1", stocked: true, name: "Guisantes" }
      ]
      localStorage.setItem('datos', JSON.stringify(products))
    }
  }, [])

  const addItem = (item) => {
    setCosas([...cosas, item]);
  };

  const deleteItem = (id) => {
    setCosas(cosas.filter(item => item.id !== id));
    setFilter(filter.filter(item => item.id !== id));
  };

  const filterText = (filterText, category) => {
    if (category !== "All") {
      const productsFilter = filter.filter(item => {
        return item.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) !== -1
      })
      productsFilter.length > 0 ? setFilter(productsFilter) : productsFilter
    } else {
      const productsFilter = cosas.filter(item => {
        return item.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) !== -1
      })
      productsFilter.length > 0 ? setFilter(productsFilter) : productsFilter
    }
  }
  const filterCategory = (category) => {
    if (category == "All") {
      setFilter([])
    } else {
      const productsFilter = cosas.filter(item => {
        return item.category == category
      })
      productsFilter.length > 0 ? setFilter(productsFilter) : productsFilter
    }
  }

  return (
    <div className='container'>
      <h1 className="h1">LISTA DE LA COMPRA <i class='bx bxs-cart-add'></i></h1>
      <br></br>
      <Formulario addItem={addItem} filterText={filterText} filterCategory={filterCategory} />
      <div className='box'>
        <Table cosas={filter.length > 0 ? filter : cosas} deleteItem={deleteItem} />
      </div>
    </div>
  );
};
