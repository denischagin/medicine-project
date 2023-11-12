import { IDistrict } from "@/entities/hospital";

export const DISTRICTS_MOCK: IDistrict[] = [
    {
        districtId: 1,
        districtName: "Центральный округ",
        regions: [
            {
                regionId: 1,
                regionName: "Костромская область",
                cities: [
                    { cityId: 0, cityName: "Кострома" },
                    { cityId: 1, cityName: "Буй" },
                    { cityId: 2, cityName: "Галич" },
                    { cityId: 3, cityName: "Железногорск" },
                    { cityId: 4, cityName: "Макарьев" }
                ]
            },
            {
                regionId: 2,
                regionName: "Ярославская область",
                cities: [
                    { cityId: 5, cityName: "Ярославль" },
                    { cityId: 6, cityName: "Рыбинск" },
                    { cityId: 7, cityName: "Углич" },
                    { cityId: 8, cityName: "Тутаев" },
                    { cityId: 9, cityName: "Данилов" }
                ]
            }
        ]
    },
    {
        districtId: 2,
        districtName: "Северо-Западный округ",
        regions: [
            {
                regionId: 1,
                regionName: "Ленинградская область",
                cities: [
                    { cityId: 10, cityName: "Санкт-Петербург" },
                    { cityId: 11, cityName: "Выборг" },
                    { cityId: 12, cityName: "Петрозаводск" },
                    { cityId: 13, cityName: "Кировск" },
                    { cityId: 14, cityName: "Луга" }
                ]
            },
            {
                regionId: 2,
                regionName: "Мурманская область",
                cities: [
                    { cityId: 15, cityName: "Мурманск" },
                    { cityId: 16, cityName: "Апатиты" },
                    { cityId: 17, cityName: "Североморск" },
                    { cityId: 18, cityName: "Кандалакша" },
                    { cityId: 19, cityName: "Полярные Зори" }
                ]
            }
            // Добавляем другие регионы Северо-Западного округа
            // ...
        ]
    }
];