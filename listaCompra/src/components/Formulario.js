import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const Formulario = ({addItem, filterText, filterCategory}) => {
  //USE STATE PARA AÑADIR DATOS
  const [value, setValue] = useState("")
  const [num, setNum] = useState(1)
  const [category, setCategory] = useState("Otro")
  //USE STATE PARA FILTRAR DATOS
  const [filtercategory, setFiltercategory] = useState ("All")
  const [filtertext, setFiltertext] = useState("")
  const handleChange = (e) => {
    e.preventDefault();
    let cosa = { id:uuidv4(), category: category, cantidad: num, stocked: true, name: value }
    addItem(cosa)
    setValue("")
  }
  useEffect(
    () => {
        filtertext == "" ? filterCategory(filtercategory) : filterText(filtertext, filtercategory)  
    }, [filtertext]
  )
  useEffect(
    () => {
      filterCategory(filtercategory)
    },[filtercategory]
  )
  return (
      <form onSubmit={handleChange}>
        <div class="row">
          <div class="col">
            {/* <input class="form-control" required value={value} type="text" placeholder="Añadir producto" onChange={(e) => setValue(e.target.value)} /> */}
            <div class="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" value={value} required placeholder="" onChange={(e) => setValue(e.target.value)}/>
              <label for="floatingInput">Nombre del producto <i class="bi bi-bag-fill"></i></label>
            </div>
          </div>
          <div class="col">
            {/* <input class="form-control" type="number" min="1" value={num} onChange={(e) => setNum(e.target.value)} /> */}
            <div class="form-floating mb-3">
              <input type="number" className="form-control" id="floatingInput" value={num} placeholder="" min={1} onChange={(e) => setNum(e.target.value)}/>
              <label for="floatingInput">Unidades</label>
            </div>
          </div>
        </div>
        <br></br>
        <label for="floatingInputInvalid">Categoría</label>
        <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Otro">Otro</option>
          <option value="Verduras" >Verduras</option>
          <option value="Frutas">Frutas</option>
          <option value="Carne">Carne</option>
          <option value="Pescado">Pescado</option>
        </select>
        <br></br>
        <div className='row'>
          <div className='row'>
            <div className='col'>
            <button type='submit' className="btn btn-light">Añadir </button>
            </div>
          </div>
          <div className='row'>
          <br></br>
          </div>
          <div className='col'>
            <input class="form-control" type="text" placeholder="Search" onChange={(e) => setFiltertext(e.target.value)} />
          </div>
          <div className='col'>
            <div className='row'>
              <select className="form-select" value={filtercategory} onChange={(e) => setFiltercategory(e.target.value)}>
                <option value="All">Todo</option>
                <option value="Otro">Otro</option>
                <option value="Verduras" >Verduras</option>
                <option value="Frutas">Frutas</option>
                <option value="Carne">Carne</option>
                <option value="Pescado">Pescado</option>
              </select>
            </div>
          </div>
        </div>   
      </form>
  )
}
 