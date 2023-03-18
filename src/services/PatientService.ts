import Api from "helpers/Api/axios-config";
import { Patient } from "types/api-types/patients";

export const AllPatients = {
  AllPatients: async () => {
    try {
      const res = await Api.get("/patient");
      console.log(res)
      return res;
      
    } catch (error: any) {
      console.log(error);
    }
    
  },

  UserById: async (id: string) => {
    try {
      const res = await Api.get(`/patient/${id}`);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  CreatePatient: async (patient: Patient) => {
    try {
      const res = await Api.post("/patient", patient);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

};