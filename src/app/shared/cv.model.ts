export class Entry {
  title: string;
  qualification: string;
  body: string;
  from: Date;
  until: Date;
}

export class Cv {
  education: Entry[];
  work: Entry[];
}
