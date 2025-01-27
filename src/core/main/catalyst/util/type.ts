export type Status = {
  id: string;
  body: string;
  createdAt: string; // ISO8601
  user?: User;
  medias: Media[];
};

export type Media = {
  id: string;
  alt: string;
  url: string;
  metadata?: {
    width: number;
    height: number;
    isSensitive: boolean;
  };
};

export type User = {
  id: string;
  screenName: string;
  displayName: string;
  profile?: {
    iconUrl: string;
    bannerUrl: string;
    bio: string;
    website: string;
    additionalWebsites: string[];
  };
};

export type Reaction = {
  [symbol: string]: {
    count: number;
    hasSelfReaction: boolean;
    name: string;
    symbol: string;
    url: string;
  };
};
