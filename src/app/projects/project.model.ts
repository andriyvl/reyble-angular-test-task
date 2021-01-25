export class Project {
  htmlUrl: string;
  name: string;
  body: string;
  createdAt: Date;
  creator: Creator;
  // constructor(name: string, body: string, htmlUrl: string, createdAt: Date, creatorLogin: string, avatarUrl: string) {
  //   this.name = name;
  //   this.body = body;
  //   this.htmlUrl = htmlUrl;
  //   this.createdAt = createdAt;
  //   this.creator = new Creator(creatorLogin, avatarUrl);
  // }
}

export class Creator {
  login: string;
  avatarUrl: string;
  // constructor(login: string, avatartUrl: string) {
  //   this.login = login;
  //   this.avatarUrl = avatartUrl;
  // }
}
