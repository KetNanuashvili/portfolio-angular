export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly REACT = new Tag('React', '#FF66CC');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'bro#996633n');
    static readonly TYPESCRIPT = new Tag('TypeScript', '#009933'); 
    static readonly HTML = new Tag('html', '#FF9900');
    static readonly CSS = new Tag('css', '#009933');
    static readonly PHP = new Tag('php', '#3366FF');
  
    private constructor(private readonly key: string, public readonly color: string) {}
  
    toString() {
      return this.key;
    }
  }
  