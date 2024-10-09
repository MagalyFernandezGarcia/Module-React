
export type CountryRequestResult = [{
    name: {
        common: string;
        official: string;
        nativeName: object;
    };
    tld: Array<string>;
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: object;
    idd: {
        root: string;
        suffixes: Array<string>;
    };
    capital: Array<string>;
    altSpellings: Array<string>;
    region: string;
    subregion: string;
    languages: object;
    latlng: Array<number>;
    landlocked: boolean;
    borders: Array<string>;
    area: number;
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    fifa: string;
    car: {
        signs: Array<string>;
        side: string;
    };
    timezones: Array<string>;
    continents: Array<string>;
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    coatOfArms: {
        png: string;
        svg: string;
    };
    startOfWeek: string;
    capitalInfo: {
        latlng: Array<number>;
    };
    postalCode: {
        format: string;
        regex: string;
    };
}]

export type Country = {
    name: string;
    official: string;
    shortName: string;
    currencies: [
        {
            "name": string;
            "symbol": string;
        }
    ];
    capital: string[];
    flag: string;
};