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
} from "./ContactStyledElements";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Heading>Contact</Heading>

      <ContactGrid>
        <ContactForm>
          <Form>
            <Field>
              <label htmlFor="Name">Name</label>
              <input type="text" placeholder="What can I call you?" />
            </Field>

            <Field>
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Where can I reach you?" />
            </Field>

            <Field>
              <label htmlFor="Name">Subject</label>
              <input type="text" placeholder="What's this about?" />
            </Field>

            <Field>
              <label htmlFor="Name">Message</label>
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
              <Button>Submit</Button>
            </Field>
          </Form>
        </ContactForm>
        <ContactDetails></ContactDetails>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;
