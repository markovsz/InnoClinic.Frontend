import { CreateDocument } from "../common/create-document"

export interface SignUpUser {
    photo: CreateDocument,
    email : string,
    password : string,
    reEnteredPassword: string
}
