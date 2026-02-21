import { Pokemon } from '../entities/Pokemon';
import { PokemonDetail } from '../entities/PokemonDetail';

export interface IGetPokemonListUseCase {
    execute(page: number, limit: number): Promise<{
        pokemons: Pokemon[];
        currentPage: number;
        totalPages: number;
        hasNextPage: boolean;
    }>;
}

export interface IGetPokemonDetailUseCase {
    execute(id: number): Promise<PokemonDetail>;
}

export interface ISearchPokemonUseCase {
    execute(query: string): Promise<Pokemon[]>;
}