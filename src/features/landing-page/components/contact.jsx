import Button from "../../../components/Button.jsx";
import Input from "../../../components/Input.jsx";
import TextAreaInput from "../../../components/Textarea.jsx";

export default function Contact() { 
  return (
    <div className="bg-primary">
    <section className="container mx-auto px-4 md:px-0 py-3 md:py-16 text-white" id="contact">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 md:gap-8 items-center">
        <div className="mt-3 md:mt-6 space-y-2 text-base">
          <p className="leading-loose">
            Have questions, feedback, or ideas to share? We’d love to hear from
            you! Connect with us for any inquiries about our platform,
            suggestions for improvement, or partnership opportunities. Your
            input is invaluable in helping us build a cleaner, greener future
            together.
          </p>
          <p className="font-semibold">Contact Information:</p>
          <p>📧 <span className="font-semibold ">Email</span>: andi.mahardika.mulya@gmail.com</p>
          <p>📞 <span className="font-semibold">Phone</span>: 1234-5678-9101</p>
          <p>Or simply fill out the form, and we’ll get back to you as soon as possible. Let&apos;s work together to make waste management smarter and more sustainable!</p>
        </div>

        <div className="space-y-4 mt-3 md:mt-6">
          <Input
            id="email"
            type="email"
            placeholder="Email"
            variant="neutral"
          />
          <TextAreaInput placeholder="Enter your message" rows={5} />
          <div className="mt-4 w-1/4">
            <Button variant="success" fullWidth>
              Send
            </Button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
