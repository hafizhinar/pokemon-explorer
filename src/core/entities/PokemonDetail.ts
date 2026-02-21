import {Pokemon} from './Pokemon';

export interface PokemonStat {
    name: string;
    value: number;
}

export interface PokemonAbility {
    name: string;
    isHidden: boolean;
}

export class PokemonDetail extends Pokemon {
    private readonly _stats: PokemonStat[];
    private readonly _abilities: PokemonAbility[];
    private readonly _height: number;
    private readonly _weight: number;

    constructor(data: {
        id: number;
        name: string;
        imageUrl: string;
        types: string[];
        stats: PokemonStat[];
        abilities: PokemonAbility[];
        height: number;
        weight: number;
    }) {
        super({
            id: data.id,
            name: data.name,
            imageUrl: data.imageUrl,
            types: data.types,
        });

        this._stats = data.stats;
        this._abilities = data.abilities;
        this._height = data.height;
        this._weight = data.weight;
    }

    get stats(): PokemonStat[] {
        return [...this._stats];
    }

    get abilities(): PokemonAbility[] {
        return [...this._abilities];
    }

    get height(): number {
        return this._height;
    }

    get weight(): number{
        return this._weight;
    }

    getHeightInMeters(): string {
        return `${(this._height / 10).toFixed(1)}m`;
    }

    getWeightInMeters(): string {
        return `${(this._weight / 10).toFixed(1)}kg`;
    }

    getTotalStats(): number {
        return this._stats.reduce((total, stat) => total +stat.value, 0);
    }

    getStrongestStat(): PokemonStat | null {
        if (this._stats.length === 0) return null;
        return this._stats.reduce((max, stat) =>
            stat.value > max.value ? stat : max
        );
    }

}