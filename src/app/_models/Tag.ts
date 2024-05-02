export class Tag{
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TYPESCRIPT = new Tag('Typescript','darkred');
    static readonly PYTHON = new Tag('Python','Blue');
    static readonly JAVA = new Tag('Java','orange');
    static readonly JAVASCRIPT = new Tag('JavaScript','orange');
    static readonly REACT = new Tag('React','blue');


    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}