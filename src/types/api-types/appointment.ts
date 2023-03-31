export interface appointiment {
    startTime: string;
    endTime: string;
    location?: string;
    date: string;
    psychologistId: string;
    patientId: string;
}

export interface therapySessionRequest
    {
      id:string,
      startTime: string,
      endTime: string,
      date: string,
      requesterId?:string,
      status: string,
      createdAt: string,
    }

    export interface therapySession {
        id?:string,
        startTime: string,                          
        endTime?:string,                          
        date: string,
    }