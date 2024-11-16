import prompt from "../../../assets/GreenTips_Prompt.png";
import collections from "../../../assets/GreenTips_Collections.png";

export default function Features() {
  return (
    <section className="container mx-auto px-4 md:px-0 my-3 md:my-16" id="features">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-primary">Features</h1>
      <div className="grid md:grid-cols-2 gap-4 mt-3 md:mt-6 items-center md:mb-16">
        <div>
          <h2 className="text-lg md:text-2xl font-bold mb-3 text-primary">Get Smart Waste Management Tips from AI</h2>
          <p className="text-base text-slate-700">Enter information about the type and characteristics of your waste, and let our AI provide tailored recycling and waste management suggestions. Receive step-by-step guidance to help you handle waste efficiently and sustainably.</p>
        </div>
        <img src={prompt} alt="" className="border-2 rounded-lg" />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-3 md:mt-6 items-center">
        <img src={collections} alt="" className="border-2 rounded-lg" />
        <div className="order-first md:order-last">
          <h2 className="text-lg md:text-2xl font-bold mb-3 text-primary"> Save & Manage AI Recommendations</h2>
          <p className="text-base text-slate-700">Save the AI-generated tips for future reference. Easily manage your saved recommendations, edit as needed, and view your complete collection. Everything is organized in one place to help you track your waste management actions effortlessly.</p>
        </div>
      </div>
    </section>
  )
}
