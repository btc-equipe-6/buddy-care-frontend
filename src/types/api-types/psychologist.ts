export interface Psychologist {
 id: string
 name: string
 email: string
 crp: string
 phoneNumber: string
 role: string
 university?: string
 age?: number
 specialization?: string
 bio?: string
 state?: string
 city?: string
 street?: string
 fee?: number
}

export interface PsychologistDetails extends Psychologist {
psychologist?: any[]
 availability?: any[]
 therapySession?: any[]
 therapySessionRequest?: any[]
 sentimentAnalysisPacient?: any[]
 sentimentAnalysisPsychologist?: any[]
 sentimentAnalysisEvolution?: any[]
}

export interface InputCreatePsychologist {
 name: string
 email: string
 password: string
 crp: string
 phoneNumber: string
}

export interface InputUpdatePsychologist
 extends Partial<Omit<Psychologist, 'id' | 'role'>> {}
