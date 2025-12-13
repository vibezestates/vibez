import styled from "styled-components";
import bgLeaf from "../../assets/home/bgLeaf.png";

export const FloorPlansSection = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 480px;
    height: 650px;
    background-image: url(${bgLeaf});
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: contain;
    opacity: 0.18;
    z-index: 0;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1200px) {
    padding: 80px 0;

    &::before {
      width: 380px;
      height: 520px;
      opacity: 0.15;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 0;

    &::before {
      width: 280px;
      height: 400px;
      opacity: 0.12;
    }
  }

  @media (max-width: 480px) {
    &::before {
      width: 200px;
      height: 300px;
      opacity: 0.1;
    }
  }
`;

export const FloorPlansGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: start;
  gap: 80px;
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-family: "Maharlika", serif;
  font-size: 48px;
  font-weight: 400;
  text-transform: uppercase;
  color: #000;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;

  @media (max-width: 1024px) {
    width: 80%;
    max-width: 320px;
  }
`;

export const TabButton = styled.button`
  padding: 16px 20px;
  border-radius: 4px;
  border: 1px solid ${({ $active }) => ($active ? "#5E2E00" : "#000")};
  background-color: ${({ $active }) => ($active ? "#5E2E00" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #5E2E00;
    color: ${({ $active }) => ($active ? "#fff" : "#5E2E00")};
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const RightPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FloorImage = styled.img`
width: 100%;
max-width: 800px;
height: auto;
border-radius: 8px;
object-fit: contain;
box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
filter: blur(8px);
`;
