export class Tag{
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TYPESCRIPT = new Tag('TypeScript','darkred');
    static readonly PYTHON = new Tag('Python','Blue');
    static readonly JAVA = new Tag('Java','orange');
    static readonly JAVASCRIPT = new Tag('JavaScript','orange');
    static readonly REACT = new Tag('React','blue');
    static readonly TALEND = new Tag('Talend','black');
    static readonly POWERBI = new Tag('Power BI','yellow');
    static readonly DJANGO = new Tag('Django','green'); 
    static readonly ELECTRON = new Tag('Electron','blue');
    static readonly SYMFONY = new Tag('Symfony','blue');

    



    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}