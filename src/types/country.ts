export interface Country {
    name: {
        official: string
    },
    currencies?: {
        [key: string]: {
            code: string;
            name: string;
            symbol: string
        }
    },
    population: number,
    capital: string[],
    region: string,
    languages?: { [key: string]: string },
    flags: {
        png: string,
        svg: string
    },
    isFav: boolean
}

export type CountryState = {
    countries: Country[]
    searchedCountries: Country[]
    loading: boolean
    error: boolean

  }

export type SingleCountryState = {
    country: Country[]
    loading: boolean
    error: boolean
  }