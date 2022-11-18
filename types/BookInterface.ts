import { IAuthor } from "./AuthorInterface";
import { ICategory } from "./CategoryInterface";
import { IUser } from "./UserInterface";

export interface IBook {
    _id: string;
    cover: {
        thumbnail: string, name: string
    };
    representativeUser: IUser["_id"];
    author: Array<IAuthor>;
    title: string;
    publishLocation: string;
    issueDate: Date;
    PublishingCompany: string
    type: string
    language: string
    bookCode: string
    boxSize: number;
    textReading: boolean;
    evaluation?: Array<number>;
    numberOfpage: number;
    active: boolean;
    category: ICategory["_id"];
    yearOfLaunch: string;
    document: { format: string, size: string, url: string },
    createdAt: Date;
    updatedAt: Date;
}


