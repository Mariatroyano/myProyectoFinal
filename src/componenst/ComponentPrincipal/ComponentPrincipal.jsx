export const ComponentPrincipal = ({ TITULO, IMAGEN }) => {
  return (
    <div>
      <div className="title">{TITULO}</div>
      <div className="w-25 h-34">
        <img src={IMAGEN} alt={TITULO} />
      </div>
    </div>
  );
};
