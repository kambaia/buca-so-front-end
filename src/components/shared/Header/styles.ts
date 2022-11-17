import styled from 'styled-components';

export const Containner = styled.div`
   box-shadow: 2px 1px 10px #0c854e;
   width:100%;
   position: fixed;
   z-index:10;
   display: flex;
   background: #fff;

   li{
      list-style:none;
     color: #666;
     cursor:pointer;
   }

   .content{
      display: flex;
      align-items:center;
      justify-content: space-between;
      width: 100%;
      padding: 0 2rem;

      .private{
        display: flex;
        align-items:center;
        justify-content: space-between;
        gap:10px;
        
      }
      .login{
        display: flex;
        align-items:center;
        justify-content: space-between;
        width: 100px;
        background: #f00;
        li{
            cursor:pointer;
           span{
            margin-left:5px;
           }
        }
      }
   }
  
`;