const url = "https://64377334894c9029e8be4c14.mockapi.io/usuarios";

export const getUsuario = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getEstablecimientos = async () => {
  try {
    const response = await fetch(
      "http://127.0.0.1:5000/establecimientos-generales"
    );
    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postUsuario = async (body) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) return false;

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postEstablecimiento = async (body) => {
  try {
    const formData = new FormData();
    formData.append("nombre", body.nombre);
    formData.append("tipoEstablecimiento", body.tipoEstablecimiento);
    formData.append("distrito", body.distrito);
    formData.append("direccion", body.direccion);
    formData.append("horarioLunes", body.horarioLunes);
    formData.append("horarioMartes", body.horarioMartes);
    formData.append("horarioMiercoles", body.horarioMiercoles);
    formData.append("horarioJueves", body.horarioJueves);
    formData.append("horarioViernes", body.horarioViernes);
    formData.append("horarioSabado", body.horarioSabado);
    formData.append("horarioDomingo", body.horarioDomingo);
    formData.append("fotoLogo", body.fotoLogo);
    formData.append("fotoLocal1", body.fotoLocal1);
    formData.append("fotoLocal2", body.fotoLocal2);
    formData.append("fotoLocal3", body.fotoLocal3);
    formData.append("fotoLocal4", body.fotoLocal4);
    formData.append("paginaWeb", body.paginaWeb);

    const response = await fetch(
      "http://127.0.0.1:5000/establecimientos-miInformacion",
      {
        method: "POST",
        // headers: {
        //   "content-type": "application/json",
        // },
        // body: JSON.stringify(body),
        body: formData,
      }
    );

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const putUsuario = async (id, body) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) return false;

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const putEstablecimiento = async (id, body) => {
  try {
    const formData = new FormData();
    formData.append("nombre", body.nombre);
    formData.append("tipoEstablecimiento", body.tipoEstablecimiento);
    formData.append("distrito", body.distrito);
    formData.append("direccion", body.direccion);
    formData.append("horarioLunes", body.horarioLunes);
    formData.append("horarioMartes", body.horarioMartes);
    formData.append("horarioMiercoles", body.horarioMiercoles);
    formData.append("horarioJueves", body.horarioJueves);
    formData.append("horarioViernes", body.horarioViernes);
    formData.append("horarioSabado", body.horarioSabado);
    formData.append("horarioDomingo", body.horarioDomingo);
    formData.append("fotoLogo", body.fotoLogo);
    formData.append("fotoLocal1", body.fotoLocal1);
    formData.append("fotoLocal2", body.fotoLocal2);
    formData.append("fotoLocal3", body.fotoLocal3);
    formData.append("fotoLocal4", body.fotoLocal4);
    formData.append("paginaWeb", body.paginaWeb);

    const response = await fetch(
      `http://127.0.0.1:5000/establecimiento-miInformacion/${id}`,
      {
        method: "PUT",
        // headers: {
        //   "content-type": "application/json",
        // },
        // body: JSON.stringify(body),

        body: formData,
      }
    );

    if (!response.ok) return false;

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteEstablecimiento = async (id) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/establecimiento-miInformacion/${id}`,
      {
        method: "DELETE",
        // headers: {
        //   "content-type": "application/json",
        // },
        // body: JSON.stringify(body),
      }
    );

    if (!response.ok) return false;

    // const data = await response.json();

    // return data;
  } catch (error) {
    console.error(error);
  }
};
