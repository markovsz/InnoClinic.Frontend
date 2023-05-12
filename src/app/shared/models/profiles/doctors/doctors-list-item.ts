import { OfficeAddress } from "../../office-address"
import { SpecializationMin } from "../../specialization-min"

export interface DoctorsListItem {
    id: string,
    photoId: string,
    firstName: string,
    lastName: string,
    middleName: string,
    spectialization: SpecializationMin
    office: OfficeAddress
    status: string,
    dateOfBirth: Date,
    experience: number
}
