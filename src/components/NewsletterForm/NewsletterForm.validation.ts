import * as yup from 'yup';

const newsletterMessages = {
    required: 'Email field is required.',
    email: `Whoops, make sure it's email.`,
}

const newsletterShema = yup.object().shape({
    email: yup
        .string()
        .email(newsletterMessages.email)
        .required(newsletterMessages.required),
})

export { newsletterShema, };