# Nested Form Example using React Hook Form

This project demonstrates how to handle nested forms using [React Hook Form](https://www.react-hook-form.com/) with TypeScript. Field validations within the form are managed by [Zod](https://zod.dev/). You can view the [Live Demo here](https://invoiceformtsformhook.netlify.app/).

## Form Structure

The form consists of two main parts:

- **Header**
- **Body**

### Header

The Header section includes basic details such as the title and publication date.

### Body

The Body contains the actionable part of the form, which has three nested levels:

- **Group**
  - **Task**
    - **Material**

## Form Submission

Upon submission, the form data is logged to the console.

## Inline Form Behavior

Within the form, `FormProvider` and `useForm` from React Hook Form are used to manage the internal state through React's Context API, ensuring seamless control of the form.

## Acknowledgements

- [React Hook Form Advanced Usage](https://www.react-hook-form.com/advanced-usage/#ConnectForm)
- [React Hook Form Tutorial by Code Genix](https://youtu.be/7anLE_RoDwU?si=V3JPxh_yBnLqSft9)
- [Zod Integration with React Hook Form](https://github.com/react-hook-form/resolvers#zod)
- [ChatGPT](https://chatgpt.com/)
