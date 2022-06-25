export default function Blog({ itemx }) {
  return (
    <div>
      <h1> Blog</h1>
      <ul>
        {itemx.map((c)=>{
(
  <li key={c.id}>
    <label> {c.body}</label>
    <label>{c.title} </label>

    </li>
)
        })}


      </ul>
    </div>
  );
}
