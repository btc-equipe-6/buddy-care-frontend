import Api from "helpers/Api/axios-config";
import { appointiment } from "types/api-types/appointment";
import { Patient, sentimentAnalysisPacient } from "types/api-types/patients";

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
      console.log("foi")
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },
  creatSentimentAnalise: async (post:sentimentAnalysisPacient) => {
    console.log(localStorage);
    try {
      const newPost = await Api.post("/Sentiment", post);
      return newPost;
    } catch (err) {
      console.log(err);
    }
  },
  therapysection:async (solicitation:appointiment) => {
    try {
      const newSolicitation = await Api.post("/therapy-request", solicitation);
      return  newSolicitation;
    } catch (err) {
      console.log(err);
    }
  },
  }
    
  

