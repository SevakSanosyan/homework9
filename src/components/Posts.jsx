
import '../app.css'
import { Element } from './Element'
export function Post({Posts}) {
    return (
      <div>
        {
        
        Posts.map((post) => (
          <Element key={post.id} post={post} >

          </Element>
        ))
      }
      </div>
    )
  }