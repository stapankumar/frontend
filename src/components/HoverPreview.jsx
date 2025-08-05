import './HoverPreview.css';

export default function HoverPreview({ children, title, description, onExplore }) {
  return (
    <div className="hover-preview-wrapper">
      {children}
      <div className="hover-popup">
        <div className="hover-popup-inner">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="hover-preview-content">
            <button className="preview-cta" onClick={onExplore}>Explore Now 🚀</button>
          </div>
        </div>
      </div>
    </div>
  );
}
