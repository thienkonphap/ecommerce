import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

function StarRating({ point }) {
  const fullStars = Math.floor(parseFloat(point));
  const halfStar = point % 1 !== 0;
  return (
    <div>
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon key={index} style={{ color: '#FDDA0D' }} />
      ))}
      {halfStar && <StarHalfIcon style={{ color: '#FDDA0D' }} />}
      {[...Array(5 - Math.ceil(point))].map((_, index) => (
        <StarIcon key={index} />
      ))}
            
    </div>
  );
}
export default StarRating