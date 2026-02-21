export class Pokemon{
    private readonly _id: number;
    private readonly _name: string;
    private readonly _imageUrl: string;
    private readonly _types: string[];

    constructor(data: {
        id: number;
        name: string;
        imageUrl: string;
        types: string[];
    }) {
        this._id = this.validateId(data.id);
        this._name = this.validateName(data.name);
        this._imageUrl = data.imageUrl;
        this._types = data.types;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    get types(): string[] {
        return [...this._types];
    }

    get displayName(): string {
        return this._name.charAt(0).toUpperCase() + this._name.slice(1);
    }

    private validateId(id: number): number {
        if (id <= 0) {
            throw new Error('Pokemon ID must be positive');
        }

        return id;
    }

    private validateName(name: string): string {
        if (!name || name.trim().length === 0) {
            throw new Error('Pokemon name cannot be empty');
        }

        return name;
    }

    isLegendary(): boolean {
        const legendaryIds = [144, 145, 146, 150, 151]
        return legendaryIds.includes(this._id);
    }

    getPrimaryTypeColor(): string {
        const typeColors: Record<string, string> = {
            fire: '#F08030',
            water: '#6890F0',
            grass: '#78C850',
            electric: '#F8D030',
        };
        return typeColors[this._types[0]] || '#A8A878';
    }
}

