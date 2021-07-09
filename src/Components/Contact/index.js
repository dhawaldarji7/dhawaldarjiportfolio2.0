import React from "react";
import {
  ContactContainer,
  Heading,
  ContactGrid,
  ContactForm,
  ContactDetails,
  Form,
  Field,
  Button,
  Details,
  Address,
  Phone,
  ContactDetail,
  Email,
} from "./ContactStyledElements";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <Heading>Contact</Heading>

        <ContactGrid>
          <ContactForm>
            <Form>
              <Field>
                <label htmlFor="Name">
                  Name
                  <span>*</span>
                </label>
                <input type="text" placeholder="What can I call you?" />
              </Field>

              <Field>
                <label htmlFor="Email">
                  Email<span>*</span>
                </label>
                <input type="text" placeholder="Where can I reach you?" />
              </Field>

              <Field>
                <label htmlFor="Subject">Subject</label>
                <input type="text" placeholder="What's this about?" />
              </Field>

              <Field>
                <label htmlFor="Message">
                  Message<span>*</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Type your message here"
                  cols="100"
                  row="200"
                  onBlur=""
                  value=""
                />
              </Field>

              <Field>
                <label htmlFor="SubmitButton"></label>
                <Button>Submit</Button>
              </Field>
            </Form>
          </ContactForm>
          <ContactDetails>
            <span style={{ "font-weight": "500" }}>Contact Details</span>
            <Details>
              <span>Dhawal Darji</span>

              <ContactDetail>
                <Address />
                <span>Dover, NH</span>
              </ContactDetail>
              <ContactDetail>
                <Phone />
                <span>+1 (603)-205-9043</span>
              </ContactDetail>

              <ContactDetail>
                <Email />
                <span>dhawal.d7@gmail.com</span>
              </ContactDetail>
            </Details>
          </ContactDetails>
        </ContactGrid>
      </ContactContainer>
    </>
  );
};

export default Contact;
