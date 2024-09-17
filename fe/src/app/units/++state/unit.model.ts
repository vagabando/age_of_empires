
export type ages = 'All'|'Dark'|'Feudal'|'Castle'|'Imperial';
export interface Unit {
  id: number;
  name: string;
  description: string;
  expansion:string;
  age: ages;
  cost: ICost;
  build_time:number;
  movement_rate:number;
  line_of_sight:number;
  hit_points:number;
  armor:string;
  reload_time?:number;
  blast_radius?:number;
  armor_bonus?:string[];
  attack?:number;
  attack_delay?:number;
  range?:number;
  accuracy?:string
  attack_bonus?:string[];
  search_radius?:number;
}
interface ICost {
  Wood:number;
  Gold:number;
}
