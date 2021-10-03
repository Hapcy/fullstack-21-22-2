import { Label } from '../entities/label';

export class LabelDto {
  id?: number;
  text?: string;

  constructor(label: Label) {
    this.text = label.text;
    this.id = label.id;
  }
}
