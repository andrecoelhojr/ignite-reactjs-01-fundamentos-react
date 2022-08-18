import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="André Coelho"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat autem illo reprehenderit in provident voluptates ipsum culpa asperiores harum sapiente officia quisquam quae ea, assumenda natus libero unde? Dicta!"
          />
          <Post
            author="Ana Carolina"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eligendi corrupti ratione nostrum corporis nisi quia totam laudantium, maxime aperiam doloribus perferendis possimus cum illum quas cumque voluptatem eos deserunt."
          />
        </main>
      </div>
    </div>
  );
}
