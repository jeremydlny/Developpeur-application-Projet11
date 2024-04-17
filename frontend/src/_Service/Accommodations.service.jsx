import AccommodationsListe from "../Data/accommodations.json";


const GetAllAccomadations = () => {
    return AccommodationsListe
}

const GetOneAccomadations = async (id) => {
    const accomadations = await AccommodationsListe.find(acco => acco.id === id)
    return accomadations
}

export const AccommodationsService = {
    GetAllAccomadations, GetOneAccomadations
}

export default AccommodationsService