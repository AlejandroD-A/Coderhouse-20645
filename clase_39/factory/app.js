class FrontEndDeveloper {
  constructor(name) {
    this.name = name;
    this.type = "frontend dev";
  }
}

class BackEndDeveloper {
  constructor(name) {
    this.name = name;
    this.type = "backend dev";
  }
}

class DeveloperFactory {
  create(name, type) {
    switch (type) {
      case 1:
        return new FrontEndDeveloper(name);
        break;
      case 2:
        return new BackEndDeveloper(name);
    }
  }
}

const developerFactory = new DeveloperFactory();
const developers = [];

developers.push(developerFactory.create("Guillermo", 1));
developers.push(developerFactory.create("Rene", 2));

console.log(developers);
