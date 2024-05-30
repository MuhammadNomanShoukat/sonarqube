import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as Yup from 'yup';


import "./contact-form.style.scss"

function ContactForm() {
    const professions = ['Developer', 'Designer', 'Other'];
    const formik = useFormik({
        initialValues: {
          name: '',
          phone: '',
          email: '',
          terms: false, // Change the default value to false
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .label('Full Name')
            .required("Required"),
          email: Yup.string()
            .email("Email must be a valid email")
            .required("Required"),
          phone: Yup.number()
            .required("Required"),
          terms: Yup.boolean()
            .oneOf([true], "You must accept the Terms and Conditions to proceed") // Validate that it's true
            .required("You must accept the Terms and Conditions to proceed"), // Also add a required validation
        }),
        onSubmit: function (values) {
          alert(`You are registered! Name: ${values.name}. Phone: ${values.phone}. Email: ${values.email}`);
        },
    });
    
    return (
        <div className='contact-form-wrapper'>
            <h5>Contact us for free setup</h5>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Full Name" className={`${formik.touched.name && formik.errors.name ? 'border-red' : null}`} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
                    {formik.touched.name && formik.errors.name && (
                        <span className='text-red'>{formik.errors.name}</span>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" name="phone" placeholder="Phone Number" className={`${formik.touched.phone && formik.errors.phone ? 'border-red' : null}`} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}/>
                    {formik.touched.phone && formik.errors.phone && (
                        <span className='text-red'>{formik.errors.phone}</span>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" placeholder="Email" className={`${formik.touched.email && formik.errors.email ? 'border-red' : null}`} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                    {formik.touched.email && formik.errors.email && (
                        <span className='text-red'>{formik.errors.email}</span>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="terms" label={<span>I have read and agree to <a href="#" target="_blank" title="Term and condition" className="term-and-condition">Terms of Service</a></span>} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.terms}/>
                    {formik.touched.terms && formik.errors.terms && (
                        <span className='text-red'>{formik.errors.terms}</span>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm
