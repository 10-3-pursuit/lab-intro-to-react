import ContactUserCard from "./ContactUserCard";

const Contacts = () => {
  return (
    <aside
      style={{
        border: "2px solid black",
        marginLeft: "100px",
        marginRight: "100px",
        padding: "50px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Contacts</h2>
      <ContactUserCard />
    </aside>
  );
};

export default Contacts;
