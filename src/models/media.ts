export interface Media {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: {
    amp_status: string;
  };
  description: {
    rendered: string;
  };
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: {
      thumbnail: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
      medium: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
      medium_large: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
      large: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
      postThumbnail: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
      full: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
    };
    image_meta: {
      aperture: string;
      credit: string;
      camera: string;
      caption: string;
      created_timestamp: string;
      copyright: string;
      focal_length: string;
      iso: string;
      shutter_speed: string;
      title: string;
      orientation: string;
      keywords: [];
    };
  };
  post: number;
  source_url: string;
  _links: {
    self: [
      {
        attributes: [];
        href: string;
      }
    ];
    collection: [
      {
        attributes: [];
        href: string;
      }
    ];
    about: [
      {
        attributes: [];
        href: string;
      }
    ];
    author: [
      {
        attributes: {
          embeddable: boolean;
        };
        href: string;
      }
    ];
    replies: [
      {
        attributes: {
          embeddable: boolean;
        };
        href: string;
      }
    ];
  };
}
