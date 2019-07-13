import { Button } from '../app/model/Button';

export const BUTTONS: Button[] = [
  { class: 'btn btn-info btn-circle', type: 'button', icon: 'fa fa-save', action: '/detail/'},
  { class: 'btn btn-danger btn-circle', type: 'button', icon: 'fa fa-trash-o', click: 'delete(user)'}
];
