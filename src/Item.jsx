export default function Item({ listItem }) {
  return (
    <li>
      <div>
        <div>{listItem.name}</div>
        <img src={listItem.pictureUrl} alt={listItem.name} />
        <div>
          <p>{listItem.bio}</p>
        </div>
      </div>
    </li>
  );
}
