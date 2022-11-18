import styled from "styled-components";

export const Containner = styled.div`
  align-items: center;
  padding: 30px;
  color: #555;
  .titulo {
    padding-left: 10px;
    padding-top: 10px;
    h2{
      color: #555;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
  align-items: center;
  padding: 20px 40px 0px 10px;


  

 .item-book {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  max-height: 450px;
  border-radius: 8px;

}
.item-book {
  background-color: transparent;
  text-decoration: none;
  color: #111;
}
a{
  text-decoration: none;
  color: #555;
}

.item-book .img-body  img {
  max-width: 100%;
  width: 100%;
  height: 200px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  padding:5px;

}

.content-descri{
  position: relative;
  height: 200px;

  .item-tilulo{
    font-size:15pt;
    color: #0c854e;
    padding: 20px;
    padding: 15px;
  }

  .item-discription{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-link-downlad{
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
      .redes-social{
        display: flex;
        p{
          padding: 0px 10px;
        }
      }
  }
}


`;
