export interface Patient {
    id: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    age: number;
    gender: string;
    emergencyContact: string;
  }

  export interface PatientDetails {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    age: number;
    gender: string;
    emergencyContact: string;
  }

  export interface sentimentAnalysisPacient{
    patientId:string;
    txt:string;
    createdAt?:string;
  }