import Container from '../container';

export default function SearchPage({ tag }) {
  return (
    <div className="Page">
      <h3 className="Page__title">{ tag } Images</h3>

      <Container tag={tag} />
    </div>
  );
}
