export interface Response {
  Search: MovieApiResponse[];
  totalResults: string;
  Response: string;
}

export interface MovieApiResponse {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Movie {
  title: string;
  year: string;
  id: string;
  image: string;
}
