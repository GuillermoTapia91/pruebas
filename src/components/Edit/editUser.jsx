import Swal from "sweetalert2";
import { putUsuario } from "../../services/services";

export default function EditUser({ id, fetchUsers }) {
  const showEditModal = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Editar Usuario",
      html: `<input id="swal-input1" placeholder="Nombre" class="swal2-input">
        <input id="swal-input2" placeholder="Email" class="swal2-input">
        <input id="swal-input3" placeholder="Password" class="swal2-input">
        

        `,

      // html: `<input id="swal-input1" placeholder="Nombre" class="swal2-input">
      //   <input id="swal-input2" placeholder="Email" class="swal2-input">
      //   <select id="swal-input3" placeholder="Nombre" class="swal2-input">
      //     <option value="">Seleccionar</option>
      //     <option value="BAR">bar</option>
      //     <option value="DISCOTECA">discoteca</option>
      //   </select>
      //   <input id="swal-input4" placeholder="Distrito" class="swal2-input">
      //   <input id="swal-input5" placeholder="Horario Lunes" class="swal2-input">
      //   <input id="swal-input6" placeholder="Horario Martes" class="swal2-input">
      //   <input id="swal-input7" placeholder="Horario Miercoles" class="swal2-input">
      //   <input id="swal-input8" placeholder="Horario Jueves" class="swal2-input">
      //   <input id="swal-input9" placeholder="Horario Viernes" class="swal2-input">
      //   <input id="swal-input10" placeholder="Horario Sabado" class="swal2-input">
      //   <input id="swal-input11" placeholder="Horario Domingo" class="swal2-input">
      //   <input type="file" id="swal-input12" class="swal2-input">
      //   <input id="swal-input12" placeholder="Link Pagina Web" class="swal2-input">

      //   `,

      focusConfirm: false,
      preConfirm: () => {
        return {
          name: document.getElementById("swal-input1").value,
          email: document.getElementById("swal-input2").value,
          password: document.getElementById("swal-input3").value,
        };
      },
    });

    const data = await putUsuario(id, formValues);
    if (!data) {
      Swal.fire({
        text: "Hubo un error",
        icon: "error",
      });
      return;
    }

    await fetchUsers();
  };

  return (
    <>
      <div>
        <button onClick={showEditModal} className="btn btn-dark">
          ✏
        </button>
      </div>
    </>
  );
}
