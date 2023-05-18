export interface PatientProfile {
    id: string,
    firstName: string,
    lastName: string,
    middleName: string,
    phoneNumber: string,
    isLinkedToAccount: boolean,
    birthDate: Date,
    accountId: string
}
