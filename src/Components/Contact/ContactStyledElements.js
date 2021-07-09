import styled from "styled-components";
import { Heading as H } from "../Background/BackgroundStyledElements";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #dbf4a7;
  user-select: none;
  height: 700px;
  width: 100%;
  padding-top: 30px;
  user-select: none;
  padding-bottom: 30px;

  @media screen and (max-width: 640px) {
    height: fit-content;
  }
`;

export const Heading = styled(H)`
  text-decoration: none;
`;

export const ContactGrid = styled.div`
  display: grid;
  margin-top: 12px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: fit-content;
  justify-content: center;
  width: 60%;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: fit-content;
    width: 80vw;
  }
`;

export const ContactForm = styled.div`
  padding: 10px 10px;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  label {
    color: black;
    display: inline-block;
    width: 100px;
    font-weight: 500;
    font-size: 16px;

    @media screen and (max-width: 640px) {
      text-align: center;
    }
  }

  input,
  textarea,
  select {
    padding: 15px 10px;
    color: #eee;
    background: #373233;
    border: 0;
    outline: none;
    font-size: 14px;
    line-height: 14px;
    width: 300px;
  }

  input:focus,
  textarea:focus,
  select:focus {
    color: #fff;
    background-color: grey;
  }

  input::placeholder,
  textarea::placeholder {
    color: #dee1dd;
    opacity: 70%;
  }

  textarea {
    width: 300px;
    height: 200px;
  }
`;

export const Field = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 25%;
  border: 3px solid #373233;
  border-radius: 20px;
  background: #373233;
  color: #dbf4a7;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background: #dbf4a7;
    color: #373233;
    transform: scale(1.05);
    transition: 0.1s all ease-in;
  }
`;

export const ContactDetails = styled.div`
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: fit-content;
  border: 3px solid black;
  border-radius: 15px;
  height: fit-content;
  margin-top: 25px;
  box-shadow: 0px 0px 5px #181818;

  @media screen and (max-width: 640px) {
    margin-top: 10px;
    justify-content: center;
    justify-self: center;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    margin-top: 5px;
    font-size: 14px;
  }
`;

export const Address = styled(FaHome)`
  margin-top: 3px;
  margin-right: 10px;
`;

export const Phone = styled(FaPhoneAlt)`
  margin-top: 3px;
  margin-right: 10px;
  font-size: small;
`;

export const Email = styled(MdEmail)`
  margin-top: 3px;
  margin-right: 10px;
`;

export const ContactDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
