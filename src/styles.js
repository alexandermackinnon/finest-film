import styled from "styled-components";

// Home
export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 5rem 25rem;
  color: #011627;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: 700;
  }
  img {
    width: 200;
    height: 200;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

// Portfolio
export const HeaderSection = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: space-between;
  padding: 5rem 25rem;
  h1 {
    font-size: 10rem;
    color: #fcfdff;
  }
  p {
    color: #fcfdff;
    margin-left: 2rem;
  }
`;
