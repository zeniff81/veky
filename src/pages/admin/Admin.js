import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";

function Admin() {
  return (
    <div className='admin'>
      <AdminHeader admin={true} subtitle='Tareas comunes' />

      <ul className='items'>
        <li>
          <Link className='btn btn-secondary' to='/admin/adminproducts'>
            Productos
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Admin;
