export interface Patient {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    age: number;
    gender: string;
    emergencyContact: string;
  }
  export interface PatientDetails extends Patient {
    patients?: any[]
    availability?: any[]
    therapySession?: any[]
    therapySessionRequest?: any[]
    sentimentAnalysisPacient?: any[]
    sentimentAnalysisPsychologist?: any[]
    sentimentAnalysisEvolution?: any[]
   }

  export interface sentimentAnalysisPacient{
    patientId:string;
    txt:string;
    createdAt?:string;
  }