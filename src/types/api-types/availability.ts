export interface Availability extends InputCreateAvailability {
 id: string
}
export interface InputCreateAvailability {
 dayOfWeek: string
 startTime: string
 endTime: string
 location: string
}
export interface InputUpdateAvailability
 extends Partial<InputCreateAvailability> {}
