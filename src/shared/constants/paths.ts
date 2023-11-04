export enum paths {
    login = "/login",
    register = "/register",
    home = "/",
    hospitals = "/hospitals",
    hospitalCard = `/hospitals/:hospitalId`,
}

export const hospitalsCardById = (id: number | string) => `${paths.hospitals}/${id}`;
