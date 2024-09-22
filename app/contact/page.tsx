import Layout from "../components/Layout";
import ContactCard from "../components/ContactCard";

export default function Contact() {
  return (
    <Layout>
      <div className="pt-24 px-8 lg:px-20 min-h-screen flex items-center justify-center">
        <ContactCard />
      </div>
    </Layout>
  );
}
