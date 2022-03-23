export interface Category {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: [];
  _links: Object;
}
export interface Object {
  self: link[];
  collection: link[];
  about: link[];
  wpPost_type: link[];
  curies: typeObjects[];
}

export interface typeObjects {
  href: string;
  name: string;
  templated: boolean;
}
export interface link {
  href: string;
}
