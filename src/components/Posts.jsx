import { Posts } from "./database/posts"
import '../app.css'
export function Post() {
    return (
      <div>
        {Posts.map((post) => (
          <div key={post.id} className="post">
            <h1>{post.title}</h1>
            <h4>{post.body}</h4>
          </div>
        ))}
      </div>
    )
  }