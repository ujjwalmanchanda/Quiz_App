import { Options } from "src/app/shared/models/option.model";

export class Question {
    Id: number;
    Description: string;
    correctAnswerId: number;
    options: Options[]
}