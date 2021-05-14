import api from "../api";

const getAllEtudiant = async (token) => {
  let data = await api.get("admin/students", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};

const deleteEtudiant = async (token, id_etudiant) => {
  let res = await api.delete("admin/students/" + id_etudiant, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data;
};

const getEtudiant = async (token, id_etudiant) => {
  let data = await api.get("admin/students/" + id_etudiant, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
const updateEtudiant = async (token, etudiant, id_etudiant) => {
  let data = await api.patch("admin/students/" + id_etudiant, etudiant, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
const banEtudiant = async (token, etudiant, id_etudiant) => {
  try {
    let data = await api.put("admin/students/ban/" + id_etudiant, etudiant, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
const unBanEtudiant = async (token, etudiant, id_etudiant) => {
  try {
    let data = await api.put("admin/students/unban/" + id_etudiant, etudiant, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
export {
  getAllEtudiant,
  deleteEtudiant,
  getEtudiant,
  updateEtudiant,
  banEtudiant,
  unBanEtudiant,
};
