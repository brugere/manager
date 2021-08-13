class Application {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  getId(): string {
    return this.id;
  }
}

export default Application;
