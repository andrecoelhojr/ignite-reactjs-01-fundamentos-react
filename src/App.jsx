import { Header } from "./components/Header";
import { Post } from "./Post";

import "./style.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="André Coelho"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat autem illo reprehenderit in provident voluptates ipsum culpa asperiores harum sapiente officia quisquam quae ea, assumenda natus libero unde? Dicta!"
      />
      <Post author="Ana Carolina" content="Linda demais!! <3" />
      <Post author="Bernardo" content="É uma criança!! <3" />
    </div>
  );
}
