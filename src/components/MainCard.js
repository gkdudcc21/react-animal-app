const MainCard = ({ src, alt, handleHeartClick, choiceFavorite }) => {
  const heartIcone = choiceFavorite ? '💘' : '🤍'

  return (
    <div className="main-card">
      <img src={src} alt={alt} className="main-image" />
      <button onClick={handleHeartClick}>{heartIcone}</button>
    </div>
  );
}

export default MainCard;
