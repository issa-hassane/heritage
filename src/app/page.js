import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1 className={styles.testFont}>Heritage Haven</h1>
        <p></p>
        <button className="btn btn-primary bg-blue-secondary box-shadow rounded-pill px-4">
          button
        </button>
        <div className="mt-5">
          <p className="fw-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            laboriosam fugiat optio fugit, at dolorem rerum voluptatem saepe
            facere tempore libero modi accusantium sequi vitae earum nam natus
            sunt eius?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            laboriosam fugiat optio fugit, at dolorem rerum voluptatem saepe
            facere tempore libero modi accusantium sequi vitae earum nam natus
            sunt eius?
          </p>
        </div>
      </div>
    </main>
  );
}
