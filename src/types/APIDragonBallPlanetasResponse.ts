export type APIDragonBallPlanetasResponse = {
  items: Item[];
  meta: Meta;
  links: Links;
};

export type Item = {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: null;
};

export type Links = {
  first: string;
  previous: string;
  next: string;
  last: string;
};

export type Meta = {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
};
