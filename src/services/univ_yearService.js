import api from "api";
const addYear = async (year, token) => {
  let data = await api.post("admin/uniyears", year, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
const getAllYear = async (token) => {
  let data = await api.get("admin/uniyears", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
const updateYear = async (token, id_year, year) => {
  let data = await api.put(
    "admin/uniyears/" + id_year,
    { ...year },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data.data;
};
export { addYear, getAllYear, updateYear };
