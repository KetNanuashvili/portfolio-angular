export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly REACT = new Tag('React', 'blue');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'brown');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'green');
  
    private constructor(private readonly key: string, public readonly color: string) {}
  
    toString() {
      return this.key;
    }
  }
  