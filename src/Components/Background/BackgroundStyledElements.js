import styled from "styled-components";
import { Heading as H } from "../About/AboutStyledElemenets";

export const BackgroundContainer = styled.div`
  background: #7d84b2;
  padding-top: 30px;
  user-select: none;
  padding-bottom: 30px;
  width: 100%;
`;

export const BackgroundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 40px;
`;

export const Item = styled.div`
  margin-left: 12vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
`;

export const Title = styled.div`
  display: flex;
  width: 100px;
  align-items: flex-start;
`;

export const Heading = styled(H)`
  display: flex;
  justify-content: center;
`;

export const Text = styled(H)`
  color: black;
  border: none;
  font-size: 22px;
`;

export const SecondaryText = styled(H)`
  color: #c0c0c0;
  border: none;
  font-size: 16px;
  font-style: italic;
  margin-top: -15px;
`;

export const Sub = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  margin-top: 3px;
`;

export const Subtext = styled(SecondaryText)`
  font-size: 14px;
  margin-right: 25px;
`;
