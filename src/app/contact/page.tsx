import ContactForm from '@/features/contact/components/ContactForm';

function ContactPage() {
  return (
    <div className='flex flex-col my-10 text-zinc-400 max-w-7xl mx-auto'>
      <h1 className='text-3xl md:text-5xl font-bold text-zinc-100'>
        Contact us
      </h1>

      <ContactForm />
    </div>
  );
}

export default ContactPage;
