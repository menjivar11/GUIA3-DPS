import styles from "./page.module.css";
import Form from "@/app/components/Form";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <div>
          <p>Bienvenid@👋 Aqui podra realizar</p>
          <p>Su lista para ir al SuperMercado 🛒</p>
          <br></br>
          <Form></Form>
        </div>
      </div>
    </main>
  );
}
