import Api from "helpers/Api/axios-config";

export const AllPsychologist = {
  AllPsychologists: async () => {
    try {
      const res = await Api.get("/psychologist", { method: "GET" });
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },
};