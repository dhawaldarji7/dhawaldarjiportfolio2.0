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
  height: auto;
  padding-top: 30px;
  user-select: none;
  padding-bottom: 30px;
`;

export const Heading = styled(H)`
  text-decoration: none;
`;

export const ContactGrid = styled.div`
  display: grid;

  grid-template-columns: 2fr 1fr;
  grid-template-rows: 80%;
  height: 700px;
  width: 70%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: 75%;
    width: 80vw;
  }
`;

export const ContactForm = styled.div`
  padding: 10px 10px;

  height: auto;
`;

export const Form = styled.form`
  label {
    margin: 10px 10px;
    color: black;
    display: inline-block;
    width: 100px;
    font-weight: 500;
    font-size: 16px;
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
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
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
