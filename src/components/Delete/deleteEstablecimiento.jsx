import { deleteEstablecimiento } from "../../services/services";
import Swal from "sweetalert2";

export default function DeleteEstablecimiento({ id }) {
  const borrarEstablecimiento = async (e) => {
    //

    //  setShowValidation("was-validated");
    //   console.log(inputData);
    const data = await deleteEstablecimiento(id);
    //   console.log(data);

    // if (!data) {
    //   Swal.fire({
    //     title: "Todo Mal",
    //     text: "Hubo un error",
    //     icon: "error",
    //   });
    //   return;
    // }

    Swal.fire({
      title: "Todo ok",
      text: "Establecimiento eliminado exitosamente",
      icon: "success",
    });
  };
  // // await fetchUsers();
  return (
    <>
      <div>
        <button onClick={borrarEstablecimiento} className="btn btn-dark">
          ❌
        </button>
      </div>
    </>
  );
}
