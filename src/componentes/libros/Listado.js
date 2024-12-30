import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { mockData } from '../../hooks/mockData';

export const Listado = () => {
  let titulo = "Buscar";
  const [busqueda, setBusqueda] = useState('');
  const [librosFiltrados, setLibrosFiltrados] = useState(mockData);

  // Función para manejar el cambio en la búsqueda
  const manejarBusqueda = (e) => {
    const query = e.target.value;
    setBusqueda(query);

    // Filtrar los libros por título
    const librosFiltrados = mockData.filter((libro) =>
      libro.titulo.toLowerCase().includes(query.toLowerCase())
    );

    setLibrosFiltrados(librosFiltrados);
  };

  return (
    <>
      {/* Buscar libros... */}
      <aside className="lateral">
        <div className="search">
          <h3 className="title">{titulo}:{busqueda}</h3>
          <form>
            <input
              type="text"
              value={busqueda}
              onChange={manejarBusqueda}
              placeholder="Buscar por título"
            />
          </form>
        </div>
      </aside>

      {librosFiltrados.length > 0 ? (
        librosFiltrados.map((libro, index) => (
          <article key={libro.id} className="libros-item">
            <h3 className="title">{libro.titulo}</h3>
            <h3 className="title">{libro.autor}</h3>
            <h3 className="title">{libro.genero}</h3>
            <p className="description">{libro.descripcion}</p>
            <button className="edit">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="delete">
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="add-cart">
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </article>
        ))
      ) : (
        <h2>No se encontraron libros</h2>
      )}
    </>
  );
};

export default Listado;
