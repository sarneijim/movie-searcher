interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type?: string;
}

interface IShow {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  media_type?: string;
}

interface IActor {
  adult: false;
  gender: number;
  id: number;
  known_for: IMovie[] | IShow[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
  media_type?: string;
}

type IMedia = IMovie & IShow & IActor;

type CatalogState = {
  catalog: IMedia[];
  filter: string;
};

type CatalogAction = {
  type: string;
  catalog: IMedia[];
};

type DispatchType = (args: any) => CatalogAction;
