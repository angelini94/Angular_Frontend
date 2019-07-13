import { Status } from './Status';
import { Role } from './Role';
import { Skill } from './Skill';

export class User {
  id: number;
  firstname: string;
  lastname: string;
  country: string;
  birthdate: Date;
  fileName?: string;
  role: Role;
  status: Status;
  skills: Skill[];
}
