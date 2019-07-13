import { HeaderElement } from '../app/model/HeaderElement';

export const HEADERS: HeaderElement[] = [
  { columnName: 'id', columnLabel: 'idU', orderr: true},
  { columnName: 'firstname', columnLabel: 'Firstname', orderr: true },
  { columnName: 'lastname', columnLabel: 'LastName', orderr: true },
  { columnName: 'country', columnLabel: 'Country', orderr: true },
  { columnName: 'birthdate', columnLabel: 'BirthDate', orderr: true },
  { columnName: 'image', columnLabel: 'Image', orderr: false },
  { columnName: 'role.name', columnLabel: 'Role', orderr: true },
  { columnName: 'status.name', columnLabel: 'Status', orderr: true },
  { columnName: 'skills', columnLabel: 'Skills', orderr: false, param: 'name'}
];
