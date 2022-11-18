import React, { useEffect, useState } from "react";
import { Containner, Content } from "./styles";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
import { IBook } from "types/BookInterface";
import Link from "next/link";
import Book from "../Book";
import BookItem from "../Book";

type propCard = {
  books: Array<IBook>;
};
export default function CardBox({ books = []}: propCard) {
  const token = '';
  const [activo, setActivo] = useState(false);
  const [correntActive, setCorrentActive] = useState("");

  const favorite = async (id: string) => {
    if (correntActive === id) {
      setActivo(!activo);
    }
  };
  return (
    <Containner>
      <div className="titulo">
        <h2>Novos books</h2>
      </div>
      <Content>
      <BookItem img={'https://shereads.com/wp-content/uploads/2019/02/81RitjfpepL.jpg'}/>
      <BookItem img="https://m.media-amazon.com/images/I/51MJ3L+0jdL.jpg"/>
      <BookItem img="https://media.self.com/photos/5a5f82f29a3040391a626062/master/w_1080,h_1599,c_limit/percyjackson.jpg"/>
      <BookItem img="https://fourminutebooks.com/wp-content/uploads/2016/06/best-motivational-books-14-617x1024.jpg"/>
      <BookItem img="https://m.media-amazon.com/images/I/91vrz34bUGL.jpg"/>
      <BookItem img="https://m.media-amazon.com/images/I/4197WRMJRcL.jpg"/>
        {books &&
          books.map((item, index) => {
              return (
                 <BookItem img="https://m.media-amazon.com/images/I/91vrz34bUGL.jpg" />
              );
          })}
      </Content>
      <div className="titulo">
        <h2>Livros de romance</h2>
      </div>
      <Content>
      <BookItem img={'https://shereads.com/wp-content/uploads/2019/02/81RitjfpepL.jpg'}/>
      <BookItem img="https://m.media-amazon.com/images/I/51MJ3L+0jdL.jpg"/>
      <BookItem img="https://media.self.com/photos/5a5f82f29a3040391a626062/master/w_1080,h_1599,c_limit/percyjackson.jpg"/>
      <BookItem img="https://fourminutebooks.com/wp-content/uploads/2016/06/best-motivational-books-14-617x1024.jpg"/>
      <BookItem img="https://m.media-amazon.com/images/I/91vrz34bUGL.jpg"/>
      <BookItem img="https://m.media-amazon.com/images/I/4197WRMJRcL.jpg"/>
        {books &&
          books.map((item, index) => {
              return (
                 <BookItem img="https://m.media-amazon.com/images/I/91vrz34bUGL.jpg" />
              );
          })}
      </Content>
    </Containner>
  );
}
