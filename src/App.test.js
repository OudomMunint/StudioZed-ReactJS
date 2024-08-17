import { render, screen } from '@testing-library/react';
import App from './App';
import ContactForm from './components/Contact';
import reportWebVitals from "./reportWebVitals";
import About from './components/About/About';

// Test home page content
test('Test home page content', () => {
  render(<App />);
  const linkElement1 = screen.getByText(/Welcome!/i);
  const linkElement2 = screen.getByText(/We are/i);
  const linkElements3 = screen.getAllByText(/Studio Zed/i);

  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElements3.length).toBeGreaterThan(0); // If atleast 1 match.
});

// Test contact form
test('Find contact form', async () => {
  render(<ContactForm />);
  const formTitle = await screen.findByText(/Get in touch!/i);
  const formFieldName = await screen.findByPlaceholderText(/Name/i);
  const formFieldEmail = await screen.findByPlaceholderText(/Email/i);
  const formFieldMessage = await screen.findByPlaceholderText(/Message/i);

  expect(formTitle).toBeInTheDocument();
  expect(formFieldName).toBeInTheDocument();
  expect(formFieldEmail).toBeInTheDocument();
  expect(formFieldMessage).toBeInTheDocument();
});

// Test form submit button
test('Find form submit button', () => {
  render(<ContactForm />);
  const submitButton = screen.getByRole('button', { name: /Submit/i });
  expect(submitButton).toBeInTheDocument();
});

// Test web vitals
test('Test web vitals', () => {
  reportWebVitals(metric => {
    console.log('Web Vitals metric:', metric);
    expect(metric).toBeDefined();
    expect(metric.name).toBeTruthy();
  });
});

// Test if about page is rendered
test('Test if about page is rendered', () => {
  render(<About />);
  const aboutPage = About();
  if (aboutPage != null) {
    console.log("About page is rendered");
  }
  expect(aboutPage).not.toBeNull();
});