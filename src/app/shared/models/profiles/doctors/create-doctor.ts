import { CreateDocument } from "../../common/create-document"

export interface CreateDoctor {
    photo: CreateDocument,
    firstName: string,
    lastName: string,
    middleName: string,
    birthDate: Date,
    email: string,
    spectializationId: string,
    officeId: string
    careerStartYear: number,
    status: string,
}
