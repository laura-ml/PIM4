import styled from 'styled-components';

export const BackgroundImageContainer = styled.div`
  background-image: url('https://www.marketing-apice.it/wp-content/uploads/2023/02/cop-articolo-ecommerce.jpg');
  background-size: cover;
  background-position: center center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0; 
  

  h1 {
    font-size: 5rem;
    font-weight: bold;
    color: black;
    margin-bottom: 2rem;
    padding: 6rem;
  }

  a {
    background-color: #2563eb;
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: background-color 0.3s ease;
    margin-top: 0;

    &:hover {
      background-color: #1d4ed8;
    }
  }
`;
