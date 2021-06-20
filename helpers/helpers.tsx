import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import CoursesSvg from "../public/icons/courses.svg";
import {TopLevelCategory} from "../interfaces/page.interface";
import ServicesSvg from "../public/icons/services.svg";
import BookSvg from "../public/icons/book.svg";
import BoxSvg from "../public/icons/box.svg";
import React from "react";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        route: 'courses',
        name: 'Курсы',
        icon: <CoursesSvg/>,
        id: TopLevelCategory.Courses
    },
    {
        route: 'services',
        name: 'Сервисы',
        icon: <ServicesSvg/>,
        id: TopLevelCategory.Services
    },
    {
        route: 'books',
        name: 'Книги',
        icon: <BookSvg/>,
        id: TopLevelCategory.Books
    },
    {
        route: 'products',
        name: 'Продукты',
        icon: <BoxSvg/>,
        id: TopLevelCategory.Products
    }
];

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');