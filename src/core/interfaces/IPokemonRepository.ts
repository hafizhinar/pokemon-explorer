import { Pokemon } from '../entities/Pokemon';
import { PokemonDetail} from '../entities/PokemonDetail';

export interface PokemonListResult {
    pokemons: Pokemon[];
    total: number;
    hasNext: boolean;
}

export interface IPokemonRepository {
    /**
     * Get Paginated list of Pokemon
     * @param offset - Starting position
     * @param limit - Number of items to fetch
     **/
    getList(offset: number, limit: number): Promise<PokemonListResult>;

    /**
     * Get detailed information of a specific Pokemon
     * @param id - Pokemon ID
     **/
    getById(id: number): Promise<PokemonDetail>;

    /**
     * Search Pokemon by name
     * @param query - Search term
     **/
    searchByName(query: string): Promise<Pokemon[]>;
}
