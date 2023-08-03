import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsuario } from "../../services/services";
import Table from "../../components/Table/table";
import Swal from "sweetalert2";
import EditUser from "../../components/Edit/editUser";

export default function Home() {
  const [users, setUsers] = useState([]);

  const history = useNavigate();

  const fetchUsers = async () => {
    const data = await getUsuario();

    if (!data) {
      Swal.fire({
        title: "Todo Mal",
        text: "Hubo un error al traer los usuarios",
        icon: "error",
      });
      return;
    }

    setUsers(data);
  };

  const redirectToCreateUser = () => history("sign-up");

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    {
      text: "Nombre",
      key: "name",
    },
    {
      text: "Email",
      key: "email",
    },
    {
      text: "Avatar",
      key: "avatar",
      render: (row) => {
        return (
          <img className="rounded-circle" width={40} alt="" src={row.avatar} />
        );
      },
    },
    {
      text: "Password",
      key: "password",
    },
    {
      text: "Terminos",
      key: "terms",
      render: (row) => {
        return <p className="text-center">{row.terms ? "✅" : "❌"}</p>;
      },
    },
    {
      text: "Acciones",
      key: "id",
      render: (row) => {
        return (
          <div className="d-flex justify-content-around">
            <EditUser id={row.id} fetchUsers={fetchUsers} />
            <button className="btn btn-dark">❌</button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="container">
        <div className="mt-5">
          <div className="row">
            <div className="col-md-6">
              <h1>Lista de usuarios</h1>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <button
                onClick={redirectToCreateUser}
                className="btn btn-warning"
              >
                Crear usuario
              </button>
            </div>
          </div>
          <Table rows={users} columns={columns} />
        </div>
      </div>
    </>
  );
}
