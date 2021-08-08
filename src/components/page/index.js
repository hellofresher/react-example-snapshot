import Container from '../container';

export default function Page({ tag }) {
  return (
    <div className="Page">
      <h3 className="Page__title">{ tag } Pictures</h3>

      <Container tag={tag} />
    </div>
  );
}
