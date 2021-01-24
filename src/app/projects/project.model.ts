export interface Project {
  owner_id: string;
  url: string;
  html_url: string;
  columns_url: string;
  id: number;
  node_id: string;
  name: string;
  body: string;
  number: number;
  state: string;
  creator: Creator;
  created_at: Date;
  updated_at: Date;
}

export interface Creator {
  login: string;
  id: number;
  nodeId: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  receivedEvents_url: string;
  type: string;
  site_admin: boolean;
}
