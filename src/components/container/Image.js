export default function Image({ src, alt, ...props }) {
  return (
    <li>
      <img src={src} alt={alt} {...props} />
    </li>
  );
}
