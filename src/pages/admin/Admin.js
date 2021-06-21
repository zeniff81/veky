import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { useAuth } from "../../auth/Auth";

function Admin() {
  const { currentRole } = useAuth();

  return (
    <div className='admin'>
      <AdminHeader admin={true} subtitle='Tareas comunes' />

      <ul className='items'>
        {currentRole.includes("admin") ? (
          <li>
            <Link className='btn btn-secondary' to='/admin/adminproducts'>
              Productos
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default Admin;
